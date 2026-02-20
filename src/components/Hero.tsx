'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Waves from '@/components/Waves';
import IdeaFlow from '@/components/IdeaFlow';

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 px-6 min-h-[70vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Waves Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-50">
        <Waves
          lineColor="#E9D5FF"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl mix-blend-multiply animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl mix-blend-multiply animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700">
            For Startups & SMEs
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-8xl font-bold tracking-tight text-black mb-6 leading-tight font-outfit"
        >
          Launch your app <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">In Days, Not Months.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Business-results oriented and AI-powered 🚀
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Link
            href="https://cal.com/appsetz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 sm:px-8 sm:py-4 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-sm sm:text-lg whitespace-nowrap"
          >
            Get a quote
          </Link>
          <Link
            href="#portfolio"
            className="px-4 py-2 sm:px-8 sm:py-4 rounded-full bg-white border border-gray-200 text-black font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2 text-sm sm:text-lg whitespace-nowrap"
          >
            View portfolio
          </Link>
        </motion.div>

        {/* Idea Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 sm:mt-24 w-full"
        >
          <IdeaFlow />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
