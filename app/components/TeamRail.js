"use client";

/* TeamRail — the team cards become a horizontal snap rail on mobile (see the
   card-rails block in globals.css). Nothing signalled that, so this wraps the
   rail and renders one dot per member, tracking scroll position. The dots only
   appear when the row actually overflows, so desktop stays untouched. */
import { useEffect, useRef, useState } from "react";

export default function TeamRail({ count, children }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sync = () => {
      const max = el.scrollWidth - el.clientWidth;
      setScrollable(max > 8);
      setActive(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0);
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [count]);

  return (
    <>
      <div className="team-grid" ref={ref}>{children}</div>
      <div className={`rail-dots${scrollable ? " is-on" : ""}`} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className={i === active ? "on" : ""} />
        ))}
      </div>
    </>
  );
}
