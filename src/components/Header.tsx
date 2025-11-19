'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState(false);
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
    }, 150); // 150ms delay between each letter

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Add offset for better transition
        setIsScrolled(scrollPosition > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const now = Date.now();
    
    // Reset counter if more than 2 seconds have passed since last click
    if (now - lastClickTime > 2000) {
      setLogoClickCount(0);
    }
    
    setLogoClickCount(prev => prev + 1);
    setLastClickTime(now);
    
    // Check if user has clicked 4 times within 2 seconds
    if (logoClickCount >= 3) { // 4 clicks total (0-indexed)
      setLogoClickCount(0);
      // Navigate to admin screen (you can implement this later)
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
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isScrolled 
        ? 'bg-black/80 border-gray-800' 
        : 'bg-white/90 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src={isScrolled ? "/assets/appkraft_logo-removebg-preview.png" : "/assets/logo-black.png"}
              alt="AppSetz Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain transition-opacity duration-300"
              priority
            />
            <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>
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
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Home
                   </button>
                   <button
                     onClick={() => scrollToSection('about')}
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Why Us
                   </button>
                   <button
                     onClick={() => scrollToSection('services')}
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Services
                   </button>
                   <button
                     onClick={() => window.location.href = '/projects'}
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Projects
                   </button>
                   <button
                     onClick={() => scrollToSection('pricing')}
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Pricing
                   </button>
                   <button
                     onClick={() => scrollToSection('contact')}
                     className={`font-medium transition-colors ${
                       isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                     }`}
                   >
                     Contact
                   </button>
                 </nav>

                {/* CTA Button */}
                <button
                  onClick={() => { window.location.href = 'https://cal.com/reachpavankumar-txgih5'; }}
                   className={`hidden md:block font-medium px-6 py-2 rounded-lg transition-colors duration-200 ${
                     isScrolled 
                       ? 'bg-white hover:bg-gray-100 text-black' 
                       : 'bg-gray-900 hover:bg-black text-white shadow-md'
                   }`}
                 >
                   Book Free Consultation
                 </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

               {/* Mobile Menu */}
               {isMenuOpen && (
                 <div className={`md:hidden py-4 border-t ${
                   isScrolled ? 'border-gray-800' : 'border-gray-200'
                 }`}>
                   <div className="flex flex-col space-y-4">
                     <button
                       onClick={() => window.location.href = '/'}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Home
                     </button>
                     <button
                       onClick={() => scrollToSection('about')}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Why Us
                     </button>
                     <button
                       onClick={() => scrollToSection('services')}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Services
                     </button>
                     <button
                       onClick={() => window.location.href = '/projects'}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Projects
                     </button>
                     <button
                       onClick={() => scrollToSection('pricing')}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Pricing
                     </button>
                     <button
                       onClick={() => scrollToSection('contact')}
                       className={`font-medium transition-colors text-left ${
                         isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                       }`}
                     >
                       Contact
                     </button>
                    <button
                      onClick={() => { window.location.href = 'https://cal.com/reachpavankumar-txgih5'; }}
                       className={`font-medium px-6 py-2 rounded-lg transition-colors duration-200 text-left ${
                         isScrolled 
                           ? 'bg-white hover:bg-gray-100 text-black' 
                           : 'bg-gray-900 hover:bg-black text-white shadow-md'
                       }`}
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
