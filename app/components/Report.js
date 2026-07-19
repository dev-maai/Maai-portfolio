"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROWS = [
  { label: "Organic sessions", val: "▲ 41% QoQ", kind: "up" },
  { label: "LLM citations", val: "▲ 3.2× since Jan", kind: "up" },
  { label: "Pipeline from organic", val: "▲ 27%", kind: "up" },
  { label: "Content cluster B", val: "▼ underperformed", kind: "flag" },
];

const POINTS = [
  "A full report of work done — you never chase us for status.",
  "Transparency on failures, with a mitigation plan attached.",
  "A team that understands your business, not just your keywords.",
];

export default function Report() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 62%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "76%"]);
  const dash = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="report" id="accountability">
      <span className="sec-glow g-coral" aria-hidden="true" style={{ right: "-120px", top: "-110px" }}></span>
      <div className="wrap dif-grid">
        <div className="dif-copy">
          <p className="eyebrow reveal">Our differentiator</p>
          <h2 className="reveal">We take business accountability.</h2>
          <p className="lede reveal">
            Almost any agency can deliver results with the right strategy. What most
            won&apos;t do is own the outcome. We report everything — the wins, the misses,
            and exactly how we&apos;re fixing them. Growth isn&apos;t linear, and we never
            pretend it is.
          </p>
          <ul className="dif-points reveal">
            {POINTS.map((p) => (
              <li key={p}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="cta-row reveal">
            <a className="cta-link" href="#contact">Get a report like this <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="dif-panel reveal"
          aria-hidden="true"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <div className="dif-panel-head">
            <span className="dif-live"><i />Growth report · Q2</span>
            <span className="dif-badge">Live</span>
          </div>

          <div className="dif-chart">
            <svg viewBox="0 0 320 96" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="dif-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="var(--amber)" stopOpacity="0.22" />
                  <stop offset="1" stopColor="var(--amber)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 80 L30 74 L70 76 L110 54 L150 60 L200 40 L250 44 L320 14 L320 96 L0 96 Z" fill="url(#dif-area)" />
              <motion.path
                d="M0 80 L30 74 L70 76 L110 54 L150 60 L200 40 L250 44 L320 14"
                stroke="var(--amber)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
                pathLength="1" style={{ pathLength: 1, strokeDashoffset: dash, strokeDasharray: 1 }}
              />
            </svg>
          </div>

          <div className="dif-rows">
            {ROWS.map((r) => (
              <motion.div
                key={r.label}
                className={`dif-row ${r.kind}`}
                variants={{ hidden: { opacity: 0, x: 14 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="dif-row-label">{r.label}</span>
                <b className="dif-row-val">{r.val}</b>
              </motion.div>
            ))}
          </div>

          <div className="dif-progress">
            <div className="dif-progress-top"><span>Quarter to target</span><span className="dif-pct">76%</span></div>
            <div className="dif-track"><motion.span className="dif-fill" style={{ width: fill }} /></div>
          </div>

          <div className="dif-fix">
            <b>What went wrong &amp; the fix:</b> Cluster B targeted queries LLMs now answer inline.
            We&apos;re rebuilding it around comparison intent — new briefs shipped, re-measured in 30 days.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
