import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Rarelm — Get in Touch With Our Team",
  description:
    "Have a question about Rarelm, PageStock, or partnerships? Reach out to our team. We'd love to hear from creators, investors, and businesses building with us.",
};

export default function ContactUsPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-display font-semibold leading-[1.1] text-foreground">
          Get in Touch
        </h1>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          For quick answers, check{" "}
          <Link
            href="/faq"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            the FAQ
          </Link>
          . If you&apos;re here for PageStock, start at{" "}
          <Link
            href="/pagestock"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            rarelm.com/pagestock
          </Link>
          . Otherwise, you can{" "}
          <Link
            href="/join"
            className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
          >
            join the waitlist
          </Link>{" "}
          and we&apos;ll keep you updated.
        </p>
      </div>
    </main>
  );
}

