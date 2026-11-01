/* Book-a-call form submissions.

   1. Verifies the Cloudflare Turnstile token (TURNSTILE_SECRET_KEY).
   2. Sends the lead to the same optional sinks as the fit check:
      FIT_SHEET_WEBHOOK (Google Sheet row) and RESEND_API_KEY (email to the team).

   The calendar unlocks once the bot check passes, even if no sink is configured,
   so a visitor is never blocked from booking by our own plumbing. */

export const runtime = "nodejs";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || process.env.TURNSTILESECRETKEY;
const SHEET_WEBHOOK = process.env.FIT_SHEET_WEBHOOK;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.FIT_NOTIFY_TO || "business@maai.agency";
const NOTIFY_FROM = process.env.FIT_NOTIFY_FROM;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

const clean = (v, n = 300) => String(v ?? "").trim().slice(0, n);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET) return true; // not configured yet: do not block real visitors
  if (!token) return false;
  const form = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token });
  if (ip) form.set("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  const data = await res.json().catch(() => ({}));
  return data.success === true;
}

async function toSheet(row) {
  if (!SHEET_WEBHOOK) return false;
  const res = await fetch(SHEET_WEBHOOK, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(row),
  });
  return res.ok;
}

async function toEmail(row) {
  if (!RESEND_API_KEY || !NOTIFY_FROM) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: NOTIFY_FROM,
      to: [NOTIFY_TO],
      reply_to: row.email,
      subject: `Strategy call request: ${row.company || row.email}`,
      text: [
        `Name:     ${row.name}`,
        `Email:    ${row.email}`,
        `Company:  ${row.company}`,
        `Website:  ${row.website}`,
        `Industry: ${row.industry}`,
        `Budget:   ${row.budget}`,
        `Needs:    ${row.need}`,
        `Received: ${row.received}`,
      ].join("\n"),
    }),
  });
  return res.ok;
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // honeypot: accept silently so bots learn nothing
  if (clean(body.company_url)) return json({ ok: true });

  const ip = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (!(await verifyTurnstile(clean(body.token, 2048), ip))) {
    return json({ ok: false, error: "verification_failed" }, 400);
  }

  const row = {
    received: new Date().toISOString(),
    name: clean(body.name),
    email: clean(body.email),
    company: clean(body.company),
    website: clean(body.website),
    industry: clean(body.industry),
    budget: clean(body.budget),
    need: clean(body.need, 1500),
    source: "book-a-call",
  };

  if (!row.name || !isEmail(row.email) || !row.company || !row.website) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }

  const results = await Promise.allSettled([toSheet(row), toEmail(row)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);
  return json({ ok: true, delivered });
}
