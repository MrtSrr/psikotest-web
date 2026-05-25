import Link from 'next/link';
import { Brain, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-16">
      <div className="text-center max-w-md mx-auto">
        <div className="relative inline-flex mx-auto">
          <div className="w-24 h-24 rounded-full bg-accent-muted flex items-center justify-center">
            <Brain className="text-accent" size={44} strokeWidth={1.6} />
          </div>
          <span className="absolute -bottom-1 -right-2 bg-error text-white text-sm font-extrabold px-3 py-1 rounded-full shadow-medium">
            404
          </span>
        </div>

        <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 text-ink-soft leading-relaxed">
          Aradığın sayfa taşınmış veya silinmiş olabilir.
          Doğru yere gitmek için aşağıdaki butonları kullanabilirsin.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Anasayfa
          </Link>
          <Link href="/iletisim" className="btn-secondary">
            <Search size={18} />
            Yardım al
          </Link>
        </div>
      </div>
    </section>
  );
}
