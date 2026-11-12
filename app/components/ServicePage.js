/* Shared layout for MAAI service landing pages (same design as
   /technical-seo-services). Each page passes its own content in `c`. */
import Nav from "./Nav";
import Footer from "./Footer";
import Signals from "./Signals";
import SiteEffects from "./SiteEffects";
import Typewriter from "./Typewriter";
import StackSections from "./StackSections";

const FONT_LINK =
  "https://fonts.googleapis.com/css2?family=DM+Mono&family=Fraunces:ital,wght@0,400;0,500;1,500&family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap";
const MONO = "'DM Mono', monospace";
const PINK = "#E62E6B";
const DARK = "#0E2A1E";
const GREEN = "#265943";
const EM = { fontFamily: "Fraunces, serif", fontWeight: "500", color: PINK };

export const INDUSTRIES = [
  { t: "Self storage", href: "/industries/self-storage" },
  { t: "Corporate relocation", href: "/industries/removals-and-relocations" },
  { t: "Removals", href: "/industries/removals-and-relocations" },
  { t: "Freight forwarding", href: "/seo-agency-for-logistics-companies" },
  { t: "Third-party logistics", href: "/seo-agency-for-logistics-companies" },
  { t: "Warehousing", href: "/seo-agency-for-logistics-companies" },
  { t: "Supply chain", href: "/industries/supply-chain" },
  { t: "Commercial real estate" },
  { t: "Estate agents" },
  { t: "Property management" },
  { t: "News and entertainment" },
  { t: "Streaming platforms" },
  { t: "Healthcare" },
  { t: "SaaS", href: "/industries/saas" },
  { t: "International moving", href: "/industries/removals-and-relocations" },
];

export const CASES = {
  removals: { n: "REMOVALS", big: "+39%", res: "organic content clicks, held and grown through the 2026 Google core updates", tags: ["Logistics", "Organic search"], img: "/case-studies/pickfords.png", href: "https://www.maai.agency/case-studies/pickfords" },
  medtech: { n: "MEDTECH", big: "+118%", res: "referral traffic while holding #1 on the core commercial term", tags: ["Backlinks", "Referral"], img: "/case-studies/shira.png", href: "https://www.maai.agency/case-studies/backlinks-referral" },
  logistics: { n: "LOGISTICS", big: "+53%", res: "organic clicks through a combined SEO, AEO and GEO strategy", tags: ["SEO", "AEO", "GEO"], img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1100&q=72&auto=format&fit=crop", href: "https://www.maai.agency/case-studies/anglo-pacific" },
  supply: { n: "SUPPLY CHAIN", big: "+81%", res: "organic traffic, with 100% of qualified leads coming from country blogs", tags: ["B2B marketing", "AEO"], img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=72&auto=format&fit=crop", href: "https://www.maai.agency/case-studies/b2b-marketing" },
};

/* FAQ answers are arrays of plain strings and {t, href} links. */
const toText = (a) => a.map((x) => (typeof x === "string" ? x : x.t)).join("");
const toJsx = (a) =>
  a.map((x, i) =>
    typeof x === "string" ? x : (
      <a key={i} href={x.href} style={{ color: GREEN, fontWeight: 600 }}>{x.t}</a>
    )
  );

const inp = { width: "100%", boxSizing: "border-box", padding: "0 16px", borderRadius: "12px", border: "1px solid #2F5A47", color: "#F7F7F2", fontFamily: "Inter, sans-serif", fontSize: "15px" };
const lab = { fontSize: "13px", fontWeight: "500", color: "#DDE0D5", textAlign: "left" };

function Field({ id, name, label, type, ph, h = 48, bg = DARK, full }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: full ? "1 / -1" : undefined }}>
      <label htmlFor={id} style={lab}>{label}</label>
      <input id={id} name={name} type={type} placeholder={ph} style={{ ...inp, height: `${h}px`, background: bg }} />
    </div>
  );
}

function Chip({ t, href, hidden }) {
  const st = { background: "#FFFFFF", border: "1px solid #D0E1DA", color: DARK, textDecoration: "none", borderRadius: "999px", padding: "16px 28px", fontSize: "17px", fontWeight: "600", whiteSpace: "nowrap" };
  return href ? (
    <a href={href} style={st} aria-hidden={hidden || undefined} tabIndex={hidden ? -1 : undefined}>{t}</a>
  ) : (
    <span style={st} aria-hidden={hidden || undefined}>{t}</span>
  );
}

