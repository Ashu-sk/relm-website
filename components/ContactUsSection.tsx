"use client";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="cc-section cc-contact"
      aria-labelledby="contact-us-heading"
    >
      <div className="cc-section-inner">
        <p className="cc-section-eyebrow cc-section-eyebrow-center">
          <span className="cc-hero-dot" aria-hidden />
          Contact
        </p>
        <h2 id="contact-us-heading" className="cc-section-h2 cc-section-h2-center">
          Questions? Ideas? Skepticism?
        </h2>
        <p className="cc-contact-line">
          <span className="cc-contact-prompts">
            <span>Questions?</span>
            <span>Ideas?</span>
            <span>Skepticism?</span>
          </span>
          <br />
          We like all three.
        </p>

        <div className="cc-contact-actions">
          <a
            href="mailto:ashutosh@rarelm.com"
            className="cc-contact-email"
            aria-label="Email us"
          >
            Email →
          </a>
        </div>
      </div>
    </section>
  );
}
