/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        pixel: ['var(--font-pixel)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '80rem',
      },
      colors: {
        background: '#ffffff',
        foreground: '#1f1814',
        // Beaver mascot palette — sampled from public/logo.png (fur, tail, snout, wood)
        brand: {
          50: '#fdf6ee',
          100: '#fbead7',
          200: '#f6d2ad',
          300: '#f0b47e',
          400: '#e8924f',
          500: '#dc7635',
          600: '#bb5c27',
          700: '#914118',
          800: '#69331c',
          900: '#3e2419',
          950: '#1c120c',
        },
        // Honey / wood-block highlight
        honey: {
          100: '#feefd9',
          200: '#fedcae',
          300: '#fdca93',
          400: '#fdbf73',
          500: '#f4a340',
          600: '#d9831f',
        },
        // Warm neutrals so every gray-* on the site matches the brand
        gray: {
          50: '#faf8f6',
          100: '#f4f0ec',
          200: '#e8e1da',
          300: '#d6ccc2',
          400: '#a89a8d',
          500: '#7d6f63',
          600: '#5e5249',
          700: '#463c35',
          800: '#2e2621',
          900: '#1f1814',
          950: '#140f0c',
        },
        primary: {
          DEFAULT: '#bb5c27',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#fdf6ee',
          foreground: '#3e2419',
        },
        accent: {
          DEFAULT: '#fdbf73',
          foreground: '#3e2419',
        },
        muted: {
          DEFAULT: '#faf8f6',
          foreground: '#7d6f63',
        },
        border: '#ede4da',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(62, 36, 25, 0.10)',
        card: '0 12px 40px -12px rgba(105, 51, 28, 0.22)',
        glow: '0 0 40px -6px rgba(220, 118, 53, 0.50)',
        'glow-honey': '0 0 40px -6px rgba(253, 191, 115, 0.50)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #914118 0%, #dc7635 50%, #fdbf73 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #fdf6ee 0%, #fbead7 50%, #feefd9 100%)',
        'mesh':
          'radial-gradient(at 20% 20%, rgba(220,118,53,0.18) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(253,191,115,0.20) 0px, transparent 50%), radial-gradient(at 70% 80%, rgba(187,92,39,0.16) 0px, transparent 50%), radial-gradient(at 15% 75%, rgba(253,202,147,0.18) 0px, transparent 50%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        float: 'float 7s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        marquee: 'marquee var(--duration) linear infinite',
      },
    },
  },
  plugins: [],
}
