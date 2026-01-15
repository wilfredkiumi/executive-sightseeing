import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Executive Sightseeing Ltd - Luxury London Tours',
  description: 'Kenyan-owned luxury sightseeing company in London. Premium executive travel experiences for VIPs, CEOs, and business leaders.',
  keywords: 'luxury tours London, executive travel, VIP sightseeing, business travel, Kenyan-owned, premium tours',
  authors: [{ name: 'Executive Sightseeing Ltd' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Executive Sightseeing Ltd - Luxury London Tours',
    description: 'Premium executive travel experiences for VIPs, CEOs, and business leaders visiting London.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Executive Sightseeing Ltd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Sightseeing Ltd - Luxury London Tours',
    description: 'Premium executive travel experiences for VIPs, CEOs, and business leaders visiting London.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
