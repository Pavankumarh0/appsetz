'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  TrendingUp,
  Users,
  Star,
  CheckCircle2,
  Smartphone,
  Globe,
  Activity,
  ArrowUpRight,
  Bell,
  Home,
  Search,
  Plus,
  User,
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-24 px-6 overflow-hidden bg-[#0b0b0d] text-white">
      {/* Wildflower meadow photo anchored to the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-meadow.jpg)',
          // fade the top edge of the photo so it dissolves into the black
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 32%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 32%)',
        }}
      />
      {/* Extra black-to-transparent wash over the photo's top for a seamless blend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] bg-gradient-to-b from-[#0b0b0d] via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-xs font-semibold text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            For Startups &amp; SMEs
          </span>
        </motion.div>

        {/* Heading — placeholder copy, swap with your final quote */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] font-outfit"
        >
          One team for your web &amp; app. <br className="hidden md:block" />
          <span className="text-white/70">Shipped in weeks, not months.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          A results-obsessed, AI-powered product studio that designs, builds and launches your website and mobile app. 🚀
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
        >
          <Link
            href="https://www.waytolink.cc/book/pavankumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-gray-900 font-semibold transition-all shadow-lg hover:bg-white/90 hover:-translate-y-0.5 flex items-center gap-2 text-sm sm:text-lg whitespace-nowrap"
          >
            Get a quote
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="#portfolio"
            className="px-5 py-3 sm:px-8 sm:py-4 rounded-full bg-white/5 backdrop-blur border border-white/15 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 text-sm sm:text-lg whitespace-nowrap"
          >
            View portfolio
          </Link>
        </motion.div>

        {/* Device mockups + floating cards */}
        <HeroMockup />
      </div>
    </section>
  );
};

