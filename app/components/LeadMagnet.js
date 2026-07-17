"use client";

import { useState } from "react";
import { leadMagnet } from "../content";
import OwnershipDot from "./OwnershipDot";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* Front-end only, exactly as in the source — this never leaves the page.
     Wire it to a CRM/form endpoint before launch. */
  const submit = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="wrap magnet">
        <div>
          <p className="eyebrow">{leadMagnet.eyebrow}</p>
          <h2>
            The 2026 organic growth report for{" "}
            <span className="accent-italic">B2B logistics</span>.
          </h2>
          <p className="lede">{leadMagnet.lede}</p>
        </div>

        <div className="magnet-card">
          <p className="eyebrow">Inside the report</p>
          {leadMagnet.items.map((item, i) => (
            <div className="magnet-item" key={item}>
              <span className="n">0{i + 1}</span>
              <span>{item}</span>
            </div>
          ))}

          {!submitted ? (
            <form className="magnet-form" onSubmit={submit}>
              <label className="sr-only" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn amber" type="submit">
                {leadMagnet.cta}
              </button>
            </form>
          ) : (
            <div className="magnet-done">
              <p className="ok">
                On its way
                <OwnershipDot />
              </p>
              <small>Check your inbox in the next few minutes.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
