/* Case studies — the expanding image-accordion template, with 3 clickable panels
   (each links to its case-study page). */
const CASES = [
  {
    slug: "pickfords",
    label: "Removals",
    title: "Pickfords",
    line: "Organic growth for a heritage national removals brand — the answer buyers find across search and AI.",
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1000&q=72&auto=format&fit=crop",
  },
  {
    slug: "b2b-marketing",
    label: "B2B · SaaS",
    title: "B2B marketing",
    line: "Turning search into the single biggest source of qualified pipeline.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=72&auto=format&fit=crop",
  },
  {
    slug: "backlinks-referral",
    label: "Digital PR",
    title: "Backlinks & referral",
    line: "Authority — and referral traffic — earned from the sites buyers already trust.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&q=72&auto=format&fit=crop",
  },
];

export default function Values() {
  return (
    <section className="values" id="values">
      <div className="wrap">
        <h2 className="reveal">Case studies.</h2>
        <div className="holds reveal" role="list">
          {CASES.map((c) => (
            <a className="holds-panel" role="listitem" href={`/case-studies/${c.slug}`} key={c.slug}>
              <img className="holds-img" src={c.img} alt="" loading="lazy" />
              <span className="holds-veil" aria-hidden="true"></span>
              <span className="holds-k" aria-hidden="true">{c.label}</span>
              <div className="holds-body">
                <h3>{c.title}</h3>
                <p>{c.line}</p>
                <span className="holds-read">Read case study <i aria-hidden="true">→</i></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
