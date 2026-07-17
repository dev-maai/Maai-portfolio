export default function Fit() {
  return (
    <>
      <section className="fit" id="fit-check">
        <span className="sec-glow g-coral" aria-hidden="true" style={{ left: "-140px", top: "-120px" }}></span>
        <div className="wrap">
          <div className="fit-inner">
            <span className="pill reveal"><i></i>Recommended first step</span>
            <h2 className="reveal">Not sure if SEO is the right fit for you?<br /><em>Take the 60-second fit check.</em></h2>
            <p className="fit-lede reveal">Four quick questions. We'll tell you honestly whether organic is worth it for your business — what it would take, and when you'd see it. If it isn't a fit, we'll say so.</p>
      
            <form className="fit-form reveal" id="fitForm" noValidate>
              <div className="fit-grid">
                <label className="field sel">
                  <span>Company size</span>
                  <select name="size" required>
                    <option value="">Select…</option>
                    <option>1–10 employees</option>
                    <option>11–50 employees</option>
                    <option>51–200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </label>
                <label className="field sel">
                  <span>Monthly organic traffic</span>
                  <select name="traffic" required>
                    <option value="">Select…</option>
                    <option>Under 1,000</option>
                    <option>1,000 – 10,000</option>
                    <option>10,000 – 100,000</option>
                    <option>100,000+</option>
                  </select>
                </label>
                <label className="field sel">
                  <span>What matters most right now</span>
                  <select name="goal" required>
                    <option value="">Select…</option>
                    <option>More qualified pipeline</option>
                    <option>Getting cited in AI answers</option>
                    <option>Reducing paid ad spend</option>
                    <option>Recovering lost rankings</option>
                  </select>
                </label>
                <label className="field">
                  <span>Work email</span>
                  <input type="email" name="email" placeholder="you@company.com" required />
                </label>
              </div>
              <button className="btn amber fit-submit" type="submit">Get my free fit report <i>&rarr;</i></button>
              <p className="fit-alt">Or <a href="#contact">book a free discovery call</a></p>
              <p className="fit-note">No pitch deck. No sales sequence. One honest answer.</p>
            </form>
      
            <div className="fit-done" id="fitDone" hidden>
              <div className="ic">&check;</div>
              <h3>Thanks — your fit check is on its way.</h3>
              <p>We'll send a short, honest assessment within one business day. If organic isn't right for you, we'll tell you that too.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
