/* Section 2 · The positioning statement — copy left, CTA right, on a bright
   porcelain band so it reads as a clean break from the dark hero. The opening
   line carries the display weight now that the old tagline has been removed. */
export default function Tagline() {
  return (
    <section className="tagline-band tagline-light" aria-label="What we do">
      <div className="wrap tagline-row">
        <div className="tagline-copy reveal">
          <p className="tagline-lead">
            Your customers are already searching for what you sell. The only question
            is who they find.
          </p>
          <p>
            MAAI grows logistics, supply chain, moving, self-storage, industrial and
            B2B service companies through search. We combine technical SEO, content
            strategy and Answer Engine Optimisation into long-term visibility that
            keeps producing leads.
          </p>
          <p>
            And if SEO is the wrong investment for your business, we will tell you
            before you spend a penny.
          </p>
        </div>
        <div className="tagline-action reveal">
          <a className="btn amber" href="#contact">Start Compounding</a>
        </div>
      </div>
    </section>
  );
}
