'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingDown, Calendar, Wallet, Sparkles } from 'lucide-react';

export function ForTherapists() {
  const avantajlar = [
    'Sektörün üçte biri komisyon — sadece %10',
    'Otomatik faturalama + iyzico ödeme',
    'Haftalık müsaitlik yönetimi (Calendly tarzı)',
    'KVKK uyumlu danışan kaydı',
    'Doğrulanmış ✓ rozeti — arama sonuçlarında üst',
    '7/24 platform desteği',
  ];

  return (
    <section id="ucret" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-dark to-accent-dark pointer-events-none" />

      <div className="container-max relative text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Sol: pitch */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-sm font-semibold">
              <Sparkles size={14} />
              Uzmanlar için
            </span>
            <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
              Sen seansına odaklan,{' '}
              <span className="text-white/90">biz lojistiği halledelim</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-white/85 leading-relaxed">
              Hiwell ve BetterHelp gibi terapi platformları %20-30 komisyon alıyor.
              Psiva&apos;te <strong className="text-white">sadece %10</strong> — kazancının
              <strong className="text-white"> %90&apos;ı sende kalır</strong>.
              Üstelik test odaklı bir platformda olduğun için yanlış müşteri akmaz.
            </p>

            <ul className="mt-10 space-y-3">
              {avantajlar.map(a => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 className="text-white shrink-0 mt-0.5" size={20} />
                  <span className="text-white/90 leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="/uzmanlar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-accent-dark font-bold text-base shadow-strong hover:scale-105 transition-transform"
              >
                Uzman olarak kayıt ol
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Sağ: numerical stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { Ikon: TrendingDown, deger: '%10', etiket: 'Komisyon oranı', alt: 'Sektörün üçte biri' },
              { Ikon: Wallet, deger: '%90', etiket: 'Sende kalır', alt: 'Her seans için' },
              { Ikon: Calendar, deger: '7/24', etiket: 'Müsaitlik', alt: 'İstediğin zaman ayarla' },
              { Ikon: Sparkles, deger: '₺0', etiket: 'Kayıt ücreti', alt: 'Tamamen ücretsiz' },
            ].map((s, i) => (
              <motion.div
                key={s.etiket}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6"
              >
                <s.Ikon className="text-white/70" size={22} />
                <div className="mt-3 text-4xl font-extrabold tracking-tight">{s.deger}</div>
                <div className="mt-1 text-white font-semibold">{s.etiket}</div>
                <div className="text-sm text-white/70 mt-0.5">{s.alt}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
