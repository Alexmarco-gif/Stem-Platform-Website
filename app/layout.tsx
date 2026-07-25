import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = "https://thestemgrid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stem-Cogent | Decision Intelligence for African Finance",
    template: "%s | Stem-Cogent"
  },
  description:
    "Validated, explainable decision intelligence for Nigerian fintech and financial-services leaders.",
  applicationName: "Stem-Cogent",
  keywords: [
    "decision intelligence Nigeria",
    "African fintech intelligence",
    "financial services market signals",
    "business intelligence Nigeria"
  ],
  authors: [{ name: "Stem Systems Ltd" }],
  creator: "Stem Systems Ltd",
  publisher: "Stem Systems Ltd",
  category: "Decision intelligence",
  icons: {
    icon: [{ url: "/v4.png", type: "image/png", sizes: "331x333" }],
    shortcut: ["/v4.png"],
    apple: [{ url: "/v4.png", sizes: "331x333", type: "image/png" }]
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Stem-Cogent",
    url: siteUrl,
    title: "Stem-Cogent | Decision Intelligence for African Finance",
    description:
      "Detect meaningful market changes early and move with explainable confidence.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem-Cogent | Decision Intelligence for African Finance",
    description:
      "Detect meaningful market changes early and move with explainable confidence.",
    images: ["/opengraph-image"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07112B",
  colorScheme: "light"
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Stem Systems Ltd",
  alternateName: "Stem-Cogent",
  url: siteUrl,
  logo: `${siteUrl}/v4.png`,
  image: `${siteUrl}/opengraph-image`,
  email: "stemsystem883@gmail.com",
  description:
    "A decision intelligence company building for African financial services.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG"
  },
  founder: [
    { "@type": "Person", name: "Odion O. Alex" },
    { "@type": "Person", name: "Gift Chinedu Nduka" }
  ],
  sameAs: [
    "https://www.linkedin.com/in/alex-marco1820/",
    "https://www.linkedin.com/in/gift-nduka/"
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
