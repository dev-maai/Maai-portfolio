/* Insights (blog) posts. Single source of truth for /insights and /insights/[slug].
   Each post picks 2 or 3 topics and any industries; the landing page filters on both.
   Body blocks render in order. Supported types: p, h2, list, ol, chart, table,
   view (Kriti's view, hidden while empty), image, faq. Every number needs a source. */

export const TOPICS = ["SEO", "AEO", "GEO", "B2B SEO", "B2C SEO", "SEO vs PPC", "Opinion"];
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
  {
    slug: "will-ai-replace-seo",
    title: "Will AI Replace SEO? What Changes for SEO Agencies in 2027",
    description:
      "Is SEO dead in 2027? What AI search has changed, what has not, and what business owners should ask any SEO agency they hire next year.",
    date: "2026-11-01",
    author: "kriti",
    topics: ["SEO", "AEO", "Opinion"],
    industries: [],
    image: "/removals/AEO.jpg",
    intro:
      "Thousands of business owners and marketers ask the same question every month: is SEO dead now that AI answers so many searches? The short answer is no. Search has moved into AI answers, and SEO is still how a business shows up in them. This post explains what has changed, what has not, and what it means for anyone hiring an SEO agency in 2027.",
    tldr: [
      "AI will not replace SEO. It changes where buyers find answers, and SEO is how you show up in those answers.",
      "Google AI Overviews, ChatGPT and Perplexity still pull from pages that rank, are trusted and are cited elsewhere.",
      "Agencies that only produce volume content will struggle. Agencies that build authority, technical health and real expertise will matter more.",
      "The question to ask in 2027 is how visible you are when a buyer asks an AI tool about your category.",
    ],
    body: [
      { type: "h2", text: "What people are asking" },
      { type: "p", text: "The interest is real. Behind every one of these searches is someone deciding whether SEO is still worth paying for, or whether their marketing career is safe." },
      {
        type: "chart",
        title: "Monthly searches about the future of SEO",
        series: [
          { name: "US", color: "#1C3F2E" },
          { name: "UK", color: "#86AB97" },
        ],
        rows: [
          { label: "is SEO dead", values: [2400, 320] },
          { label: "future of SEO", values: [1600, 320] },
          { label: "is SEO worth it", values: [1600, 170] },
          { label: "will AI replace SEO", values: [260, 70] },
        ],
        source: {
          label: "Semrush Keyword Overview",
          href: "https://www.semrush.com/analytics/keywordoverview/",
          note: "US and UK databases, data pulled November 2026. Figures are Semrush's estimated average monthly searches.",
        },
      },

      { type: "h2", text: "What AI search has changed" },
      { type: "p", text: "Answers now come before clicks. Google shows AI Overviews at the top of many results, and buyers ask ChatGPT, Perplexity and Gemini directly. For simple questions, many people get their answer without visiting a website." },
      { type: "p", text: "That makes being cited as important as ranking. When an AI tool recommends three agencies, three suppliers or three tools, the businesses named there win the attention. Showing up in that answer is the new page one." },
      { type: "p", text: "It also means generic content has lost its value. AI can write a basic guide in seconds, so a page that repeats what every other page says gives an AI tool no reason to cite it. And because AI tools read reviews, directories, industry lists and mentions on other sites, your reputation now lives well beyond your own website." },
      { type: "view", text: "" },

      { type: "h2", text: "What has not changed" },
      { type: "p", text: "AI tools still rely on the web. Google's own guidance on succeeding in AI search says the same SEO best practices apply, because AI Overviews draw on pages Google can crawl, index and trust." },
      { type: "p", text: "Technical foundations still decide visibility. A site that loads slowly, blocks crawlers or confuses search engines with duplicate pages will not be cited, however good its content is. Authority still wins too: sites that trusted sites link to and mention rank higher, and pages that rank are the pages AI tools cite." },
      { type: "p", text: "Most importantly, buyers still research before they buy. This is especially true in B2B, where a contract can run for years. Search, in any form, is where that research happens." },

      { type: "h2", text: "What it means for SEO agencies, and for you as a buyer" },
      { type: "p", text: "For agencies, the work is shifting in four clear ways:" },
      {
        type: "list",
        items: [
          { text: "From publishing many posts to publishing fewer posts that carry real data and first-hand experience." },
          { text: "From chasing single keywords to owning a topic in a specific industry." },
          { text: "From reporting rankings alone to tracking whether the brand appears in AI answers." },
          { text: "From building links in bulk to earning mentions on sites the industry trusts." },
        ],
      },
      { type: "p", text: "If you are a business owner, ask any agency you speak to in 2027 how they will make you visible in AI answers for your category, which industries they have real results in, what they will measure besides traffic, and how they build authority beyond publishing content on your site." },
      { type: "view", text: "", title: "Our view" },
    ],
    faq: [
      { q: "Is SEO dead in 2027?", a: "No. Search has moved into AI answers as well as results pages, and those answers still rely on pages that rank and are trusted." },
      { q: "Will AI replace SEO agencies?", a: "AI will replace some tasks, such as basic content writing and simple audits. It will not replace strategy, technical judgement or the work of building a brand's authority across the web." },
      { q: "Is SEO still worth it for small businesses?", a: "Yes, when it targets the specific searches your buyers make. Broad terms are harder to win, and specific, industry-focused topics are where smaller businesses can compete." },
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO helps you rank in search results. AEO (answer engine optimisation) helps you appear in direct answers. GEO (generative engine optimisation) helps you get cited by AI tools such as ChatGPT. In practice, they share the same foundations." },
    ],
  },
  {
    slug: "seo-vs-ppc-for-b2b",
    title: "SEO vs PPC for B2B Companies: Which One Drives Organic Growth?",
    description:
      "SEO vs PPC for B2B companies: how they differ, when to choose each, and how to use PPC data to pick SEO targets for long-term organic growth.",
    date: "2026-11-01",
    author: "kriti",
    topics: ["SEO vs PPC", "B2B SEO"],
    industries: [],
    image: "/removals/foundation-dashboard.jpg",
    intro:
      "Every B2B company with a marketing budget eventually faces the same choice: put money into SEO, PPC or both. The right answer depends on how fast you need leads, how long your sales cycle runs and how strong your website already is. This guide explains how the two differ and when each one makes sense for a B2B business.",
    tldr: [
      "For long-term organic growth, B2B companies should prioritise SEO. It builds visibility that keeps working without a monthly ad spend.",
      "PPC is the faster option when you need leads now, are testing a new service, or compete on searches where organic results are crowded.",
      "B2B search volumes are small and buying cycles are long, which favours SEO's compounding effect over paying for every click.",
      "The strongest B2B setups use PPC data to choose SEO targets, then shift budget to SEO as pages start to rank.",
    ],
    body: [
      { type: "h2", text: "How SEO and PPC differ" },
      { type: "p", text: "SEO and PPC both put you in front of people who are searching, but they work on very different terms. SEO asks for time and expertise upfront and keeps paying back after the work is done. PPC delivers visitors the day ads go live, and stops the moment spend stops. Interest in this choice is steady: \"SEO vs PPC\" gets 3,600 monthly searches in the US and 880 in the UK, according to Semrush data from November 2026." },
      {
        type: "table",
        head: ["", "SEO", "PPC"],
        rows: [
          ["How you pay", "Time and expertise, upfront", "Every click, ongoing"],
          ["Time to results", "Usually 3 to 6 months for early movement", "Same day once ads go live"],
          ["When spend stops", "Rankings keep bringing visitors", "Traffic stops immediately"],
          ["Visibility in AI answers", "Yes, AI tools cite pages that rank", "No, ads are not cited as sources"],
          ["Best for", "Long-term pipeline and authority", "Fast leads, testing and launches"],
        ],
      },

      { type: "h2", text: "When B2B companies should choose SEO first" },
      { type: "p", text: "SEO is the stronger first choice when your sales cycle runs for weeks or months, because buyers return to research several times and an organic page meets them on every visit without a new cost. It also suits B2B companies whose buyers search specific, niche terms with low volume and high value, which are often easy to rank for." },
      { type: "p", text: "SEO is also the only route into AI answers. When buyers ask ChatGPT or Google's AI Overview for supplier recommendations, those tools cite organic pages, not ads. And because rankings keep working after the work is done, SEO costs tend to fall over time instead of rising with every click." },

      { type: "h2", text: "When PPC is the right first step" },
      { type: "p", text: "PPC makes sense when you need enquiries within weeks, not months. It is also the better tool for testing: if you are launching a new service or entering a new market, a small PPC budget shows quickly whether there is demand before you invest in content." },
      { type: "p", text: "PPC also helps when your site is new and needs months before it can rank, or when competitors with strong authority hold the top organic results for your main terms." },
      { type: "view", text: "" },

      { type: "h2", text: "Using SEO and PPC together" },
      { type: "p", text: "The two work best as a sequence. This approach turns PPC into research for SEO, so ad spend also builds a long-term asset:" },
      {
        type: "ol",
        items: [
          { lead: "Start PPC on a small budget", text: "for your most important buyer searches, and see which bring real enquiries." },
          { lead: "Build SEO pages", text: "for the searches that converted, not the ones with the most volume." },
          { lead: "Reduce PPC spend", text: "on searches where your pages now hold a top position." },
          { lead: "Keep PPC for gaps,", text: "such as new services, competitive terms and seasonal demand." },
        ],
      },
      { type: "view", text: "", title: "Our view" },
    ],
    faq: [
      { q: "Is SEO better than PPC for B2B?", a: "For long-term growth, usually yes. SEO builds visibility that lasts and earns more trust with B2B buyers. PPC is better for speed and testing." },
      { q: "How much should a B2B company spend on SEO vs PPC?", a: "It depends on how fast you need leads and how strong your site already is. A new site may lean on PPC at first, then shift budget to SEO as rankings grow." },
      { q: "Does PPC help SEO rankings?", a: "No. Paid ads do not change organic rankings. PPC data can show which searches convert, which helps you choose SEO targets." },
      { q: "Do ads appear in AI answers?", a: "AI tools such as ChatGPT cite web pages as sources, and paid ads are not used as those sources. Visibility in AI answers comes from organic authority." },
    ],
  },
  {
    slug: "seo-vs-ppc-for-b2c",
    title: "SEO vs PPC for B2C Companies: When to Use Each for Growth",
    description:
      "SEO vs PPC for B2C and consumer brands: when PPC wins, when SEO wins, and a simple guide to choosing the right mix.",
    date: "2026-11-01",
    author: "kriti",
    topics: ["SEO vs PPC", "B2C SEO"],
    industries: [],
    image: "/selfstorage/seo.jpg",
    intro:
      "Consumer brands face a different SEO and PPC decision from B2B companies. Buyers decide faster, searches are bigger and each sale is usually worth less. This guide explains when PPC is the right tool for a B2C business, when SEO wins, and how to choose the mix.",
    tldr: [
      "B2C companies usually need both SEO and PPC, in a different mix from B2B.",
      "PPC suits B2C when buyers decide fast, products are seasonal, or you need sales this month.",
      "SEO suits B2C for high-volume informational searches, local searches and categories where buyers research before they buy.",
      "Over time, SEO lowers the cost of each customer, while PPC gives you control over timing and volume.",
    ],
    body: [
      { type: "h2", text: "Why B2C is different from B2B" },
      { type: "p", text: "Decisions are faster. A consumer buying a phone case or booking a home removal may decide within minutes or days, so being visible at that exact moment matters more than months of research content." },
      { type: "p", text: "Search volumes are also larger. \"B2C SEO\" alone has 1,000 monthly searches in the US and 170 in the UK, according to Semrush data from November 2026, and consumer product searches often run far higher. Bigger searches mean more competition for both organic and paid results." },
      { type: "p", text: "Finally, one customer is usually worth less, so the cost of each click must stay below the profit from each sale. Seasonal peaks, offers and trends also shape demand, and PPC can react to those changes the same day." },
      { type: "view", text: "" },

      { type: "h2", text: "When B2C companies should choose SEO, and when PPC" },
      { type: "p", text: "The right choice depends on the situation more than the industry. The table below matches common B2C situations to the better first choice and the reason behind it." },
      {
        type: "table",
        head: ["Situation", "Better first choice", "Why"],
        rows: [
          ["Buyers decide within minutes", "PPC", "You need to appear at the moment of purchase"],
          ["Seasonal or time-limited demand", "PPC", "You can switch spend on and off with the season"],
          ["New product or new market", "PPC", "Fast data on what sells before investing in content"],
          ["Buyers research before buying", "SEO", "Guides and reviews win trust over several visits"],
          ["Local services (removals, storage, clinics)", "SEO", "Local results and maps bring steady, low-cost enquiries"],
          ["Margins too thin to pay for clicks", "SEO", "Organic visitors carry no cost per click"],
        ],
      },

      { type: "h2", text: "A simple decision guide" },
      { type: "p", text: "Most B2C businesses end up with a mix. Work through these questions to set yours:" },
      {
        type: "ol",
        items: [
          { lead: "Do you need sales within the next month?", text: "Start with PPC, and begin SEO at the same time." },
          { lead: "Is your profit per sale high enough to pay for clicks?", text: "If not, put most of the budget into SEO." },
          { lead: "Do your buyers research before buying?", text: "Build SEO content for that research stage." },
          { lead: "Is your business local?", text: "Prioritise local SEO and your Google Business Profile." },
          { lead: "Is demand seasonal?", text: "Use PPC for the peaks and SEO for steady demand all year." },
        ],
      },
      { type: "p", text: "The useful question is how the mix should change over the next 12 months as SEO pages start to rank." },
      { type: "view", text: "", title: "Our view" },
    ],
    faq: [
      { q: "Is SEO or PPC better for ecommerce?", a: "Most ecommerce brands use both. PPC drives sales on product searches, and SEO lowers costs over time through category pages and buying guides." },
      { q: "How long does SEO take for a B2C business?", a: "Early ranking movement usually shows within three to six months. Competitive consumer markets can take longer." },
      { q: "Can a small B2C business compete in SEO?", a: "Yes, through local searches and specific long-tail searches that larger brands overlook." },
      { q: "When should a B2C company stop PPC?", a: "Rarely all at once. Reduce spend on searches where your organic pages already hold top positions, and keep PPC for launches and seasonal peaks." },
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
