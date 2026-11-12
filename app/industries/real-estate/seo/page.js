import ServicePage from "../../../components/ServicePage";

export const metadata = {
  title: "Real Estate SEO Services | SEO for Estate Agents and Realtors | MAAI",
  description:
    "Real estate SEO services for estate agents, realtors, developers and property managers. Rank for buyer, seller and landlord searches in Google and AI search.",
  alternates: { canonical: "/industries/real-estate/seo" },
};

const c = {
  h1: "Real Estate SEO Services",
  intro:
    "Our real estate SEO services help estate agents, realtors, property developers and property managers rank for the searches buyers, sellers and landlords make. We build area pages, listing structure and local authority, so your agency shows up in Google, the map pack and AI answers before the portals do.",
  formTitle: "Get your free real estate SEO audit",
  formButton: "Get my free audit",
  howHeading: "How we run your real estate",
  howEm: "SEO?",
  steps: [
    { t: "Audit", d: "We review your site, listings, area pages and Google Business Profiles against local competitors and portals." },
    { t: "Map demand", d: "We find the buyer, seller, landlord and valuation searches in every area you cover." },
    { t: "Build", d: "We create area guides, valuation pages and service pages that rank and convert." },
    { t: "Grow authority", d: "We earn local links, reviews and citations, and report rankings and leads monthly." },
  ],
  casesHeading: "SEO that grew business",
  cases: ["removals", "logistics"],
  ring: {
    label: "Real estate SEO problems we fix",
    h1: "SEO for estate agents",
    h2: "and",
    em: "realtors",
    lede:
      "Property portals dominate broad searches, so estate agents and realtors win on local, valuation and area-specific terms. We target the searches where your local knowledge beats a national portal, and make sure every page leads to a valuation or viewing request.",
    items: [
      { t: "Portals outrank you", d: "National property portals take the broad searches in your own area." },
      { t: "No area pages", d: "Buyers searching by neighbourhood find nothing from your agency." },
      { t: "Duplicate listing content", d: "Feed-driven listings repeat portal text and rank poorly." },
      { t: "Expired listings indexed", d: "Sold and let properties clutter search and waste crawl budget." },
      { t: "Weak valuation pages", d: "Sellers searching for a valuation land on competitors." },
      { t: "Incomplete Google Business Profile", d: "Each branch needs its own optimised profile and reviews." },
      { t: "Slow property search", d: "Heavy listing pages lose mobile buyers." },
      { t: "No schema markup", d: "Missing RealEstateAgent and listing schema hides key details." },
      { t: "Thin landlord content", d: "Lettings and property management searches go unanswered." },
      { t: "Few local links", d: "Without local authority you cannot outrank established agents." },
      { t: "Invisible in AI answers", d: "AI tools recommend agents with clear, trusted information." },
      { t: "No lead tracking", d: "Without tracking you cannot see which pages win instructions." },
    ],
  },
  teamHeading: "Your real estate SEO team, built into your business.",
  teamText:
    "We work alongside your branch managers, marketing and sales teams. Every month we update area pages, keep branch profiles current, earn local links and report which pages bring valuations and viewings. We flag new opportunities in your areas before competitors take them.",
  teamStats: [["10K+", "PAGES CHECKED ACROSS CLIENTS"], ["200+", "FIXES SHIPPED TO GAIN VISIBILITY"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "Real estate SEO for Google and",
    em: "AI search.",
    text:
      "Buyers, sellers and landlords start with search, and more of them now ask AI tools to recommend a local agent. Real estate SEO puts your agency in both places, with your own pages as the source rather than a portal listing.",
    link: { t: "See our local SEO for real estate", href: "/industries/real-estate/local-seo" },
    button: "Get your free audit",
    stats: [
      { n: "76%", l: "of people who search on their smartphones for something nearby visit a business within a day", t: "Local searches act fast", d: "Ranking locally puts your branches in front of buyers and sellers ready to act.", src: "Google" },
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Most property pages go unseen", d: "Area and valuation pages need SEO to bring enquiries.", src: "Ahrefs, 2023" },
      { n: "25%", l: "predicted drop in search engine volume by 2026 as buyers move to AI chatbots", t: "AI is the new shortlist", d: "Being cited in AI answers keeps your agency on the shortlist.", src: "Gartner, 2024" },
    ],
  },
  faqs: [
    { q: "What is real estate SEO?", a: ["Real estate SEO is optimising an agency, developer or property manager website so it ranks for buyer, seller, landlord and area searches in Google and AI search."] },
    { q: "How does SEO work for estate agents?", a: ["Estate agents win on local and valuation searches. We build area pages, optimise each branch's Google Business Profile and earn local links. See our ", { t: "local SEO for real estate", href: "/industries/real-estate/local-seo" }, "."] },
    { q: "Is SEO for realtors different from SEO for UK estate agents?", a: ["The principles are the same. Search terms, portals and market language differ, so we plan keywords for each market we target."] },
    { q: "What are the best SEO keywords for real estate?", a: ["The most valuable terms combine an area with intent, such as “estate agents in [area]”, “house valuation [area]” or “property management [area]”."] },
    { q: "Can my agency outrank property portals?", a: ["On broad terms, rarely. On area, valuation and niche searches, a well-built agency site often can, and those searches bring higher-intent leads."] },
    { q: "Do you audit real estate websites?", a: ["Yes. Our ", { t: "website audit for real estate agents", href: "/industries/real-estate/seo-audit" }, " covers listings, area pages, speed and local profiles."] },
    { q: "Do you build links for real estate sites?", a: ["Yes, from local press, community sites and property publications through our ", { t: "link building services", href: "/link-building-services" }, "."] },
    { q: "Can AI search recommend my agency?", a: ["Yes. Clear branch information, reviews and structured data help AI tools name you. See our ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, "."] },
    { q: "Do you work with property management and lettings companies?", a: ["Yes. Landlord and tenant searches follow the same local pattern, and we often pair them with ", { t: "conversion rate optimisation", href: "/conversion-rate-optimisation" }, " on enquiry forms."] },
    { q: "How much do real estate SEO services cost?", a: ["Cost depends on the number of branches and areas you cover. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you where your agency ranks in your areas today, and what to fix first.",
  ctaAlt: { pre: "Want a full review first?", t: "See our real estate website audit", href: "/industries/real-estate/seo-audit" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
