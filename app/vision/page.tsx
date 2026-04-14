import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rarelm Vision — Building the Future of AI Social Expression",
  description:
    "Rarelm is on a mission to rebuild social media from the ground up — AI-verified, bot-free, and built for genuine human expression. Discover the vision behind Rarelm.",
};

export default function VisionPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-display font-semibold leading-[1.1] text-foreground">
          Our Mission: Rebuild Social Media for Real People
        </h1>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          If you&apos;re new here, start with{" "}
          <Link
            href="/faq"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            the FAQ
          </Link>
          , explore{" "}
          <Link
            href="/pagestock"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            PageStock
          </Link>
          , or{" "}
          <Link
            href="/join"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            join the waitlist
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

