/* All site copy, lifted from the client's maaihome.jsx.
   Kept in one place so the section components stay presentational. */

export const nav = {
  links: ["Approach", "Work", "About", "Contact"],
  cta: "Book a call",
};

export const hero = {
  eyebrow: "SEO agency for global B2B",
  lede: "An SEO agency built for global B2B companies who want a growth channel worth defending to the board.",
  cta: "Book a strategy call",
};

export const bridge = {
  line1: "Hyperfixated on organic growth.",
  line2: "Platforms change.",
  hold: "That does not",
};

export const whatWeOwn = {
  eyebrow: "01 / What we own",
  lede: "Every agency delivers work. Very few take responsibility for what happens after. We report the growth, the failures, and the fix. In plain English. Monthly. Without waiting to be asked.",
  tiles: [
    {
      label: "Strategy",
      title: "The plan built from your business, not the search box.",
      body: "Every engagement starts with an industry deep dive, an audience and culture read, and a data grounded map of where organic growth can actually move revenue. A commercial roadmap that aligns with sales, product, and tech from day one.",
      pills: ["Industry deep dive", "Audience research", "Growth roadmap", "Cross-team alignment"],
    },
    {
      label: "Content",
      title: "Written for the person on the other side of the screen.",
      body: "Content architecture, technical SEO foundations, and copy structured for how your buyers think, speak, and search. Every surface your customers use is covered, from Google to Gemini to ChatGPT. Built to hold through algorithm shifts because it is grounded in customer intent.",
      pills: ["Content architecture", "Technical SEO", "AI search", "Digital PR"],
    },
    {
      label: "Performance",
      title: "Live reporting. Nothing hidden.",
      body: "Every engagement runs on transparent monthly reporting. Growth, failures, root causes, and what we are changing next. Documented playbooks the team can inspect. If you ever want to take the work in-house, the system moves with you.",
      pills: ["Monthly reports", "Attribution", "Documented SOPs", "CRO"],
    },
  ],
  closing: "The work is doing the work",
};

export const howItHolds = {
  eyebrow: "02 / How it holds",
  lede: "Algorithms change. Management changes. Agencies come and go. What we build is designed to hold through all of it, because it is grounded in the business itself.",
  stages: [
    {
      num: "01",
      title: "Industry ownership",
      body: "We go deep into your vertical before we touch a keyword. Every strategy starts with your business, your customers, and your commercial reality.",
    },
    {
      num: "02",
      title: "Audience and culture",
      body: "Content, tone, and structure built from how your buyers actually think, speak, and search. Written for the person on the other side of the screen.",
    },
    {
      num: "03",
      title: "Grounded in data",
      body: "Psychological nuance is where strategy starts. Data is where every decision gets checked. Nothing goes live on opinion alone.",
    },
    {
      num: "04",
      title: "Cross-functional execution",
      body: "SEO aligned with sales, product, and tech from day one. Content answers the right queries, and every new development is built for how Google and LLMs crawl.",
    },
  ],
  signals: [
    "Core Web Vitals", "Entity authority", "Schema markup", "Crawl budget",
    "Internal linking", "E-E-A-T signals", "Index coverage", "Anchor text",
    "Topical depth", "Featured snippets", "Query fan-out", "Brand mentions",
    "Knowledge panel", "Semantic clusters", "Passage ranking", "LLM citations",
    "Answer coverage", "SERP features", "Cannibalisation", "Render budget",
    "Citation gaps", "Page depth", "Backlink velocity", "Content decay", "Canonical tags",
  ],
};

export const receipts = {
  eyebrow: "03 / Receipts",
  lede: "Two clients. Real numbers. No omitted context.",
  cases: [
    {
      meta: "Global moving & logistics · June 2025 → June 2026",
      name: "Anglo Pacific World Movers",
      body: [
        "Anglo Pacific came to us with organic traffic that was not scaling. We rewrote titles and meta descriptions across priority pages, added comparison tables and transit time data across destination pages, and structured the FAQ blocks for AI citation.",
        "After stripping out normal seasonal patterns, 93 percentage points of user growth sit above the baseline. AI Visibility climbing from 22 to 26 across five months.",
      ],
      ledger: [
        { metric: "Users, YoY", value: "+62.9%" },
        { metric: "Sessions, YoY", value: "+35.0%" },
        { metric: "Organic traffic, MoM", value: "+21.1%" },
        { metric: "AI Visibility, 5 months", value: "22 → 26" },
      ],
    },
    {
      meta: "UK removals · March 2026 → May 2026",
      name: "Pickfords",
      body: [
        "When Google's 2026 core updates prioritised original expertise and first-party sources, we had already built Pickfords' content strategy around exactly that. Original data. Local specificity. FAQ schema across every priority page.",
        "The keyword growth reflects a strategy aligned with where Google was moving. Priority pages held their position through the March and May core updates while the wider category churned.",
      ],
      ledger: [
        { metric: "Top priority keyword", value: "+575%" },
        { metric: "Local removals guides", value: "+1,210%" },
        { metric: '"Affordable house move near me"', value: "+3,500%" },
        { metric: "CTR, priority pages", value: "+38.9%" },
      ],
    },
  ],
};

export const testimonials = {
  eyebrow: "04 / In their words",
  /* Placeholders in the source — swap in real quotes before launch. */
  quotes: [
    { quote: "[ Client testimonial — awaiting quote ]", who: "[ Role, Company ]" },
    { quote: "[ Client testimonial — awaiting quote ]", who: "[ Role, Company ]" },
  ],
};

export const leadMagnet = {
  eyebrow: "05 / Take it with you",
  lede: "What actually moves the needle in a market where two Google core updates and four algorithm shifts hit in six months. Written for marketing leaders who need to defend organic spend to their board.",
  items: [
    "The five signals AI search rewards in logistics",
    "How to structure content for LLM citation",
    "A three-month roadmap for a $100M business",
    "Two case studies with real numbers",
  ],
  cta: "Send me the report",
};

export const footer = {
  blurb: "An SEO agency for global B2B logistics. Hyperfixated on organic growth.",
  directLabel: "Prefer to skip the form?",
  directCta: "Talk to a founder, not a form",
  columns: [
    { title: "Company", links: ["Approach", "Work", "About"] },
    { title: "Contact", links: ["Book a call", "Email", "LinkedIn"] },
    { title: "Resources", links: ["Growth report", "SOP library", "Blog"] },
  ],
  copyright: "© 2026 MAAI. All rights reserved.",
  tagline: "Built to be accountable",
};
