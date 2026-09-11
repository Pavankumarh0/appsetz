'use client';

import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

/*
 * The voxel beaver mascot perched on the hero headline, holding a
 * "CHOOSE APPSETZ!" picket sign. Render it inside the <h1>: it is absolutely
 * positioned by the caller so its feet rest on the tops of the letters.
 *
 * Everything is built from spans (valid inside a heading) and the sign's
 * letters are CSS-generated content, so the heading's text stays clean for
 * search engines and screen readers.
 *
 * Sizes are driven by --bw (the beaver's width), set by the caller.
 * Percentages are measured from /brand/beaver.png (440x494, tightly cropped).
 */
const ASPECT = 494 / 440; // beaver height / width
const STICK_X = 0.68; // stick column (between the ears), as a share of width
const PIVOT_Y = 0.6; // where the paws grip the stick, as a share of height
const HEAD_TOP_Y = 0.074; // head top at the stick column

const EYES = [
  { left: '62.3%', top: '16.8%', width: '7.2%', height: '9.6%' },
  { left: '82.1%', top: '20.2%', width: '6.3%', height: '8.3%' },
];

const bw = (k: number) => `calc(var(--bw) * ${k})`;

const HeroBeaver = ({ className = '' }: { className?: string }) => {
  const reduce = useReducedMotion();
  const hop = useAnimationControls();

  const onPoke = () => {
    if (reduce) return;
    hop.start({
      y: [0, -26, 0, -7, 0],
      transition: { duration: 0.7, times: [0, 0.35, 0.65, 0.82, 1], ease: 'easeOut' },
    });
  };

  const signHeight = 0.42; // plank height, in --bw
  const stickLength = (PIVOT_Y - HEAD_TOP_Y) * ASPECT + 0.12; // hidden part + a little showing above the head

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 block select-none text-left font-normal leading-none tracking-normal ${className}`}
      style={{ width: bw(1), height: bw(ASPECT) }}
    >
      {/* Entrance: drops onto the headline with a squash-and-stretch landing */}
      <motion.span
        className="block h-full w-full"
        style={{ transformOrigin: '50% 100%' }}
        initial={reduce ? false : { y: -90, opacity: 0 }}
        animate={
          reduce ? undefined : { y: [-90, 0, 0, 0], opacity: [0, 1, 1, 1], scaleY: [1.06, 0.84, 1.05, 1] }
        }
        transition={{ duration: 0.85, times: [0, 0.5, 0.75, 1], ease: 'easeOut', delay: 0.9 }}
      >
        {/* Idle bob */}
        <motion.span
          className="block h-full w-full"
          animate={reduce ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
        >
          {/* Tap-to-hop */}
          <motion.span
            animate={hop}
            onClick={onPoke}
            className="pointer-events-auto relative block h-full w-full cursor-pointer"
          >
            {/* Picket sign — sits behind the beaver, pivots at the paws */}
            <motion.span
              className="absolute z-0 flex flex-col items-center"
              style={{
                width: bw(1.34),
                left: bw(STICK_X - 0.67),
                bottom: bw((1 - PIVOT_Y) * ASPECT),
                transformOrigin: '50% 100%',
              }}
              initial={reduce ? false : { scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 1.55 }}
            >
              <motion.span
                className="flex w-full flex-col items-center"
                style={{ transformOrigin: '50% 100%' }}
                animate={reduce ? undefined : { rotate: [-3, 3, -3] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 2.4 }}
              >
                <WoodPlank height={bw(signHeight)} reduce={!!reduce} />
                {/* Stick */}
                <span
                  className="block border-x-2 border-[#3e2419]"
                  style={{
                    width: bw(0.075),
                    height: bw(stickLength),
                    background: 'linear-gradient(90deg, #a0582a 0 50%, #7a3d1c 50% 100%)',
                  }}
                />
              </motion.span>
            </motion.span>

            {/* The beaver */}
            <Image
              src="/brand/beaver.png"
              alt=""
              width={440}
              height={494}
              priority
              sizes="(min-width: 1024px) 150px, (min-width: 640px) 112px, 80px"
              className="relative z-10 h-full w-full drop-shadow-[0_14px_22px_rgba(0,0,0,0.5)]"
              draggable={false}
            />

            {/* Voxel eyelids — a quick blink every few seconds */}
            {!reduce &&
              EYES.map((eye, i) => (
                <motion.span
                  key={i}
                  className="absolute z-20 block bg-[#d97638]"
                  style={{ ...eye, transformOrigin: '50% 0%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 0, 1, 0, 0, 1, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    times: [0, 0.6, 0.63, 0.66, 0.9, 0.93, 0.96],
                    delay: 3,
                  }}
                />
              ))}
          </motion.span>
        </motion.span>
      </motion.span>
    </span>
  );
};

/* ---- Voxel-style wooden plank, matching the log the beaver is holding ---- */
const WoodPlank = ({ height, reduce }: { height: string; reduce: boolean }) => {
  const word = 'APPSETZ!';
  return (
    <span
      className="relative flex w-full flex-col items-center justify-center border-[3px] border-[#552f13] font-pixel font-bold leading-none text-[#3e2419]"
      style={{
        height,
        background:
          'repeating-linear-gradient(180deg, #d99a58 0 22%, #c4803f 22% 25%, #d99a58 25% 47%, #b87333 47% 50%)',
        boxShadow:
          'inset 0 3px 0 #f3c287, inset 0 -4px 0 #9b5a27, 0 10px 24px -8px rgba(0,0,0,0.55)',
      }}
    >
      {/* nails */}
      <span className="absolute left-1 top-1 block h-1 w-1 bg-[#552f13] sm:left-1.5 sm:top-1.5 sm:h-1.5 sm:w-1.5" />
      <span className="absolute right-1 top-1 block h-1 w-1 bg-[#552f13] sm:right-1.5 sm:top-1.5 sm:h-1.5 sm:w-1.5" />
      <span className="absolute bottom-1 left-1 block h-1 w-1 bg-[#552f13] sm:bottom-1.5 sm:left-1.5 sm:h-1.5 sm:w-1.5" />
      <span className="absolute bottom-1 right-1 block h-1 w-1 bg-[#552f13] sm:bottom-1.5 sm:right-1.5 sm:h-1.5 sm:w-1.5" />

      {/* Letters come from CSS content so they never become part of the heading text */}
      <span
        data-text="CHOOSE"
        className="block tracking-[0.2em] text-[#69331c] before:content-[attr(data-text)]"
        style={{ fontSize: `max(7px, ${bw(0.075)})` }}
      />
      <span
        className="mt-[0.15em] flex [text-shadow:0_2px_0_#f3c287]"
        style={{ fontSize: `max(11px, ${bw(0.14)})` }}
      >
        {word.split('').map((ch, i) => (
          <motion.span
            key={i}
            data-ch={ch}
            className="inline-block before:content-[attr(data-ch)]"
            initial={reduce ? false : { y: 8, opacity: 0, scale: 0.4 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 420, damping: 16, delay: 1.85 + i * 0.07 }}
          />
        ))}
      </span>
    </span>
  );
};

/*
 * Floating voxel cubes for the hero background — wood chips drifting up.
 * Positions are fixed so server and client render identically.
 */
const CUBES = [
  { left: 4, size: 12, dur: 26, delay: 3, o: 0.35 },
  { left: 11, size: 7, dur: 19, delay: 11, o: 0.25 },
  { left: 18, size: 16, dur: 32, delay: 20, o: 0.2 },
  { left: 27, size: 9, dur: 23, delay: 6, o: 0.3 },
  { left: 35, size: 6, dur: 17, delay: 14, o: 0.25 },
  { left: 44, size: 11, dur: 29, delay: 24, o: 0.18 },
  { left: 53, size: 8, dur: 21, delay: 2, o: 0.28 },
  { left: 61, size: 14, dur: 34, delay: 16, o: 0.2 },
  { left: 69, size: 7, dur: 18, delay: 9, o: 0.3 },
  { left: 76, size: 10, dur: 25, delay: 27, o: 0.25 },
  { left: 83, size: 15, dur: 31, delay: 5, o: 0.2 },
  { left: 90, size: 8, dur: 20, delay: 18, o: 0.3 },
  { left: 96, size: 12, dur: 28, delay: 12, o: 0.22 },
];

export const VoxelField = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
    {CUBES.map((c, i) => (
      <span
        key={i}
        className="absolute -bottom-8 block rounded-[2px]"
        style={{
          left: `${c.left}%`,
          width: c.size,
          height: c.size,
          opacity: c.o,
          background: 'linear-gradient(135deg, #fdbf73 0 45%, #dc7635 45% 72%, #914118 72% 100%)',
          boxShadow: '0 0 12px rgba(220,118,53,0.35)',
          animation: `voxelRise ${c.dur}s linear ${-c.delay}s infinite`,
        }}
      />
    ))}
  </div>
);

export default HeroBeaver;
