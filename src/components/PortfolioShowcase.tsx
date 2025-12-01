'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Star } from 'lucide-react';
import ImgStack from '@/components/ImgStack';

export default function PortfolioShowcase() {
  const router = useRouter();
  
  // Images for the card stack
  const stackImages = [
    '/assets/project-images/IMG-20251129-WA0025.jpg',
    '/assets/project-images/IMG-20251129-WA0026.jpg',
    '/assets/project-images/IMG-20251129-WA0027.jpg',
    '/assets/project-images/IMG-20251129-WA0028.jpg'
  ];

  const projectLabels = [
    { label: 'Mobile App', rating: 5.0 },
    { label: 'Web App', rating: 5.0 },
    { label: 'Dashboard', rating: 5.0 },
    { label: 'Dashboard', rating: 5.0 },
  ];

  const handleCardClick = () => {
    router.push('/projects');
  };

  return (
    <section id="portfolio-showcase" className="py-6 sm:py-12 lg:py-20 bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile View - Horizontal Scroll Cards */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {stackImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={handleCardClick}
                className="relative flex-shrink-0 w-[42%] sm:w-[38%] snap-start cursor-pointer group"
              >
                <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-gray-800">
                  <Image
                    src={src}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 42vw, 38vw"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-black/80 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1">
                    <span className="text-white text-xs sm:text-sm font-semibold">{projectLabels[index].rating}</span>
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400 fill-yellow-400" />
                  </div>
                  {/* Label Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gray-800/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    <span className="text-white text-[10px] sm:text-xs font-medium">{projectLabels[index].label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile - View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-4 sm:mt-6"
          >
            <button
              onClick={handleCardClick}
              className="text-gray-400 font-medium text-xs sm:text-sm underline underline-offset-4 hover:text-white transition-colors"
            >
              View all projects →
            </button>
          </motion.div>
        </div>

        {/* Desktop View - Two Column Layout with Stack */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-20 xl:gap-32">
          
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 leading-tight">
              Our Recent{' '}
              <span className="text-gray-500">Work</span>
            </h2>
            
            <p className="text-lg xl:text-xl text-gray-400 mb-8 leading-relaxed">
              Drag the cards to explore our portfolio. Tap any card to view all projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">Mobile & Web Applications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-gray-300">AI-Powered Solutions</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-sm text-gray-500 italic"
            >
              👆 Drag the top card to see more projects
            </motion.p>
          </motion.div>

          {/* Right Side - Card Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-lg h-[480px] xl:h-[520px] 2xl:h-[580px] flex items-center justify-center"
          >
            <ImgStack images={stackImages} />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
