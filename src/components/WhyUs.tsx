'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' },
    { value: '1K+', label: 'Members Community' },
    { value: '2+', label: 'Years of Experience' },
];

const features = [
    { icon: '⚡', title: 'FAST DELIVERY', desc: 'Most projects completed within 2-4 weeks' },
    { icon: '💰', title: 'COMPETITIVE PRICING', desc: 'Transparent pricing with no hidden costs' },
    { icon: '🔧', title: 'FULL SUPPORT', desc: 'Complete maintenance and support included' },
    { icon: '📱', title: 'CROSS-PLATFORM', desc: 'Single codebase for iOS and Android' },
    { icon: '🎨', title: 'MODERN DESIGN', desc: 'Latest UI/UX trends and best practices' },
    { icon: '🚀', title: 'PERFORMANCE OPTIMIZED', desc: 'Smooth, fast, and efficient applications' },
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Sticky Description & Stats */}
                    <motion.div
                        className="lg:w-1/2 lg:sticky lg:top-32 h-fit space-y-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">WHY<br />US</h2>
                            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg">
                                At appsetz, we are a team of passionate and experienced app developers and software engineers driven by a shared mission: to empower businesses with innovative technology solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <h3 className="text-3xl font-bold text-black mb-1">{stat.value}</h3>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Scrollable Feature Cards */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <span className="text-4xl">{feature.icon}</span>
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                                        <p className="text-lg text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;
