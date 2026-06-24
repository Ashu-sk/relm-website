import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Original Tag — Verified Real Content | Rarelm",
  description:
    "The Original Tag is Rarelm's AI-verified trust mark for unaltered content. Photos, videos, audio, and posts confirmed real — created by a verified human, untouched by AI.",
  alternates: {
    canonical: "/original-tag",
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
      <main className="cc-subpage">
        <header className="cc-subpage-section cc-subpage-hero">
          <div className="cc-section-inner">
            <div className="cc-subpage-hero-stack">
              <p className="rl-ey ey-w">
                ORIGINAL TAG · RARELM
              </p>
              <h1 className="mt-4 rl-h1">
                If It&apos;s Real, It&apos;s Marked.
              </h1>
              <p className="hero-definition mt-6 rl-ss">
                The Original Tag is Rarelm&apos;s platform-level verification badge for authentic
                content — assigned by AI to photos, videos, audio, and written posts that were
                created by a real, AI-verified human without artificial generation or manipulation.
                It is not a filter or a self-declaration. It is Rarelm&apos;s AI confirming the
                content is real before the tag is granted.
              </p>
              <p className="mt-4 rl-ss">
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
            </div>
          </div>
        </header>

        <section className="cc-subpage-section" aria-labelledby="original-problem">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <header className="space-y-2">
              <p className="rl-ey ey-w">
                THE PROBLEM
              </p>
              <h2 id="original-problem" className="rl-sh">
                Trust in visual content has collapsed. Here is why it matters.
              </h2>
            </header>
            <p className="rl-ss">
              Deepfakes are now indistinguishable from reality to the human eye. AI-generated
              images flood every major platform with no labeling. Synthetic audio can clone any
              voice from 30 seconds of recording. AI-written posts are published under real names
              every day. No existing major social platform systematically tells you whether what
              you are seeing is real or generated.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">The Original Tag does.</p>
            </div>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-what">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <header className="space-y-2">
              <p className="rl-ey ey-w">
                WHAT IS THE ORIGINAL TAG
              </p>
              <h2 id="original-what" className="rl-sh">
                A platform-level verification signal for authentic content.
              </h2>
            </header>
            <p className="rl-ss">
              The Original Tag is a verified badge attached to content — photos, videos, audio,
              written posts — that confirms it was captured or created by a real, verified human
              without AI alteration or manipulation.
            </p>
            <p className="rl-ss">
              It is not a filter. It is not a self-declaration anyone can apply. It is Rarelm&apos;s
              AI verification layer confirming the content is real before the tag is granted.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">If it carries the Original Tag, it is real. Full stop.</p>
            </div>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-how">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <header className="space-y-2">
              <p className="rl-ey ey-w">
                HOW IT WORKS
              </p>
              <h2 id="original-how" className="rl-sh">
                How the Original Tag is assigned
              </h2>
            </header>
            <ol className="list-decimal space-y-3 pl-5 rl-ss">
              <li>A verified Rarelm user creates and uploads content</li>
              <li>Rarelm&apos;s AI layer analyzes the content for signs of artificial generation or manipulation</li>
              <li>If the content passes — it receives the Original Tag</li>
              <li>The tag is publicly visible, searchable, and tamper-proof on the content</li>
              <li>Any subsequent edit or AI modification automatically removes the tag</li>
            </ol>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-covers">
          <div className="cc-section-inner">
            <header className="space-y-2 cc-subpage-prose">
              <p className="rl-ey ey-w">
                WHAT THE ORIGINAL TAG COVERS
              </p>
              <h2 id="original-covers" className="rl-sh">
                Every form of content. Verified the same way.
              </h2>
            </header>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Photos</h3>
                <p className="mt-3 rl-ss">
                  Unedited, unfiltered, unaltered images from real moments. No AI enhancement. No
                  synthetic generation. What you see is what was captured.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Videos</h3>
                <p className="mt-3 rl-ss">
                  Unmanipulated recordings without AI face-swapping, deepfake overlays, or
                  synthetic generation. Real footage from real moments.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Audio</h3>
                <p className="mt-3 rl-ss">
                  Real voices. Real recordings. No synthetic voice cloning. No AI-generated speech.
                  If it carries the Original Tag, a real human said it.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Written Content</h3>
                <p className="mt-3 rl-ss">
                  Marked as original when authored by a verified human without AI generation. Real
                  words from real people.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-rarelm">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <header className="space-y-2">
              <p className="rl-ey ey-w">
                THE RARELM DIFFERENCE
              </p>
              <h2 id="original-rarelm" className="rl-sh">
                Content verification alone is not enough. Identity verification is what makes it meaningful.
              </h2>
            </header>
            <p className="rl-ss">
              On other platforms, even if content could be checked for authenticity, you cannot verify who
              made it. A real-looking photo from an unverified account tells you nothing.
            </p>
            <p className="rl-ss">
              On Rarelm, every user is AI-verified as a real human before they can post anything. The
              Original Tag is tied to a verified identity underneath. This means Original Tag content is
              authentic not just in what it shows — but in who created it.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">Identity is real. Content is real. The tag makes it official.</p>
            </div>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-profiles">
          <div className="cc-section-inner">
            <header className="space-y-2 cc-subpage-prose">
              <p className="rl-ey ey-w">
                ORIGINAL TAG ACROSS YOUR 3 PROFILES
              </p>
              <h2 id="original-profiles" className="rl-sh">
                The Original Tag works across all three Rarelm profiles
              </h2>
            </header>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Anonymous (Me)</h3>
                <p className="mt-3 rl-ss">
                  Post real content without revealing your identity. The Original Tag verifies the content —
                  not the person. Authenticity without exposure.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Family &amp; Friends</h3>
                <p className="mt-3 rl-ss">
                  Share real moments with the people who matter. No filters. No performance. Real life, marked
                  as real.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Professional</h3>
                <p className="mt-3 rl-ss">
                  Build a verified body of original work. Your professional reputation backed by content that is
                  provably yours and provably real.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-faq">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <header className="space-y-2">
              <p className="rl-ey ey-w">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 id="original-faq" className="rl-sh">
                Original Tag FAQ
              </h2>
            </header>

            <dl className="mt-8 space-y-6">
              {originalTagFaq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <dt className="text-title font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 rl-ss">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="cc-subpage-section" aria-labelledby="original-close">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <h2 id="original-close" className="rl-sh">
              Real content deserves a mark. Original Tag makes sure it gets one.
            </h2>
            <p className="rl-ss">
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
