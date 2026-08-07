/* AboutSections — more of the same feel below the kinetic hero: a "how we work"
   row of tilted hover-reveal cards (reusing .kh-card), then the South-Africa
   education giving-back band. */
const WORK = [
  { k: "01 · Diagnose", h: "We find where you're invisible", p: "A full audit across classic search and the answer engines — where you win, where you leak, and who owns the questions your buyers actually ask. You get a dated plan before we touch a thing." },
  { k: "02 · Build", h: "We build the pages that answer", p: "We rebuild your priority content around real buyer intent, ship the technical fixes underneath, and structure everything so Google and the AI assistants can read, trust and quote it." },
  { k: "03 · Compound", h: "We earn the authority engines cite", p: "Digital PR, entity signals and the links that make your brand a source rather than a result — so the positions you take hold, and keep returning quarter after quarter." },
];

const FUNDS = [
  { t: "Books & libraries", d: "Stocked classroom libraries and take-home books, so a child has something to read at school and at home.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5z" /><path d="M4 4.5A2.5 2.5 0 0 0 6.5 7H20" /></svg>) },
  { t: "Structured reading programmes", d: "Evidence-based literacy sessions and trained facilitators in the classrooms that need them most.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6s2-1 5-1 5 1.6 5 1.6S13.5 5 17 5s5 1 5 1v13s-2-1-5-1-5 1.6-5 1.6S10 17 7 17s-5 1-5 1z" /><path d="M12 6.6V19.6" /></svg>) },
  { t: "Supplies & bursaries", d: "Pens, paper and the small costs that quietly keep a bright kid from finishing the school year.", icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="M21 8v5" /><path d="M6 10.5V15c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" /></svg>) },
];

export default function AboutSections() {
  return (
    <>
      {/* ── how we work ── */}
      <section className="km">
        <div className="wrap">
          <div className="km-head">
            <span className="km-eyebrow reveal">How we work</span>
            <h2 className="reveal">A dated plan, run by the people who own the number.</h2>
          </div>
          <div className="km-grid">
            {WORK.map((c, i) => (
              <div className={`km-slot km-slot--${(i % 3) + 1} reveal`} key={c.h}>
                <div className="kh-card" tabIndex={0}>
                  <span className="kh-k">{c.k}</span>
                  <span className="kh-h">{c.h}</span>
                  <span className="kh-reveal"><span className="kh-p">{c.p}</span></span>
                  <span className="kh-plus" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── giving back ── */}
      <section className="kg" id="giving">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ left: "-180px", bottom: "-160px" }}></span>
        <div className="wrap kg-grid">
          <div className="kg-copy">
            <span className="km-eyebrow reveal">Beyond the work</span>
            <h2 className="reveal">A share of everything we earn goes to <em>educating children in South&nbsp;Africa.</em></h2>
            <p className="lede reveal">
              Nearly eight in ten South African children can't yet read for meaning by the age of ten — not for any lack of ability, but for a lack of books, libraries and trained teachers. We think a business built to compound value should compound it for more than its clients. So a fixed share of our profit funds the one skill everything else is built on: reading.
            </p>
            <ul className="kg-funds">
              {FUNDS.map((f) => (
                <li className="kg-fund reveal" key={f.t}>
                  <span className="kg-fund-ic" aria-hidden="true">{f.icon}</span>
                  <div><h3>{f.t}</h3><p>{f.d}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="kg-pledge reveal">
            <div className="kg-pledge-top">
              <span className="kg-pledge-num">5%</span>
              <span className="kg-pledge-cap">of profit, every year</span>
            </div>
            <p className="kg-pledge-body">Directed to reading and learning for kids in under-resourced South African schools — books in classrooms, stocked libraries, and structured reading programmes.</p>
            <div className="kg-pledge-stat">
              <b>8 in 10</b>
              <span>children can't yet read for meaning by age 10 — we're helping change that.</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
