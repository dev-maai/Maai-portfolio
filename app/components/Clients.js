/* Section 7 · Clients — third-party proof and the only route into case studies
   (case studies are deliberately absent from the nav). Phase two: slots ship built,
   content added on clearance. Logos need client permission (dep). Testimonials are
   verbatim, attributed, each card links to its case-study page (dep). MAAI's voice
   stays out of this section — the proof is the clients' words. */
export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="wrap">
        <p className="eyebrow reveal">Clients</p>
        <h2 className="is-pending reveal">Section heading pending · Kriti</h2>

        {/* Logo row — populate on permission clearance (open #10) */}
        <div className="logo-row reveal" aria-label="Client logos, pending permission">
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="logo-slot" key={i}><span className="pending-tag">logo · #10</span></div>
          ))}
        </div>

        {/* Testimonial slider — each card links to its case study (open #11).
            Cards added as testimonials are cleared. */}
        <div className="testi-row reveal">
          {Array.from({ length: 2 }).map((_, i) => (
            <a className="testi-slot" href="#" key={i} aria-label="Case study, pending">
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <div className="testi-body"><span className="pending-tag">testimonial · open #10 · Kriti</span></div>
              <div className="testi-foot"><span className="pending-tag">→ case study · open #11</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
