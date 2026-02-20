'use client';

import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Services We Provide</h2>
                        <p className="text-gray-500 max-w-xl">We build robust apps through collaborative development that turns your vision into reality.</p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Startup & MVP */}
                    <motion.div
                        variants={item}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-black/5 hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-4">Startup & MVP</h3>
                        <p className="text-gray-600 mb-6 min-h-[48px]">Quickly validate your concept with a market-ready MVP that captures your core idea.</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Rapid prototyping
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Core features only
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Market validation
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Budget-friendly
                            </li>
                        </ul>
                    </motion.div>

                    {/* Full-Cycle Development */}
                    <motion.div
                        variants={item}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="p-8 rounded-3xl bg-black text-white hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-4">Full-Cycle Development</h3>
                        <p className="text-gray-300 mb-6 min-h-[48px]">End-to-end app creation: design, development, testing, and store deployment.</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Complete development
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> UI/UX design
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Testing & QA
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span> App store deployment
                            </li>
                        </ul>
                    </motion.div>

                    {/* Custom Solutions */}
                    <motion.div
                        variants={item}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-black/5 hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                        <p className="text-gray-600 mb-6 min-h-[48px]">Bespoke applications tailored to your unique business challenges and goals.</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Custom architecture
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Scalable solutions
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Enterprise features
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Ongoing support
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
