import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
