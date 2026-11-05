/* Extra block types for Insights posts, so each post can explain data and
   processes in the format that suits it (not every data set is a bar chart).
   Every component is server-rendered HTML and CSS: no client JavaScript. */
import Link from "next/link";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
export const plain = (text) => (text || "").replace(LINK_RE, "$1");
export const slugify = (text) =>
  plain(text).toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);

/* Inline links: [label](url). Internal paths use Link; external sources open in a new tab.
   Text wrapped in **double asterisks** renders bold. */
export function Rich({ text }) {
  if (!text) return null;
  const out = [];
  let last = 0;
  const pushText = (s, k) => {
    s.split(/(\*\*[^*]+\*\*)/g).forEach((part, j) => {
      if (!part) return;
      if (part.startsWith("**") && part.endsWith("**")) out.push(<strong key={`${k}-${j}`}>{part.slice(2, -2)}</strong>);
      else out.push(part);
    });
  };
  for (const m of text.matchAll(LINK_RE)) {
    if (m.index > last) pushText(text.slice(last, m.index), m.index);
    const [, label, href] = m;
    out.push(
      href.startsWith("/") ? (
        <Link href={href} key={`l${m.index}`}>{label}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" key={`l${m.index}`}>{label}</a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) pushText(text.slice(last), "end");
  return <>{out}</>;
}

function Source({ source }) {
  if (!source) return null;
  return (
    <figcaption>
      Source: {source.href ? <a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a> : source.label}
      {source.note ? `. ${source.note}` : ""}
    </figcaption>
  );
}

/* Table of contents built from the post's H2s. */
export function Toc({ body }) {
  const items = body.filter((b) => b.type === "h2").map((b) => ({ id: slugify(b.text), text: b.text }));
  if (items.length < 4) return null;
  return (
    <nav className="ins-toc" aria-label="In this guide">
      <span>In this guide</span>
      <ol>{items.map((it) => <li key={it.id}><a href={`#${it.id}`}>{it.text}</a></li>)}</ol>
    </nav>
  );
}

/* Callout: tip, note, warning, definition or takeaway. */
export function Callout({ block }) {
  const label = { tip: "Tip", note: "Good to know", warning: "Watch out", definition: "Definition", takeaway: "Key takeaway" }[block.variant] || "Note";
  return (
    <aside className={`ins-callout is-${block.variant || "note"}`}>
      <span className="ins-callout-label">{block.title || label}</span>
      {block.text && <p><Rich text={block.text} /></p>}
      {block.items && <ul>{block.items.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>}
    </aside>
  );
}

/* Big-number cards for headline statistics. */
export function Stats({ block }) {
  return (
    <figure className="ins-stats">
      {block.title && <span className="ins-chart-title">{block.title}</span>}
      <div className="ins-stats-grid">
        {block.items.map((s, i) => (
          <div className="ins-stat" key={i}>
            <b>{s.value}</b>
            <span><Rich text={s.label} /></span>
            {s.by && <small>{s.by}</small>}
          </div>
        ))}
      </div>
      <Source source={block.source} />
    </figure>
  );
}

/* Horizontal bars: one or two series, labels on the left, values on the bar.
   Suits rankings, percentages and paired comparisons (for example UK vs US). */
export function HBar({ block }) {
  const series = block.series || [{ name: "", color: "var(--amber)" }];
  const max = block.max || Math.max(...block.rows.flatMap((r) => (Array.isArray(r.values) ? r.values : [r.value])));
  const unit = block.unit || "";
  const desc = block.rows
    .map((r) => `${r.label}: ${(Array.isArray(r.values) ? r.values : [r.value]).map((v, i) => `${series[i]?.name || ""} ${v}${unit}`).join(", ")}`)
    .join(". ");
  return (
    <figure className="ins-hbar">
      <div className="ins-chart-head">
        <span className="ins-chart-title">{block.title}</span>
        {series.length > 1 && (
          <span className="ins-legend">
            {series.map((s) => <span key={s.name}><i style={{ background: s.color }} aria-hidden="true" />{s.name}</span>)}
          </span>
        )}
      </div>
      <div className="ins-hbar-rows" role="img" aria-label={`Bar chart. ${desc}.`}>
        {block.rows.map((r) => {
          const vals = Array.isArray(r.values) ? r.values : [r.value];
          return (
            <div className="ins-hbar-row" key={r.label}>
              <span className="ins-hbar-label">{r.label}</span>
              <div className="ins-hbar-bars">
                {vals.map((v, i) => (
                  <div className="ins-hbar-track" key={i}>
                    <div className="ins-hbar-fill" style={{ width: `${Math.max(2, (v / max) * 100)}%`, background: series[i]?.color }} />
                    <span>{v.toLocaleString("en-GB")}{unit}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {block.note && <p className="ins-chart-note"><Rich text={block.note} /></p>}
      <Source source={block.source} />
    </figure>
  );
}

/* Donut for shares of a whole. Pure CSS (conic-gradient). */
export function Donut({ block }) {
  const total = block.parts.reduce((a, p) => a + p.value, 0);
  const ends = block.parts.map((_, i) => block.parts.slice(0, i + 1).reduce((a, p) => a + p.value, 0));
  const stops = block.parts
    .map((p, i) => `${p.color} ${((ends[i] - p.value) / total) * 360}deg ${(ends[i] / total) * 360}deg`)
    .join(", ");
  const desc = block.parts.map((p) => `${p.label} ${Math.round((p.value / total) * 100)}%`).join(", ");
  return (
    <figure className="ins-donut">
      <span className="ins-chart-title">{block.title}</span>
      <div className="ins-donut-body">
        <div className="ins-donut-ring" style={{ background: `conic-gradient(${stops})` }} role="img" aria-label={`Donut chart. ${desc}.`}>
          <div><b>{block.center?.value}</b><span>{block.center?.label}</span></div>
        </div>
        <ul>
          {block.parts.map((p) => (
            <li key={p.label}><i style={{ background: p.color }} aria-hidden="true" /><b>{p.display || `${Math.round((p.value / total) * 100)}%`}</b> {p.label}</li>
          ))}
        </ul>
      </div>
      <Source source={block.source} />
    </figure>
  );
}

/* Numbered step cards. "path" shows where to click in a tool, e.g. "GA4 > Admin > Channel groups". */
export function Steps({ block }) {
  return (
    <div className="ins-steps">
      {block.title && <span className="ins-steps-title">{block.title}</span>}
      <ol>
        {block.items.map((s, i) => (
          <li key={i}>
            <span className="ins-step-n" aria-hidden="true">{i + 1}</span>
            <div>
              <b>{s.title}</b>
              {s.path && <code className="ins-step-path">{s.path}</code>}
              {s.text && <p><Rich text={s.text} /></p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Side-by-side columns: do and avoid, before and after, option A and option B. */
export function Compare({ block }) {
  return (
    <div className="ins-compare">
      {block.title && <span className="ins-chart-title">{block.title}</span>}
      <div className="ins-compare-grid" style={{ gridTemplateColumns: `repeat(${block.columns.length}, minmax(0, 1fr))` }}>
        {block.columns.map((c) => (
          <div className={`ins-compare-col is-${c.tone || "neutral"}`} key={c.title}>
            <b>{c.title}</b>
            {c.text && <p><Rich text={c.text} /></p>}
            {c.items && <ul>{c.items.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Before and after rewrite of a passage. */
export function Rewrite({ block }) {
  return (
    <figure className="ins-rewrite">
      {block.title && <span className="ins-chart-title">{block.title}</span>}
      <div className="ins-rewrite-grid">
        <div className="is-before"><span>Before</span><p>{block.before}</p></div>
        <div className="is-after"><span>After</span><p>{block.after}</p></div>
      </div>
      {block.note && <figcaption><Rich text={block.note} /></figcaption>}
    </figure>
  );
}

/* Code or config snippet (robots.txt, regex, schema). */
export function Code({ block }) {
  return (
    <figure className="ins-code">
      {block.title && <figcaption className="ins-code-title">{block.title}</figcaption>}
      <pre><code>{block.code}</code></pre>
      {block.note && <figcaption><Rich text={block.note} /></figcaption>}
    </figure>
  );
}

/* Process diagram: boxes joined by arrows, stacked on phones. */
export function Flow({ block }) {
  return (
    <figure className="ins-flow">
      {block.title && <span className="ins-chart-title">{block.title}</span>}
      <ol className="ins-flow-row" style={{ "--n": block.steps.length }}>
        {block.steps.map((s, i) => (
          <li key={i}>
            <span className="ins-flow-n">{String(i + 1).padStart(2, "0")}</span>
            <b>{s.label}</b>
            {s.text && <p><Rich text={s.text} /></p>}
            {s.lever && <em>Your lever: {s.lever}</em>}
          </li>
        ))}
      </ol>
      {block.caption && <figcaption><Rich text={block.caption} /></figcaption>}
    </figure>
  );
}

/* Ticked checklist. */
export function Checklist({ block }) {
  return (
    <div className="ins-check">
      {block.title && <span className="ins-steps-title">{block.title}</span>}
      <ul>{block.items.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>
    </div>
  );
}

/* Platform or tool cards in a grid. */
export function Cards({ block }) {
  return (
    <div className="ins-cards">
      {block.title && <span className="ins-chart-title">{block.title}</span>}
      <div className="ins-cards-grid">
        {block.items.map((c) => (
          <div className="ins-card-x" key={c.title}>
            <b>{c.title}</b>
            {c.meta && <span className="ins-card-meta">{c.meta}</span>}
            {c.rows && (
              <dl>{c.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd><Rich text={v} /></dd></div>)}</dl>
            )}
            {c.text && <p><Rich text={c.text} /></p>}
            {c.href && <a className="ins-card-link" href={c.href}>{c.hrefLabel || "Jump to section"} →</a>}
          </div>
        ))}
      </div>
    </div>
  );
}
