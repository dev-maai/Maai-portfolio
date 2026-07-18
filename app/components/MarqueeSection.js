import { Fragment } from "react";

/* `@keyframes scroll` translates -50%, so the track is two identical halves and
   the seam lands mid-loop. A half narrower than the viewport leaves a visible
   gap at the wrap, so the pair repeats until one half out-widths any realistic
   screen. Duration is set in CSS to match the extra travel. */
const PAIR = ["Hyperfixated on organic growth.", "Platforms change. That does not."];
const PER_HALF = 2;

const half = Array.from({ length: PER_HALF }, () => PAIR).flat();
const track = [...half, ...half];

export default function MarqueeSection() {
  return (
    <>
      <section className="marquee-section statements" id="work" aria-label="Positioning">
        <div className="marquee">
          {track.map((line, i) => (
            <Fragment key={i}>
              <span className={`statement${i % 2 ? " muted" : ""}`}>{line}</span>
              <i className="mdot" aria-hidden="true"></i>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
