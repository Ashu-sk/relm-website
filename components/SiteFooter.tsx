import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      className="section-block section-padding-standard text-center"
      aria-label="Site footer"
    >
      <div className="section-container mx-auto max-w-2xl">
        <p className="text-body font-normal text-foreground">Rarelm</p>
        <p className="mt-2 text-body text-(--fg-tertiary)">
          Founder — Ashutosh Kesharwani
        </p>
        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Explore Rarelm"
        >
          <Link
            href="/pagestock"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Explore PageStock
          </Link>
          <Link
            href="/original-tag"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Original Tag
          </Link>
          <Link
            href="/qac"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            QAC
          </Link>
          <Link
            href="/blog"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Read the FAQ
          </Link>
          <Link
            href="/join"
            className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
          >
            Join the waitlist
          </Link>
        </nav>
        <nav
          className="footer-icons mt-4 flex justify-center gap-6"
          aria-label="Social links"
        >
          <a
            href="https://x.com/rarelmHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon text-(--fg-tertiary) transition-colors hover:text-(--fg-secondary)"
            aria-label="X (Twitter)"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/rarelm/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon text-(--fg-tertiary) transition-colors hover:text-(--fg-secondary)"
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </nav>
        <p className="mt-4 text-body text-(--fg-tertiary)">
          © Rarelm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
