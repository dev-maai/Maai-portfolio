"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* SearchDemo — an animated "how your buyers search" bar. It types real buyer
   queries, then reveals an AI-answer card that cites the client as the shortlisted
   source. Demonstrates the AEO value prop live. Content is prop-driven so each
   industry page passes its own queries, answer and source chips. */
const DEFAULT_QUERIES = [
  { q: "best freight forwarder for european distribution", cat: "Freight & logistics" },
  { q: "cold chain logistics provider uk", cat: "Cold chain" },
  { q: "3pl fulfilment for ecommerce brands", cat: "Fulfilment" },
  { q: "who supplies automated pallet racking", cat: "Warehousing" },
  { q: "bonded warehouse near a major port", cat: "Customs & bonded" },
];

export default function SearchDemo({
  queries = DEFAULT_QUERIES,
  answerLead = "Buyers researching this get a shortlist, and ",
  answerMark = "your company",
  answerTail = " is cited as a leading supplier.",
  chips = ["your company", "industry directory", "trade publication"],
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(reduce ? queries[0].q.length : 0);
  const [answer, setAnswer] = useState(reduce);
  const item = queries[i];
  const q = item.q;

  useEffect(() => {
    if (reduce) return;
    setTyped(0);
    setAnswer(false);
    let n = 0;
    const timers = [];
    const type = () => {
      n += 1;
      setTyped(n);
      if (n < q.length) timers.push(setTimeout(type, 52));
      else timers.push(setTimeout(() => setAnswer(true), 320));
    };
    timers.push(setTimeout(type, 480));
    const total = 480 + q.length * 52 + 320 + 2700;
    timers.push(setTimeout(() => setI((v) => (v + 1) % queries.length), total));
    return () => timers.forEach(clearTimeout);
  }, [i, q, reduce, queries.length]);

  return (
    <div className="sd">
      <div className="sd-bar">
        <svg className="sd-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <span className="sd-q">
          {q.slice(0, typed)}
          {!reduce && <span className="sd-caret" aria-hidden="true" />}
        </span>
        <span className="sd-badge"><i className="sd-badge-dot" />AI</span>
      </div>

      {/* fixed-height slot so the answer fades in without pushing the page */}
      <div className="sd-ans-slot">
        <AnimatePresence mode="wait">
          {answer && (
            <motion.div
              className="sd-ans"
              key={i}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sd-ans-head"><span className="sd-dot" />AI answer · {item.cat}</div>
              <p className="sd-ans-text">
                {answerLead}<b>{answerMark}</b>{answerTail}
              </p>
              <div className="sd-cite">
                <span className="sd-cite-l">Sources</span>
                {chips.map((c, ci) => (
                  <span className={`sd-chip${ci === 0 ? " on" : ""}`} key={c}>{c}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
