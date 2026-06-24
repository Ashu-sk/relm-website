import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProblemCardsSection from "@/components/ProblemCardsSection";
import SolutionCardsSection from "@/components/SolutionCardsSection";
import USPCardsSection from "@/components/USPCardsSection";
import IdentitySection from "@/components/IdentitySection";
import EngagementSection from "@/components/EngagementSection";
import MoneySection from "@/components/MoneySection";
import DiscoverySection from "@/components/DiscoverySection";
import ExpressionSection from "@/components/ExpressionSection";
import ScamsDeepfakesSection from "@/components/ScamsDeepfakesSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import OurStandSection from "@/components/OurStandSection";
import VisionSection from "@/components/VisionSection";
import DataStripSection from "@/components/DataStripSection";
import JoinWaitlistSection from "@/components/JoinWaitlistSection";
import JoinAsProfessionalSection from "@/components/JoinAsProfessionalSection";
import FounderSection from "@/components/FounderSection";
import ContactUsSection from "@/components/ContactUsSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const MANIFESTO_TEXT =
  'NO BOTS · NO BURNER ACCOUNTS · NO "hey babe" from a crypto stranger · NO follower farms · NO main-character cosplay · NO 47-follower egg with strong opinions · REAL HUMANS ONLY · ';

function MarqueeRow() {
  return (
    <div className="cc-marquee-row">
      <span className="cc-marquee-line">{MANIFESTO_TEXT}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="cc-hero"
        aria-labelledby="hero-heading"
      >
        <div className="cc-hero-atmosphere" aria-hidden>
          <div className="cc-hero-glow-orange" />
          <div className="cc-hero-glow-blue" />
          <div className="cc-hero-grid" />
        </div>
        <div className="cc-hero-inner">
          <Image
            src="/relm-logo.png"
            alt="Rarelm"
            width={64}
            height={64}
            className="mx-auto h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
            priority
          />
          <p className="cc-hero-eyebrow mt-8">
            <span className="cc-hero-dot" aria-hidden />
            Real Is Rare.
          </p>
          <h1 id="hero-heading" className="cc-hero-h1">
            <span className="cc-hero-strike">Stop following.</span>
            <span className="cc-hero-line2">
              Start <span className="cc-hero-accent">backing.</span>
            </span>
          </h1>
          <p className="cc-hero-sub">
            The follow economy is mostly fake. Rarelm is where verified humans back
            each other — with identity, commerce, and upside that can&apos;t be
            manufactured.
          </p>
          <div className="cc-hero-steps" aria-label="How it works">
            <div className="cc-hero-step">
              <span className="cc-hero-step-num">01</span>
              <span className="cc-hero-step-title">Verify</span>
              <span className="cc-hero-step-body">
                Mandatory AI face auth. One human. One account.
              </span>
            </div>
            <div className="cc-hero-step">
              <span className="cc-hero-step-num">02</span>
              <span className="cc-hero-step-title">Claim</span>
              <span className="cc-hero-step-body">
                yourname.rarelm — your domain identity, not a handle.
              </span>
            </div>
            <div className="cc-hero-step">
              <span className="cc-hero-step-num">03</span>
              <span className="cc-hero-step-title">Back</span>
              <span className="cc-hero-step-body">
                PageStock, commerce, and community that can&apos;t be faked.
              </span>
            </div>
          </div>
          <div className="cc-hero-actions">
            <Link href="#join-waitlist" className="cc-btn-primary group">
              Enter Rarelm{" "}
              <span
                aria-hidden
                className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
              >
                →
              </span>
            </Link>
            <Link href="#motion-manifesto" className="cc-btn-ghost">
              See how it works{" "}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="motion-manifesto"
        className="cc-marquee"
        aria-label="Motion Manifesto"
      >
        <div className="cc-marquee-track">
          <MarqueeRow />
          <div aria-hidden>
            <MarqueeRow />
          </div>
        </div>
      </section>

      <ProblemCardsSection />

      <SolutionCardsSection />

      <USPCardsSection />

      <IdentitySection />

      <EngagementSection />

      <MoneySection />

      <DiscoverySection />

      <ExpressionSection />

      <ScamsDeepfakesSection />

      <ProfessionalsSection />

      <OurStandSection />

      <VisionSection />

      <DataStripSection />

      <JoinWaitlistSection />

      <JoinAsProfessionalSection />

      <FounderSection />

      <ContactUsSection />

      <footer className="cc-footer" aria-label="Site footer">
        <div className="cc-footer-inner">
          <p className="cc-footer-wordmark">
            rarel<span className="cc-footer-wordmark-accent">m</span>
          </p>
          <p className="cc-footer-tagline">real is rare.</p>
          <p className="cc-footer-muted">The bots didn&apos;t make it this far.</p>
          <p className="cc-footer-founder">Founder — Ashutosh Kesharwani</p>
          <nav className="cc-footer-nav" aria-label="Explore Rarelm">
            <Link href="/pagestock" className="cc-footer-link">
              PageStock
            </Link>
            <Link href="/original-tag" className="cc-footer-link">
              Original Tag
            </Link>
            <Link href="/qac" className="cc-footer-link">
              QAC
            </Link>
            <Link href="/faq" className="cc-footer-link">
              FAQ
            </Link>
            <Link href="/join" className="cc-footer-link">
              Join
            </Link>
          </nav>
          <nav className="cc-footer-social" aria-label="Social links">
            <a
              href="https://x.com/rarelmHQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) @rarelmHQ"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/rarelm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </nav>
          <p className="cc-footer-copy">© Rarelm. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
