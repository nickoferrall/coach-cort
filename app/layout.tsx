import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogProvider } from "@/components/posthog-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Cort Fitness - Etobicoke's Best Personal Training Experience",
  description:
    "Customized training specific to your goals. Build muscle, lose fat, and become the strongest version of yourself at Cort Fitness in Etobicoke.",
  keywords: [
    "Cort Fitness",
    "Coach Cort",
    "Etobicoke personal training",
    "personal trainer Etobicoke",
    "gym Etobicoke",
    "HYROX training Toronto",
    "strength training Etobicoke",
    "group fitness classes Etobicoke",
    "youth fitness Etobicoke",
    "Andrew Cortellessa",
  ],
  authors: [{ name: "Cort Fitness" }],
  creator: "Cort Fitness",
  publisher: "Cort Fitness",
  metadataBase: new URL("https://coachcort.com"),
  alternates: {
    canonical: "https://coachcort.com",
  },
  openGraph: {
    title: "Cort Fitness - Etobicoke's Best Personal Training Experience",
    description:
      "Customized training specific to your goals. Build muscle, lose fat, and become the strongest version of yourself.",
    url: "https://coachcort.com",
    siteName: "Cort Fitness",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg",
        width: 1200,
        height: 630,
        alt: "Cort Fitness Personal Training Gym in Etobicoke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cort Fitness - Etobicoke's Best Personal Training Experience",
    description:
      "Customized training specific to your goals. Build muscle, lose fat, and become the strongest version of yourself.",
    images: ["https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Cort Fitness",
  image: "https://res.cloudinary.com/dngpzsztf/image/upload/q_auto,f_auto/coach-cort/strength-training-in-Etobicoke.jpg",
  "@id": "https://coachcort.com",
  url: "https://coachcort.com",
  telephone: "+1-647-967-0336",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "313 Evans Avenue",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M8Z 1K2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6204,
    longitude: -79.5084,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/cortfitness/",
    "https://www.youtube.com/@cortfitness",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programs & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Group Fitness Classes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Youth Group Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HYROX Training",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://coachcort.com" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Etobicoke" />
        <meta name="geo.position" content="43.6204;-79.5084" />
        <meta name="ICBM" content="43.6204, -79.5084" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
