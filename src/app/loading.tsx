import { Brain } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32">
      <div className="text-center">
        <div className="relative inline-flex">
          <div className="w-20 h-20 rounded-full bg-accent-muted flex items-center justify-center animate-pulse-slow">
            <Brain className="text-accent" size={40} strokeWidth={1.6} />
          </div>
          <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin" />
        </div>
        <p className="mt-6 text-ink-soft font-medium">Yükleniyor...</p>
      </div>
    </div>
  );
}
