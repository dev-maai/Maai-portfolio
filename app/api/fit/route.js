/* Fit-check submissions.

   Two independent sinks, both optional, both attempted:
     1. FIT_SHEET_WEBHOOK — a Google Apps Script web-app URL that appends a row
        to a Google Sheet (see docs/fit-form-setup.md).
     2. RESEND_API_KEY    — emails the lead to the team.

   If neither is configured the route answers 503 so the form can fall back to a
   prefilled mailto instead of pretending the lead was captured. */

export const runtime = "nodejs";

const SHEET_WEBHOOK = process.env.FIT_SHEET_WEBHOOK;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.FIT_NOTIFY_TO || "business@maai.agency";
const NOTIFY_FROM = process.env.FIT_NOTIFY_FROM;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

const clean = (v) => String(v ?? "").trim().slice(0, 300);
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

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
    headers: {
      authorization: `Bearer ${RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM,
      to: [NOTIFY_TO],
      reply_to: row.email,
      subject: `Fit check: ${row.email}`,
      text: [
        `Email:    ${row.email}`,
        `Company:  ${row.size}`,
        `Traffic:  ${row.traffic}`,
        `Goal:     ${row.goal}`,
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

  /* honeypot: bots fill every field they find. Accept and drop silently so they
     don't learn the form rejected them. */
  if (clean(body.company_url)) return json({ ok: true });

  const row = {
    received: new Date().toISOString(),
    email: clean(body.email),
    size: clean(body.size),
    traffic: clean(body.traffic),
    goal: clean(body.goal),
    source: "fit-check",
  };

  if (!isEmail(row.email) || !row.size || !row.traffic || !row.goal) {
    return json({ ok: false, error: "invalid" }, 422);
  }

  const [sheet, mail] = await Promise.allSettled([toSheet(row), toEmail(row)]);
  const saved = [sheet, mail].some((r) => r.status === "fulfilled" && r.value === true);

  if (!saved) {
    const why = [sheet, mail]
      .filter((r) => r.status === "rejected")
      .map((r) => r.reason?.message)
      .join("; ");
    console.error("fit-check not captured:", why || "no sink configured");
    return json({ ok: false, error: "unconfigured" }, 503);
  }

  return json({ ok: true });
}
