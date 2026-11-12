import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Local SEO Services | GBP and GMB Optimisation | MAAI",
  description:
    "Local SEO services and Google Business Profile optimisation for removals, self storage, real estate and multi-location brands. Rank in the map pack and win local enquiries.",
  alternates: { canonical: "/local-seo-services" },
};

const c = {
  h1: "Local SEO Services: GBP and GMB Optimisation",
  intro:
    "Our local SEO services cover Google Business Profile optimisation, local citations, reviews and location pages. We help removals firms, self storage operators, estate agents and multi-location brands rank in the map pack and turn nearby searches into calls.",
  formTitle: "Get your free local SEO audit",
  formButton: "Get my free audit",
  howHeading: "How we run your local",
  howEm: "SEO?",
  steps: [
    { t: "Audit", d: "We check your Google Business Profiles, citations, reviews and location pages against local competitors." },
    { t: "Optimise", d: "We fix categories, services, photos and descriptions on every profile." },
    { t: "Build", d: "We create location pages, consistent citations and a steady flow of reviews." },
    { t: "Track", d: "We report map pack rankings, calls and direction requests every month." },
  ],
  casesHeading: "Local SEO that grew business",
  cases: ["removals", "logistics"],
  ring: {
    label: "Local SEO problems we fix",
    h1: "Google Business Profile",
    h2: "(GBP and GMB)",
    em: "optimisation",
    lede:
      "Your Google Business Profile is often the first thing local buyers see. We optimise every profile, fix inconsistent listings and grow reviews, so you show up in the map pack when people nearby search for your service.",
    items: [
      { t: "Wrong primary category", d: "The wrong category stops you showing for your main service." },
      { t: "Incomplete profile", d: "Missing services, hours and photos lower your local ranking." },
      { t: "Few recent reviews", d: "Low review volume and slow replies hold back map pack visibility." },
      { t: "Inconsistent NAP details", d: "Different names, addresses or phone numbers confuse search engines." },
      { t: "Duplicate listings", d: "Two profiles for one location split your rankings." },
      { t: "No location pages", d: "Without a page per area, you miss searches outside your main town." },
      { t: "Missing local citations", d: "Absent directory listings weaken local trust signals." },
      { t: "Unverified profiles", d: "Unverified locations can be edited by anyone or hidden." },
      { t: "No Google Posts", d: "Inactive profiles look stale next to busy competitors." },
      { t: "Unanswered questions", d: "Open Q&A lets others answer for your business." },
      { t: "Multi-location gaps", d: "Branches managed separately drift out of date." },
      { t: "No call tracking", d: "Without tracking you cannot see which profile wins enquiries." },
    ],
  },
  teamHeading: "Your local SEO team, built into your business.",
  teamText:
    "We work alongside your branch managers, marketing and sales teams. Every month we update profiles, reply to reviews, keep listings consistent and track which locations win calls. We flag problems such as suspended profiles or duplicate listings before they cost you enquiries.",
  teamStats: [["+39%", "ORGANIC CLICKS FOR A UK REMOVALS BRAND"], ["5", "REMOVALS AND STORAGE BRANDS SUPPORTED"], ["UK + AU", "LOCAL MARKETS WE WORK IN"]],
  why: {
    heading: "GBP and GMB rankings for",
    em: "local enquiries.",
    text:
      "Local buyers decide fast. The businesses in the map pack get the calls, the direction requests and the website visits. Local SEO puts your locations there, and the same profile data feeds the answers AI tools give about businesses near your customers.",
    link: { t: "More on AI search optimisation", href: "/ai-search-optimisation" },
    button: "Get your free local SEO audit",
    stats: [
      { n: "76%", l: "of people who search on their smartphones for something nearby visit a business within a day", t: "Local searches convert fast", d: "Showing up in the map pack puts you in front of buyers who are ready to act.", src: "Google" },
      { n: "58%", l: "of companies don't optimise for local search", t: "Your competitors leave gaps", d: "A well-run local SEO programme can win map pack spots others ignore.", src: "ReviewTrackers" },
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Location pages need SEO too", d: "Area pages only bring enquiries when they are built and linked to rank.", src: "Ahrefs, 2023" },
    ],
  },
  faqs: [
    { q: "What are local SEO services?", a: ["Local SEO services help your business rank for searches with local intent, such as “removals near me”. They cover Google Business Profile optimisation, citations, reviews and location pages."] },
    { q: "What is a Google Business Profile?", a: ["It is your free business listing on Google Search and Maps. It shows your services, reviews, opening hours and location, and it drives most map pack rankings."] },
    { q: "How do you set up a Google Business Profile?", a: ["Create the profile in Google Business Profile Manager, verify your location, choose the right primary category and complete every section. We handle setup and verification for single and multi-location brands."] },
    { q: "How do you rank in the Google map pack?", a: ["Relevance, distance and prominence decide map pack rankings. We improve relevance through your profile and location pages, and prominence through reviews, citations and ", { t: "link building", href: "/link-building-services" }, "."] },
    { q: "How do you get more Google reviews?", a: ["Ask at the right moment, after a job is done well, with a direct review link. We set up a simple review process and reply to every review for you."] },
    { q: "Do you manage profiles for multiple locations?", a: ["Yes. We manage multi-location profiles for brands with branches across the UK and Australia, keeping every listing consistent."] },
    { q: "Do you work with removals and self storage companies?", a: ["Yes. Local search drives most enquiries for ", { t: "removals and relocations", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " brands, and both are core industries for us."] },
    { q: "Does my website affect local rankings?", a: ["Yes. Fast, crawlable location pages support your profile. Our ", { t: "technical SEO services", href: "/technical-seo-services" }, " make sure they are found and indexed."] },
    { q: "How long does local SEO take to show results?", a: ["Profile fixes can lift visibility within weeks. Reviews, citations and location pages build stronger rankings over a few months."] },
    { q: "How much do local SEO services cost?", a: ["Cost depends on the number of locations and how competitive your area is. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you where your locations rank in the map pack today, and what to fix first.",
  ctaAlt: { pre: "Need a full review first?", t: "See our SEO audit services", href: "/seo-audit-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
