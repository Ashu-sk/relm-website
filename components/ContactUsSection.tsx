"use client";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="section-block section-padding-standard"
      aria-labelledby="contact-us-heading"
    >
      <div className="section-container">
      <div className="mx-auto w-full max-w-2xl text-center">
        <h2
          id="contact-us-heading"
          className="text-display font-semibold uppercase tracking-wide"
        >
          Contact Us
        </h2>
        <p className="mt-6 text-body leading-relaxed text-(--fg-secondary)">
          <span className="contact-us-prompts flex flex-wrap justify-center gap-x-6 gap-y-1">
            <span>Questions?</span>
            <span>Ideas?</span>
            <span>Skepticism?</span>
          </span>
          <br />
          We like all three.
        </p>

        <div className="contact-us-tabs mx-auto mt-10 flex justify-center">
          <a
            href="mailto:ashutosh@mavrist.com"
            className="contact-us-tab inline-flex items-center gap-1.5 rounded-full border border-(--fg-tertiary)/30 px-5 py-2.5 text-body font-medium text-foreground transition-colors hover:border-(--fg-secondary)/50 hover:bg-white/5"
            aria-label="Email us"
          >
            Email
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
