# MAAI Insights: blog standards

Read this before writing, rewriting or adding images to any post. These are Kriti's rules (set 3 and 5 November 2026). The benchmark post is `answer-engine-optimization`; the style references are Ahrefs (`/blog/google-ai-mode/`, `/blog/bluf/`, `/blog/openai-publisher-partnerships/`) and Peec AI (`/blog/how-two-teams-run-their-own-geo-experiments`, `/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web`).

## 1. Titles and keywords
- Every post has two titles:
  - `seoTitle`: the `<title>` tag. 60 characters or fewer, led by the main search term exactly as people search it (US spelling is fine here when it is the bigger search term, e.g. "Answer Engine Optimization"). Include 2027.
  - `title`: the H1. Can be longer and more descriptive; UK English.
- Every phrase in both titles must be searched (check in Semrush, UK and US).
- Every H2 works as a search query on its own, phrased the way people ask. Use the key search terms in headings. No generic H2s ("Example", "Common mistakes", "Conclusion"). No "X, not Y" headings.
- The main keyword goes in the seoTitle, H1, intro, at least one H2, the meta description and the slug.

## 2. Depth: answer the question properly
- Read the top 3 results and the AI Overview sources in full before writing. List every subtopic, statistic and FAQ they cover. Cover all of it, then go further.
- Answer each H2 in its first one or two sentences, then explain how and why, then show how to do it.
- MAAI's edge: the big companies explain their own tool. We explain any tool in detail, step by step, so a business owner can use it to grow: GA4, Search Console, Bing Webmaster Tools, Semrush, Ahrefs, Peec, Google Business Profile, robots.txt, schema. Give the exact click path (block `steps` with `path`), settings, regex or code (block `code`).
- Every post includes at least one piece of original MAAI research or data, with the method explained (e.g. a Semrush study of 20+ searches for the topic), and what it means for the reader.
- Cover the business decisions where relevant: when to start, what happens if you wait, how it differs by business model, budget logic with a worked example, how to measure.
- Write for a reader who knows about 6 out of 10: plain English, explain every term the first time.

## 3. Audience and examples
- UK English always (spelling and style). That does not mean UK-only examples. Use global examples (UK, US and others) unless the post targets a specific market.
- Industry examples are broad categories the reader identifies with. Do not reuse MAAI's own client niches as the only examples in every post.
- Client results only where they genuinely prove a point, anonymised (industry and market only, never a name, domain or URL), with "What we did" and real before/after data.

## 4. Visual variety: no fixed template
- Do not repeat the same pattern (chart, table, client example) in every post. Choose the format that explains each point best, and vary placement and rhythm through the post.
- Available blocks (see `app/insights/blocks.js`):
  - `callout` (variants: definition, tip, note, warning, takeaway) for definitions, method notes, cautions and key takeaways
  - `stats` big-number cards for headline figures
  - `hbar` horizontal bars, one or two series (rankings, percentages, UK vs US)
  - `chart` column chart (max 3 rows), only when columns genuinely suit the data
  - `donut` shares of a whole
  - `flow` process diagram with "your lever" at each step
  - `steps` numbered how-to cards with a tool click `path`
  - `compare` side-by-side columns (do and avoid, before and after, option A and B)
  - `rewrite` before and after passage
  - `code` robots.txt, regex, schema, config
  - `checklist` ticked list
  - `cards` grid of platforms, tools or business models
  - `table`, `quote`, `image`, `gallery` (two or more screenshots side by side), `view` (Kriti's quote, hidden while empty)
- Inline `**bold**` and `[label](url)` links work inside text.
- A chart or table must earn its place. Never add one just to fill the template.

## 5. Images and screenshots
- Real screenshots only for anything presented as real (Google results, ChatGPT, Perplexity, Claude, GA4, Search Console, Bing, tools), lightly cropped, client names, domains and private figures hidden.
- Explain processes and concepts with diagrams (`flow`, `compare`, `cards`) rather than walls of text.
- Aim for a screenshot or visual at least every 2 to 3 sections, at the point where it helps.
- Never publish a post without its screenshots. If they cannot be captured in the run, keep the post as `draft: true` (off the site and sitemap), queue the requests in `content/screenshot-requests.md`, and publish once they are Done.

## 6. Links
- Link inline only: original research and data reports, named people (LinkedIn, verified), and our own live posts. Never link other blogs, vendor or tool pages, documentation, Wikipedia or event sites; name them instead. No "Sources" or "Related reading" sections.
- Outbound anchor text is the institution, publisher or person name: "[Pew Research Center](url) tracked...", "researchers at [Princeton University](url) found...".
- Contextual keyword anchors are only for internal links: "[generative engine optimisation](/insights/generative-engine-optimization-b2b)".

## 7. Categories
- At most 2 categories per post in total across topics and industries, chosen by what the post is primarily about. A topic pillar takes its topic only. Industry tags only for posts written about that industry.

## 8. Writing rules
- UK English. No em dashes. Never the "it's not X, it's Y" construction. Address the reader directly. No negative words about competitors. No racist, colonial or culturally misplaced words.
- Only sourced numbers; never invent figures or quotes. Illustrative examples must be labelled as illustrative.
- Pillars 2,000 to 3,000 words, clusters 1,500 to 2,000; longer only when the reader genuinely needs it.
- TLDR, table of contents (automatic from H2s), FAQ.
- Community quotes only from Reddit or LinkedIn posts Kriti supplied (`content/reddit/`, `content/linkedin/`), both sides, then our view.
