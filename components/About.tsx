"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AVATARS = [
  { src: "/images/idotive-home-athour-1.webp" },
  { src: "/images/idotive-home-athour-2.webp" },
  { src: "/images/idotive-home-athour-3.webp" },
];

const PILLS = ["Strategy", "Storytelling", "Digital thinking"];

const PROJECT_IMAGES = [
  "/images/img_11.webp",
  "/images/img_6.webp",
  "/images/img_12.webp",
];

interface CounterProps {
  value: number;
}

function Counter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let animated = false;
    let controls: AnimationPlaybackControls | null = null;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.35 && !animated) {
        animated = true;
        controls = animate(0, value, {
          duration: 1.4,
          ease: "easeOut",
          onUpdate(latestValue) {
            node.textContent = String(Math.floor(latestValue));
          },
        });
      } else if (latest < 0.1 && animated) {
        animated = false;
        if (controls) {
          controls.stop();
        }
        node.textContent = "0";
      }
    });

    return () => {
      unsubscribe();
      if (controls) {
        controls.stop();
      }
    };
  }, [scrollYProgress, value]);

  return (
    <span className="inline-block tabular-nums" ref={ref}>
      0
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll tracking for the lower section
  const { scrollYProgress: bottomScrollY } = useScroll({
    target: bottomRowRef,
    offset: ["start end", "end center"],
  });

  const springConfig = { damping: 25, stiffness: 90 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const smoothBottomProgress = useSpring(bottomScrollY, springConfig);

  const rotateValue = useTransform(smoothProgress, [0, 1], [0, 240]);

  const textOpacity1 = useTransform(scrollYProgress, [0.15, 0.28], ["#d4d4d8", "#171717"]);
  const textOpacity2 = useTransform(scrollYProgress, [0.28, 0.42], ["#d4d4d8", "#171717"]);
  const textOpacity3 = useTransform(scrollYProgress, [0.42, 0.55], ["#d4d4d8", "#171717"]);

  // --- Dynamic Responsive Image Placement & Animation Config ---
  // Calculates card translation offsets dynamically to ensure zero overlap and zero overflow on all viewports
  const cardSpread = useTransform(smoothBottomProgress, [0.1, 0.75], [0, 1]);
  const cardOffset = 
    screenWidth < 400 ? 55 : 
    screenWidth < 640 ? 70 : 
    screenWidth < 1024 ? 95 : 125;
  const initialY = screenWidth < 640 ? 60 : 120;

  const card1X = useTransform(cardSpread, (v) => v * -cardOffset);
  const card1Y = useTransform(smoothBottomProgress, [0.1, 0.75], [initialY, 0]);

  const card2Y = useTransform(smoothBottomProgress, [0.1, 0.75], [initialY, 0]);

  const card3X = useTransform(cardSpread, (v) => v * cardOffset);
  const card3Y = useTransform(smoothBottomProgress, [0.1, 0.75], [initialY, 0]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-[#faf8f3] px-6 pt-20 pb-16 sm:px-12 lg:px-20 lg:pt-28 lg:pb-24 z-10"
    >
      {/* 3D Rotating Right Side Graphic */}
      <motion.div
        style={{ rotate: rotateValue }}
        className="hidden lg:block absolute right-[-4%] top-[4%] z-0 pointer-events-none lg:w-[480px] lg:h-[480px] xl:w-[550px] xl:h-[550px]"
        aria-hidden="true"
      >
        <Image
          src="/icons/idotive-icon-8.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1550px]">
        {/* Mobile/Tablet Rotating Star Graphic */}
        <div className="block lg:hidden mb-6 text-left">
          <motion.div
            style={{ rotate: rotateValue }}
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative pointer-events-none"
            aria-hidden="true"
          >
            <Image
              src="/icons/idotive-icon-8.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
          About Us
        </div>

        <div className="max-w-full lg:max-w-[60%] xl:max-w-[55%]">
          <h2 className="font-display text-[1.4rem] sm:text-[2rem] lg:text-[2.6rem] font-bold leading-[1.2] tracking-[-0.02em]">
            <motion.span style={{ color: textOpacity1 }}>
              We help brands express their vision through{" "}
            </motion.span>
            <motion.span
              style={{ color: textOpacity1 }}
              className="font-normal italic pr-2 text-neutral-900"
            >
              innovative design
            </motion.span>
            <motion.span style={{ color: textOpacity2 }}>
              compelling storytelling and strategic solutions{" "}
            </motion.span>
            <motion.span style={{ color: textOpacity3 }}>
              that leave a lasting impression
            </motion.span>
          </h2>

          <div className="mt-8 flex flex-col items-start gap-6 max-w-[480px]">
            <div className="flex items-center -space-x-3.5">
              {AVATARS.map((avatar, i) => (
                <div
                  key={i}
                  className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border-[3px] border-[#faf8f3] shadow-sm bg-neutral-200"
                >
                  <Image
                    src={avatar.src}
                    alt="Team member preview"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <button 
                type="button"
                aria-label="View all team members"
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#ff6b35] text-white text-lg sm:text-xl font-light hover:scale-105 transition-transform shadow-sm"
              >
                +
              </button>
            </div>

            <p className="text-[0.95rem] sm:text-[1rem] leading-[1.6] text-neutral-500 font-normal">
              We help brands bring their vision to life through design,
              storytelling, and strategy, creating impactful experiences that
              engage audiences and strengthen brand identity.
            </p>

            <a
              href="#contact"
              className="group relative inline-flex h-[36px] items-center justify-center overflow-hidden rounded-none bg-black px-5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 h-full w-full translate-y-full bg-[#f26b2c] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative z-10 block h-4 overflow-hidden">
                <span className="block transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  Learn More
                </span>
                <span className="absolute left-0 top-0 block translate-y-full transform transition-transform duration-300 ease-out group-hover:translate-y-0">
                  Learn More
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Lower Row Section: Structured for perfect responsive hierarchy */}
        <div 
          ref={bottomRowRef}
          className="mt-8 sm:mt-10 pt-6 border-t border-neutral-200/70 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 items-center"
        >
          {/* 1. Stats Numbering Column - Stays on TOP on mobile, in middle/left on desktop */}
          <div className="order-1 md:order-2 md:col-span-4 lg:col-span-4 flex items-center gap-6 sm:gap-8 justify-start w-full pb-4 md:pb-0 border-b md:border-b-0 border-neutral-200/60">
            <div>
              <div className="font-display text-[2.2rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-none tracking-tighter text-neutral-900 flex items-center">
                <Counter value={98} />%
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Client happiness rate
              </div>
            </div>

            <div className="h-10 w-px bg-neutral-200" aria-hidden="true" />

            <div>
              <div className="font-display text-[2.2rem] sm:text-[3rem] lg:text-[3.2rem] font-bold leading-none tracking-tighter text-neutral-900 flex items-center">
                <Counter value={300} />+
              </div>
              <div className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Brands transformed
              </div>
            </div>
          </div>

          {/* 2. Mobile Bottom Section / Desktop Columns: Pills on left, Images on right */}
          <div className="order-2 w-full flex items-center justify-between gap-4 md:contents">
            {/* Pill Buttons Div (Left side) */}
            <div className="md:order-1 md:col-span-4 lg:col-span-3 flex flex-col items-start gap-1.5">
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-neutral-300 px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-800 bg-white/60 backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Stacked Images Container (Right side, sized to match tab bar & decreasing dynamically) */}
            <div className="md:order-3 md:col-span-4 lg:col-span-5 flex items-center justify-end lg:justify-center pr-6 xs:pr-8 sm:pr-10 md:pr-0 overflow-visible">
              <div className="relative w-[65px] xs:w-[75px] sm:w-[90px] md:w-[105px] lg:w-[125px] aspect-[1.35/1] flex-shrink-0">
                
                {/* Card 3 (Bottom Layer, slides to the right) */}
                <motion.div 
                  style={{ 
                    x: card3X, 
                    y: card3Y,
                  }}
                  className="absolute inset-0 w-full h-full z-10"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-md cursor-pointer relative bg-neutral-200 border border-black/5"
                  >
                    <Image 
                      src={PROJECT_IMAGES[2]} 
                      alt="Project Preview 3" 
                      fill 
                      className="object-cover" 
                    />
                  </motion.div>
                </motion.div>

                {/* Card 2 (Middle Layer, rises straight up) */}
                <motion.div 
                  style={{ 
                    y: card2Y, 
                  }}
                  className="absolute inset-0 w-full h-full z-20"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-md cursor-pointer relative bg-neutral-200 border border-black/5"
                  >
                    <Image 
                      src={PROJECT_IMAGES[1]} 
                      alt="Project Preview 2" 
                      fill 
                      className="object-cover" 
                    />
                  </motion.div>
                </motion.div>

                {/* Card 1 (Top Layer, slides to the left) */}
                <motion.div 
                  style={{ 
                    x: card1X, 
                    y: card1Y,
                  }}
                  className="absolute inset-0 w-full h-full z-30"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-md cursor-pointer relative bg-neutral-200 border border-black/5"
                  >
                    <Image 
                      src={PROJECT_IMAGES[0]} 
                      alt="Project Preview 1" 
                      fill 
                      className="object-cover" 
                    />
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}