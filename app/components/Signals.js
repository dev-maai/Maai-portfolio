/* Each row's set is rendered twice — `@keyframes scroll` translates -50%, so
   the halves must match exactly or the loop visibly jumps. */
const ROWS = [
  ["Core Web Vitals", "Entity authority", "Schema markup", "Crawl budget", "Internal linking", "E-E-A-T signals", "Index coverage", "Anchor text", "Topical depth"],
  ["Featured snippets", "Query fan-out", "Brand mentions", "Knowledge panel", "Semantic clusters", "Passage ranking", "LLM citations", "Answer coverage"],
  ["SERP features", "Cannibalisation", "Render budget", "Citation gaps", "Page depth", "Backlink velocity", "Content decay", "Canonical tags"],
];
const SPEED = ["", "rev", "slow"];

export default function Signals() {
  return (
    <>
      <section className="signals" id="signals">
        <div className="wrap">
          <p className="eyebrow reveal">Signals we track</p>
          <h2 className="reveal">Make sense of results <em>from 400+ ranking signals.</em></h2>
        </div>
        <div className="signal-rows" aria-hidden="true">
          {ROWS.map((row, i) => (
            <div className={`srow ${SPEED[i]}`.trim()} key={i}>
              {[...row, ...row].map((sig, j) => (
                <span className="sig" key={j}>{sig}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="wrap">
          <a className="btn contrast reveal" href="#contact">Book a strategy call</a>
        </div>
      </section>
    </>
  );
}
