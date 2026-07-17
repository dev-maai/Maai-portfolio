import { howItHolds } from "../content";

export default function HowItHolds() {
  return (
    <section className="section on-panel" id="how">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{howItHolds.eyebrow}</p>
          <h2>
            A foundation that <span className="accent-italic">survives</span> the algorithm.
          </h2>
          <p className="lede">{howItHolds.lede}</p>
        </div>

        <div className="stages">
          {howItHolds.stages.map((stage) => (
            <div className="stage" key={stage.num}>
              <span className="num">/ {stage.num}</span>
              <div className="stage-inner">
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="signals">
          <p className="eyebrow">Signals we track</p>
          <h3>
            Make sense of results from{" "}
            <span className="accent-italic">400+ ranking signals.</span>
          </h3>
          <div className="pills">
            {howItHolds.signals.map((signal) => (
              <span className="pill" key={signal}>
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
