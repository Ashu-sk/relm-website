import Image from "next/image";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
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

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative grid min-h-screen place-items-center px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 mb-6 sm:mb-8"
        aria-labelledby="hero-heading"
      >
        <HeroBackground />
        <div className="relative z-10 animate-fade-enter-slow mx-auto max-w-2xl text-center">
          <Image
            src="/relm-logo.png"
            alt="Relm"
            width={64}
            height={64}
            className="mx-auto h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
            priority
          />
          <p className="mt-(--space-hero) text-caption uppercase tracking-wide text-(--fg-secondary) sm:text-body">
            Real Is Rare.
          </p>
          <h1 id="hero-heading" className="hero-headline-block mx-auto mt-(--space-hero) max-w-[30ch] text-center">
            <span className="block hero-headline-line1">Social Expression.</span>
            <span className="block hero-headline-line2">For Real Humans.</span>
          </h1>
          <p className="mx-auto mt-(--space-hero) max-w-md hero-subhead">
            Speak openly.
            <br />
            Stay anonymous when needed.
            <br />
            Be heard without fear.
          </p>
          <p className="mx-auto mt-(--space-hero) max-w-lg hero-proof">
            An AI-verified social platform where identity is real and engagement can&apos;t be faked.
          </p>
          <div className="mt-(--space-hero) flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#join-waitlist"
              className="hero-cta-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium sm:w-auto"
            >
              Enter Relm
              <span aria-hidden className="opacity-0 transition-[opacity] duration-300 ease-out group-hover:opacity-70">
                →
              </span>
            </Link>
            <Link
              href="#motion-manifesto"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-(--fg-tertiary)/30 px-6 py-3 text-body text-foreground transition-smooth hover:border-(--fg-secondary)/50 hover:bg-white/5 sm:w-auto"
            >
              See how it works
              {" "}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="motion-manifesto"
        className="marquee-section overflow-x-hidden py-6 sm:py-8 mb-6 sm:mb-8"
        aria-label="Motion Manifesto"
      >
        <div className="marquee-track">
          <span className="marquee-text">
            NO BOTS · NO FAKE IDs · NO SCAMS · NO FAKE PROFESSIONALS · NO DEEPFAKES ·
            NO SHOPPING SCAMS · NO FAKE NEWS · NO FAKE FACTS · NO FAKE ENGAGEMENT ·
            NO FAKE FOLLOWERS · NO FAKE CONNECTIONS · NO IMPERSONATION ·
            NO FAKE HUMANS · NO FAKE ADVERTISEMENTS ·
          </span>
          <span className="marquee-text" aria-hidden>
            NO BOTS · NO FAKE IDs · NO SCAMS · NO FAKE PROFESSIONALS · NO DEEPFAKES ·
            NO SHOPPING SCAMS · NO FAKE NEWS · NO FAKE FACTS · NO FAKE ENGAGEMENT ·
            NO FAKE FOLLOWERS · NO FAKE CONNECTIONS · NO IMPERSONATION ·
            NO FAKE HUMANS · NO FAKE ADVERTISEMENTS ·
          </span>
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

      <footer
        className="section-block section-padding-standard text-center"
        aria-label="Site footer"
      >
        <div className="section-container max-w-2xl mx-auto">
          <p className="text-body font-medium text-foreground">Relm</p>
          <p className="mt-2 text-body text-(--fg-tertiary)">
            Founder — Ashutosh Kesharwani
          </p>
          <nav className="footer-icons mt-4 flex justify-center gap-6" aria-label="Social links">
            <a
              href="https://x.com/relm978149"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-(--fg-tertiary) transition-colors hover:text-(--fg-secondary)"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/rarelm/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-(--fg-tertiary) transition-colors hover:text-(--fg-secondary)"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </nav>
          <p className="mt-4 text-body text-(--fg-tertiary)">
            © Relm. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
