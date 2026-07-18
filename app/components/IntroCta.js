import Pending from "./Pending";

/* Section 3 · Intro + CTA 1 — who MAAI is, who it's for, and the low-stakes ask.
   First body copy a crawler reaches. Body is Inter; CTA 1 is the soft version of
   the ask (fit-check angle), styled below CTA 2 in the hierarchy. */
export default function IntroCta() {
  return (
    <section className="intro-cta" id="about">
      <div className="wrap">
        <p className="eyebrow reveal">Who we are</p>
        {/* OPEN #4-adjacent: section heading (Kriti) */}
        <h2 className="is-pending reveal">Section heading pending · Kriti</h2>
        {/* OPEN #8: intro body, 3–5 lines, direct "you" address, states who MAAI serves.
            OPEN #3: whether the climate / humanitarian / women-led preference sits here. */}
        <div className="reveal" style={{ marginTop: "22px", maxWidth: "62ch" }}>
          <Pending block item={8} label="Intro body pending" lines={4} />
        </div>
        {/* CTA 1 · soft ask, built on the fit-check angle. Exact label OPEN #8. */}
        <div className="intro-cta-row reveal">
          <a className="cta-link" href="#audit">
            See if SEO is right for your business
            <span aria-hidden="true">→</span>
          </a>
          <span className="pending-tag">CTA 1 label · open #8 · Kriti</span>
        </div>
      </div>
    </section>
  );
}
