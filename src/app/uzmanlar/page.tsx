import type { Metadata } from 'next';
import { ForTherapists } from '@/components/ForTherapists';
import { DownloadCTA } from '@/components/DownloadCTA';

export const metadata: Metadata = {
  title: 'Uzmanlar İçin',
  description: 'PsikoTest&apos;te uzman olarak kayıt ol — sadece %10 komisyon, otomatik faturalama, KVKK uyumlu danışan akışı.',
};

export default function UzmanlarPage() {
  return (
    <>
      <div className="pt-24" />
      <ForTherapists />
      <DownloadCTA />
    </>
  );
}
