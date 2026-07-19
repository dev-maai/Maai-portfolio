"use client";

import { useState } from "react";
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

export default function Plan() {
  const [active, setActive] = useState(1);
  const p = PHASES[active];

  return (
    <section className="plan" id="plan">
      <SignalFlow className="signalflow-sec" lines={5} speed={0.9} reactivity={1} glow={0.9} alpha={0.5} />
      <div className="wrap">
        <span className="pill reveal"><i></i>Your first 90 days</span>
        <h2 className="reveal">A plan you can actually see.</h2>
        <p className="plan-lede reveal">
          Every engagement opens with a diagnosis and a dated plan. Hover a phase to see
          exactly which days it owns — the whole first quarter, mapped day by day.
        </p>

        <div className="q90 reveal">
          <div className="q90-tabs" role="tablist" aria-label="Plan phases">
            {PHASES.map((ph, i) => (
              <button
                key={ph.k}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`q90-tab${active === i ? " on" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="q90-k">{ph.k}</span>
                <span className="q90-tmeta">
                  <span className="q90-tdays">{ph.days}</span>
                  <span className="q90-ttitle">{ph.title}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="q90-body">
            <div className="q90-viz">
              <div
                className="q90-grid"
                role="img"
                aria-label={`90-day plan with the ${p.title} phase (${p.days}) highlighted`}
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
          </div>
        </div>

        <div className="plan-team reveal">
          <div className="avatars">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Priya Nair" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Sam Whitfield" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Mia Bianchi" loading="lazy" />
          </div>
          <p>Real, named specialists own each phase from day one.</p>
        </div>
        <p className="plan-note">Example plan only. Yours is built from your own audit.</p>
      </div>
    </section>
  );
}
