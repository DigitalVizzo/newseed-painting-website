import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Premium Painters Sydney | New Seed Painting Group',
    template: '%s | New Seed Painting Group',
  },
  description:
    'Sydney\'s premium residential & commercial painters. New Seed Painting Group. Licensed, insured, 5-year workmanship guarantee. Dulux materials. Free quote.',
  keywords: [
    'painters sydney',
    'painting company sydney',
    'house painters sydney',
    'residential painters sydney',
    'commercial painters sydney',
    'interior painting sydney',
    'exterior painting sydney',
    'strata painting sydney',
    'painters northern beaches',
    'painters manly',
    'painters dee why',
    'painters mona vale',
    'painters mosman',
    'painting contractors nsw',
    'licensed painters sydney',
    'dulux painters sydney',
  ],
  authors: [{ name: 'New Seed Painting Group' }],
  creator: 'New Seed Painting Group',
  publisher: 'New Seed Painting Group',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'Premium Painters Sydney | New Seed Painting Group',
    description:
      'Sydney\'s premium residential & commercial painters. Licensed, insured, 5-year workmanship guarantee. Free quote.',
    url: 'https://newseedpainting.com',
    siteName: 'New Seed Painting Group',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/depois.jpg',
        width: 1800,
        height: 1200,
        alt: 'Premium house painting by New Seed Painting Group, Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Painters Sydney | New Seed Painting Group',
    description:
      'Sydney\'s premium residential & commercial painters. Licensed, insured, 5-year workmanship guarantee.',
    images: ['/images/depois.jpg'],
  },
  metadataBase: new URL('https://newseedpainting.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  category: 'Home Services',
};

// JSON-LD: PaintingContractor (primary)
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PaintingContractor',
  '@id': 'https://newseedpainting.com/#business',
  name: 'New Seed Painting Group',
  legalName: 'New Seed Painting Group Pty Ltd',
  description:
    'Premium residential and commercial painting services across Sydney. Licensed, insured, 5-year workmanship guarantee. Dulux materials exclusively.',
  url: 'https://newseedpainting.com',
  telephone: '+61426745547',
  email: 'info@newseedgroup.com.au',
  image: 'https://newseedpainting.com/images/depois.jpg',
  logo: 'https://newseedpainting.com/apple-touch-icon.png',
  foundingDate: '2019',
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFTPOS',
  slogan: 'Your Home Deserves More Than a Paint Job',
  knowsLanguage: ['en', 'pt'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manly Vale',
    addressRegion: 'NSW',
    postalCode: '2093',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.7969,
    longitude: 151.2767,
  },
  areaServed: [
    { '@type': 'City', name: 'Sydney', containedInPlace: { '@type': 'State', name: 'New South Wales' } },
    { '@type': 'City', name: 'Manly' },
    { '@type': 'City', name: 'Dee Why' },
    { '@type': 'City', name: 'Mona Vale' },
    { '@type': 'City', name: 'Newport' },
    { '@type': 'City', name: 'Mosman' },
    { '@type': 'City', name: 'Brookvale' },
    { '@type': 'City', name: 'Narrabeen' },
    { '@type': 'City', name: 'Collaroy' },
    { '@type': 'City', name: 'Avalon Beach' },
    { '@type': 'City', name: 'Freshwater' },
    { '@type': 'AdministrativeArea', name: 'Northern Beaches' },
    { '@type': 'AdministrativeArea', name: 'North Shore' },
    { '@type': 'AdministrativeArea', name: 'Eastern Suburbs' },
    { '@type': 'AdministrativeArea', name: 'Inner West' },
    { '@type': 'AdministrativeArea', name: 'Greater Sydney' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Painting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Painting',
          description: 'Feature walls, full-home repaints, precision prep and clean lines.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exterior Painting',
          description: 'Weather-resistant premium coatings for lasting kerb appeal.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Painting',
          description: 'Professional-grade results for retail, offices, and industrial facilities.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strata Painting',
          description: 'Coordinated strata work with building managers and residents.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'New Build & Renovation Painting',
          description: 'Premium standards for new construction and gut renovations.',
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://instagram.com/newseedpainting',
  ],
};

// JSON-LD: WebSite
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'New Seed Painting Group',
  url: 'https://newseedpainting.com',
  publisher: { '@id': 'https://newseedpainting.com/#business' },
};

// JSON-LD: HowTo (Process)
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How New Seed Painting Group Works',
  description: 'Our 4-step process from first call to final coat.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Free On-Site Quote',
      text: 'We visit your property, assess the scope, and give you a clear, written quote.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Colour & Material Consultation',
      text: 'We guide you through colour and finish options suited to your home.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Meticulous Preparation',
      text: 'We protect surfaces, fill and sand, and prime properly before painting.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Premium Application & Clean Finish',
      text: 'We paint with care, check every edge, and leave your home spotless with a written 5-year guarantee.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#E8A824" />
        <link rel="manifest" href="/newseed-painting-website/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