export default function ServicePage({ c }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: toText(f.a) } })),
  };
  return (
    <>
      <link rel="stylesheet" href={FONT_LINK} />
      <style>{`
        .tseo h1,.tseo h2,.tseo h3{font-family:Sora,sans-serif;margin:0}
        .tseo p{margin:0}
        .tseo summary::-webkit-details-marker{display:none}
        @keyframes sbScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @media (prefers-reduced-motion: reduce){.tseo .sb-track{animation:none !important}}
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main className="tseo" style={{ fontFamily: "Inter, sans-serif", color: DARK, background: "#F7F7F2" }}>
        {/* Hero */}
        <section style={{ background: DARK, color: "#F7F7F2", padding: "168px 24px 80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              <h1 style={{ fontSize: "52px", lineHeight: "1.1", color: "#F7F7F2" }}>{c.h1}</h1>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#DDE0D5", maxWidth: "520px" }}>{c.intro}</p>
            </div>
            <form action="/book" method="get" style={{ borderRadius: "20px", background: "#13352A", border: "1px solid #23463A", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 style={{ fontSize: "24px", color: "#F7F7F2" }}>{c.formTitle}</h2>
              <Field id="fa-name" name="name" label="Full name" type="text" ph="Jane Smith" />
              <Field id="fa-email" name="email" label="Work email" type="email" ph="jane@company.com" />
              <Field id="fa-url" name="website" label="Website URL" type="url" ph="https://yourcompany.com" />
              <button type="submit" style={{ height: "52px", border: "none", borderRadius: "999px", background: GREEN, color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "16px", cursor: "pointer" }}>{c.formButton}</button>
            </form>
          </div>
        </section>

        {/* How we run */}
        <section style={{ background: "#F7F7F2", padding: "64px 24px 96px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "39px", fontWeight: "600" }}>{c.howHeading} <em style={EM}>{c.howEm}</em></h2>
            <div style={{ position: "relative", margin: "72px 0 46px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", height: "26px", alignItems: "center" }}>
              <span style={{ position: "absolute", left: 0, right: 0, top: "12px", height: "2px", background: "#D0E1DA" }} />
              {c.steps.map((_, i) => (
                <span key={i} style={{ justifySelf: "center", position: "relative", width: "13px", height: "13px", borderRadius: "50%", background: GREEN }} />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
              {c.steps.map((s, i) => (
                <div key={s.t} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "61px", lineHeight: "1", color: DARK }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{s.t}</h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#5E6B60" }}>{s.d}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "56px", display: "flex" }}>
              <a href="/book" style={{ display: "flex", gap: "10px", alignItems: "center", textDecoration: "none", fontWeight: "600", fontSize: "20px", color: DARK, paddingBottom: "5px", borderBottom: "2px solid rgba(14,42,30,0.6)" }}>
                {c.formTitle} <span style={{ fontSize: "22px" }}>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section style={{ background: "#F3F7F5", padding: "24px 0 64px", overflowX: "hidden" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontSize: "28px" }}>Our industries</h2>
          </div>
          <div style={{ marginTop: "24px", width: "100%" }} aria-label="Industries we work with">
            <div style={{ overflow: "hidden" }}>
              <div className="sb-track" style={{ display: "flex", gap: "14px", width: "max-content", animation: "sbScroll 36s linear infinite" }}>
                {INDUSTRIES.map((x) => <Chip key={x.t} {...x} />)}
                {INDUSTRIES.map((x) => <Chip key={`d-${x.t}`} {...x} hidden />)}
              </div>
            </div>
          </div>
        </section>

        <StackSections>
          {/* Case studies */}
          <section style={{ background: DARK, padding: "96px 24px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
              <h2 style={{ fontSize: "52px", lineHeight: "1.1", color: "#F7F7F2", maxWidth: "720px", fontWeight: "600" }}>{c.casesHeading}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "28px" }}>
                {c.cases.map((k, i) => {
                  const cs = CASES[k];
                  const mono = { fontFamily: MONO, fontSize: "12px", letterSpacing: "0.2em", color: "#F7F7F2" };
                  return (
                    <a key={k} href={cs.href} style={{ textDecoration: "none", position: "relative", minHeight: "520px", borderRadius: "28px", background: DARK, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                      <img src={cs.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      <span style={{ position: "absolute", inset: 0, background: "rgba(14,42,30,0.62)" }} />
                      <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}><span style={mono}>{String(i + 1).padStart(2, "0")}</span><span style={mono}>2026</span></div>
                      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                        <span style={{ fontFamily: "Sora, sans-serif", fontWeight: "700", fontSize: "44px", letterSpacing: "0.1em", color: "#FFFFFF" }}>{cs.n}</span>
                        <span style={{ fontFamily: "Fraunces, serif", fontSize: "64px", lineHeight: "1", color: "#FFFFFF" }}>{cs.big}</span>
                        <span style={{ fontSize: "17px", lineHeight: "1.5", color: "#DDE0D5", maxWidth: "400px" }}>{cs.res}</span>
                      </div>
                      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px" }}>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {cs.tags.map((t) => <span key={t} style={{ border: "1px solid rgba(247,247,242,0.45)", borderRadius: "999px", padding: "10px 18px", fontSize: "14px", fontWeight: "600", color: "#F7F7F2", background: "rgba(14,42,30,0.55)" }}>{t}</span>)}
                        </div>
                        <span style={{ flex: "none", width: "64px", height: "64px", borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: DARK }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Issues ring */}
          <Signals
            id="issues"
            label={c.ring.label}
            items={c.ring.items}
            heading={<>{c.ring.h1}<br />{c.ring.h2} <em>{c.ring.em}</em></>}
            copyClassName="sig-copy-wide"
            lede={c.ring.lede}
            ctaLabel="Book a call with us"
            scrollLinked
          />

          {/* Team */}
          <section style={{ background: DARK, padding: "96px 24px 80px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "64px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "48px", alignItems: "end" }}>
                <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: "400", fontSize: "64px", lineHeight: "1.05", color: "#F7F7F2" }}>{c.teamHeading}</h2>
                <p style={{ fontSize: "18px", lineHeight: "1.75", color: "#DDE0D5" }}>{c.teamText}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
                {c.teamStats.map(([v, l]) => (
                  <div key={l} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontFamily: "Fraunces, serif", fontSize: "72px", lineHeight: "1", color: "#F7F7F2" }}>{v}</span>
                    <span style={{ fontFamily: MONO, fontSize: "12px", letterSpacing: "0.25em", color: "#9DB0A4" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </StackSections>

        {/* Why it matters + sourced stats */}
        <section style={{ background: "#F3F7F5", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "56px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "sticky", top: "120px" }}>
              <h2 style={{ fontSize: "40px", lineHeight: "1.15", fontWeight: "600" }}>{c.why.heading} <em style={EM}>{c.why.em}</em></h2>
              <p style={{ fontSize: "17px", lineHeight: "1.75", color: "#4C6155" }}>{c.why.text}</p>
              {c.why.link && (
                <a href={c.why.link.href} style={{ alignSelf: "flex-start", display: "flex", gap: "8px", textDecoration: "none", fontWeight: "600", fontSize: "16px", color: DARK, paddingBottom: "3px", borderBottom: "1.5px solid rgba(14,42,30,0.45)" }}>
                  {c.why.link.t} <span>→</span>
                </a>
              )}
              <a href="/book" style={{ marginTop: "16px", alignSelf: "flex-start", background: GREEN, color: "#fff", textDecoration: "none", padding: "14px 28px", borderRadius: "999px", fontWeight: "600", fontSize: "16px" }}>{c.why.button}</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {c.why.stats.map((s) => (
                    <div key={s.n + s.t} style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "18px 0" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontFamily: "Fraunces, serif", fontSize: "40px", lineHeight: "1", color: PINK }}>{s.n}</span>
                        <span style={{ fontSize: "15px", color: "#4C6155", maxWidth: "420px" }}>{s.l}</span>
                      </div>
                      <h3 style={{ fontSize: "19px", fontWeight: "600", marginTop: "6px" }}>{s.t}</h3>
                      <p style={{ fontSize: "15px", lineHeight: "1.65", color: "#4C6155" }}>{s.d}</p>
                      <span style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.08em", color: "#6F8A7C" }}>Source: {s.src}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#F7F7F2", padding: "96px 24px 88px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "14px 20px", alignItems: "start" }}>
            <h2 style={{ fontSize: "34px", marginBottom: "12px", gridColumn: "1 / -1" }}>Frequently asked</h2>
            {c.faqs.map((f) => (
              <details key={f.q} style={{ background: "#fff", borderRadius: "14px", padding: "20px 24px" }}>
                <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", fontFamily: "Sora, sans-serif", fontWeight: "600", fontSize: "17px" }}>
                  {f.q}<span style={{ flex: "none", fontSize: "22px", color: GREEN }} aria-hidden="true">+</span>
                </summary>
                <p style={{ color: "#4C6155", lineHeight: "1.6", marginTop: "12px" }}>{toJsx(f.a)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: DARK, color: "#F7F7F2", padding: "96px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.08", color: "#F7F7F2" }}>
              Be the answer in<br />
              <span style={{ color: PINK }}><Typewriter className="cta-tw" words={["Google", "ChatGPT", "Perplexity", "AI Overviews", "every answer"]} /></span>
            </h2>
            <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#DDE0D5" }}>{c.ctaText}</p>
            <form action="/book" method="get" style={{ width: "100%", maxWidth: "760px", margin: "8px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "16px", textAlign: "left" }}>
              <Field id="bc-name" name="name" label="Full name" type="text" ph="Jane Smith" h={56} bg="#13352A" />
              <Field id="bc-email" name="email" label="Work email" type="email" ph="jane@company.com" h={56} bg="#13352A" />
              <Field id="bc-website" name="website" label="Website URL" type="url" ph="https://yourcompany.com" h={56} bg="#13352A" full />
              <button type="submit" style={{ gridColumn: "1 / -1", height: "60px", border: "none", borderRadius: "999px", background: GREEN, color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: "600", fontSize: "18px", cursor: "pointer" }}>Book a strategy call</button>
            </form>
            {c.ctaAlt && (
              <p style={{ fontSize: "14px", color: "#9DB0A4" }}>{c.ctaAlt.pre} <a href={c.ctaAlt.href} style={{ color: "#F7F7F2" }}>{c.ctaAlt.t}</a></p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
