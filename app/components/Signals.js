"use client";

import { useState, useEffect, useRef } from "react";

/* Signals — a slowly-rotating "signal ring": upright chips orbit a labelled hub.
   Hover a chip and the ring pauses while a rounded tooltip explains the term in
   plain English (the visual doubles as a glossary). Upright text keeps it readable
   and reliably hoverable; positions are computed per frame so React never fights
   the transforms. Reduced-motion places a static ring; mobile shows a chip list. */
const SIGNALS = [
  { t: "Core Web Vitals", d: "Google's page-experience metrics — load speed, interactivity, visual stability." },
  { t: "Entity authority", d: "How strongly search engines associate your brand with a topic." },
  { t: "Schema markup", d: "Structured data that helps engines understand and feature your pages." },
  { t: "Internal linking", d: "Links between your own pages that pass authority and context." },
  { t: "E-E-A-T signals", d: "Experience, Expertise, Authority & Trust markers Google rewards." },
  { t: "Index coverage", d: "Which of your pages are actually indexed and eligible to rank." },
  { t: "Topical depth", d: "How comprehensively your content covers a subject area." },
  { t: "Featured snippets", d: "The answer box at the top of results — position zero." },
  { t: "Query fan-out", d: "How one search expands into many related sub-queries." },
  { t: "Knowledge panel", d: "The branded information box beside search results." },
  { t: "LLM citations", d: "Being cited as a source inside AI answers like ChatGPT and Gemini." },
  { t: "Answer coverage", d: "How often your content answers the questions buyers actually ask." },
  { t: "SERP features", d: "Rich result types — reviews, FAQs, sitelinks, images." },
  { t: "Backlink velocity", d: "The pace at which you earn new inbound links over time." },
  { t: "Content decay", d: "Older pages quietly losing traffic and rank if left untended." },
  { t: "Canonical tags", d: "Signals that tell engines which URL is the primary version." },
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
      cx = r.width * 0.12; cy = r.height / 2; ch = r.height;
      R = r.height * 0.4;
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
          <p className="kicker reveal">Signals we track</p>
          <h2 className="reveal">Make sense of <em>400+ ranking signals.</em></h2>
          <p className="lede reveal">
            Rankings move on hundreds of inputs at once — from Core Web Vitals to LLM
            citations. We track the ones that decide whether your buyers find you, and
            report what changed every month.
          </p>
          <p className="sig-hint reveal">Hover a signal to see what it means.</p>
          <a className="btn contrast reveal" href="#contact">Book a complimentary call</a>
        </div>

        <div className="sig-list" aria-hidden="true">
          {SIGNALS.map((s, i) => <span className="sig" key={i}>{s.t}</span>)}
        </div>
      </div>
    </section>
  );
}
