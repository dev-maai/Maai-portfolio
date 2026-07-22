import { notFound } from "next/navigation";
import ScrollProgress from "../../components/ScrollProgress";
import Nav from "../../components/Nav";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";

/* One themed landing per industry (linked from the "Industries we lead" bento).
   Kept lean for now — hero + the shared booking CTA + footer — so the cards lead
   somewhere real rather than 404-ing. Fill in the detail per sector later. */
const INDUSTRIES = {
  "self-storage": {
    name: "Self Storage",
    tag: "Storage",
    blurb:
      "Occupancy is won on search. We put your facilities in front of movers the moment they start looking — across local map results, national comparison queries and the answer engines.",
  },
  removals: {
    name: "Removals",
    tag: "Moving",
    blurb:
      "From same-city moves to international relocations, buyers research before they call. We make you the removals firm they shortlist — and the one AI assistants recommend.",
  },
  logistics: {
    name: "Logistics",
    tag: "Freight",
    blurb:
      "Long buying cycles reward the carrier that shows up early and often. We build the organic presence that gets you into the shortlist before an RFP is ever written.",
  },
  saas: {
    name: "SaaS",
    tag: "Software",
    blurb:
      "Pipeline compounds when you answer the questions buyers actually ask. We turn search and answer engines into a durable, lower-CAC acquisition channel.",
  },
  "supply-chain": {
    name: "Supply Chain",
    tag: "Supply",
    blurb:
      "Complex, high-consideration purchases start with research. We earn you visibility across every link your customers search — and the authority to be trusted with it.",
  },
};

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  return ind
    ? {
        title: `${ind.name} SEO — MAAI`,
        description: ind.blurb,
      }
    : { title: "Industries — MAAI" };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) notFound();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="ind-hero">
        <div className="wrap">
          <h1>
            Organic growth for <span className="mark">{ind.name}</span>.
          </h1>
          <p className="lede">{ind.blurb}</p>
          <div className="ind-actions">
            <a className="btn amber" href="/#contact">Book a strategy call</a>
            <a className="cta-link" href="/#outcomes">← All industries</a>
          </div>
        </div>
      </main>
      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
