import { CONTACT_EMAIL, mailtoHref } from "../lib/contact";
import { NAV_LINKS } from "../lib/nav";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="logo">ma<span className="ai">ai</span></div>
              </div>
              <p style={{ maxWidth: "34ch" }}>Organic growth, wherever attention lives. Accountable to your business, not just your rankings.</p>
              <p className="serif-voice" style={{ marginTop: "14px", fontSize: "17px" }}>Because every ranking is a person deciding something.</p>
            </div>
            <div>
              <h4>Menu</h4>
              {/* same links as the header — both read from lib/nav.js */}
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={mailtoHref("general")}>{CONTACT_EMAIL}</a></li>
                <li><a href="/#contact">Book a strategy call</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 MAAI. All rights reserved.</span>
            <span>Hyperfixated on organic growth.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
