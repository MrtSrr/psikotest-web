'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Stethoscope, TestTube, Star, MapPin } from 'lucide-react';

function AnimatedNumber({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.floor(v).toLocaleString('tr-TR')}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { Ikon: TestTube, value: 25, suffix: '+', etiket: 'Klinik test çeşidi', alt: 'WISC, MMPI, Rorschach ve daha fazlası' },
  { Ikon: Stethoscope, value: 30, suffix: '+', etiket: 'Lisanslı uzman', alt: 'Manuel doğrulanmış (beta)' },
  { Ikon: MapPin, value: 81, suffix: '', etiket: 'İl kapsama', alt: 'Türkiye geneli yüz yüze' },
  { Ikon: Star, value: 100, suffix: '%', etiket: 'KVKK uyum', alt: 'Verilerin tamamen senin kontrolünde' },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-24 -mt-12 relative z-10">
      <div className="container-max">
        <div className="rounded-3xl bg-white shadow-strong border border-ink/5 p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.etiket}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="inline-flex w-12 h-12 rounded-xl bg-accent-muted items-center justify-center mb-3">
                  <s.Ikon className="text-accent" size={22} strokeWidth={2.2} />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold tracking-tight gradient-text">
                  <AnimatedNumber to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-semibold text-ink text-sm lg:text-base">{s.etiket}</div>
                <div className="text-xs text-ink-muted mt-0.5">{s.alt}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
