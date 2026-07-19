"use client";

/* CurvedLoop — text repeated along a gentle wavy path, scrolling continuously and
   seamlessly. We measure one repeated tile's length and scroll startOffset by
   exactly that (wrapping with modulo), so the loop never jumps or stops mid-way.
   The outline stroke is a magenta gradient that sweeps across. The band is tilted
   via CSS. Motion omitted under reduced-motion. */
import { useEffect, useRef, useState } from "react";

export default function CurvedLoop({ text = "", dur = 7, className = "" }) {
  const pathRef = useRef(null);
  const measureRef = useRef(null);
  const tpRef = useRef(null);
  const [reduce, setReduce] = useState(false);
  const [unit, setUnit] = useState(0);
  const [repeat, setRepeat] = useState(10);

  const sep = "     •     ";
  const unitText = text + sep;

  // measure one tile, size the repeat count to overflow the path
  useEffect(() => {
    setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches);
    const path = pathRef.current;
    const m = measureRef.current;
    if (!path || !m) return;
    const pathLen = path.getTotalLength();
    const uLen = m.getComputedTextLength();
    if (uLen > 0) {
      setUnit(uLen);
      setRepeat(Math.ceil((pathLen + uLen) / uLen) + 2);
    }
  }, [text]);

  // continuous, seamless scroll: startOffset ramps 0 → -unit and wraps
  useEffect(() => {
    if (reduce || !unit || !tpRef.current) return;
    const tp = tpRef.current;
    const speed = unit / (dur * 1000); // one tile per `dur` seconds
    let start = null, raf = 0;
    const frame = (ts) => {
      if (start == null) start = ts;
      const off = -(((ts - start) * speed) % unit);
      tp.setAttribute("startOffset", off);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reduce, unit, dur]);

  const line = unitText.repeat(repeat);

  return (
    <div className={`curved-loop ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1000 120" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="cl-wave" ref={pathRef} fill="none" d="M-160 78 Q 130 56, 380 72 T 880 64 T 1240 72" />
          <linearGradient id="cl-grad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop className="cl-s0" offset="0" />
            <stop className="cl-s1" offset="0.5" />
            <stop className="cl-s2" offset="1" />
            {!reduce && (
              <animateTransform attributeName="gradientTransform" type="translate"
                from="-360 0" to="1000 0" dur="3.4s" repeatCount="indefinite" />
            )}
          </linearGradient>
        </defs>
        <text ref={measureRef} className="cl-text cl-measure" x="0" y="-999">{unitText}</text>
        <text className="cl-text">
          <textPath ref={tpRef} href="#cl-wave" startOffset="0">{line}</textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
