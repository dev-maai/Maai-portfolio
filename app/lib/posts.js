/* Insights (blog) posts. Single source of truth for /insights and /insights/[slug].
   Each post picks 2 or 3 topics and any industries; the landing page filters on both.
   Body blocks render in order. Supported types: p, h2, list, ol, chart, table,
   view (Kriti's view, hidden while empty), image, faq. List items may carry an href to
   interlink posts, and any text can hold inline links written as [label](url). Every number needs a source. */

export const TOPICS = ["AEO/GEO", "SEO - Begins", "B2B", "B2C", "Everything Marketing"];
export const INDUSTRIES = ["Removals & Relocation", "Real estate", "Logistics", "Supply chain"];

export const AUTHORS = {
  team: {
    name: "Team MAAI",
    role: "SEO, AEO and GEO for B2B companies",
    photo: "/maai-logo.png",
    org: true,
    links: [{ label: "maai.agency", href: "https://www.maai.agency" }],
  },
  kriti: {
    name: "Kriti",
    role: "Founder of MAAI, SEO for B2B companies",
    photo: "/Team/Kriti.jpeg",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/kritikumarii/" }],
  },
};

/* Posts with draft: true stay out of the site, sitemap and listings until republished.
   To preview drafts locally, run the dev server with INSIGHTS_PREVIEW_DRAFTS=1. */
