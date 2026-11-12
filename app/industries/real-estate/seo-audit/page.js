import ServicePage from "../../../components/ServicePage";

export const metadata = {
  title: "Website Audit for Real Estate Agents | Real Estate SEO Audit | MAAI",
  description:
    "A website SEO audit for real estate agents, realtors and property firms. Find the listing, speed, area page and local issues holding back your rankings.",
  alternates: { canonical: "/industries/real-estate/seo-audit" },
};

const c = {
  h1: "Website Audit for Real Estate Agents",
  intro:
    "Our real estate website audit checks everything that affects how your agency ranks: listing pages, area pages, speed, indexing, branch profiles and AI visibility. You get a prioritised action plan built for property websites, with the fixes that win more valuations first.",
  formTitle: "Get your free website audit",
  formButton: "Get my free audit",
  howHeading: "How we audit your real estate",
  howEm: "website?",
  steps: [
    { t: "Crawl", d: "We crawl listings, area pages and branch pages, and pull Search Console data." },
    { t: "Compare", d: "We benchmark you against local agents and the portals in your areas." },
    { t: "Prioritise", d: "Every issue is ranked by its effect on valuations and viewings." },
    { t: "Walk through", d: "We take your team through the plan and agree what to fix first." },
  ],
  casesHeading: "SEO audits that grew business",
  cases: ["removals", "logistics"],
  ring: {
    label: "What a real estate website audit finds",
    h1: "Real estate",
    h2: "SEO",
    em: "audit",
    lede:
      "Property websites carry problems most sites do not: thousands of listing pages that expire, feed-driven duplicate content and heavy search filters. Our audit finds these issues and tells you exactly what to fix.",
    items: [
      { t: "Expired listings indexed", d: "Sold and let properties waste crawl budget and frustrate buyers." },
      { t: "Duplicate feed content", d: "Listing text copied from portals ranks poorly." },
      { t: "Filter URLs indexed", d: "Search filters create thousands of thin, duplicate pages." },
      { t: "Slow listing pages", d: "Large images and scripts slow pages on mobile." },
      { t: "Missing area pages", d: "Neighbourhood searches land on competitors." },
      { t: "No listing schema", d: "Missing structured data hides prices, beds and locations." },
      { t: "Weak valuation pages", d: "Seller searches find thin pages with no clear call to action." },
      { t: "Branch profile gaps", d: "Incomplete Google Business Profiles hold back local rankings." },
      { t: "Broken internal links", d: "Old listing links lead to dead pages." },
      { t: "Low AI visibility", d: "AI tools recommend agents with clearer information." },
      { t: "Poor mobile forms", d: "Viewing and valuation forms that are hard to use on mobile." },
      { t: "Untracked enquiries", d: "No way to see which pages bring instructions." },
    ],
  },
  teamHeading: "Your audit team, built into your agency.",
  teamText:
    "After the audit we stay close to the fixes, checking each change once your developer ships it and re-auditing as listings and areas grow. You always know what has been fixed and what is next.",
  teamStats: [["10K+", "PAGES CHECKED ACROSS CLIENTS"], ["200+", "FIXES SHIPPED TO GAIN VISIBILITY"], ["<36h", "TURNAROUND ON CRITICAL ISSUES"]],
  why: {
    heading: "Real estate website audits for Google and",
    em: "AI search.",
    text:
      "Property sites change every day as listings come and go. A regular website audit keeps that churn from hurting rankings, and makes sure your agency stays visible in Google and AI answers.",
    link: { t: "See our real estate SEO services", href: "/industries/real-estate/seo" },
    button: "Get your free audit",
    stats: [
      { n: "95.2%", l: "of sites have redirect issues", t: "Listing churn breaks redirects", d: "Sold and removed listings leave redirect problems behind.", src: "Ahrefs" },
      { n: "72.3%", l: "of websites have slow pages", t: "Heavy listing pages", d: "An audit shows which listing templates slow your site down.", src: "Ahrefs" },
      { n: "32%", l: "higher chance of a bounce as load time rises from 1 to 3 seconds", t: "Speed costs viewings", d: "Slow pages lose buyers before they book.", src: "Google" },
    ],
  },
  faqs: [
    { q: "What is a website audit for real estate agents?", a: ["It is a full SEO review of an agency website, covering listings, area pages, speed, indexing, branch profiles and AI visibility, with a prioritised fix list."] },
    { q: "What does a real estate SEO audit check?", a: ["Expired listings, duplicate feed content, filter URLs, speed, schema, valuation pages, internal links and Google Business Profiles."] },
    { q: "How long does a real estate website audit take?", a: ["Usually one to three weeks, depending on listing volume and the number of branches."] },
    { q: "Should sold listings be removed or redirected?", a: ["It depends on traffic and links. Valuable pages can stay with a “sold” status or redirect to the area page; the audit tells you which."] },
    { q: "Do you fix the issues the audit finds?", a: ["Yes. Fixes run through our ", { t: "technical SEO services", href: "/technical-seo-services" }, " and ", { t: "real estate SEO services", href: "/industries/real-estate/seo" }, "."] },
    { q: "Does the audit cover local rankings?", a: ["Yes. Branch profiles are part of it, with fixes through our ", { t: "local SEO for real estate", href: "/industries/real-estate/local-seo" }, "."] },
    { q: "Do you audit sites outside real estate?", a: ["Yes. See our general ", { t: "SEO audit services", href: "/seo-audit-services" }, " for other industries."] },
    { q: "Does the audit check AI search visibility?", a: ["Yes. We check how AI tools describe your agency. Learn more about ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, "."] },
    { q: "Do you audit property management and lettings sites?", a: ["Yes. Lettings and property management sites share the same listing and local issues."] },
    { q: "How much does a real estate website audit cost?", a: ["It depends on site size and branches. Request a free audit above, or ", { t: "book a strategy call", href: "/book" }, "."] },
  ],
  ctaText: "Book a strategy call and we will walk you through the issues costing your agency rankings, and what to fix first.",
  ctaAlt: { pre: "Need the general version?", t: "See our SEO audit services", href: "/seo-audit-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
