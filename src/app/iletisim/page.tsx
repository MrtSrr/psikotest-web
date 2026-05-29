import type { Metadata } from 'next';
import { Mail, Shield, FileText, LifeBuoy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Psiva iletişim — destek, KVKK başvuru, hukuk, acil destek hatları.',
};

const kanallar = [
  {
    Ikon: Mail,
    baslik: 'Genel destek',
    email: 'destek@psiva.app',
    aciklama: 'Sorular, bug raporu, öneriler — 24-48 saat içinde yanıt.',
  },
  {
    Ikon: Shield,
    baslik: 'KVKK başvuru',
    email: 'kvkk@psiva.app',
    aciklama: 'Veri erişim, silme, düzeltme talepleri — yasal süre 30 gün.',
  },
  {
    Ikon: FileText,
    baslik: 'Hukuk',
    email: 'hukuk@psiva.app',
    aciklama: 'İçerik kaldırma talepleri, yasal bildirimler, sözleşme.',
  },
];

export default function IletisimPage() {
  return (
    <article className="pt-32 pb-20">
      <div className="container-max max-w-4xl">
        <div className="text-center mb-12">
          <span className="badge-soft">Bize ulaş</span>
          <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Sorularını <span className="gradient-text">bekliyoruz</span>
          </h1>
          <p className="mt-5 text-lg text-ink-soft">
            Doğru kanaldan yazarsan daha hızlı dönüş alırsın.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {kanallar.map(k => (
            <a
              key={k.email}
              href={`mailto:${k.email}`}
              className="card hover:shadow-medium hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                <k.Ikon className="text-accent group-hover:text-white transition-colors" size={22} strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-bold text-ink text-lg">{k.baslik}</h3>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{k.aciklama}</p>
              <p className="mt-4 text-accent font-semibold text-sm">{k.email}</p>
            </a>
          ))}
        </div>

        {/* Acil destek vurgusu */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-error/5 to-error/10 border-2 border-error/20 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center shrink-0">
              <LifeBuoy className="text-error" size={24} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="font-bold text-ink text-lg">Acil destek — Şu an iyi değilsen</h3>
              <p className="mt-2 text-ink-soft">
                Kriz veya panik anında resmî hatları arayabilirsin. <strong>Yalnız değilsin.</strong>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:182" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error text-white font-semibold text-sm">
                  📞 182 — Sağlık Bakanlığı
                </a>
                <a href="tel:112" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-error text-error font-semibold text-sm">
                  📞 112 — Acil
                </a>
                <a href="tel:155" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-error text-error font-semibold text-sm">
                  📞 155 — Polis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
