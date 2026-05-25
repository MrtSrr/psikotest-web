'use client';

import { motion } from 'framer-motion';
import { Brain, Calendar, ShieldCheck, Wallet, LifeBuoy, Users } from 'lucide-react';

const ozellikler = [
  {
    Ikon: Brain,
    baslik: 'Test-bazlı seçim',
    yazi: '"Hangi uzmanı seçeyim?" yerine "Hangi teste ihtiyacım var?" Asistan 3 soruda doğru testlere yönlendirir.',
  },
  {
    Ikon: Calendar,
    baslik: 'Calendly-style randevu',
    yazi: 'Uzmanın haftalık takvimi tek ekranda. Yeşil nokta = müsait gün. 30 saniyede rezerve.',
  },
  {
    Ikon: ShieldCheck,
    baslik: 'Doğrulanmış uzmanlar',
    yazi: 'Tüm uzmanlar TPDR / Tabipler Odası lisansını manuel inceleyip onaylıyoruz. Doğrulanmış rozet ✓ kartta görünür.',
  },
  {
    Ikon: Wallet,
    baslik: 'Şeffaf fiyat',
    yazi: 'Her test için ücret peşinen belli. Sürpriz yok, abonelik yok. Sadece ihtiyaç olduğunda öde.',
  },
  {
    Ikon: LifeBuoy,
    baslik: 'Kriz anında destek',
    yazi: 'Profil menüsünden 182 (Sağlık Bakanlığı), 112, 155 hatlarına tek tıkla. Yalnız değilsin.',
  },
  {
    Ikon: Users,
    baslik: 'KVKK & güvenlik',
    yazi: 'Verilerin Türkiye\'de saklanır. KVKK m.11 — "Verilerimi indir" ve "Hesabı sil" tek tık uzakta.',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-bg-soft">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-soft">Neler sunuyoruz</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            Test almak, hiç bu kadar{' '}
            <span className="gradient-text">kolay olmamıştı</span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Türkiye&apos;de ilk: <strong>spesifik test</strong> için lisanslı uzmanı 3 tıkla bul.
            Sürekli terapi platformu değil — sen seçtiğin testi al, devam zorunluluğu yok.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ozellikler.map((o, i) => (
            <motion.div
              key={o.baslik}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                <o.Ikon className="text-accent group-hover:text-white transition-colors" size={24} strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{o.baslik}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{o.yazi}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
