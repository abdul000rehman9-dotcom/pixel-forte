'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRight, Plus } from 'lucide-react';

export default function BenefitsBento() {
  const router = useRouter();

  const handleNavigation = (page: string) => {
    router.push(`/${page}`);
    
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#f9f8f4] relative z-30 py-24 px-6 md:px-16 border-t border-black/5">
      <div className="max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <span className="text-[10px] tracking-[0.25em] text-[#f26b2c] font-display font-black uppercase block">
              Benefits
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight tracking-tight text-black uppercase">
              Transforming ideas into measurable success
            </h2>
            <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed max-w-sm">
              We bring creativity and strategy together to turn bold ideas into measurable business success.
            </p>
            <button
              onClick={() => handleNavigation('about')}
              className="group relative inline-flex h-[48px] items-center justify-center overflow-hidden rounded-none bg-black px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 cursor-pointer"
            >
              <span className="absolute inset-0 h-full w-full translate-y-full bg-[#f26b2c] transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 block h-5 overflow-hidden">
                <span className="flex items-center gap-2 h-5 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  <span>Find out more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="flex items-center gap-2 h-5 transition-transform duration-300 ease-out group-hover:-translate-y-full text-white">
                  <span>Find out more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </span>
            </button>
          </div>

          {/* Right Column (Bento Grid) */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1 */}
              <div 
                onClick={() => handleNavigation('services')}
                className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-80 group cursor-pointer relative z-10 overflow-hidden"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase">
                    Multi-industry experience
                  </h3>
                  <p className="font-sans text-xs text-black/60 leading-relaxed">
                    Our diverse portfolio spans industries, giving us a unique perspective to help your brand stand out.
                  </p>
                </div>
                
                <div className="w-full flex justify-center items-center overflow-hidden h-0 opacity-0 group-hover:h-28 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-black/5 relative">
                    <Image
                      src="/images/idotive-home-one-multi-1.webp"
                      alt="Multi-industry"
                      fill
                      sizes="80px"
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <button className="font-display text-[10px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase inline-flex items-center gap-1 cursor-pointer w-fit">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

              {/* Card 2 */}
              <div 
                onClick={() => handleNavigation('services')}
                className="bg-[#fcfbf9] rounded-[24px] p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-80 group cursor-pointer relative z-10 overflow-hidden"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase">
                    End-to-end solutions
                  </h3>
                  <p className="font-sans text-xs text-black/60 leading-relaxed">
                    From brand strategy to campaign execution, we handle every step with creativity and precision.
                  </p>
                </div>
                
                <div className="w-full overflow-hidden h-0 opacity-0 group-hover:h-24 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-black/5 relative">
                    <Image
                      src="/images/img_12.webp" 
                      alt="End-to-end campaign"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <button className="font-display text-[10px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase inline-flex items-center gap-1 cursor-pointer w-fit">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

              {/* Card 3 */}
              <div 
                onClick={() => handleNavigation('services')}
                className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-80 group cursor-pointer relative z-10 overflow-hidden"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase">
                    Strategy meets creativity
                  </h3>
                  <p className="font-sans text-xs text-black/60 leading-relaxed">
                    We combine insight and imagination to design brands that inspire, connect, and perform.
                  </p>
                </div>
                
                <div className="w-full overflow-hidden h-0 opacity-0 group-hover:h-24 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-black/5 relative">
                    <Image
                      src="/images/img_11.webp" 
                      alt="Strategy meets creativity"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <button className="font-display text-[10px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase inline-flex items-center gap-1 cursor-pointer w-fit">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

              {/* Card 4 */}
              <div 
                onClick={() => handleNavigation('services')}
                className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between h-80 group cursor-pointer relative z-10 overflow-hidden"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase">
                    Results that matter
                  </h3>
                  <p className="font-sans text-xs text-black/60 leading-relaxed">
                    Every project is focused on real impact: measurable growth, engagement, and awareness.
                  </p>
                </div>
                
                <div className="w-full overflow-hidden h-0 opacity-0 group-hover:h-24 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-black/5 relative">
                    <Image
                      src="/images/idotive-service-image-two-3.webp" 
                      alt="Results that matter"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover grayscale contrast-125 scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                <button className="font-display text-[10px] font-bold tracking-wider text-black group-hover:text-[#f26b2c] transition-colors duration-300 uppercase inline-flex items-center gap-1 cursor-pointer w-fit">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>

                {/* Explore All Badge */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation('services');
                  }}
                  className="absolute bottom-[-16px] right-[-16px] w-24 h-24 rounded-full border border-black/10 bg-white flex flex-col items-center justify-center text-black hover:bg-black hover:text-white hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-md cursor-pointer select-none z-20"
                >
                  <Plus className="w-5 h-5 text-[#f26b2c] mb-1 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="text-[8px] font-display font-black tracking-widest uppercase">
                    Explore All
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}