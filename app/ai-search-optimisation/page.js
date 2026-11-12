import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "AI Search Optimisation Agency | GEO and AEO Services | MAAI",
  description:
    "AI search optimisation for B2B brands. Generative engine optimisation (GEO) and answer engine optimisation (AEO) so ChatGPT, Gemini, Perplexity and Google AI Overviews cite your business.",
  alternates: { canonical: "/ai-search-optimisation" },
};

const c = {
  h1: "AI Search Optimisation Agency",
  intro:
    "Our AI search optimisation covers generative engine optimisation (GEO) and answer engine optimisation (AEO). We make your brand easy for ChatGPT, Gemini, Perplexity and Google AI Overviews to find, understand and cite, so buyers see you in the answer before they visit a single website.",
  formTitle: "Get your free AI visibility audit",
  formButton: "Get my free audit",
  howHeading: "How we run your AI search",
  howEm: "optimisation?",
  steps: [
    { t: "Measure", d: "We test how ChatGPT, Gemini, Perplexity and AI Overviews describe your brand and competitors today." },
    { t: "Structure", d: "We add schema, entity data and clear answers so AI engines understand what you do." },
    { t: "Earn mentions", d: "We build citations and brand mentions on the sources AI models trust in your industry." },
    { t: "Track", d: "We report your AI visibility, citations and share of answer every month." },
  ],
  casesHeading: "AI search optimisation that grew business",
  cases: ["logistics", "supply"],
  ring: {
    label: "Why brands are missing from AI answers",
    h1: "What is answer",
    h2: "engine",
    em: "optimisation",
    lede:
      "Answer engine optimisation (AEO) shapes your content so engines can lift a direct answer from it. Generative engine optimisation (GEO) is the work of getting your brand cited inside AI-generated answers. Both start by fixing the gaps that keep AI tools from trusting your site.",
    items: [
      { t: "No brand mentions", d: "AI models rarely cite brands that trusted sites do not mention." },
      { t: "Missing schema markup", d: "Without structured data, engines guess what your business does." },
      { t: "Weak entity signals", d: "Inconsistent names, addresses and descriptions confuse AI models." },
      { t: "No direct answers", d: "Pages that bury the answer are skipped for ones that state it clearly." },
      { t: "Thin topical depth", d: "A few pages on a topic rarely earn a citation over a full content hub." },
      { t: "Blocked AI crawlers", d: "Robots rules that block GPTBot or PerplexityBot remove you from answers." },
      { t: "Outdated content", d: "AI engines favour fresh, dated, well-sourced information." },
      { t: "Pages not indexed", d: "If Google does not index a page, AI Overviews cannot use it." },
      { t: "No FAQ content", d: "Question-led sections are the easiest source for answer engines." },
      { t: "Competitors cited instead", d: "Rivals with clearer pages take the citation you should own." },
      { t: "No AI visibility tracking", d: "Without measurement you cannot see where you are missing." },
      { t: "Unclear service pages", d: "Vague copy makes it hard for AI to match you to buyer questions." },
    ],
  },
  teamHeading: "Your AI search team, built into your business.",
  teamText:
    "We work alongside your marketing, content and sales teams. Every month we check how AI engines describe your brand, close the gaps in your content and structured data, and grow mentions on the sources they trust. We come to you with the next move before a competitor takes your place in the answer.",
  teamStats: [["10K+", "PAGES CHECKED ACROSS CLIENTS"], ["200+", "FIXES SHIPPED TO GAIN VISIBILITY"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "AEO and GEO for",
    em: "B2B buyers.",
    text:
      "B2B buyers now ask AI tools to shortlist suppliers. If your brand is missing from those answers, you lose the enquiry before it reaches your website. AEO and GEO make sure your business is the one that gets named, with your strongest service pages as the source.",
    link: { t: "See our technical SEO services", href: "/technical-seo-services" },
    button: "Get your free audit",
    stats: [
      { n: "25%", l: "predicted drop in search engine volume by 2026 as buyers move to AI chatbots", t: "Buyers are asking AI first", d: "More research now starts in ChatGPT, Gemini and Perplexity, so being cited there protects your pipeline.", src: "Gartner, 2024" },
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Most content is never found", d: "Pages that do not rank in Google are unlikely to be used in AI Overviews either.", src: "Ahrefs, 2023" },
      { n: "67%", l: "of domains using hreflang have issues", t: "Technical gaps hide you from engines", d: "International and technical errors stop engines from matching the right page to the right market.", src: "Ahrefs" },
    ],
  },
  faqs: [
    { q: "What is generative engine optimisation (GEO)?", a: ["GEO is the work of getting your brand cited in AI-generated answers from tools like ChatGPT, Gemini and Perplexity. See our ", { t: "generative engine optimisation services", href: "/generative-engine-optimisation" }, "."] },
    { q: "What is answer engine optimisation (AEO)?", a: ["AEO shapes your pages so answer engines and Google AI Overviews can lift a direct, accurate answer from them. Question-led headings, concise answers and FAQ schema all help."] },
    { q: "What is the difference between AEO, GEO and SEO?", a: ["SEO earns rankings in search results, AEO earns the direct answer, and GEO earns citations inside AI-generated responses. They share the same foundation, which is why we start with ", { t: "technical SEO", href: "/technical-seo-services" }, "."] },
    { q: "How do you improve brand visibility in AI search engines?", a: ["We fix crawl and indexing gaps, add schema and entity data, publish answer-led content and build mentions on trusted sites through ", { t: "link building", href: "/link-building-services" }, "."] },
    { q: "How do you rank in Google AI Overviews?", a: ["AI Overviews draw on pages Google already indexes and trusts. A ", { t: "full SEO audit", href: "/seo-audit-services" }, " shows what is blocking yours, then we answer buyer questions clearly on your key pages."] },
    { q: "How do you measure AI search visibility?", a: ["We track how often AI engines mention and cite your brand for your priority buyer questions, compared with competitors, and report it every month."] },
    { q: "Does AI search optimisation work for logistics companies?", a: ["Yes. Shippers and procurement teams ask AI tools to compare logistics partners. See how we work with ", { t: "logistics companies", href: "/seo-agency-for-logistics-companies" }, " and ", { t: "supply chain brands", href: "/industries/supply-chain" }, "."] },
    { q: "Do AI engines show local businesses?", a: ["Yes, AI answers often pull from Google Business Profiles and local listings. Our ", { t: "local SEO services", href: "/local-seo-services" }, " cover that side."] },
    { q: "How long does it take to appear in AI answers?", a: ["Some citations appear within weeks of fixing structure and content. Building the brand mentions that AI models trust usually takes a few months."] },
    { q: "How much do AI search optimisation services cost?", a: ["Cost depends on your site, market and goals. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you where AI engines mention your brand today, and what to fix first.",
  ctaAlt: { pre: "Want the foundations first?", t: "See our technical SEO services", href: "/technical-seo-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
