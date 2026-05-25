'use client';

import { motion } from 'framer-motion';
import { Search, CalendarCheck, MessageCircle } from 'lucide-react';

const adimlar = [
  {
    no: '01',
    Ikon: Search,
    baslik: 'Uzmanını bul',
    yazi: 'Test adına veya şehre göre filtrele. Asistanımız sana en uygun testi önersin. Doğrulanmış ✓ rozetli uzmanlar.',
  },
  {
    no: '02',
    Ikon: CalendarCheck,
    baslik: 'Müsait saati seç',
    yazi: '7 günlük takvimde yeşil noktalı günleri gör. İstediğin saati tıkla, güvenli ödeme ile rezerve et.',
  },
  {
    no: '03',
    Ikon: MessageCircle,
    baslik: 'Seansına git',
    yazi: 'Yüz yüze seansını al. Test sonucunu uzmanından öğren. İstersen 1 tıkla yeni randevu al.',
  },
];

export function HowItWorks() {
  return (
    <section id="nasil" className="py-20 lg:py-32">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-soft">3 adımda randevu</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">30 saniye</span> içinde rezerve
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Karmaşık form yok, abonelik yok, gizli ücret yok.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-accent-muted via-accent to-accent-muted" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {adimlar.map((a, i) => (
              <motion.div
                key={a.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center relative"
              >
                {/* Number circle */}
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-full bg-white shadow-strong border-4 border-accent-muted flex items-center justify-center relative z-10">
                    <a.Ikon className="text-accent" size={32} strokeWidth={2} />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-medium z-20">
                    {a.no}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{a.baslik}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed max-w-xs mx-auto">
                  {a.yazi}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
