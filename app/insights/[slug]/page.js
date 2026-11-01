import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import { POSTS, AUTHORS, getPost, formatDate } from "../../lib/posts";
import { CASES } from "../../lib/cases";
import "../insights.css";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | MAAI`,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { title: post.title, description: post.description, images: [post.image], type: "article" },
  };
}

/* Simple column chart: side-by-side columns per row, exact value on each column.
   Built for series with very different values, so nobody has to read a scale. */
function Chart({ block }) {
  const max = Math.max(...block.rows.flatMap((r) => r.values));
  const label = block.rows
    .map((r) => `${r.label}: ${r.values.map((v, i) => `${block.series[i].name} ${v.toLocaleString("en-GB")}`).join(", ")}`)
    .join(". ");
  return (
    <figure className="ins-chart">
      <div className="ins-chart-head">
        <span className="ins-chart-title">{block.title}</span>
        <span className="ins-legend">
          {block.series.map((s) => (
            <span key={s.name}><i style={{ background: s.color }} aria-hidden="true" />{s.name}</span>
          ))}
        </span>
      </div>
      <div className="ins-cols" role="img" aria-label={`Column chart. ${label}.`}>
        {block.rows.map((r) => (
          <div className="ins-col-group" key={r.label}>
            <div className="ins-col-plot">
              {r.values.map((v, i) => (
                <div className="ins-col" key={i}>
                  <span>{v.toLocaleString("en-GB")}</span>
                  <div style={{ height: `${Math.max(2, (v / max) * 100)}%`, background: block.series[i].color }} />
                </div>
              ))}
            </div>
            <span className="ins-col-label">{r.label}</span>
          </div>
        ))}
      </div>
      {block.source && (
        <figcaption>
          Source: <a href={block.source.href} target="_blank" rel="noopener noreferrer">{block.source.label}</a>
          {block.source.note ? `, ${block.source.note}` : ""}
        </figcaption>
      )}
    </figure>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "list":
    case "ol": {
      const Tag = block.type === "ol" ? "ol" : "ul";
      return (
        <Tag>
          {block.items.map((it, i) => (
            <li key={i}>{it.lead && <strong>{it.lead}</strong>} {it.text}</li>
          ))}
        </Tag>
      );
    }
    case "chart":
      return <Chart block={block} />;
    case "table":
      return (
        <div className="ins-table">
          <table>
            <thead><tr>{block.head.map((h, i) => <th scope="col" key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1).map((c, j) => <td key={j}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "view":
      if (!block.text) return null;
      return (
        <blockquote className="ins-view">
          <span>{block.title || "Our view"}</span>
          <p>{block.text}</p>
        </blockquote>
      );
    case "image":
      return (
        <figure className="ins-figure">
          <img src={block.src} alt={block.alt || ""} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
}

export default async function InsightPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const author = AUTHORS[post.author];
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      image: `https://www.maai.agency${post.image}`,
      author: { "@type": "Person", name: author.name, url: author.links[0]?.href },
      publisher: { "@type": "Organization", name: "MAAI", url: "https://www.maai.agency" },
      mainEntityOfPage: `https://www.maai.agency/insights/${post.slug}`,
    },
    post.faq?.length && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ].filter(Boolean);

  return (
    <>
      <Nav />
      <main className="ins-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="ins-post-hero">
          <img src={post.image} alt="" />
          <span className="ins-hero-tint" aria-hidden="true" />
          <div className="ins-post-hero-inner">
            <Link className="ins-back" href="/insights">← All insights</Link>
            <div className="ins-tags">
              {[...post.topics, ...post.industries].map((t) => <span key={t}>{t}</span>)}
            </div>
            <h1>{post.title}</h1>
            <div className="ins-byline">
              <img src={author.photo} alt={author.name} />
              <div>
                <span className="ins-byline-name">{author.name} <span>· {formatDate(post.date)}</span></span>
                <span className="ins-byline-role">
                  {author.role}
                  {author.links.map((l) => (
                    <span key={l.href}> · <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="ins-layout">
        <article className="ins-article">
          <p className="ins-intro">{post.intro}</p>
          {post.tldr?.length > 0 && (
            <aside className="ins-tldr" aria-label="Summary">
              <span>TLDR</span>
              <ul>{post.tldr.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </aside>
          )}
          {post.body.map((b, i) => <Block block={b} key={i} />)}

          {post.faq?.length > 0 && (
            <>
              <h2>FAQ</h2>
              <div className="ins-faq">
                {post.faq.map((f, i) => (
                  <details key={i} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </>
          )}
        </article>

        <aside className="ins-side" aria-label="Case studies">
          <div className="ins-side-inner">
            <p className="ins-side-h">Read our case studies</p>
            <div className="ins-side-list">
              {Object.entries(CASES).slice(0, 4).map(([s, c]) => (
                <Link className="ins-side-card" href={`/case-studies/${s}`} key={s}>
                  <div className="ins-side-media"><img src={c.img} alt="" loading="lazy" /></div>
                  <div className="ins-side-body">
                    <span className="ins-side-tag">{c.tag}</span>
                    <span className="ins-side-title">{c.title || c.name}</span>
                    {c.stats?.[0] && <span className="ins-side-stat"><b>{c.stats[0].v}</b> {c.stats[0].l}</span>}
                  </div>
                </Link>
              ))}
            </div>
            <div className="ins-side-cta">
              <p>Want results like these for your business?</p>
              <Link className="btn amber" href="/#contact">Let&apos;s talk</Link>
            </div>
          </div>
        </aside>
        </div>

        {related.length > 0 && (
          <section className="ins-related" aria-label="Related reads">
            <h2>Related reads</h2>
            <div className="ins-grid">
              {related.map((p) => (
                <Link className="ins-card" href={`/insights/${p.slug}`} key={p.slug}>
                  <div className="ins-card-media"><img src={p.image} alt="" loading="lazy" /></div>
                  <span className="ins-cats">{[...p.topics, ...p.industries].join(" · ")}</span>
                  <h3>{p.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
