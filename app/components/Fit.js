"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "../lib/contact";

/* The form posts to /api/fit. If no capture sink is configured yet (or it is
   down) the API answers 503 and we hand the visitor a prefilled mailto rather
   than swallowing the lead.

   Note: the .reveal classNames below must stay constant across renders — the
   scroll observer adds .in to them, and re-writing className would wipe it and
   re-hide the element. State is expressed with `hidden`, never with a class. */
export default function Fit() {
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [fallback, setFallback] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (state === "sending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState("sending");

    try {
      const res = await fetch("/api/fit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
    } catch {
      const body = [
        "Hi MAAI team,",
        "",
        "I'd like a fit check.",
        "",
        `Company size: ${data.size || ""}`,
        `Monthly organic traffic: ${data.traffic || ""}`,
        `What matters most: ${data.goal || ""}`,
        `Work email: ${data.email || ""}`,
        "",
        "Thanks,",
      ].join("\n");
      setFallback(
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Fit check request")}&body=${encodeURIComponent(body)}`
      );
      setState("error");
    }
  }

  return (
    <>
      <section className="fit" id="fit-check">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ left: "-140px", top: "-120px" }}></span>
        <div className="wrap">
          <div className="fit-inner">
            <h2 className="reveal">Not sure if SEO is the right fit for you?<br /><em>Take the 60-second fit check.</em></h2>
            <p className="fit-lede reveal">Four quick questions. We'll tell you honestly whether organic is worth it for your business: what it would take, and when you'd see it. If it isn't a fit, we'll say so.</p>

            <form className="fit-form reveal" id="fitForm" onSubmit={onSubmit} hidden={state === "done"}>
              <div className="fit-grid">
                <label className="field sel">
                  <span>Company size</span>
                  <select name="size" required>
                    <option value="">Select…</option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </label>
                <label className="field sel">
                  <span>Monthly organic traffic</span>
                  <select name="traffic" required>
                    <option value="">Select…</option>
                    <option>Under 1,000</option>
                    <option>1,000 – 10,000</option>
                    <option>10,000 – 100,000</option>
                    <option>100,000+</option>
                  </select>
                </label>
                <label className="field sel">
                  <span>What matters most right now</span>
                  <select name="goal" required>
                    <option value="">Select…</option>
                    <option>More qualified pipeline</option>
                    <option>Getting cited in AI answers</option>
                    <option>Reducing paid ad spend</option>
                    <option>Recovering lost rankings</option>
                  </select>
                </label>
                <label className="field">
                  <span>Work email</span>
                  <input type="email" name="email" autoComplete="email" placeholder="you@company.com" required />
                </label>
              </div>

              {/* honeypot — hidden from people, irresistible to bots */}
              <input
                type="text"
                name="company_url"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <button className="btn amber fit-submit" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : <>Get my free fit report <i>&rarr;</i></>}
              </button>

              {state === "error" && (
                <p className="fit-note" role="alert">
                  We couldn&apos;t submit that automatically.{" "}
                  <a href={fallback}>Send it as an email instead</a> and we&apos;ll pick it up.
                </p>
              )}

              <p className="fit-alt">Or <a href="/#contact">book a free discovery call</a></p>
              <p className="fit-note">No pitch deck. No sales sequence. One honest answer.</p>
            </form>

            <div className="fit-done" id="fitDone" hidden={state !== "done"}>
              <div className="ic">&check;</div>
              <h3>Thanks, your fit check is on its way.</h3>
              <p>We'll send a short, honest assessment within one business day. If organic isn't right for you, we'll tell you that too.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
