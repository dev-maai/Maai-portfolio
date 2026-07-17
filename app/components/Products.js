export default function Products() {
  return (
    <>
      <section className="products" id="products">
        <span className="orb" aria-hidden="true"></span>
        <div className="wrap">
          <div className="products-head">
            <p className="eyebrow reveal">What you get</p>
            <h2 className="reveal">Three engines. One compounding system.</h2>
          </div>
          <div className="products-grid">
            <a className="product reveal p-clay" href="#services">
              <span className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></span>
              <h3>Organic Search</h3>
              <p>Technical SEO, content architecture and digital PR that make you the strongest answer on classic search.</p>
              <ul><li>Technical SEO</li><li>Content clusters</li><li>Digital PR</li></ul>
              <span className="p-go">Explore <i>&rarr;</i></span>
            </a>
            <a className="product reveal p-slate" href="#services">
              <span className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9z" /></svg></span>
              <h3>Answer-Engine Optimization</h3>
              <p>Structured content, entity authority and citations that ChatGPT, Perplexity and AI Overviews actually retrieve.</p>
              <ul><li>AEO / LLM SEO</li><li>Entity authority</li><li>Citations</li></ul>
              <span className="p-go">Explore <i>&rarr;</i></span>
            </a>
            <a className="product reveal p-indigo" href="#accountability">
              <span className="p-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6" /></svg></span>
              <h3>Growth Intelligence</h3>
              <p>A live reporting layer with attribution and monthly growth reports — every win, miss and fix, in the open.</p>
              <ul><li>Attribution</li><li>Live reports</li><li>Accountability</li></ul>
              <span className="p-go">Explore <i>&rarr;</i></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
