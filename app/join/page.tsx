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
      </div>
    </main>
  );
}

