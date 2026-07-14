import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'text-main': 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'equalizer-1': 'equalizer-1 0.8s ease-in-out infinite',
        'equalizer-2': 'equalizer-2 0.6s ease-in-out infinite 0.2s',
        'equalizer-3': 'equalizer-3 0.7s ease-in-out infinite 0.1s',
      },
    },
  },
  plugins: [],
};

export default config;
