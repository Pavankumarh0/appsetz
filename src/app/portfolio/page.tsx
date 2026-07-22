'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X, CheckCircle2, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CopyrightFooter from '@/components/CopyrightFooter';
import { Project } from '@/types';

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (response.ok) {
                    const data = await response.json();
                    setProjects(data);
                } else {
                    console.error('Failed to fetch projects');
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="pt-20 flex items-center justify-center min-h-screen">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 border-2 border-gray-200 border-t-black rounded-full mx-auto mb-4"
                        />
                        <p className="text-gray-600">Loading projects...</p>
                    </motion.div>
                </main>
                <CopyrightFooter />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl font-bold text-gray-900 mb-6"
                            >
                                Our <span className="text-blue-600">Projects</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            >
                                Discover our portfolio of innovative applications that have transformed businesses and delighted users worldwide.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {projects.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Code className="w-12 h-12 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
                                <p className="text-gray-500">Check back soon for our latest work!</p>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{ y: -6 }}
                                        className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {/* Project Image */}
                                        {(project.images && project.images.length > 0) && (
                                            <div className="w-full bg-gray-50">
                                                <div className="w-full aspect-[16/9]">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={project.images[0]}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Project Content */}
                                        <div className="p-6">
                                            {/* Top right round button */}
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-gray-200 flex items-center justify-center shadow-sm"
                                                aria-label="View details"
                                            >
                                                <ArrowRight className="w-4 h-4 text-gray-700" />
                                            </button>

                                            {/* Project Title & Description */}
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 mb-6 line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Action links */}
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => setSelectedProject(project)}
                                                    className="px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 font-medium transition-colors"
                                                >
                                                    Case Study
                                                </button>
                                                <button
                                                    onClick={() => setSelectedProject(project)}
                                                    className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-center mt-20"
                        >
                            <div className="bg-gray-50 rounded-3xl p-12 max-w-4xl mx-auto border border-gray-200 shadow-sm">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                >
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        Ready to Build Something Amazing?
                                    </h3>
                                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                                        Let&apos;s collaborate to bring your vision to life with cutting-edge technology and exceptional design.
                                    </p>
                                    <motion.button
                                        onClick={() => window.location.href = 'https://www.waytolink.cc/book/pavankumar'}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-black hover:bg-gray-800 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Start Your Project
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Full Project Details Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
                        <div className="relative z-10 min-h-screen pointer-events-none flex justify-center pt-20 pb-10 px-4">
                            <div className="pointer-events-auto bg-white w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col overflow-hidden">

                                {/* Modal Header/Close */}
                                <div className="relative">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-black transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto">
                                    {/* Overview/Hero */}
                                    <section className="relative overflow-hidden py-12 px-6 sm:px-10 bg-gray-50 border-b border-gray-100">
                                        <div className="grid md:grid-cols-2 gap-8 items-center">
                                            <div>
                                                <motion.h1
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4"
                                                >
                                                    {selectedProject.title}
                                                </motion.h1>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="text-lg text-gray-600 mb-6"
                                                >
                                                    {selectedProject.description}
                                                </motion.p>
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {(selectedProject.techStack || ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase']).slice(0, 6).map(t => (
                                                        <span key={t} className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-xs">{t}</span>
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.liveDemoUrl && (
                                                        <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                                                            <ExternalLink className="w-4 h-4 mr-2" /> View Live App
                                                        </a>
                                                    )}
                                                    {selectedProject.githubUrl && (
                                                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                                                            <Github className="w-4 h-4 mr-2" /> Explore Code
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                                {selectedProject.images && selectedProject.images[0] && (
                                                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                                                        <div className="w-full aspect-[16/9]">
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img src={selectedProject.images[0]} alt={selectedProject.title} className="w-full h-full object-cover" />
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </section>

                                    {/* Results */}
                                    <section className="py-12 px-6 sm:px-10 bg-white border-b border-gray-100">
                                        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-gray-900 mb-8">Impact & Results</motion.h2>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {[
                                                { value: '90%', label: 'Efficiency Increase', sub: 'compared to manual processes' },
                                                { value: '50%', label: 'Time Reduction', sub: 'for operational tasks' },
                                                { value: '30%', label: 'Satisfaction Boost', sub: 'based on user feedback' }
                                            ].map((r, i) => (
                                                <motion.div key={r.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                                                    <div className="text-4xl font-extrabold text-blue-600 mb-1">{r.value}</div>
                                                    <div className="text-gray-900 font-semibold">{r.label}</div>
                                                    <div className="text-xs text-gray-500 mt-1">{r.sub}</div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* About & Tech */}
                                    <section className="py-12 px-6 sm:px-10 bg-gray-50">
                                        <div className="grid md:grid-cols-2 gap-10 items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">About the Project</h3>
                                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{selectedProject.description}</p>

                                                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                                                <ul className="space-y-2 mb-6">
                                                    {['Real-time updates', 'Secure authentication', 'Responsive interface', 'Admin dashboard'].map((f) => (
                                                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500" /> {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {(selectedProject.techStack || ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase']).map((t) => (
                                                        <span key={t} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <CopyrightFooter />
        </div>
    );
}
