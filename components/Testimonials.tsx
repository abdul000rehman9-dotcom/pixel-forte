"use client";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



interface Testimonial {
  name: string;
  role: string;
  quote: string;
  img: string | StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    name: "James Walker",
    role: "CEO, Summit Digital",
    img: "/images/testimonial-image-big-1.webp", 
    quote: "From concept to execution, their expertise in strategy design and campaigns elevated our brand...",
  },
  {
    name: "Alena Kenter",
    role: "CEO, NovaTech Solutions",
    img: "/images/testimonial-image-big-2.webp", 
    quote: "Their team transformed our vision into a powerful brand experience...",
  },
  {
    name: "Michael Anderson",
    role: "CEO, Horizon Digital",
    img: "/images/testimonial-image-big-3.webp", 
    quote: "Bold design, thoughtful storytelling, and a clear strategic direction helped us stand apart...",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[current];

  return (
    <section className="px-6 sm:px-10 py-12 sm:py-20">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[0.9fr_1fr_90px] gap-10 lg:gap-16 items-stretch">
        
        {/* IMAGE */}
        <div className="relative h-[320px] sm:h-[450px] lg:h-[700px] overflow-hidden rounded-[18px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name} 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTENT */}
        <div className="h-auto lg:h-[700px] flex flex-col justify-center text-left">
          <span className="text-[13px] uppercase tracking-[0.3em] text-neutral-500">
            Testimonial
          </span>

          <h2 className="mt-4 lg:mt-5 max-w-[700px] text-[clamp(28px,4vw,68px)] font-bold leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] lg:tracking-[-0.06em] text-neutral-950">
            Success stories from the brands we’ve helped
          </h2>

          <p className="mt-5 lg:mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-relaxed text-neutral-500">
            See how we help brands grow through smart strategy, bold design, and impactful campaigns that engage audiences and drive lasting results.
          </p>

          <div className="mt-8 lg:mt-auto pb-6 lg:pb-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-[760px] text-[clamp(18px,2.2vw,34px)] font-semibold leading-[1.35] tracking-[-0.03em] lg:tracking-[-0.04em] text-neutral-900"
              >
                &ldquo;{item.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 lg:mt-10">
              <h3 className="text-[20px] lg:text-[22px] font-semibold">{item.name}</h3>
              <p className="text-neutral-500 mt-1 text-sm">{item.role}</p>
              <div className="mt-3 flex gap-1 text-orange-500 text-lg">
                ★★★★★
              </div>
            </div>
          </div>
        </div>

        {/* SIDE SLIDER / RESPONSIVE CONTROLS (DESKTOP ONLY) */}
        <div className="hidden lg:flex h-[700px] flex-col items-center justify-between">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-md bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            ↑
          </button>

          <div className="flex flex-col gap-3">
            {testimonials.map((person, index) => (
              <button
                key={person.name}
                onClick={() => setCurrent(index)}
                className={`relative w-[90px] h-[140px] overflow-hidden rounded-lg transition-all ${
                  current === index ? "scale-105 ring-2 ring-black" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-md bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            ↓
          </button>
        </div>

        {/* Mobile controls - Simple dots & next/prev buttons (MOBILE ONLY) */}
        <div className="flex lg:hidden items-center justify-between gap-4 mt-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-md bg-black text-white flex items-center justify-center font-bold text-lg active:scale-95 transition-transform"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === idx ? "w-6 bg-[#f26b2c]" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-md bg-black text-white flex items-center justify-center font-bold text-lg active:scale-95 transition-transform"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}