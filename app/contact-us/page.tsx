import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Rarelm — Get in Touch With Our Team",
  description:
    "Have a question about Rarelm, PageStock, or partnerships? Reach out to our team. We'd love to hear from creators, investors, and businesses building with us.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <main className="cc-subpage">
        <header className="cc-subpage-section cc-subpage-hero">
          <div className="cc-section-inner">
            <div className="cc-subpage-hero-stack">
              <h1 className="rl-h1">
                Get in Touch
              </h1>
              <p className="mt-6 rl-ss">
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
          </div>
        </header>

        <section className="cc-subpage-section">
          <div className="cc-section-inner cc-subpage-prose space-y-6">
            <p className="rl-ss">
              Contact us for press and partnerships, PageStock and creator questions, investor
              conversations, or anything safety-related (impersonation, scams, or reporting).
              If you&apos;re not sure where to start, send a short note with your goal and we&apos;ll
              route it to the right person.
            </p>
            <p className="rl-ss">
              Have a question about Rarelm, PageStock, or partnerships? We would love to hear
              from you. Whether you are a creator exploring PageStock for your community, an investor
              interested in Rarelm&apos;s pre-seed round, a business wanting to build a verified
              community, or a journalist covering AI social media — reach out and our team
              will respond within 24 hours. Rarelm is a product of Mavrist Pvt Ltd, Noida,
              India.
            </p>
            <p className="rl-ss">
              Learn more about <a href="/pagestock">PageStock</a>, explore our{" "}
              <a href="/faq">frequently asked questions</a>, or{" "}
              <a href="/join">join the Rarelm waitlist</a> today.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
