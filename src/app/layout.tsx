import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-bengali',
});

export const metadata: Metadata = {
  title: 'Ecomtara - সম্পূর্ণ SaaS সমাধান',
  description: 'আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ SaaS প্ল্যাটফর্ম',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={notoSansBengali.variable}>
      <body className="font-[var(--font-bangla)] bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}