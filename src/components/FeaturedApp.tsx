'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowUpRight,
  BadgeCheck,
  Fingerprint,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react';
import StoreBadges, { AppleIcon, GooglePlayIcon } from '@/components/StoreBadges';
import { NOCOM_LINKS, nocomProject } from '@/lib/featured';

// NoCom's own brand green, used only inside the app mockup
const NOCOM_GREEN = '#86C272';

const proofPoints = [
  { icon: Rocket, label: 'Production ready', sub: 'v1.4 shipping in production' },
  { icon: ShieldCheck, label: 'Store approved', sub: 'Passed Apple & Google review' },
  { icon: Fingerprint, label: 'Aadhaar eKYC', sub: 'DigiLocker + RC verification' },
];

const FeaturedApp = () => {
  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-brand-950 text-white py-24 md:py-32 px-6"
    >
      {/* Voxel grid + warm glows */}
      <div className="pointer-events-none absolute inset-0 bg-voxel [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-honey-400/15 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">
        {/* ---- Copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-honey-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-950">
              <Star className="h-3 w-3 fill-current" /> Featured product
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live on App Store &amp; Google Play
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-4 mb-6"
          >
            <Image
              src="/images/nocom-icon.png"
              alt="NoCom app icon"
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-xl shadow-black/40 ring-1 ring-white/10"
            />
            <div>
              <p className="text-2xl font-extrabold font-outfit leading-none">NoCom</p>
              <p className="mt-1.5 text-sm text-white/55">Used cars &amp; bikes · Built by AppSetz</p>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            We don&apos;t just pitch apps.{' '}
            <span className="text-gradient-honey">We ship them to both stores.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/65 leading-relaxed max-w-xl mb-8"
          >
            <span className="text-white font-semibold">{nocomProject.tagline}</span> NoCom is India&apos;s broker-free
            marketplace for used cars and bikes — every seller Aadhaar-verified, every listing matched to the official
            RC, zero commission. Our flagship build: taken from idea to a production app that&apos;s live on the App
            Store <em className="not-italic text-white">and</em> Google Play.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12"
          >
            <StoreBadges appStoreUrl={NOCOM_LINKS.appStore} playStoreUrl={NOCOM_LINKS.playStore} tone="light" />
            <a
              href={NOCOM_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-honey-300 hover:text-honey-200 transition-colors"
            >
              Visit nocom.app
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 mb-8"
          >
            {(nocomProject.highlights || []).map((h) => (
              <div key={h.label} className="bg-brand-950/90 px-3 sm:px-4 py-5">
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-outfit text-2xl sm:text-3xl md:text-4xl font-extrabold text-honey-300 tabular-nums whitespace-nowrap">{h.value}</dd>
                <dd className="mt-1 text-xs md:text-sm font-medium text-white/60">{h.label}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Proof points */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-3"
          >
            {proofPoints.map(({ icon: Icon, label, sub }) => (
              <li key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-honey-300">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block text-xs text-white/50">{sub}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---- Phone mockup ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm"
        >
          <div className="absolute inset-8 rounded-full bg-brand-500/30 blur-3xl" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative mx-auto w-[17rem] sm:w-[18.5rem] rounded-[2.75rem] border-[7px] border-[#2a1d15] bg-[#f7f6f2] shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Dynamic island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-20 rounded-full bg-[#120c08] z-20" />

            {/* App header */}
            <div className="px-4 pt-10 pb-4" style={{ backgroundColor: NOCOM_GREEN }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-outfit text-lg font-black tracking-tight text-black">NoCom.</span>
                <span className="rounded-full bg-black px-2 py-0.5 text-[9px] font-bold text-white">0% commission</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-[11px] text-gray-500">
                <Search className="h-3.5 w-3.5" /> Search cars &amp; bikes near you
              </div>
            </div>

            {/* Listing card */}
            <div className="p-3 space-y-3">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
                <div className="relative h-28">
                  <Image
                    src="/images/nocom.jpg"
                    alt="Verified SUV listing on NoCom"
                    fill
                    sizes="300px"
                    className="object-cover object-[75%_50%]"
                  />
                  <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold text-gray-900">
                    <BadgeCheck className="h-3 w-3" style={{ color: '#3f8f2f' }} /> Verified owner
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[12px] font-bold text-gray-900 leading-tight">Compact SUV · 2021</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Diesel · 1st owner · Bengaluru</p>
                    </div>
                    <p className="text-[13px] font-extrabold text-gray-900">₹9.8L</p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <span className="flex items-center justify-center gap-1 rounded-lg bg-black py-1.5 text-[10px] font-semibold text-white">
                      <Phone className="h-3 w-3" /> Call owner
                    </span>
                    <span
                      className="flex items-center justify-center gap-1 rounded-lg py-1.5 text-[10px] font-semibold text-black"
                      style={{ backgroundColor: NOCOM_GREEN }}
                    >
                      <MessageCircle className="h-3 w-3" /> WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* RC auto-fill row */}
              <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                <p className="text-[10px] font-semibold text-gray-500 mb-1.5">Sell in under 2 minutes</p>
                <div className="flex items-center gap-2">
                  <span className="flex-1 rounded-lg border border-gray-200 px-2 py-1.5 font-mono text-[11px] font-bold tracking-wider text-gray-900">
                    KA 01 AB 1234
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-flex items-center gap-1 rounded-lg bg-black px-2 py-1.5 text-[10px] font-bold text-white"
                  >
                    <Zap className="h-3 w-3" style={{ color: NOCOM_GREEN }} /> Auto-fill
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="pb-2 pt-1 flex justify-center">
              <span className="h-1 w-24 rounded-full bg-black/20" />
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -left-2 sm:-left-10 top-24 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 text-gray-900 shadow-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-950 text-white">
              <AppleIcon className="h-4 w-4" />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-medium text-gray-500 leading-none">Live on</span>
              <span className="block text-xs font-bold">App Store</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute -right-2 sm:-right-8 top-[34%] flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 text-gray-900 shadow-xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100">
              <GooglePlayIcon className="h-4 w-4" />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-medium text-gray-500 leading-none">Live on</span>
              <span className="block text-xs font-bold">Google Play</span>
            </span>
          </motion.div>

          {/* Centering lives on a wrapper — framer-motion's transform would override translate classes */}
          <div className="absolute inset-x-0 -bottom-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-honey-400 px-4 py-2 text-xs font-extrabold text-brand-950 shadow-glow-honey"
            >
              <Sparkles className="h-3.5 w-3.5" /> Designed &amp; built by AppSetz
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedApp;
