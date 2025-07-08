import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Product Mindset',
};

interface LayoutProps {
  children: React.ReactNode;
  types: string;
}

export default function RootLayout({
  children,
  types,
}: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel='icon' href="/product_mindset_logo.png"/>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
