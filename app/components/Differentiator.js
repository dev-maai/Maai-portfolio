import Pending from "./Pending";

/* Section 4 · Differentiator — the page's spine: proves accountability rather than
   claiming it. Carries the ONE audited figure (Space Mono, source visible) and the
   ONE Fraunces italic line for the entire homepage. Framed affirmatively — no
   comparison to other agencies. */
export default function Differentiator() {
  return (
    <section className="diff" id="accountability">
      <span className="sec-glow g-coral" aria-hidden="true" style={{ right: "-120px", top: "-110px" }}></span>
      <div className="wrap diff-grid">
        <div>
          <p className="eyebrow reveal">Our differentiator</p>
          {/* OPEN #4: differentiator headline — carries the weight of the whole page (Kriti) */}
          <h2 className="is-pending reveal">Differentiator headline pending · open&nbsp;#4 · Kriti</h2>
          {/* Body: accountability as practice — work reported, growth reported,
              failures reported with the mitigation path, and telling prospects when
              SEO is the wrong move. Exact copy OPEN #8. */}
          <div className="reveal" style={{ marginTop: "20px", maxWidth: "60ch" }}>
            <Pending block item={8} label="Accountability body pending" lines={4} />
          </div>

          {/* The page's single Fraunces line — the one sentence a machine could not
              have written. Allocated here and nowhere else. OPEN #6. */}
          <p className="diff-fraunces reveal">
            <span className="serif-voice is-pending-serif">The one Fraunces line — pending · open&nbsp;#6 · Kriti</span>
          </p>
        </div>

        {/* One audited figure — Space Mono, with its source visible next to it.
            A number without a source breaks the promise. Figure + source OPEN #5. */}
        <figure className="diff-figure reveal" aria-label="Audited figure, pending">
          <div className="df-head"><span>Audited result</span><span className="df-cleared">Pending clearance</span></div>
          <div className="df-num is-pending">▲ figure · open&nbsp;#5</div>
          <figcaption className="df-source">Source: pending · open&nbsp;#5 · Kriti</figcaption>
        </figure>
      </div>
    </section>
  );
}
