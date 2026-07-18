export default function Services() {
  return (
    <>
      <section className="services dark" id="services">
        <div className="wrap">
          <p className="eyebrow reveal">01 / What we own</p>
          <h2 className="reveal">The work MAAI is accountable for.</h2>
          <p className="lede reveal" style={{ marginTop: "18px" }}>
            Every agency delivers work. Very few take responsibility for what
            happens after. We report the growth, the failures, and the fix. In
            plain English. Monthly. Without waiting to be asked.
          </p>
          <span className="rail-hint" aria-hidden="true">Swipe</span>
          <div className="bento">
            <div className="card reveal">
              <div className="card-media"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=70&auto=format&fit=crop" alt="" loading="lazy" /></div>
              <span className="tag">Strategy</span>
              <h3>The plan built from your business, not the search box.</h3>
              <p>Every engagement starts with an industry deep dive, an audience and culture read, and a data grounded map of where organic growth can actually move revenue. A commercial roadmap that aligns with sales, product, and tech from day one.</p>
              <ul><li>Industry deep dive</li><li>Audience research</li><li>Growth roadmap</li><li>Cross-team alignment</li></ul>
            </div>
            <div className="card reveal">
              <div className="card-media"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=70&auto=format&fit=crop" alt="" loading="lazy" /></div>
              <span className="tag">Content</span>
              <h3>Written for the person on the other side of the screen.</h3>
              <p>Content architecture, technical SEO foundations, and copy structured for how your buyers think, speak, and search. Every surface your customers use is covered, from Google to Gemini to ChatGPT. Built to hold through algorithm shifts because it is grounded in customer intent.</p>
              <ul><li>Content architecture</li><li>Technical SEO</li><li>AI search</li><li>Digital PR</li></ul>
            </div>
            <div className="card reveal">
              <div className="card-media"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=70&auto=format&fit=crop" alt="" loading="lazy" /></div>
              <span className="tag">Performance</span>
              <h3>Live reporting. Nothing hidden.</h3>
              <p>Every engagement runs on transparent monthly reporting. Growth, failures, root causes, and what we are changing next. Documented playbooks the team can inspect. If you ever want to take the work in-house, the system moves with you.</p>
              <ul><li>Monthly reports</li><li>Attribution</li><li>Documented SOPs</li><li>CRO</li></ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
