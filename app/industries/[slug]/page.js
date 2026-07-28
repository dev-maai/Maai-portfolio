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
  logistics: {
    name: "Logistics",
    tag: "Freight",
    blurb:
      "Long buying cycles reward the carrier that shows up early and often. We build the organic presence that gets you into the shortlist before an RFP is ever written.",
  },
  /* "self-storage", "supply-chain", "saas" and removals-and-relocations have
     their own dedicated pages under app/industries/<slug>/ */
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
