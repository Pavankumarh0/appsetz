'use client';

const pricingPlans = [
    {
        name: 'Frontend Development',
        price: '200',
        period: 'project',
        description: 'Mobile app for your users',
        features: [
            'Converting your design into working app',
            'Connecting to external services',
            'Smooth animations and transitions',
            'Help when you need it',
            '10-30 Day Delivery',
            'Unlimited changes until you are happy'
        ],
        buttonText: 'Start Your Project',
        href: '#contact',
        isPopular: false
    },
    {
        name: 'MVP Development',
        price: '1,500',
        period: 'project',
        description: 'Complete Starter Package',
        features: [
            'Mobile app plus admin dashboard',
            'Custom design for your brand',
            'Converting designs into working app',
            'Building your apps brain (backend)',
            '1-3 Month Delivery',
            'Getting your app on App Store & Play Store',
            'Testing everything works perfectly',
            'Unlimited changes until you are happy'
        ],
        buttonText: 'Start Your Project',
        href: '#contact',
        isPopular: true
    },
    {
        name: 'Full-Cycle App Development',
        price: '4,000',
        period: 'project',
        description: 'Everything You Need',
        features: [
            'User app, business app & admin dashboard',
            'Premium design customized for your brand',
            'Converting designs into working app',
            'Complete backend system built for growth',
            '2-4 Month Delivery',
            'Publishing on App Store & Play Store',
            'Thorough testing for flawless performance',
            'Full control with admin dashboard',
            'Unlimited changes until you are happy'
        ],
        buttonText: 'Start Your Project',
        href: '#contact',
        isPopular: false
    },
    {
        name: 'Custom',
        price: 'Custom',
        period: 'tailored',
        description: 'Tailored to your specific needs',
        features: [
            'Custom requirements analysis',
            'Dedicated project manager',
            'Custom development timeline',
            'Priority support',
            'Flexible engagement models',
            'Enterprise-grade solutions'
        ],
        buttonText: 'Book a Call',
        href: 'https://www.waytolink.cc/book/pavankumar',
        isPopular: false
    }
];

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
// Actually, checking package.json, `clsx` and `tailwind-merge` are present. I'll stick to template literals for simplicity or create a small utility if needed. 
// For now, I'll use a local `cn` utility or just class names.
// The user provided code imported `cn` from `@/lib/utils`. I will implement it locally or assume it exists. 
// Better to check if `@/lib/utils` exists or just implement inline. 
// I'll check existence in a separate step or just use inline `clsx`. 
// Wait, I am in replace_file_content. I'll use standard className strings to be safe and avoid missing import errors.

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple Pricing</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Clear options to bring your app idea to life, with everything included to launch successfully.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className={`
                                relative flex flex-col p-6 rounded-2xl border bg-white
                                ${plan.isPopular ? 'border-black ring-1 ring-black shadow-xl z-10' : 'border-gray-200'}
                            `}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-black text-white py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center text-xs font-bold uppercase tracking-wide">
                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                    Popular
                                </div>
                            )}

                            <div className="mb-5">
                                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-6 flex items-baseline gap-1">
                                {plan.price !== 'Custom' && <span className="text-sm font-medium text-gray-500">$</span>}
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.href}
                                className={`
                                    w-full py-3 rounded-full font-bold text-sm text-center transition-all duration-200
                                    ${plan.isPopular
                                        ? 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
                                        : 'bg-white text-black border border-gray-200 hover:border-black hover:bg-gray-50'
                                    }
                                `}
                            >
                                {plan.buttonText}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
