"use client";

/* The video fades in only once it can actually play, so the stage never
   shows a blank frame. In the source this was an inline oncanplay attribute,
   which React does not support. */
export default function HeroCine() {
  return (
    <>
      <section className="hero-cine" id="top" aria-label="Intro">
        <div className="hc-sticky">
          {/* ambient stage: dark radial + faint green data-stream animation
              (abstract analytics/code — on-theme for organic-search work) */}
          <div className="hc-bg" aria-hidden="true">
            <video
              className="hc-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={(e) => e.currentTarget.classList.add("ready")}
            >
              <source src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/3130284/3130284-sd_960_540_30fps.mp4" type="video/mp4" />
            </video>
            <div className="hc-veil"></div>
          </div>
      
          {/* giant ghost word anchored at the bottom (fades out on resolve) */}
          <div className="hc-ghost" aria-hidden="true">Organic&nbsp;<b>Growth</b></div>
      
          {/* SCENES: stream through the stage as you scroll */}
          <div className="hc-scenes">
            {/* 1 · floating answer / analytics cards */}
            <div className="hc-scene sc1">
              <div className="hc-cards">
                <div className="hc-card k1">
                  <div className="cardq">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                    which agency do fortune 500 teams trust?
                  </div>
                  <div className="carda">Top answer cites <b>your brand</b> — across Google, ChatGPT &amp; Perplexity.</div>
                </div>
                <div className="hc-card k2">
                  <div className="hc-live">Answer-engine visibility</div>
                  <div className="hc-num">47<b>%</b></div>
                  <div className="hc-bar"><i></i></div>
                </div>
                <div className="hc-card k3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Cited on ChatGPT
                </div>
              </div>
            </div>
      
            {/* 2 · work-thumbnail collage */}
            <div className="hc-scene sc2">
              {/* SEO-relevant imagery: analytics dashboards, ranking charts, search data.
                  Swap in real client screenshots / brand assets before launch. */}
              <div className="hc-collage">
                <div className="t"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=520&q=80&auto=format&fit=crop" alt="Analytics dashboard" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=520&q=80&auto=format&fit=crop" alt="Traffic analytics" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=520&q=80&auto=format&fit=crop" alt="Data report" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=520&q=80&auto=format&fit=crop" alt="Growth charts" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=520&q=80&auto=format&fit=crop" alt="Performance graph" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=520&q=80&auto=format&fit=crop" alt="Metrics on screen" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=520&q=80&auto=format&fit=crop" alt="Marketing data" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=520&q=80&auto=format&fit=crop" alt="Strategy session" loading="lazy" /></div>
              </div>
            </div>
      
            {/* 3 · tilted device mockup */}
            <div className="hc-scene sc3">
              <div className="hc-device">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=80&auto=format&fit=crop" alt="Search and traffic analytics dashboard" loading="lazy" />
              </div>
            </div>
      
            {/* 4 · big cycling client wordmarks */}
            <div className="hc-scene sc4">
              <div className="hc-words">
                <span>Meridian</span>
                <span>NorthPeak</span>
                <span>Atlas&nbsp;Group</span>
              </div>
            </div>
          </div>
      
          {/* RESOLVE: the real hero, revealed at the end of the scroll */}
          <div className="hc-resolve">
            <div className="wrap">
             <div className="hc-resolve-inner hero-split">
              <div className="hero-lead">
              <p className="kicker">SEO agency for global B2B</p>
              <h1>
                Organic growth.<br />
                <span className="hero-owned">Owned.</span>
              </h1>
              <p className="lede">
                We build the organic channel global B2B teams defend to the
                board — engineered for Google, AI answers, and everywhere your
                buyers ask.
              </p>
              <div className="hero-ctas">
                <a className="btn amber" href="#contact">Book a strategy call</a>
                <a className="btn ghost" href="#work">See how we work</a>
              </div>
              <p className="hero-micro">A working session, not a pitch — where your organic is stalling, and the first three moves.</p>
              </div>

              <div className="hero-aside">
      
              {/* SIGNATURE: morphing search / prompt bar */}
              <div className="searchbar" aria-hidden="true">
                <div className="searchbar-top">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
                  </svg>
                  <div className="query"><span id="typed"></span><span className="caret"></span></div>
                </div>
                <div className="searchbar-bottom">
                  <div className="platform-chips">
                    <span className="chip" data-p="0">Google</span>
                    <span className="chip" data-p="1">ChatGPT</span>
                    <span className="chip" data-p="2">Perplexity</span>
                    <span className="chip" data-p="3">AI Overviews</span>
                  </div>
                  <div className="answer">Top answer: <strong>your brand</strong></div>
                </div>
              </div>
      
              {/* real client proof — accountability made concrete, not a stock claim */}
              <div className="hero-proof">
                <div className="hp-stat"><b>▲&nbsp;62.9%</b><span>Organic users, YoY</span></div>
                <div className="hp-stat"><b>22&nbsp;→&nbsp;26</b><span>AI visibility, 5&nbsp;mo</span></div>
                <div className="hp-stat"><b>+575%</b><span>Priority keyword</span></div>
              </div>
              <p className="hero-proof-src">Anglo Pacific · reported monthly — wins and misses</p>
             </div>
             </div>
            </div>
          </div>

          {/* scroll cue + progress */}
          <div className="hc-cue" aria-hidden="true"><span>Scroll</span><i></i></div>
          <div className="hc-progress" aria-hidden="true"><i></i></div>
        </div>
      </section>
    </>
  );
}
