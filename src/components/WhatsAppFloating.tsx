'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloating() {
  const [goster, setGoster] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGoster(true), 2000);
    return () => clearTimeout(t);
  }, []);

  if (!goster) return null;

  return (
    <a
      href="https://wa.me/905555555555?text=Selam!%20PsikoTest%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-30 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white shadow-strong flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-fade-in-up"
      aria-label="WhatsApp ile destek"
      title="WhatsApp ile bize ulaş"
    >
      <MessageCircle size={26} strokeWidth={2.2} fill="white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-error animate-pulse" />
    </a>
  );
}
