import ScrollProgress from "../components/ScrollProgress";
import Nav from "../components/Nav";
import KineticHero from "../components/KineticHero";
import AboutSections from "../components/AboutSections";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";

export const metadata = {
  title: "About — MAAI",
  description:
    "MAAI is a specialist organic-search agency — we make brands the answer their buyers find on Google and the AI assistants that now shape every shortlist.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="about-page">
        <KineticHero />
        <AboutSections />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
