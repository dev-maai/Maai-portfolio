"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ServicesConsole — a "command center" for the SEO & AEO services: vertical tab
   triggers on the left with a spring-sliding active indicator, and a terminal-style
   window on the right whose contents crossfade via AnimatePresence. shadcn-style,
   built natively on the site's tokens + framer-motion. */
/* below this width the services are a tap-to-toggle accordion; above it they are
   hover-preview tabs with an always-open terminal panel */
const isAccordion = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width:820px)").matches;

export default function ServicesConsole({ services }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const s = active >= 0 ? services[active] : null;
  const n = active >= 0 ? String(active + 1).padStart(2, "0") : "";

  // desktop: hover/focus previews a service. mobile: only a tap toggles it.
  const preview = (i) => { if (!isAccordion()) setActive(i); };
  const choose = (i) => setActive((cur) => (isAccordion() ? (cur === i ? -1 : i) : i));

  return (
    <div className="svc">
      <div className="svc-tabs" role="tablist" aria-label="Services under SEO and AEO">
        {services.map((it, i) => (
          <div className="svc-item" key={it.k}>
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-expanded={active === i}
              className={`svc-tab${active === i ? " on" : ""}`}
              onMouseEnter={() => preview(i)}
              onFocus={() => preview(i)}
              onClick={() => choose(i)}
            >
              {active === i && (
                <motion.span
                  layoutId="svc-ind"
                  className="svc-ind"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="svc-tab-k">{String(i + 1).padStart(2, "0")}</span>
              <span className="svc-tab-n">{it.name}</span>
              <svg className="svc-tab-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </button>
            {/* inline detail — the accordion body shown on mobile */}
            <div className="svc-acc">
              <p>{it.blurb}</p>
              <ul className="svc-inc">
                {it.inc.map((x) => (
                  <li key={x}><span className="svc-arrow" aria-hidden="true">&rarr;</span>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="svc-window">
        <div className="svc-win-bar">
          <span className="svc-dot" /><span className="svc-dot" /><span className="svc-dot" />
          <span className="svc-win-path">~/services/{s ? s.k : ""}</span>
        </div>
        <div className="svc-win-body">
          <AnimatePresence mode="wait">
            {s && (
            <motion.div
              key={s.k}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="svc-win-tag">{n} · under SEO &amp; AEO</span>
              <h3>{s.name}</h3>
              <p>{s.blurb}</p>
              <ul className="svc-inc">
                {s.inc.map((x) => (
                  <li key={x}>
                    <span className="svc-arrow" aria-hidden="true">&rarr;</span>
                    {x}
                  </li>
                ))}
              </ul>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
