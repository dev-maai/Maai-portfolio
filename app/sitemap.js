/* Served by Next.js at /sitemap.xml. Keep the case-study slugs in sync with
   the CASES keys in app/case-studies/[slug]/page.js, and the base URL in sync
   with app/robots.js. */
const BASE_URL = "https://www.maai.agency";

const CASE_STUDY_SLUGS = [
  "anglo-pacific",
  "pickfords",
  "b2b-marketing",
  "backlinks-referral",
];

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/fit-check", priority: 0.7, changeFrequency: "monthly" },
    {
      path: "/seo-agency-for-logistics-companies",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/industries/supply-chain", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/self-storage", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/industries/removals-and-relocations",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { path: "/industries/saas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries/report", priority: 0.6, changeFrequency: "monthly" },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const caseStudyRoutes = CASE_STUDY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
