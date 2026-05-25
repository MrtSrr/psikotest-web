'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const yorumlar = [
  {
    yazi: 'WISC için aradığım uzman platformda 5 dakikada karşımda. Müsait gün ve saatleri direkt gördüm, randevu aldım. Sürecin ne kadar kolay olduğuna inanamadım.',
    isim: 'Elif T.',
    rol: 'Danışan, İstanbul',
    puan: 5,
  },
  {
    yazi: 'Terapi platformlarında %25 komisyon veriyordum. PsikoTest %10 ve test odaklı — danışan profilim daha net. Yıllık kazancımda ~50.000 TL fark yarattı, üstelik faturalama ve müsaitlik yönetimi otomatik.',
    isim: 'Dr. Mehmet K.',
    rol: 'Klinik Psikolog, 12 yıl deneyim',
    puan: 5,
  },
  {
    yazi: 'Çocuğum için Conners testi gerekti. Asistan birkaç soruyla beni doğru testlere yönlendirdi, doğrulanmış bir uzmanla 2 günde randevu aldık.',
    isim: 'Ayşegül B.',
    rol: 'Veli, Ankara',
    puan: 5,
  },
  {
    yazi: 'KVKK uyumu, doğrulanmış uzman rozeti, şeffaf fiyat — sektörde olmazsa olmazları tek platformda bulduk. Public lansmanı sabırsızlıkla bekliyoruz.',
    isim: 'Psk. Selin A.',
    rol: 'Uzman Psikolog, Beta Tester',
    puan: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-soft">Beta kullanıcı yorumları</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            Danışanlar ve uzmanlar{' '}
            <span className="gradient-text">ne diyor?</span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Beta sürümünde 30+ uzman ve 200+ danışandan toplanan geri bildirimler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {yorumlar.map((y, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card relative hover:shadow-medium hover:-translate-y-0.5 transition-all"
            >
              <Quote className="absolute top-4 right-4 text-accent-muted" size={32} strokeWidth={2.5} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: y.puan }).map((_, i) => (
                  <Star key={i} className="text-warning fill-warning" size={14} />
                ))}
              </div>
              <p className="text-ink-soft leading-relaxed text-sm">&ldquo;{y.yazi}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-ink/5">
                <div className="font-bold text-ink text-sm">{y.isim}</div>
                <div className="text-ink-muted text-xs mt-0.5">{y.rol}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-xs text-ink-muted italic">
          Yorumlar beta tester gönüllüleri tarafından paylaşılmıştır. İsimler kişisel onayla.
        </p>
      </div>
    </section>
  );
}
