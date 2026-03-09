import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#07090D',
        panel: '#0D1118',
        accent: '#FF4D2D',
        muted: '#A3A8B3',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 77, 45, 0.25), 0 8px 30px rgba(255, 77, 45, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
