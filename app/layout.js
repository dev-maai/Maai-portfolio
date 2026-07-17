import { Bricolage_Grotesque, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

/* Typefaces come from the original site's design system. next/font
   self-hosts and preloads each, then exposes it as a CSS custom property
   on <html>, which globals.css consumes via var(). */
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MAAI — Organic growth. Owned.",
  description:
    "An SEO agency built for global B2B companies who want a growth channel worth defending to the board.",
};

/* Runs before first paint so the correct theme is on <html> immediately —
   otherwise the dark default would flash for a light-theme user.
   Mirrors the toggle in app/components/ThemeToggle.js. */
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("maai-theme");
    var sysLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.setAttribute("data-theme", saved || (sysLight ? "light" : "dark"));
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    /* suppressHydrationWarning: themeScript sets data-theme before React
       hydrates, so server and client markup intentionally differ. */
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
