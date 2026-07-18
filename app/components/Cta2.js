import Pending from "./Pending";

/* Section 6 · CTA 2 — the page's primary conversion, at peak intent. Everlab-style:
   one centred statement, generous space, a single dark pill button, nothing else.
   Outranks CTA 1 and the final block visually. The button names what the audit
   examines — AI is never used as a badge. Statement + label OPEN #8/#9 (Kriti). */
export default function Cta2() {
  return (
    <section className="cta2" id="audit">
      <div className="wrap cta2-inner">
        {/* OPEN #8: the large centred statement (Kriti) */}
        <div className="cta2-statement reveal">
          <Pending block item={8} label="Primary CTA statement pending" lines={2} />
        </div>
        {/* Single dark pill. Exact label OPEN #9. */}
        <div className="cta2-action reveal">
          <a className="btn cta2-btn" href="#contact">Get your SEO audit</a>
          <span className="pending-tag">button label · open #9 · Kriti</span>
        </div>
      </div>
    </section>
  );
}
