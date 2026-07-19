/* RankingField — ambient background built straight from the logo's ranking motif:
   horizontal bars as search results, each one climbing left-to-right, and the
   leaders capping off with a magenta "position one" tip. Horizontal only, brand
   colours, deterministic layout (no Math.random) so it's SSR/hydration-safe and
   reduced-motion aware via CSS. Purely decorative. */
const BARS = [
  { w: 64, lead: false },
  { w: 41, lead: false },
  { w: 86, lead: true },
  { w: 52, lead: false },
  { w: 72, lead: false },
  { w: 33, lead: false },
  { w: 94, lead: true },
  { w: 47, lead: false },
  { w: 68, lead: false },
  { w: 38, lead: false },
  { w: 79, lead: true },
  { w: 55, lead: false },
  { w: 44, lead: false },
  { w: 61, lead: false },
];

export default function RankingField({ className = "" }) {
  return (
    <div className={`rankfield ${className}`.trim()} aria-hidden="true">
      {BARS.map((b, i) => (
        <div
          key={i}
          className={`rankfield-bar${b.lead ? " lead" : ""}`}
          style={{ "--w": `${b.w}%`, "--d": `${(i * 0.44).toFixed(2)}s` }}
        >
          <span className="rankfield-tip" />
        </div>
      ))}
    </div>
  );
}
