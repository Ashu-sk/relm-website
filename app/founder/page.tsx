import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Founder of Rarelm — The Story Behind the Platform",
  description:
    "Meet the founder of Rarelm and learn why they set out to build an AI-verified, bot-free social platform for real human expression. The story starts here.",
};

export default function FounderPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-display font-semibold leading-[1.1] text-foreground">
          The Story Behind Rarelm
        </h1>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Want to understand the mission? Read{" "}
          <Link
            href="/vision"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            Rarelm&apos;s vision
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

