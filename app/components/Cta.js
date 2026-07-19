import Typewriter from "./Typewriter";
import LightButton from "./LightButton";
import SignalFlow from "./SignalFlow";

export default function Cta() {
  return (
    <section className="cta-final" id="contact">
      <SignalFlow className="signalflow-cta" lines={6} speed={1} reactivity={1.15} glow={1.25} />
      <div className="wrap cta-inner">
        <p className="kicker reveal">Ready when you are</p>
        <h2 className="reveal">
          Be the answer in<br />
          <Typewriter
            className="cta-tw"
            words={["Google", "ChatGPT", "Perplexity", "AI Overviews", "every answer"]}
          />
        </h2>
        <p className="lede reveal">
          A 30-minute strategy call. We&apos;ll show you exactly where you stand across
          Google and the answer engines today — and what compounding from here looks like.
        </p>
        <div className="cta-final-actions reveal">
          <LightButton href="mailto:hello@maai.agency">
            Book a strategy call
          </LightButton>
        </div>
        <p className="cta-alt reveal">
          Not ready to talk yet? <a href="/fit-check">Take the 60-second fit check</a> — one honest answer, no pitch.
        </p>
      </div>
    </section>
  );
}
