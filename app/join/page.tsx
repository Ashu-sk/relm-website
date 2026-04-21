import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Rarelm — Get Early Access to the AI Social Platform",
  description:
    "Join the Rarelm waitlist and get early access to the AI-verified social expression platform. No bots, no fake accounts — just real people, real communities, real value.",
};

export default function JoinPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-display font-semibold leading-[1.1] text-foreground">
          Get Early Access to Rarelm
        </h1>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Join the waitlist to get early access.
        </p>
        <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
          When you join the waitlist, you&apos;re reserving early access to Rarelm&apos;s
          private beta. We&apos;ll email you when onboarding opens, what&apos;s included in
          the first release (AI verification, profiles, PageStock access), and the next
          steps to claim your account and domain-based username.
        </p>
        <div className="mt-8">
          <Link
            href="/#join-waitlist"
            className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
          >
            <span>Join Waitlist</span>
            <span
              aria-hidden
              className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
            >
              →
            </span>
          </Link>
        </div>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Join thousands of people waiting for the world&apos;s first mandatory
          face-authenticated social platform. As a waitlist member you will get early
          access to Rarelm before public launch, founding member status, and exclusive
          access to PageStock — the world&apos;s first creator stock market where every
          user earns dividends. Rarelm is built by Mavrist Pvt Ltd and is currently
          raising pre-seed funding. Free to join, free to use.
        </p>
        <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
          Read our <a href="/faq">FAQ</a> or learn about <a href="/pagestock">PageStock</a>{" "}
          before joining.
        </p>
        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2" aria-label="Explore Rarelm">
          <Link
            href="/pagestock"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Explore PageStock
          </Link>
          <Link
            href="/faq"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Read the FAQ
          </Link>
          <Link
            href="/vision"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Our mission
          </Link>
        </nav>
      </div>
    </main>
  );
}

