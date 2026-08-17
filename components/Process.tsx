'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BenefitsBento() {
  const router = useRouter();

  const handleNavigation = (page: string) => {
    router.push(`/${page}`);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f9f8f4] py-20 px-6 md:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ================= TOP ROW: HEADER & TOP 2 CARDS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Header & Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between py-2"
          >
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[42px] leading-[1.15] text-black tracking-tight">
                Transforming ideas into measurable success
              </h2>
              <p className="font-sans text-xs md:text-sm text-black/60 leading-relaxed max-w-md">
                We bring creativity and strategy together to turn bold ideas into measurable business success. From concept to execution, every design and campaign is built to inspire, engage, and deliver real results.
              </p>
              <div>
                <button
                  onClick={() => handleNavigation('about')}
                  className="bg-black text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#f26b2c] transition-colors duration-300 cursor-pointer"
                >
                  Find Out More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 1: Multi-industry experience */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleNavigation('services')}
            className="bg-white rounded-[20px] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[360px] group cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-black group-hover:text-[#f26b2c] transition-colors duration-300">
                Multi-industry experience
              </h3>
              <p className="font-sans text-xs text-black/60 leading-relaxed">
                Our diverse portfolio spans industries, giving us a unique perspective to help your brand stand out.
              </p>
            </div>

            {/* Dynamic Image Container (Always visible on mobile, hover-only on desktop) */}
            <div className="w-full flex justify-center items-center overflow-hidden h-24 opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-24 lg:group-hover:opacity-100 transition-all duration-500 my-2">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-black/5 relative">
                <Image
                  src="/images/idotive-home-one-multi-1.webp"
                  alt="Multi-industry"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#f26b2c] transition-colors" />
              <span className="font-display text-[11px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] uppercase transition-colors">
                Learn More
              </span>
            </div>
          </motion.div>

          {/* Card 2: End-to-end solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleNavigation('services')}
            className="bg-white rounded-[20px] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[360px] group cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-black group-hover:text-[#f26b2c] transition-colors duration-300">
                End-to-end solutions
              </h3>
              <p className="font-sans text-xs text-black/60 leading-relaxed">
                From brand strategy to campaign execution, we handle every step with creativity and precision.
              </p>
            </div>

            {/* Dynamic Image Container */}
            <div className="w-full overflow-hidden h-24 opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-24 lg:group-hover:opacity-100 transition-all duration-500 my-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/images/img_12.webp" 
                  alt="End-to-end campaign"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#f26b2c] transition-colors" />
              <span className="font-display text-[11px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] uppercase transition-colors">
                Learn More
              </span>
            </div>
          </motion.div>

        </div>

        {/* ================= BOTTOM ROW: AVATARS, BOTTOM 2 CARDS & EXPLORE ALL ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          
          {/* Card 3: Strategy meets creativity */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleNavigation('services')}
            className="order-1 lg:order-2 bg-white rounded-[20px] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[360px] group cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-black group-hover:text-[#f26b2c] transition-colors duration-300">
                Strategy meets creativity
              </h3>
              <p className="font-sans text-xs text-black/60 leading-relaxed">
                We combine insight and imagination to design brands that inspire, connect, and perform with measurable results.
              </p>
            </div>

            {/* Dynamic Image Container */}
            <div className="w-full overflow-hidden h-24 opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-24 lg:group-hover:opacity-100 transition-all duration-500 my-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/images/img_11.webp" 
                  alt="Strategy meets creativity"
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#f26b2c] transition-colors" />
              <span className="font-display text-[11px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] uppercase transition-colors">
                Learn More
              </span>
            </div>
          </motion.div>

          {/* Card 4: Results that matter */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleNavigation('services')}
            className="order-2 lg:order-3 bg-white rounded-[20px] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[360px] group cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-black group-hover:text-[#f26b2c] transition-colors duration-300">
                Results that matter
              </h3>
              <p className="font-sans text-xs text-black/60 leading-relaxed">
                Every project is focused on real impact: measurable growth, engagement, and brand awareness.
              </p>
            </div>

            {/* Dynamic Image Container */}
            <div className="w-full overflow-hidden h-24 opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-24 lg:group-hover:opacity-100 transition-all duration-500 my-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/images/idotive-service-image-two-3.webp" 
                  alt="Results that matter"
                  fill
                  className="object-cover grayscale contrast-125 scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#f26b2c] transition-colors" />
              <span className="font-display text-[11px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] uppercase transition-colors">
                Learn More
              </span>
            </div>
          </motion.div>

          {/* Bottom Avatars / Stats (Placed at bottom left on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:order-1 flex flex-col justify-end py-4"
          >
            <div className="space-y-3">
              <div className="flex items-center -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative shadow-md bg-neutral-200">
                  <Image src="/images/idotive-home-athour-1.webp" alt="Member 1" fill sizes="48px" className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative shadow-md bg-neutral-200">
                  <Image src="/images/idotive-home-athour-2.webp" alt="Member 2" fill sizes="48px" className="object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative shadow-md bg-neutral-200">
                  <Image src="/images/idotive-home-athour-3.webp" alt="Member 3" fill sizes="48px" className="object-cover" />
                </div>
              </div>
              <div className="pt-2">
                <span className="font-display font-extrabold text-3xl text-black block leading-none">60+</span>
                <span className="text-[10px] font-display font-bold tracking-widest text-black/50 uppercase block mt-1.5">
                  Expert Members
                </span>
              </div>
            </div>
          </motion.div>

          {/* Explore All Circle Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ amount: 0.25, once: false }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="order-4 lg:order-4 flex justify-center items-center py-4"
          >
            <div
              onClick={() => handleNavigation('services')}
              className="w-40 h-40 md:w-44 md:h-44 rounded-full border border-black/20 bg-transparent flex flex-col items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer select-none group"
            >
              <Plus className="w-6 h-6 text-black group-hover:text-white mb-2 group-hover:rotate-90 transition-transform duration-300" />
              <span className="text-[10px] font-display font-extrabold tracking-widest uppercase">
                Explore All
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
