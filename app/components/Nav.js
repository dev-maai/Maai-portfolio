import { nav } from "../content";
import OwnershipDot from "./OwnershipDot";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          MAAI
          <OwnershipDot />
        </a>
        <nav className="nav-links">
          {nav.links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <ThemeToggle />
          <a className="btn" href="#contact">
            {nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
