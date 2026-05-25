import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'PsikoTest gizlilik politikası — KVKK m.11 hakları, veri saklama, üçüncü taraflar.',
};

export default function GizlilikPage() {
  return (
    <article className="pt-32 pb-20">
      <div className="container-max max-w-3xl prose prose-lg">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
          Gizlilik Politikası
        </h1>
        <p className="text-ink-muted text-sm">
          Son güncelleme: 24 Mayıs 2026 · Sürüm: 1.0
        </p>

        <div className="mt-10 space-y-8 text-ink-soft leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">1. Veri Sorumlusu</h2>
            <p>
              <strong>PsikoTest</strong>, psikolojik test ve uzman danışmanlık hizmetleri için
              aracı bir teknoloji platformudur. KVKK kapsamında veri sorumlusu sıfatıyla
              hareket eder.
            </p>
            <p className="mt-2">İletişim: <a href="mailto:kvkk@psikotest.app" className="text-accent font-semibold">kvkk@psikotest.app</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">2. Hangi Verileri Topluyoruz?</h2>
            <h3 className="font-bold text-ink mt-4 mb-2">2.1 Kayıt sırasında</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ad, soyad</li>
              <li>E-posta adresi</li>
              <li>Şifre (<strong>bcrypt ile hash&apos;lenmiş</strong>)</li>
              <li>Doğum tarihi (18+ kontrol için)</li>
              <li>Rol (danışan / uzman)</li>
            </ul>

            <h3 className="font-bold text-ink mt-4 mb-2">2.2 Uzman ek bilgileri</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Biyografi, şehir, muayene adresi</li>
              <li>Sertifikalar (PDF/JPG)</li>
              <li>T.C. Kimlik Numarası (<strong>AES-256-GCM ile şifrelenmiş</strong>)</li>
              <li>Banka IBAN (şifrelenmiş)</li>
            </ul>

            <h3 className="font-bold text-ink mt-4 mb-2">2.3 Toplamadığımız</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>❌ Konum (kullanıcı izin verirse yalnızca "yakındaki uzman" için, kaydedilmez)</li>
              <li>❌ Kamera/mikrofon</li>
              <li>❌ Rehber bilgileri</li>
              <li>❌ Üçüncü taraf analitik (Google Analytics, Facebook Pixel <strong>yok</strong>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">3. KVKK m.11 Hakları</h2>
            <p>
              Aşağıdaki tüm haklar <strong>uygulama içinde tek tıkla</strong> kullanılabilir:
            </p>
            <table className="mt-4 w-full border-collapse">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="text-left py-2 text-ink font-semibold">Hak</th>
                  <th className="text-left py-2 text-ink font-semibold">Nerede</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-ink/5">
                  <td className="py-2">Verilerimi indir (JSON)</td>
                  <td className="py-2">Profil → Verilerimi indir</td>
                </tr>
                <tr className="border-b border-ink/5">
                  <td className="py-2">Verilerimi sil</td>
                  <td className="py-2">Profil → Hesabı sil</td>
                </tr>
                <tr>
                  <td className="py-2">Düzeltme / itiraz</td>
                  <td className="py-2">Profil → Düzenle</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4">
              E-posta başvuru: <a href="mailto:kvkk@psikotest.app" className="text-accent font-semibold">kvkk@psikotest.app</a>{' '}
              (yasal süre: 30 gün)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">4. Çocuklar</h2>
            <p>
              PsikoTest <strong>18 yaş altı kullanıcılara hizmet vermez</strong>. Çocuk testleri için
              yasal veli onayıyla, uzman vekaleten girer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">5. Mental Sağlık Uyarısı</h2>
            <p>
              <strong>PsikoTest tıbbi acil durum platformu değildir.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Kriz / intihar düşüncesi: <a href="tel:182" className="text-accent font-semibold">182</a></li>
              <li>Tıbbi acil: <a href="tel:112" className="text-accent font-semibold">112</a></li>
              <li>Şiddet / istismar: <a href="tel:155" className="text-accent font-semibold">155</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink mb-3">6. Güvenlik</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>TLS 1.3 şifreli iletişim</li>
              <li>bcrypt 12 rounds şifre hash</li>
              <li>AES-256-GCM ile özel nitelikli veri şifreleme</li>
              <li>Rate limiting + SQL injection / XSS koruması</li>
            </ul>
          </section>

          <p className="text-sm text-ink-muted pt-6 border-t border-ink/10">
            Sorularınız için: <a href="mailto:kvkk@psikotest.app" className="text-accent font-semibold">kvkk@psikotest.app</a>
          </p>
        </div>
      </div>
    </article>
  );
}
