'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          flex items-center justify-between pl-5 pr-3 py-2.5 rounded-full transition-all duration-300
          ${scrolled ? 'glass-pill' : 'bg-white/60 backdrop-blur-md border border-white/40'}
          w-full max-w-6xl
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/project-images/appsetz-new-logo.png"
            alt="AppSetz"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <Image
            src="/assets/project-images/1000205142.png"
            alt="AppSetz Logo"
            width={96}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600">
          {[
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'Services', href: '#services' },
            { label: 'Process', href: '#process' },
            { label: 'Why Us', href: '#why-us' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-full hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
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
            className="hidden md:block bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Book Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-700 hover:text-brand-900 transition-colors"
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
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-brand-100 flex flex-col gap-4 md:hidden z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {[
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-900 px-4 py-2.5 hover:bg-brand-50 hover:text-brand-700 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <hr className="border-brand-100" />

            <Link
              href="https://www.waytolink.cc/book/pavankumar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-900 text-white text-center py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
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
