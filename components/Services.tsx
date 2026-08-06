"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


// import card1 from "../public/images/card1.webp";
// import card2 from "../public/images/card2.webp";
// import card3 from "../public/images/card3.webp";
// import card4 from "../public/images/card4.webp";

interface Services {
  n: string;
  title: string;
  desc: string;
  img: string;
}
const SERVICES = [
  {
    n: "01",
    title: "Brand strategy",
    desc: "We shape strategies that define your brand and build meaningful audience connections, powered by insight, data, and purposeful storytelling.",
    img: "/images/card1.webp",
  },
  {
    n: "02",
    title: "Visual identity design",
    desc: "We design striking visual identities that reflect your brand's values and personality, combining logos, colors, and typography for a memorable presence.",
    img: "/images/card10.webp",
  },
  {
    n: "03",
    title: "Advertising & campaigns",
    desc: "We craft campaigns that capture attention and drive results, combining creative concepts, compelling visuals, and strategic messaging across all channels.",
    img: "/images/card8.webp",
  },
  {
    n: "04",
    title: "Motion graphics & video",
    desc: "From concept to final cut, we create videos and animations that captivate audiences, build emotion, and amplify your brand message.",
    img: "/images/card7.webp",
  },
];

function Icon({ i }: { i: number }) {
  const stroke = "currentColor";
  if (i === 0)
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke={stroke} strokeWidth="1.2">
        <circle cx="20" cy="24" r="10" /><circle cx="30" cy="24" r="10" />
      </svg>
    );
  if (i === 1)
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke={stroke} strokeWidth="1.2">
        <rect x="10" y="14" width="20" height="20" transform="rotate(15 20 24)" />
        <rect x="18" y="14" width="20" height="20" transform="rotate(-15 28 24)" />
      </svg>
    );
  if (i === 2)
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke={stroke} strokeWidth="1.2">
        <rect x="10" y="10" width="20" height="20" />
        <circle cx="32" cy="32" r="8" />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke={stroke} strokeWidth="1.2">
      <polygon points="24,8 40,18 40,30 24,40 8,30 8,18" />
    </svg>
  );
}

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#f4f1ea] py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs tracking-[0.3em] text-neutral-500 uppercase">Our Services</p>
        <h2 className="mt-4 text-center font-serif text-5xl md:text-6xl text-neutral-900 leading-[1.05]">
          Where creative thinking meets<br />strategic brand impact
        </h2>

        <div className="mt-16" style={{ perspective: "2000px" }}>
          {SERVICES.map((s, i) => {
            const isHovered = active === i;
            
            return (
              <div
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="relative border-b border-neutral-300/60 last:border-b-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence initial={false}>
                  {isHovered && (
                    <motion.div
                      initial={{ height: 0, rotateX: -90, opacity: 0 }}
                      animate={{ 
                        height: 280, 
                        rotateX: 0, 
                        opacity: 1,
                        transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] } 
                      }}
                      exit={{ 
                        height: 0, 
                        rotateX: -90, 
                        opacity: 0,
                        transition: { duration: 0.4, ease: [0.55, 0.055, 0.675, 0.19] }
                      }}
                      style={{ 
                        transformOrigin: "top center", 
                        transformStyle: "preserve-3d" 
                      }}
                      className="overflow-hidden relative w-full z-10"
                    >
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                      <motion.div 
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{
                    backgroundColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
                    rotateX: isHovered ? -8 : 0,
                    y: isHovered ? -2 : 0,
                    boxShadow: isHovered 
                      ? "0 20px 40px -15px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)" 
                      : "0 0px 0px rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                  style={{ 
                    transformOrigin: "top center", 
                    transformStyle: "preserve-3d",
                    zIndex: isHovered ? 20 : 1
                  }}
                  className="grid grid-cols-12 items-center gap-6 px-8 py-10 transition-colors duration-300 relative"
                >
                  <div className="col-span-12 md:col-span-5 flex items-center gap-6">
                    <span className="text-neutral-500 text-lg font-mono">{s.n}</span>
                    <span className="h-px w-8 bg-neutral-300" />
                    <h3 className="font-serif text-2xl md:text-3xl text-neutral-900 tracking-tight">{s.title}</h3>
                  </div>
                  
                  <p className="col-span-12 md:col-span-6 text-sm leading-relaxed text-neutral-600 font-normal">
                    {s.desc}
                  </p>
                  
                  <div className="col-span-12 md:col-span-1 flex justify-end text-neutral-800">
                    <motion.div
                      animate={{ scale: isHovered ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon i={i} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}