/* ---- Device mockup composition (website browser + mobile app + floating cards) ---- */
const HeroMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-16 sm:mt-24 w-full max-w-4xl mx-auto"
    >
      {/* Glow platform under devices */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-white/10 opacity-40 blur-3xl rounded-full" />

      {/* Browser window — the website */}
      <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-[#111113]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <span className="w-3 h-3 rounded-full bg-white/25" />
          <span className="w-3 h-3 rounded-full bg-white/20" />
          <span className="w-3 h-3 rounded-full bg-white/15" />
          <div className="ml-4 flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 text-[11px] text-white/40 bg-white/5 rounded-full py-1 px-3">
            <Globe className="w-3 h-3" />
            appsetz.pro
          </div>
        </div>
        {/* Website content — animated analytics dashboard */}
        <div className="p-5 sm:p-7">
          {/* header row */}
          <div className="flex items-center justify-between mb-5">
            <div className="space-y-1.5">
              <div className="h-3 w-28 rounded bg-white/25" />
              <div className="h-2 w-16 rounded bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-16 rounded-full bg-white/[0.06] border border-white/10" />
              <div className="h-7 w-7 rounded-full bg-white/15" />
            </div>
          </div>

          {/* stat cards with count-up + mini bars */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: 'Revenue', value: 48200, prefix: '$', decimals: 0 },
              { label: 'Users', value: 12480, decimals: 0 },
              { label: 'Growth', value: 32.6, suffix: '%', decimals: 1 },
            ].map((s, i) => (
              <div key={s.label} className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
                <div className="flex items-center gap-1 text-[9px] text-white/40 mb-1.5">
                  <ArrowUpRight className="w-2.5 h-2.5" /> {s.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tabular-nums">
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} duration={1.8 + i * 0.3} />
                </div>
                <div className="mt-2 flex items-end gap-0.5 h-6">
                  <MiniBars seed={i} />
                </div>
              </div>
            ))}
          </div>

          {/* big animated area chart */}
          <div className="rounded-xl bg-white/[0.05] border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5 text-[10px] text-white/50">
                <Activity className="w-3 h-3" /> Performance
              </div>
              <div className="flex gap-1.5">
                {['1D', '1W', '1M'].map((t, i) => (
                  <span
                    key={t}
                    className={`text-[9px] px-2 py-0.5 rounded-full ${i === 1 ? 'bg-white/15 text-white' : 'text-white/30'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <AreaChart />
          </div>
        </div>
      </div>

      {/* Phone — the mobile app (overlapping, bottom-right) */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute -bottom-10 right-2 sm:right-6 w-28 sm:w-40 z-20"
      >
        <div className="rounded-[1.75rem] border-[5px] border-[#17171a] bg-[#0c0c0e] shadow-2xl overflow-hidden">
          {/* notch + app header */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#17171a] rounded-b-xl z-10" />
            <div className="bg-white/[0.06] px-3 pt-5 pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-1.5 w-9 rounded bg-white/20" />
                  <div className="h-2.5 w-14 rounded bg-white/45" />
                </div>
                <div className="w-6 h-6 rounded-full bg-white/12 flex items-center justify-center">
                  <Bell className="w-3 h-3 text-white/60" />
                </div>
              </div>
            </div>
          </div>

          {/* app body */}
          <div className="p-2.5 space-y-2.5 bg-[#0c0c0e]">
            {/* built-with badge */}
            <motion.div
              className="flex items-center justify-center gap-1"
              animate={{ y: [0, -1.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FlutterLogo className="w-2.5 h-3" />
              <span className="text-[7px] font-medium text-white/45">Built with Flutter</span>
            </motion.div>
            {/* balance card: count-up + progress ring */}
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[7px] text-white/40 mb-1">Balance</div>
                <div className="text-[13px] font-bold text-white tabular-nums leading-none">
                  $<CountUp to={40000.99} decimals={2} duration={2.2} />
                </div>
              </div>
              <ProgressRing />
            </div>

            {/* transactions sliding in */}
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/5 p-1.5"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.25 }}
                >
                  <div className="w-5 h-5 rounded-md bg-white/10 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 w-2/3 rounded bg-white/20" />
                    <div className="h-1 w-1/3 rounded bg-white/10" />
                  </div>
                  <div className="h-1.5 w-6 rounded bg-white/15" />
                </motion.div>
              ))}
            </div>

            {/* pulsing CTA */}
            <motion.div
              className="h-6 rounded-full bg-white text-[8px] font-semibold text-gray-900 flex items-center justify-center"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Send money
            </motion.div>
          </div>

          {/* tab bar */}
          <div className="flex items-center justify-around px-3 py-2 border-t border-white/5 bg-[#0c0c0e]">
            {[Home, Search, Plus, User].map((Icon, i) => (
              <Icon key={i} className={`w-3.5 h-3.5 ${i === 0 ? 'text-white' : 'text-white/30'}`} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating card — Revenue (top-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="hidden sm:flex absolute -top-6 -left-4 md:-left-10 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl px-4 py-3 z-30"
      >
        <span className="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </span>
        <div className="text-left">
          <p className="text-[10px] font-medium text-gray-500 leading-none">Revenue</p>
          <p className="text-sm font-bold text-gray-900">+$12,480</p>
        </div>
      </motion.div>

      {/* Floating card — Active users (mid-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.05 }}
        className="hidden sm:flex absolute top-1/2 -left-6 md:-left-16 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl px-4 py-3 z-30"
      >
        <span className="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
          <Users className="w-5 h-5" />
        </span>
        <div className="text-left">
          <p className="text-[10px] font-medium text-gray-500 leading-none">Active users</p>
          <p className="text-sm font-bold text-gray-900">1,204</p>
        </div>
      </motion.div>

      {/* Floating card — Rating (top-right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="hidden sm:flex absolute -top-4 right-0 md:-right-8 items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl px-4 py-3 z-30"
      >
        <Star className="w-5 h-5 text-gray-800 fill-gray-800" />
        <div className="text-left">
          <p className="text-sm font-bold text-gray-900 leading-none">4.9</p>
          <p className="text-[10px] font-medium text-gray-500">App rating</p>
        </div>
      </motion.div>

      {/* Floating card — Deployed (bottom-left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.35 }}
        className="hidden sm:flex absolute -bottom-6 left-6 md:left-2 items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl px-4 py-3 z-30"
      >
        <CheckCircle2 className="w-5 h-5 text-gray-700" />
        <div className="text-left">
          <p className="text-sm font-bold text-gray-900 leading-none">Deployed</p>
          <p className="text-[10px] font-medium text-gray-500 flex items-center gap-1">
            <Smartphone className="w-2.5 h-2.5" /> iOS &amp; Android
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---- Flutter logo (official brand mark, inline SVG) ---- */
const FlutterLogo = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 256 317" className={className} preserveAspectRatio="xMidYMid" aria-label="Flutter">
    <polygon
      fill="#47C5FB"
      points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"
    />
    <polygon
      fill="#47C5FB"
      points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"
    />
    <polygon
      fill="#00569E"
      points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"
    />
    <polygon
      fill="#00B5F8"
      points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"
    />
  </svg>
);

/* ---- Animated widgets used inside the device mockups ---- */

// Number that eases up to its target once on mount
const CountUp = ({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return (
    <>
      {prefix}
      {val.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </>
  );
};

// Small looping bar sparkline
const MiniBars = ({ seed = 0 }: { seed?: number }) => {
  const sets = [
    [40, 65, 50, 80, 60],
    [55, 45, 70, 50, 85],
    [60, 80, 55, 70, 45],
  ];
  const heights = sets[seed % sets.length];
  return (
    <>
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-sm bg-white/25"
          initial={{ height: '20%' }}
          animate={{ height: [`${h * 0.6}%`, `${h}%`, `${h * 0.7}%`] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 + seed * 0.2 }}
        />
      ))}
    </>
  );
};

// Animated area / line chart that redraws on a loop
const AreaChart = () => (
  <svg viewBox="0 0 240 70" preserveAspectRatio="none" className="w-full h-16">
    <defs>
      <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.22" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      d="M0,55 C30,45 45,30 70,38 C95,46 115,15 145,22 C175,29 195,10 240,18 L240,70 L0,70 Z"
      fill="url(#heroAreaFill)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    />
    <motion.path
      d="M0,55 C30,45 45,30 70,38 C95,46 115,15 145,22 C175,29 195,10 240,18"
      fill="none"
      stroke="white"
      strokeOpacity="0.8"
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
    />
  </svg>
);

// Circular progress ring that fills in
const ProgressRing = () => (
  <svg viewBox="0 0 36 36" className="w-9 h-9 -rotate-90">
    <circle cx="18" cy="18" r="15" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="3" />
    <motion.circle
      cx="18"
      cy="18"
      r="15"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 0.72 }}
      transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
    />
  </svg>
);

export default Hero;
