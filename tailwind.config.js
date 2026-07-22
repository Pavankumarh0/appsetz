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
      },
      maxWidth: {
        container: '80rem',
      },
      colors: {
        background: '#ffffff',
        foreground: '#0b0713',
        // Signature brand gradient stops
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        primary: {
          DEFAULT: '#7c3aed',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f3f0ff',
          foreground: '#2e1065',
        },
        accent: {
          DEFAULT: '#ec4899',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f7f7fb',
          foreground: '#6b7280',
        },
        border: '#ece9f3',
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
        soft: '0 4px 24px -6px rgba(24, 8, 61, 0.08)',
        card: '0 12px 40px -12px rgba(76, 29, 149, 0.18)',
        glow: '0 0 40px -6px rgba(124, 58, 237, 0.45)',
        'glow-pink': '0 0 40px -6px rgba(236, 72, 153, 0.45)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #ec4899 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf2f8 100%)',
        'mesh':
          'radial-gradient(at 20% 20%, rgba(99,102,241,0.18) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(236,72,153,0.16) 0px, transparent 50%), radial-gradient(at 70% 80%, rgba(139,92,246,0.18) 0px, transparent 50%), radial-gradient(at 15% 75%, rgba(56,189,248,0.14) 0px, transparent 50%)',
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
