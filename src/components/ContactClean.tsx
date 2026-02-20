'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    description: string;
};

const ContactClean = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            // Send email notification via API
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } catch (emailError) {
                console.error('Email notification error:', emailError);
            }

            // Blue success alert as requested
            toast.success("We'll get back to you within one day", {
                style: {
                    background: '#1d4ed8', // blue-700
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#1d4ed8',
                },
            });

            reset();
        } catch (error) {
            console.error(error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-white text-black" id="contact">
            <Toaster position="top-right" />
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between mb-16"
                >
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tight">Contact Us</h2>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Contact</p>
                            <p className="text-sm text-gray-400">+91 7676729328</p>
                        </div>


                        <div className="pt-20">
                            <a href="mailto:info@appsetz.work" className="text-xl md:text-2xl font-bold hover:underline break-all">info@appsetz.work</a>
                        </div>

                        <div className="pt-10">
                            <p className="text-sm font-medium text-gray-500 mb-4">Interested in a quick chat?</p>
                            <a
                                href="https://cal.com/appsetz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-transform hover:scale-105"
                            >
                                Book 30 min free consultation
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-sm font-bold mb-2">Name (required)</label>
                                    <input
                                        {...register('firstName', { required: true })}
                                        type="text"
                                        placeholder="First Name"
                                        className={`w-full border-b py-2 focus:outline-none focus:border-black transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                </div>
                                <div className="group pt-7">
                                    <input
                                        {...register('lastName')}
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Phone Number (required)</label>
                                <input
                                    {...register('phone', { required: true })}
                                    type="tel"
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`w-full border-b py-2 focus:outline-none focus:border-black transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">What service are you looking for?</label>
                                <select {...register('service')} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black bg-transparent">
                                    <option value="Website Development">Website Development</option>
                                    <option value="App Development">App Development</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Email (required)</label>
                                <input
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                    type="email"
                                    className={`w-full border-b py-2 focus:outline-none focus:border-black transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Small description about idea</label>
                                <textarea
                                    {...register('description')}
                                    rows={3}
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactClean;
