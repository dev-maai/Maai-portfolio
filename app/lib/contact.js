/* Single source of truth for the contact address + prefilled email templates.
   Mail CTAs open the visitor's mail client (Gmail included) with the subject and
   body already written, so they only fill in the blanks — which also qualifies
   the lead before the first reply. */
export const CONTACT_EMAIL = "business@maai.agency";

const TEMPLATES = {
  strategyCall: {
    subject: "Strategy call request — [your company]",
    body: `Hi MAAI team,

I'd like to book a 30-minute strategy call.

Company:
Website:
What we're trying to fix:
Rough monthly organic traffic:
Best times to talk (with timezone):

Thanks,
[your name]`,
  },
  general: {
    subject: "Enquiry — [your company]",
    body: `Hi MAAI team,

Company:
Website:
What you'd like help with:

Thanks,
[your name]`,
  },
};

export function mailtoHref(key = "strategyCall") {
  const t = TEMPLATES[key] || TEMPLATES.strategyCall;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`;
}
