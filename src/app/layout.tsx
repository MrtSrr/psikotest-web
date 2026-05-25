import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { StickyCTA } from '@/components/StickyCTA';
import { WhatsAppFloating } from '@/components/WhatsAppFloating';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://psikotest.app'),
  title: {
    default: 'PsikoTest — Türkiye\'nin Psikolojik Test Uzman Platformu',
    template: '%s · PsikoTest',
  },
  description: 'Lisanslı psikolog, psikiyatrist ve psikolojik danışmanlardan WISC, MMPI, Beck ve daha fazla test. 3 tıkla yüz yüze randevu. KVKK uyumlu, güvenli ödeme.',
  keywords: ['psikolojik test', 'wisc', 'mmpi', 'rorschach', 'beck depresyon', 'psikolog', 'psikiyatr', 'randevu', 'kvkk', 'türkiye'],
  authors: [{ name: 'PsikoTest' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://psikotest.app',
    title: 'PsikoTest — İhtiyacın olan testi, doğru uzmanla',
    description: 'Türkiye\'nin psikolojik test odaklı uzman platformu. Lisanslı uzmanlardan 3 tıkla randevu.',
    siteName: 'PsikoTest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PsikoTest',
    description: 'Türkiye\'nin psikolojik test odaklı uzman platformu',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <JsonLd />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <StickyCTA />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
