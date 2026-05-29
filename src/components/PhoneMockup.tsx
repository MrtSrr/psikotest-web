'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Heart, CalendarDays, LayoutDashboard, CircleUser, Search } from 'lucide-react';

/**
 * Faux app screenshot — gerçek Psiva app UI'ını birebir simüle eder.
 * BottomTabBar: 3 tab (Randevular | Ana FAB | Profil) — orta gradient FAB,
 * aktif tab altında pill indicator (gerçek app pattern'i).
 */
export function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      className="relative mx-auto max-w-full"
      style={{ width: 290, height: 600 }}
    >
      {/* Telefon çerçevesi — iPhone-tarzı */}
      <div className="absolute inset-0 rounded-[44px] bg-ink shadow-[0_30px_60px_-15px_rgba(74,144,217,0.45)] p-2.5">
        {/* Ekran */}
        <div className="relative w-full h-full rounded-[36px] bg-bg-soft overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-7 pt-3 pb-1 text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="text-[8px]">●●●</span>
              <span>📶</span>
              <span>🔋</span>
            </span>
          </div>

          {/* Header — TestorlerEkrani */}
          <div className="px-4 pt-3 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-base font-extrabold text-ink leading-tight">Uzmanını bul</h3>
                <p className="text-[10px] text-ink-muted mt-0.5">15 uzman · İstanbul</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-soft">
                <Search className="text-white" size={16} strokeWidth={2.4} />
              </div>
            </div>

            {/* Filtre chips */}
            <div className="flex gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-accent text-white text-[10px] font-bold">Tümü</span>
              <span className="px-2.5 py-1 rounded-full bg-white text-ink text-[10px] font-semibold border border-ink/10">WISC</span>
              <span className="px-2.5 py-1 rounded-full bg-white text-ink text-[10px] font-semibold border border-ink/10">MMPI</span>
              <span className="px-2.5 py-1 rounded-full bg-white text-ink text-[10px] font-semibold border border-ink/10">Beck</span>
            </div>
          </div>

          {/* Testör kartları — gerçek app pattern */}
          <div className="px-3 space-y-2 overflow-hidden">
            <TestorKart
              ad="Dr. Ayşe Kaya"
              sehir="Kadıköy"
              puan={4.9}
              fiyatBaslangic="₺8.000"
              yanitDk={12}
              tamamlanma={95}
              dogrulandi
              favori
            />
            <TestorKart
              ad="Uzm. Mert Yılmaz"
              sehir="Beşiktaş"
              puan={4.8}
              fiyatBaslangic="₺2.500"
              yanitDk={28}
              tamamlanma={92}
              dogrulandi
            />
            <TestorKart
              ad="Dr. Zeynep Türk"
              sehir="Şişli · 2km"
              puan={4.7}
              fiyatBaslangic="₺3.200"
              yanitDk={45}
              tamamlanma={88}
            />
          </div>

          {/* BottomTabBar — gerçek app yapısı: 3 tab, orta FAB */}
          <div className="absolute bottom-0 inset-x-0 bg-white border-t border-ink/5 px-4 pt-2 pb-3">
            <div className="flex items-end justify-around">
              {/* Sol: Randevular */}
              <TabIkon Ikon={CalendarDays} etiket="Randevular" />
              {/* Orta: Ana sayfa — FAB (gradient, büyük, aktif) */}
              <MerkezFAB />
              {/* Sağ: Profil */}
              <TabIkon Ikon={CircleUser} etiket="Profil" />
            </div>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-ink rounded-b-2xl" />
      </div>

      {/* Floating notification — premium polish */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute -right-4 top-32 bg-white rounded-2xl shadow-strong px-3 py-2.5 flex items-center gap-2 max-w-[180px]"
      >
        <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center">
          <span className="text-success text-sm font-bold">✓</span>
        </div>
        <div>
          <div className="text-[11px] font-bold text-ink leading-tight">Randevun onaylandı</div>
          <div className="text-[9px] text-ink-muted">Salı 14:30 — Dr. Ayşe</div>
        </div>
      </motion.div>

      {/* Floating rating */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute -left-6 bottom-44 bg-white rounded-2xl shadow-strong px-3 py-2.5 flex items-center gap-2"
      >
        <Star className="text-warning fill-warning" size={16} />
        <div>
          <div className="text-[11px] font-bold text-ink leading-tight">4.9 puan</div>
          <div className="text-[9px] text-ink-muted">127 değerlendirme</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TabIkon({
  Ikon,
  etiket,
}: {
  Ikon: typeof CalendarDays;
  etiket: string;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5 pt-1.5 px-3">
      <Ikon className="text-ink-muted" size={20} strokeWidth={1.8} />
      <span className="text-[9px] font-semibold text-ink-muted">{etiket}</span>
    </div>
  );
}

function MerkezFAB() {
  // Gerçek app: ortadaki ana sayfa tab, gradient circular, biraz yukarı
  return (
    <div className="flex flex-col items-center gap-1 -mt-3">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-light via-accent to-accent-dark shadow-strong flex items-center justify-center ring-4 ring-white">
        <LayoutDashboard className="text-white" size={22} strokeWidth={2.2} />
      </div>
      <span className="text-[9px] font-bold text-accent">Ana sayfa</span>
    </div>
  );
}

function TestorKart({
  ad,
  sehir,
  puan,
  fiyatBaslangic,
  yanitDk,
  tamamlanma,
  dogrulandi,
  favori,
}: {
  ad: string;
  sehir: string;
  puan: number;
  fiyatBaslangic: string;
  yanitDk: number;
  tamamlanma: number;
  dogrulandi?: boolean;
  favori?: boolean;
}) {
  const ilkler = ad.split(' ').slice(-2).map(s => s[0]).join('');
  return (
    <div className="rounded-2xl border border-ink/5 bg-white p-2.5 flex gap-2.5">
      {/* Sol: avatar + doğrulanma */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-light to-accent flex items-center justify-center text-white font-extrabold text-xs">
          {ilkler}
        </div>
        {dogrulandi && (
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-success flex items-center justify-center text-white text-[8px] font-bold border-2 border-white">
            ✓
          </span>
        )}
      </div>

      {/* Sağ: bilgiler */}
      <div className="flex-1 min-w-0">
        {/* 1. satır: ad + puan + kalp */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <div className="text-[11px] font-bold text-ink truncate flex-1">{ad}</div>
          <div className="flex items-center gap-0.5 text-[9px] font-bold text-ink">
            <Star size={9} className="fill-warning text-warning" />
            {puan}
          </div>
          <Heart
            size={12}
            className={favori ? 'text-error fill-error' : 'text-ink-muted'}
          />
        </div>

        {/* 2. satır: şehir */}
        <div className="flex items-center gap-1 text-[9px] text-ink-muted mb-1">
          <MapPin size={9} />
          {sehir}
        </div>

        {/* 3. satır: trust signals (yeşil küçük) */}
        <div className="flex items-center gap-2 text-[8px] font-bold text-success mb-1">
          <span>↩ {yanitDk}dk</span>
          <span>✓ %{tamamlanma}</span>
        </div>

        {/* 4. satır: fiyat + CTA */}
        <div className="flex items-center justify-between gap-1">
          <div className="text-[10px] font-bold text-accent">{fiyatBaslangic}+</div>
          <div className="bg-accent text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
            Profili gör
          </div>
        </div>
      </div>
    </div>
  );
}
