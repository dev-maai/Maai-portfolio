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
Note: this post is unpublished (draft: true in app/lib/posts.js, temporary redirect in next.config.mjs) until these screenshots are added. Add the image blocks to the draft post as normal and skip the live check (the URL redirects while it is a draft). Do not remove draft: true or the redirect: the daily blog run republishes it once every request below is Done. Rewritten 05/11/2026; placements below match the rewrite.

## answer-engine-optimization / aeo-google-ai-overview.jpg
Status: Open
Capture: Google UK (google.co.uk, signed out, location London) results for "what is a freight forwarder" showing the AI Overview with its source links. Crop to the AI Overview and the first organic result.
Place: after the chart "AI Overviews on 24 UK business searches" in the H2 "Which websites do AI answers cite in the UK? Our research"
Caption: Google UK's AI Overview for "what is a freight forwarder": the answer comes first, with the cited pages listed beside it.

## answer-engine-optimization / aeo-chatgpt-sources.jpg
Status: Open
Capture: ChatGPT (search on) answer to "Which UK 3PLs integrate with Shopify and handle returns?" with the Sources panel open, showing the named companies and the cited websites. Crop to the question, the answer and the Sources panel. Blur any client name or domain.
Place: after the first paragraph of the H2 "How to rank in ChatGPT" (before the numbered list)
Caption: A ChatGPT answer with its Sources panel open: the businesses named and the websites it relied on, often directories and review sites alongside suppliers.

## answer-engine-optimization / aeo-perplexity-citations.jpg
Status: Open
Capture: Perplexity answer to "How much does customs clearance cost for imports into the UK?" showing the numbered citations in the text and the source cards. Crop to the question, the source cards and the first part of the answer. Blur any client name or domain.
Place: after the first paragraph of the H2 "How to rank in Perplexity" (before the list)
Caption: Perplexity attaches a numbered citation to each claim, so you can see exactly which page supported which sentence.

## answer-engine-optimization / aeo-claude-citations.jpg
Status: Open
Capture: Claude (web search on) answer to "What does a 3PL do and how do UK brands choose one?" showing the inline citations. Crop to the question and the answer with citations. Blur any client name or domain.
Place: after the paragraph in the H2 "How to rank in Claude"
Caption: Claude shows clickable citations when it searches the web, linking each point to the page it came from.

## answer-engine-optimization / aeo-ga4-ai-referrals.jpg
Status: Open
Capture: GA4 Reports > Acquisition > Traffic acquisition for maai.agency, primary dimension Session source, search filter matching chatgpt|perplexity|gemini|claude|copilot, last 90 days, Sessions and Key events columns visible. Hide the property name and blur all values.
Place: after the list in the H2 "How do you measure AEO results?"
Caption: GA4 Traffic acquisition filtered to AI sources: chatgpt.com, perplexity.ai and others appear as session sources. Values blurred.

## answer-engine-optimization / aeo-bing-ai-performance.jpg
Status: Open
Capture: Bing Webmaster Tools > AI Performance for maai.agency (if available), showing Total citations, Average cited pages and the Grounding queries table. Hide the site name and blur all values.
Place: directly after aeo-ga4-ai-referrals.jpg in the H2 "How do you measure AEO results?"
Caption: Bing Webmaster Tools' AI Performance report shows how often your pages are cited in Copilot and other AI answers. Values blurred.
