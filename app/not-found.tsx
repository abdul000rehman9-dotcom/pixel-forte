"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import NotFoundPage from "@/components/NotFoundPage";
import Footer from "@/components/Footer";

export default function NotFound() {
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("404");

  const onContactClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Header
        activePage={activePage}
        setActivePage={(page) => {
          if (page === "home") {
            router.push("/");
          } else {
            router.push(`/${page}`);
          }
        }}
        onContactClick={onContactClick}
      />
      <main className="overflow-hidden">
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
