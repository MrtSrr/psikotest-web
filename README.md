# Psiva — Marketing Web Sitesi

Premium landing page for Psiva mobile app — Türkiye'nin psikolojik test marketplace'i.

**Stack:** Next.js 15 (App Router) + Tailwind v3 + Framer Motion + Lucide React + TypeScript 5.7

## 🚀 Hızlı Başlangıç

```bash
cd /Users/mert/Desktop/psiva-web
npm install
npm run dev
# → http://localhost:3001 (port 3000 backend'de ise)
```

Production build:
```bash
npm run build
npm start
```

## 📁 Yapı

```
src/
├── app/
│   ├── layout.tsx           # SEO meta + Navbar + Footer + JsonLd + globals (CookieConsent, StickyCTA, WhatsApp)
│   ├── page.tsx             # Anasayfa — 12 section'lu conversion funnel
│   ├── globals.css          # Tailwind + design system + failsafe animation
│   ├── loading.tsx          # Loading state (Brain pulse + spinner)
│   ├── not-found.tsx        # 404 sayfası (branded)
│   ├── opengraph-image.tsx  # Dinamik OG image (1200×630, edge runtime)
│   ├── sitemap.ts           # Otomatik sitemap.xml
│   ├── robots.ts            # Otomatik robots.txt
│   ├── gizlilik/page.tsx    # KVKK Gizlilik Politikası (m.11 hakları)
│   ├── sartlar/page.tsx     # Kullanım Şartları (6502 m.15/g cayma istisnası)
│   ├── uzmanlar/page.tsx    # Uzmanlar için landing
│   └── iletisim/page.tsx    # Destek + acil hatlar
└── components/
    ├── Navbar.tsx           # Sticky nav + mobile burger + scroll detection
    ├── Hero.tsx             # Hero + breathing rings + phone mockup
    ├── PhoneMockup.tsx      # 🆕 Gerçek app UI simülasyonu (3-tab + FAB)
    ├── Stats.tsx            # 🆕 Animated counter (25+ test, 30+ uzman, 81 il)
    ├── TrustBar.tsx         # 🆕 KVKK / iyzico / lisans / doğrulama trust signals
    ├── Features.tsx         # 6 ana özellik grid
    ├── HowItWorks.tsx       # 3 adım randevu akışı
    ├── Tests.tsx            # Test envanteri (3 grup)
    ├── Comparison.tsx       # 🆕 "Test almanın 4 yolu" (vs Google/tanıdık/klinik)
    ├── Testimonials.tsx     # 🆕 4 beta tester yorumu
    ├── ForTherapists.tsx    # Uzmanlar pitch (%10 komisyon)
    ├── BetaWaitlist.tsx     # 🆕 Email capture, validation, success state
    ├── FAQ.tsx              # 8-soru accordion
    ├── DownloadCTA.tsx      # App Store + Play Store butonları (yakında)
    ├── Footer.tsx           # Legal + acil destek vurgusu
    ├── CookieConsent.tsx    # 🆕 KVKK uyumlu banner (2 seçenek)
    ├── StickyCTA.tsx        # 🆕 Mobile bottom sticky (scroll'da görünür)
    ├── WhatsAppFloating.tsx # 🆕 WhatsApp destek butonu (pulse dot)
    └── JsonLd.tsx           # 🆕 Structured data (Organization + WebApplication)
```

## 🎨 Design System

App ile **birebir senkron**:

| Element | Token | Renk |
|---|---|---|
| Accent | `accent.DEFAULT` | `#4A90D9` |
| Accent dark | `accent.dark` | `#3578C0` (gradient end) |
| Accent muted | `accent.muted` | `#E6F4FE` (subtle bg) |
| Ink | `ink.DEFAULT` | `#0F1F2E` (text) |
| Success | `success` | `#1A6B44` |
| Warning | `warning` | `#A86A1E` |
| Error | `error` | `#8B2020` |

- **Font:** Inter (Google Fonts) — `font-feature-settings: 'cv02', 'cv03'`
- **Animasyon:** Breathing rings (Calm/Headspace pattern), Framer Motion scroll-reveal
- **İkonlar:** Lucide React (app ile aynı set)
- **Shadows:** soft / medium / strong (8/12/16% accent opacity)

