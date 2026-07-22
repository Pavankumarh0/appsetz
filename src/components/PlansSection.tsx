'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Globe, Smartphone, ArrowRight, Zap } from 'lucide-react';

export const plans = [
  {
    id: 'landing-page',
    icon: Rocket,
    dot: '🟢',
    name: 'Landing Page',
    price: '2,999',
    priceNote: '+ domain charges',
    tagline: 'Perfect for lead generation, product launches, or “link in bio” pages.',
    check: 'text-emerald-500',
    ring: 'hover:border-emerald-400/60 hover:shadow-emerald-100',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconWrap: 'bg-emerald-50 text-emerald-600',
    highlights: [
      'Mobile-responsive, fast-loading single page',
      'WhatsApp + contact form integration',
      'Basic on-page SEO setup',
      'Free SSL (secure padlock)',
      '2 rounds of revisions',
      'Delivered in 2–3 days',
    ],
  },
  {
    id: 'website',
    icon: Globe,
    dot: '🔵',
    name: 'Website',
    price: '15,000',
    priceNote: 'starting from',
    tagline: 'For businesses that need a proper online presence, now with a full backend.',
    check: 'text-blue-500',
    ring: 'hover:border-blue-400/60 hover:shadow-blue-100',
    chip: 'bg-blue-50 text-blue-700 border-blue-200',
    iconWrap: 'bg-blue-50 text-blue-600',
    popular: true,
    highlights: [
      'Up to 5 pages + backend & database',
      'Admin dashboard to manage everything',
      'Free domain + hosting for 1 year',
      'SEO setup + Google Analytics',
      'WhatsApp, enquiry form & Google Maps',
      'Delivered in 7–10 days',
    ],
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    dot: '🟣',
    name: 'Mobile App',
    price: '60,000',
    priceNote: 'starting from',
    tagline: 'Custom Android/iOS app for your business.',
    check: 'text-purple-500',
    ring: 'hover:border-purple-400/60 hover:shadow-purple-100',
    chip: 'bg-purple-50 text-purple-700 border-purple-200',
    iconWrap: 'bg-purple-50 text-purple-600',
    highlights: [
      'Cross-platform (Android + iOS)',
      'Admin panel to manage content',
      'Push notifications',
      'Play Store / App Store deployment support',
      'Free maintenance for 3 months',
      '1 free feature update within 30 days',
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const PlansSection = () => {
  return (
    <section id="plans" className="relative py-24 px-6 overflow-hidden bg-white">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500 text-white text-xs font-bold uppercase tracking-wide mb-5 shadow-lg shadow-red-500/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            🔥 Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            Special launch pricing — for a limited time
          </h2>
          <p className="text-lg text-gray-500">
            These are <span className="font-semibold text-gray-900">limited-period offer prices</span>, not our standard rates.
            Lock in your project now before they go back up.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                variants={card}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl ${plan.ring} ${
                  plan.popular ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}

                <div className="mb-5 flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${plan.iconWrap}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-red-600">
                    <Zap className="h-3 w-3 fill-current" />
                    Limited offer
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {plan.dot} {plan.name}
                </h3>
                <p className="mt-2 min-h-[48px] text-sm text-gray-500">{plan.tagline}</p>

                <div className={`mt-6 mb-8 flex-1 rounded-2xl border p-4 ${plan.chip}`}>
                  <p className="text-sm font-semibold">
                    🎉 Special limited-time offer running now
                  </p>
                  <p className="mt-1 text-xs opacity-80">
                    Tap below to see everything you&apos;ll get in this package.
                  </p>
                </div>

                <Link
                  href={`/plans#${plan.id}`}
                  className={`group flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all ${
                    plan.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'border border-gray-200 bg-white text-gray-900 hover:border-gray-900 hover:bg-gray-50'
                  }`}
                >
                  See what you&apos;ll get
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footnote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline-offset-4 hover:underline"
          >
            See full details of every plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
