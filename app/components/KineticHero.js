"use client";

import { useEffect, useRef, useState } from "react";
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

  // mobile keeps the same pinned-stage idea but needs its own travel: the cards
  // sit in one narrow column, so the stage has much further to climb and the
  // headline sweeps wider (relative to a narrow viewport) to pass behind them.
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width:860px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // the drift plays out over the pinned portion of the scroll. x pans far enough
  // (relative to the headline's own width) to sweep the whole phrase past — from
  // its opening words to its last — so the full line is readable across the scroll.
  const xD = useTransform(scrollYProgress, [0, 0.55], ["42%", "-42%"]);
  const yD = useTransform(scrollYProgress, [0, 0.55], ["-2vh", "40vh"]); // starts above card 1, drifts down through
  const rotateD = useTransform(scrollYProgress, [0, 0.55], [-3.5, 2.5]);
  const stageYD = useTransform(scrollYProgress, [0, 0.55], ["0vh", "-30vh"]);

  const xM = useTransform(scrollYProgress, [0, 0.93], ["55%", "-95%"]);
  const yM = useTransform(scrollYProgress, [0, 0.93], ["4vh", "62vh"]);
  const rotateM = useTransform(scrollYProgress, [0, 0.93], [-3, 3]);
  const stageYM = useTransform(scrollYProgress, [0, 0.93], ["0vh", "-132vh"]);

  const drift = reduce ? undefined : isMobile ? { x: xM, y: yM, rotate: rotateM } : { x: xD, y: yD, rotate: rotateD };

  // the whole card composition scrolls up as you scroll, so the lower cards +
  // arrow + CTA (which sit below the first screen) are revealed rather than clipped.
  const stageY = isMobile ? stageYM : stageYD;

  // the arrow draws itself in as you scroll (it isn't there on load). On mobile the
  // CTA is last in the column, so the stroke lands later in the scroll.
  const lineLenD = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const headLenD = useTransform(scrollYProgress, [0.46, 0.58], [0, 1]);
  const lineLenM = useTransform(scrollYProgress, [0.56, 0.86], [0, 1]);
  const headLenM = useTransform(scrollYProgress, [0.84, 0.94], [0, 1]);
  const lineLen = isMobile ? lineLenM : lineLenD;
  const headLen = isMobile ? headLenM : headLenD;

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
              {/* a real button so tapping toggles — focus alone can't close again */}
              <button
                type="button"
                className={`kh-card${open === c.slot ? " is-open" : ""}`}
                aria-expanded={open === c.slot}
                onClick={() => setOpen((prev) => (prev === c.slot ? null : c.slot))}
              >
                <span className="kh-k">{c.k}</span>
                <span className="kh-h">{c.h}</span>
                <span className="kh-reveal"><span className="kh-p">{c.p}</span></span>
                <span className="kh-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
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