## 📊 Sayfa Akışı (Anasayfa)

Conversion funnel sırası:

```
1. Hero            — value prop + phone mockup
2. Stats           — sosyal ispat (25+ test, 30+ uzman, 81 il, %100 KVKK)
3. TrustBar        — KVKK/iyzico/lisans güvenlik bandı
4. Features        — 6 ana özellik
5. HowItWorks      — 3 adım randevu akışı
6. Tests           — Test envanteri (3 grup)
7. Comparison      — "4 yol" tablosu (vs alternatif yöntemler)
8. Testimonials    — Beta tester yorumları
9. ForTherapists   — Uzmanlar için pitch (%10 komisyon)
10. BetaWaitlist   — Email capture
11. FAQ            — 8 soru objection handling
12. DownloadCTA    — App Store + Play Store
```

## 🚀 Vercel Deploy (5 dk)

```bash
# Vercel CLI yoksa:
npm i -g vercel

# Deploy
cd /Users/mert/Desktop/psiva-web
vercel              # preview
vercel --prod       # production
```

**Domain bağla:**
1. Vercel dashboard → Project Settings → Domains
2. `psiva.app` ekle
3. DNS A/AAAA kayıtlarını Vercel'e yönlendir

**Alternatif:** Netlify (`netlify deploy --prod`) veya Cloudflare Pages (git push otomatik).

## 📊 SEO & Performance

| Özellik | Durum |
|---|---|
| Open Graph + Twitter cards | ✅ Tüm sayfalarda |
| Dynamic OG image | ✅ `/opengraph-image` (1200×630, edge runtime) |
| JSON-LD structured data | ✅ Organization + WebApplication + AggregateRating |
| Sitemap.xml | ✅ Otomatik (`src/app/sitemap.ts`) |
| robots.txt | ✅ Otomatik (`src/app/robots.ts`) |
| 404 sayfa | ✅ Branded (`src/app/not-found.tsx`) |
| Loading state | ✅ Brain pulse animasyon |
| Mobile responsive | ✅ Tüm breakpoint'ler |
| Cookie consent (KVKK) | ✅ 2-seçenek (Sadece zorunlu / Tümü) |
| First Load JS | 162 KB (anasayfa) |
| Lighthouse hedef | 95+ (deploy sonrası test) |

## 📝 İçerik Güncelleme

| Değişiklik | Dosya |
|---|---|
| Hero metni | `src/components/Hero.tsx` |
| Komisyon oranı | `src/components/ForTherapists.tsx` + `src/components/FAQ.tsx` |
| Yeni SSS sorusu | `src/components/FAQ.tsx` (sorular dizisi) |
| Test listesi | `src/components/Tests.tsx` |
| Karşılaştırma tablosu | `src/components/Comparison.tsx` (yontemler dizisi) |
| Testimonial | `src/components/Testimonials.tsx` (yorumlar dizisi) |
| Privacy policy | `src/app/gizlilik/page.tsx` |
| ToS | `src/app/sartlar/page.tsx` |
| Phone mockup | `src/components/PhoneMockup.tsx` (app UI senkron) |

## ⚖️ Yasal

**App Store/Play Store başvurusu için zorunlu:**
1. App Store Connect "Privacy Policy URL" → `https://psiva.app/gizlilik`
2. Google Play Console "Privacy Policy" → aynı URL
3. App içinde `Linking.openURL('https://psiva.app/gizlilik')` ✅ hazır

**6502 Tüketici Kanunu:** ToS'ta cayma hakkı m.15/g istisnası ✅
**KVKK m.11:** Gizlilik politikasında veri erişim/silme hakkı detayı ✅

## 🔗 İletişim

- `destek@psiva.app`
- `kvkk@psiva.app`
- `hukuk@psiva.app`

## 🎯 Stratejik Pozisyonlama

Psiva **terapi platformu değildir** (Hiwell/BetterHelp/Talkspace değil).
**Psikolojik test marketplace**'idir — tek seferlik değerlendirme için doğru uzmanla 3 tıkla buluşma.

Comparison tablosunda alternatif yöntemlerle (Google arama, tanıdıktan tavsiye, klinik direkt arama) kıyaslanır — kendisini **yeni bir kategori** olarak konumlandırır.
