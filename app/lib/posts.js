/* Insights (blog) posts. Single source of truth for /insights and /insights/[slug].
   Each post picks 2 or 3 topics and any industries; the landing page filters on both.
   Body blocks render in order. Supported types: p, h2, list, ol, chart, table,
   view (Kriti's view, hidden while empty), image, faq. Every number needs a source. */

export const TOPICS = ["SEO", "AEO", "GEO", "B2B SEO", "SEO vs PPC", "Opinion"];
export const INDUSTRIES = ["Removals", "Self storage", "Logistics and freight", "Real estate"];

export const AUTHORS = {
  kriti: {
    name: "Kriti",
    role: "Founder of MAAI, SEO for B2B companies",
    photo: "/Team/Kriti.jpeg",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kritikumarii/" }],
  },
};

export const POSTS = [
  {
    slug: "seo-for-b2b-companies",
    title: "SEO for B2B Companies: The Customer Journey and How to Plan It",
    description:
      "Why SEO matters more for B2B companies, where search fits each stage of the B2B buying journey, and how to plan SEO for a B2B business.",
    date: "2026-11-01",
    author: "kriti",
    topics: ["SEO", "B2B SEO"],
    industries: [],
    image: "/Saas/aeo.jpg",
    intro:
      "B2B buyers rarely pick up the phone first. They search, compare and build a shortlist on their own, often over weeks. This guide explains why that makes SEO more important for B2B companies every year, how search fits each stage of the buying journey, and how to plan SEO for a B2B business.",
    tldr: [
      "B2B buyers research alone, for weeks or months, before they speak to a supplier. Search and AI answers are where that research happens.",
      "B2B SEO works best when every page maps to a stage of the buyer journey.",
      "Volume matters less in B2B. A page with 50 searches a month can bring in a contract worth more than a year of B2C traffic.",
      "Plan around your buyers' questions, your industry and your proof, then build authority so search engines and AI tools trust you.",
    ],
    body: [
      { type: "h2", text: "Why SEO matters more for B2B companies now" },
      { type: "p", text: "A logistics manager looking for a new 3PL partner, or a facilities lead looking for a commercial removals firm, will search, compare and shortlist before contacting anyone. If you are not visible during that research, you are not on the shortlist." },
      { type: "p", text: "That shortlist is increasingly shaped by AI. Buyers now ask ChatGPT or Google's AI Overview for recommendations in their category, and those tools name businesses that rank well and are mentioned across trusted sites." },
      { type: "p", text: "The good news for B2B companies is that their search terms are smaller and easier to win. \"B2B SEO\" itself has 1,300 monthly searches in the UK with a keyword difficulty of 19 out of 100, against 6,600 searches and a difficulty of 47 in the US. Niche B2B searches are often even less competitive." },
      {
        type: "chart",
        title: "Monthly searches for B2B SEO terms",
        series: [
          { name: "US", color: "#1C3F2E" },
          { name: "UK", color: "#86AB97" },
        ],
        rows: [
          { label: "B2B SEO", values: [6600, 1300] },
          { label: "B2B SEO strategy", values: [2400, 590] },
          { label: "B2B customer journey", values: [1300, 320] },
          { label: "SEO for B2B companies", values: [590, 210] },
        ],
        source: {
          label: "Semrush Keyword Overview",
          href: "https://www.semrush.com/analytics/keywordoverview/",
          note: "US and UK databases, data pulled November 2026. Figures are Semrush's estimated average monthly searches.",
        },
      },
      { type: "p", text: "SEO also compounds. A page that ranks keeps working every month without new spend, and for B2B companies with long sales cycles, that steady visibility is worth more than short bursts of traffic." },
      { type: "view", text: "" },

      { type: "h2", text: "The B2B customer journey and where search fits" },
      { type: "p", text: "A B2B buyer moves through five stages, and each one has its own searches. Take a business reviewing its logistics:" },
      {
        type: "list",
        items: [
          { lead: "Problem.", text: "They notice something is costing time or money, and search \"why are our delivery costs rising\". A clear guide answers this." },
          { lead: "Options.", text: "They look at ways to fix it, such as \"outsource warehousing vs in-house\". A comparison guide wins here." },
          { lead: "Shortlist.", text: "They look for who does this well: \"best 3PL providers UK\". List and industry pages show up." },
          { lead: "Evaluation.", text: "They check whether a supplier can be trusted, through reviews and case studies." },
          { lead: "Decision.", text: "They look at cost and next steps, such as \"3PL pricing UK\", and land on pricing and contact pages." },
        ],
      },
      { type: "p", text: "Most B2B websites only cover the last two stages. Buyers in the earlier stages find someone else first, and by the time they reach the evaluation stage, the shortlist is already set." },
      { type: "p", text: "It also helps to remember that several people are usually involved in a B2B purchase, such as an operations lead, a finance lead and a director. Each one searches differently, so the same journey needs pages written for different roles." },

      { type: "h2", text: "How to plan SEO for a B2B company" },
      { type: "p", text: "Start with the business, not the keywords. Work out who signs the contract, who influences it, and what one client is worth over its lifetime. That number tells you how much a single ranking page is worth, and it changes how you judge search volume." },
      { type: "p", text: "Next, collect the questions buyers actually ask. Your sales calls, client emails and support tickets are full of them, and each question your sales team hears is a page your website could answer. Check each one for search demand and difficulty in a tool such as Semrush or Google Search Console, but do not dismiss low-volume searches. In B2B, intent and deal value matter more than volume." },
      { type: "p", text: "Before publishing anything, fix the technical foundations. Search engines need to crawl and index your key pages, the site needs to load quickly, and duplicate or broken pages need to go. Then build the pages that turn research into enquiries:" },
      {
        type: "ol",
        items: [
          { lead: "Service and industry pages,", text: "one clear page for each service and each industry you serve." },
          { lead: "Early-stage content,", text: "such as guides, comparisons and industry insights, each carrying your own data and examples." },
          { lead: "Proof,", text: "including case studies, results, named clients where allowed, and reviews." },
        ],
      },
      { type: "p", text: "Finally, build authority beyond your own site by earning mentions in industry publications, directories and association sites. Measure what matters: enquiries and pipeline from organic search, rankings for buyer-intent searches, and whether your brand appears in AI answers." },
      { type: "view", text: "" },

      { type: "h2", text: "How B2B SEO differs from B2C SEO" },
      { type: "p", text: "B2C SEO wins by reaching many people quickly. B2B SEO wins by being the most trusted answer for a small group of the right people. That one difference changes who you write for, how long the journey takes and how you measure success, as the comparison below shows." },
      {
        type: "table",
        head: ["", "B2B SEO", "B2C SEO"],
        rows: [
          ["Buyer", "A team, often 3 or more people", "Usually one person"],
          ["Buying time", "Weeks to months", "Minutes to days"],
          ["Search volume", "Low, specific searches", "High, broad searches"],
          ["Content that converts", "Case studies, comparisons, industry guides", "Product pages, reviews, offers"],
          ["Success measure", "Leads and contract value", "Revenue and conversion rate"],
        ],
      },
      { type: "view", text: "", title: "Our view" },
    ],
    faq: [
      { q: "What is B2B SEO?", a: "B2B SEO is the work of making a business visible in search engines and AI tools when other businesses research a product or service it sells." },
      { q: "How long does B2B SEO take to work?", a: "Most B2B sites see early movement in rankings within three to six months. Enquiries usually follow as pages climb for buyer-intent searches." },
      { q: "Is B2B SEO worth it if search volumes are low?", a: "Yes. One B2B contract can be worth many times the cost of a year of SEO, so a search with 30 monthly searches can be valuable if the people searching are ready to buy." },
      { q: "Should B2B companies focus on SEO or LinkedIn?", a: "They do different jobs. LinkedIn builds awareness with people who are not yet searching, and SEO captures people who are actively looking for a solution." },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
