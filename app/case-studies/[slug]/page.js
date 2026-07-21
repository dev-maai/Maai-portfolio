import { notFound } from "next/navigation";
import ScrollProgress from "../../components/ScrollProgress";
import Nav from "../../components/Nav";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";

/* Case-study landings. Full write-ups render the rich layout (hero + stat band +
   article); cases without a `sections` array fall back to the lean placeholder. */
const CASES = {
  pickfords: {
    name: "Pickfords",
    tag: "Organic search",
    title: "How MAAI grew Pickfords' organic content clicks 39% through the 2026 Google core updates",
    stats: [
      { v: "+39%", l: "Content clicks, Mar to May" },
      { v: "+575%", l: "Top guide clicks" },
      { v: "+8.2%", l: "June sessions, MoM" },
    ],
    sections: [
      {
        h: "Context",
        paras: [
          "Pickfords is an established UK removals and moving company with a brand-owned domain. In early 2026 the organic account was under real pressure. Overall organic sessions were down about 30% year on year through May, site health had slipped from 70% to 63% since January, and average ranking position sat at 55.8 against a target under 40. Two Google core updates landed inside the same window — one in late March to early April and one in late May to early June — both of which reset rankings across the removals category.",
        ],
      },
      {
        h: "Challenge",
        list: [
          "Overall organic traffic down roughly 30% year on year, with commercial terms losing ground. “Home removal UK” and “business removals” each fell to a single click.",
          "Recurring technical debt, including ViewState and robots.txt issues, holding site health below its January baseline.",
          "Heavy SERP volatility from the core updates. Across the category, 79.5% of top-three URLs shifted position and 24.1% of top-ten URLs dropped beyond position 100.",
          "Ranking visibility too low to recover on commercial keywords alone while the SERP was still moving.",
        ],
      },
      {
        h: "Approach",
        paras: [
          "MAAI built the recovery around original-data content rather than chasing lost commercial rankings head-on while the results pages were unstable. The 2026 core updates were rewarding original expertise, proprietary data, and first-party sources, and moving value away from aggregated and commodity content. Pickfords owns its domain and its move data, so the programme leaned into both.",
        ],
        list: [
          "Published guides built on Pickfords' own move statistics rather than aggregated third-party content.",
          "Built local specificity with named areas, real costs, and location-level removal guides.",
          "Targeted informational and intent-led queries where original data could differentiate — across safest-places, local-removals, and affordable-move topics.",
          "Structured every guide for clarity and relevance to lift click-through.",
          "Each move mapped to what the updates favoured: first-party data, differentiation, and depth.",
        ],
      },
      {
        h: "Results",
        paras: [
          "Across the March to May window, the content segment grew while the wider site was still absorbing the updates.",
        ],
        list: [
          "Blog clicks up 39% between 31 March and 29 May.",
          "Blog click-through up 38.9%, from 0.58% to 0.806%, driven by content relevance.",
          "“Safest places to live in UK” grew from 228 to 1,540 clicks — an increase of 575%.",
          "Local removals guides up 1,210% collectively.",
          "The segment grew 39% during the same period.",
        ],
        outro:
          "The wider trajectory then reversed. In June, following completion of the May core update on 2 June, sessions rose to 14,052 (up 8.2% month on month) and users rose to 11,089 (up 8.0%) — a 2026 high. Growth landing in the settle period straight after a core update is the signal that the content strategy put Pickfords on the correct side of it, rather than being reset by it.",
      },
      {
        h: "Why it worked",
        paras: [
          "The 2026 core updates rewarded original expertise and first-party data, and Pickfords had both: a brand-owned domain and proprietary move statistics. Rather than fighting to win back lost commercial rankings while the SERP was volatile, our content strategy team at MAAI built durable content assets the updates were designed to surface.",
          "The content segment held and grew through the disruption, and the wider account reversed once the update settled. Every claim ties to a specific published guide and specific click data, so the before-and-after is traceable rather than asserted.",
        ],
      },
    ],
  },
  "b2b-marketing": {
    name: "B2B marketing",
    tag: "B2B marketing",
    title: "MovePlus: driving sales through SEO & AEO optimisation",
    stats: [
      { v: "100%", l: "Leads via country blogs" },
      { v: "+81%", l: "Organic traffic, Feb to Jun" },
      { v: "+46.79%", l: "June users, MoM" },
    ],
    sections: [
      {
        h: "Context",
        paras: [
          "MovePlus provides end-to-end corporate relocation and mobility services to companies worldwide, powered by its own technology and personalised support for employees on the move. It sells a high-ticket B2B offering in a competitive category where established brands hold the search visibility. The task was to grow organic presence and turn it into qualified sales pipelines through content built for how these buyers actually search and decide. Across February to June 2026, organic traffic grew and answer-optimised content produced qualified leads that traced directly to the pages that earned them.",
        ],
      },
      {
        h: "Challenge",
        paras: [
          "B2B marketing has evolved and today, 94% of buying groups use Large Language Models (LLMs) like ChatGPT or Gemini before talking to sales.",
        ],
        list: [
          "The category is competitive, and established brands hold the search visibility, so the content has to earn attention by answering buyer questions better than what already ranks.",
          "A high-ticket sale runs through many touchpoints rather than a single straight line, so the brand has to be found and trusted across both classic search and answer engines. That makes SEO and AEO both necessary.",
          "The decision is shaped by a group, so the content strategy has to reach beyond the decision-maker to everyone who influences the call.",
        ],
      },
      {
        h: "Approach",
        paras: [
          "MAAI built the programme around how high-ticket B2B decisions are actually made. These purchases are rarely one person's call. They are a group process, shaped by collective confidence, brand familiarity, and internal consensus across a buying committee. So the work reached wider than the decision-maker.",
        ],
        list: [
          "Targeted decision-makers with buyer-intent, answer-optimised content built to surface as the answer in search and AI answer engines.",
          "Built familiarity with the wider circle who shape and are affected by the decision — the employees who would actually move and their families. Reaching them early meant the brand was already known when the buying group formed its view.",
          "Published answer-optimised, country-specific blog posts targeting the exact questions these buyers ask, so each post could both rank and be cited as the answer.",
        ],
      },
      {
        h: "Results",
        paras: [
          "Answer-optimised content grew organic traffic and produced directly attributable qualified business.",
        ],
        list: [
          "100% of MovePlus's qualified leads came directly through specific country blog posts.",
          "Organic traffic grew 81% from February to June, and peaked 132% above the February level in May (SEMrush).",
          "June was the strongest month of the period, with users up 46.79% and sessions up 32.08% month on month.",
        ],
        outro:
          "For a high-ticket B2B brand, turning content into organic growth and directly attributable qualified leads is the result that matters.",
      },
      {
        h: "Why it worked",
        paras: [
          "High-ticket B2B decisions are made by a group, and they favour the brand that already feels familiar when the committee forms its view. MAAI built that familiarity across the whole circle — from decision-makers to the employees and families the move affects — and pointed answer-optimised content at the questions these buyers ask. Organic traffic grew through the period, and the qualified leads that followed trace directly to specific pages, which is rare in organic search.",
        ],
      },
    ],
  },
  "backlinks-referral": {
    name: "Backlinks & referral",
    tag: "Backlinks & referral",
    title: "How relevance-first backlinks grew referral traffic 118% for a niche B2B surgical brand",
    stats: [
      { v: "+118%", l: "Referral traffic, YoY" },
      { v: "+117%", l: "Net-new users" },
      { v: "#1", l: "Core term held" },
    ],
    sections: [
      {
        h: "Context",
        paras: [
          "Shira Medtech is a niche B2B manufacturer of surgical instruments selling on Shopify. Its core commercial term, “microsurgical clamp,” already ranked number one, so category search visibility was strong. The growth question was different: reaching B2B buyers who do not begin on Google, and earning the kind of relevant links that put the brand in front of surgeons, procurement, and distributors directly. Across 2025 the account grew total users about 14% year on year, and the gains concentrated in the link-driven channels rather than in search, which held roughly flat.",
        ],
      },
      {
        h: "Challenge",
        paras: [
          "In B2B surgical procurement, buyers rarely start with a search engine. Surgeons, procurement teams, and distributors buy from the brands they already know and trust.",
        ],
        list: [
          "The decision is awareness-led. Demand is built long before a purchase is made, and when the need arises the buyer returns to the brand already in mind. The brand has to be known first.",
          "Shira already ranked number one on its core term, so search visibility was not the gap. Being present in the places where these buyers built that familiarity was.",
          "That presence had to be earned with a narrow surgical audience, through relevant and credible sources rather than broad-reach link volume.",
        ],
      },
      {
        h: "Approach",
        paras: [
          "MAAI built for earned, relevant links rather than volume. The work centred on B2B content published where the buyers already were, so credible sites and professionals would pick it up and link back.",
        ],
        list: [
          "Published thought-leadership articles on LinkedIn aimed at the surgical and procurement audience, to seed visibility with the people who cite and share.",
          "Added FAQ schema across product and content pages to strengthen how those pages were understood and surfaced.",
          "Prioritised placements by audience relevance and buyer proximity over domain authority, so links came from sources the target buyers actually read.",
        ],
      },
      {
        h: "Results",
        paras: ["The link-driven channels grew sharply while overall search held flat."],
        list: [
          "Referral traffic — LinkedIn and other referring sites combined — grew the user base to 118%.",
          "Visitors from other referring sites engaged longer, an average of 29 seconds against 16 the year before — a sign the links sent qualified traffic rather than incidental clicks.",
          "Event count across the link-driven channels rose by 137%.",
          "Against the whole account, new users grew 14.3% year on year.",
          "Through the same period Shira held number one on “microsurgical clamp,” so the brand grew its off-search demand while defending the commercial term it already owned.",
        ],
      },
      {
        h: "Why it worked",
        paras: [
          "For a narrow B2B brand, the value of a link is who it reaches. By publishing where surgeons, procurement, and distributors already spend time, and earning links from relevant sources, Shira more than doubled its link-driven referral traffic and brought in an almost entirely new audience, while its category ranking stayed at number one.",
          "The right backlink strategy does more than add to Domain Authority — it brings the right visibility to the brand, the kind that adds to sales.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: "Case studies — MAAI" };
  return {
    title: `${c.title || c.name} — Case study — MAAI`,
    description: c.blurb || c.sections?.[0]?.paras?.[0]?.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  const full = Array.isArray(c.sections);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="ind-hero cs-hero">
        <div className="wrap">
          <p className="eyebrow">Case study · {c.tag}</p>
          <h1>{full ? c.title : <span className="mark">{c.name}</span>}</h1>
          {!full && <p className="lede">{c.blurb}</p>}

          {full && (
            <div className="cs-stats">
              {c.stats.map((s) => (
                <div className="cs-stat" key={s.l}>
                  <div className="cs-stat-v">{s.v}</div>
                  <div className="cs-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          )}

          {!full && (
            <div className="ind-actions">
              <a className="btn amber" href="/#contact">Book a strategy call</a>
              <a className="cta-link" href="/#values">← All case studies</a>
            </div>
          )}
        </div>
      </main>

      {full && (
        <article className="cs-article">
          <div className="wrap cs-article-inner">
            {c.sections.map((sec) => (
              <section className="cs-sec" key={sec.h}>
                <h2>{sec.h}</h2>
                {sec.paras?.map((p, i) => <p key={i}>{p}</p>)}
                {sec.list && (
                  <ul className="cs-list">
                    {sec.list.map((li, i) => <li key={i}>{li}</li>)}
                  </ul>
                )}
                {sec.outro && <p className="cs-outro">{sec.outro}</p>}
              </section>
            ))}

            <div className="cs-article-cta">
              <a className="btn amber" href="/#contact">Book a strategy call</a>
              <a className="cta-link" href="/#values">← All case studies</a>
            </div>
          </div>
        </article>
      )}

      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
