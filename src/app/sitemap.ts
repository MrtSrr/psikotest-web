import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://psikotest.app';
  const tarih = new Date();

  return [
    { url: `${base}/`,         lastModified: tarih, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/uzmanlar`, lastModified: tarih, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/iletisim`, lastModified: tarih, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/gizlilik`, lastModified: tarih, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${base}/sartlar`,  lastModified: tarih, changeFrequency: 'yearly',  priority: 0.5 },
  ];
}
