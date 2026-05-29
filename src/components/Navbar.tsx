'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, Menu, X } from 'lucide-react';

export function Navbar() {
  const [acik, setAcik] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Anchor link'ler `/#xxx` formatında — bu sayede her sayfadan tıklayınca
  // önce anasayfaya gidip sonra section'a kayar (Next.js Link davranışı).
  const linkler = [
    { href: '/#nasil', etiket: 'Nasıl Çalışır' },
    { href: '/uzmanlar', etiket: 'Uzmanlar İçin' },
    { href: '/#sss', etiket: 'SSS' },
    { href: '/iletisim', etiket: 'İletişim' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/85 backdrop-blur-xl shadow-soft' : 'bg-transparent'
    }`}>
      <nav className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
            <Brain className="text-white" size={20} strokeWidth={2.4} />
          </div>
          <span className="font-bold text-lg tracking-tight">Psiva</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {linkler.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
              {l.etiket}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/#indir" className="btn-primary text-sm py-2.5 px-5">
            Uygulamayı İndir
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setAcik(!acik)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Menü"
        >
          {acik ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {acik && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-ink/5">
          <div className="container-max py-6 flex flex-col gap-4">
            {linkler.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAcik(false)}
                className="text-base font-medium text-ink py-2"
              >
                {l.etiket}
              </Link>
            ))}
            <Link href="/#indir" onClick={() => setAcik(false)} className="btn-primary mt-2">
              Uygulamayı İndir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
