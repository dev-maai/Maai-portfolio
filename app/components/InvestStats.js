"use client";

import { motion } from "framer-motion";

/* "Why companies continue to invest in SEO" — three market stats on a marker rail.
   Deliberately NOT scroll-driven (no pinning/scrubbing): everything reveals once on
   entry and then stays put, so scrolling never feels hijacked. */
const STATS = [
  { v: "68%", c: "of all online experiences begin with a search engine." },
  { v: "57%", c: "of the B2B buying journey is completed before a buyer contacts a supplier." },
  { v: "89%", c: "of B2B researchers use the internet during the purchasing process." },
];

const VIEW = { once: true, margin: "-12% 0px" };

export default function InvestStats() {
  return (
    <section className="ivs" id="why-seo" aria-label="Why companies invest in SEO">
      <div className="wrap">
        <h2 className="reveal">
          Why companies continue to invest in <em>SEO.</em>
        </h2>

        <motion.div
          className="ivs-rail"
          aria-hidden="true"
          initial="hidden"
          whileInView="show"
          viewport={VIEW}
          variants={{ show: { transition: { delayChildren: 0.1, staggerChildren: 0.14 } } }}
        >
          <motion.span
            className="ivs-line"
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          {STATS.map((s) => (
            <motion.span
              className="ivs-dot"
              key={s.v}
              variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </motion.div>

        <div className="ivs-grid">
          {STATS.map((s, i) => (
            <motion.div
              className="ivs-item"
              key={s.v}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ivs-num">{s.v}</div>
              <p>{s.c}</p>
            </motion.div>
          ))}
        </div>

        <div className="cta-row reveal">
          <a className="cta-link" href="#contact">Read our industry report <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
