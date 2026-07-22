'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'appsetz.';

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleLogoClick = () => {
    const now = Date.now();
    
    if (now - lastClickTime > 2000) {
      setLogoClickCount(0);
    }
    
    setLogoClickCount(prev => prev + 1);
    setLastClickTime(now);
    
    if (logoClickCount >= 3) {
      setLogoClickCount(0);
      console.log('Admin access triggered');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact') {
      window.location.href = '/contact';
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-black/80 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/assets/appkraft_logo-removebg-preview.png"
              alt="AppSetz Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              {displayedText}
              {displayedText.length < fullText.length && (
                <span className="animate-pulse">|</span>
              )}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.location.href = '/'}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => window.location.href = '/projects'}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => { window.location.href = 'https://www.waytolink.cc/book/pavankumar'; }}
            className="hidden md:block font-medium px-6 py-2 rounded-lg bg-white hover:bg-gray-100 text-black transition-colors duration-200"
          >
            Book Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => window.location.href = '/'}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => window.location.href = '/projects'}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-medium text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <button
                onClick={() => { window.location.href = 'https://www.waytolink.cc/book/pavankumar'; }}
                className="font-medium px-6 py-2 rounded-lg bg-white hover:bg-gray-100 text-black transition-colors duration-200 text-left"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
