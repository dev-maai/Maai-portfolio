import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import HeroWalker from "./components/HeroWalker";
import Tagline from "./components/Tagline";
import Thesis from "./components/Thesis";
import SignalsBanner from "./components/SignalsBanner";
import InvestStats from "./components/InvestStats";
import Outcomes from "./components/Outcomes";
import Values from "./components/Values";
import Signals from "./components/Signals";
import Plan from "./components/Plan";
import Proof from "./components/Proof";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import SiteEffects from "./components/SiteEffects";

/* The rich homepage, with two sections adapted in from the homepage-structure doc:
   the Tagline ("Organic Growth. Compounded.") resolving straight out of the video
   hero, and the Outcomes cards ("what the work produces") after the Services bento.
   Everything else — the cinematic video hero, the 01/02/03 narrative, the real
   Anglo Pacific / Pickfords receipts, proof, report — is kept as-is. */
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <HeroWalker />
      <Tagline />
      <Thesis />
      <SignalsBanner />
      <InvestStats />
      <Signals />
      <Outcomes />
      <Values />
      <Plan />
      <Proof />
      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
