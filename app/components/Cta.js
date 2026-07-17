export default function Cta() {
  return (
    <>
      <section className="cta has-ghost" id="contact">
        <span className="ghost-text gt-center" aria-hidden="true" style={{ top: "50%", left: "50%" }}>MAAI</span>
        <div className="wrap">
          <p className="eyebrow reveal">Ready when you are</p>
          <h2 className="reveal">Be the answer your customers <em>find first.</em></h2>
          <p className="reveal">A 30-minute strategy call. We'll show you where you stand across Google and LLMs today — and what compounding from here looks like.</p>
          <a className="btn reveal" href="mailto:hello@maai.agency">Book a strategy call</a>
        </div>
      </section>
    </>
  );
}
