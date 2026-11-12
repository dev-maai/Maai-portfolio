import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Conversion Rate Optimisation Agency | CRO Services | MAAI",
  description:
    "Conversion rate optimisation services for B2B websites. A CRO agency that turns organic traffic into enquiries for logistics, supply chain, real estate and removals brands.",
  alternates: { canonical: "/conversion-rate-optimisation" },
};

const c = {
  h1: "Conversion Rate Optimisation Agency",
  intro:
    "Our conversion rate optimisation services turn the traffic your SEO already earns into enquiries. We study how buyers move through your site, find where they drop off and test changes to pages, forms and calls to action until more visits become quote requests and booked calls.",
  formTitle: "Get your free CRO audit",
  formButton: "Get my free audit",
  howHeading: "How we run your conversion rate",
  howEm: "optimisation?",
  steps: [
    { t: "Research", d: "We review analytics, heatmaps and session recordings to see where buyers drop off." },
    { t: "Hypothesise", d: "We list the changes most likely to lift enquiries, ranked by impact and effort." },
    { t: "Test", d: "We run A/B tests on pages, forms and calls to action with clear success measures." },
    { t: "Roll out", d: "Winning changes go live across similar pages and we report the uplift every month." },
  ],
  casesHeading: "Conversion rate optimisation that grew business",
  cases: ["supply", "removals"],
  ring: {
    label: "Conversion problems we fix",
    h1: "What is conversion",
    h2: "rate",
    em: "optimisation",
    lede:
      "Conversion rate optimisation (CRO) is the process of increasing the share of visitors who take action on your site, such as requesting a quote or booking a call. It uses data and testing, so every change is based on how real buyers behave.",
    items: [
      { t: "Slow landing pages", d: "Every extra second of load time loses visitors before they read your offer." },
      { t: "Long forms", d: "Too many fields stop buyers from finishing an enquiry." },
      { t: "Weak calls to action", d: "Vague buttons give buyers no clear next step." },
      { t: "No trust signals", d: "Missing logos, reviews and case studies raise doubt at the decision point." },
      { t: "Unclear value proposition", d: "Visitors leave when they cannot see what you do in seconds." },
      { t: "Poor mobile experience", d: "Small buttons and broken layouts lose mobile buyers." },
      { t: "Mismatched search intent", d: "Pages that do not answer the search send visitors back to Google." },
      { t: "No pricing guidance", d: "Buyers who cannot gauge cost often leave to compare." },
      { t: "Distracting navigation", d: "Too many exits pull buyers away from the enquiry." },
      { t: "Broken tracking", d: "Without accurate conversion data you cannot see what works." },
      { t: "No follow-up path", d: "Visitors not ready to call have nowhere else to go." },
      { t: "Untested changes", d: "Redesigns based on opinion can lower conversion rates." },
    ],
  },
  teamHeading: "Your CRO team, built into your business.",
  teamText:
    "We work alongside your marketing, sales and development teams. Every month we review how buyers use your site, run tests on the pages that matter most and share what changed in enquiries. We bring you the next test before you have to ask why leads have slowed.",
  teamStats: [["100%", "OF QUALIFIED LEADS FROM ORGANIC BLOGS"], ["+81%", "ORGANIC TRAFFIC FOR A SUPPLY CHAIN BRAND"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "CRO services that turn traffic into",
    em: "enquiries.",
    text:
      "Ranking brings visitors. Conversion rate optimisation decides how many of them become leads. Small improvements to speed, forms and page structure compound across every visit your SEO earns.",
    link: { t: "See organic lead generation", href: "/organic-lead-generation" },
    button: "Get your free CRO audit",
    stats: [
      { n: "21.6%", l: "more users reached form submission on lead generation sites after a 0.1s speed gain", t: "Speed lifts enquiries", d: "Small speed gains on key pages lead to more completed forms.", src: "Google and Deloitte, Milliseconds Make Millions" },
      { n: "32%", l: "higher chance of a bounce as load time rises from 1 to 3 seconds", t: "Slow pages lose buyers", d: "Visitors leave before they see your offer when pages load slowly.", src: "Google" },
      { n: "72.3%", l: "of websites have slow pages", t: "Most sites have quick wins", d: "Speed is often the fastest conversion improvement available.", src: "Ahrefs" },
    ],
  },
  faqs: [
    { q: "What is conversion rate optimisation?", a: ["Conversion rate optimisation (CRO) is the process of increasing the share of website visitors who take a desired action, such as requesting a quote or booking a call."] },
    { q: "What does a CRO agency do?", a: ["A CRO agency researches how visitors use your site, finds where they drop off, tests improvements and rolls out the changes that lift enquiries."] },
    { q: "What are the benefits of conversion rate optimisation?", a: ["More enquiries from the traffic you already have, lower cost per lead and clearer data on what your buyers respond to."] },
    { q: "How is CRO different from SEO?", a: ["SEO brings visitors to your site. CRO turns more of them into leads. They work best together, which is why we pair CRO with ", { t: "technical SEO", href: "/technical-seo-services" }, " and ", { t: "organic lead generation", href: "/organic-lead-generation" }, "."] },
    { q: "Does page speed affect conversion rates?", a: ["Yes. Slow pages lose visitors before they convert. Our ", { t: "technical SEO services", href: "/technical-seo-services" }, " fix the speed issues that hurt both rankings and conversions."] },
    { q: "How long does a CRO test take?", a: ["Most tests run for two to six weeks, depending on how much traffic the page gets, so the result is reliable."] },
    { q: "Do you need a lot of traffic for CRO?", a: ["Testing needs steady traffic. For lower-traffic sites we focus on research-led fixes and best practice, and grow traffic through ", { t: "SEO", href: "/seo-audit-services" }, " at the same time."] },
    { q: "Do you work on CRO for logistics and removals sites?", a: ["Yes. Quote forms and booking flows are central for ", { t: "logistics", href: "/seo-agency-for-logistics-companies" }, ", ", { t: "removals", href: "/industries/removals-and-relocations" }, " and ", { t: "self storage", href: "/industries/self-storage" }, " brands."] },
    { q: "Can CRO help local landing pages?", a: ["Yes. Location pages and Google Business Profile traffic convert better with clear calls to action. See our ", { t: "local SEO services", href: "/local-seo-services" }, "."] },
    { q: "How much do CRO services cost?", a: ["Cost depends on your site, traffic and goals. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you where your site is losing enquiries today, and what to fix first.",
  ctaAlt: { pre: "Need more traffic first?", t: "See organic lead generation", href: "/organic-lead-generation" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
