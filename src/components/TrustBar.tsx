'use client';

import { Shield, Lock, CheckCircle2, BadgeCheck, ScanFace } from 'lucide-react';

const trustler = [
  { Ikon: Shield, etiket: 'KVKK Uyumlu', alt: 'KVKK m.11 hakları' },
  { Ikon: Lock, etiket: 'iyzico Ödeme', alt: 'PCI-DSS, 3D Secure' },
  { Ikon: BadgeCheck, etiket: 'Lisanslı Uzmanlar', alt: 'TPDR / Tabipler Odası' },
  { Ikon: ScanFace, etiket: 'Manuel Doğrulama', alt: 'Sertifika kontrolü' },
  { Ikon: CheckCircle2, etiket: 'KVKK m.9', alt: 'Yerli veri merkezi' },
];

export function TrustBar() {
  return (
    <section className="py-10 border-y border-ink/5 bg-bg-soft/50">
      <div className="container-max">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-muted mb-6">
          Güvenlik ve uyum
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustler.map(t => (
            <div key={t.etiket} className="flex items-center gap-2 text-ink-soft group">
              <t.Ikon size={20} className="text-accent/70 group-hover:text-accent transition-colors" strokeWidth={1.8} />
              <div>
                <div className="text-sm font-bold text-ink leading-tight">{t.etiket}</div>
                <div className="text-[10px] text-ink-muted leading-tight">{t.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
