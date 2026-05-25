'use client';

import { motion } from 'framer-motion';
import { Apple, Smartphone, Download } from 'lucide-react';

export function DownloadCTA() {
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
              Hemen indir, ilk randevunu al
            </h2>
            <p className="mt-5 text-lg lg:text-xl text-white/85 leading-relaxed">
              iOS ve Android — Türkiye&apos;nin lisanslı uzman ağına 3 tıkla bağlan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Store link'leri public lansman ile aktif olacak — şimdi sayfayı bozmasın */}
              <button
                disabled
                title="Yakında yayında"
                aria-label="App Store — yakında yayında"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-black/80 text-white shadow-strong opacity-70 cursor-not-allowed"
              >
                <Apple size={28} strokeWidth={1.6} aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Yakında</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button
                disabled
                title="Yakında yayında"
                aria-label="Google Play — yakında yayında"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-black/80 text-white shadow-strong opacity-70 cursor-not-allowed"
              >
                <Smartphone size={28} strokeWidth={1.6} aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Yakında</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>

            <p className="mt-8 text-sm text-white/70">
              <Download size={14} className="inline mr-1.5" />
              Şu anda kapalı beta — yakında public lansman
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
