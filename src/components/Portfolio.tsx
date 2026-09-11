'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import StoreBadges from '@/components/StoreBadges';
import type { Project } from '@/types';

const Portfolio = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data.slice(0, 5)); // Featured app first, then recent work
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
                        <p className="text-gray-500 max-w-md text-sm">Scroll through our portfolio — led by NoCom, our flagship app live on the App Store and Google Play.</p>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/portfolio" className="text-sm font-semibold border-b border-gray-900 pb-1 hover:text-brand-700 hover:border-brand-700 transition-colors">
                            View all projects
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8 pb-32">
                    {projects.map((project, index) => {
                        const featured = !!project.featured;
                        return (
                            <motion.div
                                key={project.id || index}
                                className="sticky top-24 min-h-[90vh] w-full"
                                style={{
                                    scale: 1 - (projects.length - index - 1) * 0.05,
                                }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative h-full rounded-3xl overflow-hidden cursor-pointer flex flex-col md:flex-row shadow-2xl ${
                                        featured
                                            ? 'bg-brand-950 text-white ring-2 ring-honey-400/60'
                                            : 'bg-gray-50 border border-brand-900/5'
                                    }`}
                                >
                                    {featured && (
                                        <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand-500/25 blur-[100px]" />
                                    )}

                                    {/* Left Side: Text */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center z-10 relative">
                                        <div className="mb-6">
                                            {featured && (
                                                <div className="flex flex-wrap items-center gap-2 mb-5">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-honey-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-950">
                                                        <Star className="h-3 w-3 fill-current" /> Featured · Production ready
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live on both stores
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {(project.techStack || []).slice(0, 3).map((tag: string) => (
                                                    <span
                                                        key={tag}
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                                            featured ? 'bg-white/10 text-honey-200' : 'bg-brand-100 text-brand-800'
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-4 mb-6">
                                                {project.icon && (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={project.icon} alt="" className="h-12 w-12 md:h-16 md:w-16 rounded-2xl ring-1 ring-white/10 shadow-lg" />
                                                )}
                                                <h3 className={`text-2xl md:text-5xl font-bold leading-tight hover:underline decoration-2 underline-offset-4 ${
                                                    featured ? 'text-white decoration-honey-400' : 'text-gray-900 decoration-brand-500'
                                                }`}>
                                                    {project.title}
                                                </h3>
                                            </div>
                                            {project.tagline && (
                                                <p className="font-outfit text-lg md:text-2xl font-semibold text-honey-300 mb-4">{project.tagline}</p>
                                            )}
                                            <p className={`text-sm md:text-lg leading-relaxed line-clamp-3 md:line-clamp-6 ${featured ? 'text-white/65' : 'text-gray-600'}`}>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-8">
                                            {featured ? (
                                                <StoreBadges
                                                    appStoreUrl={project.appStoreUrl}
                                                    playStoreUrl={project.playStoreUrl}
                                                    tone="light"
                                                    size="sm"
                                                />
                                            ) : (
                                                <span className="inline-flex items-center text-sm font-bold text-gray-900 border-b border-gray-900 pb-0.5 group-hover:text-brand-600 group-hover:border-brand-600 transition-colors">
                                                    View Case Study
                                                </span>
                                            )}
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
                                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${featured ? 'object-[75%_50%]' : ''}`}
                                                />
                                                <div className={`absolute inset-0 transition-colors ${
                                                    featured
                                                        ? 'bg-gradient-to-b md:bg-gradient-to-r from-brand-950 via-brand-950/10 to-transparent'
                                                        : 'bg-black/5 group-hover:bg-black/0'
                                                }`} />
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                <span className="text-gray-400">No Image Available</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
