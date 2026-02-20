'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Portfolio = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data.slice(0, 5)); // Show top 5 recent work
                }
            } catch (error) {
                console.error('Failed to fetch projects', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return null;

    return (
        <section id="portfolio" className="relative bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Our Recent Work</h2>
                        <p className="text-gray-500 max-w-md text-sm">Drag the cards to explore our portfolio. Tap any card to view all projects.</p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/portfolio" className="text-sm font-semibold border-b border-black pb-1 hover:text-gray-600 transition-colors">
                            View all projects
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8 pb-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            className="sticky top-24 min-h-[90vh] w-full"
                            style={{
                                scale: 1 - (projects.length - index - 1) * 0.05,
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`group relative h-full rounded-3xl overflow-hidden cursor-pointer bg-gray-50 flex flex-col md:flex-row border border-black/5 shadow-2xl`}
                            >
                                {/* Left Side: Text */}
                                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center z-10 relative">
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {(project.techStack || []).slice(0, 3).map((tag: string) => (
                                                <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight hover:underline decoration-2 underline-offset-4 decoration-blue-500">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-8">
                                        <span className="inline-flex items-center text-sm font-bold text-black border-b border-black pb-0.5 group-hover:text-blue-600 group-hover:border-blue-600 transition-colors">
                                            View Case Study
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side: Image */}
                                <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
                                    {(project.images && project.images.length > 0) ? (
                                        <div className="absolute inset-0">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400">No Image Available</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
