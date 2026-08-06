import ScrollProgress from "../../components/ScrollProgress";
import Nav from "../../components/Nav";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import SearchDemo from "../../components/SearchDemo";
import TextReveal from "../../components/TextReveal";
import Typewriter from "../../components/Typewriter";
import ServicesConsole from "../../components/ServicesConsole";
import WhyCards from "../../components/WhyCards";

export const metadata = {
  title: "SEO & AEO for supply chain companies — MAAI",
  description:
    "Your buyers shortlist suppliers through Google and AI assistants before procurement contacts you. MAAI builds the search visibility that puts your company in those answers at the point the shortlist is formed.",
};

const NEED = [
  "Procurement teams vet suppliers through search and AI assistants before any conversation begins.",
  "The supplier who owns the answer to the buying question enters the shortlist.",
  "Contracts you never hear about started with a search your company was absent from.",
  "Search visibility at the point of intent behaves as a demand channel, with compounding returns.",
];

const METHOD = [
  {
    n: "01",
    k: "Foundation",
    t: "Technical SEO foundation",
    d: "We resolve the structural, indexing and speed signals that determine whether your site can rank at all.",
    img: "photo-1504376830547-506dedfe1fe9",
    alt: "Loading dock bays at a distribution centre",
  },
  {
    n: "02",
    k: "Intent",
    t: "Search intent mapping",
    d: "We decode how procurement, operations and logistics buyers search, from early research through to vendor shortlisting, then build pages that meet them at each stage.",
    img: "photo-1707157281599-d155d1da5b4c",
    alt: "Analyst mapping buyer-search data across charts",
  },
  {
    n: "03",
    k: "AEO",
    t: "Answer Engine Optimisation",
    d: "We structure your expertise so AI answer engines cite your company when a buyer asks who supplies in your category.",
    img: "photo-1567789884554-0b844b597180",
    alt: "Automated robotic assembly line",
  },
  {
    n: "04",
    k: "Authority",
    t: "Compounding authority",
    d: "We build assets that hold their positions and grow in value across years, so visibility earned this quarter keeps returning in the next.",
    img: "photo-1578575437130-527eed3abbec",
    alt: "Container ship loading at a deep-water port",
  },
];

const SERVICES = [
  {
    k: "technical-seo",
    name: "Technical SEO & architecture",
    blurb: "The crawlability, speed and structure that decide whether anything you publish can rank at all.",
    inc: ["Crawl, index & render audit", "Core Web Vitals remediation", "Clean, canonical architecture"],
  },
  {
    k: "content",
    name: "On-page & content optimisation",
    blurb: "Pages tuned to how buyers actually phrase the problem — titles, structure and real substance.",
    inc: ["Intent-matched on-page", "Content depth & refreshes", "Internal linking model"],
  },
  {
    k: "keyword-strategy",
    name: "Search intent & keyword strategy",
    blurb: "A map of the questions buyers ask across the cycle, and the page that answers each one.",
    inc: ["Stage-mapped keyword model", "Competitor gap analysis", "Priority cluster roadmap"],
  },
  {
    k: "aeo",
    name: "Answer Engine Optimisation",
    blurb: "Structuring your expertise so AI assistants cite your company when buyers ask who supplies.",
    inc: ["Entity & topic modelling", "Answer-ready content blocks", "Citation-share tracking"],
  },
  {
    k: "schema",
    name: "Structured data & schema",
    blurb: "Machine-readable markup that helps search and AI engines understand — and feature — your pages.",
    inc: ["Organization & Service schema", "Product / FAQ / HowTo markup", "Validation & monitoring"],
  },
  {
    k: "digital-pr",
    name: "Digital PR & authority",
    blurb: "Earned coverage and editorial links from the publications your buyers already read and trust.",
    inc: ["Data-led PR campaigns", "Editorial link earning", "Brand entity building"],
  },
  {
    k: "reporting",
    name: "Ongoing performance reporting",
    blurb: "Live reporting that ties organic and AI visibility back to pipeline — wins and misses in the open.",
    inc: ["Monthly position movement", "Citation-share dashboard", "Pipeline attribution"],
  },
];

