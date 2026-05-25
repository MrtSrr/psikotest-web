# PsikoTest — Marketing Web Sitesi

Premium landing page for PsikoTest mobile app.

**Stack:** Next.js 15 (App Router) + Tailwind v3 + Framer Motion + Lucide React

## 🚀 Hızlı Başlangıç

```bash
cd /Users/mert/Desktop/psikotest-web
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Yapı

```
src/
├── app/
│   ├── layout.tsx          # SEO meta + Navbar + Footer wrapper
│   ├── page.tsx            # Anasayfa (Hero, Features, ...)
│   ├── globals.css         # Tailwind + design system
│   ├── gizlilik/           # KVKK uyumlu privacy policy
│   ├── sartlar/            # Kullanım şartları (6502 m.15/g dahil)
│   ├── uzmanlar/           # "Uzmanlar için" landing
│   └── iletisim/           # Destek/KVKK/hukuk + acil destek
├── components/
│   ├── Navbar.tsx          # Sticky nav + mobile menu
│   ├── Hero.tsx            # Hero + breathing rings (app ile aynı)
│   ├── Features.tsx        # 6-grid ana özellikler
│   ├── HowItWorks.tsx      # 3-adım nasıl çalışır
│   ├── Tests.tsx           # Test envanteri (3 grup)
│   ├── ForTherapists.tsx   # Uzmanlar için pitch
│   ├── FAQ.tsx             # Accordion SSS
│   ├── DownloadCTA.tsx     # App Store + Play Store CTA
│   └── Footer.tsx          # Footer + acil destek vurgusu
└── lib/                    # (boş, ileride API client)
```

## 🎨 Design System

App ile **birebir senkron**:
- **Renkler:** `accent: #4A90D9` (mavi), `ink: #0F1F2E` (text)
- **Font:** Inter (Google Fonts)
- **Animasyon:** Breathing rings (Calm/Headspace pattern)
- **Lucide ikonlar** (app'le aynı)

## 🚀 Deploy (Vercel — 5 dk)

```bash
# Vercel CLI yoksa:
npm i -g vercel

# Deploy
cd /Users/mert/Desktop/psikotest-web
vercel

# Production
vercel --prod
```

Domain bağla:
1. Vercel dashboard → Project Settings → Domains
2. `psikotest.app` ekle
3. DNS kayıtları (A + AAAA) Vercel'e yönlendir

Alternatif: **Netlify** (`netlify deploy --prod`) veya **Cloudflare Pages** (git push otomatik).

## 📊 SEO & Performance

- ✅ Open Graph + Twitter cards
- ✅ JSON-LD eklenebilir (`src/app/layout.tsx`)
- ✅ Sitemap otomatik (Next 15 `app/sitemap.ts` ekle)
- ✅ Image optimization (Next/Image kullan)
- ⏳ Analytics (privacy-friendly: Plausible / Fathom önerilir)

## 📝 İçerik Güncelleme

| Değişiklik | Dosya |
|---|---|
| Hero metni | `src/components/Hero.tsx` |
| Komisyon oranı | `src/components/ForTherapists.tsx` + `src/components/FAQ.tsx` |
| Yeni SSS sorusu | `src/components/FAQ.tsx` (sorular dizisi) |
| Test listesi | `src/components/Tests.tsx` |
| Privacy policy | `src/app/gizlilik/page.tsx` |
| ToS | `src/app/sartlar/page.tsx` |

## ⚖️ Yasal

KVKK Gizlilik Politikası ve Kullanım Şartları **App Store/Play Store başvurusu için gereklidir**.
Bu sitenin canlıya alınması:
1. App Store Connect "Privacy Policy URL" → `https://psikotest.app/gizlilik`
2. Google Play Console "Privacy Policy" → aynı URL
3. App içinde `Linking.openURL('https://psikotest.app/gizlilik')` zaten var ✅

## 🔗 İletişim

- destek@psikotest.app
- kvkk@psikotest.app
- hukuk@psikotest.app
