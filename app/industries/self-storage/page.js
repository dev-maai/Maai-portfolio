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
  title: "SEO for Self Storage Companies | MAAI",
  description:
    "SEO and AEO for self storage facilities. We get your site found when local customers search for units, compare prices, and ask AI assistants where to store.",
  alternates: { canonical: "/industries/self-storage" },
};

const SEARCH_QUERIES = [
  { q: "climate controlled storage near me", cat: "Local storage" },
  { q: "storage units near me", cat: "Local storage" },
  { q: "cheapest 10x10 storage unit", cat: "Price & size" },
  { q: "24 hour access storage facility", cat: "Access" },
  { q: "self storage prices in my area", cat: "Comparison" },
];

const NEED = [
  "Renters search “storage near me” and by size and price before they visit or call.",
  "The facilities that own the map pack and the first results take the move-ins.",
  "Every empty unit you carry started with a search your site did not answer.",
  "Local visibility compounds, so a facility that ranks stays full at a lower cost per move-in.",
];

const METHOD = [
  {
    n: "01",
    k: "Foundation",
    t: "Technical SEO foundation",
    d: "We resolve the site speed, structure, and indexing signals that decide whether your facility pages can rank at all.",
    img: "photo-1649313444539-a8900c5cdc54",
    alt: "Drive-up storage units under a clear sky",
  },
  {
    n: "02",
    k: "Intent",
    t: "Local and intent mapping",
    d: "We map how renters in your catchment actually search, by area, unit size, price, and access, then build pages that meet each one.",
    img: "photo-1694601618351-dbbbb2b8934f",
    alt: "Rows of numbered storage units",
  },
  {
    n: "03",
    k: "AEO",
    t: "Answer Engine Optimisation",
    d: "We structure your facility details so AI assistants name you when someone asks where to store in your area.",
    src: "/selfstorage/seo.jpg",
    alt: "Local map-pack results for a self storage search",
  },
  {
    n: "04",
    k: "Authority",
    t: "Compounding authority",
    d: "We build the local citations, reviews signals, and links that hold your positions and keep units filling year after year.",
    src: "/selfstorage/compounding-authority.jpg",
    alt: "Local reviews and ratings for a storage business",
  },
];

const WHY_ITEMS = [
  { n: "01", h: "Sector depth", p: "We work in storage and moving, so we already know how your customers search." },
  { n: "02", h: "Search as engineering", p: "Every recommendation traces back to a named data source." },
  { n: "03", h: "Reporting in the open", p: "We report the positions and move-ins that grew, and the ones that did not, monthly." },
  { n: "04", h: "Built to compound", p: "We build for occupancy that holds, not a one-off traffic spike." },
];

const SERVICES = [
  {
    k: "technical-seo",
    name: "Technical SEO & architecture",
    blurb: "The site speed, structure and indexing that decide whether your facility pages can rank at all.",
    inc: ["Crawl, index & render audit", "Core Web Vitals remediation", "Clean facility-page architecture"],
  },
  {
    k: "local-seo",
    name: "Local SEO & Google Business Profile",
    blurb: "The local signals that win the map pack — profile, categories and location pages tuned to your catchment.",
    inc: ["GBP optimisation & posts", "Local landing pages", "Map-pack ranking signals"],
  },
  {
    k: "keyword-strategy",
    name: "Search intent & keyword strategy",
    blurb: "A map of how renters search — by area, unit size, price and access — and the page that answers each.",
    inc: ["Area + size + price mapping", "Competitor gap analysis", "Priority page roadmap"],
  },
  {
    k: "aeo",
    name: "Answer Engine Optimisation",
    blurb: "Structuring your facility details so AI assistants name you when someone asks where to store nearby.",
    inc: ["Entity & location modelling", "Answer-ready facility data", "Citation-share tracking"],
  },
  {
    k: "schema",
    name: "Structured data & schema",
    blurb: "Machine-readable markup — LocalBusiness, Service, FAQ — that helps engines understand and feature your units.",
    inc: ["LocalBusiness & Service schema", "Unit / FAQ / review markup", "Validation & monitoring"],
  },
  {
    k: "reviews",
    name: "Reviews & local authority",
    blurb: "The reviews signals, citations and links that build trust and hold your local positions.",
    inc: ["Review generation flows", "Local citation building", "Editorial link earning"],
  },
  {
    k: "reporting",
    name: "Ongoing performance reporting",
    blurb: "Live reporting that ties local visibility back to move-ins — wins and misses in the open.",
    inc: ["Monthly position movement", "Map-pack & enquiry tracking", "Move-in attribution"],
  },
];

