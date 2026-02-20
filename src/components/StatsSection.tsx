'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '14', label: 'Years in the game', sub: 'A decade of building brands.' },
    { value: '120+', label: 'Happy clients', sub: 'Long-term partnerships.' },
    { value: '$12M', label: 'Raised for clients', sub: 'Our work helped founders secure funding.' },
    { value: '190+', label: 'Completed projects', sub: 'Funding won through work delivered.' },
];

const logos = [
    'Loom', 'Spotify', 'Slack', 'Netflix', 'Figma', 'Adobe'
];

const StatsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 text-center md:text-left"
                        >
                            <h3 className="text-4xl font-bold text-black mb-2">{stat.value}</h3>
                            <p className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</p>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-[150px]">{stat.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Logos / Social Proof */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row items-start justify-between mb-12">
                        <h2 className="text-2xl font-semibold max-w-xs leading-tight">Trusted by teams from early to established.</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple text placeholders for logos as per request to avoid external assets initially */}
                        {logos.map((logo, i) => (
                            <div key={i} className="flex justify-center md:justify-start">
                                <span className="text-xl font-bold text-gray-400 hover:text-black transition-colors">{logo}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects Teaser */}
                <div className="text-center">
                    <h2 className="text-[80px] md:text-[120px] font-bold tracking-tighter text-gray-100 hover:text-gray-900 transition-colors duration-700 select-none cursor-default">
                        our projects
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
