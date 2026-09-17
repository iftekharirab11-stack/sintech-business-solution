import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/sintech-business-solution' : '';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Sintech Business Solutions | Offshore BPO & Digital Growth Partner',
  description:
    'Sintech Business Solutions provides offshore BPO, call center support, virtual assistance, web development, SEO, and digital growth services for businesses worldwide.',
  icons: {
    icon: `${BASE_PATH}/images/logo.png?v=47e721f`,
    shortcut: `${BASE_PATH}/images/logo.png?v=47e721f`,
    apple: `${BASE_PATH}/images/logo.png?v=47e721f`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}> 
      <body className="min-h-full bg-[#fff3d6] text-[#392018] antialiased">{children}</body>
    </html>
  );
}
