import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PageStock by Rarelm — The World's First Creator Stock Market",
  description:
    "PageStock is the world's first creator stock market. Invest in creators and public pages, earn dividends, and turn your social influence into a tradeable financial asset. Free on Rarelm.",
};

export default function PageStockPage() {
  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-12">
          <h1 className="text-display font-semibold leading-[1.1] text-foreground">
            The World&apos;s First Creator Stock Market
          </h1>
          <p className="mt-4 text-caption uppercase tracking-wide text-(--fg-secondary)">
            PageStock · rarelm.com/pagestock
          </p>
        </header>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            HERO SECTION
          </h2>
          <h3 className="text-title font-semibold text-foreground">
            The World&apos;s First Creator Stock Market
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">
              Social media has made billions of people famous. PageStock makes
              them investable.
            </strong>
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            For the first time in history, you can buy shares in creators and
            public pages — and earn real financial returns as they grow. And if
            you are a creator or run a public page, you can raise investment
            directly from your own community.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            This is PageStock. Built into Rarelm. Free for every verified user.
          </p>
          <div className="pt-2">
            <Link
              href="/join"
              className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
            >
              <span>Join the Waitlist — It&apos;s Free</span>
              <span
                aria-hidden
                className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
              >
                →
              </span>
            </Link>
          </div>
          <div className="pt-4">
            <Link
              href="/faq"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Read the PageStock FAQ
            </Link>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            THE PROBLEM
          </h2>
          <h3 className="text-title font-semibold text-foreground">
            Everyone builds value on social media. Almost nobody gets paid for
            it.
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Think about what happens on social media today:
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            A creator builds an audience of 5 million people over 5 years. Their
            fans share content, comment, promote, and drive every metric that
            makes the creator valuable. Brands pay the creator millions in
            sponsorship deals. The platform earns billions from the attention
            those fans generate.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            And the fans? They get nothing.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Not a single cent. No stake. No share. No upside. Just the privilege
            of watching someone else profit from the value they helped create.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock changes this permanently.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            WHAT IS PAGESTOCK?
          </h2>
          <h3 className="text-title font-semibold text-foreground">
            A stock market — but for creators and public pages instead of
            companies.
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Just like the stock market lets you invest in companies you believe in
            and earn returns as they grow — PageStock lets you invest in creators,
            public figures, and social pages you believe in, and earn as they
            grow.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Every creator and public page on Rarelm can list on PageStock. Every
            verified user can buy shares. As the page grows in followers,
            engagement, and influence — the value of those shares grows with it.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            You believed in them before anyone else. Now you can own a piece of
            what you helped build.
          </p>
        </section>

        <section className="mt-14 space-y-8">
          <h2 className="text-headline font-semibold text-foreground">
            HOW IT WORKS
          </h2>

          <div className="space-y-6">
            <h3 className="text-title font-semibold text-foreground">
              For Creators &amp; Public Pages
            </h3>
            <h3 className="text-title font-semibold text-foreground">
              Step 1 — Get AI-verified on Rarelm
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Every creator and public page on Rarelm is mandatorily verified by
              AI — confirming a real human or real entity is behind every account.
              No fake pages. No bot-inflated follower counts.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 2 — List your page on PageStock
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Set the number of shares you want to offer and at what initial
              value. Your community can then buy shares directly — turning your
              most loyal supporters into genuine financial stakeholders in your
              growth.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 3 — Grow together
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              As your page grows, so does the value of every share. Your
              investors — fans, businesses, and early believers — grow with
              you. This creates a new kind of loyalty: not just emotional, but
              financial.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 4 — Raise investment from your own audience
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Instead of depending entirely on brand deals, ad revenue, or
              platform payouts, PageStock gives you a direct line to investment
              from the people who know your value best — your own community.
            </p>
          </div>

          <div className="space-y-6 border-t border-white/10 pt-10">
            <h3 className="text-title font-semibold text-foreground">
              For Fans, Investors &amp; Businesses
            </h3>
            <h3 className="text-title font-semibold text-foreground">
              Step 1 — Join Rarelm for free
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Create your free AI-verified account on Rarelm. Every user is
              verified as a real human — so every investment decision is made in
              a trustworthy, bot-free environment.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 2 — Browse PageStock
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Discover creators, public figures, and pages listed on PageStock.
              See their growth metrics, engagement data, and share value — all
              transparent, all verified.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 3 — Buy shares in pages you believe in
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Invest in the creators you love, the public pages you follow, or the
              emerging voices you spotted early. Your shares represent a real
              financial stake in their growth.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Step 4 — Earn as they grow
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              As the pages you have invested in grow in followers, engagement,
              and influence — your share value increases. PageStock turns your
              social media knowledge into a genuine investment advantage.
            </p>
          </div>
        </section>

        <section className="mt-14 space-y-8">
          <h2 className="text-headline font-semibold text-foreground">
            WHO IS PAGESTOCK FOR?
          </h2>
          <div className="space-y-6">
            <h3 className="text-title font-semibold text-foreground">
              Creators &amp; Public Pages
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              You have built something real. Your audience is your most valuable
              asset. PageStock lets you unlock the financial value of that asset
              by offering shares to your community — raising investment from the
              people who believe in you most, rewarding your earliest
              supporters, and building a fanbase with genuine skin in the game.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Fans &amp; General Users
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              You have always known which creators were going to blow up before
              anyone else did. Now you can put money behind that instinct. Buy
              shares in creators early, watch them grow, and earn real financial
              returns — turning years of scrolling, sharing, and supporting into
              something that pays back.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Investors &amp; Traders
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              The creator economy is heading toward $1 trillion. Until now there
              has been no structured, transparent way to invest in it. PageStock
              brings the logic of financial markets to creator influence — with
              verified identities, real growth data, and a platform built for
              trust from the ground up.
            </p>
            <h3 className="text-title font-semibold text-foreground">
              Businesses &amp; Brands
            </h3>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Sponsorship deals are transactional. PageStock creates something
              deeper — a genuine financial stake in a creator&apos;s future.
              Instead of paying for one campaign, invest in a creator&apos;s
              long-term growth and build a partnership that compounds over time.
            </p>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            WHY PAGESTOCK IS DIFFERENT
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-body">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-foreground sm:px-5" />
                    <th className="px-4 py-3 font-semibold text-foreground sm:px-5">
                      Traditional social media
                    </th>
                    <th className="px-4 py-3 font-semibold text-foreground sm:px-5">
                      PageStock on Rarelm
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-(--fg-secondary)">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Who earns?
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      Platform and top creators only
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      Every user — fans, creators, investors
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Can fans invest in creators?
                    </td>
                    <td className="px-4 py-3 sm:px-5">No</td>
                    <td className="px-4 py-3 sm:px-5">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Are accounts verified?
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      No — bots and fakes everywhere
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      Yes — mandatory AI verification
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Can creators raise from their audience?
                    </td>
                    <td className="px-4 py-3 sm:px-5">No</td>
                    <td className="px-4 py-3 sm:px-5">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Is it built on crypto or NFTs?
                    </td>
                    <td className="px-4 py-3 sm:px-5">N/A</td>
                    <td className="px-4 py-3 sm:px-5">
                      No — simple and accessible to everyone
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                      Who can participate?
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      Anyone including bots
                    </td>
                    <td className="px-4 py-3 sm:px-5">
                      Verified real humans only
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            THE RARELM DIFFERENCE
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock is only possible because of what Rarelm is built on —
            mandatory AI verification for every single user.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            On every other social platform, follower counts are inflated by bots,
            engagement is gamed by fake accounts, and there is no way to trust
            the data behind a creator&apos;s growth. This makes creator
            investing genuinely risky.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            On Rarelm, every follower is a verified real human. Every engagement
            signal is authentic. Every creator is confirmed as a real person or
            real entity. This makes PageStock something that has never existed
            before — a trustworthy, bot-free creator investment market where the
            data you are investing on is real.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            No bots. No fake accounts. No scams. Just verified humans building
            real value — and sharing it.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            PAGESTOCK ACROSS YOUR 3 PROFILES
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock works across all three of Rarelm&apos;s profile types:
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">Anonymous (Me)</strong> — Invest
            in creators privately. Your portfolio is yours alone. Participate
            financially without revealing your identity.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">Family &amp; Friends</strong> —
            Share investment ideas with the people you trust. Discover creators
            together. Build a shared portfolio with people close to you.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">Professional</strong> — For
            serious investors, traders, and businesses. Manage positions, access
            deeper analytics, and build verified creator partnerships through
            your professional identity.
          </p>
        </section>

        <section className="mt-14 space-y-8">
          <h2 className="text-headline font-semibold text-foreground">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-title font-semibold text-foreground">
                Is PageStock like crypto or NFTs?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                No. PageStock is not built on blockchain or cryptocurrency. It is
                a creator and user earnings system built directly into the Rarelm
                platform — simple, accessible, and designed for everyone
                regardless of their crypto knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-title font-semibold text-foreground">
                Do I need investment experience to use PageStock?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                No. PageStock is designed to be as straightforward as following a
                creator — but with financial participation built in. If you have
                ever followed someone on social media and watched them grow, you
                already have the instinct PageStock is built for.
              </p>
            </div>
            <div>
              <h3 className="text-title font-semibold text-foreground">
                Can any creator or public page list on PageStock?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                Any AI-verified creator or public page on Rarelm can list on
                PageStock. Mandatory AI verification ensures every listing is a
                real human or real entity — protecting investors from fake or
                bot-inflated pages.
              </p>
            </div>
            <div>
              <h3 className="text-title font-semibold text-foreground">
                How is share value calculated on PageStock?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                Share value on PageStock is based on a creator&apos;s verified
                growth metrics — including followers, engagement, and activity on
                Rarelm. Because every user is AI-verified, these metrics reflect
                real human interest rather than bot-inflated numbers.
              </p>
            </div>
            <div>
              <h3 className="text-title font-semibold text-foreground">
                Is it free to join PageStock?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                Yes. Creating a Rarelm account and accessing PageStock is
                completely free. Join the waitlist at rarelm.com to secure your
                free account.
              </p>
            </div>
            <div>
              <h3 className="text-title font-semibold text-foreground">
                When does PageStock launch?
              </h3>
              <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
                PageStock launches as part of Rarelm. Join the waitlist at
                rarelm.com to get early access when the platform goes live.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            CLOSING CTA
          </h2>
          <h3 className="text-title font-semibold text-foreground">
            The creator economy is worth billions. You have been funding it for
            free.
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock changes that. Be among the first to invest in creators, earn
            from the platform, and own a stake in the future of social media.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Join the Rarelm waitlist — free, takes 30 seconds.
          </p>
          <div className="pt-2">
            <Link
              href="/join"
              className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
            >
              <span>Join the Waitlist</span>
              <span
                aria-hidden
                className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
              >
                →
              </span>
            </Link>
          </div>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Want the full story of Rarelm? Read{" "}
            <Link
              href="/vision"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              our vision
            </Link>{" "}
            or{" "}
            <Link
              href="/faq"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              browse the FAQ
            </Link>
            .
          </p>
        </section>

        <footer className="mt-14 border-t border-white/10 pt-10">
          <p className="text-body italic leading-relaxed text-(--fg-secondary)">
            PageStock is part of Rarelm — the world&apos;s first AI-verified
            social expression platform. Every user mandatorily verified. No bots.
            No scams. No fake accounts.
          </p>
          <p className="mt-4 text-caption text-(--fg-tertiary)">
            rarelm.com | rarelm.com/pagestock
          </p>
        </footer>
      </article>
    </main>
  );
}
