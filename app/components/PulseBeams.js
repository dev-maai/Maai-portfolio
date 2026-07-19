/* PulseBeams — decorative background of converging beams with magenta pulses
   travelling along them toward a central node. Original SVG build; the pulse is a
   short normalized dash (pathLength=1) animated via stroke-dashoffset. */
const BEAMS = [
  "M60 20 C 220 110, 320 210, 400 300",
  "M740 20 C 580 110, 480 210, 400 300",
  "M0 170 C 160 225, 300 285, 400 300",
  "M800 170 C 640 225, 500 285, 400 300",
  "M240 -20 C 300 100, 360 220, 400 300",
  "M560 -20 C 500 100, 440 220, 400 300",
];

export default function PulseBeams() {
  return (
    <div className="pulse-beams-wrap" aria-hidden="true">
      <svg className="pulse-beams" viewBox="0 0 800 320" preserveAspectRatio="xMidYMax slice">
        <defs>
          <radialGradient id="pbCore" cx="50%" cy="94%" r="60%">
            <stop offset="0%" stopColor="rgba(230,46,107,.28)" />
            <stop offset="100%" stopColor="rgba(230,46,107,0)" />
          </radialGradient>
        </defs>
        <rect width="800" height="320" fill="url(#pbCore)" />
        {BEAMS.map((d, i) => (
          <g key={i}>
            <path d={d} className="pb-base" />
            <path d={d} className="pb-pulse" pathLength="1" style={{ animationDelay: `${(i * 0.42).toFixed(2)}s` }} />
          </g>
        ))}
        <circle cx="400" cy="300" r="4.5" className="pb-node" />
      </svg>
    </div>
  );
}
