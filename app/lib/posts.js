/* Insights (blog) posts. Single source of truth for /insights and /insights/[slug].
   Each post picks 2 or 3 topics and any industries; the landing page filters on both.
   Body blocks render in order. Supported types: p, h2, list, ol, chart, table,
   view (Kriti's view, hidden while empty), image, faq. Every number needs a source. */

export const TOPICS = ["AEO/GEO", "SEO - Begins", "B2B", "B2C", "Everything Marketing"];
export const INDUSTRIES = ["Removals & Relocation", "Real estate", "Logistics", "Supply chain"];

export const AUTHORS = {
  team: {
    name: "Team MAAI",
    role: "SEO, AEO and GEO for B2B companies",
    photo: "/icon.svg",
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
      "SEO vs PPC for B2B companies: how they differ, when to choose each, and how to use PPC data to pick SEO targets for long-term organic growth.",
    date: "2026-11-01",
    author: "kriti",
    topics: ["B2B", "Everything Marketing"],
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
    topics: ["B2C", "Everything Marketing"],
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
