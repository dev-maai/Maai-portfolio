"use client";

import { useState, useEffect } from "react";
import SignalFlow from "./SignalFlow";

const PHASES = [
  {
    k: "01",
    days: "Days 1–14",
    range: [1, 14],
    title: "Diagnose",
    body: "A full audit across classic search and the answer engines. We map where you win, where you leak, and who owns the fix — named specialists, not a shared inbox.",
    items: ["Technical + content audit", "Citation-share baseline", "Named team assigned"],
  },
  {
    k: "02",
    days: "Days 15–60",
    range: [15, 60],
    title: "Build",
    body: "Rebuild your priority clusters around the questions buyers actually ask, ship the technical fixes, and launch the digital-PR and citation work that earns you into AI answers.",
    items: ["Rebuild 3 priority clusters", "Ship technical fixes", "Earn 12 citations"],
  },
  {
    k: "03",
    days: "Days 61–90",
    range: [61, 90],
    title: "Compound",
    body: "Re-measure against the baseline, report every win, miss and fix in the open, and double down on the plays that are already moving pipeline.",
    items: ["Re-measure vs. baseline", "Open growth report", "Double down on winners"],
  },
];

const DAYS = Array.from({ length: 90 }, (_, i) => i + 1);
function phaseOfDay(d) {
  if (d <= 14) return 0;
  if (d <= 60) return 1;
  return 2;
}

/* below this width the phases are a tap-to-toggle accordion; above it they are
   hover-preview tabs with an always-open detail panel */
const isAccordion = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width:820px)").matches;

export default function Plan() {
  const [active, setActive] = useState(1);   // selected phase (-1 = none → plain calendar)
  const p = active >= 0 ? PHASES[active] : null;

  // on mobile the plan opens as a plain calendar — days only light up once a
  // phase is tapped. (desktop keeps a phase selected + its detail panel shown.)
  useEffect(() => { if (isAccordion()) setActive(-1); }, []);

  // desktop: hover/focus previews a phase. mobile: only a tap toggles it.
  const preview = (i) => { if (!isAccordion()) setActive(i); };
  const choose = (i) => setActive((cur) => (isAccordion() ? (cur === i ? -1 : i) : i));

  return (
    <section className="plan" id="plan">
      <SignalFlow className="signalflow-sec" lines={5} speed={0.9} reactivity={1} glow={0.9} alpha={0.5} />
      <div className="wrap">
        <h2 className="reveal">A plan you can actually see.</h2>
        <p className="plan-lede reveal">
          Every engagement opens with a diagnosis and a dated plan. Hover a phase to see
          exactly which days it owns — the whole first quarter, mapped day by day.
        </p>

        <div className="q90 reveal">
          <div className="q90-tabs" role="tablist" aria-label="Plan phases">
            {PHASES.map((ph, i) => (
              <div className="q90-phase" key={ph.k}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-expanded={active === i}
                  className={`q90-tab${active === i ? " on" : ""}`}
                  onMouseEnter={() => preview(i)}
                  onFocus={() => preview(i)}
                  onClick={() => choose(i)}
                >
                  <span className="q90-k">{ph.k}</span>
                  <span className="q90-tmeta">
                    <span className="q90-tdays">{ph.days}</span>
                    <span className="q90-ttitle">{ph.title}</span>
                  </span>
                  <svg className="q90-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                {/* inline detail — the accordion body shown on mobile */}
                <div className="q90-acc">
                  <p>{ph.body}</p>
                  <ul className="q90-items">
                    {ph.items.map((it) => (
                      <li key={it}><i aria-hidden="true">✓</i>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="q90-body">
            <div className="q90-viz">
              <div
                className="q90-grid"
                role="img"
                aria-label={p ? `90-day plan with the ${p.title} phase (${p.days}) highlighted` : "90-day plan across three phases — tap a phase to highlight its days"}
              >
                {DAYS.map((d) => {
                  const ph = phaseOfDay(d);
                  return (
                    <span
                      key={d}
                      className={`q90-cell p${ph + 1}${ph === active ? " hot" : ""}`}
                      title={`Day ${d} · ${PHASES[ph].title}`}
                    />
                  );
                })}
              </div>
              <div className="q90-scale" aria-hidden="true">
                <span>Day 1</span>
                <span>Day 45</span>
                <span>Day 90</span>
              </div>
            </div>

            {p && (
              <div className="q90-detail">
                <div className="q90-detail-top">
                  <span className="q90-badge">{p.days}</span>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.body}</p>
                <ul className="q90-items">
                  {p.items.map((it) => (
                    <li key={it}><i aria-hidden="true">✓</i>{it}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
