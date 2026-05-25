/**
 * JSON-LD Structured Data — Google'a "biz kimiz" diyen sembolik veri.
 * SEO + zengin sonuçlar (rich snippets) için kritik.
 */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PsikoTest',
    url: 'https://psikotest.app',
    logo: 'https://psikotest.app/icon.png',
    description: 'Türkiye\'nin psikolojik test odaklı uzman platformu',
    sameAs: [] as string[],
    contactPoint: [
      { '@type': 'ContactPoint', email: 'destek@psikotest.app', contactType: 'customer support', availableLanguage: ['Turkish'] },
      { '@type': 'ContactPoint', email: 'kvkk@psikotest.app', contactType: 'KVKK / GDPR', availableLanguage: ['Turkish'] },
    ],
    address: { '@type': 'PostalAddress', addressCountry: 'TR' },
  };

  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PsikoTest',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }} />
    </>
  );
}
