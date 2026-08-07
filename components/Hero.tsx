"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import rotateIcon from "@/public/icons/idotive-icon-8.svg";

interface CardItem {
  id: number;
  title: string;
  img: string;
  type: "image" | "video";
}

function LazyVideo({ src, className, isPriority = false }: { src: string; className?: string; isPriority?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("canplay", playVideo, { once: true });
      video.addEventListener("loadeddata", playVideo, { once: true });
      playVideo();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload={isPriority ? "auto" : "metadata"}
      className={className}
    />
  );
}

function HeroCard({ card, index, isMobile = false }: { card: CardItem; index: number; isMobile?: boolean }) {
  const isPrimarySet = index < 15;
  const isAboveFold = index < 7;

  if (isMobile) {
    return (
      <div className="w-full rounded-[3px] bg-white p-2 shadow-sm border border-black/5 relative">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[1px] bg-gray-100 relative">
          {card.type === "video" ? (
            <LazyVideo src={card.img} isPriority={index < 4} className="h-full w-full object-cover" />
          ) : (
            <Image
              src={card.img}
              alt={card.title}
              fill
              sizes="(max-width: 640px) 50vw, 240px"
              className="object-cover"
              priority={index < 2}
              referrerPolicy="no-referrer"
            />
          )}
        </div>
        <p className="mt-2 text-center text-[11px] font-bold text-black truncate px-1 uppercase tracking-tight">
          {card.title}
        </p>
      </div>
    );
  }

  return (
    <div className="animated-card w-[280px] flex-shrink-0 rounded-[3px] bg-white p-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-black/5 will-change-transform transition-transform duration-300 ease-out hover:scale-105 hover:z-50">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-[1px] bg-gray-100 relative">
        {card.type === "video" ? (
          <LazyVideo src={card.img} isPriority={isPrimarySet} className="h-full w-full object-cover pointer-events-none" />
        ) : (
          <Image
            src={card.img}
            alt={card.title}
            fill
            sizes="280px"
            className="object-cover pointer-events-none"
            priority={isAboveFold}
            referrerPolicy="no-referrer"
          />
        )}
      </div>
      <p className="mt-3 text-center font-sans text-xs font-bold tracking-tight text-black uppercase">
        {card.title}
      </p>
    </div>
  );
}

const CARDS_DATA: CardItem[] = [
  { id: 1, title: "Creative solutions", img: "/images/card1.webp", type: "image" },
  { id: 2, title: "Digital craftsmanship", img: "/videos/card2.mp4", type: "video" },
  { id: 3, title: "Creative vision", img: "/videos/card3.mp4", type: "video" },
  { id: 4, title: "Campaign concepts", img: "/videos/card4.mp4", type: "video" },
  { id: 5, title: "Interactive design", img: "/videos/card5.mp4", type: "video" },
  { id: 6, title: "Experience-led design", img: "/images/card6.webp", type: "image" },
  { id: 7, title: "Brand Identity", img: "/images/card7.webp", type: "image" },
  { id: 8, title: "Motion Graphics", img: "/images/card8.webp", type: "image" },
  { id: 9, title: "Web Development", img: "/videos/card9.mp4", type: "video" },
  { id: 10, title: "Product Design", img: "/images/card10.webp", type: "image" },
  { id: 11, title: "Art Direction", img: "/videos/card12.mp4", type: "video" },
  { id: 12, title: "UI/UX Strategy", img: "/videos/card11.mp4", type: "video" },
  { id: 13, title: "Typography", img: "/videos/card13.mp4", type: "video" },
  { id: 14, title: "Visual Arts", img: "/images/card14.webp", type: "image" },
  { id: 15, title: "3D Modeling", img: "/videos/card15.mp4", type: "video" },
];


