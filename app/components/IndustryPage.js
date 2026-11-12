/* Shared layout for industry x service pages, matching the industry
   landing page design (e.g. /industries/supply-chain). */
import Nav from "./Nav";
import Cta from "./Cta";
import Footer from "./Footer";
import SiteEffects from "./SiteEffects";
import SearchDemo from "./SearchDemo";
import TextReveal from "./TextReveal";
import Typewriter from "./Typewriter";
import ServicesConsole from "./ServicesConsole";
import WhyCards from "./WhyCards";

const imgUrl = (m, w) => m.src || `https://images.unsplash.com/${m.img}?w=${w}&q=75&auto=format&fit=crop`;

/* FAQ answers: a string, or an array of strings and {t, href} links */
const toText = (a) => (Array.isArray(a) ? a.map((x) => (typeof x === "string" ? x : x.t)).join("") : a);
const toJsx = (a) =>
  Array.isArray(a)
    ? a.map((x, i) => (typeof x === "string" ? x : <a key={i} href={x.href}>{x.t}</a>))
    : a;

export default function IndustryPage({ c }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: toText(f.a) } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />

      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">{c.kicker}</span>
            <TextReveal as="h1" text={c.h1} />
            <p className="scx-hero-type">
              Built for <Typewriter words={c.typeWords} />
            </p>
            <p className="scx-lede">{c.lede}</p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/book">Get in touch.</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img src={imgUrl(c.hero, 1200)} alt={c.hero.alt} loading="eager" />
            <span className="scx-hero-tint" aria-hidden="true" />
          </div>
        </div>
      </header>

      <section className="scx-search">
        <div className="wrap scx-search-inner">
          <div className="scx-search-head reveal">
            <p className="scx-eyebrow">Where the shortlist gets made</p>
            <TextReveal as="h2" text={c.searchH2} />
          </div>
          <div className="scx-search-demo reveal">
            <SearchDemo />
          </div>
        </div>
      </section>

      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">{c.needEyebrow}</p>
            <TextReveal as="h2" text={c.needH2} />
          </div>
          <ul className="scx-need-list">
            {c.need.map((n, i) => (
              <li className="scx-need-item reveal" key={i}>
                <span className="scx-need-n">0{i + 1}</span>
                <p>{n}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scx-win">
        <div className="wrap">
          <div className="scx-sec-head">
            <p className="scx-eyebrow">Our method</p>
            <TextReveal as="h2" text={c.methodH2} />
            <p>{c.methodLede}</p>
          </div>
          <div className="scx-rows">
            {c.method.map((m, i) => (
              <article className={`scx-row${i % 2 === 1 ? " scx-row--rev" : ""} reveal`} key={m.n}>
                <div className={`scx-row-media${m.src ? " scx-row-media--asset" : ""}`}>
                  <img src={imgUrl(m, 1100)} alt={m.alt} loading="lazy" />
                  <span className="scx-row-tint" aria-hidden="true" />
                </div>
                <div className="scx-row-copy">
                  <span className="scx-row-k"><i>{m.n}</i>{m.k}</span>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scx-band" aria-hidden="true">
        <img src={imgUrl(c.band, 1600)} alt="" loading="lazy" />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>{c.bandText}</p>
        </div>
      </section>

      <section className="scx-why">
        <div className="wrap">
          <div className="scx-why-head reveal">
            <p className="scx-eyebrow">Why MAAI</p>
            <TextReveal as="h2" text="Built like engineers, accountable like partners." />
            <p className="scx-why-lede">
              We go narrow on sectors, treat every call as a data problem, and put the
              wins and the misses on the same page.
            </p>
          </div>
          <WhyCards />
          <div className="scx-cap reveal">
            <span className="scx-cap-l">Everything we cover under SEO &amp; AEO</span>
            <ServicesConsole services={c.services} links={c.serviceLinks || {}} />
          </div>
        </div>
      </section>

      <section className="scx-faq">
        <div className="wrap scx-faq-inner">
          <TextReveal as="h2" className="scx-faq-h" text="Frequently asked" />
          <div className="scx-faq-list">
            {c.faqs.map((f, i) => (
              <details className="scx-faq-item reveal" key={i}>
                <summary>
                  <span>{f.q}</span>
                  <span className="scx-faq-ic" aria-hidden="true" />
                </summary>
                <p>{toJsx(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
