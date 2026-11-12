import ServicePage from "../../../components/ServicePage";

export const metadata = {
  title: "Local SEO for Real Estate Agents | GBP and GMB for Estate Agents | MAAI",
  description:
    "Local SEO for real estate agents and estate agency branches. Google Business Profile (GBP and GMB) optimisation, area pages and reviews that win map pack rankings.",
  alternates: { canonical: "/industries/real-estate/local-seo" },
};

const c = {
  h1: "Local SEO for Real Estate Agents",
  intro:
    "Our local SEO for real estate gets every branch into the map pack for the areas you sell and let in. We optimise each Google Business Profile, build area pages and grow reviews, so local buyers, sellers and landlords find your agency first.",
  formTitle: "Get your free local SEO audit",
  formButton: "Get my free audit",
  howHeading: "How we run local SEO for your",
  howEm: "agency?",
  steps: [
    { t: "Audit branches", d: "We check every branch profile, citation and area page against local agents." },
    { t: "Optimise profiles", d: "We fix categories, services, photos and posts on every Google Business Profile." },
    { t: "Build area pages", d: "We create a page for every neighbourhood you cover, linked to the right branch." },
    { t: "Grow reviews", d: "We set up a review process after every sale or let, and reply on your behalf." },
  ],
  casesHeading: "Local SEO that grew business",
  cases: ["removals", "logistics"],
  ring: {
    label: "Local SEO problems estate agents face",
    h1: "Google Business Profile",
    h2: "(GBP and GMB) for",
    em: "estate agents",
    lede:
      "For estate agents, the map pack is where local sellers choose who to call for a valuation. A complete, active Google Business Profile for each branch, backed by reviews and area pages, is what puts you there.",
    items: [
      { t: "One profile for many branches", d: "Each branch needs its own verified profile to rank locally." },
      { t: "Wrong category", d: "“Real estate agency” set up incorrectly hides you from key searches." },
      { t: "Few recent reviews", d: "Sellers compare review counts before booking a valuation." },
      { t: "No area pages", d: "Searches for each neighbourhood land on competitors." },
      { t: "Inconsistent branch details", d: "Different addresses or numbers across sites weaken rankings." },
      { t: "No Google Posts", d: "Inactive profiles look stale next to busy local agents." },
      { t: "Missing listing photos", d: "Profiles without recent photos get fewer clicks." },
      { t: "Unanswered questions", d: "Open Q&A lets others answer for your agency." },
      { t: "Duplicate listings", d: "Old branch listings split your rankings." },
      { t: "No local citations", d: "Missing directory listings lower local trust." },
      { t: "Untracked calls", d: "Without tracking you cannot see which branch wins enquiries." },
      { t: "Portal dependence", d: "Relying on portals leaves your own brand invisible in local search." },
    ],
  },
  teamHeading: "Your local SEO team, built into your agency.",
  teamText:
    "We work alongside your branch managers and marketing team. Every month we post updates, reply to reviews, keep every listing consistent and report which branches win calls and valuation requests.",
  teamStats: [["+39%", "ORGANIC CLICKS FOR A UK REMOVALS BRAND"], ["5", "REMOVALS AND STORAGE BRANDS SUPPORTED"], ["UK + AU", "LOCAL MARKETS WE WORK IN"]],
  why: {
    heading: "Map pack rankings for",
    em: "estate agents.",
    text:
      "Sellers often choose an agent from the map pack and its reviews. Local SEO puts each branch there, and the same profile data feeds the agents AI tools recommend.",
    link: { t: "See our real estate SEO services", href: "/industries/real-estate/seo" },
    button: "Get your free local SEO audit",
    stats: [
      { n: "76%", l: "of people who search on their smartphones for something nearby visit a business within a day", t: "Local intent is urgent", d: "Map pack visibility puts branches in front of ready sellers and buyers.", src: "Google" },
      { n: "58%", l: "of companies don't optimise for local search", t: "Competitors leave gaps", d: "Well-run branch profiles win spots other agents ignore.", src: "ReviewTrackers" },
    ],
  },
  faqs: [
    { q: "What is local SEO for real estate?", a: ["It is optimising your agency's branches, profiles and area pages so you rank in local and map pack results for property searches in your areas."] },
    { q: "How do estate agents rank in the Google map pack?", a: ["A verified, complete Google Business Profile per branch, steady reviews, consistent listings and area pages on your site. Links from local sites help too, through our ", { t: "link building services", href: "/link-building-services" }, "."] },
    { q: "Should each branch have its own Google Business Profile?", a: ["Yes. Each staffed branch should have its own verified profile, with its own reviews, photos and area focus."] },
    { q: "How do estate agents get more Google reviews?", a: ["Ask after every completion or let with a direct review link, and reply to every review. We set up and run this process."] },
    { q: "What is the difference between GBP and GMB?", a: ["They are the same thing. Google My Business (GMB) was renamed Google Business Profile (GBP)."] },
    { q: "Do you also do wider real estate SEO?", a: ["Yes. See our ", { t: "real estate SEO services", href: "/industries/real-estate/seo" }, " for area guides, valuation pages and authority."] },
    { q: "Do you work with removals and self storage firms too?", a: ["Yes. Local search drives ", { t: "removals", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " enquiries in the same way."] },
    { q: "How long does local SEO take for estate agents?", a: ["Profile fixes can show within weeks. Reviews and area pages build stronger rankings over a few months."] },
    { q: "Does local SEO help AI recommendations?", a: ["Yes. AI tools often use Google Business Profiles and reviews. Learn more about ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, "."] },
    { q: "How much does local SEO for estate agents cost?", a: ["It depends on the number of branches. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you where each branch ranks in the map pack today, and what to fix first.",
  ctaAlt: { pre: "Covering more than local?", t: "See our local SEO services", href: "/local-seo-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
