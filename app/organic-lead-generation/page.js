import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Organic Lead Generation | B2B and B2C SEO Lead Generation | MAAI",
  description:
    "Organic lead generation for B2B brands. SEO lead generation that brings qualified enquiries from Google and AI search for logistics, supply chain, real estate and removals companies.",
  alternates: { canonical: "/organic-lead-generation" },
};

const c = {
  h1: "Organic Lead Generation",
  intro:
    "Our organic lead generation turns search into a steady source of qualified B2B enquiries. We target the searches your buyers make when they are ready to choose a supplier, build the pages that answer them, and make sure those pages convert, so leads keep coming without paying for every click.",
  formTitle: "Get your free lead generation audit",
  formButton: "Get my free audit",
  howHeading: "How we run your organic lead",
  howEm: "generation?",
  steps: [
    { t: "Find intent", d: "We map the searches and AI prompts buyers use when they are ready to enquire." },
    { t: "Build pages", d: "We create service, location and comparison pages that answer those searches." },
    { t: "Convert", d: "We add clear calls to action, trust signals and short forms to every key page." },
    { t: "Attribute", d: "We track which pages and searches produce leads and report it every month." },
  ],
  casesHeading: "Organic lead generation that grew business",
  cases: ["supply", "logistics"],
  ring: {
    label: "Why organic traffic is not bringing leads",
    h1: "What is B2B",
    h2: "lead",
    em: "generation",
    lede:
      "B2B lead generation is the process of attracting businesses that may buy from you and turning them into enquiries. Organic lead generation does this through search and AI answers, so your pipeline grows from content you own.",
    items: [
      { t: "Traffic with no intent", d: "Blog visitors who are researching, rather than buying, rarely enquire." },
      { t: "No bottom-funnel pages", d: "Missing service and comparison pages leave buyers with nowhere to land." },
      { t: "Weak calls to action", d: "Pages that end without a next step lose ready buyers." },
      { t: "Untracked leads", d: "Without attribution you cannot see which pages bring revenue." },
      { t: "Missing location pages", d: "Buyers searching by area cannot find a page for their region." },
      { t: "Slow landing pages", d: "Speed issues cost enquiries before the page has loaded." },
      { t: "Invisible in AI answers", d: "Buyers who ask AI tools for suppliers never see your brand." },
      { t: "Long forms", d: "Too many fields stop buyers from finishing an enquiry." },
      { t: "No proof on page", d: "Missing case studies and reviews weaken the decision." },
      { t: "Wrong keywords", d: "High-volume terms with no buying intent fill reports with empty traffic." },
      { t: "Poor internal linking", d: "Blog readers never find their way to service pages." },
      { t: "No follow-up offer", d: "Visitors not ready to call have no lighter way to stay in touch." },
    ],
  },
  teamHeading: "Your lead generation team, built into your business.",
  teamText:
    "We work alongside your marketing and sales teams. Every month we check which searches and pages are producing enquiries, build the next pages your buyers need and share what is happening in the pipeline. We talk to your sales team so the leads we bring are the ones they want.",
  teamStats: [["100%", "OF QUALIFIED LEADS FROM ORGANIC BLOGS"], ["+81%", "ORGANIC TRAFFIC FOR A SUPPLY CHAIN BRAND"], ["40", "NEW BLOGS A MONTH ACROSS CLIENT SITES"]],
  why: {
    heading: "SEO lead generation from Google and",
    em: "AI search.",
    text:
      "Paid leads stop when the budget stops. Organic leads keep coming from the pages and answers you own. We focus on the searches with buying intent, then make sure every visitor has a clear way to enquire.",
    link: { t: "More on conversion rate optimisation", href: "/conversion-rate-optimisation" },
    button: "Get your free audit",
    stats: [
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Most content brings no leads", d: "We focus on the pages that rank for buying searches.", src: "Ahrefs, 2023" },
      { n: "25%", l: "predicted drop in search engine volume by 2026 as buyers move to AI chatbots", t: "Buyers also ask AI", d: "Organic lead generation now covers AI answers as well as Google.", src: "Gartner, 2024" },
      { n: "21.6%", l: "more users reached form submission on lead generation sites after a 0.1s speed gain", t: "Faster pages, more leads", d: "Speed improvements on landing pages lift completed enquiries.", src: "Google and Deloitte, Milliseconds Make Millions" },
    ],
  },
  faqs: [
    { q: "What is organic lead generation?", a: ["Organic lead generation brings enquiries from unpaid search and AI answers, rather than ads. It uses SEO, content and conversion work to turn searches into leads."] },
    { q: "What is B2B lead generation?", a: ["B2B lead generation is attracting businesses that may buy from you and turning them into qualified enquiries for your sales team."] },
    { q: "What is B2C lead generation?", a: ["B2C lead generation attracts individual consumers and turns them into enquiries, such as a family requesting a removals quote or a self storage booking."] },
    { q: "What is the difference between B2B and B2C lead generation?", a: ["B2B leads come from businesses with longer buying cycles and several decision makers, so content must build trust over time. B2C leads come from individuals who often decide faster, so local visibility, reviews and quick quote forms matter most."] },
    { q: "Do you generate B2C leads as well as B2B?", a: ["Yes. We run B2B lead generation for ", { t: "logistics", href: "/seo-agency-for-logistics-companies" }, " and ", { t: "supply chain", href: "/industries/supply-chain" }, " brands, and B2C lead generation for ", { t: "removals", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " companies."] },
    { q: "How do you generate B2B leads through SEO?", a: ["Target searches with buying intent, build service and location pages that answer them, and make every page easy to enquire from. A ", { t: "full SEO audit", href: "/seo-audit-services" }, " shows where to start."] },
    { q: "Is organic lead generation better than paid ads?", a: ["Paid ads bring leads while you pay. Organic leads keep coming from pages you own, so cost per lead usually falls over time. Many B2B brands use both."] },
    { q: "How long does organic lead generation take?", a: ["Quick wins from existing pages can show in weeks. New pages and authority usually build steady lead flow over three to six months."] },
    { q: "How do you turn traffic into leads?", a: ["Clear calls to action, short forms, proof on page and fast load times. Our ", { t: "conversion rate optimisation", href: "/conversion-rate-optimisation" }, " service tests and improves each one."] },
    { q: "Can AI search bring leads?", a: ["Yes. Buyers ask AI tools to recommend suppliers. Our ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, " and ", { t: "GEO", href: "/generative-engine-optimisation" }, " work gets your brand into those answers."] },
    { q: "Do you generate local leads?", a: ["Yes. For ", { t: "removals", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " brands, most leads start with a local search, which our ", { t: "local SEO services", href: "/local-seo-services" }, " cover."] },
    { q: "How much does organic lead generation cost?", a: ["Cost depends on your market, competition and lead targets. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you which searches could bring you leads today, and what to build first.",
  ctaAlt: { pre: "Getting traffic but few leads?", t: "See conversion rate optimisation", href: "/conversion-rate-optimisation" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
