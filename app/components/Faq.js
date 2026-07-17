export default function Faq() {
  return (
    <>
      <section id="faq">
        <div className="wrap faq">
          <p className="eyebrow reveal">Questions</p>
          <h2 className="reveal">Sustainable growth, explained.</h2>
      
          <div className="q reveal">
            <button>What kind of businesses do you work with?<span className="plus">+</span></button>
            <div className="a"><p>We work best with established businesses — typically $100M+ in annual revenue — that want organic growth with the accountability of an internal team. We're especially eager to work with companies making a climate or humanitarian impact.</p></div>
          </div>
          <div className="q reveal">
            <button>Why organic instead of paid?<span className="plus">+</span></button>
            <div className="a"><p>Paid buys leads; organic earns customers. We believe you should be where your customers are across every stage of their journey — answering their questions before a competitor does. It's slower to start and far harder to displace.</p></div>
          </div>
          <div className="q reveal">
            <button>How do you handle the shift from Google to LLMs?<span className="plus">+</span></button>
            <div className="a"><p>Platforms are surfaces; organic growth is the strategy. We optimize for classic search and answer engines simultaneously — structured content, entity authority, and citations that LLMs actually retrieve.</p></div>
          </div>
          <div className="q reveal">
            <button>What does "business accountability" actually mean?<span className="plus">+</span></button>
            <div className="a"><p>You get a full report of everything we did, what it produced, and where we fell short — with a mitigation plan attached. We don't hide failures. We find the solution towards growth, and we show our work.</p></div>
          </div>
          <div className="q reveal">
            <button>What if growth isn't linear?<span className="plus">+</span></button>
            <div className="a"><p>It never is, and we're upfront about that from the first call. Organic growth means constantly adapting to algorithm changes and to how real people search and behave. We're cautious about working with clients who expect a straight line — and honest with the ones who don't.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
