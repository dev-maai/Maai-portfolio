/* "What the work produces" — adapted from the homepage-structure doc's Outcomes
   section. Headlines are the doc's approved wording; the deliverable is named so
   the page stays findable for people searching the service by name. Support lines
   are provisional (Kriti owns final wording, open #7). Card headlines are h3. */
const OUTCOMES = [
  {
    headline: "Answering your customers’ questions at every stage of the journey.",
    deliverable: "Content strategy",
    support: "Content mapped to what your buyers actually ask, from first question to final decision.",
  },
  {
    headline: "Your brand in the answer when AI responds to your buyers.",
    deliverable: "Answer engine optimisation",
    support: "Structured so Google’s AI, ChatGPT and Perplexity cite you when they answer.",
  },
  {
    headline: "Earning references from sites your buyers already trust.",
    deliverable: "Backlink building",
    support: "Authority earned through digital PR, not bought from link farms.",
  },
  {
    headline: "Owning what people find when they search your name.",
    deliverable: "Reputation management",
    support: "Controlling the results and narrative that surface on branded search.",
  },
  {
    headline: "Found in every city you operate in.",
    deliverable: "Local visibility",
    support: "Multi-location coverage built for chains and country-level operators.",
  },
];

export default function Outcomes() {
  return (
    <section className="outcomes" id="outcomes">
      <div className="wrap">
        <p className="eyebrow reveal">What the work produces</p>
        <h2 className="reveal">The deliverable is named. The result leads.</h2>
        <div className="outcome-grid">
          {OUTCOMES.map((o, i) => (
            <article className="outcome reveal" key={i}>
              <span className="outcome-idx" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{o.headline}</h3>
              <div className="outcome-foot">
                <span className="deliverable">{o.deliverable}</span>
                <p className="outcome-support">{o.support}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
