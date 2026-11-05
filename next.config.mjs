/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      // industry pages that moved to dedicated URLs
      { source: "/industries/logistics", destination: "/seo-agency-for-logistics-companies", permanent: true },
      { source: "/industries/removals", destination: "/industries/removals-and-relocations", permanent: true },
      // AEO pillar is unpublished while it is rewritten and screenshots are added; temporary so the slug can return
      { source: "/insights/answer-engine-optimization", destination: "/insights/generative-engine-optimization-b2b", permanent: false },
    ];
  },
};

export default nextConfig;
