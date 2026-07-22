export default function Insights() {
  return (
    <>
      <section className="insights" id="insights">
        <div className="wrap">
          <div className="insights-head">
            <div>
              <h2 className="reveal">Field notes on the organic era.</h2>
            </div>
            <a className="btn ghost reveal" href="#insights">All insights <i>&rarr;</i></a>
          </div>
          <div className="insights-grid">
            <a className="post reveal" href="#insights">
              <div className="post-media"><img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=640&h=420&q=72&auto=format&fit=crop" alt="A sticky note reading A.I." loading="lazy" width="640" height="420" /></div>
              <div className="post-body">
                <span className="cat">AEO / LLM SEO</span>
                <h3>The AEO playbook: how to get cited by ChatGPT &amp; Perplexity</h3>
                <div className="post-meta"><span>Sam Whitfield</span><span>&middot;</span><span>8 min read</span></div>
              </div>
            </a>
            <a className="post reveal" href="#insights">
              <div className="post-media"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&h=420&q=72&auto=format&fit=crop" alt="A laptop and notebook on a desk" loading="lazy" width="640" height="420" /></div>
              <div className="post-body">
                <span className="cat">Strategy</span>
                <h3>Why organic keeps compounding after the paid budget stops</h3>
                <div className="post-meta"><span>Priya Nair</span><span>&middot;</span><span>6 min read</span></div>
              </div>
            </a>
            <a className="post reveal" href="#insights">
              <div className="post-media"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=640&h=420&q=72&auto=format&fit=crop" alt="Social app icons on a phone" loading="lazy" width="640" height="420" /></div>
              <div className="post-body">
                <span className="cat">Distribution</span>
                <h3>Social signals that quietly feed your search demand</h3>
                <div className="post-meta"><span>Theo Marsh</span><span>&middot;</span><span>5 min read</span></div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
