import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Painters Northern Beaches Sydney | New Seed Painting Group',
  description:
    'Premium residential & commercial painters Sydney. New Seed Painting Group serves the Northern Beaches and Greater Sydney — licensed, insured, 5-year guarantee. Free quote.',
  keywords:
    'painters northern beaches sydney, painters sydney, residential painting sydney, commercial painters sydney, exterior painting sydney, interior painting sydney, roof painting sydney, strata painting sydney, manly painters, dee why painters',
  openGraph: {
    title: 'Painters Northern Beaches Sydney | New Seed Painting Group',
    description:
      "Premium painters serving Sydney's Northern Beaches & Greater Sydney. Licensed, insured, 5-year workmanship guarantee.",
    url: 'https://newseedpainting.com',
    siteName: 'New Seed Painting Group',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painters Northern Beaches Sydney | New Seed Painting Group',
    description:
      "Premium painters serving Sydney's Northern Beaches & Greater Sydney. Licensed, insured, 5-year workmanship guarantee.",
  },
  metadataBase: new URL('https://newseedpainting.com'),
};

// JSON-LD Schema — LocalBusiness / PaintingContractor
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PaintingContractor',
  name: 'New Seed Painting Group',
  description: "Premium residential and commercial painting services across Sydney's Northern Beaches and Greater Sydney.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manly Vale',
    addressRegion: 'NSW',
    postalCode: '2093',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-33.7969',
    longitude: '151.2767',
  },
  areaServed: "Sydney's Northern Beaches and Greater Sydney",
  telephone: '+61400524541',
  email: 'info@newseedgroup.com.au',
  url: 'https://newseedpainting.com',
  foundingDate: '2024',
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