const FAQ = [
  {
    q: "Why does a supply chain company need SEO and AEO in 2026?",
    a: "Your buyers research suppliers through search engines and AI assistants before they reach out. If your company is absent from those answers, the shortlist forms without you. SEO and AEO place you in front of buyers at the point the decision is being shaped.",
  },
  {
    q: "How is the supply chain buying journey different?",
    a: "The cycles are long, technical and high in value. A single decision pulls in procurement, operations and finance, each searching in different language at a different stage. We map the full journey so your company appears with authority at every touchpoint, including the early research searches that decide who gets considered.",
  },
  {
    q: "Which parts of the supply chain do you work with?",
    a: "Freight and logistics, warehousing and fulfilment, procurement and sourcing, manufacturing supply, cold chain, and last-mile delivery. The search strategy is built around how buyers in your specific segment research and decide.",
  },
  {
    q: "What is AEO and how does it relate to SEO?",
    a: "SEO earns visibility in traditional search engines. AEO earns visibility in AI answer engines, where buyers increasingly ask for supplier recommendations directly. Both draw on the same foundations of technical health, subject depth and external authority, so we build them together.",
  },
  {
    q: "How long before we see results?",
    a: "Technical fixes can move positions within weeks. Content and authority work compounds over quarters. We report position movement monthly from Search Console, so you can see the trajectory before the revenue arrives.",
  },
  {
    q: "Do you work with companies that already have an in-house SEO?",
    a: "Yes. We work alongside internal teams on strategy, technical audits and AEO, or take full ownership where there is no internal resource.",
  },
];

export default function SupplyChainPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── hero ── */}
      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">Supply chain</span>
            <TextReveal as="h1" text="SEO & AEO for supply chain companies" />
            <p className="scx-hero-type">
              Built for{" "}
              <Typewriter
                words={[
                  "freight forwarders",
                  "3PL & fulfilment",
                  "cold chain operators",
                  "warehousing & racking",
                  "customs & bonded",
                  "procurement teams",
                ]}
              />
            </p>
            <p className="scx-lede">
              Your buyers shortlist suppliers through Google and AI assistants long
              before procurement contacts you. We build the search visibility that
              puts your company in those answers at the point the shortlist is being
              formed.
            </p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/#contact">Get in Touch</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=75&auto=format&fit=crop"
              alt="Container port — global supply chain"
              loading="eager"
            />
            <span className="scx-hero-tint" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* ── live search demo ── */}
      <section className="scx-search">
        <div className="wrap scx-search-inner">
          <div className="scx-search-head reveal">
            <p className="scx-eyebrow">Where the shortlist gets made</p>
            <TextReveal as="h2" text="Your buyers are already searching. The only question is who they find." />
          </div>
          <div className="scx-search-demo reveal">
            <SearchDemo />
          </div>
        </div>
      </section>

      {/* ── does your business need SEO ── */}
      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">Does your supply chain business need SEO in 2026?</p>
            <TextReveal as="h2" text="Yes — if your buyers research before they enquire." />
          </div>
          <ul className="scx-need-list">
            {NEED.map((n, i) => (
              <li className="scx-need-item reveal" key={i}>
                <span className="scx-need-n">0{i + 1}</span>
                <p>{n}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── how we win (alternating image rows) ── */}
      <section className="scx-win">
        <div className="wrap">
          <div className="scx-sec-head">
            <p className="scx-eyebrow">Our method</p>
            <TextReveal as="h2" text="How we win supply chain search" />
            <p>
              Four moves, run in order — each one earns the right to the next.
              No shortcuts, no vanity metrics.
            </p>
          </div>
          <div className="scx-rows">
            {METHOD.map((m, i) => (
              <article className={`scx-row${i % 2 === 1 ? " scx-row--rev" : ""} reveal`} key={m.n}>
                <div className="scx-row-media">
                  <img
                    src={`https://images.unsplash.com/${m.img}?w=1100&q=75&auto=format&fit=crop`}
                    alt={m.alt}
                    loading="lazy"
                  />
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

      {/* ── image band ── */}
      <section className="scx-band" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=75&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>Visibility earned at the point of intent keeps returning quarter after quarter.</p>
        </div>
      </section>

      {/* ── why MAAI (light spotlight cards + services) ── */}
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
            <ServicesConsole services={SERVICES} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="scx-faq">
        <div className="wrap scx-faq-inner">
          <TextReveal as="h2" className="scx-faq-h" text="Frequently asked" />
          <div className="scx-faq-list">
            {FAQ.map((f, i) => (
              <details className="scx-faq-item reveal" key={i}>
                <summary>
                  <span>{f.q}</span>
                  <span className="scx-faq-ic" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
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
