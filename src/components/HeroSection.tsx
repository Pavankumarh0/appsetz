'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BGPattern } from '@/components/BGPattern';

export default function HeroSection() {
  const scrollToContact = () => {
    window.location.href = 'https://www.waytolink.cc/book/pavankumar';
  };
  const goToProjects = () => {
    window.location.href = '/projects';
  };

  return (
    <section id="hero" className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        size={40} 
        fill="rgba(255,255,255,0.08)"
        className="z-0"
      />


      <div className="relative z-10 w-full">
        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.1]"
            >
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Launch your app
              </motion.span>
              <HeadlinePhases />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 lg:mb-12 max-w-xl"
          >
            For Startups & SMEs. Business-results oriented and AI-powered 🚀
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl transition-colors duration-200 shadow-lg text-center text-sm sm:text-base"
              >
                Get a quote
              </button>
              <button
                onClick={goToProjects}
                className="w-full sm:w-auto border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black text-white font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                View portfolio
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type Phase = 'initial' | 'markWrong' | 'final';

function HeadlinePhases() {
  const [phase, setPhase] = useState<Phase>('initial');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('markWrong'), 1600);
    const t2 = setTimeout(() => setPhase('final'), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'initial') {
    return (
      <>
        <AnimatedLine delay={0.45}>
          <span className="block">
            In{' '}
          <motion.span
              className="text-blue-500"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Months
          </motion.span>
            , Not
          </span>
        </AnimatedLine>
        <AnimatedLine delay={0.65}>
          <span className="block">
          <motion.span
              className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Days
          </motion.span>
            .
          </span>
        </AnimatedLine>
      </>
    );
  }

  if (phase === 'markWrong') {
    return (
      <>
        <AnimatedLine delay={0.0}>
          <span className="block">
            In{' '}
            <WrongWord word="Months" color="text-blue-500" />
            , Not
          </span>
        </AnimatedLine>
        <AnimatedLine delay={0.18}>
          <span className="block">
            <WrongWord word="Days" color="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent" />
            .
          </span>
        </AnimatedLine>
      </>
    );
  }

  // phase === 'final'
  return (
    <>
      <AnimatedLine delay={0.0}>
        <span className="block">
          In{' '}
        <motion.span
            className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 140,
            damping: 18,
            delay: 0.15,
          }}
        >
          Days
        </motion.span>
          , Not
        </span>
      </AnimatedLine>
      <AnimatedLine delay={0.18}>
        <span className="block relative inline-block">
          <span className="relative">
          <motion.span
              className="text-blue-500"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 18,
              delay: 0.35,
            }}
          >
            Months
          </motion.span>
          {/* Red strike-through line */}
          <motion.span
            aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] sm:h-[4px] bg-red-500 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'left center' }}
          />
        </span>
        .
        </span>
      </AnimatedLine>
    </>
  );
}

/* ---------- Helpers ---------- */

function AnimatedLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}

function WrongWord({ word, color }: { word: string; color: string }) {
  return (
      <span className="relative inline-block">
      <span className={color}>{word}</span>
      {/* Strike-through line */}
        <motion.span
          aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] sm:h-[3px] bg-red-500 rounded"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'left center' }}
        />
    </span>
  );
}
