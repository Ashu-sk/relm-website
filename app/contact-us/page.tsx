import type { Metadata } from "next";

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
      </div>
    </main>
  );
}

