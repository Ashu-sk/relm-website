import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import GlobalAtmosphere from "@/components/GlobalAtmosphere";

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rarelm",
  url: "https://www.rarelm.com",
  description:
    "Rarelm is the world's first AI-verified social expression platform where every user is mandatorily verified by AI — ensuring only real humans, no bots, no scams, no fake accounts. Features include the 3 profile system, anonymous and open modes, PageStock creator investing, social commerce, and 24/7 professional expert support.",
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to create an account",
  },
  featureList: [
    "Mandatory AI identity verification for all users",
    "Anonymous and open interaction modes",
    "3 profile system — Anonymous, Family & Friends, Professional",
    "Domain-based username (name.rarelm.com)",
    "PageStock — creator stock market and user earnings",
    "Social commerce ecosystem with in-app purchases",
    "24/7 professional expert advisor support",
    "Quick Q&A with verified experts",
    "Content sharing — thoughts, pictures, videos, GIFs",
    "Community building and chat",
  ],
  audience: {
    "@type": "Audience",
    audienceType:
      "Creators, businesses, investors, and everyday social media users",
  },
  creator: {
    "@type": "Organization",
    name: "Relm",
    url: "https://www.rarelm.com",
  },
  sameAs: ["https://www.rarelm.com"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Relm",
  url: "https://www.rarelm.com",
  logo: "https://www.rarelm.com/relm-logo.png",
  description:
    "Relm is building the world's first AI-verified social platform — Rarelm — where every user is mandatorily verified by AI, ensuring only real humans, no bots, no scams, no fake accounts.",
  foundingDate: "2024",
  sameAs: ["https://www.rarelm.com"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://www.rarelm.com/contact",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rarelm",
  url: "https://www.rarelm.com",
  description: "The world's first AI-verified social expression platform",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.rarelm.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rarelm.com"),
  alternates: {
    canonical: "/",
  },
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
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
