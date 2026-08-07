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
  title: "SEO for SaaS Companies | MAAI",
  description:
    "SEO and AEO for SaaS. We win the category, comparison, and high-intent searches your buyers run before a trial, and get your product cited by AI assistants.",
  alternates: { canonical: "/industries/saas" },
};

const SEARCH_QUERIES = [
  { q: "best tool for [your category]", cat: "Software" },
  { q: "top alternatives to [competitor]", cat: "Comparison" },
  { q: "best crm for startups", cat: "Category" },
  { q: "is [product] worth the price", cat: "Evaluation" },
  { q: "cheapest [category] software for teams", cat: "Pricing" },
];

const NEED = [
  "Buyers search the category, the job, and your competitors’ names before they ever see your pricing page.",
  "The product that owns the comparison and the answer gets into the trial, and into the shortlist.",
  "Every deal you never competed for started with a search your product was absent from.",
  "Organic pipeline compounds, so it lowers your blended cost of acquisition while paid stays flat.",
];

const METHOD = [
  {
    n: "01",
    k: "Foundation",
    t: "Technical SEO foundation",
    d: "We resolve the rendering, crawl, and speed issues that keep product and content pages from ranking, which matter more on a JavaScript-heavy app.",
    img: "photo-1633356122544-f134324a6cee",
    alt: "Code editor for a JavaScript application",
  },
  {
    n: "02",
    k: "Intent",
    t: "Search intent mapping",
    d: "We map the full buyer journey, from the job-to-be-done searches through category, comparison, and alternative terms, then build pages that convert each stage.",
    img: "photo-1460925895917-afdab827c52f",
    alt: "Product analytics dashboard on a laptop",
  },
  {
    n: "03",
    k: "AEO",
    t: "Answer Engine Optimisation",
    d: "We structure your product’s proof and positioning so AI assistants cite you when a buyer asks for the best tool in your category.",
    src: "/Saas/aeo.jpg",
    alt: "Glowing circuit board traces",
  },
  {
    n: "04",
    k: "Authority",
    t: "Compounding authority",
    d: "We earn the reviews, mentions, and links that make your positions defensible against well-funded competitors.",
    src: "/Saas/authority.jpg",
    alt: "Developer working in a code editor",
    imgStyle: { objectPosition: "left center" },
  },
];

const WHY_ITEMS = [
  { n: "01", h: "Sector depth", p: "We understand product-led buying, so we already know how your users search." },
  { n: "02", h: "Search as engineering", p: "Every recommendation traces back to a named data source." },
  { n: "03", h: "Reporting in the open", p: "We report the positions and signups that grew, and the ones that did not, monthly." },
  { n: "04", h: "Built to compound", p: "We build organic pipeline that holds, not a launch-week spike." },
];

const SERVICES = [
  {
    k: "technical-seo",
    name: "Technical & product-page SEO",
    blurb: "Rendering, crawl and speed fixes so your product and content pages can rank — critical on a JavaScript-heavy app.",
    inc: ["JS render & crawl audit", "Core Web Vitals remediation", "Product-page architecture"],
  },
  {
    k: "content",
    name: "On-page & content optimisation",
    blurb: "Pages tuned to the job your buyers are hiring software for — titles, structure and real substance.",
    inc: ["Intent-matched on-page", "Content depth & refreshes", "Internal linking model"],
  },
  {
    k: "keyword-strategy",
    name: "Search intent & keyword strategy",
    blurb: "A map of the journey — job-to-be-done, category, comparison and alternatives — and the page that converts each.",
    inc: ["Journey-stage keyword model", "Competitor & alternative gaps", "Priority cluster roadmap"],
  },
  {
    k: "aeo",
    name: "Answer Engine Optimisation",
    blurb: "Structuring your proof and positioning so AI assistants name you as the best tool in your category.",
    inc: ["Entity & category modelling", "Answer-ready proof blocks", "Citation-share tracking"],
  },
  {
    k: "schema",
    name: "Structured data & schema",
    blurb: "Machine-readable markup — SoftwareApplication, FAQ, Review — that helps engines understand and feature your product.",
    inc: ["SoftwareApplication & Review schema", "FAQ / HowTo markup", "Validation & monitoring"],
  },
  {
    k: "digital-pr",
    name: "Digital PR & authority",
    blurb: "The reviews, mentions and editorial links that make your positions defensible against well-funded competitors.",
    inc: ["Data-led PR campaigns", "Review & G2 signals", "Editorial link earning"],
  },
  {
    k: "reporting",
    name: "Ongoing performance reporting",
    blurb: "Live reporting that ties organic and AI visibility back to signups — wins and misses in the open.",
    inc: ["Monthly position movement", "Signup & pipeline attribution", "Citation-share dashboard"],
  },
];

