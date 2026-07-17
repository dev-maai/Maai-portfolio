export default function Gallery() {
  return (
    <>
      <section className="gallery" aria-label="Inside MAAI">
        <p className="gallery-label">Inside the work — organic growth, in motion</p>
        <div className="gallery-track">
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=560&q=72&auto=format&fit=crop" alt="Workspace by a window" loading="lazy" /><span className="cap">Strategy</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&q=72&auto=format&fit=crop" alt="Analytics dashboard" loading="lazy" /><span className="cap">Measurement</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=560&q=72&auto=format&fit=crop" alt="Team collaborating" loading="lazy" /><span className="cap">The team</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=560&q=72&auto=format&fit=crop" alt="Content workspace" loading="lazy" /><span className="cap">Content</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&q=72&auto=format&fit=crop" alt="Charts on a laptop" loading="lazy" /><span className="cap">Reporting</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=560&q=72&auto=format&fit=crop" alt="Answer engines on a phone" loading="lazy" /><span className="cap">AEO</span></div>
          {/* duplicate set for a seamless loop */}
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Strategy</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Measurement</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">The team</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Content</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">Reporting</span></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=560&q=72&auto=format&fit=crop" alt="" loading="lazy" aria-hidden="true" /><span className="cap">AEO</span></div>
        </div>
      </section>
    </>
  );
}
