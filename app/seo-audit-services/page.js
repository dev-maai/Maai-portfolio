import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "SEO Audit Services | Technical, Content and Backlink Audits | MAAI",
  description:
    "SEO audit services for B2B brands. A full website SEO audit covering technical health, content, backlinks, local and AI search, with a prioritised action plan.",
  alternates: { canonical: "/seo-audit-services" },
};

const c = {
  h1: "SEO Audit Services",
  intro:
    "Our SEO audit services review your whole website: technical health, content and keyword gaps, backlinks, local listings and AI search visibility. You get a clear, prioritised action plan that shows what is holding your rankings back and what to fix first.",
  formTitle: "Get your free SEO audit",
  formButton: "Get my free audit",
  howHeading: "How we run your SEO",
  howEm: "audit?",
  steps: [
    { t: "Crawl", d: "We crawl every page and pull Search Console, analytics and backlink data." },
    { t: "Analyse", d: "We review technical health, content, links, local and AI visibility against competitors." },
    { t: "Prioritise", d: "Every issue is ranked by business impact and effort in one action plan." },
    { t: "Walk through", d: "We take your team through the findings and agree what to fix first." },
  ],
  casesHeading: "SEO audits that grew business",
  cases: ["removals", "logistics"],
  ring: {
    label: "What an SEO audit finds",
    h1: "What is included",
    h2: "in an",
    em: "SEO audit",
    lede:
      "An SEO audit checks everything that affects how search engines and AI tools find, understand and rank your site. Ours covers technical issues, content gaps, backlink risks, local listings and AI search visibility, with each finding tied to a fix.",
    items: [
      { t: "Pages not indexed", d: "Pages Google has crawled but chosen not to index." },
      { t: "Slow page speed", d: "Core Web Vitals issues that hurt rankings and conversions." },
      { t: "Keyword gaps", d: "Buyer searches your competitors rank for and you do not." },
      { t: "Thin content", d: "Pages too short or vague to compete for their target terms." },
      { t: "Cannibalisation", d: "Several pages competing for the same query." },
      { t: "Toxic backlinks", d: "Risky links that could drag your profile down." },
      { t: "Lost backlinks", d: "Authority you have lost as linking pages changed." },
      { t: "Redirect chains", d: "Multiple hops that waste crawl budget and link equity." },
      { t: "Missing schema", d: "No structured data for search and AI engines to read." },
      { t: "Weak local listings", d: "Incomplete Google Business Profiles and citations." },
      { t: "Low AI visibility", d: "Your brand missing from ChatGPT and AI Overviews answers." },
      { t: "Broken internal links", d: "Dead ends that stop users and crawlers reaching key pages." },
    ],
  },
  teamHeading: "Your SEO audit team, built into your business.",
  teamText:
    "We work alongside your developers, marketing and sales teams. After the audit we stay close to the fixes, checking each change once it ships and re-auditing the site as it grows. You always know what has been done, what is next and why it matters to your pipeline.",
  teamStats: [["10K+", "PAGES CHECKED ACROSS CLIENTS"], ["200+", "FIXES SHIPPED TO GAIN VISIBILITY"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "Website SEO audits for Google and",
    em: "AI search.",
    text:
      "Most sites lose rankings to problems nobody has spotted: slow pages, broken redirects, missing schema or content that no longer matches what buyers search. A regular website SEO audit catches them early, so your pages keep ranking in Google and keep being cited in AI answers.",
    link: { t: "See our technical SEO services", href: "/technical-seo-services" },
    button: "Get your free audit",
    stats: [
      { n: "95.2%", l: "of sites have redirect issues", t: "Redirects break quietly", d: "Redesigns, migrations and CMS updates leave redirect problems behind.", src: "Ahrefs" },
      { n: "72.3%", l: "of websites have slow pages", t: "Speed issues are common", d: "Slow pages lose rankings and visitors, and an audit shows exactly which ones.", src: "Ahrefs" },
      { n: "67%", l: "of domains using hreflang have issues", t: "International sites need checks", d: "Market targeting errors show the wrong country version in search.", src: "Ahrefs" },
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Most pages never rank", d: "An audit finds which pages can rank and what they need to get there.", src: "Ahrefs, 2023" },
    ],
  },
  faqs: [
    { q: "What is an SEO audit?", a: ["An SEO audit is a full review of how well your website is set up to rank. It covers technical health, content, backlinks, local listings and AI search visibility."] },
    { q: "What is included in an SEO audit?", a: ["A crawl of every page, Core Web Vitals, indexing, site structure, keyword and content gaps, a backlink review, Google Business Profile checks and an AI visibility check, all ranked in one action plan."] },
    { q: "What is a technical SEO audit?", a: ["It focuses on crawling, indexing, speed, redirects and structured data. See our ", { t: "technical SEO services", href: "/technical-seo-services" }, " for how we fix what it finds."] },
    { q: "How long does an SEO audit take?", a: ["Most audits take one to three weeks depending on the size of the site and how many markets it covers."] },
    { q: "How much does an SEO audit cost?", a: ["Cost depends on the size and complexity of your site. Start with a free audit request above, or ", { t: "book a strategy call", href: "/book" }, " to scope a full audit."] },
    { q: "Why is an SEO audit important?", a: ["Rankings drop for reasons that are hard to see without one. An audit shows what is holding you back and stops you spending on content or links before the foundations are fixed."] },
    { q: "Does the audit check our backlinks?", a: ["Yes. We review your full backlink profile and competitor gaps, which feeds straight into our ", { t: "link building services", href: "/link-building-services" }, "."] },
    { q: "Does the audit cover AI search?", a: ["Yes. We check how ChatGPT, Gemini, Perplexity and AI Overviews mention your brand. Learn more about ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, "."] },
    { q: "Do you audit local SEO and Google Business Profiles?", a: ["Yes, for businesses with physical locations. Fixes are handled through our ", { t: "local SEO services", href: "/local-seo-services" }, "."] },
    { q: "Do you audit sites in our industry?", a: ["We specialise in ", { t: "logistics", href: "/seo-agency-for-logistics-companies" }, ", ", { t: "supply chain", href: "/industries/supply-chain" }, ", ", { t: "self storage", href: "/industries/self-storage" }, " and ", { t: "removals", href: "/industries/removals-and-relocations" }, " brands, and work with real estate, healthcare and SaaS companies too."] },
  ],
  ctaText: "Book a strategy call and we will walk you through the issues costing you rankings, and what to fix first.",
  ctaAlt: { pre: "Already know it's technical?", t: "See our technical SEO services", href: "/technical-seo-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
