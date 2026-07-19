export default function Gallery() {
  return (
    <>
      <section className="gallery" aria-label="Inside MAAI">
        <p className="gallery-label">Inside the work — organic growth, in motion</p>
        <div className="gallery-track">
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=560&q=72&auto=format&fit=crop" alt="Workspace by a window" loading="lazy" /><span className="cap">Strategy</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=560&q=72&auto=format&fit=crop" alt="Analytics dashboard" loading="lazy" /><span className="cap">Measurement</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=560&q=72&auto=format&fit=crop" alt="Team collaborating" loading="lazy" /><span className="cap">The team</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=560&q=72&auto=format&fit=crop" alt="Content workspace" loading="lazy" /><span className="cap">Content</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=560&q=72&auto=format&fit=crop" alt="Charts on a laptop" loading="lazy" /><span className="cap">Reporting</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=560&q=72&auto=format&fit=crop" alt="Answer engines on a phone" loading="lazy" /><span className="cap">AEO</span></div>
          {/* duplicate set for a seamless loop */}
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Strategy</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Measurement</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">The team</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Content</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Reporting</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">AEO</span></div>
        </div>
      </section>
    </>
  );
}
