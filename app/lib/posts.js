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
    "slug": "ai-mode-rank-trackers",
    "seoTitle": "AI Mode Rank Trackers 2027: Best Tools Compared",
    "title": "Best AI Mode Rank Trackers in 2027: Tools to Track Rankings in Google AI Mode",
    "description": "Compare the best AI Mode rank trackers for 2027: what each tool tracks, prices from the vendors' own pages and how to read your Google AI Mode results.",
    "date": "2026-11-24",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/ai-mode-rank-trackers-banner.jpg",
    "intro": "Google AI Mode answers a question in one conversation and names a handful of sources. Search Console counts those visits inside your normal numbers, so you cannot see whether AI Mode mentions your brand, cites your page or sends buyers to a competitor. An AI Mode rank tracker fills that gap by asking AI Mode your questions on a schedule and recording the answer. This guide compares the best AI Mode rank tracking tools in 2027, with prices taken from each vendor's own page, and shows how to choose one and read the results.",
    "tldr": [
      "An AI Mode rank tracker runs your searches through Google AI Mode on a schedule and records whether your brand is mentioned, whether your page is cited, which competitors appear and in what order.",
      "Google does not show AI Mode as its own report. AI Mode clicks and impressions sit inside the normal Search Console numbers, so a third-party tool is the only way to see citations and competitors.",
      "Ahrefs offers a free AI Mode tracker with no signup. Paid options include SE Ranking (from $103.20 a month), Peec AI ($95 a month), Rankscale (from €99 a month) and Keyword.com (AI Visibility from $9.80 a month).",
      "Check that a tool tracks AI Mode itself and not only AI Overviews, and check how many prompts and checks your plan really covers.",
      "AI Mode answers change between checks, so read results as a trend over several weeks and not as a single ranking."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is an AI Mode rank tracker?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "An AI Mode rank tracker is a tool that asks Google AI Mode a list of questions on a schedule, saves each answer, and records whether your brand is mentioned, whether your pages are cited as sources, which competitors appear and where each source sits in the answer."
      },
      {
        "type": "p",
        "text": "Google AI Mode is the conversational tab of Google Search. Instead of ten blue links you get one written answer, a short list of cited sources and a box for follow-up questions. There is no fixed position one to ten, so the word rank here means where and how often you appear: mentioned in the text, linked in the source list and in which order."
      },
      {
        "type": "p",
        "text": "Google's own AI Overview for the search \"ai mode rank tracker\" describes the same job. It says these tools focus on brand mentions, cited sources, sentiment and visibility share, because AI answers are probabilistic and change from one check to the next, unlike a static list of links."
      },
      {
        "type": "image",
        "src": "/insights/ai-mode-rank-trackers-google-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search ai mode rank tracker, explaining that an AI rank tracker monitors how often a brand appears in AI-generated answers and listing Rankscale, SEOmonitor and Geoptie with source cards on the right",
        "caption": "The Google UK AI Overview for \"ai mode rank tracker\", 24 November 2026."
      },
      {
        "type": "h2",
        "text": "Why can't you track Google AI Mode in Search Console?"
      },
      {
        "type": "p",
        "text": "You cannot track AI Mode on its own in Search Console because Google counts it inside the normal Performance report. Google's documentation says a click on an external link in AI Mode counts as a click, and each follow-up question counts as a new query. You can see the clicks, but you cannot filter them out, see the answer or see who else was cited."
      },
      {
        "type": "p",
        "text": "In June 2026 Google added [generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) to Search Console for AI Overviews and AI Mode. They show impressions by page, country, device and date. They do not show clicks, competitors or the text of the answer, so they work as a free baseline, not as a tracker."
      },
      {
        "type": "stats",
        "title": "Google AI Mode: what Ahrefs reports",
        "items": [
          {
            "value": "4.5%",
            "label": "of AI Mode sessions end in a click, from early data cited by Ahrefs"
          },
          {
            "value": "34.5%",
            "label": "fewer clicks when an AI Overview shows, from the Ahrefs click study"
          },
          {
            "value": "145.2M",
            "label": "AI Mode prompts tracked each month in Ahrefs Brand Radar"
          },
          {
            "value": "~24M",
            "label": "questions run through AI Mode each Brand Radar cycle"
          }
        ],
        "source": {
          "label": "Ahrefs",
          "href": "https://ahrefs.com/ai-mode-tracker",
          "note": "Free Google AI Mode Tracker page, read 24 November 2026"
        }
      },
      {
        "type": "p",
        "text": "In plain English: if few AI Mode sessions end in a click, the brands named inside the answer get the attention and everyone else gets less traffic than before. Knowing whether you are one of the named brands is the reason this tool category exists. Our guide to [tracking AI traffic for free](/insights/track-ai-traffic) shows how to measure the visits you do get."
      },
      {
        "type": "h2",
        "text": "What are the best AI Mode rank trackers in 2027?"
      },
      {
        "type": "p",
        "text": "The best AI Mode rank tracker depends on how many questions you need to follow and whether you already pay for an SEO suite. We read each vendor's own pricing page on 24 November 2026. Prices, limits and plans change often, so confirm them before you buy. The table lists them in alphabetical order."
      },
      {
        "type": "table",
        "head": [
          "Tool",
          "Price on its own page",
          "How it covers AI Mode",
          "Best suited to"
        ],
        "rows": [
          [
            "Ahrefs Free AI Mode Tracker",
            "Free, no signup",
            "Limited preview for one brand: AI Mode results, mentions over time, top 5 topics, cited domains and cited pages",
            "A first look at your brand"
          ],
          [
            "Ahrefs Brand Radar",
            "$199 a month for chosen platforms, $699 a month for all platforms, before tax",
            "Daily AI Mode tracking, competitor benchmarking, prompt gaps and custom prompts",
            "Teams already on Ahrefs"
          ],
          [
            "Keyword.com",
            "AI Visibility from $9.80 a month billed annually; 14-day free trial",
            "AI Mode tracker with brand mentions, sentiment, citations and competitor benchmarks",
            "Agencies and small teams on a budget"
          ],
          [
            "Peec AI",
            "Starter $95 a month, Pro $245, Advanced $495",
            "AI Mode is one of the models you can pick, with daily tracking",
            "Marketing teams that want clean reports"
          ],
          [
            "Rankscale",
            "Pro €99 a month (€84.15 billed yearly); 7-day trial",
            "AI Mode on every plan, priced by answers checked",
            "Teams tracking many prompts"
          ],
          [
            "SE Ranking",
            "Core from $103.20 a month, Growth from $223.20; free trial, no card",
            "Dedicated AI Mode tracker with position, citation order and link placement",
            "SEO teams that want rankings and AI in one place"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the same search also names SEOmonitor, Geoptie, Rank Prompt, Bear AI and AI Rank Checker. We have not tested those, so check their pages for AI Mode coverage before you shortlist them."
      },
      {
        "type": "h3",
        "text": "Is Ahrefs Brand Radar a good AI Mode tracker?"
      },
      {
        "type": "p",
        "text": "Yes, if you want a large dataset and already use Ahrefs. Brand Radar stores real AI Mode answers: Ahrefs starts from its keyword database and Google's People Also Ask questions, fans each one out into follow-up questions the way AI Mode does and runs them through AI Mode. When you enter a brand it searches those saved answers for mentions of your name and citations of your pages. The paid plans add daily tracking, competitor share of voice and a report of prompts your rivals win and you do not."
      },
      {
        "type": "p",
        "text": "The free version is a limited preview, and Ahrefs says its share of voice figures are modelled estimates of potential exposure, not measured audience reach. Coverage is also strongest in English, so check it against your own searches."
      },
      {
        "type": "image",
        "src": "/insights/ai-mode-rank-trackers-ahrefs-free-tool.jpg",
        "alt": "Ahrefs Free Google AI Mode Tracker page with a brand name box, a Check AI Mode button, and the text no signup required, 145.2M AI Mode prompts tracked monthly",
        "caption": "The Free Google AI Mode Tracker from Ahrefs, 24 November 2026. It shows a limited preview and needs no signup."
      },
      {
        "type": "h3",
        "text": "Is SE Ranking a good AI Mode rank tracking tool?"
      },
      {
        "type": "p",
        "text": "Yes, it is the most direct fit if you want a tool built for AI Mode. SE Ranking says its tracker captures results from live AI Mode conversations, then maps position, citation order and link placement. It can track brand mentions even when your site is not linked, compare AI Mode with AI Overviews and organic results, and filter by country and language. The Core plan starts at $103.20 a month and Growth at $223.20, and the free trial needs no card."
      },
      {
        "type": "image",
        "src": "/insights/ai-mode-rank-trackers-se-ranking-tracker.jpg",
        "alt": "SE Ranking Google AI Mode Tracker page with the heading Google AI Mode Tracker, a short description and Start free trial and Request a demo buttons",
        "caption": "The SE Ranking Google AI Mode Tracker page, 24 November 2026."
      },
      {
        "type": "h3",
        "text": "Is Peec AI worth it for tracking AI Mode?"
      },
      {
        "type": "p",
        "text": "Peec AI suits marketing teams that want readable reports across several AI tools. Its pricing page lists Google AI Mode on every plan, but each of the Starter, Pro and Advanced plans lets you choose only three models. Starter is $95 a month for 50 prompts tracked daily, Pro is $245 for 150 prompts and Advanced is $495 for 350. Extra models are add-ons, from $30 a month on Starter, and annual billing takes 15% off."
      },
      {
        "type": "p",
        "text": "The plan numbers add up as you would expect: 50 prompts across 3 models every day for 30 days is 4,500 answers a month, which is the figure on the Starter card."
      },
      {
        "type": "h3",
        "text": "Is Rankscale a good low-cost AI Mode tracker?"
      },
      {
        "type": "p",
        "text": "Rankscale is a good fit when you want many prompts without a per-prompt cap. It lists Google AI Mode on every plan and charges by answers checked: an AI Mode answer costs 0.25 credits, so one credit buys four answers. The Pro plan is €99 a month, or €84.15 a month billed yearly, with 1,200 credits. By our arithmetic that is up to 4,800 AI Mode answers a month, enough to check about 160 prompts a day on AI Mode alone."
      },
      {
        "type": "h3",
        "text": "Is Keyword.com a good budget AI Mode tracker?"
      },
      {
        "type": "p",
        "text": "Keyword.com is the cheapest way to start with a dedicated AI Mode tracker. Its AI Visibility plan starts at $9.80 a month billed annually, with 100 credits, which it describes as about 33 prompts tracked a month. The AI Mode tracker covers brand mentions, sentiment, citation discovery and competitor benchmarks, and it keeps the full scraped answer so you can check it yourself. The 14-day trial needs no card."
      },
      {
        "type": "h2",
        "text": "How do you track AI Mode rankings for free?"
      },
      {
        "type": "p",
        "text": "You can track AI Mode for free with the Ahrefs free tracker, a monthly manual check and the Search Console baseline. It takes about an hour a month and gives you a trend without a subscription."
      },
      {
        "type": "steps",
        "title": "A free monthly AI Mode check",
        "items": [
          {
            "title": "Open the Generative AI report",
            "path": "Search Console > Performance > Generative AI",
            "text": "Set the range to 3 months and note the impressions. This is your baseline for how often Google shows your pages in AI Overviews and AI Mode."
          },
          {
            "title": "Run the Ahrefs free tracker on your brand",
            "text": "Enter your brand name and note the AI Mode results, the top topics and the cited domains. Save a screenshot with the date."
          },
          {
            "title": "Ask AI Mode your ten buyer questions",
            "text": "Open the AI Mode tab on Google in a private window, using the same country and language every month. Write down whether your brand is named, whether your page is linked and which other sources appear."
          },
          {
            "title": "Save the answers in one sheet",
            "text": "Record the date, the question, the brands named and the sources. After three months you will see which competitors and sources keep coming back."
          },
          {
            "title": "Compare with your traffic",
            "text": "Match the months against organic clicks and sessions from AI assistants in Google Analytics 4."
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should an AI Mode rank tracking tool show you?"
      },
      {
        "type": "p",
        "text": "A useful AI Mode tracker answers five questions about each search you follow: are you mentioned, are you cited, who else appears, in what order, and how has that changed. If a tool cannot answer all five, you will end up checking by hand."
      },
      {
        "type": "checklist",
        "title": "The five things to look for",
        "items": [
          "**Real AI Mode coverage.** The tool should run your questions through AI Mode itself, not only AI Overviews. Ask the vendor or check its AI Mode page.",
          "**Mentions and citations.** Whether the answer names your brand and whether it links to your page. These are different results.",
          "**Competitors and sources.** Which brands and websites Google uses for your topic, and in what order they appear.",
          "**The saved answer.** A stored copy of each answer so you can see how it changed and check the tool's work.",
          "**Country and language.** AI Mode varies by location, so a UK check and a US check can differ."
        ]
      },
      {
        "type": "p",
        "text": "Also look at how the tool counts usage. Some charge per prompt, some per check and some per answer, and tracking one prompt on three engines uses three checks. Divide the monthly price by the number of AI Mode answers you really get."
      },
      {
        "type": "image",
        "src": "/insights/ai-mode-rank-trackers-people-also-ask.jpg",
        "alt": "Google UK search results for ai mode rank tracker showing the SE Ranking AI Mode Tracker result and a People Also Ask box with the questions how to track AI rankings, how to rank in AI Mode, how to track AI Mode and what is the best rank tracker",
        "caption": "The People Also Ask questions under \"ai mode rank tracker\" on Google UK, 24 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you choose an AI Mode tracker?"
      },
      {
        "type": "p",
        "text": "Choose the tracker that really covers AI Mode, fits your budget and shows the five items above. Start with a free tool, then move to a paid one only when you have more questions than you can check by hand."
      },
      {
        "type": "steps",
        "title": "Choose in four steps",
        "items": [
          {
            "title": "List 20 to 30 questions your buyers ask",
            "text": "Use full questions, not only short keywords, because people talk to AI Mode in sentences. Include the questions that bring you leads today."
          },
          {
            "title": "Run them through a free tool first",
            "text": "Use the Ahrefs free tracker or a free trial and note how often your brand appears at all."
          },
          {
            "title": "Compare two paid tools on the same list",
            "text": "Run the same questions in both trials and see which shows citations, order and competitors more clearly."
          },
          {
            "title": "Check the cost per answer",
            "text": "Divide the monthly price by the AI Mode answers included, and check whether AI Mode counts against a cap on how many models you can choose."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you read AI Mode rank tracking results?"
      },
      {
        "type": "p",
        "text": "Read AI Mode results as a trend over weeks, never as a verdict from one day. AI Mode answers are generated fresh and depend on the wording, location and person, so a single missing mention means little. Four weeks in a row of being absent for a question that matters is the signal to act."
      },
      {
        "type": "compare",
        "title": "Reading a result",
        "columns": [
          {
            "title": "Worth acting on",
            "tone": "good",
            "items": [
              "A valuable question where AI Mode never names or cites you",
              "The same competitor cited for several weeks",
              "Your Search Console impressions falling while competitors gain mentions"
            ]
          },
          {
            "title": "Not worth acting on",
            "tone": "bad",
            "items": [
              "One missing mention on a single day",
              "A different order of sources after a few days",
              "Two tools disagreeing with each other or with your own search"
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Track your overall score alongside these checks. Our guide to the [SEO visibility score](/insights/seo-visibility-score) explains how to read it in Google and AI search."
      },
      {
        "type": "h2",
        "text": "What is the difference between an AI Mode tracker and an AI Overview tracker?"
      },
      {
        "type": "p",
        "text": "An AI Overview tracker follows the summary above the normal Google results, while an AI Mode tracker follows the separate conversational tab. They trigger on different searches and cite different sources, so a brand can win one and be missing from the other. Several tools cover both, and some only cover AI Overviews, which is why the first item on the checklist matters."
      },
      {
        "type": "p",
        "text": "If your main interest is the summary on the normal results page, read our comparison of the [best AI Overview trackers](/insights/ai-overviews-trackers). For tools that follow ChatGPT, Perplexity and others as well as Google, see our guide to the [best AI search monitoring tools](/insights/best-ai-search-monitoring-tools)."
      },
      {
        "type": "h2",
        "text": "What should you do when an AI Mode tracker shows you are missing?"
      },
      {
        "type": "p",
        "text": "Improve the page that should be cited, then recheck after a few weeks. AI Mode breaks each question into many smaller follow-up questions before it answers, so the work is to answer the question in the first lines, cover the related questions and earn mentions on other trusted sites. Our guide to [ranking in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) lists the steps."
      }
    ],
    "faq": [
      {
        "q": "How do you track Google AI Mode?",
        "a": "Use a tool that runs your questions through AI Mode on a schedule and records mentions, citations and competitors, such as Ahrefs Brand Radar, SE Ranking, Peec AI, Rankscale or Keyword.com. For a free start, use the Ahrefs free AI Mode tracker plus a monthly manual check."
      },
      {
        "q": "Can Google Search Console track AI Mode?",
        "a": "Only partly. AI Mode clicks and impressions are counted inside the normal Performance report and cannot be filtered out. Google's generative AI performance reports show impressions only, with no competitors or answer text."
      },
      {
        "q": "Is there a free AI Mode tracker?",
        "a": "Yes. Ahrefs offers a free Google AI Mode Tracker with no signup that gives a limited preview for one brand. SE Ranking and Keyword.com also offer free trials."
      },
      {
        "q": "How do you rank in AI Mode?",
        "a": "Answer the question directly at the top of the page, cover the related questions people ask next, keep the content fresh and earn mentions on trusted websites. Our guide to ranking in Google AI Overviews and AI Mode covers the steps."
      },
      {
        "q": "What is the best AI Mode rank tracker?",
        "a": "It depends on your needs. SE Ranking is built specifically for AI Mode, Ahrefs Brand Radar has the largest dataset, Keyword.com is the lowest-cost start and Peec AI and Rankscale suit teams tracking several AI tools. Test two on the same list of questions."
      },
      {
        "q": "How often should you check AI Mode?",
        "a": "Daily or weekly with a paid tracker, and monthly by hand. Because answers change between checks, repeat them over several weeks before you judge a result."
      }
    ]
  },
  {
    "slug": "what-is-geo",
    "seoTitle": "What Is GEO? Generative Engine Optimisation 2027",
    "title": "What Is GEO? Generative Engine Optimisation Explained for Businesses",
    "description": "What is GEO? Generative engine optimisation explained: where the term came from, how AI tools pick sources, the main tactics and a simple starter plan.",
    "date": "2026-11-24",
    "author": "team",
    "topics": [
      "AEO/GEO",
      "Everything Marketing"
    ],
    "industries": [],
    "image": "/insights/what-is-geo-banner.jpg",
    "intro": "Every few months a new marketing acronym appears, and GEO is the latest one business owners keep hearing. GEO stands for generative engine optimisation: the work of getting your business named and cited in answers written by AI tools such as ChatGPT, Google AI Overviews, Gemini and Perplexity. This guide explains what GEO is, where the term came from, how AI tools choose their sources, which tactics matter and how to start.",
    "tldr": [
      "GEO, or generative engine optimisation, is the practice of making your content and brand easy for AI tools to find, trust and cite in their answers.",
      "The term comes from a 2023 research paper, which found that adding citations, quotations and statistics boosted visibility by up to 40%.",
      "AI tools search first and write second, so clear answer-first pages, trusted third-party mentions and crawler access all matter.",
      "Google says there are no extra requirements for AI Overviews and AI Mode, so GEO builds on SEO rather than replacing it.",
      "Start with ten buyer questions, test them in AI tools, rewrite one page and check again in a month."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is GEO?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "GEO stands for generative engine optimisation. It is the practice of shaping your content and your online presence so that AI answer tools such as ChatGPT, Google AI Overviews, Gemini, Claude and Perplexity find your business, trust it and mention or cite it when they answer a question."
      },
      {
        "type": "p",
        "text": "In plain English, GEO is about being included in the answer. Someone asks an AI tool \"which removal company should I use in Leeds?\" or \"what is the best invoicing software for a small agency?\", and the tool writes one answer from a handful of sources. GEO is the work that makes your business one of those sources. Google's AI Overview for \"what is geo in seo\" gives the same meaning: optimising content and digital presence so AI search engines and chatbots discover, cite and recommend your brand in generated answers."
      },
      {
        "type": "image",
        "src": "/insights/what-is-geo-google-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search what is geo in seo, defining Generative Engine Optimization as optimising content so AI search engines and chatbots cite and recommend your brand, with a short GEO vs traditional SEO list and source links on the right",
        "caption": "The Google UK AI Overview for \"what is geo in seo\", 24 November 2026."
      },
      {
        "type": "p",
        "text": "One quick note on the letters. Searching \"what is geo\" on its own can also bring up geography and geolocation, so most people add \"seo\" or \"generative engine optimisation\" to the search. In this guide GEO always means the marketing meaning."
      },
      {
        "type": "h2",
        "text": "Where did the term GEO come from?"
      },
      {
        "type": "p",
        "text": "The term comes from a research paper called \"GEO: Generative Engine Optimization\", first posted to [arXiv](https://arxiv.org/abs/2311.09735) in November 2023 and accepted to the KDD 2024 conference. The authors named the idea and tested nine ways of rewriting web content to see which ones made a page more visible in AI-generated answers."
      },
      {
        "type": "image",
        "src": "/insights/what-is-geo-original-research-paper.jpg",
        "alt": "The arXiv page for the paper GEO: Generative Engine Optimization, listing six authors, the abstract and the submission history from November 2023",
        "caption": "The abstract page of the original GEO paper on arXiv, 24 November 2026."
      },
      {
        "type": "stats",
        "title": "What the original GEO research found",
        "items": [
          {
            "value": "40%",
            "label": "the largest visibility boost the paper's best methods gave in generative engine answers"
          },
          {
            "value": "3",
            "label": "methods that worked best: adding citations, adding quotations from credible sources and adding statistics"
          }
        ]
      },
      {
        "type": "p",
        "text": "The same paper tested keyword stuffing, the old SEO habit of repeating the search phrase, and reported that it did not perform well. That is a useful early sign that GEO rewards clear, evidenced writing rather than repetition. A second study posted to [arXiv](https://arxiv.org/abs/2509.08919) in September 2025 compared AI search with Google and found that AI search shows a strong bias towards earned media, meaning third-party and authoritative sites, over brand-owned pages and social content."
      },
      {
        "type": "h2",
        "text": "What else is GEO called: AEO, LLM SEO or AI SEO?"
      },
      {
        "type": "p",
        "text": "GEO has several names, and they overlap heavily. You will see answer engine optimisation (AEO), LLM SEO, AI SEO and AI search optimisation used for the same job: being quoted by AI tools. The names come from different communities, and the tactics are close to identical, so pick the one your buyers use and move on."
      },
      {
        "type": "table",
        "head": [
          "Term",
          "What people usually mean",
          "Read more"
        ],
        "rows": [
          [
            "GEO",
            "Being cited or mentioned in AI-generated answers",
            "This guide"
          ],
          [
            "AEO",
            "Being the direct answer in answer boxes and AI tools",
            "[Answer engine optimisation](/insights/answer-engine-optimisation)"
          ],
          [
            "LLM SEO",
            "Making content easy for large language models to retrieve and quote",
            "[LLM SEO](/insights/llm-seo)"
          ],
          [
            "AI SEO",
            "The broad everyday term for all of the above",
            "[AEO vs SEO](/insights/aeo-vs-seo)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Google Trends shows which name people search. In the UK over the past 12 months, \"ai seo\" is searched far more often than \"geo seo\" or \"generative engine optimisation\", which barely register. For headings and titles on your own site, the everyday words win. For this guide we use GEO because that is the term the question \"what is GEO?\" asks about."
      },
      {
        "type": "image",
        "src": "/insights/what-is-geo-google-trends.jpg",
        "alt": "Google Trends chart for the UK over 12 months comparing generative engine optimisation, geo seo and ai seo, with ai seo far above the other two terms",
        "caption": "Google Trends, UK, past 12 months, 24 November 2026."
      },
      {
        "type": "h2",
        "text": "How do AI assistants choose which websites to cite?"
      },
      {
        "type": "p",
        "text": "AI assistants usually search first and write second. Most use a method called retrieval-augmented generation (RAG): the tool looks up relevant pages, reads passages from them and writes an answer that cites the pages it used. Google's documentation says AI Overviews and AI Mode may use a technique called query fan-out, which means running several related searches across subtopics before writing a single answer."
      },
      {
        "type": "flow",
        "title": "How an AI answer is built",
        "steps": [
          {
            "label": "1. Question",
            "text": "A buyer asks an AI tool a question in plain words."
          },
          {
            "label": "2. Fan-out",
            "text": "The tool turns it into several related searches."
          },
          {
            "label": "3. Retrieve",
            "text": "It pulls relevant pages from a search index."
          },
          {
            "label": "4. Read",
            "text": "It picks passages that answer each part clearly."
          },
          {
            "label": "5. Cite",
            "text": "It writes the answer and links the sources it used."
          }
        ]
      },
      {
        "type": "p",
        "text": "We asked ChatGPT with web search switched on how it chooses sources. It named six factors: topical relevance, authority and credibility, clear and extractable content, factual depth, freshness and technical access. It also made the point that ranking in Google does not automatically mean being cited by an AI assistant, so both need attention."
      },
      {
        "type": "image",
        "src": "/insights/what-is-geo-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to the question what is generative engine optimisation and how do AI assistants choose which websites to cite, with a definition and the start of a section on how retrieval-augmented generation works",
        "caption": "A ChatGPT answer (web search on) to a GEO question, 24 November 2026."
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "Google says there is no secret switch",
        "text": "Google's Search Central guidance says there are no additional requirements to appear in AI Overviews or AI Mode, and no other special optimisations necessary. The foundations still apply: a crawlable page, helpful and reliable content and good SEO basics."
      },
      {
        "type": "h2",
        "text": "What are the main GEO tactics?"
      },
      {
        "type": "p",
        "text": "The main GEO tactics are to answer questions directly, back every claim with evidence, earn mentions on trusted sites, keep your facts current and make sure AI crawlers can read your pages. Each one is simple on its own, and together they decide whether you are quoted."
      },
      {
        "type": "steps",
        "title": "Six GEO tactics to start with",
        "items": [
          {
            "title": "Open every section with the answer",
            "text": "Put a direct answer of 40 to 60 words straight under each question heading, then add detail. AI tools lift passages, so each section should make sense on its own."
          },
          {
            "title": "Add real statistics, quotations and sources",
            "text": "The original GEO research found that adding citations, quotations and statistics gave the biggest visibility gains. Use real, dated figures and name the source."
          },
          {
            "title": "Earn mentions on other trusted sites",
            "text": "Digital PR, expert quotes, industry directories and review sites build the third-party proof that AI search favours. Ahrefs found branded web mentions correlate more strongly with AI Overview visibility than backlinks do."
          },
          {
            "title": "Be specific about who you are",
            "text": "Use the same business name, description, location and services everywhere. State prices, locations and credentials in plain words instead of \"affordable\" or \"trusted\"."
          },
          {
            "title": "Keep key pages fresh",
            "text": "Update figures, dates and recommendations on your most important pages. Changing only the date does not count."
          },
          {
            "title": "Let the crawlers in",
            "text": "Check robots.txt and your CDN settings so search and assistant crawlers, such as Googlebot, Bingbot and OAI-SearchBot, can read your pages. Our guide to [LLM SEO](/insights/llm-seo) covers the details."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Does GEO replace SEO?"
      },
      {
        "type": "p",
        "text": "No. GEO builds on SEO. Many AI tools use a search index to find pages, so rankings, indexing and links still feed the answers. If you want the side-by-side comparison, our guide to [GEO vs SEO](/insights/geo-vs-seo) sets out the differences, and [AEO vs SEO](/insights/aeo-vs-seo) shows how a single page is built for both. The short version is to keep doing good SEO and add the GEO habits above on top."
      },
      {
        "type": "h2",
        "text": "Who needs GEO?"
      },
      {
        "type": "p",
        "text": "Any business whose customers ask questions before they buy needs GEO, and the questions differ by sector. The pattern is the same: find what your buyers ask, then make your pages the clearest answer."
      },
      {
        "type": "cards",
        "title": "What buyers ask AI tools, by business type",
        "items": [
          {
            "title": "B2B software and services",
            "meta": "Shortlist questions",
            "text": "\"Best platform for mid-sized teams\", \"alternatives to X\", \"how much does it cost\". Comparison pages and original data help most."
          },
          {
            "title": "Local services",
            "meta": "Near me questions",
            "text": "\"Best electrician in Bristol\", \"who is open on Sunday\". Reviews, a complete Google Business Profile and consistent details matter."
          },
          {
            "title": "Ecommerce and retail",
            "meta": "Product questions",
            "text": "\"Best running shoes for flat feet\". Clear specifications, honest comparisons and review content get quoted."
          },
          {
            "title": "Healthcare and professional services",
            "meta": "Trust questions",
            "text": "\"How does a root canal work\", \"how do I choose an accountant\". Named experts, credentials and plain explanations build trust."
          }
        ]
      },
      {
        "type": "p",
        "text": "For a deeper view of how this plays out for B2B companies, read our [answer engine optimisation pillar guide](/insights/answer-engine-optimisation) and the [B2B SEO strategy](/insights/seo-for-b2b-companies) it links to."
      },
      {
        "type": "h2",
        "text": "How do you start with GEO?"
      },
      {
        "type": "p",
        "text": "Start with one valuable page and the ten questions your buyers ask most. That small test shows you what works before you change anything at scale."
      },
      {
        "type": "checklist",
        "title": "A simple GEO starter plan",
        "items": [
          "**List 10 buyer questions.** Use People Also Ask, your sales calls and customer emails.",
          "**Run them in AI tools.** Ask ChatGPT, Gemini, Claude and Google AI Mode and note who is named and which sources are linked.",
          "**Pick one page and rewrite it.** Give each section an answer-first opening, a dated fact and a named source.",
          "**Check access.** Confirm your robots.txt and CDN allow search and assistant crawlers.",
          "**Plan two mentions.** Pitch an expert comment or a useful data point to one trade publication and one directory your buyers read.",
          "**Repeat the prompts in a month.** Note any change in who is named."
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure GEO?"
      },
      {
        "type": "p",
        "text": "Measure whether AI tools mention you for your key questions, whether they send visits and whether your pages are indexed and ranking. GEO is still a young field and there is no single standard metric, so keep the method simple and consistent. Our guide on [tracking AI traffic for free](/insights/track-ai-traffic) shows how to set this up in Google Analytics 4 and Search Console, and [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) and [how to rank in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) cover those two platforms in depth."
      },
      {
        "type": "image",
        "src": "/insights/what-is-geo-people-also-ask.jpg",
        "alt": "Google UK results for what is geo generative engine optimisation showing a Coursera result and a People Also Ask box with the questions Is GEO better than SEO, What is GEO vs SEO vs AIO, What is GEO and how does it work and What is the main goal of generative engine optimization",
        "caption": "The People Also Ask box for \"what is geo generative engine optimisation\" on Google UK, 24 November 2026. These questions shaped the FAQ below."
      }
    ],
    "faq": [
      {
        "q": "What is GEO in simple terms?",
        "a": "GEO, or generative engine optimisation, is the work of making your business easy for AI tools to find, trust and quote. The goal is to be named or cited in the answers that ChatGPT, Google AI Overviews, Gemini, Claude and Perplexity give to your customers' questions."
      },
      {
        "q": "What does GEO stand for?",
        "a": "GEO stands for generative engine optimisation. A generative engine is an AI tool that writes an answer from several sources instead of listing links. Some people spell it optimization with a z."
      },
      {
        "q": "What is the main goal of generative engine optimisation?",
        "a": "The main goal is visibility inside AI-written answers. Success means your brand is mentioned, recommended or cited when someone asks a question your business can answer."
      },
      {
        "q": "Is GEO better than SEO?",
        "a": "Neither replaces the other. SEO gets your pages found and ranked, and many AI tools use search results to choose sources. GEO adds answer-first writing, evidence and third-party mentions on top. Our [GEO vs SEO](/insights/geo-vs-seo) guide compares them in full."
      },
      {
        "q": "What is the difference between GEO and AEO?",
        "a": "The two terms overlap heavily. AEO usually refers to being the direct answer, including in answer boxes, and GEO usually refers to being cited in AI-generated answers. In practice the tactics are almost the same."
      },
      {
        "q": "How does GEO work?",
        "a": "AI tools search for relevant pages, read the clearest passages and write an answer that links its sources. GEO makes your pages easy to retrieve, easy to quote and backed by trusted mentions elsewhere."
      },
      {
        "q": "Do I need special schema or files for GEO?",
        "a": "No special markup is required. Google's guidance says there are no additional requirements to appear in AI Overviews or AI Mode. Good SEO basics, clear content and crawler access matter more."
      },
      {
        "q": "How long does GEO take to work?",
        "a": "You can see changes in AI answers within weeks on pages that are already indexed, but results vary by platform and query. Check the same set of prompts monthly and treat it as an ongoing habit."
      }
    ]
  },
  {
    "slug": "local-seo-checklist",
    "seoTitle": "Local SEO Checklist 2027: 20 Steps to Rank in the Map Pack",
    "title": "Local SEO Checklist for Small Businesses in 2027: 20 Steps to Rank in the Map Pack",
    "description": "A local SEO checklist for small businesses in 2027: 20 steps covering Google Business Profile, your website, citations, reviews, AI answers and tracking.",
    "date": "2026-11-24",
    "author": "team",
    "topics": [
      "SEO - Begins",
      "B2C"
    ],
    "industries": [],
    "image": "/insights/local-seo-checklist-banner.jpg",
    "intro": "A customer types \"plumber in Leeds\" into Google, sees three businesses on a map and calls one of them. If you are not one of the three, you lose that job before you know it existed. This local SEO checklist gives small businesses 20 steps in the right order: your Google Business Profile, your website, your listings, your reviews, local links, AI answers and tracking. Work through it once, then repeat the monthly check.",
    "tldr": [
      "A local SEO checklist is an ordered list of jobs that help nearby customers find you on Google, Google Maps and AI assistants.",
      "Start with your Google Business Profile: claim it, choose the right primary category and fill in every field.",
      "Make your name, address and phone number match on your site, your profile and your listings.",
      "The BrightLocal 2026 survey found 97% of consumers read online reviews for local businesses, so ask for reviews every month and reply to all of them.",
      "Track calls, direction requests and website clicks each month and fix one thing at a time."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is a local SEO checklist?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "A local SEO checklist is an ordered list of the jobs that help a business with a physical location or a service area show up when people nearby search on Google, Google Maps and AI assistants. It covers your Google Business Profile, your website, your listings on other sites, your reviews and the links and mentions that prove you are a real local business."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the search \"local seo checklist\" gives the same shape. It groups the work into Google Business Profile, on-page and technical SEO, citations, reviews and local authority. That is a sound list, and this guide turns each group into specific steps you can tick off, in the order we would do them."
      },
      {
        "type": "image",
        "src": "/insights/local-seo-checklist-google-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search local seo checklist, saying a practical checklist covers Google Business Profile, on-page and technical SEO, citations, reviews and local authority, with two source links on the right",
        "caption": "The Google UK AI Overview for \"local seo checklist\", 24 November 2026."
      },
      {
        "type": "h2",
        "text": "Do people search for a local SEO checklist or for local SEO?"
      },
      {
        "type": "p",
        "text": "People search for \"local seo\" far more often than for \"local seo checklist\". In Google Trends for the UK over the past 12 months, \"local seo\" shows steady interest while \"local seo checklist\" and \"local seo audit\" barely register. Most people start with the broad topic, so use the words your customers type, such as \"plumber in Leeds\" or \"dentist near me\", in your headings and listings, and keep \"checklist\" for how you manage the work."
      },
      {
        "type": "image",
        "src": "/insights/local-seo-google-trends.jpg",
        "alt": "Google Trends chart for the UK over 12 months comparing local seo, local seo checklist and local seo audit, with local seo far above the other two terms",
        "caption": "Google Trends, UK, past 12 months, 24 November 2026."
      },
      {
        "type": "h2",
        "text": "What does Google look at to rank a business in the map pack?"
      },
      {
        "type": "p",
        "text": "Google ranks map results on relevance, distance and prominence. Relevance is how well your profile matches the search, distance is how close you are to the searcher, and prominence is how well known and trusted you look online. The [Whitespark Local Search Ranking Factors 2026](https://whitespark.ca/local-search-ranking-factors/) survey of local SEO experts puts your primary category and proximity at the top, with reviews and behavioural signals gaining weight."
      },
      {
        "type": "p",
        "text": "The map pack is the block of three businesses with a map that appears above the normal results for searches such as \"plumber in Leeds\". You cannot change where the searcher stands, so the checklist below works on the other two: matching the search and looking trustworthy."
      },
      {
        "type": "image",
        "src": "/insights/local-seo-map-pack-plumber-leeds.jpg",
        "alt": "Google UK search for plumber in Leeds showing a Find results on panel with directory links and a Businesses map with pins for local plumbers and the top listing showing a 4.9 star rating from 224 reviews",
        "caption": "The Google map results for \"plumber in Leeds\", 24 November 2026. Rating, review count, hours and category sit beside every business."
      },
      {
        "type": "h2",
        "text": "What are the 20 steps in a local SEO checklist?"
      },
      {
        "type": "p",
        "text": "Work through the groups in order. Google Business Profile comes first because it feeds the map pack directly, and tracking comes last because it tells you what to fix next."
      },
      {
        "type": "h3",
        "text": "Google Business Profile: steps 1 to 6"
      },
      {
        "type": "p",
        "text": "Your Google Business Profile is the free listing that appears on Google Search and Maps. A complete, accurate profile is the single biggest lever for map results, so finish it before touching anything else."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "1. Claim and verify your profile.",
            "text": "Search for your business on Google Maps, claim the listing or create it, and complete Google's verification so you can edit it."
          },
          {
            "lead": "2. Choose the right primary category.",
            "text": "Pick the category that matches your main service, such as \"Plumber\" rather than \"Home services\". Add secondary categories only for services you really offer."
          },
          {
            "lead": "3. Fill in every field.",
            "text": "Add your exact name, address, phone number, website, opening hours and special hours. Use the same details your website shows."
          },
          {
            "lead": "4. List your services and products.",
            "text": "Add each service with a short description in plain words, so the profile matches the searches people make."
          },
          {
            "lead": "5. Upload real photos.",
            "text": "Add photos of your premises, your team and finished work. Replace stale ones as things change."
          },
          {
            "lead": "6. Keep the profile active.",
            "text": "Post updates, change hours for bank holidays and check the profile each month for edits or suggested changes."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Website: steps 7 to 11"
      },
      {
        "type": "p",
        "text": "Your website confirms what the profile says. Each location or service area needs a page that tells Google and customers what you do and where."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "7. Put your location in the key places.",
            "text": "Use your main service and town in the title tag, the H1 and the opening paragraph of your pages, where it reads naturally."
          },
          {
            "lead": "8. Build a page for each service and each location.",
            "text": "One helpful page per core service, and one per branch or main area. Skip thin pages that only swap the town name."
          },
          {
            "lead": "9. Show your details consistently.",
            "text": "Put your name, address and phone number in the footer and on a contact page, matching the profile exactly."
          },
          {
            "lead": "10. Add LocalBusiness schema.",
            "text": "Structured data with your name, address, phone number, hours and map coordinates helps search engines read the page. It is a clarity step, not a ranking trick."
          },
          {
            "lead": "11. Make the site fast on a phone.",
            "text": "Many local searches happen on a phone. Compress images, test the page speed and add a click-to-call button."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Listings and citations: steps 12 and 13"
      },
      {
        "type": "p",
        "text": "A citation is any mention of your business name, address and phone number on another website, such as a directory. Consistent citations show Google that your details are real and agree everywhere."
      },
      {
        "type": "table",
        "head": [
          "Where to list",
          "Why it helps",
          "What to check"
        ],
        "rows": [
          [
            "Bing Places",
            "Feeds Bing and tools that use Bing data",
            "Import from your Google profile and confirm the details match"
          ],
          [
            "Apple Business Connect",
            "Puts you on Apple Maps",
            "Claim the listing and add hours and photos"
          ],
          [
            "Yell and trade or industry directories",
            "Adds trusted mentions that match your trade",
            "Choose directories real customers use in your area"
          ],
          [
            "Local chamber or council pages",
            "Adds a local, trusted source",
            "Ask for a link to your website"
          ]
        ]
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "12. Audit your details.",
            "text": "Search your business name and phone number, list every place that shows them and fix any old address, number or name."
          },
          {
            "lead": "13. Claim the core listings.",
            "text": "Set up the platforms in the table above, then add directories your competitors appear in and you do not."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Reviews: steps 14 and 15"
      },
      {
        "type": "p",
        "text": "Reviews help you rank and decide who gets the call. The [BrightLocal Local Consumer Review Survey 2026](https://www.brightlocal.com/research/local-consumer-review-survey/) found that 97% of consumers read online reviews for local businesses, and that 74% look for reviews written in the last three months. Fresh reviews matter as much as the total."
      },
      {
        "type": "stats",
        "title": "Consumers who read online reviews for local businesses (BrightLocal, 2026)",
        "items": [
          {
            "value": "97%",
            "label": "read online reviews for local businesses"
          },
          {
            "value": "74%",
            "label": "look for reviews from the last three months"
          }
        ]
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "14. Ask every happy customer for a review.",
            "text": "Send the direct review link by text or email right after the job. Ask the same day, while the experience is fresh."
          },
          {
            "lead": "15. Reply to every review.",
            "text": "Thank people by name for good reviews and reply calmly and factually to poor ones. Replies show future customers how you treat people."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Local links and mentions: steps 16 and 17"
      },
      {
        "type": "p",
        "text": "Prominence comes from other trusted sites talking about you. Local mentions also feed the sources that AI assistants read."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "16. Earn local links.",
            "text": "Look for local press, community groups, suppliers, partners and sponsorships that can link to your website."
          },
          {
            "lead": "17. Use local social pages.",
            "text": "Keep a Facebook page up to date and take part in local community groups with useful answers. Link back to your site where the group allows it."
          }
        ]
      },
      {
        "type": "h3",
        "text": "AI answers and tracking: steps 18 to 20"
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "18. Write one clear description of your business.",
            "text": "Use the same short description on your site, your profile and your listings, naming your trade, town and what makes you different."
          },
          {
            "lead": "19. Track calls, directions and website clicks.",
            "text": "Read the performance figures in your Google Business Profile each month and add UTM tags to the website link so GA4 shows visits from your profile."
          },
          {
            "lead": "20. Review your checklist every month.",
            "text": "Note what changed, fix any new inconsistencies and add one improvement, such as a new service page or a batch of review requests."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you start local SEO for a small business?"
      },
      {
        "type": "p",
        "text": "Start with your Google Business Profile, then your website and listings. Google's People Also Ask box for \"local seo checklist\" shows the questions beginners ask first, including how to do local SEO, which tools to use and what to prioritise. The answer to all three is the same: fix the profile, make your details match everywhere, then collect reviews."
      },
      {
        "type": "image",
        "src": "/insights/local-seo-checklist-people-also-ask.jpg",
        "alt": "Google People Also Ask box for local seo checklist listing four questions: how can I do local SEO, can ChatGPT do an SEO audit, what are the best local SEO tools, and what are the top 5 things to boost local SEO in order of priority",
        "caption": "The Google UK People Also Ask box for \"local seo checklist\", 24 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you show up in AI answers for local searches?"
      },
      {
        "type": "p",
        "text": "AI assistants answer local questions from your website, your profile and the directories that copy them, so accurate details everywhere are the main job. A [Yext](https://www.businesswire.com/news/home/20251009106549/en) study of 6.8 million AI citations found that business websites and business listings made up 86% of the sources cited by ChatGPT, Gemini and Perplexity."
      },
      {
        "type": "p",
        "text": "The [Whitespark Local Search Ranking Factors 2026](https://whitespark.ca/local-search-ranking-factors/) report also added AI search factors for local businesses, which favour clear service pages and mentions on trusted local and industry sites. Match the checklist to each surface:"
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Google map results.",
            "text": "Decided by your profile, category, distance, reviews and the details on your site."
          },
          {
            "lead": "Google AI Overviews and AI Mode.",
            "text": "Pull from pages that answer the question directly, so write each service page with a clear answer first. Our guide on [how to rank in AI Overviews](/insights/how-to-rank-in-ai-overviews) covers the steps."
          },
          {
            "lead": "AI assistants such as ChatGPT.",
            "text": "Use listings and web pages to name local providers, so consistent details and trusted mentions matter. See our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt)."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you track local SEO results?"
      },
      {
        "type": "p",
        "text": "Track three things each month: how people find your profile, how many act on it, and how many arrive on your website. The profile shows calls, direction requests and website clicks. Search Console shows the searches and pages that bring organic visits, and GA4 shows what those visitors do. If you want to follow AI referrals too, our guide to [tracking AI traffic for free](/insights/track-ai-traffic) shows the setup, and our [SEO report template](/insights/seo-report-template) shows what to put in a monthly summary."
      },
      {
        "type": "checklist",
        "title": "A monthly local SEO check",
        "items": [
          "**Profile figures.** Note calls, direction requests and website clicks from your Google Business Profile.",
          "**Map position.** Search your main service and town in a private window and record where you appear.",
          "**Reviews.** Count new reviews, check every one has a reply and send the next batch of requests.",
          "**Listings.** Check your name, address and phone number still match on your site, Bing Places and Apple Business Connect.",
          "**Website data.** Check Search Console impressions and clicks for your local pages and GA4 visits from your profile link."
        ]
      },
      {
        "type": "h2",
        "text": "How long does local SEO take?"
      },
      {
        "type": "p",
        "text": "Small changes to your profile can show up within days or weeks, while steady map and organic rankings usually take a few months of consistent work. The timing depends on your competition and how complete your profile was to begin with. Treat the checklist as a monthly habit, not a one-off project."
      },
      {
        "type": "h2",
        "text": "What should you do first with a local SEO checklist?"
      },
      {
        "type": "p",
        "text": "Do steps 1 to 3 this week: claim your profile, choose the right primary category and make your details match your website. Then ask your next five customers for a review. Those two actions move the factors Google weighs most and cost nothing. For businesses that need a deeper profile plan, our [Google My Business guide for self storage](/insights/google-my-business-self-storage) shows how a full profile build works, and our guides for [estate agents](/insights/seo-for-estate-agents) and [moving companies](/insights/seo-for-moving-companies) show how it applies to specific trades."
      }
    ],
    "faq": [
      {
        "q": "What is the first step in a local SEO checklist?",
        "a": "Claim and verify your Google Business Profile. It feeds the map pack directly, and you cannot edit your details, reply to reviews or see performance figures until you have verified it."
      },
      {
        "q": "How do I rank in the Google map pack?",
        "a": "Match the search with the right primary category and services, be close to the searcher, and look trustworthy with accurate details and fresh reviews. You cannot change distance, so focus on the profile, reviews and consistent details across the web."
      },
      {
        "q": "Do I need a website for local SEO?",
        "a": "A website helps because it confirms your services, location and contact details and gives Google and AI assistants a page to read. A complete Google Business Profile can still bring calls and direction requests without one."
      },
      {
        "q": "How often should I ask for reviews?",
        "a": "Ask every customer once the job is done. There is no set number, but steady new reviews matter because 74% of consumers look for reviews from the last three months (BrightLocal 2026)."
      },
      {
        "q": "Is local SEO the same as SEO?",
        "a": "They overlap. Local SEO adds the work that matters when your customers are nearby, such as your Google Business Profile, local listings and location pages, on top of normal SEO for your website."
      }
    ]
  },
  {
    "slug": "b2b-content-marketing",
    "seoTitle": "B2B Content Marketing in 2027: Strategy for SEO and AI",
    "title": "B2B Content Marketing in 2027: A Strategy That Works for SEO and AI Search",
    "description": "B2B content marketing in 2027: how to plan content by buying stage, choose formats, distribute and retarget, repurpose and earn citations in AI answers.",
    "date": "2026-11-24",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [],
    "image": "/insights/b2b-content-marketing-banner.jpg",
    "intro": "Before a B2B buyer replies to your message, they have usually read your pages. A finance lead checks the pricing, an IT lead looks for the integration notes and an executive wants one proof point they can trust. B2B content marketing is how you make those pages exist, make them findable in Google and in AI assistants, and make them good enough to win the shortlist. This guide shows what the latest research says, how to plan content by buying stage and by role, how to distribute, retarget and repurpose it, and how to measure it.",
    "tldr": [
      "B2B content marketing is creating useful content that attracts, educates and convinces the several people involved in a business buying decision.",
      "The CMI and MarketingProfs 2027 report found 88% of B2B marketers use AI content tools, but only 17% say AI improved quality.",
      "Trust comes from useful information (64%), expertise (59%) and customer stories (50%), so build content around real experts, customers and data.",
      "Map content to the buying journey and to each role in the buying group, then distribute and retarget it across search, LinkedIn, email and partners.",
      "Measure visibility, engagement and pipeline, and refresh your best pages every quarter."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is B2B content marketing?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "B2B content marketing is the practice of creating and sharing useful content, such as guides, research, case studies, videos and emails, to attract, educate and convince the people who make business buying decisions. It works over a long sales cycle and speaks to a group of buyers, not one person."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the search \"b2b content marketing\" says much the same. It describes the practice as creating and distributing valuable, relevant content to attract, educate and convert business buyers while building long-term trust, and it names buying committees, longer sales cycles and funnel-mapped formats as the features that set it apart from consumer marketing."
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-google-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search b2b content marketing, defining it as creating and distributing valuable content to attract, educate and convert business buyers, with core pillars including buying committee alignment and funnel-mapped formats",
        "caption": "The Google UK AI Overview for \"b2b content marketing\", 24 November 2026."
      },
      {
        "type": "p",
        "text": "This guide is the full playbook. It covers what the latest research says, how to build a strategy, which content suits each stage and each person in the buying group, how to distribute and retarget, how to repurpose and how to measure. If you want the wider search plan around it, start with our [B2B SEO strategy](/insights/seo-for-b2b-companies) pillar. This post goes deeper on the content itself."
      },
      {
        "type": "h2",
        "text": "Do people search for B2B content marketing?"
      },
      {
        "type": "p",
        "text": "Yes, and they search for the neighbouring terms more often. In worldwide Google Trends data for the past 12 months, \"b2b lead generation\" and \"b2b seo\" both sit above \"b2b content marketing\". Buyers and marketers describe the same need in different words, so use all three in your headings and copy."
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-google-trends.jpg",
        "alt": "Google Trends chart for the past 12 months worldwide comparing the searches b2b content marketing, b2b seo and b2b lead generation, with b2b lead generation highest and b2b content marketing lowest",
        "caption": "Google Trends, worldwide, past 12 months to 24 November 2026: relative interest in \"b2b content marketing\" (blue), \"b2b seo\" (red) and \"b2b lead generation\" (yellow)."
      },
      {
        "type": "p",
        "text": "The questions people ask are basic ones. The Google UK People Also Ask box for the search shows \"What is B2B content marketing?\", \"What are some examples of B2B content marketing?\", \"What is B2B, B2C, C2C, D2C?\" and \"What does B2B mean in marketing?\". Each is answered in this guide or in the FAQ at the end."
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-people-also-ask.jpg",
        "alt": "Google UK People Also Ask box for b2b content marketing with four questions: what is B2B content marketing, what are some examples, what is B2B B2C C2C D2C and what does B2B mean in marketing",
        "caption": "People Also Ask for \"b2b content marketing\" on Google UK, 24 November 2026."
      },
      {
        "type": "h2",
        "text": "What does the latest research say about B2B content marketing in 2027?"
      },
      {
        "type": "p",
        "text": "The headline finding is that AI has made content faster, and marketers do not think it has made it better. The [Content Marketing Institute and MarketingProfs 2027 B2B report](https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research), based on 861 B2B marketers surveyed between June and August 2026, found that 88% use AI content creation tools. When asked what AI contributes, 78% said speed and only 17% said quality."
      },
      {
        "type": "stats",
        "title": "B2B content creation with AI (CMI and MarketingProfs, 861 B2B marketers, 2026 survey)",
        "items": [
          {
            "value": "88%",
            "label": "of B2B marketers use AI content creation tools"
          },
          {
            "value": "78%",
            "label": "say AI's main contribution is speed"
          },
          {
            "value": "17%",
            "label": "say AI has improved quality"
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-cmi-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search 2027 B2B content marketing trends report, summarising that AI adoption is widespread while speed and volume outpace quality and cause team burnout",
        "caption": "Google's AI Overview summarising the CMI and MarketingProfs 2027 B2B report, 24 November 2026."
      },
      {
        "type": "p",
        "text": "The same report shows what actually builds trust with a B2B audience, and none of it comes from producing more. Useful, practical information leads, followed by proven expertise and real customer stories."
      },
      {
        "type": "hbar",
        "title": "What builds trust and credibility with a B2B audience",
        "series": [
          {
            "name": "Share of B2B marketers",
            "color": "#E62E6B"
          }
        ],
        "rows": [
          {
            "label": "Consistently useful, practical information",
            "values": [
              64
            ]
          },
          {
            "label": "Demonstrating industry expertise",
            "values": [
              59
            ]
          },
          {
            "label": "Customer stories and testimonials",
            "values": [
              50
            ]
          },
          {
            "label": "Featuring subject matter experts",
            "values": [
              42
            ]
          },
          {
            "label": "Publishing original research",
            "values": [
              27
            ]
          }
        ],
        "source": {
          "label": "Content Marketing Institute and MarketingProfs, B2B Content and Marketing Trends: Insights for 2027"
        }
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-cmi-report-page.jpg",
        "alt": "Content Marketing Institute article on the 2027 B2B Content and Marketing Trends report, titled Faster and Cheaper, But Not Better, dated 4 November 2026",
        "caption": "The CMI write-up of its 2027 B2B research, published 4 November 2026."
      },
      {
        "type": "p",
        "text": "Budgets are following the same logic. For 2027, 42% of B2B marketers expect owned media to be a top investment area, up 10 percentage points on the year before, ahead of events at 35%, and AI tools and paid media at 30% each. Owned media means the channels you control, such as your website, blog, newsletter and community. It is where this guide puts most of its effort."
      },
      {
        "type": "stats",
        "title": "Where B2B marketers expect to invest most in 2027 (CMI and MarketingProfs)",
        "items": [
          {
            "value": "42%",
            "label": "owned media (up 10 points on 2026)"
          },
          {
            "value": "35%",
            "label": "events and experiential marketing"
          },
          {
            "value": "30%",
            "label": "AI tools, and 30% for paid media"
          }
        ]
      },
      {
        "type": "p",
        "text": "There is one more number worth knowing. Among marketers who saw website traffic fall in the last year, 79% blame AI-powered search. Overall, though, traffic is split: 31% saw an increase, 31% a decrease and 24% no change. Content that earns trust and gets cited in answers matters more than chasing volume."
      },
      {
        "type": "h2",
        "text": "How do you build a B2B content marketing strategy?"
      },
      {
        "type": "p",
        "text": "Build it in six steps: define who you write for, set goals tied to pipeline, choose topics from real searches, map content to the buying journey, pick formats and a calendar, then measure and refresh. Each step below is short on purpose, so you can run it in a week and improve it each quarter."
      },
      {
        "type": "h3",
        "text": "1. Who are you writing for?"
      },
      {
        "type": "p",
        "text": "A B2B purchase rarely rests with one person. Write down the roles in your typical deal: the end user, the technical evaluator, the budget holder and the executive sponsor. For each, note the question they ask and the worry that could stop the deal. A cybersecurity vendor, for example, writes one page for the IT lead worried about integration and another for the finance director worried about cost."
      },
      {
        "type": "h3",
        "text": "2. What goal will content serve?"
      },
      {
        "type": "p",
        "text": "Pick one or two goals that sales would recognise, such as qualified enquiries, demo requests or shortlist inclusion. CMI's respondents who rate their marketing effective point to content relevance and quality (47%) and alignment with sales (26%) as drivers, so involve sales in the goal from day one."
      },
      {
        "type": "h3",
        "text": "3. Which topics should you cover?"
      },
      {
        "type": "p",
        "text": "Start from the searches your buyers make. Our guide to [B2B keyword research](/insights/b2b-keyword-research) shows how to find terms by buying stage, including the questions people now type into AI assistants. Group the topics into a few pillars, each with supporting posts that answer the follow-up questions."
      },
      {
        "type": "h3",
        "text": "4. How do you map content to the buying journey?"
      },
      {
        "type": "p",
        "text": "List the stages, the question a buyer asks at each and the content that answers it. The next section gives a worked table."
      },
      {
        "type": "h3",
        "text": "5. Which formats and what publishing rhythm?"
      },
      {
        "type": "p",
        "text": "Choose formats your team can produce well every month, not every format at once. One strong guide, one case study and one piece of original data each quarter, repurposed across channels, usually beats weekly posts that say little."
      },
      {
        "type": "h3",
        "text": "6. How do you measure and refresh?"
      },
      {
        "type": "p",
        "text": "Check results monthly and refresh your best pages every quarter. The measurement section below covers the numbers to track."
      },
      {
        "type": "h2",
        "text": "What B2B content works at each stage of the buying journey?"
      },
      {
        "type": "p",
        "text": "Educational content works early, evidence of results works in the middle and proof that you can deliver works at the end. We asked ChatGPT for the top three content types a B2B buyer uses at each stage of choosing a supplier, and it gave the same arc: research reports, blog posts and webinars for awareness, case studies, webinars and comparison guides for consideration, and demos, reviews and ROI calculators for the decision."
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to the question what types of content do B2B buyers use at each stage of choosing a supplier, listing research reports, blog posts and webinars for the awareness stage",
        "caption": "ChatGPT's answer to \"What types of content do B2B buyers use at each stage of choosing a supplier?\", 24 November 2026."
      },
      {
        "type": "table",
        "head": [
          "Buying stage",
          "Question the buyer asks",
          "Content that answers it",
          "Where it should live"
        ],
        "rows": [
          [
            "Awareness",
            "What is the problem and what should we know about it?",
            "Original research, how-to guides, explainers, short videos",
            "Your blog, search, LinkedIn, YouTube"
          ],
          [
            "Consideration",
            "Which solutions and suppliers could solve it?",
            "Case studies, comparison pages, webinars, buyer's guides",
            "Your website, email, partner and review sites"
          ],
          [
            "Decision",
            "Can we trust this supplier to deliver?",
            "Demos, pricing pages, ROI calculators, customer references, security and compliance pages",
            "Your website, sales conversations, retargeting"
          ],
          [
            "Adoption and advocacy",
            "Are we getting value, and who else should know?",
            "Onboarding guides, customer communities, newsletters, customer stories",
            "Email, customer portal, events"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "What content does each person in the buying group need?"
      },
      {
        "type": "p",
        "text": "Different roles read different pages. Make each page answer one role's question and make it easy to forward, because buying groups share links internally before they ever speak to you."
      },
      {
        "type": "table",
        "head": [
          "Role",
          "What they worry about",
          "Content that helps"
        ],
        "rows": [
          [
            "End user",
            "Will this make my day easier?",
            "Product walkthroughs, short videos, how-to guides"
          ],
          [
            "Technical evaluator",
            "Will it work with our systems and meet requirements?",
            "Specifications, integration pages, documentation, security details"
          ],
          [
            "Finance or procurement",
            "What does it cost and what is the return?",
            "Pricing pages, ROI calculators, total cost guides"
          ],
          [
            "Executive sponsor",
            "Is this the right strategic bet?",
            "Original research, short business cases, peer customer stories"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Which B2B content formats should you use?"
      },
      {
        "type": "p",
        "text": "Use the formats that prove something, then add the ones that spread it. The top formats for B2B are guides, case studies, original research and comparison pages. Video, webinars, newsletters and tools extend their reach."
      },
      {
        "type": "cards",
        "title": "Formats that earn their place in a B2B content plan",
        "items": [
          {
            "title": "Guides and explainers",
            "meta": "Educate",
            "text": "Answer-first articles that rank and get quoted. Pillar pages hold the cluster together."
          },
          {
            "title": "Case studies",
            "meta": "Prove",
            "text": "Real customer, real problem, real numbers. Buyers in the middle of the journey look for these first."
          },
          {
            "title": "Original research",
            "meta": "Earn links",
            "text": "A survey or analysis of your own data. Only 27% of B2B marketers in the CMI survey say they publish it, so it stands out."
          },
          {
            "title": "Comparison pages",
            "meta": "Decide",
            "text": "Honest side-by-side pages for your category. They match how buyers shortlist and how AI assistants build lists."
          },
          {
            "title": "Video and webinars",
            "meta": "Show",
            "text": "Short product and expert videos for YouTube and LinkedIn, plus live sessions that you cut into clips."
          },
          {
            "title": "Newsletters",
            "meta": "Keep",
            "text": "An owned channel that does not depend on an algorithm. It keeps you in front of buyers who are not ready yet."
          },
          {
            "title": "Calculators and tools",
            "meta": "Convert",
            "text": "ROI or cost calculators give a buyer a number to take to finance."
          },
          {
            "title": "Events",
            "meta": "Meet",
            "text": "82% of B2B marketers in the CMI research put budget into content-led experiences in 2026."
          }
        ]
      },
      {
        "type": "p",
        "text": "CMI's respondents say the top benefits of experiences are brand trust (43%), awareness (41%) and qualified leads (37%). If you cannot run events, a regular webinar or customer roundtable gives you part of the same effect."
      },
      {
        "type": "h2",
        "text": "How do you distribute B2B content?"
      },
      {
        "type": "p",
        "text": "Publish on your own site first, then push each piece to the places your buyers already spend time: search, LinkedIn, YouTube, email, partner sites and industry publications. Distribution is a plan, not a hope. Decide the channels before you write the piece."
      },
      {
        "type": "list",
        "items": [
          "**Search and AI answers.** Write each page to rank and to be quoted. Our guides on [answer engine optimisation](/insights/answer-engine-optimisation) and [LLM SEO](/insights/llm-seo) cover the structure.",
          "**LinkedIn.** Share the main finding as a post, a short document carousel and a founder or expert comment. Buyers follow people more than pages.",
          "**YouTube.** Turn the guide into a three to five minute explainer. Video also gives AI assistants another source to cite.",
          "**Email.** Send the piece to your list with one line on who it helps. Segment by role where you can.",
          "**Partners and publications.** Offer a quote, data or a guest article to trade bodies and industry sites. This is digital PR, and our guide to [B2B link building](/insights/b2b-link-building) covers how to do it.",
          "**Sales.** Give the sales team a one-line summary and a link for each new asset, so it gets used in live deals."
        ]
      },
      {
        "type": "h2",
        "text": "How do you retarget B2B buyers with content?"
      },
      {
        "type": "p",
        "text": "Retargeting shows follow-up content to people who have already visited your site or engaged with you. In B2B it works best when the next message matches what the person just read, and when the audience is the right accounts, not everyone."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for \"b2b retargeting platforms\" lists LinkedIn Ads, Google Ads and Meta Ads as the core ad platforms, often paired with account-based marketing and intent tools such as Demandbase, Bombora and G2 Buyer Intent. It also notes audience size minimums on some platforms, so check each platform's current rules before you plan a campaign."
      },
      {
        "type": "image",
        "src": "/insights/b2b-content-marketing-retargeting-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search b2b retargeting platforms, listing LinkedIn Ads, Google Ads and Meta Ads with account-based marketing and intent platforms such as Demandbase, Bombora and G2 Buyer Intent",
        "caption": "The Google UK AI Overview for \"b2b retargeting platforms\", 24 November 2026."
      },
      {
        "type": "steps",
        "title": "How to set up a simple B2B retargeting sequence",
        "items": [
          {
            "title": "Build audiences from your site",
            "text": "Create lists of visitors to your guides, your pricing page and your case studies. Keep them separate, because they signal different intent."
          },
          {
            "title": "Match the next piece to the last page",
            "text": "Show a case study to people who read a guide. Show a demo or ROI calculator to people who visited pricing."
          },
          {
            "title": "Add company and job-title targeting",
            "text": "On LinkedIn, limit ads to the job titles and company lists in your buying group, so the budget reaches decision makers."
          },
          {
            "title": "Cap frequency and set a window",
            "text": "Show each person the sequence for 30 to 60 days, then stop. Add exclusions for people who have already booked."
          },
          {
            "title": "Measure by account, not click",
            "text": "Check how many target accounts came back, booked a call or moved a deal on, using your CRM."
          }
        ]
      },
      {
        "type": "p",
        "text": "The platforms differ. LinkedIn reaches specific job titles and company lists. Google Ads captures people who searched for your terms and lets you remarket on search, YouTube and display. Meta Ads suits broader reminders to a wider audience. Start with the one where your buyers already pay attention, and add another only when the first is working."
      },
      {
        "type": "h2",
        "text": "How do you repurpose B2B content?"
      },
      {
        "type": "p",
        "text": "Start with one substantial piece of content and cut it into smaller pieces for each channel. A single original study can feed a report, a guide, a webinar, a month of LinkedIn posts, a video and a sales one-pager. This lets a small team publish often without writing from scratch every time."
      },
      {
        "type": "flow",
        "title": "One piece of original research, repurposed",
        "steps": [
          {
            "label": "1. Research",
            "text": "Run a survey or analyse your own data, then publish the findings as a guide on your site."
          },
          {
            "label": "2. Report",
            "text": "Turn the data into a short report or checklist, gated or open, with charts."
          },
          {
            "label": "3. Social",
            "text": "Post one finding at a time on LinkedIn over several weeks, each with a chart."
          },
          {
            "label": "4. Video",
            "text": "Record a short explainer or a webinar with an expert and cut it into clips."
          },
          {
            "label": "5. Sales",
            "text": "Give sales a one-page summary and quotes, and use it in retargeting and email."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you get B2B content cited in AI answers?"
      },
      {
        "type": "p",
        "text": "Make each section a clear answer, add something only you can offer and earn mentions on other trusted sites. AI assistants lift passages, so write each section to stand alone with a direct answer in the first 40 to 60 words. Our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) covers the platform steps, and [AEO vs SEO](/insights/aeo-vs-seo) shows how the page build differs."
      },
      {
        "type": "p",
        "text": "The author of the CMI write-up, Robert Rose, makes a useful point. The one thing an answer engine cannot produce without you is your own expertise: the expert who spends an hour with a writer, the customers who go on record and the research you run. Plan your content around those sources and you give AI assistants something to cite."
      },
      {
        "type": "compare",
        "title": "Content that is easy for a model to quote (illustrative example)",
        "columns": [
          {
            "title": "Hard to quote",
            "tone": "bad",
            "items": [
              "We help companies with their growth journey.",
              "Our customers love the results.",
              "Read on to find out more."
            ]
          },
          {
            "title": "Easy to quote",
            "tone": "good",
            "items": [
              "Our payroll platform for UK hospitality runs weekly pay for up to 500 staff.",
              "The price includes holiday pay and pension reporting for every employee.",
              "Last checked 24 November 2026."
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure B2B content marketing?"
      },
      {
        "type": "p",
        "text": "Measure content against the goal it serves, in three groups: visibility, engagement and pipeline. CMI's respondents say the top two ways they measure trust are customer retention or referral rates (50%) and website engagement (45%), which fits this split."
      },
      {
        "type": "table",
        "head": [
          "Group",
          "What to track",
          "Where to find it"
        ],
        "rows": [
          [
            "Visibility",
            "Impressions, clicks and rankings for target questions, plus mentions in AI answers",
            "Search Console, a monthly set of AI prompts"
          ],
          [
            "Engagement",
            "Engaged sessions, scroll depth, newsletter sign-ups, return visits",
            "GA4"
          ],
          [
            "Pipeline",
            "Demo and enquiry requests by source, lead quality, deals influenced by content",
            "CRM, with source fields on forms"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Set up GA4 so that AI referrals and organic visits are separated, using our guide to [tracking AI traffic for free](/insights/track-ai-traffic). Lay the numbers out in a monthly report using our [SEO report template](/insights/seo-report-template). Review content that ranks on page one every quarter, refresh the facts and rewrite pages that sit lower."
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Get a free keyword list for your business",
        "text": "Want a head start on the topics? [Get a free keyword list for your business](/book). Tell us what you sell and who you sell to, and we will send back a starter list of B2B terms grouped by buying stage."
      },
      {
        "type": "h2",
        "text": "What should you do first with B2B content marketing?"
      },
      {
        "type": "p",
        "text": "Pick your best-selling product, list the questions a buyer asks before they choose, and write one answer-first guide and one case study for them. Share both through LinkedIn, email and your sales team, then check Search Console and your CRM after 30 days. That small loop shows what to scale, and it uses the same approach that the research above says builds trust: useful information, expertise and real customer stories."
      }
    ],
    "faq": [
      {
        "q": "What is B2B content marketing?",
        "a": "B2B content marketing is creating and sharing useful content such as guides, research, case studies and videos to attract, educate and convince business buyers. It runs over a long sales cycle and speaks to the several people involved in a buying decision."
      },
      {
        "q": "What are some examples of B2B content marketing?",
        "a": "Examples include an original industry survey, a how-to guide, a customer case study, a comparison page, a webinar, a newsletter and an ROI calculator. The best examples answer a specific buyer question at a specific stage of the journey."
      },
      {
        "q": "What does B2B mean in marketing?",
        "a": "B2B stands for business to business. It describes companies that sell to other companies, as opposed to B2C, where companies sell to consumers."
      },
      {
        "q": "What is the difference between B2B and B2C content marketing?",
        "a": "B2B content speaks to a group of buyers with longer sales cycles, bigger budgets and more need for proof. B2C content usually targets one person making a faster, more emotional decision."
      },
      {
        "q": "How often should a B2B company publish content?",
        "a": "Publish at a rate your team can keep up with and keep quality high. One strong guide, one case study and one piece of original data each quarter, repurposed across channels, is a sensible start for a small team."
      },
      {
        "q": "Which B2B content format works best?",
        "a": "Case studies and original research are the strongest proof formats, and guides bring in search traffic. CMI's respondents say useful information (64%), expertise (59%) and customer stories (50%) build the most trust."
      },
      {
        "q": "How do you retarget B2B buyers?",
        "a": "Build audiences from your website visitors, show each group the next piece of content that fits what they read, target the right job titles and companies, and stop after a set window. LinkedIn Ads, Google Ads and Meta Ads are the main platforms."
      },
      {
        "q": "Does AI-written content work for B2B?",
        "a": "AI can speed up drafting, but CMI's 2027 research found only 17% of marketers say AI improved quality. Use it for outlines and edits, and add real expertise, customer stories and data yourself."
      },
      {
        "q": "How do you measure B2B content marketing?",
        "a": "Track visibility in Search Console, engagement in GA4 and pipeline in your CRM. Tie each content piece to a goal and review it monthly."
      },
      {
        "q": "How long does B2B content marketing take to work?",
        "a": "Expect early signals such as impressions and engagement within a few months, and pipeline impact over six to twelve months. Longer sales cycles mean results arrive later than in B2C."
      }
    ]
  },
  {
    "slug": "llm-seo",
    "seoTitle": "LLM SEO in 2027: How to Optimise Content for AI Models",
    "title": "LLM SEO in 2027: How to Optimise Your Content for Large Language Models",
    "description": "LLM SEO in 2027: how to structure pages, build clear entities and earn mentions so ChatGPT, Gemini and Claude can find, trust and quote your content.",
    "date": "2026-11-24",
    "author": "team",
    "topics": [
      "AEO/GEO",
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/llm-seo-banner.jpg",
    "intro": "Someone asks ChatGPT which payroll tool suits a restaurant, and a model reads a handful of pages, lifts a few sentences and writes an answer. Your page is either one of those pages or it is not. LLM SEO is the work of making sure it is. This guide shows how to write and structure content, make your brand clear and set up your site so large language models can find, trust and quote you in 2027, and which popular tactics, such as llms.txt, are not worth your time.",
    "tldr": [
      "LLM SEO is the practice of making your content easy for large language models such as ChatGPT, Gemini and Claude to find, trust and quote.",
      "Write each section as a standalone answer: a question heading, a direct answer in the first 40 to 60 words, then a specific, dated fact.",
      "Kevin Indig found 44.2% of ChatGPT citations came from the first 30% of a page, so put the answer early.",
      "Make your brand one consistent entity, earn mentions on trusted sites and let AI search crawlers in through robots.txt.",
      "Skip llms.txt for now: Ahrefs found 97% of the files got no requests in May 2026."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is LLM SEO?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "LLM SEO is the practice of shaping your pages, your brand details and your presence on other websites so that large language models (LLMs) such as ChatGPT, Gemini, Claude and Perplexity can find your content, trust it and quote it in their answers. It builds on normal SEO and adds a focus on how passages are written, how your brand is described and where else you are mentioned."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the search \"llm seo\" gives the same picture. It says LLM SEO is also called LLMO, GEO or AEO, that success means being mentioned or cited inside an answer instead of only winning a blue link, and that fresh, well-structured content and mentions on trusted third-party sites help. That is a fair summary, and the rest of this guide turns each part into a job you can do."
      },
      {
        "type": "image",
        "src": "/insights/llm-seo-google-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search llm seo, defining it as optimising content so large language models understand, trust, mention and cite your brand, with a list of how it differs from traditional SEO",
        "caption": "The Google UK AI Overview for \"llm seo\", 24 November 2026."
      },
      {
        "type": "p",
        "text": "This guide covers the content side: how to write and structure pages, how to make your brand clear to a model, and what to do about crawlers and llms.txt. If you want the platform-specific steps for ChatGPT, read our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt). If you want the comparison with classic SEO, see [GEO vs SEO](/insights/geo-vs-seo) and [AEO vs SEO](/insights/aeo-vs-seo)."
      },
      {
        "type": "h2",
        "text": "Do people search for LLM SEO or AI SEO?"
      },
      {
        "type": "p",
        "text": "People search for AI SEO far more often than LLM SEO. In Google Trends for the UK over the past 12 months, \"ai seo\" sits well above both \"geo seo\" and \"llm seo\", and \"llm seo\" barely registers. The terms mean much the same thing, so use the words your buyers type in your headings and say LLM SEO where it helps readers who already use that term."
      },
      {
        "type": "image",
        "src": "/insights/llm-seo-google-trends.jpg",
        "alt": "Google Trends chart for the United Kingdom over the past 12 months comparing the searches llm seo, ai seo and geo seo, with ai seo far ahead",
        "caption": "Google Trends, UK, past 12 months to 24 November 2026: relative interest in \"llm seo\", \"ai seo\" and \"geo seo\"."
      },
      {
        "type": "p",
        "text": "The questions people ask around the topic are plain ones. The Google UK People Also Ask box for \"llm seo\" shows \"What is LLM in SEO?\", \"Is there SEO for LLMs?\", \"Which LLM is good for SEO?\" and \"What is SEO for LLMs called?\". Each of those is answered in this guide, and in the FAQ at the end."
      },
      {
        "type": "image",
        "src": "/insights/llm-seo-people-also-ask.jpg",
        "alt": "Google UK People Also Ask box for the search llm seo with four questions: what is LLM in SEO, is there SEO for LLMs, which LLM is good for SEO and what is SEO for LLMs called",
        "caption": "People Also Ask for \"llm seo\" on Google UK, 24 November 2026."
      },
      {
        "type": "h2",
        "text": "How do large language models find and quote a page?"
      },
      {
        "type": "p",
        "text": "A large language model answers from two places: what it learned in training, and pages it fetches at the moment you ask. LLM SEO mostly works on the second. When an assistant uses search, it runs queries, reads the top pages from a search index, pulls out the passages that answer the question and writes a response with links. Your job is to be in the index, be easy to read and have a passage worth lifting."
      },
      {
        "type": "p",
        "text": "Ranking still matters for that reason. Ahrefs found in an updated study that [38% of pages cited in Google AI Overviews also rank in the top 10](https://ahrefs.com/blog/ai-overview-citations-top-10/) for the same query, down from 76% in its July 2025 version, which shows Google now cites a wider mix of pages. A top 10 position helps, and it is no longer the only route in."
      },
      {
        "type": "stats",
        "title": "Key figure",
        "items": [
          {
            "value": "38%",
            "label": "of pages cited in Google AI Overviews also rank in the top 10 (Ahrefs, March 2026 update; 76% in July 2025)"
          }
        ]
      },
      {
        "type": "p",
        "text": "Where the answer sits on the page matters too. Kevin Indig analysed 18,012 verified ChatGPT citations from 1.2 million AI answers and found that 44.2% came from the first 30% of a page, 31.1% from the middle and 24.7% from the final third. Put the answer early, and do not rely on a closing summary to carry the point."
      },
      {
        "type": "stats",
        "title": "Where ChatGPT citations came from on the page (Kevin Indig, 18,012 citations)",
        "items": [
          {
            "value": "44.2%",
            "label": "from the first 30% of the page"
          },
          {
            "value": "31.1%",
            "label": "from the middle 30% to 70%"
          },
          {
            "value": "24.7%",
            "label": "from the final third"
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you structure content for LLM SEO?"
      },
      {
        "type": "p",
        "text": "Write each section so it works as a standalone answer: a question heading, a direct answer in the first 40 to 60 words, then the detail. A model lifts passages, not whole pages, so every passage must make sense on its own. When we asked ChatGPT for the top three things that make a page easy to quote, it gave the same advice: answer-first content, specific and verifiable information, and clear, accessible pages."
      },
      {
        "type": "image",
        "src": "/insights/llm-seo-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to the question what makes a web page easy for an AI assistant to quote, listing direct answer-first content, specific verifiable information and clear accessible content",
        "caption": "ChatGPT's answer to \"What makes a web page easy for an AI assistant to quote?\", 24 November 2026."
      },
      {
        "type": "h3",
        "text": "1. How do you write an answer-first passage?"
      },
      {
        "type": "p",
        "text": "Start the section with the answer, name the subject and add one proof point. Then add the how and why. This is the shape a model can copy into a response without editing."
      },
      {
        "type": "compare",
        "title": "Rewriting a passage so a model can quote it (illustrative example)",
        "columns": [
          {
            "title": "Hard to quote",
            "tone": "bad",
            "items": [
              "It has been a journey for us, and customers often ask about it.",
              "Our platform helps teams in lots of ways, depending on what they need.",
              "See below for more on this."
            ]
          },
          {
            "title": "Easy to quote",
            "tone": "good",
            "items": [
              "Payroll software for UK restaurants runs weekly pay and holiday accrual in one place.",
              "Plans start at £4 per employee a month, with a 30 day free trial.",
              "Last checked 24 November 2026."
            ]
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. How do you make every section stand alone?"
      },
      {
        "type": "list",
        "items": [
          "**Use the name, not \"it\".** Write \"the payroll tool\" or the product name, so a lifted sentence keeps its meaning.",
          "**Give one idea per paragraph.** Short paragraphs of two to four sentences are easier to extract than long blocks.",
          "**Phrase headings as questions.** Real queries such as \"How much does restaurant payroll software cost?\" match how people prompt an assistant.",
          "**Use a table for comparisons.** Price, features and limits in rows give a model clean facts to read."
        ]
      },
      {
        "type": "h3",
        "text": "3. What proof makes a page worth quoting?"
      },
      {
        "type": "p",
        "text": "Specific, dated facts beat general claims. Add figures, prices, limits, dates and the source, and say when you last checked them. Original data that nobody else has, such as your own survey or benchmark, is the strongest reason for a model to cite you instead of a competitor. Refresh these facts when they change, because assistants lean towards recent content and a changed date with old numbers does not count."
      },
      {
        "type": "h2",
        "text": "How do entities and citations work in LLM SEO?"
      },
      {
        "type": "p",
        "text": "An entity is a clearly defined thing, such as your company, a product, a person or a place. A model decides whether to mention you by how consistently the web describes that entity. If your name, what you sell and who you serve read the same on your site, your profiles and other people's pages, a model can connect them. If they differ, it may skip you."
      },
      {
        "type": "h3",
        "text": "1. How do you make your brand clear to a model?"
      },
      {
        "type": "list",
        "items": [
          "**Use one name everywhere.** Pick the exact company and product names and use them on your site, LinkedIn, directories and press.",
          "**Write a plain About page.** Say what you do, for whom, where, and since when, in two or three sentences near the top.",
          "**Add Organisation schema with your profiles.** It confirms the facts and links your official profiles together.",
          "**Name real people.** Authors and experts with a short bio and a LinkedIn profile help a model tell you apart from lookalikes."
        ]
      },
      {
        "type": "code",
        "title": "Organisation schema with sameAs profiles (replace the examples)",
        "code": "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"Your Company Name\",\n  \"url\": \"https://www.yourcompany.com\",\n  \"description\": \"One plain sentence saying what you do and for whom.\",\n  \"sameAs\": [\n    \"https://www.linkedin.com/company/your-company\",\n    \"https://www.youtube.com/@yourcompany\"\n  ]\n}"
      },
      {
        "type": "p",
        "text": "Treat schema as housekeeping. It helps search engines read the page and confirms the facts, but it does not on its own earn citations."
      },
      {
        "type": "h3",
        "text": "2. How do you earn the mentions that models look for?"
      },
      {
        "type": "p",
        "text": "Mentions on other trusted sites carry weight because they show that people outside your company describe you the same way. Google's AI Overview for this topic lists unlinked brand mentions and third-party authority as a factor. Digital PR, expert quotes, industry directories, partner pages and reviews all create them. Our guide to [B2B link building](/insights/b2b-link-building) covers the tactics, and the same work feeds your [B2B SEO strategy](/insights/seo-for-b2b-companies)."
      },
      {
        "type": "h2",
        "text": "Which technical settings matter for LLM SEO?"
      },
      {
        "type": "p",
        "text": "Three technical checks matter most: let the right crawlers in, keep the answer in plain HTML and make sure the page is indexed. A page that a crawler cannot fetch, or that shows its main text only after JavaScript runs, may as well not exist for an assistant."
      },
      {
        "type": "h3",
        "text": "1. How do you allow AI crawlers in robots.txt?"
      },
      {
        "type": "p",
        "text": "Check robots.txt and any CDN or firewall settings, such as Cloudflare's bot controls, which can block AI bots by default. The search and assistant crawlers to allow if you want to appear in answers include OAI-SearchBot and ChatGPT-User from OpenAI, Claude-SearchBot and Claude-User from Anthropic and PerplexityBot. GPTBot and ClaudeBot are mainly for training, so allowing them is a separate choice about your content."
      },
      {
        "type": "code",
        "title": "robots.txt rules that allow AI search and assistant crawlers",
        "code": "User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /"
      },
      {
        "type": "p",
        "text": "Crawler names change, so check each company's current documentation before you edit the file."
      },
      {
        "type": "h3",
        "text": "2. How do you keep answers readable without JavaScript?"
      },
      {
        "type": "p",
        "text": "Open the page with JavaScript switched off, or view the page source. If your main answer, price table or FAQ is missing, a simple crawler will miss it too. Put the key text in the HTML, and avoid hiding answers inside tabs or accordions that load on click."
      },
      {
        "type": "h3",
        "text": "3. How do you check the page is indexed?"
      },
      {
        "type": "p",
        "text": "Assistants that search the web draw on search indexes, including Google and Bing. Use URL Inspection in Google Search Console and Bing Webmaster Tools to confirm the page is indexed, list it in your XML sitemap and link to it from related pages on your own site."
      },
      {
        "type": "h2",
        "text": "Does llms.txt help LLM SEO?"
      },
      {
        "type": "p",
        "text": "llms.txt does not help LLM SEO today. It is a markdown index file placed at the root of a site, proposed in 2024, and it is often sold as a way to get cited. The largest study so far says otherwise. Ahrefs analysed 137,210 domains and found that [97% of valid llms.txt files received zero requests in May 2026](https://ahrefs.com/blog/llmstxt-study/), and that AI retrieval bots made only 1.1% of the requests the files did get."
      },
      {
        "type": "stats",
        "title": "llms.txt in practice (Ahrefs, 137,210 domains, May 2026)",
        "items": [
          {
            "value": "28%",
            "label": "of domains publish an llms.txt file"
          },
          {
            "value": "97%",
            "label": "of those files received no requests at all"
          },
          {
            "value": "1.1%",
            "label": "of requests came from AI retrieval bots such as OAI-SearchBot and PerplexityBot"
          }
        ]
      },
      {
        "type": "p",
        "text": "Google's John Mueller said in 2025 that no AI system currently uses the file, and later described it as not done for search. Ahrefs also found that no AI bot looked for an llms.txt file on sites that did not have one. If your site is built on a platform that generates the file for you, leave it. If not, spend the time on the answer-first pages and the mentions above, and revisit the file if a major assistant says it reads it."
      },
      {
        "type": "h2",
        "text": "How do you measure LLM SEO?"
      },
      {
        "type": "p",
        "text": "Measure three things: whether assistants mention you for your key questions, whether AI tools send visits and whether your pages are indexed and ranking. None of them needs a paid tool to start. Our guide on [tracking AI traffic for free](/insights/track-ai-traffic) shows the Google Analytics 4 and Search Console setup."
      },
      {
        "type": "checklist",
        "title": "A monthly LLM SEO check",
        "items": [
          "**Run 10 real prompts.** Ask ChatGPT, Gemini, Claude and Google AI Mode the questions your buyers ask, and note who is named and which sources are shown.",
          "**Check AI referrals.** Look at visits from chatgpt.com, perplexity.ai and similar sources in GA4.",
          "**Check indexing and rankings.** Use Search Console for impressions and clicks on your target questions.",
          "**Check crawler access.** Confirm robots.txt and your CDN still allow the search and assistant bots.",
          "**Refresh one page.** Update the facts, figures and last-checked date on your best page for each topic."
        ]
      },
      {
        "type": "h2",
        "text": "What should you do first with LLM SEO?"
      },
      {
        "type": "p",
        "text": "Pick your most valuable page, rewrite each section so it opens with a direct answer and a dated fact, check that AI search crawlers can reach it and make sure your company name and description match across your profiles. That one page teaches you what works before you roll it out across the site. For the wider picture, our guide to [answer engine optimisation](/insights/answer-engine-optimisation) shows how this fits into a full plan, and for Google's own AI features read [how to rank in AI Overviews](/insights/how-to-rank-in-ai-overviews)."
      }
    ],
    "faq": [
      {
        "q": "What is LLM in SEO?",
        "a": "LLM stands for large language model, the technology behind ChatGPT, Gemini, Claude and Perplexity. In SEO it refers to optimising your content so these models can find it, trust it and quote it in their answers."
      },
      {
        "q": "Is there SEO for LLMs?",
        "a": "Yes. LLM SEO covers answer-first content, clear brand and entity details, mentions on trusted sites, crawler access and fresh facts. It builds on normal SEO, because many assistants use search indexes to find pages."
      },
      {
        "q": "What is SEO for LLMs called?",
        "a": "It goes by several names, including LLM SEO, LLMO, GEO (generative engine optimisation), AEO (answer engine optimisation) and AI SEO. In UK Google Trends data, \"ai seo\" is searched far more than \"llm seo\" or \"geo seo\"."
      },
      {
        "q": "Which LLM is good for SEO?",
        "a": "Use whichever assistant your buyers use, because the aim is to be mentioned there. ChatGPT, Gemini, Claude and Google AI Mode each draw on different sources, so test your key questions in all of them rather than relying on one."
      },
      {
        "q": "Does LLM SEO replace normal SEO?",
        "a": "No. Search indexes such as Google and Bing remain a major source of pages for assistants, so rankings, indexing and links still matter. LLM SEO adds passage writing, entity clarity and off-site mentions on top."
      },
      {
        "q": "Do I need an llms.txt file?",
        "a": "Probably not. Ahrefs found that 97% of valid llms.txt files received no requests in May 2026 and that AI retrieval bots made only 1.1% of requests to the files that did get traffic. It is cheap to add, but it is not a reliable way to get cited."
      },
      {
        "q": "Should I block AI crawlers?",
        "a": "Only if you have a reason to keep your content out of AI answers. Blocking search and assistant crawlers such as OAI-SearchBot or PerplexityBot can stop your pages from being quoted. Training crawlers such as GPTBot are a separate choice."
      },
      {
        "q": "How long does LLM SEO take?",
        "a": "Technical fixes can show up within weeks once pages are crawled again. Authority built through mentions and reviews takes months. Re-run the same set of prompts each month to see change."
      }
    ]
  },
  {
    "slug": "third-party-logistics-marketing",
    "seoTitle": "3PL Marketing in 2027: How 3PLs Generate More Leads",
    "title": "3PL Marketing in 2027: How Third-Party Logistics Providers Generate Leads",
    "description": "3PL marketing in 2027: how third-party logistics providers win warehousing and fulfilment clients with service pages, quote forms, reviews and AI answers.",
    "date": "2026-11-21",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [
      "Logistics"
    ],
    "image": "/insights/third-party-logistics-marketing-banner.jpg",
    "intro": "A brand that outgrows packing orders at home does not ask a salesperson who the best 3PL is. It searches, compares a few providers, asks an AI assistant what makes one trustworthy and sends a quote request to the ones that look credible. 3PL marketing is the work of being one of those providers. This guide shows how third-party logistics companies can do that in 2027, from the service page to the quote form to the answer an assistant gives.",
    "tldr": [
      "3PL marketing is how a third-party logistics provider gets found, trusted and chosen by companies outsourcing warehousing, fulfilment or distribution.",
      "CBRE found 3PL operators took 34% of UK big box take-up from Q1 2025 to Q3 2026, and estimates much of it supports direct to consumer e-commerce, so more of your buyers are online brands that research providers online.",
      "Buyers search for services such as pick and pack and for \"3PL\" with a place or sector, so build one page per service, sector and location.",
      "Use short quote forms and publish service levels, accuracy figures, reviews and references, which are the proof buyers and AI assistants look for.",
      "Measure quote requests by source and their quality, not just traffic."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is 3PL marketing?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "3PL marketing is the work a third-party logistics provider does to get found, trusted and chosen by companies that want to outsource warehousing, fulfilment, pick and pack or distribution. It covers search and AI answer visibility, service and location pages, quote forms, reviews, operational proof and outreach to the people who choose a logistics partner."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the search \"3pl marketing\" gives the same picture: positioning a 3PL's warehousing, fulfilment and freight services to win shipper accounts in a crowded market. It also lists clear niche positioning, operational proof, SEO, LinkedIn and educational content as the main levers. That is a fair summary, and the rest of this guide turns each lever into a job you can do."
      },
      {
        "type": "image",
        "src": "/insights/3pl-marketing-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search 3pl marketing, describing it as how third-party logistics providers position warehousing, fulfilment and freight services to win shipper accounts",
        "caption": "The Google UK AI Overview for \"3pl marketing\", 21 November 2026."
      },
      {
        "type": "p",
        "text": "The focus here is warehousing and fulfilment providers. If you move freight, our guide to [logistics marketing](/insights/logistics-marketing) covers that side. If you sell software or consulting to supply chain teams, read [supply chain marketing](/insights/supply-chain-marketing) instead."
      },
      {
        "type": "h2",
        "text": "Why does 3PL marketing matter in 2027?"
      },
      {
        "type": "p",
        "text": "3PL marketing matters because outsourcing has become the default way for brands to scale, so more of your buyers are comparing providers online before they speak to anyone. [CBRE](https://www.cbre.co.uk/insights/articles/the-silent-driver-e-commerce-and-the-3pl-market) reports that 3PL operators took 14.5 million sq ft, or 34%, of UK big box take-up between Q1 2025 and Q3 2026, making them the largest single source of demand."
      },
      {
        "type": "stats",
        "title": "3PLs in UK big box demand, Q1 2025 to Q3 2026 (CBRE)",
        "items": [
          {
            "value": "34%",
            "label": "of big box take-up went to 3PL operators"
          },
          {
            "value": "59%",
            "label": "of that 3PL take-up supports direct to consumer e-commerce (CBRE estimate)"
          },
          {
            "value": "30%",
            "label": "e-commerce share of take-up once that space is counted, three times the 10% headline"
          }
        ]
      },
      {
        "type": "p",
        "text": "The same CBRE analysis explains why. A 3PL lets a smaller brand rent capacity by the pallet instead of by the building, and some of the biggest e-commerce occupiers also outsource parts of their operation. E-commerce demand now arrives under a 3PL name, which means your future clients are often online brands that research providers the way they research any other supplier."
      },
      {
        "type": "image",
        "src": "/insights/3pl-marketing-cbre-ecommerce-share.jpg",
        "alt": "Column chart of CBRE UK big box take-up from Q1 2025 to Q3 2026: pure-play online retailers 10%, 3PL operators 34%, and e-commerce share 30% once direct to consumer space in 3PL deals is counted",
        "caption": "E-commerce demand sits inside 3PL deals. Source: CBRE Research, Q3 2026."
      },
      {
        "type": "p",
        "text": "For your business, that means a wider and younger buyer pool than the traditional shipper with a logistics manager. Growing brands have a founder or operations lead who searches, compares and asks an AI assistant before sending an enquiry. You need to be visible at each of those steps."
      },
      {
        "type": "h2",
        "text": "What do buyers search for when they choose a 3PL?"
      },
      {
        "type": "p",
        "text": "Buyers search for the service and the problem, not for marketing. In Google Trends for the UK over the past 12 months, \"3PL\" was searched far more than \"fulfilment centre\", while \"3pl marketing\" barely registered at all. People type what they need, so your pages should use those words."
      },
      {
        "type": "image",
        "src": "/insights/3pl-marketing-google-trends.jpg",
        "alt": "Google Trends chart for the United Kingdom over the past 12 months comparing the searches 3PL, fulfilment centre and 3pl marketing, with 3PL far ahead",
        "caption": "Google Trends, UK, past 12 months to 21 November 2026: relative interest in \"3PL\", \"fulfilment centre\" and \"3pl marketing\"."
      },
      {
        "type": "p",
        "text": "The Google UK results for \"3pl marketing\" show what else buyers and providers ask around the topic. The People Also Ask box includes \"What are the top 10 3PL companies in the UK?\" and \"What is 2PL, 3PL, 4PL, and 5PL?\", and the related searches include \"3PL meaning\", \"3PL UK\", \"3PL vs 4PL\" and \"3pl marketing strategy\"."
      },
      {
        "type": "image",
        "src": "/insights/3pl-marketing-people-also-ask.jpg",
        "alt": "Google UK People Also Ask box for the search 3pl marketing with four questions about Amazon as a 3PL, top UK 3PL companies, the 3-3-3 rule and 2PL to 5PL",
        "caption": "People Also Ask for \"3pl marketing\" on Google UK, 21 November 2026."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Service searches.",
            "text": "Pick and pack, order fulfilment, warehousing, returns handling and pallet storage, often with a place name such as \"3PL UK\"."
          },
          {
            "lead": "Comparison searches.",
            "text": "\"Top 3PL companies\", \"3PL vs 4PL\" and \"in-house vs outsourced fulfilment\", where buyers build a shortlist."
          },
          {
            "lead": "Fit searches.",
            "text": "Searches for a provider that suits a sector, such as cold chain, fashion returns, B2B retail or Shopify brands."
          },
          {
            "lead": "Meaning searches.",
            "text": "\"3PL meaning\" and \"2PL, 3PL, 4PL\" come from people early in the journey. A clear explainer earns their trust before they are ready to buy."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you market a 3PL company? A step-by-step plan"
      },
      {
        "type": "p",
        "text": "Start with who you serve, then build the pages, forms and proof that a buyer needs, and only then add reach through LinkedIn and partners. The order matters because traffic sent to a vague website is wasted."
      },
      {
        "type": "h3",
        "text": "Step 1: Choose the buyer you want to win"
      },
      {
        "type": "p",
        "text": "A 3PL that says it does everything gives a buyer no reason to shortlist it. Define an ideal customer by product type, order volume, sales channel and the problem they have today, then write that on your homepage in one sentence."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Name the sector.",
            "text": "Fashion and returns, health and beauty, B2B wholesale, temperature-controlled goods, large or awkward items."
          },
          {
            "lead": "Name the size.",
            "text": "Say whether you suit a brand shipping 50 orders a day or 5,000."
          },
          {
            "lead": "Name the stack.",
            "text": "State the platforms and systems you connect to, such as Shopify, Amazon, marketplaces and your warehouse management system."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 2: Build a page for every service, sector and location"
      },
      {
        "type": "p",
        "text": "Each service you sell and each sector you serve deserves its own page, because that is how buyers search. A page called \"pick and pack for fashion brands\" can rank and be quoted by an AI assistant. A single \"Services\" page cannot."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Service pages.",
            "text": "Warehousing, pick and pack, returns, kitting, B2B and retail distribution, each with who it suits, how it works and what it costs to start."
          },
          {
            "lead": "Sector pages.",
            "text": "One per sector, using that sector's language and the specific handling it needs."
          },
          {
            "lead": "Location pages.",
            "text": "A page for each warehouse, with the address, the carriers and delivery networks nearby and the sizes of operation you handle there."
          },
          {
            "lead": "Plain-English explainers.",
            "text": "Short pages on 3PL meaning, 3PL vs 4PL and in-house vs outsourced fulfilment for early searchers."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 3: Make the quote form do the work"
      },
      {
        "type": "p",
        "text": "A quote form should qualify the buyer and make the next step obvious. The table shows what to ask and why each question helps you reply faster with an accurate price."
      },
      {
        "type": "table",
        "head": [
          "Ask for",
          "Why it helps",
          "Example question"
        ],
        "rows": [
          [
            "Products and sizes",
            "Sets storage type and handling",
            "What do you sell, and how large is a typical item?"
          ],
          [
            "Order volume",
            "Decides whether you are a fit and how to price",
            "How many orders a month, and how seasonal is it?"
          ],
          [
            "Sales channels",
            "Shows the integrations you need",
            "Which platforms and marketplaces do you sell on?"
          ],
          [
            "Returns",
            "Returns handling changes cost and layout",
            "What share of orders come back?"
          ],
          [
            "Start date",
            "Lets you plan capacity",
            "When do you want to start shipping?"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Keep the form short, put it on every service page and confirm by email within one working day. Track which page each enquiry came from so you can see what is working."
      },
      {
        "type": "h3",
        "text": "Step 4: Publish operational proof"
      },
      {
        "type": "p",
        "text": "Buyers cannot see your warehouse, so your site has to show it. The AI Overview above lists order accuracy, service levels and scalability at peak as the proof that backs a claim, and our ChatGPT test below asks for the same things."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Service levels.",
            "text": "State your dispatch cut-off times, target dispatch and receiving times and how you report against them."
          },
          {
            "lead": "Accuracy.",
            "text": "Publish your pick accuracy and inventory accuracy figures, with the period they cover."
          },
          {
            "lead": "Peak season.",
            "text": "Explain how you staff and plan for Black Friday and Christmas."
          },
          {
            "lead": "Photos and video.",
            "text": "Show your own warehouse, team and systems, not stock images."
          },
          {
            "lead": "Insurance and compliance.",
            "text": "Say what you hold and how stock and data are protected."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 5: Collect reviews and references"
      },
      {
        "type": "p",
        "text": "Reviews and references answer the question every buyer has: will they look after our stock? Ask clients for reviews on your Google Business Profile after onboarding and again after the first peak season, and agree in advance which clients will act as references."
      },
      {
        "type": "p",
        "text": "Reply to every review, including critical ones. A calm, specific reply shows how you handle a failure, which is the thing buyers most want to know."
      },
      {
        "type": "h3",
        "text": "Step 6: Reach buyers on LinkedIn and through partners"
      },
      {
        "type": "p",
        "text": "LinkedIn suits 3PLs because the buyers are people with job titles you can name: operations directors, supply chain leads, founders and finance leads. Share short, practical posts from your operations team, such as how you handled a peak week or how a returns process works."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Ecommerce platform partners.",
            "text": "Shopify, Amazon and marketplace agencies and consultants meet brands the moment they outgrow packing at home."
          },
          {
            "lead": "Carrier and software partners.",
            "text": "A listing on a partner's directory or integration page sends qualified enquiries."
          },
          {
            "lead": "Referrals.",
            "text": "Ask satisfied clients who else they know that is scaling, and make that easy with a short intro email."
          },
          {
            "lead": "Trade events and press.",
            "text": "Speaking slots, trade titles and awards build the mentions that AI answers also draw on."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you get recommended by ChatGPT and AI assistants for 3PL searches?"
      },
      {
        "type": "p",
        "text": "You get recommended by being clear, specific and mentioned in more than one place. We asked ChatGPT, with web search on, for the best UK 3PL providers for e-commerce brands and what makes a 3PL trustworthy, and the answer shows what buyers now see."
      },
      {
        "type": "image",
        "src": "/insights/3pl-marketing-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to a prompt about the best UK 3PL providers for e-commerce brands, showing a shortlist with services, integrations and published pricing",
        "caption": "ChatGPT's answer to \"best 3PL providers in the UK for ecommerce brands and what makes a 3PL trustworthy\", 21 November 2026."
      },
      {
        "type": "p",
        "text": "Three things stand out. ChatGPT built its shortlist from details providers publish: the services they offer, the platforms they integrate with, published entry pricing and their own accuracy and dispatch figures. It labelled those figures as provider-reported claims, not audited results. And it then turned trust into a checklist covering inventory accuracy, written service level agreements, itemised pricing, references and insurance."
      },
      {
        "type": "p",
        "text": "That checklist is a brief for your website. If a buyer asks an assistant what to look for, the assistant will describe the things above. A provider that already publishes them, clearly and in one place, is easier to include."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Answer first.** Open each service page with a one or two sentence answer to the question in the heading."
          },
          {
            "text": "**Publish the facts an assistant quotes.** Services, integrations, sectors, locations, starting prices and service levels."
          },
          {
            "text": "**Name things precisely.** Say \"pick and pack for fashion brands in the Midlands\", not \"flexible logistics solutions\"."
          },
          {
            "text": "**Keep every profile consistent.** Match your name, address, services and claims across your site, Google Business Profile and directories."
          },
          {
            "text": "**Earn mentions.** Trade titles, partner pages and comparison articles shape the shortlist an assistant builds."
          },
          {
            "text": "**Check what AI says today.** Ask the main assistants the questions your buyers ask and note which sources they use. Our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) shows the steps."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Which channels work best for 3PL marketing?"
      },
      {
        "type": "p",
        "text": "Search and AI answers catch buyers who are already looking, LinkedIn and partners reach the ones who are not yet, and reviews tie it together. Use the channel that matches the stage of the buyer."
      },
      {
        "type": "cards",
        "title": "Channels and what each does for a 3PL",
        "items": [
          {
            "title": "Search and AI answers",
            "text": "Captures buyers researching providers and puts you on the shortlist an assistant builds."
          },
          {
            "title": "Google Business Profile and reviews",
            "text": "Shows local proof for each warehouse and answers the trust question."
          },
          {
            "title": "LinkedIn",
            "text": "Reaches named operations and supply chain leads with practical content from your team."
          },
          {
            "title": "Partners and referrals",
            "text": "Ecommerce agencies, platforms and software partners already have your buyers' trust."
          },
          {
            "title": "Email follow-up",
            "text": "Keeps in touch with brands that asked for a quote but were not ready, until their volumes grow."
          },
          {
            "title": "Paid search",
            "text": "Adds reach for high-intent searches such as pick and pack and fulfilment services while organic builds."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure 3PL marketing?"
      },
      {
        "type": "p",
        "text": "Measure enquiries and their quality, not only traffic. A provider that tracks where each quote request came from can see which pages and channels bring clients, and can stop paying for the rest."
      },
      {
        "type": "checklist",
        "title": "What to track each month",
        "items": [
          "**Quote requests by source.** Which page, channel or partner each enquiry came from.",
          "**Qualified leads.** How many fit your target order volume, sector and platforms.",
          "**Search visibility.** Rankings and impressions for your service and location terms in Search Console.",
          "**AI visibility.** Whether the main assistants name you for your category questions, and which sources they use.",
          "**Reviews.** New reviews, average rating and reply rate on each profile.",
          "**Sales cycle and win rate.** Time from first enquiry to signed contract, and the share of quotes that convert."
        ]
      },
      {
        "type": "p",
        "text": "Our guide to [B2B SEO strategy](/insights/seo-for-b2b-companies) explains how to set up this tracking in Google Analytics 4 and Search Console."
      },
      {
        "type": "h2",
        "text": "How long does 3PL marketing take to work?"
      },
      {
        "type": "p",
        "text": "Quote form and page fixes can improve enquiries within weeks, because they change what happens to the traffic you already have. Search and AI visibility build over several months, and partnerships and referrals depend on how quickly you can build relationships. Warehouse contracts take time to sign, so judge progress by qualified enquiries first and signed clients second."
      },
      {
        "type": "h2",
        "text": "What mistakes hold 3PL marketing back?"
      },
      {
        "type": "compare",
        "title": "Common mistakes and what to do instead",
        "columns": [
          {
            "title": "Avoid",
            "tone": "bad",
            "items": [
              "A homepage that says you do everything for everyone",
              "One generic services page",
              "Long quote forms or no form at all",
              "Claims with no figures or period",
              "Ignoring reviews or replying defensively"
            ]
          },
          {
            "title": "Do this",
            "tone": "good",
            "items": [
              "Name your sector, size and platforms",
              "One page per service, sector and location",
              "A short form that qualifies the buyer",
              "Published service levels and accuracy figures",
              "Calm, specific replies to every review"
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should a 3PL do first?"
      },
      {
        "type": "p",
        "text": "Pick one sector you serve well, build one service page for it with a short quote form, add your service levels and a reference, and ask your best client for a review. That single page gives search, AI assistants and sales calls something solid to point to, and you can repeat it for the next sector."
      }
    ],
    "faq": [
      {
        "q": "What is 3PL marketing?",
        "a": "3PL marketing is how a third-party logistics provider gets found, trusted and chosen by companies that want to outsource warehousing, fulfilment or distribution. It covers search and AI visibility, service pages, quote forms, reviews, proof and outreach."
      },
      {
        "q": "What is the best way to market a 3PL company?",
        "a": "Choose a clear niche, build a page for each service and sector, publish service levels and accuracy figures, collect reviews and use LinkedIn and partners to reach buyers. Track every enquiry back to its source."
      },
      {
        "q": "What do 2PL, 3PL, 4PL and 5PL mean?",
        "a": "A 3PL is a third-party logistics provider that handles storage, picking, packing and distribution for other companies. Definitions of the other levels vary, but a 4PL is generally a lead provider that manages several logistics providers for a client, and 2PL usually refers to carriers that move goods."
      },
      {
        "q": "Do 3PLs need SEO?",
        "a": "Yes. Buyers search for services such as pick and pack and for 3PL providers in their area, and they compare options online before they ask for a quote. Pages that match those searches bring in enquiries you do not have to chase."
      },
      {
        "q": "How do I get my 3PL recommended by ChatGPT?",
        "a": "Publish clear, specific facts about your services, integrations, sectors, locations, starting prices and service levels, keep them consistent across your profiles and earn mentions on trade and partner sites. Then ask the assistants your buyers' questions and see what they say."
      },
      {
        "q": "Should a 3PL publish its prices?",
        "a": "Publishing a starting price or a pricing guide helps buyers qualify themselves and gives AI assistants a fact to quote. Most providers still quote by volume, so explain what drives the price and ask for a few details in the form."
      }
    ]
  },
  {
    "slug": "supply-chain-marketing",
    "seoTitle": "Supply Chain Marketing 2027: How to Reach B2B Buyers",
    "title": "Supply Chain Marketing in 2027: How to Reach Buyers Across Procurement, Operations and Finance",
    "description": "Supply chain marketing in 2027: how software, services and consultancies win buying groups across procurement, operations and finance in search and AI answers.",
    "date": "2026-11-21",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [
      "Supply chain"
    ],
    "image": "/insights/supply-chain-marketing-banner.jpg",
    "intro": "Nobody buys supply chain software, a consultancy engagement or a managed service on one person's say-so. Procurement checks the supplier risk, operations checks it will work on the floor, and finance checks the return. Supply chain marketing is the work of getting your company in front of all three, with an answer for each, before any of them speaks to a salesperson. This guide shows how to do that in 2027, from the first search to the AI answer that shapes the shortlist.",
    "tldr": [
      "Supply chain marketing means marketing for supply chain software, services and consultancies, which sell to buying groups rather than to one person.",
      "Forrester's Buyers' Journey Survey 2025 found an average of 13 people inside the buyer's organisation and nine outsiders involved in a purchase, and 73% of purchases involve three or more departments.",
      "Procurement, operations and finance each need a different message built on the same proposition: cost and risk, speed and visibility, and return and working capital.",
      "Build search and AI answer visibility, role-specific pages, proof, partnerships and account-based outreach, in that order of effort.",
      "Measure engagement across target accounts and stakeholders, not just traffic or form fills."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is supply chain marketing?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "Supply chain marketing is the work a supply chain software company, services firm or consultancy does to get found, trusted and chosen by the companies that buy supply chain technology and services. It covers search and AI visibility, content for each buyer role, proof, partnerships, events and account-based outreach. It is separate from marketing supply chain management, which means managing how marketing materials are produced and delivered."
      },
      {
        "type": "p",
        "text": "Google's own AI Overview for the search \"supply chain marketing\" shows why the term needs care. It splits the phrase into two meanings: B2B marketing for supply chain providers such as 3PLs, logistics firms and software companies, and the management of marketing materials. This guide covers the first meaning only. If you sell supply chain software, planning, visibility, procurement technology, advisory or managed services, this is written for you."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search supply chain marketing, defining it as B2B marketing for supply chain providers and as marketing supply chain management",
        "caption": "The Google UK AI Overview for \"supply chain marketing\", 21 November 2026."
      },
      {
        "type": "p",
        "text": "The distinction matters for your pages too. A page that opens with a plain sentence on who you serve and what you sell is easier for a buyer, and for an AI tool, to place in the right category. For freight forwarders, warehouse operators and fulfilment companies, our guide to [logistics marketing](/insights/logistics-marketing) covers the shipper-facing version of this work."
      },
      {
        "type": "h2",
        "text": "How do supply chain buyers choose a supplier?"
      },
      {
        "type": "p",
        "text": "Supply chain buyers choose through a group, not an individual. Forrester's Buyers' Journey Survey 2025 found that 73% of purchases involve three or more departments, with an average of 13 people inside the buyer's organisation and nine from outside involved in the decision."
      },
      {
        "type": "stats",
        "title": "Who is in the room for a B2B purchase",
        "items": [
          {
            "value": "13",
            "label": "people inside the buyer's organisation, on average (Forrester, 2025)"
          },
          {
            "value": "9",
            "label": "people from outside the organisation involved on average"
          },
          {
            "value": "73%",
            "label": "of purchases involve three or more departments"
          }
        ]
      },
      {
        "type": "p",
        "text": "The [Forrester Research](https://www.forrester.com/blogs/three-realities-about-b2b-buying-networks/) analysts add that buyers tap colleagues, communities, peers and, increasingly, AI tools long before they talk to a provider, and arrive with shortlists already forming. Gartner's buyer research points the same way: buyers spend only about 17% of the purchase journey meeting potential suppliers, and that time is split across every supplier they consider."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-forrester-buying-networks.jpg",
        "alt": "Forrester blog post Three Realities About B2B Buying Networks, with the first paragraph reporting 73% of purchases involve three or more departments and an average of 13 internal buyers",
        "caption": "Forrester's February 2026 note on B2B buying networks, the source of the 73% and 13-person figures."
      },
      {
        "type": "p",
        "text": "For supply chain companies, the practical meaning is simple. Most of the buying work happens where you are not in the room: in search, in AI answers, in internal chats and in documents your champion forwards to colleagues. Your marketing has to do the selling in those places."
      },
      {
        "type": "h2",
        "text": "Who are the buyers in procurement, operations and finance, and what does each need?"
      },
      {
        "type": "p",
        "text": "The three groups usually involved are procurement, operations and finance, and each judges the same product on different grounds. Procurement looks at supplier risk, contract terms and price. Operations looks at whether the tool or service will reduce delays and fit existing systems. Finance looks at return on investment, working capital and budget justification."
      },
      {
        "type": "table",
        "head": [
          "Buyer group",
          "Typical roles",
          "What they care about",
          "What to show them"
        ],
        "rows": [
          [
            "Procurement",
            "Chief Procurement Officer, Head of Procurement, Sourcing Manager",
            "Supplier cost and risk, contract and compliance, supplier performance",
            "Security and compliance pages, contract terms, supplier-risk examples, references from similar buyers"
          ],
          [
            "Operations",
            "COO, Supply Chain Director, Logistics Manager",
            "Visibility, fewer delays, automation, fit with current systems",
            "Implementation guides, integration pages, workflow demos, before and after process examples"
          ],
          [
            "Finance",
            "CFO, Finance Director, FP&A lead",
            "Cost reduction, working capital, inventory carrying cost, payback",
            "ROI calculators, worked cost examples, payback timelines, budget justification templates"
          ]
        ]
      },
      {
        "type": "p",
        "text": "When we asked ChatGPT for the best ways for a supply chain software company to reach procurement, operations and finance buyers, it gave the same split: three personas with different priorities, reached through one shared business proposition. That is a useful sanity check, because buyers now use the same tools to research you."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-chatgpt-buyers.jpg",
        "alt": "ChatGPT answer to a question about reaching procurement, operations and finance buyers for a supply chain software company, recommending account-based marketing and role-specific content",
        "caption": "ChatGPT's answer to \"What are the best ways for a supply chain software company to reach buyers in procurement, operations and finance?\", 21 November 2026."
      },
      {
        "type": "p",
        "text": "The takeaway is to stop writing one generic message for \"supply chain leaders\". Write one proposition, then a version for each role, and make sure each version can stand on its own page."
      },
      {
        "type": "h2",
        "text": "How do you build a supply chain marketing strategy?"
      },
      {
        "type": "p",
        "text": "Build it in layers: be findable when buyers search, give each role content that answers its questions, prove the claims, widen reach through partners and press, and then run focused outreach to the accounts you most want. Each layer supports the next, and the first two carry the most weight for a company with a small team."
      },
      {
        "type": "table",
        "head": [
          "Priority",
          "What it covers",
          "Why it comes in this order"
        ],
        "rows": [
          [
            "1. Capture",
            "Search and AI answer visibility, product and use-case pages, comparison pages",
            "Buyers already researching your category can find and shortlist you"
          ],
          [
            "2. Role content",
            "Pages and assets for procurement, operations and finance",
            "Each member of the buying group gets an answer in their own terms"
          ],
          [
            "3. Proof",
            "Case studies, customer reviews, security and compliance pages, original data",
            "Shortlists are built on trust and risk reduction"
          ],
          [
            "4. Reach",
            "Partnerships, trade press, events, LinkedIn, digital PR",
            "Puts you on more shortlists and in more AI answers"
          ],
          [
            "5. Focus",
            "Account-based outreach to named target accounts",
            "Turns visibility into conversations with the right companies"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Step 1: Pick one sentence that says who you serve"
      },
      {
        "type": "p",
        "text": "Decide who you sell to and what you fix, and write it in one plain sentence. \"Inventory planning software for UK food manufacturers\" is easier to match than \"end-to-end supply chain solutions\". Use that sentence in your titles, home page and LinkedIn page."
      },
      {
        "type": "h3",
        "text": "Step 2: Map the buying group for your best-fit accounts"
      },
      {
        "type": "p",
        "text": "List 50 to 200 companies that fit your ideal customer. For each one, note the likely procurement, operations and finance contacts. This list drives your content, your LinkedIn targeting and your outreach, so keep it in your CRM."
      },
      {
        "type": "h3",
        "text": "Step 3: Build the pages buyers research on"
      },
      {
        "type": "p",
        "text": "Create a page for each product capability, use case and industry you serve, plus pages that compare you with alternatives. Open each with a direct answer, add proof, and end with a clear next step. Our guide to [B2B keyword research](/insights/b2b-keyword-research) shows how to find the terms each role actually types."
      },
      {
        "type": "h3",
        "text": "Step 4: Give each role a path"
      },
      {
        "type": "p",
        "text": "Link each solution page to a short page for each role: what procurement will want to check, what operations will want to test, and what finance will want to see. This also gives your champion something to forward."
      },
      {
        "type": "h3",
        "text": "Step 5: Add proof, then reach"
      },
      {
        "type": "p",
        "text": "Publish case studies with real numbers, collect reviews on the software directories buyers use, and earn mentions on trade sites and partner pages. Our [B2B link building](/insights/b2b-link-building) guide covers the tactics that still work."
      },
      {
        "type": "h2",
        "text": "How do you get found when supply chain buyers search?"
      },
      {
        "type": "p",
        "text": "You get found by matching the searches buyers make at each stage, and by writing pages that answer them in the first two sentences. Supply chain buyers search by problem (\"how to reduce inventory carrying costs\"), by solution (\"supply chain visibility software\") and by comparison (\"best procurement software for manufacturers\"), and each stage needs its own page."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-people-also-ask.jpg",
        "alt": "Google People Also Ask box for the search supply chain marketing, showing questions including what is a supply chain in marketing and will SCM be replaced by AI",
        "caption": "The People Also Ask questions Google shows for \"supply chain marketing\", 21 November 2026."
      },
      {
        "type": "p",
        "text": "Notice how mixed the questions are. Some come from students and job seekers, which is why a page that says clearly \"this is for software and service providers selling to supply chain buyers\" does better than a vague definition page. Use those questions as H2s and answer them directly, then move on to the questions buyers ask when they are evaluating vendors."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-google-trends.jpg",
        "alt": "Google Trends UK five year chart comparing supply chain software, supply chain marketing and procurement software, with the software terms showing higher interest than supply chain marketing",
        "caption": "Google Trends, UK, five years to November 2026: \"supply chain software\" and \"procurement software\" against \"supply chain marketing\"."
      },
      {
        "type": "p",
        "text": "Google Trends shows relative interest, not search volume, so use it to compare terms rather than forecast leads. Over the five years to November 2026 in the UK, \"supply chain software\" and \"procurement software\" drew far more interest than \"supply chain marketing\", and all three rose through 2026. The buyer terms are where the demand sits, so build your pages around them rather than around the marketing phrase."
      },
      {
        "type": "h2",
        "text": "How do you reach supply chain buyers in AI answers?"
      },
      {
        "type": "p",
        "text": "You reach them by being the clearest, best-supported answer to the questions buyers put to AI tools, and by being mentioned on the sites those tools trust. Forrester's analysts describe generative AI as a first-stop research tool for many buyers and warn that providers whose narrative is unclear risk not appearing at all."
      },
      {
        "type": "image",
        "src": "/insights/supply-chain-marketing-buying-group-ai-overview.jpg",
        "alt": "Google UK AI Overview answering how many people are involved in a B2B buying decision, listing 6 to 13 people and citing several research sources",
        "caption": "A Google UK AI Overview for \"how many people are involved in a b2b buying decision\", 21 November 2026, assembled from several research pages."
      },
      {
        "type": "p",
        "text": "That AI Overview is a good example of what gets quoted: a direct answer, a few named benchmarks and sources from research publishers and consultancies. To be included for your own category, publish pages with the same shape."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Answer first.** Open each page with a one or two sentence answer to the question in the heading."
          },
          {
            "text": "**Name things precisely.** Say \"supply chain visibility software for mid-sized manufacturers\", not \"smart logistics solutions\"."
          },
          {
            "text": "**Publish original data.** A benchmark, survey or anonymised analysis gives others something to cite."
          },
          {
            "text": "**Earn mentions.** Trade publications, partner pages and review sites shape what AI tools say about you."
          },
          {
            "text": "**Check what AI says today.** Ask the main assistants the questions your buyers ask, and note who is recommended and which sources are used."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guides to [answer engine optimisation](/insights/answer-engine-optimisation) and [GEO vs SEO](/insights/geo-vs-seo) go further on how this works."
      },
      {
        "type": "h2",
        "text": "What content works for supply chain buyers?"
      },
      {
        "type": "p",
        "text": "The content that works answers a specific risk or cost question for a specific role. Buyers in this category are cautious, because a wrong choice affects suppliers, stock and cash, so they reward evidence over claims."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Comparison and alternative pages.",
            "text": "Buyers compare vendors before they speak to anyone, so give them a fair, specific comparison on your own site."
          },
          {
            "lead": "Implementation and integration guides.",
            "text": "Operations teams want to know how long set-up takes and what it connects to."
          },
          {
            "lead": "ROI and cost pages.",
            "text": "Finance wants a worked example with the assumptions visible, not a headline percentage."
          },
          {
            "lead": "Security, compliance and supplier-risk pages.",
            "text": "Procurement needs these to approve you, so publish them openly."
          },
          {
            "lead": "Case studies with numbers.",
            "text": "Show the starting problem, what changed and the measured result, in the customer's words."
          },
          {
            "lead": "Original research.",
            "text": "A yearly benchmark gives your sales team, partners and press something to share."
          }
        ]
      },
      {
        "type": "p",
        "text": "Keep every piece tied to one role and one question. It is better to have six focused pages than one long page trying to speak to everyone."
      },
      {
        "type": "h2",
        "text": "Which channels work best for supply chain marketing?"
      },
      {
        "type": "p",
        "text": "Search and AI visibility, LinkedIn, partnerships, events and software review platforms work best, because each reaches buyers at a different stage. ChatGPT's own ranking for a supply chain software company put account-based LinkedIn outreach, search and AI visibility, and outbound at the top, with partnerships, webinars and review sites close behind."
      },
      {
        "type": "cards",
        "title": "Channels and what each does",
        "items": [
          {
            "title": "Search and AI answers",
            "text": "Captures buyers already researching and shapes the AI shortlist."
          },
          {
            "title": "LinkedIn",
            "text": "Reaches named people in target accounts with role-specific content and reaches the wider buying group."
          },
          {
            "title": "Partnerships",
            "text": "ERP consultants, systems integrators and advisory firms already have your buyers' trust."
          },
          {
            "title": "Events",
            "text": "Trade events such as Gartner's supply chain events, Manifest, MODEX and ProcureCon put you in front of senior buyers. Speaking slots can work better than a stand."
          },
          {
            "title": "Review platforms",
            "text": "G2, Capterra and Gartner Peer Insights are where buyers check vendors."
          },
          {
            "title": "Outbound",
            "text": "Targeted email and LinkedIn messages that lead with a business problem, sent to the accounts on your list."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you run account-based marketing for supply chain accounts?"
      },
      {
        "type": "p",
        "text": "Account-based marketing means choosing the companies you want first and building your marketing around them, instead of waiting for anyone to arrive. For supply chain, it fits well because deals are large, buying groups are wide and the list of good-fit accounts is usually short."
      },
      {
        "type": "steps",
        "title": "A simple account-based plan",
        "items": [
          {
            "title": "Choose the accounts",
            "text": "Pick 50 to 200 companies by industry, size, systems and a trigger such as a new warehouse, an acquisition or a new operations leader."
          },
          {
            "title": "Map the three roles",
            "text": "Name one or two contacts each in procurement, operations and finance."
          },
          {
            "title": "Send role-specific content",
            "text": "Share a cost-reduction piece with procurement, a visibility piece with operations and a payback piece with finance."
          },
          {
            "title": "Watch engagement across the group",
            "text": "When two or three roles at one account engage, the account is warm. Alert sales."
          },
          {
            "title": "Equip the champion",
            "text": "Give your internal champion a one-page summary that answers the CFO's and procurement's questions."
          }
        ]
      },
      {
        "type": "p",
        "text": "The test of this plan is whether more than one person per account engages. Single-person engagement rarely closes a deal that three departments must approve."
      },
      {
        "type": "h2",
        "text": "How do you sell supply chain software, services and consulting differently?"
      },
      {
        "type": "p",
        "text": "The core method is the same, but the proof and the first question differ for each. Software buyers want to see the product and its integrations. Services buyers want evidence of results and process. Consultancy buyers want expertise and judgement."
      },
      {
        "type": "compare",
        "title": "What changes by offer",
        "columns": [
          {
            "title": "Software",
            "tone": "good",
            "items": [
              "Demo and integration pages",
              "Security and compliance documentation",
              "Review-site presence",
              "ROI calculators"
            ]
          },
          {
            "title": "Services and consulting",
            "tone": "good",
            "items": [
              "Case studies and named outcomes",
              "Methodology and team pages",
              "Original research and opinion",
              "Speaking and trade press"
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Whichever you sell, keep the proposition specific. A narrow, clear offer is easier to rank, easier to quote and easier for a buyer to explain to a colleague."
      },
      {
        "type": "h2",
        "text": "How do you measure supply chain marketing?"
      },
      {
        "type": "p",
        "text": "Measure whether the right accounts and the right roles are engaging, then whether that turns into pipeline. Web traffic and form fills tell you little in a category where one deal may involve a dozen people and many months."
      },
      {
        "type": "checklist",
        "title": "What to track each month",
        "items": [
          "**Target account engagement.** How many accounts on your list visited, replied or attended something.",
          "**Roles reached.** How many accounts have engaged with two or more of procurement, operations and finance.",
          "**Search visibility.** Rankings and impressions for your buyer terms in Search Console.",
          "**AI visibility.** Whether the main assistants name you for your category questions, and which sources they use.",
          "**Meetings and opportunities.** Qualified conversations and pipeline created, by source.",
          "**Sales cycle and win rate.** Whether accounts you have warmed convert faster."
        ]
      },
      {
        "type": "p",
        "text": "Our [SEO report template](/insights/seo-report-template) shows what a good monthly report includes, and [B2B SEO strategy](/insights/seo-for-b2b-companies) covers the wider programme."
      },
      {
        "type": "h2",
        "text": "How long does supply chain marketing take to work?"
      },
      {
        "type": "p",
        "text": "Expect the first signs in three to six months and clear pipeline impact in six to twelve, because buying cycles are long and search takes time to build. Account-based outreach can produce conversations sooner, while content, reviews and mentions build slowly and then compound. Plan on a minimum of two quarters before judging the programme."
      },
      {
        "type": "h2",
        "text": "What are the most common supply chain marketing mistakes?"
      },
      {
        "type": "compare",
        "title": "Common patterns",
        "columns": [
          {
            "title": "Do this",
            "tone": "good",
            "items": [
              "One clear sentence on who you serve",
              "Pages for each role",
              "Proof with real numbers",
              "Account lists and role mapping",
              "Monthly checks of AI answers"
            ]
          },
          {
            "title": "Avoid this",
            "tone": "bad",
            "items": [
              "\"End-to-end supply chain solutions\" with no detail",
              "One message for every buyer",
              "Chasing traffic from students and job seekers",
              "Measuring form fills only",
              "Waiting for buyers to find you"
            ]
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should you do first?"
      },
      {
        "type": "p",
        "text": "Start with the sentence that says who you serve, then build the three role pages and the buyer-term pages that support them. Check what ChatGPT and Google say about your category today, and fix the gaps. If you want a second pair of eyes on your position in search and AI answers, we can help."
      }
    ],
    "faq": [
      {
        "q": "What is supply chain marketing?",
        "a": "Supply chain marketing is B2B marketing for supply chain software, services and consultancy companies. It helps them get found, trusted and chosen by procurement, operations and finance buyers."
      },
      {
        "q": "What is the difference between supply chain marketing and marketing supply chain management?",
        "a": "Supply chain marketing promotes supply chain products and services to buyers. Marketing supply chain management is the process of producing and distributing marketing materials."
      },
      {
        "q": "Who makes supply chain software buying decisions?",
        "a": "A group does. Forrester found an average of 13 people inside the buyer's organisation and nine outside it involved in a purchase, and 73% of purchases involve three or more departments."
      },
      {
        "q": "Which channels work best for supply chain companies?",
        "a": "Search and AI answer visibility, LinkedIn, partnerships, events, review platforms and targeted outbound work best, because they reach buyers at different stages."
      },
      {
        "q": "How do I reach procurement, operations and finance buyers together?",
        "a": "Use one proposition with a version for each role, then run account-based marketing so several people at each target account see relevant content."
      },
      {
        "q": "How long does supply chain marketing take?",
        "a": "Expect early signs in three to six months and pipeline impact in six to twelve, because buying cycles are long."
      },
      {
        "q": "Should supply chain companies use AI search optimisation?",
        "a": "Yes. Buyers use AI tools early in research, so clear, well-supported pages and trusted mentions help you appear in shortlists."
      }
    ]
  },
  {
      "slug": "b2b-link-building",
      "seoTitle": "B2B Link Building 2027: Tactics That Work in AI Search",
      "title": "B2B Link Building in 2027: Tactics That Still Work and How AI Search Changes Them",
      "description": "B2B link building tactics that work in 2027: digital PR, partnerships, original data, directories, unlinked mentions, and how AI citations relate to links.",
      "date": "2026-11-20",
      "author": "team",
      "topics": [
          "B2B",
          "SEO - Begins"
      ],
      "industries": [],
      "image": "/insights/b2b-link-building-banner.jpg",
      "intro": "Most B2B buyers research a supplier long before they speak to anyone, and the sites that get shortlisted are the ones other trusted sites already point to. B2B link building is the work of earning those links: from trade publications, partners, industry bodies and customers. It still matters in 2027, but AI search has changed what a good link is worth. In Ahrefs' study of 75,000 brands, branded web mentions correlated with AI Overview visibility at 0.664, far more than backlinks at 0.218. This guide covers the tactics that still work, how links and AI citations connect, and how to track the results. For the wider plan, read our [B2B SEO strategy guide](/insights/seo-for-b2b-companies).",
      "tldr": [
          "B2B link building means earning links and mentions from relevant, trusted sites that your buyers read, not collecting as many backlinks as possible.",
          "Ahrefs found branded web mentions correlate with AI Overview brand visibility at 0.664, compared with 0.295 for referring domains and 0.218 for backlinks, so mentions now matter alongside links.",
          "The tactics that still work are digital PR, original data, partnerships and integrations, industry directories and associations, customer stories and turning unlinked mentions into links.",
          "Google's AI Overview and ChatGPT both describe B2B link building as relevance first: a niche trade site beats a generic site with a higher authority score.",
          "Track referring domains, link relevance, rankings on the linked pages, referral visits, AI mentions and pipeline, and review them monthly."
      ],
      "body": [
          {
              "type": "h2",
              "text": "What is B2B link building?"
          },
          {
              "type": "p",
              "text": "B2B link building is the process of earning links from trusted, relevant websites to a business-to-business company's site, so that search engines and AI tools see it as a credible source in its field. Google's own AI Overview puts the aim as building authority, improving search and LLM visibility and driving qualified leads."
          },
          {
              "type": "image",
              "src": "/insights/b2b-link-building-1.jpg",
              "alt": "Google UK AI Overview for the search b2b link building, defining it as earning authoritative, industry-specific backlinks to build authority, improve search and LLM visibility and drive qualified leads",
              "caption": "Google UK AI Overview for \"b2b link building\", 20 November 2026."
          },
          {
              "type": "p",
              "text": "In plain English, a backlink is a link from another website to yours. In B2B, one link from the right trade publication or partner can matter more than a hundred from unrelated sites, because your buyers and the search engines both trust the source."
          },
          {
              "type": "h2",
              "text": "Does B2B link building still work in 2027?"
          },
          {
              "type": "p",
              "text": "Yes. Links still help pages rank, and ranking pages are the ones AI tools draw from. What has changed is the mix. Search engines and AI assistants now weigh brand mentions on trusted pages alongside links, so a link-only plan misses half the picture."
          },
          {
              "type": "image",
              "src": "/insights/b2b-link-building-2.jpg",
              "alt": "Google UK People Also Ask box for b2b link building with the questions does link building still work, what is link building in business and how much does link building cost",
              "caption": "Google UK People Also Ask for \"b2b link building\", 20 November 2026."
          },
          {
              "type": "p",
              "text": "Searchers are asking the same thing, as the People Also Ask box above shows. Interest is real too: in Google Trends for the UK, searches for \"link building\" have run above \"digital pr\" and \"backlinks\" for much of the past year."
          },
          {
              "type": "image",
              "src": "/insights/b2b-link-building-4.jpg",
              "alt": "Google Trends UK five-year comparison of the searches link building, digital pr and backlinks",
              "caption": "Google Trends, UK, past five years: \"link building\", \"digital pr\" and \"backlinks\", 20 November 2026."
          },
          {
              "type": "h2",
              "text": "How do AI search and AI Overviews change link building?"
          },
          {
              "type": "p",
              "text": "AI search rewards brands that are mentioned and trusted across the web. Ahrefs' analysis of 75,000 brands found branded web mentions had the strongest link with brand visibility in AI Overviews, at 0.664, ahead of branded anchors (0.527), branded search volume (0.392), Domain Rating (0.326), referring domains (0.295) and backlinks (0.218). Ahrefs notes this is correlation, not proof of cause."
          },
          {
              "type": "image",
              "src": "/insights/b2b-link-building-5.jpg",
              "alt": "Column chart from Ahrefs showing correlation with AI Overview brand mentions: branded web mentions 0.664, referring domains 0.295, backlinks 0.218",
              "caption": "What correlates with AI Overview brand mentions. Source: Ahrefs, 75,000 brands."
          },
          {
              "type": "stats",
              "title": "Mentions are concentrated in a few brands",
              "items": [
                  {
                      "value": "169",
                      "label": "average AI Overview mentions for brands in the top 25% for web mentions (Ahrefs)"
                  },
                  {
                      "value": "14",
                      "label": "average AI Overview mentions for the next quartile down"
                  },
                  {
                      "value": "10x+",
                      "label": "the gap between the two groups"
                  }
              ]
          },
          {
              "type": "p",
              "text": "Read the [Ahrefs study](https://ahrefs.com/blog/ai-overview-brand-correlation/) as a direction, not a formula. It says your goal is to be named on many trusted pages, and a link is the best form of mention because it also passes authority and sends visitors. Our guides on [answer engine optimisation](/insights/answer-engine-optimisation) and [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt) explain how AI tools use those sources."
          },
          {
              "type": "callout",
              "variant": "takeaway",
              "title": "What this means for you",
              "text": "Plan every link campaign to earn two things at once: a link to a page that should rank, and a mention of your brand name in a place your buyers and AI tools already trust."
          },
          {
              "type": "h2",
              "text": "What are the best B2B link building tactics?"
          },
          {
              "type": "p",
              "text": "The best B2B link building tactics earn links because you give someone a reason to link: data, expertise, a partnership or a useful resource. Ask ChatGPT for the top tactics for a B2B software company and it ranks integration partnerships, original research, comparison placements, digital PR and customer case studies, then rates the effort and potential of each."
          },
          {
              "type": "image",
              "src": "/insights/b2b-link-building-3.jpg",
              "alt": "ChatGPT answer to the best link building tactics for a B2B software company, showing a priority table of five tactics with effort and potential, and a list of metrics to measure",
              "caption": "ChatGPT answer to a B2B link building prompt, 20 November 2026: priority table and what to measure."
          },
          {
              "type": "table",
              "head": [
                  "Tactic",
                  "Best for",
                  "Effort",
                  "What you earn"
              ],
              "rows": [
                  [
                      "Digital PR and expert comment",
                      "Brands with a clear point of view",
                      "Medium to high",
                      "Links and mentions from trade and national press"
                  ],
                  [
                      "Original data and research",
                      "Companies with customer or market data",
                      "High",
                      "Links from sites that cite the numbers"
                  ],
                  [
                      "Partnerships and integrations",
                      "Software, services and manufacturers with partners",
                      "Low to medium",
                      "Contextual links on partner pages"
                  ],
                  [
                      "Industry directories and associations",
                      "Any B2B company",
                      "Low",
                      "Trusted links and a mention in a buyer-facing list"
                  ],
                  [
                      "Customer stories and co-marketing",
                      "Companies with named customers",
                      "Low to medium",
                      "Links from customer sites"
                  ],
                  [
                      "Unlinked mentions",
                      "Brands already mentioned online",
                      "Low",
                      "Quick links from sites that know you"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "Start with the cheap tactics first. Directories, partner pages and unlinked mentions can win links in weeks. Original data and digital PR take longer and bring the strongest results."
          },
          {
              "type": "h2",
              "text": "How do you build links with digital PR for B2B?"
          },
          {
              "type": "p",
              "text": "Digital PR earns links by giving journalists and editors a story they want to publish. For B2B, that means expert comment, original data and a clear opinion on a development in your industry, pitched to the trade titles your buyers read."
          },
          {
              "type": "steps",
              "title": "A simple digital PR routine",
              "items": [
                  {
                      "title": "List 20 publications your buyers read",
                      "text": "Choose trade titles, industry newsletters and association sites, not only the biggest names."
                  },
                  {
                      "title": "Find the writers who cover your topic",
                      "text": "Read their last ten articles and note what they quote and which sources they reuse."
                  },
                  {
                      "title": "Pitch one specific insight",
                      "text": "Send two or three lines with a finding, a number or an opinion they can use today. Skip generic introductions."
                  },
                  {
                      "title": "Make it easy to link",
                      "text": "Point to a page on your site with the data, method and chart, so the link lands where you want it."
                  },
                  {
                      "title": "Follow up once and log the result",
                      "text": "Record each pitch, reply and link in a sheet, then repeat what worked."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "How do you get links with original data and research?"
          },
          {
              "type": "p",
              "text": "Publish numbers that other people need to cite. A short survey of your customers, a benchmark from your own product or service data, or a clear analysis of public data can earn links for years. In B2B, a question as narrow as \"how long does supplier onboarding take in our sector\" is enough if nobody has answered it."
          },
          {
              "type": "list",
              "items": [
                  "**Choose one question buyers ask.** It should come from sales calls, not from guesswork.",
                  "**Show the method.** State the sample, the dates and the limits so editors can trust it.",
                  "**Add a chart per finding.** Editors reuse visuals, and each one carries your name.",
                  "**Give it a plain URL.** Put the data on its own page and update it each year."
              ]
          },
          {
              "type": "p",
              "text": "Our [B2B keyword research guide](/insights/b2b-keyword-research) shows how to find the questions buyers type, which is the best source of data topics."
          },
          {
              "type": "h2",
              "text": "How do partnerships and integrations earn links?"
          },
          {
              "type": "p",
              "text": "Partner links are earned because both sides benefit. If your product, service or components work with another company's, ask for a listing on its partner, integration or supplier page and offer something back: a joint webinar, a how-to guide or a customer story. A manufacturer can seek links from distributors and trade bodies, and a fintech can seek links from the platforms it connects to. These examples are illustrative."
          },
          {
              "type": "checklist",
              "title": "Partner link checklist",
              "items": [
                  "**Create a page for each partner.** Describe the partnership, who it helps and how to get started.",
                  "**Check the partner has a public page for it.** A listing only counts if people and crawlers can reach it.",
                  "**Offer useful content.** Tutorials and case studies are easier to approve than a plain request.",
                  "**Ask for descriptive anchor text.** The partner's name and what you do is enough."
              ]
          },
          {
              "type": "h2",
              "text": "Which directories and industry associations are worth a link?"
          },
          {
              "type": "p",
              "text": "A directory is worth a link when it is run for your industry, checked by an editor and read by buyers. Trade associations, chambers of commerce, supplier registers and respected review or listing sites qualify. Generic directories that accept anyone for a fee do not, and Google's spam policies treat paid links that pass ranking signals as a breach."
          },
          {
              "type": "p",
              "text": "Before you apply, ask three questions: would a buyer use this list, does it show real businesses and does it link to a specific page on your site? If the answer to all three is yes, apply."
          },
          {
              "type": "h2",
              "text": "How do you turn unlinked mentions into links?"
          },
          {
              "type": "p",
              "text": "An unlinked mention is a page that names your company but does not link to it. These are the easiest links to win because the writer already knows you. Search for your name excluding your own site, then email the author with the exact page you would like them to link."
          },
          {
              "type": "code",
              "title": "Find unlinked mentions in Google",
              "code": "\"Your Company Name\" -site:yourcompany.com\n\"Your Product Name\" -site:yourcompany.com"
          },
          {
              "type": "p",
              "text": "Check each result for a link. If there is none, send a short note thanking the writer and giving the URL. Repeat monthly, since new mentions appear all the time."
          },
          {
              "type": "h2",
              "text": "How do you find link opportunities from competitors?"
          },
          {
              "type": "p",
              "text": "A link gap analysis lists the sites that link to your competitors but not to you. Those sites already write about your market, so they are the most likely to link to you too. Pick three competitors that rank for your target keywords, export their referring domains in a tool such as Ahrefs or Semrush, and mark the ones that fit one of the tactics above."
          },
          {
              "type": "list",
              "items": [
                  "**Sort by relevance first.** Keep trade sites, associations, partners and publications your buyers read.",
                  "**Find out why they linked.** A data report, a directory entry and a partner page each need a different pitch.",
                  "**Match the tactic to the site.** Send data to the publication, an integration request to the partner and an application to the directory.",
                  "**Start with the shortest list.** Ten well-chosen targets beat a list of 500."
              ]
          },
          {
              "type": "h2",
              "text": "How do customer stories and co-marketing earn links?"
          },
          {
              "type": "p",
              "text": "Customer stories earn links because the customer has a reason to share them. Publish a case study with real results, ask the customer to feature it on their site, and offer a joint webinar or article. The link comes from a site that proves you do what you say."
          },
          {
              "type": "h2",
              "text": "What should you avoid in B2B link building?"
          },
          {
              "type": "p",
              "text": "Avoid anything that buys or fakes authority. Paid links, bulk backlink packages and low-quality guest post networks risk a penalty and rarely reach the sites your buyers read. ChatGPT's answer above gives the same warning and adds that a relevant trade site with a modest authority score can beat a generic site with a very high one."
          },
          {
              "type": "compare",
              "title": "What to do and what to skip",
              "columns": [
                  {
                      "title": "Do",
                      "tone": "good",
                      "items": [
                          "Earn links on pages your buyers read",
                          "Link to a page that should rank",
                          "Use your brand name in every pitch",
                          "Keep a log of every link and mention"
                      ]
                  },
                  {
                      "title": "Skip",
                      "tone": "bad",
                      "items": [
                          "Buying links or bulk packages",
                          "Guest post networks with no readers",
                          "Chasing authority scores alone",
                          "Exact-match anchor text on every link"
                      ]
                  }
              ]
          },
          {
              "type": "h2",
              "text": "How do you track B2B link building and AI mentions?"
          },
          {
              "type": "p",
              "text": "Track link building in three layers: the links themselves, what they do to rankings and traffic, and what they do to pipeline. Add a fourth for AI search: whether your brand is named in answers. Review all four every month."
          },
          {
              "type": "steps",
              "title": "Set up tracking in four free steps",
              "items": [
                  {
                      "title": "Check your links in Search Console",
                      "text": "Review the sites linking to you, your most linked pages and your top anchor text.",
                      "path": "Search Console > Links > External links"
                  },
                  {
                      "title": "Track referral visits in GA4",
                      "text": "See which linking sites send visitors and whether they engage.",
                      "path": "GA4 > Reports > Acquisition > Traffic acquisition > Session source / medium"
                  },
                  {
                      "title": "Watch the pages that earned links",
                      "text": "Compare impressions, clicks and average position for each linked page before and after the link.",
                      "path": "Search Console > Performance > Pages"
                  },
                  {
                      "title": "Test AI answers monthly",
                      "text": "Run the same ten buyer prompts in ChatGPT and Google AI Mode and note whether your brand and sources appear."
                  }
              ]
          },
          {
              "type": "list",
              "items": [
                  "**Referring domains.** The number of unique sites linking to you, and how many are new each month.",
                  "**Relevance.** The share of links from sites your buyers actually read.",
                  "**Page results.** Rankings and organic visits on the linked pages.",
                  "**Referral conversions.** Leads, demos or enquiries that came from linking sites.",
                  "**AI mentions.** Whether your brand is named in AI answers for your target prompts.",
                  "**Pipeline.** Qualified opportunities where organic search appears in the path."
              ]
          },
          {
              "type": "p",
              "text": "Our guides on [how to track AI traffic for free](/insights/track-ai-traffic), the [SEO report template](/insights/seo-report-template) and [AI Overview trackers](/insights/ai-overviews-trackers) cover the reporting side in more detail."
          },
          {
              "type": "callout",
              "variant": "tip",
              "title": "Want a link plan for your business?",
              "text": "We build link and mention plans for B2B companies that need to be found in Google and in AI answers. [Talk to us](/book) about yours."
          }
      ],
      "faq": [
          {
              "q": "What is B2B link building?",
              "a": "B2B link building is earning links from relevant, trusted websites to a business-to-business company's site, so that search engines and AI tools treat it as a credible source and buyers find it."
          },
          {
              "q": "Does link building still work?",
              "a": "Yes. Links still help pages rank, and ranking pages feed AI answers. Ahrefs found branded web mentions correlate more strongly with AI Overview visibility (0.664) than backlinks (0.218), so mentions now matter alongside links."
          },
          {
              "q": "How do you build backlinks for a B2B website?",
              "a": "Use digital PR, original data, partnerships and integrations, industry directories and associations, customer stories and unlinked mentions. Aim for sites your buyers already read."
          },
          {
              "q": "How many backlinks does a B2B site need?",
              "a": "There is no fixed number. It depends on the competition for your target keywords. Compare the referring domains of the pages that rank above you and focus on relevance over volume."
          },
          {
              "q": "Are paid links safe for B2B SEO?",
              "a": "No. Paid links that pass ranking signals breach Google's spam policies and can lead to a penalty. Earn links through value, and label any sponsored content correctly."
          },
          {
              "q": "How do I track the results of link building?",
              "a": "Use Search Console's Links report for referring sites, GA4 for referral visits, Search Console Performance for the linked pages, and monthly AI prompt tests for brand mentions. Link results to pipeline in your CRM."
          },
          {
              "q": "How long does link building take to work?",
              "a": "Easy wins such as directories and unlinked mentions can land in weeks. Digital PR and original data usually take a few months to build, and ranking gains follow as links accumulate."
          }
      ]
  },
  {
    "slug": "b2b-keyword-research",
    "seoTitle": "B2B Keyword Research 2027: Find Terms Buyers Search",
    "title": "B2B Keyword Research in 2027: How to Find the Terms Buyers Actually Search",
    "description": "B2B keyword research made practical: find seed terms, map keywords to buying stages, use free and paid tools, add AI prompts and rank what to target.",
    "date": "2026-11-20",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [],
    "image": "/insights/b2b-keyword-research-banner.jpg",
    "intro": "Your next B2B buyer will research you long before they speak to you. In the 2025 6sense B2B Buyer Experience Study, nearly 4,000 buyers first contacted sellers when they were only 61% of the way through their buying process, and 94% had already ranked their shortlisted vendors. B2B keyword research is how you find the searches that happen in that quiet stretch, such as \"warehouse management software pricing\" or \"cyber insurance brokers UK\", so your site is already on the list. This guide walks through the method step by step: seed terms, intent by buying stage, free and paid tools, questions and AI prompts, and how to decide what to target first. For the wider plan around it, read our [B2B SEO strategy guide](/insights/seo-for-b2b-companies).",
    "tldr": [
      "B2B keyword research finds the searches business buyers use to understand a problem, compare suppliers and check prices. Volume matters less than fit and intent.",
      "The 2025 6sense study found buyers first contact sellers 61% of the way through their journey, and 94% rank their shortlisted vendors before contacting any of them.",
      "Ahrefs reports that almost 93% of keywords in its US database get fewer than 10 searches a month, so low-volume terms are normal in B2B and often the most valuable.",
      "Start with your sales calls and CRM, then widen with Google results, Search Console, Keyword Planner and a paid tool if you need scale.",
      "Group keywords by buying stage, add the questions and AI prompts your buyers use, then score each term on fit, intent and difficulty."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is B2B keyword research?"
      },
      {
        "type": "p",
        "text": "B2B keyword research is the process of finding the exact words and questions that decision-makers type into Google and AI tools when they research a problem, compare suppliers or check prices. The aim is relevant demand from people who can buy, not the biggest search volume. Google's own AI Overview describes it as focusing on the phrases used by managers, team leads and buyers rather than high-volume consumer traffic."
      },
      {
        "type": "image",
        "src": "/insights/b2b-keyword-research-1.jpg",
        "alt": "Google UK AI Overview for the search b2b keyword research, saying it focuses on phrases used by decision-makers rather than high-volume consumer traffic, with core steps starting with sales and support teams",
        "caption": "Google UK AI Overview for \"b2b keyword research\", 20 November 2026."
      },
      {
        "type": "p",
        "text": "In plain English, a keyword is any word or phrase someone searches for. In B2B, one good keyword can bring a buyer worth tens of thousands of pounds, so a term searched 20 times a month can beat one searched 2,000 times. The rest of this guide shows you how to find those terms."
      },
      {
        "type": "h2",
        "text": "How is B2B keyword research different from B2C?"
      },
      {
        "type": "p",
        "text": "B2B keyword research targets longer buying cycles, several people in each decision and far smaller search volumes. A consumer often buys after a short search. A business buyer researches for weeks, shares links with colleagues and ranks suppliers before anyone speaks to sales. Your keywords need to cover that whole stretch."
      },
      {
        "type": "stats",
        "title": "What B2B buyers do before they talk to you",
        "items": [
          {
            "value": "61%",
            "label": "of the way through their buying process when buyers first contact sellers (6sense 2025 B2B Buyer Experience Study)"
          },
          {
            "value": "94%",
            "label": "of buyers ranked their shortlisted vendors before contacting any of them"
          },
          {
            "value": "77%",
            "label": "of the time buyers ended up buying from their top-ranked vendor"
          }
        ]
      },
      {
        "type": "p",
        "text": "Read those numbers as a search opportunity. The shortlist is built from searches, comparison pages and AI answers, so the keywords in that quiet stretch decide whether you are on it. The [6sense study](https://6sense.com/b2b-buyer-experience-report/) is based on nearly 4,000 buyer responses."
      },
      {
        "type": "callout",
        "variant": "takeaway",
        "title": "What this means for you",
        "text": "Do not judge a B2B keyword by volume alone. A search with 10 monthly searches from a procurement manager comparing suppliers can be worth more than a broad term that attracts students and job seekers."
      },
      {
        "type": "h2",
        "text": "How do you find seed keywords for B2B?"
      },
      {
        "type": "p",
        "text": "Start with the people who already talk to buyers. Your sales team, account managers and support staff hear the exact words prospects use, and those words become your seed keywords. Google's AI Overview gives the same first step: talk to sales and support before opening any tool."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Listen to sales calls.** Pull ten recent call recordings or notes and list every problem, product name and comparison the buyer mentions."
          },
          {
            "text": "**Mine your CRM.** Check the notes and lead source fields on won deals for the phrases buyers used before they enquired."
          },
          {
            "text": "**List your offer in buyer language.** Write what you sell the way a customer would describe it, and then list the job it does and the problem it solves."
          },
          {
            "text": "**Check competitors.** Open the sites of three suppliers your buyers compare you with and note the terms in their navigation, page titles and headings."
          },
          {
            "text": "**Ask existing customers.** Send two questions to five clients: what did you search for before you found us, and what else did you consider?"
          }
        ]
      },
      {
        "type": "p",
        "text": "You should finish with 20 to 40 seed terms. Keep the buyer's wording, even when it is not the official industry term, because search engines and AI tools match what people actually type."
      },
      {
        "type": "h2",
        "text": "How do you find B2B keywords by buying stage?"
      },
      {
        "type": "p",
        "text": "Sort every keyword by what the buyer is trying to do. Early searches explain a problem, middle searches compare options and late searches check price, suppliers and fit. Writing a page for each stage means you meet the buyer at every point on the way to the shortlist."
      },
      {
        "type": "image",
        "src": "/insights/b2b-keyword-research-4.jpg",
        "alt": "ChatGPT answer to how to do keyword research for a B2B company, showing a table of warehouse management searches and their likely intent from informational to vendor research",
        "caption": "ChatGPT answer to a B2B keyword research prompt, 20 November 2026. It sorts warehouse management searches by intent."
      },
      {
        "type": "table",
        "head": [
          "Buying stage",
          "What the buyer wants",
          "Keyword pattern",
          "Example"
        ],
        "rows": [
          [
            "Problem aware",
            "To understand the issue",
            "what is [problem], how to [fix problem]",
            "what is warehouse management"
          ],
          [
            "Researching options",
            "To see the types of solution",
            "[category] software, [category] services",
            "warehouse management software"
          ],
          [
            "Comparing suppliers",
            "To shortlist vendors",
            "best [category], [vendor] alternatives, [category] vs [category]",
            "best warehouse management systems"
          ],
          [
            "Ready to buy",
            "To check price and fit",
            "[category] pricing, [category] providers UK",
            "warehouse management software pricing"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The ChatGPT answer above makes the same point: the last three searches may be the most valuable even when their volumes are relatively low. That matches what we see in B2B, where bottom-of-funnel terms are small but close to a sale."
      },
      {
        "type": "h2",
        "text": "What are the best tools for B2B keyword research?"
      },
      {
        "type": "p",
        "text": "Free tools are enough to start: Google autocomplete, People Also Ask, Google Search Console, Google Keyword Planner and Google Trends. Paid tools such as Semrush and Ahrefs add volumes, difficulty scores and competitor data at scale. Use free tools first, then add a paid tool when you have more than one product line or market."
      },
      {
        "type": "image",
        "src": "/insights/b2b-keyword-research-3.jpg",
        "alt": "Google UK People Also Ask box for b2b keyword research with the question what are the top 10 keyword research tools expanded, showing an AI Overview listing Semrush, Ahrefs, Google Keyword Planner and other tools",
        "caption": "Google UK People Also Ask answer for \"What are the top 10 keyword research tools?\", 20 November 2026."
      },
      {
        "type": "table",
        "head": [
          "Tool",
          "Cost",
          "Best use in B2B"
        ],
        "rows": [
          [
            "Google autocomplete and People Also Ask",
            "Free",
            "Real wording and follow-up questions buyers type"
          ],
          [
            "Google Search Console",
            "Free",
            "Queries you already show for, and which pages are close to page one"
          ],
          [
            "Google Keyword Planner",
            "Free with a Google Ads account",
            "Idea lists and volume ranges (exact volumes usually need active ad spend)"
          ],
          [
            "Google Trends",
            "Free",
            "Comparing terms and spotting rising topics"
          ],
          [
            "Semrush and Ahrefs",
            "Paid",
            "Volumes, keyword difficulty, competitor keywords and long-tail lists at scale"
          ]
        ]
      },
      {
        "type": "steps",
        "title": "A simple free workflow in 45 minutes",
        "items": [
          {
            "title": "Open Search Console and find your starting point",
            "text": "Filter queries by pages that matter to your offer and note the searches where you rank between positions 8 and 30.",
            "path": "Search Console > Performance > Search results > Queries"
          },
          {
            "title": "Expand each seed term in Google",
            "text": "Type the seed, copy every autocomplete suggestion and note the People Also Ask questions that appear."
          },
          {
            "title": "Check the ideas in Keyword Planner",
            "text": "Paste your seed list to see related terms and volume ranges, then remove anything that attracts job seekers or consumers.",
            "path": "Google Ads > Tools > Keyword Planner > Discover new keywords"
          },
          {
            "title": "Compare shortlisted terms in Google Trends",
            "text": "Compare two or three similar phrases to see which wording buyers in your market use more often."
          }
        ]
      },
      {
        "type": "p",
        "text": "Keep your keyword list in one sheet with columns for the term, buying stage, intent, page to target and status. A paid tool then fills in volume and difficulty for the terms you have already chosen."
      },
      {
        "type": "h2",
        "text": "How do you use Google results to find B2B keywords?"
      },
      {
        "type": "p",
        "text": "Search each seed term in Google and study who ranks. The type of page that wins tells you the intent: guides mean the buyer is learning, comparison pages mean the buyer is shortlisting, and service pages mean the buyer is ready to talk. If the results are all one type of page, that is the page you need to build."
      },
      {
        "type": "image",
        "src": "/insights/b2b-keyword-research-2.jpg",
        "alt": "Google UK results for b2b keyword research showing step-by-step guides from rocktherankings.com, Ellipsis, Hallam and Whitehat SEO",
        "caption": "Google UK results for \"b2b keyword research\", 20 November 2026: the top results are all step-by-step guides."
      },
      {
        "type": "p",
        "text": "For each seed term, note the page types in the top five, the questions their headings answer and what they leave out. The gaps become your information gain: an example, a template or data that the ranking pages do not give. Do this with the buyer's wording, not just your own."
      },
      {
        "type": "h2",
        "text": "How do you find the questions and AI prompts B2B buyers use?"
      },
      {
        "type": "p",
        "text": "Buyers now ask long questions in Google and in AI assistants, so your list needs both. Collect questions from People Also Ask, sales calls and support tickets, then rewrite each as the prompt a buyer would type into ChatGPT, Claude or Google AI Mode."
      },
      {
        "type": "list",
        "items": [
          "**Turn questions into prompts.** \"Which payroll providers suit a 200-person manufacturer?\" is a keyword and a prompt at the same time.",
          "**Test the prompts yourself.** Run ten of them in ChatGPT and Google AI Mode and note which companies and sources are named.",
          "**Record the sources.** The pages AI tools cite show the content types they trust, and where you need to be mentioned.",
          "**Add the gaps to your list.** Any question you cannot find a good answer to on your site is a page to write."
        ]
      },
      {
        "type": "p",
        "text": "Our guides on [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt) and [answer engine optimisation](/insights/answer-engine-optimisation) explain how those answers are chosen, and [how to track AI traffic for free](/insights/track-ai-traffic) shows how to measure the visits they send."
      },
      {
        "type": "h2",
        "text": "How do you prioritise B2B keywords?"
      },
      {
        "type": "p",
        "text": "Score each keyword on three things: how closely it fits what you sell, how close the buyer is to a decision, and how hard it is to rank. Fit and intent come first. Volume breaks ties. Ahrefs notes that almost 93% of keywords in its US database get fewer than 10 searches a month, so a low number is normal rather than a warning sign."
      },
      {
        "type": "checklist",
        "title": "Score every keyword before you commit",
        "items": [
          "**Fit.** Would a buyer who typed this be a good customer for us?",
          "**Intent.** Is the buyer learning, comparing or ready to buy?",
          "**Difficulty.** Can we reach page one with the authority and content we have?",
          "**Proof.** Do we have an example, data or experience that makes our page better than the current results?",
          "**Next step.** Is there a clear action, such as a demo, a quote or a download, for a visitor from this search?"
        ]
      },
      {
        "type": "p",
        "text": "Start with terms where fit and intent are both high and difficulty is moderate. Those are your first ten pages. Broader educational terms come next, because they feed the same buyers earlier in their research."
      },
      {
        "type": "h2",
        "text": "How do you turn B2B keyword research into a keyword map?"
      },
      {
        "type": "p",
        "text": "A keyword map assigns each keyword group to one page. Put terms with the same intent on the same page, give different intents their own pages, and write down the main keyword, the supporting terms and the call to action for each. This avoids two of your pages competing for the same search."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Group by intent.** Put \"warehouse management software\" and \"WMS software\" together, because they mean the same thing to a buyer."
          },
          {
            "text": "**Pick a main keyword per page.** Choose the phrase buyers use most, and use it in the title, H1, first paragraph and one H2."
          },
          {
            "text": "**Choose the page type.** Guides for learning terms, comparison pages for shortlist terms and service or pricing pages for buying terms."
          },
          {
            "text": "**Link the pages together.** Connect early-stage guides to later-stage pages so a reader can move forward, as we describe in our [B2B SEO strategy](/insights/seo-for-b2b-companies)."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure B2B keyword research?"
      },
      {
        "type": "p",
        "text": "Measure it in three layers: visibility, visits and pipeline. Impressions and rankings in Search Console show whether the keywords are working. Organic visits to the target pages show whether people click. Qualified leads and deals in your CRM show whether the keywords bring buyers. Review the numbers every month."
      },
      {
        "type": "list",
        "items": [
          "**Visibility.** Impressions and average position for each keyword group in Search Console.",
          "**Visits.** Organic sessions and engaged sessions on each target page in Google Analytics 4.",
          "**Pipeline.** Leads, meetings and opportunities that started on those pages, tracked in your CRM.",
          "**AI mentions.** Whether your brand appears for your prompt list in ChatGPT and Google AI Mode each month."
        ]
      },
      {
        "type": "p",
        "text": "Our [SEO report template](/insights/seo-report-template) shows how to lay these numbers out, and the [AI Overview trackers guide](/insights/ai-overviews-trackers) covers tools for the AI side."
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Get a free keyword list for your business",
        "text": "Want us to do the first pass for you? [Get a free keyword list for your business](/book). Tell us what you sell and who you sell to, and we will send back a starter list of B2B terms grouped by buying stage."
      }
    ],
    "faq": [
      {
        "q": "What is B2B keyword research?",
        "a": "B2B keyword research is finding the words and questions business buyers type into Google and AI tools when they research a problem, compare suppliers and check prices. It focuses on buyer fit and intent rather than the biggest search volumes."
      },
      {
        "q": "How do I do keyword research for a B2B company?",
        "a": "Collect seed terms from sales calls and your CRM, expand them with Google autocomplete, People Also Ask, Search Console and Keyword Planner, group them by buying stage, then score each one on fit, intent and difficulty. Assign each group to one page."
      },
      {
        "q": "Is low search volume a problem in B2B?",
        "a": "No. Ahrefs reports that almost 93% of keywords in its US database get fewer than 10 searches a month, and B2B buyers are a small group. A term with 10 monthly searches from the right buyer can outperform a broad term with thousands of irrelevant visits."
      },
      {
        "q": "What are the best free tools for B2B keyword research?",
        "a": "Google autocomplete, People Also Ask, Google Search Console, Google Keyword Planner and Google Trends. Keyword Planner needs a Google Ads account and usually shows volume ranges unless you run ads."
      },
      {
        "q": "Should I include AI prompts in B2B keyword research?",
        "a": "Yes. Buyers ask long questions in ChatGPT, Claude and Google AI Mode. Rewrite your buyer questions as prompts, test them monthly and note which companies and sources the answers name."
      },
      {
        "q": "How often should I update my B2B keyword research?",
        "a": "Review it every quarter and refresh it whenever you launch a new product, enter a new market or see new questions on sales calls. Check rankings and impressions in Search Console every month."
      }
    ]
  },
  {
    "slug": "how-long-does-seo-take",
    "seoTitle": "How Long Does SEO Take? AEO, GEO and SEO Timeline 2027",
    "title": "How Long Does SEO Take? A Realistic AEO, GEO and AI SEO Timeline for 2027",
    "description": "How long does SEO take? A realistic month-by-month timeline for SEO, AEO and GEO, what speeds results up or slows them down, and how to tell it is working.",
    "date": "2026-11-19",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/how-long-does-seo-take-banner.jpg",
    "intro": "Almost every business owner asks the same question before starting: how long does SEO take? The honest answer is three to six months for measurable results and six to twelve months for strong growth in a competitive market. AEO (answer engine optimisation) and GEO (generative engine optimisation), the work of being quoted in AI answers, follow a similar curve because AI tools lean heavily on pages that already rank. This guide gives a month-by-month timeline for SEO, AEO and GEO, explains what speeds results up or slows them down, and shows how to tell it is working before the enquiries arrive.",
    "tldr": [
      "SEO usually takes three to six months to show measurable results and six to twelve months to deliver strong growth in competitive markets, according to Search Engine Land.",
      "Technical fixes can show within days or weeks. Google says some changes take effect in a few hours and others take several months.",
      "AEO and GEO follow SEO. Ahrefs found 76% of AI Overview citations came from pages already in the top 10, so ranking comes first.",
      "Ahrefs found only 1.74% of newly published pages reached Google's top 10 within a year in its large random sample, so a single new page is not a plan.",
      "Track leading signs (indexing, impressions, long-tail rankings, AI mentions) from month one and judge revenue from month six."
    ],
    "body": [
      {
        "type": "h2",
        "text": "How long does SEO take to work?"
      },
      {
        "type": "p",
        "text": "SEO typically takes three to six months to produce measurable results, and six to twelve months or more to deliver significant growth in competitive industries. That is the range Google's AI Overview gives for the search, taken from Search Engine Land, and it matches what most UK agencies publish. Early signs such as indexing and first impressions can appear in the first few weeks."
      },
      {
        "type": "image",
        "src": "/insights/how-long-does-seo-take-1.jpg",
        "alt": "Google UK AI Overview for the search how long does SEO take, saying SEO typically takes 3 to 6 months for measurable results and 6 to 12 months for significant growth in competitive industries, with a week-by-week timeline",
        "caption": "Google UK AI Overview for \"how long does SEO take\", 19 November 2026."
      },
      {
        "type": "p",
        "text": "In plain English, SEO (search engine optimisation) is the work of making your site easy for Google to find and worth recommending. Google has to find your changes, judge them against competitors and then decide to show you higher. Each step takes time, which is why a page published on Monday rarely brings enquiries on Friday."
      },
      {
        "type": "p",
        "text": "The same range appears in the People Also Ask box under the main results, where Google again quotes Search Engine Land and adds that the real timeline depends on whether your site is brand new or established, how competitive your industry is and how quickly search engines crawl your pages."
      },
      {
        "type": "image",
        "src": "/insights/how-long-does-seo-take-2.jpg",
        "alt": "Google People Also Ask answer to how long does SEO really take, showing an AI Overview that says 3 to 6 months to show measurable results and 6 to 12 months for compounding growth",
        "caption": "Google UK People Also Ask answer for \"How long does SEO really take?\", 19 November 2026."
      },
      {
        "type": "h2",
        "text": "How long does SEO take for a new page or a new website?"
      },
      {
        "type": "p",
        "text": "A new page can be indexed within hours or days, but reaching page one usually takes months. Ahrefs studied 1 million random URLs and found only 1.74% reached Google's top 10 within a year. On a filtered sample of 2 million English-language pages it was 6.11%, which Ahrefs calls the fairer figure."
      },
      {
        "type": "stats",
        "title": "How quickly new pages reach Google's top 10",
        "items": [
          {
            "value": "1.74%",
            "label": "of 1 million random new URLs reached the top 10 within a year (Ahrefs, 2025)"
          },
          {
            "value": "6.11%",
            "label": "on a filtered sample of 2 million English-language URLs"
          },
          {
            "value": "72.9%",
            "label": "of top 10 pages are more than three years old, up from 59% in 2017"
          }
        ]
      },
      {
        "type": "p",
        "text": "The Ahrefs study also shows why older sites win. The average page in position one is five years old, against two years in 2017. A brand-new website therefore starts without years of links, mentions and history, and it needs longer than an established site with a few weak pages."
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "What this means for you",
        "text": "A new website should plan for six to twelve months of steady work, and an established site with existing authority can see movement in two to four months. Pages that already sit on page two usually move fastest when you improve them."
      },
      {
        "type": "h2",
        "text": "What is a realistic SEO, AEO and GEO timeline by month?"
      },
      {
        "type": "p",
        "text": "Most businesses see technical fixes and early rankings in the first three months, more clicks and enquiries between months three and six, and steady growth after that. AEO and GEO work sits alongside and builds on the same pages. The table below gives planning ranges from Search Engine Land, Orbit Media Studios and Google, not guaranteed milestones."
      },
      {
        "type": "table",
        "head": [
          "Period",
          "SEO (Google rankings)",
          "AEO and GEO (AI answers)"
        ],
        "rows": [
          [
            "Month 1",
            "Technical fixes, indexing, keyword research and on-page changes. Few visits yet.",
            "Answer-first rewrites, clear company and entity details, crawler access checked."
          ],
          [
            "Months 2 to 3",
            "Impressions and long-tail rankings start to grow. Low-competition terms can move (Orbit Media Studios puts this at two to three months).",
            "First mentions or citations are possible for narrow questions, especially where you already rank."
          ],
          [
            "Months 3 to 6",
            "Clearer clicks and the first enquiries as content, internal links and authority compound.",
            "More repeat citations as more of your pages rank and your brand is mentioned elsewhere."
          ],
          [
            "Months 6 to 12",
            "Stronger coverage of competitive terms and steadier leads (Search Engine Land: six to twelve months in competitive markets).",
            "More consistent AI visibility where authority and outside mentions keep growing."
          ]
        ]
      },
      {
        "type": "p",
        "text": "We asked ChatGPT the same question for a small UK business and it gave a very similar split: three to six months for early SEO results, six to twelve for consistent leads, and a less predictable path for AI visibility. It also said these are planning ranges, not promises."
      },
      {
        "type": "image",
        "src": "/insights/how-long-does-seo-take-3.jpg",
        "alt": "ChatGPT answer to how long it takes for SEO and AI search optimisation to show results for a small UK business, with a table by month for traditional SEO and AI search AEO and GEO",
        "caption": "ChatGPT answer to a neutral question about SEO and AI search timelines, 19 November 2026."
      },
      {
        "type": "h2",
        "text": "How long does AEO and GEO take compared with SEO?"
      },
      {
        "type": "p",
        "text": "AEO and GEO usually take about as long as SEO, and sometimes a little longer, because AI tools mostly quote pages that already rank. Ahrefs found that 76% of 1.9 million AI Overview citations came from pages in the top 10, and the median position of the most-cited URLs was 2. We have not found a reliable industry-wide benchmark for how long it takes to be cited, so treat any promise of a fixed date with caution."
      },
      {
        "type": "p",
        "text": "Two things can make AI visibility arrive earlier than rankings. A page that answers a narrow question in its first lines can be quoted before it reaches the top spot, and Ahrefs found pages that rank for the related sub-questions behind a topic were 161% more likely to be cited. Our guides on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) and [how to rank in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) show how to build those pages."
      },
      {
        "type": "p",
        "text": "Other things slow it down. AI answers change often, each platform picks different sources, and brand mentions on other sites matter as much as your own pages. Our [AEO vs SEO](/insights/aeo-vs-seo) and [GEO vs SEO](/insights/geo-vs-seo) guides explain where the work differs, and our [answer engine optimisation pillar](/insights/answer-engine-optimisation) covers the full process."
      },
      {
        "type": "h3",
        "text": "Do people search for AEO and GEO or for AI SEO?"
      },
      {
        "type": "p",
        "text": "In the UK, \"AI SEO\" is searched far more than \"AEO SEO\" or \"GEO SEO\". In Google Trends over the past 12 months, \"AI SEO\" sits well above both, while \"GEO SEO\" stays a little ahead of \"AEO SEO\". That is why this guide uses all three terms, and why your own pages should too."
      },
      {
        "type": "image",
        "src": "/insights/how-long-does-seo-take-4.jpg",
        "alt": "Google Trends chart for the United Kingdom over the past 12 months comparing ai seo, aeo seo and geo seo, with ai seo far higher than the other two",
        "caption": "Google Trends, United Kingdom, past 12 months: \"ai seo\" (blue), \"aeo seo\" (red) and \"geo seo\" (yellow). Searched 19 November 2026."
      },
      {
        "type": "h2",
        "text": "What makes SEO and AEO results faster or slower?"
      },
      {
        "type": "p",
        "text": "Five things set the speed: how new your site is, how competitive your keywords are, how healthy your site is technically, how much useful content you publish and how many trusted sites mention you. Of these, competition and site authority usually matter most."
      },
      {
        "type": "compare",
        "title": "What speeds SEO up and what slows it down",
        "columns": [
          {
            "title": "Speeds it up",
            "tone": "good",
            "items": [
              "An established site with existing links and mentions",
              "Niche, long-tail and local keywords",
              "A fast, mobile-friendly, cleanly indexed site",
              "Answer-first pages that match what searchers ask",
              "Steady publishing and updates every month"
            ]
          },
          {
            "title": "Slows it down",
            "tone": "bad",
            "items": [
              "A brand-new domain with no history",
              "Broad, high-volume terms against big brands",
              "Slow pages, blocked crawlers or duplicate content",
              "Thin pages written only to hit a word count",
              "Stopping and restarting the work every few months"
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "Google confirms the wide spread. In its SEO starter guide it says some changes might take effect in a few hours and others could take several months, and it suggests waiting a few weeks before judging whether a change worked."
      },
      {
        "type": "h3",
        "text": "Does a local or B2B business see results at a different speed?"
      },
      {
        "type": "p",
        "text": "Local searches are often quicker because the competition is a handful of nearby firms. Fixing your Google Business Profile, reviews and local pages can move map results in weeks. B2B searches are slower because buyers research for months and rankings need more authority. Both benefit from the same basics, and our guide on [whether SEO can generate leads](/insights/can-seo-generate-leads) shows how enquiries follow rankings."
      },
      {
        "type": "h2",
        "text": "How can you tell SEO, AEO and GEO are working before the leads arrive?"
      },
      {
        "type": "p",
        "text": "Look at leading signs in the first months: pages indexed, impressions, rankings for long-tail searches and mentions in AI answers. Revenue is a lagging sign, so judge it from month six. Tracking these early signs also stops you cancelling a campaign just before it starts to pay back."
      },
      {
        "type": "checklist",
        "title": "Signs it is working, in the order they usually appear",
        "items": [
          "**Indexed.** New and updated pages appear in Google Search Console within days or weeks.",
          "**Impressions rise.** Your pages are shown for more searches, even before clicks grow.",
          "**Long-tail rankings.** Specific, lower-competition searches reach pages one and two.",
          "**AI mentions.** Your brand or pages show up in ChatGPT, Google AI Overviews or AI Mode for your key questions.",
          "**Clicks and enquiries.** Organic visits turn into calls, forms and bookings, which usually builds from month three to six."
        ]
      },
      {
        "type": "p",
        "text": "Use Search Console for impressions, clicks and rankings, and Google Analytics 4 for visits and enquiries. Our guide on [how to track AI traffic for free](/insights/track-ai-traffic) shows the setup step by step."
      },
      {
        "type": "h2",
        "text": "What should you do if SEO is taking longer than expected?"
      },
      {
        "type": "p",
        "text": "First check for a technical block, then check whether you are aiming at terms that are too competitive, and then check whether your pages answer the question better than the pages above them. Most slow campaigns trace back to one of these three."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Check indexing.** Use the URL Inspection tool in Search Console to confirm your key pages are indexed and not blocked."
          },
          {
            "text": "**Check the targets.** Move from broad terms to the specific searches your buyers use, then build up."
          },
          {
            "text": "**Improve the answer.** Put the direct answer in the first lines, add real examples and update stale facts."
          },
          {
            "text": "**Build mentions.** Earn links and mentions on trusted sites, because AI tools and Google both rely on them."
          },
          {
            "text": "**Review at 90 days.** Compare impressions and rankings with the start date and adjust the plan, not the goal."
          }
        ]
      },
      {
        "type": "p",
        "text": "If you are weighing up providers, our guides on [how to choose an SEO company](/insights/how-to-find-a-good-seo-company) and [how much SEO costs in the UK](/insights/seo-pricing-uk) explain what to ask and what to expect to pay. Be wary of anyone who guarantees a page-one ranking by a fixed date."
      },
      {
        "type": "h2",
        "text": "Is it too late to start SEO and AEO now?"
      },
      {
        "type": "p",
        "text": "No. The cost of waiting is that your competitors build authority while you stand still. Starting now means results land in the second half of 2027, while waiting six months pushes the same results into 2028. The earlier you start, the longer your pages have to age, and Ahrefs data shows that older pages dominate the top 10."
      }
    ],
    "faq": [
      {
        "q": "How long does SEO take to show results?",
        "a": "Most sites see measurable results in three to six months, with early signs such as indexing and impressions in the first weeks. Strong growth in competitive markets usually takes six to twelve months."
      },
      {
        "q": "How long does AEO or GEO take to work?",
        "a": "AEO and GEO usually follow the SEO timeline because AI tools mostly cite pages that already rank. Ahrefs found 76% of AI Overview citations came from top 10 pages. First mentions can come sooner for narrow questions."
      },
      {
        "q": "Why does SEO take so long?",
        "a": "Google must find your changes, compare them with competitors and trust your site, and that trust builds through links, mentions and time. Ahrefs found the average top-ranking page is five years old."
      },
      {
        "q": "How long does SEO take for a new website?",
        "a": "A new website should plan for six to twelve months of steady work. It starts with no links, mentions or history, so it needs longer than an established site."
      },
      {
        "q": "Can SEO work in a month?",
        "a": "Technical fixes and a few low-competition searches can move within a month, but meaningful traffic and enquiries rarely arrive that quickly. Google says some changes take effect in hours and others take months."
      },
      {
        "q": "How long does local SEO take?",
        "a": "Local SEO can show in weeks for Google Business Profile and map results, and in three to six months for stronger rankings and enquiries, because local competition is usually smaller."
      },
      {
        "q": "Should I stop SEO if I see no results after three months?",
        "a": "Not without checking leading signs first. If pages are indexed and impressions and long-tail rankings are rising, the campaign is on track. If not, audit indexing, targets and content quality before changing course."
      },
      {
        "q": "How do I speed up SEO and AI search results?",
        "a": "Improve pages that already rank on page two, target specific long-tail questions, put the answer in the first lines, fix technical blocks and earn mentions on trusted sites."
      }
    ]
  },
  {
    "slug": "commercial-real-estate-marketing",
    "seoTitle": "Commercial Real Estate Marketing 2027: Get More Leads",
    "title": "Commercial Real Estate Marketing in 2027: How Agents and Developers Win Leads from Search and AI",
    "description": "Commercial real estate marketing for agents and developers: win occupiers and investors with listing pages, local SEO, case studies and AI answers.",
    "date": "2026-11-19",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [
      "Real estate"
    ],
    "image": "/insights/commercial-real-estate-marketing-banner.jpg",
    "intro": "An occupier needs 20,000 square feet of warehouse space by spring. An investor wants a tenanted retail parade in the North West. A landowner wonders who could take a site through planning. Before any of them phones an agent or a developer, they search, scroll listings, read an AI answer and check who keeps appearing. Commercial real estate marketing is the work of being the name they see at each step. This guide shows agents and developers how to do that in 2027: the pages Google rewards, the listing details occupiers need, the proof that wins instructions and how to get named in AI answers.",
    "tldr": [
      "Commercial real estate marketing wins occupiers, investors and landowners who research for weeks, involve several decision-makers and want proof before they call.",
      "Build separate pages for each location, property type and service, and give every listing its own crawlable page with size, price guide, floor plan and photos.",
      "Rightmove's listing data shows floor plans lifted detail views by 21% and virtual tours by 36%, and 54% of commercial users would not click a price on application listing.",
      "Case studies, original market data and mentions on trade sites are what get a firm named in Google AI Overviews and ChatGPT answers.",
      "Measure valuation requests, viewings booked and instructions won, not traffic alone."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is commercial real estate marketing, and how is it different from residential?"
      },
      {
        "type": "p",
        "text": "Commercial real estate marketing promotes offices, industrial units, retail space, land and investment property to the businesses and investors who might lease or buy them. It differs from residential marketing because the buyer is a business, the decision takes months and several people have a say. Google's own AI Overview for the term says the same: commercial marketing relies on specifications, financial data, longer sales cycles and multiple decision-makers."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search commercial real estate marketing, describing how it promotes offices, retail units, industrial sites and investment properties to tenants, buyers and investors",
        "caption": "Google UK AI Overview for \"commercial real estate marketing\", 19 November 2026."
      },
      {
        "type": "p",
        "text": "In plain English, a homeowner chooses a house they like. A commercial occupier chooses a location, a lease and a landlord. A finance director checks the numbers, an operations lead checks the loading bays and a managing director signs. Your marketing has to answer all three people. If you also work with homes, our guide to [SEO for estate agents](/insights/seo-for-estate-agents) covers the residential side."
      },
      {
        "type": "p",
        "text": "The term changes with the country. The UK says commercial property and commercial agents, while the US says commercial real estate and brokers. You will see both in this guide, and the steps are the same."
      },
      {
        "type": "h2",
        "text": "How do occupiers and investors find commercial property agents and developers?"
      },
      {
        "type": "p",
        "text": "They search in three places: Google, the property portals and AI assistants. Each one answers a different question. Google shows who covers a location, the portals show what is available and AI assistants shortlist firms and explain markets. A firm that appears in only one of these loses the other two."
      },
      {
        "type": "p",
        "text": "We asked ChatGPT how commercial agents and developers get more leads from search and AI. It framed the opportunity as three stages: being found on Google, being recommended in AI answers and turning that interest into an enquiry. That matches what we see in the results."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to the question how do commercial real estate agents and developers get more leads from search and AI, listing Google search, AI search and conversion as three stages",
        "caption": "ChatGPT answer to a neutral question about commercial real estate leads, 19 November 2026."
      },
      {
        "type": "p",
        "text": "Search interest shows where the volume sits. In Google Trends for the UK over five years, \"commercial property for sale\" draws far more searches than \"commercial property agents\" or \"commercial property investment\". People search for the property first and the agent second. Your listing and location pages therefore carry most of the demand, and your agent or investment pages catch the buyers who are ready to choose a firm."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-google-trends.jpg",
        "alt": "Google Trends chart for the United Kingdom over five years comparing commercial property for sale, commercial property agents and commercial property investment, with commercial property for sale far higher than the other two",
        "caption": "Google Trends, United Kingdom, past five years: \"commercial property for sale\" (blue), \"commercial property agents\" (red) and \"commercial property investment\" (yellow). Searched 19 November 2026."
      },
      {
        "type": "callout",
        "variant": "takeaway",
        "title": "What this means for your marketing",
        "text": "Treat each listing and each location as a page people search for. Treat your firm pages as the place a buyer lands once they are choosing between two or three names."
      },
      {
        "type": "h2",
        "text": "How do you get found for commercial property searches on Google?"
      },
      {
        "type": "p",
        "text": "You get found by giving Google a specific page for every search a buyer makes: a page for each location, each property type and each listing. A single \"Commercial property\" page cannot rank for \"industrial units to let in Manchester\" and \"office space in Leeds\" at once. Specific pages can."
      },
      {
        "type": "h3",
        "text": "How should you build commercial property listing pages?"
      },
      {
        "type": "p",
        "text": "Give every listing its own page on your own site, with a permanent web address, and keep the page up after the unit is let or sold. Show the property type, location, size, tenure, price or rent guide, planning use, floor plan, photos and a contact route. Remove or merge near-empty pages, because hundreds of identical listing pages with no detail add little."
      },
      {
        "type": "p",
        "text": "Detail wins clicks. Rightmove's own research on commercial listings found that 54% of its commercial users would not click a listing marked price on application, and a further 24% would click only after looking at listings that showed a price. It also compared listings with and without extras, and the extras made a clear difference."
      },
      {
        "type": "chart",
        "title": "Rightmove commercial listings with extras versus without (average uplift, %)",
        "series": [
          {
            "name": "Detail views",
            "color": "#E62E6B"
          },
          {
            "name": "Leads",
            "color": "#BFBFBF"
          }
        ],
        "rows": [
          {
            "label": "5 or more photos",
            "values": [
              12,
              12
            ]
          },
          {
            "label": "Floor or site plan",
            "values": [
              21,
              14
            ]
          },
          {
            "label": "Virtual tour",
            "values": [
              36,
              25
            ]
          }
        ],
        "source": {
          "label": "Rightmove Hub, Your new-look CRE listings",
          "href": "https://hub.rightmove.co.uk/your-new-look-cre-listings/",
          "note": "average uplift against listings in the same sector without the extra, published 21 September 2021"
        }
      },
      {
        "type": "p",
        "text": "The figures are Rightmove's averages from 2021, so use them as a guide to what buyers value rather than a promise. The direction is clear: a floor plan, a virtual tour and a price give an occupier enough to shortlist a unit without calling. Copy the same detail onto your own listing pages."
      },
      {
        "type": "stats",
        "title": "What commercial listing buyers react to",
        "items": [
          {
            "value": "54%",
            "label": "of Rightmove commercial users would not click a listing marked price on application (Rightmove Hub, 2021)"
          },
          {
            "value": "+21%",
            "label": "average rise in detail views for listings with a floor or site plan"
          },
          {
            "value": "+36%",
            "label": "average rise in detail views for listings with a virtual tour"
          }
        ]
      },
      {
        "type": "h3",
        "text": "How do location and property-type pages help you rank?"
      },
      {
        "type": "p",
        "text": "Location and property-type pages capture searches like \"commercial property agents Manchester\" and \"warehouse for sale in the Midlands\". Build one page for each place and property type you handle, and write each from real knowledge: the submarkets, rents, major occupiers, transport links and recent deals. Copying one template across 40 towns with only the name changed does not help the buyer or Google."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Pick your patch.** List the towns, business parks and property types where you can show real deals."
          },
          {
            "text": "**Write the answer first.** Open with who you act for, what you cover and what you have done nearby."
          },
          {
            "text": "**Add proof.** Include recent lettings or sales you can name, a short market note and a clear next step."
          },
          {
            "text": "**Link the pages.** Connect each location page to its live listings, its case studies and its service page."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How does the Google map pack work for commercial agents?"
      },
      {
        "type": "p",
        "text": "A search for \"commercial property agents manchester\" shows a map and a short list of firms before the ordinary results. Each firm needs its own Google Business Profile, with the correct category, address, hours, services and recent reviews. When we searched, the map listed one agent with 172 reviews at 4.1 stars, another with 11 reviews at 3.9 and a third with 3 reviews at 3.0. Review count is not the only signal, so keep your profile complete and collect reviews from landlords and tenants steadily."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-map-pack.jpg",
        "alt": "Google UK map results for the search commercial property agents manchester, showing a map of Greater Manchester with red pins and the first listing, an estate agent with 4.1 stars from 172 reviews",
        "caption": "Google UK map results for \"commercial property agents manchester\", 19 November 2026."
      },
      {
        "type": "p",
        "text": "Multi-office firms should make one profile per staffed office and keep the name, address and phone number identical on the website and every directory. Our guide on [how to rank in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) explains how Google reuses this local data in its AI answers."
      },
      {
        "type": "h2",
        "text": "How do case studies and market data win commercial instructions?"
      },
      {
        "type": "p",
        "text": "Case studies and market data win instructions because commercial clients are buying trust in a high-value deal. A landlord choosing who should let a building, or an investor choosing who should source an acquisition, wants evidence that you have done it before. Pages that show that evidence also give Google and AI tools something specific to quote."
      },
      {
        "type": "checklist",
        "title": "What a commercial case study should include",
        "items": [
          "**The property and the brief.** Type, location and what the client wanted to achieve.",
          "**The problem.** For example a long void, a difficult lease or a site with planning risk.",
          "**What you did.** The marketing, the buyer or tenant search and the negotiation.",
          "**The result.** Letting or sale achieved, time taken and any figures the client has approved.",
          "**A named contact.** The partner or director who ran the deal, with a link to their profile."
        ]
      },
      {
        "type": "p",
        "text": "Original market data goes further. A quarterly note on industrial rents in your region, vacancy in your town centre or yields by sector gives journalists, trade sites and investors a reason to cite you. Publish the numbers, explain how you collected them and keep the page updated so the figures stay current."
      },
      {
        "type": "p",
        "text": "Be careful with client names and deal values. Only publish what the client has agreed, and describe a deal by sector and location where a name is not cleared."
      },
      {
        "type": "h2",
        "text": "How can commercial agents and developers get named in AI answers?"
      },
      {
        "type": "p",
        "text": "You get named in AI answers by ranking well, answering the question a buyer asks in the first lines of a page and being mentioned on other trusted sites. AI tools build answers from sources they can read and verify, so the same pages that win on Google also feed ChatGPT, Gemini and Google's AI Overviews."
      },
      {
        "type": "p",
        "text": "Google's AI Overview already names commercial firms. For \"commercial property agents manchester\" it listed regional specialists such as Gifford Dixon and Roger Hannah, then national consultancies such as Knight Frank, and linked to those firms' own pages. A firm without a clear, specific page about what it does in that city has little for the answer to draw on."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-ai-overview-manchester.jpg",
        "alt": "Google UK AI Overview for the search commercial property agents manchester, listing regional and independent specialists with links to their own web pages",
        "caption": "Google UK AI Overview for \"commercial property agents manchester\", 19 November 2026."
      },
      {
        "type": "stats",
        "title": "Why ranking and answers go together",
        "items": [
          {
            "value": "76%",
            "label": "of 1.9 million Google AI Overview citations came from pages already in Google's top 10 (Ahrefs)"
          },
          {
            "value": "8%",
            "label": "of Google visits included a click on a result when an AI summary appeared, against 15% when it did not (Pew Research Center, 2025)"
          }
        ]
      },
      {
        "type": "p",
        "text": "[Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) studied 1.9 million citations in Google AI Overviews and found 76% came from pages already ranking in the top 10. The [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults across 68,879 Google searches in March 2025 and found people clicked a traditional result in 8% of visits when an AI summary appeared, against 15% when it did not. For you, that means ranking comes first, and being the named source matters more when fewer people click."
      },
      {
        "type": "h3",
        "text": "What should a commercial agent or developer do to appear in ChatGPT and AI Overviews?"
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Answer the buyer's question first.** Start a page with a direct answer in 40 to 60 words, for example what you charge, which sectors you cover or how a letting process works."
          },
          {
            "text": "**Use the questions buyers ask.** Write headings such as \"How much do commercial agents charge?\" and \"What should you check before buying an industrial unit?\"."
          },
          {
            "text": "**Name things precisely.** Use your full company name, locations, property types and team names consistently across your site and profiles."
          },
          {
            "text": "**Get mentioned elsewhere.** Aim for trade press comment, industry association pages, directories and LinkedIn profiles for your partners."
          },
          {
            "text": "**Allow the crawlers.** Check your robots.txt and any CDN settings are not blocking search crawlers from your listing and guide pages."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guides on [answer engine optimisation](/insights/answer-engine-optimisation) and [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) give the full steps, including how ChatGPT chooses its sources."
      },
      {
        "type": "h2",
        "text": "How should you market commercial property to occupiers, investors and landowners?"
      },
      {
        "type": "p",
        "text": "Market to each audience separately, because each asks different questions and needs different proof. A single message for everyone reads as generic to all of them. The table below shows how the same firm can speak to each group."
      },
      {
        "type": "table",
        "head": [
          "Audience",
          "What they search",
          "Pages that help",
          "Proof they want"
        ],
        "rows": [
          [
            "Occupiers (tenants and buyers)",
            "Office space in a town, warehouse to let, retail units for sale",
            "Listing pages, location pages, fit-out and lease guides",
            "Floor plans, photos, price or rent guide, transport and labour data"
          ],
          [
            "Investors",
            "Commercial property investment, yields, tenanted retail for sale",
            "Investment pages, market reports, sector guides",
            "Yields, lease length, tenant covenant strength, past acquisitions"
          ],
          [
            "Landowners and developers",
            "Sell land for development, planning consultants, development partners",
            "Land and development pages, planning case studies",
            "Planning wins, completed schemes, partners and timelines"
          ],
          [
            "Landlords",
            "Who should let my building, commercial property management",
            "Landlord services page, letting case studies",
            "Time to let, rent achieved, marketing plan"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Developers should add pages for each scheme, with a plan, a timeline, unit sizes and a way to register interest. Agents should add a page for each service they sell, such as lettings, sales, valuations and lease advisory. Logistics and industrial specialists can look at our guide to [logistics marketing](/insights/logistics-marketing) for how those occupiers research suppliers."
      },
      {
        "type": "h2",
        "text": "Which channels work for commercial property marketing besides SEO?"
      },
      {
        "type": "p",
        "text": "Search works best alongside a few other channels that reach the same decision-makers. Pick the ones where your buyers already spend time, and use each to point back to your listing and location pages."
      },
      {
        "type": "list",
        "items": [
          "**Property portals.** List availability on the main commercial portals for exposure, and keep your own site as the place that captures searches for your name and services.",
          "**LinkedIn.** Partners and directors can post deals, market views and new instructions. Investors and occupiers often check a profile before calling.",
          "**Email.** Send a short list of new instructions to a segmented list of occupiers and investors, with a link to each listing page.",
          "**Trade press and events.** Comment on market data and attend sector events, then link the coverage from your site.",
          "**Video and virtual tours.** Short property tours help an occupier shortlist without a visit, which fits Rightmove's finding that virtual tours lifted detail views."
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure commercial real estate marketing?"
      },
      {
        "type": "p",
        "text": "Measure the actions that lead to instructions: enquiries, viewings booked, valuation requests and instructions won, with the page or channel each came from. Traffic and rankings are useful signals, but a commercial deal can take months, so connect each enquiry to its source in your records."
      },
      {
        "type": "checklist",
        "title": "A simple monthly commercial marketing report",
        "items": [
          "**Enquiries by page type.** Listing pages, location pages, service pages and guides.",
          "**Viewings and valuations requested.** Count them in GA4 as key events and match them to your customer records.",
          "**Search Console clicks and impressions.** Check the location and property-type queries you want to win.",
          "**Map pack and review position.** Note where each office appears and how many reviews it holds.",
          "**AI visibility.** Check whether Google AI Overviews and ChatGPT name you for your main searches."
        ]
      },
      {
        "type": "p",
        "text": "Our step-by-step guide on [how to track AI traffic for free](/insights/track-ai-traffic) shows how to set this up in GA4 and Search Console, and [can SEO generate leads](/insights/can-seo-generate-leads) explains how to judge search by enquiries."
      },
      {
        "type": "image",
        "src": "/insights/commercial-real-estate-marketing-people-also-ask.jpg",
        "alt": "Google People Also Ask box for the search commercial real estate marketing, showing the questions how to do marketing for commercial real estate, what are the 5 Ps of real estate and what are the four Ps of marketing in real estate",
        "caption": "Google \"People also ask\" for \"commercial real estate marketing\", 19 November 2026."
      },
      {
        "type": "h2",
        "text": "What is a 90-day plan for commercial real estate marketing?"
      },
      {
        "type": "p",
        "text": "A 90-day plan fixes the basics first, then builds proof and then widens your reach. Start with the pages and profiles buyers meet first, and add content once those are solid."
      },
      {
        "type": "steps",
        "title": "Your first 90 days",
        "items": [
          {
            "title": "Days 1 to 30: fix the foundations",
            "text": "Give every live listing its own page with size, price guide, floor plan and photos. Claim and complete a Google Business Profile for each office, and check your site is crawlable.",
            "path": "Search Console > Pages > Indexing"
          },
          {
            "title": "Days 31 to 60: build location and service pages",
            "text": "Write a page for each location and property type you handle, with real deals, market notes and a clear enquiry route. Add one case study for each service."
          },
          {
            "title": "Days 61 to 90: earn mentions and measure",
            "text": "Publish one piece of original market data, pitch it to trade press and set up a monthly report covering enquiries, viewings, Search Console and AI answers.",
            "path": "GA4 > Admin > Events > Mark as key event"
          }
        ]
      },
      {
        "type": "h2",
        "text": "What mistakes should commercial agents and developers avoid?"
      },
      {
        "type": "compare",
        "title": "Commercial marketing habits to keep and to drop",
        "columns": [
          {
            "title": "Keep doing",
            "tone": "good",
            "items": [
              "One page per listing, location and service",
              "Price or rent guides and floor plans on every listing",
              "Named deals with client approval",
              "Original market data with a clear method",
              "A monthly report tied to enquiries and instructions"
            ]
          },
          {
            "title": "Drop",
            "tone": "bad",
            "items": [
              "Listings marked price on application with no other detail",
              "Template location pages with only the town name changed",
              "Old listings left live after the unit is let",
              "Reporting only rankings and traffic",
              "One message for occupiers, investors and landowners"
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "What is commercial real estate marketing?",
        "a": "Commercial real estate marketing promotes offices, industrial units, retail space, land and investment property to tenants, buyers and investors. It uses listings, local pages, case studies, market data, email, LinkedIn and search to win enquiries and instructions."
      },
      {
        "q": "How do commercial real estate agents get leads?",
        "a": "Agents get leads from property portals, Google searches for locations and property types, their own listing pages, referrals, LinkedIn and AI answers. The strongest results come from combining these, with each one pointing buyers to a page that has the detail they need."
      },
      {
        "q": "Does SEO work for commercial real estate?",
        "a": "Yes. Occupiers and investors search for property by location and type, for example commercial property for sale and commercial property agents in a town. Specific listing, location and service pages let a firm appear for those searches and for the AI answers built from them."
      },
      {
        "q": "How is commercial real estate marketing different from residential?",
        "a": "Commercial buyers are businesses, so the decision takes longer, involves several people and relies on specifications, financial data and track record. Marketing needs floor plans, price guides, market data and case studies rather than lifestyle photography alone."
      },
      {
        "q": "What should be on a commercial property listing page?",
        "a": "Include the property type, location, size, tenure, price or rent guide, planning use, floor plan, photos, key features and an enquiry route. Rightmove's research found 54% of its commercial users would not click a listing marked price on application."
      },
      {
        "q": "How can a commercial agent appear in ChatGPT and Google AI Overviews?",
        "a": "Rank well in Google first, then publish specific pages that answer buyer questions in the first lines. Keep your company details consistent and earn mentions in trade press, directories and LinkedIn. Ahrefs found 76% of AI Overview citations came from top 10 pages."
      },
      {
        "q": "How long does commercial real estate marketing take to work?",
        "a": "Listing and Business Profile fixes can change results within weeks. Location pages, case studies and mentions usually take three to six months to show in enquiries, and commercial deals take longer again to complete."
      },
      {
        "q": "How do you measure commercial real estate marketing?",
        "a": "Track enquiries, viewings booked, valuation requests and instructions won, with the page or channel each came from. Add Search Console clicks, map pack position and whether AI tools name your firm for your main searches."
      }
    ]
  },
  {
      "slug": "seo-pricing-uk",
      "seoTitle": "SEO Pricing UK 2027: What SEO Costs per Month",
      "title": "How Much Does SEO Cost in the UK in 2027? Monthly Pricing, What You Get and What to Avoid",
      "description": "SEO pricing in the UK: typical monthly retainers, hourly rates and project costs, what drives the price, what a quote should include and red flags to avoid.",
      "date": "2026-11-18",
      "author": "team",
      "topics": [
          "SEO - Begins"
      ],
      "industries": [],
      "image": "/insights/seo-pricing-uk-banner.jpg",
      "intro": "Ask five agencies what SEO costs and you may get five very different numbers. SEO pricing in the UK ranges from under £500 to over £10,000 a month, and the gap follows how competitive your market is, how big your site is and how much work each month includes. Most UK businesses pay £500 to £3,000 a month. This guide breaks down monthly retainers, hourly rates and one-off projects, shows what drives the price, explains what a good quote includes and lists the red flags to avoid.",
      "tldr": [
          "Most UK businesses pay £500 to £3,000 a month for SEO. Whito's study of 45 published prices found a median of £799 a month.",
          "Small local firms start at £300 to £1,200, growing SMEs pay £1,500 to £3,000 and enterprise campaigns run from £10,000.",
          "Hourly rates run from £30 to £250 depending on experience, and one-off projects from £250 for local set-up to £10,000 for penalty recovery.",
          "Competition, site size, locations, content volume, links and who does the work decide the price.",
          "Avoid ranking guarantees, vague packages and long lock-ins, and get deliverables and reporting in writing."
      ],
      "body": [
          {
              "type": "h2",
              "text": "How much does SEO cost in the UK?"
          },
          {
              "type": "p",
              "text": "Most UK businesses pay between £500 and £3,000 a month for SEO, with the middle of the market sitting around £800 to £1,500. Small local firms can start at £300 to £800, growing businesses usually pay £1,500 to £3,000, and national or enterprise campaigns run from £5,000 to £10,000 or more. That is the short answer to SEO pricing in the UK. The right figure for you depends on how competitive your market is and how much work your site needs."
          },
          {
              "type": "callout",
              "variant": "takeaway",
              "title": "The quick answer",
              "text": "UK SEO pricing in 2026 runs from about £300 to £5,000 a month for most businesses. Whito's study of 45 published UK prices found a median of £799 a month. Limelight Digital reports that most businesses pay £1,000 to £3,000 a month."
          },
          {
              "type": "image",
              "src": "/insights/seo-cost-uk-google-ai-overview.jpg",
              "alt": "Google UK AI Overview for the search how much does seo cost uk, saying SEO in the UK typically costs between £500 and £5,000 plus per month for standard monthly retainers, with a breakdown by type",
              "caption": "Google UK AI Overview for \"how much does seo cost uk\", 18 November 2026."
          },
          {
              "type": "stats",
              "title": "What UK SEO providers publish",
              "items": [
                  {
                      "value": "£799",
                      "label": "median published monthly SEO price across 45 UK providers, June 2026 (Whito UK Marketing Prices Study)"
                  },
                  {
                      "value": "£447",
                      "label": "median price of the entry tier on those same pricing pages"
                  },
                  {
                      "value": "£99 to £5,000+",
                      "label": "full range of published monthly prices in the study"
                  }
              ]
          },
          {
              "type": "p",
              "text": "The [Whito UK Marketing Prices Study](https://whito.co.uk/research/uk-seo-pricing-study-our-approach/) recorded the monthly prices UK providers publish on their own sites. Half of the prices sat between roughly £410 and £1,500 a month. A published price is not a quote, and providers that hide their prices are not in the sample, so treat the median as a guide rather than a promise."
          },
          {
              "type": "h2",
              "text": "What is a typical SEO price in the UK by business size?"
          },
          {
              "type": "p",
              "text": "A typical UK SEO price rises with the size of the business and the number of searches it needs to win. A single-location service firm needs far less work than an online shop with thousands of products, so the monthly fee follows the scope. The table below combines the budget ranges published by Limelight Digital (April 2026) and the planning ranges in the Whito study."
          },
          {
              "type": "table",
              "head": [
                  "Business type",
                  "Typical monthly SEO budget",
                  "What the work usually focuses on"
              ],
              "rows": [
                  [
                      "Small or local business",
                      "£300 to £1,200",
                      "Google Business Profile, local pages, reviews, on-page basics"
                  ],
                  [
                      "Growing SME",
                      "£1,500 to £3,000",
                      "Regional visibility, content, link building"
                  ],
                  [
                      "Mid-market or multi-location",
                      "£3,000 to £8,000",
                      "Technical SEO, digital PR, several service areas"
                  ],
                  [
                      "Ecommerce",
                      "£2,000 to £8,000",
                      "Category and product pages, site speed, large-scale content"
                  ],
                  [
                      "Enterprise or national brand",
                      "£10,000 or more",
                      "Multi-site and international SEO, large content and PR programmes"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "These are planning ranges, not prices from a single source. Limelight Digital gives the small, SME, mid-market and enterprise bands, and Whito's planning anchors add ecommerce at £2,000 to £8,000. Use them to sense-check a quote, not to set your budget."
          },
          {
              "type": "h2",
              "text": "What do monthly retainers, hourly rates and one-off projects cost?"
          },
          {
              "type": "p",
              "text": "There are three ways to pay for SEO in the UK: a monthly retainer, an hourly rate, or a one-off project. Retainers are the most common because SEO is ongoing work. Hourly rates suit advice and fixes. Projects suit audits, migrations and clean-ups."
          },
          {
              "type": "h3",
              "text": "How much is a monthly SEO retainer in the UK?"
          },
          {
              "type": "p",
              "text": "A monthly SEO retainer in the UK usually costs £500 to £3,000, with a published median of £799 in the Whito study. Whito groups published prices into three bands: budget at £99 to £300, mainstream at £350 to £1,000, and established agencies at £1,500 to £5,000 or more. A retainer buys an agreed amount of work every month, so ask what that amount is in hours or deliverables."
          },
          {
              "type": "image",
              "src": "/insights/seo-cost-uk-people-also-ask.jpg",
              "alt": "Google UK People Also Ask box for the search how much does seo cost uk, with questions including is paying for SEO worth it and how much should I expect to pay for SEO",
              "caption": "People Also Ask for \"how much does seo cost uk\", 18 November 2026."
          },
          {
              "type": "h3",
              "text": "How much do SEO freelancers and consultants charge per hour?"
          },
          {
              "type": "p",
              "text": "UK SEO hourly rates run from about £30 to £60 for a junior freelancer, £60 to £150 for an experienced freelancer and £100 to £250 for a strategy consultant, based on the planning anchors in the Whito study. Limelight Digital puts agency consultants at £100 to £250 an hour and senior London specialists at up to £400. Hourly work is good value for a one-off question and poor value for ongoing growth, because the meter keeps running."
          },
          {
              "type": "h3",
              "text": "How much does a one-off SEO project cost in the UK?"
          },
          {
              "type": "p",
              "text": "One-off SEO projects in the UK range from a few hundred pounds for a local set-up to several thousand for a migration or recovery job. The Whito planning anchors give the figures below."
          },
          {
              "type": "table",
              "head": [
                  "One-off SEO project",
                  "Typical UK price"
              ],
              "rows": [
                  [
                      "Local SEO set-up",
                      "£250 to £800"
                  ],
                  [
                      "Keyword research",
                      "£300 to £1,500"
                  ],
                  [
                      "SEO audit",
                      "£500 to £3,000"
                  ],
                  [
                      "Content strategy",
                      "£1,000 to £3,000"
                  ],
                  [
                      "Website migration",
                      "£1,000 to £5,000"
                  ],
                  [
                      "Penalty recovery",
                      "£2,000 to £10,000"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "A project is the right choice when you have a defined problem, such as a site move. If the goal is more enquiries over the next year, a retainer or in-house hire is the better fit."
          },
          {
              "type": "h2",
              "text": "What decides SEO pricing in the UK?"
          },
          {
              "type": "p",
              "text": "SEO pricing in the UK is decided by the amount of work needed to beat the pages already ranking for your searches. Six factors move the price most."
          },
          {
              "type": "list",
              "items": [
                  "**Competition.** A search where the top results come from large brands with years of links needs more content and more digital PR than a quiet local search.",
                  "**Site size and condition.** A site with technical faults, thin pages or a messy structure needs fixing before growth work starts, and that adds cost at the start.",
                  "**Locations and services.** Every extra town, service or product line needs its own pages and its own reviews and links.",
                  "**Content volume.** Ten well-researched articles a month cost more than two, and quality writing from specialists costs more than generic copy.",
                  "**Links and digital PR.** Earning mentions on trusted sites takes outreach time, and it is often the biggest difference between a £500 and a £3,000 package.",
                  "**Who does the work.** A freelancer, a small agency and a large agency price their hours differently, and agencies bring a team of specialists."
              ]
          },
          {
              "type": "p",
              "text": "In our experience, competition and content volume explain most of the gap between two quotes for the same business. If one quote is far lower than the others, check which of these six it has left out."
          },
          {
              "type": "h2",
              "text": "What is included in a monthly SEO price?"
          },
          {
              "type": "p",
              "text": "A monthly SEO price should cover technical fixes, on-page work, content, links or digital PR, and reporting, in proportions that match your goal. Lower tiers lean on set-up and basic on-page work. Higher tiers add regular content, outreach and strategy time with a senior person."
          },
          {
              "type": "compare",
              "title": "What a quote should spell out",
              "columns": [
                  {
                      "title": "A clear SEO quote",
                      "tone": "good",
                      "items": [
                          "Names the deliverables each month, such as pages written, links earned and fixes made",
                          "States the hours or the team time behind the fee",
                          "Lists the keywords and pages the work targets",
                          "Includes a monthly report with rankings, traffic and enquiries",
                          "Shows the contract length and how to leave"
                      ]
                  },
                  {
                      "title": "A vague SEO quote",
                      "tone": "bad",
                      "items": [
                          "Promises a ranking position or a result by a date",
                          "Says \"SEO package\" without listing what is in it",
                          "Hides the reporting or sends only a rankings screenshot",
                          "Locks you in for 12 months with no exit",
                          "Cannot name who will do the work"
                      ]
                  }
              ]
          },
          {
              "type": "image",
              "src": "/insights/seo-cost-uk-chatgpt-answer.jpg",
              "alt": "ChatGPT answer to the prompt how much does SEO cost for a small business in the UK, showing a pricing table from £200 to £5,000 plus per month",
              "caption": "A ChatGPT answer to \"How much does SEO cost for a small business in the UK?\", 18 November 2026."
          },
          {
              "type": "p",
              "text": "AI assistants give similar ranges to the published studies, which is a useful check. The prices they quote come from the same agency pages, so they confirm the market range but cannot tell you what you will get for your money. Ask each provider for that detail in writing."
          },
          {
              "type": "h2",
              "text": "Does AEO and GEO work cost extra on top of SEO pricing?"
          },
          {
              "type": "p",
              "text": "AEO and GEO work does not need a separate budget for most businesses, because it builds on the same pages, content and links as SEO. Answer engine optimisation (AEO) and generative engine optimisation (GEO) aim to get your pages quoted in Google AI Overviews, ChatGPT and other AI answers. The extra effort is mostly in how pages are written and in earning mentions on other sites, which sit inside a normal content and digital PR scope. Our guide to [AEO vs SEO](/insights/aeo-vs-seo) shows how one page serves both, and the [answer engine optimisation pillar](/insights/answer-engine-optimisation) covers the wider picture."
          },
          {
              "type": "p",
              "text": "If a provider quotes a large extra fee for AEO, ask what exactly it adds. Tracking AI visits and testing prompts monthly takes a few hours, and you can set it up for free with the steps in our guide to [tracking AI traffic in GA4 and Search Console](/insights/track-ai-traffic)."
          },
          {
              "type": "h2",
              "text": "What should you avoid when paying for SEO in the UK?"
          },
          {
              "type": "p",
              "text": "Avoid any SEO provider that guarantees rankings, hides its reporting or asks for a long lock-in before showing results. Google's own guidance warns that no one can guarantee a first-page ranking. The cheapest packages are also the most likely to rely on bulk links and generic content, which can do harm."
          },
          {
              "type": "callout",
              "variant": "warning",
              "title": "Red flags to check before you sign",
              "text": "A guaranteed ranking, a price far below every other quote, no named person doing the work, no monthly report, a contract longer than 12 months with no exit, and links bought in bulk. Any one of these deserves a direct question."
          },
          {
              "type": "p",
              "text": "Before you sign, ask each provider the questions in our guide to [choosing an SEO company](/insights/how-to-find-a-good-seo-company). It covers references, reporting and contracts in detail. For the reporting side, our [SEO report template](/insights/seo-report-template) shows what a good monthly report includes, so you know what to expect for your fee."
          },
          {
              "type": "h2",
              "text": "Is SEO worth the price?"
          },
          {
              "type": "p",
              "text": "SEO is worth the price when the extra enquiries it brings are worth more than the monthly fee, and it usually takes several months to show. It builds slowly, so judge it on enquiries and revenue, not on a ranking screenshot. Interest in the topic is rising too: on Google Trends, UK searches for \"seo cost\" have climbed sharply since late 2025, which suggests more owners are comparing prices before they buy."
          },
          {
              "type": "image",
              "src": "/insights/seo-cost-uk-google-trends.jpg",
              "alt": "Google Trends chart of UK search interest over five years for seo cost and seo pricing, with both rising sharply from late 2025",
              "caption": "Google Trends interest over time for \"seo cost\" and \"seo pricing\" in the UK, past five years, 18 November 2026."
          },
          {
              "type": "p",
              "text": "To work out your own break-even, take the average value of a customer, the share of enquiries you close, and the monthly fee. If one extra customer a month covers the fee, the maths works. Our guide on [whether SEO can generate leads](/insights/can-seo-generate-leads) shows how to measure that, and our [B2B SEO strategy](/insights/seo-for-b2b-companies) guide covers longer buying journeys."
          },
          {
              "type": "h2",
              "text": "How do you set an SEO budget?"
          },
          {
              "type": "p",
              "text": "Set an SEO budget by starting from the value of a customer, not from what competitors spend. Three checks keep the number realistic."
          },
          {
              "type": "checklist",
              "title": "Set your SEO budget in three steps",
              "items": [
                  "**Work out what a customer is worth.** Use average order value or lifetime value, then decide how many extra customers a month would make SEO pay for itself.",
                  "**Match the budget to your market.** A local firm can start at £500 to £800 a month. A competitive national search needs £3,000 or more to compete.",
                  "**Agree what the money buys.** Get the monthly deliverables, the reporting and the contract terms in writing before you start."
              ]
          }
      ],
      "faq": [
          {
              "q": "How much does SEO cost per month in the UK?",
              "a": "Most UK businesses pay £500 to £3,000 a month. Small local firms can start at £300 to £800, growing SMEs pay £1,500 to £3,000, and national campaigns run to £5,000 or more. Whito's study of 45 published UK prices found a median of £799 a month."
          },
          {
              "q": "How much does SEO cost for a small business in the UK?",
              "a": "A small or local UK business typically pays £300 to £1,200 a month, according to Limelight Digital. Many local firms start at £500 to £800 a month, which covers local pages, reviews and on-page basics."
          },
          {
              "q": "Is £500 a month enough for SEO?",
              "a": "£500 a month can work for a local business in a quiet market with a clear scope, such as Google Business Profile and local pages. It rarely covers content and links for a competitive search, so check what the fee includes."
          },
          {
              "q": "How much does an SEO audit cost in the UK?",
              "a": "An SEO audit in the UK usually costs £500 to £3,000, according to the planning ranges in the Whito study. Large or complex sites sit at the top of the range."
          },
          {
              "q": "How much do SEO freelancers charge per hour in the UK?",
              "a": "UK freelancers charge about £30 to £60 an hour at junior level and £60 to £150 an hour when experienced. Strategy consultants charge £100 to £250 an hour, based on the Whito planning anchors."
          },
          {
              "q": "Is paying for SEO worth it?",
              "a": "It is worth it when the extra enquiries are worth more than the fee. SEO builds over months, so judge it on enquiries and revenue and agree a monthly report before you start."
          },
          {
              "q": "Can I do SEO on my own?",
              "a": "Yes, for the basics. A small business can set up Google Business Profile, fix titles and write helpful pages with free tools. Paid help pays off when competition is high or you lack the time."
          },
          {
              "q": "Why do SEO prices vary so much?",
              "a": "Prices follow the amount of work needed: competition, site size, number of locations, content volume, links and who does the work. A quote far below the rest has usually left one of these out."
          },
          {
              "q": "Does SEO pricing include AEO and GEO?",
              "a": "For most businesses, yes. AEO and GEO build on the same content and links as SEO, so they sit inside a normal scope. Ask any provider quoting extra to say exactly what it adds."
          },
          {
              "q": "Are there hidden costs in UK SEO pricing?",
              "a": "Common extras are content writing, tool subscriptions, link or digital PR budgets and developer time for fixes. Ask the provider to list what is and is not included, and whether VAT is added."
          }
      ]
  },
  {
      "slug": "aeo-vs-seo",
      "seoTitle": "AEO vs SEO 2027: How They Differ and How to Do Both",
      "title": "AEO vs SEO in 2027: How Answer Engine Optimisation Differs from Traditional SEO",
      "description": "AEO vs SEO in 2027: how one page is built differently to rank and to be quoted, what stays the same, how to measure each and a 15-minute page audit.",
      "date": "2026-11-18",
      "author": "team",
      "topics": [
          "AEO/GEO"
      ],
      "industries": [],
      "image": "/insights/aeo-vs-seo-banner.jpg",
      "intro": "Search a question today and two things can happen. Google shows a list of pages ranked in order, and an AI answer above them quotes a few of those pages. AEO vs SEO is the question of how to win in both. SEO builds a page to rank and earn the click. AEO (answer engine optimisation) builds the same page so an answer engine can lift a clear answer from it and name you as the source. This guide shows how one page is built differently for each, what stays the same, how to measure both and how to check a page in 15 minutes.",
      "tldr": [
          "SEO builds a page to rank and earn a click. AEO builds the same page so an AI answer can quote it and name you.",
          "AEO sits on top of SEO. Ahrefs found 76% of AI Overview citations came from pages already in Google's top 10.",
          "The format changes: answer-first paragraphs, question headings, tables and FAQs make a page easy to quote.",
          "Crawling, quality, trust and links stay the same, so you do not need two separate content programmes.",
          "Measure rankings and conversions for SEO, and prompt tests, citations and AI referral visits for AEO."
      ],
      "body": [
          {
              "type": "h2",
              "text": "What is the difference between AEO and SEO?"
          },
          {
              "type": "callout",
              "variant": "definition",
              "title": "Definition",
              "text": "SEO (search engine optimisation) is the work of making a page rank high in search results so people click through to it. AEO (answer engine optimisation) is the work of making a page easy for Google AI Overviews, ChatGPT and other answer engines to extract, quote and credit as the source of an answer."
          },
          {
              "type": "p",
              "text": "The difference is what the page is built to produce. SEO produces a ranking position and a visit. AEO produces a quoted answer, with or without a visit. Google's own AI Overview for \"aeo vs seo\" describes them as complementary strategies that target different goals, formats and platforms."
          },
          {
              "type": "image",
              "src": "/insights/aeo-vs-seo-google-ai-overview.jpg",
              "alt": "Google UK AI Overview for the search aeo vs seo with a Core Differences at a Glance table comparing platforms, main goal, core tactics and content format",
              "caption": "The Google UK AI Overview for \"aeo vs seo\", 18 November 2026."
          },
          {
              "type": "table",
              "head": [
                  "",
                  "SEO",
                  "AEO"
              ],
              "rows": [
                  [
                      "Goal",
                      "Rank high and earn the click",
                      "Be quoted and named as the source of the answer"
                  ],
                  [
                      "Where it happens",
                      "Google and Bing results pages",
                      "Google AI Overviews and AI Mode, ChatGPT, Gemini, Claude, Perplexity"
                  ],
                  [
                      "What you build",
                      "A page that satisfies the search and the searcher",
                      "The same page, with sections that stand alone as answers"
                  ],
                  [
                      "Typical query",
                      "Short keyword phrases",
                      "Full questions and follow-up questions"
                  ],
                  [
                      "Main metrics",
                      "Rankings, clicks, conversions",
                      "Mentions, citations, AI referral visits"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "The People Also Ask box on the same search shows what readers want settled: whether AEO will replace SEO, which is better, and whether AEO is simply part of SEO. We answer each of these below."
          },
          {
              "type": "image",
              "src": "/insights/aeo-vs-seo-people-also-ask.jpg",
              "alt": "Google UK People Also Ask box for aeo vs seo with questions including will AEO replace SEO and is AEO better than SEO",
              "caption": "The People Also Ask box for \"aeo vs seo\", 18 November 2026."
          },
          {
              "type": "h2",
              "text": "Is AEO better than SEO, or part of it?"
          },
          {
              "type": "p",
              "text": "AEO is not better than SEO, and it does not replace it. It sits on top of SEO and relies on it. Ahrefs studied 1.9 million citations in Google AI Overviews and found that 76% came from pages already ranking in Google's top 10, with the median position of the most-cited pages at 2. If a page does not rank, it is far less likely to be quoted."
          },
          {
              "type": "stats",
              "title": "Key figure",
              "items": [
                  {
                      "value": "76%",
                      "label": "of Google AI Overview citations came from pages ranking in the top 10 (Ahrefs, 1.9 million citations)"
                  }
              ]
          },
          {
              "type": "p",
              "text": "Google's guidance on its AI features says the same thing in plain terms: the SEO basics that help a page rank are what make it eligible to appear in AI features, and no special markup or AI-only file is needed. We asked ChatGPT the question a small business owner would ask, with web search on, and it drew the same line."
          },
          {
              "type": "image",
              "src": "/insights/aeo-vs-seo-chatgpt-answer.jpg",
              "alt": "ChatGPT answer to what is the difference between AEO and SEO for a small business, saying SEO helps you get found on Google and AEO helps you become the answer",
              "caption": "ChatGPT's answer to \"What is the difference between AEO and SEO for a small business?\", with web search on, 18 November 2026."
          },
          {
              "type": "p",
              "text": "AI answers can contain mistakes, so treat that as a second opinion. The evidence is the Ahrefs data. For the wider question of whether AI will take work away from SEO, read our guide on [whether AI will replace SEO](/insights/will-ai-replace-seo)."
          },
          {
              "type": "h2",
              "text": "How do you build one page for SEO and for AEO?"
          },
          {
              "type": "p",
              "text": "Start with one query and build the page twice in your head: once to rank, once to be quoted. The research topic and the facts are the same. What changes is how each section opens and how easy it is to lift out on its own."
          },
          {
              "type": "p",
              "text": "Here is an illustrative example for a plumber's page targeting the query \"how much does a boiler service cost\"."
          },
          {
              "type": "compare",
              "title": "One query, two builds (illustrative example)",
              "columns": [
                  {
                      "title": "Built for ranking only",
                      "tone": "bad",
                      "items": [
                          "Heading: Boiler Servicing Services in Leeds",
                          "Opens with a company history and a paragraph about trust and experience",
                          "Price appears halfway down in a paragraph of mixed advice",
                          "One long page with no separate answers to follow-up questions"
                      ]
                  },
                  {
                      "title": "Built for ranking and for being quoted",
                      "tone": "good",
                      "items": [
                          "Heading: How much does a boiler service cost?",
                          "First sentence gives the answer: a typical gas boiler service costs between two figures, and what the price depends on",
                          "A short table of prices by boiler type, with the date checked",
                          "Follow-up questions as headings, each answered in two or three sentences"
                      ]
                  }
              ]
          },
          {
              "type": "p",
              "text": "The second version still ranks. It also gives an answer engine a self-contained passage it can quote without losing the meaning. That is the whole idea: the same page, rebuilt so each section answers one question."
          },
          {
              "type": "h2",
              "text": "How does AEO formatting differ from SEO formatting?"
          },
          {
              "type": "p",
              "text": "AEO formatting puts the answer first and makes each section stand alone. SEO formatting has always rewarded clear structure, but AEO leans harder on a few habits because an answer engine picks passages, not whole pages."
          },
          {
              "type": "list",
              "items": [
                  "**Answer-first paragraphs.** Ahrefs found that 44.2% of ChatGPT citations came from the first 30% of a page, so put the direct answer at the top of each section and the page.",
                  "**Question headings.** Ahrefs reported pages with question-style headings were cited about 18% of the time against 8.9% without them.",
                  "**Definitive wording.** Cited text used definitive phrasing 36.2% of the time against 20.2% for text that was not cited. Say \"A boiler service costs\", not \"It could depend\".",
                  "**Named things.** Use the brand, product, place and standard by name every time, so a quoted passage keeps its meaning without the rest of the page.",
                  "**Tables and short lists.** These suit comparisons and steps, and they are easy for both a snippet and an AI answer to lift."
              ]
          },
          {
              "type": "stats",
              "title": "Why format matters",
              "items": [
                  {
                      "value": "44.2%",
                      "label": "of ChatGPT citations came from the first 30% of a page (Ahrefs)"
                  },
                  {
                      "value": "18% vs 8.9%",
                      "label": "citation rate for pages with question headings versus without (Ahrefs)"
                  }
              ]
          },
          {
              "type": "h3",
              "text": "Do snippets and People Also Ask differ from AI citations?"
          },
          {
              "type": "p",
              "text": "Yes, in where they appear and how they credit you. A featured snippet or People Also Ask answer sits inside the ordinary results and links to your page. An AI answer combines several sources, may name them in a side panel and may send no click at all. The Pew Research Center found that people clicked a link in 8% of visits when Google showed an AI summary, against 15% when it did not. Being the named source matters more when fewer people click."
          },
          {
              "type": "h3",
              "text": "Does FAQ schema help AEO?"
          },
          {
              "type": "p",
              "text": "Add it for rich results and clarity, but do not expect it to win citations on its own. Ahrefs compared 1,885 pages that added JSON-LD with about 4,000 similar pages that did not and found no meaningful citation uplift in Google AI Overviews, AI Mode or ChatGPT. Google's overview lists structured data under AEO tactics, so our view is: keep it accurate and matched to visible content, and put the effort into the writing."
          },
          {
              "type": "h2",
              "text": "What stays the same between AEO and SEO?"
          },
          {
              "type": "p",
              "text": "Most of the work stays the same. An answer engine can only quote what it can find, trust and understand, which are the jobs SEO has always done."
          },
          {
              "type": "list",
              "items": [
                  "**Crawling and indexing.** Pages must be crawlable, indexable and fast. Check that robots.txt and your CDN are not blocking search crawlers such as Googlebot, Bingbot and OAI-SearchBot.",
                  "**Helpful, original content.** Real data, first-hand experience and a clear point of view beat generic copy for rankings and for citations.",
                  "**Trust.** A named author, a real date, honest scope and sourced claims help in both.",
                  "**Links and mentions.** Links help you rank, and brand mentions on trusted sites help you appear in AI answers. Digital PR does both jobs.",
                  "**Search intent.** Match what the searcher wants, then add what the top results miss."
              ]
          },
          {
              "type": "p",
              "text": "Where the two diverge most is off your site, which we cover in our comparison of [GEO vs SEO](/insights/geo-vs-seo). This guide stays on the page itself."
          },
          {
              "type": "h2",
              "text": "How do you measure AEO vs SEO?"
          },
          {
              "type": "p",
              "text": "Measure SEO by rankings, clicks and conversions, and measure AEO by whether your pages are quoted and whether those answers send visits. Use both sets, because a page can rank well and still never be quoted."
          },
          {
              "type": "table",
              "head": [
                  "Question",
                  "SEO measure",
                  "AEO measure"
              ],
              "rows": [
                  [
                      "Are we visible?",
                      "Impressions and average position in Search Console",
                      "Share of test questions where your page or brand is cited"
                  ],
                  [
                      "Are we chosen?",
                      "Click-through rate on target queries",
                      "Which sections of your page are quoted and how"
                  ],
                  [
                      "Does it bring visitors?",
                      "Organic sessions in GA4",
                      "Sessions from AI sources in GA4"
                  ],
                  [
                      "Does it bring revenue?",
                      "Conversions from organic landing pages",
                      "Conversions from AI referrals and branded searches"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "To set up the AI side, follow our step-by-step guide to [tracking AI traffic for free](/insights/track-ai-traffic). For the full method, see our [answer engine optimisation guide](/insights/answer-engine-optimisation)."
          },
          {
              "type": "h2",
              "text": "Are people searching for AEO or SEO?"
          },
          {
              "type": "p",
              "text": "People search for SEO far more than for AEO, and interest in AEO terms is uneven. In Google Trends for the UK over the past 12 months, the US spelling \"answer engine optimization\" shows the highest interest of the three terms we compared, with sharp spikes rather than a steady line. \"Answer engine optimisation\" and the comparison phrase \"aeo vs seo\" register at much lower levels."
          },
          {
              "type": "image",
              "src": "/insights/aeo-vs-seo-google-trends.jpg",
              "alt": "Google Trends chart for the UK over 12 months comparing answer engine optimisation, answer engine optimization and aeo vs seo, with the US spelling highest and spiky",
              "caption": "Google Trends, UK, past 12 months, 18 November 2026: relative interest in three AEO-related searches."
          },
          {
              "type": "p",
              "text": "For your own pages, that means writing for both spellings and for the plain questions buyers ask, such as \"how does answer engine optimisation work\", rather than leaning on the acronym alone."
          },
          {
              "type": "h2",
              "text": "How do you audit a page for AEO and SEO in 15 minutes?"
          },
          {
              "type": "p",
              "text": "Pick one page that already ranks on page one and check it against this list. Fix what fails, then check it again in a month."
          },
          {
              "type": "checklist",
              "title": "15-minute AEO and SEO page audit",
              "items": [
                  "**Does the page rank?** Check Search Console for the target query. If it sits outside the top 10, fix the SEO basics first.",
                  "**Does the first paragraph answer the main question?** A reader and an AI tool should find the answer in the first two or three sentences.",
                  "**Do the H2s read as real questions?** Match them to People Also Ask and your own customer questions.",
                  "**Does each section make sense on its own?** Replace \"it\" and \"this\" with the subject's name.",
                  "**Is there one table or short list that compares or lists the key facts?** Add one where the topic needs it.",
                  "**Is every figure sourced and dated?** Remove anything you cannot back up.",
                  "**Is there a short FAQ with the questions people ask next?** Keep each answer to two or three sentences.",
                  "**Can crawlers reach it?** Check indexing in Search Console and that robots.txt does not block search crawlers."
              ]
          },
          {
              "type": "h2",
              "text": "AEO vs SEO: which should you do first?"
          },
          {
              "type": "p",
              "text": "Do SEO first on any page that does not rank yet, and apply AEO formatting as you write it. Doing both together costs little extra, because the answer-first structure also improves the page for readers."
          },
          {
              "type": "list",
              "items": [
                  "**New pages:** write them answer-first from the start, with question headings and a short FAQ.",
                  "**Pages already on page one:** rework the openings and headings first. This is the quickest AEO win.",
                  "**Pages that do not rank:** fix intent, content depth, links and technical issues before you change the format.",
                  "**B2B companies with long sales cycles:** buyers use AI tools early, so do both from the start. Our [B2B SEO strategy guide](/insights/seo-for-b2b-companies) covers the full buying journey."
              ]
          },
          {
              "type": "p",
              "text": "If you want the pages that already rank to start being quoted in AI answers too, we can help you plan it."
          }
      ],
      "faq": [
          {
              "q": "What is the difference between AEO and SEO?",
              "a": "SEO makes a page rank in search results so people click through. AEO makes the same page easy for answer engines such as Google AI Overviews and ChatGPT to quote and credit. Both start with a page that is useful and easy to find."
          },
          {
              "q": "Will AEO replace SEO?",
              "a": "No. AEO relies on SEO. Ahrefs found that 76% of Google AI Overview citations came from pages already in the top 10 for the search, so a page that does not rank is less likely to be quoted."
          },
          {
              "q": "Is AEO better than SEO?",
              "a": "Neither is better. They answer different questions: SEO gets the page found and clicked, and AEO gets its answer quoted. Most businesses need the page to rank first, then to be written so it can be quoted."
          },
          {
              "q": "Is AEO a part of SEO?",
              "a": "In practice, yes. It uses the same foundations of crawling, quality, trust and links, and adds a focus on answer-first writing and being cited in AI answers. Many teams treat it as an extension of SEO."
          },
          {
              "q": "Do I need different content for AEO and SEO?",
              "a": "Usually not. You need the same page written so that each section opens with the answer and stands alone. That serves readers, search results and AI answers together."
          },
          {
              "q": "Does schema markup help AEO?",
              "a": "It helps with rich results and clarity, but Ahrefs found no meaningful citation uplift from adding JSON-LD in Google AI Overviews, AI Mode or ChatGPT. Use accurate markup that matches the visible page and focus on the writing."
          },
          {
              "q": "How do I know if my page is being quoted by AI?",
              "a": "Write a list of questions your buyers ask, run them in Google AI Mode, ChatGPT and Gemini, and note which sources are cited. Repeat monthly and track AI referral visits in GA4."
          }
      ]
  },
  {
      "slug": "geo-vs-seo",
      "seoTitle": "GEO vs SEO 2027: Differences and Which You Need",
      "title": "GEO vs SEO in 2027: What Is the Difference and Which Do You Need?",
      "description": "GEO vs SEO in 2027: how they differ in goals, tactics and measurement, where the work overlaps, and which one your business should prioritise first.",
      "date": "2026-11-17",
      "author": "team",
      "topics": [
          "AEO/GEO"
      ],
      "industries": [],
      "image": "/insights/geo-vs-seo-banner.jpg",
      "intro": "Every few months a new acronym arrives and someone asks if the old one is finished. GEO vs SEO is the latest version. SEO earns rankings and clicks in search results, and GEO earns a place inside AI answers from tools such as ChatGPT and Google AI Overviews. This guide explains where the two differ, where they overlap, how to measure each and which one your business needs first.",
      "tldr": [
          "SEO earns rankings and clicks. GEO earns mentions, citations and recommendations inside AI answers.",
          "GEO does not replace SEO. Ahrefs found 76% of AI Overview citations came from pages already in Google's top 10.",
          "The work diverges off your site: citations, digital PR, reviews and brand mentions matter more for GEO.",
          "Measure both: rankings and conversions for SEO, prompt tests, citations and AI referral visits for GEO.",
          "Most businesses should start with SEO, then add GEO once their pages rank and their brand is discussed elsewhere."
      ],
      "body": [
          {
              "type": "h2",
              "text": "What is the difference between GEO and SEO?"
          },
          {
              "type": "callout",
              "variant": "definition",
              "title": "Definition",
              "text": "SEO (search engine optimisation) is the work of earning rankings and clicks in search results such as Google and Bing. GEO (generative engine optimisation) is the work of getting your brand mentioned, cited and recommended inside AI-generated answers from tools such as ChatGPT, Gemini, Claude and Google AI Overviews."
          },
          {
              "type": "p",
              "text": "The core difference is the outcome you are chasing. SEO aims for a ranking position and a click to your website. GEO aims for a place inside the answer itself, as a named source or a recommended business, whether or not anyone clicks. Google's own AI Overview for \"geo vs seo\" puts it the same way: both share the goal of making your brand visible online, but they target different systems, outputs and user behaviours."
          },
          {
              "type": "image",
              "src": "/insights/gvs-1-ai-overview.jpg",
              "alt": "Google UK AI Overview for the search geo vs seo, with a comparison table of SEO and GEO covering primary target, search output and query format",
              "caption": "The Google UK AI Overview for \"geo vs seo\", 17 November 2026."
          },
          {
              "type": "p",
              "text": "Here is the comparison in one table. Use it as a quick reference, then read on for where the work really diverges."
          },
          {
              "type": "table",
              "head": [
                  "",
                  "SEO",
                  "GEO"
              ],
              "rows": [
                  [
                      "Goal",
                      "Rank high and earn clicks",
                      "Be named, cited or recommended in an AI answer"
                  ],
                  [
                      "What you optimise",
                      "Pages, keywords, links and technical health",
                      "Pages, plus your brand's presence and reputation across the web"
                  ],
                  [
                      "Where it happens",
                      "Google and Bing results pages",
                      "ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews and AI Mode"
                  ],
                  [
                      "Typical query",
                      "Short keyword phrases",
                      "Longer, conversational questions and follow-ups"
                  ],
                  [
                      "Main metrics",
                      "Rankings, impressions, clicks, conversions",
                      "Brand mentions, citations, share of recommendations, AI referral visits"
                  ],
                  [
                      "Time to see results",
                      "Usually three to six months for new pages",
                      "Varies by platform; mentions can follow once your pages rank and your brand is discussed elsewhere"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "The People Also Ask box for the same search shows what readers want settled: whether GEO replaces SEO, how the two differ and whether AI SEO is just another name for GEO. We answer each of these below."
          },
          {
              "type": "image",
              "src": "/insights/gvs-2-people-also-ask.jpg",
              "alt": "Google UK People Also Ask box for geo vs seo with four questions including is GEO replacing SEO",
              "caption": "The People Also Ask box for \"geo vs seo\", 17 November 2026."
          },
          {
              "type": "h2",
              "text": "Does GEO replace SEO?"
          },
          {
              "type": "p",
              "text": "No. GEO sits on top of SEO and relies on it. Ahrefs studied 1.9 million citations in Google AI Overviews and found that 76% came from pages already ranking in Google's top 10. If your pages do not rank, they are far less likely to be quoted."
          },
          {
              "type": "image",
              "src": "/insights/gvs-5-ai-overview-citations-top-10.jpg",
              "alt": "Pie chart showing 76% of Google AI Overview citations come from pages ranking in the top 10 and 24% from outside it, source Ahrefs",
              "caption": "Most pages cited in AI Overviews already rank in the top 10. Source: Ahrefs."
          },
          {
              "type": "p",
              "text": "Google's guidance on AI features makes the same point: the SEO foundations that help a page rank are the ones that make it eligible to appear in AI features, and no special markup or AI-only file is required. We asked ChatGPT the question a small business owner would ask, and its answer agreed."
          },
          {
              "type": "image",
              "src": "/insights/gvs-3-chatgpt-answer.jpg",
              "alt": "ChatGPT answer to what is the difference between GEO and SEO for a small business, recommending SEO first while building GEO in from day one",
              "caption": "ChatGPT's answer to \"What is the difference between GEO and SEO for a small business? Which should I focus on first?\", with web search on, 17 November 2026."
          },
          {
              "type": "p",
              "text": "AI answers can make mistakes, so treat that as a second opinion rather than evidence. The evidence is the Ahrefs study. For the wider question of whether AI will take over search work, see our guide on [whether AI will replace SEO](/insights/will-ai-replace-seo)."
          },
          {
              "type": "p",
              "text": "One reason GEO matters even so is behaviour. The Pew Research Center found that people clicked a link in 8% of visits when Google showed an AI summary, against 15% when it did not. Fewer clicks per search means being named in the answer is worth more than it used to be."
          },
          {
              "type": "stats",
              "title": "Key figure",
              "items": [
                  {
                      "value": "8% vs 15%",
                      "label": "of Google visits included a click on a result when an AI summary appeared versus when it did not (Pew Research Center, 2025)"
                  }
              ]
          },
          {
              "type": "h2",
              "text": "Where does GEO work differ from SEO?"
          },
          {
              "type": "p",
              "text": "The page-level work is similar. The difference is everything that happens off your site. AI tools build an answer from many sources and favour brands that are mentioned consistently in many places. Ahrefs found that branded web mentions correlated with brand appearances in AI Overviews at 0.664, stronger than backlinks did. That is a correlation, not proof of cause, but it explains why GEO leans on reputation."
          },
          {
              "type": "h3",
              "text": "How do citations differ from backlinks?"
          },
          {
              "type": "p",
              "text": "A backlink is a link to your page that passes authority. A citation is a source an AI answer shows or names. A page can be cited with no link to it from anywhere, and a page with many links may never be cited. Plan for both: links help you rank, and clear, quotable pages help you get cited."
          },
          {
              "type": "h3",
              "text": "What does digital PR do for GEO?"
          },
          {
              "type": "p",
              "text": "Digital PR places your brand and your data on sites that AI tools already trust: trade press, industry bodies, review sites and comparison pages. For SEO, the prize is the link. For GEO, the prize is the mention next to your category, for example \"best accountancy software for freelancers\". Publish original numbers other writers want to quote, and pitch them to the publications your buyers read."
          },
          {
              "type": "h3",
              "text": "Why do reviews and brand mentions matter more in GEO?"
          },
          {
              "type": "p",
              "text": "AI answers recommend businesses, and they judge a business by what others say about it. Reviews on Google and trusted industry sites, consistent business details and named mentions in articles all feed that picture. For a local business such as a plumber or a dental practice, review volume and recent reviews often decide who is recommended."
          },
          {
              "type": "h3",
              "text": "Do all AI platforms cite the same sources?"
          },
          {
              "type": "p",
              "text": "No. Ahrefs found that only 7 of the 50 most-mentioned domains appeared across Google AI Overviews, ChatGPT and Perplexity. A result in one tool does not carry over to the others, so test the platforms your buyers actually use. Our guides cover [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) and [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) separately for this reason."
          },
          {
              "type": "h2",
              "text": "How do you measure GEO vs SEO?"
          },
          {
              "type": "p",
              "text": "Measure SEO by rankings, clicks and conversions, and measure GEO by whether your brand appears in AI answers and whether those answers send visits. You need both sets, because a ranking can rise while AI answers ignore you, and the reverse."
          },
          {
              "type": "table",
              "head": [
                  "Question",
                  "SEO measure",
                  "GEO measure"
              ],
              "rows": [
                  [
                      "Are we visible?",
                      "Impressions and average position in Search Console",
                      "Share of test prompts where your brand is named"
                  ],
                  [
                      "Are we trusted?",
                      "Referring domains and branded searches",
                      "Citations of your pages and mentions on third-party sites"
                  ],
                  [
                      "Does it bring visitors?",
                      "Organic sessions in GA4",
                      "Sessions from AI sources in GA4"
                  ],
                  [
                      "Does it bring revenue?",
                      "Conversions from organic landing pages",
                      "Conversions from AI referrals and branded demand"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "A simple GEO check takes an hour a month. Write 20 questions your buyers ask, run them in ChatGPT, Gemini and Google AI Mode, and note whether you are named, which sources are cited and which competitors appear. Answers vary between runs, so repeat each prompt and look at the pattern, not one result. Our guide on [tracking AI traffic for free](/insights/track-ai-traffic) shows the GA4 and Search Console setup, and our [SEO visibility score guide](/insights/seo-visibility-score) explains how to read visibility in Google. To see which tools can automate brand checks, read our guide to [tracking brand mentions in AI search](/insights/best-ways-to-track-brand-mentions-in-ai-search)."
          },
          {
              "type": "h2",
              "text": "Are people searching for GEO or SEO?"
          },
          {
              "type": "p",
              "text": "Interest in GEO terms is real but small compared with SEO, and it moves in waves. Google Trends for the UK over the past 12 months shows \"generative engine optimization\" with the highest interest of the three terms we compared, ahead of \"answer engine optimization\" and well ahead of the comparison phrase \"geo vs seo\". Trends shows relative interest, not search counts, so use it to see direction rather than volume."
          },
          {
              "type": "image",
              "src": "/insights/gvs-4-google-trends.jpg",
              "alt": "Google Trends chart for the UK over 12 months comparing generative engine optimization, answer engine optimization and geo vs seo, with generative engine optimization highest",
              "caption": "Google Trends, UK, past 12 months, 17 November 2026: relative interest in three GEO-related searches."
          },
          {
              "type": "p",
              "text": "For your own planning, that means most of your buyers still start with ordinary search terms. Keep your SEO targeted at what they type, and use GEO prompts to see what they ask AI tools."
          },
          {
              "type": "h2",
              "text": "GEO vs SEO: which does your business need first?"
          },
          {
              "type": "p",
              "text": "Start with SEO unless your site already ranks well. Add GEO as soon as your pages rank and your brand has some presence beyond your own site. The order depends on where you are now."
          },
          {
              "type": "list",
              "items": [
                  "**New website or little organic traffic:** put most of the effort into SEO foundations. Fix crawling and indexing, build service pages and earn your first links and reviews. This also lays the ground for GEO.",
                  "**Established site with some rankings (a SaaS company or an accountancy firm, for example):** keep SEO going and add GEO work: answer-first sections, original data, and PR on sites AI tools cite.",
                  "**Local service business (a plumber, dentist or solicitor):** keep Google Business Profile, reviews and local pages as the base, then check how AI tools describe you for \"best near me\" style questions.",
                  "**Ecommerce brand:** product and category SEO comes first. GEO adds comparison-page mentions, reviews and clear product facts that AI shopping answers can quote.",
                  "**B2B company with long sales cycles:** buyers research with AI tools before they speak to anyone, so GEO and SEO both matter early. See our [B2B SEO strategy guide](/insights/seo-for-b2b-companies) for the full journey."
              ]
          },
          {
              "type": "h2",
              "text": "How do you run GEO and SEO together?"
          },
          {
              "type": "p",
              "text": "Treat them as one programme with two scorecards. Most tasks serve both, and a short plan keeps the work focused."
          },
          {
              "type": "list",
              "items": [
                  "**Month 1, fix the foundations.** Make sure key pages are crawlable and indexed, and that AI search crawlers are not blocked by robots.txt or your CDN settings.",
                  "**Month 2, make pages quotable.** Open each section with a direct answer, use question headings, name your products and places precisely and add real data.",
                  "**Month 3, build presence.** Earn mentions and links on trusted sites, ask for reviews and keep business details consistent everywhere.",
                  "**Every month, measure both.** Check rankings and conversions in Search Console and GA4, then run your list of buyer prompts in AI tools and record the result."
              ]
          },
          {
              "type": "p",
              "text": "Our [answer engine optimisation guide](/insights/answer-engine-optimisation) goes deeper on the on-page side and how AI tools retrieve and pick sources. If you want a plan that covers search and AI answers for your business, we can help."
          }
      ],
      "faq": [
          {
              "q": "What is the difference between GEO and SEO?",
              "a": "SEO earns rankings and clicks in search results. GEO earns mentions, citations and recommendations inside AI-generated answers. Both need good pages, but GEO also depends heavily on your brand's reputation across other websites."
          },
          {
              "q": "Is GEO replacing SEO?",
              "a": "No. Ahrefs found 76% of 1.9 million AI Overview citations came from pages already in Google's top 10, so SEO is still the entry ticket. GEO builds on it."
          },
          {
              "q": "Is AI SEO called GEO?",
              "a": "People use the terms loosely. GEO usually means optimising to appear in generative AI answers, and \"AI SEO\" is a broader label for SEO work that includes AI search. Check what an agency means when it uses either term."
          },
          {
              "q": "What is the difference between GEO services and SEO services?",
              "a": "SEO services focus on rankings, technical health, content and links. GEO services add prompt testing, brand mention and citation tracking, and digital PR aimed at the sources AI tools quote. Ask for the metrics each will report."
          },
          {
              "q": "Should a small business do GEO or SEO first?",
              "a": "Do SEO first, and add GEO once your key pages rank and your brand has some presence beyond your own website. ChatGPT's answer to this question gave the same advice, though AI answers can be wrong."
          },
          {
              "q": "How do I measure GEO?",
              "a": "Test a fixed list of buyer questions in AI tools each month, record whether your brand is named and which sources are cited, and track visits from AI sources in GA4. Repeat prompts, because answers vary."
          },
          {
              "q": "Do I need different content for GEO and SEO?",
              "a": "Mostly the same pages, written well. Open sections with a direct answer, use question headings and include sourced data. Then add off-site work such as PR and reviews that GEO relies on."
          },
          {
              "q": "How long does GEO take to work?",
              "a": "There is no fixed timeline. Pages still need to rank first, which often takes three to six months, and mentions on other sites take time to build. Track your prompt list monthly to see movement."
          }
      ]
  },
  {
    "slug": "seo-for-manufacturers",
    "seoTitle": "SEO for Manufacturers 2027: Get More RFQs",
    "title": "SEO for Manufacturers in 2027: How Industrial Companies Get Organic Enquiries from AEO & GEO",
    "description": "SEO for manufacturers in 2027: how industrial buyers shortlist suppliers, a 7-step plan for capability pages, RFQs and AI answers, and how to measure enquiries.",
    "date": "2026-11-17",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [],
    "image": "/insights/seo-for-manufacturers-banner.jpg",
    "intro": "A buyer needs a machined part, a fabricated assembly or a moulded component. Before they ring anyone, they search for the process, check certifications and ask an AI assistant who can do the job. SEO for manufacturers is the work that puts your company on that shortlist. This guide gives you a 7-step plan for capability pages, product pages, RFQs and AI answers, with real examples from Google and ChatGPT and a way to measure the enquiries.",
    "tldr": [
      "SEO for manufacturers gets your company found, trusted and asked for a quote by engineers and procurement teams.",
      "Gartner found 61% of B2B buyers prefer a rep-free buying experience, so your website does the first sales call.",
      "Build one capability page per process, with specifications, certifications, proof and a short RFQ form.",
      "Keep key data in plain HTML, not only PDFs, so Google and AI tools can read and quote it.",
      "Measure RFQs by source, not traffic, and check ChatGPT and Google AI answers for your processes each month."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is SEO for manufacturers?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "SEO for manufacturers is the work of making a manufacturing or industrial website easy to find, easy to trust and easy to request a quote from, for the engineers, buyers and procurement teams who search for parts, processes and suppliers. It covers capability pages, product and catalogue pages, technical content, certifications, a clear request for quotation (RFQ) route and, in 2027, visibility in AI answers."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for \"seo for manufacturers\" describes the same job. It says SEO helps industrial businesses get found by engineers, procurement managers and technical buyers who research suppliers online before making contact."
      },
      {
        "type": "image",
        "src": "/insights/sfm-1-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search seo for manufacturers, saying SEO helps industrial businesses get found by engineers and procurement managers who research suppliers online",
        "caption": "The Google UK AI Overview for \"seo for manufacturers\", 17 November 2026."
      },
      {
        "type": "image",
        "src": "/insights/sfm-2-people-also-ask.jpg",
        "alt": "Google UK People Also Ask box under the search seo for manufacturers, with questions about SEO cost and whether SEO is evolving",
        "caption": "The People Also Ask box for \"seo for manufacturers\" shows general SEO questions, which is the gap this guide fills, 17 November 2026."
      },
      {
        "type": "p",
        "text": "The difference from other kinds of SEO is the buyer. A manufacturing buyer is checking tolerances, materials, certifications and lead times before a pound is spent. If your website cannot answer those questions, they move to the next supplier on a shortlist of three to five. For the wider B2B picture, our guide to [B2B SEO strategy](/insights/seo-for-b2b-companies) covers the full buying journey."
      },
      {
        "type": "h2",
        "text": "Why does SEO matter for manufacturers in 2027?"
      },
      {
        "type": "p",
        "text": "It matters because buyers research on their own before they ever speak to your sales team. Gartner's 2025 survey of 632 B2B buyers found that 61% prefer a rep-free buying experience, meaning they want to do the research without a salesperson. Your website, and the answers AI tools give about you, are doing the selling first."
      },
      {
        "type": "stats",
        "title": "Key figure",
        "items": [
          {
            "value": "61%",
            "label": "of B2B buyers prefer a rep-free buying experience (Gartner, survey of 632 buyers, June 2025)"
          }
        ]
      },
      {
        "type": "p",
        "text": "Gartner's [press release on rep-free buying](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience) also notes buyers still want a salesperson for judgement calls such as whether a product fits their company. For a manufacturer, that is the moment a clear RFQ page and a named technical contact matter most."
      },
      {
        "type": "p",
        "text": "Trade shows, referrals and directories still matter, and SEO does not replace them. It makes them work harder. A buyer who meets you at a show will still search your company name, your process and your certifications afterwards, and what they find decides whether you get the RFQ."
      },
      {
        "type": "h2",
        "text": "How do industrial buyers find and shortlist suppliers?"
      },
      {
        "type": "p",
        "text": "Buyers search for a capability, not a company. They type a process, a material or a certification, build a longlist, filter it on technical fit, check credibility and send RFQs to three to five suppliers. We asked ChatGPT how UK buyers shortlist a new CNC machining supplier, and its answer followed this pattern."
      },
      {
        "type": "image",
        "src": "/insights/sfm-5-chatgpt-supplier.jpg",
        "alt": "ChatGPT answer to how UK buyers find and shortlist a new CNC machining supplier, explaining that the shortlist of three to five suppliers is often formed before the buyer contacts the machining company",
        "caption": "ChatGPT's answer to \"How do UK buyers find and shortlist a new CNC machining supplier?\", with web search on, 17 November 2026."
      },
      {
        "type": "p",
        "text": "ChatGPT listed Google search, referrals, trade exhibitions, supplier directories, LinkedIn and online manufacturing marketplaces as the discovery routes. It also said that by the time an RFQ arrives, the buyer may already have a shortlist. AI answers can make mistakes, so treat this as a description of the pattern, not a statistic."
      },
      {
        "type": "table",
        "head": [
          "Shortlisting stage",
          "What the buyer does",
          "What your website must show"
        ],
        "rows": [
          [
            "Define the need",
            "Writes down drawings, material, tolerance, quantity and delivery date",
            "Capability pages that use the same terms an engineer would"
          ],
          [
            "Build a longlist",
            "Searches Google and AI tools, asks colleagues, checks directories",
            "Rankings for process, material and industry searches, and mentions on trusted sites"
          ],
          [
            "Filter on capability",
            "Removes suppliers that cannot meet size, tolerance or volume",
            "Machine list, working envelopes, tolerances and materials"
          ],
          [
            "Check credibility",
            "Looks for certifications, inspection equipment and references",
            "Certificates with scope, case studies, factory photos, named contacts"
          ],
          [
            "Send RFQs",
            "Sends the same request to three to five suppliers",
            "A short RFQ form and clear file upload instructions"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "What do manufacturing buyers actually search for?"
      },
      {
        "type": "p",
        "text": "They search for processes, materials, certifications and sectors, often with words such as \"suppliers\", \"services\" or \"quote\". Google's UK results for \"cnc machining services uk\" show this: the AI Overview names suppliers and platforms, and the related searches below it are about instant quotes and suppliers."
      },
      {
        "type": "image",
        "src": "/insights/sfm-3-cnc-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search cnc machining services uk, listing suppliers and platforms with their capabilities and certifications",
        "caption": "The Google UK AI Overview for \"cnc machining services uk\" lists suppliers by capability and certification, 17 November 2026."
      },
      {
        "type": "image",
        "src": "/insights/sfm-4-quote-searches.jpg",
        "alt": "Google UK related searches for cnc machining services uk including instant CNC quote online UK and CNC machining suppliers UK online",
        "caption": "Related searches under the same results show buyers asking for quotes and suppliers, 17 November 2026."
      },
      {
        "type": "p",
        "text": "The pattern repeats across industrial sectors. Group your keywords into five types and build a page for each type that matters to you:"
      },
      {
        "type": "list",
        "items": [
          "**Process:** CNC machining, sheet metal fabrication, injection moulding, die casting, welding.",
          "**Material:** aluminium, stainless steel, titanium, engineering plastics.",
          "**Industry:** aerospace, medical device, automotive, food and beverage, energy.",
          "**Standard or certification:** ISO 9001, AS9100, ISO 13485, CE marking.",
          "**Commercial:** quote, supplier, manufacturer, small batch, prototype, UK."
        ]
      },
      {
        "type": "p",
        "text": "Search volume for these terms is often modest, because the audience is small. That is normal. One RFQ can be worth tens of thousands of pounds, so a page that attracts ten qualified visits a month can still pay for itself. Google Trends shows how different the interest levels are across processes in the UK, so check yours before you plan pages."
      },
      {
        "type": "image",
        "src": "/insights/sfm-6-google-trends.jpg",
        "alt": "Google Trends chart for the UK over five years comparing CNC machining services, sheet metal fabrication and injection moulding search interest",
        "caption": "Google Trends, UK, past five years: relative interest in three manufacturing process searches, 17 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you do SEO for a manufacturing company? A 7-step plan"
      },
      {
        "type": "h3",
        "text": "1. How do you build capability pages that rank and convert?"
      },
      {
        "type": "p",
        "text": "Create one page for each process you want work for. Lead with what you make and for whom, then give the details an engineer needs. Google's AI Overview recommends exactly this, with a separate page for each core process covering materials, size ranges, tolerances and target sectors."
      },
      {
        "type": "list",
        "items": [
          "**Open with the answer.** One sentence saying what the process is, the sizes you handle and the sectors you serve.",
          "**Add a specification table.** Materials, maximum part size, tolerance, batch size and lead time.",
          "**Show the machines.** Name the equipment and add real photos, not stock images.",
          "**Add proof.** Certificates, inspection equipment and a short project example for that process.",
          "**End with the RFQ.** A short form or a named contact on the same page."
        ]
      },
      {
        "type": "h3",
        "text": "2. How do you structure product and category pages for large catalogues?"
      },
      {
        "type": "p",
        "text": "Use a simple URL pattern that mirrors how buyers think: category, then family, then product. Give every product page a unique title, a short description written for the part, a specification table and a download for the datasheet. Avoid thousands of near-identical pages that differ only by a part number, because they dilute the pages that matter."
      },
      {
        "type": "list",
        "items": [
          "**Keep URLs readable,** for example /products/stainless-fasteners/.",
          "**Write unique text** for each category and family page.",
          "**Use filters carefully.** Let buyers filter by material and size, but stop filtered combinations being indexed by default.",
          "**Link related parts** so crawlers and buyers can move between them."
        ]
      },
      {
        "type": "h3",
        "text": "3. What technical content do buyers and AI tools use?"
      },
      {
        "type": "p",
        "text": "Answer the questions an engineer asks before an RFQ. These pages are the ones AI assistants quote, because they are specific. Good starting questions are: what tolerances can you hold, what materials can you work with, what is the lead time for a first batch, and what do you need from us to quote."
      },
      {
        "type": "p",
        "text": "Write each as a question heading with a direct answer in the first two sentences, then add detail, a table and a link to the relevant capability page. For how AI tools choose what to quote, see our guide on [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt)."
      },
      {
        "type": "h3",
        "text": "4. How do certifications and trust pages help SEO?"
      },
      {
        "type": "p",
        "text": "Procurement teams look for credentials early. Give each certification its own section or page with the certificate number, the scope, the issuing body and the date. An ISO 9001 certificate does not automatically qualify a supplier for aerospace or medical work, so state exactly what yours covers."
      },
      {
        "type": "list",
        "items": [
          "**Quality:** ISO 9001, AS9100, ISO 13485, ISO 14001, as relevant.",
          "**Inspection:** coordinate measuring machines, inspection reports and first-article process.",
          "**People:** named technical contacts, with short bios.",
          "**Proof:** a short project example for each sector, with the client's permission."
        ]
      },
      {
        "type": "h3",
        "text": "5. How do you make the RFQ process easy to find and finish?"
      },
      {
        "type": "p",
        "text": "Put a short RFQ form or contact route on every capability and product page. Ask only for what you need to start: name, company, email, part description and a file upload. State your reply time, for example \"We reply to every RFQ within one working day\", only if you can keep to it. Long forms lose the buyers who are comparing five suppliers at once."
      },
      {
        "type": "h3",
        "text": "6. How do distributors, directories and trade bodies fit into manufacturing SEO?"
      },
      {
        "type": "p",
        "text": "They give you mentions and links from sites buyers already trust, and they feed AI answers. In ChatGPT's answer above, supplier directories and trade associations appeared as a discovery channel. Make sure your listing on each relevant directory, trade association and distributor site is complete and uses the same company name, address and capability wording as your website."
      },
      {
        "type": "list",
        "items": [
          "**Trade associations and directories:** keep listings complete and consistent.",
          "**Distributors and resellers:** give them product data and images they can publish, with a link back to your product page.",
          "**Trade press and digital PR:** offer technical comment or data to industry titles, which builds the mentions AI tools pick up.",
          "**Google Business Profile:** list each plant with accurate address, services and photos, which helps regional searches."
        ]
      },
      {
        "type": "h3",
        "text": "7. How do you fix technical SEO on a manufacturing website?"
      },
      {
        "type": "p",
        "text": "Check that Google can crawl your pages, that product pages load quickly and that PDFs are not the only place your specifications live. Many industrial sites hide key data in downloadable PDFs or behind a form, which means neither Google nor AI tools can read it."
      },
      {
        "type": "list",
        "items": [
          "**Put specifications in HTML,** not only in PDFs.",
          "**Check indexing** of capability and product pages in Search Console.",
          "**Keep pages fast,** compressing photos and drawings.",
          "**Make sure AI crawlers are not blocked** by robots.txt or your CDN settings, unless you have a reason to opt out.",
          "**Use structured data** such as Organization and Product where it matches the visible page."
        ]
      },
      {
        "type": "h2",
        "text": "How do manufacturers show up in AI answers such as ChatGPT and Google AI Overviews?"
      },
      {
        "type": "p",
        "text": "Manufacturers show up in AI answers by being clearly described, widely mentioned and well ranked. Ahrefs found that 76% of 1.9 million AI Overview citations came from pages already ranking in Google's top 10, so ordinary SEO is still the entry ticket."
      },
      {
        "type": "stats",
        "title": "Key figure",
        "items": [
          {
            "value": "76%",
            "label": "of 1.9 million AI Overview citations came from top 10 pages (Ahrefs)"
          }
        ]
      },
      {
        "type": "p",
        "text": "Then make each page easy to quote. Our Google test showed AI Overviews naming suppliers with their capability and certification in the same sentence. That is a template for your own pages: put what you make, where you make it and which standard you meet in one plain sentence near the top."
      },
      {
        "type": "list",
        "items": [
          "**Google AI Overviews and AI Mode:** rank for process and material searches and answer them in the first sentences. Read our guide on [how to rank in Google AI Overviews](/insights/how-to-rank-in-ai-overviews).",
          "**ChatGPT and other assistants:** be mentioned on directories, trade bodies, trade press and your own technical pages, because assistants draw from several sources. See our [answer engine optimisation guide](/insights/answer-engine-optimisation).",
          "**Your own site:** keep specifications, certificates and contact details in plain HTML and keep them consistent everywhere they appear."
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure SEO for a manufacturer?"
      },
      {
        "type": "p",
        "text": "Measure RFQs, not visits. Track qualified enquiries by source, then look at the pages and searches that produced them. Set up a form submission and a phone click as key events in Google Analytics 4 and tag the RFQ form so you can tell which page the enquiry started from."
      },
      {
        "type": "list",
        "items": [
          "**Search Console:** impressions and clicks for process, material and certification searches.",
          "**GA4:** key events for the RFQ form, file uploads and phone clicks, by landing page.",
          "**Your CRM:** record the source of each RFQ and whether it became an order.",
          "**AI visibility:** every month, ask ChatGPT and Google five supplier questions for your processes and note whether you appear."
        ]
      },
      {
        "type": "p",
        "text": "Our guide on [tracking AI traffic for free](/insights/track-ai-traffic) shows how to set this up in GA4 and Search Console."
      },
      {
        "type": "h2",
        "text": "How long does SEO take for manufacturers?"
      },
      {
        "type": "p",
        "text": "Fixes to profiles, listings and RFQ forms can lift enquiries within weeks. New capability pages and technical content usually take three to six months to build rankings, and longer for competitive terms. Industrial sales cycles are long, so an RFQ from a new page may take months more to become an order."
      },
      {
        "type": "callout",
        "variant": "tip",
        "title": "Illustrative example",
        "text": "Suppose a machining company wants six new RFQs a month and one in four RFQs becomes a paid order. That means about 24 RFQs a month. If a capability page turns 3 in every 100 qualified visits into an RFQ, the company needs roughly 800 qualified visits a month across its pages. This is an illustration to show the method, not a benchmark."
      },
      {
        "type": "h2",
        "text": "Which industries and business models need different SEO?"
      },
      {
        "type": "p",
        "text": "The method is the same, but the emphasis changes."
      },
      {
        "type": "list",
        "items": [
          "**Contract manufacturers and machine shops:** capability pages by process and material, certifications and a fast RFQ route.",
          "**Product manufacturers selling through distributors:** product data feeds, distributor listings and strong category pages.",
          "**Component makers selling to OEMs:** technical documentation, standards pages and engineering-led content.",
          "**Manufacturers with several plants:** a page and Google Business Profile for each site."
        ]
      },
      {
        "type": "p",
        "text": "If you move goods as well as make them, our guide to [logistics marketing](/insights/logistics-marketing) covers the freight and 3PL side of the same buyers."
      }
    ],
    "faq": [
      {
        "q": "What is SEO for manufacturers?",
        "a": "SEO for manufacturers is making a manufacturing website easy for engineers and procurement teams to find, trust and request a quote from. It covers capability pages, product pages, technical content, certifications and AI answer visibility."
      },
      {
        "q": "How do manufacturers get leads from Google?",
        "a": "They build a page for each process, material and sector they serve, show specifications and certifications in plain HTML, and place a short RFQ form on every page."
      },
      {
        "q": "How much does SEO for manufacturers cost?",
        "a": "It depends on the size of the site and the competition. Agencies publish their own prices, and some UK manufacturing programmes start at around £1,700 a month plus VAT. Ask what is included, how enquiries are tracked and who writes the technical content."
      },
      {
        "q": "How long does SEO take for a manufacturing company?",
        "a": "Profile and listing fixes can show results in weeks. New capability pages usually take three to six months to rank, and RFQs from them may take longer to become orders."
      },
      {
        "q": "Do industrial buyers use ChatGPT to find suppliers?",
        "a": "Some do, and the habit is growing. ChatGPT's own answer lists AI tools alongside Google, referrals, directories and trade shows as ways engineers research suppliers, so check your AI visibility monthly."
      },
      {
        "q": "Are PDFs bad for manufacturing SEO?",
        "a": "PDFs can rank, but they hide your best data from many tools and give buyers no next step. Put key specifications in HTML on the page and offer the PDF as a download."
      },
      {
        "q": "Do manufacturers need Google Business Profile?",
        "a": "Yes, for each plant. It helps regional searches and gives buyers a trusted place to see your address, photos and reviews."
      },
      {
        "q": "What is the best first step in manufacturing SEO?",
        "a": "Pick your most profitable process and build one strong capability page for it, with specifications, proof and an RFQ form, then repeat for the next process."
      }
    ]
  },
  {
      "slug": "how-to-find-a-good-seo-company",
      "seoTitle": "How to Find a Good SEO Company 2027: Questions to Ask",
      "title": "How to Choose an SEO Company in 2027: Questions to Ask Before You Sign",
      "description": "How to find a good SEO company in 2027: the questions to ask, red flags, how to check case studies and compare proposals, and what Google itself advises.",
      "date": "2026-11-16",
      "author": "team",
      "topics": [
          "SEO - Begins"
      ],
      "industries": [],
      "image": "/insights/how-to-find-a-good-seo-company-banner.jpg",
      "intro": "Choosing an SEO company is a big decision, and it is hard to judge before you have paid. Many agencies promise page one, few explain how, and Google itself warns that no one can guarantee a number one ranking. This guide shows you how to find a good SEO company in 2027: what to do first, the questions to ask, the red flags to avoid, how to check case studies and how to compare proposals.",
      "tldr": [
          "A good SEO company shows relevant proof, explains its plan in plain English and reports on enquiries and sales.",
          "Google says no one can guarantee a number one ranking, so treat any guarantee as a red flag.",
          "Ask for case studies, references, a 90-day plan and a sample report before you sign.",
          "Keep ownership of your Search Console, GA4 and Business Profile accounts.",
          "Expect early signs in about three months and clear business results over six to twelve."
      ],
      "body": [
          {
              "type": "h2",
              "text": "How do you find a good SEO company?"
          },
          {
              "type": "p",
              "text": "Start with proof, then process, then price. A good SEO company can show you real results for businesses like yours, explain exactly what it will do in your first 90 days, report on enquiries and sales rather than rankings alone, and promise nothing it cannot control. If a company fails any of those four tests, keep looking."
          },
          {
              "type": "p",
              "text": "Google's AI Overview for \"how to find a good seo company\" gives the same answer in short form: look past flashy sales pitches and judge proven processes, transparency and realism. Its first steps are to define your goals and to review real case studies."
          },
          {
              "type": "image",
              "src": "/insights/choose-seo-company-1.jpg",
              "alt": "Google UK AI Overview for the search how to find a good seo company, saying to look past flashy sales pitches and judge proven processes, transparency and realism, with steps to define your goals and review real case studies",
              "caption": "The Google UK AI Overview for \"how to find a good seo company\", 16 November 2026."
          },
          {
              "type": "callout",
              "variant": "definition",
              "title": "Definition",
              "text": "An SEO company (or SEO agency) is a business you pay to improve how often your website appears in search results and AI answers, and how many visitors, enquiries and sales those appearances bring. Good ones work on your site, your content and your reputation across the web."
          },
          {
              "type": "h2",
              "text": "What should you do before you start looking for an SEO company?"
          },
          {
              "type": "p",
              "text": "Decide what you want search to do for your business. Write down the result in plain terms: more booked calls, more quote requests, more online sales, or more visibility in your local area. A clear goal lets you judge every proposal against the same measure."
          },
          {
              "type": "p",
              "text": "Then check whether you need an agency at all. Google's own guidance says that if you run a small local business, you can probably do much of the work yourself, and recommends its SEO starter guide first. It also says a great time to hire is when you are planning a site redesign or a new site, because the site can then be built search-friendly from the start."
          },
          {
              "type": "steps",
              "title": "Prepare in four steps",
              "items": [
                  {
                      "title": "Write your goal and your budget",
                      "text": "Choose one main outcome, such as 20 more quote requests a month, and a monthly budget you can sustain for at least six months."
                  },
                  {
                      "title": "Gather your own data",
                      "text": "Open Google Search Console and GA4 and note your current clicks, impressions and enquiries from search. You need a baseline to judge any agency against.",
                      "path": "Search Console > Performance > Search results"
                  },
                  {
                      "title": "List three or four competitors",
                      "text": "Search your main services on Google and note who appears. A good agency will ask about these."
                  },
                  {
                      "title": "Make a shortlist of three to five agencies",
                      "text": "Use recommendations from other owners, Google results and AI assistants, then check each agency's own website."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "What questions should you ask an SEO company before you sign?"
          },
          {
              "type": "p",
              "text": "Ask questions that force specific answers. Google's Search Central page on hiring an SEO lists useful ones, and we have added the questions we think matter most in 2027."
          },
          {
              "type": "image",
              "src": "/insights/choose-seo-company-4.jpg",
              "alt": "Google Search Central page titled Things to consider when hiring an SEO, listing interview questions such as asking for previous work and success stories, whether the SEO follows Google Search Essentials, expected results and timeframe, and experience in your industry and country",
              "caption": "Google Search Central's guidance on hiring an SEO, 16 November 2026."
          },
          {
              "type": "checklist",
              "title": "Twelve questions to ask every agency",
              "items": [
                  "**Can you show me examples of previous work and success stories?** Ask for results from businesses like yours, with the numbers and the time frame.",
                  "**Do you follow Google Search Essentials?** Any technique against Google's rules can get your site demoted or removed.",
                  "**What results do you expect, and in what time frame?** A realistic answer gives a range and explains what could change it.",
                  "**How will you measure success?** The answer should include enquiries or sales, not only rankings and traffic.",
                  "**What is your experience in my industry and my country or city?** Local and sector knowledge shortens the learning time.",
                  "**What will you do in the first 90 days?** Expect an audit, a priority list and a content and technical plan.",
                  "**Who will do the work?** Ask who writes, who handles technical fixes and who you speak to each month.",
                  "**How will you report, and how often?** See a sample report before you sign. Our guide to a [good monthly SEO report](/insights/seo-report-template) shows what it should include.",
                  "**What do you do about AI search?** A good agency can explain how your brand appears in Google AI Overviews and ChatGPT. See our guide to [answer engine optimisation](/insights/answer-engine-optimisation).",
                  "**Will you explain every change you make to my site?** Google says an agency with access to your server should be willing to explain all the changes it makes.",
                  "**What are the contract length and exit terms?** Check notice periods, and confirm you own your accounts, content and data if you leave.",
                  "**Can I speak to two current clients?** Real references are the strongest check of all."
              ]
          },
          {
              "type": "h2",
              "text": "What are the red flags when choosing an SEO company?"
          },
          {
              "type": "p",
              "text": "The biggest red flag is a guaranteed ranking. Google states that no one can guarantee a number one ranking, and that you should beware of anyone who claims a special relationship with Google or offers a priority submit to Google. Walk away from any of these."
          },
          {
              "type": "compare",
              "title": "Green flags and red flags",
              "columns": [
                  {
                      "title": "Green flags",
                      "tone": "good",
                      "items": [
                          "Asks about your customers, margins and competitors",
                          "Shows case studies with numbers and time frames",
                          "Explains the plan in plain English",
                          "Reports on enquiries and sales",
                          "Gives a realistic time frame and says what could change it",
                          "Lets you own your accounts, content and data"
                      ]
                  },
                  {
                      "title": "Red flags",
                      "tone": "bad",
                      "items": [
                          "Guarantees a number one ranking",
                          "Claims a special relationship with Google",
                          "Emails you out of the blue about your rankings",
                          "Is secretive about what it will do",
                          "Sells link packages or submission to thousands of search engines",
                          "Wants full access before you have signed"
                      ]
                  }
              ]
          },
          {
              "type": "p",
              "text": "Google adds two more warnings. Be wary of an agency that emails you out of the blue, and be careful if a company is secretive or will not clearly explain what it intends to do. Ultimately, you are responsible for the actions of anyone you hire, so deceptive tactics on your behalf can damage your site."
          },
          {
              "type": "callout",
              "variant": "warning",
              "title": "Limit access at the audit stage",
              "text": "If an agency offers an audit, Google advises granting read access to Search Console only at that stage, not write access. An audit should give you realistic estimates of improvement and of the work involved."
          },
          {
              "type": "h2",
              "text": "What does a good SEO company actually do for you?"
          },
          {
              "type": "p",
              "text": "A good SEO company works on three areas: your website, your content and your reputation elsewhere on the web. Ask each agency to describe all three. Google lists services such as site review, technical advice, content development, keyword research, training and optimising for generative AI."
          },
          {
              "type": "image",
              "src": "/insights/choose-seo-company-2.jpg",
              "alt": "ChatGPT answer to how do I choose a good SEO company in the UK, with six areas to evaluate and a table covering case studies, industry knowledge, strategy, technical SEO, content, link building and reporting",
              "caption": "ChatGPT's answer to \"How do I choose a good SEO company in the UK?\", 16 November 2026."
          },
          {
              "type": "p",
              "text": "ChatGPT, asked how to choose a UK SEO company, gave a similar list. It said the choice comes down to finding an agency that can show how its work will generate more qualified customers and revenue, not just better rankings, and it listed case studies, industry knowledge, strategy, technical SEO, content, link building and reporting as the areas to check."
          },
          {
              "type": "table",
              "head": [
                  "Area",
                  "What a good agency does",
                  "What to ask to see"
              ],
              "rows": [
                  [
                      "Technical SEO",
                      "Finds and fixes crawling, indexing and speed problems",
                      "A sample audit with priorities"
                  ],
                  [
                      "Content",
                      "Plans pages around the questions your buyers ask",
                      "Content plan and examples"
                  ],
                  [
                      "Links and mentions",
                      "Earns links and mentions from relevant, trusted sites",
                      "Examples of coverage won, not bulk packages"
                  ],
                  [
                      "Local and reviews",
                      "Improves your Google Business Profile and review flow",
                      "Profile before and after"
                  ],
                  [
                      "AI search",
                      "Checks how AI answers describe you and improves it",
                      "An AI visibility check"
                  ],
                  [
                      "Reporting",
                      "Ties search to enquiries and sales",
                      "A sample monthly report"
                  ]
              ]
          },
          {
              "type": "h2",
              "text": "How do you check an SEO agency's case studies and references?"
          },
          {
              "type": "p",
              "text": "Check three things: the result is real, it matches your situation, and the agency caused it. Ask which keywords, pages or enquiries improved, over what period, and what the agency did to achieve it. Then ask to speak to the client."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Look for business results.",
                      "text": "Traffic growth alone is weak evidence. Enquiries, calls, bookings or sales are stronger."
                  },
                  {
                      "lead": "Check the time frame.",
                      "text": "A claim of 300% growth means little without the starting number and the dates."
                  },
                  {
                      "lead": "Match the sector.",
                      "text": "A result in a different market or sales cycle may not apply to yours."
                  },
                  {
                      "lead": "Look at their own site.",
                      "text": "Search for the agency's own services. An agency that cannot be found for its own work may struggle to find you."
                  },
                  {
                      "lead": "Call the references.",
                      "text": "Ask past clients whether the agency was easy to work with and produced useful results, as Google suggests."
                  }
              ]
          },
          {
              "type": "p",
              "text": "The People Also Ask box for this search shows what buyers worry about next, including how much an SEO company costs and whether SEO is changing. Both are fair questions to put to any agency."
          },
          {
              "type": "image",
              "src": "/insights/choose-seo-company-3.jpg",
              "alt": "Google People also ask box for the search how to find a good seo company, with questions about whether SEO is dead, the 80/20 rule in SEO, whether ChatGPT can do SEO and how much it costs to hire an SEO company",
              "caption": "The People also ask box for \"how to find a good seo company\" on Google UK, 16 November 2026."
          },
          {
              "type": "h2",
              "text": "How do you compare SEO company proposals?"
          },
          {
              "type": "p",
              "text": "Compare proposals on the same page, using the same headings. Score each one out of five on proof, plan, reporting, communication and fit, then look at price. A cheaper proposal that cannot answer the questions above is the more expensive choice in the end."
          },
          {
              "type": "table",
              "head": [
                  "Score each agency out of 5",
                  "Agency A",
                  "Agency B",
                  "Agency C"
              ],
              "rows": [
                  [
                      "Relevant results and references",
                      "",
                      "",
                      ""
                  ],
                  [
                      "Clear 90-day plan",
                      "",
                      "",
                      ""
                  ],
                  [
                      "Reporting on enquiries and sales",
                      "",
                      "",
                      ""
                  ],
                  [
                      "Explains AI search work",
                      "",
                      "",
                      ""
                  ],
                  [
                      "Fair contract and exit terms",
                      "",
                      "",
                      ""
                  ]
              ]
          },
          {
              "type": "p",
              "text": "Look at what the fee includes, who does the work and what happens if results are slow. Be careful of long lock-in contracts for work that cannot show progress in the first few months."
          },
          {
              "type": "h2",
              "text": "How long should it take before a good SEO company shows results?"
          },
          {
              "type": "p",
              "text": "Expect early signs in the first three months and clear business results over six to twelve months, depending on your site, your competition and your starting point. A good agency explains this range and the factors behind it. Ask them to name the first measurable changes, such as more impressions and more pages indexed, and to track them in a report you can see yourself, for example with Google Search Console and a free setup like the one in our guide to [tracking AI traffic for free](/insights/track-ai-traffic)."
          },
          {
              "type": "h2",
              "text": "How do you keep an SEO company accountable after you sign?"
          },
          {
              "type": "p",
              "text": "Own your data, meet monthly and judge the agency on business results. These five habits keep the relationship healthy."
          },
          {
              "type": "steps",
              "title": "Five habits for a good agency relationship",
              "items": [
                  {
                      "title": "Keep ownership of your accounts",
                      "text": "Set up Search Console, GA4 and your Google Business Profile under your own login and add the agency as a user."
                  },
                  {
                      "title": "Agree the measures in writing",
                      "text": "Write down the enquiry, sales and visibility measures that will define success."
                  },
                  {
                      "title": "Review every month",
                      "text": "Meet monthly, see what changed, what was done and what comes next."
                  },
                  {
                      "title": "Ask for the reasoning",
                      "text": "For each recommendation ask why it will help and how Google's guidance supports it."
                  },
                  {
                      "title": "Re-check at three and six months",
                      "text": "Compare enquiries and visibility with your baseline. If the agency cannot explain a gap, discuss it early."
                  }
              ]
          },
          {
              "type": "p",
              "text": "If you are weighing up whether search is still worth paying for, our guide on [whether AI will replace SEO](/insights/will-ai-replace-seo) explains what is changing and what stays the same."
          }
      ],
      "faq": [
          {
              "q": "How do I find a good SEO company?",
              "a": "Define your goal, shortlist three to five agencies, then check case studies, references, their 90-day plan and how they report. Choose the one that can explain its work clearly and shows results from businesses like yours."
          },
          {
              "q": "What should I ask an SEO company before signing?",
              "a": "Ask for examples of previous work, whether they follow Google Search Essentials, what results and time frame to expect, how they measure success, their experience in your industry and location, and how they will communicate and report."
          },
          {
              "q": "Can an SEO company guarantee a number one ranking?",
              "a": "No. Google states that no one can guarantee a number one ranking. Be wary of any agency that claims to, or that says it has a special relationship with Google."
          },
          {
              "q": "Do I need to hire an SEO company at all?",
              "a": "Not always. Google says a small local business can probably do much of the work itself, starting with the SEO starter guide. Hiring is most useful for a site redesign, a new site or when you lack the time or skills."
          },
          {
              "q": "How can I tell if an SEO company is legitimate?",
              "a": "Check that it has a working website of its own, real client references, clear contract terms and a plan it can explain. Be careful of unsolicited emails, secrecy and promises of guaranteed rankings."
          },
          {
              "q": "How long before I see results from an SEO company?",
              "a": "Early signs often appear within three months and clear business results within six to twelve months, depending on competition and your starting point. A good agency explains the range and what affects it."
          },
          {
              "q": "Should an SEO company handle AI search as well?",
              "a": "Yes, increasingly. Ask how it checks your visibility in Google AI Overviews and AI assistants such as ChatGPT, and whether its advice follows Google's guidance for generative AI features."
          }
      ]
  },
  {
    "slug": "ahrefs-free-alternative",
    "seoTitle": "Ahrefs Free Alternative 2027: 8 Tools Compared",
    "title": "Free Ahrefs Alternatives in 2027: Tools That Do the Job for Small Businesses",
    "description": "Ahrefs free alternative for 2027: the free tools for keywords, backlinks, rank tracking and site audits, their limits, a 5-step stack and what they miss.",
    "date": "2026-11-16",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/ahrefs-free-alternative-banner.jpg",
    "intro": "Ahrefs is one of the most respected SEO tools, and its paid plans start at $29 a month and climb to $449. If you run a small business, you may wonder whether a free Ahrefs alternative can do the job. For most owners it can, if you know which free tool to open for which task. This guide covers the best free Ahrefs alternatives for 2027, the limits of each, a five-step setup and what free tools cannot do.",
    "tldr": [
      "There is no single free Ahrefs alternative, but five free tools together cover most small business needs.",
      "Google Search Console shows your real clicks, impressions and positions for free.",
      "Ahrefs Webmaster Tools, Bing Webmaster Tools and Screaming Frog cover backlinks and technical checks on your own site.",
      "Free tools show little about competitors, so use paid tools only when you need rival data or AI search tracking.",
      "Set the stack up once, then spend about an hour a month on it."
    ],
    "body": [
      {
        "type": "h2",
        "text": "Is there a free alternative to Ahrefs?"
      },
      {
        "type": "p",
        "text": "Yes. No single free tool replaces Ahrefs, but a small set of free tools covers most of what a small business needs: Google Search Console for rankings and clicks, Bing Webmaster Tools for backlinks, Ahrefs Webmaster Tools for your own site's health, Screaming Frog for technical checks and Google Keyword Planner for keyword ideas."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for \"ahrefs free alternative\" gives the same short list: open-source tools, Semrush's limited free tier, Mangools, SpyFu and the free tools Ahrefs itself offers. The difference for a business owner is knowing which one to open for which job."
      },
      {
        "type": "image",
        "src": "/insights/ahrefs-free-alternative-1.jpg",
        "alt": "Google UK AI Overview for the search ahrefs free alternative, listing OpenSEO, Semrush, Mangools, SpyFu and the free Ahrefs tools as top free and freemium alternatives",
        "caption": "The Google UK AI Overview for \"ahrefs free alternative\", 16 November 2026."
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "An Ahrefs free alternative is any free or freemium SEO tool that does one or more of the jobs Ahrefs does: keyword research, backlink checking, rank tracking, site audits and competitor research. Most are free forever for your own website and limited for anyone else's."
      },
      {
        "type": "h2",
        "text": "What does Ahrefs cost, and what do you actually need from it?"
      },
      {
        "type": "p",
        "text": "Ahrefs paid plans on its pricing page run from Starter at $29 a month to Lite at $129, Standard at $249 and Advanced at $449. Before you replace it, write down which of its jobs you use. Most small businesses use three: seeing which searches bring visitors, checking who links to them and finding technical problems."
      },
      {
        "type": "image",
        "src": "/insights/ahrefs-free-alternative-2.jpg",
        "alt": "Column chart of Ahrefs monthly plan prices: Starter $29, Lite $129 and Standard $249",
        "caption": "Ahrefs monthly plan prices, from its pricing page, 16 November 2026. The Advanced plan is $449."
      },
      {
        "type": "p",
        "text": "The chart shows where the price jumps. The jump from $29 to $129 between Starter and Lite is the moment many owners start searching for free options."
      },
      {
        "type": "stats",
        "title": "Free limits that matter, 16 November 2026",
        "items": [
          {
            "value": "5,000",
            "label": "monthly crawl credits per verified project in Ahrefs Webmaster Tools"
          },
          {
            "value": "1,000",
            "label": "backlinks and keywords shown in the free Site Explorer"
          },
          {
            "value": "500",
            "label": "URLs crawled in the free Screaming Frog SEO Spider"
          },
          {
            "value": "10",
            "label": "reports a day on the Semrush free plan"
          }
        ]
      },
      {
        "type": "p",
        "text": "Limits change, so check each vendor's page before you build a routine around one. The numbers above come from the tools' own pages on 16 November 2026."
      },
      {
        "type": "h2",
        "text": "What are the best free Ahrefs alternatives in 2027?"
      },
      {
        "type": "p",
        "text": "We asked ChatGPT the same question a small business owner would, with web search on. It ranked Google Search Console first, then Bing Webmaster Tools, Semrush, Screaming Frog, Ahrefs Webmaster Tools, Ubersuggest, Seobility and Google Keyword Planner, and warned that no one tool does everything."
      },
      {
        "type": "image",
        "src": "/insights/ahrefs-free-alternative-3.jpg",
        "alt": "ChatGPT answer to the best free alternatives to Ahrefs for a small business, with a table of tools, what each is best for and its free access",
        "caption": "ChatGPT's answer to \"What are the best free alternatives to Ahrefs for a small business?\", 16 November 2026."
      },
      {
        "type": "p",
        "text": "We agree with most of that list. Here is what each tool does for you and where it stops."
      },
      {
        "type": "h3",
        "text": "Is Google Search Console a good free alternative to Ahrefs?"
      },
      {
        "type": "p",
        "text": "Yes, for your own site it is better than Ahrefs on one thing: it shows real data straight from Google. You see the clicks, impressions, click-through rate and average position for every query and page on a site you have verified. It cannot show competitors."
      },
      {
        "type": "image",
        "src": "/insights/ahrefs-free-alternative-4.jpg",
        "alt": "Google Search Console Performance report for maai.agency over three months showing 27 clicks, 3.49k impressions, 0.8% click-through rate and average position 39.1",
        "caption": "A Search Console Performance report for maai.agency, three months to 14 November 2026. Impressions climb sharply in November as new posts are indexed."
      },
      {
        "type": "p",
        "text": "Our own site is a fair example. Over three months it recorded 27 clicks from 3.49 thousand impressions, a click-through rate of 0.8% and an average position of 39.1. That tells us pages are being shown and are not yet ranking high enough to earn clicks, which is a job for better content, not for a bigger tool. For the AI side of Search Console and GA4, see our guide to [tracking AI traffic for free](/insights/track-ai-traffic)."
      },
      {
        "type": "h3",
        "text": "Does Bing Webmaster Tools replace the Ahrefs backlink checker?"
      },
      {
        "type": "p",
        "text": "Partly. Bing Webmaster Tools is free and includes a backlinks report for your own verified site, keyword research and site scans. It gives you a second search engine's view, and it matters more now because some AI assistants use Bing's index."
      },
      {
        "type": "h3",
        "text": "What does Ahrefs Webmaster Tools give you for free?"
      },
      {
        "type": "p",
        "text": "Ahrefs Webmaster Tools gives you Site Audit, Site Explorer and Web Analytics on websites you have verified. Site Audit allows 5,000 crawl credits per verified project a month, and Site Explorer shows up to 1,000 backlinks and keywords at a time. It is the closest free taste of Ahrefs, for your own sites only."
      },
      {
        "type": "h3",
        "text": "Can Screaming Frog replace Ahrefs Site Audit?"
      },
      {
        "type": "p",
        "text": "For sites up to 500 URLs, yes. The free Screaming Frog SEO Spider crawls a site on your computer and lists broken links, redirects, missing titles and meta descriptions, duplicate headings and canonical problems. Bigger sites need the paid licence, listed at 245 euros a year."
      },
      {
        "type": "h3",
        "text": "Is Google Keyword Planner free?"
      },
      {
        "type": "p",
        "text": "Yes, but you need a Google Ads account, and without active ad spend it can show volumes as broad ranges. Use it to compare phrases rather than to quote exact numbers. Pair it with Google Trends, which is free and shows whether interest in a phrase is rising or falling."
      },
      {
        "type": "h3",
        "text": "Is the Semrush free plan enough?"
      },
      {
        "type": "p",
        "text": "It is enough to try the tool and run a few competitor checks. The free plan gives you one demo project and 10 reports a day across its main tools, so plan your research in short, focused sessions."
      },
      {
        "type": "image",
        "src": "/insights/ahrefs-free-alternative-5.jpg",
        "alt": "Google People also ask box for the search ahrefs free alternative, with questions about free alternatives, a free Ahrefs, the top five free SEO tools and Ubersuggest",
        "caption": "The People also ask box for \"ahrefs free alternative\" on Google UK, 16 November 2026."
      },
      {
        "type": "p",
        "text": "The People also ask box shows what people want next: whether a free Ahrefs exists, which five free SEO tools to use and whether Ubersuggest is free. The honest answers are in this guide: a free Ahrefs exists for your own sites, and Ubersuggest and similar tools offer limited free use."
      },
      {
        "type": "h2",
        "text": "Which free tool replaces which Ahrefs feature?"
      },
      {
        "type": "p",
        "text": "Match each Ahrefs job to the free tool that does it best. This table is the quickest way to choose."
      },
      {
        "type": "table",
        "head": [
          "Ahrefs job",
          "Free tool to use",
          "What you give up"
        ],
        "rows": [
          [
            "Keyword research",
            "Google Keyword Planner and Google Trends",
            "Exact volumes and keyword difficulty scores"
          ],
          [
            "Rank tracking",
            "Google Search Console",
            "Competitor rankings and daily tracking"
          ],
          [
            "Backlink checking",
            "Bing Webmaster Tools and Ahrefs Webmaster Tools",
            "Other people's backlinks, apart from a small sample"
          ],
          [
            "Site audit",
            "Screaming Frog (500 URLs) or Ahrefs Webmaster Tools",
            "Scheduled crawls on large sites"
          ],
          [
            "Competitor research",
            "Semrush free plan (10 reports a day)",
            "Full competitor keyword and traffic history"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How do you build a free SEO stack step by step?"
      },
      {
        "type": "p",
        "text": "Set the stack up once, then run it as a short monthly routine. Start with the two verification steps, because every other free tool depends on them."
      },
      {
        "type": "steps",
        "title": "Build the free stack in five steps",
        "items": [
          {
            "title": "Verify your site in Google Search Console",
            "text": "Add your domain and verify it with a DNS record. Data starts to build from the day you verify, so do this first.",
            "path": "Search Console > Add property > Domain"
          },
          {
            "title": "Import it into Bing Webmaster Tools",
            "text": "Sign in and import your site from Google Search Console, which copies your verification and sitemaps in one go.",
            "path": "Bing Webmaster Tools > Import your sites from GSC"
          },
          {
            "title": "Verify the same site in Ahrefs Webmaster Tools",
            "text": "Confirm ownership of the site during setup, then start a Site Audit.",
            "path": "Ahrefs Webmaster Tools > Add project"
          },
          {
            "title": "Crawl your site with Screaming Frog",
            "text": "Enter your address, run the crawl and export the broken links and missing titles to fix first."
          },
          {
            "title": "Pick your keywords",
            "text": "Use Keyword Planner for phrases and Google Trends for direction. Then check the real results on Google for what already ranks and what people also ask."
          }
        ]
      },
      {
        "type": "p",
        "text": "Keep a one-page record each month: clicks and impressions from Search Console, new backlinks from Bing and Ahrefs Webmaster Tools, and the number of crawl errors fixed. Our [SEO report template](/insights/seo-report-template) shows how to lay that out."
      },
      {
        "type": "h2",
        "text": "What do free Ahrefs alternatives miss?"
      },
      {
        "type": "p",
        "text": "Free tools miss competitor depth. You cannot see a rival's full backlink profile, their keyword history or a full content gap, and Google's volumes in Keyword Planner are broad. If you manage several sites, the crawl and report limits will also slow you down."
      },
      {
        "type": "compare",
        "title": "Free stack or paid tool?",
        "columns": [
          {
            "title": "The free stack works when",
            "tone": "good",
            "items": [
              "You run one to three websites",
              "You mainly need your own clicks, links and technical fixes",
              "You can spend an hour a month on the routine"
            ]
          },
          {
            "title": "Consider a paid plan when",
            "tone": "bad",
            "items": [
              "You need rival backlinks, keyword history or content gaps",
              "You manage many sites or clients",
              "You need AI search visibility tracked at scale"
            ]
          }
        ]
      },
      {
        "type": "p",
        "text": "AI search is the newest gap. Search Console shows some Google AI feature data, but it does not track your brand across ChatGPT and other assistants. For that, compare the options in our guides to [AI overview trackers](/insights/ai-overviews-trackers) and [AI search monitoring tools](/insights/best-ai-search-monitoring-tools)."
      },
      {
        "type": "h2",
        "text": "How should you measure whether the free stack is working?"
      },
      {
        "type": "p",
        "text": "Measure movement in Search Console, not tool scores. Track total clicks, impressions, average position and the number of pages with impressions each month. If impressions rise but clicks do not, improve titles and content before you spend money on tools. Our guide to the [SEO visibility score](/insights/seo-visibility-score) explains how to read these trends."
      }
    ],
    "faq": [
      {
        "q": "Is there a free alternative to Ahrefs?",
        "a": "Yes. Google Search Console, Bing Webmaster Tools, Ahrefs Webmaster Tools, Screaming Frog and Google Keyword Planner together cover most small business needs. None shows full competitor data."
      },
      {
        "q": "Is there a free Ahrefs?",
        "a": "Ahrefs offers Ahrefs Webmaster Tools free for websites you own and can verify. It includes Site Audit, Site Explorer and Web Analytics with usage limits, and it does not research other people's sites in depth."
      },
      {
        "q": "What are the top 5 free SEO tools?",
        "a": "Google Search Console, Bing Webmaster Tools, Ahrefs Webmaster Tools, Screaming Frog (up to 500 URLs) and Google Keyword Planner are a strong five for a small business."
      },
      {
        "q": "Can I use Ubersuggest for free?",
        "a": "Yes, with limited searches and restricted data on its free access. It suits occasional keyword and competitor checks, and its limits can change, so check its pricing page."
      },
      {
        "q": "Can free tools replace Ahrefs for competitor research?",
        "a": "Only in part. The Semrush free plan allows 10 reports a day and Google Trends shows interest over time, but a full competitor backlink and keyword history needs a paid tool."
      },
      {
        "q": "How long does it take to set up a free SEO stack?",
        "a": "About two hours for the first setup, then roughly an hour a month for the routine. Search Console data starts building from the day you verify, so start early."
      }
    ]
  },
  {
      "slug": "medical-spa-marketing",
      "seoTitle": "Medical Spa Marketing 2027: Get More Bookings",
      "title": "Medical Spa Marketing in 2027: How Med Spas Get More Bookings from Google and AI Search",
      "description": "Medical spa marketing for 2027: how patients choose a med spa, a 7-step plan for Google, reviews and AI answers, UK ad rules and how to measure bookings.",
      "date": "2026-11-16",
      "author": "team",
      "topics": [
          "B2C"
      ],
      "industries": [],
      "image": "/insights/medical-spa-marketing-banner.jpg",
      "intro": "Before anyone books a facial, a laser course or a consultation for skin treatments, they check who they can trust. They read reviews, look at results and ask an AI assistant. Medical spa marketing is the work that makes your med spa the clear answer at that moment. This guide gives you a step-by-step plan, real examples from Google and ChatGPT, the UK advertising rules you must follow and a way to measure bookings.",
      "tldr": [
          "Medical spa marketing gets a med spa found, trusted and booked through Google, reviews, proof and AI answers.",
          "The Professional Standards Authority found 36% of people seeking non-surgical treatments are influenced by five-star reviews.",
          "UK patients search for treatments and places far more than the words \"med spa\", so build one page per treatment and area.",
          "Prescription-only medicines such as Botox cannot be advertised to the public in the UK, so promote consultations instead.",
          "Track booked consultations by source and check your AI visibility monthly."
      ],
      "body": [
          {
              "type": "h2",
              "text": "What is medical spa marketing?"
          },
          {
              "type": "callout",
              "variant": "definition",
              "title": "Definition",
              "text": "Medical spa marketing is the work a med spa does to get found, trusted and booked by people who want treatments such as skin rejuvenation, injectables, laser, body contouring or facials. It covers your website, Google Business Profile, reviews, before and after content, AI answers, social media and the way your team handles every enquiry, all within UK advertising rules."
          },
          {
              "type": "p",
              "text": "A med spa sits between a clinic and a salon. Patients expect clinical skill and a calm, premium experience, and they judge both before they ever phone you. That makes medical spa marketing a trust job first and a traffic job second."
          },
          {
              "type": "p",
              "text": "Google's own AI Overview for \"medical spa marketing\" says the same thing. It describes the work as blending clinical trust with a high-end retail experience, then lists local search and Google Business Profile first. For general healthcare marketing across doctors and clinics, our guide to [digital marketing for doctors](/insights/digital-marketing-for-doctors) covers the wider picture. This guide stays on med spas."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-1-ai-overview.jpg",
              "alt": "Google UK AI Overview for the search medical spa marketing, saying it blends clinical trust with high-end retail experience and listing local SEO and Google Business Profile first",
              "caption": "The Google UK AI Overview for \"medical spa marketing\", 16 November 2026."
          },
          {
              "type": "h2",
              "text": "Why does medical spa marketing matter more in 2027?"
          },
          {
              "type": "p",
              "text": "It matters because patients choose a med spa on trust signals they can check online, and AI summaries now sit between your website and the search result. If your reviews, proof and profile are weak, you lose the booking before anyone visits your site."
          },
          {
              "type": "p",
              "text": "The [Professional Standards Authority](https://www.professionalstandards.org.uk/node/1857) commissioned Censuswide to survey 1,000 UK adults in June and July 2026. Among people seeking Botox, fillers or other non-surgical cosmetic treatments, 36% said five-star reviews influence them, and 29% said they rely on before and after photos or testimonials on social media."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-chart-psa-reviews.jpg",
              "alt": "Stat card showing 36% of UK adults seeking non-surgical cosmetic treatments say five-star reviews influence them, from the Professional Standards Authority and Censuswide, July 2026",
              "caption": "36% of people seeking non-surgical treatments say five-star reviews influence them (Professional Standards Authority, 2026)."
          },
          {
              "type": "p",
              "text": "Search has changed too. [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults across 68,879 Google searches in March 2025. Users clicked a traditional result in 8% of visits when an AI summary appeared and 15% when it did not."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-chart-pew-clicks.jpg",
              "alt": "Columns comparing clicks on a normal Google result: 15% without an AI summary and 8% with an AI summary, from Pew Research Center",
              "caption": "Clicks on normal results fell from 15% to 8% when an AI summary showed (Pew Research Center, 2025)."
          },
          {
              "type": "p",
              "text": "For your med spa, that means fewer casual clicks and a bigger prize for being named inside the answer. Our guides on [ranking in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) and [ranking in ChatGPT](/insights/how-to-rank-in-chatgpt) explain how that works."
          },
          {
              "type": "h2",
              "text": "How do patients choose a med spa?"
          },
          {
              "type": "p",
              "text": "Patients choose a med spa by checking three things: whether other patients trust it, who will perform the treatment and how qualified they are, and whether the results look real. We asked ChatGPT with web search the same question and it gave the same three answers."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-5-chatgpt.jpg",
              "alt": "ChatGPT answer to the question what are the top 3 things people check before choosing a med spa or aesthetic clinic in the UK, listing reviews, practitioner qualifications and before and after results",
              "caption": "ChatGPT with web search, 16 November 2026. The prompt did not mention MAAI or any clinic."
          },
          {
              "type": "p",
              "text": "Your marketing has to answer each of those checks in plain sight:"
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Trust and reputation.",
                      "text": "Show your Google rating, review count and real patient comments on your site and profile."
                  },
                  {
                      "lead": "Practitioner qualifications.",
                      "text": "Name every practitioner, their registration and their training on the treatment page, not on a hidden team page."
                  },
                  {
                      "lead": "Visible results.",
                      "text": "Publish consented before and after photos and explain the treatment, the number of sessions and what is realistic."
                  }
              ]
          },
          {
              "type": "h3",
              "text": "What do the top local results look like?"
          },
          {
              "type": "p",
              "text": "The top local results for a treatment search are dominated by clinics with hundreds or thousands of reviews. For \"botox clinic london\" on Google UK, the three clinics in the local results had between 916 and 1,700 reviews and ratings of 4.9 to 5.0."
          },
          {
              "type": "table",
              "head": [
                  "Clinic (Google UK local results)",
                  "Rating",
                  "Reviews"
              ],
              "rows": [
                  [
                      "Harley Street Dermal",
                      "5.0",
                      "1.7k"
                  ],
                  [
                      "Harley Street Injectables",
                      "4.9",
                      "1.2k"
                  ],
                  [
                      "Dermis Clinics",
                      "5.0",
                      "916"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "We checked this on 16 November 2026. Review volume and a high rating go together in the results that win the most bookings, so a steady review routine is not optional. We cover the routine in step 3 below."
          },
          {
              "type": "h2",
              "text": "What do people search for before booking a med spa?"
          },
          {
              "type": "p",
              "text": "People search for the treatment and the place, not for the words \"med spa\". Google Trends for the United Kingdom over five years shows \"botox\" and \"lip filler\" far above \"med spa\", which barely registers. The label that is common in the US is not how most UK patients look for you."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-4-google-trends.jpg",
              "alt": "Google Trends UK, five years to November 2026, comparing botox, lip filler and med spa, with botox highest, lip filler lower and med spa close to zero",
              "caption": "Google Trends, United Kingdom, five years to 16 November 2026. Trends shows relative interest, not search volume."
          },
          {
              "type": "p",
              "text": "Questions matter too. Google's People Also Ask for \"medical spa marketing\" includes \"How to market a medical spa?\", \"What are the current trends in the med spa industry?\" and \"How to get clients for Med spa?\". Those are the questions owners ask. Patients ask different ones, such as \"is it safe\", \"how long does it last\" and \"how much does it cost\", so answer those on your treatment pages."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-2-people-also-ask.jpg",
              "alt": "Google UK People Also Ask box for medical spa marketing with four questions including how to market a medical spa and how to get clients for med spa",
              "caption": "Google UK People Also Ask for \"medical spa marketing\", 16 November 2026."
          },
          {
              "type": "p",
              "text": "Use both terms. Put the treatment and location in your page titles and headings, and use \"medical spa\" or \"med spa\" where it describes your business, because that is also how US-style directories and AI answers describe it."
          },
          {
              "type": "h2",
              "text": "What are the UK advertising rules for medical spa marketing?"
          },
          {
              "type": "p",
              "text": "The biggest rule is that prescription-only medicines cannot be advertised to the public in the UK. That includes botulinum toxin, so a med spa cannot promote \"Botox\" in an advert, and the Advertising Standards Authority (ASA) treats indirect references as a breach too."
          },
          {
              "type": "p",
              "text": "In its ruling on Therapie Clinic's Facebook ad, summarised by the [Joint Council for Cosmetic Practitioners](https://jccp.org.uk/NewsEvent/asa-ruling-on-therapie-clinic-uks-facebook-ad-advertising-prescription-only-medicines-to-the-public), the ASA found that a \"Cosmetic Injections\" offer indirectly advertised a prescription-only medicine because the treatments were mainly botulinum toxin injections. The ASA has also ruled against ads that used the phrase \"anti-wrinkle injection\" as a stand-in."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-6-asa-guidance.jpg",
              "alt": "ASA and CAP guidance page on the marketing of surgical and non-surgical cosmetic procedures, noting rules that stop cosmetic intervention ads being targeted at under-18s",
              "caption": "The ASA and CAP guidance on marketing cosmetic procedures, captured 16 November 2026."
          },
          {
              "type": "p",
              "text": "The same [ASA and CAP guidance](https://www.asa.org.uk/advice-online/cosmetic-interventions.html) covers exaggerated or unrealistic claims, including through before and after images, and the use of titles such as \"surgeon\". CAP Code rule 12.25 also bans targeting cosmetic intervention ads at under-18s, so check your paid social audience settings."
          },
          {
              "type": "compare",
              "title": "Safer and riskier ways to advertise injectables",
              "columns": [
                  {
                      "title": "Safer",
                      "tone": "good",
                      "items": [
                          "Promote a consultation with a prescriber",
                          "Describe the concern, such as frown lines, rather than a named prescription medicine",
                          "Use real, consented before and after photos with a fair caption",
                          "Name the qualified practitioner and their registration"
                      ]
                  },
                  {
                      "title": "Riskier",
                      "tone": "bad",
                      "items": [
                          "Naming Botox or another prescription-only medicine in an advert",
                          "Offers such as \"3 areas for a set price\" that point to a prescription medicine",
                          "Edited or filtered results photos",
                          "Targeting paid social at under-18s"
                      ]
                  }
              ]
          },
          {
              "type": "callout",
              "variant": "warning",
              "title": "Check before you publish",
              "text": "This is a marketing guide, not legal advice. Your treatment pages and organic content also need care, so ask your prescriber and your insurer, and read the current ASA and CAP guidance, before you publish any injectables content."
          },
          {
              "type": "h2",
              "text": "How to market a medical spa: step by step"
          },
          {
              "type": "p",
              "text": "The plan below follows the way patients decide: be found, be trusted, be easy to book. Do the steps in order, because later steps depend on the earlier ones."
          },
          {
              "type": "h3",
              "text": "Step 1: Build one page for every treatment"
          },
          {
              "type": "p",
              "text": "One strong page per treatment beats one long \"Services\" page. A patient searching for \"microneedling in Leeds\" wants a page about exactly that."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Name the treatment and the place.",
                      "text": "Put \"microneedling in Leeds\" in the title, H1 and first paragraph."
                  },
                  {
                      "lead": "Answer the first questions.",
                      "text": "Cover who it suits, how it works, sessions needed, downtime, risks, aftercare and a price guide."
                  },
                  {
                      "lead": "Show the practitioner.",
                      "text": "Add the name, registration and a short bio of the person who will treat the patient."
                  },
                  {
                      "lead": "Add a booking button.",
                      "text": "Make the next step obvious on every page, with a short form or booking calendar."
                  }
              ]
          },
          {
              "type": "h3",
              "text": "Step 2: Complete your Google Business Profile"
          },
          {
              "type": "p",
              "text": "Your Google Business Profile is the main way local patients find you, and it is the first item Google's AI Overview lists for med spa marketing. Complete every section and keep it current."
          },
          {
              "type": "image",
              "src": "/insights/medical-spa-marketing-3-map-pack.jpg",
              "alt": "Google UK local results for botox clinic london showing three clinics with ratings between 4.9 and 5.0 and between 916 and 1.7k reviews, plus a map",
              "caption": "Google UK local results for \"botox clinic london\", 16 November 2026."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Choose the right categories.",
                      "text": "Pick a main category that matches your core service and add secondary ones for other treatments."
                  },
                  {
                      "lead": "List every treatment.",
                      "text": "Add each service with a plain description, avoiding prescription medicine names in anything promotional."
                  },
                  {
                      "lead": "Upload real photos.",
                      "text": "Show the reception, treatment rooms and team. Skip stock images."
                  },
                  {
                      "lead": "Post updates.",
                      "text": "Share offers on non-prescription treatments, events and new equipment."
                  }
              ]
          },
          {
              "type": "p",
              "text": "Our [Google My Business guide for self storage](/insights/google-my-business-self-storage) walks through map ranking factors in detail. The same factors apply to a med spa."
          },
          {
              "type": "h3",
              "text": "Step 3: Collect reviews after every treatment"
          },
          {
              "type": "p",
              "text": "Reviews are the strongest trust signal in the data above, so ask for one from every happy patient while the result is fresh."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Ask the same day.",
                      "text": "Send a text with your Google review link within a few hours of the appointment."
                  },
                  {
                      "lead": "Reply to every review.",
                      "text": "Thank patients and respond calmly to criticism without sharing any health detail."
                  },
                  {
                      "lead": "Never buy or filter reviews.",
                      "text": "Fake or gated reviews break platform rules and damage trust."
                  }
              ]
          },
          {
              "type": "h3",
              "text": "Step 4: Publish proof that patients can check"
          },
          {
              "type": "p",
              "text": "Proof turns a browser into a booking. Use consented before and after photos, patient stories with permission, practitioner credentials and accreditations."
          },
          {
              "type": "p",
              "text": "The Professional Standards Authority accredits voluntary registers of practitioners, and the Save Face register is one example. Ask your practitioners which registers they belong to and show the logos and links on your site."
          },
          {
              "type": "h3",
              "text": "Step 5: Build local pages and local mentions"
          },
          {
              "type": "p",
              "text": "If you serve more than one area, build a page for each. A med spa in a city centre attracts patients from several neighbourhoods, and a page for each helps Google and AI assistants match you to the right search."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Write for the area.",
                      "text": "Mention travel, parking and nearby landmarks in plain language."
                  },
                  {
                      "lead": "Earn local mentions.",
                      "text": "Local magazines, wedding and events suppliers, gyms and wellness businesses can mention or link to you."
                  },
                  {
                      "lead": "Keep details consistent.",
                      "text": "Use one name, address and phone number on every profile and directory."
                  }
              ]
          },
          {
              "type": "h3",
              "text": "Step 6: Show up in AI answers"
          },
          {
              "type": "p",
              "text": "AI assistants recommend med spas that have clear treatment pages, strong reviews and mentions on other sites. Answer common questions in the first two sentences of each page and keep your facts consistent."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Write answer-first.",
                      "text": "Open each treatment page with a direct answer, then add detail."
                  },
                  {
                      "lead": "Name who you treat and where.",
                      "text": "\"Skin rejuvenation for adults in Bristol\" is easier to match than \"premium aesthetics\"."
                  },
                  {
                      "lead": "Keep content fresh.",
                      "text": "Update prices, practitioners and treatment details when they change."
                  }
              ]
          },
          {
              "type": "p",
              "text": "Our guides on [ranking in ChatGPT](/insights/how-to-rank-in-chatgpt) and [ranking in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) give the full method."
          },
          {
              "type": "h3",
              "text": "Step 7: Make booking easy and follow up fast"
          },
          {
              "type": "p",
              "text": "Many med spa bookings are lost after the click. Patients message several clinics, so the first useful reply often wins."
          },
          {
              "type": "list",
              "items": [
                  {
                      "lead": "Offer instant booking.",
                      "text": "Let patients book a consultation online at any hour."
                  },
                  {
                      "lead": "Reply quickly.",
                      "text": "Aim to answer every enquiry within an hour in opening hours."
                  },
                  {
                      "lead": "Follow up.",
                      "text": "Send a reminder and a short aftercare message, then invite a review."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "How do you measure medical spa marketing?"
          },
          {
              "type": "p",
              "text": "You measure medical spa marketing by counting booked consultations and treatments by source, not just visits. Set up tracking before you spend, so you can see which channel brings patients."
          },
          {
              "type": "table",
              "head": [
                  "What to track",
                  "Where to find it",
                  "What it tells you"
              ],
              "rows": [
                  [
                      "Consultation bookings by source",
                      "Your booking system and GA4",
                      "Which channels bring real patients"
                  ],
                  [
                      "Google Business Profile calls, directions and website clicks",
                      "Business Profile performance",
                      "How many local patients act on your listing"
                  ],
                  [
                      "Impressions and clicks for treatment pages",
                      "Google Search Console",
                      "Which treatments are found in search"
                  ],
                  [
                      "Review count and rating",
                      "Google Business Profile",
                      "Whether trust is growing"
                  ],
                  [
                      "Mentions in AI answers",
                      "Monthly manual checks in ChatGPT and Google",
                      "Whether assistants recommend you"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "Our guide to [tracking AI traffic for free](/insights/track-ai-traffic) shows how to set up GA4 and Search Console, and the [SEO report template](/insights/seo-report-template) shows what a monthly report should contain."
          },
          {
              "type": "h2",
              "text": "How much should a med spa spend on marketing?"
          },
          {
              "type": "p",
              "text": "There is no standard figure, so work backwards from the patients you want. This worked example is illustrative, not a benchmark."
          },
          {
              "type": "callout",
              "variant": "tip",
              "title": "Illustrative example",
              "text": "Suppose you want 20 new consultations a month and 1 in 2 consultations books a treatment. If your website turns 5 in every 100 visitors into an enquiry, you need about 400 visits a month. If your Google profile and reviews turn some of that into direct calls, you need fewer. Change the numbers to your own and the budget follows."
          },
          {
              "type": "h2",
              "text": "How long does medical spa marketing take to work?"
          },
          {
              "type": "p",
              "text": "Fixing your Google Business Profile and collecting reviews can lift enquiries within weeks. New treatment pages and local mentions usually take several months to build rankings, and AI visibility follows the same pattern because assistants favour pages that already rank and are mentioned elsewhere."
          }
      ],
      "faq": [
          {
              "q": "What is medical spa marketing?",
              "a": "Medical spa marketing is how a med spa gets found, trusted and booked by people who want aesthetic treatments. It covers your website, Google Business Profile, reviews, proof, AI answers and booking follow-up, all within UK advertising rules."
          },
          {
              "q": "How do med spas get more clients?",
              "a": "They get more clients through treatment and location pages that rank in search, a complete Google Business Profile, a steady flow of reviews, consented before and after proof and fast follow-up on every enquiry."
          },
          {
              "q": "Can a med spa advertise Botox in the UK?",
              "a": "No. Botox is a prescription-only medicine and the ASA does not allow it to be advertised to the public, including indirectly. A med spa can promote consultations without naming the medicine. Check current ASA and CAP guidance before publishing."
          },
          {
              "q": "Do reviews matter for a med spa?",
              "a": "Yes. The Professional Standards Authority found 36% of people seeking Botox, fillers or other non-surgical treatments said five-star reviews influence them, and the top local results for a treatment search have hundreds or thousands of reviews."
          },
          {
              "q": "Can a med spa appear in ChatGPT and Google AI answers?",
              "a": "Yes. AI assistants recommend med spas with clear treatment pages, strong reviews and mentions elsewhere. State who you treat and where, keep your details consistent and check the answers monthly."
          },
          {
              "q": "How long does medical spa marketing take to work?",
              "a": "Profile fixes and reviews can show results in weeks. Treatment pages, local mentions and AI visibility usually take several months of steady work."
          }
      ]
  },
  {
    "slug": "seo-report-template",
    "seoTitle": "SEO Report Template 2027: What to Include Each Month",
    "title": "SEO Report Template: What a Good Monthly SEO Report Should Show in 2027",
    "description": "Free SEO report template for 2027: the 7 sections a monthly SEO report needs, what to show first, how to read it and a checklist to judge your agency's report.",
    "date": "2026-11-16",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/seo-report-template-banner.jpg",
    "intro": "A good SEO report answers one question in the first minute: is search bringing in more business? Too many reports open with rankings and traffic charts and leave you to guess. This SEO report template gives you seven sections in the right order, shows real examples from Google, ChatGPT and Search Console, and ends with a checklist you can use on any report, including the one your agency sends you.",
    "tldr": [
      "An SEO report template is a repeatable layout for monthly results, with the business outcome first and the detail behind it.",
      "Use seven sections: summary, business results, organic traffic, search visibility, AI search visibility, technical health, and work done with next steps.",
      "Pew Research Center found people clicked a traditional result in 8% of visits with an AI summary against 15% without, so add AI visibility to the report.",
      "Pull clicks, impressions, click-through rate and average position from Search Console and compare with the previous period.",
      "Check any report with the ten-point checklist before you accept it."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is an SEO report template?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "An SEO report template is a ready-made layout for your monthly SEO results. It lists the sections to fill in each month, such as a summary, traffic, rankings, enquiries, technical health and next steps, so every report is built the same way and can be compared with the last one."
      },
      {
        "type": "p",
        "text": "Most templates are a spreadsheet, a slide deck or a dashboard. The format matters less than the questions the report answers. If a report cannot tell you whether SEO brought in more enquiries this month, it is a data dump, whatever it looks like."
      },
      {
        "type": "p",
        "text": "A search for \"seo report template\" in Google UK shows how crowded this space is. Whatagraph, Porter Metrics and Semrush all offer free layouts, and Google's AI Overview sums up the advice in one line: focus on business impact rather than vanity metrics."
      },
      {
        "type": "image",
        "src": "/insights/seo-report-template-1-google-results.jpg",
        "alt": "Google UK results for the search seo report template, showing free templates from Whatagraph, Porter Metrics and Semrush",
        "caption": "Google UK results for \"seo report template\", 16 November 2026."
      },
      {
        "type": "h2",
        "text": "What should a monthly SEO report include?"
      },
      {
        "type": "p",
        "text": "A monthly SEO report should include seven things: a one-paragraph summary, enquiries and sales from search, organic traffic, search visibility, AI search visibility, technical health and a plan for next month. Put the business result first and the supporting detail after it."
      },
      {
        "type": "p",
        "text": "Google's AI Overview for the same search lists a similar structure, starting with an executive summary and top-line results such as leads, conversions or revenue, then traffic, rankings, technical health and next steps."
      },
      {
        "type": "image",
        "src": "/insights/seo-report-template-2-ai-overview.jpg",
        "alt": "Google UK AI Overview for seo report template describing the core structure of an SEO report, starting with business impact and an executive summary",
        "caption": "The Google UK AI Overview for \"seo report template\" opens with business impact, 16 November 2026."
      },
      {
        "type": "p",
        "text": "We have kept the same order in the template below, with one addition most templates still skip: a section for how you appear in AI answers."
      },
      {
        "type": "h2",
        "text": "What are the 7 sections of a good SEO report template?"
      },
      {
        "type": "table",
        "head": [
          "Section",
          "What to show",
          "The question it answers"
        ],
        "rows": [
          [
            "1. Summary",
            "Three or four sentences: what changed, why, what happens next",
            "Is SEO working this month?"
          ],
          [
            "2. Business results",
            "Enquiries, calls, bookings or sales from organic search, compared with last month and last year",
            "Is search bringing in business?"
          ],
          [
            "3. Organic traffic",
            "Organic sessions and the top landing pages in Google Analytics 4",
            "Are the right people visiting?"
          ],
          [
            "4. Search visibility",
            "Clicks, impressions, click-through rate and average position in Search Console, split into brand and non-brand searches",
            "Are more people finding us on Google?"
          ],
          [
            "5. AI search visibility",
            "Whether your brand appears in AI Overviews and AI answers for your key searches, and which pages get cited",
            "Are we in the answers buyers read?"
          ],
          [
            "6. Technical health",
            "Indexing problems, page speed and crawl errors, only where something changed",
            "Is anything blocking us?"
          ],
          [
            "7. Work done and next steps",
            "Pages published, fixes made, links earned, then the plan and priorities for next month",
            "What did we do and what comes next?"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How do you write the summary and business results sections?"
      },
      {
        "type": "p",
        "text": "Write the summary last and keep it to a short paragraph a busy owner can read in a minute. Say what moved, the most likely reason and what you will do next. Then show business results straight after it, because that is what the report is for."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Name the result.",
            "text": "\"Organic enquiries rose from 18 to 24\" tells the reader more than \"traffic is up 12%\"."
          },
          {
            "lead": "Compare like with like.",
            "text": "Show this month against last month and against the same month last year, so seasonal swings do not mislead you."
          },
          {
            "lead": "Count the real conversions.",
            "text": "Use form fills, calls, bookings or sales that you record in Google Analytics 4 or your CRM, and say how each was counted."
          },
          {
            "lead": "Admit what fell.",
            "text": "A fall with a reason and a fix builds more trust than a report that only shows good news."
          }
        ]
      },
      {
        "type": "p",
        "text": "ChatGPT gives the same advice when asked what a small business owner needs from a monthly report. It frames the report around five questions, from whether more people are finding the business on Google to what happens next month."
      },
      {
        "type": "image",
        "src": "/insights/seo-report-template-3-chatgpt-report-contents.jpg",
        "alt": "ChatGPT answer to what a monthly SEO report should include for a small business owner, listing five questions the report should answer",
        "caption": "ChatGPT's answer to a neutral prompt about monthly SEO report contents, 16 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you report traffic and search visibility in Search Console?"
      },
      {
        "type": "p",
        "text": "Use Google Search Console for visibility and Google Analytics 4 for what visitors do next. Search Console shows how often your site appears in Google results and how often people click. Analytics shows what they did on your site and which visits turned into enquiries."
      },
      {
        "type": "h3",
        "text": "Which Search Console numbers belong in the report?"
      },
      {
        "type": "p",
        "text": "Four numbers: total clicks, total impressions, average click-through rate and average position. Open the Performance report, set the date range to the last month and compare it with the previous period. Then add a filter to separate brand searches from searches that do not include your name."
      },
      {
        "type": "steps",
        "title": "Pull the numbers in four steps",
        "items": [
          {
            "title": "Open the Performance report",
            "text": "In Search Console choose Performance, then Search results.",
            "path": "Search Console > Performance > Search results"
          },
          {
            "title": "Set the dates",
            "text": "Pick the last full month, then tick Compare and choose the previous period."
          },
          {
            "title": "Split brand from non-brand",
            "text": "Add a Query filter that excludes your company name, so you see searches from people who did not already know you."
          },
          {
            "title": "Note the pages",
            "text": "Open the Pages tab and record the five pages that earned the most clicks."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our own site is a fair example of why context matters. Over three months to 14 November 2026, maai.agency recorded 27 clicks from 3.49 thousand impressions, a click-through rate of 0.8% and an average position of 39.1. Impressions are climbing while position is still low, which is typical for a young site. A report that only said \"impressions are up\" would hide how few clicks that has produced."
      },
      {
        "type": "image",
        "src": "/insights/seo-report-template-4-search-console-performance.jpg",
        "alt": "Google Search Console Performance report for maai.agency over three months showing 27 clicks, 3.49k impressions, 0.8% click-through rate and average position 39.1",
        "caption": "MAAI's own Search Console Performance report, three months to 14 November 2026."
      },
      {
        "type": "stats",
        "title": "maai.agency in Search Console, three months to 14 November 2026",
        "items": [
          {
            "value": "27",
            "label": "total clicks"
          },
          {
            "value": "3.49k",
            "label": "total impressions"
          },
          {
            "value": "0.8%",
            "label": "average click-through rate"
          },
          {
            "value": "39.1",
            "label": "average position"
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you report AI search visibility?"
      },
      {
        "type": "p",
        "text": "Add a short AI section that records whether your brand is named or cited in AI Overviews and AI assistants for five to ten key searches. Impressions and clicks alone no longer tell the full story, because an answer can mention you without sending a visit."
      },
      {
        "type": "p",
        "text": "The reason is the way people click now. [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) found users clicked a traditional result in 8% of visits when an AI summary appeared, against 15% when it did not. A flat click line can therefore hide growing visibility, and a visibility line can hide falling clicks."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Pick your searches.",
            "text": "Choose five to ten questions your buyers ask, and keep the same list every month."
          },
          {
            "lead": "Record the result.",
            "text": "Note whether an AI Overview appears, whether you are named and which pages are cited."
          },
          {
            "lead": "Track AI visits.",
            "text": "Follow our guide to [tracking AI traffic for free](/insights/track-ai-traffic) to see AI referrals in Google Analytics 4."
          },
          {
            "lead": "Use a tool when the list grows.",
            "text": "Our comparison of [AI Overview trackers](/insights/ai-overviews-trackers) shows what to use once manual checks take too long."
          }
        ]
      },
      {
        "type": "p",
        "text": "If you want to understand the score some tools produce from these checks, read our explainer on what a [good SEO visibility score](/insights/seo-visibility-score) looks like, and for how to improve the result see how to [rank in Google AI Overviews](/insights/how-to-rank-in-ai-overviews)."
      },
      {
        "type": "h2",
        "text": "How do you check if your agency's SEO report is any good?"
      },
      {
        "type": "p",
        "text": "A good SEO report puts results first, explains every movement in plain English and ends with next steps you can approve. Check it against the list below before you accept it, and ask for changes if more than two items are missing."
      },
      {
        "type": "checklist",
        "title": "Ten checks for an SEO report",
        "items": [
          "**Enquiries come first.** Leads, calls or sales from search appear on page one.",
          "**A short summary.** You can read it in a minute and understand what changed.",
          "**Comparisons.** This month is shown against last month and last year.",
          "**Brand and non-brand are split.** You can see growth from people who did not already know you.",
          "**Pages are named.** You know which pages earn clicks and enquiries.",
          "**AI visibility is covered.** The report says whether you appear in AI answers.",
          "**Technical changes are explained.** Issues come with what was fixed.",
          "**Work done is listed.** You can see what was published, fixed or earned.",
          "**Next month's plan is clear.** Priorities are specific and ranked.",
          "**Rankings are in context.** Keyword positions support the story and do not replace it."
        ]
      },
      {
        "type": "h2",
        "text": "How often should you send or read an SEO report?"
      },
      {
        "type": "p",
        "text": "Send a short report every month and review it properly every quarter. Monthly checks catch problems early. SEO results build slowly, so quarterly reviews show the trend that a single month cannot, and they are the moment to agree changes to the plan."
      },
      {
        "type": "h2",
        "text": "Which free SEO report template should you start with?"
      },
      {
        "type": "p",
        "text": "Start with the layout above in a spreadsheet or a Google Looker Studio dashboard, then adapt it to your business. Search Engine Land, Whatagraph, Porter Metrics, Semrush and Swydo all publish free templates, and each connects Search Console and Google Analytics 4. Choose the one that lets you put enquiries on page one."
      },
      {
        "type": "p",
        "text": "Whichever you pick, change two things: move business results to the top and add the AI visibility section. Most templates still lead with rankings and traffic."
      }
    ],
    "faq": [
      {
        "q": "What is an SEO report template?",
        "a": "An SEO report template is a ready-made layout for monthly SEO results. It lists the sections to complete each month, such as a summary, enquiries, traffic, visibility, technical health and next steps, so reports are consistent and easy to compare."
      },
      {
        "q": "What should a monthly SEO report include?",
        "a": "It should include a short summary, enquiries or sales from search, organic traffic, Search Console clicks and impressions, AI search visibility, technical health and a plan for next month."
      },
      {
        "q": "How long should an SEO report be?",
        "a": "For a small business, two to four pages is enough. Put the summary and business results on the first page and keep the detail for the pages behind it."
      },
      {
        "q": "Which metrics matter most in an SEO report?",
        "a": "Enquiries and sales from organic search matter most. After that come clicks, impressions, click-through rate and average position from Search Console, and organic sessions from Google Analytics 4."
      },
      {
        "q": "How do you make an SEO report in Excel or Google Sheets?",
        "a": "Create one tab per section, export your Search Console and Google Analytics 4 data each month, paste it in and add a column that compares it with last month. Write the summary at the top."
      },
      {
        "q": "Can ChatGPT write an SEO report?",
        "a": "ChatGPT can help draft the summary and spot patterns in data you paste in, but you still need to pull the numbers from Search Console and Google Analytics 4 and check them yourself."
      },
      {
        "q": "Should an SEO report include AI search visibility?",
        "a": "Yes. Record whether your brand is named or cited in AI Overviews and AI assistants for a fixed list of key searches, because clicks alone no longer show how visible you are."
      }
    ]
  },
  {
    "slug": "logistics-marketing",
    "seoTitle": "Logistics Marketing 2027: How to Win More Clients",
    "title": "Logistics Marketing in 2027: How Freight and 3PL Companies Win More Clients",
    "description": "Logistics marketing for freight and 3PL companies in 2027: how buyers shortlist providers, a step-by-step plan, AI search visibility and how to measure results.",
    "date": "2026-11-16",
    "author": "team",
    "topics": [
      "B2B"
    ],
    "industries": [
      "Logistics"
    ],
    "image": "/insights/logistics-marketing-banner.jpg",
    "intro": "Most logistics sales are decided before the enquiry arrives. Buyers research online, build a shortlist and often favour a provider before they speak to anyone. Logistics marketing is the work that gets your freight or 3PL company onto that shortlist, in Google results, in AI answers and in the places buyers trust. This guide gives you a step-by-step plan, shows real examples from Google and ChatGPT, and explains how to measure what works.",
    "tldr": [
      "Logistics marketing gets a freight, 3PL or transport company found, trusted and chosen by shippers, in search and in AI answers.",
      "6sense found the winning vendor was on the buyer's Day One shortlist 95% of the time, so visibility before the enquiry decides most sales.",
      "Pew Research Center found users clicked a normal result in 8% of visits with an AI summary against 15% without.",
      "Build one page per service and lane, complete your Google Business Profile, publish proof, and earn mentions on trade sites.",
      "Track enquiries by source and check your AI visibility monthly."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is logistics marketing?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "Logistics marketing is the work a freight, 3PL or transport company does to get found, trusted and chosen by shippers who need to move goods. It covers your website, search visibility, AI answers, reviews, LinkedIn, case studies and the way your sales team follows up. It is separate from \"marketing logistics\", which means moving marketing materials around."
      },
      {
        "type": "p",
        "text": "Most logistics buyers are not browsing. A shipper has a container stuck, a tender to run or a supplier who has let them down, and they want a short list of providers they can trust. Logistics marketing makes sure your company is on that list before anyone picks up the phone."
      },
      {
        "type": "p",
        "text": "Google's own AI Overview for the search \"logistics marketing\" shows why the term needs this clarity. It opens with the physical distribution meaning of marketing logistics, then moves to agencies. Your content has to make clear which meaning you serve."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-1-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search logistics marketing, defining marketing logistics as the physical flow of goods, with source cards on the right",
        "caption": "The Google UK AI Overview for \"logistics marketing\", 16 November 2026."
      },
      {
        "type": "h2",
        "text": "Why does logistics marketing matter more in 2027?"
      },
      {
        "type": "p",
        "text": "It matters because buyers decide who is on the list before they speak to you, and AI summaries now sit between your website and the search result. If you are not visible at the research stage, you are not in the running at the quote stage."
      },
      {
        "type": "p",
        "text": "The [6sense](https://6sense.com/b2b-buyer-experience-report/) 2025 B2B Buyer Experience Report, based on nearly 4,000 buyers, found that 94% of buying groups ranked their preferred vendors before they contacted any of them, and that the eventual winner was on the buyer's Day One shortlist 95% of the time. In plain English: the sale is mostly won before the enquiry arrives."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-chart-6sense-shortlist.jpg",
        "alt": "Stat card showing 95% of winning vendors were already on the buyer's Day One shortlist, from the 6sense 2025 B2B Buyer Experience Report",
        "caption": "95% of winning vendors were already on the buyer's Day One shortlist (6sense, 2025)."
      },
      {
        "type": "p",
        "text": "Search itself has changed too. [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults across 68,879 Google searches in March 2025. Users clicked a traditional result in 8% of visits when an AI summary appeared and 15% when it did not."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-chart-pew-clicks.jpg",
        "alt": "Columns comparing clicks on a normal Google result: 15% without an AI summary and 8% with an AI summary, from Pew Research Center",
        "caption": "Pew Research Center found clicks on normal results fell from 15% to 8% when an AI summary showed."
      },
      {
        "type": "p",
        "text": "For your business, that means fewer casual clicks and a bigger prize for being named inside the answer. Our guides on [ranking in Google AI Overviews](/insights/how-to-rank-in-ai-overviews) and [ranking in ChatGPT](/insights/how-to-rank-in-chatgpt) cover that side in depth."
      },
      {
        "type": "h2",
        "text": "What do logistics buyers search for?"
      },
      {
        "type": "p",
        "text": "Logistics buyers search for a service plus a place, a lane or a problem: \"freight forwarder Manchester\", \"LCL shipping from China to the UK\", \"3PL for ecommerce\". Very few search for the word \"logistics\" on its own, so your pages should be built around the specific service and route."
      },
      {
        "type": "p",
        "text": "Google Trends gives a useful sense of scale. Over the five years to November 2026 in the UK, \"3pl\" averaged far higher interest than \"freight forwarder\" or \"logistics marketing\", and all three rose through 2025 and 2026. Trends shows relative interest, not search volume, so use it to compare terms rather than to forecast leads."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-4-google-trends.jpg",
        "alt": "Google Trends UK, five years to November 2026, comparing freight forwarder, 3pl and logistics marketing, with 3pl highest on average",
        "caption": "Google Trends, United Kingdom, five years to 16 November 2026."
      },
      {
        "type": "p",
        "text": "Questions matter as much as keywords. Google's People Also Ask for \"logistics marketing\" is a mix of definitions (\"What is logistic marketing?\", \"What are the 7 C's of logistics?\") and career questions. Both show readers who are still working out what the term means, which is a chance to write the clearest answer."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-2-people-also-ask.jpg",
        "alt": "Google UK People Also Ask box for logistics marketing listing four questions, including what is logistic marketing and what are the 7 C's of logistics",
        "caption": "People Also Ask for \"logistics marketing\" on Google UK, 16 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you market a logistics company? A step-by-step plan"
      },
      {
        "type": "p",
        "text": "Start with the pages and profiles buyers meet first, then add proof, then add reach. Work in this order so each step has something to build on."
      },
      {
        "type": "h3",
        "text": "Step 1: Build one page for every service and lane"
      },
      {
        "type": "p",
        "text": "One strong page per service beats one long \"Our services\" page. A shipper searching for \"pallet freight to Ireland\" wants a page about exactly that."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Name the service and the route.",
            "text": "Put \"LCL freight from China to the UK\" or \"temperature-controlled warehousing in Leeds\" in the title, H1 and first paragraph."
          },
          {
            "lead": "Answer the buyer's first questions.",
            "text": "Cover transit times, what is included, what affects the price, documents needed and how to get a quote."
          },
          {
            "lead": "Show who it is for.",
            "text": "Say whether you suit small importers, ecommerce brands or large contract customers, so the right buyer recognises themselves."
          },
          {
            "lead": "Add one clear next step.",
            "text": "A quote form or a named contact, placed above the fold and again at the end."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 2: Claim and complete your Google Business Profile"
      },
      {
        "type": "p",
        "text": "A complete Google Business Profile puts you on the map for searches that name a place. When we searched \"freight forwarder near me Manchester\" on Google UK, the results opened with a map of local providers and a list of Places, ahead of normal links."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-5-map-pack.jpg",
        "alt": "Google UK Places map for the search freight forwarder near me Manchester, showing local freight forwarding businesses and a customer review",
        "caption": "The local Places results for \"freight forwarder near me Manchester\" on Google UK, 16 November 2026."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Choose the right categories.",
            "text": "Use a primary category such as Freight forwarding service, then add secondary ones for services you really offer."
          },
          {
            "lead": "Ask for reviews after each job.",
            "text": "Reviews show up in the listing and give buyers proof at a glance."
          },
          {
            "lead": "Keep details identical everywhere.",
            "text": "Use the same name, address and phone number on your website, directories and social profiles."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 3: Publish proof, not slogans"
      },
      {
        "type": "p",
        "text": "Logistics is a trust purchase. Buyers hand over valuable goods and tight deadlines, so they look for evidence you have done this before."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Case studies.",
            "text": "Describe the problem, what you did and the result in numbers. Only publish what the customer has approved."
          },
          {
            "lead": "Process pages.",
            "text": "Explain how a shipment moves with you from booking to delivery, including who they can call when something goes wrong."
          },
          {
            "lead": "Accreditations and memberships.",
            "text": "List the ones you hold, such as trade body memberships and customs authorisations, on a page that is easy to find."
          },
          {
            "lead": "Original data.",
            "text": "Publish something others can cite, such as transit-time ranges on your main lanes or a yearly price guide."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 4: Use LinkedIn for people, not just the company page"
      },
      {
        "type": "p",
        "text": "Buying groups are made of named people: a finance lead, an operations manager, a founder. Posts from your own team, such as dock-side lessons, customs changes and lane updates, reach them more naturally than company announcements. Keep each post about one practical point."
      },
      {
        "type": "h3",
        "text": "Step 5: Earn mentions on trade sites and comparison pages"
      },
      {
        "type": "p",
        "text": "AI assistants and Google both lean on pages that already compare providers. Get your company named in industry bodies, trade press, supplier directories and honest \"best of\" lists in your niche. Pitch useful data or a comment on a real change, such as a new customs rule, rather than asking for a link."
      },
      {
        "type": "h3",
        "text": "Step 6: Follow up fast and track the source of every enquiry"
      },
      {
        "type": "p",
        "text": "Marketing only pays if enquiries get answered. Ask every new lead how they found you, record it in your CRM and look at the totals each month."
      },
      {
        "type": "h2",
        "text": "How do you get recommended by ChatGPT and other AI assistants?"
      },
      {
        "type": "p",
        "text": "You get recommended by being easy to understand, easy to verify and mentioned in more than one trusted place. We asked ChatGPT, with web search on, for the best UK freight forwarders for small businesses importing from China. It recommended specialists that handle shared containers, customs clearance and door-to-door delivery, and it showed ratings, location and the sources it used."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-3-chatgpt-freight-forwarders.jpg",
        "alt": "ChatGPT answer to the prompt best freight forwarders in the UK for small businesses shipping from China, showing a recommended specialist with rating, location and source",
        "caption": "ChatGPT with web search on, asked for UK freight forwarders for small businesses importing from China, 16 November 2026."
      },
      {
        "type": "p",
        "text": "Look at what that answer rewarded. It picked a company that says exactly who it serves, lists the services in plain bullets and has reviews and testimonials. That is the checklist for your own pages."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Say who you serve and where.** \"Small importers shipping from China to the UK\" is easier for an AI assistant to match than \"global logistics solutions\"."
          },
          {
            "text": "**Use short, direct answers.** Open each service page with a one or two sentence answer to the main question."
          },
          {
            "text": "**Collect reviews and testimonials.** Assistants often quote ratings and review snippets."
          },
          {
            "text": "**Keep your details consistent.** Use one company name, address and phone number across every profile."
          },
          {
            "text": "**Check that crawlers can reach you.** Make sure your robots.txt and any CDN or security settings do not block search and AI crawlers."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our [answer engine optimisation guide](/insights/answer-engine-optimisation) goes through these in more detail, and the [B2B SEO strategy](/insights/seo-for-b2b-companies) shows how they fit the wider buyer journey."
      },
      {
        "type": "h2",
        "text": "How should you split a logistics marketing budget?"
      },
      {
        "type": "p",
        "text": "Put money first into the pages and profiles that capture demand, then proof, then reach. The split below is an illustration to adapt, not a benchmark."
      },
      {
        "type": "table",
        "head": [
          "Priority",
          "What it covers",
          "Why it comes in this order"
        ],
        "rows": [
          [
            "1. Capture",
            "Service and lane pages, Google Business Profile, quote forms",
            "Buyers who already want your service can find and contact you"
          ],
          [
            "2. Proof",
            "Case studies, reviews, accreditations, process pages",
            "Shortlists are built on trust"
          ],
          [
            "3. Reach",
            "LinkedIn, trade press, digital PR, comparison-page mentions",
            "Gets you onto more shortlists and into AI answers"
          ],
          [
            "4. Paid",
            "Google Ads on high-intent searches",
            "Fills gaps while organic work builds"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure logistics marketing?"
      },
      {
        "type": "p",
        "text": "Measure enquiries and the revenue they bring, then check visibility as a supporting signal. Rankings alone can rise while leads stay flat."
      },
      {
        "type": "list",
        "items": [
          {
            "lead": "Enquiries by source.",
            "text": "Count quote requests and calls from search, AI assistants, LinkedIn, referrals and direct visits."
          },
          {
            "lead": "Search Console.",
            "text": "Track clicks and impressions for your service and lane pages."
          },
          {
            "lead": "AI visibility.",
            "text": "Run the same 20 buyer questions monthly in Google and ChatGPT and note whether you are named."
          },
          {
            "lead": "Sales outcome.",
            "text": "Record which enquiries became customers and what they were worth."
          }
        ]
      },
      {
        "type": "p",
        "text": "Google Search Console now includes a Generative AI features report (beta) that shows how often your pages appear in Google's AI features. In our own account it shows 158 impressions for maai.agency from 18 May to 16 November 2026. The report counts impressions only, so use it as a baseline and pair it with your own prompt checks."
      },
      {
        "type": "image",
        "src": "/insights/logistics-marketing-6-search-console-generative-ai.jpg",
        "alt": "Google Search Console Generative AI features report for maai.agency over 12 months, showing 158 total impressions on a daily line chart",
        "caption": "Google Search Console, Performance, Generative AI features (beta), maai.agency, 18 May to 16 November 2026."
      },
      {
        "type": "p",
        "text": "Our guides on [tracking AI traffic for free](/insights/track-ai-traffic) and [AI search monitoring tools](/insights/best-ai-search-monitoring-tools) show how to set this up."
      },
      {
        "type": "h2",
        "text": "What mistakes hold logistics marketing back?"
      },
      {
        "type": "compare",
        "title": "Common patterns",
        "columns": [
          {
            "title": "Do this",
            "tone": "good",
            "items": [
              "One page per service and lane",
              "Plain language about who you serve",
              "Case studies with real numbers",
              "Reviews collected after every job",
              "Enquiry source recorded every time"
            ]
          },
          {
            "title": "Avoid this",
            "tone": "bad",
            "items": [
              "One generic \"Services\" page",
              "Jargon such as \"end-to-end supply chain solutions\"",
              "Claims with no proof",
              "A Google profile that is half-filled",
              "Judging success by traffic alone"
            ]
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "What is logistics marketing?",
        "a": "Logistics marketing is how a freight, 3PL or transport company gets found, trusted and chosen by shippers. It covers your website, search visibility, AI answers, reviews, LinkedIn, case studies and sales follow-up."
      },
      {
        "q": "How do logistics companies get new customers?",
        "a": "They get new customers through service and lane pages that rank in search, a complete Google Business Profile, case studies, reviews, LinkedIn activity from named people, trade mentions and referrals, then fast follow-up on every enquiry."
      },
      {
        "q": "Is SEO worth it for a freight or 3PL company?",
        "a": "Yes. Buyers research providers online before they make contact, and 6sense found the winning vendor was on the buyer's Day One shortlist 95% of the time. SEO helps put you on that shortlist."
      },
      {
        "q": "Can a logistics company appear in ChatGPT answers?",
        "a": "Yes. ChatGPT with web search recommends companies with clear service pages, reviews and mentions on other sites. State who you serve, publish proof and keep your details consistent."
      },
      {
        "q": "How long does logistics marketing take to work?",
        "a": "Paid search can produce enquiries within weeks. Organic search and AI visibility usually take several months of steady work, because pages need to be crawled, ranked and mentioned elsewhere."
      },
      {
        "q": "What should a small logistics company do first?",
        "a": "Claim your Google Business Profile, then build one strong page for your main service and lane with a clear quote form. Add reviews and one case study next."
      }
    ]
  },
  {
      "slug": "ai-overviews-trackers",
      "seoTitle": "AI Overviews Trackers 2027: Best Tools Compared",
      "title": "Best AI Overview Trackers in 2027: Tools to Monitor Your Google AI Visibility",
      "description": "Compare the best AI Overviews trackers for 2027, free and paid: what to track, how to choose one and how to read your Google AI Overview results.",
      "date": "2026-11-14",
      "author": "team",
      "topics": [
          "AEO/GEO"
      ],
      "industries": [],
      "image": "/insights/ai-overviews-trackers-banner.jpg",
      "intro": "Your page can rank first on Google and still lose the click to an AI Overview, the AI summary above the results. The question is whether that summary names your brand or a competitor. An AI Overview tracker answers it by checking your searches every day or week and recording who Google quotes. This guide compares the best AI Overviews trackers in 2027, from free tools to agency platforms, and shows how to choose one and read the results.",
      "tldr": [
          "An AI Overview tracker checks your searches on a schedule and records whether Google shows an AI Overview, and whether your brand or pages are cited in it.",
          "Ahrefs found AI Overviews cut clicks to the top result by 58% and have a 70% chance of changing between checks, so a one-off search is not enough.",
          "Three trackers are free to start: the Ahrefs Free AI Overviews Tracker, SE Ranking (5 free checks a day) and a Seobility 14-day trial. OtterlyAI ($29 a month) and Peec AI (€85 a month) are low-cost paid options.",
          "Google Search Console's Generative AI features report is a free baseline, but it shows impressions only, not competitors or answer text.",
          "Read results as a trend over several weeks, then improve the pages that should be cited."
      ],
      "body": [
          {
              "type": "h2",
              "text": "What is an AI Overview tracker?"
          },
          {
              "type": "callout",
              "variant": "definition",
              "title": "Definition",
              "text": "An AI Overview tracker is a tool that checks a list of Google searches on a schedule, records whether Google shows an AI Overview for each one, and notes whether your brand or pages are mentioned or cited inside it. Many also keep a copy of the AI Overview text and show which competitors appear."
          },
          {
              "type": "p",
              "text": "Google's AI Overviews are the AI-written summaries that sit above the normal results. Your page can rank first below one and still lose the click, so a normal rank tracker only tells you half the story. An AI Overview tracker adds the missing half: who Google quotes, how often and for which searches."
          },
          {
              "type": "p",
              "text": "Google's own AI Overview for \"ai overviews trackers\" describes the job in the same way. It lists keyword and presence monitoring, citation and source analysis, competitor share of voice, content snapshots and traffic impact as the five things these tools do."
          },
          {
              "type": "image",
              "src": "/insights/aio-tracker-google-ai-overview.jpg",
              "alt": "Google UK AI Overview for the search ai overviews trackers, defining an AI Overview tracker and listing what trackers do, with source cards for AIclicks, SE Ranking and Ahrefs",
              "caption": "The Google UK AI Overview for \"ai overviews trackers\", 14 November 2026."
          },
          {
              "type": "h2",
              "text": "Why do you need an AI Overviews tracker?"
          },
          {
              "type": "p",
              "text": "You need one because AI Overviews cost clicks and change fast, and Google does not give you a keyword-level view of either. Ahrefs found that when an AI Overview appears, the top-ranking page gets 58% fewer clicks (December 2025 data), up from a 34.5% drop in its first study in April 2025. Its separate volatility study found the answers themselves keep moving."
          },
          {
              "type": "stats",
              "title": "Google AI Overviews: what Ahrefs has measured",
              "items": [
                  {
                      "value": "58%",
                      "label": "fewer clicks to the #1 result when an AI Overview shows (34.5% in April 2025)"
                  },
                  {
                      "value": "70%",
                      "label": "chance an AI Overview changes between two checks"
                  },
                  {
                      "value": "~2.15 days",
                      "label": "how long AI Overview content lasts on average"
                  },
                  {
                      "value": "45.5%",
                      "label": "of cited sources are new each time it changes"
                  }
              ],
              "source": {
                  "label": "Ahrefs",
                  "href": "https://ahrefs.com/blog/ai-overview-change/",
                  "note": "clicks study and volatility study, as published on its free AI Overviews Tracker page, read 14 November 2026"
              }
          },
          {
              "type": "p",
              "text": "In plain English: an AI Overview you check by hand on Monday may be a different answer, with different sources, by Wednesday. A one-off search tells you very little. A tracker repeats the check every day or week, so you see a trend instead of a lucky or unlucky snapshot."
          },
          {
              "type": "p",
              "text": "Google Search Console now has a separate Generative AI features report (beta). It is useful, but it shows impressions only, split by page, country, device and day. In our own account it shows 144 impressions for maai.agency between 18 May and 14 November 2026. It does not show which competitors are cited next to you, so it works as a baseline, not a tracker."
          },
          {
              "type": "image",
              "src": "/insights/aio-tracker-search-console-generative-ai.jpg",
              "alt": "Google Search Console Generative AI features report for maai.agency over 12 months, showing 144 total impressions on a daily line chart",
              "caption": "Google Search Console, Performance, Generative AI features (beta), maai.agency, 18 May to 14 November 2026. The report shows impressions only."
          },
          {
              "type": "h2",
              "text": "What are the best AI Overviews trackers in 2027?"
          },
          {
              "type": "p",
              "text": "The best AI Overviews tracker depends on your budget and on whether you already pay for an SEO suite. We checked each tool's own public page on 14 November 2026. Prices and limits change often, so confirm them before you buy."
          },
          {
              "type": "table",
              "head": [
                  "Tracker",
                  "Starting point",
                  "What it does for AI Overviews",
                  "Best suited to"
              ],
              "rows": [
                  [
                      "Ahrefs Free AI Overviews Tracker",
                      "Free, no signup",
                      "Preview of mentions over time, top 5 topics, top 5 cited domains and top 5 cited pages for a brand",
                      "A first look at your brand"
                  ],
                  [
                      "SE Ranking AI Overviews Tracker",
                      "Free check: 5 a day. Free trial, no card",
                      "Shows if an AI Overview appears for a keyword, where your site sits in it, and which sources and competitors are cited",
                      "Teams tracking keywords across several countries"
                  ],
                  [
                      "Seobility AI Overview Tracker",
                      "14-day free trial",
                      "Shows when an AI Overview appears for your tracked keywords, its full text, the cited websites and their order",
                      "Small sites that want the full answer text"
                  ],
                  [
                      "AIclicks",
                      "3-day free trial",
                      "Tracks AI Overview visibility, citations, competitor share of voice and AI-driven traffic through GA4",
                      "Teams that want traffic and visibility together"
                  ],
                  [
                      "SEOmonitor",
                      "Paid, see its pricing page",
                      "Daily tracking with click-impact estimates, full content snapshots and competitor detection",
                      "Agencies that report to clients"
                  ],
                  [
                      "Ahrefs Brand Radar",
                      "From £159 a month for chosen platforms, £560 for all platforms",
                      "Daily AI Overviews tracking, competitor benchmarking and custom prompts",
                      "Teams already on Ahrefs"
                  ],
                  [
                      "OtterlyAI",
                      "From $29 a month",
                      "Tracks Google AI Overviews with ChatGPT, Perplexity and Copilot, daily",
                      "Small businesses on a budget"
                  ],
                  [
                      "Peec AI",
                      "From €85 a month",
                      "Brand visibility, position and sentiment, with Google AI Overviews as one of the models you can pick",
                      "Marketing teams that want clean reports"
                  ]
              ]
          },
          {
              "type": "p",
              "text": "Prices for OtterlyAI and Peec AI are the Lite and Starter plans we checked on 12 November 2026 for our comparison of [AI search monitoring tools](/insights/best-ai-search-monitoring-tools), which also covers Semrush, SE Visible and Profound."
          },
          {
              "type": "h3",
              "text": "Which AI Overview tracker is free?"
          },
          {
              "type": "p",
              "text": "Three are free to start. The Ahrefs Free Google AI Overviews Tracker needs no signup and gives a limited preview for one brand. SE Ranking lets you run 5 free keyword checks a day, with your country, language and desktop or mobile. Seobility gives a 14-day trial. All three are enough to learn what an AI Overview tracker shows before you pay for anything."
          },
          {
              "type": "image",
              "src": "/insights/aio-tracker-ahrefs-free-tool.jpg",
              "alt": "Ahrefs Free Google AI Overviews Tracker page with a brand name box, a check button and the text no signup required, results in seconds",
              "caption": "The free Google AI Overviews Tracker from Ahrefs, 14 November 2026. The free check shows a limited preview and sometimes asks you to confirm you are human."
          },
          {
              "type": "h3",
              "text": "Which AI Overview tracker suits an agency or a larger team?"
          },
          {
              "type": "p",
              "text": "SEOmonitor, Ahrefs Brand Radar and SE Ranking suit teams that report to clients or run many keywords, because they keep daily history and compare competitors. Brand Radar's published prices are from £159 a month for chosen platforms and £560 a month for all platforms, before tax. It also lets you add your own prompts, so you can follow the exact questions your buyers ask."
          },
          {
              "type": "h3",
              "text": "Which AI Overview tracker suits a small business?"
          },
          {
              "type": "p",
              "text": "OtterlyAI and Peec AI are the clearest low-cost starts, at $29 and €85 a month. They track Google alongside other AI assistants, which helps if your customers use more than one. If you only care about Google, the free tools above plus a monthly check are a sound start."
          },
          {
              "type": "h3",
              "text": "Do AI Overview trackers agree with each other?"
          },
          {
              "type": "p",
              "text": "No, and the lists you read about them do not agree either. We asked Google and ChatGPT the same question on 14 November 2026. Google's AI Overview named Ahrefs, SE Ranking, Seobility, AIclicks, SEOmonitor and Keyword.com. ChatGPT, with web search on, named OtterlyAI, Peec AI, Semrush, Ahrefs Brand Radar and Profound. Only Ahrefs appeared in both."
          },
          {
              "type": "image",
              "src": "/insights/aio-tracker-chatgpt-answer.jpg",
              "alt": "ChatGPT answer with web search on to a request for the best tools to track a brand in Google AI Overviews, with a table of Otterly.AI, Peec AI, Semrush, Ahrefs Brand Radar and Profound with prices",
              "caption": "ChatGPT's answer to \"What are the best tools to track a brand in Google AI Overviews? Give a top 5 with prices\", 14 November 2026."
          },
          {
              "type": "p",
              "text": "That gap is the reason this category exists. What an AI assistant recommends depends on which assistant you ask, how you word the question and the day you ask. Treat any single list, including ours, as a starting shortlist and check each tool's own page."
          },
          {
              "type": "h2",
              "text": "What should an AI Overview tracker show you?"
          },
          {
              "type": "p",
              "text": "A useful AI Overview tracker answers five questions about each search you follow: does an AI Overview appear, are you mentioned, are you cited, who else is cited and how has that changed. If a tool cannot answer all five, you will end up checking by hand."
          },
          {
              "type": "checklist",
              "title": "The five things to look for",
              "items": [
                  "**AI Overview presence.** Which of your keywords trigger an AI Overview, so you know where it matters.",
                  "**Your mentions and citations.** Whether the answer names your brand and whether it links to your page. These are different.",
                  "**Competitors and cited sources.** Which brands and websites Google trusts for the topic.",
                  "**Full text snapshots.** A saved copy of each answer, so you can see how it changed.",
                  "**History by country and device.** AI Overviews vary by location, so a UK check and a US check can differ."
              ]
          },
          {
              "type": "p",
              "text": "Also look at the difference between keyword-based and prompt-based tracking. Keyword tracking follows short searches such as \"ai overviews trackers\". Prompt tracking follows full questions, the way people talk to AI. Ahrefs runs both indexes in Brand Radar, and the best set-up for most businesses uses both."
          },
          {
              "type": "h2",
              "text": "How do you choose an AI Overview tracker?"
          },
          {
              "type": "p",
              "text": "Choose the tracker that covers the countries you sell in, fits your budget and shows the five items above. Start with a free tool, then move to a paid one only when you have more keywords than you can check by hand."
          },
          {
              "type": "steps",
              "title": "Choose in four steps",
              "items": [
                  {
                      "title": "List 20 to 30 searches your buyers use",
                      "text": "Mix short keywords with full questions. Include the searches that bring you leads today, not only broad topics."
                  },
                  {
                      "title": "Run them through a free tool first",
                      "text": "Use the Ahrefs and SE Ranking free checks or a Seobility trial. Note how many of your searches trigger an AI Overview at all."
                  },
                  {
                      "title": "Compare two paid tools on the same list",
                      "text": "Most offer a trial. Run the same searches in both and see which shows citations and competitors more clearly."
                  },
                  {
                      "title": "Check price per tracked search",
                      "text": "Divide the monthly price by the number of searches or prompts it covers, and confirm whether Google AI Mode is included or an add-on."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "How do you track AI Overviews for free?"
          },
          {
              "type": "p",
              "text": "You can track AI Overviews for free with Google Search Console, the free checks above and a monthly manual routine. It takes about an hour and gives you a trend without any subscription."
          },
          {
              "type": "steps",
              "title": "A free monthly routine",
              "items": [
                  {
                      "title": "Open the Generative AI report",
                      "path": "Search Console > Performance > Generative AI",
                      "text": "Set the range to 3 months and note the impressions. This is your baseline for how often Google shows your pages in AI features."
                  },
                  {
                      "title": "Run your searches on Google",
                      "text": "Search each keyword in a private window with the same country and language settings every month. Write down whether an AI Overview appears and whether you are named."
                  },
                  {
                      "title": "Save the answer and its sources",
                      "text": "Copy the text and the cited sites into a sheet with the date. Over three months you will see which sources keep returning."
                  },
                  {
                      "title": "Run the free tools on your brand",
                      "text": "Use the Ahrefs free tracker for your brand name and a SE Ranking check for your top keywords. Add the results to the same sheet."
                  },
                  {
                      "title": "Compare with your traffic",
                      "text": "Match the months against organic clicks and sessions from AI assistants in Google Analytics 4. Our guide to [tracking AI traffic for free](/insights/track-ai-traffic) shows the set-up."
                  }
              ]
          },
          {
              "type": "h2",
              "text": "How do you read your AI Overview tracker results?"
          },
          {
              "type": "p",
              "text": "Read them as a trend over weeks, never as a verdict from one day. Because an AI Overview has a 70% chance of changing between checks, a single missing mention means little. Three or four weeks in a row of being absent for a search that matters is the signal to act."
          },
          {
              "type": "compare",
              "title": "Reading a result",
              "columns": [
                  {
                      "title": "Worth acting on",
                      "tone": "good",
                      "items": [
                          "A valuable search where an AI Overview shows and you are never cited",
                          "The same competitor cited for several weeks",
                          "Your impressions in Search Console falling while the number of AI Overviews rises"
                      ]
                  },
                  {
                      "title": "Not worth acting on",
                      "tone": "bad",
                      "items": [
                          "One missing mention on a single day",
                          "A different list of cited sources after a few days",
                          "A tool disagreeing with another tool or with your own search"
                      ]
                  }
              ]
          },
          {
              "type": "p",
              "text": "Track your visibility score alongside these checks. Our guide to the [SEO visibility score](/insights/seo-visibility-score) explains how to read it in Google and AI search."
          },
          {
              "type": "h2",
              "text": "What should you do when an AI Overview tracker shows you are missing?"
          },
          {
              "type": "p",
              "text": "Improve the page that should be cited, then recheck after a few weeks. AI Overviews pull from pages Google already trusts, so the work is the same as ranking: answer the question in the first lines, cover the related questions and earn mentions elsewhere. Our guide to [ranking in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) lists the steps, and our guide to [tracking brand mentions in AI search](/insights/best-ways-to-track-brand-mentions-in-ai-search) covers what happens outside Google."
          },
          {
              "type": "p",
              "text": "If you would rather not appear at all, see how to [turn off AI Overviews on Google](/insights/how-to-turn-off-ai-overview-google), which also covers the site owner opt-out."
          },
          {
              "type": "image",
              "src": "/insights/aio-tracker-people-also-ask.jpg",
              "alt": "Google UK People Also Ask box for the search ai overviews trackers, with the questions how to track AI Overviews, can AI Overviews be trusted, how to avoid AI Overviews and how do I turn off AI tracking",
              "caption": "The People Also Ask questions under \"ai overviews trackers\" on Google UK, 14 November 2026."
          }
      ],
      "faq": [
          {
              "q": "How do you track AI Overviews?",
              "a": "Use a tracker that runs your searches on a schedule and records whether an AI Overview appears and whether you are cited, such as the Ahrefs free tracker, SE Ranking, Seobility or SEOmonitor. For a free start, add Google Search Console's Generative AI features report and a monthly manual check on Google."
          },
          {
              "q": "Is there a free AI Overview tracker?",
              "a": "Yes. Ahrefs offers a free Google AI Overviews Tracker with no signup, SE Ranking gives 5 free keyword checks a day and Seobility has a 14-day free trial. The free versions show a limited preview."
          },
          {
              "q": "Does Google Search Console track AI Overviews?",
              "a": "Search Console has a Generative AI features report (beta) that shows impressions by page, country, device and day. It does not show competitors or the full AI Overview text, so it works as a baseline next to a tracker."
          },
          {
              "q": "Can AI Overviews be trusted?",
              "a": "Treat them as a starting point. Google marks AI responses as possibly containing mistakes, and Ahrefs found they change often, so check important facts at the source."
          },
          {
              "q": "What is the difference between an AI Overview tracker and an AI Mode tracker?",
              "a": "AI Overviews are the summary above the normal results, with the usual links below. AI Mode is a separate conversational experience with fewer sources. They trigger on different searches and cite different sources, so a brand can appear in one and not the other, and some trackers cover both."
          },
          {
              "q": "How often should you check AI Overviews?",
              "a": "Daily or weekly with a paid tracker, monthly by hand. Because the answers change within days, repeat checks over several weeks before you judge a result."
          },
          {
              "q": "How can you avoid AI Overviews?",
              "a": "You can use the Web filter or add -ai to a search, and site owners can limit how their content is used. Our guide to turning off AI Overviews on Google explains each method."
          }
      ]
  },
  {
    "slug": "digital-marketing-for-doctors",
    "seoTitle": "Digital Marketing for Doctors in 2027: Get More Patients",
    "title": "Digital Marketing for Doctors in 2027: How Clinics Get More Patients",
    "description": "Digital marketing for doctors explained: set up your website and Google Business Profile, win reviews, follow GMC and ASA rules and get named in AI answers.",
    "date": "2026-11-13",
    "author": "team",
    "topics": [
      "Everything Marketing"
    ],
    "industries": [],
    "image": "/insights/digital-marketing-for-doctors-banner.jpg",
    "intro": "Before a patient rings your clinic, they search. They type \"private gp near me\", compare a handful of listings on star ratings and, more and more often, ask an AI assistant who to trust. This guide explains digital marketing for doctors in plain English: what to set up, what the GMC and advertising rules allow and how to get more patients from Google and AI search.",
    "tldr": [
      "Digital marketing for doctors means helping patients find, trust and book your practice through your website, Google Business Profile, reviews, content, ads and AI answers.",
      "In the rater8 2026 US survey, 55% of patients had avoided a provider because of online reviews and 47% had used AI to research providers.",
      "Doctors stay responsible for all advertising, including work done by an agency: be honest, never guarantee results and protect patient confidentiality.",
      "Start with a complete Google Business Profile, a website with one page per service and a steady flow of reviews, then add content, AI checks and paid ads.",
      "Measure calls, bookings and direction requests, and never send patient details into analytics or ad tools."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is digital marketing for doctors?"
      },
      {
        "type": "p",
        "text": "Digital marketing for doctors is the work of helping patients find, trust and book your practice online. It covers your website, your Google Business Profile, patient reviews, helpful medical content, paid ads and, increasingly, how AI assistants describe your clinic. Every part has to follow the advertising rules that apply to doctors."
      },
      {
        "type": "p",
        "text": "Google's own AI Overview for this search sums it up as helping doctors and medical practices attract new patients, build online trust and stand out in local search. We agree with that, and in this guide we show how to do it step by step for a UK private practice, a specialist clinic or a group of clinics."
      },
      {
        "type": "image",
        "src": "/insights/doctors-ai-overview.jpg",
        "alt": "Google UK AI Overview for the search digital marketing for doctors, saying digital marketing helps doctors attract new patients, build online trust and stand out in local search",
        "caption": "Google UK AI Overview for \"digital marketing for doctors\", 13 November 2026."
      },
      {
        "type": "h2",
        "text": "Why does digital marketing matter for doctors and clinics?"
      },
      {
        "type": "p",
        "text": "It matters because patients now research a clinic online before they ring or book, and they judge you in seconds on what they find. The strongest figures we could find come from the [rater8 2026 Patient Choice Report](https://rater8.com/2026-patient-choice-report/), a survey of 992 US adults in April 2026. The behaviour it describes is very likely to be similar for UK patients, but it is US data, so treat it as a guide."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**\"Specialty near me\" is the most common first search.** 55% of patients who searched typed a version of it."
          },
          {
            "text": "**Reviews decide bookings.** 55% had cancelled or avoided booking with a provider because of online reviews, up from 40% a year earlier."
          },
          {
            "text": "**AI is now part of the journey.** 47% had used AI tools to research providers, up from 31% in 2025."
          }
        ]
      },
      {
        "type": "p",
        "text": "In plain English: patients search for a type of doctor close to them, compare a short list on reviews, and more and more of them ask an AI assistant before they choose. If your clinic is missing from any of those three places, a competitor gets the booking."
      },
      {
        "type": "p",
        "text": "We tested the same question ourselves. When we asked ChatGPT how patients choose a private GP or clinic in the UK, it said they are usually weighing up access, trust and convenience, and that ranking on Google is only half the job because the website must also convince someone to book."
      },
      {
        "type": "image",
        "src": "/insights/doctors-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to how patients choose a private GP or clinic in the UK, listing access, trust and convenience and showing survey figures on why people use private healthcare",
        "caption": "ChatGPT's answer (web search on) to \"How do patients choose a private GP or clinic in the UK? What should a clinic do to get found online?\", 13 November 2026."
      },
      {
        "type": "h3",
        "text": "Do UK patients search for \"private GP\" or \"private doctor\"?"
      },
      {
        "type": "p",
        "text": "Both, but \"private GP\" is searched more. In Google Trends data for the UK over the past 12 months, \"private gp\" sits well above \"private doctor\" for almost the whole period. Use the words patients use in your page titles and headings, and mention the other term naturally on the page."
      },
      {
        "type": "image",
        "src": "/insights/doctors-google-trends.jpg",
        "alt": "Google Trends chart for the UK over 12 months comparing search interest in private gp and private doctor, with private gp consistently higher",
        "caption": "Google Trends, UK, past 12 months: \"private gp\" (blue) against \"private doctor\" (red), 13 November 2026."
      },
      {
        "type": "h2",
        "text": "What are the rules for advertising as a doctor in the UK?"
      },
      {
        "type": "p",
        "text": "Doctors must advertise honestly. Medical Protection, the doctors' defence organisation, says that whichever route you choose, you are responsible for making sure information about you and your services follows the law, the regulatory codes that govern advertising and General Medical Council (GMC) guidance. That applies even when an agency or a clinic runs the marketing for you."
      },
      {
        "type": "image",
        "src": "/insights/doctors-medical-protection.jpg",
        "alt": "Medical Protection article Advertising your practice, saying it is your responsibility to ensure information about you and your services complies with the law, regulatory codes and GMC guidance",
        "caption": "Medical Protection's guidance \"Advertising your practice\", last updated 28 February 2025."
      },
      {
        "type": "p",
        "text": "The same guidance sets out the points every campaign should respect. Check each of them before any page, post or advert goes live."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Be truthful and verifiable.** Advertising must not mislead or exploit a patient's limited medical knowledge or vulnerability."
          },
          {
            "text": "**Do not pressure people.** Services should not be offered as prizes, and time-limited offers or two-for-one deals should be avoided."
          },
          {
            "text": "**Never guarantee results.** For cosmetic interventions, marketing must not minimise risks or call a procedure risk-free."
          },
          {
            "text": "**Protect confidentiality.** Do not share identifiable patient information without explicit consent, because anonymised details can still identify someone when combined."
          },
          {
            "text": "**Disclose interests.** Financial or other interests that could influence what you recommend should be declared."
          },
          {
            "text": "**Follow the advertising codes.** The Advertising Standards Authority (ASA) applies the CAP Code, which includes an absolute ban on advertising prescription-only medicines to the public."
          }
        ]
      },
      {
        "type": "p",
        "text": "If your clinic is registered with the Care Quality Commission (CQC) in England and has a rating, CQC regulation 20A requires you to display it on your website, with the date it was given and a link to CQC. Put it where visitors can see it, such as the footer and the contact page."
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "A note on this section",
        "text": "This is a summary of public guidance, not legal advice. Check the current GMC, ASA and CQC wording, or ask your defence organisation, before you publish treatment claims."
      },
      {
        "type": "h2",
        "text": "How do patients find a doctor online?"
      },
      {
        "type": "p",
        "text": "Patients find a doctor through four routes: Google search results, the Google map listings, AI answers and review or directory sites. A clinic that is easy to find in all four gets the most enquiries, so build for each one rather than relying on a single channel."
      },
      {
        "type": "h3",
        "text": "How do patients find a private GP in Google search?"
      },
      {
        "type": "p",
        "text": "They type the service and the place, such as \"private gp birmingham\". Google then shows a map with a short list of local clinics above the normal results. Each entry shows the star rating, the number of reviews, the opening hours and a line from a review. In our search the top listing showed a 5.0 rating from 632 reviews, which tells you how much weight reviews carry before a patient has even visited a website."
      },
      {
        "type": "image",
        "src": "/insights/doctors-map-pack.jpg",
        "alt": "Google UK search for private gp birmingham showing a map of local clinics and the top listing with a 5.0 star rating from 632 reviews",
        "caption": "Google UK map results for \"private gp birmingham\", 13 November 2026. Results vary by searcher and location."
      },
      {
        "type": "p",
        "text": "For a closer look at how local listings are won, see our guide to [Google My Business](/insights/google-my-business-self-storage). It is written for self storage, but the profile, review and local link steps are the same for a clinic."
      },
      {
        "type": "h3",
        "text": "What questions do patients and doctors ask Google?"
      },
      {
        "type": "p",
        "text": "People Also Ask boxes show the questions behind a search. Under \"how can doctors advertise their practice\" Google shows questions such as \"How to advertise a medical practice?\", \"Can doctors do advertising?\" and \"How do I advertise my private practice?\". Each one is a section or an FAQ answer waiting to be written."
      },
      {
        "type": "image",
        "src": "/insights/doctors-people-also-ask.jpg",
        "alt": "Google People Also Ask box for how can doctors advertise their practice, with questions about advertising a medical practice and a private practice",
        "caption": "People Also Ask under \"how can doctors advertise their practice\", Google UK, 13 November 2026."
      },
      {
        "type": "h2",
        "text": "How do you do digital marketing for doctors? Step by step"
      },
      {
        "type": "p",
        "text": "Start with the foundations that every patient touches (website, profile, reviews), then add content, AI visibility and paid ads. The order matters, because ads and content send people to a website and a profile that must already convince them."
      },
      {
        "type": "h3",
        "text": "1. How should a doctor's website be set up to win patients?"
      },
      {
        "type": "p",
        "text": "It needs one page per service, clear doctor profiles and an obvious way to book. Patients arrive on a phone, so the booking button, phone number and opening hours must be visible without scrolling."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**One page per service and per location.** Create separate pages for each treatment and each clinic, for example \"private GP appointments\", \"women's health clinic\" or \"minor surgery\". Name the town in the title and heading."
          },
          {
            "text": "**Doctor profiles with proof.** Show each doctor's name, photo, specialty, GMC number and a short bio. Patients and Google both look for who is behind the advice."
          },
          {
            "text": "**Fees and what to expect.** Publish consultation prices or a clear starting price where you can, plus how long the appointment lasts and what happens next."
          },
          {
            "text": "**Trust signals.** Show your CQC rating if you have one, your insurer and professional memberships, and an honest line on risks where a treatment carries them."
          },
          {
            "text": "**Fast, mobile-friendly pages.** Slow pages lose bookings. Run your key pages through Google's free PageSpeed Insights and fix the main issues."
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. How do you set up Google Business Profile for a clinic?"
      },
      {
        "type": "p",
        "text": "Claim and verify a profile for each clinic address, choose the most accurate primary category, and keep the hours, phone number and booking link correct. This profile is what appears in the map listings, so it often matters more than the website for \"near me\" searches."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Claim and verify each location.** Use the real clinic address. Do not create profiles for rooms patients cannot visit."
          },
          {
            "text": "**Pick the right categories.** Choose one primary category such as General practitioner or Medical clinic, then add secondary ones only for services you truly provide."
          },
          {
            "text": "**Add services and a booking link.** List each treatment with a short description, and link straight to the booking page."
          },
          {
            "text": "**Keep hours exact.** Include bank holidays. Patients see \"Open\" or \"Closes at\" before they click."
          },
          {
            "text": "**Post updates and add photos.** Show the reception, consulting rooms and team. Real photos build trust."
          }
        ]
      },
      {
        "type": "h3",
        "text": "3. How do you get more patient reviews?"
      },
      {
        "type": "p",
        "text": "Ask every patient, soon after the appointment, with a direct link. The rater8 report found 68% of patients would likely leave a review if their doctor asked, and 42% rarely or never leave one, so a polite request closes the gap."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Send the link by text or email after the visit.** Use the short link from your Google Business Profile."
          },
          {
            "text": "**Never reward reviews or only ask happy patients.** Google forbids both, and they undermine the trust you want."
          },
          {
            "text": "**Reply to every review, in a way that protects confidentiality.** Do not confirm that someone was a patient or discuss their care. Thank them and invite them to contact the clinic privately."
          }
        ]
      },
      {
        "type": "p",
        "text": "Replies matter too: 66% of patients in the survey said a provider's response to reviews affects their trust, up from 42% in 2025."
      },
      {
        "type": "image",
        "src": "/insights/doctors-review-rating-stat.jpg",
        "alt": "Stat card: 75 per cent of patients will not book a provider rated below 4.0 stars and 44 per cent will not book below 4.5 stars",
        "caption": "Source: rater8 2026 Patient Choice Report (US adults, n=992)."
      },
      {
        "type": "p",
        "text": "The chart shows why the star rating matters so much. A rating under 4.0 puts a clinic out of the running for three in four patients in that survey."
      },
      {
        "type": "h3",
        "text": "4. What content should a doctor publish?"
      },
      {
        "type": "p",
        "text": "Publish pages that answer the questions patients ask before they book, written or reviewed by a named doctor. Health is a topic where Google and AI assistants are cautious about whom they trust, so show who wrote or checked each page, add the date it was reviewed and keep it updated."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Condition and treatment pages.** Explain what it is, who it suits, what happens at the appointment, risks, recovery and the cost."
          },
          {
            "text": "**\"Should I see a doctor?\" guides.** Plain advice on when to book, and when to seek urgent care instead."
          },
          {
            "text": "**Local guides.** For example, how to see a private GP near a particular station, hospital or business district."
          },
          {
            "text": "**Short video.** A one-minute introduction from each doctor helps patients feel they know you before they arrive."
          }
        ]
      },
      {
        "type": "p",
        "text": "Write each section so it answers its heading in the first two sentences. This is the same answer-first structure we explain in our [answer engine optimisation guide](/insights/answer-engine-optimisation)."
      },
      {
        "type": "h3",
        "text": "5. How do you get a clinic named in AI answers?"
      },
      {
        "type": "p",
        "text": "Make sure the facts AI tools can read about your clinic are accurate, consistent and backed by reputable sources. AI assistants build answers from web pages, listings and mentions, so a clinic with a clear website, a complete Google profile and mentions on trusted sites is easier to describe correctly."
      },
      {
        "type": "p",
        "text": "The risk is real. In the rater8 survey, 66% of patients who had used AI to research providers met incorrect provider information, and 60% trusted the AI summary without checking it. Wrong opening hours or a service you no longer offer can go straight to a patient."
      },
      {
        "type": "image",
        "src": "/insights/doctors-ai-research-columns.jpg",
        "alt": "Column chart: share of patients using AI tools to research healthcare providers rose from 31 per cent in 2025 to 47 per cent in 2026",
        "caption": "Source: rater8 Patient Choice Reports 2025 and 2026 (US adults)."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Search your clinic in ChatGPT, Gemini and Google AI Overviews every month.** Use prompts patients would use, such as \"best private GP in [town]\". Note what each says and fix any errors at the source."
          },
          {
            "text": "**Keep your name, address, phone number and hours identical everywhere.** Use the same details on your website, Google profile and directories."
          },
          {
            "text": "**Earn mentions from trusted sites.** Local press, professional bodies, hospital partners and health directories all count."
          },
          {
            "text": "**Structure pages for answers.** Use question headings and short, direct answers. See how to rank in [Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) and [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt)."
          }
        ]
      },
      {
        "type": "h3",
        "text": "6. When should a doctor use Google Ads or social media?"
      },
      {
        "type": "p",
        "text": "Use paid ads once your website and profile convert well, and use social media to support trust rather than to sell. Paid search puts you in front of patients who are searching right now, which helps a new clinic or a new service that has no rankings yet."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google Ads.** Bid on service and location searches, send each ad to a matching service page and track calls and bookings. Health advertising is restricted on Google, so read the current policy and the CAP Code before you launch."
          },
          {
            "text": "**Social media.** Share team introductions, clinic news and general health information. Never share identifiable patient details, and avoid before-and-after claims that could mislead."
          },
          {
            "text": "**Email.** Keep in touch with existing patients about check-ups and services, with clear consent and an easy way to unsubscribe."
          }
        ]
      },
      {
        "type": "h2",
        "text": "What does digital marketing look like for different types of medical practice?"
      },
      {
        "type": "p",
        "text": "The same foundations apply to every practice, but the emphasis changes. Choose the row that matches your clinic and start there."
      },
      {
        "type": "table",
        "head": [
          "Type of practice",
          "Where patients search",
          "What to prioritise first"
        ],
        "rows": [
          [
            "Private GP clinic",
            "\"private gp [town]\", \"same day gp appointment\"",
            "Google Business Profile, reviews, clear fees and online booking"
          ],
          [
            "Specialist or consultant",
            "\"[specialty] consultant [town]\", the doctor's name",
            "Doctor profiles, condition pages, insurer and hospital details"
          ],
          [
            "Women's, men's or family health clinic",
            "\"[service] clinic near me\"",
            "Service pages, privacy-aware content, local reviews"
          ],
          [
            "Multi-site clinic group",
            "Each town and each service",
            "A page and profile for every location, consistent details, central review process"
          ],
          [
            "Cosmetic or aesthetic clinic",
            "\"[treatment] [town]\"",
            "Strict compliance, risk information, qualified practitioner details"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure digital marketing for doctors?"
      },
      {
        "type": "p",
        "text": "Measure the actions that lead to appointments: phone calls, booking-form completions, direction requests and online bookings, not just visits. Set these up in Google Analytics 4 (GA4) and Google Search Console, and review them monthly."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google Business Profile insights.** Calls, website clicks and direction requests from the map."
          },
          {
            "text": "**Search Console.** Which searches show your site, your clicks and your average position for each service and town."
          },
          {
            "text": "**GA4 key events.** Booking-button clicks, form submissions and phone-number taps, tracked as key events."
          },
          {
            "text": "**AI visibility.** A monthly check of what AI assistants say about you, plus the AI traffic reports in GA4."
          }
        ]
      },
      {
        "type": "p",
        "text": "Follow our guide to [tracking AI traffic with Google Analytics 4 and Search Console](/insights/track-ai-traffic) for the setup, and read [what a good SEO visibility score is](/insights/seo-visibility-score) before you judge any number from a rank tracker."
      },
      {
        "type": "callout",
        "variant": "warning",
        "title": "Keep patient data out of analytics and ad tools",
        "text": "Do not send names, conditions, treatments booked or appointment details into analytics, ad platforms or tracking pixels. Track the action (a booking click), never who the patient is or why they came. Ask your data protection lead to review your set-up."
      },
      {
        "type": "h2",
        "text": "How long does digital marketing for doctors take to work?"
      },
      {
        "type": "p",
        "text": "Some changes show quickly and others build over months. Fixing a Google Business Profile, answering reviews and adding a booking link can improve enquiries within weeks. New service pages and medical content take longer, because Google needs time to find, test and trust them. Paid ads can bring bookings from the first week, but stop when the budget stops."
      },
      {
        "type": "p",
        "text": "A sensible plan is to fix the profile and booking journey first, publish your most important service pages next, and keep adding reviews and content every month."
      }
    ],
    "faq": [
      {
        "q": "What is digital marketing for doctors?",
        "a": "Digital marketing for doctors is the use of your website, Google Business Profile, reviews, content, paid ads and AI visibility to help patients find, trust and book your practice, within the GMC and ASA advertising rules."
      },
      {
        "q": "Can doctors advertise in the UK?",
        "a": "Yes. Doctors can advertise their services provided the advertising is honest, accurate, does not pressure people and follows the ASA's CAP Code and GMC guidance. You remain responsible for marketing carried out on your behalf."
      },
      {
        "q": "What is the best digital marketing for a private GP clinic?",
        "a": "Start with a complete Google Business Profile, a website with one page per service, clear fees and online booking, and a steady flow of patient reviews. Add content and paid ads once those work."
      },
      {
        "q": "Do patient reviews affect which doctor people choose?",
        "a": "Yes. In the rater8 2026 survey of US adults, 55% had avoided or cancelled a booking because of online reviews, and 75% would not book a provider rated below 4.0 stars."
      },
      {
        "q": "Can I reply to patient reviews on Google?",
        "a": "Yes, and you should. Keep replies short and polite, never confirm that someone was a patient and never discuss their care. Invite them to contact the clinic directly."
      },
      {
        "q": "Do I need to show my CQC rating on my website?",
        "a": "If your service is registered with the CQC in England and has a rating, regulation 20A requires you to display it on your website, with the date it was given and a link to the CQC."
      },
      {
        "q": "Is it worth using Google Ads for a medical practice?",
        "a": "It can be, particularly for a new clinic or service. Send each ad to a matching service page and track calls and bookings. Health advertising is restricted, so check Google's policy and the CAP Code first."
      },
      {
        "q": "How do AI assistants decide which clinics to recommend?",
        "a": "They draw on web pages, Google listings, reviews and mentions on trusted sites. Accurate, consistent details and a strong, clear website make your clinic easier to describe correctly."
      },
      {
        "q": "Can I put patient testimonials on my website?",
        "a": "Only with the patient's explicit consent, and without identifiable details that break confidentiality. Testimonials must also be genuine and must not guarantee results."
      }
    ]
  },
  {
    "slug": "seo-visibility-score",
    "seoTitle": "SEO Visibility Score: What Is a Good Score in 2027?",
    "title": "What Is a Good SEO Visibility Score? How to Measure It in Google and AI Search",
    "description": "An SEO visibility score shows how often your site appears in search results. See how tools calculate it, what a good score is and how to read it in AI search.",
    "date": "2026-11-13",
    "author": "team",
    "topics": [
      "SEO - Begins",
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/seo-visibility-score-banner.jpg",
    "intro": "You open your rank tracker and it says your SEO visibility score is 18%. Is that good, or is something wrong? The honest answer is that it depends on the tool, the keywords you track and the competitors you compare against. This guide explains what an SEO visibility score is, how tools calculate it, what counts as a good score and how to read the same idea for AI search, where a score now measures how often AI answers name your brand.",
    "tldr": [
      "An SEO visibility score is a percentage that estimates how much of the available search traffic your site could win for the keywords you track.",
      "Tools such as Semrush and Moz calculate it from your rankings, an expected click-through rate for each position and, in some tools, search volume.",
      "There is no universal good score. Moz says a score in the mid-40s is rare for non-branded keywords, so judge yours against competitors and your own trend.",
      "An AI visibility score works differently: it is the share of tracked AI answers that mention or cite your brand.",
      "Read any score next to clicks, impressions and enquiries, because a high score on the wrong keywords does not bring customers."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is an SEO visibility score?"
      },
      {
        "type": "p",
        "text": "An SEO visibility score is a percentage that estimates how visible your website is in organic search results for a set of keywords you choose to track. Semrush describes it as a percentage representing how likely users are to see your website in organic results for those keywords, usually calculated by a rank tracking tool. It is not a Google metric, so you will only ever see it inside a third-party tool."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-google-ai-overview.jpg",
        "alt": "Google AI Overview for the search seo visibility score defining it as a metric that measures how prominently and frequently a website appears in search results, with source cards from Advanced Web Ranking, Moz and SEO Review Tools",
        "caption": "Google UK AI Overview for \"seo visibility score\", 13 November 2026, with its source panel. It describes the score as a measure of how prominently and often your site appears for a set of keywords."
      },
      {
        "type": "p",
        "text": "The idea behind the number is simple. A page in position 1 is seen by far more people than a page in position 10, so a tool gives each ranking a weight. It adds up those weights across your keyword list and shows the result on a 0 to 100 scale. In plain English, the score answers one question: out of all the attention these searches could give you, how much do you currently get?"
      },
      {
        "type": "p",
        "text": "Semrush notes that SEO visibility is also called organic search visibility. Other tools call the same idea search visibility, share of voice or visibility index. The names change, but the maths follows the same pattern."
      },
      {
        "type": "h2",
        "text": "How do tools calculate an SEO visibility score?"
      },
      {
        "type": "p",
        "text": "Most tools take every keyword you track, apply an estimated click-through rate (CTR) for the position it ranks in, and average the results across the keyword list. Higher positions earn much more than lower ones, which is why moving from position 3 to position 1 changes the score far more than moving from position 100 to position 60."
      },
      {
        "type": "h3",
        "text": "How does Moz calculate search visibility?"
      },
      {
        "type": "p",
        "text": "Moz explains its Search Visibility score in three steps: it takes all your rankings for all your keywords, applies an estimated CTR for each ranking position, then adds the CTRs and divides by the number of keywords tracked. The result is a single figure between 0% and 100%. A score of 0% means no pages in the top 20 results, and 100% means you own every ranking position for your keywords."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-moz-calculation.jpg",
        "alt": "Moz Help Hub page explaining how Search Visibility is calculated in three steps using rankings, estimated click-through rate and the number of tracked keywords",
        "caption": "The Moz Help Hub explains its Search Visibility calculation, 13 November 2026."
      },
      {
        "type": "h3",
        "text": "How does Semrush calculate SEO visibility?"
      },
      {
        "type": "p",
        "text": "Semrush weights each ranking by its average click-through rate, using its own data, so that every position has a realistic effect on the score. Its guide says 100% visibility represents a number 1 ranking for all your target keywords and 0% means you rank for none of them. The guide also lists the signals tools may combine: keyword rankings, impression share, click share, click-through rates and search volumes."
      },
      {
        "type": "p",
        "text": "Semrush gives a worked example with three fictional websites that each track 10 keywords. Website A ranks in positions 1 to 10 and scores 24.45%. Website B ranks one place lower on every keyword and scores 14.45%. Website C ranks from position 10 down to 100 and scores 0.6%. Even a site that ranks on page one for every keyword scores well under 25%, because the score measures the share of the maximum possible clicks."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-example-columns.jpg",
        "alt": "Column chart of Semrush example SEO visibility scores: Website A 24.45 per cent, Website B 14.45 per cent and Website C 0.6 per cent",
        "caption": "Semrush's fictional example: three sites tracking the same 10 keywords at different positions."
      },
      {
        "type": "callout",
        "variant": "takeaway",
        "title": "What this means for you",
        "text": "Two tools can show different scores for the same website, because each uses its own CTR curve, keyword list and extras such as search volume. Compare scores inside one tool, never across tools."
      },
      {
        "type": "h2",
        "text": "What is a good SEO visibility score?"
      },
      {
        "type": "p",
        "text": "A good SEO visibility score is one that is rising and higher than your direct competitors for the same keywords. No tool publishes an official pass mark. ChatGPT, when asked, states that there is no universal SEO visibility score or industry-wide benchmark."
      },
      {
        "type": "p",
        "text": "You will still find numbers online. Some SEO blogs say a score above 50% is generally strong, and one says medical practices aim for above 55% in their local markets. Moz is far more cautious: it says it is very rare for a site to score above the mid-40s for non-branded keywords. These claims sit far apart because each writer is describing a different tool and a different keyword list."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-moz-rare-stat.jpg",
        "alt": "Stat card: Moz says a Search Visibility score in the mid-40s is rare for a site tracking non-branded keywords on a 0 to 100 scale",
        "caption": "Source: Moz Help Hub, Search Visibility."
      },
      {
        "type": "p",
        "text": "Branded keywords explain much of the gap. If your tracked list includes your own company name, you will rank first for it, and that lifts the average. A list of only non-branded, service-led keywords gives a lower and more honest figure."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-people-also-ask.jpg",
        "alt": "Google People Also Ask box under the search what is a good seo visibility score showing questions such as what is considered a good SEO score and is an SEO score of 92 good",
        "caption": "People Also Ask questions under \"what is a good seo visibility score\", Google UK, 13 November 2026."
      },
      {
        "type": "h3",
        "text": "Can ChatGPT tell you what a good score is?"
      },
      {
        "type": "p",
        "text": "When we asked ChatGPT with web search switched on, it said a good score depends on the tool and offered a table of bands, from low visibility at 0 to 10% to exceptional visibility at 80 to 100%. It labelled these as illustrative working benchmarks, not official standards. Treat them as a rough guide to the shape of the scale. A site tracking hundreds of non-branded keywords will rarely reach the top bands."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to what is a good SEO visibility score, explaining there is no universal benchmark and showing a table of illustrative score bands",
        "caption": "ChatGPT's answer to \"What is a good SEO visibility score and how do tools calculate it?\", 13 November 2026. The bands are the assistant's illustration, not an industry standard."
      },
      {
        "type": "h2",
        "text": "How do you set a fair SEO visibility benchmark for your site?"
      },
      {
        "type": "p",
        "text": "Build your benchmark from your own data, in four steps. This gives you a target that means something for your market."
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Choose one keyword list and keep it.** Use the searches your buyers use, split into branded and non-branded groups. Moz advises labelling keywords for this reason, because adding or removing keywords changes the average even when nothing changes on your site."
          },
          {
            "text": "**Track three to five direct competitors.** Use the same tool and the same keyword list for all of them. Your gap to the leader is a more useful target than a number from a blog."
          },
          {
            "text": "**Record a baseline.** Note your score today, then check it monthly. Direction matters more than any single reading."
          },
          {
            "text": "**Set a target by gap.** Aim to close part of the gap to the strongest competitor, not to hit an arbitrary percentage."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Why did my SEO visibility score drop?"
      },
      {
        "type": "p",
        "text": "A drop does not always mean you lost rankings. Moz lists the common causes: your rankings fell, you added or removed keywords, you changed the search engines or locations being tracked, a Google algorithm update happened or you moved to a new domain or from HTTP to HTTPS."
      },
      {
        "type": "p",
        "text": "Check the simplest causes first. Did anyone change the keyword list? Did a competitor overtake you on your highest-volume terms? Because high positions carry the most weight, losing a few top-three rankings hurts the score more than losing many page-two rankings. If rankings really fell, our guide on [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) covers what to improve."
      },
      {
        "type": "h2",
        "text": "How do you measure visibility in Google and AI search?"
      },
      {
        "type": "p",
        "text": "Measure it in two layers: a classic SEO visibility score for your rankings in Google, and an AI visibility score for how often AI answers name your brand. The two answer different questions, so track both."
      },
      {
        "type": "h3",
        "text": "What is an AI visibility score?"
      },
      {
        "type": "p",
        "text": "An AI visibility score measures how often and how prominently your brand appears in AI-generated answers to a set of buyer prompts. The simplest version is a ratio. A glossary entry from AuthorityTech gives an example: a brand named in 46 of 200 tracked answers has a base score of 23. In plain English, you ask the same questions repeatedly and count how often the AI mentions you."
      },
      {
        "type": "image",
        "src": "/insights/visibility-score-ai-formula-donut.jpg",
        "alt": "Donut chart showing an AI visibility score of 23 per cent, worked out as 46 AI answers naming the brand out of 200 answers tracked",
        "caption": "A worked example of the base AI visibility score formula: answers naming the brand divided by answers tracked, times 100."
      },
      {
        "type": "p",
        "text": "Tools then add weighting on top. Google's AI Overview for \"ai visibility score how is it calculated\" lists the common extras: the type of mention, where in the answer your brand appears, whether the AI links to your site, the weight given to each platform and a comparison against competitors. One published methodology, the LLM Visibility Index, weights mention frequency at 40%, position and prominence at 25% and citation quality at 20%, with a further factor at 15%. Because each tool picks its own weights, AI scores need the same caution as classic scores: compare inside one tool."
      },
      {
        "type": "h3",
        "text": "Which supporting numbers sit beside an AI visibility score?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Share of voice.** Your brand's mentions divided by all brand mentions in the tracked answers, competitors included."
          },
          {
            "text": "**Sentiment.** Whether the AI describes you positively, neutrally or negatively."
          },
          {
            "text": "**Average position.** Where your name appears when the AI gives a list of options."
          },
          {
            "text": "**Citation rate.** How often the answer links to your own domain."
          }
        ]
      },
      {
        "type": "p",
        "text": "For tools that track these numbers, see our comparison of the [best AI search monitoring tools](/insights/best-ai-search-monitoring-tools) and our guide to [tracking brand mentions in AI search](/insights/best-ways-to-track-brand-mentions-in-ai-search). If your score is low and you want to know why, the [AI brand visibility checklist](/insights/how-to-improve-brand-visibility-in-ai-search-engines) walks through 12 checks."
      },
      {
        "type": "h3",
        "text": "How reliable is an AI visibility score?"
      },
      {
        "type": "p",
        "text": "It is less steady than a Google ranking score. AI answers can change between runs, so a single check proves little. Look at the trend over several weeks, use a consistent prompt list, and treat the number as a direction of travel."
      },
      {
        "type": "h2",
        "text": "How do you read a visibility score next to real results?"
      },
      {
        "type": "p",
        "text": "Read the score alongside clicks, impressions and enquiries, because visibility is an estimate and results are the proof. Semrush says higher visibility does not always bring proportionately better business results, as visibility on popular but non-commercial keywords earns less revenue than visibility on commercial ones."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Score up, clicks flat.** You may be rising on keywords with low demand, or AI Overviews may be answering the query without a click."
          },
          {
            "text": "**Score flat, enquiries up.** Your visibility on high-intent keywords may have improved even if the average did not move."
          },
          {
            "text": "**Score down, clicks steady.** Check whether the keyword list or tracked locations changed."
          }
        ]
      },
      {
        "type": "p",
        "text": "For the free reports that show real clicks and AI traffic, follow our guide to [tracking AI traffic with Google Analytics 4 and Search Console](/insights/track-ai-traffic). Use the visibility score as a quick health check and the real traffic numbers to confirm it."
      },
      {
        "type": "h2",
        "text": "How often should you check your SEO visibility score?"
      },
      {
        "type": "p",
        "text": "Check it monthly, and after any big site change or Google update. Weekly movements in a visibility score are mostly noise from small ranking changes. A monthly review, written down next to your top competitors, shows whether your work is moving the number. For the bigger picture of getting named in AI answers, start with our [answer engine optimisation](/insights/answer-engine-optimisation) pillar."
      }
    ],
    "faq": [
      {
        "q": "What is an SEO visibility score?",
        "a": "An SEO visibility score is a percentage, calculated by a rank tracking tool, that estimates how much of the available organic search traffic your site could win for the keywords you track. Higher rankings count for much more than lower ones."
      },
      {
        "q": "What is a good SEO visibility score?",
        "a": "There is no official figure. A good score is one that is rising and beats your direct competitors on the same keywords in the same tool. Moz says scores above the mid-40s are very rare for non-branded keywords."
      },
      {
        "q": "Is a 100% SEO visibility score possible?",
        "a": "Only in theory. In Moz's and Semrush's definitions, 100% means ranking first for every tracked keyword, which is very rare outside a short list of branded terms."
      },
      {
        "q": "Is an SEO visibility score the same as an SEO score?",
        "a": "No. An SEO score, such as a site audit score, rates technical and on-page health. A visibility score estimates how often your pages appear in search results."
      },
      {
        "q": "What is an AI visibility score?",
        "a": "An AI visibility score is the share of tracked AI answers that mention or cite your brand. A brand named in 46 of 200 tracked answers has a base score of 23."
      },
      {
        "q": "Why is my SEO visibility score different in two tools?",
        "a": "Each tool uses its own click-through curve, keyword list and extra signals such as search volume, so the numbers cannot be compared across tools."
      },
      {
        "q": "Does a higher SEO visibility score mean more leads?",
        "a": "Not always. Visibility on keywords with little demand or no buying intent adds little revenue, so check clicks and enquiries alongside the score."
      }
    ]
  },
  {
    "slug": "seo-for-estate-agents",
    "seoTitle": "SEO for Estate Agents in 2027: Win More Valuations",
    "title": "SEO for Estate Agents in 2027: How to Win More Valuations from Search",
    "description": "SEO for estate agents explained: set up Google Business Profile, win reviews, build branch and area pages and get named in AI answers. Step by step.",
    "date": "2026-11-12",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [
      "Real estate"
    ],
    "image": "/insights/seo-for-estate-agents-banner.jpg",
    "intro": "A seller asks Google who should value their house, glances at the map, reads a few reviews and calls two or three agents. If your agency is not in those results, you are not in the running. This guide shows how SEO for estate agents works in 2027: how to rank in Google's map results, win the reviews sellers read, build the branch and area pages that bring valuations and get your agency named in AI answers.",
    "tldr": [
      "SEO for estate agents means appearing in Google map results, website results and AI answers when sellers and landlords search for help locally.",
      "Sellers rank a good local presence first when choosing an agent (20% in Zoopla and YouGov's survey of 1,006 homeowners), and 49% get three valuations.",
      "Set up a Google Business Profile for each staffed branch, keep details identical everywhere and collect reviews steadily.",
      "Build pages for each branch, area, valuation and landlord need, written from real local knowledge.",
      "Measure valuation requests, calls and instructions, not rankings alone."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is SEO for estate agents, and how does it win valuations?"
      },
      {
        "type": "p",
        "text": "SEO for estate agents is the work of making your agency appear when sellers, landlords, buyers and tenants search for help in the areas you cover. It covers your Google Business Profile, your website, your reviews and the mentions of your branches on other sites. Done well, it puts your name in front of a homeowner at the moment they ask \"who should value my house?\", before they have spoken to anyone."
      },
      {
        "type": "p",
        "text": "In the UK people say \"estate agent\", while in the US the same search is \"real estate agent\" or \"realtor\", so you will see both terms in this guide. The steps are the same either way."
      },
      {
        "type": "h2",
        "text": "Why does SEO matter for estate agents in 2027?"
      },
      {
        "type": "p",
        "text": "Sellers start online. A survey run by Opinium for Homeflow found that 74% of people looking for an estate agent go to Google first, and 87% of homeowners under 35 do. That survey dates from spring 2022 and was commissioned by an agency software supplier, so treat the exact figures with care, but the direction matches what we see in search results every day."
      },
      {
        "type": "p",
        "text": "What sellers then look for is local proof. [Zoopla](https://www.zoopla.co.uk/press/releases/zoopla-identifies-whats-really-driving-how-sellers-choose-agents-in-2025-and) and YouGov surveyed 1,006 UK homeowners who had sold in the previous five years, and the top reason for choosing an agent was a good local presence, meaning the agent is already selling other homes nearby. Agents in the companion survey guessed that price negotiation and mortgage support mattered most, and sellers ranked mortgage support last."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-seller-reasons.jpg",
        "alt": "Bar chart showing the top three reasons UK sellers chose an agent: a good local presence 20%, well known locally 13%, strong local reputation 9%",
        "caption": "The top three reasons sellers gave for choosing their estate agent. Source: Zoopla and YouGov, June 2025."
      },
      {
        "type": "p",
        "text": "That finding is good news for SEO. Google's map results, your branch pages and your reviews are how local presence shows up online. Zoopla's research also found that 49% of sellers would get valuations from three agents, and only 15% value with a single agent. Being one of the three names a seller sees is the whole game."
      },
      {
        "type": "p",
        "text": "There is a second shift. Many agencies built their lead flow on the property portals, and search interest in them has softened. Google Trends data for the UK shows relative interest in \"rightmove\" roughly halving from its 2021 and 2022 level by November 2026, while \"zoopla\" and \"estate agents\" also fell from a much lower base. Portals still list your homes, but a seller who wants a valuation is searching, asking an AI assistant or checking the map."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-trends.jpg",
        "alt": "Google Trends chart for the UK over five years comparing searches for estate agents, rightmove and zoopla",
        "caption": "Relative UK search interest over five years for \"estate agents\", \"rightmove\" and \"zoopla\". Source: Google Trends, checked 12 November 2026."
      },
      {
        "type": "h2",
        "text": "How do sellers and landlords find an estate agent in Google and AI search?"
      },
      {
        "type": "p",
        "text": "Sellers and landlords find an estate agent in three places: Google's map results, the standard website results and AI answers from tools such as Google AI Overviews and ChatGPT. Each rewards different work, so a good plan covers all three."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google map results.** The map and the three listings at the top of a search such as \"estate agents manchester\". Your Google Business Profile decides this."
          },
          {
            "text": "**Website results.** The usual blue links, including the People Also Ask questions. Your service pages, area pages and the links pointing to your site decide this."
          },
          {
            "text": "**AI answers.** Summaries that name a few agencies or give a how-to. Mentions on trusted sites and clear, answer-first pages decide this."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What do the map results look like for an estate agent search?"
      },
      {
        "type": "p",
        "text": "On 12 November 2026 we searched Google UK for \"estate agents manchester\". The map pack showed three agencies, each with a star rating, review count, opening hours and a recent review snippet. The three listed had 609, 759 and around 1,200 reviews. A branch with a handful of reviews and no recent ones will struggle to appear next to numbers like that."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-map-pack.jpg",
        "alt": "Google map results for estate agents manchester showing three estate agencies with star ratings, review counts and opening hours",
        "caption": "Google UK map results for \"estate agents manchester\", 12 November 2026. Ratings, review counts and opening hours sit beside every listing."
      },
      {
        "type": "h3",
        "text": "What does Google's AI Overview say about SEO for estate agents?"
      },
      {
        "type": "p",
        "text": "The AI Overview for \"seo for estate agents\" tells the reader to prioritise local SEO and the Google Business Profile for each branch, collect and answer reviews, keep the same business details across directories and target long-tail, high-intent keywords. It cites guides from property software and marketing suppliers including Homeflow, Dezrez and Rex Software. Notice what that tells you: the sources Google trusts for this topic are pages that answer the question in plain steps."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-ai-overview.jpg",
        "alt": "Google AI Overview for seo for estate agents listing local SEO, reviews and directories, with source cards from Rex Software, Homeflow and Outrank",
        "caption": "Google UK AI Overview for \"seo for estate agents\", 12 November 2026, with its source panel."
      },
      {
        "type": "p",
        "text": "The questions people also ask follow the same pattern, and they are cost and effort questions: how much SEO costs, whether it is worth it, how long it takes. We answer each of them below."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-people-also-ask.jpg",
        "alt": "Google People Also Ask box for seo for estate agents with four questions about SEO cost and the 80/20 rule",
        "caption": "People Also Ask questions under \"seo for estate agents\", Google UK, 12 November 2026."
      },
      {
        "type": "h3",
        "text": "Which estate agents does ChatGPT recommend?"
      },
      {
        "type": "p",
        "text": "We asked ChatGPT with web search on, \"Which estate agents should I use to sell my house in Bristol?\" It named four agencies to shortlist, gave each a rating and review count, said it would not choose on Google reviews alone, and told the seller to check how many homes each agent sells in their postcode and how close sales get to the asking price. In other words, the assistant read review pages, agency sites and local sales data, then summarised them. An agency that is easy to find, easy to read and well reviewed gets named. One that is hard to find does not."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-chatgpt-answer.jpg",
        "alt": "ChatGPT answer to which estate agents to use to sell a house in Bristol, shortlisting four agencies with ratings",
        "caption": "ChatGPT (web search on) answering a neutral Bristol seller question, 12 November 2026. We asked the question as a general category prompt."
      },
      {
        "type": "p",
        "text": "Our guide on [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt) explains why these answers pick the agencies they do, and [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) covers Google's side."
      },
      {
        "type": "h2",
        "text": "How do you set up Google Business Profile for an estate agent?"
      },
      {
        "type": "p",
        "text": "Set up one Google Business Profile for each branch with a staffed, public office, choose the category that matches your main service, and fill in every field with the same details your website shows. Google's map results depend on three things: relevance, distance and prominence. Whitespark's Local Search Ranking Factors survey of local SEO experts puts the primary category and proximity at the top, with reviews and behavioural signals gaining weight in the 2026 edition."
      },
      {
        "type": "steps",
        "title": "Set up each branch profile",
        "items": [
          {
            "title": "Claim and verify the branch",
            "text": "Search for your agency on Google Maps, claim the listing or add the business, and complete Google's verification. Use a real address people can visit. Do not create profiles for towns where you have no office."
          },
          {
            "title": "Choose the primary category carefully",
            "text": "Pick the category that describes what most customers want from this branch, such as Estate agent. Add secondary categories only for services you genuinely offer, such as Letting agent."
          },
          {
            "title": "Write the name, hours and contact details exactly",
            "text": "Use your trading name as it appears on your shop front. Add accurate opening hours, including bank holidays, because being open when someone searches is a ranking and conversion factor."
          },
          {
            "title": "Add services, photos and a link to the branch page",
            "text": "List valuations, sales, lettings and property management as services. Upload real photos of the office, the team and local streets. Link to that branch's own page, not your home page."
          },
          {
            "title": "Post and answer questions every week",
            "text": "Use Google Business Profile posts for new instructions, sold announcements and local market updates, and answer questions that appear on the profile."
          }
        ]
      },
      {
        "type": "p",
        "text": "Multi-branch agencies should keep names, addresses and phone numbers identical on every directory, such as Bing Places, Apple Business Connect and the property portals. Inconsistent details confuse both Google and AI assistants, which compare several sources before they name an agency."
      },
      {
        "type": "h2",
        "text": "How do reviews help SEO for estate agents?"
      },
      {
        "type": "p",
        "text": "Reviews help estate agents rank in map results, and they decide which of the three agents a seller calls. The BrightLocal Local Consumer Review Survey found that 97% of consumers read online reviews for local businesses. Our map pack search showed why: review count, rating and a recent review sit right beside every name."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Ask at the right moment.** Send the review link when a sale completes or a tenancy starts, when the client is happiest."
          },
          {
            "text": "**Ask for both sellers and landlords.** Lettings reviews help landlord searches such as \"letting agent manchester\" and sales reviews help seller searches."
          },
          {
            "text": "**Reply to every review.** A short, specific reply shows future clients how you handle problems."
          },
          {
            "text": "**Ask for detail.** Reviews that mention the street, the property type and the person who helped give Google and AI tools more to match against a search."
          },
          {
            "text": "**Never offer rewards for reviews.** It breaks Google's policies and puts the profile at risk."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Which pages does an estate agent website need for local SEO?"
      },
      {
        "type": "p",
        "text": "An estate agent website needs a page for each branch, a page for each area you really serve, a valuation page for sellers and landlords, and answer pages for the questions people ask before they instruct. These pages match the searches that bring instructions: \"estate agents in [town]\", \"how much is my house worth in [area]\", \"free valuation [town]\" and \"letting agent [area]\"."
      },
      {
        "type": "table",
        "head": [
          "Page",
          "Search it targets",
          "What it must show"
        ],
        "rows": [
          [
            "Branch page",
            "estate agents in [town]",
            "Address, map, opening hours, team, local reviews, link to book a valuation"
          ],
          [
            "Area guide",
            "estate agents [neighbourhood], selling a house in [area]",
            "Recent sales you handled, price trends from public data, schools and transport, how you market homes there"
          ],
          [
            "Valuation page",
            "free house valuation [town], how much is my house worth",
            "What a valuation includes, how long it takes, a short form and a phone number"
          ],
          [
            "Landlord page",
            "letting agent [town], landlord fees",
            "Services, fee structure in plain words, compliance help, tenant-find and management options"
          ],
          [
            "Selling guide",
            "how to sell a house in [town]",
            "Steps, timelines, costs and what you do at each stage"
          ],
          [
            "Property pages",
            "address and postcode searches",
            "Unique description, local detail and a clear sold, under offer or available status"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Write area pages from what you know. A page that lists a neighbourhood's schools and a recent sale you completed there beats a page that repeats the same paragraph with the town name swapped. Our guide on [SEO for moving companies](/insights/seo-for-moving-companies) uses the same service-and-town page structure for another local business, and the [self storage marketing](/insights/self-storage-marketing) guide shows it for multi-location firms."
      },
      {
        "type": "h3",
        "text": "How should you handle property listings and sold pages?"
      },
      {
        "type": "p",
        "text": "Keep your own property pages indexable, write a unique description for each home rather than copying the portal text, and keep sold pages live with a clear sold status for a period before pointing them to the nearest area page. Sold pages show proof of local activity, which is exactly the local presence sellers say they look for."
      },
      {
        "type": "h2",
        "text": "How do you build links and local mentions for an estate agency?"
      },
      {
        "type": "p",
        "text": "Estate agencies earn links and mentions through local activity: community sponsorships, local press comment, market reports and partnerships with local businesses. These help the website rank and give AI assistants more places that name your agency. We see the same pattern in our work on [brand visibility in AI search](/insights/how-to-improve-brand-visibility-in-ai-search-engines)."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Publish a quarterly local market report** using public price data, and send it to local newspapers and community sites."
          },
          {
            "text": "**Sponsor local clubs and events** and ask for a link from the organiser's website to your branch page."
          },
          {
            "text": "**Offer expert comment** to local and property news sites when the market moves."
          },
          {
            "text": "**Join local business groups** and chambers of commerce and make sure the profile lists your correct details."
          },
          {
            "text": "**Get named in \"best estate agents in [town]\" lists** on trusted local and review sites by earning reviews and building a presence there."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you get your estate agency into AI answers?"
      },
      {
        "type": "p",
        "text": "You get into AI answers by ranking in normal search, answering questions clearly on your pages and being mentioned on other trusted sites. Ahrefs found that 76% of 1.9 million AI Overview citations came from pages in Google's top 10, so ordinary SEO still comes first."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-pew-clicks.jpg",
        "alt": "Column chart showing Google users clicked a traditional result in 15% of visits without an AI summary and 8% with one",
        "caption": "Share of Google visits where the user clicked a traditional result. Source: Pew Research Center, March 2025."
      },
      {
        "type": "p",
        "text": "The [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) analysed the browsing of 900 US adults in March 2025 and found people clicked a traditional result in 8% of visits when Google showed an AI summary, against 15% when it did not. So a seller may read your agency's name inside an answer without visiting your site. Make sure the answer names you correctly and the page it cites makes the next step obvious."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Open each page with the answer.** Start a valuation page with what a valuation includes and how long it takes, then add detail."
          },
          {
            "text": "**Write headings as questions** sellers ask, such as \"How much does an estate agent charge in [town]?\" and answer in the first two sentences."
          },
          {
            "text": "**Be exact about names.** Use your agency name, branch names and area names the same way everywhere."
          },
          {
            "text": "**Make sure Bing can index you.** ChatGPT and other assistants use Bing and other search indexes, so submit your site in Bing Webmaster Tools."
          },
          {
            "text": "**Do not block search crawlers** in robots.txt and check your host's bot settings."
          }
        ]
      },
      {
        "type": "p",
        "text": "For the full method, read our [answer engine optimisation](/insights/answer-engine-optimisation) pillar and the guide to the [best AI search monitoring tools](/insights/best-ai-search-monitoring-tools) if you want to track mentions across many towns."
      },
      {
        "type": "h2",
        "text": "How do you check the technical side of SEO for estate agents?"
      },
      {
        "type": "p",
        "text": "Check that pages load quickly on a phone, listings are indexable, branch pages have clean titles and every page is in the XML sitemap. Estate agent websites carry many images, so speed is a common weak spot. Google's PageSpeed Insights is free and shows a score for performance, accessibility, best practices and SEO, plus a list of fixes."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-pagespeed.jpg",
        "alt": "PageSpeed Insights mobile report scoring performance 86, accessibility 97, best practices 100 and SEO 100",
        "caption": "A PageSpeed Insights mobile report, run 12 November 2026 on one of our own guides, showing the four scores you check on every page."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Compress property photos** and set image sizes so pages do not jump as they load."
          },
          {
            "text": "**Test the valuation form** on a phone. A form that fails on mobile loses instructions."
          },
          {
            "text": "**Give every branch and area page its own title and meta description** that includes the town."
          },
          {
            "text": "**Fix duplicate pages** from filters, such as \"sort by price\", with canonical tags."
          },
          {
            "text": "**Check Search Console** for pages Google found but did not index."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you measure SEO for estate agents?"
      },
      {
        "type": "p",
        "text": "Measure SEO for estate agents by the enquiries it creates: valuation requests, calls from Google Business Profile and landlord enquiries, then add rankings and traffic. A ranking report alone does not show whether the work pays."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google Search Console.** Watch clicks and impressions for your \"estate agents in [town]\" and valuation searches."
          },
          {
            "text": "**Google Analytics 4.** Mark the valuation form, click-to-call and brochure downloads as key events."
          },
          {
            "text": "**Google Business Profile.** Track calls, direction requests and website clicks for each branch."
          },
          {
            "text": "**Your CRM.** Record how each instruction found you, so you can tie SEO to fee income."
          },
          {
            "text": "**AI visibility.** Check a fixed list of questions monthly and note which agencies the assistants name."
          }
        ]
      },
      {
        "type": "p",
        "text": "Search Console also has a Generative AI features report. Ours is small because maai.agency is a young site, but it shows the idea: impressions from AI features are counted and listed by page, so you can see which of your pages Google's AI is using."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-estate-agents-search-console-ai.jpg",
        "alt": "Search Console Generative AI features report for maai.agency showing 144 impressions over 12 months with a daily line chart",
        "caption": "The Generative AI features report in Google Search Console for maai.agency, 12 months to November 2026."
      },
      {
        "type": "p",
        "text": "Our step-by-step guide to [tracking AI traffic for free](/insights/track-ai-traffic) shows how to set up the Google Analytics 4 channel and the Search Console views."
      },
      {
        "type": "h2",
        "text": "How long does SEO for estate agents take, and what does it cost?"
      },
      {
        "type": "p",
        "text": "Most estate agents see movement in Google Business Profile results within weeks of fixing the profile and collecting reviews, and in website results over several months. SEO does not have a fixed price: costs depend on how many branches you have, how competitive your towns are and how much content and PR you need. Ask for a plan tied to enquiries, not a list of tasks."
      },
      {
        "type": "p",
        "text": "Here is an illustrative way to judge it, not a client result. If your average sales fee is £3,000 and one extra instruction a month comes from search, that is £36,000 of fee income a year from one branch. Set that against the yearly SEO cost for the branch to see whether the work pays. Use your own average fee and your own conversion rate."
      },
      {
        "type": "h2",
        "text": "How does SEO for estate agents differ by business type?"
      },
      {
        "type": "table",
        "head": [
          "Business type",
          "Where to focus first",
          "Main search"
        ],
        "rows": [
          [
            "Single independent branch",
            "Google Business Profile, reviews, one strong branch page and area guides",
            "estate agents in [town]"
          ],
          [
            "Multi-branch agency",
            "A profile and page for each branch, consistent details, a branch review plan",
            "estate agents in [each town]"
          ],
          [
            "Lettings-focused agency",
            "Landlord pages, fee clarity, tenant guides, lettings reviews",
            "letting agent [town], landlord fees"
          ],
          [
            "Online or hybrid agency",
            "Fee comparison pages, coverage pages, trust signals and AI answers",
            "online estate agent, cheap estate agent"
          ],
          [
            "New homes or commercial",
            "Development and sector pages, case studies, links from trade press",
            "commercial estate agents [city]"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Whichever model you run, the order is the same: fix the profile, win the reviews, build the pages, earn the mentions, then measure."
      }
    ],
    "faq": [
      {
        "q": "How much does SEO for estate agents cost in the UK?",
        "a": "It depends on the number of branches, the competition in each town and the work involved. Ask any agency for a plan tied to valuations and instructions, and judge cost against your average fee income."
      },
      {
        "q": "Is SEO worth it for estate agents?",
        "a": "Yes, if sellers and landlords in your area search for agents. Sellers rank local presence highest when choosing, and SEO is how that presence shows online."
      },
      {
        "q": "How long does SEO take for estate agents?",
        "a": "Profile and review improvements can show in map results within weeks. Website pages usually take several months to build authority and rank."
      },
      {
        "q": "What is the best SEO for estate agents?",
        "a": "The best mix is a complete Google Business Profile for each branch, steady reviews, branch and area pages, local links and mentions, and answer pages that AI tools can quote."
      },
      {
        "q": "Do estate agents need a Google Business Profile for each branch?",
        "a": "Yes, if each branch has a staffed office the public can visit. Each branch needs its own profile and its own page on your website."
      },
      {
        "q": "Can estate agents rank without Rightmove or Zoopla?",
        "a": "Your agency can rank in Google for its own name and local searches whether or not it lists on the portals. The portals still show your properties to buyers, so most agents use both."
      },
      {
        "q": "How do estate agents get found in ChatGPT?",
        "a": "ChatGPT and similar tools read search results, agency websites and review pages. A strong profile, clear service pages and mentions on trusted local sites make your agency easier to name."
      },
      {
        "q": "Should estate agents use PPC as well as SEO?",
        "a": "Many do, as paid search brings valuations quickly while SEO builds over time. The right mix depends on your budget and how competitive your towns are."
      }
    ]
  },
  {
    "slug": "best-ai-search-monitoring-tools",
    "seoTitle": "Best AI Search Monitoring Tools 2027: Compared | MAAI",
    "title": "Best AI Search Monitoring Tools in 2027: Compared for Businesses",
    "description": "Compare the best AI search monitoring tools for 2027: OtterlyAI, Peec AI, ZipTie, SE Visible, Semrush, Ahrefs and Profound, with prices and how to choose.",
    "date": "2026-11-12",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/best-ai-search-monitoring-tools-banner.jpg",
    "intro": "Ask ChatGPT, Perplexity or Google's AI Overviews for the best company in your field and you get a short list, not ten blue links. Is your business on it? AI search monitoring tools answer that question every day, and the market now has a tool for almost every budget. The best AI search monitoring tool for most businesses is the one that tracks the AI platforms your buyers use, at a price per prompt you can sustain. This guide compares seven tools with their prices, and shows how to choose.",
    "tldr": [
      "AI search monitoring tools run your buyers' questions through ChatGPT, Perplexity, Gemini and Google's AI Overviews, and record whether your brand is mentioned and cited.",
      "OtterlyAI ($29 a month) and Peec AI (€85 a month) are the two clearest entry options, while Semrush, Ahrefs Brand Radar and SE Visible suit teams already on those suites.",
      "Compare price per prompt, not headline price. On OtterlyAI it falls from $1.45 on Lite to $0.91 on Premium.",
      "Prices in AI summaries can lag behind the vendors, so read each pricing page before you buy.",
      "You can start for free with a monthly manual check, Search Console and Google Analytics 4."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is an AI search monitoring tool?"
      },
      {
        "type": "callout",
        "variant": "definition",
        "title": "Definition",
        "text": "An AI search monitoring tool is software that sends a fixed set of questions (prompts) to AI assistants such as ChatGPT, Perplexity, Gemini and Google's AI Overviews on a schedule, then records whether your brand is mentioned, how it is described, which competitors appear and which websites are cited."
      },
      {
        "type": "p",
        "text": "You could do this by hand, but AI answers change from one day to the next and between countries. A monitoring tool repeats your prompts every day or week, so you see a trend instead of a single lucky or unlucky answer. The tools differ mainly in how many prompts they run, which AI platforms they cover and how they price that."
      },
      {
        "type": "p",
        "text": "Google's own AI Overview for this search lists tools such as OtterlyAI, Peec AI, ZipTie, SE Visible, Semrush and Ahrefs Brand Radar. The screenshot below shows it on 12 November 2026."
      },
      {
        "type": "image",
        "src": "/insights/ai-monitor-1.jpg",
        "alt": "Google UK AI Overview for the search best ai search monitoring tools, listing OtterlyAI, Peec AI, ZipTie, Radar Kit, PromptWatch and SE Visible with prices",
        "caption": "The AI Overview for \"best ai search monitoring tools\" on Google UK, 12 November 2026. Tool prices in AI summaries can be out of date, so always check the vendor's own pricing page."
      },
      {
        "type": "h2",
        "text": "What are the best AI search monitoring tools in 2027?"
      },
      {
        "type": "p",
        "text": "The best tool depends on your budget, how many markets you sell in and whether you already pay for an SEO suite. We checked the public pricing page of each tool below on 12 November 2026. They are listed in no particular order, and prices change often, so confirm before you buy."
      },
      {
        "type": "table",
        "head": [
          "Tool",
          "Entry price",
          "What the entry plan includes",
          "Best suited to"
        ],
        "rows": [
          [
            "OtterlyAI",
            "$29 a month",
            "20 prompts, 3 of 7 AI engines, daily tracking",
            "Small teams and first-time monitoring"
          ],
          [
            "Peec AI",
            "€85 a month",
            "50 prompts, choose 3 AI models, unlimited users",
            "Marketing teams that want a clean dashboard"
          ],
          [
            "ZipTie",
            "From $25.65 a month",
            "Priced by prompts and refresh rate, 7 engines available",
            "Teams that want to pay only for the prompts they run"
          ],
          [
            "SE Visible (SE Ranking)",
            "From $71 a month",
            "75, 200 or 1,000 prompt tiers, daily tracking",
            "Teams already using SE Ranking"
          ],
          [
            "Semrush AI visibility",
            "Inside Semrush plans",
            "50 prompts tracked daily on the Starter AI plan, 100 on Pro+",
            "Teams already using Semrush"
          ],
          [
            "Ahrefs Brand Radar",
            "Custom prompts from $50 a month",
            "7 AI platforms, share of voice and fan-out queries",
            "Teams already using Ahrefs"
          ],
          [
            "Profound",
            "Custom pricing",
            "Up to 10 answer engines, 7-day free trial",
            "Large brands and enterprise teams"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Which tool is best for a small business on a budget?"
      },
      {
        "type": "p",
        "text": "OtterlyAI is the most affordable named option here. Its Lite plan is $29 a month for 20 prompts across 3 of its 7 supported engines, which are ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot, Google AI Mode, Gemini and Claude. ZipTie is another low-cost route, because it prices by prompt and refresh rate and offers a free trial with 25 daily prompts."
      },
      {
        "type": "h3",
        "text": "Which tool is best for a marketing team that wants clear reporting?"
      },
      {
        "type": "p",
        "text": "Peec AI suits teams who want brand visibility, position and sentiment in one dashboard. Every plan includes unlimited users, so your whole marketing team can look at the same data. The Starter plan is €85 a month for 50 prompts, and Pro is €205 a month for 150 prompts across 3 countries."
      },
      {
        "type": "h3",
        "text": "Which tool is best if you already pay for an SEO suite?"
      },
      {
        "type": "p",
        "text": "Semrush, Ahrefs and SE Ranking all add AI visibility to the tools you already use. Ahrefs Brand Radar covers AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini, Copilot and Claude, and shows share of voice against competitors plus the fan-out queries behind each prompt. SE Visible starts from $71 a month and tracks AI Overviews, AI Mode, Gemini, ChatGPT and Copilot. Keeping everything in one login makes reporting simpler."
      },
      {
        "type": "h3",
        "text": "Which tool is best for a large brand or agency?"
      },
      {
        "type": "p",
        "text": "Profound offers up to 10 answer engines, including ChatGPT, Perplexity, Google AI Mode, Gemini, Claude and Google AI Overviews, on custom pricing. It also has a 7-day free trial that runs 50 prompts a day, which lets you test it before you talk to sales."
      },
      {
        "type": "p",
        "text": "We also asked ChatGPT the same question in a neutral prompt, with web search on. It returned its own shortlist with prices and links to each vendor's pricing page, and it included tools that Google did not."
      },
      {
        "type": "image",
        "src": "/insights/ai-monitor-2.jpg",
        "alt": "ChatGPT answer to a request for the best tools to monitor a brand in AI search, with a €85 a month Starter plan, Otterly.ai at $29 a month and Rankscale at $99 a month",
        "caption": "ChatGPT's answer to \"What are the best tools to monitor my brand in AI search results? Give a top 5 with prices\", 12 November 2026. Different assistants recommend different tools, which is why checking more than one AI platform matters."
      },
      {
        "type": "p",
        "text": "The two lists overlap but are not identical. That difference is the reason this category exists: what an AI assistant says about a brand depends on the assistant, the wording of the question and the day you ask."
      },
      {
        "type": "h2",
        "text": "How much do AI search monitoring tools cost?"
      },
      {
        "type": "p",
        "text": "Entry plans run from about $25 to $100 a month for one brand, and the cost climbs with the number of prompts you track. Price per prompt is a fairer way to compare plans than the headline price, because a cheap plan with few prompts can cost more per question than a larger plan."
      },
      {
        "type": "table",
        "head": [
          "Plan",
          "Monthly price",
          "Prompts",
          "Price per prompt"
        ],
        "rows": [
          [
            "OtterlyAI Lite",
            "$29",
            "20",
            "$1.45"
          ],
          [
            "OtterlyAI Standard",
            "$189",
            "160",
            "$1.18"
          ],
          [
            "OtterlyAI Premium",
            "$489",
            "535",
            "$0.91"
          ],
          [
            "Peec AI Starter",
            "€85",
            "50",
            "€1.70"
          ],
          [
            "Peec AI Pro",
            "€205",
            "150",
            "€1.37"
          ],
          [
            "Peec AI Advanced",
            "€425",
            "350",
            "€1.21"
          ]
        ]
      },
      {
        "type": "callout",
        "variant": "note",
        "title": "How we worked this out",
        "text": "On 12 November 2026 we opened the public pricing pages of OtterlyAI and Peec AI in the UK and divided each monthly price by its prompt allowance. Prices are shown in the currency each page displayed and are not converted."
      },
      {
        "type": "p",
        "text": "The pattern is clear. On both tools the price per prompt falls as you move up a plan, by roughly a third from the entry plan to the top self-serve plan. If you only need to track 20 to 50 prompts, an entry plan is enough. If you run several brands or markets, a larger plan costs less per question."
      },
      {
        "type": "image",
        "src": "/insights/ai-monitor-3.jpg",
        "alt": "Peec AI pricing page showing Starter at €85 a month, Pro at €205 a month, Advanced at €425 a month and a custom Enterprise plan",
        "caption": "Peec AI's pricing page on 12 November 2026: €85, €205 and €425 a month, with 50, 150 and 350 prompts."
      },
      {
        "type": "image",
        "src": "/insights/ai-monitor-4.jpg",
        "alt": "OtterlyAI pricing page showing Lite at $29 a month, Standard at $189 a month and Premium at $489 a month, with supported AI engines listed above",
        "caption": "OtterlyAI's pricing page on 12 November 2026: $29, $189 and $489 a month, with seven supported AI engines."
      },
      {
        "type": "p",
        "text": "Prices in AI summaries and review roundups can lag behind the vendors. On the day we checked, Google's AI Overview quoted Peec AI at $95 a month, while Peec AI's own page showed €85. Always read the vendor's pricing page before you buy."
      },
      {
        "type": "h2",
        "text": "How do you choose an AI search monitoring tool?"
      },
      {
        "type": "p",
        "text": "Choose by the questions your buyers ask and the AI platforms they use, then check that the tool covers both. A tool with 17 engines is no help if it does not track the platform your customers actually use."
      },
      {
        "type": "steps",
        "title": "A six-step way to choose",
        "items": [
          {
            "title": "List your buyers' questions",
            "text": "Write 20 to 50 questions a customer asks before buying, such as \"best removal company in Leeds\" or \"how much does a 3PL cost\". These become your prompts."
          },
          {
            "title": "Pick the AI platforms that matter",
            "text": "Check where your buyers research. Most businesses start with ChatGPT, Google AI Overviews and Perplexity, then add Gemini, Claude or Copilot."
          },
          {
            "title": "Check countries and languages",
            "text": "If you sell in several markets, confirm the tool tracks each one. Peec AI limits countries by plan, while OtterlyAI lets you add unlimited countries on every plan."
          },
          {
            "title": "Compare price per prompt",
            "text": "Use the table above. Work out how many prompts you need today and in six months."
          },
          {
            "title": "Test with a free trial",
            "text": "ZipTie and Profound offer free trials. Run your real prompts and check the answers match what you see by hand."
          },
          {
            "title": "Check the exports and reporting",
            "text": "Make sure you can export citations and share a report with your team or client."
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should an AI search monitoring tool track?"
      },
      {
        "type": "p",
        "text": "A good tool records four things for every prompt: whether your brand is mentioned, where it appears in the answer, which pages and websites are cited, and which competitors appear alongside you. Sentiment, meaning how the AI describes your brand, is a useful fifth."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Brand mentions.** How often your brand appears across your prompts, shown as a share of all answers."
          },
          {
            "text": "**Citations.** The pages AI assistants link to. These show you which sites and pages to earn a place on."
          },
          {
            "text": "**Competitor share of voice.** How often your competitors appear compared with you."
          },
          {
            "text": "**Sentiment and wording.** Whether the AI describes you accurately, and in what terms."
          },
          {
            "text": "**Fan-out queries.** The related searches an AI runs behind one prompt. Ahrefs Brand Radar reports these."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guide to [tracking brand mentions in AI search](/insights/best-ways-to-track-brand-mentions-in-ai-search) shows how to set up the prompts and read the results, and our [AI brand visibility checklist](/insights/how-to-improve-brand-visibility-in-ai-search-engines) lists 12 checks to run once the data comes in."
      },
      {
        "type": "h2",
        "text": "Can you monitor AI search for free?"
      },
      {
        "type": "p",
        "text": "Yes. You can run your prompts by hand in ChatGPT, Gemini, Perplexity and Google, and use Google Analytics 4 and Search Console for the traffic that arrives from AI. It takes more time and gives you snapshots rather than daily trends, but it costs nothing and is a sensible start."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Run your 10 most important prompts once a month.** Record whether you are mentioned, which competitors appear and which pages are cited in a simple sheet."
          },
          {
            "text": "**Use a neutral prompt.** Ask about the category, not your own brand, because AI assistants answer differently for a brand they already know."
          },
          {
            "text": "**Check Search Console.** The Generative AI features report shows when your pages appear in Google's AI results."
          },
          {
            "text": "**Track AI visits in GA4.** Our guide on [how to track AI traffic for free](/insights/track-ai-traffic) walks through the setup step by step."
          }
        ]
      },
      {
        "type": "p",
        "text": "Move to a paid tool when you need daily tracking, several markets or reports for a client. Until then, a monthly manual check plus GA4 gives you a baseline."
      },
      {
        "type": "h2",
        "text": "What do you do with AI search monitoring data?"
      },
      {
        "type": "p",
        "text": "Use it to decide which pages to improve and where to earn mentions. If a competitor is named in most answers, look at the pages the AI cites for them. Those are the sites where a mention or a better page of your own would help."
      },
      {
        "type": "p",
        "text": "Three actions usually follow. First, improve the pages that rank in Google for the topic, because [AI Overviews draw heavily on pages that already rank](/insights/how-to-rank-in-ai-overviews). Second, make sure your site and listings state clearly what you do, as the [ChatGPT guide](/insights/how-to-rank-in-chatgpt) explains. Third, earn mentions on the review sites, industry lists and news pages that AI tools cite. Our guide to [answer engine optimisation](/insights/answer-engine-optimisation) covers the whole approach."
      }
    ],
    "faq": [
      {
        "q": "What is the best AI search monitoring tool?",
        "a": "There is no single best tool. OtterlyAI suits small teams on a budget, Peec AI suits marketing teams that want clear reporting, and Semrush, Ahrefs Brand Radar and SE Visible suit teams already using those suites. Profound suits large brands."
      },
      {
        "q": "How much does AI search monitoring cost?",
        "a": "Entry plans cost roughly $25 to $100 a month for one brand, for example OtterlyAI Lite at $29 and Peec AI Starter at €85. Larger plans run to several hundred a month, and enterprise plans are custom."
      },
      {
        "q": "Are there free AI search monitoring tools?",
        "a": "Some tools offer free trials, including ZipTie and Profound. You can also check AI answers by hand each month and track AI visits in Google Analytics 4 and Search Console for free."
      },
      {
        "q": "Which AI platforms should I monitor?",
        "a": "Start with the platforms your buyers use. Most businesses track ChatGPT, Google AI Overviews and Perplexity first, then add Gemini, Google AI Mode, Claude and Microsoft Copilot."
      },
      {
        "q": "How many prompts do I need to track?",
        "a": "Most small businesses start with 20 to 50 prompts that match the questions customers ask before buying. Add more as you cover more products, services or markets."
      },
      {
        "q": "How often should I check AI search results?",
        "a": "Daily or weekly tracking in a tool shows the trend. If you check by hand, once a month is a reasonable starting point."
      },
      {
        "q": "Do AI search monitoring tools improve my visibility?",
        "a": "No tool improves visibility on its own. They show where you appear and why, and the improvements come from better pages, clearer listings and mentions on sites that AI assistants cite."
      }
    ]
  },
  {
    "slug": "self-storage-marketing",
    "seoTitle": "Self Storage Marketing: 15 Ideas to Fill Units 2027",
    "title": "Self Storage Marketing in 2027: 15 Ideas to Fill More Units",
    "description": "Self storage marketing ideas for 2027: 15 ways to fill more units with Google My Business, your website, AI search, local partners and tenant retention.",
    "date": "2026-11-11",
    "author": "team",
    "topics": [
      "Everything Marketing"
    ],
    "industries": [],
    "image": "/insights/self-storage-marketing-banner.jpg",
    "intro": "Someone needs a storage unit this week. They search on their phone, compare three facilities on a map, and call the one with the clearest price and the best reviews. Self storage marketing in 2027 is about being that facility. This guide gives you 15 ideas, from your Google My Business listing to AI answers, partnerships and tenant retention, so you can fill more units without guessing.",
    "tldr": [
      "Start with Google My Business, reviews and one page per facility. They decide who appears when someone searches for storage nearby.",
      "Show prices and let people reserve online. Most renters decide on a phone.",
      "Check what ChatGPT, Gemini and Google's AI Overviews say about you each month. Business websites and listings are what they quote.",
      "Partnerships with movers, estate agents and universities fill units in busy seasons.",
      "Track move-ins by source so you know which idea pays back."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is the best way to do self storage marketing in 2027?"
      },
      {
        "type": "p",
        "text": "The best self storage marketing in 2027 starts where renters start: a search on Google, a map listing and an answer from an AI assistant. Fill those three places with accurate, up-to-date information first, then add offers, partnerships and retention on top. The 15 ideas below follow that order."
      },
      {
        "type": "p",
        "text": "Demand gives you a reason to act now. StorageCafe reports that [self storage searches rose 23% in 2025](https://www.storagecafe.com/blog/self-storage-demand-and-trends-2026/) across the 150 largest US cities, nearly triple the growth of the year before. Google Trends shows the same pattern in the UK, where interest in the term \"self storage\" is well above its level of five years ago."
      },
      {
        "type": "image",
        "src": "/insights/sm-4.jpg",
        "alt": "Google Trends chart of UK web search interest in self storage over the past five years, rising from 2024 to a peak in 2026",
        "caption": "Google Trends: UK interest in \"self storage\" over five years. Source: Google Trends."
      },
      {
        "type": "p",
        "text": "More searches also mean more competitors fighting for the same renters. Marketing that fills units is the kind that is easy to find, easy to trust and easy to book."
      },
      {
        "type": "h2",
        "text": "How do you market a self storage business on Google?"
      },
      {
        "type": "p",
        "text": "You market a self storage business on Google by owning three things: your Google My Business listing (now called Google Business Profile), your location pages and your reviews. These decide who appears in the map results and who gets the call."
      },
      {
        "type": "image",
        "src": "/insights/sm-1.jpg",
        "alt": "Google AI Overview answering how to market a self storage business, with a mix of local optimisation and digital visibility",
        "caption": "Google's AI Overview for \"how to market a self storage business\" points to local visibility first."
      },
      {
        "type": "h3",
        "text": "1. Complete your Google My Business listing"
      },
      {
        "type": "p",
        "text": "Fill in every field: primary category, hours, unit sizes, photos, services and a link to the matching location page. Our guide to [Google My Business for self storage](/insights/google-my-business-self-storage) covers what decides map ranking, step by step."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Choose the right primary category.** Pick Self-storage facility, and add secondary categories only if they are true."
          },
          {
            "text": "**Add real photos.** Show the entrance, the corridors, the unit sizes and the access gate."
          },
          {
            "text": "**Keep hours current.** Update them for bank holidays so the listing never sends someone to a locked gate."
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. Ask every tenant for a review"
      },
      {
        "type": "p",
        "text": "Reviews are the first thing a renter reads on a listing. Send a direct review link by text or email a week after move-in, when the experience is fresh, and reply to every review, good or bad, within two days."
      },
      {
        "type": "h3",
        "text": "3. Build one page for every facility"
      },
      {
        "type": "p",
        "text": "Each facility needs its own page with its address, unit sizes, prices from, access hours, security features and directions. A single \"locations\" page with a list of towns gives Google and AI tools very little to quote."
      },
      {
        "type": "h3",
        "text": "4. Target the searches renters actually type"
      },
      {
        "type": "p",
        "text": "Around 823,000 people a month search \"storage units near me\" in the US alone (Semrush, US database). In the UK, renters add a town or a reason, such as \"student storage Leeds\" or \"cheap storage near me\". Write a page or a section for each reason."
      },
      {
        "type": "image",
        "src": "/insights/sm-3.jpg",
        "alt": "Google AI Overview for self storage near me in Manchester listing facilities with star ratings and weekly prices",
        "caption": "A local search in Manchester shows facilities, ratings and prices in the AI Overview."
      },
      {
        "type": "h3",
        "text": "5. Answer the questions renters ask before they call"
      },
      {
        "type": "p",
        "text": "The People Also Ask box shows the questions people raise, such as whether storage units are profitable or what demand looks like locally. Add a short FAQ to your unit pages answering what size to pick, what is not allowed, how access works and how notice periods work."
      },
      {
        "type": "image",
        "src": "/insights/sm-2.jpg",
        "alt": "Google People Also Ask box for how to market a self storage business listing four related questions",
        "caption": "People Also Ask shows the follow-up questions around self storage marketing."
      },
      {
        "type": "h2",
        "text": "How do you get more self storage enquiries from your website?"
      },
      {
        "type": "p",
        "text": "You get more enquiries when a visitor can see the price, pick a size and reserve a unit in a few taps. Most people first reach your website on a phone, so speed and simplicity matter more than design."
      },
      {
        "type": "h3",
        "text": "6. Show prices and let people reserve online"
      },
      {
        "type": "p",
        "text": "Hiding prices behind a phone call loses renters who would rather compare in private. Show a starting price for each unit size and add an online reserve or enquiry button that works on a phone."
      },
      {
        "type": "h3",
        "text": "7. Add a unit size guide"
      },
      {
        "type": "p",
        "text": "Most first-time renters do not know whether they need 25 or 50 square feet. A simple guide with what fits in each size, such as a one-bedroom flat in a 50 square foot unit, reduces calls and raises bookings. Keep the claims general and match them to your own unit sizes."
      },
      {
        "type": "h3",
        "text": "8. Track enquiries, not just visits"
      },
      {
        "type": "p",
        "text": "Set up Google Analytics 4 to count reservations, enquiry forms and click-to-call as key events. Our guide to [free tools for self storage websites](/insights/free-tools-self-storage-website-google-my-business) explains each step, and our guide to [tracking AI traffic](/insights/track-ai-traffic) shows how to see visits from ChatGPT and similar tools."
      },
      {
        "type": "h2",
        "text": "How do you get a self storage business recommended by AI search?"
      },
      {
        "type": "p",
        "text": "You get recommended by AI tools by making sure the sources they read are accurate: your website, your Google My Business listing and the directories that copy them. A [Yext](https://www.businesswire.com/news/home/20251009106549/en) study of 6.8 million AI citations found business websites and business listings made up 86% of the sources cited by ChatGPT, Gemini and Perplexity."
      },
      {
        "type": "h3",
        "text": "9. Keep your name, address and phone number identical everywhere"
      },
      {
        "type": "p",
        "text": "Check your website, Google, Bing and the main directories. Even a small difference, such as \"Rd\" against \"Road\", can split your reputation across two records."
      },
      {
        "type": "h3",
        "text": "10. Test the AI answers every month"
      },
      {
        "type": "p",
        "text": "Ask ChatGPT, Gemini and Google's AI Mode for \"best self storage in [your town]\" and \"cheap student storage in [your town]\". Note whether you appear, which sources are cited and what is said about price and access. Our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) explains how the answers are built."
      },
      {
        "type": "h3",
        "text": "11. Get mentioned by local sites"
      },
      {
        "type": "p",
        "text": "Local news sites, university housing pages, estate agents, removal firms and chambers of commerce all write about moving and storage. A mention or a link from them helps with Google and with AI answers. Offer a useful tip sheet, such as a student storage checklist, rather than asking for a link outright."
      },
      {
        "type": "h2",
        "text": "What offline and offer-led self storage marketing ideas still work?"
      },
      {
        "type": "p",
        "text": "Offers and partnerships still fill units, particularly in busy moving seasons. Use them to support your search presence, not to replace it."
      },
      {
        "type": "h3",
        "text": "12. Run a clear first-month offer"
      },
      {
        "type": "p",
        "text": "Offers such as a reduced first month work because renters compare several facilities on the same afternoon. State the offer, the conditions and the end date on the unit page and on your Google My Business listing posts. Check that the offer still leaves each unit profitable once the discount ends."
      },
      {
        "type": "h3",
        "text": "13. Partner with movers, estate agents and universities"
      },
      {
        "type": "p",
        "text": "People who are moving need storage at the same time. Agree a simple referral arrangement with local removal firms, estate agents, letting agents and student housing offices, and give each partner a link or code you can track."
      },
      {
        "type": "h3",
        "text": "14. Use signage and drive-by traffic"
      },
      {
        "type": "p",
        "text": "A visible sign with a short phone number or web address still brings walk-ins, especially at road junctions and near housing developments. Add a QR code to a tracked page so you can see how many people scan it."
      },
      {
        "type": "h2",
        "text": "How do you keep tenants and fill the units they leave?"
      },
      {
        "type": "p",
        "text": "You keep tenants by staying in touch, and you refill units faster by knowing why people leave. Retention is cheaper than winning a new renter."
      },
      {
        "type": "h3",
        "text": "15. Email tenants and ask why they leave"
      },
      {
        "type": "p",
        "text": "Send a short note at three months with tips and a thank you, and ask every leaving tenant one question: what made you leave? The answers tell you whether to change price, access or communication. If you would like an outside team to do this work, see our comparison of [the best AI marketing agencies for self storage](/insights/best-ai-marketing-agency-self-storage)."
      },
      {
        "type": "h2",
        "text": "How do you measure self storage marketing?"
      },
      {
        "type": "p",
        "text": "Measure the number of calls, direction requests, reservations and move-ins, not just visits. Check Google My Business performance and Search Console monthly, and GA4 for reservations. Compare each month with the same month a year ago, because storage demand rises and falls with the moving season."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google My Business:** calls, direction requests and website clicks."
          },
          {
            "text": "**Search Console:** searches that show your location pages and your average position."
          },
          {
            "text": "**GA4:** reservations and enquiries by source."
          },
          {
            "text": "**Your own system:** move-ins by lead source, so you know which idea paid back."
          }
        ]
      },
      {
        "type": "p",
        "text": "Want results like these for your business? We build local SEO and AI search plans for self storage owners. [Let's talk](https://www.maai.agency/book)"
      }
    ],
    "faq": [
      {
        "q": "What is the best marketing for self storage?",
        "a": "Local search comes first. A complete Google My Business listing, good reviews, a page for each facility and clear prices bring the most renters for the least spend. Offers and partnerships then add volume."
      },
      {
        "q": "How do I market a self storage business with no budget?",
        "a": "Claim and complete your Google My Business listing, ask every tenant for a review, add prices and a reserve button to your website, and offer partner referrals to local movers and agents. All of these are free apart from your time."
      },
      {
        "q": "How do I get more self storage leads?",
        "a": "Show up in the three places renters look: Google map results, Google search results and AI answers. Then make it easy to reserve, with visible prices and a form that works on a phone."
      },
      {
        "q": "Does self storage SEO work?",
        "a": "Yes. Renters search for storage by town and reason, and the results reward local pages, reviews and a complete listing. Search interest in self storage has grown in recent years, so more people are looking."
      },
      {
        "q": "Should self storage owners use Google Ads?",
        "a": "Paid search can fill units quickly in a competitive area, but it stops when the budget stops. Use it for launches and seasonal peaks while your listing and location pages build lasting visibility."
      },
      {
        "q": "How long does self storage marketing take to work?",
        "a": "Listing and website fixes can show results in weeks. Map ranking and organic search gains usually take a few months of steady work."
      }
    ]
  },
  {
    "slug": "best-ways-to-track-brand-mentions-in-ai-search",
    "seoTitle": "Best Ways to Track Brand Mentions in AI Search 2027",
    "title": "Best Ways to Track Brand Mentions in AI Search in 2027: ChatGPT, Perplexity and AI Overviews",
    "description": "Learn the best ways to track brand mentions in AI search, from a free monthly prompt log to GA4 and paid tools, across ChatGPT, Perplexity and AI Overviews.",
    "date": "2026-11-11",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/best-ways-to-track-brand-mentions-in-ai-search-banner.jpg",
    "intro": "Your brand can be named in an AI answer today and missing tomorrow, and your analytics will not tell you either way. This guide shows the best ways to track brand mentions in AI search: a free monthly routine, how to read the visits that follow in Google Analytics 4, and when a paid tool is worth it across ChatGPT, Perplexity and Google AI Overviews.",
    "tldr": [
      "Track brand mentions in AI search by running a fixed list of buyer prompts monthly and logging whether you are named and which sources are cited.",
      "Pew Research found people click a traditional result in 8% of visits when an AI summary shows, against 15% without one.",
      "Cover ChatGPT, Perplexity and Google AI Overviews separately, because each uses different sources.",
      "Use Google Analytics 4 to see the visits that follow a mention, and a paid tracker only when you need scale.",
      "Ahrefs found branded web mentions (0.664) link more strongly to AI Overview visibility than backlinks (0.218)."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is the best way to track brand mentions in AI search?"
      },
      {
        "type": "p",
        "text": "The best way to track brand mentions in AI search is to write a fixed list of the questions your buyers ask, run them in ChatGPT, Perplexity and Google AI Overviews on a schedule, and log whether your brand is named, where, and which sources the answer cites. A paid tracker automates the same routine once you need to cover many prompts."
      },
      {
        "type": "p",
        "text": "A brand mention in AI search is any time an AI answer names your business, with or without a link. A citation is when the answer also shows your page as a source. Both matter, and you can track both with the routine below."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-routine.jpg",
        "alt": "Four step diagram: write 20 buyer prompts, run them in each AI tool, log mentions and sources, fix gaps and repeat monthly",
        "caption": "The monthly routine for tracking brand mentions in AI search."
      },
      {
        "type": "h2",
        "text": "Why should you track brand mentions in AI search?"
      },
      {
        "type": "p",
        "text": "Buyers now see an AI answer before they see your website, so a mention inside that answer can decide whether they ever click. The [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults and 68,879 Google searches in March 2025. People clicked a traditional result in 8% of visits when an AI summary appeared, against 15% when it did not."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-pew-clicks.jpg",
        "alt": "Column chart showing 15% of Google visits include a click on a traditional result without an AI summary and 8% with one",
        "caption": "Clicks on traditional results with and without an AI summary. Source: Pew Research Center."
      },
      {
        "type": "p",
        "text": "That chart explains why rankings and traffic alone no longer tell you the full story. Your brand can be recommended to a buyer who never clicks, and it can be missing from an answer where your page still ranks. Mentions are the number that shows you the gap. Our guide on [answer engine optimisation](/insights/answer-engine-optimisation) covers the wider shift."
      },
      {
        "type": "h2",
        "text": "Which AI tools should you track your brand mentions in?"
      },
      {
        "type": "p",
        "text": "Track the tools your buyers use for research: ChatGPT, Perplexity, Google AI Overviews and AI Mode, and Gemini. Add Claude if your buyers are technical. Each tool pulls from different sources, so a brand can be named in one and missing from another."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**ChatGPT.** The biggest assistant by use. Switch search on so the answer shows its web sources."
          },
          {
            "text": "**Perplexity.** Shows numbered sources on every answer, so it is the easiest place to see which pages earn citations."
          },
          {
            "text": "**Google AI Overviews and AI Mode.** Run your prompts on Google with a logged-out browser and note whether an overview appears and who it names."
          },
          {
            "text": "**Gemini and Claude.** Check these monthly if your audience uses them. Our guide to [ranking in Claude](/insights/how-to-rank-in-claude) explains how that tool finds sources."
          }
        ]
      },
      {
        "type": "p",
        "text": "Only 7 of the 50 most-mentioned domains appeared across Google AI Overviews, ChatGPT and Perplexity in Ahrefs' study, so do not assume one result carries over to the others. Log each tool in its own column."
      },
      {
        "type": "h2",
        "text": "How do you track brand mentions in AI search for free?"
      },
      {
        "type": "p",
        "text": "You track brand mentions in AI search for free by running a fixed prompt list by hand each month and recording the answers in a spreadsheet. It takes about an hour for 20 prompts across three tools, and it gives you a baseline before you pay for anything."
      },
      {
        "type": "h3",
        "text": "Step 1: Write 20 prompts your buyers would actually ask"
      },
      {
        "type": "p",
        "text": "Start from the questions customers ask before they buy. Include a mix so you see different kinds of visibility."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Category prompts.** \"Best accounting software for a small UK business\" or \"best removal companies in Manchester\". These show whether you make the shortlist."
          },
          {
            "text": "**Problem prompts.** \"How do I reduce late deliveries from my supplier?\" These show whether you appear while buyers are still learning."
          },
          {
            "text": "**Comparison prompts.** \"[Your brand] vs [competitor]\". These show how the AI describes you next to others."
          },
          {
            "text": "**Brand prompts.** \"What is [your brand]?\" and \"Is [your brand] any good?\". These show whether the facts are right."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 2: Run each prompt in a fresh session"
      },
      {
        "type": "p",
        "text": "Open a new chat or a private window for each tool so earlier chats do not shape the answer. Use the same wording every month. AI answers change from one run to the next, so run each important prompt three times and note how often your brand appears."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-2-chatgpt-crm.jpg",
        "alt": "ChatGPT answer to the best CRM for a small B2B team, naming three tools with prices and sources",
        "caption": "Step 2 in practice: one buyer prompt run in ChatGPT with search on. Note which brands are named, in what order, and which sources are shown."
      },
      {
        "type": "h3",
        "text": "Step 3: Log the result in a simple sheet"
      },
      {
        "type": "p",
        "text": "Make one row per prompt per tool. Keep the columns the same every month so you can compare."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Date, tool and prompt.**"
          },
          {
            "text": "**Brand named?** Yes or no, and the position in the answer (first, in a list, last)."
          },
          {
            "text": "**How you were described.** Copy the exact sentence, and mark anything wrong."
          },
          {
            "text": "**Sources cited.** Note the pages and sites the answer used, including competitors."
          },
          {
            "text": "**Competitors named.** List who appeared instead of you."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 4: Work out your share of mentions"
      },
      {
        "type": "p",
        "text": "Divide the prompts where you were named by the prompts you ran. If you ran 20 prompts and were named in 6, your share of mentions is 30%. Track that number per tool and per prompt type. It is the one figure to report each month."
      },
      {
        "type": "h2",
        "text": "What should you measure when you track brand mentions in AI search?"
      },
      {
        "type": "p",
        "text": "Measure five things: share of mentions, position in the answer, accuracy, sources cited and the visits that follow. Together they show whether you are named, how well, and whether it brings business."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Share of mentions.** The percentage of prompts that name you."
          },
          {
            "text": "**Position.** Being named first or in the top three counts for more than a passing reference."
          },
          {
            "text": "**Accuracy.** The share of facts the AI gets right about your services, location and pricing."
          },
          {
            "text": "**Citations.** Which of your pages get cited, and which competitor pages are cited instead."
          },
          {
            "text": "**Visits and enquiries.** Visits from AI tools in your analytics, covered in the next section."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you track visits from ChatGPT and Perplexity in Google Analytics 4?"
      },
      {
        "type": "p",
        "text": "In Google Analytics 4, open the Traffic acquisition report and look for sessions with a source such as chatgpt.com or perplexity.ai. These are people who clicked a link in an AI answer. They show the visits that follow a mention, but not the mentions where nobody clicked."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-3-ga4-chatgpt-sessions.jpg",
        "alt": "Google Analytics 4 traffic acquisition report filtered to chatgpt.com, showing sessions by source and medium",
        "caption": "Visits from ChatGPT in GA4's Traffic acquisition report, filtered to the chatgpt.com source."
      },
      {
        "type": "p",
        "text": "That is why you need both views. The prompt log tells you how often you are named, and analytics tells you how many people act on it. Our free guide to [tracking AI traffic in Google Analytics 4 and Search Console](/insights/track-ai-traffic) shows the exact set-up, including how to group AI sources into one channel."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-4-ga4-key-event-rate.jpg",
        "alt": "Google Analytics 4 table of sessions, key events and key event rate by channel, with AI Assistant at 15.93 percent and Organic Search at 6.59 percent",
        "caption": "Key events per session by channel: AI assistant visits turned into key events at 15.93%, against 6.59% for organic search."
      },
      {
        "type": "h2",
        "text": "How do you track brand mentions in Google AI Overviews and AI Mode?"
      },
      {
        "type": "p",
        "text": "Run your prompts on Google in a logged-out browser and record whether an AI Overview appears, whether it names you, and which sources it cites. Then check Google Search Console, which counts AI Overview and AI Mode activity in its Performance report and has a Generative AI report for impressions."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-1-google-ai-overview.jpg",
        "alt": "Google AI Overview for how to track brand mentions in AI search, listing tracking methods and cited sources",
        "caption": "A Google AI Overview for a buyer-style search: note whether your brand is named and which sources are cited."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Check the overview yourself.** Search each prompt, open the source panel and note the cited pages."
          },
          {
            "text": "**Use Search Console for your own pages.** Look at the queries where your pages already earn impressions, because those are the prompts where you can win a citation."
          },
          {
            "text": "**Expect volatility.** Overviews change often, so compare monthly trends, not single results."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guide to [ranking in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) explains how to improve the result once you can see it."
      },
      {
        "type": "h2",
        "text": "Which tools track brand mentions in AI search automatically?"
      },
      {
        "type": "p",
        "text": "Paid trackers run your prompts on a schedule across several AI tools and report mentions, citations and competitors in a dashboard. Examples include Ahrefs Brand Radar, which tracks prompts across AI Overviews, ChatGPT, Perplexity, Copilot and Gemini, and the AI Visibility toolkit in Semrush."
      },
      {
        "type": "p",
        "text": "Most vendors describe their own tools, so treat their claims with care and run a trial on your own prompts first. Choose a paid tracker when you have more than about 50 prompts, several locations or several brands, or when you need weekly data. For a single small business, the free routine above is enough to start. A full comparison of the tools will follow in our guide to AI search monitoring tools."
      },
      {
        "type": "h2",
        "text": "What affects whether AI search names your brand?"
      },
      {
        "type": "p",
        "text": "Branded web mentions on other websites have the strongest link to AI Overview brand visibility that Ahrefs measured. In its study of 75,000 brands, branded web mentions correlated at 0.664 with appearing in AI Overviews, against 0.218 for backlinks."
      },
      {
        "type": "image",
        "src": "/insights/track-mentions-ahrefs-correlation.jpg",
        "alt": "Column chart comparing the correlation of branded web mentions (0.664) and backlinks (0.218) with AI Overview brand visibility",
        "caption": "Correlation with AI Overview brand visibility. Source: Ahrefs, 75,000 brands."
      },
      {
        "type": "p",
        "text": "Correlation does not prove cause, as Ahrefs notes itself. It does tell you where to look when your log shows gaps: the sites that already discuss your category. If competitors are named because they appear on review sites, industry lists and news coverage, those are the places to earn a mention. Our [AI brand visibility checklist](/insights/how-to-improve-brand-visibility-in-ai-search-engines) lists the 12 checks that improve this."
      },
      {
        "type": "h2",
        "text": "How often should you track brand mentions in AI search?"
      },
      {
        "type": "p",
        "text": "Check monthly for most businesses, and weekly during a campaign, a launch or a site change. AI answers move around, so one check can mislead. Compare the same prompts month on month and look at the trend in your share of mentions."
      },
      {
        "type": "h2",
        "text": "What should you do when AI search does not mention your brand?"
      },
      {
        "type": "p",
        "text": "Use the log to find out why, then fix the cause in this order."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Wrong or missing facts.** Update your website, Google Business Profile and directory listings so they agree with each other."
          },
          {
            "text": "**You are not cited.** Look at the pages the answer used and publish a clearer, answer-first page on the same question."
          },
          {
            "text": "**Competitors are named on third-party sites.** Pitch those sites for a mention, through digital PR, expert comments and reviews."
          },
          {
            "text": "**No visits follow.** Check that the pages AI tools cite have a clear next step."
          }
        ]
      },
      {
        "type": "p",
        "text": "Re-run the same prompts four to eight weeks later and compare your share of mentions. Small, steady gains are normal."
      }
    ],
    "faq": [
      {
        "q": "How do I check if ChatGPT mentions my brand?",
        "a": "Open a new ChatGPT chat with search on, ask the questions your buyers ask and note whether your brand is named and which sources appear. Repeat each prompt three times, because answers vary."
      },
      {
        "q": "Can I track brand mentions in AI search for free?",
        "a": "Yes. Run a fixed list of about 20 prompts monthly in ChatGPT, Perplexity and Google, and record the results in a spreadsheet. Add Google Analytics 4 to see the visits that follow."
      },
      {
        "q": "What is the difference between a brand mention and a citation in AI search?",
        "a": "A mention is when the answer names your brand. A citation is when the answer links to your page as a source. You can be mentioned without a link, and cited without being named."
      },
      {
        "q": "Does Google Search Console show brand mentions in AI Overviews?",
        "a": "Not as brand mentions. It counts AI Overview and AI Mode activity for your pages in the Performance report and has a Generative AI report for impressions, but it does not tell you when your brand is named in the text."
      },
      {
        "q": "How many prompts should I track?",
        "a": "Start with 20 that cover category, problem, comparison and brand questions. Add more as you learn which topics matter to your buyers."
      },
      {
        "q": "Do I need a paid AI visibility tool?",
        "a": "Not at first. A paid tool helps when you track many prompts, locations or brands, or need weekly reporting."
      }
    ]
  },
  {
    "slug": "seo-for-moving-companies",
    "seoTitle": "SEO for Moving Companies in 2027: Rank Locally and in AI",
    "title": "SEO for Moving Companies in 2027: How to Rank Locally and in AI Search",
    "description": "SEO for moving companies explained: set up Google Business Profile, win reviews, build service and town pages and show up in AI answers. Step by step.",
    "date": "2026-11-10",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [
      "Removals & Relocation"
    ],
    "image": "/insights/seo-for-moving-companies-banner.jpg",
    "intro": "When someone needs a mover, they search, check the map results, read reviews and call two or three firms. If your removals company is not in those results, the job goes to a competitor. This guide shows you how SEO for moving companies works in 2027: how to rank in Google's local results, win the reviews buyers read, build the pages that bring quote requests and get named in AI answers.",
    "tldr": [
      "SEO for moving companies means being found in Google map results, standard results and AI answers when people search for a mover.",
      "Your Google Business Profile drives map results: the primary category, distance, name, hours and reviews are the top factors in Whitespark's 2026 survey.",
      "97% of consumers read online reviews for local businesses, and 74% want reviews from the last three months (BrightLocal 2026).",
      "Build one page for each service and each town you really serve, and answer buyer questions first.",
      "Track calls and quote requests, not only visits."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is SEO for moving companies, and how does it get you more jobs?"
      },
      {
        "type": "p",
        "text": "SEO for moving companies is the work of making your removals business appear when people search for a mover in the places you cover. It covers your Google Business Profile, your website, your reviews and the mentions of your firm on other sites. Done well, it puts your phone number in front of people who already plan to move and are choosing who to call."
      },
      {
        "type": "p",
        "text": "In the UK many buyers say \"removals\" and many in the US say \"moving company\", so we use both terms in this guide. The steps are the same either way."
      },
      {
        "type": "h2",
        "text": "Why do moving companies need SEO in 2027?"
      },
      {
        "type": "p",
        "text": "Moves are planned, expensive and stressful, so buyers search, compare and read reviews before they request a quote. The [BrightLocal Local Consumer Review Survey 2026](https://www.brightlocal.com/research/local-consumer-review-survey/) found that 97% of consumers read online reviews for local businesses, and 41% say they always do."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-moving-companies-reviews-stat.jpg",
        "alt": "Stat card showing 97% of consumers read online reviews for local businesses",
        "caption": "Share of consumers who read online reviews for local businesses. Source: BrightLocal."
      },
      {
        "type": "p",
        "text": "Search is also changing. The [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults and found people clicked a traditional result in 8% of visits when Google showed an AI summary, against 15% when it did not. For a removals firm, that means being found in map results, in your own pages and inside AI answers all matter. Our guide on [answer engine optimisation](/insights/answer-engine-optimisation) explains the wider shift."
      },
      {
        "type": "h2",
        "text": "How do customers find a moving company online?"
      },
      {
        "type": "p",
        "text": "Customers find a mover in three places: Google's map results, the standard website results, and AI answers from tools such as Google AI Overviews and ChatGPT. Each one rewards different work, so a good plan covers all three."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-moving-companies-three-places.jpg",
        "alt": "Three cards showing the places buyers find a mover: Google map results, website results and AI answers, with what decides each one",
        "caption": "The three places buyers find a mover, and what decides each. Source: Google Business Profile Help and Whitespark."
      },
      {
        "type": "image",
        "src": "/insights/moving-1-ai-overview-removals-manchester.jpg",
        "alt": "Google AI Overview for removals near me Manchester, listing a removals company with its rating, reviews and open status",
        "caption": "What a buyer sees: Google's AI Overview for a local removals search shows ratings, reviews and opening status next to each company."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Google map results.** The map and three listings at the top of a search such as \"removals near me\". Your Google Business Profile decides this."
          },
          {
            "text": "**Website results.** The usual blue links. Your service pages, town pages and the links pointing to your site decide this."
          },
          {
            "text": "**AI answers.** Summaries that name a few firms. Mentions on trusted sites and clear service pages decide this."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How does Google decide which removals company ranks locally?"
      },
      {
        "type": "p",
        "text": "Google says local results are mainly based on relevance, distance and prominence. Relevance is how well your profile matches the search. Distance is how far you are from the searcher. Prominence is how well known you are, which Google links to links pointing at your site and your review count."
      },
      {
        "type": "p",
        "text": "The [Whitespark Local Search Ranking Factors 2026](https://whitespark.ca/local-search-ranking-factors/) report, a survey of local SEO experts, scores individual factors. These are the top ten for map results. The numbers are the experts' scores, not percentages."
      },
      {
        "type": "table",
        "head": [
          "Rank",
          "Factor for map results (Whitespark 2026)",
          "Score"
        ],
        "rows": [
          [
            "1",
            "Primary Google Business Profile category",
            "227"
          ],
          [
            "2",
            "Distance from the searcher to your address",
            "225"
          ],
          [
            "3",
            "Keywords in your Google Business Profile name",
            "223"
          ],
          [
            "4",
            "Physical address in the city searched",
            "213"
          ],
          [
            "5",
            "Business open at the time of search",
            "189"
          ],
          [
            "6",
            "High Google star ratings",
            "181"
          ],
          [
            "7",
            "Address showing on the profile (not hidden)",
            "176"
          ],
          [
            "8",
            "Additional categories",
            "173"
          ],
          [
            "9",
            "Number of native Google reviews with text",
            "170"
          ],
          [
            "10",
            "Correct map pin placement",
            "165"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Most of these sit inside your Google Business Profile. That is why the next section comes first."
      },
      {
        "type": "h2",
        "text": "How do you set up a Google Business Profile for a moving company?"
      },
      {
        "type": "p",
        "text": "Create one profile for each real location, choose the closest primary category, add your services and set your service area. If you travel to customers and have no shopfront, Google treats you as a service-area business and asks you to hide your address."
      },
      {
        "type": "h3",
        "text": "Which category and service area should a removals company choose?"
      },
      {
        "type": "p",
        "text": "Google's guidance is to pick the fewest categories that describe what your business is, and to make them as specific as you can. Choose Moving company as your primary category if it fits, then add only the extra categories that describe other core services, such as storage. Do not use categories as keywords."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Set your service area.** Google advises that a service area should not stretch beyond about two hours of driving from your base. List the towns you really cover."
          },
          {
            "text": "**Hide your address if you work from a depot or home.** Google asks service-area businesses to do this. Show it only if customers can visit staffed premises during your listed hours."
          },
          {
            "text": "**Keep one profile per real location.** A virtual office does not qualify unless it is staffed during business hours."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What should you add to your profile each month?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Services.** List house removals, office removals, packing, storage and man and van work separately."
          },
          {
            "text": "**Photos.** Add real photos of your vans, crews and jobs. Replace old ones."
          },
          {
            "text": "**Posts and updates.** Share moving tips and availability for busy weeks."
          },
          {
            "text": "**Hours.** Keep them right, including bank holidays, because being open at the time of search is a ranking factor."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guide on [Google My Business for self storage](/insights/google-my-business-self-storage) goes deeper on posts, reviews and multi-location profiles, and most of it applies to removals too."
      },
      {
        "type": "h2",
        "text": "How do you get more Google reviews as a moving company?"
      },
      {
        "type": "p",
        "text": "Ask every customer for a review within a day of the move, send them the direct link, and reply to every review. Reviews are a ranking factor for map results and the first thing a buyer checks before calling."
      },
      {
        "type": "p",
        "text": "The BrightLocal survey shows why timing matters. 74% of consumers look for reviews written in the last three months, 32% look for reviews from the last two weeks, and 18% are only swayed by reviews from the last week."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-moving-companies-review-recency.jpg",
        "alt": "Column chart showing 74% of consumers want reviews from the last 3 months, 32% from the last 2 weeks and 18% from the last week",
        "caption": "How recent buyers want reviews to be. Source: BrightLocal Local Consumer Review Survey 2026."
      },
      {
        "type": "p",
        "text": "The same survey found 89% of consumers expect business owners to respond to reviews, and 42% are unlikely to use a business that never replies. Half are put off by generic, templated replies, so write a short, personal answer each time."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Ask on the day.** The crew lead or office team sends a text with the review link once the van is empty."
          },
          {
            "text": "**Make it one tap.** Use your profile's short review link or QR code on your invoice."
          },
          {
            "text": "**Reply to every review, good or bad.** Name the move and thank them. For a bad review, apologise, state the facts and offer to talk offline."
          },
          {
            "text": "**Spread reviews over the year.** Steady new reviews look more trustworthy than a burst once a season."
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should a moving company website include to rank?"
      },
      {
        "type": "p",
        "text": "Your website needs a separate page for each service and each place you cover, written for the questions movers ask before booking. One generic \"Our services\" page cannot rank for house removals, office removals and storage in ten towns."
      },
      {
        "type": "image",
        "src": "/insights/seo-for-moving-companies-site-structure.jpg",
        "alt": "Diagram of a moving company website with a home page, service pages for house removals, office removals, packing and storage, and example town pages",
        "caption": "A simple structure for a moving company website. Illustrative example."
      },
      {
        "type": "h3",
        "text": "What goes on a service page?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**A clear answer first.** State what you do and where, for example \"We move homes across West Yorkshire, from one-bedroom flats to five-bedroom houses.\""
          },
          {
            "text": "**How it works.** Survey, quote, packing, moving day, unloading and what happens if something is damaged."
          },
          {
            "text": "**Prices and what changes them.** Give a realistic range and the factors, such as volume, stairs, parking, distance and date."
          },
          {
            "text": "**Proof.** Real reviews, trade body membership, insurance cover and photos of your crews."
          },
          {
            "text": "**One clear next step.** A quote form and a phone number above the fold."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What goes on a town or location page?"
      },
      {
        "type": "p",
        "text": "A town page should only exist if you really serve that town. Write about that area: access issues, typical property types, parking permits and local storage. Add a map, reviews from customers in that town and links to your relevant service pages. Do not copy the same text and swap the town name, because those pages add nothing for the reader."
      },
      {
        "type": "h3",
        "text": "Which pages should answer buyer questions?"
      },
      {
        "type": "p",
        "text": "Write short, direct pages for the questions people ask before booking: how much does a removal cost, how far in advance to book, what is not allowed in a removal van, whether you need a survey, and how to pack a kitchen. Start each with the answer, then add detail. These pages are also the ones AI tools quote."
      },
      {
        "type": "h2",
        "text": "How do moving companies show up in AI search?"
      },
      {
        "type": "p",
        "text": "AI tools name movers they can find described clearly on pages they trust. Whitespark's 2026 report added AI search visibility factors for local businesses. The top five scores were being on expert-curated \"best of\" lists, a dedicated page for each service, prominence on key industry domains, authority of unstructured citations such as newspaper articles and blog posts, and the authority of third-party sites where your reviews appear."
      },
      {
        "type": "image",
        "src": "/insights/moving-4-chatgpt-removals-manchester.jpg",
        "alt": "ChatGPT answer listing the best removal companies in Manchester with ratings and review counts",
        "caption": "ChatGPT's answer for removals in Manchester: it ranks companies using ratings, review counts and services, so reviews and clear service pages matter."
      },
      {
        "type": "p",
        "text": "For a removals firm, that gives a practical order of work:"
      },
      {
        "type": "ol",
        "items": [
          {
            "text": "**Write a dedicated page for each service** you offer, as described above."
          },
          {
            "text": "**Get listed on trusted industry sites.** Join a recognised trade body, because the listing is a trusted mention. In the UK the British Association of Removers is the main trade body, and its members follow a code of practice."
          },
          {
            "text": "**Earn mentions in local media and blogs.** A comment on a moving-season story or a local guide for new residents can earn a mention."
          },
          {
            "text": "**Pitch to \"best of\" lists.** Many lists of the best movers in a city are written by local publishers. Ask to be considered and give them facts to check."
          },
          {
            "text": "**Keep reviews on more than one site.** Google reviews matter most, but reviews on other platforms also help."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guides on [improving brand visibility in AI search](/insights/how-to-improve-brand-visibility-in-ai-search-engines) and [ranking in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) cover how to check what AI tools say about you, and the [ChatGPT guide](/insights/how-to-rank-in-chatgpt) covers that tool in detail."
      },
      {
        "type": "image",
        "src": "/insights/moving-5-ga4-sessions-by-channel.jpg",
        "alt": "Google Analytics 4 traffic acquisition report showing sessions by channel for a UK removals website, including an AI Assistant channel",
        "caption": "Traffic by channel for a UK removals website in the last 90 days: organic search is the biggest source and AI assistants already send visits."
      },
      {
        "type": "h2",
        "text": "What keywords should a moving company target?"
      },
      {
        "type": "p",
        "text": "Target the searches that show intent to move, then add the town. Start with a service plus a place, then expand into questions."
      },
      {
        "type": "image",
        "src": "/insights/moving-2-ai-overview-removal-cost.jpg",
        "alt": "Google AI Overview for how much it costs to hire a removal company, with a price table by property size and cited sources on the right",
        "caption": "A cost search in Google: the AI Overview answers the price question and cites the pages it used, so pages with clear prices get quoted."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Service and place.** \"House removals Leeds\", \"office removals Manchester\", \"man and van Bristol\"."
          },
          {
            "text": "**Near me searches.** \"Removals near me\" is decided mostly by your profile and your distance, not by your website text."
          },
          {
            "text": "**Price questions.** \"How much do removals cost for a 2 bed house\"."
          },
          {
            "text": "**Specialist moves.** Piano moves, long-distance and international removals, student moves and storage."
          },
          {
            "text": "**Both terms.** Use \"removals\" and \"moving company\" where your buyers use both."
          }
        ]
      },
      {
        "type": "p",
        "text": "Check the volume for your own towns in Google Keyword Planner or Google Trends, because moving searches rise and fall with the season and local market."
      },
      {
        "type": "image",
        "src": "/insights/moving-3-trends-house-removals.jpg",
        "alt": "Google Trends chart of UK searches for house removals over five years, showing a steady rise",
        "caption": "Google Trends for house removals in the UK over five years shows demand rising, so plan content before the busy months."
      },
      {
        "type": "h2",
        "text": "How does SEO differ for local, long-distance and office moves?"
      },
      {
        "type": "p",
        "text": "The steps stay the same, but the emphasis changes with the kind of moves you want. Decide which jobs you want most, then build your pages and profile around them."
      },
      {
        "type": "h3",
        "text": "How should a local house removals firm approach SEO?"
      },
      {
        "type": "p",
        "text": "Local firms win on the map results. Put your effort into your profile, steady reviews, accurate hours and one page for each town you serve. Most buyers here choose from the top three listings, so distance and reviews carry the most weight."
      },
      {
        "type": "h3",
        "text": "How should long-distance and international movers approach SEO?"
      },
      {
        "type": "p",
        "text": "Buyers searching for long-distance or international moves look at website results and AI answers more than the map, because they are comparing firms in different places. Build route pages such as London to Edinburgh, explain customs, insurance and timings, and earn mentions from relocation and expat sites."
      },
      {
        "type": "h3",
        "text": "How should an office or commercial removals firm approach SEO?"
      },
      {
        "type": "p",
        "text": "Commercial buyers search for the service, not a postcode, and often ask a colleague or an AI tool for a shortlist. Write pages on office relocation, IT moves, out-of-hours moves and project management, and show proof such as insurance cover, trade body membership and the size of jobs you handle."
      },
      {
        "type": "h3",
        "text": "How should a man and van service approach SEO?"
      },
      {
        "type": "p",
        "text": "Man and van searches are very local and price driven. Show your hourly rates or price ranges, what the van can carry and your service area, and keep your reviews fresh, because buyers compare several options in minutes."
      },
      {
        "type": "h2",
        "text": "How do you track SEO results for a moving company?"
      },
      {
        "type": "p",
        "text": "Track calls, quote requests and bookings, not just visits. Set up Google Analytics 4 and Google Search Console, then record where each enquiry came from. Our guide on [tracking AI traffic with Google Analytics 4 and Search Console](/insights/track-ai-traffic) shows the exact set-up, including AI traffic."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Profile actions.** Calls, direction requests and website clicks in your Google Business Profile."
          },
          {
            "text": "**Quote requests.** Count form submissions and calls, and ask every caller how they found you."
          },
          {
            "text": "**Search Console.** Impressions and clicks for your service and town pages."
          },
          {
            "text": "**Reviews.** New reviews each month and your average rating."
          },
          {
            "text": "**AI mentions.** Ask AI tools for the best movers in your town each month and note whether you appear."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How long does SEO take for a moving company?"
      },
      {
        "type": "p",
        "text": "Profile fixes and new reviews can show an effect in weeks. New service and town pages usually need a few months to settle. Links and mentions from other sites take longer and build over a year. Moving is seasonal, so start before your busy months, not during them."
      },
      {
        "type": "image",
        "src": "/insights/moving-6-gsc-clicks-impressions.jpg",
        "alt": "Search Console performance report for a UK removals website over 12 months, showing clicks, impressions and average position",
        "caption": "Search Console over 12 months for a UK removals website: impressions and clicks build over months as pages and reviews grow."
      },
      {
        "type": "h2",
        "text": "What should a moving company do first for SEO?"
      },
      {
        "type": "p",
        "text": "Start with your Google Business Profile: category, service area, hours, services and photos. Then ask for a review from every customer, build one page per service and per town you serve, and earn mentions from trade bodies and local sites. Track enquiries monthly and repeat."
      },
      {
        "type": "p",
        "text": "Want results like these for your business? [Let's talk](https://www.maai.agency/book)."
      }
    ],
    "faq": [
      {
        "q": "How much does SEO cost for a moving company?",
        "a": "It depends on the number of towns you cover and how competitive they are. Ask any agency what they will do each month, how they report enquiries and what you own at the end. Doing the profile and review steps in this guide yourself costs only time."
      },
      {
        "q": "Is Google Business Profile or my website more important for a removals company?",
        "a": "For map results and \"near me\" searches, your Google Business Profile matters most. For standard results and AI answers, your service pages matter more. You need both."
      },
      {
        "q": "How many Google reviews does a moving company need?",
        "a": "There is no set number. Aim for steady new reviews each month and a reply to each one. In the BrightLocal survey, 74% of consumers look for reviews from the last three months."
      },
      {
        "q": "Do I need a separate page for every town?",
        "a": "Only for towns you really serve, and each page needs its own useful content, such as local access notes and reviews from customers there."
      },
      {
        "q": "Can I rank in the map results without a shopfront?",
        "a": "Yes. Set your profile up as a service-area business, hide your address and list the towns you cover. Distance from the searcher still affects how you rank."
      },
      {
        "q": "How do I get my removals company recommended by ChatGPT or Google AI?",
        "a": "Publish clear pages for each service, earn mentions on trade body and local sites, collect reviews and ask to be included in best-of lists. See our guide on improving brand visibility in AI search for a checklist."
      },
      {
        "q": "Should I use paid ads as well as SEO?",
        "a": "Paid search can help in busy months or new areas while organic pages build up. SEO keeps working after you stop paying, so most firms use both."
      }
    ]
  },
  {
    "slug": "how-to-improve-brand-visibility-in-ai-search-engines",
    "seoTitle": "How to Improve Brand Visibility in AI Search Engines 2027",
    "title": "How to Improve Brand Visibility in AI Search Engines in 2027: A 12-Check Checklist",
    "description": "A 12-check AI brand visibility checklist to see if ChatGPT, Gemini and Google AI Overviews recommend you, and how to improve brand visibility in AI search.",
    "date": "2026-11-10",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/how-to-improve-brand-visibility-in-ai-search-engines-banner.jpg",
    "intro": "Your next customer may ask an AI tool for the best option in your category and get three names back. If yours is not one of them, they may never visit your website. This guide gives you a 12-check AI brand visibility checklist: how to see whether ChatGPT, Claude, Gemini and Google AI Overviews recommend you, and how to improve brand visibility in AI search engines where they do not.",
    "tldr": [
      "AI brand visibility means being named in AI answers, not only ranking in search results.",
      "Pew Research found people click a traditional result in 8% of visits when an AI summary shows, against 15% without one.",
      "Start by asking AI tools about your brand and category, then fix crawler access and the facts that are wrong.",
      "Branded web mentions had the strongest link to AI Overview brand appearance in Ahrefs' study of 75,000 brands (0.664).",
      "Run the checklist monthly and track what changes."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What is AI brand visibility, and how do you improve it?"
      },
      {
        "type": "p",
        "text": "AI brand visibility is how often AI tools such as ChatGPT, Claude, Gemini and Google AI Overviews name your business when someone asks a question you want to answer. To improve it, you make your brand easy for AI tools to find, read and trust, then you earn mentions on the sites those tools already rely on. The 12 checks below take you through that in order."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-12-checks.jpg",
        "alt": "Grid of the 12 checks in the AI brand visibility checklist, from asking AI tools about your brand to tracking monthly",
        "caption": "The 12 checks in this guide. The two in pink matter most."
      },
      {
        "type": "h2",
        "text": "Why does brand visibility in AI search engines matter now?"
      },
      {
        "type": "p",
        "text": "Buyers now get a shortlist from an AI answer before they click anything. The [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) tracked 900 US adults and 68,879 Google searches in March 2025. People clicked a traditional result in 8% of visits when an AI summary appeared, against 15% when it did not. Only 1% of visits with a summary led to a click on a link inside the summary."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-pew-clicks.jpg",
        "alt": "Column chart showing 15% of Google visits include a click without an AI summary and 8% with an AI summary",
        "caption": "Clicks on traditional Google results with and without an AI summary. Source: Pew Research Center."
      },
      {
        "type": "p",
        "text": "For your business, that means being named in the answer matters as much as ranking under it. If the AI recommends three competitors and not you, many buyers never reach your website. Our guide on [answer engine optimisation](/insights/answer-engine-optimisation) explains the wider shift."
      },
      {
        "type": "h2",
        "text": "How does an AI tool decide which brands to recommend?"
      },
      {
        "type": "p",
        "text": "An AI tool turns the question into several related searches, reads the pages it finds, and names the brands those pages describe clearly and consistently. Your visibility depends on whether your brand appears on the pages it reads, in words it can repeat."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-how-ai-names-brands.jpg",
        "alt": "Four step diagram: buyer question, AI runs related searches, AI reads sources, AI names a few brands",
        "caption": "How an AI answer ends up naming a brand."
      },
      {
        "type": "p",
        "text": "Every check below improves your chances at step 3, either on your own site or on other sites that talk about you. The tools differ in detail, so read our platform guides for [ChatGPT](/insights/how-to-rank-in-chatgpt), [Claude](/insights/how-to-rank-in-claude) and [Google AI Overviews](/insights/how-to-rank-in-ai-overviews) once you finish this list."
      },
      {
        "type": "h2",
        "text": "The AI brand visibility checklist: 12 checks to see if AI search recommends you"
      },
      {
        "type": "p",
        "text": "Work through the checks in order. Checks 1 and 2 show where you stand, 3 to 8 fix your own site and profiles, and 9 to 12 build visibility beyond your site and keep it going."
      },
      {
        "type": "h3",
        "text": "Check 1: Ask AI tools about your brand and your category"
      },
      {
        "type": "p",
        "text": "Open ChatGPT, Claude, Gemini and Google (for AI Overviews and AI Mode) in a fresh session and ask the questions your buyers ask. This is your baseline, and it costs nothing."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-1-ai-overview-names-maai.jpg",
        "alt": "Google AI Overview for a search about answer engine optimisation for self storage, naming agencies including MAAI Agency",
        "caption": "Check 1 in practice: a Google AI Overview names the agencies it recommends for a category, so you can see whether your brand appears."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Ask a category question.** For example, \"best accountancy software for a small UK business\" or \"best dental clinic in Leeds\". Note whether you appear, in what position, and who else does."
          },
          {
            "text": "**Ask a brand question.** Type \"What is [your brand]?\" and \"Is [your brand] any good?\". Note anything wrong or missing."
          },
          {
            "text": "**Record the result.** Use a simple sheet with the date, tool, question, whether you were named and which sources were shown."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Check 2: Check that AI tools describe your brand correctly"
      },
      {
        "type": "p",
        "text": "Wrong facts in an AI answer usually come from conflicting pages. Compare what each tool says with your real services, location, pricing model and founding details. List every error and the page the tool cited, because that page is what you fix in later checks."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-2-chatgpt-agencies.jpg",
        "alt": "ChatGPT answer to which agencies help B2B companies get found in AI search, listing agencies with short descriptions and sources",
        "caption": "Check 2 in practice: read how an AI tool describes each brand in your category, and compare it with what you want it to say."
      },
      {
        "type": "h3",
        "text": "Check 3: Fix crawler access so AI tools can reach your pages"
      },
      {
        "type": "p",
        "text": "AI search tools can only use pages they are allowed to fetch. Open yourdomain.com/robots.txt and check that you have not blocked the crawlers behind the tools you care about, such as OAI-SearchBot for ChatGPT search, Googlebot and Bingbot. Check the current crawler names in each provider's documentation before editing anything."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-3-robots-txt.jpg",
        "alt": "The maai.agency robots.txt file in a browser, showing it allows all crawlers except the /api/ folder and lists the sitemap",
        "caption": "Check 3 in practice: a robots.txt that allows crawlers and lists the sitemap, with only the /api/ folder blocked."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Check your CDN or security settings.** Some set-ups block AI bots by default."
          },
          {
            "text": "**Check your pages return a normal 200 status** and are not set to noindex."
          },
          {
            "text": "**Keep a sitemap** and submit it in Google Search Console and Bing Webmaster Tools."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Check 4: Make your key pages readable without JavaScript"
      },
      {
        "type": "p",
        "text": "If your main text only appears after a script runs, some crawlers see an empty page. Open a key page, view the page source and search for a sentence from the body. If it is missing, ask your developer to render the main text on the server."
      },
      {
        "type": "h3",
        "text": "Check 5: Write answer-first pages for the questions buyers ask"
      },
      {
        "type": "p",
        "text": "Pages that answer a question in the first one or two sentences are easy for an AI tool to lift and quote. Write each key heading as the question and answer it straight away, then add detail."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Start with the answer.** One clear sentence that works if quoted on its own."
          },
          {
            "text": "**Name things in full.** Write \"Harbour Dental offers same-day crowns\" instead of \"we offer them\"."
          },
          {
            "text": "**Cover the follow-up questions** a buyer asks next, on the same page."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Check 6: Keep your brand facts identical everywhere"
      },
      {
        "type": "p",
        "text": "AI tools build an idea of your business from many places. If your name, address, services and description differ between your website, LinkedIn, directories and social profiles, the tool has no clear version to repeat. Write one short description of your business and use it everywhere."
      },
      {
        "type": "h3",
        "text": "Check 7: Add schema markup that matches what is on the page"
      },
      {
        "type": "p",
        "text": "Schema is code that labels the facts on a page. Add Organization schema on your home page, Article schema on posts and FAQPage schema only where the questions are visible on the page. Treat schema as good hygiene that supports clarity. It does not guarantee a citation."
      },
      {
        "type": "h3",
        "text": "Check 8: Complete your reviews and business listings"
      },
      {
        "type": "p",
        "text": "Reviews and listings give AI tools third-party proof that you exist and are trusted. Claim your Google Business Profile, Bing Places listing and the main directories for your industry, and ask happy customers for reviews. Reply to reviews in plain language that names the service."
      },
      {
        "type": "h3",
        "text": "Check 9: Earn mentions on pages that AI tools already read"
      },
      {
        "type": "p",
        "text": "This is the check with the biggest effect. In its study of 75,000 brands, [Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/) found that branded web mentions had a correlation of 0.664 with appearing in Google AI Overviews. Branded search volume scored 0.392 and backlinks 0.218. Ahrefs notes that correlation does not prove cause, but the pattern is clear: brands talked about across the web show up more."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-ahrefs-correlation.jpg",
        "alt": "Column chart of correlation with AI Overview brand mentions: web mentions 0.664, branded search volume 0.392, backlinks 0.218",
        "caption": "What links most strongly to AI Overview brand mentions. Source: Ahrefs, 75,000 brands."
      },
      {
        "type": "p",
        "text": "Ahrefs also found that brands in the top quarter for web mentions averaged 169 AI Overview mentions, against 14 for the next quarter down. In practice, that means earning coverage where your buyers and the AI tools already look:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Digital PR.** Pitch data, comments and stories to trade publications and news sites in your industry."
          },
          {
            "text": "**\"Best of\" and comparison pages.** Find the pages that list options in your category and ask to be included, if you genuinely fit."
          },
          {
            "text": "**Industry bodies and partners.** Ask for a listing or a mention on the sites of suppliers, associations and partners."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Check 10: Show up on video and in professional communities"
      },
      {
        "type": "p",
        "text": "AI tools read more than websites. Publish short, useful videos that answer buyer questions, with a clear title and description that name your brand. Take part in professional communities such as LinkedIn, giving real answers under your own name. Keep it helpful, because that is what gets quoted."
      },
      {
        "type": "h3",
        "text": "Check 11: Refresh your key pages every quarter"
      },
      {
        "type": "p",
        "text": "Out-of-date pages lose out to fresher ones. Every quarter, update the prices, statistics, screenshots and recommendations on your top pages, and change the \"last updated\" date only when the content has really changed."
      },
      {
        "type": "h3",
        "text": "Check 12: Track your AI visibility every month"
      },
      {
        "type": "p",
        "text": "Repeat check 1 monthly with the same questions and compare the sheet. Then look at what visits arrive from AI tools. Our free guide to [tracking AI traffic in Google Analytics 4 and Search Console](/insights/track-ai-traffic) shows the exact set-up."
      },
      {
        "type": "image",
        "src": "/insights/ai-brand-visibility-4-gsc-ai-features.jpg",
        "alt": "Google Search Console Generative AI features report showing impressions over time and the top pages",
        "caption": "Check 12 in practice: Search Console's Generative AI features report shows how often your pages appear in Google's AI features."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "**Share of answers.** Out of 20 buyer questions, how many name you?"
          },
          {
            "text": "**Accuracy.** How many facts are right?"
          },
          {
            "text": "**Visits and enquiries** that start from AI tools."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How long does it take to improve brand visibility in AI search?"
      },
      {
        "type": "p",
        "text": "Technical and profile fixes (checks 3 to 8) can be picked up within weeks. Mentions on other sites (checks 9 and 10) usually take a few months of steady work. Treat the checklist as a monthly routine, not a one-off job."
      },
      {
        "type": "h2",
        "text": "Which AI brand visibility checks should a small business do first?"
      },
      {
        "type": "p",
        "text": "Start with checks 1, 2 and 3, because they show where you stand and remove blockers. Then do check 6 and check 8, which are cheap and fast. Put your longer effort into check 9, which moves the results most."
      }
    ],
    "faq": [
      {
        "q": "How do I check if AI search recommends my brand?",
        "a": "Ask ChatGPT, Claude, Gemini and Google the questions your buyers ask, in a fresh session, and record whether you are named and which sources appear. Repeat monthly with the same questions."
      },
      {
        "q": "How do I improve my brand visibility in AI search engines?",
        "a": "Let AI crawlers reach your site, write answer-first pages, keep your brand facts identical everywhere, complete your reviews and listings, and earn mentions on the sites AI tools already read."
      },
      {
        "q": "Do backlinks help AI visibility?",
        "a": "They help, but in Ahrefs' study of 75,000 brands, branded web mentions (0.664) correlated more strongly with AI Overview brand appearance than backlinks (0.218). Aim for mentions and links together."
      },
      {
        "q": "Is AI brand visibility the same as SEO?",
        "a": "They overlap. Good rankings, clear content and trusted sources help in both. AI visibility adds a focus on being named inside the answer, not only listed under it."
      },
      {
        "q": "Can I pay to be recommended by ChatGPT or Gemini?",
        "a": "There is no paid slot in the main answers of these tools at the time of writing. Visibility comes from the quality and spread of the information about your brand."
      },
      {
        "q": "How often should I run the checklist?",
        "a": "Run the baseline check (check 1) monthly and review the whole list every quarter."
      }
    ]
  },
  {
    "slug": "best-ai-marketing-agency-self-storage",
    "seoTitle": "Best AI Marketing Agency for Self Storage in 2027 | MAAI",
    "title": "Best AI Marketing Agency for Self Storage Business Owners in 2027 (SEO + AEO)",
    "description": "Four agencies that work with self storage owners in 2027, who each one suits, and six checks to run before you sign. Covers SEO and AEO.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/best-ai-marketing-agency-self-storage-banner.jpg",
    "intro": "Before anyone rents a storage unit, they ask questions. Which facility is closest? Is it secure? What does a small unit cost? Is there climate control? They ask Google, ChatGPT and other AI tools. If your facility is missing from those answers, the renter calls someone else. You face the same problem as an owner choosing a marketing partner. Search results now include AI answers, and [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) found that 76% of pages cited in Google AI Overviews also rank in the top 10. SEO and answer engine optimisation (AEO) now work as a pair. Below are five agencies that work with self storage owners, who each one suits, and the checks to run before you sign.",
    "tldr": [
      "Four agencies work with self storage owners on SEO, local SEO or AI search: Digital First, MAAI, Market Apts and Thrive Internet Marketing Agency.",
      "Match the agency to your size. Month-to-month suits one site, a fixed-price package suits a quick start, and a broad agency suits several channels.",
      "Check six things before you sign: move-in results, local SEO, AI search work, mentions and reviews, reporting and contract terms.",
      "Published prices start at $179 a month.",
      "Local profile gains can show within weeks. Organic gains take months."
    ],
    "body": [
      {
        "type": "image",
        "src": "/insights/storage-2.jpg",
        "alt": "Pie chart: 76% of pages cited in Google AI Overviews rank in the top 10, 24% rank outside it",
        "caption": "The chart shows that three in four cited pages already rank in the top 10. AI answers draw on pages that search already trusts."
      },
      {
        "type": "h2",
        "text": "Which are the best AI marketing agencies for self storage owners in 2027?"
      },
      {
        "type": "p",
        "text": "Digital First, MAAI, Market Apts and Thrive Internet Marketing Agency all work with self storage owners on SEO, local SEO or AI search. The right one depends on your size, your budget and how much AI search work you want included. They are listed alphabetically. Prices and terms were checked on 9 November 2026."
      },
      {
        "type": "h3",
        "text": "Digital First"
      },
      {
        "type": "p",
        "text": "Digital First says it has marketed self storage for over 20 years. Its team of 30+ works with operators across 85+ cities and 250+ stores, and it reports 4 million+ enquiries generated. Named clients include Storage King and Stor-Age. It shares results such as 107% more enquiries for an operator in Jordan and a 298% higher conversion rate for an operator in Liverpool. What sets it apart is that it owns and runs its own facilities, so it tests strategies on its own revenue. It offers SEO, paid media and generative engine optimisation (GEO). No pricing is published."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Best for: operators who want a long-established storage specialist with global reach."
          },
          {
            "text": "Ask them: how its GEO work is delivered, and what a typical contract looks like."
          }
        ]
      },
      {
        "type": "h3",
        "text": "MAAI.AGENCY"
      },
      {
        "type": "p",
        "text": "That is us. We run SEO, AEO and local SEO for logistics, moving and storage businesses. Every resource and every growth lever we use is tied to data, from the pages we write to the AI answers we track. We also run local SEO across many sites and build authority in your niche with premium backlinks."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Best for: owners who want SEO and AEO tied to data, local pages across several sites and authority built through premium backlinks."
          },
          {
            "text": "Ask us: for the same proof you would ask any agency."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Market Apts"
      },
      {
        "type": "p",
        "text": "Market Apts is mostly an apartment marketing company based in Salt Lake City. It says it works with 1,000+ communities, has done so for over a decade, and that 8 in 10 clients renew each year. Self storage is a product line. It offers a storage website template with online rental and payment features, plus SEO and Google Business Profile management from $179 a month. The $299 a month plan adds Google Ads management and AI Overviews work, with ad spend extra. Its self storage page says engagements start with a 6-month term."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Best for: US owners who want a low fixed monthly price."
          },
          {
            "text": "Ask them: how many storage facilities it manages, since its site does not say."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Thrive Internet Marketing Agency"
      },
      {
        "type": "p",
        "text": "Thrive has been going since 2005. Its team of 160+ is based in Arlington, Texas, and it has made the Inc. 5000 list of fastest-growing US companies seven years in a row. Self storage is one of many industries it serves, with SEO, local SEO, web design and reputation management. Its AI search work includes GEO and ChatGPT and Gemini optimisation, and it reports results such as 2,658% more Google AI Overview citations for a medical group. It names no self storage case studies. Its forms list marketing budgets from $2,500 to $5,000 a month upwards, and it says no long-term contracts are required."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Best for: operators who want a large, broad agency across several channels."
          },
          {
            "text": "Ask them: for storage-specific examples and how its AI search work applies to storage."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/storage-3.jpg",
        "alt": "Google AI Overview on AEO for self storage, naming Fuel Online and MAAI Agency as agencies that specialise in the sector",
        "caption": "A Google AI Overview for a self storage AEO search names MAAI Agency among the agencies for the sector."
      },
      {
        "type": "h2",
        "text": "How do you choose the best agency for your storage business?"
      },
      {
        "type": "p",
        "text": "Choose the agency that can show you rentals, runs your local listings, does real AI search work, builds mentions beyond your website, reports in plain language and gives clear contract terms. Ask each of the six questions below, whichever agency you speak to."
      },
      {
        "type": "h3",
        "text": "Can they show results in move-ins, not only traffic?"
      },
      {
        "type": "p",
        "text": "Ask for a recent example with calls, reservations or move-ins next to the rankings. Traffic alone does not fill units."
      },
      {
        "type": "h3",
        "text": "Do they run your Google Business Profile and local SEO?"
      },
      {
        "type": "p",
        "text": "Ask how they manage your profiles, reviews and location pages. A profile that points to the wrong page sends renters to the wrong place."
      },
      {
        "type": "h3",
        "text": "What AI search work do they actually do?"
      },
      {
        "type": "p",
        "text": "Ask which AI answers they test, how often, and what they change as a result. We track citation rate: brand citations divided by the relevant questions tested, multiplied by 100."
      },
      {
        "type": "h3",
        "text": "Do they build mentions and reviews beyond your website?"
      },
      {
        "type": "p",
        "text": "AI answers lean on what the wider web says about you. [Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/) found branded web mentions correlated at 0.664 with AI Overview visibility, stronger than backlinks. Ask how they earn mentions, reviews and listings for each facility."
      },
      {
        "type": "h3",
        "text": "Do they report on what matters to you?"
      },
      {
        "type": "p",
        "text": "Reports should show calls, form fills, map visibility and AI mentions each month, in language you can read in two minutes."
      },
      {
        "type": "h3",
        "text": "What are the contract terms and the full cost?"
      },
      {
        "type": "p",
        "text": "Check the minimum term, the notice period, what ad spend is excluded and what each plan includes."
      },
      {
        "type": "h2",
        "text": "How do renters find storage units in 2027?"
      },
      {
        "type": "p",
        "text": "Renters search for a unit near them, compare the first results, the reviews and the prices, and many now ask an AI tool for a shortlist. Your facility needs to show up in all three places: the map, the search results and the AI answer."
      },
      {
        "type": "h3",
        "text": "How do renters find storage on Google and Maps?"
      },
      {
        "type": "p",
        "text": "The search is local and the competition is large. In Semrush's US data, \"storage units near me\" has about 823,000 searches a month. Strong local pages, a complete Google Business Profile and recent reviews decide who gets the call."
      },
      {
        "type": "image",
        "src": "/insights/storage-4.jpg",
        "alt": "Stat card: 823,000 searches a month for storage units near me in the US",
        "caption": "823,000 monthly US searches for \"storage units near me\". Source: Semrush, US database."
      },
      {
        "type": "h3",
        "text": "How do AI tools choose which storage facility to recommend?"
      },
      {
        "type": "p",
        "text": "AI tools break a question like \"safe climate-controlled storage near me\" into smaller searches about price, location, reviews and security. Then they pick the pages that answer those smaller questions best. In plain English, a facility with clear pages, the same details everywhere and good reviews gives the AI more to work with. Our guide on [answer engine optimisation](/insights/answer-engine-optimisation) explains how this works. Read more in our guide to [answer engine optimisation (AEO)](/insights/answer-engine-optimisation) and [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt)."
      },
      {
        "type": "h2",
        "text": "Which type of storage business needs which approach?"
      },
      {
        "type": "p",
        "text": "The right approach depends on how many sites you run and what you store. Single sites need the basics done well, multi-site operators need a system, and specialist storage needs its own search terms."
      },
      {
        "type": "h3",
        "text": "Single-site owners"
      },
      {
        "type": "p",
        "text": "Start with your Google Business Profile, one strong location page and a steady flow of reviews. A month-to-month agency or a fixed-price package keeps cost and commitment low. Our guide to [Google My Business for self storage](/insights/google-my-business-self-storage) shows each step, and these [11 free tools](/insights/free-tools-self-storage-website-google-my-business) cover the basics without an agency."
      },
      {
        "type": "h3",
        "text": "Multi-site operators"
      },
      {
        "type": "p",
        "text": "Each facility needs its own page and its own profile, linked to each other, plus reporting that compares sites."
      },
      {
        "type": "h3",
        "text": "Container, vehicle and boat storage"
      },
      {
        "type": "p",
        "text": "People search for these with different words, such as \"container storage\" or \"caravan storage\". Ask whether the agency has built pages for those terms."
      },
      {
        "type": "h3",
        "text": "Student and seasonal storage"
      },
      {
        "type": "p",
        "text": "Demand follows term dates, so plan content and offers around them. A student storage page with clear unit sizes and prices helps both Google and AI answers."
      },
      {
        "type": "h2",
        "text": "How do you measure whether an agency is working?"
      },
      {
        "type": "p",
        "text": "Measure calls, form fills and move-ins first, then map visibility, Search Console clicks and impressions, and AI mentions. In Search Console, open Performance, filter to your location pages and compare three-month periods. For AI mentions, ask the same set of questions every month and note how often your facility appears."
      },
      {
        "type": "h2",
        "text": "How long does it take to see results?"
      },
      {
        "type": "p",
        "text": "Local profile gains can show in weeks, organic SEO usually takes several months, and AI answers vary by platform. Ask every agency for its own timeline and what it is based on."
      },
      {
        "type": "h2",
        "text": "Should you hire an agency, build in-house or use software?"
      },
      {
        "type": "p",
        "text": "Hire an agency if you want expertise without hiring, build in-house if you run enough sites to keep one person busy, and use storage software if you want to manage listings and data yourself. Many owners combine an agency for strategy with software for day-to-day tasks."
      }
    ],
    "faq": [
      {
        "q": "Do I need a self storage specialist agency?",
        "a": "A specialist knows the sector, and a broader agency brings more channels. Ask either for storage examples."
      },
      {
        "q": "How much does a self storage marketing agency cost?",
        "a": "Published prices above start at $179 a month. Compare what each plan includes."
      },
      {
        "q": "Can ChatGPT recommend my storage facility?",
        "a": "It can, when your pages, reviews and business details are clear and match across the web."
      },
      {
        "q": "What is AEO for self storage?",
        "a": "AEO is answer engine optimisation. It makes your facility easy for AI answers to find and name, alongside normal SEO."
      },
      {
        "q": "How long does self storage SEO take?",
        "a": "Expect several months, with local profile gains often sooner."
      }
    ]
  },
  {
    "slug": "free-tools-self-storage-website-google-my-business",
    "seoTitle": "11 Free Tools to Grow Your Self Storage Website and Google My Business in 2027",
    "title": "11 Free Tools to Grow Your Self Storage Website and Google My Business in 2027",
    "description": "The 11 free tools that help a self storage business grow its website and Google My Business listing, with how to use each one, step by step.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/free-tools-self-storage-website-google-my-business-banner.jpg",
    "intro": "Someone searches \"storage units near me\", picks one of the first three results and rents a unit within a week. Around 823,000 people a month search that phrase in the US alone (Semrush, US database). You do not need a big budget to be one of those three. Eleven free tools cover your Google My Business listing, your self storage website, your keywords and even whether AI tools such as ChatGPT name your facility. This guide shows what each tool does and how to use it to get more calls, direction requests and unit rentals in 2027.",
    "tldr": [
      "Start with Google Business Profile (Google My Business). It is free, and it controls how you appear on Google Maps and in the map results.",
      "Search Console and Google Analytics 4 show what works. Both are free, and Search Console now has a report for Google's AI features.",
      "Keyword Planner, Google Trends and PageSpeed Insights tell you what renters search for, when demand rises and whether your site loads fast on a phone.",
      "Bing tools and a free AI assistant cover the places Google does not: Bing search and the answers ChatGPT gives.",
      "One hour a month is enough to use all eleven. A routine is at the end of this guide."
    ],
    "body": [
      {
        "type": "h2",
        "text": "Which free tools help you grow a self storage website and Google My Business in 2027?"
      },
      {
        "type": "p",
        "text": "Eleven free tools do most of the work: three for your Google My Business listing, four that show how your website performs, and four that find keywords and fix problems. The table shows what each one is best for. Pink marks the tools for your listing."
      },
      {
        "type": "image",
        "src": "/insights/tools-1.jpg",
        "alt": "Table of the 11 free tools and what each is best for, from Google Business Profile to Screaming Frog",
        "caption": "The 11 free tools and what each one is best for."
      },
      {
        "type": "h2",
        "text": "Which free tools grow your Google My Business listing?"
      },
      {
        "type": "p",
        "text": "Three free tools cover your listing: Google Business Profile (the new name for Google My Business), Bing Places for Business and a free AI assistant to check how your business is described."
      },
      {
        "type": "h3",
        "text": "1. Google Business Profile (Google My Business)"
      },
      {
        "type": "p",
        "text": "Google Business Profile is the free listing that shows your facility on Google Search and Google Maps. It is the most important tool on this list, because your primary category, distance, hours and reviews decide who appears in the top three map results. Our guide to [Google My Business for self storage](/insights/google-my-business-self-storage) covers how to rank 1st."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Complete every section. Add your real business name, address, phone number, opening hours, unit sizes, photos and a link to the matching location page."
          },
          {
            "text": "Post every week. Use the Posts feature for offers, news and events, such as a first-month discount or student storage at term end."
          },
          {
            "text": "Read the Performance report each month. It shows calls, direction requests and website clicks. This is your scoreboard."
          },
          {
            "text": "Reply to every review and send tenants a direct review link after they move in."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/tools-2.jpg",
        "alt": "Four steps to open the Google Business Profile Performance report",
        "caption": "Where to find your Performance report. Source: Google Business Profile Help."
      },
      {
        "type": "h3",
        "text": "2. Bing Places for Business"
      },
      {
        "type": "p",
        "text": "Bing Places is Microsoft's free version of Google Business Profile. It puts your facility on Bing search and Bing Maps, and you can usually import your Google listing instead of typing everything again."
      },
      {
        "type": "p",
        "text": "Sources disagree on whether ChatGPT reads Bing Places directly. Several marketing sites say it pulls local business data from Bing Places. Search Engine Land reported that ChatGPT does not see the profile data businesses manage in Bing Places, and [Whitespark](https://whitespark.ca/blog/want-to-rank-in-chatgpt-focus-on-these-review-sites-new-research/)'s research says Bing listings influence the web results ChatGPT looks at. Our view: claiming the listing costs you nothing and adds a trusted source for your name, address and hours, so do it, and do not expect a direct feed into ChatGPT."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Claim and import your listing, then check that your name, address, phone number and hours match Google exactly."
          },
          {
            "text": "Add photos and your location page link."
          }
        ]
      },
      {
        "type": "h3",
        "text": "3. Free AI assistants: ChatGPT, Gemini and Claude"
      },
      {
        "type": "p",
        "text": "The free plans of ChatGPT, Gemini and Claude show you what a renter sees when they ask an AI tool for a facility. A [Yext](https://www.businesswire.com/news/home/20251009106549/en) study of 6.8 million AI citations found 44% came from business websites and 42% from business listings, so your listing and website are what these tools quote."
      },
      {
        "type": "image",
        "src": "/insights/tools-3.jpg",
        "alt": "ChatGPT answer listing the top self storage companies in Manchester with a map, star ratings and listing cards",
        "caption": "ChatGPT shows a map with Google star ratings when asked for self storage in Manchester."
      },
      {
        "type": "p",
        "text": "When we asked ChatGPT for the best self storage companies in Manchester, it showed a map with Google star ratings and review counts next to each listing. That makes your reviews and listing details part of your AI visibility."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Ask the same questions each month: \"best self storage in [your town]\", \"cheap student storage in [your town]\" and \"storage units near [landmark]\"."
          },
          {
            "text": "Write down whether you are named, which sources it shows and what it says about your prices and hours."
          },
          {
            "text": "Fix what is wrong at the source: your listing, your location page or a directory."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Which free tools show how your self storage website performs?"
      },
      {
        "type": "p",
        "text": "Google Search Console, Google Analytics 4, Bing Webmaster Tools and Ahrefs Webmaster Tools show how people find your website and what they do next. The first three come from search engines and the fourth from an SEO company."
      },
      {
        "type": "h3",
        "text": "4. Google Search Console"
      },
      {
        "type": "p",
        "text": "Search Console shows the searches your website appears for, your average position, and which pages get clicks. It also has a Generative AI features report, in beta at the time of writing, that shows impressions from Google's AI features by page."
      },
      {
        "type": "image",
        "src": "/insights/tools-4.jpg",
        "alt": "Search Console Generative AI features performance report with impressions and top pages",
        "caption": "The Generative AI features report in Search Console."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Filter your queries for \"storage\", \"unit\" and your town to see where you already appear and where you sit on page two."
          },
          {
            "text": "Open the Pages tab to see which location pages get impressions without clicks, then improve their titles and first paragraph."
          },
          {
            "text": "Use URL Inspection to check a new page is on Google and to request indexing."
          },
          {
            "text": "Open the Generative AI features report to see which pages appear in AI answers."
          }
        ]
      },
      {
        "type": "h3",
        "text": "5. Google Analytics 4"
      },
      {
        "type": "p",
        "text": "Google Analytics 4 (GA4) shows how many people visit your website, where they come from and whether they enquire or reserve a unit. It only counts what you ask it to, so the key step is marking your enquiry events as key events. For the full setup, read [how to track AI traffic on your website](/insights/track-ai-traffic)."
      },
      {
        "type": "image",
        "src": "/insights/tools-5.jpg",
        "alt": "GA4 Events screen where enquiry and reservation events are marked as key events",
        "caption": "GA4 Events: star the events that count as enquiries."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Mark key events for reservations, enquiry forms and click-to-call. In Admin, open Events and select the star next to each one."
          },
          {
            "text": "Check Traffic acquisition to compare Organic Search, Direct and referrals."
          },
          {
            "text": "Look for AI tools as a source, such as chatgpt.com, and create an \"AI assistants\" channel group so their visits stay together."
          },
          {
            "text": "Link Search Console so your search data sits in the same place."
          }
        ]
      },
      {
        "type": "h3",
        "text": "6. Bing Webmaster Tools"
      },
      {
        "type": "p",
        "text": "Bing Webmaster Tools is the free Search Console equivalent for Bing. Bing is one of the search sources behind ChatGPT's web search, so it is worth ten minutes."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Import your site from Google Search Console instead of verifying it again."
          },
          {
            "text": "Submit your sitemap and check that your location pages are indexed."
          },
          {
            "text": "Review the search terms report for searches that bring Bing visitors."
          }
        ]
      },
      {
        "type": "h3",
        "text": "7. Ahrefs Webmaster Tools"
      },
      {
        "type": "p",
        "text": "Ahrefs Webmaster Tools is free for websites you can verify. It runs a site audit and shows the backlinks pointing to your site, which helps you plan local PR and partner links."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Verify your website with your Search Console account."
          },
          {
            "text": "Run the site audit and fix broken links, missing titles and duplicate pages first."
          },
          {
            "text": "Open the backlinks report to see who links to your facility, then ask local partners such as movers, estate agents and universities for a link to your location page."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Which free tools find keywords and fix your self storage website?"
      },
      {
        "type": "p",
        "text": "Google Keyword Planner and Google Trends show what renters search for and when, while PageSpeed Insights and Screaming Frog find problems that slow your site down or confuse Google."
      },
      {
        "type": "h3",
        "text": "8. Google Keyword Planner"
      },
      {
        "type": "p",
        "text": "Keyword Planner is free with a Google Ads account, and you do not have to run ads to use it. It shows how often people search for a phrase, and gives ideas for related searches."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search \"self storage [your town]\", \"storage units near me\" and \"student storage\"."
          },
          {
            "text": "Pick one main phrase per location page and use it in the title, the first heading and the first paragraph."
          },
          {
            "text": "Add the related questions renters ask, such as unit sizes and prices, to your FAQ."
          }
        ]
      },
      {
        "type": "h3",
        "text": "9. Google Trends"
      },
      {
        "type": "p",
        "text": "Google Trends shows when searches rise and fall, so you can time offers and posts. In the UK, interest in \"self storage\" rose over the last five years, while \"storage units near me\" stayed flat."
      },
      {
        "type": "image",
        "src": "/insights/tools-6.jpg",
        "alt": "Google Trends comparison of storage units near me and self storage in the United Kingdom over five years",
        "caption": "Google Trends: compare storage searches over time to plan offers."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Compare phrases such as \"self storage\", \"student storage\" and \"storage near me\"."
          },
          {
            "text": "Look at the yearly pattern. Plan posts and offers for the weeks before searches rise, for example house-move season and student term ends."
          },
          {
            "text": "Check your region with the location filter, because demand differs by town."
          }
        ]
      },
      {
        "type": "h3",
        "text": "10. PageSpeed Insights"
      },
      {
        "type": "p",
        "text": "PageSpeed Insights tests how fast a page loads on a phone and flags what slows it down. Most renters search on mobile, so a slow location page loses enquiries. Our own homepage scored 74 for performance on mobile when we ran it on 9 November 2026, which shows even a carefully built site has fixes to find."
      },
      {
        "type": "image",
        "src": "/insights/tools-7.jpg",
        "alt": "PageSpeed Insights mobile report showing performance, accessibility, best practices and SEO scores",
        "caption": "PageSpeed Insights mobile report."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Test your home page and each location page on Mobile."
          },
          {
            "text": "Fix the largest problems first, usually oversized photos and heavy scripts."
          },
          {
            "text": "Run it again after each change and note the score in your monthly report."
          }
        ]
      },
      {
        "type": "h3",
        "text": "11. Screaming Frog SEO Spider (free version)"
      },
      {
        "type": "p",
        "text": "Screaming Frog is a free desktop crawler that scans up to 500 URLs, which is enough for most self storage websites. It finds broken links, missing page titles, duplicate content and redirect problems in one run."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Crawl your website and sort by response codes to find broken pages."
          },
          {
            "text": "Check titles and headings on each location page so every one has its town and \"self storage\" in the right places."
          },
          {
            "text": "Look for duplicate location pages that only change the town name, and rewrite them with local detail."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you use these free tools together each month?"
      },
      {
        "type": "p",
        "text": "Set aside one hour on the same day each month and work through the tools in order: listing, website, keywords, then fixes. Write the numbers in one sheet so you can see the trend."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Minutes 1 to 15, your listing: read the Google Business Profile Performance report, reply to new reviews and schedule next month's posts. Share your best post on your local Facebook page too."
          },
          {
            "text": "Minutes 15 to 25, AI answers: ask ChatGPT, Gemini and Claude the same three questions and note whether you are named."
          },
          {
            "text": "Minutes 25 to 40, your website: check Search Console clicks, impressions and the Generative AI features report, then GA4 enquiries and key events."
          },
          {
            "text": "Minutes 40 to 50, keywords: check Google Trends for the next season and Keyword Planner for one new phrase to add to a location page."
          },
          {
            "text": "Minutes 50 to 60, fixes: run PageSpeed Insights on one page and fix the top issue. Run Screaming Frog every quarter."
          }
        ]
      },
      {
        "type": "h2",
        "text": "When are free tools not enough?"
      },
      {
        "type": "p",
        "text": "Free tools show you what is happening. They do not do the work for you, and they are built for one site at a time. They cannot track your map ranking street by street, manage reviews across many branches or build links for you. If you would rather hand the work over, compare [the best AI marketing agencies for self storage](/insights/best-ai-marketing-agency-self-storage)."
      },
      {
        "type": "p",
        "text": "If you are running multiple self storage sites, then you might consider premium tools for running your business efficiently. We have covered that in the next blogs to help you understand better."
      },
      {
        "type": "p",
        "text": "Want us to look at your listing? Get a Google My Business audit done by MAAI. We check your categories, hours, location pages, reviews and local links, then send you a plan in order of impact. [Book your audit](/book)"
      }
    ],
    "faq": [
      {
        "q": "Is Google My Business free?",
        "a": "Yes. Google My Business is now called Google Business Profile, and creating and managing a listing is free. People still search for \"Google My Business\", and it is the same listing."
      },
      {
        "q": "Do I need paid SEO tools for a small self storage business?",
        "a": "No. A single facility can do well with the free tools in this guide. Paid tools become useful when you manage several sites or want to track rankings location by location."
      },
      {
        "q": "Which free tool should I start with?",
        "a": "Start with Google Business Profile, because it controls your map listing. Then add Search Console and Google Analytics 4 so you can see what your website does."
      },
      {
        "q": "How often should I check these tools?",
        "a": "Once a month is enough for most owners, with a quick weekly look at new reviews. Use the one-hour routine above."
      },
      {
        "q": "Can free tools show if I appear in AI answers?",
        "a": "Partly. A free AI assistant shows what it says about you, and the Generative AI features report in Search Console shows impressions from Google's AI features. Neither is a full tracker, so check both monthly."
      },
      {
        "q": "How long do free tools take to show results?",
        "a": "The tools give you data straight away. Changes you make from that data, such as listing fixes, usually show in weeks, and map ranking movement usually takes a few months."
      }
    ]
  },
  {
    "slug": "track-ai-traffic",
    "seoTitle": "How to Track AI Traffic in Google Analytics 4 and Search Console (2027)",
    "title": "How to Track AI Traffic for Free in 2027: Google Analytics 4 and Search Console Guide",
    "description": "How to track AI traffic for free in 2027: set up Google Analytics 4 and Search Console to measure visits from ChatGPT, Claude, Perplexity and Google AI Overviews.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/track-ai-traffic-banner.jpg",
    "intro": "For twenty years, getting found online meant ranking in a list of ten blue links and waiting for the clicks. That has changed. Your buyers now ask ChatGPT, Claude and Perplexity for answers, and Google shows an AI Overview above its results for millions of searches. Many of those people get what they need without visiting any website. Others arrive having already read about you in an AI answer. This guide explains how search traffic has shifted, why your impressions may be rising while your clicks fall, and [how to track AI traffic on your website](/insights/track-ai-traffic) for free with Google Analytics 4 (GA4) and Google Search Console. ",
    "body": [
      {
        "type": "h2",
        "text": "How has search traffic shifted to AI?"
      },
      {
        "type": "p",
        "text": "Search used to be a two-step process: type a question, then click a result to find the answer. AI has merged those steps. People now ask AI assistants full questions, read AI Overviews at the top of Google, or have a whole conversation in Google's AI Mode, and the answer arrives without a click."
      },
      {
        "type": "p",
        "text": "The effect on clicks is now well measured:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Research by [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) found Google users clicked a traditional result in 8% of visits when an AI summary appeared, compared with 15% when it did not."
          },
          {
            "text": "[Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks/) measured a 34.5% drop in click-through rate for the top-ranking page when an AI Overview was present."
          },
          {
            "text": "[Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update) reported drops as high as 61%."
          }
        ]
      },
      {
        "type": "p",
        "text": "For your business, this has two sides. Simple questions, such as \"what is a 3PL?\", now send far fewer visitors, because the answer sits on Google. But people who do click through from an AI answer or an AI assistant tend to arrive further along: they have already compared options and often know your name. Fewer visits, but better-informed ones, is the pattern most businesses now see."
      },
      {
        "type": "quote",
        "text": "Yes it's dropping organic.",
        "author": "One business owner",
        "where": "r/digital_marketing",
        "href": "https://www.reddit.com/r/digital_marketing/comments/1tvos1i/discussion_is_google_killing_organic_traffic_with/"
      },
      {
        "type": "h2",
        "text": "Why are impressions rising while clicks fall?"
      },
      {
        "type": "p",
        "text": "Four terms explain what you see in Search Console:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Impressions: how many times your page appeared in Google's results."
          },
          {
            "text": "Clicks: how many times someone clicked through to your page."
          },
          {
            "text": "CTR (click-through rate): clicks divided by impressions."
          },
          {
            "text": "Average position: where your page ranked, on average."
          }
        ]
      },
      {
        "type": "p",
        "text": "When an AI Overview appears, your page can still rank in the same position and still be seen, so impressions hold steady or rise. But the AI answer above it satisfies many searchers, so fewer of them click, and CTR falls. SEOs call this gap between impressions and clicks \"the great decoupling\"."
      },
      {
        "type": "image",
        "src": "/insights/track-1.jpg",
        "alt": "Google Search Console performance report with total clicks, impressions, average CTR and average position over 16 months",
        "caption": "Search Console Performance report: impressions and clicks over time."
      },
      {
        "type": "p",
        "text": "Seeing this pattern does not mean your SEO has failed. If impressions and position hold while CTR falls, the results page has changed around you. The useful question becomes which pages are affected, and whether the searches behind them still matter to your business. This guide shows you how to answer that with free tools."
      },
      {
        "type": "h2",
        "text": "What counts as AI traffic?"
      },
      {
        "type": "p",
        "text": "AI traffic comes in three forms, and each shows up differently in your data."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Visits from AI assistants: people who click a link in ChatGPT, Claude, Perplexity, Gemini or Copilot. These usually appear in GA4 as referrals from chatgpt.com, claude.ai, perplexity.ai, gemini.google.com or copilot.microsoft.com."
          },
          {
            "text": "Clicks from Google AI Overviews and AI Mode: people who click a source inside Google's AI answers. These appear as normal Google organic traffic."
          },
          {
            "text": "Invisible AI influence: people who read an AI answer, then later search your brand name or type your web address. These appear as branded search or direct visits, with no link back to the AI tool."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Why is AI traffic hard to track?"
      },
      {
        "type": "p",
        "text": "Three things make AI traffic harder to see than other channels."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Missing referrers: visits from AI mobile apps, or from links people copy and paste, often arrive with no referrer and land in your Direct traffic."
          },
          {
            "text": "Blended Google data: Google includes AI Overview and AI Mode clicks and impressions in its normal search data, with no separate filter."
          },
          {
            "text": "No click, no record: when an AI answer names your business but nobody clicks, analytics records nothing."
          }
        ]
      },
      {
        "type": "p",
        "text": "No free tool solves all three, but two free Google tools cover most of it. GA4 shows who visits from AI assistants, which pages they land on and whether they enquire. Search Console shows which searches you appear for, and where impressions and clicks are moving apart. Set up both properly and you have a reliable picture."
      },
      {
        "type": "h2",
        "text": "Free tools for tracking AI traffic on your website"
      },
      {
        "type": "h3",
        "text": "How to set up Google Analytics 4, step by step"
      },
      {
        "type": "p",
        "text": "GA4 is Google's free analytics tool. If you already have it, check each step below anyway, as several settings that matter for AI tracking are off by default."
      },
      {
        "type": "h3",
        "text": "Step 1: Create your account and property"
      },
      {
        "type": "p",
        "text": "The account holds your business, and the property holds the data for your website."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to analytics.google.com and sign in with your business Google account."
          },
          {
            "text": "Select \"Start measuring\" and enter an account name, usually your business name."
          },
          {
            "text": "Choose your data-sharing settings and continue."
          },
          {
            "text": "Enter a property name, such as \"Company website\"."
          },
          {
            "text": "Set the reporting time zone and currency to match your business, so daily figures and revenue line up with your own records."
          },
          {
            "text": "Enter your industry and business size, choose the objectives that fit (for most service businesses, \"Generate leads\"), and accept the terms."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 2: Create a web data stream"
      },
      {
        "type": "p",
        "text": "A data stream connects your website to the property."
      },
      {
        "type": "image",
        "src": "/insights/track-2.jpg",
        "alt": "GA4 Data streams screen showing the web stream for the MAAI website",
        "caption": "GA4 Admin, Data streams: check your web stream is collecting data."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Choose \"Web\" as the platform."
          },
          {
            "text": "Enter your website address and a stream name."
          },
          {
            "text": "Leave Enhanced Measurement switched on. It tracks page views, scrolls, outbound clicks, site search, form interactions, video engagement and file downloads without extra code."
          },
          {
            "text": "Select \"Create stream\" and copy your Measurement ID, which starts with \"G-\"."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 3: Install the Google tag on your website"
      },
      {
        "type": "p",
        "text": "The Google tag is a short piece of code that sends visit data to GA4. Choose the method that suits your website."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Manually: copy the tag from \"View tag instructions\" and paste it straight after the opening <head> tag on every page."
          },
          {
            "text": "Google Tag Manager: create a Google tag in Tag Manager, add your Measurement ID, set it to fire on all pages and publish."
          },
          {
            "text": "WordPress: install Google's Site Kit plugin and connect Analytics."
          },
          {
            "text": "Shopify: install the Google and YouTube app and connect your GA4 property."
          },
          {
            "text": "Wix and Squarespace: add your Measurement ID in the site's marketing or external services settings."
          }
        ]
      },
      {
        "type": "p",
        "text": "Use only one method, as installing the tag twice counts every visit twice."
      },
      {
        "type": "h3",
        "text": "Step 4: Check the tag is working"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Visit your website, then open Reports, then Realtime in GA4. You should see yourself as an active user within a minute."
          },
          {
            "text": "For more detail, use Tag Assistant (tagassistant.google.com) with your site, then open Admin, then DebugView, to watch each event arrive."
          },
          {
            "text": "Standard reports fill in within 24 to 48 hours."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/track-3.jpg",
        "alt": "GA4 Realtime overview showing active users on a world map",
        "caption": "GA4 Realtime overview, useful for checking tracking works."
      },
      {
        "type": "h3",
        "text": "Step 5: Extend data retention to 14 months"
      },
      {
        "type": "p",
        "text": "By default, GA4 keeps detailed event data for only two months, which limits the comparisons you can run in Explorations. This is one of the most commonly missed settings."
      },
      {
        "type": "image",
        "src": "/insights/track-4.jpg",
        "alt": "GA4 Data retention settings with event data retention and user data retention options",
        "caption": "GA4 Data retention settings. Set event data retention to 14 months."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Admin, then Data collection and modification, then Data retention."
          },
          {
            "text": "Change \"Event data retention\" from 2 months to 14 months and save."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 6: Filter out your own team's visits"
      },
      {
        "type": "p",
        "text": "Visits from your office can inflate your figures and hide real changes in AI traffic."
      },
      {
        "type": "image",
        "src": "/insights/track-5.jpg",
        "alt": "GA4 Data filters screen with an Internal Traffic filter set to Exclude",
        "caption": "GA4 Data filters: exclude internal traffic."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Admin, then Data streams, select your stream, then Configure tag settings, then Show more, then Define internal traffic."
          },
          {
            "text": "Create a rule with your office IP address (search \"what is my IP\" from the office network to find it)."
          },
          {
            "text": "Go to Admin, then Data filters, open the \"Internal Traffic\" filter and change it from Testing to Active."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 7: Set up key events for enquiries"
      },
      {
        "type": "p",
        "text": "Key events (formerly called conversions) let you see whether AI visitors take action, which matters more than how many arrive."
      },
      {
        "type": "image",
        "src": "/insights/track-6.jpg",
        "alt": "GA4 Events screen where you mark events as key events with a star",
        "caption": "GA4 Events: mark enquiry events as key events."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Decide what counts as an enquiry: a form submission, a booking, a phone click or an email click."
          },
          {
            "text": "If your forms lead to a thank-you page, go to Admin, then Events, then Create event, and create an event such as \"generate_lead\" when page_location contains \"/thank-you\"."
          },
          {
            "text": "Go to Admin, then Key events, and mark that event as a key event."
          },
          {
            "text": "Test it by submitting your own form and checking DebugView."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Step 8: Set up Consent Mode for UK and EU visitors"
      },
      {
        "type": "p",
        "text": "Under UK and EU privacy rules, you need consent before setting analytics cookies. Consent Mode tells GA4 whether each visitor has agreed, and lets Google model some of the activity of visitors who decline, so your figures are less understated."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Choose a cookie banner (consent management platform) certified by Google."
          },
          {
            "text": "Turn on its Google Consent Mode integration, ideally the \"advanced\" setting."
          },
          {
            "text": "Check in Tag Assistant that consent signals are sent before the Google tag fires."
          }
        ]
      },
      {
        "type": "p",
        "text": "Without consent mode, your GA4 figures for UK and EU visitors can look much lower than reality, so keep this in mind when you compare channels."
      },
      {
        "type": "h3",
        "text": "Step 9: Link Google Search Console"
      },
      {
        "type": "p",
        "text": "Linking the two tools brings your search data into GA4, so you can see search queries and landing pages alongside visits and enquiries."
      },
      {
        "type": "image",
        "src": "/insights/track-7.jpg",
        "alt": "GA4 Search Console links screen with the Link button",
        "caption": "GA4 Search Console links: connect Search Console to GA4."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Admin, then Product links, then Search Console links, then Link."
          },
          {
            "text": "Choose your Search Console property and your web data stream, then submit."
          },
          {
            "text": "Go to Reports, then Library, find the \"Search Console\" collection and publish it so it appears in your menu."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How to set up Google Search Console to track AI performance"
      },
      {
        "type": "p",
        "text": "Search Console is Google's free tool for seeing how your site performs in Google Search, including AI Overviews and AI Mode, which Google counts within its normal search data."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Sign in at search.google.com/search-console and select \"Add property\"."
          },
          {
            "text": "Choose a Domain property, which covers every version of your site (www, non-www, http and https, and subdomains)."
          },
          {
            "text": "Verify ownership by adding the TXT record Google gives you to your domain's DNS settings. If you can't edit DNS, use a URL-prefix property and verify with the HTML tag or your GA4 account."
          },
          {
            "text": "Go to Sitemaps and submit your sitemap address, usually yoursite.com/sitemap.xml."
          },
          {
            "text": "Link Search Console to GA4, as in Step 9 above."
          },
          {
            "text": "Go to Settings, then Users and permissions, and add team members with full or restricted access."
          },
          {
            "text": "Bookmark the filtered reports you will reuse for AI tracking (set out in the next section). Search Console keeps filters in the page address, so a bookmark saves the view."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to track visits from AI assistants in GA4"
      },
      {
        "type": "h3",
        "text": "1. Find AI referrals in the Traffic acquisition report"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Reports, then Acquisition, then Traffic acquisition."
          },
          {
            "text": "Change the main dimension to \"Session source / medium\"."
          },
          {
            "text": "Type \"chatgpt\" in the search box to see ChatGPT visits, then repeat for \"claude\", \"perplexity\", \"gemini\" and \"copilot\"."
          }
        ]
      },
      {
        "type": "p",
        "text": "ChatGPT adds a tracking tag (utm_source=chatgpt.com) to many of its links, so its visits are usually labelled clearly."
      },
      {
        "type": "h3",
        "text": "2. Filter all AI sources at once with a regex"
      },
      {
        "type": "p",
        "text": "A regex (regular expression) is a short pattern that matches several sources at once. Add a filter on \"Session source\" that matches this regex:"
      },
      {
        "type": "p",
        "text": "chatgpt\\.com|chat\\.openai\\.com|claude\\.ai|perplexity|gemini\\.google\\.com|copilot\\.microsoft\\.com|deepseek|grok|meta\\.ai|mistral"
      },
      {
        "type": "p",
        "text": "Update the pattern as new AI tools appear."
      },
      {
        "type": "h3",
        "text": "3. Create an \"AI assistants\" channel"
      },
      {
        "type": "p",
        "text": "By default, GA4 lumps AI visits into Referral, where they get lost. A custom channel group gives them their own line in every report."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Admin, then Data display, then Channel groups, then Create new channel group (or copy the default group)."
          },
          {
            "text": "Add a new channel called \"AI assistants\" with the condition: Source matches regex, using the pattern above."
          },
          {
            "text": "Move \"AI assistants\" above \"Referral\" in the list. GA4 applies channels in order, so this step is essential."
          },
          {
            "text": "Save, then select your new channel group in the Traffic acquisition report."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/track-8.jpg",
        "alt": "GA4 Traffic acquisition report by session primary channel group, including an AI Assistant row",
        "caption": "GA4 Traffic acquisition by channel group, with AI tools in their own row."
      },
      {
        "type": "h3",
        "text": "4. See which pages AI visitors land on, and whether they enquire"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Explore and create a Free form exploration."
          },
          {
            "text": "Add the dimensions \"Session source / medium\" and \"Landing page + query string\"."
          },
          {
            "text": "Add the metrics Sessions, Engaged sessions, Engagement rate and Key events."
          },
          {
            "text": "Filter Session source with the AI regex."
          }
        ]
      },
      {
        "type": "p",
        "text": "This shows the pages AI tools send people to. These are usually the pages AI assistants cite most, and the ones worth keeping sharp."
      },
      {
        "type": "h3",
        "text": "5. Compare AI visitors with organic visitors"
      },
      {
        "type": "p",
        "text": "Compare engagement rate and key event rate for the \"AI assistants\" channel against \"Organic search\". If AI visitors enquire at a higher rate, as many businesses find, that is your case for investing in AEO even while the numbers are small."
      },
      {
        "type": "quote",
        "text": "Volume is small, but engagement seems surprisingly strong.",
        "author": "One marketer",
        "where": "r/digital_marketing",
        "href": "https://www.reddit.com/r/digital_marketing/comments/1r6xi3s/ai_brand_visibility_tracking_chatgpt_referral/"
      },
      {
        "type": "h2",
        "text": "How to track Google AI Overviews and AI Mode in Search Console"
      },
      {
        "type": "p",
        "text": "Search Console has no AI Overview filter, so you track Google's AI features through patterns in your data."
      },
      {
        "type": "image",
        "src": "/insights/track-9.jpg",
        "alt": "Search Console Generative AI features performance report showing impressions and top pages",
        "caption": "Search Console report for Google's generative AI features, with impressions by page."
      },
      {
        "type": "h3",
        "text": "1. Filter question-style searches"
      },
      {
        "type": "p",
        "text": "Almost all searches that trigger AI Overviews are informational, according to [Ahrefs](https://ahrefs.com/blog/ai-overview-triggers/). Filtering for question-style searches isolates the ones most likely to show an AI Overview."
      },
      {
        "type": "image",
        "src": "/insights/track-10.jpg",
        "alt": "Google Search Console performance report showing 1.43k clicks, 271k impressions, 0.5% CTR and average position 8.2",
        "caption": "Rising impressions with flat clicks in Search Console."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Performance, then Search results."
          },
          {
            "text": "Select \"Add filter\", then Query, then \"Custom (regex)\"."
          },
          {
            "text": "Use a pattern such as: ^(what|how|why|when|which|who|is|are|can|does|do|should)\\b|\\b(vs|versus|difference|meaning|guide)\\b"
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. Find pages where CTR falls but position holds"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Select Date, then Compare, and compare the last three months with the same period last year."
          },
          {
            "text": "Turn on all four metrics: clicks, impressions, CTR and position."
          },
          {
            "text": "Open the Pages tab and look for pages where position and impressions are stable or rising, but CTR has dropped."
          }
        ]
      },
      {
        "type": "p",
        "text": "These pages are likely appearing under AI Overviews. Search the main queries yourself to confirm, and note whether your page is one of the cited sources."
      },
      {
        "type": "h3",
        "text": "3. Decide which searches are still worth winning"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Keep defending: comparison, cost, \"best\" and supplier searches, where buyers still click to check details."
          },
          {
            "text": "Accept the change: simple definition searches that the AI answer now covers in full. Aim to be cited there for visibility rather than clicks."
          },
          {
            "text": "Rework: pages losing clicks on valuable searches, by answering the question earlier and covering the follow-up questions."
          }
        ]
      },
      {
        "type": "h3",
        "text": "4. Optional: capture AI Overview clicks with text fragments"
      },
      {
        "type": "p",
        "text": "Google sometimes adds a text fragment (#:~:text=) to links from AI Overviews, which scrolls the visitor to the quoted passage. GA4 cannot see this by default, but with a custom JavaScript variable in Google Tag Manager you can pass it to GA4 as a custom dimension. Analytics consultant Dana Di Tomaso has published a step-by-step method. Note that clicks from featured snippets and People Also Ask can use the same fragment, so treat the result as an estimate."
      },
      {
        "type": "h2",
        "text": "How to check your rankings, keywords and indexing in Search Console"
      },
      {
        "type": "h3",
        "text": "How to check your Google ranking for a keyword"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Performance, then Search results, and turn on \"Average position\"."
          },
          {
            "text": "Open the Queries tab to see the searches you appear for, with clicks, impressions, CTR and position."
          },
          {
            "text": "Filter by a single query to check your position for that keyword over time."
          }
        ]
      },
      {
        "type": "p",
        "text": "Average position is an average across every time you appeared, so it can differ from what you see when you search yourself."
      },
      {
        "type": "h3",
        "text": "Why does Google Analytics say \"keyword (not provided)\"?"
      },
      {
        "type": "p",
        "text": "Google encrypts searches, so analytics tools cannot see which keyword a visitor typed. GA4 therefore shows organic visits without the search term. Search Console is where that data lives. Once the two are linked, open the Search Console reports in GA4 (Reports, then Search Console, then Queries) to see the searches that bring people to each page. Search Console also hides some rare searches to protect privacy, so totals may not match exactly."
      },
      {
        "type": "h3",
        "text": "How to check indexing and submit a page to Google"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Paste a page address into the URL Inspection tool at the top of Search Console."
          },
          {
            "text": "Check whether the page is indexed, and whether Google can crawl it."
          },
          {
            "text": "If it is new or updated, select \"Request indexing\"."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/track-11.jpg",
        "alt": "Search Console URL Inspection result showing URL is on Google and the page is indexed",
        "caption": "Search Console URL Inspection: check a page is indexed."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Open Indexing, then Pages, to see which pages are not indexed and why."
          }
        ]
      },
      {
        "type": "p",
        "text": "A page that is not indexed cannot appear in Google's results or its AI answers, so check new pages within a few days of publishing."
      },
      {
        "type": "h2",
        "text": "How to build a free monthly AI traffic report"
      },
      {
        "type": "p",
        "text": "Looker Studio, Google's free reporting tool, connects to both GA4 and Search Console, so one dashboard can track your AI performance each month."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to lookerstudio.google.com and create a blank report."
          },
          {
            "text": "Add GA4 and Search Console as data sources."
          },
          {
            "text": "Build a page with five metrics:"
          },
          {
            "text": "visits from the \"AI assistants\" channel"
          },
          {
            "text": "key events from AI visitors"
          },
          {
            "text": "impressions and CTR for question-style searches (using the regex filter)"
          },
          {
            "text": "branded searches, a sign of invisible AI influence"
          },
          {
            "text": "a simple table of your monthly manual checks of key prompts in ChatGPT, Claude and AI Overviews"
          },
          {
            "text": "Set the date range to compare each month with the previous month and the same month last year."
          }
        ]
      },
      {
        "type": "h2",
        "text": "What should you do with your AI traffic data?"
      },
      {
        "type": "p",
        "text": "Tracking only pays off when it changes what you do. Each month, use your report to act in four ways."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Strengthen the pages AI already sends visitors to: keep their facts current, answer questions early and make the next step clear."
          },
          {
            "text": "Rework pages losing CTR on valuable searches: tighten the opening answer and cover the follow-up questions."
          },
          {
            "text": "Defend comparison and cost searches, where buyers still click."
          },
          {
            "text": "Grow branded search through PR and mentions, since it reflects AI influence you cannot track directly."
          }
        ]
      },
      {
        "type": "p",
        "text": "For platform-specific improvements, see our guides on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt), [how to rank in Claude](/insights/how-to-rank-in-claude) and [how to rank in AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews)."
      },
      {
        "type": "h2",
        "text": "Paid tools to consider as your business scales"
      },
      {
        "type": "p",
        "text": "Free tools show what reaches your website. They cannot show AI mentions that never produce a click, which AI platforms cite you, how AI Mode differs from AI Overviews, or how your visibility compares with competitors. Paid AI visibility tools fill those gaps, and become worth considering when you track many topics or markets, report to a board or clients, or compete hard for AI visibility. Once you can measure it, our guide on [whether SEO can generate leads](/insights/can-seo-generate-leads) shows how to turn that traffic into enquiries."
      },
      {
        "type": "p",
        "text": "Tools worth considering include:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Ahrefs Brand Radar: brand mentions and citations across AI Overviews, AI Mode, ChatGPT, Perplexity and more."
          },
          {
            "text": "Semrush AI Toolkit: AI visibility, mentions and sentiment alongside Semrush's SEO data."
          },
          {
            "text": "Peec AI: prompt-level tracking of brand visibility across AI assistants."
          },
          {
            "text": "Profound: enterprise-level AI visibility and citation tracking."
          },
          {
            "text": "Otterly.AI: simpler monitoring of brand mentions and citations in AI answers."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our upcoming guide to paid AI visibility tools compares them in detail. For the bigger picture, read our guide to [answer engine optimisation](/insights/answer-engine-optimisation)."
      }
    ],
    "faq": [
      {
        "q": "Is Google Analytics free?",
        "a": "Yes. GA4 is free for almost all businesses, with no fee or payment method needed. Google also sells Google Analytics 360, a paid enterprise version with higher limits and service agreements, which only very large websites usually need."
      },
      {
        "q": "How do you set up Google Search Console for a small business?",
        "a": "Sign in with your business Google account, add your website as a Domain property and verify it through your domain's DNS settings. If your website platform makes DNS hard to reach, add a URL-prefix property and verify with your GA4 account instead. Then submit your sitemap and link Search Console to GA4. Most small businesses can do this in under 30 minutes without a developer."
      },
      {
        "q": "Why do ChatGPT visits show as Direct in GA4?",
        "a": "Visits from AI mobile and desktop apps, or from links people copy and paste, often arrive without a referrer. GA4 then records them as Direct. A rise in direct visits to deep pages, such as specific service pages, can be a sign of AI traffic."
      },
      {
        "q": "How long before AI traffic shows in GA4?",
        "a": "Visits appear in the Realtime report within seconds, and in standard reports within 24 to 48 hours. A new custom channel group applies to your data straight away in reports."
      },
      {
        "q": "What is the difference between Semrush and Google Analytics?",
        "a": "They do different jobs. Google Analytics measures real visitors to your own website: where they came from and what they did. Semrush estimates search data across the whole market, such as keyword volumes, competitors' rankings and AI visibility. Many businesses use both."
      },
      {
        "q": "Are there free alternatives to Google Analytics?",
        "a": "Yes. Options include Matomo (free to self-host), Microsoft Clarity (free session recordings and heatmaps, often used alongside GA4) and Ahrefs Web Analytics (free tier). Privacy-focused tools such as Plausible and Fathom are paid. Whichever you use, set up the same AI source filter to keep AI visits separate."
      },
      {
        "q": "Does Google Search Console show AI Overview data?",
        "a": "Yes, but blended in. Google includes impressions and clicks from AI Overviews and AI Mode in Search Console's normal performance data, without a separate filter. Use the question-search filter and CTR comparison above to spot the effect. Want help setting up AI tracking for your business? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "can-seo-generate-leads",
    "seoTitle": "Can SEO Generate Leads? SEO, AEO and GEO for Sales in 2027",
    "title": "Can SEO Generate Leads? How AEO and GEO Generate Sales in 2027",
    "description": "Can SEO generate leads? How SEO, AEO and GEO bring leads and sales in 2027, by buyer stage and business type, and how to measure them.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "B2B",
      "SEO - Begins"
    ],
    "industries": [],
    "image": "/insights/can-seo-generate-leads-banner.jpg",
    "intro": "Buyers no longer wait for a sales call to learn about you. Research by 6sense found that B2B buyers make first contact 61% of the way through their buying process, and Forrester reports that 94% of B2B buyers now use AI while they buy. By the time someone fills in your form, they have already searched Google, read AI answers in ChatGPT or Google's AI Mode, compared options and formed a shortlist. Yet many business owners still believe that \"SEO brings traffic, ads bring leads\". The truth is that SEO, AEO (answer engine optimisation) and GEO (generative engine optimisation) generate leads when they are built around how buyers research and decide, and AI-referred visitors already convert at higher rates than almost any other channel. This guide explains how SEO brings leads and sales, how it has changed with AI, how to reach buyers at every touch point in your industry, and how to measure the results.",
    "body": [
      {
        "type": "h2",
        "text": "How does SEO bring leads and generate sales for a business?"
      },
      {
        "type": "p",
        "text": "SEO brings leads by putting your business in front of people at the moment they search for what you sell. When your pages rank for the questions, comparisons and services buyers search, and those pages make the next step easy, visitors become enquiries without you paying for each click."
      },
      {
        "type": "p",
        "text": "The mechanism is simple. Every search shows intent. Someone searching \"office removals cost London\" or \"best property management software for landlords\" is telling you what they need, often with a budget in mind. A page that answers that search well earns the visit, and a clear call to action turns the visit into a lead."
      },
      {
        "type": "p",
        "text": "Businesses that commit to SEO see this play out. In a long-running r/SEO discussion, a former director of digital marketing at a B2B tech company acquired for $250 million said that Google \"accounted for 99% of leads\". Another business owner in the same thread ran only SEO for a year, with no ads, and still received leads every month."
      },
      {
        "type": "h3",
        "text": "How much do big and small businesses invest in SEO compared with PPC?"
      },
      {
        "type": "p",
        "text": "Spending tells an interesting story. Businesses still put far more money into paid search than SEO:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Global spending on search ads reached $330 billion in 2024, according to [MAGNA](https://magnaglobal.com/wp-content/uploads/2025/02/MAGNA-Search-Report-2025-Summary95.pdf)."
          },
          {
            "text": "The global SEO market was estimated at around $82 billion in 2023, according to Research and Markets."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/leads-1.jpg",
        "alt": "Pie chart: paid search about 80% of global search spend (USD 330bn, MAGNA 2024), SEO about 20% (USD 82bn, Research and Markets 2023)",
        "caption": "Global search spend, paid vs SEO. Approximate, different years and scopes."
      },
      {
        "type": "p",
        "text": "Small businesses follow the same pattern. In a 2025 survey by CallRail, small and medium businesses named PPC (68%) as a top spending priority, ahead of SEO (40%). In LocaliQ's 2026 report, 53% of small businesses used SEO, behind unpaid social media and social ads. Yet a 2024 Service Direct survey found that 78% of US small business marketers used SEO and 75% used paid search, so most use both."
      },
      {
        "type": "p",
        "text": "Large companies invest in SEO because organic search compounds. Paid search buys a click today; a strong page keeps bringing visitors and leads for years. Many smaller businesses lean on ads because results come faster and are easier to measure, which is exactly why SEO's lead value often goes unseen."
      },
      {
        "type": "h3",
        "text": "When can SEO generate leads on its own?"
      },
      {
        "type": "p",
        "text": "It depends on how aware your buyers are. One experienced contributor in the same Reddit thread framed it well: if buyers know their problem and know solutions exist, SEO alone can do it; if they are unaware of the problem, they \"definitely\" need other channels first."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Problem and solution aware: buyers search for providers directly. SEO and GEO can carry most of your lead generation."
          },
          {
            "text": "Problem aware, solution unaware: buyers search for their problem. SEO works through educational content that introduces your solution."
          },
          {
            "text": "Unaware: buyers do not search yet. You need PR, social, partnerships or ads to create demand, and SEO to capture it later."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What does this look like for a real B2B business?"
      },
      {
        "type": "p",
        "text": "One of our clients sells high-value corporate relocation services to companies worldwide, a sale decided by a buying group rather than one person. We built answer-first, country-specific blog posts around the exact questions those buyers and the employees moving abroad ask, written to rank in Google and be quoted in AI answers. Organic traffic grew 81% from February to June, and 100% of the client's qualified leads in that period came directly through those country blog posts."
      },
      {
        "type": "h2",
        "text": "How has SEO evolved with AEO and GEO?"
      },
      {
        "type": "p",
        "text": "SEO used to mean ranking in a list of ten blue links. In 2027, a growing share of searches end with an AI-written answer, and both how people search and how answers are chosen have changed."
      },
      {
        "type": "h3",
        "text": "How has people's search behaviour changed?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Longer questions: people now type or speak full questions, such as \"which removals company in Leeds handles office moves over a weekend?\", instead of \"removals Leeds\"."
          },
          {
            "text": "Conversation instead of searching: buyers ask follow-up questions in ChatGPT, Claude or Google's AI Mode, refining their shortlist in one session."
          },
          {
            "text": "Answers without clicks: research by [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) found Google users clicked a traditional result in 8% of visits when an AI summary appeared, compared with 15% without one."
          },
          {
            "text": "Research spread across platforms: buyers check YouTube, Reddit, review sites and LinkedIn alongside Google and AI tools."
          },
          {
            "text": "Later contact: buyers reach out once they have already narrowed their options, so the shortlist is formed in search and AI answers."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How do AI tools choose which businesses to recommend?"
      },
      {
        "type": "p",
        "text": "When a buyer asks an AI tool a question, the tool usually searches the web first and writes its answer from what it finds, a method called retrieval-augmented generation (RAG). It also uses query fan-out, splitting one question into several smaller searches. \"Best hotel for a corporate retreat near Edinburgh\" might become searches for meeting room capacity, retreat packages, reviews and prices."
      },
      {
        "type": "p",
        "text": "The tool then picks the passages that answer each part most clearly, and favours businesses that several trusted sources agree on. That is why ranking well, answering questions directly and being mentioned on other sites all feed AI visibility. In a study of 1.9 million citations, [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) found 76% of pages cited in Google's AI Overviews already ranked in the top 10."
      },
      {
        "type": "h3",
        "text": "What do AEO and GEO add to SEO?"
      },
      {
        "type": "p",
        "text": "SEO earns you a place in the results. AEO and GEO earn you a place in the answer: being cited as a source and named as a recommended business. They rely on the same foundation, with extra focus on answer-first content, entity consistency and third-party mentions. Our guide to [answer engine optimisation](/insights/answer-engine-optimisation) explains how it works in depth."
      },
      {
        "type": "h2",
        "text": "How to use AEO and GEO for your business"
      },
      {
        "type": "p",
        "text": "Every buyer moves through three stages, and the searches and AI prompts they use change at each one."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU (top of funnel): the buyer notices a problem and researches it. They need education."
          },
          {
            "text": "MOFU (middle of funnel): the buyer compares solutions and providers. They need comparisons, costs and proof."
          },
          {
            "text": "BOFU (bottom of funnel): the buyer is ready to choose. They need confidence and a clear next step."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/leads-2.jpg",
        "alt": "Funnel diagram of TOFU, MOFU and BOFU search stages with example searches for each",
        "caption": "Example searches at each stage of the buying journey."
      },
      {
        "type": "p",
        "text": "The touch points that matter most differ by industry. Here is how the journey looks in six common business types."
      },
      {
        "type": "h3",
        "text": "B2B services: logistics, consulting and professional services"
      },
      {
        "type": "p",
        "text": "B2B purchases involve a buying team and weeks or months of research. An operations manager, a finance lead and a director each ask different questions."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"how to cut warehouse costs\", \"what is a 3PL\", asked on Google and ChatGPT."
          },
          {
            "text": "MOFU: \"in-house vs outsourced logistics\", \"3PL pricing per pallet UK\", plus peer opinions on LinkedIn and Reddit."
          },
          {
            "text": "BOFU: \"3PL Midlands\", \"[company] reviews\", \"[company A] vs [company B]\", plus case studies and the AI shortlist."
          },
          {
            "text": "Key touch points: AI shortlists, comparison pages, case studies, trade publications and LinkedIn."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Real estate and property"
      },
      {
        "type": "p",
        "text": "Property buyers, sellers and landlords research heavily, and portals play a big part."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"how much is my house worth\", \"best areas to buy in Manchester\"."
          },
          {
            "text": "MOFU: \"estate agent fees UK\", \"online vs high street estate agent\", local reviews."
          },
          {
            "text": "BOFU: \"estate agent Didsbury\", the Google Business Profile, reviews, and valuation request pages."
          },
          {
            "text": "Key touch points: local search and the map pack, area guides, reviews, portals and AI answers to \"best agent in [area]\"."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Removals and local services"
      },
      {
        "type": "p",
        "text": "Local service buyers decide faster, and location matters most."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"moving house checklist\", \"how much does a removal cost\"."
          },
          {
            "text": "MOFU: \"removal company vs man and van\", \"best removal companies [city]\"."
          },
          {
            "text": "BOFU: \"removals near me\", quote forms and phone calls."
          },
          {
            "text": "Key touch points: Google Business Profile, reviews, cost guides, location pages and \"near me\" AI answers."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Hospitality: hotels, venues and restaurants"
      },
      {
        "type": "p",
        "text": "Travellers and event planners now plan trips and events with AI tools, then book either directly or through online travel agencies (OTAs)."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"things to do in the Lake District\", \"best places for a team retreat in Scotland\", trip-planning prompts in ChatGPT."
          },
          {
            "text": "MOFU: \"boutique hotels Edinburgh with meeting rooms\", \"wedding venues near Bath under £10,000\", reviews and YouTube tours."
          },
          {
            "text": "BOFU: the hotel or venue name, \"book [hotel] direct\", availability and package pages."
          },
          {
            "text": "Key touch points: AI travel itineraries, Google Business Profile and Hotels listings, review sites, local guides, video tours and a direct booking page that beats OTA convenience."
          }
        ]
      },
      {
        "type": "p",
        "text": "For hospitality, every direct booking won through search avoids OTA commission, so SEO and GEO directly protect margin."
      },
      {
        "type": "h3",
        "text": "B2B SaaS and technology"
      },
      {
        "type": "p",
        "text": "Software buyers compare features, prices and alternatives in detail, often across review platforms."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"how to automate invoicing\", \"what is a CRM\"."
          },
          {
            "text": "MOFU: \"best CRM for small teams\", \"[tool] alternatives\", \"[tool A] vs [tool B]\"."
          },
          {
            "text": "BOFU: pricing pages, review platforms such as G2 and Capterra, free trials and demos."
          },
          {
            "text": "Key touch points: \"alternatives\" and comparison pages, review platforms, AI shortlists, YouTube walkthroughs and pricing pages."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Ecommerce and D2C brands"
      },
      {
        "type": "p",
        "text": "Consumers often decide in one session, guided by reviews, video and AI shopping results."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "TOFU: \"how to choose a running shoe\", \"best skincare routine for dry skin\"."
          },
          {
            "text": "MOFU: \"best running shoes for flat feet under £120\", reviews, Reddit threads and YouTube reviews."
          },
          {
            "text": "BOFU: product pages, Google Shopping, AI shopping results and offers."
          },
          {
            "text": "Key touch points: product pages with full details, reviews, buying guides, video and accurate product feeds."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to use content to reach those customer touch points"
      },
      {
        "type": "p",
        "text": "Each content type does a specific job at a specific stage. Together, linked to each other, they form a structure that moves buyers from research to enquiry."
      },
      {
        "type": "h3",
        "text": "Pillar guides and cluster posts (TOFU)"
      },
      {
        "type": "p",
        "text": "A pillar is an in-depth guide on a broad topic. Cluster posts each answer one sub-question and link back to it. Together they build topic authority, which helps both rankings and AI citations, and they capture buyers early in their research."
      },
      {
        "type": "h3",
        "text": "Comparison, cost and \"best\" pages (MOFU)"
      },
      {
        "type": "p",
        "text": "Buyers comparing options search for costs, alternatives and \"best\" lists, and AI tools rely heavily on these pages when building shortlists. Clear, fair comparisons and honest price ranges win both the click and the citation."
      },
      {
        "type": "h3",
        "text": "Service, industry and location pages (BOFU)"
      },
      {
        "type": "p",
        "text": "These are your money pages: one page per service, per industry you serve and per location you cover. Each needs a direct answer to \"what you do and for whom\", proof, pricing guidance and a clear call to action."
      },
      {
        "type": "h3",
        "text": "Case studies and proof pages (BOFU)"
      },
      {
        "type": "p",
        "text": "Case studies, reviews and credentials settle the decision. Describe the problem, the work and the measured result, so both buyers and AI tools can repeat the facts."
      },
      {
        "type": "h3",
        "text": "Original data and research (all stages)"
      },
      {
        "type": "p",
        "text": "Data from your own work, such as average costs, timelines or survey results, is the content most likely to be quoted by journalists, linked by other sites and cited by AI tools."
      },
      {
        "type": "h3",
        "text": "Video (all stages)"
      },
      {
        "type": "p",
        "text": "Short explainers, tours, demos and customer stories serve every stage. YouTube is the most cited domain in Google's AI Overviews, so video is also a direct route into AI answers."
      },
      {
        "type": "h3",
        "text": "FAQs and answer-first sections (all stages)"
      },
      {
        "type": "p",
        "text": "Question-led headings with 40 to 60 word answers make every page easy for buyers to scan and for AI tools to quote."
      },
      {
        "type": "h3",
        "text": "Which channels should you use for your content?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Your website: the home for every page above, and where every touch point leads back to."
          },
          {
            "text": "Google Business Profile: essential for local services, property and hospitality."
          },
          {
            "text": "YouTube: for explainers, tours, demos and reviews."
          },
          {
            "text": "LinkedIn: for B2B expertise, founder insights and case studies."
          },
          {
            "text": "Reddit and industry forums: for honest answers where buyers ask peers."
          },
          {
            "text": "Trade publications and digital PR: for authority, links and mentions."
          },
          {
            "text": "Review platforms: Google, Trustpilot, G2, TripAdvisor or the ones your industry uses."
          },
          {
            "text": "Email: to nurture buyers who are not ready yet."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Is writing and publishing on your website still relevant?"
      },
      {
        "type": "p",
        "text": "Yes. Your website remains the source that search engines and AI tools check, and the place every channel sends buyers to convert. But in 2027, publishing on your website is necessary and not enough on its own."
      },
      {
        "type": "h3",
        "text": "Where do AI tools pick up their information?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search indexes such as Google and Bing, which decide which pages are retrieved."
          },
          {
            "text": "Trusted websites, including publications, directories and industry associations."
          },
          {
            "text": "YouTube, Reddit and forums, for demonstrations and real opinions."
          },
          {
            "text": "Review sites, for reputation."
          },
          {
            "text": "Reference sources such as Wikipedia."
          },
          {
            "text": "Training data collected before each model was released."
          }
        ]
      },
      {
        "type": "p",
        "text": "Your website feeds the first of these directly. The rest depend on what other people and platforms say about you."
      },
      {
        "type": "h3",
        "text": "Why will authority content win?"
      },
      {
        "type": "p",
        "text": "AI tools can summarise generic content from anywhere, so generic content gives them no reason to cite you. Content with original data, first-hand experience, specific facts and clear answers gives them something worth quoting. Pages that already rank and are well linked are the ones retrieved first."
      },
      {
        "type": "h3",
        "text": "Why are backlinks and social media still important?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Backlinks: links from respected sites still drive Google rankings, and Google's AI features draw from ranking pages. Mentions on well-linked pages correlate strongly with AI Overview visibility, according to [Ahrefs](https://ahrefs.com/blog/does-being-mentioned-on-highly-linked-pages-influence-ai-mentions/)."
          },
          {
            "text": "Brand mentions: even unlinked mentions help AI tools connect your business with a topic."
          },
          {
            "text": "Social: LinkedIn, YouTube and Reddit put your content in front of buyers directly, send referral traffic, and create the discussion AI tools pick up."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Do AEO and GEO leads convert better in 2027?"
      },
      {
        "type": "p",
        "text": "Yes. Visitors who arrive from AI answers convert at much higher rates than average, because the AI tool has already done part of the selling."
      },
      {
        "type": "h3",
        "text": "What does the data show?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "[Orbit Media](https://www.orbitmedia.com/blog/conversion-rates-ai-search/) analysed 97 B2B lead generation websites and 29 million visits. ChatGPT visitors converted to leads at 2.1%, compared with 0.5% for Google search."
          },
          {
            "text": "Ahrefs reported that AI search made up 0.5% of its visits but 12.1% of new signups."
          },
          {
            "text": "Semrush found AI search visitors converted 4.4 times better than traditional organic visitors."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/leads-3.jpg",
        "alt": "Bar chart: 2.1% of ChatGPT visitors converted to leads, against 0.5% of Google search visitors",
        "caption": "Conversion rate to lead. Source: Orbit Media."
      },
      {
        "type": "h3",
        "text": "Why are AI-referred buyers more likely to convert?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Pre-qualified: the AI answer has already compared options and recommended you."
          },
          {
            "text": "Further along: buyers often click through only when they are ready to check details or get in touch."
          },
          {
            "text": "Higher trust: being named in an answer works like a recommendation."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/leads-4.jpg",
        "alt": "GA4 Traffic acquisition report showing key events and session key event rate by channel, including AI Assistant",
        "caption": "GA4 Traffic acquisition with key events by channel."
      },
      {
        "type": "h3",
        "text": "Does Google search still matter more for volume?"
      },
      {
        "type": "p",
        "text": "Yes. Orbit Media's data showed Google still sends far more traffic than AI tools, so organic search remains the largest source of leads overall. The strongest approach builds both: SEO for volume, AEO and GEO for high-intent visitors and shortlist inclusion."
      },
      {
        "type": "h2",
        "text": "How do you measure leads coming from SEO?"
      },
      {
        "type": "p",
        "text": "No single tool shows every SEO and GEO lead, so you combine five systems. Set up properly, together they show where leads come from, which pages create them and which become customers."
      },
      {
        "type": "h3",
        "text": "Google Analytics 4: visits, pages and enquiries"
      },
      {
        "type": "p",
        "text": "GA4 shows where visitors come from, which pages they land on and whether they enquire."
      },
      {
        "type": "image",
        "src": "/insights/leads-5.jpg",
        "alt": "GA4 Traffic acquisition report by session primary channel group with sessions and engagement per channel",
        "caption": "GA4 Traffic acquisition by channel group."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Set up key events for every enquiry type: form submissions, bookings, phone clicks and email clicks."
          },
          {
            "text": "Create an \"AI assistants\" channel group so visits from ChatGPT, Claude, Perplexity, Gemini and Copilot get their own line, placed above Referral."
          },
          {
            "text": "Extend data retention to 14 months, filter out internal traffic and set up Consent Mode for UK and EU visitors."
          },
          {
            "text": "Use the Landing page report with key events to see which pages generate leads."
          }
        ]
      },
      {
        "type": "p",
        "text": "Our guide on [how to track AI traffic for free](/insights/track-ai-traffic) walks through each setting step by step."
      },
      {
        "type": "h3",
        "text": "Google Search Console: searches, rankings and AI Overview impact"
      },
      {
        "type": "p",
        "text": "Search Console shows the searches you appear for, your rankings, clicks and click-through rate, including data from AI Overviews and AI Mode."
      },
      {
        "type": "image",
        "src": "/insights/leads-6.jpg",
        "alt": "Google Search Console performance report showing 45.2k clicks, 9.98m impressions, 0.5% CTR and average position 10.5",
        "caption": "Search Console Performance report for tracking clicks and impressions from search."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Verify a Domain property, submit your sitemap and link it to GA4."
          },
          {
            "text": "Track BOFU searches (service, location, \"near me\", pricing) separately from TOFU searches."
          },
          {
            "text": "Watch branded searches, which grow as AI answers and content build awareness."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Your CRM: from lead to customer"
      },
      {
        "type": "p",
        "text": "A CRM such as HubSpot, Salesforce or Pipedrive connects each lead to the deal it becomes, which is how you prove revenue from SEO."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Add hidden fields to your forms that capture the source, medium, landing page and first page visited."
          },
          {
            "text": "Store the original source on the contact record so it is never overwritten."
          },
          {
            "text": "Report on deals and revenue by original source, including organic search and AI assistants."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Call tracking: phone leads"
      },
      {
        "type": "p",
        "text": "For local services, property and hospitality, many leads call instead of filling in a form."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use a call tracking tool with dynamic number insertion, which shows a different number to visitors from each source."
          },
          {
            "text": "Connect it to GA4 and your CRM so calls count as leads with their source."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Self-reported attribution: what buyers tell you"
      },
      {
        "type": "p",
        "text": "Some influence leaves no data trail, such as a buyer who read an AI answer, then searched your name a week later."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Add a required \"How did you hear about us?\" field, with options including \"Google search\", \"ChatGPT or another AI tool\" and \"Recommendation\"."
          },
          {
            "text": "Ask the same question on discovery calls and record it in the CRM."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How do you bring it all together?"
      },
      {
        "type": "p",
        "text": "Build a monthly dashboard in Looker Studio with GA4 and Search Console data, and add CRM figures for deals and revenue. Track organic leads, AI leads, lead-to-customer rate and revenue by source, and compare each month with the same month last year."
      },
      {
        "type": "h2",
        "text": "How long does SEO take to generate leads?"
      },
      {
        "type": "p",
        "text": "Most businesses see early leads from SEO within three to six months, with steady growth over six to twelve months. The timeline depends on competition, your site's existing authority and how far buyers travel before deciding."
      },
      {
        "type": "h3",
        "text": "How does the timeline differ by business type?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Local services and hospitality: often the fastest, around two to four months, when your Google Business Profile, reviews and location pages are strong."
          },
          {
            "text": "Real estate: around three to six months for local terms, longer for competitive city searches."
          },
          {
            "text": "B2B services: around four to nine months, as content builds authority and buying cycles run for weeks or months."
          },
          {
            "text": "SaaS and ecommerce: often six to twelve months in competitive markets, faster for niche products and long-tail searches."
          }
        ]
      },
      {
        "type": "p",
        "text": "AI answers can move faster. Once a page ranks and is indexed, AI tools that search live can start citing it within weeks."
      },
      {
        "type": "h3",
        "text": "How do you attribute leads across a long buying journey?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "First touch: the channel that first brought the buyer, which often credits SEO and GEO for starting the journey."
          },
          {
            "text": "Last touch: the channel just before the enquiry, which often credits ads, email or direct visits."
          },
          {
            "text": "Assisted conversions: GA4's attribution reports show channels that contributed earlier in the journey."
          },
          {
            "text": "Self-reported source: what the buyer says, which captures AI influence that analytics misses."
          },
          {
            "text": "Branded search growth: rising searches for your name signal growing awareness from content and AI answers."
          }
        ]
      },
      {
        "type": "p",
        "text": "Using several views together stops SEO's early influence from being credited to whichever channel happened to come last."
      },
      {
        "type": "h2",
        "text": "Why is PPC alone not enough?"
      },
      {
        "type": "p",
        "text": "PPC is useful for speed, launches, seasonal offers and testing new markets. On its own, it has limits that SEO and GEO fill."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Leads stop when spending stops: paid traffic ends the day the budget does. Strong pages keep bringing leads month after month, so organic leads become recurring revenue."
          },
          {
            "text": "Costs keep rising: click prices rise as competition grows, while the cost of each organic lead tends to fall over time as content compounds."
          },
          {
            "text": "Brand is built through repeated visibility: appearing across Google results, AI answers, reviews and publications builds familiarity and trust, which shows up as branded searches and higher conversion on every channel, paid ones included."
          },
          {
            "text": "AI answers cannot be bought: being cited in ChatGPT, Claude or AI Overviews is earned through content, authority and mentions."
          }
        ]
      },
      {
        "type": "p",
        "text": "The strongest approach uses both: PPC for immediate demand and testing, SEO and GEO for compounding, lower-cost leads and a brand buyers already trust when they arrive. For B2B, our [B2B SEO strategy guide](/insights/seo-for-b2b-companies) shows the full buyer journey, and [will AI replace SEO?](/insights/will-ai-replace-seo) covers where search is heading."
      }
    ],
    "faq": [
      {
        "q": "Can SEO single-handedly get you leads?",
        "a": "Yes, when buyers already search for what you offer and you can wait for results to build. Many B2B and local businesses get most of their leads from organic search. If buyers are unaware of the problem you solve, you need other channels to create demand first."
      },
      {
        "q": "Which channels support SEO best?",
        "a": "Digital PR, LinkedIn, YouTube, Reddit, review platforms and email all support SEO. They create mentions and links, send referral traffic and nurture buyers who find you through search."
      },
      {
        "q": "How do you manage an SEO budget efficiently?",
        "a": "Start with BOFU pages closest to revenue, such as service, location and comparison pages, then build supporting content around them. Track leads and revenue, not just rankings, and move budget towards the pages and topics that produce enquiries."
      },
      {
        "q": "Do you need to be an authority to rank?",
        "a": "You need some authority, which comes from links, mentions and helpful content, but you do not need to be the biggest name. Specialist businesses often rank well for specific, niche searches."
      },
      {
        "q": "Does site speed matter for a small website?",
        "a": "Speed matters for user experience and conversions at any size. For a new site with little traffic, content, relevance and links usually matter more for rankings than small speed gains."
      },
      {
        "q": "Does SEO lead generation depend on your niche?",
        "a": "Yes. Competition, search volume and buyer awareness vary by niche. Competitive markets take longer; niche and local markets often show leads sooner."
      },
      {
        "q": "Should you add ads alongside SEO?",
        "a": "Often, yes, especially while SEO builds. Ads bring immediate leads and show which keywords convert, and SEO then targets those keywords for long-term, lower-cost leads."
      },
      {
        "q": "Can ChatGPT generate leads for a business?",
        "a": "ChatGPT can send leads when it recommends your business and links to your site. AI-referred visitors often convert at higher rates than average. See our guide on [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt)."
      },
      {
        "q": "What is the 80/20 rule in SEO?",
        "a": "It suggests that around 20% of your pages or keywords produce around 80% of your results. Find those pages, usually service, comparison and location pages, and prioritise improving them."
      },
      {
        "q": "Is lead generation legal in the UK?",
        "a": "Yes. Lead generation is legal, but collecting and using personal data must follow UK GDPR and, for marketing emails, calls and texts, the Privacy and Electronic Communications Regulations (PECR). Be clear about how you use data and get consent where required. Want to know how many leads SEO and GEO could bring your business? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "how-to-rank-in-chatgpt",
    "seoTitle": "How to Rank Your Business in ChatGPT in 2027 (SEO and AEO Guide)",
    "title": "How to Rank Your Business in ChatGPT in 2027: A Step-by-Step Guide",
    "description": "How to rank your business in ChatGPT in 2027: how ChatGPT finds sources, then step-by-step SEO and AEO for B2B, B2C and local businesses, with tracking.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/how-to-rank-in-chatgpt-banner.jpg",
    "intro": "More of your customers now ask ChatGPT questions such as \"who is the best removals company in Leeds?\" or \"which accounting software suits a small business?\" before they search Google. ChatGPT replies with a short answer and a few named businesses. If yours is one of them, you win a customer who already trusts you. This guide explains how ChatGPT builds its answers, how SEO and AEO (answer engine optimisation) get your business named, and the exact steps to rank in ChatGPT in 2027, whether you sell to other businesses, to consumers or to people nearby.",
    "body": [
      {
        "type": "h2",
        "text": "What is ChatGPT, and who owns it?"
      },
      {
        "type": "p",
        "text": "ChatGPT is an AI assistant made by OpenAI, an American AI company. GPT stands for \"Generative Pre-trained Transformer\", the type of AI model that powers it. People use ChatGPT to answer questions, write and edit text, create images, research products and services, analyse files and plan tasks. For your business, the use that matters most is research: people asking ChatGPT what to buy and who to buy it from."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-1.jpg",
        "alt": "ChatGPT home screen with the \"Ask ChatGPT\" message box",
        "caption": "ChatGPT, made by OpenAI."
      },
      {
        "type": "h2",
        "text": "Where does ChatGPT get its information from?"
      },
      {
        "type": "p",
        "text": "ChatGPT answers from two sources. Its training data is a large snapshot of public web pages, books and other text collected before the model was released. Its web search reads live pages when a question needs current or specific information, such as prices, reviews or local suppliers, and it shows links to the sources it used. For questions about which business to choose, web search does most of the work."
      },
      {
        "type": "h2",
        "text": "How does ChatGPT build an answer? RAG and query fan-out explained"
      },
      {
        "type": "p",
        "text": "When ChatGPT searches the web, it uses a method called retrieval-augmented generation (RAG). It retrieves pages first, then writes its answer from what those pages say. Understanding these steps shows you exactly where your business can win or lose a place in the answer."
      },
      {
        "type": "h3",
        "text": "Step 1: ChatGPT decides whether to search"
      },
      {
        "type": "p",
        "text": "For general knowledge, such as \"what is a 3PL?\", ChatGPT may answer from training data alone. For anything current, local, priced or comparative, such as \"best 3PL for a small ecommerce brand in the UK\", it runs a web search. Most buying questions trigger a search."
      },
      {
        "type": "h3",
        "text": "Step 2: Query fan-out turns one question into several searches"
      },
      {
        "type": "p",
        "text": "ChatGPT rarely searches the exact words your customer typed. It rewrites the question into several shorter searches, a process called query fan-out. A question like \"best 3PL for a small ecommerce brand in the UK\" might become searches such as \"3PL for small ecommerce UK\", \"3PL pricing per pallet UK\", \"3PL reviews UK\" and \"best fulfilment companies UK 2027\"."
      },
      {
        "type": "p",
        "text": "This matters because your business can be found through any of those smaller searches. A page that ranks for \"3PL pricing per pallet UK\" can earn you a place in the answer even if you never rank for the original question."
      },
      {
        "type": "h3",
        "text": "Step 3: Retrieval pulls in pages from search providers"
      },
      {
        "type": "p",
        "text": "ChatGPT sends those searches to third-party search providers, of which Microsoft's Bing is the best known, and its own crawler, OAI-SearchBot, fetches pages. It collects the top results from each search, so the same business appearing across several of them gets a stronger signal."
      },
      {
        "type": "h3",
        "text": "Step 4: ChatGPT reads, compares and writes the answer"
      },
      {
        "type": "p",
        "text": "ChatGPT breaks the pages into passages and picks the ones that answer the question most clearly. It then writes a summary, names the businesses that appear most often and most credibly, and links to its sources. A business mentioned by your own website, a trade publication and a review site at once looks far more trustworthy than one mentioned only by itself."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-2.jpg",
        "alt": "ChatGPT answer recommending three ecommerce fulfilment warehouses in Greater Manchester, with source links for each",
        "caption": "ChatGPT shortlists three fulfilment providers and links to the sources behind each pick."
      },
      {
        "type": "h2",
        "text": "How is ChatGPT different from Claude, Gemini, Grok and Copilot?"
      },
      {
        "type": "p",
        "text": "Each AI assistant reads the web through a different search source, so your business can appear in one and not another. ChatGPT draws on third-party search providers including Bing. Gemini and Google's AI Overviews draw on Google Search. Microsoft Copilot draws on Bing. Claude, made by Anthropic, runs web searches through its own search provider and cites pages inline. Grok, made by xAI, draws heavily on posts from X as well as the web."
      },
      {
        "type": "p",
        "text": "ChatGPT is also where most AI referral traffic comes from today. Webflow's VP of Growth reported that 91% of the company's AI referrals came from ChatGPT, with Perplexity at 4% and all other AI tools sharing the rest."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-3.jpg",
        "alt": "Bar chart: ChatGPT 91% of Webflow AI referrals, Perplexity 4%, all other AI tools 5%",
        "caption": "Where Webflow's AI referrals come from. Source: Webflow, as reported by its VP of Growth."
      },
      {
        "type": "p",
        "text": "People often ask whether Grok or Copilot is better than ChatGPT. Each suits different tasks, and the answer depends on what you use it for. For your business, the more useful question is which assistants your customers use, so you can appear in each. Our guides on [how to rank in Claude](/insights/how-to-rank-in-claude) and [how to rank in AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) cover the others."
      },
      {
        "type": "h2",
        "text": "Does SEO help you rank in ChatGPT?"
      },
      {
        "type": "p",
        "text": "Yes. ChatGPT finds most of its sources through search engines, so a website that ranks well is far more likely to be read, quoted and recommended. Because of query fan-out, ranking for many related questions matters as much as ranking for your main keyword."
      },
      {
        "type": "quote",
        "text": "Competitors with more mentions on forums and blogs get recommended more.",
        "author": "One marketer",
        "where": "Reddit",
        "href": "https://www.reddit.com/comments/1rwzbji"
      },
      {
        "type": "p",
        "text": "That marketer also argues that SEO alone doesn't move the needle, and there is truth in it. Rankings get your pages read; mentions on other sites decide whether ChatGPT trusts you enough to name you. A properly SEO-optimised website is where it starts, with a few additions for AI. That website needs:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "pages indexed in both Bing and Google"
          },
          {
            "text": "a clear page for each service and location you cover"
          },
          {
            "text": "fast, crawlable pages with the main content in plain HTML"
          },
          {
            "text": "content that answers the many smaller questions behind each buying decision"
          }
        ]
      },
      {
        "type": "p",
        "text": "AEO builds on that foundation. It shapes your content and reputation so ChatGPT chooses your business when it writes its answer. Our guide to [answer engine optimisation](/insights/answer-engine-optimisation) explains how the two fit together."
      },
      {
        "type": "h2",
        "text": "How to rank your business in ChatGPT, step by step"
      },
      {
        "type": "h3",
        "text": "1. Check what ChatGPT says about you today"
      },
      {
        "type": "p",
        "text": "Start by finding out where you stand. Ask ChatGPT the questions your customers ask, and note which businesses it names, which sources it links to and what it says about you."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Write 10 to 20 prompts your customers would use, such as \"best [service] in [city]\" or \"[service] for small businesses in the UK\"."
          },
          {
            "text": "Run each prompt in ChatGPT with search on, using a fresh session."
          },
          {
            "text": "Ask \"what do you know about [your business name]?\" and check the facts are correct."
          },
          {
            "text": "Open the sources panel and list every site ChatGPT cites. These are the sites you want to rank on or be mentioned by."
          },
          {
            "text": "Repeat monthly with the same prompts."
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. Get indexed in Bing and submit to Bing Webmaster Tools"
      },
      {
        "type": "p",
        "text": "Since Bing is one of the main search sources behind ChatGPT, a site missing from Bing can be missing from ChatGPT too. Many businesses only ever check Google, so this step is often the quickest win."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Create a free Bing Webmaster Tools account and verify your site (you can import it from Google Search Console)."
          },
          {
            "text": "Submit your XML sitemap."
          },
          {
            "text": "Use URL Inspection to check your key pages are indexed."
          },
          {
            "text": "Set up IndexNow so Bing hears about new and updated pages straight away."
          },
          {
            "text": "Check robots.txt allows OAI-SearchBot and Bingbot."
          }
        ]
      },
      {
        "type": "h3",
        "text": "3. Write answer-first pages for every question behind the buying decision"
      },
      {
        "type": "p",
        "text": "ChatGPT lifts short, clear passages, so each page should answer its question in the first two or three sentences. Query fan-out means you also need pages for the smaller questions buyers ask on the way to a decision: cost, comparisons, timelines and suitability."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Create one page per service, and one per location if you serve several areas."
          },
          {
            "text": "List the fan-out questions for each service: price, process, timeline, alternatives, reviews and who it suits."
          },
          {
            "text": "Write headings as those questions, such as \"How much does office removal cost in London?\"."
          },
          {
            "text": "Answer each one in 40 to 60 words under the heading, then add detail."
          },
          {
            "text": "Add an FAQ section and FAQ schema to your main service pages."
          }
        ]
      },
      {
        "type": "h3",
        "text": "4. Build authority with digital PR"
      },
      {
        "type": "p",
        "text": "ChatGPT trusts businesses that other credible sources talk about. Digital PR earns that coverage: stories, data and expert comments that journalists and trade publications want to use. Each article that names you becomes another source ChatGPT can retrieve, and coverage on respected sites signals that your business is worth recommending."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Publish original data from your own work, such as average costs, timelines or customer survey results, and pitch it to journalists."
          },
          {
            "text": "Offer expert comment through journalist request services and on topical industry news."
          },
          {
            "text": "Write guest articles for trade publications your buyers read."
          },
          {
            "text": "Appear on industry podcasts, webinars and event speaker lists."
          },
          {
            "text": "Enter industry awards and apply for \"best of\" and \"top companies\" lists in your category."
          },
          {
            "text": "Track every new mention, and check whether ChatGPT starts citing those articles."
          }
        ]
      },
      {
        "type": "h3",
        "text": "5. Build mentions on directories and review sites"
      },
      {
        "type": "p",
        "text": "Directories and review sites confirm the basics: that you exist, what you do and whether customers rate you. ChatGPT often cites them directly in its answers."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "List your business on the main directories for your industry and country."
          },
          {
            "text": "Collect reviews on Google, Trustpilot or the review sites your customers use, and reply to them."
          },
          {
            "text": "Answer questions in Reddit, LinkedIn and industry forums where people ask for recommendations, as yourself and without hard selling."
          }
        ]
      },
      {
        "type": "h3",
        "text": "6. Keep your business details consistent everywhere"
      },
      {
        "type": "p",
        "text": "If your name, address, services or phone number differ between sites, ChatGPT may be unsure which details are correct, or mix you up with another business."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use the exact same business name and description on every listing."
          },
          {
            "text": "Keep your address and phone number identical across your website, Google Business Profile, Bing Places and directories."
          },
          {
            "text": "Add Organization schema to your website with links to your official profiles."
          },
          {
            "text": "Update every listing when anything changes."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2B business in ChatGPT"
      },
      {
        "type": "p",
        "text": "B2B buying is slower, higher in value and made by a group. A buying team may include an operations manager, a finance lead and a director, and each asks ChatGPT different questions over weeks or months. To rank a B2B business in ChatGPT, your content and reputation need to answer every one of those people."
      },
      {
        "type": "h3",
        "text": "What do B2B buyers ask ChatGPT?"
      },
      {
        "type": "p",
        "text": "Take a UK online retailer looking for a new fulfilment partner. Over a few weeks, the buying team might ask:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Operations: \"Which 3PLs in the Midlands can handle same-day dispatch for 2,000 orders a day?\""
          },
          {
            "text": "Finance: \"How much does 3PL fulfilment cost per order in the UK?\""
          },
          {
            "text": "Director: \"What are the risks of switching 3PL during peak season?\""
          },
          {
            "text": "All of them: \"Compare [Company A] and [Company B] for ecommerce fulfilment.\""
          }
        ]
      },
      {
        "type": "p",
        "text": "ChatGPT fans each question out into several searches. The 3PL that appears across the answers, on its own site, in trade press and in reviews, becomes the favourite before anyone books a call."
      },
      {
        "type": "quote",
        "text": "The intent from those leads felt noticeably higher.",
        "author": "One marketer",
        "where": "Reddit",
        "href": "https://www.reddit.com/comments/1sgpd62"
      },
      {
        "type": "h3",
        "text": "What content does a B2B business need to rank in ChatGPT?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Service and industry pages: one page per service, and one per industry you serve, such as \"3PL for health and beauty brands\". Specific pages match specific questions."
          },
          {
            "text": "Pricing guidance: price ranges and what drives cost. B2B firms often avoid this, which leaves ChatGPT to quote someone else."
          },
          {
            "text": "Comparison pages: fair comparisons of approaches or options, such as \"in-house warehousing vs 3PL\"."
          },
          {
            "text": "Case studies: the problem, what you did and the measured result, described by industry and market."
          },
          {
            "text": "Proof of capability: certifications, accreditations, locations, capacity and systems you integrate with, written as plain facts ChatGPT can repeat."
          },
          {
            "text": "Risk and process content: onboarding steps, timelines and how you handle problems, which answer the director's questions."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Where should a B2B business be mentioned?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Trade publications and industry news sites your buyers read."
          },
          {
            "text": "Industry association member directories."
          },
          {
            "text": "B2B review platforms such as Clutch or G2, where relevant to your sector."
          },
          {
            "text": "LinkedIn, through company and founder posts that share real expertise."
          },
          {
            "text": "Partner and supplier pages, such as software you integrate with."
          }
        ]
      },
      {
        "type": "h3",
        "text": "B2B steps to rank in ChatGPT"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Map the questions each member of the buying team asks, from first research to final decision."
          },
          {
            "text": "Build or improve a page for each of those questions."
          },
          {
            "text": "Publish at least one case study per core service and industry."
          },
          {
            "text": "Add pricing guidance, even as ranges."
          },
          {
            "text": "Earn coverage in two or three trade publications through data or expert comment."
          },
          {
            "text": "Test the buying team's prompts in ChatGPT monthly and track who is named."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2C business in ChatGPT"
      },
      {
        "type": "p",
        "text": "Consumers ask quicker questions and often decide in a single session. ChatGPT builds these answers mostly from reviews, product details, buying guides and \"best of\" lists, and it can show products with images, prices and links in its shopping results."
      },
      {
        "type": "h3",
        "text": "What do B2C customers ask ChatGPT?"
      },
      {
        "type": "p",
        "text": "Take someone buying a new mattress. They might ask \"best mattress for back pain under £600\", then \"is [Brand A] or [Brand B] better for side sleepers?\", then \"does [Brand A] offer a free trial?\". ChatGPT fans these out into searches for reviews, prices, return policies and buying guides, then names the brands that appear across them."
      },
      {
        "type": "h3",
        "text": "What does a B2C business need to rank in ChatGPT?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Complete product and service pages: price, specifications, sizes, who it suits and what makes it different, written as clear facts."
          },
          {
            "text": "Accurate product data: Product schema with price, availability and reviews, and consistent prices across your site and retailers."
          },
          {
            "text": "Policy information: delivery, returns, warranties and trials on clear pages, since shoppers often ask about these."
          },
          {
            "text": "Reviews: a steady flow of recent reviews on Google, Trustpilot and retailer sites."
          },
          {
            "text": "Buying guide coverage: inclusion in \"best of\" articles from publishers, consumer review sites and niche bloggers."
          },
          {
            "text": "Community presence: genuine discussion on Reddit and forums, where ChatGPT often looks for honest opinions."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How do you check if your website appears in ChatGPT product recommendations?"
      },
      {
        "type": "p",
        "text": "Ask ChatGPT for products in your category, such as \"best waterproof walking boots under £150\", with search on. Look for your products in the results and check which sites are cited. Repeat with different budgets, uses and locations, and note where competitors appear and you do not. The cited buying guides become your PR target list."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-4.jpg",
        "alt": "ChatGPT product recommendations for waterproof walking boots, with prices, retailer and verdict for each",
        "caption": "ChatGPT product recommendations show price, retailer and a short verdict for each product."
      },
      {
        "type": "h3",
        "text": "B2C steps to rank in ChatGPT"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Fill every product page with price, specifications, use cases and FAQs."
          },
          {
            "text": "Add Product and Review schema, and keep prices consistent everywhere."
          },
          {
            "text": "Ask every customer for a review after purchase."
          },
          {
            "text": "Pitch your products to the buying guides ChatGPT already cites."
          },
          {
            "text": "Send samples to reviewers and creators in your category."
          },
          {
            "text": "Test your top product prompts monthly."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a local business in ChatGPT for \"near me\" searches"
      },
      {
        "type": "p",
        "text": "When someone asks ChatGPT for a business \"near me\", it uses their approximate location and relies heavily on map listings, local directories and reviews. Reviews make a striking difference: research by Insites found that local businesses recommended by ChatGPT and Perplexity averaged 133 Google reviews, compared with 11 for businesses the AI tools ignored. For a worked example, see our guide to [Google My Business for self storage](/insights/google-my-business-self-storage)."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-5.jpg",
        "alt": "Bar chart: local businesses recommended by AI averaged 133 Google reviews, against 11 for businesses ignored by AI",
        "caption": "Average Google reviews of local businesses recommended or ignored by AI. Source: Insites."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Claim and complete your Bing Places for Business listing, as well as your Google Business Profile."
          },
          {
            "text": "Choose accurate categories and list every area you serve."
          },
          {
            "text": "Build a page on your website for each town or area you cover."
          },
          {
            "text": "Collect reviews that mention your service and location, and reply to every one."
          },
          {
            "text": "Get listed in local directories and covered by local news sites."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to see if ChatGPT sends traffic to your website"
      },
      {
        "type": "p",
        "text": "ChatGPT adds a tracking tag (utm_source=chatgpt.com) to many of the links it shows, so its visits appear in your analytics. Those visits are worth tracking closely, because they convert well. [Orbit Media](https://www.orbitmedia.com/blog/conversion-rates-ai-search/) analysed 97 B2B websites and found ChatGPT visitors converted to leads at 2.1%, compared with 0.5% for Google search."
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-6.jpg",
        "alt": "Bar chart: 2.1% of ChatGPT visitors became leads, against 0.5% of Google search visitors, across 97 B2B websites",
        "caption": "Lead conversion across 97 B2B websites. Source: Orbit Media."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "In Google Analytics 4, open Reports, then Acquisition, then Traffic acquisition."
          },
          {
            "text": "Set the dimension to \"Session source / medium\" and search for \"chatgpt\"."
          },
          {
            "text": "Check which landing pages those visits arrive on, and whether they turn into enquiries."
          },
          {
            "text": "Add \"ChatGPT or another AI tool\" as an option on your \"how did you hear about us?\" form."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/chatgpt-7.jpg",
        "alt": "GA4 Traffic acquisition report filtered to chatgpt.com, showing sessions, engagement and key events",
        "caption": "GA4 Traffic acquisition with session source / medium filtered to chatgpt."
      },
      {
        "type": "quote",
        "text": "In my data chatgpt traffic converted 1.5 to 2x higher than organic.",
        "author": "One marketer",
        "where": "Reddit",
        "href": "https://www.reddit.com/comments/1r6xi3s"
      },
      {
        "type": "p",
        "text": "The same marketer notes that volume is still small, so the total revenue lift depends on your deal size. That is why tracking enquiries matters as much as tracking visits. Our guide on how to track AI traffic for free covers every setting in GA4 and Search Console."
      }
    ],
    "faq": [
      {
        "q": "Is ChatGPT safe to use for my business?",
        "a": "ChatGPT is safe for everyday tasks such as drafting, research and brainstorming. Treat it like any online service: avoid entering passwords, customer data or anything you would not share outside the business, unless you use a business plan with data controls in place."
      },
      {
        "q": "Is ChatGPT safe for confidential information?",
        "a": "On free and personal plans, your chats may be used to improve OpenAI's models unless you turn this off in settings. OpenAI's business plans exclude your data from training by default. Check OpenAI's current privacy policy and your own data rules before sharing anything confidential."
      },
      {
        "q": "Does ChatGPT share your data?",
        "a": "OpenAI states that it does not sell your data. Chats can be used to improve its models on personal plans unless you opt out, and you can delete chats or turn off chat history in settings."
      },
      {
        "q": "Is ChatGPT GDPR compliant?",
        "a": "OpenAI offers a data processing agreement for business customers and publishes privacy terms for users in the UK and EU. Whether your use is GDPR compliant depends on what data you enter and how, so check with your data protection lead before using ChatGPT with personal data."
      },
      {
        "q": "How much is ChatGPT in the UK?",
        "a": "ChatGPT has a free plan and several paid plans for individuals and teams, priced monthly."
      },
      {
        "q": "Which ChatGPT model is best?",
        "a": "The default model suits most everyday questions. Reasoning models handle complex analysis, maths and planning better but take longer to answer. For ranking your business, the model matters less than whether ChatGPT search can find you."
      },
      {
        "q": "Can ChatGPT generate images?",
        "a": "Yes. ChatGPT can create and edit images from a written description, such as a product mock-up, a social media graphic or an illustration for a blog post. An image usually takes from a few seconds to a minute or two, depending on its detail and how busy the service is. Free users can create a limited number of images, and paid plans such as ChatGPT Plus allow more."
      },
      {
        "q": "Can ChatGPT create videos?",
        "a": "OpenAI's video model, Sora, creates short videos from text and images, and it is available to some ChatGPT users depending on their plan and country. The standard ChatGPT chat focuses on text and images."
      },
      {
        "q": "Can ChatGPT analyse videos?",
        "a": "ChatGPT can analyse images, screenshots, PDFs and documents you upload. Support for analysing full video files is limited, so a reliable approach is to upload a transcript or screenshots of key moments and ask ChatGPT to analyse those."
      },
      {
        "q": "Do I need to pay for ChatGPT to appear in its answers?",
        "a": "No. Your business appears in ChatGPT's standard answers because of your website, rankings, reviews and mentions across the web."
      },
      {
        "q": "How long does it take to rank in ChatGPT?",
        "a": "Once Bing indexes a new or improved page, ChatGPT search can start citing it within a few weeks. Being recommended consistently usually takes three to six months, as reviews, PR coverage and rankings build up. Want to know what ChatGPT says about your business today? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "how-to-rank-in-claude",
    "seoTitle": "How to Rank Your Business in Claude AI in 2027 (SEO and AEO Guide)",
    "title": "How to Rank Your Business in Claude in 2027: A Step-by-Step Guide",
    "description": "How to rank your business in Claude in 2027: how Claude searches and cites sources, then step-by-step SEO and AEO for B2B, B2C and local businesses.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/how-to-rank-in-claude-banner.jpg",
    "intro": "Claude is fast becoming the AI assistant professionals use for serious research: comparing suppliers, checking a market, or building a shortlist before a big purchase. When someone asks Claude \"which commercial cleaning companies in Birmingham work with offices over 10,000 sq ft?\", it searches the web, reads the best sources and names a few businesses. This guide explains how Claude finds and chooses those businesses, how SEO and AEO (answer engine optimisation) get yours named, and the exact steps to rank in Claude in 2027 for B2B, B2C and local businesses.",
    "body": [
      {
        "type": "h2",
        "text": "What is Claude, and who makes it?"
      },
      {
        "type": "p",
        "text": "Claude is an AI assistant made by Anthropic, an AI safety and research company based in San Francisco. People use Claude to research, write, analyse documents and data, code and plan work. It is especially popular for work tasks, which means many of the people asking Claude for recommendations are professionals making decisions for a business."
      },
      {
        "type": "h2",
        "text": "Where does Claude get its information from?"
      },
      {
        "type": "p",
        "text": "Claude answers from two sources. Its training data is a large snapshot of public web pages and other text collected before each model was released. Its web search reads live pages when a question needs current or specific information, and Claude cites the sources it used inline, next to the sentence they support. For questions about suppliers, prices and reviews, web search does most of the work."
      },
      {
        "type": "h2",
        "text": "How does Claude build an answer? RAG and query fan-out explained"
      },
      {
        "type": "p",
        "text": "When Claude searches the web, it uses retrieval-augmented generation (RAG). It retrieves pages first, then writes its answer from what those pages say. Here is how that works, step by step."
      },
      {
        "type": "h3",
        "text": "Step 1: Claude decides whether it needs to search"
      },
      {
        "type": "p",
        "text": "For general knowledge, Claude can answer from training data. For anything current, local, priced or comparative, it searches. Claude can also run several rounds of searching on one question, reading results and then searching again to fill gaps, which makes it thorough on complex buying questions."
      },
      {
        "type": "h3",
        "text": "Step 2: Query fan-out turns one question into several searches"
      },
      {
        "type": "p",
        "text": "Claude rewrites your customer's question into a set of focused searches. \"Which commercial cleaning companies in Birmingham work with large offices?\" might become \"commercial office cleaning Birmingham\", \"office cleaning contract prices Birmingham\" and \"commercial cleaning company reviews Birmingham\". Each search is a separate chance for your business to be found."
      },
      {
        "type": "h3",
        "text": "Step 3: Retrieval pulls in pages from a search index"
      },
      {
        "type": "p",
        "text": "Claude sends those searches to its web search provider and fetches the top pages with its own crawlers. Anthropic runs separate crawlers for training (ClaudeBot), for search (Claude-SearchBot) and for pages users ask Claude to open (Claude-User). If your site blocks the search crawler, Claude may be unable to read or cite your pages."
      },
      {
        "type": "h3",
        "text": "Step 4: Claude reads, cross-checks and writes the answer"
      },
      {
        "type": "p",
        "text": "Claude reads the retrieved pages, compares what they say and writes an answer with inline citations. It tends to favour sources that are specific, well-structured and consistent with other sources. A business described the same way on its own site, in a trade publication and on a review site is far easier for Claude to recommend with confidence."
      },
      {
        "type": "image",
        "src": "/insights/claude-1.jpg",
        "alt": "Claude web search answer naming three commercial office cleaning companies in Birmingham, with inline citations and a sources list",
        "caption": "Claude cites its sources inline, sentence by sentence, and lists them under the answer."
      },
      {
        "type": "h2",
        "text": "How is Claude different from ChatGPT, Gemini and Perplexity?"
      },
      {
        "type": "p",
        "text": "Each assistant uses a different search source, so your business can appear in one and be missing from another. ChatGPT draws on third-party providers including Bing. Gemini and Google's AI Overviews draw on Google Search. Perplexity runs its own search for almost every question. Claude uses its own web search provider and its own crawlers."
      },
      {
        "type": "p",
        "text": "Two differences matter most for your business. Claude cites sources inline, sentence by sentence, so the pages it quotes are easy for the reader to click. And Claude's audience leans towards professionals and knowledge workers, which makes it especially valuable for B2B businesses. Our guide on [how to rank in ChatGPT](/insights/how-to-rank-in-chatgpt) covers that platform in detail."
      },
      {
        "type": "h2",
        "text": "Does SEO help you rank in Claude?"
      },
      {
        "type": "p",
        "text": "Yes. Claude finds its sources through a search index, so a website that ranks well, loads cleanly and answers questions clearly is far more likely to be retrieved and cited. Because of query fan-out, ranking for many of the smaller questions around your service matters as much as ranking for your main keyword."
      },
      {
        "type": "quote",
        "text": "Getting mentioned on ChatGPT, Gemini etc is basically just SEO.",
        "author": "One entrepreneur",
        "where": "r/Entrepreneur",
        "href": "https://www.reddit.com/r/Entrepreneur/comments/1sm02ku/experts_here_is_there_a_way_to_rank_on_chatgpt/"
      },
      {
        "type": "p",
        "text": "That matches what we see across client work. A properly SEO-optimised website needs:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "pages indexed in the major search engines"
          },
          {
            "text": "a clear page for each service and location you cover"
          },
          {
            "text": "fast pages with the main content in plain HTML, since AI crawlers often do not run JavaScript"
          },
          {
            "text": "content that answers the questions behind each buying decision"
          }
        ]
      },
      {
        "type": "p",
        "text": "AEO builds on that foundation so Claude chooses your business when it writes its answer. Our guide to [answer engine optimisation](/insights/answer-engine-optimisation) explains how the two fit together."
      },
      {
        "type": "h2",
        "text": "How to rank your business in Claude, step by step"
      },
      {
        "type": "h3",
        "text": "1. Check what Claude says about you today"
      },
      {
        "type": "p",
        "text": "Start by finding out where you stand. Ask Claude the questions your customers ask, with web search on, and note which businesses it names and which sources it cites."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Write 10 to 20 prompts your customers would use, such as \"best [service] in [city]\" or \"[service] for mid-sized businesses in the UK\"."
          },
          {
            "text": "Run each prompt in Claude with web search turned on."
          },
          {
            "text": "Ask \"what do you know about [your business name]?\" and check every fact."
          },
          {
            "text": "List every source Claude cites. These are the sites you want to rank on or be mentioned by."
          },
          {
            "text": "Repeat monthly with the same prompts."
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. Let Claude's crawlers reach your site"
      },
      {
        "type": "p",
        "text": "Some websites block AI crawlers by default, often through a security setting or a robots.txt rule added years ago. If Claude-SearchBot cannot reach your pages, Claude cannot cite them."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Open yoursite.com/robots.txt and check it does not block Claude-SearchBot, Claude-User or ClaudeBot."
          },
          {
            "text": "Check your firewall or CDN (for example Cloudflare) is not blocking AI crawlers."
          },
          {
            "text": "Make sure your main content appears in the page HTML, not only after JavaScript runs."
          },
          {
            "text": "Submit your sitemap to Google Search Console and Bing Webmaster Tools so your pages are indexed widely."
          }
        ]
      },
      {
        "type": "h3",
        "text": "3. Write clear, well-structured, answer-first pages"
      },
      {
        "type": "p",
        "text": "Claude quotes passages that answer a question directly and back it up with specifics. Pages with clear headings, short answers and supporting facts are much easier for Claude to cite sentence by sentence."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Create one page per service, and one per location or industry you serve."
          },
          {
            "text": "Write headings as the questions customers ask."
          },
          {
            "text": "Answer each question in 40 to 60 words under the heading, then add detail."
          },
          {
            "text": "Back claims with numbers, sources, standards and dates."
          },
          {
            "text": "Show who wrote or reviewed the page, and when it was last updated."
          }
        ]
      },
      {
        "type": "h3",
        "text": "4. Build authority with digital PR"
      },
      {
        "type": "p",
        "text": "Claude cross-checks sources before it recommends a business, so being covered by credible third parties carries real weight. Digital PR earns that coverage, and each article that names you becomes another page Claude can retrieve and cite."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Publish original data from your work, such as costs, timelines or survey results, and pitch it to journalists."
          },
          {
            "text": "Offer expert comment on industry news through journalist request services."
          },
          {
            "text": "Write guest articles and opinion pieces for trade publications."
          },
          {
            "text": "Speak at events, webinars and podcasts, and make sure the event pages name your business."
          },
          {
            "text": "Apply for industry awards and \"top companies\" lists."
          }
        ]
      },
      {
        "type": "h3",
        "text": "5. Build mentions on directories, review sites and communities"
      },
      {
        "type": "p",
        "text": "Directories and review sites confirm the basics: that you exist, what you do and what customers think. Claude often cites them when it compares options."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "List your business on the main directories for your industry and country."
          },
          {
            "text": "Collect reviews on Google, Trustpilot or the platforms your customers use."
          },
          {
            "text": "Take part in Reddit, LinkedIn and industry forums where people ask for recommendations."
          }
        ]
      },
      {
        "type": "h3",
        "text": "6. Keep your business details consistent everywhere"
      },
      {
        "type": "p",
        "text": "Claude compares sources, so conflicting details about your business can make it less confident about recommending you."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use the same business name, description and services on every listing."
          },
          {
            "text": "Keep your address and phone number identical everywhere."
          },
          {
            "text": "Add Organization schema to your website with links to your official profiles."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2B business in Claude"
      },
      {
        "type": "p",
        "text": "Claude is particularly strong for B2B research because its users often use it for work, and they ask long, detailed questions. A buying team may use Claude to research a market, compare suppliers and draft a business case, all before contacting anyone."
      },
      {
        "type": "h3",
        "text": "What do B2B buyers ask Claude?"
      },
      {
        "type": "p",
        "text": "Take a property developer looking for a construction logistics partner for a London site. The team might ask Claude:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "\"Which construction logistics companies in London manage deliveries for city-centre sites with strict access windows?\""
          },
          {
            "text": "\"What does a construction logistics plan cost for a 200-unit residential project?\""
          },
          {
            "text": "\"Summarise the pros and cons of [Company A] and [Company B] for construction logistics.\""
          },
          {
            "text": "\"Draft a supplier comparison table for our board.\""
          }
        ]
      },
      {
        "type": "p",
        "text": "The last request is important. Claude often turns research into documents, such as comparison tables, briefs and business cases. If your business is in Claude's research, it can end up in the document that goes to the decision-maker."
      },
      {
        "type": "h3",
        "text": "What content does a B2B business need to rank in Claude?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Specialist service and industry pages: one page per service and per sector, written with the detail a professional expects."
          },
          {
            "text": "Clear facts Claude can compare: capacity, locations, certifications, standards, response times and contract types, stated plainly."
          },
          {
            "text": "Pricing guidance: ranges and what drives cost, so Claude can include you in budget questions."
          },
          {
            "text": "Case studies: the problem, the approach and the measured result, described by industry and market."
          },
          {
            "text": "Expert content: guides, data and opinion from named people in your business, which builds the credibility Claude looks for."
          },
          {
            "text": "Readable detail: spec sheets and capability statements as web pages as well as PDFs."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Where should a B2B business be mentioned?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Trade publications and industry news sites."
          },
          {
            "text": "Industry association member directories and supplier frameworks."
          },
          {
            "text": "B2B review platforms relevant to your sector."
          },
          {
            "text": "LinkedIn, through company pages and founder or expert posts."
          },
          {
            "text": "Partner, client and event pages that name you."
          }
        ]
      },
      {
        "type": "h3",
        "text": "B2B steps to rank in Claude"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Map the questions each member of the buying team asks, including requests to compare or summarise."
          },
          {
            "text": "Build a page that answers each question with specific, comparable facts."
          },
          {
            "text": "Publish at least one case study per core service and sector."
          },
          {
            "text": "Earn coverage in two or three trade publications through data or expert comment."
          },
          {
            "text": "Test the buying team's prompts in Claude monthly and track who is named."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2C business in Claude"
      },
      {
        "type": "p",
        "text": "Consumers use Claude for considered purchases, where they want a careful comparison: a new laptop, a holiday, a course, a financial product or a home improvement project. Claude builds these answers from reviews, buying guides, product details and community discussion."
      },
      {
        "type": "h3",
        "text": "What do B2C customers ask Claude?"
      },
      {
        "type": "p",
        "text": "Take someone planning a kitchen renovation. They might ask Claude \"how much does a mid-range kitchen renovation cost in the UK?\", then \"what should I look for in a kitchen fitter?\", then \"compare [Brand A] and [Brand B] kitchens for durability\". Claude fans these out into searches for cost guides, reviews, buying advice and brand pages, then names the businesses that appear across them."
      },
      {
        "type": "h3",
        "text": "What does a B2C business need to rank in Claude?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Detailed product and service pages: prices, specifications, materials, sizes and who each option suits."
          },
          {
            "text": "Honest buying guidance: guides that help people choose, including when your product is not the right fit. Balanced content is easier for Claude to trust and quote."
          },
          {
            "text": "Cost guides: clear price ranges and what changes the cost."
          },
          {
            "text": "Policy pages: delivery, returns, guarantees and aftercare."
          },
          {
            "text": "Reviews: recent reviews on Google, Trustpilot and retailer sites."
          },
          {
            "text": "Buying guide and community coverage: inclusion in \"best of\" articles and genuine discussion on Reddit and forums."
          }
        ]
      },
      {
        "type": "h3",
        "text": "B2C steps to rank in Claude"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Fill every product or service page with prices, specifications and FAQs."
          },
          {
            "text": "Publish one honest buying guide and one cost guide for each main category."
          },
          {
            "text": "Add Product and Review schema."
          },
          {
            "text": "Ask every customer for a review."
          },
          {
            "text": "Pitch the buying guides and publishers Claude already cites in your category."
          },
          {
            "text": "Test your top customer prompts monthly."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a local business in Claude for \"near me\" searches"
      },
      {
        "type": "p",
        "text": "When someone asks Claude for a local business, it relies on web search results, local directories and review sites, reading the web like a researcher rather than showing a map. Clear location pages and consistent listings make the biggest difference."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Build a page for each town or area you serve, with real local detail."
          },
          {
            "text": "Keep your Google Business Profile and Bing Places listing complete and accurate."
          },
          {
            "text": "Get listed in local directories and covered by local news sites."
          },
          {
            "text": "Collect reviews that mention your service and location."
          },
          {
            "text": "Include your full address and service areas in plain text and in LocalBusiness schema."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to see if Claude sends traffic to your website"
      },
      {
        "type": "p",
        "text": "Visits from Claude usually show in analytics with claude.ai as the referral source. "
      },
      {
        "type": "list",
        "items": [
          {
            "text": "In Google Analytics 4, open Reports, then Acquisition, then Traffic acquisition."
          },
          {
            "text": "Set the dimension to \"Session source / medium\" and search for \"claude\"."
          },
          {
            "text": "Check which landing pages those visits reach and whether they turn into enquiries."
          },
          {
            "text": "Add \"Claude or another AI tool\" to your \"how did you hear about us?\" form, since some visits arrive without a referral source."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/claude-2.jpg",
        "alt": "GA4 Traffic acquisition report by session primary channel group, with an AI Assistant row",
        "caption": "GA4 Traffic acquisition by channel group. AI tools such as Claude show in their own row."
      },
      {
        "type": "p",
        "text": "Our guide on [how to track AI traffic on your website](/insights/track-ai-traffic) covers free and paid tools for every AI platform."
      }
    ],
    "faq": [
      {
        "q": "Is Claude free to use?",
        "a": "Yes, there is a free version of Claude. You can sign up at claude.ai or in the Claude app and use it for free with daily usage limits. Paid plans give higher limits, access to more models and extra features."
      },
      {
        "q": "Is Claude Pro worth it?",
        "a": "Claude Pro suits people who use Claude most days for work, such as writing, research or analysis, and keep reaching the free plan's limits. If you use Claude now and then, the free plan is usually enough. Claude Max offers much higher usage limits again, and is worth it mainly for heavy daily users, such as people who rely on Claude for long research or coding sessions. For teams, Anthropic's business plans add shared workspaces and admin controls."
      },
      {
        "q": "Is Claude the best AI?",
        "a": "No single AI assistant is best for everything. Claude is widely rated for writing, careful reasoning, analysing long documents and coding. Other assistants have their own strengths, such as image and video tools or close links to a search engine. The best choice depends on the tasks you use it for, and many businesses use more than one."
      },
      {
        "q": "What is an artifact in Claude?",
        "a": "An artifact is a piece of work Claude creates in its own window beside the chat, such as a document, a piece of code, a chart, a diagram or a small interactive app. You can view, edit, download or share it, which makes artifacts useful for drafting reports, building simple tools or creating visuals for your business."
      },
      {
        "q": "Can Claude generate images?",
        "a": "Claude does not create photographic images in the way dedicated image generators do. It can create visuals through code, such as charts, diagrams, illustrations and designs, and it can read and analyse images you upload."
      },
      {
        "q": "Can Claude analyse video?",
        "a": "Claude can analyse images, screenshots, PDFs, spreadsheets and documents. Support for analysing video files directly has been limited, so check Anthropic's current features. A common workaround is to share a transcript or key frames from the video for Claude to analyse."
      },
      {
        "q": "Is Claude more ethical than ChatGPT?",
        "a": "Both Anthropic and OpenAI publish safety policies and rules for how their assistants should behave. Anthropic guides Claude with a published set of principles, sometimes called its constitution, which sets out the values Claude should follow. Whether one assistant is more ethical than another depends on what you value, so it is worth reading each company's published policies yourself."
      },
      {
        "q": "Is Claude safe for business information?",
        "a": "Anthropic's business and team plans do not use your conversations to train its models by default. On personal plans, you can choose in your settings whether your chats help improve Claude. Check Anthropic's current privacy policy and your own data rules before sharing confidential information."
      },
      {
        "q": "Does Claude search the internet?",
        "a": "Yes. With web search turned on, Claude searches the web for current information and cites its sources inline."
      },
      {
        "q": "Do I need to pay to appear in Claude's answers?",
        "a": "No. Your business appears in Claude's answers because of your website, rankings, reviews and mentions across the web."
      },
      {
        "q": "Should I block AI crawlers like ClaudeBot?",
        "a": "Blocking ClaudeBot stops your content being used for training, while blocking Claude-SearchBot and Claude-User stops Claude reading your pages for search answers. If you want to appear in Claude's answers, allow the search and user crawlers at the very least."
      },
      {
        "q": "How long does it take to rank in Claude?",
        "a": "Once your pages are indexed and crawlable, Claude can start citing them within a few weeks. Being recommended consistently usually takes three to six months, as reviews, PR coverage and rankings build up. Want to know what Claude says about your business today? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "how-to-rank-in-ai-overviews",
    "seoTitle": "How to Rank in Google AI Overviews and AI Mode in 2027 (Data-Backed Guide)",
    "title": "How to Rank Your Business in Google AI Overviews and AI Mode in 2027",
    "description": "How to rank your business in Google AI Overviews and AI Mode in 2027: how Google's AI picks sources, seven steps, and B2B, B2C and local tactics.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/how-to-rank-in-ai-overviews-banner.jpg",
    "intro": "Ranking in Google's AI Overviews and AI Mode works differently from ranking in ChatGPT, Claude or Perplexity. Google's AI answers are built from Google's own search index, shaped by Google's own ranking systems and fed by Google's own properties, such as YouTube and Business Profiles. That makes them the AI answers where traditional SEO matters most, and also the ones that change fastest. This guide explains how AI Overviews and AI Mode choose their sources, what the data says about who gets cited, how the two features differ from each other, and the exact steps to rank your business in both in 2027.",
    "body": [
      {
        "type": "h2",
        "text": "What are Google AI Overviews and AI Mode?"
      },
      {
        "type": "p",
        "text": "AI Overviews are AI-generated summaries that appear at the top of some Google search results, with links to the sources they used. They grew out of Google's Search Generative Experience (SGE) test and are powered by Google's Gemini models. AI Mode is a separate tab in Google Search where people ask longer questions, follow up and get a conversational answer with source links."
      },
      {
        "type": "image",
        "src": "/insights/aio-1.jpg",
        "alt": "Google AI Overview on UK 3PL pallet storage costs, with a cost table and cited sources on the right",
        "caption": "An AI Overview with its cited sources on the right."
      },
      {
        "type": "p",
        "text": "When your page is linked inside the AI answer, you are \"ranking\" in it. On desktop, the first cited source is visible straight away, and the rest appear when someone expands the answer, so the first few citation spots matter most."
      },
      {
        "type": "h2",
        "text": "How is ranking in Google's AI different from ChatGPT and other LLMs?"
      },
      {
        "type": "p",
        "text": "ChatGPT, Claude and Perplexity are standalone assistants that search the web through other providers. Google's AI features live inside Google Search and use everything Google already knows about your website and business. Here are the differences that change how you optimise."
      },
      {
        "type": "h3",
        "text": "1. Google uses its own index and ranking systems"
      },
      {
        "type": "p",
        "text": "ChatGPT draws on third-party search providers including Bing, and Claude uses its own search provider and crawlers. Google's AI features retrieve pages from Google's own index, ranked by its own systems. There is no separate AI crawler to allow: if Googlebot can crawl your page and Google can show a snippet from it, it is eligible. Blocking Google-Extended does not remove you from AI Overviews, as they are part of Search."
      },
      {
        "type": "h3",
        "text": "2. Organic rankings matter more than on any other AI platform"
      },
      {
        "type": "p",
        "text": "Analysis of 1.9 million AI Overview citations by [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) found that 76% of cited pages also ranked in Google's top 10 for the same search, and the median position of the top-cited page was 2."
      },
      {
        "type": "p",
        "text": "The link between authority and AI visibility is also much stronger on Google. In a study of the top 50 websites mentioned across 76.7 million AI Overviews, [Ahrefs](https://ahrefs.com/blog/does-being-mentioned-on-highly-linked-pages-influence-ai-mentions/) found a correlation of about 0.70 between being mentioned on highly linked pages and AI Overview visibility, compared with about 0.4 for Perplexity and about 0.1 for ChatGPT. Links and authority carry far more weight in Google's AI than elsewhere."
      },
      {
        "type": "image",
        "src": "/insights/aio-2.jpg",
        "alt": "Bar chart: correlation between links and mentions and AI visibility, Google AI Overviews 0.70, Perplexity 0.4, ChatGPT 0.1",
        "caption": "How much links and mentions matter on each AI platform. Source: Ahrefs."
      },
      {
        "type": "h3",
        "text": "3. Google's own properties feed its answers"
      },
      {
        "type": "p",
        "text": "Google draws heavily on platforms it owns or controls. YouTube is the most cited domain in AI Overviews, and in a study of 75,000 brands, [Ahrefs](https://ahrefs.com/blog/ai-brand-visibility-correlations/) found YouTube mentions had the strongest correlation with AI Overview visibility (0.740), ahead of branded web mentions. Google Business Profiles shape local answers, Merchant Center feeds shape product answers, and Google reviews shape both. No other AI assistant has this level of access."
      },
      {
        "type": "h3",
        "text": "4. AI Overviews appear for research questions, not every search"
      },
      {
        "type": "p",
        "text": "People ask ChatGPT for recommendations directly. On Google, AI Overviews mostly appear at the research stage. Across 146 million results pages, [Ahrefs](https://ahrefs.com/blog/ai-overview-triggers/) found AI Overviews on 21% of all keywords, but on 57.9% of question searches and 46.4% of searches with seven or more words. Almost every keyword that triggers one is informational. For your business, that means AI Overviews shape how buyers understand a problem before they compare suppliers."
      },
      {
        "type": "h3",
        "text": "5. Answers change constantly and are personalised"
      },
      {
        "type": "p",
        "text": "Google's AI answers are generated fresh each time. [Ahrefs](https://ahrefs.com/blog/ai-overview-change/) found AI Overview content changes 70% of the time and its citations change 46% of the time between generations, although the meaning stays very stable. Results also vary by location and search history. A single check tells you little, so you need to track the same searches over time."
      },
      {
        "type": "h3",
        "text": "6. Google's AI answers sit beside ads and normal results"
      },
      {
        "type": "p",
        "text": "ChatGPT's answer is the whole page. An AI Overview sits above ads, local results and the usual links, so your page competes for attention with every other result. Being the cited source, appearing in the organic results below and showing in the map pack all work together."
      },
      {
        "type": "h2",
        "text": "What is the difference between AI Overviews and AI Mode?"
      },
      {
        "type": "p",
        "text": "AI Overviews and AI Mode come from the same company and often agree, but they behave as separate citation systems. In a study of 730,000 response pairs, [Ahrefs](https://ahrefs.com/blog/ai-overviews-vs-ai-mode/) found the two gave answers with the same meaning 86% of the time, yet cited the same pages only 13.7% of the time."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Length and brands: AI Mode answers are about four times longer and mention 3.3 brands or people on average, against 1.3 in AI Overviews."
          },
          {
            "text": "Brand carry-over: if your brand appears in an AI Overview, there is a 61% chance it also appears in AI Mode, usually alongside more competitors."
          },
          {
            "text": "Sources: AI Overviews favour YouTube, Reddit, videos and core pages such as homepages. AI Mode leans more on Wikipedia (28.9% of citations, against 18.1% in AI Overviews) and cites Quora 3.5 times as often."
          },
          {
            "text": "Citations: 11% of AI Overviews cite no sources at all, against 3% of AI Mode answers, and 59% of AI Overviews mention no brands."
          }
        ]
      },
      {
        "type": "p",
        "text": "For your business, this means two things. Track AI Overviews and AI Mode separately, since winning one does not guarantee the other. And build topic-wide authority, since both systems agree on what to say even when they choose different pages to cite."
      },
      {
        "type": "image",
        "src": "/insights/aio-3.jpg",
        "alt": "Bar chart: AI Overviews and AI Mode give the same meaning 86% of the time but cite the same pages only 13.7% of the time",
        "caption": "AI Overviews and AI Mode agree on meaning but rarely cite the same pages. Source: Ahrefs."
      },
      {
        "type": "h2",
        "text": "How do AI Overviews and AI Mode build an answer? RAG and query fan-out"
      },
      {
        "type": "p",
        "text": "Both features use retrieval-augmented generation (RAG): Google retrieves passages from its index, then Gemini writes an answer grounded in them. Google's own guidance confirms that both AI Overviews and AI Mode may use query fan-out, running several related searches across subtopics to build one answer."
      },
      {
        "type": "p",
        "text": "Take the search \"what will a 3PL cost for a small ecommerce brand in the UK\". Gemini might fan it out into searches such as \"3PL pricing per order UK\", \"3PL pick and pack fees\", \"3PL storage cost per pallet\" and \"3PL minimum order volumes\". Pages that rank for these sub-searches become candidates for the final answer."
      },
      {
        "type": "p",
        "text": "The effect is measurable. Research by [Surfer](https://surferseo.com/blog/query-fan-out-impact/) found pages ranking for fan-out searches were 161% more likely to be cited in the AI Overview than pages ranking only for the main search, with a strong correlation of 0.77 between fan-out rankings and citations."
      },
      {
        "type": "p",
        "text": "Gemini also uses only part of each page. Analysis of more than 7,000 searches by [Dejan](https://dejan.ai/blog/how-big-are-googles-grounding-chunks/) found the text Google grounds its answers on levels off at around 540 words per page, and [Ahrefs](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/) found almost no correlation between word count and AI Overview citations. A focused page that answers the question early beats a long page that wanders."
      },
      {
        "type": "h2",
        "text": "Do AI Overviews reduce clicks to your website?"
      },
      {
        "type": "p",
        "text": "Yes, for many searches. Research by [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) found that Google users clicked a traditional result in 8% of visits when an AI summary appeared, compared with 15% when it did not. [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks/) measured a 34.5% drop in click-through rate for the top result, and [Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update) reported drops as high as 61%."
      },
      {
        "type": "p",
        "text": "That is why being cited matters more than ever: the visibility moves into the answer itself. The impact also depends on intent. A search like \"what is a 3PL\" can be fully answered on Google, so few people click. A search like \"3PL pricing comparison UK\" still sends buyers through to check details, case studies and contact pages."
      },
      {
        "type": "quote",
        "text": "Yes it's dropping organic.",
        "author": "One business owner",
        "where": "r/digital_marketing",
        "href": "https://www.reddit.com/r/digital_marketing/comments/1tvos1i/discussion_is_google_killing_organic_traffic_with/"
      },
      {
        "type": "h2",
        "text": "How to rank your business in AI Overviews, step by step"
      },
      {
        "type": "h3",
        "text": "1. Find the searches in your market that trigger AI Overviews"
      },
      {
        "type": "p",
        "text": "Since AI Overviews appear mostly on question and long-tail searches, start by mapping the questions your buyers ask while they research."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "List 30 to 50 questions your buyers ask, from \"what is\" and \"how does\" to cost, comparison and \"why\" questions."
          },
          {
            "text": "Search each one on Google, logged out and set to your target country, and note whether an AI Overview appears."
          },
          {
            "text": "Expand every AI Overview and record each cited source and its position."
          },
          {
            "text": "Use the AI Overview filter in your SEO tool to find more questions in your topic that trigger one."
          },
          {
            "text": "Prioritise questions that show an AI Overview and relate closely to what you sell."
          }
        ]
      },
      {
        "type": "h3",
        "text": "2. Rank on page one for the main search"
      },
      {
        "type": "p",
        "text": "With three in four citations coming from the top 10, organic ranking is the entry ticket. If your page sits on page two or lower, improve its ranking first."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Check where your page ranks for each target search in Search Console."
          },
          {
            "text": "Improve the page title, headings and opening answer to match the search intent."
          },
          {
            "text": "Add internal links from related pages with clear, descriptive anchor text."
          },
          {
            "text": "Fix indexing, speed and mobile issues in Search Console."
          }
        ]
      },
      {
        "type": "h3",
        "text": "3. Cover the fan-out questions to own the topic"
      },
      {
        "type": "p",
        "text": "Because fan-out rankings make a citation far more likely, build pages that cover the sub-questions Gemini is likely to search."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search your main question in AI Mode and note the follow-up angles it covers."
          },
          {
            "text": "Check People Also Ask and related searches for each target search."
          },
          {
            "text": "Use a free fan-out tool such as Qforia, which uses Gemini to generate likely sub-searches."
          },
          {
            "text": "Answer the closest sub-questions on the main page, and give larger ones their own linked page."
          },
          {
            "text": "Link the whole topic cluster together, with the main service page at the centre."
          }
        ]
      },
      {
        "type": "h3",
        "text": "4. Answer early, clearly and specifically"
      },
      {
        "type": "p",
        "text": "Gemini grounds its answer on a limited slice of each page, so put the answer where it will be read."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Match each heading to the question, and answer it in the first 40 to 60 words beneath it."
          },
          {
            "text": "Give specific facts: prices, ranges, timelines, sizes, standards and locations."
          },
          {
            "text": "Use lists for steps and tables for comparisons."
          },
          {
            "text": "Remove sections that drift away from the page's main intent."
          },
          {
            "text": "Keep the page focused, and let the topic decide its length."
          }
        ]
      },
      {
        "type": "h3",
        "text": "5. Build brand mentions on authoritative pages and \"best\" lists"
      },
      {
        "type": "p",
        "text": "Brand mentions are the strongest correlating factor with AI Overview visibility, and mentions on well-linked pages matter far more on Google than on other AI platforms. \"Best\" lists are especially important: research by [Ahrefs](https://ahrefs.com/blog/best-lists-research/) found nearly half of AI Overview citations in the categories studied came from \"best\" style articles."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Find well-linked industry pages that mention competitors but not you, and pitch expert comment, data or a guest piece."
          },
          {
            "text": "Approach publishers in your niche about \"best\" lists, offering a genuine trial or demo so the review is honest."
          },
          {
            "text": "Publish original data from your work and pitch it through digital PR."
          },
          {
            "text": "Earn listings in industry associations and directories with strong authority."
          }
        ]
      },
      {
        "type": "h3",
        "text": "6. Use YouTube and Google's own platforms"
      },
      {
        "type": "p",
        "text": "YouTube is Google's most cited source in AI Overviews, so video is a direct route into Google's answers."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Create short videos answering your top buyer questions, with clear titles and accurate transcripts."
          },
          {
            "text": "Partner with YouTube creators in your industry whose videos already appear in AI Overviews."
          },
          {
            "text": "Complete and update your Google Business Profile, with services, photos and regular posts."
          },
          {
            "text": "For products, keep your Merchant Center feed accurate and complete."
          },
          {
            "text": "Collect Google reviews that describe the service and location."
          }
        ]
      },
      {
        "type": "h3",
        "text": "7. Keep pages eligible and fresh"
      },
      {
        "type": "p",
        "text": "Eligibility rules are simple but easy to break, and freshness matters for searches where dates count."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Check pages are indexed and do not use nosnippet or a very low max-snippet setting."
          },
          {
            "text": "Add structured data, such as Organization, Service, Product, FAQPage and Article, where it fits. It helps Google understand your page, although studies have not shown a direct effect on citations."
          },
          {
            "text": "Review key pages every three to six months, update figures and dates, and request indexing after major changes."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank your business in Google AI Mode"
      },
      {
        "type": "p",
        "text": "AI Mode uses the same index but fans out more widely, writes longer answers and names more brands. With only 13.7% citation overlap, it needs its own attention."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Build comprehensive topic clusters, since AI Mode explores more sub-questions per answer."
          },
          {
            "text": "Write reference-style pages that define, explain and compare clearly, the encyclopedic format AI Mode leans on."
          },
          {
            "text": "Make sure your business is described accurately on Wikipedia, Wikidata and industry reference sites where you are eligible."
          },
          {
            "text": "Answer the follow-up questions buyers ask after their first one: cost, risks, alternatives and timelines."
          },
          {
            "text": "Test full multi-step conversations in AI Mode, and track your citations separately from AI Overviews."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2B business in AI Overviews and AI Mode"
      },
      {
        "type": "p",
        "text": "B2B searches are full of the long, research-stage questions that trigger AI Overviews, so Google's AI shapes how buyers understand a problem before they shortlist suppliers."
      },
      {
        "type": "h3",
        "text": "What does a B2B buying journey look like on Google?"
      },
      {
        "type": "p",
        "text": "Take a manufacturer looking for an export freight partner. Their searches might move from \"how does freight forwarding work for exports\" to \"freight forwarder costs UK to Germany\", then \"best freight forwarders for manufacturers UK\", then \"[Company A] vs [Company B] freight\". The early searches trigger AI Overviews, and the later ones often bring up AI Mode, map results and \"best\" lists."
      },
      {
        "type": "h3",
        "text": "B2B steps to rank in Google's AI"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Map searches across the buying journey, from education to supplier comparison."
          },
          {
            "text": "Build an answer-first guide for each early-stage question, linked to the matching service page."
          },
          {
            "text": "Publish cost guides and fair comparisons, since these are common fan-out searches."
          },
          {
            "text": "Earn mentions in trade publications, industry \"best\" lists and association directories."
          },
          {
            "text": "Create short explainer videos on YouTube for your most common buyer questions."
          },
          {
            "text": "Track AI Overview and AI Mode citations separately each month."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a B2C business in AI Overviews and AI Mode"
      },
      {
        "type": "p",
        "text": "For consumers, Google's AI often answers buying questions directly, such as \"best air fryer for a family of four\" or \"how much does a boiler service cost\", drawing on product data, reviews, videos and forums."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Complete every product page with prices, specifications and FAQs, plus Product and Review schema."
          },
          {
            "text": "Keep your Merchant Center feed accurate, as Google's shopping features draw on it. This applies to Shopify stores too, through the Google and YouTube app."
          },
          {
            "text": "Publish honest buying guides and cost guides for each main category."
          },
          {
            "text": "Collect Google reviews after every purchase."
          },
          {
            "text": "Create review, comparison and how-to videos, or work with creators who already appear in AI Overviews."
          },
          {
            "text": "Take part in Reddit discussions in your category, since AI Overviews cite community sources often."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to rank a local business in AI Overviews and AI Mode"
      },
      {
        "type": "p",
        "text": "For local searches, Google blends AI answers with map results and Business Profiles, so your profile matters as much as your website. For a worked example, see our guide to [Google My Business for self storage](/insights/google-my-business-self-storage)."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Complete every section of your Google Business Profile: categories, services, hours, photos and description."
          },
          {
            "text": "Collect reviews that mention your services and location, and reply to them."
          },
          {
            "text": "Build a page for each town or area you serve, with real local detail."
          },
          {
            "text": "Keep your name, address and phone number identical everywhere."
          },
          {
            "text": "Get covered by local news sites and listed in local directories."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How to track AI Overviews and AI Mode"
      },
      {
        "type": "p",
        "text": "Google blends AI Overview and AI Mode data into normal search data, so there is no separate report for them. Clicks show up as Google organic traffic or with no referrer at all. Here is how to track them anyway."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Citations: use an AI visibility tool that tracks AI Overview and AI Mode citations separately, or check your target searches by hand each month."
          },
          {
            "text": "Click impact: in Search Console, filter question-style searches and look for pages where impressions and rankings hold steady but click-through rate falls."
          },
          {
            "text": "AI Overview clicks: Google sometimes adds a text fragment (#:~:text=) to links from AI answers. With Google Tag Manager, you can capture it as a custom dimension in GA4."
          },
          {
            "text": "Leads: ask \"how did you find us?\" on every enquiry form."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/aio-4.jpg",
        "alt": "Google Search Console performance report showing 1.43k clicks, 271k impressions, 0.5% CTR and average position 8.2",
        "caption": "Google Search Console Performance report, where AI Overview and AI Mode clicks are counted with normal search."
      },
      {
        "type": "p",
        "text": "Our guide on [how to track AI traffic on your website](/insights/track-ai-traffic) covers the free and paid tools in detail."
      },
      {
        "type": "h2",
        "text": "What does this look like in practice?"
      },
      {
        "type": "image",
        "src": "/insights/aio-5.jpg",
        "alt": "Google AI Overview for aeo agency for self storage naming MAAI Agency as a specialist",
        "caption": "MAAI named in Google's AI Overview for \"aeo agency for self storage\"."
      },
      {
        "type": "p",
        "text": "MAAI's own site now appears as a source in Google's AI Overview for \"aeo agency for self storage\"."
      }
    ],
    "faq": [
      {
        "q": "What is an AI Overview?",
        "a": "An AI Overview is a short AI-written summary at the top of Google's search results that answers your question and links to the sources it used. You can expand it to see more detail and every cited source."
      },
      {
        "q": "What AI does Google AI Overview use?",
        "a": "AI Overviews and AI Mode are powered by Google's Gemini models, customised for Search and connected to Google's search index."
      },
      {
        "q": "Can you turn off AI Overviews on Google?",
        "a": "Google does not offer a setting to switch AI Overviews off completely. Our guide on [how to turn off AI Overview on Google](/insights/how-to-turn-off-ai-overview-google) covers every workaround. There are a few ways to see results without them: Select the \"Web\" filter under the search box, which shows plain links only. Add \"-ai\" to the end of your search, which many people report hides the AI Overview, although Google could change this at any time. In Chrome, Safari or Firefox, set up a custom search engine that uses Google's Web results (the address ending in udm=14), so every search opens without AI Overviews. For businesses, this is a reminder that some searchers skip AI answers entirely, so your normal organic rankings still matter."
      },
      {
        "q": "How do you turn on AI Overviews?",
        "a": "AI Overviews appear automatically when Google decides they help, in supported countries and languages, including the UK. There is no switch to turn them on. AI Mode can be opened at any time from its own tab."
      },
      {
        "q": "Is AI Overview accurate?",
        "a": "AI Overviews are usually accurate on well-covered topics but can make mistakes, especially on unusual, fast-changing or niche questions. Check the cited sources before relying on an answer for anything important. For businesses, an accurate, clear page about your own services helps Google describe you correctly."
      },
      {
        "q": "Why does the AI Overview keep disappearing?",
        "a": "Google only shows an AI Overview when it judges one will help, and answers are generated fresh each time, so the same search can show one and then not. Location, search history and how busy the service is also play a part. The message \"can't generate an AI Overview right now\" usually means a temporary issue, and the answer often returns if you search again later."
      },
      {
        "q": "Does schema help you rank in AI Overviews?",
        "a": "Structured data helps Google understand your pages and supports rich results, but studies have not shown a direct link between schema and AI Overview citations. Add the schema types that fit your pages as good practice, then focus on rankings, answers and mentions."
      },
      {
        "q": "Can I pay to appear in AI Overviews?",
        "a": "No. Citations are organic. Google can show ads above, below or within AI Overviews, but those are labelled as sponsored and are separate from the cited sources."
      },
      {
        "q": "How long does it take to appear in AI Overviews?",
        "a": "If your page already ranks on page one, sharpening its answers can lead to citations within a few weeks of Google recrawling it. If you need to build rankings and mentions first, expect three to six months."
      },
      {
        "q": "Do I need an AI Overview optimisation agency?",
        "a": "Many businesses can start with the steps in this guide. An agency helps when you need to cover many topics, build fan-out content at scale and earn PR coverage. See our list of the best AI and GEO marketing agencies for B2B in the UK. Want to know where your business appears in Google's AI answers? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "how-to-turn-off-ai-overview-google",
    "seoTitle": "How to Turn Off AI Overview on Google (2027 Guide)",
    "title": "How to Turn Off AI Overview on Google in 2027: Desktop, Mobile and AI Mode",
    "description": "How to turn off AI Overview on Google in 2027 on desktop and mobile, how to remove AI Mode, and whether your business should opt out.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/how-to-turn-off-ai-overview-google-banner.jpg",
    "intro": "Google now shows an AI Overview above its results for a large share of searches, and its AI Mode button sits in the search bar and in Chrome. Some people find the summaries useful. Many would rather go straight to the links, check sources themselves, or avoid answers that can get facts wrong. If that is you, the good news is that you can stop seeing AI Overviews in a few minutes, on desktop and on your phone. This guide explains five ways to turn off AI Overview on Google, how to remove AI Mode and other Google AI features, and, for business owners, the new option that lets websites opt out of Google's AI answers, plus whether your business should use it.",
    "body": [
      {
        "type": "h2",
        "text": "Can you turn off AI Overviews on Google?"
      },
      {
        "type": "p",
        "text": "No, Google does not offer an official switch to turn off AI Overviews. Google treats them as a core part of Search, like featured snippets. You can still stop seeing them by using the Web filter, adding \"-ai\" to a search, using the udm=14 web address, setting a custom search engine or installing a browser extension."
      },
      {
        "type": "p",
        "text": "Each method works differently. Some hide the AI Overview after the page loads. Others ask Google for a results page that never includes it. Because none of them is a true off switch, Google could change how they work at any time, so it helps to know more than one."
      },
      {
        "type": "h2",
        "text": "How to turn off AI Overview on Google: 5 methods"
      },
      {
        "type": "h3",
        "text": "1. Use the Web filter"
      },
      {
        "type": "p",
        "text": "The Web filter is Google's own way to show only text links, without AI Overviews. It works on desktop, mobile and in the Google app, but you need to select it for each search."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search for anything on Google."
          },
          {
            "text": "Under the search box, select \"Web\". If you can't see it, select \"More\" first."
          },
          {
            "text": "The page reloads with links only."
          }
        ]
      },
      {
        "type": "p",
        "text": "The Web filter also removes other features, such as image results and knowledge panels."
      },
      {
        "type": "image",
        "src": "/insights/turnoff-1.jpg",
        "alt": "Google results page with the Web filter selected, showing links without an AI Overview",
        "caption": "The Web filter shows links only, with no AI Overview."
      },
      {
        "type": "h3",
        "text": "2. Add \"-ai\" to your search"
      },
      {
        "type": "p",
        "text": "Adding \"-ai\" to the end of a search, such as \"best walking boots -ai\", is widely reported to hide the AI Overview. It is the quickest trick, with nothing to set up."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Type your search as usual."
          },
          {
            "text": "Add a space, then \"-ai\", at the end."
          },
          {
            "text": "Press Enter."
          }
        ]
      },
      {
        "type": "p",
        "text": "This is a loophole, not a feature, so Google could stop it at any time. The minus sign also tells Google to leave out results containing \"ai\", which can affect searches where that word matters."
      },
      {
        "type": "h3",
        "text": "3. Add udm=14 to the search address"
      },
      {
        "type": "p",
        "text": "The Web filter adds a short code, udm=14, to Google's web address. You can add it yourself to go straight to the links-only page."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search on Google, then click the address bar."
          },
          {
            "text": "Add \"&udm=14\" to the end of the address and press Enter."
          },
          {
            "text": "To make it reusable, bookmark https://www.google.com/search?udm=14&q= and type your search after \"q=\"."
          }
        ]
      },
      {
        "type": "p",
        "text": "Google does not document udm=14 publicly, so treat it as useful but not guaranteed."
      },
      {
        "type": "h3",
        "text": "4. Make \"Google Web\" your default search engine"
      },
      {
        "type": "p",
        "text": "This is the most reliable permanent fix on desktop. You add a version of Google that always uses udm=14, then make it your default, so every search from your address bar opens without AI Overviews."
      },
      {
        "type": "p",
        "text": "Google Chrome and Microsoft Edge (desktop):"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Chrome: go to Settings, then Search engine, then Manage search engines and site search. Edge: go to Settings, then Privacy, search and services, then Address bar and search, then Manage search engines."
          },
          {
            "text": "Next to \"Site search\", select \"Add\"."
          },
          {
            "text": "Enter the name \"Google Web\", the shortcut \"@web\", and the URL https://www.google.com/search?q=%s&udm=14"
          },
          {
            "text": "Select \"Add\", then open the three-dot menu next to \"Google Web\" and choose \"Make default\"."
          }
        ]
      },
      {
        "type": "p",
        "text": "Firefox (desktop):"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Go to Settings, then Search, then Search Shortcuts, and select \"Add\"."
          },
          {
            "text": "Enter the name \"Google Web\" and the same URL, then save."
          },
          {
            "text": "Under \"Default Search Engine\", choose \"Google Web\"."
          }
        ]
      },
      {
        "type": "p",
        "text": "Safari: Safari does not let you add custom search engines. Use the bookmark from method 3, or install a Safari extension that redirects Google searches to the Web view."
      },
      {
        "type": "h3",
        "text": "5. Use a browser extension"
      },
      {
        "type": "p",
        "text": "Extensions such as \"Bye Bye, Google AI\" or \"Hide Google AI Overviews\" hide the AI Overview box, and often AI Mode buttons, after the page loads."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Search your browser's extension store for an AI Overview blocker."
          },
          {
            "text": "Check its reviews, last update date and the permissions it asks for."
          },
          {
            "text": "Install it and test a search."
          }
        ]
      },
      {
        "type": "p",
        "text": "Extensions can break when Google changes its page design, and any extension that reads your search pages can see your searches, so choose one from a developer you trust."
      },
      {
        "type": "h2",
        "text": "How to turn off AI Overview on mobile"
      },
      {
        "type": "p",
        "text": "Phones offer fewer settings, but you can still avoid AI Overviews."
      },
      {
        "type": "h3",
        "text": "iPhone and iPad"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use the Web filter after each search, in Safari, Chrome or the Google app."
          },
          {
            "text": "Save the udm=14 bookmark from method 3, and add it to your home screen through Safari's Share menu for one-tap access."
          },
          {
            "text": "Install a Safari extension that redirects Google to the Web view, through Settings, then Safari, then Extensions."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Android"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Use the Web filter after each search."
          },
          {
            "text": "Chrome on Android does not let you type a custom search engine address, so save the udm=14 bookmark to your home screen instead."
          },
          {
            "text": "Firefox for Android supports custom search engines: go to Settings, then Search, then Default search engine, then \"Add search engine\", and use the Google Web URL from method 4."
          }
        ]
      },
      {
        "type": "p",
        "text": "The Google app itself has no setting to remove AI Overviews."
      },
      {
        "type": "h2",
        "text": "How to turn off AI Mode on Google"
      },
      {
        "type": "p",
        "text": "AI Mode is Google's conversational search, reached through a button in Chrome's address bar, on the New Tab page and in Google Search. You can hide most of these entry points."
      },
      {
        "type": "h3",
        "text": "Remove AI Mode from Chrome's address bar"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Right-click Chrome's address bar."
          },
          {
            "text": "Untick \"Always show AI Mode\"."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Remove AI Mode from the New Tab search box and right-click menu"
      },
      {
        "type": "p",
        "text": "Some AI Mode buttons are controlled by Chrome's experimental settings, called flags. Flags can change or disappear between Chrome updates."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Type chrome://flags in the address bar and press Enter."
          },
          {
            "text": "Search for \"AI Mode\" and set the related flags, such as \"AI Mode Omnibox entrypoint\", to \"Disabled\"."
          },
          {
            "text": "Search for \"Search with AI Mode\" to remove the right-click option, and set it to \"Disabled\"."
          },
          {
            "text": "Select \"Relaunch\"."
          }
        ]
      },
      {
        "type": "h3",
        "text": "Turn off AI Mode in Search Labs"
      },
      {
        "type": "p",
        "text": "If you joined Google's Search Labs experiments, open Search Labs from the Labs icon on Google, go to Manage, and turn off AI Mode."
      },
      {
        "type": "h3",
        "text": "Remove AI Mode from your Android search bar"
      },
      {
        "type": "p",
        "text": "On Pixel phones, tap the \"G\" in the home-screen search bar, tap your profile picture, go to Settings, then Customize Pixel Search Box, and turn off AI Mode. Other Android phones may show a similar setting in the Google search widget's settings."
      },
      {
        "type": "p",
        "text": "The AI Mode tab on Google's results page itself cannot be removed, but the Web filter and udm=14 methods keep you on links-only results."
      },
      {
        "type": "h2",
        "text": "How to turn off other Google AI features"
      },
      {
        "type": "p",
        "text": "Google's AI appears in several places, and each has its own setting."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Gemini in Chrome: open chrome://settings, search for \"Gemini\" and turn off \"Gemini in Chrome\". Right-click the Gemini button at the top of Chrome and select \"Unpin\" to hide it."
          },
          {
            "text": "AI writing help in Chrome: in Chrome's settings, search for \"Help me write\" and turn it off."
          },
          {
            "text": "Gemini in Gmail and Google Docs: these are managed in each app's settings, or by your organisation's admin on work accounts."
          }
        ]
      },
      {
        "type": "p",
        "text": "There is no single switch that turns off all Google AI at once."
      },
      {
        "type": "h2",
        "text": "Why does the AI Overview keep disappearing, and how do you turn it back on?"
      },
      {
        "type": "p",
        "text": "Google only shows an AI Overview when its systems judge that one will help, and each answer is generated fresh, so the same search can show one and then not. Your location, search history and the type of question also play a part. If you have used any method above, it will also hide them."
      },
      {
        "type": "p",
        "text": "There is no switch to turn AI Overviews on. To see them again, remove \"-ai\" from your searches, switch back from the Web filter, set Google as your default search engine instead of Google Web, or disable your extension."
      },
      {
        "type": "h2",
        "text": "Can website owners stop Google using their content in AI Overviews?"
      },
      {
        "type": "p",
        "text": "Yes, increasingly. On 3 June 2026, the UK's Competition and Markets Authority (CMA) required Google to let website owners opt out of having their content used in its AI search features. In response, Google began testing a new toggle in Search Console that lets site owners choose whether their content appears in, and helps ground, AI Overviews, AI Mode and AI Overviews in Discover."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Opting out keeps your pages in normal search results and rankings."
          },
          {
            "text": "Sites that opt out lose impressions and traffic from Google's AI features."
          },
          {
            "text": "The toggle is rolling out to a subset of UK site owners first, with a global rollout planned."
          },
          {
            "text": "Google is also adding reports in Search Console showing how your site appears in its AI features."
          }
        ]
      },
      {
        "type": "p",
        "text": "Before this, the only option was blocking Google-Extended in robots.txt. That stops your content being used to train Google's AI models, but it does not remove you from AI Overviews or AI Mode, because those draw on the normal search index."
      },
      {
        "type": "image",
        "src": "/insights/turnoff-2.jpg",
        "alt": "Search Console AI controls setting for Search generative AI, set to Include",
        "caption": "The AI controls setting for site owners."
      },
      {
        "type": "h2",
        "text": "Should your business opt out of AI Overviews?"
      },
      {
        "type": "p",
        "text": "For most businesses, no. AI Overviews and AI Mode are where many buyers now research and build shortlists, and visitors who arrive from AI answers tend to convert well. Research by [Orbit Media](https://www.orbitmedia.com/blog/conversion-rates-ai-search/) across 97 B2B websites found ChatGPT visitors converted to leads at 2.1%, compared with 0.5% for Google search. If you opt out, the AI answer still appears, but it names and links to your competitors instead. To appear in those answers instead, read [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) and our guide to [answer engine optimisation](/insights/answer-engine-optimisation)."
      },
      {
        "type": "p",
        "text": "Opting out can make sense for publishers whose content is the product itself, such as paywalled research, licensed data or news, where AI summaries replace a paid visit. For everyone else, the better move is to make sure Google's AI describes your business accurately and cites your pages. Our guide on [how to rank your business in AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) shows how."
      }
    ],
    "faq": [
      {
        "q": "Does turning off AI Overviews change my search results?",
        "a": "No. The links underneath are the same. The Web filter and udm=14 simply show a links-only page, which also leaves out features such as image results and knowledge panels."
      },
      {
        "q": "Does \"-ai\" still work?",
        "a": "Many people report that it does at the time of writing, but it is an unofficial trick that Google could stop at any time. The Web filter and the Google Web search engine are more reliable."
      },
      {
        "q": "Is there a Google setting to turn off AI forever?",
        "a": "No. Google has no account setting that turns off AI Overviews or all of its AI features. The custom \"Google Web\" search engine is the closest permanent option on desktop."
      },
      {
        "q": "Does udm=14 remove other features too?",
        "a": "Yes. It shows web links only, so it also removes image packs, knowledge panels, People Also Ask and other results-page features."
      },
      {
        "q": "Can I turn off AI Overviews in the Google app?",
        "a": "Not with a setting. Use the Web filter after each search, or search in a browser with the Google Web shortcut instead. Running a business and wondering how Google's AI describes you? [Book a call with Team MAAI](/book)."
      }
    ]
  },
  {
    "slug": "google-my-business-self-storage",
    "seoTitle": "Google My Business for Self Storage: Rank 1st in 2027",
    "title": "Rank 1st in Google My Business: A Guide for Self Storage Businesses in 2027",
    "description": "How to rank 1st in Google My Business for self storage: set up your listing, posts, reviews, local PR, social and AI answers, step by step.",
    "date": "2026-11-09",
    "author": "team",
    "topics": [
      "AEO/GEO"
    ],
    "industries": [],
    "image": "/insights/google-my-business-self-storage-banner.jpg",
    "intro": "Someone needs space for their furniture for three months. They pick up their phone, search \"storage units near me\" and choose one of the three businesses that appear on the map. Most never scroll further. If your self storage facility is not one of those three, that customer rents from a competitor. This guide shows how to rank 1st in Google My Business (now officially called Google Business Profile) for your self storage business in 2027: how the ranking works, how to set up your listing, how to use posts, reviews, local PR and social media to build trust, and how to get named in AI answers too. Around 823,000 people a month search \"storage units near me\" in the US (Semrush, US database). Each one is looking at the same three map results.",
    "tldr": [
      "Your primary category, your distance from the searcher and your business name carry the most weight for the map results (Whitespark's 2026 survey of local SEO experts).",
      "Open hours matter. Whether your business is open when someone searches ranks 5th out of all the map ranking factors in that survey.",
      "Reviews, Google My Business posts, local PR and a consistent brand on social media and across the web build the trust that moves you from 4th to 1st.",
      "AI answers pull from your website and your listing. A Yext study found business websites and business listings made up 86% of the sources cited by ChatGPT, Gemini and Perplexity.",
      "Expect results in weeks for listing fixes and months for the top spot."
    ],
    "body": [
      {
        "type": "h2",
        "text": "What decides who ranks 1st in Google My Business for self storage?"
      },
      {
        "type": "p",
        "text": "Three things decide who ranks 1st: how well your listing matches the search, how close you are to the person searching, and how trusted your business looks online. Google calls these relevance, distance and prominence. Where you appear depends on which Google surface the customer is using, so we take them one at a time."
      },
      {
        "type": "h3",
        "text": "Google map results (the \"3-pack\")"
      },
      {
        "type": "p",
        "text": "The map results come mostly from your Google My Business listing. In [Whitespark](https://whitespark.ca/local-search-ranking-factors/)'s 2026 Local Search Ranking Factors survey of 47 local SEO experts, the top factors for the map results were your primary category (score 227), the distance between your address and the searcher (225) and keywords in your business name (223)."
      },
      {
        "type": "image",
        "src": "/insights/gmb-1.jpg",
        "alt": "Bar chart of the top three map pack ranking factors: primary category 227, distance 225, keywords in business name 223",
        "caption": "The top three map pack ranking factors. Source: Whitespark Local Search Ranking Factors 2026."
      },
      {
        "type": "p",
        "text": "The chart shows the top three are close together, so none of them wins alone. Below them in the same survey:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Business open at the time of search (189)"
          },
          {
            "text": "A high star rating (181)"
          },
          {
            "text": "The number of Google reviews (170)"
          },
          {
            "text": "How recent they are (164)"
          }
        ]
      },
      {
        "type": "p",
        "text": "Your website matters too: the survey also lists how closely the address on your website matches your listing (153) and the quality of the links to the page your listing points to (127)."
      },
      {
        "type": "p",
        "text": "The hours result deserves its own look, because it is easy to fix."
      },
      {
        "type": "image",
        "src": "/insights/gmb-2.jpg",
        "alt": "Stat card: business open at the time of search is the 5th map pack ranking factor, score 189",
        "caption": "Opening hours rank 5th among map pack factors. Source: Whitespark Local Search Ranking Factors 2026."
      },
      {
        "type": "p",
        "text": "Whitespark's report states that whether your business is open or closed when someone searches \"will have a huge impact\" on rankings. We cover how to set your hours below."
      },
      {
        "type": "h3",
        "text": "Google AI Overviews and AI Mode"
      },
      {
        "type": "p",
        "text": "Google's AI answers about local businesses are built on the same Google data: your listing, your reviews and your website. If you rank well in the map results and on your own location page, you give Google's AI more to quote. In the Whitespark survey, the strongest factors for showing up in AI search were being on expert-curated \"best of\" lists (179), having a dedicated page for each service (170) and being prominent on key industry domains (167)."
      },
      {
        "type": "h3",
        "text": "AI assistants such as ChatGPT, Gemini and Perplexity"
      },
      {
        "type": "p",
        "text": "AI assistants search the web, then name a few businesses. They rely heavily on business websites and business listings, which we cover in section 8. The practical point: the same listing and the same website that win you the map results also feed AI answers."
      },
      {
        "type": "h2",
        "text": "How do you set up your Google My Business listing to rank 1st?"
      },
      {
        "type": "p",
        "text": "Fill in every part of your Google My Business listing accurately, starting with your primary category, name, address, phone number and hours. Many self storage listings have gaps in these basics, and the basics carry the most ranking weight."
      },
      {
        "type": "h3",
        "text": "Which primary category should a self storage business choose?"
      },
      {
        "type": "p",
        "text": "Choose \"Self-storage facility\" as your primary category, because the primary category is the highest-scoring map ranking factor in the Whitespark survey. Add secondary categories only for services you really offer, such as vehicle or business storage, and check Google's category list to find the exact names."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Pick one primary category and keep it. Changing it often can move you down."
          },
          {
            "text": "Use secondary categories for real services. Do not add categories you do not offer."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What should your business name, address and phone number look like?"
      },
      {
        "type": "p",
        "text": "Use your real business name exactly as it appears on your signage and website. Keywords in the business name scored 223 in the Whitespark survey, so a name such as \"Oakfield Self Storage\" helps when it is genuinely your trading name. Adding extra keywords that are not part of your name breaks Google's guidelines and risks a suspension."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Keep your name, address and phone number identical everywhere. Match your website, social profiles and directories letter for letter."
          },
          {
            "text": "Use a local phone number your team answers, and a tracking number only if you keep your main number listed too."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How should you set your business hours?"
      },
      {
        "type": "p",
        "text": "Set your hours to match when people can actually reach you, and keep them current, including bank holidays. Because \"open at the time of search\" is the 5th-ranked factor, a listing shown as closed loses to an open competitor for the same search."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Set staffed office hours accurately. If your listing offers extra hour types, such as access hours for 24 hour gate access, fill them in."
          },
          {
            "text": "Update special hours for holidays and for busy periods such as university move-out weeks."
          },
          {
            "text": "Match the hours on your website and your other listings."
          }
        ]
      },
      {
        "type": "h3",
        "text": "How do you link your Google My Business listing to the right page on your website?"
      },
      {
        "type": "p",
        "text": "Point each listing's website link to the matching location page, not your home page. This is a common gap, and it is quick to fix. The survey lists keywords in the title tag of the listing's landing page (146) and quality links to that page (127) as ranking factors, so the page you link to counts."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Build one page per location with the address, opening hours, unit sizes, prices, local landmarks and the nearby areas you serve."
          },
          {
            "text": "Add a Google Map to the page and mention your postcode or ZIP code."
          },
          {
            "text": "Link to the location page from your listing and back from your main self storage page."
          }
        ]
      },
      {
        "type": "h3",
        "text": "What photos, services and details should you add?"
      },
      {
        "type": "p",
        "text": "Add real photos and video of your units, entrance, access areas, security and staff, then list every service and detail you offer. Complete listings answer more of the questions customers ask before they call."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Upload photos regularly. Show outside, inside, each unit size and a drive-up bay if you have one."
          },
          {
            "text": "List unit sizes and services such as climate control, vehicle storage, packing materials and free collection."
          },
          {
            "text": "Complete the attributes such as accessibility details, and add your booking or enquiry link."
          },
          {
            "text": "Write your description in plain English and mention the area you serve. Avoid phone numbers and web links in it."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do Google My Business posts help you rank?"
      },
      {
        "type": "p",
        "text": "Google My Business posts are short updates, offers and events that appear on your listing, and they show Google and customers that your business is active. Whitespark's survey lists the amount of engagement on a listing (120) among its ranking factors, and posts give people something to click, so a regularly updated listing has more chances to earn that engagement. Google has not published posts as a direct ranking factor, so treat them as a trust and conversion tool that supports your ranking."
      },
      {
        "type": "p",
        "text": "There are three post types. Updates cover news, tips and what is new at your facility. Offers have a title, start and end date, and suit promotions such as a first-month discount. Events have a title and dates and suit things like an open day or a charity clear-out."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Post at least weekly. Sources differ on the ideal number, and no cap exists, so choose a rhythm you can keep up."
          },
          {
            "text": "Rotate the post types: an offer, a tip, a new unit size or a seasonal reminder."
          },
          {
            "text": "Tie posts to the calendar: student term ends, house-move season, spring declutters and the weeks after Christmas."
          },
          {
            "text": "Add a photo and a button such as \"Learn more\" or \"Call now\", pointing to the location page."
          },
          {
            "text": "Keep phone numbers out of the post text and use the call button instead."
          }
        ]
      },
      {
        "type": "p",
        "text": "Post content also helps off Google. Reuse the same offer on your website and your Facebook page so the message stays consistent."
      },
      {
        "type": "h2",
        "text": "How do reviews help your Google My Business ranking?"
      },
      {
        "type": "p",
        "text": "Reviews help your Google My Business ranking in three ways: a high star rating, a large number of reviews, and recent reviews. In the Whitespark survey they scored 181, 170 and 164, which puts all three in the top 12 map ranking factors. Reviews also decide whether a customer picks you once you do show up."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Ask every tenant at the right moment. The best moment is right after move-in or when a tenant tells you the service was good. Send a direct link to your Google review form by text or email."
          },
          {
            "text": "Put the link in the places tenants already look: the move-in email, the receipt, the QR code at the front desk and your website."
          },
          {
            "text": "Do not offer incentives for reviews. Google's guidelines do not allow it."
          },
          {
            "text": "Reply to every review, good or bad. Thank the happy ones by name and mention the facility. Answer problems calmly, say what you will do and give a contact for follow-up."
          },
          {
            "text": "Keep reviews coming. A steady flow beats a burst, because recency counts."
          }
        ]
      },
      {
        "type": "p",
        "text": "Rating alone does not guarantee a top spot. Category, distance and the other factors can outweigh stars. Reviews help most when your basics are already right."
      },
      {
        "type": "h2",
        "text": "How does local PR help your self storage show up in Google My Business?"
      },
      {
        "type": "p",
        "text": "Local PR gets your self storage business mentioned and linked by trusted local websites, which builds the \"prominence\" Google uses to rank you. Mentions in local news, partner websites and community pages show Google that real people in your area know you. Ahrefs found that brand mentions across the web correlate with showing up in AI Overviews (0.664, stronger than backlinks), so local PR also feeds AI answers."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Pitch local news and radio with something real: a new facility, a community clear-out day, free storage for a local charity, or student move-out data."
          },
          {
            "text": "Partner with local movers, estate agents, letting agents, universities and solicitors. Ask for a link to your location page and offer the same in return. These links are also local citations, which show Google your address appears consistently across trusted sources."
          },
          {
            "text": "Sponsor a local team or event and ask for a link from their website."
          },
          {
            "text": "Get on local \"best of\" lists and local business directories, with the same name, address and phone number each time. Consistency across the main search engines' sources scored 124 in the survey."
          }
        ]
      },
      {
        "type": "p",
        "text": "Pointing links at your location page rather than your home page matters, since the quality of links to the page your listing uses is a ranking factor (127)."
      },
      {
        "type": "p",
        "text": "Want us to look at your listing? Get a Google My Business audit done by MAAI. We check your categories, hours, location pages, reviews and local links, then send you a plan in order of impact. [Book your audit](/book)"
      },
      {
        "type": "h2",
        "text": "How does social media, including local Facebook, help your Google My Business ranking?"
      },
      {
        "type": "p",
        "text": "Social media helps people find and trust your self storage business, and gives Google and AI tools more consistent signs that your business is real and active. Google has not said social posts are a direct ranking factor, so think of social as brand visibility that supports the factors above."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Set up and complete your Facebook business page. Use the same name, address, phone number and hours as your Google listing and link to your location page."
          },
          {
            "text": "Show up in local Facebook groups. Community groups for your town, moving and student housing groups are where people ask \"where can I store my stuff?\". Answer helpfully and mention you can help only where it fits the question."
          },
          {
            "text": "Post local content: unit size tips, packing advice, open days and tenant stories. Repeat your Google My Business offers here."
          },
          {
            "text": "Run local Facebook ads to your location page for the moving season, if you have budget. They send more local people to your website, where a consistent brand supports the rest."
          },
          {
            "text": "Link your social profiles from your Google listing. It helps customers and keeps your details consistent."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you rank every self storage location in Google My Business?"
      },
      {
        "type": "p",
        "text": "Give each facility its own Google My Business listing, its own location page and its own set of reviews and posts. Google ranks listings one place at a time, so a strong main site does not carry a weak branch."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Create one listing per physical site. Use each site's real address and local number."
          },
          {
            "text": "Write each location page for that area, not a copy of another page with the town name swapped."
          },
          {
            "text": "Check the top three competitors in each area. Note their categories, review counts, photos and hours, then close the gaps one location at a time."
          },
          {
            "text": "Ask for reviews per site, so each listing builds its own rating."
          },
          {
            "text": "Track rankings per location, because rankings change street by street."
          }
        ]
      },
      {
        "type": "h2",
        "text": "Does Google My Business help your self storage show up in AI answers?"
      },
      {
        "type": "p",
        "text": "Yes. AI answers about local businesses draw heavily from business websites and business listings, so a complete Google My Business listing and a strong location page both help you get named. A [Yext](https://www.businesswire.com/news/home/20251009106549/en) study of 6.8 million citations from ChatGPT, Gemini and Perplexity found 44% came from business websites and 42% from business listings, and only 8% from reviews and social media."
      },
      {
        "type": "image",
        "src": "/insights/gmb-3.jpg",
        "alt": "Bar chart: AI answers cite business websites 44%, business listings 42%, reviews and social 8%",
        "caption": "Where AI answers get their sources. Source: Yext, 6.8 million citations from ChatGPT, Gemini and Perplexity."
      },
      {
        "type": "p",
        "text": "That means the facts on your listing and your website are the facts AI tools repeat when someone asks \"what is the best self storage near me?\". If your hours, prices or address are wrong or different across sources, AI tools can show the wrong answer. The Yext study is from a company that sells listings software, so read the exact split as a guide and not a rule. The direction is clear in both the Yext data and the Whitespark survey above: accurate listings and good pages win."
      },
      {
        "type": "p",
        "text": "Want us to look at your listing? Get a Google My Business audit done by MAAI. We check your categories, hours, location pages, reviews and local links, and how your business appears in AI answers. [Book your audit](/book)"
      },
      {
        "type": "h3",
        "text": "What helps your business appear in AI answers?"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Keep your details identical everywhere. Name, address, phone number, hours and prices should match across your listing, website and directories."
          },
          {
            "text": "Write a dedicated page for each service and location. A dedicated page for each service scored 170 for AI search visibility in the Whitespark survey."
          },
          {
            "text": "Answer real questions on your pages. Write questions such as \"how much does a 25 sq ft unit cost?\" as headings, with the answer first. Our guide to [answer engine optimisation](/insights/answer-engine-optimisation) explains how this works."
          },
          {
            "text": "Get mentioned on trusted local websites and \"best of\" lists. Being on expert-curated lists scored highest for AI search (179)."
          },
          {
            "text": "Check AI answers yourself. Ask ChatGPT, Gemini and Perplexity for the best self storage near you each month and note whether you appear and what they say."
          }
        ]
      },
      {
        "type": "h2",
        "text": "How do you track your Google My Business rankings and calls?"
      },
      {
        "type": "p",
        "text": "Track your Google My Business Performance report for calls, direction requests and website clicks, and use GA4 to see what visitors from your listing do on your site. Rankings change by location, so also check them from the area around each facility. Our guide on [how to track AI traffic on your website](/insights/track-ai-traffic) shows the full GA4 setup."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Open Performance in your Google My Business listing and note calls, direction requests, website clicks and search terms each month."
          },
          {
            "text": "Add a tracking tag (UTM) to the website link on your listing so GA4 shows visits from it as a separate source."
          },
          {
            "text": "Check your ranking from near your facility, in a private browser window, for \"storage units near me\" and \"self storage [your town]\"."
          },
          {
            "text": "Compare month on month, not day to day, because local results move around."
          }
        ]
      },
      {
        "type": "image",
        "src": "/insights/gmb-4.jpg",
        "alt": "Four steps to open the Google My Business Performance report: open your listing, click Performance, pick a date range, read the results",
        "caption": "Where to find your Performance report. Source: Google Business Profile Help."
      },
      {
        "type": "p",
        "text": "The four steps above are how to open the report. Your own numbers for calls, directions and website clicks appear on that screen."
      },
      {
        "type": "h2",
        "text": "How long does it take to rank 1st in Google My Business?"
      },
      {
        "type": "p",
        "text": "Listing fixes can show results in a few weeks, but reaching the top of the map results usually takes two to six months. Sources give different timelines, from 2 to 4 weeks for profile changes to 3 to 6 months for map pack movement, because it depends on your competition, your area and how much needs fixing. For the AI side, see [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) and [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt). To track progress without paying for software, use our list of [11 free tools for self storage websites and Google My Business](/insights/free-tools-self-storage-website-google-my-business), and if you want outside help, see [the best AI marketing agencies for self storage](/insights/best-ai-marketing-agency-self-storage)."
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Weeks 1 to 4: correct your category, name, hours, photos, website link and details."
          },
          {
            "text": "Months 1 to 3: build reviews, post weekly, and start local PR and partner links."
          },
          {
            "text": "Months 3 to 6: keep going, track each location and fix the gaps the top three competitors show."
          }
        ]
      }
    ],
    "faq": [
      {
        "q": "Is Google My Business the same as Google Business Profile?",
        "a": "Yes. Google renamed Google My Business to Google Business Profile, but many people still search for and say \"Google My Business\" or \"GMB\". It is the same free listing that shows your business on Google Search and Maps."
      },
      {
        "q": "How many reviews does a self storage business need to rank 1st?",
        "a": "There is no fixed number. Look at the top three businesses in your area and aim to match their rating, review count and how recent their reviews are, then keep adding new ones every month."
      },
      {
        "q": "Why was my Google My Business listing suspended?",
        "a": "Common causes are keywords added to the business name, a wrong or non-existent address, or breaking Google's guidelines on reviews. Fix the problem, then follow Google's appeal steps and keep proof such as signage, a lease or utility bills."
      },
      {
        "q": "Can I rank in Google My Business without a staffed office?",
        "a": "It is harder. Google expects a real address and customer access. If your facility is unstaffed, keep an accurate address, set honest access hours and make it easy to reach you by phone and online booking."
      },
      {
        "q": "Do I need a website to rank in Google My Business?",
        "a": "You can have a listing without one, but a website with a page for each location helps you rank and feeds AI answers. The Whitespark survey lists the title tag of your listing's landing page and the quality of links to it as ranking factors."
      },
      {
        "q": "How often should I update my Google My Business listing?",
        "a": "Check your hours, photos and details every month and post at least weekly. Update straight away when anything changes, such as prices or opening times."
      }
    ]
  },
  {
    slug: "answer-engine-optimisation",
    seoTitle: "AEO in 2027: What Answer Engine Optimisation Means for Your Business",
    title: "Answer Engine Optimisation (AEO) in 2027: What It Means for Your Business",
    description:
      "Answer engine optimisation (AEO) explained: what it is, how it differs from SEO and GEO, where AI answers appear, and how to do AEO for your business step by step.",
    date: "2026-11-09",
    author: "team",
    topics: ["AEO/GEO"],
    industries: [],
    image: "/insights/answer-engine-optimisation-banner.jpg",
    intro:
      "Your buyers now ask ChatGPT, Claude, Gemini or Google's AI Mode for help before they open a list of search results. They ask which supplier to trust, what a service should cost and how two options compare, and they get one written answer that names a few businesses. Answer engine optimisation (AEO) is how your business becomes one of those names. This guide explains what AEO is, how it differs from SEO, where AI answers appear, and how to do it for your business step by step, with the results you can expect and how to measure them.",
    body: [
      { type: "h2", text: "What is answer engine optimisation (AEO)?" },
      { type: "p", text: "**Answer engine optimisation (AEO) is the work of making your business the source that AI tools quote, cite and recommend when people ask them questions. It covers ChatGPT, Claude, Gemini, Perplexity and Google's AI Overviews and AI Mode, and it builds on SEO so your pages are found, trusted and easy for AI to use.**" },
      { type: "p", text: "An answer engine is any tool that replies with a written answer instead of a list of links. Search engines still sit inside most of them. When you ask ChatGPT for \"the best 3PL warehouse in Manchester\", it searches the web, reads a handful of pages and writes a summary. AEO decides whether your page is one it reads, and whether your business is one it names." },
      { type: "p", text: "For your business, that means two outcomes worth working for:" },
      { type: "list", items: [
        { lead: "Citations:", text: "the AI tool links to your page as a source." },
        { lead: "Mentions:", text: "the AI tool names your business in its answer, with or without a link." },
      ] },

      { type: "h2", text: "What is the difference between AEO, GEO and SEO?" },
      { type: "p", text: "SEO (search engine optimisation) helps your pages rank in Google and Bing results. AEO helps your business appear inside AI answers. GEO (generative engine optimisation) is a name for the same work that came from academic research, and most people now use AEO and GEO to mean the same thing." },
      { type: "p", text: "In plain English:" },
      { type: "list", items: [
        { lead: "SEO", text: "earns you a place in the list of results." },
        { lead: "AEO and GEO", text: "earn you a place in the answer written above or instead of that list." },
        { lead: "Both", text: "rely on the same foundation: pages that search engines can crawl, content that answers real questions and a reputation other websites confirm." },
      ] },
      { type: "p", text: "The term GEO comes from a 2023 study by researchers at [Princeton University](https://arxiv.org/abs/2311.09735), which tested how content changes affect visibility in AI-generated answers. Adding clear statistics, quotations and cited sources raised visibility the most." },
      { type: "h3", text: "Why does AEO depend on SEO?" },
      { type: "p", text: "Most AI tools search the web before they answer, so a page that cannot rank is rarely a page that gets quoted. An analysis of 1.9 million AI Overview citations by [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) found that 76% of cited pages also ranked in Google's top 10 for the same search." },
      { type: "image", src: "/insights/aeo-ai-overview-citations-top10.jpg", alt: "Pie chart: 76% of pages cited in Google AI Overviews ranked in the top 10 for the same search, 24% ranked outside the top 10", caption: "Pages cited in Google AI Overviews, by Google ranking for the same search. Source: Ahrefs." },
      { type: "quote", text: "AEO is just SEO with a coat of paint.", author: "One marketer on Reddit", where: "r/AskMarketing", href: "https://www.reddit.com/r/AskMarketing/comments/1sl2bb1/aeo_is_just_seo_but_everyone_pretends_it_requires/" },
      { type: "p", text: "There is truth in that view, since the foundation is the same. Strong SEO puts your page in the pool AI tools read, and AEO adds the work that makes your page the one they choose to quote." },

      { type: "h2", text: "Where do AEO answers appear, and how does each platform differ?" },
      { type: "p", text: "Each answer engine finds and shows sources in its own way, so the same page can appear in one and be missing from another. Here is how the main ones work in 2027." },
      { type: "h3", text: "ChatGPT" },
      { type: "p", text: "ChatGPT answers from its training data, and searches the web through third-party providers, including Bing, when a question needs current information such as suppliers, prices or reviews. Search answers show source links and often a short list of recommended businesses." },
      { type: "image", src: "/insights/aeo-chatgpt-3pl-manchester.jpg", alt: "ChatGPT answer listing its top 3 recommended 3PL warehouses in Manchester for small ecommerce brands, with source links beside each", caption: "ChatGPT's shortlist for \"Which top 3 3PL warehouses in Manchester handle ecommerce fulfilment for small brands?\", with the sources it used." },
      { type: "h3", text: "Claude" },
      { type: "p", text: "Claude, made by Anthropic, is widely used for work research, writing and analysis, so many of its users are professionals comparing options for their business. With web search on, it reads current pages and cites them inline." },
      { type: "h3", text: "Gemini" },
      { type: "p", text: "Gemini is Google's AI assistant. It draws on Google Search, so your Google rankings, Business Profile and reviews all shape what it says about you." },
      { type: "h3", text: "Perplexity" },
      { type: "p", text: "Perplexity searches the web for almost every question and shows numbered sources beside each answer. It is the easiest platform to test, because you can see exactly which pages it used." },
      { type: "image", src: "/insights/aeo-perplexity-sources.jpg", alt: "Perplexity sources list for the top 3 3PL warehouses in Manchester, showing provider websites and comparison sites it read", caption: "The pages Perplexity read for the same 3PL question: provider websites plus third-party comparison and listing sites." },
      { type: "h3", text: "Google AI Overviews and AI Mode" },
      { type: "p", text: "AI Overviews are the AI summaries at the top of Google results. AI Mode is a separate tab where people have a full conversation with Google Search. Both use Google's own index, and AI Mode breaks a question into several smaller searches before it answers, so it can cite pages that rank for related questions too." },
      { type: "image", src: "/insights/aeo-google-ai-mode-self-storage.jpg", alt: "Google AI Mode answer for aeo agency for self storage, naming specialist agencies with cited sources in a side panel", caption: "Google AI Mode for \"aeo agency for self storage\": the agencies named come from pages it cites in the sources panel." },

      { type: "h2", text: "How to do AEO for your business, step by step" },
      { type: "p", text: "AEO works best as a sequence. Each step below builds on the one before, so start at the top even if your website is already well established." },
      { type: "h3", text: "1. Find the questions your buyers ask AI" },
      { type: "p", text: "Buyers ask AI tools longer and more specific questions than they type into Google. A logistics manager may search \"3PL UK\" on Google, then ask ChatGPT \"which 3PL in the UK handles temperature-controlled storage for under 500 pallets?\". AI tools also split that question into several smaller searches, so your content needs to answer the main question and the smaller ones behind it." },
      { type: "list", items: [
        { text: "List the questions your sales team hears before every deal: cost, timelines, comparisons and risks." },
        { text: "Check People Also Ask in Google and the questions in your Search Console data for each service." },
        { text: "Ask ChatGPT, Claude and Perplexity your buyers' questions and note who they name today." },
        { text: "Read Reddit threads and LinkedIn posts in your industry for the exact wording people use." },
      ] },
      { type: "h3", text: "2. Build your SEO foundation and let AI bots crawl your site" },
      { type: "p", text: "An AI tool can only quote a page it can reach and read. Technical SEO is the first gate, and AI crawlers add a few checks of their own." },
      { type: "list", items: [
        { text: "Make sure your key pages are indexed in Google Search Console and Bing Webmaster Tools." },
        { text: "Check robots.txt allows AI crawlers such as OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot and Google-Extended." },
        { text: "Show your main content in plain HTML, since many AI crawlers do not run JavaScript." },
        { text: "Keep pages fast, and fix broken links and redirect chains." },
      ] },
      { type: "h3", text: "3. Write answer-first content" },
      { type: "p", text: "AI tools lift short passages, so each section of your page should answer its question in the first two or three sentences, then add detail. Long introductions bury the answer where the AI tool may never use it." },
      { type: "list", items: [
        { text: "Write each H2 and H3 as the question your buyer asks." },
        { text: "Answer each one in 40 to 60 words straight under the heading." },
        { text: "Add specific facts: prices, ranges, timelines, locations and named standards." },
        { text: "Cite research and data, and use lists and tables for comparisons." },
        { text: "Update key pages regularly and show the date they were last reviewed." },
      ] },
      { type: "h3", text: "4. Add structured data" },
      { type: "p", text: "Structured data (schema markup) is code that labels the facts on your page, such as who you are, what you offer and where you work. It helps search engines and AI tools understand your business without guessing." },
      { type: "list", items: [
        { text: "Add Organization schema with your name, logo, contact details and social profiles." },
        { text: "Add Service or Product schema to each service page." },
        { text: "Add FAQPage schema where the page answers common questions." },
        { text: "Add Article schema with the author and date on blog posts." },
        { text: "Test everything with Google's Rich Results Test." },
      ] },
      { type: "h3", text: "5. Build authority with digital PR, mentions and reviews" },
      { type: "p", text: "AI tools check what other websites say about you before they recommend you. A business named by trade publications, news sites, directories, review sites and forums looks far more credible than one that only describes itself, and each of those mentions is another page an AI tool can retrieve. Digital PR is the most direct way to earn that coverage." },
      { type: "view", text: "", title: "Kriti's view" },
      { type: "list", items: [
        { text: "Publish original data from your own work, such as average costs, timelines or survey results, and pitch it to journalists." },
        { text: "Offer expert comment on industry news through journalist request services." },
        { text: "Write guest articles for the trade publications your buyers read." },
        { text: "Apply for industry awards and \"best of\" or \"top companies\" lists in your category." },
        { text: "Keep your business name, address and description the same on every listing and directory." },
        { text: "Collect reviews on Google, Trustpilot or the review sites your industry uses." },
        { text: "Take part in Reddit, LinkedIn and industry forums where your buyers ask questions." },
      ] },
      { type: "h3", text: "6. Optimise for each platform" },
      { type: "p", text: "Once the foundation is in place, tune for the platforms your buyers use most. Each one has its own sources and signals. Our step-by-step guides cover [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt), [how to rank your business in Claude](/insights/how-to-rank-in-claude) and [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews)." },

      { type: "h2", text: "How do you measure AEO results?" },
      { type: "p", text: "You measure AEO by tracking how often AI tools name your business, how often they link to you, and how much of that turns into visits and leads. No single tool shows all of it yet, so most businesses combine a few." },
      { type: "list", items: [
        { lead: "AI referral traffic:", text: "visits from chatgpt.com, claude.ai, perplexity.ai and gemini.google.com in Google Analytics 4." },
        { lead: "Google performance:", text: "impressions and clicks in Search Console, which include AI Overviews and AI Mode." },
        { lead: "Mentions and citations:", text: "how often you appear for a fixed set of buyer prompts, checked monthly by hand or with an AI visibility tool." },
        { lead: "Leads:", text: "enquiries that name an AI tool when you ask \"how did you find us?\"." },
      ] },
      { type: "gallery", images: [
        { src: "/insights/aeo-ga4-claude-referrals.jpg", alt: "GA4 Traffic acquisition report filtered to the claude.ai session source, comparing 2026 with 2025", caption: "GA4 filtered to claude.ai" },
        { src: "/insights/aeo-ga4-chatgpt-referrals.jpg", alt: "GA4 Traffic acquisition report filtered to the chatgpt.com session source, showing key events up 30% on 2025", caption: "GA4 filtered to chatgpt.com" },
      ], caption: "GA4 Traffic acquisition, session source filtered to claude.ai and chatgpt.com, this year against last. Property details hidden." },
      { type: "quote", text: "When leads do come in from AI they are much more likely to convert.", author: "One business owner on Reddit", where: "r/digital_marketing", href: "https://www.reddit.com/r/digital_marketing/comments/1tvos1i/discussion_is_google_killing_organic_traffic_with/" },
      { type: "p", text: "That pattern is common, which is why counting enquiries matters as much as counting visits. Our guide on [how to track AI traffic on your website](/insights/track-ai-traffic) walks through the free setup in GA4 and Search Console, and [can SEO generate leads?](/insights/can-seo-generate-leads) explains how that traffic turns into sales." },

      { type: "h2", text: "How long does AEO take to show results?" },
      { type: "p", text: "Platforms that search the web live, such as Perplexity, AI Overviews and ChatGPT search, can start citing a new or improved page within a few weeks of it being indexed. Changing what AI tools say about your business as a whole usually takes three to six months, because it depends on reviews, PR coverage and rankings building up. Mentions in an AI model's own trained knowledge change slowest, since they update only when the model is retrained." },

      { type: "h2", text: "How is AEO different for B2B and B2C businesses?" },
      { type: "p", text: "B2B buyers ask fewer, longer and higher-value questions, often as part of a team that compares several suppliers over weeks or months (our [B2B SEO strategy guide](/insights/seo-for-b2b-companies) maps that journey stage by stage). That makes detailed comparison pages, pricing guidance, case studies and proof of expertise the most valuable AEO content for B2B. A freight forwarder in Rotterdam, a commercial property firm in Sydney or a software company in Toronto all need to be named when a buyer asks AI for a shortlist." },
      { type: "quote", text: "I find Perplexity really good for this.", author: "One IT manager on Reddit, on researching vendors before an evaluation", where: "r/ITManagers", href: "https://www.reddit.com/r/ITManagers/comments/1pcfvqe/how_do_you_run_vendor_evaluations_without_burning/" },
      { type: "p", text: "B2C buyers ask quicker questions and often decide in one session. A homeowner asking \"best removals company near me\" or a shopper asking \"best running shoes for flat feet\" gets a short list built mostly from reviews, local listings and product information. For B2C, reviews, local SEO and clear product data carry the most weight." },
      { type: "p", text: "In both cases, buyers now arrive having already read about you. In B2B, that research decides the shortlist. In B2C, it often decides the purchase." },

      { type: "h2", text: "How do AI answer engines choose which businesses to recommend?" },
      { type: "p", text: "AI tools recommend businesses they can find, understand and verify. They retrieve pages that answer the question clearly, then favour businesses that several trusted sources agree on." },
      { type: "h3", text: "How do AI tools find sources? RAG and query fan-out" },
      { type: "p", text: "An AI tool draws on two sources of knowledge. Its training data is a large snapshot of the web taken before the model was released, which shapes what it already \"knows\" about your brand. For current or specific questions, it uses retrieval-augmented generation (RAG): it retrieves live pages first, then writes its answer from what those pages say." },
      { type: "p", text: "Before retrieving, most AI tools use query fan-out. They rewrite your buyer's question into several smaller searches. \"Best 3PL for a small ecommerce brand in the UK\" might become \"3PL for small ecommerce UK\", \"3PL pricing per pallet UK\" and \"3PL reviews UK\". The tool then runs those searches through an index such as Google or Bing, collects the top pages from each and reads them together." },
      { type: "p", text: "For your business, this means two things. You can be found through any of the smaller searches, not only the main one. And a business that appears across several of them, on its own site and on other sites, stands out when the AI tool decides who to name." },
      { type: "image", src: "/insights/aeo-query-fan-out.jpg", alt: "Diagram: the buyer question best 3PL for a small ecommerce brand in the UK splits into three smaller searches, which combine into one written answer naming a few businesses", caption: "Query fan-out: one buyer question becomes several smaller searches, and the answer draws on all of them." },
      { type: "h3", text: "How do AI tools pick a passage to quote?" },
      { type: "p", text: "After retrieving, the AI tool breaks pages into passages and picks the ones that answer the question most directly. A clear answer under a matching heading is easier to lift than the same point buried mid-paragraph. Pages with specific facts, dates and cited data give the AI tool something concrete to quote." },
      { type: "h3", text: "What signals do AI tools trust?" },
      { type: "list", items: [
        { lead: "Clear answers:", text: "direct, specific responses under question-led headings." },
        { lead: "Entity consistency:", text: "the same name, services and details everywhere your business appears." },
        { lead: "Reviews:", text: "volume, rating and recency on trusted review sites." },
        { lead: "Mentions on other sites:", text: "coverage in publications, directories, forums and lists." },
        { lead: "Structured data:", text: "schema markup that labels your facts." },
        { lead: "Freshness:", text: "recently updated pages for questions where dates matter." },
      ] },

      { type: "h2", text: "Why does AEO matter for your business in 2027?" },
      { type: "p", text: "AEO matters because buyers now choose their shortlist before they speak to you, and AI answers increasingly shape that shortlist." },
      { type: "list", items: [
        { text: "Research by [6sense](https://www.businesswire.com/news/home/20251112018032/en) found that B2B buyers make first contact 61% of the way through their buying process, and 94% of buying groups already have a favourite by then." },
        { text: "Gartner found that 67% of B2B buyers in 2026 preferred a buying experience without a sales rep." },
        { text: "TrustRadius found that 63% of software buyers used AI to research a purchase in 2026." },
      ] },
      { type: "p", text: "If your business is missing from AI answers, buyers can build a shortlist without you and never know you were an option. Competitors who appear early in that research become the favourite before your sales team has a chance to speak." },
      { type: "h3", text: "What does AEO look like in practice?" },
      { type: "p", text: "One of our clients is a UK logistics business that ships baggage and personal belongings internationally. In 2026, we rebuilt its content around the questions customers ask before they book. We created a destination content cluster (one pillar guide and five supporting posts), published new answer-first blogs every month, checked older pages for indexing and crawl issues, and built backlinks and brand mentions on relevant sites." },
      { type: "p", text: "By October 2026, monthly users were up 149% and sessions up 105% compared with October 2025." },
      { type: "p", text: "Semrush estimates its organic traffic grew from 4,800 visits in February to 10,900 in October, and its AI visibility score rose from 22 to 28. Its blogs now appear as sources in Google's AI Overviews." },
      { type: "image", src: "/insights/aeo-client-search-console.jpg", alt: "Google Search Console performance comparison: 18.7k clicks and 3.54m impressions in the last 3 months against 13.3k clicks and 3.06m impressions in the previous 3 months", caption: "The client's Google Search Console, last 3 months against the previous 3: clicks up from 13.3k to 18.7k and average position from 10.4 to 8.9." },

      { type: "h2", text: "What are the most common AEO myths?" },
      { type: "h3", text: "\"AEO replaces SEO\"" },
      { type: "p", text: "AI tools search the web before they answer, so SEO remains the base AEO is built on. [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations/) found that 76% of pages cited in AI Overviews already rank in Google's top 10." },
      { type: "h3", text: "\"You need a special file or trick to appear in AI answers\"" },
      { type: "p", text: "Files such as llms.txt are optional extras. Clear content, crawlable pages and a strong reputation do the real work." },
      { type: "h3", text: "\"AEO is only for big brands\"" },
      { type: "p", text: "AI tools often name smaller, specialist businesses when a question is specific, such as a niche service in a named city. Specific questions favour specialists." },
      { type: "h3", text: "\"If AI answers the question, nobody visits your website\"" },
      { type: "p", text: "Fewer people click for simple facts, but buyers comparing suppliers still click through to check pricing, case studies and contact details. Those visits tend to be better informed and closer to buying. For the wider picture, read [will AI replace SEO?](/insights/will-ai-replace-seo)" },
      { type: "p", text: "Want to know what AI tools say about your business today? [Book a call with Team MAAI](/book)." },
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
    image: "/insights/seo-for-b2b-companies-banner.jpg",
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
      { type: "p", text: "B2B AEO (answer engine optimisation) helps your business get cited and recommended inside AI answers, in ChatGPT, Perplexity, Claude, Gemini and Google's AI Overviews and AI Mode, when buyers ask those tools to explain a problem or suggest suppliers. You will also hear it called generative engine optimisation (GEO); our guide to [B2B AEO and GEO strategy](/insights/answer-engine-optimisation) covers it in depth." },
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
      { type: "p", text: "If you also sell to consumers, our guide to SEO for B2C brands covers that side. Here is how to put B2B SEO and AEO into practice." },

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
      { type: "p", text: "**AI visibility:** take ten questions from step 1, run them in ChatGPT, Perplexity, Gemini and Google's AI Mode each month, and record whether your business is named, which competitors are named and which websites are cited. The cited websites become your target list for step 7. Our guide to [generative engine optimisation for B2B](/insights/answer-engine-optimisation) explains this in more detail." },
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
      { type: "p", text: "Use your own client value and close rate, in any currency. If the number of enquiries you need looks realistic for your market, the budget makes sense. If you need leads while SEO and AEO build, our guide to SEO vs PPC for B2B explains how paid search fits alongside them. Set up tracking first with our guide on [how to track AI traffic on your website](/insights/track-ai-traffic)." },

      { type: "h2", text: "How long does B2B SEO and AEO take to work?" },
      { type: "p", text: "In our experience, rankings and impressions start to move within three to six months, and qualified leads follow as pages climb for supplier searches. Refreshed pages that already rank can appear in AI answers within weeks. For the relocation client mentioned above, daily search impressions grew from about 700 to about 2,600 between January and May 2026. Here is a typical timeline from our client work. It varies with how competitive your market is and how much of your site already ranks. Our guide to [whether SEO can generate leads](/insights/can-seo-generate-leads) covers how those leads are measured." },
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
    image: "/insights/will-ai-replace-seo-banner.jpg",
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
      { type: "p", text: "The biggest change is competition. Every agency and every in-house team now has the same AI tools, so the baseline has risen. Work that once needed a team of five, I can now run largely on my own, because research, drafting, reporting and audits have become far more streamlined. That helps margins, and it also means anyone can produce volume. Our guide to [answer engine optimisation (AEO)](/insights/answer-engine-optimisation) explains what the new work involves." },
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
      { type: "p", text: "My view for 2027 is simple. The agencies that do well will know an industry deeply, publish what they know, use AI to work faster without lowering their standards, and measure success in leads as well as traffic. For how this plays out with B2B buyers, read our [B2B SEO strategy guide](/insights/seo-for-b2b-companies)." },
    ],
    faq: [
      { q: "Is SEO dead in 2027?", a: "No. Traditional, Google-only SEO has largely been replaced, but being found in search results and AI answers still depends on SEO foundations such as technical health, content quality and authority." },
      { q: "Will AI replace SEO agencies?", a: "AI will replace agencies that only produce volume content. Agencies with deep industry expertise, strong technical skills and a focus on leads will become more valuable." },
      { q: "Is SEO still worth it if fewer people click?", a: "Yes. The visits that remain tend to come from people closer to buying, and visibility in AI answers depends on the same foundations." },
      { q: "What is the difference between SEO, AEO and GEO?", a: "SEO helps you rank in search results. AEO (answer engine optimisation) helps you appear in direct answers. GEO (generative engine optimisation) helps you get cited by AI tools such as ChatGPT. In practice, they share the same foundations." },
      { q: "Which platforms count as search now?", a: "Google Search, AI Overviews and AI Mode, ChatGPT, Perplexity and Gemini, as well as community and video platforms such as Reddit and YouTube for many topics." },
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
