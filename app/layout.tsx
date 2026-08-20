import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = "https://thestemgrid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stem Cogent | Decision Intelligence for Nigerian Fintechs",
    template: "%s | Stem Cogent"
  },
  description:
    "Know which external changes matter to your fintech—and what decision they require.",
  applicationName: "Stem Cogent",
  keywords: [
    "decision intelligence Nigeria",
    "Nigerian fintech intelligence",
    "fintech decision intelligence",
    "regulatory intelligence Nigeria",
    "competitor intelligence fintech",
    "financial infrastructure monitoring",
    "fintech Decision Briefs"
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
    siteName: "Stem Cogent",
    url: siteUrl,
    title: "Stem Cogent | Decision Intelligence for Nigerian Fintechs",
    description:
      "Know which changes matter to your fintech—and what decision they require.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cogent | Decision Intelligence for Nigerian Fintechs",
    description:
      "Evidence-backed Decision Briefs for Nigerian fintech teams.",
    images: ["/opengraph-image"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A4BFF",
  colorScheme: "light"
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Stem Systems Ltd",
  alternateName: "Stem",
  url: siteUrl,
  logo: `${siteUrl}/v4.png`,
  image: `${siteUrl}/opengraph-image`,
  email: "stemsystem883@gmail.com",
  description:
    "The company building Stem Cogent, Nigeria-first decision intelligence for fintech teams.",
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

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Stem Cogent",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-NG"
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteUrl}/#software`,
  name: "Stem Cogent Decision Intelligence Platform",
  alternateName: "Stem Cogent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${siteUrl}/product`,
  description:
    "Stem Cogent connects verified external changes to a fintech's company context, responsibilities and priorities, then turns relevant developments into evidence-backed Decision Briefs.",
  provider: { "@id": `${siteUrl}/#organization` },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Founders, strategy, operations, finance and product leaders at Nigerian fintechs"
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "149",
    highPrice: "1250",
    offerCount: "4",
    url: `${siteUrl}/pricing`
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
        />
      </body>
    </html>
  );
}
