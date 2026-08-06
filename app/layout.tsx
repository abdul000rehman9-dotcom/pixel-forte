import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import PageTransition from "@/components/providers/PageTransition";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,500,400,300&display=swap"
        />
        {/* Priority Preloading for Above-the-Fold Hero Media */}
        <link rel="preload" href="/images/card1.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/videos/card2.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card3.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card4.mp4" as="video" type="video/mp4" fetchPriority="high" />
        <link rel="preload" href="/videos/card5.webm" as="video" type="video/webm" fetchPriority="high" />
        <link rel="preload" href="/images/card6.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preload" href="/images/card7.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#F4F1EA] text-black antialiased font-sans">
        <Providers>
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}

