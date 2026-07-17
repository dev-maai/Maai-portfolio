export default function Proof() {
  return (
    <>
      <section className="proof" id="proof">
        <div className="wrap">
          <div className="proof-top">
            <div>
              <p className="eyebrow reveal">Proof, not promises</p>
              <h2 className="reveal">Results our clients put their name to.</h2>
            </div>
          </div>
      
          <div className="proof-grid">
            {/* testimonial slider */}
            <div className="slider reveal" data-slider aria-roledescription="carousel" aria-label="Client testimonials">
              <div className="slider-viewport">
                <div className="slider-track">
                  <div className="slide" role="group" aria-roledescription="slide">
                    <span className="quote-mark">&ldquo;</span>
                    <blockquote>They rebuilt our content around the questions buyers actually ask. A year later, <b>organic is our single biggest pipeline source.</b></blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&q=75&auto=format&fit=crop" alt="Elena Cho" loading="lazy" width="120" height="120" />
                        <div><div className="n">Elena Cho</div><div className="r">VP Marketing · Verdant Co</div></div>
                      </div>
                      <div className="res"><div className="n">▲ 212%</div><div className="l">Organic sessions</div></div>
                    </div>
                  </div>
                  <div className="slide" role="group" aria-roledescription="slide">
                    <span className="quote-mark">&ldquo;</span>
                    <blockquote>We moved budget from bought leads to owned answers. MAAI made us <b>the cited source in our category.</b></blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=75&auto=format&fit=crop" alt="Marcus Okafor" loading="lazy" width="120" height="120" />
                        <div><div className="n">Marcus Okafor</div><div className="r">Head of Growth · Atlas Group</div></div>
                      </div>
                      <div className="res"><div className="n">▼ 38%</div><div className="l">Paid dependency</div></div>
                    </div>
                  </div>
                  <div className="slide" role="group" aria-roledescription="slide">
                    <span className="quote-mark">&ldquo;</span>
                    <blockquote>They optimized for answer engines before our competitors knew the term. Now we're <b>the default citation in AI Overviews.</b></blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=75&auto=format&fit=crop" alt="David Reyes" loading="lazy" width="120" height="120" />
                        <div><div className="n">David Reyes</div><div className="r">CMO · NorthPeak</div></div>
                      </div>
                      <div className="res"><div className="n">3.2×</div><div className="l">AI Overview presence</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-ui">
                <div className="dots" aria-hidden="true"></div>
                <div className="arrows">
                  <button type="button" data-prev aria-label="Previous testimonial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg></button>
                  <button type="button" data-next aria-label="Next testimonial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg></button>
                </div>
              </div>
            </div>
      
            {/* right rail: looping video + color-block stats */}
            <div className="proof-rail">
              <div className="video-block reveal">
                <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                  <source src="https://videos.pexels.com/video-files/5527786/5527786-hd_1280_720_25fps.mp4" type="video/mp4" />
                  <source src="https://videos.pexels.com/video-files/5527786/5527786-sd_640_360_25fps.mp4" type="video/mp4" />
                </video>
                <div className="veil"></div>
                <div className="cap">Inside the work</div>
              </div>
              <div className="color-blocks">
                <div className="cblock pine reveal">
                  <div className="big" data-count="4">0</div>
                  <div className="cap2">× growth in LLM &amp; AI Overview citations</div>
                  <svg className="spark" viewBox="0 0 88 52" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round"><path d="M2 44 L20 34 L38 38 L56 20 L74 24 L86 8" /></svg>
                </div>
                <div className="cblock amber reveal">
                  <div className="big"><span data-count="100">0</span>%</div>
                  <div className="cap2">of failures reported — with a fix attached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