const ALL_POSTS = [
  {
    slug: "answer-engine-optimization",
    draft: true,
    seoTitle: "Answer Engine Optimization (AEO) 2027: How to Rank in AI Search",
    title: "Answer Engine Optimisation (AEO) in 2027: How to Rank in ChatGPT, Perplexity, Claude, Gemini and Grok",
    description:
      "Answer engine optimization (AEO) explained: how ChatGPT, Perplexity, Claude, Gemini, Grok and Google AI Overviews choose sources, our study of 42 UK and US searches, and step-by-step setups for GA4, Search Console, Bing and robots.txt.",
    date: "2026-11-05",
    author: "team",
    topics: ["AEO/GEO"],
    industries: [],
    image: "/removals/intent-map.jpg",
    intro:
      "Ask ChatGPT which freight forwarder to use, or ask Google how to choose an estate agent, and you get one written answer that names a handful of businesses. Answer engine optimization (AEO, spelt optimisation in the UK) is the work of becoming one of those names. This guide shows you how each answer engine picks its sources, what we found when we checked 42 business searches in the UK and the US, and exactly how to set up the tools that tell you whether it is working: robots.txt, GA4, Google Search Console and Bing Webmaster Tools.",
    tldr: [
      "AEO makes your business the answer inside ChatGPT, Perplexity, Claude, Gemini, Grok and Google's AI Overviews and AI Mode. It builds on SEO, because every one of these tools searches the web before it answers.",
      "In our study of 42 business searches, 86% showed an AI Overview, and 71% of the sources those Overviews cited already ranked on Google's first page for the same search.",
      "Third-party sites matter as much as your own: most AI Overviews in our study also cited a trade body, government site, portal, publication, Reddit thread or YouTube video.",
      "Each engine searches a different index, so the first job differs: Bing and OpenAI's crawler for ChatGPT, Google Search for AI Overviews and Gemini, Brave Search for Claude, posts on X for Grok.",
      "You can measure AEO today with a fixed list of customer questions, an AI channel in GA4, and the AI reports in Search Console and Bing Webmaster Tools.",
    ],
    body: [
      { type: "h2", text: "What is answer engine optimization (AEO)?" },
      {
        type: "callout",
        variant: "definition",
        title: "Definition",
        text: "Answer engine optimization (AEO) is the practice of making your information easy for AI tools to find, trust and quote, so that they cite your pages and recommend your business when people ask questions.",
      },
      { type: "p", text: "An answer engine is any tool that replies with a written answer instead of a list of links. When someone asks one a question, it searches the web, reads a few pages, writes a reply and, in most cases, shows where its information came from. AEO is about being one of those sources and, ideally, the business the answer recommends." },
      { type: "p", text: "The term started with featured snippets and voice assistants, where Google or Alexa read out a single answer. Generative AI made answers longer and spread them across many more tools, so the goal grew from winning one snippet to being one of the few businesses an answer names. You will also hear [generative engine optimisation (GEO)](/insights/generative-engine-optimization-b2b), LLM SEO and AI SEO. The labels overlap, and the work behind them is largely the same." },
      {
        type: "cards",
        title: "The answer engines that matter in 2027",
        items: [
          { title: "ChatGPT", meta: "OpenAI", rows: [["Searches", "OpenAI's own crawler plus Bing's index"], ["Reach", "Passed one billion weekly users in August 2026, according to OpenAI"]], href: "#how-to-rank-in-chatgpt", hrefLabel: "How to rank in ChatGPT" },
          { title: "Google AI Overviews and AI Mode", meta: "Google", rows: [["Searches", "Google Search"], ["Reach", "AI Overviews reach more than 2.5 billion users, Google said at I/O 2026"]], href: "#how-to-rank-in-google-ai-overviews-and-ai-mode", hrefLabel: "How to rank in AI Overviews" },
          { title: "Gemini", meta: "Google", rows: [["Searches", "Grounds answers in Google Search"], ["Reach", "900 million monthly users of the Gemini app (Google, May 2026)"]], href: "#how-to-rank-in-gemini", hrefLabel: "How to rank in Gemini" },
          { title: "Perplexity", meta: "Perplexity AI", rows: [["Searches", "Its own index, searched live for almost every question"], ["Shows", "A numbered citation beside each claim"]], href: "#how-to-rank-in-perplexity", hrefLabel: "How to rank in Perplexity" },
          { title: "Claude", meta: "Anthropic", rows: [["Searches", "Web search linked to Brave Search"], ["Shows", "Clickable citations in the answer"]], href: "#how-to-rank-in-claude", hrefLabel: "How to rank in Claude" },
          { title: "Grok", meta: "xAI", rows: [["Searches", "Its own web index plus posts on X"], ["Shows", "Citations from websites and X posts"]], href: "#how-to-rank-in-grok", hrefLabel: "How to rank in Grok" },
        ],
      },

      { type: "h2", text: "How does answer engine optimization work?" },
      { type: "p", text: "Every answer engine builds a reply in roughly the same four steps. Each step is a point where you can influence the result, so it is worth understanding them before you change anything on your website." },
      {
        type: "flow",
        title: "How an AI answer is built, and where you can influence it",
        steps: [
          { label: "Reads the question", text: "Decides whether it can answer from training or needs to search. Prices, suppliers and recent topics usually trigger a search.", lever: "be known: consistent mentions across the web" },
          { label: "Fans out into searches", text: "Splits one question into several smaller searches, for example cost, location, reviews and alternatives.", lever: "pages that answer the follow-up questions too" },
          { label: "Retrieves passages", text: "Opens the best-matching pages in its index and pulls out the passages that answer each sub-question.", lever: "crawl access, indexing and clear headings" },
          { label: "Writes and cites", text: "Combines the passages, names the businesses it trusts most and links to some sources.", lever: "specific facts, original data, third-party proof" },
        ],
        caption: "Google calls the second step query fan-out. The third step is known as retrieval-augmented generation (RAG).",
      },
      { type: "p", text: "Two findings explain which businesses survive to the final answer. When Ahrefs analysed 75,000 brands, mentions of a brand across the web had the strongest link with appearing in Google's AI Overviews (a correlation of 0.664), well ahead of backlinks (0.218). And researchers at [Princeton University](https://arxiv.org/abs/2311.09735) and partner institutions found that adding statistics, quotations and cited sources to a page could raise its visibility in AI answers by up to 40%. Being talked about, and being specific, both count." },

      { type: "h2", text: "AEO vs SEO: what is the difference?" },
      {
        type: "compare",
        columns: [
          { title: "SEO", tone: "neutral", items: ["Wins a position on the results page and a click", "Works on whole pages and the site", "Measured in rankings, clicks and enquiries"] },
          { title: "AEO", tone: "accent", items: ["Wins a mention, citation or recommendation inside the answer", "Works on individual passages, facts and what other sites say about you", "Measured in citations, mentions, AI referrals and enquiries"] },
          { title: "Where they overlap", tone: "good", items: ["Crawlable, indexed, fast pages", "Content that answers real questions", "Authority built through mentions and links"] },
        ],
      },
      { type: "p", text: "You cannot do AEO well without SEO, because answer engines retrieve pages from search indexes. What changes is the reward. A click used to be the main prize. Now much of the persuading happens inside the answer, before anyone visits a website." },
      {
        type: "stats",
        items: [
          { value: "15%", label: "of Google visits led to a click on a normal result when there was no AI summary", by: "Pew Research Center" },
          { value: "8%", label: "led to a click when an AI summary appeared", by: "Pew Research Center" },
          { value: "1%", label: "of visits included a click on a link inside the AI summary itself", by: "Pew Research Center" },
        ],
        source: { label: "Pew Research Center", href: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/", note: "Browsing data from 900 US adults, March 2025" },
      },

      { type: "h2", text: "Which sources do AI Overviews cite? Our study of 42 business searches" },
      { type: "p", text: "Most AEO advice is written about software and marketing searches. We wanted to know what happens for the searches real businesses depend on: freight, warehousing, relocation, property, procurement and business services. So we checked them ourselves." },
      {
        type: "callout",
        variant: "note",
        title: "How we ran the study",
        text: "On 5 November 2026 we pulled Google results from Semrush for 24 searches in its UK database and 18 matching searches in its US database (for example \"freight forwarder uk\" and \"freight forwarder\"). For each one we recorded whether an AI Overview appeared, every website it cited, and where those websites ranked in the normal results. Semrush's data is a snapshot, and AI Overviews can change between visits, so treat the figures as a picture of one day.",
      },
      {
        type: "stats",
        items: [
          { value: "36 of 42", label: "searches showed an AI Overview (20 of 24 in the UK, 16 of 18 in the US)", by: "MAAI study" },
          { value: "71%", label: "of the 133 cited sources also ranked in Google's organic top 10 for the same search", by: "MAAI study" },
          { value: "24 of 36", label: "AI Overviews cited at least one source that was not a supplier", by: "MAAI study" },
        ],
      },
      {
        type: "hbar",
        title: "UK vs US: what AI Overviews cited",
        unit: "%",
        max: 100,
        series: [
          { name: "UK (20 AI Overviews)", color: "#1C3F2E" },
          { name: "US (16 AI Overviews)", color: "#E62E6B" },
        ],
        rows: [
          { label: "Cited sources ranking in the organic top 10", values: [74, 67] },
          { label: "Cited sources ranking in the organic top 3", values: [44, 34] },
          { label: "AI Overviews citing a non-supplier source", values: [60, 75] },
        ],
        note: "UK: 72 cited sources across 20 AI Overviews. US: 61 cited sources across 16 AI Overviews.",
        source: { label: "MAAI analysis of Semrush UK and US SERP data, 5 November 2026" },
      },
      { type: "p", text: "Three patterns stood out, and each one changes what you should do first." },
      { type: "h3", text: "1. Page one is the entry ticket" },
      { type: "p", text: "Seven in ten cited sources already ranked in Google's top 10. If you are nowhere in the normal results for a question, an AI Overview is unlikely to quote you for it. Core SEO comes first." },
      { type: "image", src: "/insights/aeo-google-ai-overview.jpg", alt: "Google UK AI Overview for freight forwarder, with a short definition citing Wikipedia and YouTube on the left and cited pages from DHL, Wikipedia and DP World on the right", caption: "Google UK's AI Overview for \"what is a freight forwarder\": Wikipedia, YouTube and two logistics companies that rank on page one supply the answer." },
      { type: "h3", text: "2. Answer engines reach beyond supplier websites" },
      { type: "p", text: "Two thirds of AI Overviews cited someone other than a business selling the service. The table shows what that looked like." },
      {
        type: "table",
        head: ["Search", "Market", "Non-supplier sources cited"],
        rows: [
          ["what is a 3pl", "UK and US", "ASCM (trade body), YouTube; plus Reddit in the US"],
          ["what is a freight forwarder", "UK and US", "Wikipedia; logistics companies explaining the role"],
          ["customs broker / customs clearance uk", "US and UK", "CBP and trade.gov in the US; GOV.UK in the UK"],
          ["how to choose an estate agent / real estate agent", "UK and US", "HomeOwners Alliance, Reddit, YouTube (UK); Zillow, The New York Times, YouTube (US)"],
          ["best crm for small business", "UK and US", "Startups.co.uk, YouTube (UK); Reddit, US Chamber of Commerce (US)"],
          ["warehouse space to rent", "UK", "Rightmove, Zoopla, LoopNet"],
        ],
      },
      { type: "h3", text: "3. Searches for a supplier still lean on the map" },
      { type: "p", text: "Six of the 42 searches showed no AI Overview, and five of those six showed Google's local map results instead, including \"office removals\", \"commercial property management\" and \"warehouse space for rent\" in the US. When someone wants a supplier nearby, your Google Business Profile is part of AEO." },
      {
        type: "callout",
        variant: "takeaway",
        text: "Rank on page one for the question, write the clearest answer on that page, and make sure the trade bodies, portals, directories and communities in your sector describe you accurately. Those three moves cover most of what AI Overviews cite.",
      },

      { type: "h2", text: "How to rank in ChatGPT" },
      { type: "p", text: "ChatGPT decides for itself when to search the web. When it does, it uses Bing's index together with pages fetched by OpenAI's search crawler, OAI-SearchBot, and lists its sources beside the answer. Usage is huge on both sides of the Atlantic: OpenAI announced one billion weekly users in August 2026, and [Ofcom](https://www.ofcom.org.uk/media-use-and-attitudes/online-habits/from-apps-to-ai-search-how-the-uk-goes-online-in-2025) recorded 1.8 billion UK visits to ChatGPT in the first eight months of 2025, up from 368 million a year earlier." },
      {
        type: "callout",
        variant: "note",
        title: "Why ChatGPT can cite you before Google ranks you",
        text: "Semrush's study of ChatGPT search found that the pages it cites rank in position 21 or lower on Google for related searches almost 90% of the time. ChatGPT rewards a page that answers the exact question well, even when that page is not on Google's first page. That makes it the fastest engine for a smaller business to break into.",
      },
      { type: "image", src: "/insights/aeo-chatgpt-sources.jpg", alt: "ChatGPT web search answer to which UK 3PLs integrate with Shopify and handle returns, with the Sources panel open listing the provider websites it cited", caption: "ChatGPT's answer to a detailed 3PL question, with the Sources panel open: every business it shortlisted had a page that answered that exact question." },
      {
        type: "steps",
        title: "Get ChatGPT to find and cite you",
        items: [
          { title: "Check OAI-SearchBot is allowed", path: "yourdomain.com/robots.txt", text: "OpenAI's crawler documentation states that sites which block OAI-SearchBot will not be shown in ChatGPT search answers. Also ask whoever runs your hosting or CDN whether bot protection blocks it." },
          { title: "Verify your site in Bing Webmaster Tools", path: "bing.com/webmasters > Add site > Import from Google Search Console", text: "Importing from Search Console takes a few minutes. Then submit your sitemap under Sitemaps and use URL Inspection on your key pages." },
          { title: "Find out who ChatGPT cites today", text: "Turn on search in ChatGPT and ask your top ten customer questions. Open the Sources panel each time and note every website listed. Those are the pages to beat or the sites to appear on." },
          { title: "Answer the long version of the question", text: "ChatGPT prompts are conversational: \"which 3PL in the Midlands works with Shopify and handles returns?\" Add sections to your pages that answer questions at that level of detail." },
          { title: "Get listed where ChatGPT looks for recommendations", text: "For \"best\" and \"which company\" questions, ChatGPT often cites review platforms, directories and roundup articles. Make sure you are on the ones in your sector, with a complete profile and recent reviews." },
        ],
      },

      { type: "h2", text: "How to rank in Google AI Overviews and AI Mode" },
      { type: "p", text: "Google's AI features are built on Google Search, so this is where SEO and AEO overlap most. Google's guidance for site owners is short and worth reading in full:" },
      {
        type: "callout",
        variant: "tip",
        title: "What Google says",
        items: [
          "There are \"no additional requirements to appear in AI Overviews or AI Mode\".",
          "A page needs to be indexed and eligible to show in Search with a snippet.",
          "Both features may use query fan-out, running several related searches across subtopics.",
          "AI Mode and AI Overviews use different models, so their links can differ.",
        ],
      },
      { type: "p", text: "In practice, being cited comes down to ranking for the question and having a passage that answers it cleanly. The quickest improvement most businesses can make is to rewrite the opening of each key section so that it answers first and sells second." },
      {
        type: "rewrite",
        title: "Rewriting a customs clearance page so AI can quote it",
        before: "At our company, we pride ourselves on a comprehensive range of customs services tailored to your needs, backed by decades of experience in international trade and a passion for service.",
        after: "Customs clearance is the process of lodging an import declaration and paying any duty so that your goods are released at the border. We prepare the declaration, calculate the duty and arrange release for you, and we confirm the duty due before your shipment arrives.",
        note: "The \"after\" version defines the term in the first sentence, says exactly what the business does, and could be lifted into an answer on its own. Add your real turnaround times and prices to make it more specific still.",
      },
      {
        type: "checklist",
        title: "AI Overview checklist for each key page",
        items: [
          "The page ranks in the top 10 for the question, or you have a plan to get it there.",
          "Each heading is phrased the way people ask, and the first one or two sentences under it answer the question directly.",
          "The page also answers the follow-up questions: cost, timing, risks and alternatives.",
          "Facts are specific (prices, ranges, locations, standards) and sources are named.",
          "The page shows an author or company name and a last updated date.",
          "For local searches, your Google Business Profile lists every service with accurate categories and recent reviews.",
        ],
      },

      { type: "h2", text: "How to rank in Gemini" },
      { type: "p", text: "Gemini is Google's AI assistant, available as an app and inside Android and Google Workspace. When it needs current information it grounds its answers in Google Search, so the AI Overviews checklist above applies here too. Two extras help: a complete Google Business Profile for local questions, and YouTube videos that answer your customers' questions, since YouTube is a Google property and appeared in 9 of the 36 AI Overviews in our study." },
      {
        type: "callout",
        variant: "warning",
        title: "Check your Google-Extended setting",
        text: "Google-Extended is the robots.txt setting that limits Google's use of your content for AI training and for grounding in some of its other systems. It does not affect Google Search or AI Overviews. If you block it, check with your developer what that means for Gemini answers before you decide.",
      },

      { type: "h2", text: "How to rank in Perplexity" },
      { type: "p", text: "Perplexity searches the web for almost every question and places a numbered citation beside each sentence, so you can see exactly which page supported which claim. It builds its index with its own crawler, PerplexityBot. Because it searches live and shows its sources so openly, it rewards pages that are current, specific and easy to quote." },
      {
        type: "compare",
        columns: [
          { title: "Pages Perplexity can quote", tone: "good", items: ["A clear answer in the first lines of each section", "Named figures, places, standards and timescales", "A visible last updated date", "Content in the HTML, readable without scripts"] },
          { title: "Pages it struggles to use", tone: "bad", items: ["Long introductions before the answer", "Claims with no numbers or examples", "Undated pages with old prices", "Key content loaded only by JavaScript or hidden in PDFs"] },
        ],
      },

      { type: "h2", text: "How to rank in Claude" },
      { type: "p", text: "Claude, made by Anthropic, gained web search in March 2025 and shows clickable citations in its answers. Reports at the time noted that Anthropic had added Brave Search to its list of subprocessors, and that some Claude citations matched Brave's results exactly, which suggests Brave powers at least part of Claude's search. That makes Brave the index to check for Claude, the way Bing is for ChatGPT." },
      {
        type: "steps",
        items: [
          { title: "Allow Anthropic's search crawlers", text: "Anthropic's help centre describes three crawlers: ClaudeBot for training, Claude-User for fetching a page a person asks about, and Claude-SearchBot for search. Allow Claude-SearchBot and Claude-User if you want to be cited." },
          { title: "Check how you appear in Brave Search", path: "search.brave.com", text: "Search your brand and your top customer questions. If your key pages are missing, check they are crawlable and linked from your homepage and sitemap." },
          { title: "Keep content in the page HTML", text: "Many AI crawlers do not run JavaScript. If your service details only appear after scripts load, ask your developer about server-side rendering." },
        ],
      },

      { type: "h2", text: "How to rank in Grok" },
      { type: "p", text: "Grok, from xAI, is built into X. Alongside its own web index, it can search posts and discussions on X and compare them with news coverage and websites. If your buyers use X, that gives you a lever no other engine offers in the same way: post specific, useful updates from your company and founder accounts, join the conversations in your industry, and earn coverage in the trade and news publications Grok cross-checks." },

      { type: "h2", text: "Which AI crawlers should you allow in robots.txt?" },
      { type: "p", text: "Your robots.txt file tells crawlers which parts of your site they may visit. AI companies run separate crawlers for search and for training, so you can stay visible in AI answers while opting out of training. This table shows the main ones." },
      {
        type: "table",
        head: ["Crawler", "Company", "What it does", "Allow it to be cited?"],
        rows: [
          ["OAI-SearchBot", "OpenAI", "Finds pages for ChatGPT search answers", "Yes"],
          ["ChatGPT-User", "OpenAI", "Fetches a page when a user's request needs it", "Yes"],
          ["GPTBot", "OpenAI", "Collects content for model training", "Your choice"],
          ["PerplexityBot", "Perplexity", "Builds Perplexity's search index", "Yes"],
          ["Claude-SearchBot", "Anthropic", "Improves Claude's search results", "Yes"],
          ["Claude-User", "Anthropic", "Fetches a page a Claude user asks about", "Yes"],
          ["ClaudeBot", "Anthropic", "Collects content for model training", "Your choice"],
          ["Googlebot", "Google", "Crawls for Google Search, AI Overviews and AI Mode", "Yes"],
        ],
      },
      {
        type: "code",
        title: "robots.txt: visible in AI answers, opted out of training",
        code: "User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\n# Optional: opt out of model training\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: ClaudeBot\nDisallow: /\n\nUser-agent: *\nAllow: /\n\nSitemap: https://www.yourdomain.com/sitemap.xml",
        note: "Replace the sitemap address with your own. Your firewall or CDN can still block these crawlers even when robots.txt allows them, so check its bot settings too.",
      },

      { type: "h2", text: "How to do answer engine optimization: an 8-step AEO strategy" },
      { type: "p", text: "This is the process we follow for clients. Steps 1 to 3 are a good afternoon's work for a business owner. Steps 4 to 8 are where an SEO specialist earns their keep." },
      {
        type: "steps",
        items: [
          { title: "Write down the questions customers ask before they buy", text: "Collect 20 to 30 questions in your customers' words from sales calls, enquiry forms, support emails and Google's \"People also ask\" box. Cover every stage: learning (\"what is...\"), comparing (\"X vs Y\", \"how much does...\"), shortlisting (\"best... for...\") and deciding (\"[brand] reviews\")." },
          { title: "Ask each answer engine and record who it cites", text: "Run every question in ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity and Claude. Log the results in the tracking sheet shown below." },
          { title: "Fix crawl access and indexing", text: "Check robots.txt and bot protection, then confirm your key pages are indexed in Google Search Console and Bing Webmaster Tools." },
          { title: "Rewrite key pages answer-first", text: "One question per heading, the answer in the first one or two sentences, then detail. Write sections that still make sense if they are lifted out on their own." },
          { title: "Add facts only you can provide", text: "Typical costs from your quotes, average lead times from your jobs, results from a customer survey, named experts with their credentials. Original information gives an engine a reason to cite you." },
          { title: "Add structured data", text: "Mark up your organisation, services, articles, FAQs and reviews with schema.org markup, and keep your name, address and descriptions identical everywhere. It helps machines read your pages; it supports good content rather than replacing it." },
          { title: "Earn mentions on the sites answer engines already cite", text: "Use your step 2 log. Get listed on the directories and portals that appear, keep trade body profiles current, ask happy customers for detailed reviews, offer data to writers of roundup articles and publish short videos answering your top questions." },
          { title: "Refresh, re-run and repeat monthly", text: "Update the pages that already rank first, because they turn into citations fastest. Re-run your question list every month to see what moved." },
        ],
      },
      { type: "p", text: "Your tracking sheet for steps 2 and 8 can be this simple. The rows below are illustrative, to show the format." },
      {
        type: "table",
        head: ["Question", "Engine", "Your business named?", "Your page cited?", "Competitors named", "Sources cited"],
        rows: [
          ["Which 3PLs in the Midlands work with Shopify?", "ChatGPT", "No", "No", "Three named", "A directory, two provider sites"],
          ["Which 3PLs in the Midlands work with Shopify?", "Perplexity", "Yes", "Yes", "Two named", "Your integrations page, a review site"],
          ["How much does 3PL fulfilment cost?", "AI Overview", "No", "No", "None", "A trade body, a software company, YouTube"],
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "What we did for an international removals company",
        items: [
          "Refreshed its country pages with current costs, transit times and process steps.",
          "Added structured FAQs answering the questions customers ask before they book.",
          "Kept the pages crawlable and dated, alongside ongoing technical SEO.",
          "Result: organic clicks rose 53% in Search Console, comparing February to April 2026 with May to July 2026.",
        ],
      },

      { type: "h2", text: "How to track AI traffic in GA4" },
      { type: "p", text: "GA4 lumps visits from ChatGPT, Perplexity and other AI tools into Referral by default, where they are easy to miss. A custom channel group gives them their own line in every acquisition report. It takes about ten minutes and does not change any of your existing data." },
      {
        type: "steps",
        title: "Create an AI channel in GA4",
        items: [
          { title: "Open channel groups", path: "GA4 > Admin > Data display > Channel groups", text: "You need Editor access to the property." },
          { title: "Create a new channel group", path: "Create new channel group", text: "Name it \"Channels with AI\". GA4 copies the default channels into it, so nothing else changes." },
          { title: "Add an AI channel", path: "Add new channel", text: "Name it \"AI assistants\". Set the condition to Source, matches regex, and paste the pattern below." },
          { title: "Move it above Referral", path: "Reorder", text: "GA4 assigns each visit to the first channel it matches, so the AI channel must sit above Referral or those visits will still count as referrals." },
          { title: "Save and use it in reports", path: "Reports > Acquisition > Traffic acquisition", text: "Open the dimension dropdown above the table and choose your new channel group. Add your enquiry or purchase event as a key event to compare conversion rates by channel." },
        ],
      },
      {
        type: "code",
        title: "Regex for the AI assistants channel (Source matches regex)",
        code: ".*(chatgpt|openai|perplexity|gemini\\.google|claude|copilot|grok).*",
        note: "Some AI tools pass no referrer, so their visits arrive as Direct. Treat this channel as the minimum AI traffic you receive, and ask new enquiries how they found you.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Why a small AI channel can still matter",
        text: "Semrush's research found that the average visitor from AI search was worth 4.4 times a traditional organic visitor, based on conversion rate. Compare conversion rates by channel before you judge AI traffic on volume.",
      },

      { type: "h2", text: "How to measure AEO in Google Search Console and Bing Webmaster Tools" },
      { type: "p", text: "Both search engines now report on AI features, which makes them the most reliable free sources of AEO data." },
      {
        type: "compare",
        columns: [
          { title: "Google Search Console", tone: "neutral", items: ["Clicks and impressions from AI Overviews and AI Mode are included in Performance > Search results.", "Google began rolling out separate generative AI performance reports to a subset of sites in June 2026, showing which of your pages appear in AI features, by country, device and date.", "Use it to spot question searches where impressions rise but clicks do not: those are answers you are part of."] },
          { title: "Bing Webmaster Tools", tone: "neutral", items: ["The AI Performance report, in public preview since early 2026, shows total citations in Copilot and other AI answers.", "It lists your most cited pages and the grounding queries the AI used to find them.", "Grounding queries show you the questions AI associates with your site, which is a ready-made content brief."] },
        ],
      },
      {
        type: "steps",
        title: "A monthly AEO report in five lines",
        items: [
          { title: "Prompt tracking", text: "How many of your fixed questions name your business, per engine, compared with last month." },
          { title: "AI citations", text: "Total citations and top cited pages from Bing Webmaster Tools' AI Performance report." },
          { title: "AI traffic", text: "Sessions and key events from your AI assistants channel in GA4." },
          { title: "Search visibility", text: "Impressions and clicks for question searches in Search Console." },
          { title: "Enquiries", text: "New enquiries that say they found you through an AI tool, from your enquiry form." },
        ],
      },

      { type: "h2", text: "How much does AEO cost?" },
      { type: "p", text: "Most agencies price AEO inside an SEO retainer, because the work overlaps so much: technical fixes, content, digital PR and reporting. The right budget depends on what a new customer is worth to you, so work it out from that number rather than from a price list." },
      {
        type: "stats",
        title: "Worked example: a logistics company's break-even (illustrative figures)",
        items: [
          { value: "£30,000", label: "average yearly value of a new contract" },
          { value: "1 in 5", label: "qualified enquiries that become contracts" },
          { value: "£2,500", label: "monthly SEO and AEO investment, £30,000 a year" },
          { value: "5", label: "extra qualified enquiries a year to break even, fewer than one every two months" },
        ],
      },
      { type: "p", text: "Run the same sum in your own currency with your own contract value and close rate. If the number of enquiries you need looks realistic for your market, the budget makes sense. Small businesses can start lean, because steps 1 to 4 above cost mostly time and many pages only need rewriting." },

      { type: "h2", text: "When should you start AEO, and what happens if you wait?" },
      { type: "p", text: "Start as soon as your basic SEO is in place: a crawlable, indexed site with a page for each core service. AI shortlists are short. The [TrustRadius](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/) 2026 B2B Buying Disconnect Report, based on 1,862 technology buyers, found that 63% used AI to research a purchase and 83% shortlisted three or fewer products." },
      {
        type: "compare",
        columns: [
          { title: "If you start now", tone: "good", items: ["Your pages and profiles shape how AI describes you", "Every mention and review makes the next answer more likely to include you", "You learn which questions bring enquiries while competition is still light"] },
          { title: "If you wait", tone: "bad", items: ["Answers still get written, with other businesses named", "AI describes you from old directory entries and reviews", "Competitors become the default answer and are harder to displace"] },
        ],
      },
      { type: "p", text: "A brand-new business should start with SEO and build answer-first pages from day one. Our guide to [SEO vs PPC for B2B](/insights/seo-vs-ppc-for-b2b) explains how paid search can bring in enquiries while organic and AI visibility grow, and our post on whether [AI will replace SEO](/insights/will-ai-replace-seo) shows how quickly search behaviour has moved since 2023." },

      { type: "h2", text: "How does AEO differ for B2B, ecommerce, local and SaaS businesses?" },
      { type: "p", text: "The steps stay the same, but the questions people ask, and the sources answer engines trust for them, change with your business model." },
      {
        type: "cards",
        items: [
          { title: "B2B services", meta: "Logistics, manufacturing, consulting", rows: [["What buyers ask", "What is it, how much does it cost, who does it well for my situation"], ["Sources AI leans on", "Trade bodies, industry directories, supplier explainers"], ["First move", "An answer page for each buyer role, plus complete trade body and directory profiles"]], text: "More in our [B2B SEO](/insights/seo-for-b2b-companies) guide." },
          { title: "Ecommerce and D2C", meta: "Online shops and brands", rows: [["What buyers ask", "Which size, which material, which is best for my needs"], ["Sources AI leans on", "Brand and retailer pages, reviews, YouTube"], ["First move", "Specifications, sizing guides and fair comparisons on product and category pages"]], text: "More in our guide to [SEO for B2C brands](/insights/seo-vs-ppc-for-b2c)." },
          { title: "Local services", meta: "Removals, trades, clinics", rows: [["What buyers ask", "Who near me, how much, are they reliable"], ["Sources AI leans on", "Google's local results, reviews, local roundups"], ["First move", "A complete Google Business Profile and reviews that mention specific services and areas"]] },
          { title: "SaaS and software", meta: "B2B and consumer apps", rows: [["What buyers ask", "Best tool for my use case, X vs Y, pricing"], ["Sources AI leans on", "Review platforms, Reddit, comparison articles"], ["First move", "Honest comparison and alternatives pages, crawlable pricing, reviews on the main software platforms"]] },
          { title: "Property and professional services", meta: "Estate agents, solicitors, accountants", rows: [["What buyers ask", "What are the fees, how do I choose, who is trusted locally"], ["Sources AI leans on", "Portals, consumer advice sites, publications"], ["First move", "Clear fee pages, named expert guidance and accurate portal profiles"]] },
        ],
      },

      { type: "h2", text: "Does AEO actually work?" },
      { type: "p", text: "Marketers disagree, and both sides make fair points. In an r/Agent_SEO thread about AEO for a B2B manufacturer, one marketer found results less steady than search:" },
      {
        type: "quote",
        text: "The results ... from AI search optimization efforts are not consistent compared to the results we get from Google search (SEO).",
        author: "u/maxsemo",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/pfg714b/",
      },
      { type: "p", text: "Others in the same thread reported clear gains. One described rebuilding a manufacturer's site with schema, an entity map, specific FAQs and better internal links, after which \"leads started coming from AI sources and conversion rate is also much higher compared to all other sources\" ([u/OkFox6901](https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/19rrhh779zfsw/)). Another warned against judging AEO on mention counts alone:" },
      {
        type: "quote",
        text: "It's more useful to track visibility over time alongside citations/referrals and, ultimately, whether any of it contributes to qualified traffic or enquiries.",
        author: "u/ReachSTH-agency",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/pd38hqc/",
      },
      {
        type: "callout",
        variant: "takeaway",
        title: "Our view",
        text: "AEO works when it is built on solid SEO and judged on enquiries. AI answers vary from one run to the next, so a single check proves little. A fixed set of questions tracked over several months, alongside the GA4 channel, Bing's AI Performance report and lead-source data, shows the real trend.",
      },
      { type: "view", text: "", title: "Kriti's view" },
    ],
    faq: [
      { q: "What is answer engine optimization (AEO)?", a: "AEO is the practice of making your information easy for AI tools such as ChatGPT, Perplexity, Claude, Gemini, Grok and Google's AI Overviews to find, trust and quote, so they cite your pages and recommend your business." },
      { q: "What is the difference between AEO and SEO?", a: "SEO wins a position on the results page and a click. AEO wins a mention or citation inside the AI answer. AEO depends on SEO: in our study of 42 searches, 71% of the sources cited in AI Overviews already ranked in Google's top 10." },
      { q: "How do I rank in ChatGPT?", a: "Allow OpenAI's OAI-SearchBot crawler, verify your site in Bing Webmaster Tools, answer detailed customer questions directly on your pages, and get listed and reviewed on the directories and review sites ChatGPT cites in your sector." },
      { q: "Do I need to do anything special for Google AI Overviews?", a: "Google says there are no additional requirements beyond being indexed and eligible to show with a snippet. Ranking on page one, answer-first passages and covering follow-up questions give you the best chance of being cited." },
      { q: "Should I block AI crawlers?", a: "You can block training crawlers such as GPTBot and ClaudeBot and still appear in AI answers. Allow search crawlers such as OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot and Claude-User if you want to be cited." },
      { q: "How do I track traffic from ChatGPT in GA4?", a: "Create a custom channel group under Admin > Data display > Channel groups, add an \"AI assistants\" channel with a Source regex that matches chatgpt, perplexity, gemini, claude, copilot and grok, and move it above Referral." },
      { q: "How long does AEO take to work?", a: "Refreshed pages that already rank can start appearing in AI answers within weeks. Building mentions and authority in a competitive market usually takes several months, similar to SEO." },
      { q: "How much does AEO cost?", a: "Most agencies price AEO inside an SEO retainer. Work out your budget from the value of a new customer and your close rate, then check how many extra enquiries you need to cover the cost." },
    ],
  },
  {
    slug: "generative-engine-optimization-b2b",
    seoTitle: "Generative Engine Optimization (GEO) for B2B: 2027 Guide",
    title: "B2B AEO and GEO Strategy 2027: The Complete Guide to Generative Engine Optimisation for B2B Companies",
    description:
      "Generative engine optimisation (GEO) for B2B companies: what GEO and AEO mean, how ChatGPT, Perplexity and Google's AI choose which brands to cite, an eight-step B2B strategy, how to measure it, and real client results.",
    date: "2026-11-03",
    author: "team",
    topics: ["AEO/GEO", "B2B"],
    industries: [],
    image: "/Saas/authority.jpg",
    intro:
      "Your next B2B buyer may never see your website before they build a shortlist. They will ask ChatGPT, Perplexity, Gemini or Google's AI Mode which suppliers to consider, read the answer, and check only the names it gives them. Generative engine optimisation (GEO, also spelt generative engine optimization) is the work of making sure your company is one of those names. This guide explains what GEO and answer engine optimisation (AEO) mean, how AI tools decide which brands to cite, and how to build a B2B AEO and GEO strategy for 2027 step by step, with the measurement approach and client results we use at MAAI.",
    tldr: [
      "Generative engine optimisation (GEO) helps your brand get cited and recommended inside AI answers. AEO focuses on direct answers. Both sit on top of SEO.",
      "63% of software buyers used AI to research a purchase in 2026, and 94% of them fact-check what it says (TrustRadius). AI builds the shortlist; your website, reviews and proof confirm it.",
      "AI tools retrieve pages from search indexes and the open web, then pick passages to quote. If your pages cannot be crawled, found or trusted, they cannot be cited.",
      "A B2B GEO strategy starts with the questions your buying group asks AI, then works on the sources AI already cites, answer-first pages, third-party proof and crawl access.",
      "Measure with a fixed prompt set, AI referrals in GA4, Search Console and, most importantly, qualified enquiries.",
    ],
    body: [
      { type: "h2", text: "What is generative engine optimisation (GEO)?" },
      { type: "p", text: "Generative engine optimisation is the practice of structuring your content and your wider online presence so that AI tools retrieve it, summarise it and cite it when people ask questions. The \"generative engines\" are tools such as ChatGPT, Perplexity, Claude, Gemini, Grok and Google's AI Overviews and AI Mode, which write an answer instead of showing a list of links." },
      { type: "p", text: "The term comes from a research paper, \"GEO: Generative Engine Optimization\", by [Pranjal Aggarwal](https://www.linkedin.com/in/pranjal2041/) and colleagues, first published in November 2023 and accepted to the KDD 2024 conference. The authors tested ways of rewriting content and reported that GEO methods can boost a source's visibility in generative engine responses by up to 40%. Adding statistics, quotations and cited sources was among the methods that helped most." },
      { type: "p", text: "Answer engine optimisation (AEO) is a closely related term. It grew out of featured snippets and voice search, and focuses on giving the single best direct answer to a question. In practice, people use GEO, AEO, LLM SEO and AI SEO almost interchangeably, and there is still no agreed academic boundary between them. For a B2B company, the useful definition is simple: SEO gets you found in search results, AEO gets you used as the answer, and GEO gets you named and recommended in AI-written responses." },
      {
        type: "chart",
        title: "Monthly searches for GEO and AEO terms",
        series: [
          { name: "US", color: "#1C3F2E" },
          { name: "UK", color: "#86AB97" },
        ],
        rows: [
          { label: "what is geo", values: [12100, 2400] },
          { label: "generative engine optimization", values: [9900, 1600] },
          { label: "answer engine optimization", values: [6600, 720] },
        ],
        source: {
          label: "Semrush Keyword Overview",
          note: "US and UK databases, data pulled 3 November 2026. Figures are Semrush's estimated average monthly searches.",
        },
      },
      { type: "p", text: "The US has four to nine times the UK's search volume for these terms, which is normal for English-language B2B topics. The UK number for \"generative engine optimization\" understates real interest: 1,600 people a month search the US spelling and roughly the same number again search the UK spelling, \"generative engine optimisation\", so UK demand is closer to 3,200 searches a month. Searches for an actual \"AEO strategy\" are still tiny, around 70 a month in the UK (Semrush, November 2026), which tells you very few UK businesses have reached the planning stage. That gap is your opportunity." },

      { type: "h2", text: "GEO vs AEO vs SEO: how the three work together" },
      { type: "p", text: "Google's own guidance is clear on this point. Its guide to optimising for generative AI features says AI features rely on Google's core Search ranking and quality systems, and that \"you don't need to write in a specific way just for generative AI search\". Bing takes a similar view, saying SEO fundamentals support eligibility for AI-generated experiences. So treat GEO and AEO as layers on top of SEO, each with a slightly different goal." },
      {
        type: "table",
        head: ["", "SEO", "AEO", "GEO"],
        rows: [
          ["Goal", "Rank pages in search results", "Become the direct answer", "Get named and cited in AI-written answers"],
          ["Where it shows", "Google and Bing results pages", "Featured snippets, voice answers, AI Overviews", "ChatGPT, Perplexity, Claude, Gemini, Grok, AI Mode"],
          ["Main levers", "Technical health, content, links", "Question-led structure, short answers, FAQs", "Facts and data, third-party mentions, entity consistency"],
          ["Main measure", "Rankings, clicks, enquiries", "Snippet and answer ownership", "Citations, mentions, AI referrals, enquiries"],
          ["Depends on", "Itself", "SEO foundations", "SEO foundations and wider reputation"],
        ],
      },
      { type: "p", text: "If you want the longer story of how search moved from ten blue links to AI answers, our post on [whether AI will replace SEO](/insights/will-ai-replace-seo) covers the data from 2023 to 2026." },

      { type: "h2", text: "Why B2B companies need an AEO and GEO strategy in 2027" },
      { type: "p", text: "B2B buyers were early adopters of AI research. [Forrester](https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/)'s State of Business Buying 2026 reports that generative AI tools were the most cited meaningful interaction for researching B2B purchases in 2025. The [TrustRadius](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/) 2026 B2B Buying Disconnect Report, based on 1,862 technology buyers surveyed in January 2026, shows how that research works in practice." },
      {
        type: "chart",
        title: "How B2B software buyers researched purchases in 2026 (% of buyers)",
        series: [{ name: "Buyers", color: "#1C3F2E" }],
        rows: [
          { label: "Used AI to research", values: [63] },
          { label: "Fact-check AI answers (of AI users)", values: [94] },
          { label: "Use reviews to decide", values: [74] },
          { label: "Shortlisted 3 or fewer products", values: [83] },
        ],
        source: {
          label: "TrustRadius 2026 B2B Buying Disconnect Report, HG Insights",
          href: "https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/",
          note: "1,862 technology buyers, survey fielded January 2026, published July 2026",
        },
      },
      { type: "p", text: "Read together, these numbers describe the new B2B journey. Most buyers now use AI to research, almost all of them then check what it told them, reviews still carry real weight, and the final shortlist is tiny. If AI names three suppliers and you are not one of them, you are rarely considered at all. If AI names you, your website, case studies and reviews still have to pass the fact-check that follows." },
      { type: "p", text: "This matters even more because B2B shortlists form early. [6sense](https://www.businesswire.com/news/home/20251112018032/en)'s 2025 Buyer Experience Report found that 94% of buying groups had already picked a favoured vendor before first contact. Our guide to [B2B SEO](/insights/seo-for-b2b-companies) explains that journey touchpoint by touchpoint. GEO is how you make sure AI tools introduce you during the part of that journey that happens without you." },

      { type: "h2", text: "How AI tools decide which B2B brands to cite" },
      { type: "p", text: "AI answers are built in three stages, and each stage gives you a different lever. One r/aeo commenter summed it up well:" },
      {
        type: "quote",
        text: "There's training data (GPTBot etc), there's retrieval (OAI-SearchBot, PerplexityBot hitting your site and pulling pages into answers), and there's answer generation (whether the model picks your quote).",
        author: "u/FailonOB_SEO",
        where: "r/aeo",
        href: "https://www.reddit.com/r/aeo/comments/1x7c8rj/comment/ph3xbct/",
      },
      {
        type: "list",
        items: [
          { lead: "Training data.", text: "What a model learned before its cut-off date. You influence this slowly, through a consistent presence across trusted sites over time. Brands newer than the training data are simply unknown at this stage." },
          { lead: "Retrieval.", text: "When an AI tool searches the web live, it fetches pages and pulls the most relevant passages into its answer. This is retrieval-augmented generation (RAG). Google's AI features retrieve from Google's own index, and OpenAI's crawler documentation states that sites opted out of its OAI-SearchBot crawler \"will not be shown in ChatGPT search answers\"." },
          { lead: "Query fan-out.", text: "AI tools often break one question into several smaller searches. A buyer asking \"best freight forwarder for UK to India shipping\" may trigger searches on pricing, transit times, customs and reviews. Pages that answer those sub-questions clearly get pulled in, even if they do not rank first for the main query." },
          { lead: "Answer generation.", text: "The model chooses which passages to quote and which brands to name. Clear, specific, well-sourced statements are easier to quote than vague marketing copy." },
        ],
      },
      { type: "p", text: "Each platform leans on different sources. ChatGPT search and Perplexity run their own search crawlers, Google's AI Overviews and AI Mode use Google's index, and all of them draw heavily on review sites, directories, community threads and industry \"best of\" lists. That is why a B2B GEO strategy has to look beyond your own website." },

      { type: "h2", text: "B2B AEO and GEO strategy: eight steps" },
      { type: "p", text: "These are the steps we follow when we build a generative engine optimisation strategy for a B2B client. Steps one and two tell you where to focus; the rest do the work." },
      { type: "h3", text: "1. Build a fixed set of buyer prompts" },
      { type: "p", text: "Start with the questions your buyers would actually type into an AI tool. Cover the whole buying group, plus the customer's customer, whose questions often shape the decision. Keep the list fixed, because you will rerun it every month to measure progress." },
      {
        type: "list",
        items: [
          { lead: "Write 20 to 40 prompts.", text: "Use sales calls, client emails and support tickets for real wording." },
          { lead: "Cover each role.", text: "Operations (service levels), finance (cost), procurement (compliance) and directors (risk)." },
          { lead: "Mix three intents.", text: "Problem (\"why are our warehouse costs rising\"), comparison (\"3PL vs in-house fulfilment UK\") and supplier (\"best international removals companies for corporate moves\")." },
          { lead: "Save the list.", text: "Keep it in one sheet with a column for each AI tool and month." },
        ],
      },
      { type: "h3", text: "2. Find the sources AI already cites" },
      { type: "p", text: "Run each prompt in ChatGPT, Perplexity, Gemini and Google AI Mode, and note every URL cited. This is the single most useful exercise in GEO, because it shows you exactly which pages shape answers in your category." },
      {
        type: "quote",
        text: "Write down 10 questions your customers would ask an AI, run each one in ChatGPT and Perplexity, and list the pages they cite. If those are review sites or best-of lists, reach out... If they're competitor blog posts, write a better page.",
        author: "u/keyworddotcom",
        where: "r/aeo",
        href: "https://www.reddit.com/r/aeo/comments/1x7c8rj/comment/ph4bvbt/",
      },
      {
        type: "list",
        items: [
          { lead: "Record every cited URL.", text: "Note whether it is your site, a directory, a review platform, trade press or a comparison article." },
          { lead: "Group by type.", text: "In B2B, trade publications, associations, review platforms and directories usually dominate." },
          { lead: "Pick quick wins.", text: "Getting listed, reviewed or quoted on an already-cited page is often faster than ranking a new page of your own." },
        ],
      },
      { type: "h3", text: "3. Make sure AI crawlers can reach your pages" },
      { type: "p", text: "If an AI tool cannot crawl a page, it cannot cite it. Most problems here are invisible until you check, so treat this as a short technical audit." },
      {
        type: "list",
        items: [
          { lead: "Check robots.txt.", text: "Allow Googlebot, Bingbot, OAI-SearchBot and PerplexityBot if you want to appear in their answers. GPTBot relates to model training, so decide on it separately." },
          { lead: "Check rendering.", text: "Make sure key content is in the page HTML. Some AI crawlers handle JavaScript poorly, so server-side rendering is the safer choice." },
          { lead: "Check indexing.", text: "Confirm your important pages are indexed in Google Search Console and Bing Webmaster Tools." },
          { lead: "Check firewalls.", text: "Make sure bot protection is not blocking legitimate AI search crawlers." },
        ],
      },
      { type: "h3", text: "4. Write answer-first pages packed with specifics" },
      { type: "p", text: "AI tools quote clear, specific statements. Put a direct one or two sentence answer under each heading, then expand. Specific, sourced statements are what the GEO research paper from [Princeton University](https://arxiv.org/abs/2311.09735) and partner institutions found AI engines reward." },
      {
        type: "list",
        items: [
          { lead: "Use question-led headings.", text: "Match how buyers phrase prompts." },
          { lead: "Answer in the first sentence.", text: "Then add detail, examples and data." },
          { lead: "State the facts buyers need.", text: "Sectors served, service areas, capacities, lead times, certifications, standards and price ranges where you can share them." },
          { lead: "Be sector-specific.", text: "Manufacturers: materials, tolerances and lead times. Logistics: lanes, transit times and accreditations." },
        ],
      },
      { type: "h3", text: "5. Build third-party proof and a consistent entity" },
      { type: "p", text: "AI tools trust what several independent sources agree on. Your own site is one voice; reviews, directories and trade press are the others." },
      {
        type: "list",
        items: [
          { lead: "Keep details identical.", text: "Company name, description, services and locations should match across your website, Google Business Profile, LinkedIn and directories." },
          { lead: "Collect detailed reviews.", text: "Recent reviews on the platforms your sector uses, ideally mentioning the specific service." },
          { lead: "Earn mentions.", text: "Trade press, association member lists and partner pages." },
          { lead: "Show your people.", text: "Founder and team LinkedIn profiles connect real expertise to your brand." },
        ],
      },
      { type: "h3", text: "6. Refresh pages that already earn traffic" },
      { type: "p", text: "Pages that already rank and receive visits are usually the quickest to start appearing in AI answers. One r/aeo commenter found that adding new information to older articles with traffic improved AI visibility, while pages with almost no traffic improved far less. That matches what we see in client accounts." },
      {
        type: "list",
        items: [
          { lead: "Start with your top 10 pages", text: "by clicks in Search Console." },
          { lead: "Add new data and update figures.", text: "Replace anything older than a year." },
          { lead: "Tighten the opening answer", text: "and add an FAQ that matches your prompt list." },
        ],
      },
      { type: "h3", text: "7. Use structured data, and keep llms.txt in perspective" },
      { type: "p", text: "Schema markup helps machines understand who you are and what you offer. Google says structured data is not required for its AI features but remains a good idea for SEO, and it does not use llms.txt or other AI text files." },
      {
        type: "list",
        items: [
          { lead: "Add core schema.", text: "Organization, Service or Product, Article and FAQPage." },
          { lead: "Validate it.", text: "Test key pages with Google's Rich Results Test." },
          { lead: "Treat llms.txt as optional.", text: "It costs little and some teams add it for other AI tools, but it should never come before crawlability, content and proof." },
        ],
      },
      { type: "h3", text: "8. Measure visibility, then measure enquiries" },
      { type: "p", text: "AI answers vary by model version, location and even time of day, so measure the same way every month and judge trends, never single results. In B2B, the enquiry and the contract are the measures that matter." },
      {
        type: "list",
        items: [
          { lead: "Rerun your prompt set monthly.", text: "Record whether you are mentioned, whether you are cited with a link, and which sources are cited instead." },
          { lead: "Track AI referrals in GA4.", text: "Sources such as chatgpt.com, perplexity.ai and gemini.google.com." },
          { lead: "Check platform reports.", text: "Google's generative AI performance data in Search Console and the AI performance report in Bing Webmaster Tools." },
          { lead: "Ask every new lead", text: "where they first heard of you." },
        ],
      },
      {
        type: "quote",
        text: "We'd avoid treating 'number of AI mentions' as the main KPI. It's more useful to track visibility over time alongside citations/referrals and, ultimately, whether any of it contributes to qualified traffic or enquiries.",
        author: "u/ReachSTH-agency",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/pd38hqc/",
      },

      { type: "h2", text: "What AEO and GEO results look like for B2B clients" },
      { type: "p", text: "Here is what we did for two MAAI clients in 2026, step by step, and what changed in Google Search Console. Client names are withheld." },
      { type: "h3", text: "Corporate relocation company (B2B, UK and international)" },
      { type: "p", text: "This client sells relocation services to HR and global mobility teams, but the people searching most are the employees who move. We built for both audiences." },
      { type: "p", text: "What we did:" },
      {
        type: "ol",
        items: [
          { lead: "Mapped both audiences:", text: "HR and mobility buyers, and relocating employees and their families." },
          { lead: "Wrote answer-first country guides", text: "on work permits, visas and cost of living, with an FAQ on each." },
          { lead: "Built service pages", text: "for HR and mobility teams covering policy, cost and compliance." },
          { lead: "Added business listings and syndicated guides", text: "to build consistent third-party mentions." },
        ],
      },
      { type: "p", text: "What changed in Google Search Console:" },
      {
        type: "list",
        items: [
          { lead: "Daily search impressions:", text: "about 700 a day (13 to 22 January 2026), rising to about 2,600 a day (12 to 20 May 2026)." },
          { lead: "Average position:", text: "9.8 in that January period, 8.4 in that May period." },
          { lead: "Organic traffic:", text: "up 81% from February to June 2026, with 100% of qualified leads arriving through country guides." },
          { lead: "\"How to do employee relocation\":", text: "position 40 in March 2026, position 11 in August 2026." },
          { lead: "\"rmc relocation\":", text: "position 13 in March 2026, position 8 in August 2026." },
        ],
      },
      { type: "h3", text: "UK international removals company" },
      { type: "p", text: "This client already had strong country pages, so the work focused on making them easier for search engines and AI tools to read and quote." },
      { type: "p", text: "What we did:" },
      {
        type: "ol",
        items: [
          { lead: "Refreshed country landing pages", text: "with current costs, transit times and process steps." },
          { lead: "Added structured FAQs", text: "answering the questions customers ask before booking." },
          { lead: "Added an llms.txt file", text: "alongside the existing technical SEO work." },
        ],
      },
      { type: "p", text: "What changed in Google Search Console:" },
      {
        type: "list",
        items: [
          { lead: "Organic clicks:", text: "up 53%, comparing February to April 2026 with May to July 2026." },
        ],
      },
      { type: "p", text: "The relocation result shows why GEO in B2B has to reach two audiences. Relocating employees ask AI tools about visas, housing and schools. When the answers come from a relocation company's guides, that company becomes familiar to the HR and mobility teams who choose the supplier." },

      { type: "h2", text: "What marketers on Reddit say: supporters and sceptics" },
      { type: "p", text: "AEO and GEO still divide the industry. In an r/Agent_SEO thread, an SEO working for a B2B manufacturing company asked whether anyone was getting real results. The replies covered both sides." },
      {
        type: "quote",
        text: "We revamped a B2B manufacturer site... We worked on LLMS.txt, robots.txt, schema, entity map, FAQs (not a generic one), internal links... leads started coming from AI sources and conversion rate is also much higher compared to all other sources.",
        author: "u/OkFox6901",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/19rrhh779zfsw/",
      },
      {
        type: "quote",
        text: "The results ... from AI search optimization efforts are not consistent compared to the results we get from Google search (SEO).",
        author: "u/maxsemo",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/pfg714b/",
      },
      {
        type: "quote",
        text: "Horrendous waste of money. It doesn't work",
        author: "u/Fuzzy_Fish_2329",
        where: "r/Agent_SEO",
        href: "https://www.reddit.com/r/Agent_SEO/comments/1wu8ygj/comment/pdafv7s/",
      },
      { type: "p", text: "A second debate, in r/aeo, was about whether you need SEO at all. One commenter argued you can get AI visibility with zero SEO done. Another replied:" },
      {
        type: "quote",
        text: "You cant get visibility in highly competitive areas without some seo foundation.",
        author: "u/MTMDigitalServices",
        where: "r/aeo",
        href: "https://www.reddit.com/r/aeo/comments/1x7c8rj/comment/ph8cuzm/",
      },
      { type: "h3", text: "Our view" },
      { type: "p", text: "Both camps have a point. The sceptics are right that AI results are less consistent than Google rankings: answers change between runs, models and locations, and there is no single position to report. The supporters are right that AI referrals convert well in B2B, because a buyer who arrives after an AI recommendation has usually already done their research. Paid ads are never the source an AI tool cites, so organic visibility is the only route into these answers." },
      { type: "p", text: "In our experience, AEO and GEO pay off when they are treated as an extension of strong SEO and measured on enquiries. Low-competition niches can see AI mentions with modest SEO, but competitive B2B categories need the foundations first. The work that helps most, specific content, third-party proof and crawlable pages, also improves your Google rankings, so very little effort is wasted." },
      { type: "view", text: "", title: "Kriti's view" },

      { type: "h2", text: "AEO and GEO by B2B industry: the questions buyers ask" },
      { type: "p", text: "The eight steps apply to every B2B company, but the questions buyers put to AI tools, and the facts those tools need before they recommend a supplier, change from sector to sector. These are the industries we work in most, with the questions we hear from clients." },

      { type: "h3", text: "How can a removals and relocation company grow with AEO and GEO?" },
      { type: "p", text: "Removals buyers ask AI tools very specific questions: how much an international move costs, how long shipping to Australia takes, what can go in a container, and which removals companies are reliable for a given route. Each of those is a page you can own. Build country and city guides with real cost ranges and transit times, a clear FAQ on every service page, and pages for each move type, such as international, office and storage moves." },
      { type: "p", text: "For a UK removals brand we work with, guides built on the company's own move data grew blog clicks by 39% between late March and late May 2026, during a period when the wider site was still recovering from two Google core updates. Original data like this is exactly what AI tools look for when they choose which page to quote." },
      { type: "h3", text: "How do removal companies get recommended by ChatGPT and Google's AI Overviews?" },
      {
        type: "list",
        items: [
          { lead: "Be clear about who you are.", text: "State routes, service areas, accreditations such as BAR membership, insurance and years trading in plain text on your site, and keep them identical on your Google Business Profile and directory listings." },
          { lead: "Earn detailed reviews.", text: "Reviews that mention the move type and route (\"London to Sydney, family of four\") help AI tools match you to specific prompts." },
          { lead: "Get onto the lists AI already cites.", text: "Run prompts such as \"best international removals companies UK\" and work on being included in the comparison articles and directories that appear as sources." },
        ],
      },
      { type: "h3", text: "What should a corporate relocation company publish for AI search?" },
      { type: "p", text: "Corporate relocation has two audiences: HR and global mobility teams, who choose the supplier, and the employees who move. Publish service pages for the first group (policy design, cost management, compliance) and answer-first country guides for the second (visas, housing, schools, cost of living). For our corporate relocation client, that approach grew organic traffic by 81% in four months, and every qualified lead came through a country guide." },

      { type: "h3", text: "How can a logistics company win more shipper enquiries with AEO and GEO?" },
      { type: "p", text: "Shippers and procurement teams ask AI tools to compare providers: \"best freight forwarder for UK to India\", \"3PL with Amazon FBA prep in the Midlands\", \"how much does pallet storage cost\". Create a page for each lane, service and sector you serve, and open each one with a direct answer that states what you do, where, and for whom. Pricing guides and transit-time tables are among the most quoted content in this sector, because they answer the questions buyers ask first." },
      { type: "p", text: "We see the same pattern with an international baggage shipping client: customers ask detailed questions about what can be shipped, customs rules and delivery times by country, and clear country-by-country answers are what bring them in." },
      { type: "h3", text: "What do AI tools look for when recommending a 3PL or freight forwarder?" },
      {
        type: "list",
        items: [
          { lead: "Specific capabilities.", text: "Warehouse locations and size, temperature control, hazardous goods handling, integrations and order cut-off times." },
          { lead: "Accreditations.", text: "Industry memberships, AEO (Authorised Economic Operator) status, ISO certifications and GDP licences, stated clearly and consistently." },
          { lead: "Sector proof.", text: "Case studies by sector, such as ecommerce, pharmaceutical or automotive, with real numbers where clients allow it." },
        ],
      },

      { type: "h3", text: "How can supply chain and manufacturing companies use AEO and GEO to win RFQs?" },
      { type: "p", text: "Procurement and engineering buyers ask precise, technical questions, and precise pages get quoted. Publish capability pages for each process and material, with tolerances, certifications, lead times, minimum order quantities and the industries you supply. Add application guides that answer the questions engineers ask before they request a quote. A health medtech manufacturer we work with has a buyer journey much like this, where technical specifications and regulatory compliance decide the shortlist long before a sales call." },
      { type: "h3", text: "What product and technical details should manufacturers publish for AI search?" },
      {
        type: "list",
        items: [
          { lead: "Specifications in text.", text: "Put key specifications in HTML text and tables, with downloadable datasheets as a bonus. AI crawlers read page text far more reliably than PDFs and images." },
          { lead: "Compliance and standards.", text: "ISO 9001, ISO 13485 for medical devices, CE and UKCA marking, and any sector approvals." },
          { lead: "Industries and use cases.", text: "One page per industry served, explaining the problem you solve for that industry in its own language." },
        ],
      },
      { type: "h3", text: "How can real estate and self storage businesses grow with AEO and GEO?" },
      { type: "p", text: "Property and storage searches are often local, so AI answers lean heavily on local data: Google Business Profile details, reviews and local roundups. Create a page for every location with unit sizes, prices, access hours and security, and answer the practical questions customers ask, such as how much storage a one-bedroom flat needs or how to store belongings during a house move. For a self storage client, we plan content around exactly these questions, because they are the prompts people bring to AI tools." },
      { type: "h3", text: "How do property and storage businesses show up in local AI answers?" },
      { type: "p", text: "Proximity matters for \"near me\" prompts, and you cannot change where you are. You can change how relevant and trusted you look next to equally close competitors. One Reddit commenter in a thread on AI visibility for local businesses explained it well:" },
      {
        type: "quote",
        text: "Being close but still not recommended usually comes down to relevance and prominence. The businesses that got picked over it most likely have better-matched categories, more complete services and attributes, and more recent reviews.",
        author: "u/nazran7",
        where: "Reddit, in a thread on AEO and GEO for hyperlocal businesses",
        href: "https://www.reddit.com/user/nazran7/",
      },
      { type: "p", text: "In practice: complete every field of your Business Profile, choose accurate secondary categories, encourage reviews that mention specific services, and test prompts with the town named in them (\"self storage in Leeds for business stock\") as well as \"near me\", because the two behave differently." },

      { type: "h2", text: "Common B2B GEO mistakes to avoid" },
      {
        type: "list",
        items: [
          { lead: "Starting with tools.", text: "AI visibility tools are useful for tracking, but the strategy starts with your buyers' questions and the sources AI already cites." },
          { lead: "Blocking AI search crawlers by accident.", text: "A blanket block in robots.txt or a firewall rule can remove you from ChatGPT search and Perplexity answers." },
          { lead: "Writing generic content.", text: "Pages that repeat what every other supplier says give AI tools nothing new to cite. Original data and specific facts stand out." },
          { lead: "Ignoring third-party sites.", text: "In many B2B categories, AI answers cite directories, reviews and trade press more than supplier websites." },
          { lead: "Reporting mentions without leads.", text: "Mentions are an early signal. Tie the work to referrals, enquiries and pipeline." },
        ],
      },

    ],
    faq: [
      { q: "What is generative engine optimisation (GEO)?", a: "GEO is the practice of structuring your content and online presence so that AI tools such as ChatGPT, Perplexity, Gemini and Google's AI Overviews retrieve, cite and recommend your brand in their answers." },
      { q: "What is the difference between AEO and GEO?", a: "AEO (answer engine optimisation) focuses on becoming the direct answer to a question, for example in featured snippets and AI Overviews. GEO focuses on being named and cited in AI-written responses. Both rely on SEO foundations, and many people use the terms interchangeably." },
      { q: "Is GEO replacing SEO?", a: "No. Google says its AI features rely on its core Search ranking systems, and AI tools retrieve pages from search indexes. GEO extends SEO and depends on it." },
      { q: "How long does GEO take for a B2B company?", a: "Refreshed pages that already rank can appear in AI answers within weeks. Building third-party proof and authority in a competitive B2B category usually takes several months, similar to SEO." },
      { q: "How do you measure GEO results?", a: "Run a fixed set of buyer prompts monthly across AI tools and record mentions and citations, track AI referral traffic in GA4, review Search Console and Bing Webmaster Tools data, and ask new leads where they found you." },
      { q: "Do I need an llms.txt file for GEO?", a: "It is optional. Google states it does not use llms.txt for Search. Some teams add one for other AI tools, but crawlability, specific content and third-party proof matter far more." },
    ],
  },
  {
    slug: "seo-for-b2b-companies",
    seoTitle: "B2B SEO Strategy 2027: SEO for the B2B Customer Journey",
    title: "B2B SEO Strategy 2027: SEO and AEO for the B2B Customer Journey",
    description:
      "How the B2B customer journey has changed, what buyers now see in Google and AI answers at each stage, and how to do B2B SEO and AEO step by step in 2027.",
    date: "2026-11-05",
    author: "team",
    topics: ["B2B", "AEO/GEO"],
    industries: [],
    image: "/Saas/aeo.jpg",
    intro:
      "Not long ago, a B2B purchase started with a conversation. A buyer rang a few suppliers, asked a sales rep for a brochure and a price, met people at a trade show and relied on the rep to explain the options. That has changed. Today the first conversation happens with Google and with AI tools such as ChatGPT. Buyers research on their own, ask AI to compare suppliers and build a shortlist before they speak to anyone: [6sense](https://www.businesswire.com/news/home/20251112018032/en) found that buyers now make first contact 61% of the way through their buying process, and 94% of buying groups already have a favourite by then. Search results and AI answers now do the job the sales rep used to do: explaining the problem, the options and who to trust. B2B SEO and answer engine optimisation (AEO) are how your business takes part in that first conversation. This guide explains how the B2B customer journey has changed, what buyers see in Google and AI answers at each stage, and how to do B2B SEO and AEO step by step.",
    tldr: [
      "**Then:** buyers learned from suppliers, through sales calls, brochures, trade shows and referrals. **Now:** they learn from Google, AI answers, reviews and peers, and contact suppliers late, 61% of the way through the journey globally and 57% in the UK and Ireland (6sense, 2025).",
      "**The shortlist is set before you hear from them.** 94% of buying groups have a favoured vendor at first contact, contact that favourite first about 80% of the time and buy from it 77% of the time.",
      "**Buyers want less time with sales.** As early as 2018, Gartner found buyers spent only 17% of their buying time meeting suppliers. In 2026, 67% said they prefer a rep-free buying experience.",
      "**AI has joined the research.** 63% of software buyers used AI to research a purchase in 2026 (TrustRadius), and 36 of the 42 business searches in our own study showed a Google AI Overview.",
      "**What that means for you:** SEO puts your pages in front of buyers in Google, and AEO gets your business named in AI answers. Together they cover the stages where favourites now form. Measure them in qualified leads and pipeline.",
    ],
    body: [
      { type: "h2", text: "What do B2B SEO and AEO mean in 2027?" },
      { type: "callout", variant: "definition", title: "Definition", text: "B2B SEO and AEO are the work of making your business the answer buyers find in Google and in AI tools such as ChatGPT, Perplexity and Google's AI Overviews while they research what you sell, so they shortlist you before they contact anyone." },
      { type: "h3", text: "What is B2B SEO?" },
      { type: "p", text: "B2B SEO (search engine optimisation) helps your website rank in Google and Bing when other businesses search for what you sell, from early questions such as \"what is a 3PL\" to supplier searches such as \"3PL warehouse UK\"." },
      { type: "h3", text: "What is B2B AEO?" },
      { type: "p", text: "B2B AEO (answer engine optimisation) helps your business get cited and recommended inside AI answers, in ChatGPT, Perplexity, Claude, Gemini and Google's AI Overviews and AI Mode, when buyers ask those tools to explain a problem or suggest suppliers. You will also hear it called generative engine optimisation (GEO); our guide to [B2B AEO and GEO strategy](/insights/generative-engine-optimization-b2b) covers it in depth." },
      { type: "h3", text: "How do SEO and AEO work together in B2B?" },
      { type: "p", text: "AEO depends on SEO. AI tools search the web before they answer, and in our study of 42 business searches, 71% of the sources Google's AI Overviews cited already ranked on Google's first page for the same search. SEO gets your pages found; AEO makes them the passage an AI tool quotes and your business the one it names." },
      { type: "p", text: "To see why both now matter so much, start with how the journey itself has changed." },

      { type: "h2", text: "What is the B2B customer journey, and how has it changed in 2027?" },
      { type: "p", text: "The B2B customer journey is the path a business takes from first noticing a problem to choosing a supplier, signing and renewing. In 2027 most of that path happens online, in Google and AI tools, before the buyer speaks to any supplier." },
      { type: "h3", text: "What are the stages of the B2B customer journey?" },
      { type: "p", text: "[Gartner](https://www.gartner.com/en/newsroom/press-releases/2018-10-09-gartner-says-the-marketing-to-sales-handoff-should-no-longer-exist) describes six \"buying jobs\" that every B2B buying group has to complete. They rarely happen in a straight line: different people work on different jobs at the same time and go back to earlier ones as they learn more." },
      {
        type: "cards",
        title: "The six B2B buying jobs",
        items: [
          { title: "Problem identification", meta: "01", text: "We have a problem worth solving." },
          { title: "Solution exploration", meta: "02", text: "What are our options?" },
          { title: "Requirements building", meta: "03", text: "What exactly do we need, and what will it cost?" },
          { title: "Supplier selection", meta: "04", text: "Who can do it for us?" },
          { title: "Validation", meta: "05", text: "Can we trust them?" },
          { title: "Consensus creation", meta: "06", text: "Does everyone agree?" },
        ],
      },
      { type: "p", text: "Here is what each stage looks like for a company choosing a logistics partner, and what SEO and AEO should give the buyer there." },
      {
        type: "table",
        head: ["Stage", "What the buying group asks", "Where they look", "What SEO and AEO should give them"],
        rows: [
          ["Problem identification", "\"Why are our delivery costs rising?\"", "Google, AI answers, industry articles", "Guides that explain the problem, written to be quoted by AI"],
          ["Solution exploration", "\"What is a 3PL?\" \"3PL vs in-house fulfilment\"", "AI Overviews, ChatGPT, trade bodies, YouTube", "The clearest explainer in your niche, a short video, a trade body listing"],
          ["Requirements building", "\"How much does a 3PL cost?\"", "Cost guides, portals, Reddit, AI answers", "Honest pricing and checklist pages"],
          ["Supplier selection", "\"3PL warehouse UK\" \"Which 3PLs work with Shopify?\"", "Google results and map, ChatGPT shortlists, directories", "Service, industry and location pages that rank, a complete Google Business Profile"],
          ["Validation", "\"[Your company] reviews\"", "Your website, reviews, LinkedIn, AI summaries of your brand", "Case studies with numbers, reviews, consistent facts everywhere"],
          ["Consensus creation", "Finance, IT and operations each check their own concern", "Pages shared internally, comparisons, AI answers", "An answer page for each role that is easy to forward"],
        ],
      },
      { type: "p", text: "Most B2B websites only cover supplier selection and validation. The first three stages are where favourites form, before you know the buyer exists." },
      { type: "h3", text: "Who is involved in a B2B buying decision?" },
      { type: "p", text: "A buying group, plus people outside it. [Forrester](https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/)'s State of Business Buying 2026 found that, on average, 13 internal stakeholders and nine external participants influence a B2B purchase, each with their own questions." },
      { type: "p", text: "Many B2B companies also miss a second audience: the customer's customer, the people your client serves. They never sign the contract, but what they search for shapes the buyer's view. For example, when one of our clients, a corporate relocation company, wrote guides answering relocating employees' questions about visas, housing and schools, those guides brought in 100% of its qualified leads from HR and mobility teams between February and June 2026." },
      { type: "p", text: "\"B2B has two customer sets: the direct customer, and the customer of the customer. If a relocation company has a strong reputation for moving employees well and is active online solving their queries, it has a far better chance of closing the deal with the mobility team.\" **Kriti, founder, MAAI**" },
      { type: "h3", text: "How has the B2B customer journey changed?" },
      { type: "p", text: "It has moved from sales-led to self-led. Buyers used to rely on a supplier's sales rep to explain their options. Now they work through most of the six stages alone, in Google and AI tools, and bring a shortlist to their first sales call." },
      {
        type: "table",
        head: ["", "Then: sales-led", "Now: search-led and AI-led"],
        rows: [
          ["Where research starts", "A phone call, a trade show or a referral", "Google, ChatGPT, Perplexity and peers on LinkedIn or Reddit"],
          ["Who explains the options", "The supplier's sales rep", "Search results, AI answers, review sites and trade bodies"],
          ["When suppliers hear about it", "At the start", "61% of the way through (57% in the UK and Ireland)"],
          ["How the shortlist forms", "From the reps the buyer has met", "From what ranks, what AI names and what peers recommend"],
          ["How suppliers are checked", "References and meetings", "Website, case studies, reviews, LinkedIn and AI summaries, before any call"],
        ],
      },
      {
        type: "stats",
        items: [
          { value: "61%", label: "of the buying process is done before buyers first contact a supplier (57% in the UK and Ireland)", by: "[6sense, 2025](https://www.businesswire.com/news/home/20251112018032/en) · [UK and Ireland data](https://www.marketone.com/?p=10260)" },
          { value: "94%", label: "of buying groups have a favoured vendor at first contact, and buy from it 77% of the time", by: "[6sense, 2025](https://www.businesswire.com/news/home/20251112018032/en)" },
          { value: "67%", label: "of B2B buyers prefer a buying experience with no sales rep", by: "[Gartner, 2026](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience)" },
          { value: "63%", label: "of software buyers used AI to research a purchase", by: "[TrustRadius, 2026](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/)" },
        ],
      },
      { type: "p", text: "The shift started before AI. In 2018, [Gartner](https://www.gartner.com/smarterwithgartner/b2b-sales-reps-maximize-customer-interactions) found that B2B buyers spent only 17% of their buying time meeting potential suppliers. AI tools have pushed that further: buyers now ask ChatGPT the questions they once asked a rep." },
      { type: "p", text: "\"There are younger companies that need your service but have no relationship with you and no right contacts. They will find you online, and they will verify you online before they ever call. That is why an active website matters more now than it ever did.\" **Kriti, founder, MAAI**" },
      { type: "p", text: "So what do buyers actually find when they research in Google and AI tools? We checked." },

      { type: "h2", text: "What do B2B buyers see in Google and AI answers at each stage of the journey?" },
      { type: "p", text: "It depends on the stage. In our study, early learning searches were answered almost entirely by AI Overviews citing trade bodies, Wikipedia and video, while supplier searches were dominated by Google's local map and supplier websites." },
      { type: "callout", variant: "note", title: "How we ran the study", text: "On 5 November 2026 we pulled Google results from Semrush for 24 searches in its UK database and 18 matching searches in its US database, across logistics, relocation, property, procurement and business services. For each one we recorded whether an AI Overview appeared, which websites it cited, and whether Google's local map appeared. We grouped them by buying job: learning (problem identification and solution exploration), comparing (requirements building) and finding a supplier (supplier selection). The data is a snapshot of one day." },
      {
        type: "stats",
        items: [
          { value: "8 of 8", label: "learning searches (e.g. \"what is a 3pl\") showed an AI Overview, and all 8 cited a trade body, Wikipedia, YouTube or another non-supplier", by: "MAAI study, 2026" },
          { value: "5 of 6", label: "comparing searches (e.g. \"estate agent fees\") showed an AI Overview, and 4 of those 5 cited portals or advice sites", by: "MAAI study, 2026" },
          { value: "21 of 28", label: "supplier searches (e.g. \"freight forwarder uk\") showed Google's local map, and around half of their AI Overviews cited only suppliers", by: "MAAI study, 2026" },
        ],
        source: { label: "MAAI analysis of Semrush UK and US SERP data, 5 November 2026" },
      },
      { type: "image", src: "/insights/aeo-google-ai-overview.jpg", alt: "Google UK AI Overview for freight forwarder, with a definition citing Wikipedia and YouTube on the left and cited pages from DHL, Wikipedia and DP World on the right", caption: "A learning search in Google UK: the AI Overview for \"what is a freight forwarder\" draws on Wikipedia, YouTube and large logistics companies' explainers." },
      {
        type: "list",
        items: [
          { lead: "Learning searches are answered by trade bodies, Wikipedia and video.", text: "Every one showed an AI Overview citing at least one non-supplier, such as ASCM, CIPS, Wikipedia, YouTube, GOV.UK sites or Forbes. To appear, publish the clearest explainer in your niche, add a short video and get listed by your trade bodies." },
          { lead: "Comparing searches lean on portals and advice sites", text: "such as Rightmove, Zillow, the HomeOwners Alliance, Which? and Reddit. Publish clear pricing and \"how to choose\" pages and keep your portal profiles complete." },
          { lead: "Supplier searches are won on page one and on the map.", text: "Three in four showed Google's local map, and around half of their AI Overviews cited only suppliers. Service, industry and location pages and your Google Business Profile do the work here." },
        ],
      },
      { type: "callout", variant: "takeaway", text: "Most B2B websites only build for supplier searches. Learning and comparing searches are where favourites form, and the answers there come from explainers, trade bodies, portals and video. That is the gap SEO and AEO close." },
      { type: "p", text: "This is also why every B2B company now needs both SEO and AEO, not just a good website." },

      { type: "h2", text: "Why do B2B companies need SEO and AEO in 2027?" },
      { type: "p", text: "Because buyers now complete most of their research before they contact anyone, and that research happens in Google and AI tools. If you are not visible there, you are rarely on the shortlist." },
      { type: "h3", text: "Why does a B2B company need SEO?" },
      { type: "p", text: "Because buyers verify every supplier online, even after a referral, and new buyers with no contacts find suppliers through search. [Forrester](https://www.businesswire.com/news/home/20230215005358/en/Forrester-Generational-Shifts-Are-Disrupting-Traditional-Business-Buying-Behaviors-And-Necessitate-New-Strategies) found in 2023 that millennials and Gen Z make up 64% of business buyers and trust third-party content more than vendor material." },
      { type: "h3", text: "Why does a B2B company need AEO?" },
      { type: "p", text: "Because AI answers now sit on most business searches (36 of the 42 in our study), and Forrester reports that generative AI tools were the most cited meaningful interaction for researching B2B purchases in 2025. AI builds the shortlist; your website then has to pass the check, since TrustRadius found that 94% of software buyers who used AI went on to fact-check it." },
      { type: "h3", text: "Why are B2B search terms easier to win?" },
      { type: "p", text: "They are smaller and more specific than consumer searches, so fewer competitors fight for them. \"B2B SEO\" itself has a keyword difficulty of 19 out of 100 in the UK, against 47 in the US. Niche B2B searches are often smaller and less competitive still, and one search can carry a contract worth far more than its volume suggests." },
      {
        type: "hbar",
        title: "Monthly searches for B2B SEO terms",
        series: [
          { name: "UK", color: "#1C3F2E" },
          { name: "US", color: "#E62E6B" },
        ],
        rows: [
          { label: "b2b seo", values: [1300, 6600] },
          { label: "b2b seo strategy", values: [590, 2400] },
          { label: "b2b customer journey", values: [320, 1300] },
        ],
        source: { label: "Semrush, UK and US databases, November 2026" },
      },
      { type: "h3", text: "How is B2B SEO and AEO different from B2C?" },
      {
        type: "table",
        head: ["", "B2B SEO and AEO", "B2C SEO and AEO"],
        rows: [
          ["Buyer", "A buying group of 10 or more people", "Usually one person"],
          ["Journey", "Six buying jobs over months", "Minutes to days"],
          ["Searches", "Low volume, specific, high value", "High volume, broad"],
          ["What AI cites", "Trade bodies, explainers, directories, case studies", "Reviews, retailers, product pages"],
          ["Success measure", "Qualified leads, pipeline, contract value", "Revenue and conversion rate"],
        ],
      },
      { type: "p", text: "If you also sell to consumers, our guide to [SEO for B2C brands](/insights/seo-vs-ppc-for-b2c) covers that side. Here is how to put B2B SEO and AEO into practice." },

      { type: "h2", text: "How to do B2B SEO and AEO: 9 steps" },
      { type: "p", text: "Work through these in order. Steps 1 and 2 tell you what to build, steps 3 to 6 build it on your website, steps 7 and 8 build your authority beyond it, and step 9 tells you whether it is working." },
      {
        type: "ol",
        items: [
          { text: "Find the questions your buyers ask at each stage" },
          { text: "Map keywords to each buying job" },
          { text: "Fix technical foundations for search and AI crawlers" },
          { text: "Build pillar pages for each service, industry and location" },
          { text: "Write answer-first content with BLUF and link it into topic clusters" },
          { text: "Add proof to every page" },
          { text: "Earn backlinks and mentions through digital PR" },
          { text: "Build your presence on LinkedIn, YouTube, Reddit and X" },
          { text: "Track AI visibility, leads and pipeline" },
        ],
      },
      { type: "h3", text: "Step 1. Find the questions your buyers ask at each stage" },
      { type: "p", text: "Ask your own team first, then check Search Console. Sales calls, enquiry emails and support tickets show the questions each member of the buying group asks. Search Console shows the questions people already use to find your site." },
      {
        type: "steps",
        title: "How to find question searches in Search Console",
        items: [
          { title: "Open the report", path: "Search Console > Performance > Search results", text: "Set the date range to the last 3 months." },
          { title: "Add a query filter", text: "Click \"+ Add filter\", choose Query, and switch the match type to \"Custom (regex)\"." },
          { title: "Paste the pattern below and apply it", text: "You now see every question-style search that showed your site, with impressions, clicks and position." },
          { title: "Sort by impressions", text: "Questions with high impressions and a position worse than 10 are your quickest wins: you are visible but not yet the best answer." },
        ],
      },
      { type: "code", title: "Question filter for Search Console (Custom regex)", code: "^(what|how|why|which|who|when|where|is|are|can|does|do|should|best)\\b" },
      { type: "h3", text: "Step 2. Map keywords to each buying job" },
      { type: "p", text: "Group keywords by buying job and judge them by deal value, not volume alone. A search with 30 monthly visitors can be worth more than one with 3,000 if the right company is behind it." },
      {
        type: "steps",
        title: "How to map keywords to buying jobs in Semrush",
        items: [
          { title: "Start with your core service", path: "Semrush > Keyword Magic Tool", text: "Enter a seed such as \"3pl\" and choose your country database." },
          { title: "Pull the questions", text: "Click \"Questions\" for problem identification and solution exploration searches, such as \"what is a 3pl\"." },
          { title: "Filter by intent", text: "Informational for learning and comparing content; Commercial and Transactional for service and location pages." },
          { title: "Check the results page", text: "Open the SERP view for each keyword to see if it shows an AI Overview, the local map or video. That tells you whether to write an explainer, build a service page or record a video." },
          { title: "Find gaps", path: "Organic Research > competitor domain > Positions", text: "Filtered by intent, this shows supplier searches they rank for and you do not." },
        ],
      },
      { type: "h3", text: "Step 3. Fix technical foundations for search and AI crawlers" },
      { type: "p", text: "Search engines and AI crawlers have to be able to reach, read and trust your pages before anything else works." },
      {
        type: "checklist",
        items: [
          "Key pages indexed in Google Search Console and Bing Webmaster Tools (ChatGPT search uses Bing's index).",
          "robots.txt and your firewall or CDN allow Googlebot, Bingbot and the AI search crawlers: OAI-SearchBot, PerplexityBot and Claude-SearchBot.",
          "Service details in the page HTML, not only loaded by JavaScript, because many AI crawlers do not run scripts.",
          "Core Web Vitals passed on mobile, and nothing important more than three clicks from the homepage.",
          "Organisation, service, article and FAQ schema markup, with the same company facts everywhere.",
        ],
      },
      { type: "h3", text: "Step 4. Build pillar pages for each service, industry and location" },
      { type: "p", text: "A pillar page is the main page on a topic: one for each service, each industry you serve and each location or market. These win supplier searches, and they are the pages every related article links back to. Because three in four supplier searches in our study showed the local map, pair each location page with an accurate Google Business Profile." },
      { type: "h3", text: "Step 5. Write answer-first content with BLUF and link it into topic clusters" },
      { type: "p", text: "Use BLUF, short for \"bottom line up front\", a writing rule that started in US Army communications and that Ahrefs recommends for AI search: put the answer in the first sentence, then the detail the reader needs, then the background. AI tools tend to quote from the top of a page and the top of each section, so a BLUF opening is the passage most likely to be lifted into an answer." },
      {
        type: "rewrite",
        title: "Rewriting a 3PL service page with BLUF",
        before: "We are a leading provider of innovative logistics solutions with decades of experience serving clients across a wide range of industries.",
        after: "A 3PL (third-party logistics provider) stores your stock, picks and packs orders and ships them to your customers. We run [number] warehouses in [locations], integrate with Shopify and Amazon, and handle returns.",
        note: "The BLUF version answers a real question in its first sentence and gives facts that Google, ChatGPT and a buyer can all use.",
      },
      { type: "p", text: "Then organise that content into topic clusters. Each pillar page from step 4 sits at the centre, and the cluster articles around it answer one question each, one for every buying job: the explainer, the cost guide, the comparison, the checklist. Every cluster article links to the pillar and to its neighbours with descriptive anchor text, and the pillar links out to each of them. Internal links tell Google and AI tools which page is your main answer on a topic, and a complete cluster shows that you cover the subject in depth, which is what builds topical authority." },
      {
        type: "cards",
        title: "A topic cluster for a 3PL: pillar page \"3PL fulfilment services\" with one article per buying job",
        items: [
          { title: "What is a 3PL?", meta: "Solution exploration" },
          { title: "How much does a 3PL cost?", meta: "Requirements building" },
          { title: "3PL vs in-house fulfilment", meta: "Solution exploration" },
          { title: "How to choose a 3PL: checklist", meta: "Requirements building" },
          { title: "3PL for Shopify brands", meta: "Supplier selection" },
          { title: "3PL contract: what to include", meta: "Consensus creation" },
        ],
      },
      { type: "h3", text: "Step 6. Add proof to every page" },
      { type: "p", text: "Case studies with numbers, reviews on independent sites, accreditations, client logos where allowed and named team members. Put proof on service pages, not only on a case study page, because that is where buyers validate you, and AI tools describe your brand from what they find." },
      { type: "h3", text: "Step 7. Earn backlinks and mentions through digital PR" },
      { type: "p", text: "Backlinks from relevant sites still help pages rank, and mentions of your brand across the web help AI tools recognise and recommend you. When Ahrefs analysed 75,000 brands, web mentions had the strongest link with appearing in Google's AI Overviews (a correlation of 0.664), well ahead of the number of backlinks (0.218). For B2B, aim for both, from the sites your buyers and AI tools already trust." },
      {
        type: "list",
        items: [
          { lead: "Publish original data and pitch it.", text: "A survey, a pricing benchmark or a study like ours gives journalists and bloggers a reason to cite you. Pitch it to trade publications and industry newsletters." },
          { lead: "Get listed by trade bodies and directories.", text: "In our study, trade bodies such as ASCM, CIPS and FIATA and directories such as WhichWarehouse were cited in AI Overviews. Membership pages and directory listings bring links and mentions in one go." },
          { lead: "Offer expert comment.", text: "Answer journalist requests and write guest articles for trade publications, with a named expert from your team." },
          { lead: "Use partner and supplier pages.", text: "Software partners, accreditation bodies and suppliers often list the companies they work with. Ask to be included." },
          { lead: "Build free tools.", text: "A cost calculator or checklist that your industry links to earns links for years." },
        ],
      },
      { type: "p", text: "Relevance matters more than volume: one link from a respected publication in your sector does more than many links from unrelated sites." },
      { type: "h3", text: "Step 8. Build your presence on LinkedIn, YouTube, Reddit and X" },
      { type: "p", text: "B2B buyers research on social platforms as well as in search, and AI tools cite these platforms too: YouTube appeared in 9 of the 36 AI Overviews in our study, and Reddit in 5." },
      {
        type: "list",
        items: [
          { lead: "LinkedIn.", text: "Complete your company page with your services, industries and locations in the words buyers search. Founders and team members who share real lessons and results build the familiarity that decides shortlists." },
          { lead: "YouTube.", text: "Turn your best explainers into short videos that answer one question each. They can appear in Google results and AI Overviews." },
          { lead: "Reddit and industry forums.", text: "Answer questions in the communities your buyers use, as a named person, without selling. Buyers trust peer advice, and AI tools often cite these threads." },
          { lead: "X.", text: "Useful for industry conversations and for reaching journalists. Grok also draws on posts from X." },
        ],
      },
      { type: "p", text: "Treat each guide as source material: one article can become a LinkedIn post, a short video and a thread, all pointing back to your pillar page." },
      {
        type: "stats",
        items: [
          { value: "9 of 36", label: "AI Overviews in our study cited YouTube", by: "MAAI study, November 2026" },
          { value: "5 of 36", label: "AI Overviews in our study cited Reddit", by: "MAAI study, November 2026" },
          { value: "75%", label: "of B2B decision-makers say thought leadership led them to research products they had not considered", by: "Edelman and LinkedIn, 2024" },
          { value: "86%", label: "of decision-makers are likely to invite creators of consistent thought leadership to bid for work", by: "Edelman and LinkedIn, 2024" },
        ],
      },
      { type: "h3", text: "Step 9. Track AI visibility, leads and pipeline" },
      { type: "p", text: "Check what AI tools say about you every month, and measure SEO and AEO in qualified leads and pipeline." },
      { type: "p", text: "**AI visibility:** take ten questions from step 1, run them in ChatGPT, Perplexity, Gemini and Google's AI Mode each month, and record whether your business is named, which competitors are named and which websites are cited. The cited websites become your target list for step 7. Our guide to [generative engine optimisation for B2B](/insights/generative-engine-optimization-b2b) explains this in more detail." },
      {
        type: "steps",
        title: "How to track organic and AI leads in GA4 and your CRM",
        items: [
          { title: "Mark enquiries as a key event", path: "GA4 > Admin > Data display > Events", text: "Find your form event (for example generate_lead) and switch on \"Mark as key event\"." },
          { title: "Give AI traffic its own channel", path: "GA4 > Admin > Data display > Channel groups > Create new channel group", text: "Add a channel called \"AI assistants\" with the condition Source matches regex (pattern below), and move it above Referral." },
          { title: "See which pages bring enquiries", path: "Reports > Engagement > Landing page", text: "Filter to Organic Search or your AI assistants channel, with your enquiry event in the Key events column." },
          { title: "Capture the source in every form", text: "Add hidden fields for landing page URL and traffic source, filled automatically by your developer or form tool, and map them to CRM properties such as \"First landing page\" and \"Lead source\". This works with HubSpot, Salesforce, Pipedrive or any CRM that accepts hidden fields." },
          { title: "Report on pipeline", text: "Group deals by lead source and first landing page each month." },
        ],
      },
      { type: "code", title: "Regex for the AI assistants channel (Source matches regex)", code: ".*(chatgpt|openai|perplexity|gemini\\.google|claude|copilot).*" },
      { type: "p", text: "**Also ask every enquiry:** \"Where did you first hear about us?\", with Google, ChatGPT or another AI tool, LinkedIn and referral as options. Buyers who first meet you in an AI answer often return later through a branded search, so analytics alone undercounts AEO." },

      { type: "h2", text: "How much should a B2B company spend on SEO and AEO?" },
      { type: "p", text: "Work it out from the value of a new client. Here is a worked example with illustrative figures for a B2B IT services firm." },
      {
        type: "stats",
        title: "Worked example (illustrative figures)",
        items: [
          { value: "£36,000", label: "value of one client (£1,500 a month for 24 months)" },
          { value: "1 in 4", label: "qualified enquiries become clients" },
          { value: "£36,000", label: "a year on SEO and AEO (£3,000 a month)" },
          { value: "4", label: "extra qualified enquiries a year cover the full year's spend" },
        ],
      },
      { type: "p", text: "Use your own client value and close rate, in any currency. If the number of enquiries you need looks realistic for your market, the budget makes sense. If you need leads while SEO and AEO build, our guide to [SEO vs PPC for B2B](/insights/seo-vs-ppc-for-b2b) explains how paid search fits alongside them." },

      { type: "h2", text: "How long does B2B SEO and AEO take to work?" },
      { type: "p", text: "In our experience, rankings and impressions start to move within three to six months, and qualified leads follow as pages climb for supplier searches. Refreshed pages that already rank can appear in AI answers within weeks. For the relocation client mentioned above, daily search impressions grew from about 700 to about 2,600 between January and May 2026. Here is a typical timeline from our client work. It varies with how competitive your market is and how much of your site already ranks." },
      {
        type: "flow",
        title: "A typical B2B SEO and AEO timeline",
        steps: [
          { label: "Month 1", text: "Audit the site, fix technical issues, map buyer questions for each stage, and set up GA4 and CRM tracking." },
          { label: "Months 2 to 3", text: "Pillar pages and the first cluster articles go live. New impressions start to show in Search Console, and refreshed pages can begin to appear in AI answers." },
          { label: "Months 3 to 6", text: "Rankings and impressions climb for question and supplier searches. The first organic and AI-sourced enquiries arrive." },
          { label: "Months 6 to 12", text: "Clusters are complete and digital PR builds mentions and links. Leads and pipeline from search and AI grow month on month." },
        ],
      },

      { type: "h2", text: "How does B2B SEO and AEO differ by business model?" },
      { type: "p", text: "The nine steps stay the same, but the questions and the winning pages change." },
      {
        type: "table",
        head: ["Business model", "What buyers ask", "Pages and sources that win"],
        rows: [
          ["B2B SaaS", "Best software for my use case, X vs Y, pricing, integrations", "Comparison and alternatives pages, crawlable pricing, integration pages, software review platforms"],
          ["Professional services", "Who are the experts, what does it cost, how do I choose", "Named expert guidance, sector pages, fee explanations, professional directories"],
          ["Manufacturing", "Materials, tolerances, certifications, lead times, minimum orders", "A page per capability with specifications in the HTML, data sheets, quote requests"],
          ["Logistics and supply chain", "Routes, customs, warehousing, integrations", "Capability and location pages, the clearest explainers in the niche, trade body listings, Business Profiles"],
          ["Wholesale and B2B ecommerce", "Products, specifications, trade terms", "Category and product pages with trade pricing, minimum orders and delivery terms"],
        ],
      },
      { type: "view", text: "", title: "Kriti's view" },
    ],
    faq: [
      { q: "What is B2B SEO and AEO?", a: "B2B SEO helps your website rank in Google when businesses research what you sell. B2B AEO helps your business get cited and recommended in AI answers such as ChatGPT and Google's AI Overviews. Together they make you visible before buyers contact anyone." },
      { q: "How has the B2B customer journey changed?", a: "It has moved from sales-led to self-led. Buyers now research through Google and AI tools and first contact suppliers 61% of the way through their buying process, usually with a favourite already in mind (6sense, 2025)." },
      { q: "What are the stages of the B2B customer journey?", a: "Gartner describes six buying jobs: problem identification, solution exploration, requirements building, supplier selection, validation and consensus creation. They overlap and repeat rather than following a straight line." },
      { q: "How is B2B SEO different from B2C SEO?", a: "B2B SEO reaches a buying group and the customer's customer across a longer journey, with lower search volumes and higher deal values. B2C SEO reaches individual buyers who decide quickly." },
      { q: "How long does B2B SEO take to work?", a: "Rankings and impressions usually start to move within three to six months, with qualified leads following as pages climb for supplier searches." },
      { q: "Do backlinks still matter for B2B SEO?", a: "Yes. Relevant backlinks still help pages rank, and brand mentions across the web help AI tools recommend you. Digital PR built on original data, trade body listings and expert comment earns both." },
      { q: "How do I track leads from B2B SEO and AEO?", a: "Mark enquiries as a key event in GA4, add an AI assistants channel group, and pass each lead's landing page and source into your CRM with hidden form fields." },
    ],
  },
  {
    slug: "will-ai-replace-seo",
    seoTitle: "Will AI Replace SEO? What Changes in 2027 | MAAI",
    title: "Will AI Replace SEO? What Changes for SEO Agencies in 2027",
    description:
      "AI has already replaced traditional, Google-only SEO. What the data shows from 2023 to 2026, what still holds, and what it means for SEO agencies in 2027, from a founder's view.",
    date: "2026-11-03",
    author: "kriti",
    topics: ["AEO/GEO", "Everything Marketing"],
    industries: [],
    image: "/removals/AEO.jpg",
    intro:
      "Every few months someone declares SEO dead. In 2026 the question carries more weight, because the numbers behind it are real. Fewer searches end in a click, AI tools answer questions directly, and buyers now search across ChatGPT, Google's AI Mode and Perplexity as well as the classic results page. So will AI replace SEO? It has already replaced the traditional version of it. What it has not replaced is the need to be found, trusted and chosen. This post looks at what the data shows from 2023 to 2026, what has changed, what still holds, and what it means for SEO agencies heading into 2027, written from my own experience of building one.",
    tldr: [
      "AI has already replaced traditional, Google-only SEO. Search now happens across Google, AI Overviews, AI Mode, ChatGPT, Perplexity and community sites.",
      "In the US, 68% of Google searches ended without a click in early 2026, up from 60% in 2024, according to SparkToro.",
      "Fewer clicks mean website visits now come mostly from people closer to buying, so content has to work in more formats and on more platforms.",
      "The foundations still decide visibility: crawlability, Core Web Vitals, structured data and authority.",
      "For agencies, AI raises the bar: quality and volume together, niche expertise to vet content, and funnels built for leads as well as awareness.",
    ],
    body: [
      { type: "h2", text: "How search has shifted from 2023 to 2026" },
      { type: "p", text: "Search did not change overnight. It shifted in steps, and each step moved a little more of the answer away from the website and onto the platform. The timeline below shows the milestones that matter most for anyone who depends on organic traffic." },
      {
        type: "table",
        head: ["Year", "What changed", "The number"],
        rows: [
          ["2023", "ChatGPT moves into everyday use, and Google starts testing AI answers in Search as a Labs experiment", "AI answers are still a test feature"],
          ["2024", "AI Overviews roll out in Google Search in the US", "60.45% of US Google searches end without a click (SparkToro)"],
          ["2025", "ChatGPT passes 400 million weekly users, and research shows people click less when an AI summary appears", "Clicks on results fall from 15% to 8% of searches when an AI summary shows (Pew Research Center)"],
          ["2026", "Google's AI Mode passes 1 billion monthly users, and ChatGPT reaches 1.2 billion weekly users", "68.01% of US Google searches end without a click, January to April 2026 (SparkToro)"],
        ],
      },
      { type: "p", text: "Two things stand out. Answers now appear on the platform before anyone visits a website, and Google is only one of several places where the search happens. The chart below shows what that does to behaviour on Google itself." },
      {
        type: "chart",
        title: "What people do after a Google search (% of searches)",
        series: [
          { name: "No AI summary", color: "#1C3F2E" },
          { name: "With AI summary", color: "#86AB97" },
        ],
        rows: [
          { label: "Clicked a result link", values: [15, 8] },
          { label: "Ended the browsing session", values: [16, 26] },
        ],
        source: {
          label: "Pew Research Center data, via SISTRIX",
          href: "https://www.sistrix.com/blog/pew-research-ai-overviews-halve-click-through-rates/",
          note: "nearly 70,000 Google searches by around 900 US adults, March 2025",
        },
      },
      { type: "p", text: "When an AI summary appears, the share of searches that lead to a click on a result almost halves, from 15% to 8%. More people also end their browsing session right there, 26% against 16%. Only about 1% of searches led to a click on a link inside the summary itself. The answer is being consumed on the results page." },

      { type: "h2", text: "AI has already replaced traditional SEO" },
      { type: "p", text: "The honest answer to \"will AI replace SEO\" is that it already has replaced the traditional version. Traditional SEO meant ranking in the ten blue links on Google, earning the click and measuring success in sessions. That model is shrinking every year." },
      { type: "p", text: "Search has also moved beyond Google. Buyers ask ChatGPT for a shortlist, use Perplexity to compare suppliers, read Reddit to see what real users say, and turn to Google's AI Mode for longer research questions. Each platform pulls from the web in its own way, and each one is now part of the search journey." },
      { type: "p", text: "SEO today means being visible wherever those answers are formed. That is why the industry now talks about answer engine optimisation (AEO) and generative engine optimisation (GEO) alongside SEO. All three share the same foundations, but the goal has widened from ranking a page to being cited, recommended and trusted across platforms." },

      { type: "h2", text: "What marketers on Reddit are saying" },
      { type: "p", text: "A recent r/DigitalMarketing thread asked this exact question, and the replies sum up where the industry stands. Nobody in the thread thinks SEO disappears, but they disagree on how much has to change." },
      {
        type: "quote",
        text: "I don't think AI will kill SEO, but it will change what success looks like. As more searches get answered directly in AI Overviews or chatbots, rankings and organic clicks alone become less reliable measures of visibility.",
        author: "u/suxeedoBerlin",
        href: "https://www.reddit.com/r/DigitalMarketing/comments/1xcc03u/comment/19rhaex1larpe/",
      },
      {
        type: "quote",
        text: "People have been saying SEO is dead since 2000-something. Ofc AI won't kill SEO, it's evolving, as it has been for the past 20 years. Whatever Google (and AI) dictate, that's what we'll do, I guess. We'll adapt.",
        author: "u/SelestialPretzel",
        href: "https://www.reddit.com/r/DigitalMarketing/comments/1xcc03u/comment/19rhbeeeurwld/",
      },
      {
        type: "quote",
        text: "SEO is still the foundation of AI visibility. Without good content, content structure, and technical optimization, you'll have little success in traditional search engines and AI search.",
        author: "u/LukasPugstaller",
        href: "https://www.reddit.com/r/DigitalMarketing/comments/1xcc03u/comment/19rljh4fv4vk2/",
      },
      { type: "h3", text: "My take" },
      { type: "p", text: "All three are right, and each covers a different part of the picture. The first comment points to the real shift: success is now measured in citations and brand visibility as well as rankings and clicks. In my client reporting, I now track whether a client appears in AI answers for their category, alongside Search Console clicks and enquiries." },
      { type: "p", text: "The second comment is fair on history, since SEO has changed many times before. Where I would push back is on waiting to adapt. This change is bigger than a new ranking factor, because the search itself has spread across platforms. Brands that wait for Google to set the rules will find competitors already cited in ChatGPT and Perplexity answers." },
      { type: "p", text: "The third comment matches what I see every month. In every client account where AI visibility improved, the gains sat on top of technical health, structured content and crawlable pages. AEO and GEO extend SEO; they do not work without it." },

      { type: "h2", text: "What AI search has changed since 2025" },
      { type: "p", text: "The biggest changes came in 2025 and 2026, as AI answers moved from a test feature to the default experience for many searches." },
      {
        type: "list",
        items: [
          { lead: "Fewer clicks.", text: "Ahrefs found that for keywords with an AI Overview, the click-through rate of the top result fell from 7.3% in December 2023 to 1.6% in December 2025, about 58% lower than it would have been without the feature." },
          { lead: "Fewer impressions that count.", text: "Simple informational questions are now answered on the results page, so pages built only for definitions and quick how-to answers earn fewer impressions and clicks." },
          { lead: "Answers before clicks.", text: "AI Overviews, AI Mode and chat assistants summarise first. People click to verify, compare or act." },
          { lead: "Query fan-out.", text: "AI Mode breaks one question into many sub-queries and pulls passages from several pages, so a page can be used in an answer without being the top result." },
          { lead: "Citations as the new ranking.", text: "Being named or linked inside the AI answer is now the visible win, and it depends on being trusted across the web." },
        ],
      },
      { type: "h3", text: "What fewer clicks really mean" },
      { type: "p", text: "Fewer clicks do not mean fewer buyers. They mean the people who do click are further along. When someone can get a definition from an AI summary, the visit that follows is usually about comparing suppliers, checking prices or making contact. Website visits have become more commercial." },
      { type: "p", text: "That does not mean informational websites should stop publishing. It means content has to work in more forms: articles with original data that AI tools want to cite, comparison and pricing pages for buyers who do click, video and visuals for YouTube and LinkedIn, and helpful answers in the communities where buyers ask questions. The aim is to be present wherever the answer is formed, and to be the obvious choice when someone is ready to click." },

      { type: "h2", text: "What has not changed" },
      { type: "p", text: "AI tools still rely on the web. Google's guidance on succeeding in AI search says the same SEO best practices apply, and AI Overviews and AI Mode draw on pages Google can crawl, index and rank. ChatGPT and Perplexity work through retrieval: they search the web, pull the most relevant passages and build an answer from them, a process often called retrieval-augmented generation (RAG). If a page cannot be found, read or trusted, it cannot be retrieved." },
      { type: "p", text: "That is why the fundamentals carry more weight than ever:" },
      {
        type: "list",
        items: [
          { lead: "Technical SEO.", text: "Crawlability, indexation, site architecture and clean internal linking decide whether search engines and AI crawlers can reach your pages at all." },
          { lead: "Page experience.", text: "Core Web Vitals measure loading (Largest Contentful Paint), responsiveness (Interaction to Next Paint) and visual stability (Cumulative Layout Shift), and they still shape how both users and search engines judge a site." },
          { lead: "Structured data.", text: "Schema markup helps machines understand what a page is about, who wrote it and what the business offers." },
          { lead: "Authority and E-E-A-T.", text: "Experience, expertise, authoritativeness and trust remain central to how Google evaluates content, and links and mentions from trusted sites still signal authority." },
          { lead: "Buyer research.", text: "In B2B especially, where contracts run for years, buyers still research, compare and shortlist before they make contact." },
        ],
      },
      { type: "p", text: "We have seen this in our own client work. For a UK international removals company, combining SEO, AEO and GEO work in 2026, including structured FAQs, an llms.txt file and refreshed country landing pages, lifted organic clicks by 53%, comparing February to April with May to July. For a UK removals brand hit by two Google core updates the same year, guides built on the company's own move data grew blog clicks by 39% between late March and late May, while the wider site was still recovering. In both cases, the technical and content foundations did the heavy lifting, and the AI-readiness work built on top of them." },

      { type: "h2", text: "A founder's note: what this means for SEO agencies in 2027" },
      { type: "p", text: "I thought about starting an agency for a long time before I did it. By the time I started MAAI in 2024, AI was already part of search. Most of our clients are B2B companies, across niches such as removals, logistics, supply chain and real estate, and I have watched the work change in front of me since." },
      { type: "p", text: "The biggest change is competition. Every agency and every in-house team now has the same AI tools, so the baseline has risen. Work that once needed a team of five, I can now run largely on my own, because research, drafting, reporting and audits have become far more streamlined. That helps margins, and it also means anyone can produce volume." },
      { type: "p", text: "So content has to be good and frequent at the same time. You cannot trade one for the other any more. Quality on its own is too slow to build topical authority, and volume on its own gets ignored by both Google and AI tools. Here is what that means in practice:" },
      {
        type: "list",
        items: [
          { lead: "You still need people who can vet content.", text: "AI can draft a lot, but someone with real industry knowledge has to check that the content is accurate, specific and useful. Automation saves time; judgement still has to come from people." },
          { lead: "Niching down saves revenue.", text: "When an agency specialises, one industry expert can validate the authority of content across every client in that sector. A generalist agency needs a different expert for every industry it serves." },
          { lead: "Agencies have to publish their own expertise.", text: "Sharing what you know, on your own website and on platforms such as LinkedIn, matters far more than it did a few years ago. An SEO agency without its own content is harder to trust, and it will not appear in the AI answers its prospects are reading." },
          { lead: "Free tools are becoming a growth channel.", text: "Building a useful calculator, checker or audit tool is now quick and cheap, so expect more SEO agencies to offer free tools to attract and keep clients." },
          { lead: "Funnels matter more than traffic.", text: "The best agencies always talked about the full funnel. Now it is unavoidable. If you only chase top-of-funnel traffic, the AI summary absorbs most of it. The work has to connect visibility to enquiries and leads, beyond awareness campaigns." },
        ],
      },
      { type: "p", text: "My view for 2027 is simple. The agencies that do well will know an industry deeply, publish what they know, use AI to work faster without lowering their standards, and measure success in leads as well as traffic." },
    ],
    faq: [
      { q: "Is SEO dead in 2027?", a: "No. Traditional, Google-only SEO has largely been replaced, but being found in search results and AI answers still depends on SEO foundations such as technical health, content quality and authority." },
      { q: "Will AI replace SEO agencies?", a: "AI will replace agencies that only produce volume content. Agencies with deep industry expertise, strong technical skills and a focus on leads will become more valuable." },
      { q: "Is SEO still worth it if fewer people click?", a: "Yes. The visits that remain tend to come from people closer to buying, and visibility in AI answers depends on the same foundations." },
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO helps you rank in search results. AEO (answer engine optimisation) helps you appear in direct answers. GEO (generative engine optimisation) helps you get cited by AI tools such as ChatGPT. In practice, they share the same foundations." },
      { q: "Which platforms count as search now?", a: "Google Search, AI Overviews and AI Mode, ChatGPT, Perplexity and Gemini, as well as community and video platforms such as Reddit and YouTube for many topics." },
    ],
  },
  {
    slug: "seo-vs-ppc-for-b2b",
    seoTitle: "SEO vs PPC for B2B in 2027: Which Is Better? | MAAI",
    title: "SEO vs PPC for B2B in 2027: How to Plan SEO, AEO and Paid Search Together",
    description:
      "SEO vs PPC for B2B in 2027: how B2B buyers search, how SEO and AEO make you the answer, when to start each, real UK B2B click costs, budget logic with a worked example, plans by business model and how to measure leads.",
    date: "2026-11-04",
    author: "team",
    topics: ["B2B", "SEO - Begins"],
    industries: [],
    image: "/Saas/aeo.jpg",
    intro:
      "Before a company signs a contract with a new supplier, several people inside it ask a lot of questions. What does this usually cost? Which approach suits a business our size? Who are the specialists? Can we trust them? Those questions go into Google, ChatGPT and Google's AI Mode weeks or months before anyone fills in a contact form. SEO vs PPC is really a question of which of those moments you want to own. SEO and AEO make your company the answer while buyers research. PPC buys a place when someone is ready to enquire today. This guide explains, in plain English, how each one works for B2B companies in 2027, when to start each, what UK B2B clicks actually cost, how to set the budget, how the plan changes by business model, and how to measure it in leads and revenue.",
    tldr: [
      "B2B buyers do most of their research before they speak to a supplier: 94% of buying groups already have a favoured vendor by first contact (6sense, 2025). SEO and AEO are how you get into that research.",
      "SEO earns your place in Google's free results. AEO earns your place in AI answers from ChatGPT, Perplexity and Google AI Mode, which never use ads as sources. PPC buys visibility at the moment someone searches to enquire.",
      "B2B clicks are expensive. In Semrush's UK data, \"office removals\" costs about $14.92 a click and \"payroll software\" about $38.60, and a buying group may click several times before it enquires.",
      "Start SEO as early as possible, because it usually takes three to six months to build. Use PPC for urgent, high-intent searches and remarketing while SEO grows, then shift budget as pages rank.",
      "Work out your break-even cost per click from deal value, margin and conversion rates. If a search costs more than that, win it with SEO and AEO.",
    ],
    body: [
      { type: "h2", text: "SEO vs PPC for B2B: what is the difference?" },
      { type: "p", text: "Both put your company in front of business buyers who are searching. The difference is how you earn the place and how long it lasts." },
      {
        type: "list",
        items: [
          { lead: "SEO (search engine optimisation)", text: "earns your website a place in Google's free results. You invest in your website, content and reputation. Once a page ranks, it keeps bringing visitors without a cost per click." },
          { lead: "AEO (answer engine optimisation)", text: "makes your company the answer AI tools give. When an operations director asks ChatGPT \"which 3PL providers in the Midlands handle ecommerce returns?\", AEO is what gets your company named and linked in the reply. GEO (generative engine optimisation) is the same work viewed from the AI side: being cited inside generated answers." },
          { lead: "PPC (pay-per-click)", text: "buys a place in the paid results, usually through Google Ads or Microsoft Ads, and you pay each time someone clicks. Visibility starts the day the campaign goes live and ends the day the budget stops." },
        ],
      },
      { type: "p", text: "Paying for ads does not lift your organic rankings. Google says so plainly in its own SEO vs PPC guide for advertisers: the two systems are separate. That is why most B2B companies need a plan for both, with each channel doing the job it does best." },

      { type: "h2", text: "How do B2B buyers search before they contact a supplier?" },
      { type: "p", text: "B2B buying is slow, shared and mostly invisible to the supplier. Gartner's research into the B2B buying journey shows how buyers split their time:" },
      {
        type: "chart",
        title: "How B2B buyers spend their buying time (%)",
        series: [{ name: "Share of buying time", color: "#1C3F2E" }],
        rows: [
          { label: "Researching independently online", values: [27] },
          { label: "Meeting all potential suppliers", values: [17] },
          { label: "Time with any one supplier", values: [5] },
        ],
        source: {
          label: "Gartner, B2B buying journey research",
          note: "time spent with any one supplier is about 5 to 6% when several are being compared",
        },
      },
      { type: "p", text: "Buyers spend more time researching on their own than meeting every possible supplier combined. Other research points the same way. [6sense](https://www.businesswire.com/news/home/20251112018032/en)'s 2025 Buyer Experience Report, based on more than 4,000 buyers, found that 94% of buying groups had already picked a favoured vendor before first contact. [Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience)'s 2026 sales survey found that 67% of B2B buyers prefer a rep-free buying experience. And the [TrustRadius](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/) 2026 B2B Buying Disconnect Report found that 63% of software buyers used AI tools during their research." },
      { type: "p", text: "Take a finance director at a growing retailer looking for a third-party logistics (3PL) partner. Over two or three months, the buying group might search:" },
      {
        type: "ol",
        items: [
          { lead: "A problem question:", text: "\"what is a 3PL\" or \"when should you outsource warehousing\"." },
          { lead: "A cost question:", text: "\"how much does 3PL warehousing cost per pallet UK\"." },
          { lead: "A shortlist question:", text: "\"3PL providers for ecommerce UK\", or in ChatGPT, \"which UK 3PLs integrate with Shopify and handle returns?\"." },
          { lead: "A trust question:", text: "\"Company X reviews\", \"Company X case study\" and a look at the founder on LinkedIn." },
          { lead: "An enquiry search:", text: "\"Company X 3PL warehousing quote\"." },
        ],
      },
      { type: "p", text: "Three or four different people might make those searches: the finance director, the operations manager and an ecommerce lead. The supplier whose guide answered question 1, whose pricing page answered question 2 and which AI tools named at question 3 is already the favourite by question 5. Our guide to [B2B SEO](/insights/seo-for-b2b-companies) walks through this journey touchpoint by touchpoint." },

      { type: "h2", text: "How SEO and AEO work for B2B companies, in plain English" },
      { type: "p", text: "SEO and AEO make your company the helpful answer at each of those questions, so you are part of the decision before a salesperson is involved. Here is what happens behind the scenes." },
      { type: "h3", text: "What Google looks for when it ranks a B2B page" },
      {
        type: "list",
        items: [
          { lead: "Can Google read the page?", text: "Technical SEO makes sure pages load quickly, work on mobile and can be found and stored by Google. Many B2B sites hide key content in PDFs, brochures or gated downloads that Google cannot use well." },
          { lead: "Does the page answer the question?", text: "Service, industry and location pages need to match what buyers search, with specifics such as sectors served, minimum order sizes, certifications, coverage areas and typical timelines." },
          { lead: "Can the company be trusted?", text: "Case studies, reviews, trade association memberships, press coverage and links from respected industry sites tell Google your company is credible." },
        ],
      },
      { type: "h3", text: "What AI tools look for when they recommend a B2B supplier" },
      { type: "p", text: "ChatGPT, Perplexity, Claude, Gemini and Google AI Mode search the web, read the pages they find and write an answer, often naming a short list of suppliers with links. They favour pages that answer the question directly, include concrete facts (prices or price ranges, capacities, sectors, locations) and companies that other sites, directories, reviews and forums also mention. Ads are never used as sources, so AEO depends entirely on organic content and reputation. Our guide to [B2B AEO and GEO strategy](/insights/generative-engine-optimization-b2b) explains how AI tools choose which brands to cite." },
      { type: "image", src: "/insights/b2b-chatgpt-3pl-shortlist.jpg", alt: "ChatGPT web search answer listing UK 3PL providers that integrate with Shopify and handle returns, with a source link under each provider", caption: "A ChatGPT shortlist for a B2B question: the suppliers named come from organic pages, directories and reviews. Ads are never used as sources." },
      { type: "h3", text: "Why low search volume is fine in B2B" },
      { type: "p", text: "A B2B search with 50 monthly searches can be worth more than a consumer search with 5,000, because one new client may be worth tens of thousands of pounds a year. The question to ask of every keyword is whether the people searching it could become clients, then how many of them there are." },

      { type: "h2", text: "How does PPC work for B2B companies?" },
      { type: "p", text: "Every search triggers an auction among advertisers bidding on that search. What you pay per click depends on competitors' bids and on your Quality Score, which Google bases on expected click rate, ad relevance and landing page experience. The main options for B2B are:" },
      {
        type: "list",
        items: [
          { lead: "Search ads:", text: "text ads on specific searches, such as \"office relocation company London\" or your brand name." },
          { lead: "Remarketing:", text: "ads shown to people who visited your site, such as a buying group member who read your pricing page." },
          { lead: "LinkedIn Ads:", text: "ads targeted by job title, company size and industry. These reach people who are not searching yet, so they support awareness rather than search demand." },
          { lead: "Microsoft Ads:", text: "search ads on Bing, whose results also power Microsoft Copilot answers." },
        ],
      },
      { type: "p", text: "PPC is strongest at the end of the journey, when someone searches to request a quote or a demo. It is a weak and expensive way to reach a buying group while it is still asking questions, because several people may click several times over several months, and you pay every time." },

      { type: "h2", text: "Is SEO or PPC better for B2B lead generation?" },
      { type: "p", text: "For long-term B2B lead generation, SEO and AEO. They reach every member of the buying group during the research where favourites form, they cost nothing per click, and they are the only way into AI answers. Most search clicks also go to organic results: [SparkToro and Datos](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/) found that for every 1,000 Google searches in the EU, 374 clicks go to the open web, while only about 1% of all clicks go to paid ads." },
      { type: "p", text: "PPC is better when you need enquiries this month, when you are entering a new market, or when you want a second chance with a visitor who did not enquire. For most B2B companies the right answer is SEO and AEO as the foundation, with PPC as a targeted addition." },
      {
        type: "table",
        head: ["You need to...", "Best channel", "Why"],
        rows: [
          ["Be found while buying groups research", "SEO and AEO", "Early questions are many and varied; paying per click for them rarely pays back"],
          ["Be named in ChatGPT and Google AI answers", "AEO", "AI tools cite organic pages, directories and reviews, never ads"],
          ["Win people searching for a quote today", "PPC and SEO together", "PPC catches today's enquiries while service pages build rankings"],
          ["Launch a new service, sector or region", "PPC first, SEO in parallel", "New pages have no rankings yet"],
          ["Stay visible to a buying group between visits", "PPC remarketing", "Only ads can follow up with a past visitor"],
          ["Reduce cost per lead over time", "SEO and AEO", "Organic visits carry no cost per click"],
        ],
      },
      { type: "view", text: "", title: "Kriti's view" },

      { type: "h2", text: "How much do B2B Google Ads clicks cost in the UK?" },
      { type: "p", text: "We pulled Semrush's UK data for searches B2B buyers make in sectors we work in and beyond. The cost per click is Semrush's estimate of what advertisers pay, shown in US dollars." },
      {
        type: "table",
        head: ["Search", "UK monthly searches", "Cost per click", "Organic difficulty (0 to 100)"],
        rows: [
          ["payroll software", "6,600", "$38.60", "62"],
          ["erp software", "4,400", "$32.78", "55"],
          ["supply chain management software", "1,000", "$25.38", "30"],
          ["office removals", "1,600", "$14.92", "27"],
          ["office space to rent london", "1,600", "$13.81", "23"],
          ["employee relocation", "170", "$13.27", "27"],
          ["3pl warehousing", "480", "$9.66", "22"],
          ["commercial removals", "1,300", "$8.57", "12"],
          ["contract manufacturing", "1,000", "$5.03", "29"],
          ["freight forwarding services", "1,300", "$4.14", "30"],
          ["what is a 3pl", "480", "$3.14", "41"],
        ],
      },
      { type: "p", text: "Two patterns stand out. First, software clicks are expensive, and so are many service clicks once you remember a buying group clicks more than once. Second, organic difficulty for most service searches is low to moderate: \"commercial removals\" scores 12 and \"3pl warehousing\" 22. For many B2B companies, ranking organically is more achievable than the click prices suggest. Question searches such as \"what is a 3pl\" are cheap to advertise on, but the people searching them are months from buying, so they are better won with content." },
      { type: "p", text: "Click prices also rise over time. WordStream by LocaliQ's benchmarks, based on more than 16,000 campaigns, found the average Google Ads cost per click rose from $4.66 in 2024 to $5.42 in 2025, with increases in 87% of industries." },

      { type: "h2", text: "When should a B2B company start SEO and PPC?" },
      { type: "p", text: "SEO usually takes three to six months to bring meaningful results, and niche B2B searches can move faster because there is less competition. So the best time to start SEO is before you need the leads. PPC can start the day your landing page is ready." },
      {
        type: "list",
        items: [
          { lead: "New company or new website:", text: "start SEO from the site plan. Build pages around the services, industries and locations buyers search, set up Google Search Console and GA4 with lead tracking, and run a small PPC campaign on high-intent searches so the sales team has enquiries while SEO builds." },
          { lead: "Established company that relies on referrals:", text: "start SEO now. Referrals still check your website, case studies and LinkedIn before they call, and new buyers who do not know you can only find you through search and AI answers." },
          { lead: "Company already spending on PPC:", text: "start SEO now and use your Google Ads search terms report as a ready-made list of searches that bring real enquiries." },
          { lead: "Entering a new sector or country:", text: "PPC first to test demand and messaging, SEO pages in parallel so they rank by the time the test proves the market." },
        ],
      },

      { type: "h2", text: "What happens if a B2B company only runs PPC?" },
      {
        type: "list",
        items: [
          { lead: "You pay for every member of the buying group.", text: "Each person who clicks your ad, and each return visit, costs money. A long buying cycle multiplies this." },
          { lead: "You miss the research.", text: "Ads are too expensive to cover the dozens of questions buyers ask months before they enquire, so suppliers who answer them become the favourite." },
          { lead: "You are invisible in AI answers.", text: "When a buyer asks ChatGPT for a shortlist, ads-only companies rarely appear." },
          { lead: "Costs rise and you absorb them.", text: "Every year of rising click prices raises your cost per lead just to stay where you are." },
          { lead: "Leads stop when spending stops.", text: "A budget freeze removes you from search overnight, often at the moment you most need pipeline." },
          { lead: "You build nothing you own.", text: "After years of spend, you have no rankings, content or reputation that keep working without a budget." },
        ],
      },
      { type: "p", text: "Skipping PPC entirely has a cost too: a new site waits months for its first organic enquiries, and you lose the chance to remarket to buying group members who visited once. That is why the plan below uses PPC as a support for SEO and AEO." },

      { type: "h2", text: "How SEO and PPC work for different B2B business models" },
      { type: "p", text: "The balance between SEO, AEO and PPC depends on how your buyers buy: deal size, how many people decide, and whether they search for a category or a problem." },
      { type: "h3", text: "How should a B2B SaaS company split SEO and PPC?" },
      { type: "p", text: "Software buyers compare a lot, read reviews and increasingly ask AI tools for shortlists. Clicks are among the most expensive in B2B." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "use-case and integration pages, comparison and alternatives pages, honest pricing pages, and help content that answers \"how do I\" questions." },
          { lead: "AEO focus:", text: "profiles and reviews on software review sites, and clear feature and pricing facts that AI tools can quote." },
          { lead: "PPC role:", text: "brand protection, demo and trial campaigns on the highest-intent searches, and remarketing to visitors who read pricing." },
        ],
      },
      { type: "h3", text: "How do professional services firms get clients from search?" },
      { type: "p", text: "Consultancies, law firms, accountants and agencies sell expertise, so buyers judge the people as much as the service." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "service and sector pages, expert guides on the problems you solve, team and partner profiles, and case studies with outcomes." },
          { lead: "AEO focus:", text: "being quoted in trade press and named in industry directories, plus founder and partner content on LinkedIn." },
          { lead: "PPC role:", text: "urgent services only, such as \"employment lawyer for business\", and remarketing." },
        ],
      },
      { type: "h3", text: "How can manufacturers and suppliers turn search into RFQs?" },
      { type: "p", text: "Engineers and procurement teams search for specifications, materials, tolerances and capabilities, often with very specific phrases." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "capability and process pages, materials and specifications, industries served, certifications, and downloadable data sheets with the key facts also written on the page." },
          { lead: "PPC role:", text: "a small campaign on \"supplier\" and \"quote\" searches for your most profitable capabilities." },
        ],
      },
      { type: "h3", text: "How do logistics, freight and 3PL companies win shipper enquiries?" },
      { type: "p", text: "Shippers search by service, route, sector and location, and they compare capacity and integrations." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "pages for each service (warehousing, fulfilment, freight forwarding, haulage), routes and lanes, sectors served, sites and capacities, and cost guides." },
          { lead: "AEO focus:", text: "consistent listings in logistics directories and trade associations, so AI tools see the same facts everywhere." },
          { lead: "PPC role:", text: "peak-season capacity campaigns and new-site launches." },
        ],
      },
      { type: "h3", text: "How do commercial removals and relocation companies get B2B leads?" },
      { type: "p", text: "Office moves and employee relocation are bought by facilities, HR and global mobility teams, while employees who move are a second audience that influences the choice." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "office relocation and commercial removals pages by city, relocation policy and cost guides for HR teams, and country guides for relocating employees." },
          { lead: "PPC role:", text: "\"office removals\" and \"office relocation\" searches in your core cities, where intent is high." },
        ],
      },
      { type: "h3", text: "How do commercial property firms reach tenants and investors through search?" },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "pages for each property type and area, availability that Google can read, and market reports with rents and trends." },
          { lead: "PPC role:", text: "launches of new schemes and hard-to-let space." },
        ],
      },

      { type: "h2", text: "How to set a B2B SEO and PPC budget" },
      { type: "p", text: "Use your own numbers to decide which searches are worth paying for. You need four figures: average first-year deal value, gross margin, website visit-to-lead rate and lead-to-client rate." },
      {
        type: "list",
        items: [
          { lead: "Profit per client", text: "= first-year deal value × gross margin." },
          { lead: "The most you can pay per click", text: "= profit per client × lead-to-client rate × visit-to-lead rate." },
        ],
      },
      { type: "p", text: "Worked example (illustrative numbers): a commercial removals company wins office moves worth £8,000 on average, at a 35% margin, so it makes £2,800 profit per client. If 2% of visitors send an enquiry and 15% of enquiries become clients, the break-even cost per click is £2,800 × 15% × 2% = £8.40. \"Office removals\" at around $14.92 a click is above that line, so the company should win it with SEO and use PPC only for its most profitable city searches or for remarketing. A software company with a £30,000 first-year contract at 80% margin, the same conversion rates and a £72 break-even can afford \"payroll software\" at $38.60 for now, but it should still build SEO so its cost per lead falls over time." },
      { type: "p", text: "Then set the split by stage: more PPC while a new site builds, shifting steadily to SEO and AEO as service pages reach the top three, with PPC kept for launches, urgent demand and remarketing. Review the split every quarter using the measures below." },

      { type: "h2", text: "How to use SEO and PPC together in B2B" },
      {
        type: "list",
        items: [
          { lead: "Turn paid searches into SEO targets.", text: "The Google Ads search terms report shows exactly what people searched before they enquired. Build or improve organic pages for the best of them." },
          { lead: "See where you appear in both.", text: "Link Search Console to Google Ads and use the paid and organic report in Google Ads to see which searches you win in ads, organic results or both." },
          { lead: "Test turning ads off where you rank first.", text: "Pause ads on one search where you hold the top organic spot, compare total enquiries over four to eight weeks, and keep the saving if leads hold." },
          { lead: "Remarket to organic visitors.", text: "Build GA4 audiences of people who arrived through organic search and read service or pricing pages, then show them case-study ads while the buying group decides." },
          { lead: "Reuse your best ad headlines.", text: "Headlines that win the most clicks make strong page titles and meta descriptions." },
        ],
      },

      { type: "h2", text: "How to measure B2B SEO and PPC results" },
      { type: "p", text: "Measure both channels in leads and revenue, because a buying group often touches both before it enquires. These are the numbers to check each month." },
      { type: "image", src: "/insights/b2b-ga4-key-events-channel.jpg", alt: "GA4 Traffic acquisition table by session primary channel group, with the Key events column filtered to a quote lead event and all values blurred", caption: "GA4 Traffic acquisition with key events filtered to leads: compare Organic Search and Paid Search by enquiries, not just sessions. Values blurred." },
      {
        type: "table",
        head: ["Metric", "What it tells you", "Where to find it"],
        rows: [
          ["Qualified leads by channel", "How many sales-ready enquiries each channel brings", "GA4 key events (form submits, calls) by session default channel group, checked against your CRM"],
          ["Leads by landing page", "Which pages turn research into enquiries", "GA4: Reports > Engagement > Landing page, filtered to the lead key event"],
          ["Clicks, impressions and average position", "Whether your pages are rising for the searches that matter", "Google Search Console: Performance"],
          ["Cost per qualified lead", "Whether each ad campaign is profitable", "Google Ads, with CRM lead quality imported back"],
          ["Pipeline and revenue from search", "Whether search is making you money", "Your CRM, with the original source recorded on every lead"],
          ["Mentions in AI answers", "Whether ChatGPT and Google AI tools recommend you", "A fixed list of buyer questions checked monthly, plus AI referrals in GA4 and \"where did you hear about us\" on forms"],
        ],
      },

      { type: "h2", text: "B2B SEO case study: how a corporate relocation company grew organic leads" },
      { type: "p", text: "One of our clients, a B2B corporate relocation company serving the UK and international markets, competes on searches such as \"employee relocation\", which costs about $13 a click in Semrush's UK data. Instead of buying those clicks, we built organic pages that reach both the HR teams who buy and the employees who move." },
      { type: "p", text: "What we did:" },
      {
        type: "ol",
        items: [
          { lead: "Mapped both audiences:", text: "HR and global mobility teams, and relocating employees." },
          { lead: "Published answer-first country guides", text: "on work permits, visas and cost of living." },
          { lead: "Built service pages", text: "covering relocation policy, cost management and compliance." },
          { lead: "Added business listings and syndicated guides", text: "to build trust signals beyond the website." },
        ],
      },
      { type: "p", text: "What changed in Google Search Console:" },
      {
        type: "list",
        items: [
          { lead: "\"Employee relocation\":", text: "position 66 in February 2026, position 14 in August 2026." },
          { lead: "\"How to do employee relocation\":", text: "position 40 in March 2026, position 11 in August 2026." },
          { lead: "Daily search impressions:", text: "about 700 a day (13 to 22 January 2026), rising to about 2,600 a day (12 to 20 May 2026)." },
          { lead: "Organic traffic:", text: "up 81% from February to June 2026, with 100% of qualified leads arriving through country guides." },
        ],
      },

      { type: "h2", text: "B2B SEO and PPC plan: what to do in the first 12 months" },
      {
        type: "list",
        items: [
          { lead: "Months 1 to 3:", text: "fix technical issues, set up Search Console, GA4 lead tracking and CRM source fields, rewrite your main service and industry pages, and publish answers to the ten questions your sales team hears most. Run PPC on your brand name, your highest-intent service searches and remarketing." },
          { lead: "Months 4 to 6:", text: "publish cost guides, comparisons and case studies, get listed in the directories and trade associations your buyers trust, and add the best converting paid searches to your SEO list." },
          { lead: "Months 7 to 9:", text: "push pages ranking in positions 4 to 15 into the top three, start checking a fixed list of buyer questions in AI tools each month, and build founder and team content on LinkedIn." },
          { lead: "Months 10 to 12:", text: "compare cost per qualified lead by channel, test turning off ads where you rank first, and move the saving into new content and authority." },
        ],
      },
      { type: "p", text: "If you sell to consumers as well, our guide to [SEO vs PPC for B2C](/insights/seo-vs-ppc-for-b2c) covers that side. For the bigger picture of how AI is changing search, read our post on [whether AI will replace SEO](/insights/will-ai-replace-seo)." },
    ],
    faq: [
      { q: "Is SEO or PPC better for B2B?", a: "For long-term lead generation, SEO and AEO, because they reach every member of the buying group during research, cost nothing per click and are the only route into AI answers. PPC is a useful addition for urgent demand, launches and remarketing." },
      { q: "What is AEO in B2B marketing?", a: "AEO (answer engine optimisation) is making your company the answer that AI tools such as ChatGPT, Perplexity and Google AI Mode give when buyers ask questions or ask for a shortlist of suppliers." },
      { q: "How much does a B2B Google Ads click cost in the UK?", a: "It varies widely by sector. In Semrush's UK data, \"freight forwarding services\" is about $4 a click, \"office removals\" about $15 and \"payroll software\" about $39." },
      { q: "When should a B2B company start SEO?", a: "As early as possible. SEO usually takes three to six months to bring meaningful results, so starting before you need the leads means it is ready when you do." },
      { q: "What happens if a B2B company only uses PPC?", a: "It pays for every click from every member of the buying group, absorbs rising click costs, misses the research where favourites form, rarely appears in AI answers and loses visibility the day spending stops." },
      { q: "Do Google Ads help SEO rankings?", a: "No. Google states that paid ads do not affect organic rankings. The two can still help each other: ad data shows which searches convert, and organic pages improve ad landing pages." },
      { q: "How do I work out my break-even cost per click?", a: "Multiply profit per client by your lead-to-client rate and your visit-to-lead rate. With £2,800 profit per client, a 15% close rate and a 2% enquiry rate, the break-even is £8.40 a click." },
    ],
  },
  {
    slug: "seo-vs-ppc-for-b2c",
    seoTitle: "SEO vs PPC for B2C in 2027: Which Should You Use? | MAAI",
    title: "SEO vs PPC for B2C in 2027: How to Plan SEO, AEO and Paid Search Together",
    description:
      "SEO vs PPC for B2C brands in 2027: how SEO and AEO work in plain English, when to start each, what happens if you only run ads, how the plan differs for ecommerce, D2C, marketplace, local and subscription businesses, and which metrics to track.",
    date: "2026-11-01",
    author: "team",
    topics: ["B2C", "SEO - Begins"],
    industries: [],
    image: "/selfstorage/seo.jpg",
    intro:
      "Before anyone buys a sofa, a skincare product, a holiday or a storage unit, they ask questions. Which size fits my room? Is this ingredient safe for sensitive skin? Is it cheaper to book direct? Those questions go into Google and, more and more, into ChatGPT and Google's AI Mode. The brands that answer them get seen and trusted first, and that is what SEO and AEO do. PPC buys a place at the moment someone is ready to buy. This guide explains, in plain English, how each one works for B2C businesses in 2027, when to start each, what happens if you rely only on ads, how the plan changes for ecommerce, D2C, marketplace, local and subscription businesses, and how to measure it.",
    tldr: [
      "Consumers search their questions long before they buy. SEO makes your brand the answer in Google; AEO makes it the answer in AI tools such as ChatGPT and Google's AI Mode.",
      "PPC buys visibility at the moment of purchase, and it is useful for launches, peak seasons and bringing back people who already visited. It stops working the day you stop paying.",
      "Start SEO as early as possible, ideally before launch, because it takes three to six months to build. Use PPC to bring in sales while SEO grows.",
      "Brands that only run ads pay for every visit and every return visit, and click costs keep rising: the average Google Ads cost per click went from $4.66 in 2024 to $5.42 in 2025 (WordStream by LocaliQ).",
      "The plan depends on your business model: an ecommerce retailer, a D2C brand, a marketplace seller, a local business and a subscription brand each need SEO and PPC for different jobs.",
    ],
    body: [
      { type: "h2", text: "SEO vs PPC for B2C: what is the difference?" },
      { type: "image", src: "/insights/b2c-google-serp-velvet-sofa.jpg", alt: "Google UK results for velvet sofa showing an AI Overview, Shopping ads and an organic result", caption: "Google UK results for \"velvet sofa\": the AI Overview, Shopping ads and organic results all compete on one page." },
      { type: "p", text: "Both put your business in front of people who are searching. The difference is how you earn that place and how long it lasts." },
      {
        type: "list",
        items: [
          { lead: "SEO (search engine optimisation)", text: "earns your website a place in Google's free results. You invest time and expertise in your website and content. Once a page ranks, it keeps bringing visitors without paying per click." },
          { lead: "AEO (answer engine optimisation)", text: "makes your brand the answer that AI tools give. When someone asks ChatGPT, Perplexity or Google's AI Mode \"which running shoes are best for flat feet?\", AEO is what gets your brand named and linked in the reply." },
          { lead: "PPC (pay-per-click)", text: "buys a place in the paid results above or beside the free ones. You pay each time someone clicks your ad. Visibility starts immediately and ends the moment your budget stops." },
        ],
      },
      { type: "p", text: "In 2027 these are three parts of one search plan. AEO is growing fast as a search topic in its own right: \"aeo\" has around 3,600 monthly searches in the UK and 22,200 in the US, according to Semrush, because consumers now ask AI tools the same questions they used to type into Google." },

      { type: "h2", text: "How SEO and AEO work for B2C brands, in plain English" },
      { type: "p", text: "Think about how you shop for anything that costs more than a few pounds. You rarely search for a product once and buy it. You have questions, and you look for answers first." },
      { type: "p", text: "Take someone buying a sofa. Over two or three weeks, they might search:" },
      {
        type: "ol",
        items: [
          { lead: "A problem question:", text: "\"what size sofa for a small living room\"." },
          { lead: "A comparison question:", text: "\"fabric or leather sofa with a dog\"." },
          { lead: "A shortlist question:", text: "\"best sofa brands UK\" or, in ChatGPT, \"which sofa brands are durable and under £1,500?\"." },
          { lead: "A trust question:", text: "\"Brand X sofa reviews\" and \"Brand X delivery time\"." },
          { lead: "A buying search:", text: "\"Brand X three seater velvet sofa\"." },
        ],
      },
      { type: "p", text: "Every one of those questions is a chance to be found. The brand whose guide answers question 1, whose comparison answers question 2, and which AI tools mention for question 3 is already familiar and trusted by question 4. By the time the shopper reaches the buying search, they are searching for that brand by name." },
      { type: "p", text: "That is what SEO and AEO do: they make your brand the helpful answer at each question, so you are part of the decision from the start. [Google](https://business.google.com/in/think/consumer-insights/navigating-purchase-behavior-and-decision-making/)'s own research calls this stage of shopping the \"messy middle\": after studying 310,000 simulated purchase decisions, it found people loop between exploring options and narrowing them down, again and again, before they buy." },
      { type: "h3", text: "What Google looks for when it ranks a page" },
      { type: "p", text: "Behind the scenes, Google sends software to read your pages, stores them, and decides which page best answers each search. It looks at three things, which is where the technical side of SEO comes in:" },
      {
        type: "list",
        items: [
          { lead: "Can Google read the page?", text: "Technical SEO makes sure your pages load quickly, work on mobile and can be found and stored by Google." },
          { lead: "Does the page answer the question?", text: "On-page SEO and content make each page clearly match what people search, with helpful, specific information." },
          { lead: "Can the page be trusted?", text: "Reviews, links and mentions from other trusted websites tell Google your brand is credible." },
        ],
      },
      { type: "h3", text: "What AI tools look for when they recommend a brand" },
      { type: "p", text: "AI tools such as ChatGPT search the web, read the pages they find, and write an answer, often naming a few brands with links. They favour pages that answer the question directly, include specific facts (sizes, prices, materials, delivery times), and brands that other sites, reviews and forums also talk about. Ads are never used as sources, so AEO depends entirely on organic content and reputation. Our guide to [generative engine optimisation](/insights/generative-engine-optimization-b2b) explains how AI tools choose which brands to cite." },

      { type: "h2", text: "How PPC works for B2C brands" },
      { type: "p", text: "Every time someone searches, Google runs an auction among the advertisers bidding on that search. The price you pay per click depends on how much competitors bid and on your Quality Score, which Google bases on how likely people are to click your ad, how relevant it is, and how good your landing page is. The main ad types for consumer brands are:" },
      {
        type: "list",
        items: [
          { lead: "Search ads:", text: "text ads on specific searches, such as your brand name or \"buy velvet sofa\"." },
          { lead: "Shopping ads and Performance Max:", text: "product ads with photos and prices, built from your product feed in Google Merchant Center." },
          { lead: "Remarketing:", text: "ads shown to people who already visited your site or bought from you." },
        ],
      },
      { type: "p", text: "PPC is strongest at the end of the journey, when people search to buy, and for bringing them back. It is a weak and expensive way to reach people while they are still asking questions, because they may click many times before buying, and you pay for every click." },

      { type: "h2", text: "Is SEO or PPC better for B2C?" },
      { type: "p", text: "For long-term growth, SEO and AEO. They reach consumers at every question, cost nothing per click, and keep working. Most search clicks also go to organic results: [SparkToro and Datos](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/) found that for every 1,000 Google searches in the EU, 374 clicks go to the open web, while only about 1% of all clicks go to paid ads." },
      { type: "p", text: "PPC is better when you need speed, control or a second chance with a past visitor. The right answer for most consumer brands is SEO and AEO as the foundation, with PPC as a targeted addition." },
      {
        type: "table",
        head: ["You need to...", "Best channel", "Why"],
        rows: [
          ["Answer questions people ask before buying", "SEO and AEO", "These searches are many, varied and early; paying per click for them rarely pays back"],
          ["Appear in ChatGPT and Google AI answers", "AEO", "AI tools cite organic pages and reviews, never ads"],
          ["Sell to people searching to buy right now", "PPC and SEO together", "PPC catches them today while product and category pages build rankings"],
          ["Launch a new product or location", "PPC first, SEO in parallel", "New pages have no rankings yet"],
          ["Cover a seasonal peak", "PPC for the peak, SEO pages published weeks earlier", "Ads switch on instantly; seasonal pages rank again every year"],
          ["Win back visitors who did not buy", "PPC remarketing", "Only ads can follow up with a past visitor"],
          ["Lower your cost per customer over time", "SEO and AEO", "Organic visits carry no cost per click"],
        ],
      },

      { type: "h2", text: "When should a B2C business start SEO and PPC?" },
      { type: "p", text: "SEO takes time to build, usually three to six months before it brings meaningful traffic, so the best time to start is before you need it. PPC can start the day you are ready to sell. Here is how the timing works at each stage." },
      {
        type: "list",
        items: [
          { lead: "Before launch:", text: "start SEO. Plan your site structure around the questions and searches your customers use, write category and product pages properly from day one, and set up Google Search Console and GA4. Fixing a site after launch is slower and more expensive." },
          { lead: "First 6 months:", text: "PPC brings most of the sales while SEO builds. Keep PPC tight: your brand name, your best-selling products, and remarketing. Publish answers to your customers' most common questions every month." },
          { lead: "6 to 18 months:", text: "SEO starts carrying more traffic. Move budget from PPC to SEO on searches where your pages reach the top three, and use the saving to grow content and authority." },
          { lead: "Established brand:", text: "SEO and AEO carry most search visits. PPC focuses on launches, peak seasons, remarketing and protecting your brand name." },
        ],
      },
      { type: "p", text: "If you are already running ads and have never invested in SEO, start now. Every month you wait is another month of paying for clicks you could be earning." },

      { type: "h2", text: "What happens if you skip SEO and only run PPC?" },
      { type: "p", text: "Many consumer brands grow quickly on ads, then find growth getting harder and more expensive every year. These are the reasons." },
      {
        type: "list",
        items: [
          { lead: "Your cost per customer keeps rising.", text: "WordStream by LocaliQ's benchmarks, based on more than 16,000 campaigns, found the average cost per click rose from $4.66 in 2024 to $5.42 in 2025, with increases in 87% of industries. You pay that rise every year just to stand still." },
          { lead: "You pay for every return visit.", text: "Shoppers come back several times before buying. Each time they click your ad, you pay again." },
          { lead: "You miss the questions.", text: "Ads are too expensive to cover the hundreds of questions people ask before buying, so competitors who answer them become the brand people trust." },
          { lead: "You are invisible in AI answers.", text: "When shoppers ask ChatGPT for recommendations, ads-only brands rarely appear." },
          { lead: "Traffic stops when spending stops.", text: "A cash-flow squeeze or a quiet month removes you from search overnight." },
          { lead: "You build nothing you own.", text: "After years of spend, you have no rankings or content that keep working without a budget." },
        ],
      },

      { type: "h2", text: "How SEO and PPC work for different B2C business models" },
      { type: "p", text: "The balance between SEO, AEO and PPC depends far more on how you sell than on what you sell." },
      { type: "h3", text: "Ecommerce retailers (selling many brands)" },
      { type: "p", text: "Retailers compete on product and category searches that people already make, such as \"Nike Pegasus 41\" or \"women's waterproof jacket\". Demand already exists, so the job is to capture it at scale." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "category pages, faceted navigation that does not create duplicate pages, product pages with full specifications and reviews, product structured data and free product listings in Google Shopping." },
          { lead: "PPC role:", text: "Shopping ads and Performance Max on best sellers and high-margin products, remarketing to basket abandoners." },
          { lead: "Watch out for:", text: "thin, copied manufacturer descriptions, which make thousands of product pages hard to rank." },
        ],
      },
      { type: "h3", text: "D2C brands (selling your own products)" },
      { type: "p", text: "A D2C brand sells its own products, often in a category where shoppers do not yet know its name. Few people search for the brand at first, so the job is to create demand and earn trust, mostly through the questions people ask before they know which brand they want." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "content that answers the problem your product solves (\"how to stop a dog pulling on the lead\"), comparison pages against alternatives, ingredient or material explainers, and strong reviews." },
          { lead: "AEO focus:", text: "being named when people ask AI tools for recommendations in your category, which depends on reviews, press coverage and community mentions as much as your own site." },
          { lead: "PPC role:", text: "protect your brand name, test which messages and products resonate, and remarket to visitors. Social ads usually create the first awareness, and search captures it." },
        ],
      },
      { type: "h3", text: "Marketplace sellers (Amazon, Etsy, eBay)" },
      { type: "p", text: "Sellers who rely on marketplaces depend on each platform's own search and ads, and pay fees on every sale. SEO on Google helps build a direct channel the marketplace cannot take away." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "optimise product titles and descriptions for the marketplace's search, then build your own site with brand and product pages so people who search your name on Google can buy direct." },
          { lead: "PPC role:", text: "marketplace ads for launches and ranking new listings, and Google brand ads if competitors or resellers bid on your name." },
        ],
      },
      { type: "h3", text: "Local and service businesses" },
      { type: "p", text: "Salons, clinics, gyms, trades, removals, storage and other local businesses win most customers from \"near me\" and town-name searches. Google's map results and AI answers both lean heavily on local signals." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "a complete Google Business Profile, one page per service and location, consistent contact details across directories, and a steady flow of detailed reviews." },
          { lead: "AEO focus:", text: "answering cost and process questions (\"how much does a house move cost\") so AI tools quote you." },
          { lead: "PPC role:", text: "local search ads and call ads for busy seasons, new locations or services with urgent demand." },
        ],
      },
      { type: "h3", text: "Subscription and app businesses" },
      { type: "p", text: "Meal kits, streaming, fitness apps and other subscriptions depend on customers staying for months, so a customer is worth far more than their first payment. People compare options carefully before signing up." },
      {
        type: "list",
        items: [
          { lead: "SEO focus:", text: "comparison and \"alternatives\" pages, honest pricing explanations, and how-it-works content." },
          { lead: "AEO focus:", text: "being recommended when people ask AI tools to compare services." },
          { lead: "PPC role:", text: "brand protection, free-trial offers on high-intent searches, and win-back campaigns for cancelled subscribers." },
        ],
      },

      { type: "h2", text: "How to set your B2C SEO and PPC budget" },
      { type: "p", text: "Use your own numbers to decide which searches are worth paying for. You need your average order value, gross margin and website conversion rate." },
      {
        type: "list",
        items: [
          { lead: "Profit per order", text: "= average order value × gross margin." },
          { lead: "The most you can pay per click", text: "= profit per order × conversion rate." },
        ],
      },
      { type: "p", text: "Example: a home goods brand with a £60 average order, a 40% margin and a 2.5% conversion rate makes £24 profit per order, so it can pay up to £0.60 per click before losing money on the first sale. If a search costs £1.50 a click in Google Ads Keyword Planner, that search should be won with SEO, while searches under £0.60 can be good PPC targets. If customers usually buy again, multiply by the number of orders you expect per customer." },
      { type: "p", text: "Then set the split by stage: most of the budget in PPC while a new site builds, shifting steadily to SEO and AEO as pages rank, with PPC kept for launches, peaks and remarketing. Review the split every quarter using the metrics below." },

      { type: "h2", text: "How to make SEO and PPC work together" },
      {
        type: "list",
        items: [
          { lead: "Turn paid searches into SEO targets.", text: "The search terms report in Google Ads shows exactly what people searched before they bought. Build or improve organic pages for the best of them." },
          { lead: "See where you appear in both.", text: "Link Google Ads to Search Console and use the paid and organic report to see which searches you win in ads, organic results or both." },
          { lead: "Test turning ads off where you rank first.", text: "Pause ads on one search where you hold the top organic spot, compare total clicks and sales over four weeks, and keep the saving if sales hold." },
          { lead: "Reuse your best ad headlines.", text: "Headlines that win the most clicks make strong page titles and meta descriptions." },
          { lead: "Remarket to organic visitors.", text: "Build GA4 audiences of people who arrived through organic search and viewed products, then show them remarketing ads. [Baymard Institute](https://baymard.com/lists/cart-abandonment-rate) puts the average basket abandonment rate at 70.22%, so this audience is valuable." },
        ],
      },

      { type: "h2", text: "Which metrics show SEO and PPC are working?" },
      { type: "image", src: "/insights/b2c-ga4-traffic-acquisition.jpg", alt: "GA4 Traffic acquisition report showing sessions, engagement rate, key events and revenue by channel", caption: "GA4 Reports > Acquisition > Traffic acquisition: compare sessions, engagement rate, key events and revenue by channel. Values blurred." },
      { type: "image", src: "/insights/b2c-ga4-landing-page.jpg", alt: "GA4 Landing page report showing sessions, users, engagement time and key events by page", caption: "GA4 Reports > Engagement > Landing page: see which pages bring sessions, new users and key events. Values blurred." },
      { type: "p", text: "Look at both channels together, because customers use both before buying. These are the reports and numbers to check each month." },
      {
        type: "table",
        head: ["Metric", "What it tells you", "Where to find it"],
        rows: [
          ["Organic share of revenue", "How much of your revenue no longer depends on paying for clicks", "GA4: Reports > Acquisition > Traffic acquisition, compare Organic Search with Paid Search"],
          ["Revenue or conversions by landing page", "Which pages turn search visits into sales", "GA4: Reports > Engagement > Landing page"],
          ["Clicks, impressions and average position", "Whether your pages are rising for the searches that matter", "Google Search Console: Performance"],
          ["Cost per acquisition and return on ad spend", "Whether each ad campaign is profitable", "Google Ads: Campaigns"],
          ["Blended cost per customer", "Total marketing spend divided by new customers; the clearest sign the mix is improving", "Your finance data and ecommerce platform"],
          ["Mentions in AI answers", "Whether ChatGPT and Google AI tools recommend you", "A fixed list of customer questions checked monthly, plus AI referrals in GA4"],
        ],
      },

      { type: "h2", text: "B2C SEO plan: what to do in the first 12 months" },
      { type: "p", text: "Here is how the plan typically comes together for a consumer brand with a young website." },
      {
        type: "list",
        items: [
          { lead: "Months 1 to 3:", text: "fix technical issues, set up Search Console and GA4, rewrite the top category and product pages, add product structured data, and publish answers to your ten most common customer questions. Run PPC on your brand name, best sellers and remarketing." },
          { lead: "Months 4 to 6:", text: "publish comparison and buying guides, start earning reviews and press mentions, and add the best converting paid searches to your SEO list." },
          { lead: "Months 7 to 9:", text: "push pages ranking in positions 4 to 15 into the top three, publish seasonal pages ahead of peak, and run PPC for the peak itself." },
          { lead: "Months 10 to 12:", text: "check organic share of revenue and blended cost per customer, test turning off ads where you rank first, and move the saving into new content." },
        ],
      },
      { type: "p", text: "For the bigger picture of how AI is changing search, read our post on [whether AI will replace SEO](/insights/will-ai-replace-seo)." },
    ],
    faq: [
      { q: "Is SEO or PPC better for B2C businesses?", a: "For long-term growth, SEO and AEO, because they reach shoppers at every question they ask and cost nothing per click. PPC is a useful addition for launches, seasonal peaks and remarketing." },
      { q: "What is AEO in B2C marketing?", a: "AEO (answer engine optimisation) is making your brand the answer that AI tools such as ChatGPT, Perplexity and Google's AI Mode give when shoppers ask questions or ask for recommendations." },
      { q: "When should a B2C business start SEO?", a: "As early as possible, ideally before launch. SEO usually takes three to six months to bring meaningful traffic, so starting early means it is ready when you need it." },
      { q: "What happens if a consumer brand only uses PPC?", a: "It pays for every visit and return visit, absorbs rising click costs each year, misses the questions shoppers ask before buying, rarely appears in AI answers and loses all search visibility when spending stops." },
      { q: "Is SEO different for D2C brands and ecommerce retailers?", a: "Yes. Retailers capture existing searches for products and categories, so category and product pages matter most. D2C brands often need to create demand, so content that answers the problems their product solves, comparisons and reviews matter most." },
      { q: "How much can I afford to pay per click?", a: "Multiply your profit per order by your conversion rate. With £24 profit per order and a 2.5% conversion rate, the break-even is about £0.60 a click." },
    ],
  },
];

export const POSTS = ALL_POSTS.filter((p) => !p.draft || process.env.INSIGHTS_PREVIEW_DRAFTS === "1");

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
