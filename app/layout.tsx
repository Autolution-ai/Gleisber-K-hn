import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const SITE_URL = 'https://www.bau-gk.de';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sanierung & Renovierung Berlin | Gleisberg & Kühn',
  description:
    'Komplettsanierung, Maler- und Trockenbauarbeiten in Berlin. Alles aus einer Hand für Hausverwaltungen und private Eigentümer. Seit 2007.',
  keywords: [
    'Sanierung Berlin',
    'Komplettsanierung',
    'Maler Berlin',
    'Trockenbau Berlin',
    'Altbausanierung',
    'Renovierung Berlin',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Gleisberg & Kühn',
    title: 'Sanierung & Renovierung Berlin | Gleisberg & Kühn',
    description:
      'Komplettsanierung, Maler- und Trockenbauarbeiten in Berlin. Alles aus einer Hand seit 2007.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Gleisberg & Kühn GmbH',
  description:
    'Komplettsanierung, Maler- und Tapezierarbeiten sowie Trockenbau in Berlin.',
  url: SITE_URL,
  telephone: '+49 30 89751072',
  email: 'info@bau-gk.de',
  foundingDate: '2007',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rosenfelder Straße 13',
    postalCode: '10317',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
  areaServed: 'Berlin',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Komplettsanierung' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maler- und Tapezierarbeiten' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trockenbau' } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={jakarta.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
