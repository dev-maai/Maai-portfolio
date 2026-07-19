import ScrollProgress from "../components/ScrollProgress";
import Nav from "../components/Nav";
import Team from "../components/Team";
import Insights from "../components/Insights";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";

export const metadata = {
  title: "Team — MAAI",
  description:
    "The senior specialists accountable to your organic growth. No juniors learning on your account — every engagement is run by people who own their outcomes.",
};

/* Team lives on its own route now (linked from the nav as /team). Full-page shell:
   nav, the team section, the primary CTA, and the footer. */
export default function TeamPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="team-page">
        <Team />
        <Insights />
      </main>
      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
