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

export const POSTS = [
  {
    slug: "generative-engine-optimization-b2b",
    title: "B2B AEO and GEO Strategy 2027: The Complete Guide to Generative Engine Optimisation for B2B Companies",
    description:
      "Generative engine optimisation (GEO) for B2B companies: what GEO and AEO mean, how ChatGPT, Perplexity and Google's AI choose which brands to cite, an eight-step B2B strategy, how to measure it, and real client results.",
    date: "2026-11-03",
    author: "team",
    topics: ["AEO/GEO", "B2B"],
    industries: ["Removals & Relocation", "Logistics", "Supply chain"],
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
      { type: "p", text: "B2B buyers were early adopters of AI research. [Forrester's State of Business Buying 2026](https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/) reports that generative AI tools were the most cited meaningful interaction for researching B2B purchases in 2025. The [TrustRadius 2026 B2B Buying Disconnect Report](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/), based on 1,862 technology buyers surveyed in January 2026, shows how that research works in practice." },
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
      { type: "p", text: "This matters even more because B2B shortlists form early. [6sense's 2025 Buyer Experience Report](https://www.businesswire.com/news/home/20251112018032/en) found that 94% of buying groups had already picked a favoured vendor before first contact. Our [pillar guide to B2B SEO](/insights/seo-for-b2b-companies) explains that journey touchpoint by touchpoint. GEO is how you make sure AI tools introduce you during the part of that journey that happens without you." },

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
      { type: "p", text: "AI tools quote clear, specific statements. Put a direct one or two sentence answer under each heading, then expand. Specific, sourced statements are what the [GEO research paper](https://arxiv.org/abs/2311.09735) found AI engines reward." },
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
      { type: "p", text: "Both camps have a point. The sceptics are right that AI results are less consistent than Google rankings: answers change between runs, models and locations, and there is no single position to report. The supporters are right that AI referrals convert well in B2B, because a buyer who arrives after an AI recommendation has usually already done their research. Paid ads are never the source an AI tool cites, which is why we explain in [SEO vs PPC for B2B](/insights/seo-vs-ppc-for-b2b) that organic visibility is the only route into these answers." },
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
    title: "B2B SEO: The Customer Journey and How to Plan SEO for B2B Companies",
    description:
      "A complete guide to B2B SEO: the real B2B customer journey, why B2B companies now need an active digital presence, the two audiences B2B SEO must reach, and how to plan it step by step.",
    date: "2026-11-03",
    author: "team",
    topics: ["SEO - Begins", "B2B"],
    industries: [],
    image: "/Saas/aeo.jpg",
    intro:
      "B2B buyers rarely pick up the phone first. They search, compare, ask AI tools and check what others say, often for weeks, before they speak to a supplier. By the time they make contact, most have already picked a favourite. This guide explains how the B2B customer journey really works today, why every B2B company now needs an active digital presence, the two audiences B2B SEO has to reach, and how to plan SEO for a B2B company step by step, on your website and beyond it.",
    tldr: [
      "B2B buyers do most of their research before they talk to a supplier, and 94% of buying groups already have a favoured vendor by first contact (6sense, 2025).",
      "Relationships and events still matter, but younger buyers, new companies and AI-led research mean you have to be found and verified online.",
      "B2B SEO has to reach two audiences: the direct buyer and the customer's customer, who often shapes the decision.",
      "Plan B2B SEO around the buying group, buyer intent and deal value, then build technical foundations, proof and authority.",
      "B2B SEO now extends beyond the website to LinkedIn, founder profiles and X, where buyers also search and leads also come from.",
    ],
    body: [
      { type: "h2", text: "What B2B SEO is" },
      { type: "p", text: "B2B SEO is the work of making a business visible in search engines and AI tools when other businesses research a product or service it sells. It covers the website, its content and its technical health, and increasingly the wider web of platforms where B2B buyers look for answers and check suppliers." },
      { type: "p", text: "B2B search terms are smaller and more specific than consumer ones, which makes them easier to win. \"B2B SEO\" itself has 1,300 monthly searches in the UK with a keyword difficulty of 19 out of 100, against 6,600 searches and a difficulty of 47 in the US. Niche B2B searches are often even less competitive, and each one can carry a contract worth far more than its volume suggests." },
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
      { type: "p", text: "The chart shows that demand for B2B SEO topics is real in both markets, and around four to five times larger in the US. For a UK-focused B2B company, the smaller UK numbers are an advantage: fewer competitors are working hard for them." },

      { type: "h2", text: "The B2B customer journey, touchpoint by touchpoint" },
      { type: "p", text: "B2B buying is rarely a straight line from search to sale. It is a series of touchpoints spread across weeks or months, involving several people inside the buying company and some outside it. Forrester's State of Business Buying 2026 found that, on average, 13 internal stakeholders and nine external participants influence a B2B purchase." },
      {
        type: "chart",
        title: "People who influence a B2B purchase decision (average)",
        series: [{ name: "People", color: "#1C3F2E" }],
        rows: [
          { label: "Internal stakeholders", values: [13] },
          { label: "External participants", values: [9] },
        ],
        source: {
          label: "Forrester, The State of Business Buying 2026, reported by Digital Commerce 360",
          href: "https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/",
          note: "January 2026",
        },
      },
      { type: "p", text: "Those 22 people rarely research the same way or ask the same questions. Here is how a typical journey unfolds, using a business reviewing its logistics as an example:" },
      {
        type: "ol",
        items: [
          { lead: "The trigger.", text: "Something costs time or money: delivery costs rise, a contract ends, or the business expands into a new market. Someone starts searching, often with a problem-led question such as \"why are our delivery costs rising\"." },
          { lead: "Independent research.", text: "The person asks Google, ChatGPT or Perplexity, reads guides and comparisons, and checks what peers say on LinkedIn or Reddit. No supplier knows this is happening." },
          { lead: "The buying group forms.", text: "Operations, finance, procurement and a director get involved. Each brings their own questions: cost, risk, contracts, service levels." },
          { lead: "The shortlist.", text: "The group searches for suppliers, for example \"best 3PL providers UK\", and builds a shortlist from search results, AI answers and recommendations." },
          { lead: "Online verification.", text: "Before any call, they check each supplier's website, case studies, reviews, LinkedIn pages and the founder's profile. A weak or outdated presence can remove a supplier at this stage without anyone noticing." },
          { lead: "First contact and evaluation.", text: "Only now do they speak to suppliers, compare proposals and check references." },
          { lead: "Decision, onboarding and renewal.", text: "After the contract, the relationship continues. Good service turns into renewals, referrals and reviews that feed the next buyer's research." },
        ],
      },
      { type: "p", text: "The research stage is where most suppliers are won or lost. 6sense's 2025 Buyer Experience Report, based on more than 4,000 buyers, found that 94% of buying groups had already identified a favoured vendor before first contact, and bought from that favourite 77% of the time. Buyers now do roughly 60% of their research before engaging sellers. If your business is invisible during that research, it is rarely on the shortlist." },
      { type: "p", text: "Most B2B websites only cover the last stages: services, case studies and a contact form. Buyers in the earlier stages find someone else first, and by the time they reach evaluation, the favourite is already set." },

      { type: "h2", text: "Why B2B companies now need an active digital presence" },
      { type: "p", text: "B2B has always needed some digital presence. What has changed is how much of the decision now happens online, and how many buyers arrive with no prior relationship at all." },
      {
        type: "list",
        items: [
          { lead: "Buyers verify suppliers online.", text: "Even when a deal starts with a referral, the buying group checks the website, case studies, reviews and LinkedIn before it commits. A thin website raises doubts that a sales call then has to repair." },
          { lead: "New buyers have no relationship with you.", text: "Younger companies that need your service may not have the contacts or introductions older firms relied on. Search and AI answers are how they find suppliers." },
          { lead: "A new generation is buying.", text: "Forrester found that millennials and Gen Z make up 64% of business buyers. They consult more information sources and find third-party content more influential than vendor material." },
          { lead: "Fewer first meetings happen in person.", text: "Since the pandemic, many buyers attend fewer conferences and trade events, so fewer relationships begin face to face." },
          { lead: "AI tools are now a first stop.", text: "Forrester reports that generative AI tools were the most cited meaningful interaction for researching B2B purchases in 2025, and TrustRadius found 63% of software buyers used AI during their research in 2026. AI tools cite businesses that are visible and trusted across the web." },
        ],
      },
      {
        type: "quote",
        text: "There are younger companies that need your service but have no relationship with you and no right contacts. They will find you online, and they will verify you online before they ever call. That is why an active website matters more now than it ever did.",
        author: "Kriti",
        where: "Founder, MAAI",
      },

      { type: "h2", text: "The two audiences B2B SEO has to reach" },
      { type: "p", text: "B2C SEO usually reaches one person: the buyer. B2B SEO has to reach two different sets of people, and that changes both the journey and the content it needs." },
      {
        type: "list",
        items: [
          { lead: "The direct customer.", text: "The people who evaluate, approve and sign: the buying group." },
          { lead: "The customer's customer.", text: "The people your client serves, who use or feel the result of your service. They may never sign anything, but what they say and search for shapes the direct customer's view." },
        ],
      },
      { type: "p", text: "Take a corporate relocation company we work with. Its direct customers are HR and global mobility teams, who choose a relocation partner. Its indirect customers are the employees who actually move, along with their families. Employees search for answers about visas, housing, schools and moving costs in their destination country. When a relocation company answers those questions well, employees know and trust the brand, and that reputation reaches the mobility team that makes the decision." },
      { type: "p", text: "So we built content for both. Answer-optimised, country-specific guides targeted the questions relocating employees ask, while service and comparison pages targeted HR and mobility teams. Between February and June 2026, organic traffic grew 81%, and 100% of the company's qualified leads came directly through specific country blog posts. The content written for the customer's customer brought in the direct customer." },
      {
        type: "table",
        head: ["Audience", "What they search for", "Content that reaches them"],
        rows: [
          ["Direct customer (HR, mobility, procurement)", "Suppliers, pricing, compliance, service levels, case studies", "Service and industry pages, comparisons, case studies, pricing guides"],
          ["Customer's customer (relocating employees)", "Visas, housing, schools, moving costs in a country", "Country guides, checklists, FAQs, answer-optimised blog posts"],
        ],
      },
      {
        type: "quote",
        text: "B2B has two customer sets: the direct customer, and the customer of the customer. If a relocation company has a strong reputation for moving employees well and is active online solving their queries, it has a far better chance of closing the deal with the mobility team. Digital presence is about showing what you do, clearly, to everyone who influences the decision.",
        author: "Kriti",
        where: "Founder, MAAI",
      },

      { type: "h2", text: "How B2B SEO differs from B2C SEO" },
      { type: "p", text: "B2C SEO wins by reaching many individual buyers quickly. B2B SEO wins by being the most trusted answer for a small group of the right people, across a longer journey and two audiences. That changes the traffic you should expect, how leads arrive and how you measure success." },
      {
        type: "table",
        head: ["", "B2B SEO", "B2C SEO"],
        rows: [
          ["Buyer", "A buying group, often 10 or more people", "Usually one person"],
          ["Audiences", "Direct buyers and the customer's customer", "The end customer"],
          ["Buying time", "Weeks to months", "Minutes to days"],
          ["Search volume", "Low, specific searches", "High, broad searches"],
          ["Traffic to expect", "Smaller, highly qualified traffic", "Large traffic volumes"],
          ["Content that converts", "Case studies, comparisons, industry and country guides", "Product pages, reviews, offers"],
          ["Success measure", "Qualified leads, pipeline and contract value", "Revenue and conversion rate"],
        ],
      },
      { type: "p", text: "In practice, a B2B site can grow strongly while its traffic stays modest. A few hundred visits a month from the right companies can be worth more than tens of thousands of consumer visits, because each lead may carry a contract that runs for years." },

      { type: "h2", text: "How to plan SEO for a B2B company" },
      { type: "p", text: "A B2B SEO plan starts with the business and its buyers, and only then moves to keywords and content. These are the steps we follow with B2B clients." },
      { type: "h3", text: "1. Map the buying group and both audiences" },
      { type: "p", text: "List everyone who influences the deal: the decision-maker, finance, procurement, the end users and the customer's customer. Note what each person worries about and what they search for. Sales calls, client emails and support tickets are the best sources, because your team already hears the questions your website should answer." },
      { type: "h3", text: "2. Research keywords by intent and deal value" },
      { type: "p", text: "Use tools such as Semrush and Google Search Console to check search demand and keyword difficulty, then sort topics by intent: problem, comparison, supplier and decision searches. In B2B, do not dismiss low-volume keywords. A search with 30 monthly searches can be valuable if the people searching are ready to buy, so weigh volume against the value of one client over their lifetime." },
      { type: "h3", text: "3. Fix the technical foundations" },
      { type: "p", text: "Make sure search engines and AI crawlers can crawl and index your key pages. Check site architecture, internal linking, Core Web Vitals, mobile experience and schema markup. Remove duplicate, thin or broken pages. Technical SEO is invisible to buyers, but without it nothing else ranks or gets cited." },
      { type: "h3", text: "4. Build service, industry and location pages" },
      { type: "p", text: "Create one clear page for each service, each industry you serve and, where relevant, each market or country. These are the pages that turn research into enquiries, and they are what buyers check during online verification." },
      { type: "h3", text: "5. Create content for every stage and both audiences" },
      { type: "p", text: "Write guides for problem searches, comparisons for evaluation, and answer-optimised content for the questions your client's customers ask. Each piece should carry original data, real examples or expert input, because that is what search engines and AI tools reward." },
      { type: "h3", text: "6. Add proof everywhere" },
      { type: "p", text: "Publish case studies, results, client logos where allowed, reviews and testimonials. Buyers and AI tools both look for evidence before they trust a supplier." },
      { type: "h3", text: "7. Build authority beyond your site" },
      { type: "p", text: "Earn links and mentions from industry publications, associations, directories and partners. Relevance matters more than volume: one link from a respected trade publication in your sector does more than many generic links." },
      { type: "h3", text: "8. Optimise for AI answers" },
      { type: "p", text: "Structure content with clear headings, short direct answers and FAQs, add schema markup, and keep facts consistent across your site and profiles. This is answer engine optimisation (AEO) and generative engine optimisation (GEO), and it helps AI tools cite you when buyers ask for recommendations." },
      { type: "h3", text: "9. Measure pipeline as well as traffic" },
      { type: "p", text: "Connect Search Console and analytics to your CRM so you can see which pages bring qualified leads. Track rankings for buyer-intent searches, enquiries from organic search, and whether your brand appears in AI answers for your category. Expect early movement within three to six months, with leads following as pages climb." },

      { type: "h2", text: "B2B SEO beyond the website: LinkedIn, founder profiles and X" },
      { type: "p", text: "B2B buyers do not only search on Google. They search LinkedIn for suppliers and people, read founders' posts to judge expertise, and follow industry conversations on X. These platforms bring traffic and, increasingly, direct leads. Public posts can also appear in Google results and in AI answers, which makes them part of your search footprint." },
      {
        type: "list",
        items: [
          { lead: "Company LinkedIn page.", text: "Keep it complete and active, with clear services, industries served and regular posts that link back to your best content." },
          { lead: "Founder and team LinkedIn profiles.", text: "Buyers trust people more than logos. A founder who shares real lessons, results and opinions builds the familiarity that 6sense found decides most shortlists." },
          { lead: "X.", text: "Useful for joining industry conversations, sharing quick insights and reaching journalists and partners who can earn you mentions." },
          { lead: "Repurposing.", text: "Turn each long guide into posts, short threads and visuals, so one piece of research works across every platform your buyers use." },
        ],
      },
      { type: "p", text: "Treat these platforms as part of the same B2B SEO plan. The website holds the depth and converts the lead, while LinkedIn and X build the trust and visibility that bring buyers to it." },
      { type: "p", text: "Buyers are also choosing to do more of this research without a salesperson. Gartner's 2026 sales survey found that 67% of B2B buyers prefer a rep-free buying experience, and 45% had already used AI during a recent purchase. If your company is not visible in search and AI answers, you are missing from the part of the journey buyers now complete on their own." },
      { type: "h2", text: "How small B2B companies can compete with big brands" },
      { type: "p", text: "A common worry is that larger competitors simply outspend you on links, content teams and influencers. A B2B service owner put it plainly on r/SEO:" },
      {
        type: "quote",
        text: "In my B2B service niche, my competitors are behemoths. So my question is, for B2B SEO, how do small companies compete?",
        author: "A B2B service owner",
        where: "r/SEO",
      },
      {
        type: "quote",
        text: "Videos not just in YouTube. As many social media as you can, posting by hand because they don't. Offering tips on your blog.",
        author: "u/BusyBusinessPromos",
        where: "r/SEO",
        href: "https://www.reddit.com/user/BusyBusinessPromos/",
      },
      { type: "p", text: "That reply points in the right direction. A small B2B company cannot outspend a market leader, but it can out-focus one. This is how we help smaller B2B clients compete:" },
      {
        type: "list",
        items: [
          { lead: "Own a niche.", text: "Large competitors cover everything at a general level. A smaller company can cover one industry, one service or one region in far more depth, which is what Google and AI tools reward." },
          { lead: "Use what only you know.", text: "Your own data, client results and on-the-ground experience cannot be copied by a bigger content team. Original insight earns links and citations." },
          { lead: "Target specific, high-intent searches.", text: "Industry, location and problem-specific searches often have low volume but very high intent, and big brands rarely bother with them." },
          { lead: "Show the people behind the company.", text: "Founder and team content on LinkedIn and video gives a small company a human voice that large brands struggle to match." },
          { lead: "Move faster.", text: "Small teams can publish, test and update in days. Speed matters when AI search and Google updates keep changing the rules." },
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Gartner: 67% of B2B buyers prefer a rep-free experience (2026)", href: "https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience" },
          { label: "Semrush Keyword Overview, search volumes and keyword difficulty (November 2026)", href: "https://www.semrush.com/analytics/keywordoverview/" },
          { label: "Forrester, The State of Business Buying 2026, reported by Digital Commerce 360 (January 2026)", href: "https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/" },
          { label: "6sense 2025 B2B Buyer Experience Report, Business Wire (November 2025)", href: "https://www.businesswire.com/news/home/20251112018032/en" },
          { label: "Forrester on millennial and Gen Z business buyers, Business Wire (February 2023)", href: "https://www.businesswire.com/news/home/20230215005358/en/Forrester-Generational-Shifts-Are-Disrupting-Traditional-Business-Buying-Behaviors-And-Necessitate-Reevaluating-Go-To-Market-Strategies" },
          { label: "TrustRadius 2026 B2B Buying Disconnect Report (July 2026)", href: "https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/" },
        ],
      },
    ],
    faq: [
      { q: "What is B2B SEO?", a: "B2B SEO is the work of making a business visible in search engines and AI tools when other businesses research a product or service it sells." },
      { q: "How is B2B SEO different from B2C SEO?", a: "B2B SEO reaches a buying group and the customer's customer across a longer journey, with lower search volumes and higher deal values. B2C SEO reaches individual buyers who decide quickly." },
      { q: "How long does B2B SEO take to work?", a: "Most B2B sites see early movement in rankings within three to six months. Qualified leads usually follow as pages climb for buyer-intent searches." },
      { q: "Is B2B SEO worth it if search volumes are low?", a: "Yes. One B2B contract can be worth many times the cost of a year of SEO, so a search with 30 monthly searches can be valuable if the people searching are ready to buy." },
      { q: "Should B2B companies use LinkedIn as part of SEO?", a: "Yes. LinkedIn company pages and founder profiles are where many B2B buyers research suppliers, and public posts can appear in search results and AI answers." },
    ],
  },
  {
    slug: "will-ai-replace-seo",
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
      {
        type: "sources",
        items: [
          { label: "SparkToro zero-click data, reported by TechWyse (June 2026)", href: "https://www.techwyse.com/news/reports-data/google-zero-click-searches-68-percent-2026" },
          { label: "Pew Research Center AI summary study, summarised by SISTRIX (July 2025)", href: "https://www.sistrix.com/blog/pew-research-ai-overviews-halve-click-through-rates/" },
          { label: "Ahrefs AI Overviews click-through study, reported by PPC Land (February 2026)", href: "https://ppc.land/googles-ai-summaries-now-swallow-58-of-clicks-that-once-went-to-websites/" },
          { label: "Google AI Mode passes 1 billion monthly users, SEO Worth (June 2026)", href: "https://seoworth.it.com/news/google-ai-mode-1-billion-users/" },
          { label: "ChatGPT user figures from OpenAI, compiled by Technology Checker", href: "https://technologychecker.io/blog/chatgpt-statistics" },
          { label: "Google Search Central: succeeding in AI search", href: "https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search" },
        ],
      },
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
    title: "SEO vs PPC for B2B Companies: Which One Drives Organic Growth?",
    description:
      "SEO vs PPC for B2B companies explained: how B2B buyers really research, how SEO drives organic growth and pipeline, what happens if you rely only on paid ads, where PPC helps, and how SEO works across SaaS, manufacturing, logistics, professional services and commercial property.",
    date: "2026-11-01",
    author: "team",
    topics: ["B2B", "SEO - Begins"],
    industries: ["Logistics", "Supply chain", "Real estate"],
    image: "/removals/foundation-dashboard.jpg",
    intro:
      "Most B2B companies are told the same thing at some point: SEO is slow, ads are fast. Both statements are true, and both miss the point. B2B buyers spend months researching, mostly on their own, and by the time they speak to a supplier most have already chosen a favourite. This guide compares SEO vs PPC for B2B companies in practical terms: how B2B buyers really research, how SEO drives organic growth and pipeline, what happens to companies that rely only on paid ads, where PPC genuinely helps, and how SEO works across the main B2B industries.",
    tldr: [
      "For B2B companies, SEO should lead. PPC is a useful addition for capturing urgent demand, testing new markets and staying in front of past visitors.",
      "B2B buyers spend 27% of their buying time researching independently online and only 17% meeting suppliers, according to Gartner.",
      "94% of buying groups already have a favoured vendor before first contact (6sense, 2025), and organic content is what reaches them during that early research.",
      "Relying only on ads means paying for every one of a buyer's repeat visits, absorbing rising click costs and being absent from the AI answers most buyers now use.",
      "Low search volumes are a strength in B2B: a search with 30 monthly searches can be worth a contract that runs for years.",
    ],
    body: [
      { type: "h2", text: "Why B2B marketing is a different decision from B2C" },
      { type: "p", text: "In B2C, one person usually decides, often within minutes or days. In B2B, a group of people researches over weeks or months, and the deal can be worth thousands or millions. That changes how search marketing should work." },
      {
        type: "list",
        items: [
          { lead: "Buying groups make the decision.", text: "[Forrester's State of Business Buying 2026](https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/) found that 13 internal stakeholders and nine external participants influence a typical purchase. Each has different questions." },
          { lead: "Long, research-heavy cycles.", text: "Buyers return to search many times before they make contact." },
          { lead: "Small search volumes, high value.", text: "A niche B2B search may have 50 searches a month, but one client can be worth more than a year of marketing." },
          { lead: "Trust is checked before anyone calls.", text: "Buyers verify suppliers through websites, case studies, reviews and LinkedIn before they shortlist." },
        ],
      },
      { type: "p", text: "If you sell to consumers, our guide to [B2C SEO vs PPC](/insights/seo-vs-ppc-for-b2c) covers the faster, emotion-led consumer journey." },

      { type: "h2", text: "How B2B buyers actually research" },
      { type: "p", text: "Gartner's research into the B2B buying journey describes six overlapping jobs buyers work through: identifying the problem, exploring solutions, building requirements, selecting suppliers, validating the choice and creating consensus inside the company. Buyers move back and forth between them, and most of that work happens without a supplier in the room." },
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
      { type: "p", text: "Buyers spend more time researching online on their own than meeting every potential supplier combined, and when they compare several suppliers, each one gets only around 5% of their time. Your website and the content buyers find through search are doing most of the selling before your sales team is involved." },
      { type: "p", text: "Other research points the same way. [6sense's 2025 Buyer Experience Report](https://www.businesswire.com/news/home/20251112018032/en) found that 94% of buying groups had already picked a favoured vendor before first contact. [Gartner's 2026 sales survey](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience) found that 67% of B2B buyers prefer a rep-free buying experience. And the [TrustRadius 2026 B2B Buying Disconnect Report](https://hginsights.com/news/trustradius-2026-b2b-buying-disconnect-report-reveals-ai-has-changed-how-buyers-research-but-not-what-they-trust/) found that 63% of software buyers used AI tools during their research. Our [B2B SEO guide](/insights/seo-for-b2b-companies) walks through this journey touchpoint by touchpoint." },

      { type: "h2", text: "How SEO drives organic growth for B2B companies" },
      { type: "p", text: "SEO (search engine optimisation) makes your website the most useful and findable answer to the questions your buyers search for, so it ranks in Google's organic results and gets cited in AI answers. In B2B, that means reaching each member of the buying group at each stage of their research." },
      { type: "h3", text: "Content for every buying job" },
      { type: "p", text: "Each stage of B2B research has its own searches, and each needs a different kind of page." },
      {
        type: "list",
        items: [
          { lead: "Problem identification:", text: "guides that explain causes and costs (\"why are our freight costs rising\")." },
          { lead: "Solution exploration:", text: "explainers comparing approaches (\"3PL vs in-house warehousing\")." },
          { lead: "Requirements building:", text: "checklists, specifications and buyer's guides." },
          { lead: "Supplier selection:", text: "service, industry and location pages, plus comparison pages." },
          { lead: "Validation:", text: "case studies, certifications, reviews and team profiles." },
          { lead: "Consensus creation:", text: "pricing guidance, ROI explanations and FAQs that finance and procurement can share internally." },
        ],
      },
      { type: "h3", text: "Why low search volume is an advantage" },
      { type: "p", text: "B2B searches are small and specific, so fewer competitors target them and keyword difficulty is often low. A page that ranks first for a search with 40 monthly searches may bring a handful of visitors a month, but if one of them becomes a client on a three-year contract, that page has paid for a year of SEO." },
      { type: "h3", text: "Why organic visibility compounds" },
      { type: "p", text: "Every page that ranks keeps working without a cost per click, and each new page strengthens the authority of the site. Over a long B2B sales cycle, the same organic page meets a buyer on their first search, their fifth and their tenth, at no extra cost." },

      { type: "h2", text: "Why SEO should lead B2B marketing" },
      {
        type: "list",
        items: [
          { lead: "It reaches buyers when they research alone.", text: "That is where most of the buying time goes, and where favourites are formed." },
          { lead: "It serves the whole buying group.", text: "Ads usually target a handful of supplier searches. Organic content can answer the questions of operations, finance, procurement and leadership." },
          { lead: "It is the route into AI answers.", text: "ChatGPT, Perplexity and Google's AI Overviews cite organic pages, never ads. Our [AEO and GEO guide](/insights/generative-engine-optimization-b2b) explains how to get cited." },
          { lead: "It builds the proof buyers check.", text: "Case studies, guides and expert content support the verification stage that ads cannot." },
          { lead: "It lowers cost per lead over time.", text: "Once pages rank, each extra lead costs less, while ad costs rise with every click." },
        ],
      },

      { type: "h2", text: "What happens if a B2B company relies only on PPC" },
      { type: "p", text: "Paid search can produce leads quickly, which is why some B2B companies run on ads alone. Over time, these problems tend to appear." },
      {
        type: "list",
        items: [
          { lead: "You pay for every return visit.", text: "A B2B buyer may search your category many times over months. Each click on your ad costs you again." },
          { lead: "B2B clicks are expensive, and getting more so.", text: "Semrush estimates about $13 a click for \"employee relocation\" and about $11 for \"3PL warehouse\" in the UK. WordStream by LocaliQ found average Google Ads costs per click rose from $4.66 in 2024 to $5.42 in 2025, with increases in 87% of industries." },
          { lead: "Small volumes run out quickly.", text: "With only a few dozen searches a month for your core terms, ads cannot scale far, and broader terms bring the wrong visitors." },
          { lead: "You miss the early research.", text: "Problem and exploration searches rarely convert directly, so ad budgets skip them, and competitors with good content become the favourite." },
          { lead: "You are absent from AI shortlists.", text: "Buyers who ask AI tools for suppliers see brands with strong organic content and reviews." },
          { lead: "Visibility ends when spend ends.", text: "A budget freeze removes you from search overnight, often in the middle of a buyer's research." },
        ],
      },

      { type: "h2", text: "Where PPC fits in B2B" },
      { type: "p", text: "PPC still earns a place in a B2B plan, as an addition to SEO. It works best for capturing urgent demand and staying in front of people who already know you." },
      {
        type: "list",
        items: [
          { lead: "Urgent, high-intent searches.", text: "Some buyers need a supplier this week. Ads on those few searches catch them while your pages build rankings." },
          { lead: "Remarketing to past visitors.", text: "Buyers research for months. Ads on Google and LinkedIn keep you visible to people who already visited your site." },
          { lead: "Testing new services or markets.", text: "A small budget shows quickly whether a new offer has demand before you invest in content." },
          { lead: "Events and webinars.", text: "Time-limited campaigns benefit from paid promotion." },
          { lead: "Brand protection.", text: "If competitors bid on your company name, a small brand campaign keeps you at the top." },
        ],
      },
      { type: "view", text: "", title: "Kriti's view" },

      { type: "h2", text: "How to build a B2B SEO strategy" },
      { type: "h3", text: "1. Map the buying group and their questions" },
      { type: "p", text: "List everyone who influences the decision and what each of them worries about. Your sales team already hears most of these questions." },
      {
        type: "list",
        items: [
          { lead: "Interview sales and account managers", text: "about the questions buyers ask most." },
          { lead: "Review proposals, RFPs and support tickets", text: "for recurring concerns." },
          { lead: "Group questions by buying job", text: "from problem identification to consensus creation." },
        ],
      },
      { type: "h3", text: "2. Choose keywords by value and intent" },
      { type: "p", text: "Use Semrush and Google Search Console to find searches your buyers use, then rank them by how close they are to a purchase and how valuable a client would be." },
      {
        type: "list",
        items: [
          { lead: "Keep low-volume searches", text: "with clear buying intent." },
          { lead: "Check keyword difficulty", text: "and start with searches you can win within six months." },
          { lead: "If you already run ads,", text: "use converting search terms as SEO priorities." },
        ],
      },
      { type: "h3", text: "3. Build service, industry and location pages" },
      { type: "p", text: "These are the pages buyers check during supplier selection and validation." },
      {
        type: "list",
        items: [
          { lead: "One page per service,", text: "with a clear answer to what you do, for whom and where." },
          { lead: "One page per industry served,", text: "using that industry's own language and problems." },
          { lead: "Proof on every page:", text: "case studies, certifications, client logos where allowed and reviews." },
        ],
      },
      { type: "h3", text: "4. Publish content for the early research" },
      { type: "p", text: "Guides and explainers reach buyers before they know which supplier they want." },
      {
        type: "list",
        items: [
          { lead: "Answer one problem per guide,", text: "with a direct answer in the first lines." },
          { lead: "Add original data or real examples", text: "that competitors cannot copy." },
          { lead: "Link every guide", text: "to the relevant service page." },
        ],
      },
      { type: "h3", text: "5. Build authority beyond your site" },
      { type: "p", text: "Buyers and AI tools trust what independent sources say about you." },
      {
        type: "list",
        items: [
          { lead: "Earn mentions", text: "in trade publications and association directories." },
          { lead: "Collect reviews", text: "on the platforms your buyers check." },
          { lead: "Build founder and team profiles", text: "on LinkedIn and share expertise there." },
        ],
      },
      { type: "h3", text: "6. Measure pipeline as well as traffic" },
      { type: "p", text: "B2B traffic is small, so judge SEO by the enquiries and deals it brings." },
      {
        type: "list",
        items: [
          { lead: "Connect Search Console, GA4 and your CRM", text: "to see which pages bring qualified leads." },
          { lead: "Ask every new lead", text: "how they first found you." },
          { lead: "Compare cost per qualified lead", text: "for SEO and PPC over 12 months." },
        ],
      },

      { type: "h2", text: "B2B SEO by industry" },
      { type: "h3", text: "How can a SaaS or technology company grow organically instead of paying for every demo?" },
      { type: "p", text: "Software buyers research heavily and increasingly with AI tools. Comparison pages (\"your product vs alternative\"), integration pages, use-case pages and honest pricing explanations rank for the searches buyers make while building a shortlist. Free tools and templates also attract links and repeat visits." },
      { type: "h3", text: "Which SaaS pages convert organic visitors into trials and demos?" },
      {
        type: "list",
        items: [
          { lead: "Comparison and alternative pages", text: "for the tools buyers already use." },
          { lead: "Use-case pages", text: "by role and industry." },
          { lead: "Pricing pages", text: "that explain plans clearly, with FAQs." },
        ],
      },
      { type: "h3", text: "How can a manufacturer turn search traffic into requests for quotes?" },
      { type: "p", text: "Engineers and procurement teams search precise technical terms. Capability pages for each process and material, with tolerances, certifications, lead times and industries served, match those searches and give buyers the detail they need to request a quote. Application guides answer the questions engineers ask earlier in the process." },
      { type: "h3", text: "What should manufacturers publish so buyers find them?" },
      {
        type: "list",
        items: [
          { lead: "Specifications in page text,", text: "with datasheets as downloads." },
          { lead: "Certifications and standards", text: "such as ISO 9001 and sector approvals." },
          { lead: "Industry pages", text: "explaining the problems you solve for each sector." },
        ],
      },
      { type: "h3", text: "How do logistics and supply chain companies win shipper enquiries through SEO?" },
      { type: "p", text: "Shippers compare providers carefully and return to research several times. Pages for each lane, service and sector, with transit times, capacity, accreditations and pricing guidance, rank for the searches they make and answer the questions procurement teams ask." },
      { type: "h3", text: "Should a 3PL or freight forwarder still run ads?" },
      { type: "p", text: "Yes, selectively: for new warehouse capacity, new lanes and urgent demand. Track cost per qualified enquiry for both channels, and shift budget to SEO as lane and service pages start ranking." },
      { type: "h3", text: "How can professional services firms attract clients through search?" },
      { type: "p", text: "Law firms, accountants, consultancies and agencies sell expertise, so content that demonstrates it is the strongest SEO asset. Clear service pages, sector pages, practical guides on regulations and deadlines, and named expert authors build the trust these buyers look for." },
      { type: "h3", text: "What content builds trust for a professional services firm?" },
      {
        type: "list",
        items: [
          { lead: "Guides on changes that affect clients,", text: "such as new rules or deadlines." },
          { lead: "Author pages", text: "showing each expert's experience." },
          { lead: "Case studies", text: "that explain the problem, approach and outcome." },
        ],
      },
      { type: "h3", text: "How can commercial property firms reach tenants and investors through search?" },
      { type: "p", text: "Businesses looking for space and investors looking for opportunities research locations, costs and market trends. Location pages, market reports, guides on leases and fit-outs, and detailed listing pages help commercial property firms rank for these searches and build credibility before a viewing." },
      { type: "h3", text: "What commercial property content earns enquiries?" },
      {
        type: "list",
        items: [
          { lead: "Local market updates", text: "with rents, availability and trends." },
          { lead: "Guides for occupiers", text: "on leases, fit-out and relocation." },
          { lead: "Detailed property pages", text: "with specifications, floor plans and transport links." },
        ],
      },

      { type: "h2", text: "What B2B SEO looks like in practice" },
      { type: "h3", text: "Corporate relocation company (B2B, UK and international)" },
      { type: "p", text: "This client competes on searches such as \"employee relocation\", which cost about $13 a click in the UK. Instead of buying those clicks, we built organic pages that reach both the HR teams who buy and the employees who move." },
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
    ],
    faq: [
      { q: "Is SEO better than PPC for B2B?", a: "For long-term growth, yes. SEO reaches buyers during the independent research where most decisions form, serves the whole buying group and is the only route into AI answers. PPC is a useful addition for urgent demand, testing and remarketing." },
      { q: "What happens if a B2B company only uses PPC?", a: "It pays for every repeat visit across a long buying cycle, absorbs rising click costs, misses early research searches, is rarely recommended in AI answers, and loses visibility when spend stops." },
      { q: "How long does B2B SEO take to work?", a: "Early ranking movement usually shows within three to six months. Niche B2B searches often move faster because competition is lower." },
      { q: "Is B2B SEO worth it with low search volumes?", a: "Yes. One B2B client can be worth more than a year of SEO, so a search with a few dozen monthly searches can be highly valuable if the people searching are ready to buy." },
      { q: "Do ads appear in AI answers?", a: "No. AI tools such as ChatGPT and Perplexity cite web pages as sources, and paid ads are not used. Visibility in AI answers comes from organic content and reputation." },
    ],
  },
  {
    slug: "seo-vs-ppc-for-b2c",
    title: "B2C SEO vs PPC: When Consumer Brands Should Use Each for Growth",
    description:
      "B2C SEO vs PPC explained for consumer brands: how consumers really decide, how SEO drives organic traffic, what happens if you only run ads, where PPC adds value, and how SEO works across retail, real estate, travel, local services and health.",
    date: "2026-11-01",
    author: "team",
    topics: ["B2C", "SEO - Begins"],
    industries: ["Real estate", "Removals & Relocation"],
    image: "/selfstorage/seo.jpg",
    intro:
      "If you run a consumer brand, someone will eventually tell you to \"just run ads\". Ads are quick, measurable and easy to switch on. But consumers rarely buy the first time they see something. They search, compare, read reviews, leave, come back and search again, and every one of those moments is a chance to be found. This guide explains B2C SEO vs PPC in plain terms: how consumers actually decide, how SEO brings in organic traffic, what happens to brands that rely only on paid ads, where PPC genuinely helps, and how SEO works across the biggest consumer industries.",
    tldr: [
      "B2C SEO should be the foundation of a consumer brand's search growth. PPC is a useful addition for grabbing attention and bringing back people who already know you.",
      "Consumers decide in a loop of exploring and evaluating, and organic pages can meet them at every turn of that loop without a cost per click.",
      "Brands that rely only on ads pay for every visit, every return visit and every price rise: average Google Ads cost per click rose from $4.66 in 2024 to $5.42 in 2025, according to WordStream by LocaliQ.",
      "Only about 1% of clicks from Google searches go to paid ads, according to SparkToro and Datos. Most clicks that leave Google go to organic results.",
      "PPC earns its place in B2C for launches, peak seasons and remarketing, for example to the roughly 70% of online shoppers who abandon their basket.",
    ],
    body: [
      { type: "h2", text: "Why B2C marketing is a different decision from B2B" },
      { type: "p", text: "In B2B, a committee of people researches for weeks before signing a contract. In B2C, one person, or a household, decides, often quickly and sometimes on impulse. That changes how search marketing works for consumer brands in four important ways." },
      {
        type: "list",
        items: [
          { lead: "Volume is far higher.", text: "Consumer searches run into thousands or millions a month, so the prize for ranking organically is large, and so is the competition for paid clicks." },
          { lead: "Emotion and trust drive the decision.", text: "Reviews, photos, prices and recommendations matter as much as specifications." },
          { lead: "Purchases repeat.", text: "A consumer who buys once may buy again, refer friends or leave a review, so being easy to find again matters." },
          { lead: "Each sale is usually worth less.", text: "When a sale is worth £40 rather than £40,000, the cost of every click has a direct effect on profit." },
        ],
      },
      { type: "p", text: "If you sell to businesses, our guide to [SEO vs PPC for B2B companies](/insights/seo-vs-ppc-for-b2b) covers the longer, committee-led journey." },

      { type: "h2", text: "How consumers actually decide: the B2C customer journey" },
      { type: "p", text: "Google's own research into consumer decisions, the [\"messy middle\" study](https://business.google.com/in/think/consumer-insights/navigating-purchase-behavior-and-decision-making/) by Alistair Rennie and Jonny Protheroe, simulated 310,000 purchase scenarios across retail, travel, financial services, consumer goods and utilities. It found that people rarely move in a straight line from interest to purchase. Instead, they loop between two modes until they are ready to buy." },
      {
        type: "ol",
        items: [
          { lead: "Trigger.", text: "Something starts the search: a broken appliance, a house move, a holiday idea, an advert or a friend's recommendation." },
          { lead: "Exploration.", text: "The person widens their options. They search broad terms (\"best running shoes for beginners\"), read guides, watch videos and browse marketplaces." },
          { lead: "Evaluation.", text: "They narrow down. They compare prices, read reviews, check delivery times and search for specific brands and models." },
          { lead: "The loop repeats.", text: "Most people move back and forth between exploring and evaluating several times, often across days, devices and platforms." },
          { lead: "Purchase.", text: "They buy from the option that felt most trusted, convenient or good value at that moment." },
          { lead: "Experience.", text: "Their experience feeds reviews, repeat purchases and recommendations, which shape the next person's journey." },
        ],
      },
      { type: "p", text: "The same study identified six biases that tip decisions inside this loop: category heuristics (simple, clear specifications), the power of now (speed of delivery), social proof (reviews), scarcity (limited stock), authority (expert endorsement) and the power of free (free delivery or extras). Notice how many of these live on the pages people find through search: product pages with clear specifications, review content, delivery information and expert guides." },
      { type: "p", text: "This is the core reason SEO matters so much in B2C. Every time a consumer goes back to Google during the loop, they search again. If your pages rank for those searches, you are present at every turn without paying for each visit. If you rely on ads, you pay every time they return." },

      { type: "h2", text: "How SEO drives organic traffic for consumer brands" },
      { type: "p", text: "SEO (search engine optimisation) is the work of making your website the best and most findable answer to what consumers search for, so that Google ranks it in the free, organic results. Here is what that means in practice for a consumer brand." },
      { type: "h3", text: "What SEO actually does" },
      { type: "p", text: "Google sends crawlers to read your pages, stores them in its index, and ranks them for each search based on relevance, quality and trust. SEO improves all three." },
      {
        type: "list",
        items: [
          { lead: "Technical SEO", text: "makes sure Google can crawl and index your pages quickly, on mobile, without errors or slow loading." },
          { lead: "On-page SEO", text: "matches each page to what people search for, with clear titles, headings, descriptions and helpful content." },
          { lead: "Content", text: "answers the questions consumers ask during exploration and evaluation." },
          { lead: "Authority", text: "comes from reviews, mentions and links from other trusted websites." },
        ],
      },
      { type: "h3", text: "Which pages bring consumers in" },
      { type: "p", text: "Different pages catch consumers at different points in the loop. A strong B2C site has all of them." },
      {
        type: "list",
        items: [
          { lead: "Category pages", text: "rank for broad searches during exploration, such as \"women's waterproof jackets\" or \"two bedroom flats to rent in Leeds\"." },
          { lead: "Product and service pages", text: "rank for specific searches during evaluation, such as a model name or \"same day boiler repair\"." },
          { lead: "Guides and comparisons", text: "rank for questions, such as \"how to choose a mattress\" or \"is a cruise good value for families\"." },
          { lead: "Location pages and your Google Business Profile", text: "rank for local searches and \"near me\" searches, which appear in maps." },
          { lead: "Review and FAQ content", text: "answers the trust questions that stop people buying." },
        ],
      },
      { type: "h3", text: "Why organic traffic compounds" },
      { type: "p", text: "A page that ranks keeps bringing visitors for months or years with no cost per click. Each new page adds to the traffic of the pages before it, and the site's overall authority rises, which helps new pages rank faster. That is why SEO costs tend to fall per visitor over time while ad costs rise with every click." },

      { type: "h2", text: "Why SEO is essential for B2C brands" },
      {
        type: "list",
        items: [
          { lead: "Most search clicks are organic.", text: "[SparkToro and Datos' 2024 zero-click study](https://sparktoro.com/blog/2024-zero-click-search-study-for-every-1000-us-google-searches-only-374-clicks-go-to-the-open-web-in-the-eu-its-360/) found that for every 1,000 Google searches in the EU, 374 clicks went to the open web, while only about 1% of all clicks went to paid ads." },
          { lead: "Consumers trust what they find on their own.", text: "Organic rankings feel earned, and they sit alongside the reviews and guides people use to decide." },
          { lead: "It covers the whole loop.", text: "Ads usually target a few high-intent searches. SEO can cover hundreds of exploration and evaluation searches that would be too expensive to buy." },
          { lead: "It feeds AI answers.", text: "ChatGPT, Perplexity and Google's AI Overviews cite organic web pages, never ads. Our [AEO and GEO guide](/insights/generative-engine-optimization-b2b) explains how those citations work." },
          { lead: "It builds an asset you own.", text: "Rankings, content and reviews stay with your brand. Ad visibility disappears the moment spend stops." },
        ],
      },
      { type: "p", text: "One honest caution: simple questions are increasingly answered on the results page itself. [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) found that when a Google AI summary appears, people click a result link on 8% of visits, compared with 15% without one. So B2C SEO should give as much weight to category, product, location and comparison pages, the pages people click to act on, as to how-to guides. Our post on [whether AI will replace SEO](/insights/will-ai-replace-seo) looks at this shift in detail." },

      { type: "h2", text: "What happens if you only run PPC and skip SEO" },
      { type: "p", text: "Plenty of consumer brands grow quickly on ads alone, and then find growth getting more expensive every year. These are the problems we see most often." },
      {
        type: "chart",
        title: "Average Google Ads cost per click, all industries (US$)",
        series: [{ name: "Cost per click", color: "#1C3F2E" }],
        rows: [
          { label: "2024", values: [4.66] },
          { label: "2025", values: [5.42] },
        ],
        source: {
          label: "WordStream by LocaliQ Google Ads benchmarks",
          note: "more than 16,000 campaigns; CPCs rose in 87% of industries analysed",
        },
      },
      { type: "p", text: "In one year, the average cost of a single Google Ads click rose by about 16%, and costs went up in 87% of the industries analysed. A brand that relies only on ads absorbs that rise every year just to keep the same traffic." },
      {
        type: "list",
        items: [
          { lead: "You pay for every return visit.", text: "Consumers loop back to search several times. Each time they click your ad again, you pay again." },
          { lead: "Traffic stops the day spend stops.", text: "Pause the budget for cash flow or a slow month and your search visibility drops to zero." },
          { lead: "Costs rise with competition.", text: "Every new competitor bidding on your searches pushes your cost per click up." },
          { lead: "You are missing from most of the journey.", text: "Ads rarely cover the long tail of questions consumers ask during exploration, so competitors with good content meet them first." },
          { lead: "You are invisible in AI answers.", text: "AI tools recommend brands they find in organic content and reviews, so an ads-only brand rarely appears." },
          { lead: "You build nothing that lasts.", text: "After years of spend, you own no rankings and no content that keeps working." },
        ],
      },

      { type: "h2", text: "Where PPC fits in B2C: attention and bringing people back" },
      { type: "p", text: "PPC still has a clear role for consumer brands, as an addition to SEO. It works best for two jobs: catching attention at the right moment, and bringing back people who already know you." },
      {
        type: "list",
        items: [
          { lead: "Remarketing to people who nearly bought.", text: "[Baymard Institute](https://baymard.com/lists/cart-abandonment-rate) puts the average online basket abandonment rate at 70.22%, based on 50 studies. Remarketing ads remind those shoppers what they left behind." },
          { lead: "Bringing past customers back.", text: "Ads shown to existing customers can drive repeat purchases, refills and upgrades." },
          { lead: "Launches.", text: "A new product or location has no rankings yet, so ads give it visibility while SEO pages build." },
          { lead: "Peak seasons and offers.", text: "Sales events and seasonal peaks reward being switched on for a few weeks." },
          { lead: "Shopping ads.", text: "For ecommerce, product listing ads with images and prices can win attention on high-intent product searches." },
        ],
      },
      { type: "p", text: "The healthiest B2C setups use PPC for these jobs and let SEO carry everyday demand. As organic pages climb, test reducing ads on the searches you already rank for." },
      { type: "view", text: "", title: "Kriti's view" },

      { type: "h2", text: "How to build a B2C SEO strategy" },
      { type: "h3", text: "1. Map the questions consumers ask in the loop" },
      { type: "p", text: "Start with your customers before any keyword tool. List what people ask before, during and after buying." },
      {
        type: "list",
        items: [
          { lead: "Collect questions", text: "from customer service, reviews, social comments and Google's People Also Ask." },
          { lead: "Group them", text: "into exploration questions (broad), evaluation questions (comparisons, prices, reviews) and post-purchase questions (care, use, returns)." },
          { lead: "Check demand", text: "in a keyword tool and Google Search Console." },
        ],
      },
      { type: "h3", text: "2. Build strong category, product and location pages" },
      { type: "p", text: "These are the pages consumers click to act on, so they deserve the most care." },
      {
        type: "list",
        items: [
          { lead: "Write a helpful introduction", text: "on each category page, with clear filters and links to key products." },
          { lead: "Give every product or service", text: "clear specifications, photos, prices, delivery details and reviews." },
          { lead: "Create one page per location", text: "if you serve local areas, and keep your Google Business Profile complete." },
        ],
      },
      { type: "h3", text: "3. Fix the technical basics" },
      { type: "p", text: "Most consumer searches happen on phones, so speed and mobile experience directly affect rankings and sales." },
      {
        type: "list",
        items: [
          { lead: "Check Core Web Vitals", text: "in Search Console and fix slow templates first." },
          { lead: "Remove duplicate and thin pages,", text: "common on ecommerce sites with many filters." },
          { lead: "Add structured data", text: "for products, reviews, FAQs and local business details." },
        ],
      },
      { type: "h3", text: "4. Earn social proof and authority" },
      { type: "p", text: "Reviews and trusted mentions help with rankings, AI answers and conversion at the same time." },
      {
        type: "list",
        items: [
          { lead: "Ask every customer for a review", text: "on the platforms your buyers check." },
          { lead: "Pitch useful stories and data", text: "to consumer media and niche bloggers." },
          { lead: "Work with experts", text: "to review health, finance or safety content." },
        ],
      },
      { type: "h3", text: "5. Publish content for exploration" },
      { type: "p", text: "Guides, comparisons and buying advice catch people early and build familiarity before they are ready to buy." },
      {
        type: "list",
        items: [
          { lead: "Answer one question per page", text: "with a direct answer in the first lines." },
          { lead: "Link each guide", text: "to the relevant category or product pages." },
          { lead: "Refresh top guides yearly", text: "with new prices, products and data." },
        ],
      },
      { type: "h3", text: "6. Measure revenue as well as rankings" },
      { type: "p", text: "Track how organic traffic turns into sales, and compare it with what the same traffic would cost in ads." },
      {
        type: "list",
        items: [
          { lead: "Use GA4", text: "to report organic revenue, orders or enquiries by landing page." },
          { lead: "Use Search Console", text: "to track clicks, impressions and positions for key pages." },
          { lead: "Review the SEO and PPC mix quarterly", text: "and reduce ads where organic pages now rank." },
        ],
      },

      { type: "h2", text: "B2C SEO by industry" },
      { type: "h3", text: "How does SEO help a retail or ecommerce brand grow without relying on ads?" },
      { type: "p", text: "Ecommerce brands often start with shopping ads, then find margins squeezed as costs rise. SEO builds a second, cheaper source of sales: category pages that rank for broad product searches, product pages that rank for model and brand searches, and buying guides that catch shoppers early. Over time, organic revenue lets you reserve ads for launches, sales events and remarketing." },
      { type: "h3", text: "Which pages should an online retailer optimise first?" },
      {
        type: "list",
        items: [
          { lead: "Top categories by revenue,", text: "with a helpful introduction, clear filters and internal links." },
          { lead: "Best-selling products,", text: "with full specifications, reviews, delivery and returns information." },
          { lead: "Buying guides", text: "for your highest-value categories." },
        ],
      },
      { type: "h3", text: "How can estate agents and property brands get more enquiries from Google?" },
      { type: "p", text: "Property buyers and renters spend weeks exploring areas, prices and schools before contacting anyone. Portals dominate listing searches, but local guides, sold-price insights, area pages and valuation content are searches where an agent or developer can rank and build trust. A complete Google Business Profile with recent reviews is essential for \"estate agents near me\" searches." },
      { type: "h3", text: "What property searches can SEO win that portals dominate?" },
      {
        type: "list",
        items: [
          { lead: "Area and neighbourhood guides", text: "(\"living in Clifton, Bristol\")." },
          { lead: "Valuation and selling questions", text: "(\"how much is my house worth\", \"best time to sell\")." },
          { lead: "New-build and development pages", text: "for specific locations." },
        ],
      },
      { type: "h3", text: "How can hotels and travel brands reduce reliance on booking platforms and ads?" },
      { type: "p", text: "Travellers explore destinations long before they book. Destination guides, itineraries and \"things to do\" content rank in that early phase and introduce your brand before the traveller reaches a booking platform. Strong direct-booking pages with clear prices, photos and reviews then give them a reason to book with you." },
      { type: "h3", text: "What travel content ranks and converts?" },
      {
        type: "list",
        items: [
          { lead: "Destination and itinerary guides", text: "written from real experience." },
          { lead: "Seasonal pages", text: "published six to ten weeks before demand peaks." },
          { lead: "Comparison content,", text: "such as \"best family hotels in the Lake District\"." },
        ],
      },
      { type: "h3", text: "How do local service businesses get found on Google and in AI answers?" },
      { type: "p", text: "Home and local services, from removals and storage to cleaning, trades and repairs, win most of their customers from local search. Google's local results depend on relevance, distance and prominence, so the work is a complete Business Profile, consistent contact details across directories, one page per service and area, and a steady flow of detailed reviews. AI tools draw on the same signals when they recommend local businesses." },
      { type: "h3", text: "Is local SEO enough for a home services business?" },
      { type: "p", text: "Local SEO is the foundation, but adding cost guides and checklists (\"how much does a house move cost\", \"what size storage unit do I need\") catches people earlier, before they search \"near me\". Use PPC for peak season and new areas." },
      { type: "h3", text: "How do health, beauty and wellness brands build trust through SEO?" },
      { type: "p", text: "Health and wellness topics are what Google calls \"your money or your life\" content, held to a higher standard of experience, expertise and trust. Brands that rank show who wrote and reviewed each page, cite evidence, avoid exaggerated claims and collect genuine reviews." },
      { type: "h3", text: "What does Google expect from health and beauty content?" },
      {
        type: "list",
        items: [
          { lead: "Named, qualified authors or reviewers", text: "on health content." },
          { lead: "Clear, accurate product information,", text: "including ingredients and usage." },
          { lead: "Evidence and sources", text: "for any health-related claim." },
        ],
      },

      { type: "h2", text: "What B2C SEO looks like in practice" },
      { type: "h3", text: "UK national home services brand (removals and storage)" },
      { type: "p", text: "This consumer brand competes on searches where a single paid click costs between $6 and $10, according to Semrush. We focused on winning the most valuable service searches organically." },
      { type: "p", text: "What we did:" },
      {
        type: "ol",
        items: [
          { lead: "Targeted high-intent service searches", text: "for home moves across the UK." },
          { lead: "Built guides on the company's own data,", text: "answering the questions people ask before they book." },
          { lead: "Added business listings and syndicated articles", text: "to strengthen trust signals beyond the website." },
          { lead: "Tracked rankings monthly", text: "for service and storage searches." },
        ],
      },
      { type: "p", text: "What changed:" },
      {
        type: "list",
        items: [
          { lead: "\"Home removal uk\":", text: "position 4 on 29 April 2026, position 1 from May to August 2026." },
          { lead: "\"Business and domestic removals in the UK\":", text: "position 8 on 29 April 2026, position 1 from May to August 2026." },
          { lead: "\"Affordable house removal companies\":", text: "position 21 in May 2026, position 7 in August 2026." },
        ],
      },
      { type: "p", text: "Each of those top positions brings clicks the brand would otherwise have to buy, every month." },
    ],
    faq: [
      { q: "Is SEO or PPC better for B2C companies?", a: "For long-term growth, SEO. It reaches consumers throughout their research without a cost per click and builds an asset you own. PPC is a useful addition for launches, peak seasons and remarketing." },
      { q: "What happens if a consumer brand only uses PPC?", a: "It pays for every visit and every return visit, absorbs rising click costs each year, misses most research searches, is rarely mentioned in AI answers, and loses all search visibility when spend stops." },
      { q: "How long does B2C SEO take to work?", a: "Early ranking movement usually shows within three to six months. Competitive consumer markets can take longer, which is why PPC is useful while organic pages build." },
      { q: "What is PPC best used for in B2C?", a: "Grabbing attention for launches and offers, covering seasonal peaks, and remarketing to people who visited, abandoned a basket or bought before." },
      { q: "Can a small consumer brand compete with big brands in SEO?", a: "Yes. Local searches, specific product and service searches, and detailed guides are areas where focused smaller brands often outrank larger ones." },
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
