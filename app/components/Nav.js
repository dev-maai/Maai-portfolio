"use client";

/* Tubelight navbar — original build (inspired by the tubelight-navbar pattern),
   rethemed to MAAI: a magenta "lamp" bar with a soft glow sits over the active
   item and slides between items via a shared layout animation. Active follows the
   hovered item, and otherwise the section currently in view (scroll-spy), or the
   route on /team. */
import { Fragment, useEffect, useState } from "react";
import { NAV_LINKS as LINKS } from "../lib/nav";

/* Industry landing pages, surfaced as a dropdown under "Industries". */
const INDUSTRIES = [
  { label: "Supply Chain", href: "/industries/supply-chain" },
  { label: "Self Storage", href: "/industries/self-storage" },
  { label: "SaaS", href: "/industries/saas" },
  { label: "Removals & Relocations", href: "/industries/removals-and-relocations" },
  { label: "Logistics", href: "/seo-agency-for-logistics-companies" },
];


export default function Nav() {
  const [hover, setHover] = useState(null);
  const [spy, setSpy] = useState(null);
  const [indOpen, setIndOpen] = useState(false);

  /* On mobile the "Industries" row toggles its submenu instead of navigating,
     so the menu stays short and the chevron actually does something. On desktop
     it keeps its hover-dropdown behaviour and the link still works. */
  const onIndustries = (e) => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width:760px)").matches) {
      e.preventDefault();
      setIndOpen((o) => !o);
    }
  };

  useEffect(() => {
    if (window.location.pathname.startsWith("/team")) {
      setSpy(LINKS.findIndex((l) => l.id === "__team"));
      return;
    }
    if (window.location.pathname.startsWith("/about")) {
      setSpy(LINKS.findIndex((l) => l.id === "__about"));
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
              <Fragment key={l.href}>
                <a
                  href={l.href}
                  className={`tube-item${active === i ? " on" : ""}`}
                  aria-current={active === i ? "page" : undefined}
                  onMouseEnter={() => setHover(i)}
                >
                  <span className="tube-label">{l.label}</span>
                </a>
                {i === 0 && (
                  <div className={`nav-dd${indOpen ? " open" : ""}`} onMouseEnter={() => setHover(null)}>
                    <a href="/#outcomes" className="tube-item nav-dd-trigger" aria-haspopup="true" aria-expanded={indOpen} onClick={onIndustries}>
                      <span className="tube-label">Industries</span>
                      <svg className="nav-dd-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                    </a>
                    <div className="nav-dd-menu" role="menu">
                      {INDUSTRIES.map((ind) => (
                        <a key={ind.href} href={ind.href} className="nav-dd-link" role="menuitem">
                          {ind.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </Fragment>
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
