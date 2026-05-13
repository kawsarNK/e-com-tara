import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-noto-bengali',
});

export const metadata: Metadata = {
  title: 'Ecomtara | সম্পূর্ণ ই-কমার্স SaaS সমাধান',
  description: 'ই-কমার্স ব্যবসার জন্য ডিজিটাল, CRM, ক্লিনিয়ার ও অন্যান্য টুল এক প্ল্যাটফর্মে',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={`${notoSansBengali.variable} font-bangla antialiased`}>
        {children}
      </body>
    </html>
  );
}