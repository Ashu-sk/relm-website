import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PageStock by Rarelm — Back the Ones You Believe In",
  description:
    "PageStock turns early support into founding-supporter standing on Rarelm. Back verified creators before the world catches on — free for every verified human.",
  alternates: {
    canonical: "/pagestock",
  },
  openGraph: {
    title: "PageStock — Back the Ones You Believe In. Early.",
    description:
      "On rarelm, backing the real ones early gives you founding-supporter standing and a place in the story as they rise. Free for every verified human.",
    url: "https://www.rarelm.com/pagestock",
    type: "website",
    images: [{ url: "https://www.rarelm.com/og-pagestock.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PageStock — Back the Ones You Believe In. Early.",
    description:
      "Founding-supporter standing for the people who believed first. PageStock by Rarelm.",
    images: ["https://www.rarelm.com/og-pagestock.png"],
  },
};

const pagestockFaq = [
  {
    question: "What is PageStock?",
    answer:
      "PageStock is rarelm's way of turning support into standing. Back a verified creator or page early and you become one of their founding supporters — recognized, on the record, part of the rise from the beginning. Free for every verified human, built into rarelm.",
  },
  {
    question: "How does PageStock work?",
    answer:
      "Find verified creators and pages with real growth and real humans. Back them early and take your founding-supporter position before the world catches on. As they rise, your early standing grows with them — founding-supporter status, recognition, and a front-row place in what you helped build.",
  },
  {
    question: "Can any creator use PageStock?",
    answer:
      "Any AI-verified creator or public page on Rarelm can use PageStock. Mandatory AI verification ensures every creator and page is a real human or real entity — no bot-inflated or fake pages.",
  },
  {
    question: "Is PageStock free to join?",
    answer:
      "Yes. Creating a Rarelm account and accessing PageStock is completely free. Join the waitlist at rarelm.com to secure your free account.",
  },
  {
    question: "Why does PageStock only work on Rarelm?",
    answer:
      "On every other platform, follower counts are inflated by bots and growth is gamed — so none of it can be trusted. PageStock means something only because rarelm verifies every human. Real people. Real growth. Real backing — no fake supporters, no inflated numbers.",
  },
  {
    question: "Is PageStock like crypto or NFTs?",
    answer:
      "No. PageStock is not built on blockchain or cryptocurrency. It is built directly into the Rarelm platform — designed to be simple and accessible to everyone.",
  },
] as const;

const pagestockSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rarelm.com/pagestock",
      url: "https://www.rarelm.com/pagestock",
      name: "PageStock by Rarelm — Back the Ones You Believe In",
      description:
        "PageStock turns early support into founding-supporter standing on Rarelm. Back verified creators before the world catches on.",
      isPartOf: { "@id": "https://www.rarelm.com" },
      about: {
        "@type": "Thing",
        name: "PageStock",
        description:
          "Rarelm's way of turning early support into founding-supporter standing for verified creators and public pages.",
      },
      mentions: [
        {
          "@type": "Organization",
          name: "Rarelm",
          url: "https://www.rarelm.com",
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.rarelm.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "PageStock",
            item: "https://www.rarelm.com/pagestock",
          },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".cc-pagestock-hero-sub"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: pagestockFaq.map((item) => ({
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

export default function PageStockPage() {
  return (
    <>
      <Script
        id="pagestock-schema-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pagestockSchema),
        }}
      />
      <main className="cc-subpage">
        <header className="cc-subpage-section cc-subpage-hero">
          <div className="cc-section-inner">
            <div className="cc-subpage-hero-stack">
              <p className="cc-section-eyebrow">PageStock · rarelm</p>
              <h1 className="cc-hero-h1 cc-pagestock-h1">
                Back the ones you believe in. Early.
              </h1>
              <p className="cc-pagestock-hero-sub">
                Everywhere else, being early to a creator gets you bragging rights and
                nothing else. On rarelm, backing the real ones early gives you
                founding-supporter standing — and a place in the story as they rise.
              </p>
              <div className="cc-pagestock-actions">
                <Link href="/join" className="cc-btn-primary group">
                  <span>Join the waitlist — it&apos;s free</span>
                  <span aria-hidden className="cc-pagestock-cta-arrow">
                    →
                  </span>
                </Link>
                <Link href="#pagestock-faq" className="cc-pagestock-link">
                  Read the PageStock FAQ
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-definition"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <p className="cc-section-eyebrow">What PageStock is</p>
            <h2 id="pagestock-definition" className="cc-section-h2">
              Turning support into standing
            </h2>
            <p className="cc-pagestock-body">
              PageStock is rarelm&apos;s way of turning support into standing. Back a
              verified creator or page early and you become one of their founding
              supporters — recognized, on the record, part of the rise from the
              beginning. Free for every verified human, built into rarelm.
            </p>
          </div>
        </section>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-problem"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <p className="cc-section-eyebrow">The problem</p>
            <h2 id="pagestock-problem" className="cc-section-h2">
              Being early should mean something.
            </h2>
            <p className="cc-pagestock-body">
              You found them first. You shared the early posts, brought the friends,
              believed before the numbers did. And everywhere on the internet, that
              counts for exactly nothing — no recognition, no standing, no place in the
              story. The people who help build a creator&apos;s rise go invisible the
              moment it happens.
            </p>
          </div>
        </section>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-how"
        >
          <div className="cc-section-inner">
            <div className="cc-subpage-prose">
              <p className="cc-section-eyebrow">How it works</p>
              <h2 id="pagestock-how" className="cc-section-h2">
                Three steps to founding-supporter standing
              </h2>
            </div>
            <ol className="cc-hero-steps cc-pagestock-steps">
              <li className="cc-hero-step">
                <span className="cc-hero-step-num">01</span>
                <span className="cc-hero-step-title">Find the real ones</span>
                <span className="cc-hero-step-body">
                  Verified creators and pages. Real growth, real humans, no bots.
                </span>
              </li>
              <li className="cc-hero-step">
                <span className="cc-hero-step-num">02</span>
                <span className="cc-hero-step-title">Back them early</span>
                <span className="cc-hero-step-body">
                  Take your founding-supporter position before the world catches on.
                </span>
              </li>
              <li className="cc-hero-step">
                <span className="cc-hero-step-num">03</span>
                <span className="cc-hero-step-title">Rise together</span>
                <span className="cc-hero-step-body">
                  As they grow, your early standing grows with them: founding-supporter
                  status, recognition, and a front-row place in what you helped build.
                </span>
              </li>
            </ol>
          </div>
        </section>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-creators"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <p className="cc-section-eyebrow">For creators</p>
            <h2 id="pagestock-creators" className="cc-section-h2">
              Let the people who believe in you stand with you.
            </h2>
            <p className="cc-pagestock-body">
              Your earliest supporters are your most valuable — and everywhere else,
              they&apos;re just a number. PageStock lets you recognize them: turn loyal
              followers into founding supporters with real standing in your story, and
              build a community genuinely committed to your rise. Free, built into your
              verified rarelm presence.
            </p>
          </div>
        </section>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-rarelm"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <p className="cc-section-eyebrow">Why it only works on rarelm</p>
            <h2 id="pagestock-rarelm" className="cc-section-h2">
              This only works because everyone&apos;s real.
            </h2>
            <p className="cc-pagestock-body">
              On every other platform, follower counts are inflated by bots and growth is
              gamed — so none of it can be trusted. PageStock means something only
              because rarelm verifies every human. Real people. Real growth. Real
              backing — no fake supporters, no inflated numbers.
            </p>
          </div>
        </section>

        <section
          id="pagestock-faq"
          className="cc-subpage-section"
          aria-labelledby="pagestock-faq-heading"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <p className="cc-section-eyebrow">Frequently asked questions</p>
            <h2 id="pagestock-faq-heading" className="cc-section-h2">
              PageStock FAQ
            </h2>
            <dl className="cc-pagestock-faq">
              {pagestockFaq.map((item) => (
                <div key={item.question} className="cc-pagestock-faq-item">
                  <dt className="cc-pagestock-faq-q">{item.question}</dt>
                  <dd className="cc-pagestock-faq-a">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="cc-subpage-section"
          aria-labelledby="pagestock-close"
        >
          <div className="cc-section-inner cc-subpage-prose">
            <div className="cc-pagestock-close">
              <h2 id="pagestock-close" className="cc-section-h2 cc-section-h2-center">
                Be early. Be real.
              </h2>
              <p className="cc-pagestock-body cc-pagestock-body-center">
                Back the real ones before the world does.
              </p>
              <div className="cc-pagestock-actions cc-pagestock-actions-center">
                <Link href="/join" className="cc-btn-primary group">
                  <span>Join the waitlist — it&apos;s free</span>
                  <span aria-hidden className="cc-pagestock-cta-arrow">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
