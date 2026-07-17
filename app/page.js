import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bridge from "./components/Bridge";
import WhatWeOwn from "./components/WhatWeOwn";
import HowItHolds from "./components/HowItHolds";
import Receipts from "./components/Receipts";
import Testimonials from "./components/Testimonials";
import LeadMagnet from "./components/LeadMagnet";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bridge />
        <WhatWeOwn />
        <HowItHolds />
        <Receipts />
        <Testimonials />
        <LeadMagnet />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
