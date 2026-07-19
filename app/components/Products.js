"use client";

const ENGINES = [
  {
    cls: "e-organic",
    href: "#services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
    ),
    n: "01",
    title: "Organic Search",
    body: "Technical SEO, content architecture and digital PR that make you the strongest answer on classic search.",
    tags: ["Technical SEO", "Content clusters", "Digital PR"],
  },
  {
    cls: "e-answer",
    href: "#services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9z" /></svg>
    ),
    n: "02",
    title: "Answer-Engine Optimization",
    body: "Structured content, entity authority and citations that ChatGPT, Perplexity and AI Overviews actually retrieve.",
    tags: ["AEO / LLM SEO", "Entity authority", "Citations"],
  },
  {
    cls: "e-growth",
    href: "#accountability",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6" /></svg>
    ),
    n: "03",
    title: "Growth Intelligence",
    body: "A live reporting layer with attribution and monthly growth reports — every win, miss and fix, in the open.",
    tags: ["Attribution", "Live reports", "Accountability"],
  },
];

function track(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

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
          <div className="engines">
            {ENGINES.map((e) => (
              <a className={`engine reveal ${e.cls}`} href={e.href} key={e.n} onMouseMove={track}>
                <span className="engine-spot" aria-hidden="true"></span>
                <span className="engine-head">
                  <span className="engine-ico">{e.icon}</span>
                  <span className="engine-n" aria-hidden="true">{e.n}</span>
                </span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <ul className="engine-tags">
                  {e.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <span className="engine-go">Explore <i>&rarr;</i></span>
              </a>
            ))}
          </div>
          <p className="engines-foot reveal">
            <span aria-hidden="true">↳</span> Each engine feeds the next — search authority earns citations, citations earn presence, presence compounds.
          </p>
        </div>
      </section>
    </>
  );
}
