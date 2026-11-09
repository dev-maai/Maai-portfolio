/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      // industry pages that moved to dedicated URLs
      { source: "/industries/logistics", destination: "/seo-agency-for-logistics-companies", permanent: true },
      { source: "/industries/removals", destination: "/industries/removals-and-relocations", permanent: true },
      // AEO pillar is unpublished while it is rewritten and screenshots are added; temporary so the slug can return
      ...(process.env.INSIGHTS_PREVIEW_DRAFTS === "1" ? [] : [
        { source: "/insights/answer-engine-optimization", destination: "/insights/answer-engine-optimisation", permanent: true },
        { source: "/insights/generative-engine-optimization-b2b", destination: "/insights/answer-engine-optimisation", permanent: true },
        { source: "/insights/seo-vs-ppc-for-b2b", destination: "/insights/seo-for-b2b-companies", permanent: true },
        { source: "/insights/seo-vs-ppc-for-b2c", destination: "/insights", permanent: true },
      ]),
    ];
  },
};

export default nextConfig;
