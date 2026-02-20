'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, Cloud, Database, Smartphone, CheckCircle2, Monitor } from 'lucide-react';
import Image from 'next/image';

// Tech Icons Data
const ideaIcons = [
    { name: 'Startup', color: '#F59E0B', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' }, // Bulb-like (Reuse React atom for now as placeholder or use custom) -> Actually let's use a Bulb path
    // Actually, I'll use the specific paths below
];

const webIcons = [
    { name: 'React', color: '#61DAFB', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'Next', color: '#000000', path: 'M 19.5 4.5 H 16.5 V 15 L 7.5 4.5 H 4.5 V 19.5 H 7.5 V 9 L 16.5 19.5 H 19.5 V 4.5' },
    { name: 'Node', color: '#339933', path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'Supabase', color: '#3ECF8E', path: 'M12 2L2 12h8v8l10-10h-8V2z' }
];

const appIcons = [
    { name: 'Flutter', color: '#02569B', path: 'M12 2L2 12h10l10-10H12z M12 22l10-10h-10L2 22h10z' },
    { name: 'Firebase', color: '#FFCA28', path: 'M12 2L2 22h20L12 2z' },
    { name: 'Firestore', color: '#FFCA28', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' }
];

const ideas = [
    { name: 'SaaS', color: '#8B5CF6', path: 'M4 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2h-3.28a2 2 0 01-.948-.24l-3.03-1.63a1 1 0 00-.972 0l-3.03 1.63a2 2 0 01-.948.24H6a2 2 0 01-2-2V6z' }, // Cloud-like
    { name: 'E-com', color: '#10B981', path: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' }, // Cart
    { name: 'Social', color: '#EC4899', path: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' } // Message
];

const IdeaFlow = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-20 px-4">
            {/* Scroll Hint for Mobile */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-4 text-gray-400 animate-pulse">
                <span className="text-xs font-medium uppercase tracking-widest">Swipe to explore flow</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
            {/* Container for the Flow - Scaled and scrollable on mobile */}
            <div className="relative overflow-x-auto md:overflow-visible pb-12 md:pb-0 hide-scrollbar scroll-smooth">
                <div className="flex flex-row items-center justify-between gap-12 md:gap-0 min-h-[450px] md:min-h-[400px] min-w-[900px] md:min-w-0 scale-[0.85] md:scale-100 origin-left py-10 md:py-0 px-8 md:px-0">

                    {/* Connection Lines */}
                    <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" overflow="visible">
                        {/* Path 1: Idea -> Build (Straightish) */}
                        {/* Start: 10% Y:50% -> End: 50% Y:50% */}
                        <motion.path
                            d="M 120 200 C 250 200, 350 200, 500 200"
                            fill="none"
                            stroke="#E0E7FF"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                        />
                        <motion.path
                            d="M 120 200 C 250 200, 350 200, 500 200"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                        />

                        {/* Path 2: Build -> Website (Curved Up) */}
                        {/* Start: 50% Y:200 -> End: 85% Y:100 */}
                        <motion.path
                            d="M 500 200 C 650 200, 700 100, 900 100"
                            fill="none"
                            stroke="#E0E7FF"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                        />
                        <motion.path
                            d="M 500 200 C 650 200, 700 100, 900 100"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                        />

                        {/* Path 3: Build -> App (Curved Down) */}
                        {/* Start: 50% Y:200 -> End: 85% Y:300 */}
                        <motion.path
                            d="M 500 200 C 650 200, 700 300, 900 300"
                            fill="none"
                            stroke="#E0E7FF"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                        />
                        <motion.path
                            d="M 500 200 C 650 200, 700 300, 900 300"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -20 }}
                            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
                        />

                        {/* Idea Icons Flowing */}
                        <g>
                            {ideas.map((icon, i) => (
                                <g key={icon.name} opacity="0">
                                    {/* Bubble Background */}
                                    <circle r="14" fill="white" stroke="#E0E7FF" strokeWidth="1" />
                                    {/* Icon */}
                                    <g transform="translate(-8, -8) scale(0.65)">
                                        <path d={icon.path} fill={icon.color} />
                                    </g>

                                    {/* Motion Animation */}
                                    <animateMotion
                                        dur="5s"
                                        repeatCount="indefinite"
                                        path="M 120 200 C 250 200, 350 200, 500 200"
                                        begin={`-${i * 1.6}s`}
                                    />
                                    {/* Fade In/Out */}
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.1;0.9;1"
                                        dur="5s"
                                        repeatCount="indefinite"
                                        begin={`-${i * 1.6}s`}
                                    />
                                </g>
                            ))}
                        </g>

                        {/* Web Tech Icons Flowing */}
                        <g>
                            {webIcons.map((icon, i) => (
                                <g key={icon.name} opacity="0">
                                    {/* Bubble Background & Icon */}
                                    <circle r="14" fill="white" stroke="#E0E7FF" strokeWidth="1" />
                                    <g transform="translate(-8, -8) scale(0.65)">
                                        <path d={icon.path} fill={icon.color} />
                                    </g>

                                    {/* Motion Animation */}
                                    <animateMotion
                                        dur="6s"
                                        repeatCount="indefinite"
                                        path="M 500 200 C 650 200, 700 100, 900 100"
                                        begin={`-${i * 1.5}s`}
                                    />
                                    {/* Fade In/Out to avoid jump at end */}
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.1;0.9;1"
                                        dur="6s"
                                        repeatCount="indefinite"
                                        begin={`-${i * 1.5}s`}
                                    />
                                </g>
                            ))}
                        </g>

                        {/* App Tech Icons Flowing */}
                        <g>
                            {appIcons.map((icon, i) => (
                                <g key={icon.name} opacity="0">
                                    {/* Bubble Background & Icon */}
                                    <circle r="14" fill="white" stroke="#E0E7FF" strokeWidth="1" />
                                    <g transform="translate(-8, -8) scale(0.65)">
                                        <path d={icon.path} fill={icon.color} />
                                    </g>

                                    {/* Motion Animation */}
                                    <animateMotion
                                        dur="6s"
                                        repeatCount="indefinite"
                                        path="M 500 200 C 650 200, 700 300, 900 300"
                                        begin={`-${i * 2}s`}
                                    />
                                    {/* Fade In/Out */}
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0"
                                        keyTimes="0;0.1;0.9;1"
                                        dur="6s"
                                        repeatCount="indefinite"
                                        begin={`-${i * 2}s`}
                                    />
                                </g>
                            ))}
                        </g>
                    </svg>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 flex flex-col items-center self-center shrink-0"
                    >
                        <div className="relative mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-200">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 10, y: -10 }}
                                whileInView={{ opacity: 1, x: 20, y: -20 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 }}
                                className="absolute -top-4 -right-12 bg-white px-3 py-2 rounded-xl shadow-md border border-gray-100"
                            >
                                <div className="flex items-center gap-1.5">
                                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                                    <span className="text-xs font-semibold text-gray-700">Your Idea</span>
                                </div>
                                <div className="absolute bottom-0 left-0 -ml-1.5 translate-y-1/2 w-3 h-3 bg-white border-b border-l border-gray-100 transform rotate-45"></div>
                            </motion.div>
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900">You</h3>
                            <p className="text-sm text-gray-500">Have a vision</p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative z-10 p-6 flex flex-col items-center self-center shrink-0"
                    >
                        <div className="relative w-32 h-32 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center mb-6">
                            <div className="absolute -top-4 -left-4 bg-white p-2 rounded-xl shadow-lg border border-gray-50 animate-bounce" style={{ animationDuration: '3s' }}>
                                <Code2 className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-xl shadow-lg border border-gray-50 animate-bounce" style={{ animationDuration: '4s' }}>
                                <Database className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg border border-gray-50 animate-bounce" style={{ animationDuration: '3.5s' }}>
                                <Cloud className="w-6 h-6 text-sky-500" />
                            </div>

                            <div className="w-16 h-16 bg-gradient-to-tr from-gray-900 to-black rounded-2xl flex items-center justify-center shadow-inner transform rotate-3 hover:rotate-0 transition-all duration-500">
                                <span className="text-white font-bold text-2xl">A</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="font-bold text-gray-900">We Build It</h3>
                            <p className="text-sm text-gray-500">Scalable & secure</p>
                        </div>
                    </motion.div>


                    <div className="flex flex-col gap-16 md:gap-32 relative z-10 shrink-0">

                        {/* Node 3a: Website (Top) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            {/* Browser Mockup */}
                            <div className="relative w-40 h-24 bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden flex flex-col">
                                <div className="bg-gray-100 h-6 w-full flex items-center px-2 gap-1 border-b border-gray-200">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 p-2 flex flex-col gap-2">
                                    <div className="w-full h-8 bg-blue-50 rounded"></div>
                                    <div className="flex gap-1">
                                        <div className="w-1/3 h-6 bg-gray-50 rounded"></div>
                                        <div className="w-2/3 h-6 bg-gray-50 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold mb-1">
                                    <Monitor className="w-3 h-3" />
                                    <span>Web</span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Website</h3>
                            </div>
                        </motion.div>

                        {/* Node 3b: App (Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="flex flex-col items-center"
                        >
                            {/* Phone Mockup (Smaller) */}
                            <div className="relative w-20 h-40 bg-gray-900 rounded-[1.5rem] border-[3px] border-gray-800 shadow-xl overflow-hidden">
                                <div className="w-full h-full bg-white flex flex-col">
                                    <div className="bg-indigo-600 h-8 w-full"></div>
                                    <div className="p-2 space-y-1">
                                        <div className="h-1.5 w-12 bg-gray-200 rounded"></div>
                                        <div className="h-12 w-full bg-gray-100 rounded-lg"></div>
                                    </div>
                                    <div className="mt-auto p-2 mb-1">
                                        <div className="h-5 w-full bg-indigo-600 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-gray-900 rounded-b-lg"></div>
                            </div>

                            <div className="text-center mt-3">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs font-bold mb-1">
                                    <Smartphone className="w-3 h-3" />
                                    <span>App</span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-sm">Mobile App</h3>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Trusted By (Optional addition based on reference) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-12 text-center"
            >
                <p className="text-sm text-gray-400 mb-6 font-medium uppercase tracking-wider">Turning ideas into reality for</p>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 font-medium">
                    {['Implanto 365', 'Niraah Digi Connect', 'Sunwin Power Solutions', 'Vriddhi Psychological Services'].map((client) => (
                        <span key={client} className="hover:text-gray-900 transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
            </motion.div>

        </div>
    );
};

export default IdeaFlow;
