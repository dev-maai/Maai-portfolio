export default function Nav() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="#">MA<span>A</span><em>I</em></a>
          <nav className="nav-links" id="navmenu">
            <a href="#thesis">Why organic</a>
            <a href="#services">Services</a>
            <a href="#selected-work">Work</a>
            <a href="#team">Team</a>
            <a href="#accountability">Accountability</a>
            <a href="#faq">FAQ</a>
            <a className="btn nav-cta-m" href="#contact">Book a strategy call</a>
          </nav>
          <div className="nav-right">
            <button className="theme-toggle" type="button" aria-label="Toggle light and dark mode" title="Toggle theme">
              <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              <svg className="ic-moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" /></svg>
            </button>
            <a className="btn nav-cta-d" href="#contact">Book a strategy call</a>
            <button className="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navmenu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
