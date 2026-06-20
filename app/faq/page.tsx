import type { Metadata } from "next";
import Link from "next/link";
import { faqs, SITE_URL } from "@/lib/faqData";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  alternates: {
    canonical: "/faq",
  },
  title: "Rarelm FAQ — AI-Verified Social Platform Questions",
  description:
    "Answers to common questions about Rarelm — AI verification, PageStock, REM, the Original Tag, social commerce, founder Ashutosh Kesharwani, MAVRIST TECH PVT LTD, and how to join the waitlist.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-10">
            <h1 className="text-display font-semibold leading-[1.1] text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-caption uppercase tracking-wide text-(--fg-secondary)">
              Rarelm FAQ
            </p>
          </header>

          <div>
            {faqs.map((item) => (
              <section key={item.question} className="mt-8 first:mt-0">
                <h2 className="text-title font-semibold text-foreground">
                  {item.question}
                </h2>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  {item.answer}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-14 text-body italic leading-relaxed text-(--fg-secondary)">
            Still have a question?{" "}
            <Link
              href="/join"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              Join the waitlist
            </Link>
            , explore{" "}
            <Link
              href="/pagestock"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              PageStock
            </Link>
            , or reach out at{" "}
            <Link
              href="/contact-us"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              rarelm.com/contact
            </Link>{" "}
            — we&apos;d love to hear from you.
          </p>
          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Explore Rarelm"
          >
            <Link
              href="/pagestock"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Explore PageStock
            </Link>
            <Link
              href="/join"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Join the waitlist
            </Link>
            <Link
              href="/vision"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Our mission
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
