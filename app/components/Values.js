const PRINCIPLES = [
  {
    k: "01",
    title: "Industry ownership",
    body: "We go deep into your vertical before we touch a keyword. Every strategy starts with your business, your customers, and your commercial reality.",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?w=900&q=75&auto=format&fit=crop",
    alt: "Evergreen forest at sunset with distant mountains",
  },
  {
    k: "02",
    title: "Audience and culture",
    body: "Content, tone, and structure built from how your buyers actually think, speak, and search. Written for the person on the other side of the screen.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=75&auto=format&fit=crop",
    alt: "A team talking around a table",
  },
  {
    k: "03",
    title: "Grounded in data",
    body: "Psychological nuance is where strategy starts. Data is where every decision gets checked. Nothing goes live on opinion alone.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=75&auto=format&fit=crop",
    alt: "An analytics dashboard on a screen",
  },
  {
    k: "04",
    title: "Cross-functional execution",
    body: "SEO aligned with sales, product, and tech from day one. Content answers the right queries, and every new build is made for how Google and LLMs crawl.",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=75&auto=format&fit=crop",
    alt: "Colleagues joining hands over a desk",
  },
];

export default function Values() {
  return (
    <>
      <section className="values" id="values">
        <div className="wrap">
          <p className="eyebrow reveal">02 / How it holds</p>
          <h2 className="reveal">A foundation that survives the algorithm.</h2>
          <p className="lede reveal" style={{ marginTop: "18px" }}>
            Algorithms change. Management changes. Agencies come and go. What we
            build is designed to hold through all of it, because it is grounded
            in the business itself.
          </p>

          <div className="holds reveal" role="list">
            {PRINCIPLES.map((p) => (
              <article className="holds-panel" role="listitem" key={p.k} tabIndex={0}>
                <img className="holds-img" src={p.img} alt={p.alt} loading="lazy" />
                <span className="holds-veil" aria-hidden="true"></span>
                <span className="holds-k" aria-hidden="true">/ {p.k}</span>
                <div className="holds-body">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="cta-row reveal">
            <a className="cta-link" href="#contact">Build a channel that holds <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
