'use client';

import { motion } from 'framer-motion';

const testGruplari = [
  {
    grup: 'Çocuk & Ergen',
    renk: 'from-pink-100 to-rose-100',
    testler: ['WISC-V (Zeka)', 'CBCL (Davranış)', 'Conners (DEHB)', 'ADI-R (Otizm)', 'CARS-2 (Otizm)', 'WPPSI-IV'],
  },
  {
    grup: 'Yetişkin',
    renk: 'from-blue-100 to-cyan-100',
    testler: ['WAIS-IV (Zeka)', 'MMPI-2 (Kişilik)', 'NEO-PI-R', 'Beck Depresyon (BDI)', 'Beck Anksiyete (BAI)', 'SCL-90-R'],
  },
  {
    grup: 'Projektif',
    renk: 'from-violet-100 to-purple-100',
    testler: ['Rorschach', 'TAT', 'House-Tree-Person', 'CAT (Çocuk)', 'Wartegg'],
  },
];

export function Tests() {
  return (
    <section className="py-20 lg:py-32 bg-bg-soft">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-soft">Test envanteri</span>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight">
            Tüm <span className="gradient-text">klinik testler</span> tek platformda
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Sertifikalı uzmanlardan, uluslararası standartlarda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testGruplari.map((g, i) => (
            <motion.div
              key={g.grup}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl bg-gradient-to-br ${g.renk} p-8 hover:shadow-medium transition-all`}
            >
              <h3 className="text-2xl font-bold text-ink mb-6">{g.grup}</h3>
              <ul className="space-y-3">
                {g.testler.map(t => (
                  <li key={t} className="flex items-center gap-2 text-ink-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-ink-muted">
          Listede olmayan bir test mi arıyorsunuz? Uzmanlarımıza sorabilir,
          <a href="/iletisim" className="text-accent font-semibold hover:underline ml-1">bize ulaşabilirsiniz</a>.
        </p>
      </div>
    </section>
  );
}
