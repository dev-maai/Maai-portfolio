/* Section 2 · Tagline — the payoff to the video. Fixed copy, carries alone.
   Deliberately NOT a heading (not h1/h2): a display statement in Sora. Shares the
   hero's dark stage so banner-into-tagline reads as one continuous movement. */
export default function Tagline() {
  return (
    <section className="tagline-band stage-dark" aria-label="Tagline">
      <div className="wrap">
        <p className="tagline">Organic Growth. Compounded.</p>
      </div>
    </section>
  );
}
