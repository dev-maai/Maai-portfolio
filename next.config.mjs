/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      // industry pages that moved to dedicated URLs
      { source: "/industries/logistics", destination: "/seo-agency-for-logistics-companies", permanent: true },
      { source: "/industries/removals", destination: "/industries/removals-and-relocations", permanent: true },
    ];
  },
};

export default nextConfig;
