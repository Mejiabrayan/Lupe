import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import QueryProvider from '@/components/providers/QueryProvider';
import Navbar from '@/components/Navigation/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { Montserrat, Space_Grotesk } from 'next/font/google';

const monsterrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300'],
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});
export const metadata: Metadata = {
  title:
    'Lupe Agency - Digital Web Development & Design Agency based in San Francisco, CA',
  description:
    'Lupe Agency is a digital web development and design agency based in San Francisco, CA. We specialize in creating custom websites and web applications for businesses and startups.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lupe.agency',
    title:
      'Lupe Agency - Digital Web Development & Design Agency based in San Francisco, CA',
    description:
      'Lupe Agency is a digital web development and design agency based in San Francisco, CA. We specialize in creating custom websites and web applications for businesses and startups.',

    images: [
      {
        url: 'https://lupe.agency/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lupe Agency - Digital Web Development & Design Agency based in San Francisco, CA',
      },
    ],
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning className='dark'>
        <head />
        <body className={`${monsterrat.className}`}>
          <QueryProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <div
                className='mx-auto px-5 w-full max-w-7xl
              '
              >
                <Navbar />
                <main className='isolate flex flex-col min-h-screen justify-center items-center space-y-12 md:py-8'>
                  {children}
                  <Analytics />
                </main>
              </div>
            </ThemeProvider>
          </QueryProvider>
        </body>
      </html>
    </>
  );
}
