import { footer } from "../content";
import OwnershipDot from "./OwnershipDot";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <span className="logo">
              MAAI
              <OwnershipDot />
            </span>
            <p className="blurb">{footer.blurb}</p>
            <div className="direct">
              <h4>{footer.directLabel}</h4>
              <a href="#contact">
                {footer.directCta}
                <OwnershipDot />
              </a>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-base">
          <span>{footer.copyright}</span>
          <span>
            {footer.tagline}
            <OwnershipDot />
          </span>
        </div>
      </div>
    </footer>
  );
}
