import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { BottomNav } from "@/components/navigation/BottomNav";
import { NetworkStatus, ServiceWorkerProvider } from "@/components/loading/ProgressiveLoader";
import { METADATA_DEFAULTS } from "@/lib/constants";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: METADATA_DEFAULTS.title,
  description: METADATA_DEFAULTS.description,
  keywords: METADATA_DEFAULTS.keywords,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Visual Poetry',
  },
  openGraph: {
    title: METADATA_DEFAULTS.title,
    description: METADATA_DEFAULTS.description,
    images: [METADATA_DEFAULTS.image],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA_DEFAULTS.title,
    description: METADATA_DEFAULTS.description,
    images: [METADATA_DEFAULTS.image],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#D4AF37',
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Visual Poetry" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} ${greatVibes.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ServiceWorkerProvider>
            <NetworkStatus />
            <Header />
            <main className="flex-1 pt-16 md:pt-20 pb-16 md:pb-0">
              {children}
            </main>
            <Footer />
            <BottomNav />
          </ServiceWorkerProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
