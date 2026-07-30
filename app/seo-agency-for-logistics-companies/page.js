import ScrollProgress from "../components/ScrollProgress";
import Nav from "../components/Nav";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import SearchDemo from "../components/SearchDemo";
import TextReveal from "../components/TextReveal";
import Typewriter from "../components/Typewriter";
import ServicesConsole from "../components/ServicesConsole";
import WhyCards from "../components/WhyCards";

export const metadata = {
  title: "SEO Agency for Logistics Companies | MAAI",
  description:
    "SEO and AEO for logistics businesses. We build the search visibility that gets your company found by shippers and procurement teams before they contact anyone.",
  alternates: { canonical: "/seo-agency-for-logistics-companies" },
};

const SEARCH_QUERIES = [
  { q: "best freight forwarder for european lanes", cat: "Freight" },
  { q: "3pl warehousing provider uk", cat: "Warehousing" },
  { q: "road haulage company near me", cat: "Haulage" },
  { q: "cold chain logistics provider", cat: "Cold chain" },
  { q: "last mile delivery partner", cat: "Last mile" },
];

const NEED = [
  "Your buyers search for freight, warehousing and delivery partners before they contact anyone.",
  "Procurement now vets carriers and providers through Google and AI assistants.",
  "The company that owns the answer gets the enquiry.",
  "Every contract you never heard about started with a search you were absent from.",
  "Visibility at the moment of intent is now a revenue channel.",
];

const METHOD = [
  {
    n: "01",
    k: "Foundation",
    t: "Technical SEO foundation",
    d: "Depot and carrier sites tend to be slow, template-built and thin on crawlable content. We clear the rendering, speed and indexing problems first, so your lane and service pages can compete instead of sinking below the fold.",
    img: "photo-1561118303-3686864b417b",
    alt: "Shipping containers stacked at a freight terminal",
  },
  {
    n: "02",
    k: "Intent",
    t: "Search intent mapping",
    d: "A freight forwarder, a 3PL buyer and a next-day courier customer search in completely different language. We map the terms behind each mode, lane and service, then build a page that answers each — not one catch-all that ranks for none.",
    img: "photo-1601584115197-04ecc0da31d7",
    alt: "Haulage truck on a freight route",
  },
  {
    n: "03",
    k: "AEO",
    t: "Answer Engine Optimisation",
    d: "Ask an assistant to name a carrier for a route and it assembles the answer from structured, verifiable sources. We model your modes, coverage and track record so your company is named, not left off the list.",
    img: "photo-1774698078446-59299e016718",
    alt: "Freight being loaded onto a cargo aircraft",
  },
  {
    n: "04",
    k: "Authority",
    t: "Compounding authority",
    d: "National networks outspend you on ads, not on trust. We earn the trade coverage, reviews and links that make your rankings hard to displace — and keep enquiries arriving lane after lane, quarter after quarter.",
    img: "photo-1516400208832-007613167c28",
    alt: "Aerial view of a freight rail yard",
  },
];

const WHY_ITEMS = [
  { n: "01", h: "Sector depth", p: "We specialise and go deep on your industry rather than spreading thin." },
  { n: "02", h: "Search as engineering", p: "We treat search as engineering and growth as a discipline, with every figure traceable to a named data source." },
  { n: "03", h: "Reporting in the open", p: "You see the growth and the gaps in the same report, every month." },
  { n: "04", h: "Built to compound", p: "We build for compounding results that hold their value over years." },
];

const SERVICES = [
  {
    k: "technical-seo",
    name: "Technical SEO & site architecture",
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
    blurb: "Structuring your expertise so AI assistants cite your company when buyers ask who provides in your category.",
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
    name: "Digital PR & authority building",
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
    q: "Why does a logistics company need SEO and AEO in 2026?",
    a: "Your buyers research carriers and providers through search and AI assistants before they ever reach out. If your company is absent from those answers, you are cut from the shortlist before the conversation begins. SEO and AEO put you in front of buyers at the exact moment they are deciding.",
  },
  {
    q: "How is the logistics buyer journey different from other industries?",
    a: "Logistics buying cycles are long, technical, and high in value. A single decision can involve procurement, operations and finance, each searching in different language at different stages. We map this full journey so your company appears with authority at every touchpoint, not only the final search.",
  },
  {
    q: "Which parts of the logistics industry do you work with?",
    a: "We work across the sector, including freight forwarding, road haulage, warehousing and fulfilment, third party logistics, cold chain, last mile and courier services, removals and self storage. We tailor the search strategy to how buyers in your specific segment research and decide.",
  },
  {
    q: "How long does SEO take to work for a logistics business?",
    a: "Technical fixes can move positions within weeks. Terms you already sit close to usually move within one to two months. Competitive commercial terms build over several quarters. We report position movement monthly, so you can see the trajectory well before the revenue arrives.",
  },
  {
    q: "What is AEO and how is it different from SEO?",
    a: "SEO earns your visibility in traditional search engines. AEO earns your visibility in AI answer engines, where buyers increasingly ask for provider recommendations. We structure your expertise so both channels recognise and cite your company as a trusted authority.",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── hero ── */}
      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">Logistics</span>
            <TextReveal as="h1" text="SEO and AEO for Logistics Companies" />
            <p className="scx-hero-type">
              Built for{" "}
              <Typewriter words={["enquiries", "freight volume", "your lanes"]} />
            </p>
            <p className="scx-lede">
              Shippers and procurement teams search for logistics partners before they
              call one. We make sure your company is the one they find, trust, and
              shortlist across search engines and AI answer engines.
            </p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/#contact">Book a strategy call</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img
              src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=1200&q=75&auto=format&fit=crop"
              alt="Freight truck on a long-distance route"
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
            <SearchDemo
              queries={SEARCH_QUERIES}
              answerLead="Buyers researching this get a shortlist — and "
              answerMark="your company"
              answerTail=" is cited as a trusted logistics partner."
              chips={["your company", "industry directory", "trade publication"]}
            />
          </div>
        </div>
      </section>

      {/* ── do owners need to invest in SEO ── */}
      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">Do logistics business owners need to invest in SEO in 2026?</p>
            <TextReveal as="h2" text="Short answer: yes." />
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
            <TextReveal as="h2" text="How we win logistics search" />
            <p>
              Your buyers search in precise, high-value language across a long buying
              cycle. We map that behaviour and turn every stage into a ranking asset.
            </p>
          </div>
          <div className="scx-rows">
            {METHOD.map((m, i) => (
              <article className={`scx-row${i % 2 === 1 ? " scx-row--rev" : ""} reveal`} key={m.n}>
                <div className={`scx-row-media${m.asset ? " scx-row-media--asset" : ""}`}>
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
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=75&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>Visibility earned at the point of intent keeps returning — quarter after quarter.</p>
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

          <WhyCards items={WHY_ITEMS} />

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
