import RotatingText from "./RotatingText";

export default function Benefits() {
  return (
    <>
      <section className="benefits has-ghost">
        <span className="ghost-text gt2" aria-hidden="true" style={{ bottom: "-8%", right: "-4%" }}>SIGNAL</span>
        <div className="wrap">
          <div className="benefits-head">
            <p className="eyebrow reveal">Why teams switch to us</p>
            <h2 className="reveal">More signal.<br /><span className="sw-line">Less <RotatingText words={["spend.", "waste.", "noise.", "guesswork."]} /></span></h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit reveal">
              <span className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c3-5 6-5 9 0s6 5 9 0" /><path d="M3 17c3-5 6-5 9 0s6 5 9 0" /></svg></span>
              <h3>More breakthroughs</h3>
              <p>We build presence where buyers actually ask — classic search and answer engines alike — so every asset keeps compounding long after it ships.</p>
            </div>
            <div className="benefit reveal">
              <span className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20 20 4" /><path d="M9 7 4 4 7 9" /><path d="M15 17l5 3-3-5" /></svg></span>
              <h3>Less waste</h3>
              <p>No rented traffic, no vanity spikes. Budget flows to owned answers that keep working — not an ad auction you have to keep feeding.</p>
            </div>
            <div className="benefit reveal">
              <span className="pico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /><path d="m9 12 2 2 4-4" /></svg></span>
              <h3>Full accountability</h3>
              <p>A live report of everything we did, what it produced, and where we fell short — with the fix already attached. You never chase us for status.</p>
            </div>
          </div>
          <div className="cta-row reveal">
            <a className="cta-link" href="/fit-check">See if organic is right for you <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
