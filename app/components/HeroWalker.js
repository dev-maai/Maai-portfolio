/* Walker-Sands-style hero: a full-bleed looping video inside the curved panel,
   with the giant wordline straddling the boundary between this section and the
   band below — half the type over the video, half over the porcelain. */
export default function HeroWalker() {
  return (
    <section className="hero-ws" id="top" aria-label="Intro">
      <div className="hws-panel">
        <video
          className="hws-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <span className="hws-veil" aria-hidden="true" />
      </div>

      <h1 className="hws-giant">
        <span className="hw-out">Organic</span> <span className="hw-solid">Compounded.</span>
      </h1>
    </section>
  );
}
