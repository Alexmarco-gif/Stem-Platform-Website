import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = "https://thestemgrid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stem Cogent | Decision Intelligence for Nigerian Financial Services",
    template: "%s | Stem Cogent"
  },
  description:
    "Nigeria-first decision intelligence that converts fragmented market signals into validated, explainable, decision-ready operational intelligence.",
  applicationName: "Stem Cogent",
  keywords: [
    "decision intelligence Nigeria",
    "Nigerian fintech intelligence",
    "financial services market intelligence",
    "regulatory intelligence Nigeria",
    "competitor intelligence fintech",
    "financial infrastructure monitoring",
    "African financial services intelligence"
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
    title: "Stem Cogent | Decision Intelligence for Nigerian Financial Services",
    description:
      "Turn fragmented regulatory, competitive, infrastructure, consumer, and market signals into intelligence your team can defend.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Stem Cogent | Decision Intelligence for Nigerian Financial Services",
    description:
      "Validated, explainable, decision-ready market intelligence for Nigerian financial services.",
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
  alternateName: "Stem",
  url: siteUrl,
  logo: `${siteUrl}/v4.png`,
  image: `${siteUrl}/opengraph-image`,
  email: "stemsystem883@gmail.com",
  description:
    "The company building Stem Cogent, a Nigeria-first decision intelligence operating system for fintech and financial-services teams.",
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
  url: `${siteUrl}/platform`,
  description:
    "An event-driven decision intelligence platform that converts governed market signals into prioritized feeds, evidence-backed dossiers, alerts, digests, entity intelligence, and grounded investigations.",
  provider: { "@id": `${siteUrl}/#organization` },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Fintech operators, financial-services institutions, and Africa-focused strategic advisory firms"
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "99",
    highPrice: "999",
    offerCount: "3",
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
