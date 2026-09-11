import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, Silkscreen } from 'next/font/google';
import './globals.css';
import { NOCOM_LINKS } from '@/lib/featured';

export const viewport: Viewport = {
  themeColor: '#1c120c',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Blocky pixel face for the voxel beaver's sign
const pixel = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pixel',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const siteUrl = 'https://www.appsetz.pro';
const logoPath = '/brand/icon-512.png';
const ogImagePath = '/brand/og-image.jpg';

export const metadata: Metadata = {
  title: {
    default: 'Appsetz — Web & App Development Agency | Startup Digital Solutions India',
    template: '%s | Appsetz — Digital Product Agency',
  },
  description: 'Appsetz is a full-stack digital product agency helping startups and businesses build modern, scalable websites, mobile apps, and SaaS products. Expert web development, UI/UX design, and branding solutions in India.',
  keywords: [
    'web development',
    'app development',
    'startup solutions',
    'digital agency',
    'India tech agency',
    'branding',
    'UI/UX design',
    'SaaS development',
    'business growth',
    'Next.js development',
    'React development',
    'Flutter app development',
    'mobile app development',
    'MVP development',
    'startup tech partner',
    'digital transformation',
    'product design',
    'tech agency India',
    'software development company',
    'cross-platform apps'
  ],
  authors: [{ name: 'Appsetz Team', url: siteUrl }],
  creator: 'Appsetz',
  publisher: 'Appsetz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Appsetz',
    title: 'Appsetz — Transforming Ideas into Powerful Digital Products',
    description: 'Full-stack digital product agency helping startups build modern, scalable websites, mobile apps, and SaaS products. We design and develop custom solutions tailored to your business goals.',
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: 'Appsetz beaver mascot — Digital Product Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appsetz — Web & App Development Agency',
    description: 'Transforming startup ideas into powerful digital products. Expert web development, mobile apps, UI/UX design, and SaaS solutions.',
    images: [ogImagePath],
    creator: '@appsetz',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/brand/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${pixel.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Appsetz',
              url: siteUrl,
              logo: `${siteUrl}${logoPath}`,
              description: 'Full-stack digital product agency helping startups and businesses build modern, scalable websites, mobile apps, and SaaS products.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
              sameAs: [
                'https://www.linkedin.com/company/appsetz',
                'https://twitter.com/appsetz',
                'https://www.instagram.com/appsetz',
                'https://github.com/appsetz',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English', 'Hindi'],
              },
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
              serviceType: [
                'Web Development',
                'Mobile App Development',
                'UI/UX Design',
                'SaaS Development',
                'Branding',
                'Digital Strategy',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Appsetz',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'NoCom',
              description: 'Broker-free marketplace for used cars and bikes in India with Aadhaar-verified owners and zero commission.',
              url: NOCOM_LINKS.website,
              operatingSystem: 'iOS, Android',
              applicationCategory: 'ShoppingApplication',
              installUrl: [NOCOM_LINKS.appStore, NOCOM_LINKS.playStore],
              sameAs: [NOCOM_LINKS.appStore, NOCOM_LINKS.playStore],
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
              creator: { '@type': 'Organization', name: 'Appsetz', url: siteUrl },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
