import { hero } from "../content";
import OwnershipDot from "./OwnershipDot";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero-glow g1" aria-hidden="true" />
      <span className="hero-glow g2" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          Organic growth.{" "}
          <span className="accent-italic">Owned</span>
          <OwnershipDot />
        </h1>
        <p className="lede">{hero.lede}</p>
        <a className="btn amber" href="#contact">
          {hero.cta} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
