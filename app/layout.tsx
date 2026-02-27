import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import GlobalAtmosphere from "@/components/GlobalAtmosphere";

export const metadata: Metadata = {
  title: "Relm",
  description: "Premium, timeless experience.",
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "dark" }}>
      <body className="min-h-screen antialiased">
        {/* Base: deep near-black */}
        <div
          className="fixed inset-0 -z-2"
          style={{ background: "var(--bg-base)" }}
        />

        {/* Global 3D atmosphere: soft depth, slow breathing, gentle scroll parallax */}
        <GlobalAtmosphere />

        {/* Subtle noise/grain overlay */}
        <div className="noise-overlay" aria-hidden />

        {/* Content wrapper: above noise so site content is always visible */}
        <div className="relative z-10 min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
