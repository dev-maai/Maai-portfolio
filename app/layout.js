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


export default function RootLayout({ children }) {
  return (
    /* Dark mode removed — the palette is pinned to light. The token system keeps
       its `[data-theme="light"]` scoping, so this attribute is what activates it. */
    <html
      lang="en"
      data-theme="light"
      className={`${sora.variable} ${inter.variable} ${spaceMono.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
