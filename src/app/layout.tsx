import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Sintech Business Solutions | Offshore BPO & Digital Growth Partner',
  description:
    'Sintech Business Solutions provides offshore BPO, call center support, virtual assistance, web development, SEO, and digital growth services for businesses worldwide.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}> 
      <body className="min-h-full bg-[#F8F9FA] text-slate-900 antialiased">{children}</body>
    </html>
  );
}
