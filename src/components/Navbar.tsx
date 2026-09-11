'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'NoCom', href: '/#featured', live: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
  </span>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          flex items-center justify-between pl-3 pr-3 py-2 rounded-full transition-all duration-300
          ${scrolled ? 'glass-pill' : 'bg-white/70 backdrop-blur-md border border-white/40'}
          w-full max-w-6xl
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image
            src="/brand/logo-mark-128.png"
            alt="AppSetz beaver mascot"
            width={40}
            height={40}
            className="h-10 w-10 object-contain drop-shadow-sm"
            priority
          />
          <Image
            src="/assets/project-images/1000205142.png"
            alt="AppSetz Logo"
            width={96}
            height={32}
            className="h-7 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.live
                  ? 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-brand-800 font-semibold hover:bg-brand-100 transition-colors'
                  : 'px-3 py-1.5 rounded-full hover:text-brand-700 hover:bg-brand-50 transition-colors'
              }
            >
              {item.live && <LiveDot />}
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.waytolink.cc/book/pavankumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:block bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-brand-700 hover:text-brand-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-brand-100 flex flex-col gap-4 xl:hidden z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-lg font-semibold text-gray-900 px-4 py-2.5 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors"
                >
                  {item.label}
                  {item.live && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                      <LiveDot /> Live
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <hr className="border-brand-100" />

            <Link
              href="https://www.waytolink.cc/book/pavankumar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-900 text-white text-center py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all"
            >
              Book Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
