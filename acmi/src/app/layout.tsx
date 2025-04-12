import type { Metadata } from 'next';
import { Roboto, Montserrat, Inter } from 'next/font/google';


import '@/styles/globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ACMI',
  description: '',
  icons: {
    icon: '/plain.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${montserrat.variable} gutter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
