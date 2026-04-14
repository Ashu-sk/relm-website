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
        <section className="mt-10 space-y-5">
          <h2 className="text-headline font-semibold text-foreground">
            Why this needed to exist
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Rarelm started from a simple observation: social media broke at the identity
            layer. When anyone can create infinite fake accounts, every downstream
            problem becomes inevitable — bots farming engagement, scams in DMs, fake
            professionals selling advice, and real people losing trust in every signal.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            The founder story is the decision to rebuild from first principles: verify
            every user as a real human before they can participate, while still
            protecting expression through verified anonymity. That combination is the
            foundation for everything else Rarelm is building — communities that feel
            safe, commerce that can be trusted, and PageStock that only works when the
            underlying growth data is real.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            If you want early access to the private beta and updates as the MVP rolls
            out,{" "}
            <Link
              href="/join"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              join the waitlist
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

