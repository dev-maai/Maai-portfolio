"use client";

/* The video fades in only once it can actually play, so the stage never
   shows a blank frame. In the source this was an inline oncanplay attribute,
   which React does not support. */
export default function HeroCine() {
  return (
    <>
      <section className="hero-cine" id="top" aria-label="Intro">
        <div className="hc-sticky">
          {/* ambient stage: dark radial + faint teal network video */}
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
              <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/3129671/3129671-sd_960_540_30fps.mp4" type="video/mp4" />
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
              <div className="hc-collage">
                <div className="t"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
                <div className="t"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=520&q=80&auto=format&fit=crop" alt="" loading="lazy" /></div>
              </div>
            </div>
      
            {/* 3 · tilted device mockup */}
            <div className="hc-scene sc3">
              <div className="hc-device">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&q=80&auto=format&fit=crop" alt="" loading="lazy" />
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
             <div className="hc-resolve-inner">
              <p className="eyebrow">Organic growth agency</p>
              <h1>
                Get found in<br />
                <span className="hero-rotator" role="text" aria-label="Google, ChatGPT, Perplexity, AI Overviews — every answer">
                  <span className="hr-track" aria-hidden="true">
                    <span className="hr-word">Google</span>
                    <span className="hr-word">ChatGPT</span>
                    <span className="hr-word">Perplexity</span>
                    <span className="hr-word">AI Overviews</span>
                    <span className="hr-word">every answer</span>
                    <span className="hr-word">Google</span>
                  </span>
                </span>
              </h1>
              <p className="lede">
                Yesterday your customers searched Google. Today they ask an LLM.
                MAAI puts your business wherever the question is asked — with the
                accountability of an internal team and the transparency most agencies avoid.
              </p>
      
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
      
              <div className="hero-ctas">
                <a className="btn amber" href="#contact">Book a strategy call</a>
                <a className="btn ghost" href="#work">See how we work</a>
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
