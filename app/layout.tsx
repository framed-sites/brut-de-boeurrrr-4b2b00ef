import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://bruttt.com'),
  title: 'Bruttt - Modern Infrastructure Investment',
  description: 'Bruttt invests in renewable energy and infrastructure projects including solar parks, wind farms, and fiber networks.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <Script
          src="https://app.framed.dev/tm.js"
          data-framed-project="38097013-65c4-47be-813a-c2ec892fd5d2"
          async
        />
      </head>
      <body className={inter.variable}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
