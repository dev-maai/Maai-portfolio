/* Served by Next.js at /robots.txt. /api/ stays out of the index — the
   fit-check endpoint is a form sink, not content. Keep the base URL in sync
   with app/sitemap.js. */
const BASE_URL = "https://www.maai.agency";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
