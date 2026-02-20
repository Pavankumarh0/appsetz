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
          flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
          ${scrolled ? 'glass-pill bg-white/80 shadow-lg' : 'bg-white/50 backdrop-blur-md border border-white/20'}
          w-full max-w-6xl
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/project-images/1000205142.png"
            alt="AppSetz Logo"
            width={96}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/portfolio" className="hover:text-black transition-colors">Portfolio</Link>
          <Link href="#testimonials" className="hover:text-black transition-colors">Testimonials</Link>
          <Link href="#services" className="hover:text-black transition-colors">Services</Link>
          <Link href="#process" className="hover:text-black transition-colors">Process</Link>
          <Link href="#contact" className="hover:text-black transition-colors">Contact</Link>
          <Link href="#why-us" className="hover:text-black transition-colors">Why Us</Link>
          <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
        </div>

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="https://cal.com/appsetz"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Book Free Consultation
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
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
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col gap-4 md:hidden z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Portfolio</Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Testimonials</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Services</Link>
              <Link href="#process" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Process</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Contact</Link>
              <Link href="#why-us" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Why Us</Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">Pricing</Link>
            </div>

            <hr className="border-gray-100" />

            <Link
              href="https://cal.com/appsetz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full bg-black text-white text-center py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
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
