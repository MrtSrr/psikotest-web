import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description: 'PsikoTest kullanım şartları — mesafeli sözleşme cayma hakkı, iptal politikası, sorumluluk.',
};

export default function SartlarPage() {
  return (
    <article className="pt-32 pb-20">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
          Kullanım Şartları
        </h1>
        <p className="text-ink-muted text-sm">Son güncelleme: 24 Mayıs 2026 · Sürüm: 1.0</p>

        <div className="mt-10 space-y-8 text-ink-soft leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">1. PsikoTest Nedir?</h2>
            <p>
              PsikoTest, danışanlar ile lisanslı psikolog/psikiyatrist/psikolojik danışman
              ("Uzman") arasında <strong>psikolojik test ve yüz yüze seans</strong> randevusunu
              sağlayan bir <strong>aracı teknoloji platformudur</strong>.
            </p>
            <p className="mt-2">
              <strong>PsikoTest tıbbi hizmet sağlayıcısı değildir.</strong> Tıbbi tanı, tedavi
              veya yorum uzmanın bireysel sorumluluğundadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">2. Kim Kullanabilir?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Danışanlar:</strong> 18 yaşını doldurmuş, geçerli kimlikli</li>
              <li><strong>Uzmanlar:</strong> Resmî psikolog/psikiyatrist lisansı, TPDR veya Tabipler Odası üyeliği</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">3. Hizmet Tipleri</h2>
            <p>
              Şu an <strong>sadece yüz yüze seans</strong> kabul edilmektedir. Online seans T.C.
              Sağlık Bakanlığı Telesağlık Yönetmeliği lisansı sonrası aktif edilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">4. Ücretlendirme & Ödeme</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Test ücretleri uzman tarafından belirlenir</li>
              <li>Ödeme iyzico üzerinden güvenli kart ile alınır (PCI-DSS, 3D Secure)</li>
              <li>Platform komisyonu: <strong>%10</strong> (uzman kazancından otomatik düşülür)</li>
              <li>Para çekme: minimum ₺50, IBAN&apos;a 1-3 iş günü</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">5. Mesafeli Sözleşme Cayma Hakkı (6502 m.48 / m.15)</h2>
            <p>
              <strong>14 gün cayma hakkı:</strong> Randevu tarihinize 14 günden fazla süre varsa,
              herhangi bir sebep göstermeksizin sözleşmeden cayma hakkına sahipsiniz.
            </p>
            <p className="mt-3">
              <strong>İstisna (m.15/1-g):</strong> Randevuya 14 günden az kalmışsa veya seans
              başladıysa, kişiselleştirilmiş hizmet istisnası gereği cayma hakkı kullanılamaz.
              Aşağıdaki iptal politikası uygulanır:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">6. İptal & Yeniden Planlama</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Danışan iptali:</strong>
                <ul className="pl-4 mt-1 space-y-0.5">
                  <li>• 24+ saat öncesi: %100 iade</li>
                  <li>• 2-24 saat arası: %50 iade</li>
                  <li>• 2 saatten az: İade yok</li>
                </ul>
              </li>
              <li><strong>Uzman iptali:</strong> Tam iade + %10 kupon indirim</li>
              <li><strong>No-show (gelmeme):</strong> Danışan no-show → iade yok; Uzman no-show → tam iade + uyarı</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">7. Sorumluluk Sınırlaması</h2>
            <p>PsikoTest aracı platform olarak:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>✓ Teknik altyapı sürekliliği (%99.5 SLA hedef)</li>
              <li>✓ Ödeme güvenliği (iyzico altyapısı)</li>
              <li>✓ KVKK uyum</li>
              <li>✗ Uzmanın profesyonel tanı/tedavi kalitesinden sorumlu değildir</li>
              <li>✗ Tıbbi sonuçlardan sorumlu değildir</li>
            </ul>
            <p className="mt-3">
              Kriz durumlarında her zaman <strong>182</strong> (Sağlık Bakanlığı) veya <strong>112</strong> aranmalıdır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">8. Anlaşmazlık Çözümü</h2>
            <p>
              Tüm anlaşmazlıklar <strong>İstanbul mahkemeleri ve icra daireleri</strong>nde Türk
              Borçlar Kanunu hükümlerine göre çözülür.
            </p>
          </section>

          <p className="text-sm text-ink-muted pt-6 border-t border-ink/10">
            İletişim: <a href="mailto:destek@psikotest.app" className="text-accent font-semibold">destek@psikotest.app</a> ·
            Hukuk: <a href="mailto:hukuk@psikotest.app" className="text-accent font-semibold">hukuk@psikotest.app</a>
          </p>
        </div>
      </div>
    </article>
  );
}
