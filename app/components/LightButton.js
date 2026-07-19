/* LightButton — adapted from a Uiverse light-button (by kamehame-ha), rethemed to
   MAAI: an evergreen pill with the magenta Bindu dot floating above it, and on
   hover a magenta "single-stroke" light beam casts down over the button while it
   lights up. Renders as a real link. */
export default function LightButton({ href = "#", children }) {
  return (
    <a className="light-button" href={href}>
      <span className="lb bt">
        <span className="lb-light-holder" aria-hidden="true">
          <span className="lb-dot" />
          <span className="lb-light" />
        </span>
        <span className="lb-holder">
          <span>{children}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </span>
    </a>
  );
}
