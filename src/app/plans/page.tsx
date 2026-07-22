'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Rocket,
  Globe,
  Smartphone,
  Check,
  ArrowLeft,
  ArrowRight,
  Shield,
  Database,
  LayoutDashboard,
  Inbox,
  CalendarCheck,
  BarChart3,
  Upload,
  FileSpreadsheet,
  HardDriveDownload,
  Clock,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import CopyrightFooter from '@/components/CopyrightFooter';

/* ---------------- config ---------------- */

const WHATSAPP_LINK =
  'https://wa.me/916366795537?text=Hi%2C%20I%27m%20interested%20in%20your%20limited-time%20offer.%20Can%20you%20share%20a%20quote%3F';

/* ---------------- data ---------------- */

const detailedPlans = [
  {
    id: 'landing-page',
    icon: Rocket,
    dot: '🟢',
    name: 'Landing Page',
    price: '2,999',
    priceNote: '+ domain charges',
    tagline: 'Perfect for lead generation, product launches, or “link in bio” pages.',
    accentText: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    check: 'text-emerald-500',
    glow: 'from-emerald-200/60',
    features: [
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
    accentText: 'text-blue-600',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    check: 'text-blue-500',
    glow: 'from-blue-200/60',
    popular: true,
    features: [
      'Up to 5 pages (Home, About, Services, Gallery, Contact)',
      'Backend + database included',
      'Admin dashboard to manage everything yourself',
      'Free domain + hosting for 1 year',
      'SEO setup + Google Analytics',
      'WhatsApp chat, enquiry form, Google Maps',
      'Social media integration + SSL',
      '3 rounds of revisions',
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
    accentText: 'text-purple-600',
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    check: 'text-purple-500',
    glow: 'from-purple-200/60',
    features: [
      'Cross-platform (Android + iOS)',
      'Admin panel to manage content',
      'Push notifications',
      'Play Store / App Store deployment support',
      'Free maintenance for 3 months',
      '1 free feature update within 30 days',
    ],
  },
];

const backendPerks = [
  { icon: Shield, title: 'Secure admin login', desc: 'Role-based access — owner, staff, etc.' },
  { icon: LayoutDashboard, title: 'Edit content without code', desc: 'Add / edit / delete products, services, blog, gallery.' },
  { icon: Inbox, title: 'Enquiry & lead management', desc: 'Every form submission saved and searchable.' },
  { icon: CalendarCheck, title: 'Bookings, orders & customers', desc: 'Manage everything from one place.' },
  { icon: Database, title: 'Full database', desc: 'For all your content and user data.' },
  { icon: BarChart3, title: 'Analytics dashboard', desc: 'Visitors, leads and popular pages.' },
  { icon: Upload, title: 'Media & file uploads', desc: 'Images, PDFs and brochures.' },
  { icon: FileSpreadsheet, title: 'Export to Excel / CSV', desc: 'Take your data anywhere, anytime.' },
  { icon: HardDriveDownload, title: 'Automatic backups', desc: 'Your data is safe, always.' },
];

/* ---------------- animation helpers ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ---------------- page ---------------- */

export default function PlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden px-6">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute top-10 right-1/4 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Link
                href="/#plans"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-red-500/30"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              🔥 Limited Time Offer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl"
            >
              Special launch pricing.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl text-lg text-gray-500"
            >
              The prices below are a <span className="font-semibold text-gray-900">limited-period offer</span> — not our
              standard rates. Choose your package and lock in the offer before it ends.
            </motion.p>
          </div>
        </section>

        {/* Plan detail cards */}
        <section className="mx-auto mt-20 max-w-6xl space-y-8 px-6">
          {detailedPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.id}
                id={plan.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className={`relative scroll-mt-32 overflow-hidden rounded-3xl border bg-white p-8 shadow-sm md:p-10 ${
                  plan.popular ? 'border-gray-900 ring-1 ring-gray-900' : 'border-gray-200'
                }`}
              >
                {/* corner glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${plan.glow} to-transparent blur-2xl`}
                />

                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-gray-900 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}

                <div className="relative grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
                  {/* left: identity + price */}
                  <div>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${plan.accentBg} ${plan.accentText}`}>
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-gray-900">
                      {plan.dot} {plan.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{plan.tagline}</p>

                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-2xl font-semibold text-gray-400">₹</span>
                      <span className="text-5xl font-extrabold tracking-tight text-gray-900">{plan.price}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${plan.accentBg} ${plan.accentText} ${plan.accentBorder}`}>
                        {plan.priceNote}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-600">
                        <Zap className="h-3 w-3 fill-current" />
                        Limited time offer
                      </span>
                    </div>

                    <Link
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 py-3 text-sm font-bold text-white transition-all hover:bg-gray-800 md:w-auto md:px-8"
                    >
                      Get started
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* right: feature list */}
                  <motion.ul
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-x-6 gap-y-3 sm:grid-cols-2"
                  >
                    {plan.features.map((f, i) => (
                      <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${plan.accentBg}`}>
                          <Check className={`h-3.5 w-3.5 ${plan.check}`} />
                        </span>
                        <span>{f}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Backend & admin dashboard deep-dive */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Included with Website
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              What the backend &amp; admin dashboard give you
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Run your whole business from one screen — no developer needed for day-to-day changes.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {backendPerks.map((perk) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-900 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-gray-900">{perk.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{perk.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-24 max-w-5xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-[#0b0b0d] px-8 py-14 text-center text-white md:px-16"
          >
            <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80">
                <Clock className="h-3.5 w-3.5" />
                Fast turnaround, fixed pricing
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
                Not sure which plan fits? Let&apos;s talk.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Tell us about your idea and we&apos;ll recommend the right package — free, no pressure.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-white/90"
                >
                  Get a free quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="https://www.waytolink.cc/book/pavankumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/10"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <CopyrightFooter />
    </div>
  );
}
