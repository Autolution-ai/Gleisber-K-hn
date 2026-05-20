import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1917',
        stone: '#44403C',
        gold: '#CA8A04',
        'gold-soft': '#FEF9EC',
        sand: '#FAFAF9',
        line: '#E7E5E4',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0,0,0,0.06)',
        lift: '0 10px 30px rgba(0,0,0,0.08)',
        xl2: '0 20px 40px rgba(0,0,0,0.12)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
