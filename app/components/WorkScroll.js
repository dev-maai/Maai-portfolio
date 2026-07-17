export default function WorkScroll() {
  return (
    <>
      <section className="work-scroll" id="selected-work" aria-label="Selected case studies">
        <div className="work-sticky">
          <div className="work-head">
            <p className="eyebrow">Selected work</p>
            <span className="hint">Scroll ↓ to move →</span>
          </div>
          <div className="work-track">
            {/* PLACEHOLDER case studies — swap in real clients, metrics, links */}
            <div className="work-panel">
              <div className="case c-clay">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">01</span>
                <div className="brandmark">V</div>
                <div className="case-body">
                  <span className="tag">Climate · SaaS</span>
                  <h3>Verdant Co</h3>
                  <p>Rebuilt content architecture around buyer questions instead of keywords. Twelve months later, organic is their largest pipeline source.</p>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 212%</div><div className="l">Organic sessions</div></div>
                    <div className="m"><div className="n"><b>▲</b> 4.1×</div><div className="l">LLM citations</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-panel">
              <div className="case c-slate">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">02</span>
                <div className="brandmark">A</div>
                <div className="case-body">
                  <span className="tag">B2B · Logistics</span>
                  <h3>Atlas Group</h3>
                  <p>Shifted budget from bought leads to owned answers. Entity authority and digital PR made them the cited source in their category.</p>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 27%</div><div className="l">Pipeline from organic</div></div>
                    <div className="m"><div className="n"><b>▼</b> 38%</div><div className="l">Paid dependency</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-panel">
              <div className="case c-bronze">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">03</span>
                <div className="brandmark">H</div>
                <div className="case-body">
                  <span className="tag">Humanitarian · Health</span>
                  <h3>Halcyon Health</h3>
                  <p>A cluster underperformed in Q1. We reported it, rebuilt it around comparison intent, and re-measured — the fix outgrew the original goal.</p>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 96%</div><div className="l">Qualified organic leads</div></div>
                    <div className="m"><div className="n">100%</div><div className="l">Failures reported + fixed</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-panel">
              <div className="case c-indigo">
                <div className="case-media"><img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=900&q=72&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <span className="idx">04</span>
                <div className="brandmark">N</div>
                <div className="case-body">
                  <span className="tag">Enterprise · Fintech</span>
                  <h3>NorthPeak</h3>
                  <p>Optimized for answer engines before their competitors knew the term. Now the default citation in ChatGPT and AI Overviews for their category.</p>
                  <div className="metrics">
                    <div className="m"><div className="n"><b>▲</b> 3.2×</div><div className="l">AI Overview presence</div></div>
                    <div className="m"><div className="n"><b>▲</b> 41%</div><div className="l">Branded search demand</div></div>
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
