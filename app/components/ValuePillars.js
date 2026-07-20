"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* The five value pillars as a vertical timeline: a rail with numbered nodes, and
   a magenta line that draws as you scroll — the layout states the thesis, that
   organic growth compounds step by step. */
const PILLARS = [
  {
    n: "01",
    title: "Strategy",
    body: "We develop search-led content strategies that align with customer intent, strengthen topical authority, and create sustainable organic growth across every stage of the buying journey.",
  },
  {
    n: "02",
    title: "Authority",
    body: "We increase your visibility across both traditional search and AI-powered discovery by building topical expertise, earning trusted references, and structuring content for modern search experiences.",
  },
  {
    n: "03",
    title: "Credibility",
    body: "We strengthen your brand's authority through high-quality editorial links, digital PR, and industry partnerships that improve search performance and reinforce buyer trust.",
  },
  {
    n: "04",
    title: "Reputation",
    body: "We shape how your business is discovered online by optimising branded search results, ensuring prospects encounter accurate, relevant, and credible information at every touchpoint.",
  },
  {
    n: "05",
    title: "Growth",
    body: "Organic growth compounds over time. We build scalable search strategies that continue delivering value as your business expands.",
  },
];

export default function ValuePillars() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 78%", "end 62%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="vtl" ref={ref}>
      <div className="vtl-rail" aria-hidden="true">
        <motion.span className="vtl-fill" style={{ scaleY }} />
      </div>

      {PILLARS.map((p, i) => (
        <motion.div
          className={`vtl-item ${i % 2 === 0 ? "is-left" : "is-right"}`}
          key={p.n}
          initial={{ opacity: 0, x: i % 2 === 0 ? -28 : 28, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="vtl-node" aria-hidden="true">{p.n}</span>
          <div className="vtl-card">
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
