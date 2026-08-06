"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

const AVATARS = [
  { src: "/images/idotive-home-athour-1.webp" },
  { src: "/images/idotive-home-athour-2.webp" },
  { src: "/images/idotive-home-athour-3.webp" },
];

const PILLS = ["Strategy", "Storytelling", "Digital thinking"];

const PROJECT_IMAGES = [
  "/images/img_12.webp",
  "/images/img_6.webp",
  "/images/img_7.webp",
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let animated = false;
    let controls: any;

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
        if (controls) controls.stop();
        node.textContent = "0";
      }
    });

    return () => {
      unsubscribe();
      if (controls) controls.stop();
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth dampening setup
  const springConfig = { damping: 24, stiffness: 80 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  const rotateValue = useTransform(smoothProgress, [0, 1], [0, 240]);

  const textOpacity1 = useTransform(scrollYProgress, [0.15, 0.28], ["#d4d4d8", "#171717"]);
  const textOpacity2 = useTransform(scrollYProgress, [0.28, 0.42], ["#d4d4d8", "#171717"]);
  const textOpacity3 = useTransform(scrollYProgress, [0.42, 0.55], ["#d4d4d8", "#171717"]);

  // =========================================================================
  // ABSOLUTE FIX: Synchronized entry, hold, and exit matching video 1
  // =========================================================================

  // Card 1 (Left Card)
  // Enters flat/stacked from bottom, fans out cleanly in center, then contracts back
  const card1X = useTransform(smoothProgress, [0.1, 0.45, 0.8], [-15, -125, -15]);
  const card1Y = useTransform(smoothProgress, [0.1, 0.45, 0.8], [140, 0, 140]);
  const card1RotateZ = useTransform(smoothProgress, [0.1, 0.45, 0.8], [-3, -12, -3]);
  const card1RotateY = useTransform(smoothProgress, [0.1, 0.45, 0.8], [12, 26, 12]); 
  const card1RotateX = useTransform(smoothProgress, [0.1, 0.45, 0.8], [15, 0, 15]);

  // Card 2 (Center Card)
  const card2Y = useTransform(smoothProgress, [0.1, 0.45, 0.8], [140, -6, 140]);
  const card2Scale = useTransform(smoothProgress, [0.1, 0.45, 0.8], [0.96, 1.05, 0.96]);
  const card2RotateX = useTransform(smoothProgress, [0.1, 0.45, 0.8], [15, 0, 15]);

  // Card 3 (Right Card)
  const card3X = useTransform(smoothProgress, [0.1, 0.45, 0.8], [15, 125, 15]);
  const card3Y = useTransform(smoothProgress, [0.1, 0.45, 0.8], [140, 0, 140]);
  const card3RotateZ = useTransform(smoothProgress, [0.1, 0.45, 0.8], [3, 12, 3]);
  const card3RotateY = useTransform(smoothProgress, [0.1, 0.45, 0.8], [-12, -26, -12]); 
  const card3RotateX = useTransform(smoothProgress, [0.1, 0.45, 0.8], [15, 0, 15]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-[#faf8f3] px-6 pt-20 pb-16 sm:px-12 lg:px-20 lg:pt-28 lg:pb-24 z-10"
    >
      {/* 3D Rotating Right Side Graphic - Hidden on Mobile to prevent overlap */}
      <motion.div
        style={{ rotate: rotateValue }}
        className="hidden lg:block absolute right-[-4%] top-[4%] z-0 pointer-events-none lg:w-[480px] lg:h-[480px] xl:w-[550px] xl:h-[550px]"
      >
        <Image
          src="/icons/idotive-icon-8.png"
          alt="Rotating Star Graphic"
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1550px]">
        {/* Mobile/Tablet Rotating Star Graphic - positioned above the heading as a separate block-level element */}
        <div className="block lg:hidden mb-6 text-left">
          <motion.div
            style={{ rotate: rotateValue }}
            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] relative pointer-events-none"
          >
            <Image
              src="/icons/idotive-icon-8.png"
              alt="Rotating Star Graphic"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
          About Us
        </div>

        <div className="max-w-full lg:max-w-[60%] xl:max-w-[55%]">
          <h2 className="font-display text-[1.5rem] sm:text-[2rem] lg:text-[2.6rem] font-bold leading-[1.2] tracking-[-0.02em]">
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
                    alt="Team preview"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <button className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#ff6b35] text-white text-lg sm:text-xl font-light hover:scale-105 transition-transform shadow-sm">
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

        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] items-end pt-8 border-t border-neutral-200/70">
          <div className="flex flex-wrap gap-1.5 max-w-[300px]">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-700 bg-white/40"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 sm:gap-12 lg:px-4">
            <div>
              <div className="font-display text-[2.8rem] sm:text-[3.5rem] font-bold leading-none tracking-tighter text-neutral-900 flex items-center">
                <Counter value={98} />%
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Client happiness rate
              </div>
            </div>

            <div className="h-10 w-px bg-neutral-200" />

            <div>
              <div className="font-display text-[2.8rem] sm:text-[3.5rem] font-bold leading-none tracking-tighter text-neutral-900 flex items-center">
                <Counter value={300} />+
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                Brands transformed
              </div>
            </div>
          </div>

          {/* 3D Viewport wrapper */}
          <div 
            className="flex items-center justify-start lg:justify-end w-full lg:w-auto min-w-0 sm:min-w-[380px] h-36 relative overflow-visible px-4"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            <div className="absolute bottom-0 right-4 flex items-end justify-center h-32 overflow-visible" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative flex items-end justify-center w-[140px] h-[95px] overflow-visible" style={{ transformStyle: "preserve-3d" }}>
                
                {/* Card 1 - Left */}
                <motion.div 
                  style={{ 
                    x: card1X, 
                    y: card1Y, 
                    rotate: card1RotateZ,
                    rotateY: card1RotateY,
                    rotateX: card1RotateX,
                    originY: 1, 
                    originX: 0.5 
                  }}
                  className="absolute w-[130px] h-[90px] z-10 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -25, rotate: 0, rotateY: 0, rotateX: 0, scale: 1.15, zIndex: 50 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-xl cursor-pointer transform-gpu"
                  >
                    <Image src={PROJECT_IMAGES[0]} alt="Project Preview 1" fill className="object-cover" />
                  </motion.div>
                </motion.div>

                {/* Card 2 - Center */}
                <motion.div 
                  style={{ 
                    y: card2Y, 
                    scale: card2Scale,
                    rotateX: card2RotateX,
                    originY: 1, 
                    originX: 0.5 
                  }}
                  className="absolute w-[130px] h-[90px] z-20 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -25, scale: 1.15, zIndex: 50 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-2xl cursor-pointer transform-gpu"
                  >
                    <Image src={PROJECT_IMAGES[1]} alt="Project Preview 2" fill className="object-cover" />
                  </motion.div>
                </motion.div>

                {/* Card 3 - Right */}
                <motion.div 
                  style={{ 
                    x: card3X, 
                    y: card3Y, 
                    rotate: card3RotateZ,
                    rotateY: card3RotateY,
                    rotateX: card3RotateX,
                    originY: 1, 
                    originX: 0.5 
                  }}
                  className="absolute w-[130px] h-[90px] z-10 flex-shrink-0"
                >
                  <motion.div
                    whileHover={{ y: -25, rotate: 0, rotateY: 0, rotateX: 0, scale: 1.15, zIndex: 50 }}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="w-full h-full overflow-hidden rounded-none shadow-lg cursor-pointer transform-gpu"
                  >
                    <Image src={PROJECT_IMAGES[2]} alt="Project Preview 3" fill className="object-cover" />
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