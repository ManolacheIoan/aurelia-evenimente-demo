import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import "./globals.css";

// Subsetul latin-ext aduce ă, â, î, ș, ț din același font (fără litere „lipite” din alt font).
const serif = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: ["500"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });
const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap", preload: false });

const title = "Restaurant Aurelia — sală de nunți și evenimente (site demonstrativ)";

export const metadata: Metadata = {
  metadataBase: new URL(site.url + "/"),
  title: { default: title, template: `%s | ${site.name} Tecuci` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "./" },
  keywords: ["restaurant Tecuci", "sală nuntă Tecuci", "sală botez Tecuci", "sală evenimente Tecuci", "cramă Tecuci"],
  openGraph: { type: "website", locale: "ro_RO", siteName: site.name, title, description: site.description, url: "./", images: [{ url: "og.jpg", width: 1200, height: 630, alt: "Sală de evenimente aranjată pentru o petrecere" }] },
  twitter: { card: "summary_large_image", title, description: site.description, images: ["og.jpg"] },
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#fffdf9", colorScheme: "light" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "EventVenue"],
  "@id": `${site.url}/#venue`,
  name: site.name,
  alternateName: site.altName,
  description: site.description,
  url: site.url + "/",
  image: `${site.url}/og.jpg`,
  telephone: site.phone.tel,
  address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.county, addressCountry: site.address.country },
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.google.ratingValue, bestRating: 5, reviewCount: site.google.reviewCount },
  sameAs: site.social.filter((s) => s.url).map((s) => s.url),
  hasMap: site.google.directionsUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marchează JS activ înainte de randare: animațiile de apariție nu ascund nimic fără JS. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#continut" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:p-3 focus:shadow">Sari la conținut</a>
        <div className="bg-wine px-4 py-1.5 text-center text-[0.7rem] font-medium tracking-wide text-white">{site.demoBanner}</div>
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <MobileBar />
        <Reveal />
      </body>
    </html>
  );
}
