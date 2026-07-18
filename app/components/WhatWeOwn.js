"use client";

import { useState, useEffect, useRef } from "react";

/* "01 / What we own" — the project's highlight, rebuilt as a dual-axis showcase:
   a VERTICAL stepper (each pillar expands vertically, with an auto-advance progress
   bar) synced to a HORIZONTAL sliding panel track. Click a step to jump; it
   auto-advances when in view (paused on hover/focus) and respects reduced-motion.
   Non-pinned by design — the page already pins two sections, and the skill warns
   against a third. */
const PILLARS = [
  {
    n: "01", tag: "Strategy",
    title: "The plan built from your business, not the search box.",
    body: "Every engagement starts with an industry deep dive, an audience and culture read, and a data-grounded map of where organic growth can actually move revenue. A commercial roadmap aligned with sales, product and tech from day one.",
    items: ["Industry deep dive", "Audience research", "Growth roadmap", "Cross-team alignment"],
    img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=1100&q=72&auto=format&fit=crop",
  },
  {
    n: "02", tag: "Content",
    title: "Written for the person on the other side of the screen.",
    body: "Content architecture, technical SEO foundations, and copy structured for how your buyers think, speak and search. Every surface your customers use is covered, from Google to Gemini to ChatGPT — built to hold through algorithm shifts because it is grounded in customer intent.",
    items: ["Content architecture", "Technical SEO", "AI search", "Digital PR"],
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1100&q=72&auto=format&fit=crop",
  },
  {
    n: "03", tag: "Performance",
    title: "Live reporting. Nothing hidden.",
    body: "Every engagement runs on transparent monthly reporting: growth, failures, root causes, and what we are changing next. Documented playbooks the team can inspect. If you ever want to take the work in-house, the system moves with you.",
    items: ["Monthly reports", "Attribution", "Documented SOPs", "CRO"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1100&q=72&auto=format&fit=crop",
  },
];

export default function WhatWeOwn() {
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);
  const N = PILLARS.length;
  const go = (i) => setActive(((i % N) + N) % N);

  useEffect(() => { setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wwo dark" id="services" ref={rootRef} aria-label="What we own">
      <div className="wrap wwo-head">
        <p className="kicker reveal">01 / What we own</p>
        <h2 className="reveal">The work MAAI is accountable for.</h2>
        <p className="lede reveal">
          Every agency delivers work. Very few take responsibility for what happens
          after. We report the growth, the failures, and the fix — in plain English,
          monthly, without waiting to be asked.
        </p>
      </div>

      <div className="wrap wwo-stage">
        {/* vertical stepper */}
        <div className="wwo-rail" role="tablist" aria-label="What we own pillars">
          {PILLARS.map((p, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`wwo-step${i === active ? " on" : ""}`}
              onClick={() => go(i)}
            >
              <span className="s-top">
                <span className="s-idx">{p.n}</span>
                <span className="s-tag">{p.tag}</span>
              </span>
              <span className="s-title">{p.title}</span>
              <span className="s-prog" aria-hidden="true">
                <i
                  key={`${i}-${active}-${inView}`}
                  className={i === active && !reduce && inView ? "go" : ""}
                  onAnimationEnd={() => { if (i === active) go(active + 1); }}
                />
              </span>
            </button>
          ))}
        </div>

        {/* horizontal sliding panels */}
        <div className="wwo-view">
          <div className="wwo-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {PILLARS.map((p, i) => (
              <article key={i} className={`wwo-panel${i === active ? " on" : ""}`} aria-hidden={i !== active}>
                <div className="p-media">
                  <img src={p.img} alt="" loading="lazy" />
                  <span className="p-num" aria-hidden="true">{p.n}</span>
                </div>
                <div className="p-body">
                  <span className="p-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="p-chips">
                    {p.items.map((it, j) => (
                      <span className="chip" key={j} style={{ "--d": j }}>{it}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
