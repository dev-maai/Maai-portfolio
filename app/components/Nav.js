"use client";

/* Tubelight navbar — original build (inspired by the tubelight-navbar pattern),
   rethemed to MAAI: a magenta "lamp" bar with a soft glow sits over the active
   item and slides between items via a shared layout animation. Active follows the
   hovered item, and otherwise the section currently in view (scroll-spy), or the
   route on /team. */
import { useEffect, useState } from "react";
import { NAV_LINKS as LINKS } from "../lib/nav";


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
                <span className="tube-label">{l.label}</span>
              </a>
            ))}
            <a className="btn amber nav-cta-m" href="/#contact">Book a strategy call</a>
          </nav>
          <div className="nav-right">
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
