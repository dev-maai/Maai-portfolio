"use client";

/* ChapterScrubber — a fixed section navigator: ticks track scroll position via an
   IntersectionObserver, the active section's label reveals, click to jump. Original
   build. Homepage only (targets home-section ids); hidden on small screens. */
import { useState, useEffect } from "react";

const CHAPTERS = [
  { id: "top", label: "Intro" },
  { id: "thesis", label: "Why organic" },
  { id: "services", label: "What we own" },
  { id: "signals", label: "Signals" },
  { id: "outcomes", label: "Outcomes" },
  { id: "selected-work", label: "Receipts" },
  { id: "accountability", label: "Accountability" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" },
];

export default function ChapterScrubber() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const secs = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!secs.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = CHAPTERS.findIndex((c) => c.id === e.target.id);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="chapter-scrubber" aria-label="Section navigation">
      {CHAPTERS.map((c, i) => (
        <a key={c.id} href={`#${c.id}`} className={`csb-chip${i === active ? " on" : ""}`}>
          <span className="csb-label">{c.label}</span>
          <span className="csb-tick" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
