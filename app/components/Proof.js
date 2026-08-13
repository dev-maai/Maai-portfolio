import VideoTestimonial from "./VideoTestimonial";

export default function Proof() {
  return (
    <>
      <section className="proof" id="proof">
        <div className="wrap">
          <div className="proof-top">
            <div>
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
                    <blockquote>Kriti has been integral to our digital transformation for the past five years. Her strategic insight and deep understanding of digital trends have <b>significantly enhanced our online presence and deepened trust</b> with our patients and community.</blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="/testimonal/shuchin_bajaj.jpg" alt="Shuchin Bajaj" loading="lazy" width="46" height="46" />
                        <div><div className="n">Shuchin Bajaj</div><div className="r">Founder Director · Ujala Cygnus Hospitals</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="slide" role="group" aria-roledescription="slide">
                    <span className="quote-mark">&ldquo;</span>
                    <blockquote>Kriti is one digital marketing consultant who takes client relationships seriously. She and the Maai team <b>built the LinkedIn rhythm for my profile and my company</b>, going beyond the call of duty on graphic design and events.</blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="/testimonal/anand.jpg" alt="Anand Parikh" loading="lazy" width="46" height="46" />
                        <div><div className="n">Anand Parikh</div><div className="r">MedTech · Innovation · Impact</div></div>
                      </div>
                    </div>
                  </div>
                  <div className="slide" role="group" aria-roledescription="slide">
                    <span className="quote-mark">&ldquo;</span>
                    <blockquote>Efficient, clear and incredibly pedagogical. She made complex things feel simple and actionable. What stood out was her <b>intuitive understanding of who we are</b>, without us even needing to explain it. Kriti just got it.</blockquote>
                    <div className="slide-foot">
                      <div className="who">
                        <img src="/testimonal/colette.jpg" alt="Colette Tostivint Gurung" loading="lazy" width="46" height="46" />
                        <div><div className="n">Colette Tostivint Gurung</div><div className="r">Executive Coach · Co-founder, Eklore</div></div>
                      </div>
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
      
            {/* right rail: client video review */}
            <div className="proof-rail">
              <VideoTestimonial
                src="/testimonal/maai-testimonal.mp4"
                poster="/testimonal/maai-poster.jpg"
                label="Client review"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
