import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  ADDRESS_STREET,
  ADDRESS_ADDITION,
  PHONE_1_HREF,
} from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/hero.webp`, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Locksmith", "LocalBusiness"],
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_1_HREF,
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, EC-Karte",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS_ADDITION}, ${ADDRESS_STREET}`,
    addressLocality: "Singen",
    postalCode: "78224",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.7599,
    longitude: 8.8397,
  },
  areaServed: {
    "@type": "City",
    name: "Singen (Hohentwiel)",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schlüsseldienst & Schuhservice Leistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schlüssel nachmachen Singen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Türöffnung Singen – Notdienst 24/7" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto-Schlüssel Service Singen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schuhreparatur Singen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Batteriewechsel Uhren Singen" } },
    ],
  },
  image: `${SITE_URL}/hero.webp`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
