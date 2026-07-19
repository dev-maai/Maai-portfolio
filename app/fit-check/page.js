import ScrollProgress from "../components/ScrollProgress";
import Nav from "../components/Nav";
import Fit from "../components/Fit";
import Footer from "../components/Footer";
import SiteEffects from "../components/SiteEffects";

export const metadata = {
  title: "60-second fit check — MAAI",
  description:
    "Four quick questions. We'll tell you honestly whether organic is worth it for your business — what it would take, and when you'd see it. If it isn't a fit, we'll say so.",
};

/* The fit check lives on its own route now, so it no longer sits directly on top
   of the "book a strategy call" CTA on the home page. Soft ask here; hard ask
   (the call) stays the finale of the home page. */
export default function FitCheckPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="fit-page">
        <Fit />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
