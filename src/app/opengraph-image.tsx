import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Psiva — Türkiye\'nin psikolojik test platformu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6AAEE0 0%, #4A90D9 50%, #3578C0 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brain icon emulated with circles */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ fontSize: 80, color: '#4A90D9' }}>🧠</div>
        </div>

        <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: -2, textAlign: 'center', lineHeight: 1.05, marginBottom: 24 }}>
          Psiva
        </div>

        <div style={{ fontSize: 36, fontWeight: 600, textAlign: 'center', maxWidth: 900, lineHeight: 1.3, opacity: 0.95 }}>
          İhtiyacın olan testi, doğru uzmanla.
        </div>

        <div style={{ marginTop: 40, fontSize: 22, fontWeight: 600, padding: '12px 28px', borderRadius: 999, background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
          Türkiye&apos;nin psikolojik test platformu · KVKK uyumlu
        </div>
      </div>
    ),
    { ...size }
  );
}
