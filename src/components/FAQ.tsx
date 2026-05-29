'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const sorular = [
  {
    soru: 'Psiva tıbbi acil durum platformu mu?',
    cevap: 'Hayır. Kriz veya tıbbi acil durumda 182 (Sağlık Bakanlığı Psikolojik Destek), 112 (Acil) veya 155 (Polis) aranmalıdır. Uygulamada Acil Destek menüsünden tek tıkla bu hatlara erişebilirsiniz.',
  },
  {
    soru: 'Online seans alabilir miyim?',
    cevap: 'Şu an yalnızca yüz yüze seans veriyoruz. T.C. Sağlık Bakanlığı Telesağlık Yönetmeliği lisansı alındıktan sonra online seans eklenecek.',
  },
  {
    soru: 'Uzmanlar nasıl doğrulanıyor?',
    cevap: 'Tüm uzmanlar TPDR (Türk Psikologlar Derneği) veya ilgili Tabipler Odası lisansını yüklemek zorunda. Ekibimiz her sertifikayı manuel inceleyip onaylıyor. Onaylanmış uzmanlarda kart üstünde ✓ rozeti görürsünüz.',
  },
  {
    soru: 'Ödeme güvenli mi?',
    cevap: 'Ödemeler iyzico altyapısı üzerinden alınır — PCI-DSS uyumlu, 3D Secure korumalı, BDDK lisanslı. Kart bilgileriniz bizim sunucumuza hiç gelmez.',
  },
  {
    soru: 'Verilerim nerede saklanıyor?',
    cevap: 'KVKK m.11 hakların tamamen aktif: Profil → "Verilerimi İndir" ile tüm verilerini JSON olarak indir, "Hesabı Sil" ile tek tıkla kalıcı olarak sil. Public lansman ile birlikte tüm sağlık verisi Türkiye veri merkezinde (Bulutistan) tutulacak. Beta süresince AB veri merkezi (KVKK m.9 açık rızası kapsamında) kullanılıyor.',
  },
  {
    soru: 'İptal politikası nedir?',
    cevap: 'Seans tarihinize 14+ gün kalmışsa cayma hakkınız var (tam iade). 24+ saat kala iptal = %100 iade, 2-24 saat = %50 iade, 2 saatten az = iade yok (uzman hazırlık zamanı).',
  },
  {
    soru: '18 yaş altı kullanabilir mi?',
    cevap: 'Hayır. Psiva 18 yaş ve üstü kullanıcılara hizmet verir. Çocuk testleri (WISC, CBCL vb.) için veli/vasi yasal hesap açarak uzmana vekaleten randevu alır.',
  },
  {
    soru: 'Uzmanlardan ne kadar komisyon alıyorsunuz?',
    cevap: 'Sadece %10. Bu, terapi platformlarının (Hiwell %25, BetterHelp %30+) üçte biri. Düşük komisyonun bir sebebi var: amacımız uzmanın platformdan kaçmaması, danışanla off-platform anlaşma yapma motivasyonunun düşük olması. Sen %10 verir, %90\'ını alırsın; biz hacimden kazanırız.',
  },
];

export function FAQ() {
  const [acik, setAcik] = useState<number | null>(0);

  return (
    <section id="sss" className="py-20 lg:py-32">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-16">
          <span className="badge-soft">Sıkça Sorulanlar</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            Aklındaki soruların{' '}
            <span className="gradient-text">cevapları</span>
          </h2>
        </div>

        <div className="space-y-3">
          {sorular.map((q, i) => {
            const isOpen = acik === i;
            return (
              <div
                key={i}
                className="bg-bg-card rounded-2xl border border-ink/5 overflow-hidden hover:shadow-soft transition-shadow"
              >
                <button
                  onClick={() => setAcik(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-ink text-lg">{q.soru}</span>
                  <span className="shrink-0 w-9 h-9 rounded-full bg-accent-muted flex items-center justify-center text-accent">
                    {isOpen ? <Minus size={18} strokeWidth={2.4} /> : <Plus size={18} strokeWidth={2.4} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-ink-soft leading-relaxed">
                        {q.cevap}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
