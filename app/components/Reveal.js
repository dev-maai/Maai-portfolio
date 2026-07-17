"use client";

import { useEffect } from "react";

/* Ports the source site's reveal-on-scroll: elements marked .reveal fade
   and un-blur once, when they first enter view. Mounted once at the page
   level so every section gets it without wiring up its own observer. */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          io.unobserve(entry.target); // reveal is one-way
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
