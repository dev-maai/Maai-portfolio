export default function Results() {
  return (
    <>
      <section className="results">
        <span className="sec-glow g-amber" aria-hidden="true" style={{ left: "-150px", bottom: "-170px" }}></span>
        <div className="wrap results-grid">
          {/* PLACEHOLDER metrics — replace with real client numbers before launch */}
          <div className="stat reveal"><div className="num"><span data-count="212">0</span><sup>%</sup></div><div className="cap">Avg. organic traffic growth in year one</div></div>
          <div className="stat reveal"><div className="num"><span data-count="38">0</span><sup>%</sup></div><div className="cap">Avg. reduction in paid acquisition dependency</div></div>
          <div className="stat reveal"><div className="num"><span data-count="4">0</span><sup>×</sup></div><div className="cap">Growth in LLM &amp; AI Overview citations</div></div>
          <div className="stat reveal"><div className="num"><span data-count="100">0</span><sup>%</sup></div><div className="cap">Of failures reported — with a fix attached</div></div>
        </div>
      </section>
    </>
  );
}
