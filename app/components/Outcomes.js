import MagicBento from "./MagicBento";

/* "What the work produces" — the deliverables shown as an interactive bento
   (React Bits MagicBento, themed to MAAI and populated with our outcomes + imagery).
   The card content lives inside MagicBento's cardData. */
export default function Outcomes() {
  return (
    <section className="outcomes" id="outcomes">
      <div className="wrap">
        <p className="eyebrow reveal">What the work produces</p>
        <h2 className="reveal">The deliverable is named. The result leads.</h2>
        <div className="outcomes-bento reveal">
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            spotlightRadius={320}
            particleCount={12}
            glowColor="230, 46, 107"
          />
        </div>
        <div className="outcomes-cta reveal">
          <a className="btn contrast" href="#contact">Put these outcomes to work</a>
          <a className="cta-link" href="#selected-work">See the receipts <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
