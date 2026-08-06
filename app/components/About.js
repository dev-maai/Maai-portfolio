import WhyCards from "./WhyCards";

/* The four beliefs, phrased for the About page (reuses the light SpotlightCard
   grid the home page already uses, so the visual language stays consistent). */
const VALUES = [
  { n: "01", h: "We go deep, not wide", p: "We commit to a handful of sectors so we already understand how your buyers search — and move faster than any generalist could." },
  { n: "02", h: "Search as engineering", p: "Every recommendation traces back to a data source. No opinions dressed up as strategy, and no work you can't audit." },
  { n: "03", h: "Reported in the open", p: "The positions that moved and the ones that didn't — every month. You always know exactly what your investment is doing." },
  { n: "04", h: "Built to compound", p: "We build assets that hold and grow across years, so the visibility you earn this quarter keeps returning in the next." },
];

/* What the education pledge funds. */
const FUNDS = [
  {
    t: "Books & libraries",
    d: "Stocked classroom libraries and take-home books, so a child has something to read at school and at home.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z" /><path d="M4 4.5A2.5 2.5 0 0 0 6.5 7H20" /></svg>),
  },
  {
    t: "Structured reading programmes",
    d: "Evidence-based literacy sessions and trained facilitators in the classrooms that need them most.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6s2-1 5-1 5 1.6 5 1.6S13.5 5 17 5s5 1 5 1v13s-2-1-5-1-5 1.6-5 1.6S10 17 7 17s-5 1-5 1z" /><path d="M12 6.6V19.6" /></svg>),
  },
  {
    t: "Supplies & bursaries",
    d: "Pens, paper and the small costs that quietly keep a bright kid from finishing the school year.",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M21 8v5" /><path d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" /></svg>),
  },
];

export default function About() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="ab-hero">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ right: "-160px", top: "-120px" }}></span>
        <div className="wrap">
          <span className="ab-eyebrow reveal">About MAAI</span>
          <h1 className="ab-hero-h reveal">
            We build organic visibility that <em>compounds</em> — and we share what it earns.
          </h1>
          <p className="lede ab-hero-lede reveal">
            MAAI is a specialist organic-search agency. We help a focused set of sectors become
            the answer their buyers find — on Google and in the AI assistants that now shape every
            shortlist — run by senior people who put their names to the number.
          </p>
          <div className="ab-hero-stats reveal">
            <div className="ab-stat"><b>5</b><span>sectors we go deep on</span></div>
            <div className="ab-stat"><b>100%</b><span>of results reported monthly</span></div>
            <div className="ab-stat"><b>4&times;</b><span>growth in AI-answer citations</span></div>
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="ab-story">
        <div className="wrap ab-story-grid">
          <div className="ab-story-aside">
            <span className="ab-eyebrow reveal">Why we exist</span>
            <h2 className="reveal">Organic is the last channel you truly own.</h2>
          </div>
          <div className="ab-story-body">
            <p className="reveal">
              Paid stops the moment you stop paying. Social borrows someone else's audience on
              someone else's terms. But a position you've <em>earned</em> — in Google, and now in the
              AI answers buyers trust — keeps working while you sleep, and grows more valuable every
              quarter it holds.
            </p>
            <p className="reveal">
              We built MAAI to win that ground for companies who take the long view. No juniors
              learning on your account, no vanity dashboards, no work you can't trace to a reason.
              Just senior specialists who treat search as engineering and own the outcome they
              promised.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="ab-values">
        <div className="wrap">
          <div className="ab-sec-head">
            <span className="ab-eyebrow reveal">What we believe</span>
            <h2 className="reveal">Four principles behind every engagement.</h2>
          </div>
          <WhyCards items={VALUES} />
        </div>
      </section>

      {/* ── GIVING BACK ──────────────────────────────────────── */}
      <section className="ab-give" id="giving">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ left: "-180px", bottom: "-160px" }}></span>
        <div className="wrap ab-give-grid">
          <div className="ab-give-copy">
            <span className="ab-eyebrow reveal">Beyond the work</span>
            <h2 className="reveal">
              A share of everything we earn goes to <em>educating children in South&nbsp;Africa.</em>
            </h2>
            <p className="lede reveal">
              Nearly eight in ten South African children can't yet read for meaning by the age of
              ten — not for any lack of ability, but for a lack of books, libraries and trained
              teachers. We think a business built to compound value should compound it for more than
              its clients. So a fixed share of our profit funds the one skill everything else is
              built on: reading.
            </p>
            <ul className="ab-funds">
              {FUNDS.map((f) => (
                <li className="ab-fund reveal" key={f.t}>
                  <span className="ab-fund-ic" aria-hidden="true">{f.icon}</span>
                  <div>
                    <h3>{f.t}</h3>
                    <p>{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="ab-pledge reveal">
            <div className="ab-pledge-top">
              <span className="ab-pledge-num">5%</span>
              <span className="ab-pledge-cap">of profit, every year</span>
            </div>
            <p className="ab-pledge-body">
              Directed to reading and learning for kids in under-resourced South African schools —
              books in classrooms, stocked libraries, and structured reading programmes.
            </p>
            <div className="ab-pledge-stat">
              <b>8 in 10</b>
              <span>children can't yet read for meaning by age 10 — we're helping change that.</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
