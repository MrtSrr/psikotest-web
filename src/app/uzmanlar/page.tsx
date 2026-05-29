import type { Metadata } from 'next';
import { ForTherapists } from '@/components/ForTherapists';
import { BetaWaitlist } from '@/components/BetaWaitlist';

export const metadata: Metadata = {
  title: 'Uzmanlar İçin',
  description: 'Psiva\'da uzman olarak kayıt ol — sadece %10 komisyon, otomatik faturalama, KVKK uyumlu danışan akışı.',
};

export default function UzmanlarPage() {
  return (
    <>
      <div className="pt-24" />
      <ForTherapists />
      {/* Terapist buraya "kayıt ol" diye gelir — gerçek bir aksiyon (beta formu) burada olmalı */}
      <section id="bekleme">
        <BetaWaitlist />
      </section>
    </>
  );
}
