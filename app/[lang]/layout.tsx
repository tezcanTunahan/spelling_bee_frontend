import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Locale, i18n } from '@/i18n.config';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
