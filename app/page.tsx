"use client"
import Header from "@/components/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import Projects from "@/components/Projects";
import { Services } from "@/components/Services";
import { DarkSection } from "@/components/DarkSection";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

export default function Home() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("home");

  const onContactClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          if (page === "home") {
            setActivePage("home");
          } else {
            router.push(`/${page}`);
          }
        }}
        onContactClick={onContactClick}
      />
      <main className="overflow-hidden">
        {activePage === "home" ? (
          <>
            <Hero />
            <About />
            <FeaturedWork />
            <Services />
            <Projects />
            <main className="bg-black min-h-screen">
              <Stats />
              <div className="h-[40vh] flex items-center justify-center bg-black"></div>
              <DarkSection />
            </main>
            <Process />
            <Testimonials />
          </>
        ) : activePage === "about" ? (
          <AboutPage />
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 bg-[#f4f1ea]">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-[#f26b2c] mb-4">Page Coming Soon</h2>
            <p className="text-sm text-neutral-500 font-medium">This page is currently being designed and developed.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
