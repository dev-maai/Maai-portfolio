"use client";

import { useEffect, useRef, useState } from "react";

/* Signals wheel — a large dial centered off the left edge, ranking-signal labels
   arranged radially around its right arc. The rotor turns slowly (JS rAF so we can
   track angle); the label crossing the 3-o'clock point, next to the heading, is
   highlighted. Reduced-motion: static, first label active. An original build of the
   rotating-radial pattern — our own signals, styling and code. */
const SIGNALS = [
  "Core Web Vitals", "Entity authority", "Schema markup", "Crawl budget",
  "Internal linking", "E-E-A-T signals", "Index coverage", "Anchor text",
  "Topical depth", "Featured snippets", "Query fan-out", "Brand mentions",
  "Knowledge panel", "Semantic clusters", "Passage ranking", "LLM citations",
  "Answer coverage", "SERP features", "Cannibalisation", "Render budget",
  "Citation gaps", "Backlink velocity", "Content decay", "Canonical tags",
];

export default function Signals() {
  const rotorRef = useRef(null);
  const [active, setActive] = useState(0);
  const N = SIGNALS.length;
  const step = 360 / N;

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setActive(0); return; }
    const rotor = rotorRef.current;
    let angle = 0, last = null, raf, cur = -1, running = true;

    const tick = (t) => {
      if (!running) return;
      if (last == null) last = t;
      angle = (angle + (t - last) * 0.0045) % 360; // ~80s / revolution
      last = t;
      if (rotor) rotor.style.transform = `rotate(${angle}deg)`;
      // active = label whose absolute angle is nearest 3 o'clock (0deg)
      let best = 0, bestD = 999;
      for (let i = 0; i < N; i++) {
        const a = (((i * step + angle) % 360) + 360) % 360;
        const d = Math.min(a, 360 - a);
        if (d < bestD) { bestD = d; best = i; }
      }
      if (best !== cur) { cur = best; setActive(best); }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // pause while off-screen to save cycles
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; last = null; raf = requestAnimationFrame(tick); }
      else if (!e.isIntersecting) { running = false; cancelAnimationFrame(raf); }
    }, { threshold: 0 });
    if (rotor) io.observe(rotor.closest(".signals"));
    return () => { running = false; cancelAnimationFrame(raf); io.disconnect(); };
  }, [N, step]);

  return (
    <section className="signals" id="signals" aria-label="Signals we track">
      <div className="sig-wheel" aria-hidden="true">
        <div className="sw-rotor" ref={rotorRef}>
          {SIGNALS.map((s, i) => (
            <span
              key={i}
              className={`sw-label${i === active ? " on" : ""}`}
              style={{ transform: `rotate(${i * step}deg) translate(var(--sw-r), -50%)` }}
            >
              <b className="sw-dot" aria-hidden="true" />
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="sig-copy">
        <p className="kicker reveal">Signals we track</p>
        <h2 className="reveal">Make sense of results <em>from 400+ ranking signals.</em></h2>
        <p className="lede reveal">Rankings move on hundreds of inputs at once. We watch the ones that decide whether your buyers find you — on Google and in the answer engines.</p>
        <a className="btn contrast reveal" href="#contact">Book a complimentary call</a>
      </div>

      {/* static, wrap-friendly fallback shown on small screens */}
      <div className="sig-list wrap" aria-hidden="true">
        {SIGNALS.slice(0, 12).map((s, i) => <span className="sig" key={i}>{s}</span>)}
      </div>
    </section>
  );
}
