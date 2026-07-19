"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ENGINES = [
  {
    key: "organic",
    n: "01",
    title: "Organic Search",
    tag: "Classic search",
    desc: "Technical SEO, content architecture and digital PR that make you the strongest answer on classic search.",
    points: ["Technical SEO", "Content clusters", "Digital PR"],
  },
  {
    key: "answer",
    n: "02",
    title: "Answer-Engine Optimization",
    tag: "AI answers",
    desc: "Structured content, entity authority and citations that ChatGPT, Perplexity and AI Overviews actually retrieve.",
    points: ["AEO / LLM SEO", "Entity authority", "Citations"],
  },
  {
    key: "growth",
    n: "03",
    title: "Growth Intelligence",
    tag: "Reporting",
    desc: "A live reporting layer with attribution and monthly growth reports — every win, miss and fix, in the open.",
    points: ["Attribution", "Live reports", "Accountability"],
  },
];

function Preview({ k }) {
  if (k === "organic") {
    const bars = [
      { w: 96, lead: true },
      { w: 68 },
      { w: 81 },
      { w: 55 },
      { w: 63 },
    ];
    return (
      <div className="wg-serp" aria-hidden="true">
        <div className="wg-serp-head">Search results · “b2b seo agency”</div>
        {bars.map((b, i) => (
          <div className="wg-serp-row" key={i}>
            <span className="wg-serp-bar" style={{ width: `${b.w}%` }}>
              {b.lead && <span className="wg-serp-tip" />}
            </span>
            {b.lead && <span className="wg-serp-rank">#1 · you</span>}
          </div>
        ))}
      </div>
    );
  }
  if (k === "answer") {
    return (
      <div className="wg-answer" aria-hidden="true">
        <div className="wg-ans-q"><span className="wg-ans-dot" />Who should we hire for B2B SEO?</div>
        <div className="wg-ans-body">
          <span /><span /><span className="short" />
        </div>
        <div className="wg-ans-cite">Cited source · <b>maai</b></div>
      </div>
    );
  }
  return (
    <div className="wg-report" aria-hidden="true">
      <div className="wg-rep-head"><span>Growth</span><span className="wg-rep-up">▲ compounding</span></div>
      <svg className="wg-rep-chart" viewBox="0 0 220 76" fill="none" preserveAspectRatio="none">
        <polyline points="4,64 40,58 76,60 112,42 148,46 184,24 216,10" stroke="var(--amber)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="wg-rep-rows">
        <div><span>Organic sessions</span><b>▲ 41%</b></div>
        <div><span>LLM citations</span><b>▲ 3.2×</b></div>
      </div>
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState(0);
  const e = ENGINES[active];

  return (
    <section className="products" id="products">
      <span className="orb" aria-hidden="true"></span>
      <div className="wrap">
        <div className="products-head">
          <p className="eyebrow reveal">What you get</p>
          <h2 className="reveal">Three engines. One compounding system.</h2>
        </div>

        <div className="wg reveal">
          <div className="wg-list" role="tablist" aria-label="What you get">
            {ENGINES.map((en, i) => (
              <button
                key={en.key}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`wg-row${active === i ? " on" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {active === i && (
                  <motion.span layoutId="wg-accent" className="wg-accent" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <span className="wg-n">{en.n}</span>
                <span className="wg-main">
                  <span className="wg-title">{en.title}</span>
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.span
                        className="wg-detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="wg-desc">{en.desc}</span>
                        <span className="wg-tags">
                          {en.points.map((p) => <i key={p}>{p}</i>)}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            ))}
          </div>

          <div className="wg-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={e.key}
                className="wg-preview"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Preview k={e.key} />
                <span className="wg-cap"><i />{e.tag}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="engines-foot reveal">
          <span aria-hidden="true">↳</span> Each engine feeds the next — search authority earns citations, citations earn presence, presence compounds.
        </p>
      </div>
    </section>
  );
}
