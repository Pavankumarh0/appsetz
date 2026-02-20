'use scroll';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
    { number: '01', title: 'Discovery Call', desc: 'We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your project.' },
    { number: '02', title: 'Design', desc: 'Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.' },
    { number: '03', title: 'Development', desc: 'Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your application is robust and future-proof.' },
    { number: '04', title: 'Testing', desc: 'Rigorous quality assurance across multiple devices and platforms ensures your application is bug-free, responsive, and delivers a seamless experience.' },
    { number: '05', title: 'Deployment', desc: 'We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.' },
];

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-24 bg-white overflow-hidden relative min-h-[2000px] md:min-h-[1600px]">
            {/* Background SVG Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1200 2400" preserveAspectRatio="none">
                    {/* Desktop Path */}
                    <motion.path
                        d="M 150 200 C 500 200, 1000 400, 1100 600 C 1150 800, 200 800, 200 900 C 200 1100, 900 1100, 1000 1200 C 1050 1400, 400 1400, 200 1500 C 100 1700, 300 1700, 300 1850"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="hidden md:block"
                    />
                    <motion.path
                        d="M 150 200 C 500 200, 1000 400, 1100 600 C 1150 800, 200 800, 200 900 C 200 1100, 900 1100, 1000 1200 C 1050 1400, 400 1400, 200 1500 C 100 1700, 300 1700, 300 1850"
                        fill="none"
                        stroke="black"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="hidden md:block"
                        style={{ pathLength }}
                    />

                    {/* Mobile Path - Vertical Zigzag */}
                    <motion.path
                        d="M 600 100 C 300 250, 900 250, 600 400 C 300 600, 900 600, 600 800 C 300 1000, 900 1000, 600 1200 C 300 1400, 900 1400, 600 1600 C 300 1800, 900 1800, 600 2100"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="md:hidden"
                    />
                    <motion.path
                        d="M 600 100 C 300 250, 900 250, 600 400 C 300 600, 900 600, 600 800 C 300 1000, 900 1000, 600 1200 C 300 1400, 900 1400, 600 1600 C 300 1800, 900 1800, 600 2100"
                        fill="none"
                        stroke="black"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="md:hidden"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative h-full" ref={containerRef}>
                <div className="text-center mb-12 relative z-30">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        How It Works
                    </motion.h2>
                </div>

                {/* Absolute Layout for All Screens */}
                <div className="relative w-full h-[2400px] md:h-[2000px]">
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-[5%] left-[5%] md:left-[2%] md:translate-x-0 md:top-[10%] max-w-[85%] md:max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 z-10 w-full"
                    >
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-black/20">01</div>
                        <h3 className="text-2xl font-bold mb-3">Discovery Call</h3>
                        <p className="text-gray-600 leading-relaxed text-base">We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your project.</p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-[20%] right-[5%] md:left-auto md:right-[5%] md:top-[25%] md:translate-x-0 max-w-[85%] md:max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 z-10 w-full"
                    >
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-black/20">02</div>
                        <h3 className="text-2xl font-bold mb-3">Design</h3>
                        <p className="text-gray-600 leading-relaxed text-base">Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.</p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute top-[40%] left-[5%] md:left-[10%] md:top-[40%] md:translate-x-0 max-w-[85%] md:max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 z-10 w-full"
                    >
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-black/20">03</div>
                        <h3 className="text-2xl font-bold mb-3">Development</h3>
                        <p className="text-gray-600 leading-relaxed text-base">Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your application is robust and future-proof.</p>
                    </motion.div>

                    {/* Step 4 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute top-[60%] right-[5%] md:left-auto md:right-[15%] md:top-[55%] md:translate-x-0 max-w-[85%] md:max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 z-10 w-full"
                    >
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-black/20">04</div>
                        <h3 className="text-2xl font-bold mb-3">Testing</h3>
                        <p className="text-gray-600 leading-relaxed text-base">Rigorous quality assurance across multiple devices and platforms ensures your application is bug-free, responsive, and delivers a seamless experience.</p>
                    </motion.div>

                    {/* Step 5 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute top-[80%] left-[5%] md:left-[10%] md:translate-x-0 md:top-[70%] max-w-[85%] md:max-w-sm bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 z-10 w-full"
                    >
                        <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-black/20">05</div>
                        <h3 className="text-2xl font-bold mb-3">Deployment</h3>
                        <p className="text-gray-600 leading-relaxed text-base">We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Process;
