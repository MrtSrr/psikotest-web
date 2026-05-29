'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const KEY = 'psiva_cookie_consent_v1';

export function CookieConsent() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setGoster(true);
      } catch {
        // private mode — bypass
      }
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  const onayla = (deger: 'tumu' | 'sadece-zorunlu') => {
    try { localStorage.setItem(KEY, JSON.stringify({ deger, tarih: new Date().toISOString() })); } catch {}
    setGoster(false);
  };

  if (!goster) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-strong border border-ink/10 p-6 md:p-7 flex flex-col md:flex-row gap-5 items-start">
        <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center shrink-0">
          <Cookie className="text-accent" size={22} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-ink text-base">Çerezleri kullanıyoruz</h3>
          <p className="text-sm text-ink-soft mt-1 leading-relaxed">
            Sadece tercih bilgilerin için <strong>zorunlu çerezler</strong> kullanırız.
            Üçüncü taraf reklam çerezi <strong>yok</strong>. Detaylar için{' '}
            <Link href="/gizlilik" className="text-accent font-semibold underline">
              Gizlilik Politikası
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={() => onayla('sadece-zorunlu')}
            className="px-5 py-2.5 rounded-full border-2 border-ink/10 text-ink font-semibold text-sm hover:border-accent transition-colors"
          >
            Sadece zorunlu
          </button>
          <button
            onClick={() => onayla('tumu')}
            className="px-5 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-accent-dark transition-colors"
          >
            Tümünü kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
