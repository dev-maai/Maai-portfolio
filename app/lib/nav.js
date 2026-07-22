/* Single source of truth for site navigation — shared by the header and the
   footer so the two can never drift apart. `id` is the section the nav's
   scroll-spy watches (null for real routes). */
export const NAV_LINKS = [
  { label: "Why organic", href: "/#thesis", id: "thesis" },
  { label: "Services", href: "/#signals", id: "signals" },
  { label: "Case studies", href: "/#values", id: "values" },
  { label: "Team", href: "/team", id: "__team" },
];
