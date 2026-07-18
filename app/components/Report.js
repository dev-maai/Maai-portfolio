import { SparkBar } from "./Brand";

export default function Report() {
  return (
    <>
      <section className="report" id="accountability">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ right: "-120px", top: "-110px" }}></span>
        <div className="wrap report-grid">
          <div>
            <p className="eyebrow reveal">Our differentiator</p>
            <h2 className="reveal">We take business accountability.</h2>
            <p className="lede reveal">
              Almost any agency can deliver results with the right strategy.
              What most won't do is own the outcome. We report everything —
              the wins, the misses, and exactly how we're fixing them.
              Growth isn't linear, and we never pretend it is.
            </p>
            <div className="report-points reveal">
              <div className="point"><span className="dot">✓</span><span>A full report of work done — you never chase us for status.</span></div>
              <div className="point"><span className="dot">✓</span><span>Transparency on failures, with a mitigation plan attached.</span></div>
              <div className="point"><span className="dot">✓</span><span>A team that understands your business, not just your keywords.</span></div>
            </div>
          </div>
          {/* The growth ledger — visual proof of the transparency promise */}
          <div className="ledger reveal" aria-hidden="true">
            <div className="ledger-head"><span>Growth report · Q2</span><span className="live">Live</span></div>
            <div className="ledger-row"><span className="label">Organic sessions</span><span className="val up">▲ 41% QoQ</span></div>
            <div className="ledger-row"><span className="label">LLM citations</span><span className="val up">▲ 3.2× since Jan</span></div>
            <div className="ledger-row"><span className="label">Pipeline from organic</span><span className="val up">▲ 27%</span></div>
            <div className="ledger-row"><span className="label">Content cluster B</span><span className="val flag">▼ underperformed</span></div>
            <div className="ledger-progress">
              <span className="label">Quarter to target</span>
              <SparkBar fill={76} />
            </div>
            <div className="ledger-note"><strong>What went wrong &amp; the fix:</strong> Cluster B targeted queries LLMs now answer inline. We're rebuilding it around comparison intent — new briefs shipped, re-measured in 30 days.</div>
          </div>
        </div>
      </section>
    </>
  );
}
