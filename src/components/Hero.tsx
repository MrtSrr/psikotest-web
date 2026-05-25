'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-muted/40 via-white to-white pointer-events-none" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-muted/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol: metin */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-soft">
                <Sparkles size={14} />
                Türkiye&apos;nin psikolojik test platformu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink"
            >
              İhtiyacın olan testi,{' '}
              <span className="gradient-text">doğru uzmanla</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg lg:text-xl text-ink-soft leading-relaxed max-w-xl"
            >
              WISC, MMPI, Rorschach, Beck Depresyon ve daha fazlası. Lisanslı psikolog ve
              psikiyatristlerden <strong className="text-ink">3 tıkla yüz yüze randevu</strong>.
              KVKK uyumlu, güvenli ödeme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/#indir" className="btn-primary text-base">
                Uygulamayı İndir
                <ArrowRight size={18} />
              </Link>
              <Link href="/#nasil" className="btn-secondary text-base">
                Nasıl Çalışır?
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-muted"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-success" />
                KVKK uyumlu
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-success" />
                Doğrulanmış uzmanlar
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-success" />
                Güvenli ödeme (iyzico)
              </span>
            </motion.div>
          </div>

          {/* Sağ: phone mockup ile gerçek app simülasyonu */}
          <div className="relative flex items-center justify-center lg:justify-end pt-8 lg:pt-0">
            {/* Breathing rings — arka planda subtle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
              <div className="relative w-96 h-96">
                <div className="breath-ring w-full h-full" />
                <div className="breath-ring w-full h-full" />
                <div className="breath-ring w-full h-full" />
              </div>
            </div>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
