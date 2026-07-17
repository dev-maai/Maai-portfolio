import { receipts } from "../content";
import OwnershipDot from "./OwnershipDot";

function Ledger({ rows }) {
  return (
    <div className="ledger">
      <div className="ledger-head">
        <span>Ledger — receipts filed</span>
      </div>
      {rows.map((row) => (
        <div className="ledger-row" key={row.metric}>
          <span className="label">{row.metric}</span>
          <span className="val">
            {row.value}
            <OwnershipDot />
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Receipts() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{receipts.eyebrow}</p>
          <h2>
            The <span className="accent-italic">receipts</span>.
          </h2>
          <p className="lede">{receipts.lede}</p>
        </div>

        {receipts.cases.map((c, i) => (
          <article className="case" key={c.name}>
            {/* alternate which side the ledger sits on, as the source does */}
            {i % 2 === 1 && <Ledger rows={c.ledger} />}
            <div>
              <p className="meta">{c.meta}</p>
              <h3>{c.name}</h3>
              {c.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            {i % 2 === 0 && <Ledger rows={c.ledger} />}
          </article>
        ))}
      </div>
    </section>
  );
}
