'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WAITLIST_ENDPOINT, EMAIL_DESTEK } from '@/lib/config';

export function BetaWaitlist() {
  const [email, setEmail] = useState('');
  const [durum, setDurum] = useState<'bos' | 'gonderiliyor' | 'tamam' | 'hata'>('bos');

  const onayla = async (e: React.FormEvent) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setDurum('hata');
      return;
    }
    setDurum('gonderiliyor');

    // 1) Formspree endpoint tanımlıysa gerçek POST yap
    if (WAITLIST_ENDPOINT) {
      try {
        const res = await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email, kaynak: 'psiva-web-beta' }),
        });
        if (!res.ok) throw new Error('submit failed');
        setDurum('tamam');
      } catch {
        setDurum('hata');
      }
      return;
    }

    // 2) Endpoint yoksa mailto fallback — kullanıcının mail uygulaması açılır,
    //    e-posta hiçbir zaman sessizce kaybolmaz.
    const konu = encodeURIComponent('Psiva Beta Kaydı');
    const govde = encodeURIComponent(`Beta listesine eklenmek istiyorum.\nE-posta: ${email}`);
    window.location.href = `mailto:${EMAIL_DESTEK}?subject=${konu}&body=${govde}`;
    setDurum('tamam');
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container-max max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-bg-soft via-white to-accent-muted/30 border border-accent/15 p-10 lg:p-14 overflow-hidden"
        >
          {/* Soft blob decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-bold">
              <Mail size={12} />
              BETA DAVETLİSİ
            </div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
              Public lansman öncesi <span className="gradient-text">erken eriş</span>
            </h2>
            <p className="mt-4 text-ink-soft text-lg max-w-xl mx-auto">
              Sınırlı sayıda tester alıyoruz. E-postanı bırak,
              ilk dalgaya seni de ekleyelim.
            </p>

            {durum === 'tamam' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-success/10 text-success font-bold"
              >
                <CheckCircle2 size={22} />
                Teşekkürler! Beta lansmanında ilk sen haber alacaksın.
              </motion.div>
            ) : (
              <form onSubmit={onayla} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); if (durum === 'hata') setDurum('bos'); }}
                    placeholder="ornek@email.com"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-full border-2 bg-white text-ink font-medium focus:outline-none transition-colors ${
                      durum === 'hata' ? 'border-error' : 'border-ink/10 focus:border-accent'
                    }`}
                    disabled={durum === 'gonderiliyor'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={durum === 'gonderiliyor'}
                  className="btn-primary"
                >
                  {durum === 'gonderiliyor' ? 'Gönderiliyor...' : 'Beta\'ya kaydol'}
                  {durum !== 'gonderiliyor' && <ArrowRight size={18} />}
                </button>
              </form>
            )}
            {durum === 'hata' && (
              <p className="mt-2 text-sm text-error font-semibold">Lütfen geçerli bir e-posta girin.</p>
            )}

            <p className="mt-6 text-xs text-ink-muted">
              Spam yok, sadece beta lansmanı + önemli güncellemeler. İstediğin zaman çıkarsın.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
