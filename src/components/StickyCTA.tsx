'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

export function StickyCTA() {
  const [goster, setGoster] = useState(false);
  const [kapali, setKapali] = useState(false);
  const [cookieAcik, setCookieAcik] = useState(true); // varsayılan: open, kapalıysa false

  useEffect(() => {
    // Cookie consent kapalıysa sticky CTA göster — çakışmayı önle
    try {
      const cookieDurum = localStorage.getItem('psikotest_cookie_consent_v1');
      if (cookieDurum) setCookieAcik(false);
    } catch {}

    const handle = () => setGoster(window.scrollY > 600);
    window.addEventListener('scroll', handle, { passive: true });

    // Cookie consent dismiss'ini izle (storage event başka tab için, custom event aynı tab için)
    const onStorage = () => {
      try {
        const v = localStorage.getItem('psikotest_cookie_consent_v1');
        if (v) setCookieAcik(false);
      } catch {}
    };
    window.addEventListener('storage', onStorage);
    const t = setInterval(onStorage, 1000); // aynı tabda interval ile yokla

    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('storage', onStorage);
      clearInterval(t);
    };
  }, []);

  // Cookie consent açıkken sticky CTA gizle
  if (kapali || !goster || cookieAcik) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-strong border border-ink/5 p-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shrink-0">
          <span className="text-white font-extrabold">P</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-ink text-sm">Beta'ya katıl</div>
          <div className="text-xs text-ink-muted truncate">Erken eriş + öncelik</div>
        </div>
        <Link
          href="/#bekleme"
          className="bg-accent text-white text-sm font-bold px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 shrink-0"
        >
          Katıl <ArrowRight size={14} />
        </Link>
        <button
          onClick={() => setKapali(true)}
          className="text-ink-muted p-1.5 -mr-1 shrink-0"
          aria-label="Kapat"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
