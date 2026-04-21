import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "PageStock by Rarelm — The World's First Creator Stock Market",
  description:
    "Buy shares in creators and public pages. Earn real returns as they grow. PageStock is the world's first AI-verified creator stock market — free for every verified user.",
  alternates: {
    canonical: "https://www.rarelm.com/pagestock",
  },
  openGraph: {
    title: "PageStock — Invest in Creators. Earn as They Grow.",
    description:
      "The world's first creator stock market. Buy shares in verified creators and public pages. Built into Rarelm — free for every verified user.",
    url: "https://www.rarelm.com/pagestock",
    type: "website",
    images: [{ url: "https://www.rarelm.com/og-pagestock.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PageStock — The World's First Creator Stock Market",
    description: "Invest in creators. Earn as they grow. PageStock by Rarelm.",
    images: ["https://www.rarelm.com/og-pagestock.png"],
  },
};

const pagestockFaq = [
  {
    question: "What is PageStock?",
    answer:
      "PageStock is the world's first creator stock market — built into Rarelm. It lets fans and investors buy shares in AI-verified creators and public pages, earning real financial returns as those pages grow in followers, engagement, and influence. Every creator and public page on Rarelm can list on PageStock, and every verified user can buy shares.",
  },
  {
    question: "How does PageStock work?",
    answer:
      "Creators and public pages on Rarelm list on PageStock by setting the number of shares they want to offer and an initial value. Fans, investors, and businesses buy shares directly. As the page grows in verified followers, engagement, and influence, the value of those shares increases. Every participant — creator, fan, or investor — must be AI-verified as a real human on Rarelm.",
  },
  {
    question: "Is PageStock like crypto or NFTs?",
    answer:
      "No. PageStock is not built on blockchain or cryptocurrency. It is a creator investment system built directly into the Rarelm platform — designed to be simple and accessible to everyone, regardless of crypto or investment background.",
  },
  {
    question: "Can any creator list on PageStock?",
    answer:
      "Any AI-verified creator or public page on Rarelm can list on PageStock. Mandatory AI verification ensures every listing is a real human or real entity — protecting investors from bot-inflated or fake pages.",
  },
  {
    question: "Is PageStock free to join?",
    answer:
      "Yes. Creating a Rarelm account and accessing PageStock is completely free. Join the waitlist at rarelm.com to secure your free account.",
  },
  {
    question: "How is share value calculated on PageStock?",
    answer:
      "Share value on PageStock is based on a creator's verified growth metrics — including followers, engagement, and activity on Rarelm. Because every Rarelm user is AI-verified as a real human, these metrics reflect genuine human interest rather than bot-inflated numbers.",
  },
  {
    question: "Who can use PageStock?",
    answer:
      "PageStock is built for four groups: creators and public pages who want to raise investment from their community; fans and general users who want to earn returns on creators they believe in; investors and traders looking to participate in the creator economy; and businesses and brands who want a long-term financial stake in creator partnerships rather than one-off sponsorships.",
  },
] as const;

const pagestockSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rarelm.com/pagestock",
      url: "https://www.rarelm.com/pagestock",
      name: "PageStock by Rarelm — The World's First Creator Stock Market",
      description:
        "PageStock is the world's first creator stock market. Fans and investors buy shares in AI-verified creators and public pages, earning financial returns as those pages grow.",
      isPartOf: { "@id": "https://www.rarelm.com" },
      about: {
        "@type": "Thing",
        name: "Creator Stock Market",
        description:
          "A financial market where fans and investors can buy and sell shares in social media creators and public pages, earning returns as those pages grow in followers, engagement, and influence.",
        sameAs: [],
      },
      mentions: [
        {
          "@type": "Organization",
          name: "Rarelm",
          url: "https://www.rarelm.com",
        },
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.rarelm.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "PageStock",
            item: "https://www.rarelm.com/pagestock",
          },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-definition", ".key-claim"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: pagestockFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function PageStockPage() {
  return (
    <>
      <Script
        id="pagestock-schema-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pagestockSchema),
        }}
      />
      <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-12">
            <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
              PAGESTOCK · RARELM.COM/PAGESTOCK
            </p>
            <h1 className="mt-4 text-display font-semibold leading-[1.1] text-foreground">
              The World&apos;s First Creator Stock Market
            </h1>
            <p className="hero-definition mt-6 text-body leading-relaxed text-(--fg-secondary)">
              PageStock is Rarelm&apos;s built-in creator stock market — the first system
              that lets fans and investors buy shares in social media creators and public
              pages, earning financial returns as those pages grow in verified followers,
              engagement, and influence. It is free for every verified user and built
              directly into the Rarelm platform.
            </p>
            <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
              Social media made billions of people famous. PageStock makes them investable.
              For the first time, you can own a stake in the creators you helped build —
              and earn real returns as they grow.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
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
              <Link
                href="#pagestock-faq"
                className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
              >
                Read the PageStock FAQ
              </Link>
            </div>
          </header>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-problem">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE PROBLEM
              </p>
              <h2 id="pagestock-problem" className="text-headline font-semibold text-foreground">
                Everyone builds value on social media. Almost nobody gets paid for it.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              A creator builds an audience of 5 million people over 5 years. Their fans share
              content, comment, promote, and drive every metric that makes the creator
              valuable. Brands pay the creator millions. The platform earns billions from the
              attention those fans generate. The creator economy is projected to reach $1
              trillion — built almost entirely on unpaid fan contribution.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              The fans? They get nothing. Not a single cent. No stake. No share. No upside.
              Just the privilege of watching someone else profit from the value they helped
              create.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">
                PageStock changes this permanently.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-definition">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHAT IS PAGESTOCK
              </p>
              <h2 id="pagestock-definition" className="text-headline font-semibold text-foreground">
                A stock market — but for creators and public pages instead of companies.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Just like the stock market lets you invest in companies you believe in — PageStock
              lets you invest in creators, public figures, and social pages you believe in, and
              earn as they grow.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Every creator and public page on Rarelm can list on PageStock. Every verified user
              can buy shares. As the page grows in followers, engagement, and influence — the
              value of those shares grows with it.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">
                You believed in them before anyone else. Now you can own a piece of what you
                helped build.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-10" aria-labelledby="pagestock-how">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                HOW IT WORKS
              </p>
              <h2 id="pagestock-how" className="text-headline font-semibold text-foreground">
                How PageStock works
              </h2>
            </header>

            <div className="grid gap-10 md:grid-cols-2">
              <section className="space-y-4" aria-labelledby="pagestock-creators">
                <h3 id="pagestock-creators" className="text-title font-semibold text-foreground">
                  For Creators &amp; Public Pages
                </h3>
                <ol className="list-decimal space-y-3 pl-5 text-body leading-relaxed text-(--fg-secondary)">
                  <li>
                    Get AI-verified on Rarelm. Every creator and public page is mandatorily
                    verified by AI — confirming a real human or real entity is behind every
                    account. No fake pages. No bot-inflated counts.
                  </li>
                  <li>
                    List your page on PageStock. Set the number of shares you want to offer and
                    an initial value. Your community buys shares directly, turning your most
                    loyal supporters into genuine financial stakeholders.
                  </li>
                  <li>
                    Grow together. As your page grows, so does the value of every share. Fans,
                    businesses, and early believers grow with you.
                  </li>
                  <li>
                    Raise investment from your own audience — not only from brand deals or
                    platform ad revenue. A direct line to investment from the people who know
                    your value best.
                  </li>
                </ol>
              </section>

              <section className="space-y-4" aria-labelledby="pagestock-fans">
                <h3 id="pagestock-fans" className="text-title font-semibold text-foreground">
                  For Fans, Investors &amp; Businesses
                </h3>
                <ol className="list-decimal space-y-3 pl-5 text-body leading-relaxed text-(--fg-secondary)">
                  <li>
                    Join Rarelm for free. Create your AI-verified account. Every user is
                    confirmed as a real human — so every investment decision is made in a
                    trustworthy, bot-free environment.
                  </li>
                  <li>
                    Browse PageStock. Discover creators, public figures, and pages listed on
                    PageStock. See their verified growth metrics, engagement data, and share
                    value — all transparent, all verified.
                  </li>
                  <li>
                    Buy shares in pages you believe in. Invest in the creators you love, the
                    pages you follow, or the emerging voices you spotted early. Your shares
                    represent a real financial stake in their growth.
                  </li>
                  <li>
                    Earn as they grow. As the pages you invested in grow in followers,
                    engagement, and influence — your share value increases. PageStock turns
                    your social media knowledge into a genuine investment advantage.
                  </li>
                </ol>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-8" aria-labelledby="pagestock-who">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHO IS PAGESTOCK FOR
              </p>
              <h2 id="pagestock-who" className="text-headline font-semibold text-foreground">
                Built for everyone in the creator economy
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Creators &amp; Public Pages</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  You have built something real. Your audience is your most valuable asset.
                  PageStock lets you unlock the financial value of that asset — raising
                  investment from the people who believe in you most and rewarding your
                  earliest supporters with genuine financial stakes in your success.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Fans &amp; General Users</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  You have always known which creators were going to blow up before anyone
                  else did. Now you can put money behind that instinct. Buy shares in creators
                  early, watch them grow, and earn real financial returns — turning years of
                  scrolling and supporting into something that pays back.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Investors &amp; Traders</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  The creator economy is projected to reach $1 trillion. Until now there has
                  been no structured, transparent way to invest in it. PageStock brings the
                  logic of financial markets to creator influence — with verified identities,
                  real growth data, and a platform built for trust from the ground up.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Businesses &amp; Brands</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Sponsorship deals are transactional. PageStock creates something deeper —
                  a genuine financial stake in a creator&apos;s future. Instead of paying for
                  one campaign, invest in a creator&apos;s long-term growth and build a
                  partnership that compounds over time.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-table">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHY PAGESTOCK IS DIFFERENT
              </p>
              <h2 id="pagestock-table" className="text-headline font-semibold text-foreground">
                What no other platform offers
              </h2>
            </header>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-body">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground sm:px-5">
                        Feature
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground sm:px-5">
                        Traditional Social Media
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold text-foreground sm:px-5">
                        PageStock on Rarelm
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-(--fg-secondary)">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                        Who earns financial returns?
                      </td>
                      <td className="px-4 py-3 sm:px-5">Platform and top creators only</td>
                      <td className="px-4 py-3 sm:px-5">Every user — fans, creators, investors</td>
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
                      <td className="px-4 py-3 sm:px-5">No — bots and fakes widespread</td>
                      <td className="px-4 py-3 sm:px-5">Yes — mandatory AI verification</td>
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
                        Built on crypto or NFTs?
                      </td>
                      <td className="px-4 py-3 sm:px-5">N/A</td>
                      <td className="px-4 py-3 sm:px-5">No — simple and accessible to everyone</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground sm:px-5">
                        Who can participate?
                      </td>
                      <td className="px-4 py-3 sm:px-5">Anyone including bots</td>
                      <td className="px-4 py-3 sm:px-5">Verified real humans only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-rarelm">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE RARELM DIFFERENCE
              </p>
              <h2 id="pagestock-rarelm" className="text-headline font-semibold text-foreground">
                PageStock is only possible because Rarelm is built differently.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              On every other social platform, follower counts are inflated by bots, engagement
              is gamed by fake accounts, and there is no way to trust the data behind a
              creator&apos;s growth. This makes creator investing genuinely risky.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              On Rarelm, every follower is a verified real human. Every engagement signal is
              authentic. Every creator is confirmed as a real person or real entity. This makes
              PageStock something that has never existed before — a trustworthy, bot-free
              creator investment market where the data you are investing on is real.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">
                No bots. No fake accounts. No scams. Just verified humans building real value —
                and sharing it.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-profiles">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                PAGESTOCK ACROSS YOUR 3 PROFILES
              </p>
              <h2 id="pagestock-profiles" className="text-headline font-semibold text-foreground">
                PageStock works across all three Rarelm profiles
              </h2>
            </header>

            <div className="grid gap-6 sm:grid-cols-3">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Anonymous (Me)</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Invest in creators privately. Your portfolio is yours alone. Participate
                  financially without revealing your identity.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Family &amp; Friends</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Share investment ideas with the people you trust. Discover creators together.
                  Build a shared portfolio with people close to you.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Professional</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  For serious investors, traders, and businesses. Manage positions, access
                  deeper analytics, and build verified creator partnerships through your
                  professional identity.
                </p>
              </section>
            </div>
          </section>

          <section id="pagestock-faq" className="mt-14 space-y-8" aria-labelledby="pagestock-faq-heading">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 id="pagestock-faq-heading" className="text-headline font-semibold text-foreground">
                PageStock FAQ
              </h2>
            </header>

            <dl className="space-y-6">
              {pagestockFaq.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <dt className="text-title font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 text-body leading-relaxed text-(--fg-secondary)">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="pagestock-close">
            <h2 id="pagestock-close" className="text-headline font-semibold text-foreground">
              The creator economy is worth billions. You have been funding it for free.
            </h2>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              PageStock changes that. Be among the first to invest in creators, earn from the
              platform, and own a stake in the future of social media. Join the Rarelm waitlist —
              free, takes 30 seconds.
            </p>
            <div className="pt-2">
              <Link
                href="/join"
                className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
              >
                <span>Join the Waitlist →</span>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
