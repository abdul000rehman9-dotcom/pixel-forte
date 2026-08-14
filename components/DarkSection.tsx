'use client';

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

type CardData = {
  image: string;
  title: string;
  description: string;
};

const CARDS: CardData[] = [
  {
    image: "/images/DarkSection1.webp", 
    title: "Multi-industry focus",
    description: "We design brands for all industries. Our creative scope ranges from fashion to high tech and beyond.",
  },
  {
    image: "/images/DarkSection2.webp", 
    title: "Tailored creative execution",
    description: "We merge insight and imagination to craft bespoke physical and digital assets.",
  },
  {
    image: "/images/Darksection3.webp", 
    title: "Results-driven design",
    description: "We create performance-driven designs. Every pixel is shaped to deliver measurable outcomes.",
  },
];

const CARD_EASE = [
  (t: number) => 1 - Math.pow(1 - t, 4),
  (t: number) => 1 - Math.pow(1 - t, 3),
  (t: number) => t * t * (3 - 2 * t),
  (t: number) => t * t * t,
];

function frameMap(index: number, total: number) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  if (isFirst) {
    return {
      input:   [0,     0.05,   0.20,   0.35,  1],
      y:       ["9vh", "9vh",  "-30vh","-64vh","-64vh"],
      z:       [0,     0,      -500,   -1180, -1180],
      scale:   [0.95,  0.95,   0.82,   0.72,  0.72],
      rotateX: [0,     0,      -20,    -31,   -31],
      opacity: [1,     1,      0.6,    0,     0],
      blur:    [0,     0,      6,      12,    12],
    };
  }

  const start = index * 0.30;
  const settled = start + 0.15;
  const exit = start + 0.30;
  const gone = start + 0.45;

  if (isLast) {
    return {
      input:   [0,       start,   settled, 1],
      y:       ["121vh", "121vh", "9vh",   "9vh"],
      z:       [560,     560,     0,       0],
      scale:   [1.38,    1.38,    0.95,    0.95],
      rotateX: [64,      64,      0,       0],
      opacity: [0,       0,       1,       1],
      blur:    [0,       0,       0,       0],
    };
  }

  return {
    input:   [0,       start,   settled, exit,   gone,    1],
    y:       ["121vh", "121vh", "9vh",   "-20vh","-50vh", "-50vh"],
    z:       [560,     560,     0,      -400,   -1080,   -1080],
    scale:   [1.38,    1.38,    0.95,    0.85,   0.73,    0.73],
    rotateX: [64,      64,      0,      -15,    -30,     -30],
    opacity: [0,       0,       1,       0.7,    0,       0],
    blur:    [0,       0,       0,       3,      11,      11],
  };
}

function Card({
  data,
  index,
  total,
  progress,
}: {
  data: CardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const map = frameMap(index, total);
  const ease = CARD_EASE[index % CARD_EASE.length];

  const y       = useTransform(progress, map.input, map.y,       { ease });
  const z       = useTransform(progress, map.input, map.z,       { ease });
  const scale   = useTransform(progress, map.input, map.scale,   { ease });
  const rotateX = useTransform(progress, map.input, map.rotateX, { ease });
  const opacity = useTransform(progress, map.input, map.opacity, { ease });
  const blurNum = useTransform(progress, map.input, map.blur,    { ease });

  const filter = useTransform(blurNum, (v: number) => `blur(${v}px)`);

  return (
    <motion.article
      style={{
        y,
        z,
        scale,
        rotateX,
        opacity,
        filter,
        zIndex: index + 1,
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50%",
      }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <div className="w-[92vw] sm:w-[88vw] md:w-[min(67vw,1280px)] max-w-full rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-white/5">
        <div className="aspect-[1.93/1] overflow-hidden rounded-xl relative w-full bg-neutral-900">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 1280px) 92vw, 1280px"
            className="object-cover"
            draggable={false}
          />
        </div>
        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 items-start">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">
            {data.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-700">
            {data.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function DarkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black block"
      style={{ height: "400vh" }} 
    >
      {/* This sticky container will pin the cards in the viewport while scrolling */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => (
            <Card
              key={i}
              data={card}
              index={i}
              total={CARDS.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}