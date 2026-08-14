# Fit-check form — where the leads go

`POST /api/fit` tries two sinks. Configure **at least one**, or the form falls
back to a prefilled mailto (it never silently drops a lead).

| Env var | What it does | Required? |
| --- | --- | --- |
| `FIT_SHEET_WEBHOOK` | Google Apps Script URL that appends a row to a Sheet | one of the two |
| `RESEND_API_KEY` | Resend key, emails the lead to the team | one of the two |
| `FIT_NOTIFY_FROM` | sender address on a Resend-verified domain, e.g. `fit@maai.agency` | with Resend |
| `FIT_NOTIFY_TO` | recipient (defaults to `business@maai.agency`) | no |

Set them in **Vercel → Project → Settings → Environment Variables**, then
redeploy. Locally, put them in `.env.local`.

---

## Option 1 — Google Sheet (free, ~5 minutes)

The "excel sheet" option. No account beyond the Google one you already have.

1. Create a Google Sheet. Name the first tab **Fit checks**.
2. **Extensions → Apps Script**, delete the placeholder, paste:

```js
var TAB = 'Fit checks';
var HEADERS = [
  'Received',
  'Work email',
  'Company size',
  'Monthly organic traffic',
  'What matters most',
  'Source',
];

function doPost(e) {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName(TAB);

  // create the tab + header row on first run, so a renamed or missing tab
  // can never silently drop a lead
  if (!sheet) {
    sheet = ss.insertSheet(TAB);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }

  var d = JSON.parse(e.postData.contents);
  sheet.appendRow([d.received, d.email, d.size, d.traffic, d.goal, d.source]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

The column order is fixed by `appendRow`, so row 1 is purely a label. Put the
same six headers in row 1 by hand if the tab already exists.

3. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone** (must be this — your server has no Google
     session, so any narrower setting returns 403 before `doPost` ever runs)
4. Authorise when prompted. Past the "Google hasn't verified this app" screen:
   **Advanced → Go to (project)**. The only scope needed is Sheets.
5. Copy the `/exec` URL it gives you. That is `FIT_SHEET_WEBHOOK`.

> **After any code change**, publish it: *Deploy → Manage deployments → edit →
> Version: **New version** → Deploy*. Web apps serve a snapshot, so edits are
> not live until you do this. The URL stays the same.

> "Anyone" means anyone with the URL can append rows. It is a private,
> unguessable URL and the only thing it can do is add a row. If that is not
> acceptable, use Resend instead, or add a shared secret to the payload and
> check it inside `doPost`.

New submissions appear in the Sheet within a second or two.

## Option 2 — Email via Resend

1. Sign up at resend.com, add and verify your sending domain (SPF + DKIM DNS
   records). Without verification, mail lands in spam.
2. Create an API key → `RESEND_API_KEY`.
3. Set `FIT_NOTIFY_FROM` to an address on that verified domain.

Each submission arrives as an email with `reply_to` set to the lead, so hitting
reply answers them directly.

---

## Testing

```bash
curl -X POST http://localhost:3000/api/fit \
  -H 'content-type: application/json' \
  -d '{"email":"test@example.com","size":"11–50 employees","traffic":"Under 1,000","goal":"More qualified pipeline"}'
```

- `{"ok":true}` — captured
- `503 unconfigured` — no sink set up yet (the form shows its mailto fallback)
- `422 invalid` — a required field is missing or the email is malformed

## Notes

- A hidden `company_url` honeypot field silently absorbs bot submissions.
- Nothing is stored on the server itself; Vercel's filesystem is ephemeral, so a
  local CSV would vanish on every deploy.
- The same pattern will work for the gated report form on `/industries/report`,
  which currently captures nothing.
