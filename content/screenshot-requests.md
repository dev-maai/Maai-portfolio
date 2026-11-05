# Blog screenshot requests

Queue shared between the daily blog run (cloud, cannot open Chrome) and the
"blogs-screenshots & images" project in the Claude desktop app (has Chrome).

How it works
- The daily run adds a request here whenever a post needs a real screenshot it could not capture.
- The desktop project picks up every `Status: Open` request, captures the screenshot in Chrome,
  saves it to `public/insights/<file>`, adds the image block to the post in `app/lib/posts.js`
  under the named H2/H3 (with alt text and caption), sets `Status: Done (<date>)`, commits and pushes to main.
- Rules: real screenshots only, lightly cropped, no mock-ups. Hide client names, domains and any
  private figures (blur GA4/Search Console values unless they are maai.agency's own and safe to show).
  UK English, no em dashes in captions.

Format

```
## <post slug> / <file name>
Status: Open
Capture: <exactly what to open and what must be visible>
Place: after <H2 or H3 text>
Caption: <caption>
```

## Requests

## seo-vs-ppc-for-b2b / b2b-google-serp-office-removals.jpg
Status: Open
Capture: Google UK (google.co.uk, incognito, location London) results for "office removals" showing the top ads, any AI Overview and the first organic results. Crop to the top of the page. Hide nothing unless a client domain appears (blur it).
Place: after "SEO vs PPC for B2B: what is the difference?" (before the first paragraph)
Caption: Google UK results for "office removals": ads, AI answers and organic results compete for the same B2B search.
Note: Chrome cannot open incognito, and the signed-in results page shows a "Your Google Ads summary" panel with client campaign names, budgets and a client ad above the results instead of normal top ads. Needs a signed-out or incognito capture (04/11/2026)
Note: retried with non-personalised results (pws=0); the signed-in page still opens with the private "Your Google Ads summary" panel showing a client campaign and ad. Still needs a signed-out capture (05/11/2026)
Note: retried signed-in in Chrome; results are localised to Edinburgh (not London), show no ads or AI Overview, and include a private Search Console Insights panel for a client domain. Still needs a signed-out or incognito capture (05/11/2026)

## seo-vs-ppc-for-b2b / b2b-chatgpt-3pl-shortlist.jpg
Status: Done (04/11/2026)
Capture: ChatGPT (search on) answer to "Which UK 3PL providers integrate with Shopify and handle ecommerce returns?" showing the named providers and the source links. Crop to the question and answer. Blur any client name or domain.
Place: after the H3 "What AI tools look for when they recommend a B2B supplier"
Caption: A ChatGPT shortlist for a B2B question: the suppliers named come from organic pages, directories and reviews. Ads are never used as sources.

## seo-vs-ppc-for-b2b / b2b-ga4-key-events-channel.jpg
Status: Done (04/11/2026)
Capture: GA4 Reports > Acquisition > Traffic acquisition, primary dimension Session default channel group, with the Key events column filtered to a lead event (form submit or generate_lead). Use maai.agency or a client property with all values blurred and the property name hidden.
Place: after "How to measure B2B SEO and PPC results" (before the table)
Caption: GA4 Traffic acquisition with key events filtered to leads: compare Organic Search and Paid Search by enquiries, not just sessions. Values blurred.

## seo-vs-ppc-for-b2b / b2b-search-console-performance.jpg
Status: Open
Capture: Google Search Console > Performance > Search results (last 6 months) with clicks, impressions and average position switched on, showing a rising trend. Hide the property name and blur all figures.
Place: after the list under "What changed in Google Search Console:" in the H2 "B2B SEO case study: how a corporate relocation company grew organic leads"
Caption: Google Search Console Performance report: clicks, impressions and average position over time. Property and values hidden.
Note: sc-domain:maai.agency (last 6 months, daily and weekly) does not show a rising trend, so it does not fit the case study. Needs the case-study client property (not stated in the request) or a confirmed choice of property (04/11/2026)


## answer-engine-optimization / (all requests below)
Note: this post is unpublished (draft: true in app/lib/posts.js, temporary redirect in next.config.mjs) until these screenshots are added. Add the image blocks to the draft post as normal and skip the live check (the URL redirects while it is a draft; preview locally with INSIGHTS_PREVIEW_DRAFTS=1 npx next dev). Do not remove draft: true or the redirect: the daily blog run republishes it once every request below is Done. Rewritten again 05/11/2026; placements below match the current version.

## answer-engine-optimization / aeo-google-ai-overview.jpg
Status: Done (05/11/2026)
Capture: Google (signed out, desktop) results for "what is a freight forwarder" showing the AI Overview with its source links. Crop to the AI Overview and the first organic result.
Place: after the H3 "1. Page one is the entry ticket" (after its paragraph)
Caption: Google's AI Overview for "what is a freight forwarder": the answer comes first, with the cited pages listed beside it.

## answer-engine-optimization / aeo-chatgpt-sources.jpg
Status: Done (05/11/2026)
Capture: ChatGPT (search on) answer to "Which 3PLs in the Midlands work with Shopify and handle returns?" with the Sources panel open, showing the named companies and the cited websites. Crop to the question, the answer and the Sources panel. Blur any client name or domain.
Place: after the callout "Why ChatGPT can cite you before Google ranks you" in the H2 "How to rank in ChatGPT"
Caption: A ChatGPT answer with its Sources panel open: the businesses named and the websites it relied on, often directories and review sites alongside suppliers.

## answer-engine-optimization / aeo-perplexity-citations.jpg
Status: Open
Capture: Perplexity answer to "How does customs clearance work for imports?" showing the numbered citations in the text and the source cards. Crop to the question, the source cards and the first part of the answer. Blur any client name or domain.
Place: after the first paragraph of the H2 "How to rank in Perplexity" (before the two-column comparison)
Caption: Perplexity attaches a numbered citation to each claim, so you can see exactly which page supported which sentence.
Note: Perplexity shows a Cloudflare "Verify you are human" check, which the run cannot complete. Needs Kriti to pass the check once in Chrome, then rerun (05/11/2026)

## answer-engine-optimization / aeo-claude-citations.jpg
Status: Open
Capture: Claude (web search on) answer to "What does a 3PL do and how do I choose one?" showing the inline citations. Crop to the question and the answer with citations. Blur any client name or domain.
Place: after the first paragraph of the H2 "How to rank in Claude" (before the steps)
Caption: Claude shows clickable citations when it searches the web, linking each point to the page it came from.
Note: Claude answered from its own knowledge without searching the web, so no citations appeared. Ask a question that needs current information (for example add "in 2026" and ask for sources), or switch on web search in Claude settings (05/11/2026)

## answer-engine-optimization / aeo-ga4-ai-channel.jpg
Status: Open
Capture: GA4 for maai.agency: Admin > Data display > Channel groups, with a custom channel group open showing an "AI assistants" channel (Source matches regex) placed above Referral. If no such group exists, capture the "Create new channel group" screen with the AI channel condition filled in, then cancel without saving. Hide the property name.
Place: after the steps "Create an AI channel in GA4" (before the regex code block)
Caption: A custom channel group in GA4 with an AI assistants channel placed above Referral, so AI visits get their own line in acquisition reports.
Note: the maai.agency GA4 property shows "No data received from your website yet". The channel group set-up screen in Admin can still be captured without data (05/11/2026)

## answer-engine-optimization / aeo-bing-ai-performance.jpg
Status: Open
Capture: Bing Webmaster Tools > AI Performance for maai.agency (if available), showing Total citations, Average cited pages and the Grounding queries table. Hide the site name and blur all values.
Place: after the two-column comparison in the H2 "How to measure AEO in Google Search Console and Bing Webmaster Tools"
Caption: Bing Webmaster Tools' AI Performance report shows how often your pages are cited in Copilot and other AI answers, and the queries behind them. Values blurred.
Note: Bing Webmaster Tools needs a Microsoft sign-in in Chrome, which the run cannot do (05/11/2026)

## seo-for-b2b-companies / (all requests below)
Note: this post is LIVE (rewritten 05/11/2026 and published at Kriti's request before its screenshots). Add each image under the named heading and check it on the live page.

## seo-for-b2b-companies / b2b-google-serp-freight-forwarder-uk.jpg
Status: Open
Capture: Google UK results for "freight forwarder uk" (signed out or non-personalised, desktop) showing the AI Overview and the local map. Hide any client domain.
Place: after the list in the H2 "What do B2B buyers see in Google and AI answers at each stage of the journey?" (before the key takeaway callout)
Caption: For a supplier search, Google shows an AI answer and its local map, so ranking pages and an accurate Business Profile both matter.

## seo-for-b2b-companies / b2b-gsc-question-filter.jpg
Status: Open
Capture: Search Console Performance > Search results for sc-domain:maai.agency, last 3 months, with a Query filter set to Custom (regex) ^(what|how|why|which|who|when|where|is|are|can|does|do|should|best)\b. Show the filter and the query table; blur figures.
Place: after the code block in the H3 "Step 1. Find the questions your buyers ask at each stage"
Caption: Filtering Search Console to question searches shows the questions buyers already use to find you.

## seo-for-b2b-companies / b2b-semrush-questions-3pl.jpg
Status: Open
Capture: Semrush Keyword Magic Tool for "3pl" (UK database) with the Questions filter on, showing the question list with volumes.
Place: after the steps in the H3 "Step 2. Map keywords to each buying job"
Caption: The Questions filter in Semrush's Keyword Magic Tool lists the learning searches buyers make before they look for a supplier.

## seo-for-b2b-companies / b2b-ga4-landing-page-organic.jpg
Status: Open
Capture: GA4 Reports > Engagement > Landing page, filtered to Session default channel group = Organic Search, with the enquiry key event column. Hide the property name and blur values. If maai.agency's GA4 still shows no data, use the channel group set-up screen instead and note it.
Place: after the code block in the H3 "Step 9. Track AI visibility, leads and pipeline"
Caption: GA4's Landing page report, filtered to organic search, shows which pages bring enquiries.
