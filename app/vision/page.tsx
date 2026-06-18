import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rarelm Vision — Building the Future of AI Social Expression",
  description:
    "Rarelm is on a mission to rebuild social media from the ground up — AI-verified, bot-free, and built for genuine human expression. Discover the vision behind Rarelm.",
};

export default function VisionPage() {
  return (
    <>
    <main className="rl-sec px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="rl-h1">
          Our Mission: Rebuild Social Media for Real People
        </h1>
        <p className="mt-6 rl-ss">
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
        <p className="mt-6 rl-ss">
          Rarelm exists because the internet forgot what real looks like. A decade of
          fake accounts, bots, scams, and impersonation has caused billions in global
          financial losses and destroyed trust in social media. We built Rarelm to fix
          this at the identity layer — using facial authentication similar to Apple Face
          ID to verify every single user as a real, unique human before they can join.
          Our vision is a world where your social identity is verified, your expression
          is free, your commerce is safe, and your participation in the platform earns
          you real financial returns through PageStock. Real Is Rare. Rarelm is built
          for those who are.
        </p>
      </div>
    </main>
      <SiteFooter />
    </>
  );
}
