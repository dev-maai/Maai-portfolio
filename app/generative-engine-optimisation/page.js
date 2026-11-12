import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Generative Engine Optimisation (GEO) Agency | MAAI",
  description:
    "Generative engine optimisation (GEO) services for B2B brands. Get cited in ChatGPT, Gemini, Perplexity and Google AI Overviews with GEO built on solid SEO foundations.",
  alternates: { canonical: "/generative-engine-optimisation" },
};

const c = {
  h1: "Generative Engine Optimisation (GEO) Agency",
  intro:
    "Our generative engine optimisation services get your brand named and cited inside AI-generated answers. We shape your content, structured data and brand mentions so ChatGPT, Gemini, Perplexity and Google AI Overviews recommend you when buyers ask for a supplier.",
  formTitle: "Get your free GEO audit",
  formButton: "Get my free audit",
  howHeading: "How we run your generative engine",
  howEm: "optimisation?",
  steps: [
    { t: "Benchmark", d: "We test the prompts your buyers use and record which brands AI engines name today." },
    { t: "Restructure", d: "We rewrite key pages into clear, quotable answers with schema and entity data." },
    { t: "Earn citations", d: "We grow mentions on the publications, directories and forums AI models draw on." },
    { t: "Measure", d: "We track your share of AI answers against competitors every month." },
  ],
  casesHeading: "Generative engine optimisation that grew business",
  cases: ["logistics", "supply"],
  ring: {
    label: "Why AI engines skip your brand",
    h1: "How does generative",
    h2: "engine optimisation",
    em: "work",
    lede:
      "Generative engines build answers from sources they can crawl, understand and trust. GEO makes your site one of those sources: answers stated plainly, facts backed by data, consistent entity information and mentions on the sites the models already rely on.",
    items: [
      { t: "Brand not mentioned", d: "AI engines rarely name brands that trusted sources never mention." },
      { t: "No quotable answers", d: "Long, vague copy gives models nothing clear to lift." },
      { t: "Missing statistics", d: "Pages with sourced data are cited more often than opinion." },
      { t: "Weak entity data", d: "Inconsistent company details confuse how models describe you." },
      { t: "Blocked AI crawlers", d: "Robots rules that block GPTBot or PerplexityBot remove you from answers." },
      { t: "No schema markup", d: "Without structured data, engines guess what you offer." },
      { t: "Thin topic coverage", d: "A handful of pages rarely beats a full content hub." },
      { t: "Outdated content", d: "Undated or stale pages lose out to fresher sources." },
      { t: "No third-party reviews", d: "Review sites are common sources in supplier comparisons." },
      { t: "Competitors cited instead", d: "Rivals with clearer pages take the citation you should own." },
      { t: "No prompt tracking", d: "Without testing prompts you cannot see where you are missing." },
      { t: "Pages not indexed", d: "Unindexed pages cannot feed Google AI Overviews." },
    ],
  },
  teamHeading: "Your GEO team, built into your business.",
  teamText:
    "We work alongside your marketing, content and sales teams. Every month we test the prompts your buyers use, update the pages AI engines quote, and grow mentions on the sources they trust. We tell you where you gained or lost ground in AI answers before your pipeline feels it.",
  teamStats: [["10K+", "PAGES CHECKED ACROSS CLIENTS"], ["200+", "FIXES SHIPPED TO GAIN VISIBILITY"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "GEO services for",
    em: "B2B brands.",
    text:
      "When a buyer asks an AI tool for the best logistics partner or storage provider, it names a few brands and moves on. GEO makes sure yours is one of them, with your own pages as the cited source.",
    link: { t: "More on AI search optimisation", href: "/ai-search-optimisation" },
    button: "Get your free GEO audit",
    stats: [
      { n: "25%", l: "predicted drop in search engine volume by 2026 as buyers move to AI chatbots", t: "Research is moving to AI", d: "Being cited in AI answers protects the enquiries search alone used to bring.", src: "Gartner, 2024" },
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Unranked pages are rarely sourced", d: "Pages Google ignores are unlikely to feed AI Overviews either.", src: "Ahrefs, 2023" },
      { n: "66.5%", l: "of links to sites in the last nine years are dead", t: "Mentions need renewing", d: "Ongoing work replaces the citations and links you lose over time.", src: "Ahrefs" },
    ],
  },
  faqs: [
    { q: "What is generative engine optimisation (GEO)?", a: ["GEO is the practice of getting your brand mentioned and cited in answers created by AI tools such as ChatGPT, Gemini, Perplexity and Google AI Overviews."] },
    { q: "How does generative engine optimisation work?", a: ["AI engines draw on sources they can crawl and trust. GEO makes your pages clear and quotable, adds structured data, and grows mentions on the sites models rely on."] },
    { q: "What are generative engine optimisation services?", a: ["They include prompt benchmarking, content restructuring, schema and entity work, citation building and monthly AI visibility reporting."] },
    { q: "What is the difference between GEO and AEO?", a: ["GEO earns citations inside AI-generated answers. AEO shapes content so engines can lift a direct answer. We cover both in our ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, " service."] },
    { q: "Is GEO different from SEO?", a: ["GEO builds on SEO. Pages need to be crawlable and indexed first, which is why GEO work often starts with ", { t: "technical SEO", href: "/technical-seo-services" }, " or a ", { t: "full SEO audit", href: "/seo-audit-services" }, "."] },
    { q: "How do you measure GEO results?", a: ["We track how often your brand is named and cited for your priority buyer prompts, compared with competitors, across the main AI engines."] },
    { q: "How do you improve generative engine optimisation?", a: ["State answers plainly, add sourced statistics, keep company details consistent and earn mentions on trusted sites through ", { t: "link building", href: "/link-building-services" }, "."] },
    { q: "Does GEO work for logistics and supply chain brands?", a: ["Yes. Buyers ask AI tools to compare partners. See our work with ", { t: "logistics", href: "/seo-agency-for-logistics-companies" }, " and ", { t: "supply chain", href: "/industries/supply-chain" }, " brands."] },
    { q: "Do AI engines recommend local businesses?", a: ["Yes, often using Google Business Profiles and reviews. Our ", { t: "local SEO services", href: "/local-seo-services" }, " keep that data accurate for ", { t: "removals", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " brands."] },
    { q: "How much does a GEO agency cost?", a: ["Cost depends on your market and how many products or services you need visibility for. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you which AI answers name your competitors instead of you, and what to fix first.",
  ctaAlt: { pre: "Want the full AI search picture?", t: "See our AI search optimisation services", href: "/ai-search-optimisation" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
