"use client";

import { useEffect, useRef, useState } from "react";

/* One card, two parts: business details (with a Cloudflare Turnstile bot check),
   then the Google Calendar booking slots, which unlock once the details are sent. */

const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1ONjy32yMCib4uQK5s2eNqB60GXNow_NlQBdXsMM4t7iq2r50DDxrJ115hbPfw3M86n7mOP7-a?gv=true";
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export const INDUSTRIES = ["Removals & Relocation", "Logistics", "Supply chain", "Real estate", "Other"];
export const BUDGETS = ["Under £2,000 a month", "£2,000 to £5,000 a month", "£5,000+ a month", "Not sure yet"];

export default function BookForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", industry: "", budget: "", need: "", company_url: "" });
  const [token, setToken] = useState(SITE_KEY ? "" : "none");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY) return;
    const render = () => {
      if (!window.turnstile || !widgetRef.current || widgetRef.current.dataset.rendered) return;
      widgetRef.current.dataset.rendered = "1";
      window.turnstile.render(widgetRef.current, {
        sitekey: SITE_KEY,
        callback: (t) => setToken(t),
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };
    if (window.turnstile) return render();
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.onload = render;
    document.head.appendChild(s);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const ready = form.name && form.email && form.company && form.website && token;

  async function submit(e) {
    e.preventDefault();
    if (!ready || status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(
          data.error === "verification_failed"
            ? "The human check did not pass. Please try it again."
            : "Please check the required fields and try again."
        );
        if (window.turnstile && widgetRef.current) window.turnstile.reset(widgetRef.current);
        if (SITE_KEY) setToken("");
        return;
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again, or email business@maai.agency.");
    }
  }

  const done = status === "done";

  return (
    <div className="bk-card">
      <form className="bk-part" onSubmit={submit} noValidate>
        <div className="bk-step"><span>1</span><h2>Your business</h2></div>
        <fieldset disabled={done}>
          <div className="bk-grid">
            <div className="bk-field"><label htmlFor="bk-name">Full name *</label><input id="bk-name" autoComplete="name" required value={form.name} onChange={set("name")} /></div>
            <div className="bk-field"><label htmlFor="bk-email">Work email *</label><input id="bk-email" type="email" autoComplete="email" required value={form.email} onChange={set("email")} /></div>
            <div className="bk-field"><label htmlFor="bk-company">Company *</label><input id="bk-company" autoComplete="organization" required value={form.company} onChange={set("company")} /></div>
            <div className="bk-field"><label htmlFor="bk-site">Website *</label><input id="bk-site" autoComplete="url" placeholder="company.co.uk" required value={form.website} onChange={set("website")} /></div>
            <div className="bk-field">
              <label htmlFor="bk-industry">Industry</label>
              <select id="bk-industry" value={form.industry} onChange={set("industry")}>
                <option value="">Choose your industry</option>
                {INDUSTRIES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="bk-field">
              <label htmlFor="bk-budget">Monthly marketing budget</label>
              <select id="bk-budget" value={form.budget} onChange={set("budget")}>
                <option value="">Choose a range</option>
                {BUDGETS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div className="bk-field">
            <label htmlFor="bk-need">What would you like help with?</label>
            <textarea id="bk-need" rows={3} placeholder="For example: more enquiries from organic search, showing up in AI answers" value={form.need} onChange={set("need")} />
          </div>
          {/* honeypot, hidden from people */}
          <div className="bk-hp" aria-hidden="true">
            <label htmlFor="bk-url">Leave this empty</label>
            <input id="bk-url" tabIndex={-1} autoComplete="off" value={form.company_url} onChange={set("company_url")} />
          </div>
          {SITE_KEY && <div className="bk-turnstile" ref={widgetRef} />}
          {error && <p className="bk-error" role="alert">{error}</p>}
          {!done && (
            <button className="btn amber bk-submit" type="submit" disabled={!ready || status === "sending"}>
              {status === "sending" ? "Sending…" : "Show available times"}
            </button>
          )}
        </fieldset>
        {done && <p className="bk-ok" role="status">Thanks, {form.name.split(" ")[0]}. Now pick a time below.</p>}
      </form>

      <div className="bk-divider" />

      <div className="bk-part">
        <div className="bk-step"><span>2</span><h2>Pick a time</h2></div>
        <div className={`bk-cal${done ? " is-open" : ""}`}>
          {done ? (
            <iframe src={BOOKING_URL} title="Book a strategy call with MAAI" loading="lazy" />
          ) : (
            <div className="bk-cal-lock">
              <p>Fill in your details above to see available times.</p>
              <p className="bk-cal-sub">Tuesday to Thursday, shown in your own time zone.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
