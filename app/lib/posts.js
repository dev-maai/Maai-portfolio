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
