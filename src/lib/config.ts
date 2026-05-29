/**
 * Psiva web — merkezi yapılandırma.
 * Gerçek değerleri BURADAN doldur. Tek kaynak.
 */

// WhatsApp destek numarası — uluslararası format, + ve boşluk YOK.
// Örn: '905321234567'. Boş bırakılırsa WhatsApp butonu iletişim sayfasına yönlenir.
export const WHATSAPP_NUMBER = ''; // TODO: gerçek WhatsApp Business numarası

// Beta bekleme listesi form gönderim hedefi.
// 1) Formspree (önerilen, 5 dk): formspree.io → yeni form → endpoint'i buraya yapıştır
//    Örn: 'https://formspree.io/f/xxxxxxxx'
// 2) Boş bırakılırsa → mailto fallback (kullanıcının mail uygulaması açılır)
export const WAITLIST_ENDPOINT = ''; // TODO: Formspree endpoint

// İletişim e-postaları
export const EMAIL_DESTEK = 'destek@psiva.app';
export const EMAIL_KVKK = 'kvkk@psiva.app';
export const EMAIL_HUKUK = 'hukuk@psiva.app';

// App store linkleri — yayınlandığında doldur. Boşsa "yakında" gösterilir.
export const APP_STORE_URL = '';
export const PLAY_STORE_URL = '';

/** WhatsApp linkini üret — numara yoksa iletişim sayfasına düş. */
export function whatsappHref(mesaj = 'Merhaba! Psiva hakkında bilgi almak istiyorum.'): string {
  if (!WHATSAPP_NUMBER) return '/iletisim';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mesaj)}`;
}
