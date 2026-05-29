'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Apple, Smartphone, ArrowRight } from 'lucide-react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/config';

export function DownloadCTA() {
  const storeYayinda = Boolean(APP_STORE_URL || PLAY_STORE_URL);

  return (
    <section id="indir" className="py-20 lg:py-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-accent-light via-accent to-accent-dark p-12 lg:p-20 overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
              {storeYayinda ? 'Hemen indir, ilk randevunu al' : 'Beta\'ya katıl, ilk sen dene'}
            </h2>
            <p className="mt-5 text-lg lg:text-xl text-white/85 leading-relaxed">
              {storeYayinda
                ? 'iOS ve Android — Türkiye\'nin lisanslı uzman ağına 3 tıkla bağlan.'
                : 'Psiva kapalı beta\'da. E-postanı bırak, lansmanda ilk haber alan ve erken erişen sen ol.'}
            </p>

            {storeYayinda ? (
              // Store linkleri tanımlıysa gerçek indirme butonları
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {APP_STORE_URL && (
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-black hover:bg-ink transition-colors text-white shadow-strong">
                    <Apple size={28} strokeWidth={1.6} aria-hidden="true" />
                    <div className="text-left"><div className="text-xs opacity-75">İndir</div><div className="text-base font-bold leading-tight">App Store</div></div>
                  </a>
                )}
                {PLAY_STORE_URL && (
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-black hover:bg-ink transition-colors text-white shadow-strong">
                    <Smartphone size={28} strokeWidth={1.6} aria-hidden="true" />
                    <div className="text-left"><div className="text-xs opacity-75">İndir</div><div className="text-base font-bold leading-tight">Google Play</div></div>
                  </a>
                )}
              </div>
            ) : (
              // Beta — çalışan tek CTA: bekleme listesine kaydır
              <div className="mt-10 flex justify-center">
                <Link
                  href="/#bekleme"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-accent-dark font-bold text-lg shadow-strong hover:scale-105 transition-transform"
                >
                  Beta&apos;ya kaydol
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}

            <p className="mt-8 text-sm text-white/70">
              {storeYayinda ? 'iOS 14+ · Android 8+' : 'Şu anda kapalı beta — yakında App Store & Google Play'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
