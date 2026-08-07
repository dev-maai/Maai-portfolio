/* LightButton — an evergreen pill CTA that lights up on hover. Renders as a real
   link. (The floating dot + downward "spotlight" beam were removed.) */
export default function LightButton({ href = "#", children }) {
  return (
    <a className="light-button" href={href}>
      <span className="lb bt">
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
