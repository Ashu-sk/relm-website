import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import GlobalAtmosphere from "@/components/GlobalAtmosphere";
import { orgJsonLd } from "@/lib/jsonLd";
import { SITE_URL } from "@/lib/faqData";

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rarelm",
  url: SITE_URL,
  description:
    "Rarelm is the world's first mandatory AI-verified social expression platform where every user is face-authenticated before joining. No bots, no fake accounts, no scams.",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to create an account",
  },
  creator: {
    "@type": "Organization",
    name: "MAVRIST TECH PVT LTD",
    url: SITE_URL,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rarelm — The AI-Verified Social Expression Platform",
  description:
    "Rarelm is the world's first AI-verified social expression platform — where every user is mandatorily verified by AI. No bots, no fake accounts, no scams. Free to join.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {gaMeasurementId ? (
          <>
            {/* Google Analytics 4 (GA4) - loaded from env for production safety */}
            <Script
              async
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}

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
