import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rarelm Vision — Building the Future of AI Social Expression",
  description:
    "Rarelm is on a mission to rebuild social media from the ground up — AI-verified, bot-free, and built for genuine human expression. Discover the vision behind Rarelm.",
};

export default function VisionPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-display font-semibold leading-[1.1] text-foreground">
          Our Mission: Rebuild Social Media for Real People
        </h1>
      </div>
    </main>
  );
}

