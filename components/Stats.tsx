'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function ExperienceCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 1;
    const end = 25;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const animateCount = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Nice Quad ease out
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView]);

  return (
    <span ref={ref} className="font-display font-black text-5xl md:text-6xl text-white block leading-none">
      {count}
    </span>
  );
}

export default function CraftedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // useScroll with start end, end start offset
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animate image values: starts off-screen to the left (-800px) and slides in with 3D flip and rotation
  const x = useTransform(scrollYProgress, [0, 0.45], [-800, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.45], [-60, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.45], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-black text-white py-24 md:py-32 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Subtle orange glow background */}
      <div className="absolute top-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-[#f26b2c]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography and stats */}
        <div className="lg:col-span-7 text-left space-y-8">
          <div>
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] tracking-[0.25em] text-[#f26b2c] font-sans font-bold uppercase block mb-3"
            >
              OUR MISSION
            </motion.span>
            
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-medium text-2.5xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] sm:leading-[1.1] max-w-2xl uppercase"
            >
              Every step carefully crafted to push your brand forward with purpose
            </motion.h2>
          </div>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm text-white/60 leading-relaxed max-w-lg"
          >
            We design meaningful brand experiences that inspire connection and drive growth. Through creativity and strategy, we help brands stand out, engage their audience, and move confidently toward the future.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden rounded-none bg-white px-8 text-xs font-bold uppercase tracking-widest text-black transition-colors duration-300 cursor-pointer border-none">
              {/* Orange Hover Effect */}
              <span className="absolute inset-0 h-full w-full translate-y-full bg-[#f26b2c] transition-transform duration-300 ease-out group-hover:translate-y-0" />

              {/* Text Sliding Wrapper */}
              <span className="relative z-10 block h-4 overflow-hidden">
                <span className="block transform transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:text-white">
                  View our method
                </span>
                <span className="absolute left-0 top-0 block translate-y-full transform transition-transform duration-300 ease-out group-hover:translate-y-0 text-white">
                  View our method
                </span>
              </span>
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 max-w-md"
          >
            {/* Stat 1 */}
            <div className="flex flex-col gap-3">
              {/* Avatar Cluster */}
              <div className="flex items-center -space-x-3">
                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden animate-[pulse_3s_infinite]">
                  <Image 
                    fill 
                    className="object-cover" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                    alt="Avatar 1" 
                    sizes="32px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden animate-[pulse_3s_infinite_100ms]">
                  <Image 
                    fill 
                    className="object-cover" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                    alt="Avatar 2" 
                    sizes="32px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full border border-black overflow-hidden animate-[pulse_3s_infinite_200ms]">
                  <Image 
                    fill 
                    className="object-cover" 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" 
                    alt="Avatar 3" 
                    sizes="32px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f26b2c] border border-black flex items-center justify-center text-[10px] font-bold text-white shadow-md relative z-10">
                  +
                </div>
              </div>
              <div>
                <span className="font-display font-black text-xl md:text-2xl text-white block">
                  4.9 ★
                </span>
                <span className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest block mt-0.5">
                  Happy Clients
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-end">
              <div className="flex items-baseline gap-1">
                <ExperienceCounter />
                <span className="w-6 h-6 rounded-full bg-[#f26b2c] flex items-center justify-center text-xs font-bold text-white select-none shadow-md">
                  +
                </span>
              </div>
              <span className="font-sans text-[10px] font-bold text-white/50 uppercase tracking-widest block mt-2">
                Years of Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Beautiful tall vertical showcase image */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="block lg:hidden relative aspect-[4/3] sm:aspect-[16/9] rounded-[24px] overflow-hidden border border-white/10 bg-zinc-900 shadow-xl">
            <Image
              src="/images/idotive-service-image-two-p-1080.webp"
              alt="The Journey Visual representation"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </div>

          <motion.div
            style={{ 
              x, 
              rotateY,
              rotate: rotateZ,
              scale,
              opacity, 
              transformPerspective: 1200 
            }}
            className="hidden lg:block relative aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl will-change-transform"
          >
            {/* Corrected path: Removed 'public' and fixed backslashes for Next.js */}
            <Image
              src="/images/idotive-service-image-two-p-1080.webp"
              alt="The Journey Visual representation"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}