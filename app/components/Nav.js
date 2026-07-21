"use client";

/* Tubelight navbar — original build (inspired by the tubelight-navbar pattern),
   rethemed to MAAI: a magenta "lamp" bar with a soft glow sits over the active
   item and slides between items via a shared layout animation. Active follows the
   hovered item, and otherwise the section currently in view (scroll-spy), or the
   route on /team. */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Why organic", href: "/#thesis", id: "thesis" },
  { label: "Services", href: "/#signals", id: "signals" },
  { label: "Case studies", href: "/#values", id: "values" },
  { label: "Team", href: "/team", id: "__team" },
];

export default function Nav() {
  const [hover, setHover] = useState(null);
  const [spy, setSpy] = useState(null);

  useEffect(() => {
    if (window.location.pathname.startsWith("/team")) {
      setSpy(LINKS.findIndex((l) => l.id === "__team"));
      return;
    }
    const map = new Map();
    LINKS.forEach((l, i) => {
      const el = document.getElementById(l.id);
      if (el) map.set(el, i);
    });
    if (!map.size) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && map.has(e.target)) setSpy(map.get(e.target));
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    map.forEach((_, el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const active = hover != null ? hover : spy;

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="logo" href="/" aria-label="MAAI home">ma<span className="ai">ai</span></a>
          <nav className="nav-links tube-nav" id="navmenu" onMouseLeave={() => setHover(null)}>
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`tube-item${active === i ? " on" : ""}`}
                aria-current={active === i ? "page" : undefined}
                onMouseEnter={() => setHover(i)}
              >
                {active === i && (
                  <motion.span
                    layoutId="tubelight"
                    className="tube-ind"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  >
                    <span className="tube-bar" />
                    <span className="tube-halo" />
                  </motion.span>
                )}
                <span className="tube-label">{l.label}</span>
              </a>
            ))}
            <a className="btn amber nav-cta-m" href="/#contact">Book a strategy call</a>
          </nav>
          <div className="nav-right">
            <button className="theme-toggle" type="button" aria-label="Toggle light and dark mode" title="Toggle theme">
              <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
              <svg className="ic-moon" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" /></svg>
            </button>
            <a className="btn amber nav-cta-d" href="/#contact">Book a strategy call</a>
            <button className="nav-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navmenu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
