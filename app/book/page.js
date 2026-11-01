import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import BookForm from "./BookForm";
import { CASES } from "../lib/cases";
import { CONTACT_EMAIL } from "../lib/contact";
import "./book.css";

export const metadata = {
  title: "Book a Strategy Call | MAAI",
  description:
    "Book a 30-minute strategy call with MAAI to look at your organic search, AEO and AI visibility, and where the biggest opportunities are for your business.",
  alternates: { canonical: "/book" },
};

const POINTS = [
  { h: "30 minutes on Google Meet", p: "The link arrives with your calendar invite.", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { h: "We look at your site before the call", p: "Share your website when you book, and we come prepared.", icon: <path d="M3 12h4l3 8 4-16 3 8h4" /> },
  { h: "You leave with clear next steps", p: "Whether or not we work together.", icon: <path d="M20 6 9 17l-5-5" /> },
];

/* Read on the server so the key works under either name it was saved as in Vercel. */
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || process.env.NEXTPUBLICTURNSTILESITEKEY || "";

export const dynamic = "force-dynamic";

export default function BookPage() {
  const [slug, c] = Object.entries(CASES)[0];
  return (
    <>
      <Nav />
      <main className="bk-page">
        <div className="bk-wrap">
          <div className="bk-intro">
            <h1>Book a strategy call</h1>
            <p className="bk-lead">A 30-minute call to look at your organic search, AEO and AI visibility, and where the biggest opportunities are for your business.</p>
            <ul className="bk-points">
              {POINTS.map((pt) => (
                <li key={pt.h}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{pt.icon}</svg>
                  <div><strong>{pt.h}</strong><span>{pt.p}</span></div>
                </li>
              ))}
            </ul>
            <Link className="bk-proof" href={`/case-studies/${slug}`}>
              <span className="bk-proof-tag">Recent result</span>
              <span className="bk-proof-title">{c.title || c.name}</span>
              <span className="bk-proof-go">Read the case study →</span>
            </Link>
            <p className="bk-alt">Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
          <BookForm siteKey={TURNSTILE_SITE_KEY} />
        </div>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
