import Link from 'next/link';
import { Brain, Mail, Shield, FileText } from 'lucide-react';

export function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container-max">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Brain className="text-white" size={22} strokeWidth={2.4} />
              </div>
              <span className="font-bold text-xl">Psiva</span>
            </div>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Türkiye&apos;nin psikolojik test odaklı uzman platformu.
              KVKK uyumlu, güvenli, lisanslı uzmanlarla.
            </p>
            <p className="mt-6 text-white/60 text-sm">
              <strong className="text-white/85">Acil durum:</strong>{' '}
              <a href="tel:182" className="hover:text-white underline">182</a> (Sağlık Bakanlığı) ·{' '}
              <a href="tel:112" className="hover:text-white underline">112</a>
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
              Platform
            </h4>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/#nasil" className="hover:text-white">Nasıl çalışır</Link></li>
              <li><Link href="/uzmanlar" className="hover:text-white">Uzmanlar için</Link></li>
              <li><Link href="/#sss" className="hover:text-white">SSS</Link></li>
              <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
              <li><Link href="/#indir" className="hover:text-white">Uygulamayı indir</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
              Yasal
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/gizlilik" className="hover:text-white inline-flex items-center gap-1.5">
                  <Shield size={14} /> Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/sartlar" className="hover:text-white inline-flex items-center gap-1.5">
                  <FileText size={14} /> Kullanım Şartları
                </Link>
              </li>
              <li>
                <a href="mailto:kvkk@psiva.app" className="hover:text-white inline-flex items-center gap-1.5">
                  <Mail size={14} /> KVKK başvuru
                </a>
              </li>
              <li>
                <a href="mailto:destek@psiva.app" className="hover:text-white">
                  destek@psiva.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; {yil} Psiva. Tüm hakları saklıdır.</p>
          <p>
            Made with care in{' '}
            <span className="text-white font-medium">Türkiye 🇹🇷</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
