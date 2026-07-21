/* Case studies — the expanding image-accordion template, with 3 clickable panels
   (each links to its case-study page). */
const CASES = [
  {
    slug: "pickfords",
    label: "Organic search",
    title: "Pickfords",
    line: "Organic content clicks up 39% — held and grew straight through the 2026 Google core updates.",
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1000&q=72&auto=format&fit=crop",
  },
  {
    slug: "b2b-marketing",
    label: "B2B marketing · AEO",
    title: "MovePlus",
    line: "100% of qualified leads came via country blogs, with organic traffic up 81%.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=72&auto=format&fit=crop",
  },
  {
    slug: "backlinks-referral",
    label: "Backlinks & referral",
    title: "Shira Medtech",
    line: "Referral traffic up 118% while holding #1 on the core commercial term.",
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
