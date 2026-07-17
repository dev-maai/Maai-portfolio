export default function MarqueeSection() {
  return (
    <>
      <section className="marquee-section" id="work">
        <p className="marquee-label">Trusted by teams building at scale</p>
        <div className="marquee">
          {/* Duplicate the set once for a seamless loop. Swap monograms for real client SVG logos. */}
          <span className="brand"><span className="mk"><span>V</span></span>Verdant&nbsp;Co</span><span className="brand"><span className="mk"><span>N</span></span>NorthPeak</span>
          <span className="brand"><span className="mk"><span>A</span></span>Atlas&nbsp;Group</span><span className="brand"><span className="mk"><span>H</span></span>Halcyon</span>
          <span className="brand"><span className="mk"><span>M</span></span>Meridian</span><span className="brand"><span className="mk"><span>C</span></span>Cobalt&nbsp;Labs</span>
          <span className="brand"><span className="mk"><span>T</span></span>Terra&nbsp;Foods</span><span className="brand"><span className="mk"><span>K</span></span>Kestrel</span>
          <span className="brand"><span className="mk"><span>V</span></span>Verdant&nbsp;Co</span><span className="brand"><span className="mk"><span>N</span></span>NorthPeak</span>
          <span className="brand"><span className="mk"><span>A</span></span>Atlas&nbsp;Group</span><span className="brand"><span className="mk"><span>H</span></span>Halcyon</span>
          <span className="brand"><span className="mk"><span>M</span></span>Meridian</span><span className="brand"><span className="mk"><span>C</span></span>Cobalt&nbsp;Labs</span>
          <span className="brand"><span className="mk"><span>T</span></span>Terra&nbsp;Foods</span><span className="brand"><span className="mk"><span>K</span></span>Kestrel</span>
        </div>
      </section>
    </>
  );
}
