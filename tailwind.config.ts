import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // App ile aynı palet — mavi sakinleştirici, mental health uygun
        accent: {
          DEFAULT: '#4A90D9',
          dark: '#3578C0',
          light: '#6AAEE0',
          muted: '#E6F4FE',
        },
        ink: {
          DEFAULT: '#0F1F2E',
          soft: '#3A4A5C',
          muted: '#7A8896',
        },
        bg: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F9FB',
          card: '#FFFFFF',
        },
        success: '#1A6B44',
        warning: '#A86A1E',
        error: '#8B2020',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breath': 'breath 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.15)', opacity: '0.3' },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6AAEE0 0%, #4A90D9 50%, #3578C0 100%)',
        'gradient-soft': 'linear-gradient(180deg, #FFFFFF 0%, #E6F4FE 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(74, 144, 217, 0.08)',
        'medium': '0 8px 30px rgba(74, 144, 217, 0.12)',
        'strong': '0 16px 40px rgba(74, 144, 217, 0.16)',
      },
    },
  },
  plugins: [],
};
export default config;
