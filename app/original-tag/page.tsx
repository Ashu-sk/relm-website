import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Original Tag — Verified Real Content | Rarelm",
  description:
    "The Original Tag is Rarelm's AI-verified trust mark for unaltered content. Photos, videos, audio, and posts confirmed real — created by a verified human, untouched by AI.",
  alternates: {
    canonical: "https://www.rarelm.com/original-tag",
  },
  openGraph: {
    title: "Original Tag — If It's Real, It's Marked.",
    description:
      "Rarelm's Original Tag verifies that content was created by a real human without AI alteration. Trust what you see again.",
    url: "https://www.rarelm.com/original-tag",
    type: "website",
    images: [{ url: "https://www.rarelm.com/og-original-tag.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Tag — Verified Real Content | Rarelm",
    description:
      "If it carries the Original Tag, it's real. Rarelm's AI-verified authenticity mark.",
    images: ["https://www.rarelm.com/og-original-tag.png"],
  },
};

const originalTagFaq = [
  {
    question: "What is the Original Tag on Rarelm?",
    answer:
      "The Original Tag is Rarelm's platform-level verification badge for authentic content. It is assigned by AI to photos, videos, audio, and written posts that were created by a real, AI-verified human without artificial generation or manipulation. It is not self-declared — it is granted by Rarelm's AI verification layer after the content passes authenticity checks.",
  },
  {
    question: "How does the Original Tag work?",
    answer:
      "When a verified Rarelm user uploads content, Rarelm's AI layer analyzes it for signs of artificial generation or manipulation. If the content passes, it receives the Original Tag — a publicly visible, searchable, and tamper-proof badge. If the content is subsequently edited or AI-modified in any way, the tag is automatically removed.",
  },
  {
    question: "What happens to the Original Tag if I edit my content?",
    answer:
      "Any edit or AI modification to tagged content automatically removes the Original Tag. The tag can only exist on content that remains in its original, unaltered state from the moment it was uploaded.",
  },
  {
    question: "Does the Original Tag verify the person or the content?",
    answer:
      "Both. The Original Tag verifies the content itself — confirming it was not artificially generated or manipulated. It is also tied to a Rarelm account that has already been AI-verified as a real human. This dual verification means Original Tag content is authentic in both what it shows and who created it.",
  },
  {
    question: "What types of content can receive the Original Tag?",
    answer:
      "The Original Tag covers four content types on Rarelm: photos (unedited, unfiltered images from real moments), videos (unmanipulated recordings without deepfake overlays or AI face-swapping), audio (real voice recordings without synthetic cloning), and written posts (authored by a verified human without AI generation).",
  },
] as const;

const originalTagSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rarelm.com/original-tag",
      url: "https://www.rarelm.com/original-tag",
      name: "Original Tag by Rarelm — Verified Authentic Content",
      description:
        "The Original Tag is Rarelm's AI-assigned verification badge for unaltered content — photos, videos, audio, and posts confirmed as created by a real verified human without AI manipulation.",
      isPartOf: { "@id": "https://www.rarelm.com" },
      about: {
        "@type": "Thing",
        name: "Original Tag",
        description:
          "A platform-level content verification badge assigned by Rarelm's AI to photos, videos, audio, and written posts that were created by a real, verified human without AI alteration or manipulation.",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rarelm.com" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Original Tag",
            item: "https://www.rarelm.com/original-tag",
          },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-definition", ".key-claim"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: originalTagFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function OriginalTagPage() {
  return (
    <>
      <Script
        id="original-tag-schema-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(originalTagSchema),
        }}
      />
      <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-12">
            <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
              ORIGINAL TAG · RARELM
            </p>
            <h1 className="mt-4 text-display font-semibold leading-[1.1] text-foreground">
              If It&apos;s Real, It&apos;s Marked.
            </h1>
            <p className="hero-definition mt-6 text-body leading-relaxed text-(--fg-secondary)">
              The Original Tag is Rarelm&apos;s platform-level verification badge for authentic
              content — assigned by AI to photos, videos, audio, and written posts that were
              created by a real, AI-verified human without artificial generation or manipulation.
              It is not a filter or a self-declaration. It is Rarelm&apos;s AI confirming the
              content is real before the tag is granted.
            </p>
            <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
              On every other platform, you cannot tell the difference between a real photo and an
              AI-generated one. Between an original video and a deepfake. Between a real voice and
              a synthetic clone. The Original Tag changes that.
            </p>
            <div className="mt-8">
              <Link
                href="/join"
                className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
              >
                <span>Join the Waitlist →</span>
                <span
                  aria-hidden
                  className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                >
                  →
                </span>
              </Link>
            </div>
          </header>

          <section className="mt-14 space-y-6" aria-labelledby="original-problem">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE PROBLEM
              </p>
              <h2 id="original-problem" className="text-headline font-semibold text-foreground">
                Trust in visual content has collapsed. Here is why it matters.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Deepfakes are now indistinguishable from reality to the human eye. AI-generated
              images flood every major platform with no labeling. Synthetic audio can clone any
              voice from 30 seconds of recording. AI-written posts are published under real names
              every day. No existing major social platform systematically tells you whether what
              you are seeing is real or generated.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">The Original Tag does.</p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="original-what">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHAT IS THE ORIGINAL TAG
              </p>
              <h2 id="original-what" className="text-headline font-semibold text-foreground">
                A platform-level verification signal for authentic content.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              The Original Tag is a verified badge attached to content — photos, videos, audio,
              written posts — that confirms it was captured or created by a real, verified human
              without AI alteration or manipulation.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              It is not a filter. It is not a self-declaration anyone can apply. It is Rarelm&apos;s
              AI verification layer confirming the content is real before the tag is granted.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">If it carries the Original Tag, it is real. Full stop.</p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="original-how">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                HOW IT WORKS
              </p>
              <h2 id="original-how" className="text-headline font-semibold text-foreground">
                How the Original Tag is assigned
              </h2>
            </header>
            <ol className="list-decimal space-y-3 pl-5 text-body leading-relaxed text-(--fg-secondary)">
              <li>A verified Rarelm user creates and uploads content</li>
              <li>Rarelm&apos;s AI layer analyzes the content for signs of artificial generation or manipulation</li>
              <li>If the content passes — it receives the Original Tag</li>
              <li>The tag is publicly visible, searchable, and tamper-proof on the content</li>
              <li>Any subsequent edit or AI modification automatically removes the tag</li>
            </ol>
          </section>

          <section className="mt-14 space-y-8" aria-labelledby="original-covers">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHAT THE ORIGINAL TAG COVERS
              </p>
              <h2 id="original-covers" className="text-headline font-semibold text-foreground">
                Every form of content. Verified the same way.
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Photos</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Unedited, unfiltered, unaltered images from real moments. No AI enhancement. No
                  synthetic generation. What you see is what was captured.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Videos</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Unmanipulated recordings without AI face-swapping, deepfake overlays, or
                  synthetic generation. Real footage from real moments.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Audio</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Real voices. Real recordings. No synthetic voice cloning. No AI-generated speech.
                  If it carries the Original Tag, a real human said it.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Written Content</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Marked as original when authored by a verified human without AI generation. Real
                  words from real people.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="original-rarelm">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE RARELM DIFFERENCE
              </p>
              <h2 id="original-rarelm" className="text-headline font-semibold text-foreground">
                Content verification alone is not enough. Identity verification is what makes it meaningful.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              On other platforms, even if content could be checked for authenticity, you cannot verify who
              made it. A real-looking photo from an unverified account tells you nothing.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              On Rarelm, every user is AI-verified as a real human before they can post anything. The
              Original Tag is tied to a verified identity underneath. This means Original Tag content is
              authentic not just in what it shows — but in who created it.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">Identity is real. Content is real. The tag makes it official.</p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="original-profiles">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                ORIGINAL TAG ACROSS YOUR 3 PROFILES
              </p>
              <h2 id="original-profiles" className="text-headline font-semibold text-foreground">
                The Original Tag works across all three Rarelm profiles
              </h2>
            </header>
            <div className="grid gap-6 sm:grid-cols-3">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Anonymous (Me)</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Post real content without revealing your identity. The Original Tag verifies the content —
                  not the person. Authenticity without exposure.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Family &amp; Friends</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Share real moments with the people who matter. No filters. No performance. Real life, marked
                  as real.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Professional</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Build a verified body of original work. Your professional reputation backed by content that is
                  provably yours and provably real.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-8" aria-labelledby="original-faq">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 id="original-faq" className="text-headline font-semibold text-foreground">
                Original Tag FAQ
              </h2>
            </header>

            <dl className="space-y-6">
              {originalTagFaq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <dt className="text-title font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 text-body leading-relaxed text-(--fg-secondary)">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="original-close">
            <h2 id="original-close" className="text-headline font-semibold text-foreground">
              Real content deserves a mark. Original Tag makes sure it gets one.
            </h2>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Join Rarelm and be part of the first social platform where authentic content is verified, marked,
              and searchable.
            </p>
            <div className="pt-2">
              <Link
                href="/join"
                className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
              >
                <span>Join the Waitlist →</span>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