const FAQ = [
  {
    q: "Why does a self storage facility need SEO and AEO in 2026?",
    a: "Renters find and compare facilities through Google and AI assistants before they call or visit. If your site is absent from those results, you lose the move-in before the enquiry. SEO and AEO put your units in front of renters at the point they are deciding.",
  },
  {
    q: "How is self storage SEO different from other industries?",
    a: "Storage is won locally. Most searches carry a place, a unit size, or a price in them, and the map pack matters as much as the classic results. We build your local presence and your facility pages together so you appear across both.",
  },
  {
    q: "Do you work with single sites or multi-location operators?",
    a: "Both. For a single site we focus your whole catchment on one facility. For operators we build a location structure that ranks each site without the thin, duplicated pages that search engines discount.",
  },
  {
    q: "What is AEO and does it matter for storage?",
    a: "AEO is Answer Engine Optimisation. It earns your facility a mention when a renter asks an AI assistant where to store nearby. It rests on the same local signals as SEO, so we build both together.",
  },
  {
    q: "How long before we see more move-ins?",
    a: "Local and technical fixes can move positions within weeks. Competitive terms in a busy catchment build over a few months. We report position and enquiry movement monthly so you see the trajectory early.",
  },
  {
    q: "Do you work with facilities that already run Google Ads?",
    a: "Yes. Ads fill units today and stop when the budget stops. SEO builds visibility you keep at a falling cost per move-in. Most facilities benefit from both, with SEO carrying the compounding return.",
  },
];

export default function SelfStoragePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── hero ── */}
      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">Self storage</span>
            <TextReveal as="h1" text="SEO & AEO for Self Storage Companies" />
            <p className="scx-hero-type">
              Built for{" "}
              <Typewriter words={["occupancy", "move-ins", "your local map"]} />
            </p>
            <p className="scx-lede">
              Your customers search for storage before they ever call a facility. We get
              your units found at the moment someone in your catchment is comparing price,
              size, and distance, across Google and AI assistants.
            </p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/#contact">Get in touch.</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img
              src="https://images.unsplash.com/photo-1638847868668-a05a2f69622f?w=1200&q=75&auto=format&fit=crop"
              alt="Drive-up self storage units with roll-up doors"
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
            <p className="scx-eyebrow">Where the move-in gets decided</p>
            <TextReveal as="h2" text="Your customers are already searching. The only question is whose units they find." />
          </div>
          <div className="scx-search-demo reveal">
            <SearchDemo
              queries={SEARCH_QUERIES}
              answerLead="People comparing facilities in this area get a shortlist, and "
              answerMark="your facility"
              answerTail=" is named as a top-rated option."
              chips={["your facility", "Google Business Profile", "local reviews"]}
            />
          </div>
        </div>
      </section>

      {/* ── does your business need SEO ── */}
      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">Does your self storage business need SEO in 2026?</p>
            <TextReveal as="h2" text="Yes - if your units fill from local search." />
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
            <TextReveal as="h2" text="How we win self storage search" />
            <p>
              Four moves, run in order — each one earns the right to the next.
              No shortcuts, no vanity metrics.
            </p>
          </div>
          <div className="scx-rows">
            {METHOD.map((m, i) => (
              <article className={`scx-row${i % 2 === 1 ? " scx-row--rev" : ""} reveal`} key={m.n}>
                <div className={`scx-row-media${m.src ? " scx-row-media--asset" : ""}`}>
                  <img
                    src={m.src || `https://images.unsplash.com/${m.img}?w=1100&q=75&auto=format&fit=crop`}
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
          src="https://images.unsplash.com/photo-1763663196513-0bede0ca52dc?w=1600&q=75&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>Local visibility earned at the point of intent keeps your units filling season after season.</p>
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
