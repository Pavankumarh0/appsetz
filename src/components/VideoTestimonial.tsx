'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const VideoTestimonial = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-4">
                        Client Success Story
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight font-outfit">
                        Hear it from our client
                    </h2>
                </motion.div>

                {/* Two-column layout: video LEFT, description RIGHT */}
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">

                    {/* LEFT — Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full md:w-80 flex-shrink-0"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group">
                            <video
                                ref={videoRef}
                                src="https://github.com/Pavankumarh0/appsetz/raw/main/public/video-testimonial/dr%20Sirisha.mp4"
                                className="w-full object-contain rounded-2xl"
                                muted
                                autoPlay
                                playsInline
                                loop
                                preload="auto"
                            />

                            {/* Overlay controls */}
                            <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                {/* Mute toggle — top right */}
                                <div className="flex justify-end">
                                    <button
                                        onClick={toggleMute}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium hover:bg-black/80 transition-all"
                                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                                    >
                                        {isMuted ? (
                                            <>
                                                <VolumeX className="w-3.5 h-3.5" />
                                                <span>Tap to unmute</span>
                                            </>
                                        ) : (
                                            <>
                                                <Volume2 className="w-3.5 h-3.5" />
                                                <span>Muted off</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Play/Pause — center */}
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={togglePlay}
                                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white hover:bg-white/30 transition-all group-hover:scale-105"
                                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-6 h-6 fill-white" />
                                        ) : (
                                            <Play className="w-6 h-6 fill-white ml-0.5" />
                                        )}
                                    </button>
                                </div>

                                {/* Client name tag — bottom */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                                        Dr
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm leading-none">Dr. Sirisha Reddy</p>
                                        <p className="text-white/70 text-xs">Client — Implanto 365</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Below-video note */}
                        <p className="text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1">
                            <VolumeX className="w-3 h-3" />
                            Video starts muted — tap the button to hear Dr. Sirisha Reddy
                        </p>
                    </motion.div>

                    {/* RIGHT — Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 space-y-6"
                    >
                        {/* Client badge */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                                Dr
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-lg leading-tight">Dr. Sirisha Reddy</p>
                                <p className="text-gray-500 text-sm">Dental Surgeon &amp; Clinic Owner</p>
                            </div>
                        </div>

                        {/* Headline */}
                        <h3 className="text-2xl md:text-3xl font-bold text-black leading-snug font-outfit">
                            We built{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Implanto 365
                            </span>
                            , a custom app — just for her clinic.
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Dr. Sirisha Reddy needed a digital solution to manage patient records, appointment scheduling,
                            and treatment tracking at her dental clinic. Appsetz developed{' '}
                            <strong className="text-gray-800">Implanto 365</strong> — a fully custom mobile + web app
                            built around her exact workflow.
                        </p>

                        {/* Feature bullets */}
                        <ul className="space-y-3">
                            {[
                                'Patient records & treatment history',
                                'Smart appointment scheduling',
                                'Real-time clinic dashboard',
                                'Delivered in weeks, not months',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                                    <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Quote */}
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 text-sm md:text-base">
                            "Appsetz understood exactly what I needed and delivered something beyond my expectations."
                            <br />
                            <span className="not-italic font-semibold text-gray-700 mt-1 block">— Dr. Sirisha Reddy</span>
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonial;
