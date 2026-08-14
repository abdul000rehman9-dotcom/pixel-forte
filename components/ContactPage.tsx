"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    }
  };

  return (
    <div className="w-full bg-[#f4f1ea] text-black">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[60vh] min-h-[480px] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image - Similar to About page */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/team-page-banner.webp"
            alt="Contact us background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[11px] font-bold tracking-[0.3em] text-white/90 uppercase mb-3"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Contact us
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: MAIN CONTACT POP-UP CARD WITH TRANSPARENT INTERIOR & BACKGROUND PICTURE */}
      <section className="relative py-24 px-6 md:px-16 overflow-hidden flex items-center justify-center min-h-[900px]">
        {/* Nice background image for this section, making the transparent card show through beautifully */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about/about-main.webp"
            alt="Contact section background layout"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay to make text in transparent card fully legible */}
          <div className="absolute inset-0 bg-neutral-950/80" />
        </div>

        {/* Transparent Interior Card with Border */}
        <div className="relative z-10 w-full max-w-5xl border border-white/20 bg-white/5 backdrop-blur-md p-8 md:p-14 text-white shadow-2xl rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <div>
                <span className="text-[10px] tracking-[0.25em] text-[#f26b2c] font-bold uppercase block mb-3">
                  CONVERSATION STARTERS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Let&apos;s craft something memorable
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mt-4">
                  Whether you have an upcoming project, a collaborative proposal, or simply want to learn more about our processes, we&apos;d love to hear from you.
                </p>
              </div>

              {/* Grid of details */}
              <div className="space-y-6">
                {/* Mail details */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/5 text-[#f26b2c] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 font-bold uppercase block">
                      Direct Email
                    </span>
                    <a href="mailto:info@example.com" className="text-sm font-semibold hover:text-[#f26b2c] transition-colors">
                      info@example.com
                    </a>
                    <a href="mailto:careers@example.com" className="text-xs text-white/60 block hover:text-[#f26b2c] transition-colors">
                      careers@example.com
                    </a>
                  </div>
                </div>

                {/* Call details */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/5 text-[#f26b2c] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 font-bold uppercase block">
                      Call Us Directly
                    </span>
                    <a href="tel:+18884567890" className="text-sm font-semibold hover:text-[#f26b2c] transition-colors">
                      +1 (888) 456 7890
                    </a>
                    <p className="text-xs text-white/60">Mon - Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                {/* Location Details */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/5 text-[#f26b2c] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 font-bold uppercase block">
                      Our Studio
                    </span>
                    <p className="text-sm font-semibold">
                      123 Riverbend, California
                    </p>
                    <p className="text-xs text-white/60">94025, United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (Input boxes are white/transparent, with no surrounding images) */}
            <div className="lg:col-span-7 text-left bg-white/5 border border-white/10 p-6 sm:p-10">
              <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] text-white/60 font-bold uppercase block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Grace Hopper"
                          className="w-full bg-white text-black text-sm px-4 py-3 rounded-none border border-white/20 focus:outline-none focus:border-[#f26b2c] focus:ring-1 focus:ring-[#f26b2c] transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-[10px] tracking-[0.2em] text-white/60 font-bold uppercase block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="grace@example.com"
                          className="w-full bg-white text-black text-sm px-4 py-3 rounded-none border border-white/20 focus:outline-none focus:border-[#f26b2c] focus:ring-1 focus:ring-[#f26b2c] transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] text-white/60 font-bold uppercase block">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project inquiry / collaboration proposal"
                        className="w-full bg-white text-black text-sm px-4 py-3 rounded-none border border-white/20 focus:outline-none focus:border-[#f26b2c] focus:ring-1 focus:ring-[#f26b2c] transition-all"
                      />
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                      <label className="text-[10px] tracking-[0.2em] text-white/60 font-bold uppercase block">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your timeline, ideas, and goals..."
                        className="w-full bg-white text-black text-sm px-4 py-3 rounded-none border border-white/20 focus:outline-none focus:border-[#f26b2c] focus:ring-1 focus:ring-[#f26b2c] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button with sliding animation */}
                    <button
                      type="submit"
                      className="group relative inline-flex w-full h-[48px] items-center justify-center overflow-hidden rounded-none bg-[#f26b2c] px-8 text-[11px] font-bold uppercase tracking-widest text-white transition-colors duration-300 cursor-pointer"
                    >
                      {/* Black sliding background on hover */}
                      <span className="absolute inset-0 h-full w-full translate-y-full bg-black transition-transform duration-300 ease-out group-hover:translate-y-0" />

                      <span className="relative z-10 flex items-center gap-2">
                        <span>Send message</span>
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#f26b2c]/10 flex items-center justify-center text-[#f26b2c] border border-[#f26b2c]/25">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold">
                      Message Sent!
                    </h4>
                    <p className="text-sm text-white/75 max-w-sm">
                      Thank you for contacting us. We will review your message and reach back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE CARDS WITH IMAGES BELOW THE CONTACT CARD */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-black/5 bg-[#faf8f4]">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.25em] text-[#f26b2c] font-bold uppercase block mb-3">
            EXPLORE OPPORTUNITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            How to reach us
          </h2>
        </div>

        {/* Three beautiful image cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col justify-between items-start border border-black/5 bg-[#f4f1ea] p-6 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-full space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/about/about-Darksec1.webp"
                  alt="Our Main Studio"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-black group-hover:text-[#f26b2c] transition-colors">
                Creative Studio
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Step inside our physical environment in California. A highly collaborative open-office hosting painters, developers, and visual directors working in tandem.
              </p>
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#f26b2c] mt-6 block">
              Learn More
            </span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col justify-between items-start border border-black/5 bg-[#f4f1ea] p-6 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-full space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/about/about-Darksec2.webp"
                  alt="Partnership Projects"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-black group-hover:text-[#f26b2c] transition-colors">
                Project Inquiries
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Interested in working together on branding, custom web assets, or full campaign designs? Request an introductory creative workshop or strategy call.
              </p>
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#f26b2c] mt-6 block">
              Learn More
            </span>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col justify-between items-start border border-black/5 bg-[#f4f1ea] p-6 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="w-full space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src="/about/about-Darksec3.webp"
                  alt="Our Careers"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-black group-hover:text-[#f26b2c] transition-colors">
                Artist Partnerships
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                We consistently sponsor artist fellowships, local craftsmanship fairs, and gallery displays. Let&apos;s unite to bring rich organic expression back into digital spaces.
              </p>
            </div>
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#f26b2c] mt-6 block">
              Learn More
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
