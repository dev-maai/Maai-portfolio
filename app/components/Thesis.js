import SignalFlow from "./SignalFlow";
import ValuePillars from "./ValuePillars";

/* Where we create value — the five pillars on the dark evergreen ground, with the
   drifting signal-lines background. (Replaced the era timeline.) */
export default function Thesis() {
  return (
    <section className="thesis-tl" id="thesis" aria-label="Where we create value">
      <SignalFlow className="signalflow-sec" lines={4} speed={0.85} reactivity={0.9} glow={0.9} alpha={0.5} />
      <div className="wrap thesis-tl-head">
        <h2 className="reveal">Where We Create <span className="mark">Value</span></h2>
        <p className="lede reveal">
          We help logistics, supply chain, moving, self-storage, industrial and B2B
          service companies strengthen their visibility across search, combining
          strategic content, technical depth and Answer Engine Optimisation into
          organic growth that compounds.
        </p>
      </div>

      <ValuePillars />
    </section>
  );
}
