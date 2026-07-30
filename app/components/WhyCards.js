"use client";

import { useRef } from "react";

/* WhyCards — the four MAAI differentiators as light "spotlight" cards
   (React Bits SpotlightCard idiom): a magenta radial glow tracks the cursor,
   the border lights up and the card lifts on hover. Copy is prop-driven per
   industry; the four line icons are fixed by position. */
const ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.2" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="5" /><rect x="13" y="8" width="3" height="9" /></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
];

const DEFAULT_ITEMS = [
  { n: "01", h: "Sector depth", p: "We go deep on a small number of sectors, so we already know how your buyers search." },
  { n: "02", h: "Search as engineering", p: "We treat search as engineering, with every recommendation traceable to a data source." },
  { n: "03", h: "Reporting in the open", p: "We report the positions that moved and the ones that did not, monthly." },
  { n: "04", h: "Built to compound", p: "We build for compounding positions rather than short-term spikes." },
];

export default function WhyCards({ items = DEFAULT_ITEMS }) {
  const ITEMS = items;
  const gridRef = useRef(null);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  /* mobile-only slider: step the card row one card at a time */
  const scrollByCard = (dir) => {
    const el = gridRef.current;
    if (!el) return;
    const card = el.querySelector(".wc-card");
    const gap = parseFloat(getComputedStyle(el).gap) || 12;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.86;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="wc">
      <div className="wc-grid" ref={gridRef}>
        {ITEMS.map((it, idx) => (
          <div className="wc-card reveal" key={it.n} onMouseMove={onMove}>
            <div className="wc-card-top">
              <span className="wc-ic">{ICONS[idx % ICONS.length]}</span>
              <span className="wc-n">{it.n}</span>
            </div>
            <h3>{it.h}</h3>
            <p>{it.p}</p>
          </div>
        ))}
      </div>

      <div className="wc-arrows" aria-hidden="true">
        <button type="button" className="wc-arrow" aria-label="Previous" onClick={() => scrollByCard(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button type="button" className="wc-arrow" aria-label="Next" onClick={() => scrollByCard(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  );
}
