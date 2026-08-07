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
  title: "SEO for Removals & Relocation Companies | MAAI",
  description:
    "SEO and AEO for removals and relocation firms. We win the local and corporate searches your customers run before they book, and get you cited by AI assistants.",
  alternates: { canonical: "/industries/removals-and-relocations" },
};

const SEARCH_QUERIES = [
  { q: "best removals company for an international move", cat: "Removals" },
  { q: "removals near me", cat: "Local" },
  { q: "office relocation company", cat: "Commercial" },
  { q: "house removals quote", cat: "Home move" },
  { q: "international movers to spain", cat: "International" },
];

const NEED = [
  "Movers search by service and area, from “removals near me” to “international removals” and “office relocation,” before they contact anyone.",
  "The firm that owns the local results and the answer gets the quote request.",
  "Every job you never quoted for started with a search your site was absent from.",
  "Visibility compounds, so a firm that ranks keeps its diary full at a lower cost per booking.",
];

const METHOD = [
  {
    n: "01",
    k: "Foundation",
    t: "Technical SEO foundation",
    d: "We resolve the structure, speed, and indexing signals that decide whether your service and area pages can rank at all.",
    src: "/removals/foundation-dashboard.jpg",
    alt: "SEO performance and Core Web Vitals dashboard",
  },
  {
    n: "02",
    k: "Intent",
    t: "Local and intent mapping",
    d: "We map how customers search across home, office, and international moves, by service and by area, then build pages that meet each one.",
    src: "/removals/intent-map.jpg",
    alt: "Map of local search demand across locations",
  },
  {
    n: "03",
    k: "AEO",
    t: "Answer Engine Optimisation",
    d: "We structure your services and coverage so AI assistants name your firm when someone asks who to move with.",
    src: "/removals/AEO.jpg",
    alt: "A mover wheeling boxes to a van",
  },
  {
    n: "04",
    k: "Authority",
    t: "Compounding authority",
    d: "We build the local citations, reviews, and links that hold your positions and keep bookings coming year after year.",
    src: "/removals/authority.jpg",
    alt: "A person carrying furniture on moving day",
  },
];

const WHY_ITEMS = [
  { n: "01", h: "Sector depth", p: "We work in moving and storage, so we already know how your customers search." },
  { n: "02", h: "Search as engineering", p: "Every recommendation traces back to a named data source." },
  { n: "03", h: "Reporting in the open", p: "We report the positions and bookings that grew, and the ones that did not, monthly." },
  { n: "04", h: "Built to compound", p: "We build a diary that stays full, not a one-off traffic spike." },
];

const SERVICES = [
  {
    k: "technical-seo",
    name: "Technical SEO & architecture",
    blurb: "The structure, speed and indexing that decide whether your service and area pages can rank at all.",
    inc: ["Crawl, index & render audit", "Core Web Vitals remediation", "Service & area page architecture"],
  },
  {
    k: "local-seo",
    name: "Local & service-area SEO",
    blurb: "The local signals that win the map pack across every area you cover — profile, categories and location pages.",
    inc: ["GBP optimisation & posts", "Service-area landing pages", "Map-pack ranking signals"],
  },
  {
    k: "keyword-strategy",
    name: "Search intent & keyword strategy",
    blurb: "A map of how movers search — home, office, international, by service and area — and the page that answers each.",
    inc: ["Service + area mapping", "Competitor gap analysis", "Priority page roadmap"],
  },
  {
    k: "aeo",
    name: "Answer Engine Optimisation",
    blurb: "Structuring your services and coverage so AI assistants name your firm when someone asks who to move with.",
    inc: ["Entity & coverage modelling", "Answer-ready service data", "Citation-share tracking"],
  },
  {
    k: "schema",
    name: "Structured data & schema",
    blurb: "Machine-readable markup — LocalBusiness, MovingCompany, FAQ, Review — that helps engines understand and feature your firm.",
    inc: ["LocalBusiness & Service schema", "FAQ / review markup", "Validation & monitoring"],
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
    blurb: "Live reporting that ties local visibility back to bookings — wins and misses in the open.",
    inc: ["Monthly position movement", "Map-pack & enquiry tracking", "Booking attribution"],
  },
];

const FAQ = [
  {
    q: "Why does a removals company need SEO and AEO in 2026?",
    a: "Customers find and compare movers through Google and AI assistants before they request a quote. If your firm is absent from those results, you lose the booking before the enquiry. SEO and AEO put you in front of customers at the point they are deciding.",
  },
  {
    q: "How is removals SEO different from other industries?",
    a: "Moving is won across local and service lines at once. A home mover, an office manager, and someone relocating overseas all search differently. We build your local presence and your service pages together so you appear for each.",
  },
  {
    q: "Do you work with home movers, office moves, or international relocation?",
    a: "All three. We build a page and content structure that ranks each service and each area you cover, without the thin, duplicated pages that search engines discount.",
  },
  {
    q: "What is AEO and does it matter for removals?",
    a: "AEO is Answer Engine Optimisation. It earns your firm a mention when a customer asks an AI assistant who to move with. It rests on the same signals as SEO, so we build both together.",
  },
  {
    q: "How long before we see more bookings?",
    a: "Local and technical fixes can move positions within weeks. Competitive service and area terms build over a few months. We report position and enquiry movement monthly so you see the trajectory early.",
  },
  {
    q: "Do you work with firms that already run Google Ads or use lead sites?",
    a: "Yes. Ads and lead sites bring jobs today and stop the moment you stop paying, often at a shared price. SEO brings customers looking for your firm by name and service, at a falling cost per booking. Most firms benefit from both.",
  },
];

export default function RemovalsPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── hero ── */}
      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">Removals &amp; relocations</span>
            <TextReveal as="h1" text="SEO & AEO for Removals & Relocation Companies" />
            <p className="scx-hero-type">
              Built for{" "}
              <Typewriter words={["bookings", "move volume", "your service area"]} />
            </p>
            <p className="scx-lede">
              Your customers search for a mover before they ever request a quote. We get
              your company found at the moment someone is comparing firms for a home move,
              an office relocation, or an international move, across Google and AI assistants.
            </p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/#contact">Get in touch.</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img
              src="https://images.unsplash.com/photo-1783473007464-1dbf2ff30dec?w=1200&q=75&auto=format&fit=crop"
              alt="Removals truck and a mover carrying furniture"
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
            <p className="scx-eyebrow">Where the booking gets decided</p>
            <TextReveal as="h2" text="Your customers are already searching. The only question is whose company they find." />
          </div>
          <div className="scx-search-demo reveal">
            <SearchDemo
              queries={SEARCH_QUERIES}
              answerLead="People comparing movers get a shortlist, and "
              answerMark="your company"
              answerTail=" is named as a trusted option for the move."
              chips={["your company", "review sites", "directory listings"]}
            />
          </div>
        </div>
      </section>

      {/* ── do owners need to invest in SEO ── */}
      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">Do removals business owners need to invest in SEO in 2026?</p>
            <TextReveal as="h2" text="Yes — if your customers search before they book." />
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
            <TextReveal as="h2" text="How we win removals search" />
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
          src="https://images.unsplash.com/photo-1714647211902-bb711d643a17?w=1600&q=75&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>Local visibility earned at the point of intent keeps your diary full — season after season.</p>
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
