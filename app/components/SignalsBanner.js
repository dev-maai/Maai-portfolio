import RotatingText from "./RotatingText";

/* A full-width "depth behind the work" band — the ~400 ranking signals we monitor,
   as three horizontal marquee rows of chips, on a green-undertoned white ground.
   Sits right after "Where we create value", in place of the old image gallery. */
const ROWS = [
  ["Index coverage", "Anchor text", "Topical depth", "Log-file analysis", "Core Web Vitals", "Entity authority", "Schema markup", "Crawl budget", "Internal linking"],
  ["Brand mentions", "Knowledge panel", "Semantic clusters", "Passage ranking", "LLM citations", "Answer coverage", "AI Overview presence", "Share of voice", "SERP features"],
  ["Cannibalisation", "Render budget", "Citation gaps", "Page depth", "Backlink velocity", "Content decay", "Canonical tags", "Hreflang", "Redirect chains"],
];

// AEO-forward signals we lead on — highlighted in the marquee.
const HOT = new Set(["Entity authority", "LLM citations", "AI Overview presence"]);

export default function SignalsBanner() {
  return (
    <section className="sig-banner" id="signals-depth">
      <div className="wrap sig-banner-inner">
        <h2 className="reveal">
          More signal<br />
          <span className="sw-line">More <RotatingText words={["trust", "clarity", "confidence", "proof", "credibility"]} /></span>
        </h2>
      </div>

      <div className="sb-marquee" aria-label="A sample of the ranking signals we monitor">
        {ROWS.map((row, i) => (
          <div className={`sb-row${i % 2 ? " rev" : ""}`} key={i}>
            <div className="sb-track">
              {[...row, ...row].map((s, j) => (
                <span
                  className={`sb-chip${HOT.has(s) ? " on" : ""}`}
                  key={`${s}-${j}`}
                  aria-hidden={j >= row.length ? "true" : undefined}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="wrap sig-banner-inner">
        <a className="sb-cta reveal" href="/#contact">
          Book a complimentary call <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
