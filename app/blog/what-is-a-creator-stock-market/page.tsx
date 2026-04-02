import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a Creator Stock Market? The Rise of PageStock | Rarelm",
  description:
    "A creator stock market lets fans and investors buy and sell shares in creators or their social pages. Learn how PageStock on Rarelm works.",
};

const WORDS_PER_MINUTE = 220;

const CONTENT_TEXT_FOR_READING_TIME = `
What is a Creator Stock Market? The Rise of PageStock
A creator stock market is a platform where fans, investors, and businesses can buy and sell shares in creators or their social media pages — just like trading stocks, but for people and their influence.
The Creator Economy Has a Fundamental Problem
What is PageStock?
Why a Creator Stock Market Makes Sense in 2026
Creators are businesses
Fans already invest — they just don't get paid
The creator economy needs new financial infrastructure
Who is PageStock For?
How is PageStock Different from Existing Creator Monetisation?
The Bigger Picture: Social Pages as Financial Assets
PageStock is Coming to Rarelm
Frequently Asked Questions
`;

function getReadingTimeMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export default function BlogPostPage() {
  const readingTime = getReadingTimeMinutes(CONTENT_TEXT_FOR_READING_TIME);

  return (
    <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-10">
          <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
            Blog · {readingTime} min read
          </p>
          <h1 className="mt-4 text-display font-semibold leading-[1.1] text-foreground">
            What is a Creator Stock Market? The Rise of PageStock
          </h1>
          <p className="mt-5 text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">
              A creator stock market is a platform where fans, investors, and
              businesses can buy and sell shares in creators or their social
              media pages — just like trading stocks, but for people and their
              influence.
            </strong>
          </p>
          <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
            If that sounds like the future, that&apos;s because it is. And
            it&apos;s already being built inside Rarelm through a feature called{" "}
            <strong className="text-foreground">PageStock</strong>.
          </p>
        </header>

        <hr className="my-10 border-white/10" />

        <section className="space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            The Creator Economy Has a Fundamental Problem
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            The creator economy is worth over $100 billion today and is
            projected to surpass $1 trillion by 2034. Millions of people build
            audiences, grow communities, and generate cultural influence — yet
            the financial system around them is broken.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Here&apos;s the problem: creators create enormous value but have
            almost no way to share that value with the people who helped them
            get there.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Think about it. If you discovered a creator when they had 500
            followers, supported them for years, shared their content, and
            helped them grow to 5 million followers — you get nothing. No
            financial upside. No stake in what you helped build.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Meanwhile, traditional investors who come in late with a cheque get
            all the return.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock on Rarelm is built to fix this.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            What is PageStock?
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock is Rarelm&apos;s creator stock market — a system that lets
            anyone invest in creators and social media pages, and lets creators
            raise investment directly from their own audience.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Think of it like a stock exchange, but instead of companies,
            you&apos;re trading shares in creators and their pages.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-body font-medium text-foreground">
              Here&apos;s how it works:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-body leading-relaxed text-(--fg-secondary)">
              <li>
                <strong className="text-foreground">
                  Creators list their page on PageStock
                </strong>{" "}
                and offer shares to their community
              </li>
              <li>
                <strong className="text-foreground">
                  Fans, investors, and businesses buy shares
                </strong>{" "}
                in creators they believe in
              </li>
              <li>
                <strong className="text-foreground">
                  Share value rises and falls
                </strong>{" "}
                based on a creator&apos;s growth, engagement, and influence
              </li>
              <li>
                <strong className="text-foreground">
                  Shareholders earn returns
                </strong>{" "}
                as the creator&apos;s page grows in value
              </li>
            </ul>
          </div>

          <p className="text-body leading-relaxed text-(--fg-secondary)">
            It turns passive fans into active stakeholders. It turns influence
            into a tradeable financial asset.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            Why a Creator Stock Market Makes Sense in 2026
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            The concept of investing in creators isn&apos;t just a gimmick —
            there&apos;s a deep economic logic behind it.
          </p>

          <h3 className="text-title font-semibold text-foreground">
            Creators are businesses
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            The most successful creators today operate exactly like small
            businesses. They have revenue streams, audiences, brand
            partnerships, and growth trajectories. Yet unlike businesses, they
            have no mechanism for outside investment beyond sponsorships and
            brand deals.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock changes that by treating creator pages as investable
            assets.
          </p>

          <h3 className="text-title font-semibold text-foreground">
            Fans already invest — they just don&apos;t get paid
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Every fan who shares a creator&apos;s content, comments, recommends
            them to friends, or buys their merch is already investing time and
            energy into that creator&apos;s growth. PageStock formalises this
            relationship and adds a financial dimension to it.
          </p>

          <h3 className="text-title font-semibold text-foreground">
            The creator economy needs new financial infrastructure
          </h3>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Platforms like Patreon and Substack let creators monetise through
            subscriptions. But subscriptions are transactional — you pay, you
            get content. PageStock is fundamentally different because it creates
            equity-like stakes in a creator&apos;s future growth. It&apos;s the
            difference between renting and owning.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            Who is PageStock For?
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock sits at the intersection of three groups:
          </p>
          <div className="space-y-4">
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              <strong className="text-foreground">Creators and influencers</strong>{" "}
              — who want to raise investment from their own community, reward
              their most loyal fans, and unlock new revenue beyond ads and
              sponsorships.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              <strong className="text-foreground">Fans and general users</strong>{" "}
              — who want to go beyond just watching and actually own a stake in
              the creators they love. If your favourite creator blows up, you
              should share in that success.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              <strong className="text-foreground">Investors and traders</strong>{" "}
              — who see the creator economy as an asset class and want a
              structured, transparent way to invest in it. PageStock brings the
              logic of financial markets to creator influence.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              <strong className="text-foreground">Businesses and brands</strong>{" "}
              — who want deeper relationships with creators beyond one-off
              sponsorship deals. Owning shares in a creator is a fundamentally
              different kind of partnership.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            How is PageStock Different from Existing Creator Monetisation?
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            There are already plenty of ways for creators to make money. So what
            makes PageStock different?
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="px-5 py-4 text-caption font-semibold uppercase tracking-wide text-(--fg-secondary)">
                      Method
                    </th>
                    <th className="px-5 py-4 text-caption font-semibold uppercase tracking-wide text-(--fg-secondary)">
                      How it works
                    </th>
                    <th className="px-5 py-4 text-caption font-semibold uppercase tracking-wide text-(--fg-secondary)">
                      Who benefits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-5 py-4 text-body text-foreground">
                      Ad revenue (YouTube, TikTok)
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Platform pays creator per view
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Creator only
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-body text-foreground">
                      Subscriptions (Patreon)
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Fans pay monthly for content
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Creator only
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-body text-foreground">
                      Sponsorships
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Brand pays for promotion
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Creator + brand
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-body text-foreground">
                      NFTs / digital collectibles
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Fans buy digital items
                    </td>
                    <td className="px-5 py-4 text-body text-(--fg-secondary)">
                      Creator + fan
                    </td>
                  </tr>
                  <tr className="bg-white/[0.03]">
                    <td className="px-5 py-4 text-body font-semibold text-foreground">
                      PageStock
                    </td>
                    <td className="px-5 py-4 text-body font-medium text-foreground">
                      Fans buy shares in creator&apos;s page
                    </td>
                    <td className="px-5 py-4 text-body font-medium text-foreground">
                      Creator + fan + investor
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-body leading-relaxed text-(--fg-secondary)">
            The key difference is upside sharing. With PageStock, if a creator
            grows from 10,000 to 1,000,000 followers, everyone who held shares
            during that journey benefits financially — not just the creator.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            The Bigger Picture: Social Pages as Financial Assets
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock represents a new way of thinking about social media pages.
            Instead of just a place to post content, a social media page becomes
            a financial asset — something with measurable value that can be
            owned, traded, and invested in.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            This is a profound shift. It means:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body leading-relaxed text-(--fg-secondary)">
            <li>A creator&apos;s page has a market cap, not just a follower count</li>
            <li>
              Early supporters can have real financial stakes in creators they
              helped build
            </li>
            <li>The relationship between fans and creators becomes genuinely mutual</li>
            <li>
              The creator economy develops the financial infrastructure it has
              always lacked
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-headline font-semibold text-foreground">
            PageStock is Coming to Rarelm
          </h2>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            PageStock is a core feature of Rarelm — the AI-verified social
            expression platform being built for creators, investors, businesses,
            and everyday users who believe social media should be more than
            passive scrolling.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            Rarelm combines AI-verified identity (no bots, no fake accounts),
            community tools, content sharing, and now PageStock — a creator
            stock market that lets anyone invest in the pages and people they
            believe in.
          </p>
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            <strong className="text-foreground">Join the Rarelm waitlist</strong>{" "}
            to be among the first to access PageStock when it launches.
          </p>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-headline font-semibold text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                What is a creator stock market?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                A creator stock market is a platform where fans and investors
                can buy and sell shares in creators or their social media pages,
                similar to how stocks work for companies.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                What is PageStock?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                PageStock is Rarelm&apos;s creator stock market feature. It lets
                creators list shares in their pages and lets fans, investors,
                and businesses invest in those creators directly.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                Can I really invest in a creator&apos;s social media page?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                Yes — through PageStock on Rarelm, you can buy shares in creator
                pages. As the page grows in followers, engagement and influence,
                the value of those shares can increase.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                Who can use PageStock?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                PageStock is designed for creators who want to raise investment,
                fans who want a financial stake in creators they support, and
                investors who want exposure to the creator economy.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                How is PageStock different from Patreon or subscriptions?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                Subscriptions give you access to content in exchange for a
                recurring payment. PageStock gives you equity-like ownership in
                a creator&apos;s page — meaning you benefit from their growth,
                not just their content.
              </p>
            </details>

            <details className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <summary className="cursor-pointer text-body font-semibold text-foreground">
                When does PageStock launch?
              </summary>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                PageStock is launching as part of Rarelm. Join the waitlist at{" "}
                <span className="text-foreground">rarelm.com</span> to get early
                access.
              </p>
            </details>
          </div>
        </section>

        <footer className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <p className="text-headline font-semibold text-foreground">
              Ready to be early?
            </p>
            <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
              Join the Rarelm waitlist to be among the first to access PageStock
              when it launches.
            </p>
            <div className="mt-7 flex justify-center">
              <Link
                href="/#join-waitlist"
                className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
              >
                Join Waitlist
                <span
                  aria-hidden
                  className="opacity-0 transition-[opacity] duration-300 ease-out group-hover:opacity-70"
                >
                  →
                </span>
              </Link>
            </div>
            <p className="mt-6 text-caption text-(--fg-tertiary)">
              Rarelm is the AI-verified social expression platform for real
              people. No bots. No fake accounts. Just verified humans
              connecting, creating, and now — investing.
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}

