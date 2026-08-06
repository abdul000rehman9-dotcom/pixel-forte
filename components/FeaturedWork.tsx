"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link"; 

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headlineRef.current || !paraRef.current) return;

    const chars = headlineRef.current.querySelectorAll<HTMLElement>("[data-char]");
    
    // FIXED: Reduced translation to avoid giant vertical ghost gaps before reveal
    gsap.set(chars, { yPercent: 40, opacity: 0 });
    gsap.set(paraRef.current, { y: 10, opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            
            tl.to(chars, {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.015,
            });

            tl.to(
              paraRef.current,
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
              },
              "-=0.3"
            );

            observer.disconnect();
          }
        });
      },
      { threshold: 0.01 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderWord = (word: string, baseDelay: number) =>
    word.split("").map((ch, i) => (
      <span
        key={`${word}-${i}`}
        className="inline-block overflow-hidden align-bottom"
        style={{ lineHeight: "0.9" }}
      >
        <span
          data-char
          className="inline-block will-change-transform"
          style={{ animationDelay: `${baseDelay + i * 0.02}s` }}
        >
          {ch}
        </span>
      </span>
    ));

  const renderLine = (line: string) => {
    const words = line.split(" ");
    return (
      <span className="flex flex-wrap items-end justify-center gap-x-[0.2em] overflow-hidden">
        {words.map((w, i) => (
          <span key={i} className="inline-flex overflow-hidden">
            {renderWord(w, i * 0.04)}
          </span>
        ))}
      </span>
    );
  };

  return (
    /* FIXED: Tight block wrapper with precise line height structure to guarantee 0px seams */
    <section 
      ref={sectionRef} 
      id="work" 
      className="bg-[#faf8f3] pt-0 pb-20 mt-0 block relative z-30"
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-0">
        {/* Animated Heading */}
        <h2 
          ref={headlineRef}
          className="text-center font-display text-[14vw] sm:text-[11vw] font-extrabold leading-[0.9] text-black overflow-hidden m-0 p-0 block"
        >
          <span className="block overflow-hidden pt-2">
            {renderLine("Featured work")}
          </span>
        </h2>
        
        <div className="mx-auto my-5 h-8 w-px bg-black/20" />
        
        {/* Animated Paragraph */}
        <p ref={paraRef} className="mx-auto max-w-xl text-center text-black/70 text-sm sm:text-base will-change-transform">
          Discover our standout projects where creativity meets strategy and
          storytelling. Each piece shows how we help brands connect, build
          identity, and achieve results across every platform.
        </p>

        {/* Outer Grid Wrapper */}
        <div className="mt-14 flex flex-col gap-10">
          {/* ROW 1 */}
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <WorkCard
              img="/images/portoflio20one-p-1080.webp"
              tag="Experiential design"
              tags={["Brand guidelines", "Editorial design"]}
              marqueeLabel="Experiential design"
              big
            />
            <WorkCard
              img="/images/img_11.webp"
              tag="Visionary designs"
              tags={["Corporate identity", "Campaign print"]}
              marqueeLabel="Visionary designs"
            />
          </div>

          {/* ROW 2 */}
          <div className="w-full flex justify-center">
            <div className="w-full md:max-w-[75%]">
              <WorkCard
                img="/images/img_12.webp"
                tag="Strategic Brand Systems"
                tags={["Logo System", "Marketing Collateral"]}
                marqueeLabel="Strategic Brands"
                big
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <WorkCard
              img="/images/idotive-portfolio-image-five-p-1080.webp"
              tag="Advertising with edge"
              tags={["Corporate identity", "Campaign print"]}
              marqueeLabel="Advertising campaigns"
            />
            <WorkCard
              img="/images/card14.webp"
              tag="Creative campaigns"
              tags={["Brand identity", "Print design"]}
              marqueeLabel="Interactive campaigns"
              big
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface WorkCardProps {
  img: any;
  tag: string;
  tags: string[];
  marqueeLabel: string;
  big?: boolean;
}

function WorkCard({ img, tag, tags, marqueeLabel, big = false }: WorkCardProps) {
  return (
    <article className="group cursor-pointer w-full">
      <div className={`zoom-wrap relative ${big ? "h-[440px]" : "h-[290px]"} overflow-hidden rounded-2xl bg-neutral-200/50`}>
        <Image
          src={img}
          alt={tag}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
          loading="lazy"
          className="object-cover transition-all duration-500 lg:group-hover:blur-[6px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100">
          <div className="absolute inset-x-0 bg-white py-3.5 shadow-sm transform -translate-y-1/2 top-1/2">
            <div className="marquee">
              <div className="marquee__track text-[11px] font-bold uppercase tracking-widest text-black flex items-center">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="flex items-center gap-3 shrink-0">
                    {marqueeLabel}
                    <span className="h-2 w-2 rounded-full bg-orange-500 inline-block mx-1" />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="z-10 transition-transform duration-500 scale-90 lg:group-hover:scale-100">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white/25 text-white text-xl backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105">
              ↗
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-black">{tag}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600 bg-white/80 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
        <Link href="#" className="text-black text-xl hover:translate-x-1 transition-transform">
          →
        </Link>
      </div>
    </article>
  );
}