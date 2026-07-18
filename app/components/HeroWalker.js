"use client";

import { useState, useEffect } from "react";

/* Walker-Sands-style hero (original build, MAAI palette): rounded evergreen panel,
   a giant headline bleeding off the bottom, and — in place of the earlier blobs —
   a formal analytics/results image slider that auto-advances (pause on hover,
   reduced-motion safe). */
const SLIDES = [
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=75&auto=format&fit=crop", cap: "Traffic & rankings dashboard" },
  { img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1000&q=75&auto=format&fit=crop", cap: "Answer-engine visibility" },
  { img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&q=75&auto=format&fit=crop", cap: "Monthly growth reporting" },
  { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&q=75&auto=format&fit=crop", cap: "Keyword & content performance" },
];

export default function HeroWalker() {
  const [i, setI] = useState(0);
  const [reduce, setReduce] = useState(false);
  const [paused, setPaused] = useState(false);
  const N = SLIDES.length;
  const go = (n) => setI(((n % N) + N) % N);

  useEffect(() => { setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);
  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % N), 4600);
    return () => clearInterval(t);
  }, [reduce, paused, N]);

  return (
    <section className="hero-ws" id="top" aria-label="Intro">
      <div className="hws-panel">
        <div className="hws-row">
          <div className="hws-top">
            <p className="kicker">SEO agency for global B2B</p>
            <p className="hws-lede">
              The organic channel global B2B teams defend to the board — engineered
              for Google, AI answers, and everywhere your buyers ask.
            </p>
            <div className="hero-ctas">
              <a className="btn amber" href="#contact">Book a strategy call</a>
              <a className="btn ghost" href="#work">See how we work</a>
            </div>
          </div>

          <div
            className="hws-media"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="What we deliver"
          >
            <div className="hm-viewport">
              <div className="hm-track" style={{ transform: `translateX(-${i * 100}%)` }}>
                {SLIDES.map((s, k) => (
                  <figure className="hm-slide" key={k} aria-hidden={k !== i}>
                    <img src={s.img} alt={s.cap} loading={k === 0 ? "eager" : "lazy"} />
                    <figcaption className="hm-cap"><span className="hm-live" aria-hidden="true" />{s.cap}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="hm-ui">
              <div className="hm-dots" role="tablist" aria-label="Slides">
                {SLIDES.map((_, k) => (
                  <button
                    key={k}
                    type="button"
                    role="tab"
                    className={`hm-dot${k === i ? " on" : ""}`}
                    aria-label={`Slide ${k + 1}`}
                    aria-selected={k === i}
                    onClick={() => go(k)}
                  />
                ))}
              </div>
              <div className="hm-arrows">
                <button type="button" aria-label="Previous slide" onClick={() => go(i - 1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button type="button" aria-label="Next slide" onClick={() => go(i + 1)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="hws-giant">Organic Growth</h1>
      </div>
    </section>
  );
}
