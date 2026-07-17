"use client";

/* Flips the data-theme attribute the same way the original site did, and
   persists the choice. Which icon is visible is decided by CSS, so this
   holds no state — nothing to hydrate, nothing to mismatch. */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("maai-theme", next);
    } catch {
      /* private mode — the theme still applies for this session */
    }
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      title="Toggle theme"
    >
      <svg className="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="ic-moon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
