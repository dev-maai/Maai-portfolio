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
          {/* every magenta effect must be switched off explicitly — the component
              defaults them all to true, so omitting the prop leaves it ON. */}
          <MagicBento
            enableStars={false}
            enableSpotlight={false}
            enableBorderGlow={false}
            clickEffect={false}
            enableMagnetism={false}
          />
        </div>
      </div>
    </section>
  );
}
