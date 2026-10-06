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

/* Canonical origin for the whole site — keep in sync with BASE_URL in
   app/sitemap.js and app/robots.js. metadataBase makes every relative OG /
   Twitter image resolve against it. */
const SITE_URL = "https://www.maai.agency";
const SITE_TITLE = "MAAI | Organic Growth, Compounded";
const SITE_DESCRIPTION =
  "MAAI is an SEO agency for global B2B. Platforms change: Google yesterday, LLMs today. Organic growth stays. We take business accountability.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "MAAI",
    locale: "en_US",
    type: "website",
    images: [
      {
        /* The hero's poster frame doubles as the social card until a
           dedicated 1200×630 OG image ships. */
        url: "/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "MAAI — organic growth, compounded",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero-poster.jpg"],
  },
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
