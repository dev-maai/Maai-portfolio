"use client";

import { useState, useEffect, useRef } from "react";

/* Signals — a slowly-rotating "signal ring": upright chips orbit a labelled hub.
   Hover a chip and the ring pauses while a rounded tooltip explains the term in
   plain English (the visual doubles as a glossary). Upright text keeps it readable
   and reliably hoverable; positions are computed per frame so React never fights
   the transforms. Reduced-motion places a static ring; mobile shows a chip list. */
const SIGNALS = [
  { t: "Enterprise SEO", d: "Search programmes built for complex, multi-market organisations." },
  { t: "Technical SEO", d: "Crawlability, indexation, speed and the architecture underneath." },
  { t: "Content Strategy", d: "Search-led content mapped to real buyer intent and topical authority." },
  { t: "Answer Engine Optimisation", d: "Structuring content so ChatGPT, Perplexity and AI Overviews cite you." },
  { t: "Digital PR", d: "Earned coverage and mentions that build authority and referring links." },
  { t: "Link Building", d: "High-quality editorial links from publications your buyers already trust." },
  { t: "Local SEO", d: "Location-level visibility for depots, branches and service areas." },
  { t: "International SEO", d: "Hreflang, market targeting and content built for each region." },
  { t: "Analytics & Reporting", d: "Attribution and live reporting that ties organic back to pipeline." },
  { t: "Reputation Management", d: "Shaping what buyers find when they search your brand name." },
  { t: "AI Workflows", d: "Applying AI across research, production and QA without losing quality." },
  { t: "SEO Consulting", d: "Senior guidance for in-house teams running their own programme." },
];

export default function Signals() {
  const wheelRef = useRef(null);
  const rotorRef = useRef(null);
  const pausedRef = useRef(false);
  const [active, setActive] = useState(0);
  const [tip, setTip] = useState(null); // { i, x, y }
  const N = SIGNALS.length;

  useEffect(() => {
    const wheel = wheelRef.current, rotor = rotorRef.current;
    if (!wheel || !rotor) return;
    /* pivot at the cell's left edge → only the right semicircle shows, curving
       toward the copy. Chips stay upright (readable + hoverable); they fade as
       they approach the top/bottom and vanish on the hidden left half. */
    let R = 0, cx = 0, cy = 0, ch = 0;
    const measure = () => {
      const r = wheel.getBoundingClientRect();
      cx = r.width * 0.10; cy = r.height / 2; ch = r.height;
      R = r.height * 0.45;
    };
    const place = (ang) => {
      const kids = rotor.children, rad = Math.PI / 180;
      let best = 0, bd = 1e9;
      for (let i = 0; i < N; i++) {
        const a = (((i * (360 / N) + ang) % 360) + 360) % 360;
        const ar = a * rad;
        const cos = Math.cos(ar), sin = Math.sin(ar);
        const x = cx + cos * R, y = cy + sin * R;
        const el = kids[i];
        if (el) {
          el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%)`;
          let op = 0;
          if (cos > 0) { const vert = 1 - Math.abs(y - cy) / (ch * 1.05); op = Math.max(0, vert) * (cos < 0.2 ? cos / 0.2 : 1); }
          el.style.opacity = op.toFixed(2);
          el.style.pointerEvents = op > 0.35 ? "auto" : "none";
        }
        const d = Math.min(a, 360 - a);
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    };

    measure();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(place(0));
      window.addEventListener("resize", () => { measure(); place(0); });
      return;
    }

    let ang = 0, last = null, raf, cur = -1;
    const tick = (t) => {
      if (last == null) last = t;
      if (!pausedRef.current) {
        ang = (ang + (t - last) * 0.012) % 360;
        const best = place(ang);
        if (best !== cur) { cur = best; setActive(best); }
      }
      last = t;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [N]);

  const onEnter = () => { pausedRef.current = true; };
  const onLeave = () => { pausedRef.current = false; setTip(null); };
  const onChip = (i, e) => {
    const wr = wheelRef.current.getBoundingClientRect();
    const lr = e.currentTarget.getBoundingClientRect();
    setTip({ i, x: lr.left - wr.left, y: lr.top + lr.height / 2 - wr.top });
  };
  const highlight = tip ? tip.i : active;

  return (
    <section className="signals" id="signals" aria-label="Signals we track">
      <div className="wrap signals-grid">
        <div className="sig-wheel" ref={wheelRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <div className="sw-rotor" ref={rotorRef}>
            {SIGNALS.map((s, i) => (
              <button
                key={i}
                type="button"
                className={`sw-chip${i === highlight ? " on" : ""}`}
                onMouseEnter={(e) => onChip(i, e)}
                onFocus={(e) => { pausedRef.current = true; onChip(i, e); }}
                aria-label={`${s.t}: ${s.d}`}
              >
                {s.t}
              </button>
            ))}
          </div>
          {tip && (
            <div className="sw-tip" style={{ left: tip.x, top: tip.y }} role="tooltip">
              <b>{SIGNALS[tip.i].t}</b>
              <span>{SIGNALS[tip.i].d}</span>
            </div>
          )}
        </div>

        <div className="sig-copy">
          <h2 className="reveal">Why choose <em>us?</em></h2>
          <p className="lede reveal">
            We own your business growth and accountability. Every recommendation is
            backed by industry data. Every piece of work is reported. Every result is
            measured against agreed objectives.
          </p>
          <p className="sig-hint reveal">Hover a service to see what it covers.</p>
          <a className="btn contrast reveal" href="#contact">Book your discovery call</a>
        </div>

        <div className="sig-list" aria-hidden="true">
          {SIGNALS.map((s, i) => <span className="sig" key={i}>{s.t}</span>)}
        </div>
      </div>
    </section>
  );
}
