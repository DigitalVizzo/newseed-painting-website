import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'New Seed Painting Group | Premium Painters Sydney',
  description:
    "Sydney's trusted painting professionals. Residential, commercial, exterior and interior painting across Greater Sydney. Licensed, insured, 5-star rated. Get a free quote today.",
  keywords:
    'painters sydney, residential painting sydney, commercial painters sydney, exterior painting sydney, interior painting sydney, roof painting sydney, strata painting sydney',
  openGraph: {
    title: 'New Seed Painting Group | Premium Painters Sydney',
    description:
      "Sydney's trusted painting professionals. 500+ projects completed. Licensed & insured.",
    url: 'https://newseedpainting.com',
    siteName: 'New Seed Painting Group',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Seed Painting Group | Premium Painters Sydney',
    description:
      "Sydney's trusted painting professionals. 500+ projects completed. Licensed & insured.",
  },
  metadataBase: new URL('https://newseedpainting.com'),
};

// JSON-LD Schema — LocalBusiness / PaintingContractor
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PaintingContractor',
  name: 'New Seed Painting Group',
  description: 'Premium painting services across Greater Sydney',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  areaServed: 'Greater Sydney',
  telephone: '+61400000000',
  url: 'https://newseedpainting.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
  },
  priceRange: '$$',
  openingHours: 'Mo-Sa 07:00-18:00',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/* Google Fonts — Playfair Display + Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;800&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
