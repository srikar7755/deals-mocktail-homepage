import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: "DealsMocktail - Today's Hottest Deals & Limited Time Offers",
  description: 'Discover amazing deals on top brands. Shop latest trends up to 70% off on fashion, electronics, home decor, and more.',
  keywords: ['deals', 'discounts', 'coupons', 'summer sale', 'hottest offers', 'e-commerce'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-red-500 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
