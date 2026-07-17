export default function Thesis() {
  return (
    <>
      <section className="thesis has-ghost" id="thesis">
        <span className="ghost-text" aria-hidden="true" style={{ top: "-4%", left: "-3%" }}>ORGANIC</span>
        <div className="wrap thesis-grid">
          <div>
            <p className="eyebrow reveal">Why organic</p>
            <h2 className="reveal">Don't buy leads. Be the answer.</h2>
            <p className="lede reveal" style={{ marginTop: "18px" }}>
              We believe you shouldn't rent your customers from an ad auction.
              You should be present at every stage of their journey — helping,
              answering, earning trust that compounds. That was true in the
              Google era. It's truer in the LLM era.
            </p>
          </div>
          <div className="timeline reveal">
            <div className="tl-item">
              <span className="when">Yesterday</span>
              <h3>Ten blue links</h3>
              <p>Rankings, backlinks, technical SEO. We mastered the playbook — and learned that the playbook is not the point.</p>
            </div>
            <div className="tl-item now">
              <span className="when">Today</span>
              <h3>LLMs answer first</h3>
              <p>ChatGPT, Perplexity and AI Overviews now sit between your customer and your site. We make sure your brand is what they cite.</p>
            </div>
            <div className="tl-item">
              <span className="when">Tomorrow</span>
              <h3>Whatever comes next</h3>
              <p>The platform will change again. Our core value won't: organic growth, wherever attention lives.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
