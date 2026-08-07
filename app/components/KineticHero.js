"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/* KineticHero — a Pixis-style pinned stage. The section is tall; an inner layer
   sticks to the viewport while you scroll, so the giant headline visibly drifts
   diagonally (corner to corner, downward) across the screen. Big tilted "note"
   cards float over it and reveal their copy on HOVER (cream → dark). A hand-drawn
   arrow draws itself in as you scroll, pointing to the CTA. MAAI-themed. */
const CARDS = [
  {
    slot: 1,
    k: "Focus",
    h: "We go deep, not wide",
    p: "We commit to a handful of sectors and learn them cold — the way your buyers phrase a problem, the questions they put to an AI, the terms that actually convert. A generalist restarts from zero on every account; we start from years in.",
  },
  {
    slot: 2,
    k: "Honesty",
    h: "Reported in the open",
    p: "Every month you see the positions that moved and the ones that didn't, tied back to pipeline. No vanity dashboards, no cherry-picked wins — the real picture, and the fix we're shipping next.",
  },
  {
    slot: 3,
    k: "Compounding",
    h: "Built to last",
    p: "We build assets that hold their ground and gain value year over year. The visibility you earn this quarter keeps returning in the next, so your investment compounds instead of resetting every time the budget does.",
  },
];

export default function KineticHero({ headline = "We make you the answer.", cards = CARDS }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // the drift plays out over the pinned portion of the scroll. x pans far enough
  // (relative to the headline's own width) to sweep the whole phrase past — from
  // its opening words to its last — so the full line is readable across the scroll.
  const x = useTransform(scrollYProgress, [0, 0.55], ["42%", "-42%"]);
  const y = useTransform(scrollYProgress, [0, 0.55], ["-2vh", "40vh"]); // starts above card 1, drifts down through
  const rotate = useTransform(scrollYProgress, [0, 0.55], [-3.5, 2.5]);
  const drift = reduce ? undefined : { x, y, rotate };

  // the whole card composition scrolls up as you scroll, so the lower cards +
  // arrow + CTA (which sit below the first screen) are revealed rather than clipped.
  const stageY = useTransform(scrollYProgress, [0, 0.55], ["0vh", "-30vh"]);

  // the arrow draws itself in as you scroll (it isn't there on load)
  const lineLen = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const headLen = useTransform(scrollYProgress, [0.46, 0.58], [0, 1]);

  return (
    <section className="kh" ref={ref}>
      <div className="kh-sticky">
        <div className="kh-bigwrap" aria-hidden="true">
          <motion.div className="kh-bigtext" style={drift}>
            <span>{headline}</span>
          </motion.div>
        </div>

        <motion.div className="kh-stage" style={reduce ? undefined : { y: stageY }}>
          {cards.map((c) => (
            <div className={`kh-slot kh-slot--${c.slot}`} key={c.h}>
              <div className="kh-card" tabIndex={0}>
                <span className="kh-k">{c.k}</span>
                <span className="kh-h">{c.h}</span>
                <span className="kh-reveal"><span className="kh-p">{c.p}</span></span>
                <span className="kh-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </div>
            </div>
          ))}

          <div className="kh-cta-group">
            <svg className="kh-arrow" viewBox="0 0 150 130" fill="none" aria-hidden="true">
              <motion.path d="M14 16 C66 2 92 44 74 74 C64 92 38 86 58 112" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" style={reduce ? { pathLength: 1 } : { pathLength: lineLen }} />
              <motion.path d="M42 96 L59 114 L80 104" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" style={reduce ? { pathLength: 1 } : { pathLength: headLen }} />
            </svg>
            <a className="kh-cta" href="/#contact">
              Book a strategy call
              <span className="kh-cta-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
