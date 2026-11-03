/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      // industry pages that moved to dedicated URLs
      { source: "/industries/logistics", destination: "/seo-agency-for-logistics-companies", permanent: true },
      // SEO vs PPC for B2B is unpublished while it is rewritten; temporary so the slug can return
      { source: "/insights/seo-vs-ppc-for-b2b", destination: "/insights/seo-for-b2b-companies", permanent: false },
      { source: "/industries/removals", destination: "/industries/removals-and-relocations", permanent: true },
    ];
  },
};

export default nextConfig;
