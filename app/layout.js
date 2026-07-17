import { Bricolage_Grotesque, Instrument_Sans, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

/* The original loaded these from the Google Fonts CDN. next/font self-hosts
   and preloads them instead, then exposes each as a custom property that the
   --font-display / --font-body / --font-mono design tokens point at. */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const spline = Spline_Sans_Mono({
  variable: "--font-spline",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MAAI — Organic Growth That Compounds",
  description:
    "MAAI is an organic growth agency. Platforms change — Google yesterday, LLMs today. Organic growth stays. We take business accountability.",
};

/* Runs before first paint so the right theme is on <html> immediately —
   otherwise the dark default flashes for light-theme users. The toggle
   itself lives in SiteEffects. */
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
      className={`${bricolage.variable} ${instrument.variable} ${spline.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
