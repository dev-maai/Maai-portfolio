import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Link Building Services for B2B Brands | Link Building Agency | MAAI",
  description:
    "Link building services that earn relevant, editorial backlinks for logistics, supply chain and real estate brands. Grow authority in Google and the sources AI search trusts.",
  alternates: { canonical: "/link-building-services" },
};

const c = {
  h1: "Link Building Services",
  intro:
    "Our link building services earn relevant, editorial backlinks from sites your buyers and search engines already trust. Every link is chosen for topical fit and real traffic, so it lifts your rankings in Google and your authority in AI search.",
  formTitle: "Get your free backlink audit",
  formButton: "Get my free audit",
  howHeading: "How we run your link",
  howEm: "building?",
  steps: [
    { t: "Audit", d: "We review your backlink profile and your competitors' to find the gaps worth closing." },
    { t: "Target", d: "We build a list of relevant sites, publications and partners in your industry." },
    { t: "Earn", d: "We pitch data, guides and expert input that editors want to link to." },
    { t: "Report", d: "You see every live link, its source and the rankings it supports each month." },
  ],
  casesHeading: "Link building that grew business",
  cases: ["medtech", "removals"],
  ring: {
    label: "Backlink problems we fix",
    h1: "What are backlinks and",
    h2: "link building in",
    em: "SEO",
    lede:
      "Link building is the work of earning links from other websites to yours. Search engines treat relevant links as votes of trust, and AI engines lean on the same trusted sources. We fix the problems that hold your profile back and earn the links that move rankings.",
    items: [
      { t: "Too few referring domains", d: "Competitors with more trusted links outrank you on the same terms." },
      { t: "Irrelevant links", d: "Links from unrelated sites add little and can look manipulative." },
      { t: "Lost backlinks", d: "Links disappear over time when pages move or get deleted." },
      { t: "Broken link targets", d: "Links pointing at dead pages on your site waste their value." },
      { t: "Over-optimised anchors", d: "Too many exact-match anchors can trigger a penalty risk." },
      { t: "Toxic link patterns", d: "Spammy directories and networks drag your profile down." },
      { t: "No links to service pages", d: "Authority sits on the homepage while money pages stay weak." },
      { t: "Weak internal linking", d: "Authority never flows to the pages that need to rank." },
      { t: "No digital PR", d: "Without newsworthy assets, editors have nothing to link to." },
      { t: "Missing brand mentions", d: "Unlinked mentions are links you have already earned but not claimed." },
      { t: "Competitor link gaps", d: "Sites that link to rivals but not to you are easy first wins." },
      { t: "No local citations", d: "Missing directory listings weaken local rankings." },
    ],
  },
  teamHeading: "Your link building team, built into your business.",
  teamText:
    "We work alongside your marketing, PR and sales teams. Every month we find the sites your buyers read, pitch content they want to reference and track every link we earn against the pages that drive enquiries. We tell you what is working before you have to ask.",
  teamStats: [["+118%", "REFERRAL TRAFFIC FROM LINK BUILDING"], ["6", "CLIENT PROJECTS WITH MONTHLY LINK BUILDING"], ["22", "NICHE VIDEOS PER BRAND EACH MONTH"]],
  why: {
    heading: "Backlinks for Google and",
    em: "AI search.",
    text:
      "Google uses links to judge which sites to trust, and AI engines cite the sources those links point to. Earning links from relevant publications in your industry builds authority that compounds across both, and keeps your service pages competitive.",
    link: { t: "More on AI search optimisation", href: "/ai-search-optimisation" },
    button: "Get your free backlink audit",
    stats: [
      { n: "96.55%", l: "of pages get zero traffic from Google", t: "Unlinked pages rarely rank", d: "Most pages with no backlinks earn no search traffic at all.", src: "Ahrefs, 2023" },
      { n: "1 in 6,671", l: "pages with no backlinks gets more than 1,000 search visits a month", t: "Links unlock traffic", d: "Without referring domains, even strong content struggles to reach page one.", src: "Ahrefs, 2023" },
      { n: "66.5%", l: "of links to sites in the last nine years are dead", t: "Links decay over time", d: "Ongoing link building replaces the authority you lose as old links disappear.", src: "Ahrefs" },
    ],
  },
  faqs: [
    { q: "What is link building in SEO?", a: ["Link building is earning links from other websites to yours. Search engines treat relevant, trusted links as a signal that your pages deserve to rank."] },
    { q: "Why is link building important?", a: ["Links remain one of the strongest ranking signals, and the sites that link to you shape how AI engines see your brand. See how this connects to ", { t: "AI search optimisation", href: "/ai-search-optimisation" }, "."] },
    { q: "Is link building still important in 2026?", a: ["Yes. Relevant, editorial links still separate the top results from the rest, especially in competitive B2B markets."] },
    { q: "How do you build links to your website?", a: ["We create assets worth citing, such as data, guides and expert comment, then pitch them to relevant editors and partners. We also reclaim unlinked brand mentions and fix broken links."] },
    { q: "What is the difference between internal and external links?", a: ["External links come from other sites and build authority. Internal links pass that authority between your own pages, which is part of our ", { t: "technical SEO services", href: "/technical-seo-services" }, "."] },
    { q: "Do you audit our existing backlinks?", a: ["Yes. Every campaign starts with a backlink review as part of our ", { t: "SEO audit services", href: "/seo-audit-services" }, ", so we know which links help and which carry risk."] },
    { q: "Do you build links for logistics and supply chain companies?", a: ["Yes. We earn links from trade press, industry bodies and partner sites for ", { t: "logistics", href: "/seo-agency-for-logistics-companies" }, ", ", { t: "supply chain", href: "/industries/supply-chain" }, " and ", { t: "removals", href: "/industries/removals-and-relocations" }, " brands."] },
    { q: "Do local citations count as link building?", a: ["Local directory listings support local rankings and your Google Business Profile. We cover them in our ", { t: "local SEO services", href: "/local-seo-services" }, "."] },
    { q: "How long does link building take to work?", a: ["New links are usually picked up within weeks. The ranking impact builds over several months as authority compounds."] },
    { q: "How much do link building services cost?", a: ["Cost depends on your market, competition and goals. ", { t: "Book a strategy call", href: "/book" }, " and we will scope it with you."] },
  ],
  ctaText: "Book a strategy call and we will show you the link gaps between you and your competitors, and what to close first.",
  ctaAlt: { pre: "Need a full review first?", t: "See our SEO audit services", href: "/seo-audit-services" },
};

export default function Page() {
  return <ServicePage c={c} />;
}
