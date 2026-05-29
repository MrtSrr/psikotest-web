'use client';

import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const yontemler = [
  {
    etiket: 'Sertifika doğrulanmış',
    psikotest: true,
    google: false,
    tanidik: 'kısmen',
    klinik: 'kısmen',
  },
  {
    etiket: 'Fiyat baştan belli',
    psikotest: true,
    google: false,
    tanidik: false,
    klinik: false,
  },
  {
    etiket: 'Müsait gün/saat direkt görünür',
    psikotest: true,
    google: false,
    tanidik: false,
    klinik: false,
  },
  {
    etiket: 'KVKK uyumlu kayıt',
    psikotest: true,
    google: false,
    tanidik: false,
    klinik: 'kısmen',
  },
  {
    etiket: 'Güvenli online ödeme',
    psikotest: true,
    google: false,
    tanidik: false,
    klinik: 'kısmen',
  },
  {
    etiket: 'Doğru testi seçmeye yardım',
    psikotest: true,
    google: false,
    tanidik: 'kısmen',
    klinik: 'kısmen',
  },
  {
    etiket: 'Yorumlar ve puanlama',
    psikotest: true,
    google: 'kısmen',
    tanidik: false,
    klinik: false,
  },
  {
    etiket: 'Şikayet/iade güvencesi',
    psikotest: true,
    google: false,
    tanidik: false,
    klinik: false,
  },
];

function Cell({ value, vurgu }: { value: string | boolean; vurgu?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${vurgu ? 'bg-success' : 'bg-success/15'}`}>
        <Check className={vurgu ? 'text-white' : 'text-success'} size={16} strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink/5">
        <X className="text-ink-muted" size={16} strokeWidth={2.5} />
      </span>
    );
  }
  // 'kısmen'
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-warning/15" title="Kısmen / belirsiz">
      <AlertCircle className="text-warning" size={14} strokeWidth={2.5} />
    </span>
  );
}

export function Comparison() {
  return (
    <section className="py-20 lg:py-32 bg-bg-soft">
      <div className="container-max max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-soft">Neden Psiva?</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            Psikolojik test almanın <span className="gradient-text">4 yolu</span>
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Şu ana kadar bir uzman bulmanın yolları belirsiz, yavaş ve riskliydi.
            Psiva <strong>bu kategoriyi</strong> Türkiye için yeniden tasarladı.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-3xl bg-white shadow-medium border border-ink/5"
        >
          <table className="w-full min-w-[680px]">
            <thead>
              <tr className="border-b border-ink/5">
                <th className="text-left p-6 text-xs font-bold text-ink-muted uppercase tracking-wider w-1/3">
                  Özellik
                </th>
                <th className="p-6 bg-gradient-to-b from-accent-muted/40 to-transparent">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider">Psiva</div>
                  <div className="text-base font-extrabold text-ink mt-1">App</div>
                </th>
                <th className="p-6">
                  <div className="text-xs font-bold text-ink-muted uppercase tracking-wider">Yöntem 2</div>
                  <div className="text-base font-bold text-ink-soft mt-1">Google arama</div>
                </th>
                <th className="p-6">
                  <div className="text-xs font-bold text-ink-muted uppercase tracking-wider">Yöntem 3</div>
                  <div className="text-base font-bold text-ink-soft mt-1">Tanıdıktan</div>
                </th>
                <th className="p-6">
                  <div className="text-xs font-bold text-ink-muted uppercase tracking-wider">Yöntem 4</div>
                  <div className="text-base font-bold text-ink-soft mt-1">Klinik ara</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {yontemler.map((y, i) => (
                <tr key={y.etiket} className={`border-b border-ink/5 ${i % 2 === 0 ? 'bg-bg-soft/30' : ''}`}>
                  <td className="p-5 font-semibold text-ink">{y.etiket}</td>
                  <td className="p-5 text-center bg-accent-muted/10">
                    <Cell value={y.psikotest} vurgu />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={y.google} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={y.tanidik} />
                  </td>
                  <td className="p-5 text-center">
                    <Cell value={y.klinik} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 max-w-md mx-auto text-xs text-ink-muted">
          <div className="flex items-center gap-1.5">
            <Cell value={true} /> <span>Var</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cell value="kısmen" /> <span>Kısmen / belirsiz</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cell value={false} /> <span>Yok</span>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-ink-soft max-w-2xl mx-auto leading-relaxed">
          <strong>Hiwell, BetterHelp, Talkspace</strong> sürekli terapi platformlarıdır —
          farklı bir ihtiyaca cevap verir. Psiva <strong>tek seferlik psikolojik test</strong>
          için tasarlandı.
        </p>
      </div>
    </section>
  );
}
