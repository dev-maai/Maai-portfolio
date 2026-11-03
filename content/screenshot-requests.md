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

(none open)
