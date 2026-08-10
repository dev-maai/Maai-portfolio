/* Single source of truth for site navigation — shared by the header and the
   footer so the two can never drift apart. `id` is the section the nav's
   scroll-spy watches (null for real routes). */
export const NAV_LINKS = [
  { label: "Why organic", href: "/#thesis", id: "thesis" },
  { label: "Case studies", href: "/#values", id: "values" },
  { label: "About", href: "/about", id: "__about" },
];

/* Industry landing pages + the gated industry report — the header shows these in
   the "Industries" dropdown, the footer as its own column. */
export const INDUSTRY_LINKS = [
  { label: "Supply Chain", href: "/industries/supply-chain" },
  { label: "Self Storage", href: "/industries/self-storage" },
  { label: "SaaS", href: "/industries/saas" },
  { label: "Removals & Relocations", href: "/industries/removals-and-relocations" },
  { label: "Logistics", href: "/seo-agency-for-logistics-companies" },
  { label: "Industry report", href: "/industries/report" },
];
