"use client";

/* CurvedLoop — text repeated along a wavy SVG path, scrolling continuously.
   Original build. The path is a smooth wave; startOffset animates for the loop
   (SMIL, omitted under reduced-motion). */
import { useEffect, useState } from "react";

export default function CurvedLoop({ text = "", repeat = 6, dur = 22, className = "" }) {
  const [reduce, setReduce] = useState(false);
  useEffect(() => { setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches); }, []);

  const line = Array.from({ length: repeat }, () => text).join("     •     ") + "     •     ";

  return (
    <div className={`curved-loop ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1000 180" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="cl-wave" fill="none" d="M-120 120 Q 130 30, 380 100 T 880 90 T 1200 110" />
        </defs>
        <text className="cl-text">
          <textPath href="#cl-wave" startOffset="0%">
            {line}
            {!reduce && (
              <animate attributeName="startOffset" from="0%" to="-16.667%" dur={`${dur}s`} repeatCount="indefinite" />
            )}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
