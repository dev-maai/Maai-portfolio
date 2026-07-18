import { Fragment } from "react";

/* Breather between 01 and 02 — same mechanism as MarqueeSection, but outlined
   type running the other way so the two bands don't read as a repeat.
   See MarqueeSection for why the phrase repeats this many times. */
const PHRASE = "The work is doing the work";
const PER_HALF = 4;

const track = Array.from({ length: PER_HALF * 2 }, () => PHRASE);

export default function Interlude() {
  return (
    <>
      <section className="marquee-section statements alt" aria-label="The work is doing the work">
        <div className="marquee">
          {track.map((line, i) => (
            <Fragment key={i}>
              <span className="statement outline">{line}</span>
              <i className="mdot" aria-hidden="true"></i>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
