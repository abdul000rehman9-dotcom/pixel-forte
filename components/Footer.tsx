"use client";

import React from 'react';
import Link from 'next/link'; // Native Next.js Link
import { ArrowUpRight } from 'lucide-react';

// Local PageType definition
type PageType =
  | 'home'
  | 'about'
  | 'team'
  | 'blog'
  | 'blog-post'
  | 'contact'
  | 'services-one'
  | 'services-two'
  | 'services-three'
  | 'portfolio-one'
  | 'portfolio-two'
  | 'portfolio-three'
  | 'portfolio-details'
  | 'pricing'
  | 'license'
  | 'style-guide'
  | '404'
  | (string & {});

export default function Footer() {
  const sitemap = [
    {
      title: 'Company',
      links: [
        { label: 'Home', page: 'home' as PageType },
        { label: 'About', page: 'about' as PageType },
        { label: 'Team', page: 'team' as PageType },
        { label: 'Blog', page: 'blog' as PageType },
        { label: 'Blog post', page: 'blog-post' as PageType },
        { label: 'Contact', page: 'contact' as PageType }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Service one', page: 'services-one' as PageType },
        { label: 'Service two', page: 'services-two' as PageType },
        { label: 'Service three', page: 'services-three' as PageType }
      ]
    },
    {
      title: 'Portfolio',
      links: [
        { label: 'Portfolio one', page: 'portfolio-one' as PageType },
        { label: 'Portfolio two', page: 'portfolio-two' as PageType },
        { label: 'Portfolio three', page: 'portfolio-three' as PageType },
        { label: 'Portfolio details', page: 'portfolio-details' as PageType }
      ]
    },
    {
      title: 'Utility',
      links: [
        { label: 'Pricing', page: 'pricing' as PageType },
        { label: 'License', page: 'license' as PageType },
        { label: 'Style guide', page: 'style-guide' as PageType }
      ]
    }
  ];

  return (
    <footer className="w-full bg-black text-cream pt-20 pb-12 px-6 md:px-16 overflow-hidden relative border-t border-charcoal/30">
      {/* Footer Top */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-cream/10">
        
        {/* Contact Column */}
        <div className="md:col-span-5 flex flex-col justify-between gap-8 text-left">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="px-2.5 py-1 bg-charcoal rounded-md flex items-center justify-center border border-cream/10">
                <span className="font-display font-black text-xs text-[#f26b2c] tracking-tighter">Pf.</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-cream">
                pixel-forte
              </span>
            </div>
            
            <span className="text-[10px] tracking-[0.25em] text-cream/40 font-display font-semibold uppercase block mb-2">
              Mail:
            </span>
            <a 
              href="mailto:info@example.com" 
              className="font-display text-2xl font-medium text-cream hover:text-[#f26b2c] transition-colors duration-200 block mb-6"
            >
              info@example.com
            </a>

            <span className="text-[10px] tracking-[0.25em] text-cream/40 font-display font-semibold uppercase block mb-2">
              Call:
            </span>
            <a 
              href="tel:+18884567890" 
              className="font-display text-xl font-medium text-cream hover:text-[#f26b2c] transition-colors duration-200 block"
            >
              (888) 456 7890
            </a>
          </div>

          {/* Socials Block */}
          <div className="flex flex-col gap-2.5">
            {['Dribbble', 'Instagram', 'Facebook'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-display text-lg font-medium tracking-tight hover:text-[#f26b2c] transition-colors duration-200 flex items-center gap-1 w-fit group"
              >
                <span>{platform}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid Column */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
          {sitemap.map((col, cIdx) => (
            <div key={cIdx} className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.25em] text-cream/40 font-display font-semibold uppercase">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.page === 'home' ? '/' : `/${link.page}`}
                      className="font-sans text-sm text-cream/70 hover:text-[#f26b2c] transition-colors duration-200 text-left cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10 text-left">
        <div>
          <p className="font-sans text-xs text-cream/40 leading-relaxed">
            Designed by <span className="text-cream/70 font-medium">Flow Design Agency</span>. Powered by <span className="text-cream/70 font-medium">Webflow</span>.
          </p>
          <p className="font-sans text-[10px] text-cream/30 mt-1">
            © {new Date().getFullYear()} Pixel-Forte. All rights reserved.
          </p>
        </div>

        {/* Address Info */}
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#f26b2c] animate-ping" />
          <span className="font-sans text-xs text-cream/60">
            123 Riverbend, California 94025, USA
          </span>
        </div>
      </div>

      {/* Superlarge typography accent matching the high-end creative layout */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none translate-y-12 translate-x-12 opacity-5 flex items-end">
        <svg 
          viewBox="0 0 100 100" 
          className="w-48 h-48 animate-spin text-cream/30 mr-4" 
          style={{ animationDuration: '20s' }}
        >
          <path d="M50 0 L55 35 L90 20 L65 50 L100 50 L65 50 L90 80 L55 65 L50 100 L45 65 L10 80 L35 50 L0 50 L35 50 L10 20 L45 35 Z" fill="currentColor"/>
        </svg>
        <span className="font-display font-extrabold text-[12vw] leading-none text-cream/20 tracking-tighter uppercase">
          Agency
        </span>
      </div>
    </footer>
  );
}