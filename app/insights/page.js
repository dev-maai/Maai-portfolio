import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";
import InsightsGrid from "./InsightsGrid";
import { POSTS, TOPICS, INDUSTRIES } from "../lib/posts";
import "./insights.css";

export const metadata = {
  title: "Industry Insights | MAAI",
  description:
    "SEO, AEO and AI search insights for logistics, self storage, removals and real estate companies, from MAAI's client work.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Nav />
      <main className="ins-page">
        <section className="ins-hero">
          <img src="/selfstorage/compounding-authority.jpg" alt="" />
          <span className="ins-hero-tint" aria-hidden="true" />
          <h1>Industry Insights</h1>
        </section>
        <div className="ins-wrap">
          <InsightsGrid posts={posts} topics={TOPICS} industries={INDUSTRIES} />
        </div>
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
