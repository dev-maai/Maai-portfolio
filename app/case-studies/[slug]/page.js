import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";

/* Case-study landings. Full write-ups render the rich layout (hero + stat band +
   article); cases without a `sections` array fall back to the lean placeholder. */
import { CASES } from "../../lib/cases";


export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return { title: "Case studies | MAAI" };
  return {
    title: `${c.title || c.name} | Case study | MAAI`,
    description: c.blurb || c.sections?.[0]?.paras?.[0]?.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  const full = Array.isArray(c.sections);
  const others = Object.entries(CASES).filter(([s]) => s !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="ind-hero cs-hero">
        <div className="wrap">
          <div className="csh-card">
            {c.img && (
              <div className="csh-media">
                <img src={c.img} alt="" />
                <span className="csh-tint" aria-hidden="true" />
              </div>
            )}
            <div className="csh-body">
              <span className="csh-tag">{c.tag}</span>
              <h1>{full ? c.title : c.name}</h1>
              {!full && <p className="lede">{c.blurb}</p>}
              {full && (
                <div className="cs-stats csh-stats">
                  {c.stats.map((s) => (
                    <div className="cs-stat" key={s.l}>
                      <div className="cs-stat-v">{s.v}</div>
                      <div className="cs-stat-l">{s.l}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {!full && (
            <div className="ind-actions">
              <a className="btn amber" href="/#contact">Want to know more? Let&apos;s talk.</a>
              <a className="cta-link" href="/#values">← All case studies</a>
            </div>
          )}
        </div>
      </main>

      {full && (
        <article className="cs-article">
          <div className="wrap cs-article-inner">
            {c.sections.map((sec, si) => {
              const key = sec.h.toLowerCase();
              const variant = key.includes("challenge") ? "problem"
                : key.includes("approach") ? "steps"
                : key.includes("result") ? "wins"
                : key.includes("why") ? "why"
                : "plain";
              return (
                <section
                  className={`cs-sec cs-${variant}${variant === "steps" || variant === "wins" ? "" : " reveal"}`}
                  key={sec.h}
                >
                  <div className="cs-sec-head">
                    <span className="cs-sec-n">{String(si + 1).padStart(2, "0")}</span>
                    <h2>{sec.h}</h2>
                  </div>
                  <div className="cs-sec-body">
                    {sec.paras?.map((p, i) => <p key={i}>{p}</p>)}

                    {sec.list && variant === "steps" && (
                      <ol className="cs-steps">
                        {sec.list.map((li, i) => (
                          <li key={i}>
                            <span className="cs-step-n">{String(i + 1).padStart(2, "0")}</span>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {sec.list && variant === "problem" && (
                      <ul className="cs-probs">
                        {sec.list.map((li, i) => <li className="cs-prob" key={i}>{li}</li>)}
                      </ul>
                    )}

                    {sec.list && variant === "wins" && (
                      <ul className="cs-wins">
                        {sec.list.map((li, i) => (
                          <li key={i}>
                            <svg className="cs-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.list && !["steps", "problem", "wins"].includes(variant) && (
                      <ul className="cs-list">
                        {sec.list.map((li, i) => <li key={i}>{li}</li>)}
                      </ul>
                    )}

                    {sec.outro && <p className="cs-outro">{sec.outro}</p>}
                  </div>
                </section>
              );
            })}

            <div className="cs-article-cta">
              <a className="btn amber" href="/#contact">Want to know more? Let&apos;s talk.</a>
            </div>
          </div>
        </article>
      )}

      {others.length > 0 && (
        <section className="rel" aria-label="More case studies">
          <div className="wrap">
            <div className="rel-head">
              <h2>More case studies</h2>
              <a className="cta-link" href="/#values">All case studies <span aria-hidden="true">→</span></a>
            </div>
            <div className="rel-grid">
              {others.map(([s, cc]) => (
                <a className="rel-card" href={`/case-studies/${s}`} key={s}>
                  <div className="rel-media">
                    <img src={cc.img} alt="" loading="lazy" />
                    <span className="rel-tint" aria-hidden="true" />
                  </div>
                  <div className="rel-body">
                    <span className="rel-tag">{cc.tag}</span>
                    <h3>{cc.name}</h3>
                    {cc.stats?.[0] && (
                      <span className="rel-stat"><b>{cc.stats[0].v}</b> {cc.stats[0].l}</span>
                    )}
                    <span className="rel-go">Read case study <i aria-hidden="true">→</i></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
