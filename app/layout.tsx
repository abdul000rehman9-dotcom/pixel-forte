import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import PageTransition from "@/components/providers/PageTransition";

const parkinsans = localFont({
  src: [
    {
      path: "../public/fonts/static/Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/static/Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Parkinsans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixel-Forte | Creative Agency",
  description: "Creative agency portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={parkinsans.variable}>
      <head>
        {/* Priority Preloading for Above-the-Fold Hero Media */}
        <link rel="preload" href="/images/card1.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/videos/card2.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card3.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card4.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card5.webm" as="video" type="video/webm" fetchPriority="high" />
        <link rel="preload" href="/images/card6.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/images/card7.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body className={`min-h-screen overflow-x-hidden bg-[#F4F1EA] text-black antialiased font-sans ${parkinsans.className}`}>
        <Providers>
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}

