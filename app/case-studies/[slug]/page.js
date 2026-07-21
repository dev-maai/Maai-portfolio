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
    tag: "Removals",
    blurb:
      "How we rebuilt a heritage removals brand's organic presence — making Pickfords the answer buyers find across classic search and the answer engines.",
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
    tag: "Digital PR",
    blurb:
      "How editorial link-building and digital PR earned authority — and referral traffic — from the publications this brand's buyers already read and trust.",
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
