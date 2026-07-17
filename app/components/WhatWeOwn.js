import { whatWeOwn } from "../content";
import OwnershipDot from "./OwnershipDot";

export default function WhatWeOwn() {
  return (
    <section className="section" id="approach">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{whatWeOwn.eyebrow}</p>
          <h2>
            The work MAAI is <span className="accent-italic">accountable</span> for.
          </h2>
          <p className="lede">{whatWeOwn.lede}</p>
        </div>

        <div className="tiles">
          {whatWeOwn.tiles.map((tile) => (
            <article className="tile reveal" key={tile.label}>
              <p className="eyebrow">{tile.label}</p>
              <h3>{tile.title}</h3>
              <p>{tile.body}</p>
              <div className="pills">
                {tile.pills.map((pill) => (
                  <span className="pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="closing">
          <p>
            {whatWeOwn.closing}
            <OwnershipDot />
          </p>
        </div>
      </div>
    </section>
  );
}
