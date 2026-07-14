import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat, Great_Vibes } from 'next/font/google';
import './globals.css';

import clientData from '@/data/client.json';
import { getThemeCSSVariables } from '@/config/theme';
import ScrollProgress from '@/components/ScrollProgress';
import MusicPlayer from '@/components/MusicPlayer';
import musicData from '@/data/music.json';
import sectionsData from '@/data/sections.json';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

const weddingDate = clientData.weddingDate
  ? new Date(clientData.weddingDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  : '';

const pageTitle = `${clientData.brideName} & ${clientData.groomName} | Wedding Invitation`;
const pageDescription = `You are cordially invited to the wedding celebration of ${clientData.brideName} & ${clientData.groomName}${weddingDate ? ` on ${weddingDate}` : ''}${clientData.venue ? ` at ${clientData.venue}` : ''}. Join us as we begin our forever.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    locale: 'en_US',
    siteName: 'Shaadi Studio',
    images: clientData.heroImage
      ? [
          {
            url: clientData.heroImage,
            width: 1200,
            height: 630,
            alt: `${clientData.brideName} & ${clientData.groomName} Wedding`,
          },
        ]
      : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: clientData.heroImage ? [clientData.heroImage] : [],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyles = getThemeCSSVariables();

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={themeStyles}>
        <ScrollProgress />
        {children}
        {sectionsData.showMusic && (
          <MusicPlayer
            src={musicData.src}
            autoplay={musicData.autoplay}
            loop={musicData.loop}
          />
        )}
      </body>
    </html>
  );
}
