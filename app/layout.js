import { Sora, Inter, Space_Mono, Fraunces } from "next/font/google";
import "./globals.css";

/* The brand type system, self-hosted and preloaded by next/font, each exposed
   as a custom property the design tokens point at:
     Sora      → --font-display  (geometric confidence, headlines + wordmark)
     Inter     → --font-body     (the quiet reading work)
     Space Mono→ --font-mono     (audited figures, deltas, statuses)
     Fraunces  → --font-serif    (the human voice — italic, rationed to one line) */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MAAI — Organic Growth, Compounded",
  description:
    "MAAI is an SEO agency for global B2B. Platforms change — Google yesterday, LLMs today. Organic growth stays. We take business accountability.",
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
      className={`${sora.variable} ${inter.variable} ${spaceMono.variable} ${fraunces.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
