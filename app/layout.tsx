import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tpco-transformation-pillar.leejam-3421.chatgpt.site'),
  title: 'ركيزة التحول | TPCO',
  description: 'نحوّل الطموح الرقمي إلى أثر مؤسسي مستدام وقابل للقياس.',
  openGraph: {
    title: 'ركيزة التحول | TPCO',
    description: 'نحوّل الطموح الرقمي إلى أثر مؤسسي مستدام وقابل للقياس.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'ركيزة التحول — TPCO' }],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ركيزة التحول | TPCO',
    description: 'نحوّل الطموح الرقمي إلى أثر مؤسسي مستدام وقابل للقياس.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
