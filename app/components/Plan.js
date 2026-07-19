export default function Plan() {
  return (
    <>
      <section className="plan" id="plan">
        <div className="wrap">
          <span className="pill reveal"><i></i>Your first 90 days</span>
          <h2 className="reveal">A plan you can actually see.</h2>
          <p className="plan-lede reveal">Every engagement opens with a diagnosis and a dated plan — owned by named specialists, not a shared inbox.</p>
      
          <div className="plan-card reveal">
            <img className="plan-bg" src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1000&q=70&auto=format&fit=crop" alt="" loading="lazy" />
            <div className="plan-inner">
              <h3>Address your answer-engine gaps</h3>
              <p>Low citation share detected across AI answers. The plan below targets what you can actually change.</p>
      
              <div className="plan-head">
                <b>Action plan</b>
                <div className="avatars">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Priya Nair" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Sam Whitfield" loading="lazy" />
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&q=70&auto=format&fit=crop&crop=faces" alt="Mia Bianchi" loading="lazy" />
                </div>
              </div>
      
              <ul className="plan-list">
                <li><span className="pi"><img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=120&q=60&auto=format&fit=crop" alt="" loading="lazy" /></span>Rebuild 3 clusters around comparison intent</li>
                <li><span className="pi"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&q=60&auto=format&fit=crop" alt="" loading="lazy" /></span>Earn 12 citations across ChatGPT &amp; Perplexity</li>
                <li><span className="pi"><img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=120&q=60&auto=format&fit=crop" alt="" loading="lazy" /></span>Re-measure and report in 12 weeks</li>
              </ul>
            </div>
          </div>
          <p className="plan-note">Example plan only. Yours is built from your own audit.</p>
        </div>
      </section>
    </>
  );
}
