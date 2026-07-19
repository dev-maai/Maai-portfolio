/* InteractiveHoverButton — on hover a magenta dot expands to fill the pill while
   the label swaps for the label + arrow. Original build. Renders an <a> when href
   is given, otherwise a <button>. */
export default function InteractiveHoverButton({ href, children, className = "", ...rest }) {
  const inner = (
    <>
      <span className="ihb-dot" aria-hidden="true" />
      <span className="ihb-label">{children}</span>
      <span className="ihb-hover" aria-hidden="true">
        {children}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );
  if (href) {
    return <a className={`ihb ${className}`} href={href} {...rest}>{inner}</a>;
  }
  return <button type="button" className={`ihb ${className}`} {...rest}>{inner}</button>;
}
