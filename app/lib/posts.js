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
    "image": "/removals/foundation-dashboard.jpg",
    "intro": "For twenty years, getting found online meant ranking in a list of ten blue links and waiting for the clicks. That has changed. Your buyers now ask ChatGPT, Claude and Perplexity for answers, and Google shows an AI Overview above its results for millions of searches. Many of those people get what they need without visiting any website. Others arrive having already read about you in an AI answer. This guide explains how search traffic has shifted, why your impressions may be rising while your clicks fall, and [how to track AI traffic on your website](/insights/track-ai-traffic) for free with Google Analytics 4 (GA4) and Google Search Console.",
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
    "image": "/removals/authority.jpg",
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
    "image": "/removals/AEO.jpg",
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
    "image": "/removals/authority.jpg",
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
    "image": "/removals/foundation-dashboard.jpg",
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
    "image": "/removals/intent-map.jpg",
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
    "image": "/removals/intent-map.jpg",
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
        "text": "Listing fixes can show results in a few weeks, but reaching the top of the map results usually takes two to six months. Sources give different timelines, from 2 to 4 weeks for profile changes to 3 to 6 months for map pack movement, because it depends on your competition, your area and how much needs fixing. For the AI side, see [how to rank in Google AI Overviews and AI Mode](/insights/how-to-rank-in-ai-overviews) and [how to rank your business in ChatGPT](/insights/how-to-rank-in-chatgpt)."
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
    image: "/removals/intent-map.jpg",
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
