'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CurvedLoop from '@/components/CurvedLoop';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Pricing from '@/components/Pricing';
import ContactClean from '@/components/ContactClean';
import CopyrightFooter from '@/components/CopyrightFooter';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CurvedLoop
          marqueeText="Discovery ✦ Design ✦ Development ✦ Testing ✦ Deployment ✦"
          title="How Appsetz Delivers Projects"
          description="Our proven process ensures high-quality, efficient, and scalable delivery tailored to your business needs."
        />
        <Portfolio />
        <Services />
        <Testimonials />
        <Process />
        <WhyUs />
        <Pricing />
        <ContactClean />
      </main>
      <CopyrightFooter />
    </div>
  );
}
