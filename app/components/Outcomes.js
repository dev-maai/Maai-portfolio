import MagicBento from "./MagicBento";

/* "Industries we lead" — the sectors we specialise in, as an interactive bento
   (React Bits MagicBento, themed to MAAI). Each card links to its industry page.
   Card content + links live in MagicBento's cardData. */
export default function Outcomes() {
  return (
    <section className="outcomes" id="outcomes">
      <div className="wrap">
        <h2 className="reveal">Industries we lead.</h2>
        <div className="outcomes-bento reveal">
          <MagicBento
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
      </div>
    </section>
  );
}
