/* The MAAI brand devices, rebuilt as inline SVG so they inherit the theme
   tokens and stay crisp at any size. Four marks, one system:
     Monogram  — the chart-M closing on the spark point (favicon / app icon)
     LedgerMark— stacked ranking bars, the top one lit (the receipts motif)
     SparkBar  — evergreen progress with a magenta cap (growth-in-progress)
     Bindu     — the single magenta point (one dot, never decoration)
   Evergreen reads from currentColor; magenta is always var(--amber). */

export function Monogram({ size = 40, className = "" }) {
  return (
    <svg className={`brand-monogram ${className}`.trim()} width={size} height={size}
      viewBox="0 0 56 56" role="img" aria-label="MAAI monogram">
      <rect x="3" y="3" width="50" height="50" rx="14" fill="currentColor" />
      <path d="M13 40 L13 22 L21 32 L29 18 L37 28 L43 14" fill="none"
        stroke="var(--paper)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="43" cy="14" r="5" fill="var(--amber)" />
    </svg>
  );
}

export function LedgerMark({ className = "" }) {
  /* six rows, staggered widths; only the top row carries the magenta cap */
  const rows = [
    { y: 4, w: 74, lit: true },
    { y: 21, w: 52, lit: false },
    { y: 38, w: 82, lit: false },
    { y: 55, w: 44, lit: false },
    { y: 72, w: 58, lit: false },
    { y: 89, w: 34, lit: false },
  ];
  return (
    <svg className={`brand-ledger ${className}`.trim()} viewBox="0 0 100 99"
      fill="none" role="img" aria-label="Ranking signals, one lit">
      {rows.map((r, i) => (
        <g key={i}>
          <rect x="0" y={r.y} width={r.lit ? r.w - 16 : r.w} height="9" rx="4.5" fill="currentColor" />
          {r.lit && <rect x={r.w - 16} y={r.y} width="16" height="9" rx="4.5" fill="var(--amber)" />}
        </g>
      ))}
    </svg>
  );
}

export function SparkBar({ fill = 76, className = "" }) {
  /* `fill` is the evergreen share; the remainder is the lit magenta cap */
  const green = Math.max(6, Math.min(94, fill));
  return (
    <svg className={`brand-sparkbar ${className}`.trim()} viewBox="0 0 100 12"
      fill="none" preserveAspectRatio="none" role="img" aria-label={`Progress ${green}%`}>
      <rect x="0" y="0" width="100" height="12" rx="6" fill="var(--amber)" />
      <rect x="0" y="0" width={green + 6} height="12" rx="6" fill="currentColor" />
    </svg>
  );
}

export function Bindu({ size = 12, className = "" }) {
  return (
    <span className={`brand-bindu ${className}`.trim()} aria-hidden="true"
      style={{ width: size, height: size }} />
  );
}
