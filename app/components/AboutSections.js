/* AboutSections — more of the same feel below the kinetic hero: a "how we work"
   row of tilted hover-reveal cards (reusing .kh-card), then the South-Africa
   education giving-back band. */
const WORK = [
  { k: "01 · Diagnose", h: "We find where you're invisible", p: "A full audit across classic search and the answer engines — where you win, where you leak, and who owns the questions your buyers actually ask. You get a dated plan before we touch a thing." },
  { k: "02 · Build", h: "We build the pages that answer", p: "We rebuild your priority content around real buyer intent, ship the technical fixes underneath, and structure everything so Google and the AI assistants can read, trust and quote it." },
  { k: "03 · Compound", h: "We earn the authority engines cite", p: "Digital PR, entity signals and the links that make your brand a source rather than a result — so the positions you take hold, and keep returning quarter after quarter." },
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

      {/* ── giving back — simple image-backed statement ── */}
      <section className="kg" id="giving">
        <div className="kg-bg" aria-hidden="true"></div>
        <div className="wrap kg-inner">
          <span></span>
          <h2 className="reveal">
            A part of everything we earn goes to <em>educating children in South&nbsp;Africa.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