export default function Hero() {
  const mobileCards = CARDS_DATA.slice(0, 4);

  const headlineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const duplicatedCards = [...CARDS_DATA, ...CARDS_DATA, ...CARDS_DATA];

  useEffect(() => {
    if (!headlineRef.current) return;
    const chars = headlineRef.current.querySelectorAll<HTMLElement>("[data-char]");

    gsap.fromTo(
      chars,
      { yPercent: 25, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.015,
      }
    );

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.98, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }

    const slider = sliderRef.current;
    if (slider) {
      const cards = slider.querySelectorAll<HTMLElement>(".animated-card");
      // 280px width + 24px gap = 304px per card step
      const cardStep = 304;
      const singleSetWidth = CARDS_DATA.length * cardStep;

      const animation = gsap.to(slider, {
        x: `-=${singleSetWidth}`,
        duration: 32,
        ease: "none",
        repeat: -1,
        onUpdate: function () {
          const sliderX = (gsap.getProperty(slider, "x") as number) || 0;
          const viewportWidth = window.innerWidth;
          const centerX = viewportWidth / 2;

          cards.forEach((card, i) => {
            // Pure mathematical calculation - NO getBoundingClientRect() to avoid layout thrashing!
            const cardLeft = sliderX + i * cardStep;
            const cardCenter = cardLeft + 140;

            const distanceFromCenter = (cardCenter - centerX) / (viewportWidth * 0.55);
            const yOffset = Math.pow(Math.abs(distanceFromCenter), 2) * 150;
            const dynamicRotation = distanceFromCenter * 26;

            gsap.set(card, {
              y: yOffset,
              rotation: dynamicRotation,
            });
          });
        },
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  const renderWord = (word: string, baseDelay: number) =>
    word.split("").map((ch, i) => (
      <span
        key={`${word}-${i}`}
        className="inline-block overflow-visible align-bottom pb-3"
        style={{ lineHeight: "1.1" }}
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
      <span className="flex flex-wrap items-end justify-center gap-x-[0.28em] overflow-visible">
        {words.map((w, i) => (
          <span key={i} className="inline-flex overflow-visible">
            {renderWord(w, i * 0.04)}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-[#fbf9f4] pt-20 pb-12 px-4 text-center select-none gap-2">
      <div
        ref={headlineRef}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full overflow-visible"
      >
        <h1 className="text-5xl font-bold tracking-tight text-black md:text-7xl lg:text-8xl font-sans leading-[1.1] py-2 overflow-visible">
          <span className="block overflow-visible">{renderLine("Branding through")}</span>
          <span className="block mt-1 overflow-visible">{renderLine("brilliant design")}</span>
        </h1>

        <a
          ref={buttonRef}
          href="#contact"
          className="group relative inline-flex h-[42px] items-center justify-center overflow-hidden rounded-none bg-black px-6 text-[12px] font-bold uppercase tracking-wider text-white transition-colors duration-300 mt-4"
        >
          <span className="absolute inset-0 h-full w-full translate-y-full bg-[#f26b2c] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
          <span className="relative z-10 block h-4 overflow-hidden">
            <span className="block transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Let&apos;s Collaborate
            </span>
            <span className="absolute left-0 top-0 block translate-y-full transform transition-transform duration-300 ease-out group-hover:translate-y-0">
              Let&apos;s Collaborate
            </span>
          </span>
        </a>
      </div>

      <div className="hidden md:flex relative w-full overflow-visible mt-8 mb-2 justify-center items-start h-[210px]">
        <div
          ref={sliderRef}
          className="flex gap-6 absolute left-0 items-start will-change-transform"
          style={{ width: `${duplicatedCards.length * 304}px` }}
        >
          {duplicatedCards.map((card, index) => (
            <HeroCard key={`${card.id}-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>

      <div className="md:hidden grid grid-cols-2 gap-4 w-full max-w-sm mx-auto mt-2 mb-4">
        {mobileCards.map((card, index) => (
          <HeroCard key={card.id} card={card} index={index} isMobile />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-1 mt-10 clear-both">
        <Image
          src={rotateIcon}
          alt="Rotating Icon"
          width={50}
          height={50}
          className="animate-[spin_6s_linear_infinite] object-contain w-10 h-10"
        />
        <p className="text-sm font-medium leading-relaxed text-black/70 max-w-xl md:text-[15px]">
          We turn bold ideas into impactful brand experiences that inspire audiences, evoke emotion,
          and deliver measurable results through creativity and strategic design.
        </p>
      </div>
    </section>
  );
}
