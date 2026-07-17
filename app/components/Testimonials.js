import { testimonials } from "../content";

export default function Testimonials() {
  return (
    <section className="section on-panel">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2>
            The work, in their <span className="accent-italic">own words</span>.
          </h2>
        </div>

        <div className="quotes">
          {testimonials.quotes.map((t, i) => (
            <figure className="quote" key={i}>
              <p>{t.quote}</p>
              <figcaption className="who">{t.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
