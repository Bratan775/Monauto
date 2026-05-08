import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#b9cdff',
          300: '#84a9ff',
          400: '#4d7bff',
          500: '#1a4fff',
          600: '#0030f5',
          700: '#0024d1',
          800: '#001fa8',
          900: '#001a82',
          950: '#000d4d',
        },
        carbon: {
          50:  '#f7f7f8',
          100: '#ededf0',
          200: '#d8d8de',
          300: '#b5b5c0',
          400: '#8d8d9e',
          500: '#6e6e82',
          600: '#585869',
          700: '#484856',
          800: '#3d3d47',
          900: '#35353d',
          950: '#141417',
        },
        chrome: {
          DEFAULT: '#c0c0c0',
          light: '#e8e8e8',
          dark: '#888',
        },
        accent: {
          gold: '#c9a84c',
          red:  '#e53935',
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-right':'slideRight 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'brand-glow': '0 0 40px rgba(26,79,255,0.25)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15)',
        'premium':    '0 4px 24px rgba(201,168,76,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
