import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import HeroCine from "./components/HeroCine";
import MarqueeSection from "./components/MarqueeSection";
import Creds from "./components/Creds";
import Thesis from "./components/Thesis";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Interlude from "./components/Interlude";
import Products from "./components/Products";
import Stack from "./components/Stack";
import Report from "./components/Report";
import Plan from "./components/Plan";
import Signals from "./components/Signals";
import WorkScroll from "./components/WorkScroll";
import Results from "./components/Results";
import Values from "./components/Values";
import Team from "./components/Team";
import Impact from "./components/Impact";
import Faq from "./components/Faq";
import Proof from "./components/Proof";
import Insights from "./components/Insights";
import Fit from "./components/Fit";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import SiteEffects from "./components/SiteEffects";

/* Order carries the 01 → 02 → 03 numbering in the copy: Services (01) runs
   straight through Values (02), Signals, and the receipts (03) before the
   supporting sections pick back up. */
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <HeroCine />
      <MarqueeSection />
      <Creds />
      <Thesis />
      <Gallery />
      <Benefits />
      <Services />
      <Interlude />
      <Values />
      <Signals />
      <WorkScroll />
      <Products />
      <Stack />
      <Report />
      <Plan />
      <Results />
      <Team />
      <Impact />
      <Faq />
      <Proof />
      <Insights />
      <Fit />
      <Cta />
      <Footer />
      <SiteEffects />
    </>
  );
}
