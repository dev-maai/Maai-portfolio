"use client";

/* Layered scrolling: each child panel sticks while the next one slides up over
   it. A panel taller than the viewport sticks at its bottom edge (top is
   negative) so the visitor still sees all of it before it is covered. */
import { Children, useEffect, useRef, useState } from "react";

export default function StackSections({ children }) {
  const refs = useRef([]);
  const [tops, setTops] = useState([]);
  const items = Children.toArray(children);

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight;
      setTops(refs.current.map((el) => (el ? Math.min(0, vh - el.offsetHeight) : 0)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    refs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [items.length]);

  return (
    <div className="stack-sections">
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="stack-panel"
          style={{
            position: "sticky",
            top: `${tops[i] ?? 0}px`,
            zIndex: i + 1,
            borderTop: i ? "1px solid rgba(247,247,242,0.12)" : undefined,
            contain: "paint",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