const FAQ = [
  {
    q: "Why does a SaaS company need SEO and AEO in 2026?",
    a: "Buyers research categories, compare tools, and ask AI assistants for recommendations before they sign up. If your product is missing from those answers, you never enter the trial. SEO and AEO put you in front of buyers at the point the shortlist forms.",
  },
  {
    q: "How is SaaS SEO different from other industries?",
    a: "The journey runs from a job-to-be-done search to category, comparison, and alternative terms, each with different intent and different conversion paths. We build for the whole journey, not only the branded search at the end.",
  },
  {
    q: "Do you work with early stage or scale-up SaaS?",
    a: "Both. Early stage, we win the achievable high-intent terms first to prove the channel. At scale, we build the topical depth and authority that hold a category.",
  },
  {
    q: "What is AEO and how does it relate to SEO?",
    a: "SEO earns visibility in search engines. AEO earns visibility inside AI assistants, where buyers increasingly ask which tool to use. Both rest on the same foundations of proof, depth, and authority, so we build them together.",
  },
  {
    q: "How long before SEO drives signups?",
    a: "Technical and on-page fixes can move positions within weeks. Category and comparison terms build over quarters. We report position and signup movement monthly, so progress is visible before the pipeline lands.",
  },
  {
    q: "Do you work alongside an in-house content or growth team?",
    a: "Yes. We work with internal teams on technical SEO, strategy, and AEO, or take full ownership where there is no internal resource.",
  },
];

export default function SaaSPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── hero ── */}
      <header className="scx-hero">
        <div className="wrap scx-hero-grid">
          <div className="scx-hero-copy">
            <span className="scx-kicker">SaaS</span>
            <TextReveal as="h1" text="SEO & AEO for SaaS Companies" />
            <p className="scx-hero-type">
              Built for{" "}
              <Typewriter words={["signups", "pipeline", "your category"]} />
            </p>
            <p className="scx-lede">
              Your buyers research the category, compare tools, and ask AI which one to
              pick long before they start a trial. We make sure your product is the one
              they find, trust, and shortlist across search engines and AI answer engines.
            </p>
            <div className="scx-hero-cta">
              <a className="btn amber" href="/#contact">Get in touch.</a>
            </div>
          </div>
          <div className="scx-hero-media reveal">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75&auto=format&fit=crop"
              alt="SaaS product analytics dashboard"
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
              answerLead="Buyers researching this get a shortlist, and "
              answerMark="your product"
              answerTail=" is cited as a leading option for the job."
              chips={["your product", "G2 & review sites", "comparison content"]}
            />
          </div>
        </div>
      </section>

      {/* ── does your business need SEO ── */}
      <section className="scx-need">
        <div className="wrap scx-need-grid">
          <div className="scx-need-head reveal">
            <p className="scx-eyebrow">Does your SaaS business need SEO in 2026?</p>
            <TextReveal as="h2" text="Yes — if buyers compare before they sign up." />
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
            <TextReveal as="h2" text="How we win SaaS search" />
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
                    style={m.imgStyle}
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
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=75&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="scx-band-tint" />
        <div className="wrap scx-band-copy">
          <p>Organic pipeline earned at the point of intent keeps compounding — release after release.</p>
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
