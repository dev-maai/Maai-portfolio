/* Case studies — the expanding image-accordion template; each panel links to its
   case-study page. Four real case studies live now. */
const CASES = [
  {
    slug: "pickfords",
    label: "Organic search",
    title: "Pickfords",
    line: "Organic content clicks up 39%, held and grew straight through the 2026 Google core updates.",
    img: "/case-studies/pickfords.png",
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
    img: "/case-studies/shira-medtech.png",
  },
  {
    slug: "anglo-pacific",
    label: "SEO · AEO · GEO",
    title: "Anglo Pacific",
    line: "Organic clicks up 53% through a combined SEO, AEO and GEO strategy.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1000&q=72&auto=format&fit=crop",
  },
];

export default function Values() {
  return (
    <section className="values" id="values">
      <div className="wrap">
        <h2 className="reveal">Case studies.</h2>
        <div className="holds" role="list">
          {CASES.map((c, i) => (
            <a className="holds-panel reveal" role="listitem" href={`/case-studies/${c.slug}`} key={`${c.slug}-${i}`}>
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
