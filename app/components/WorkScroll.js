import { LedgerMark } from "./Brand";

export default function WorkScroll() {
  return (
    <>
      <section className="work-scroll two-up" id="selected-work" aria-label="Client receipts">
        <div className="work-sticky">
          <div className="work-head">
            <div>
              <p className="eyebrow">03 / Receipts</p>
              <h2>The receipts.</h2>
            </div>
            <div className="work-head-right">
              <LedgerMark className="work-head-mark" />
              <p className="sub">Two clients. Real numbers. No omitted context.</p>
              <a className="cta-link" href="#contact">Get results like these <span aria-hidden="true">→</span></a>
              <span className="hint">Scroll ↓ to move →</span>
            </div>
          </div>
          <div className="work-track">
            <div className="work-panel">
              {/* PLACEHOLDER image — swap for real Anglo Pacific creative */}
              <div className="case c-slate four-up">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1100&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">01</span>
                <div className="brandmark">A</div>
                <div className="case-body">
                  <span className="tag">Global moving &amp; logistics · June 2025 → June 2026</span>
                  <h3>Anglo Pacific World Movers</h3>
                  <p>Anglo Pacific came to us with organic traffic that was not scaling. We rewrote titles and meta descriptions across priority pages, added comparison tables and transit time data across destination pages, and structured the FAQ blocks for AI citation.</p>
                  <p>After stripping out normal seasonal patterns, 93 percentage points of user growth sit above the baseline. AI Visibility climbing from 22 to 26 across five months.</p>
                  <div className="ledger-label"><i aria-hidden="true"></i>Ledger — receipts filed</div>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 62.9%</div><div className="l">Users, YoY</div></div>
                    <div className="m"><div className="n"><b>▲</b> 35.0%</div><div className="l">Sessions, YoY</div></div>
                    <div className="m"><div className="n"><b>▲</b> 21.1%</div><div className="l">Organic traffic, MoM</div></div>
                    <div className="m"><div className="n">22 → 26</div><div className="l">AI Visibility, 5 months</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-panel">
              {/* PLACEHOLDER image — swap for real Pickfords creative */}
              <div className="case c-clay four-up">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">02</span>
                <div className="brandmark">P</div>
                <div className="case-body">
                  <span className="tag">UK removals · March 2026 → May 2026</span>
                  <h3>Pickfords</h3>
                  <p>When Google&rsquo;s 2026 core updates prioritised original expertise and first-party sources, we had already built Pickfords&rsquo; content strategy around exactly that. Original data. Local specificity. FAQ schema across every priority page.</p>
                  <p>The keyword growth reflects a strategy aligned with where Google was moving. Priority pages held their position through the March and May core updates while the wider category churned.</p>
                  <div className="ledger-label"><i aria-hidden="true"></i>Ledger — receipts filed</div>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 575%</div><div className="l">Top priority keyword</div></div>
                    <div className="m"><div className="n"><b>▲</b> 1,210%</div><div className="l">Local removals guides</div></div>
                    <div className="m"><div className="n"><b>▲</b> 3,500%</div><div className="l">&ldquo;Affordable house move near me&rdquo;</div></div>
                    <div className="m"><div className="n"><b>▲</b> 38.9%</div><div className="l">CTR, priority pages</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="work-progress"></div>
        </div>
      </section>
    </>
  );
}
