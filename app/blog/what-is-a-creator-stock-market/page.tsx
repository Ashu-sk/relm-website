import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is PageStock? Backing Creators Early on Rarelm",
  description:
    "PageStock turns early support into founding-supporter standing on Rarelm. Back verified creators before the world catches on — free for every verified human.",
  alternates: {
    canonical: "/blog/what-is-a-creator-stock-market",
  },
};

const WORDS_PER_MINUTE = 220;

const CONTENT_TEXT_FOR_READING_TIME = `
What is PageStock? Backing Creators Early on Rarelm
Being early should mean something
What PageStock is
How it works
For creators
Why it only works on rarelm
PageStock is coming to Rarelm
Frequently Asked Questions
`;

function getReadingTimeMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export default function BlogPostPage() {
  const readingTime = getReadingTimeMinutes(CONTENT_TEXT_FOR_READING_TIME);

  return (
    <main className="rl-sec px-[clamp(1.5rem,5vw,8rem)]">
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-10">
          <p className="rl-ey ey-w">
            Blog · {readingTime} min read
          </p>
          <h1 className="mt-4 rl-sh text-foreground">
            What is PageStock? Backing Creators Early on Rarelm
          </h1>
          <p className="mt-5 rl-ss">
            Everywhere else, being early to a creator gets you bragging rights and
            nothing else. On rarelm, backing the real ones early gives you
            founding-supporter standing — and a place in the story as they rise.
          </p>
        </header>

        <section className="space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">Being early should mean something</h2>
          <p>
            You found them first. You shared the early posts, brought the friends,
            believed before the numbers did. And everywhere on the internet, that
            counts for exactly nothing — no recognition, no standing, no place in the
            story. The people who help build a creator&apos;s rise go invisible the
            moment it happens.
          </p>
        </section>

        <section className="mt-10 space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">What PageStock is</h2>
          <p>
            <strong className="text-foreground">PageStock</strong> is rarelm&apos;s way
            of turning support into standing. Back a verified creator or page early and
            you become one of their founding supporters — recognized, on the record,
            part of the rise from the beginning. Free for every verified human, built
            into rarelm.
          </p>
        </section>

        <section className="mt-10 space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">How it works</h2>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong className="text-foreground">Find the real ones</strong> —
              Verified creators and pages. Real growth, real humans, no bots.
            </li>
            <li>
              <strong className="text-foreground">Back them early</strong> — Take your
              founding-supporter position before the world catches on.
            </li>
            <li>
              <strong className="text-foreground">Rise together</strong> — As they grow,
              your early standing grows with them: founding-supporter status,
              recognition, and a front-row place in what you helped build.
            </li>
          </ol>
        </section>

        <section className="mt-10 space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">
            Let the people who believe in you stand with you
          </h2>
          <p>
            Your earliest supporters are your most valuable — and everywhere else,
            they&apos;re just a number. PageStock lets you recognize them: turn loyal
            followers into founding supporters with real standing in your story, and
            build a community genuinely committed to your rise. Free, built into your
            verified rarelm presence.
          </p>
        </section>

        <section className="mt-10 space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">
            This only works because everyone&apos;s real
          </h2>
          <p>
            On every other platform, follower counts are inflated by bots and growth is
            gamed — so none of it can be trusted. PageStock means something only
            because rarelm verifies every human. Real people. Real growth. Real backing
            — no fake supporters, no inflated numbers.
          </p>
        </section>

        <section className="mt-10 space-y-5 rl-ss">
          <h2 className="rl-sh text-foreground">PageStock is coming to Rarelm</h2>
          <p>
            PageStock is a core feature of Rarelm — the AI-verified social expression
            platform being built for creators, communities, and businesses who want a
            bot-free environment. Join the waitlist at{" "}
            <Link
              href="/join"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              rarelm.com/join
            </Link>{" "}
            to be among the first to access PageStock when it launches.
          </p>
        </section>

        <section className="mt-14 space-y-8 rl-ss" aria-labelledby="blog-faq">
          <h2 id="blog-faq" className="rl-sh text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <section>
              <h3 className="text-title font-semibold text-foreground">
                What is PageStock?
              </h3>
              <p className="mt-2">
                PageStock is rarelm&apos;s way of turning support into standing. Back a
                verified creator or page early and you become one of their founding
                supporters — recognized, on the record, part of the rise from the
                beginning.
              </p>
            </section>

            <section>
              <h3 className="text-title font-semibold text-foreground">
                How does PageStock work?
              </h3>
              <p className="mt-2">
                Find verified creators and pages with real growth. Back them early as a
                founding supporter. As they rise, your early standing grows with them —
                founding-supporter status, recognition, and a front-row place in what
                you helped build.
              </p>
            </section>

            <section>
              <h3 className="text-title font-semibold text-foreground">
                Why does PageStock only work on Rarelm?
              </h3>
              <p className="mt-2">
                PageStock means something only because rarelm verifies every human. Real
                people. Real growth. Real backing — no fake supporters, no inflated
                numbers.
              </p>
            </section>

            <section>
              <h3 className="text-title font-semibold text-foreground">
                When does PageStock launch?
              </h3>
              <p className="mt-2">
                PageStock is launching as part of Rarelm. Join the waitlist at{" "}
                <Link href="/join" className="text-foreground underline underline-offset-2">
                  rarelm.com/join
                </Link>
                .
              </p>
            </section>
          </div>
        </section>

        <footer className="mt-14 space-y-6 border-t border-white/10 pt-10">
          <p className="rl-ss">
            <strong className="text-foreground">Be early. Be real.</strong> Back the
            real ones before the world does.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/pagestock"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              PageStock
            </Link>
            <Link
              href="/join"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Join the waitlist
            </Link>
            <Link
              href="/faq"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              FAQ
            </Link>
          </div>
          <p className="rl-ss">
            Join the Rarelm waitlist to be among the first to access PageStock when it
            launches — connecting, creating, and backing the real ones early.
          </p>
        </footer>
      </article>
    </main>
  );
}
