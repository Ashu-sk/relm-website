import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rarelm FAQ — AI-Verified Social Platform",
  description:
    "Got questions about Rarelm? Find answers about AI verification, PageStock, anonymous mode, the 3 profile system, social commerce, expert advisors, and how to join.",
};

type FaqItem = { question: string; answer: string };
type FaqSection = { title: string; items: FaqItem[] };

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "About Rarelm",
    items: [
      {
        question: "What is Rarelm?",
        answer:
          "Rarelm is the world's first AI-verified social expression platform — where every user is mandatorily verified by AI, ensuring only real humans can join. No bots, no fake accounts, no scams, no impersonation. Rarelm combines verified identity with anonymous interaction, social commerce, expert access, content sharing, and PageStock — a system that lets every user earn from the platform, not just observe it.",
      },
      {
        question: "Why was Rarelm built?",
        answer:
          "Rarelm was built in response to a decade of growing problems on existing social platforms — fake accounts, bots, scams, account impersonation, misinformation, and a complete lack of professional support. These aren't minor inconveniences; they represent a massive global financial and social loss. Rarelm was founded on the belief that social media needs to be rebuilt from the identity layer up — where every person is verified as real before they can participate.",
      },
      {
        question: "What problem does Rarelm solve?",
        answer:
          "Rarelm solves the trust crisis in social media. Fake accounts, bots, scams, impersonation, and misinformation have made existing platforms unsafe and unreliable for real human connection, commerce, and professional interaction. By mandating AI verification for every single user, Rarelm restores trust, safety, and authentic connection at scale.",
      },
      {
        question: "What makes Rarelm different from every other social platform?",
        answer:
          "Five things set Rarelm apart from every existing social platform: mandatory AI verification for all users (not optional, not partial — every user), the ability to be both verified and anonymous simultaneously, a 3 profile system inspired by Ikigai, PageStock which lets every user earn dividends from the platform, and built-in professional expert support available 24/7. No existing platform combines all five.",
      },
      {
        question: "Who is Rarelm built for?",
        answer:
          "Rarelm is built for anyone who has experienced the frustration of fake accounts, scams, or unsafe interactions online — which is essentially every social media user. Specifically it serves creators and influencers, businesses and brands, investors and traders, professionals seeking expert access, and everyday users who want authentic, verified social connection. Gen Z and young millennials leading the shift toward authenticity and emotionally safe connection are at the core of Rarelm's audience.",
      },
      {
        question: "What is the company behind Rarelm?",
        answer:
          "Relm is the company building Rarelm. Relm is currently refining its product concept and early prototype, and raising a pre-seed round to build the MVP, AI verification engine, verified creator-commerce ecosystem, and private beta community.",
      },
      {
        question: "What stage is Rarelm at?",
        answer:
          "Rarelm is currently at the pre-seed stage, actively building toward its MVP and private beta. The waitlist is live at rarelm.com.",
      },
    ],
  },
  {
    title: "AI Verification",
    items: [
      {
        question: "What does AI-verified mean on Rarelm?",
        answer:
          "AI-verified means every single Rarelm account is confirmed by artificial intelligence to belong to a real, unique human being before they can use the platform. Verification is not optional or tiered — it is mandatory for all users. This eliminates bots, fake accounts, spam accounts, scam accounts, and impersonators entirely.",
      },
      {
        question: "Is AI verification mandatory for all users?",
        answer:
          "Yes — mandatory AI verification for every user is the foundational principle of Rarelm. Unlike other platforms that offer optional verification badges, Rarelm requires verification before anyone can join. This is what makes the platform fundamentally different from everything that exists today.",
      },
      {
        question: "Why is mandatory AI verification important?",
        answer:
          "Fake accounts, bots, and impersonation cause billions of dollars in global financial losses every year and have made social media unsafe for genuine human interaction. Mandatory verification ensures that every person you interact with on Rarelm is confirmed as a real human — creating a level of trust that no existing platform can offer.",
      },
      {
        question: "Can I be anonymous and verified at the same time on Rarelm?",
        answer:
          "Yes — and this is one of Rarelm's most unique features. You can interact anonymously on Rarelm while still being AI-verified as a real human behind that anonymity. This means other users know they are interacting with a real person even if that person chooses not to reveal their identity. Verified anonymity — not unverified anonymity.",
      },
    ],
  },
  {
    title: "The 3 Profile System",
    items: [
      {
        question: "What is the 3 profile system on Rarelm?",
        answer:
          "Rarelm gives every user three distinct profiles to manage different aspects of their identity and social life — inspired by the Japanese concept of Ikigai. The three profiles are: Anonymous (Me) for private, anonymous expression; Family and Friends for personal, trusted connections; and Professional for career, business, and expert interactions. Each profile is separate, customisable, and operates independently.",
      },
      {
        question: "What is the Anonymous profile on Rarelm?",
        answer:
          "The Anonymous (Me) profile lets you express yourself, share thoughts, ask questions, and interact with others without revealing your real identity. Crucially, you are still AI-verified as a real human — so your anonymity is protected while the platform remains bot-free and safe.",
      },
      {
        question: "What is the Family and Friends profile?",
        answer:
          "The Family and Friends profile is your personal, trusted social space — designed for genuine connection with the people closest to you. It is separate from your professional life and your anonymous expression, giving you a dedicated space for real personal relationships.",
      },
      {
        question: "What is the Professional profile?",
        answer:
          "The Professional profile is your verified career and business identity on Rarelm. It is designed for professional networking, business interactions, expert consultations, and commerce. It connects directly with Rarelm's professional support and expert advisor features.",
      },
      {
        question: "What inspired the 3 profile system?",
        answer:
          "The 3 profile system was inspired by Ikigai — the Japanese concept of finding purpose at the intersection of what you love, what you are good at, what the world needs, and what you can be paid for. The three profiles reflect the natural divisions in a person's life: their private self, their personal relationships, and their professional identity.",
      },
      {
        question: "What is a domain-based username on Rarelm?",
        answer:
          "Every Rarelm user gets a personalised domain-based username in the format name.rarelm.com — for example, claude.rarelm.com. This gives every verified user their own unique, memorable identity on the platform rather than a generic handle.",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        question: "What is PageStock?",
        answer:
          "PageStock is the world's first creator stock market, built into Rarelm. It lets fans and investors buy shares in AI-verified creators and public pages, earning real financial returns as those pages grow. Learn more about PageStock → https://www.rarelm.com/pagestock",
      },
      {
        question: "What is the Original Tag?",
        answer:
          "The Original Tag is Rarelm's AI-assigned verification badge for authentic content — applied to photos, videos, audio, and posts confirmed as created by a real verified human without AI alteration. Learn more about Original Tag → https://www.rarelm.com/original-tag",
      },
      {
        question: "What is QAC?",
        answer:
          "QAC (Quick Anonymous Confession) is Rarelm's anonymous expression room where verified users can share confessions and truths anonymously and receive responses from verified real humans — never bots. Learn more about QAC → https://www.rarelm.com/qac",
      },
      {
        question: "What can I do on Rarelm?",
        answer:
          "On Rarelm you can share thoughts, pictures, videos, and GIFs in both open and anonymous modes, join and build communities, chat with verified users, access professional expert advisors directly, shop within the platform's social commerce ecosystem, invest in creators through PageStock, and earn dividends from the platform's growth — all within a fully AI-verified, bot-free environment.",
      },
      {
        question: "Can I share content anonymously on Rarelm?",
        answer:
          "Yes. Rarelm supports content sharing — thoughts, pictures, videos, GIFs — in both open and anonymous modes. When you share anonymously, your AI-verified status is maintained, meaning other users know they are interacting with a real human even without knowing your identity.",
      },
      {
        question: "What is professional support on Rarelm?",
        answer:
          "Rarelm includes 24/7 professional support — users can ask questions directly to expert advisors within the platform. This brings verified professional expertise into the social experience, something no existing social platform offers. Whether you need advice on health, finance, legal matters, shopping, or other professional areas, verified experts are accessible directly within Rarelm.",
      },
      {
        question: "Can I ask experts questions directly on Rarelm?",
        answer:
          "Yes. Rarelm features a quick Q&A system that lets users ask questions directly to professional expert advisors and get real, verified answers. This is available in both open and anonymous modes — so you can ask sensitive questions anonymously while still receiving genuine professional guidance.",
      },
      {
        question: "Does Rarelm have a mobile app?",
        answer:
          "Rarelm is currently in development. Join the waitlist at rarelm.com to be notified when the platform and app launch.",
      },
    ],
  },
  {
    title: "Social Commerce",
    items: [
      {
        question: "What is social commerce on Rarelm?",
        answer:
          "Rarelm's social commerce ecosystem is a fully integrated shopping experience built into the platform. It includes in-app purchases, professional shopping support from verified advisors, and a verified commerce environment where every seller and buyer is a confirmed real human — eliminating scams and fraudulent sellers that plague commerce on existing social platforms.",
      },
      {
        question:
          "How is Rarelm's social commerce different from shopping on Instagram or TikTok?",
        answer:
          "On Instagram and TikTok, social commerce is vulnerable to scam sellers, fake reviews, and unverified accounts. On Rarelm, every participant in the commerce ecosystem is AI-verified as a real human, and professional shopping support is available 24/7 to guide purchases. This creates a fundamentally safer and more trustworthy shopping environment.",
      },
      {
        question: "Can I get help while shopping on Rarelm?",
        answer:
          "Yes. Rarelm includes professional support specifically for shopping — verified expert advisors can help users make informed purchasing decisions within the platform. This is part of Rarelm's broader vision of bringing professional expertise directly into the social and commercial experience.",
      },
    ],
  },
  {
    title: "PageStock — Earn From the Platform",
    items: [
      {
        question: "What is PageStock?",
        answer:
          "PageStock is Rarelm's built-in creator stock market and user earnings system. It lets every user — not just creators — earn dividends and financial returns from the platform's growth. On existing social platforms, users generate enormous value through their content and engagement but receive nothing in return. PageStock changes this by making every Rarelm user a stakeholder, not just an observer.",
      },
      {
        question: "How does PageStock work?",
        answer:
          "Creators and users can list their pages on PageStock, allowing fans, investors, and businesses to buy shares. As a page grows in followers, engagement, and influence, the value of those shares increases. Every user on Rarelm can participate — buying shares in creators they believe in, earning dividends, and benefiting financially from the platform's growth.",
      },
      {
        question: "Can every user earn from Rarelm through PageStock?",
        answer:
          "Yes — PageStock is designed for every user on Rarelm, not just top creators. This is fundamentally different from existing platforms where ordinary users generate value for the platform through their attention and content but receive no financial return. On Rarelm, every user is a participant in the platform's financial ecosystem.",
      },
      {
        question: "Why is PageStock different from existing creator monetisation?",
        answer:
          "Existing monetisation tools like Patreon subscriptions, YouTube ad revenue, or TikTok creator funds only benefit creators — and only the largest ones. PageStock distributes financial value across the entire platform ecosystem, letting fans and ordinary users earn alongside creators. It turns passive social media use into active financial participation.",
      },
      {
        question: "What is a creator stock market?",
        answer:
          "A creator stock market is a platform where fans and investors can buy and sell shares in creators or their social media pages, similar to how traditional stock markets work for companies. PageStock on Rarelm is the first creator stock market built natively inside a social platform — and the first designed to benefit every user, not just a select few.",
      },
      {
        question: "Is PageStock like crypto or NFTs?",
        answer:
          "No. PageStock is not built on blockchain or cryptocurrency. It is a creator and user earnings system built directly into the Rarelm platform, designed to be simple and accessible to everyone — including users with no crypto or investment background.",
      },
    ],
  },
  {
    title: "Joining Rarelm",
    items: [
      {
        question: "How do I join Rarelm?",
        answer:
          "Rarelm is currently accepting waitlist signups. Visit rarelm.com and click \"Join Waitlist\" to secure your early access. Waitlist members will be among the first into the private beta when it launches.",
      },
      {
        question: "Is Rarelm free to use?",
        answer:
          "Yes — creating an account on Rarelm is completely free. Join the waitlist at rarelm.com to secure your free account and get early access when the platform launches.",
      },
      {
        question: "When does Rarelm launch?",
        answer:
          "Rarelm is currently building toward its MVP and private beta. Join the waitlist at rarelm.com to get early access and be notified the moment the platform goes live.",
      },
      {
        question: "How is Rarelm different from Discord?",
        answer:
          "Discord is a chat and community platform with no identity verification, widespread bot and fake account problems, and no financial participation for users. Rarelm mandates AI verification for every user, offers the 3 profile system, includes expert advisor access, social commerce, and PageStock — giving every user a stake in the platform's success.",
      },
      {
        question: "How is Rarelm different from Instagram or Twitter/X?",
        answer:
          "Instagram and Twitter/X are platforms where fake accounts, bots, and scams are endemic, users generate enormous value but earn nothing, and professional support is absent. Rarelm mandates AI verification for all users, gives every user earning potential through PageStock, provides 24/7 professional expert access, and supports both open and anonymous verified interaction.",
      },
      {
        question: "How is Rarelm different from LinkedIn?",
        answer:
          "LinkedIn is a professional network without mandatory verification, where fake profiles and connection spam are common. Rarelm's Professional profile serves similar professional networking needs but with mandatory AI verification, anonymous mode capability, PageStock earnings, and 24/7 expert advisor access — built into a full social platform rather than a purely professional one.",
      },
    ],
  },
  {
    title: "Privacy and Safety",
    items: [
      {
        question: "How does Rarelm protect user privacy?",
        answer:
          "Rarelm is designed with user privacy as a core principle. The anonymous mode allows users to interact without revealing their identity, while AI verification ensures the platform remains bot-free and safe. Full privacy details will be published in our privacy policy at launch.",
      },
      {
        question: "How does AI verification work without invading privacy?",
        answer:
          "Rarelm's AI verification confirms that an account belongs to a real, unique human without storing unnecessary personal data or compromising user privacy. The verification process is designed to confirm humanity — not to expose identity. Users can remain fully anonymous in their interactions while still being verified. Full details will be shared at launch.",
      },
      {
        question: "Is anonymous mode truly private on Rarelm?",
        answer:
          "Yes. Anonymous mode on Rarelm allows users to interact, share content, ask expert questions, and participate in communities without revealing their real identity to other users. The AI verification process confirms you are a real human — but your anonymity in interactions is fully protected.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.items
      .filter((item) => item.question.trim() && item.answer.trim())
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-10">
            <h1 className="text-display font-semibold leading-[1.1] text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-caption uppercase tracking-wide text-(--fg-secondary)">
              Rarelm FAQ
            </p>
          </header>

          {FAQ_SECTIONS.map((section) => (
            <section key={section.title} className="mt-12 first:mt-0">
              <h2 className="text-headline font-semibold text-foreground">
                {section.title}
              </h2>
              {section.items.map((item) => (
                <div key={item.question} className="mt-8 space-y-3">
                  <h3 className="text-title font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-body leading-relaxed text-(--fg-secondary)">
                    {item.answer}
                  </p>
                </div>
              ))}
            </section>
          ))}

          <p className="mt-14 text-body italic leading-relaxed text-(--fg-secondary)">
            Still have a question?{" "}
            <Link
              href="/join"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              Join the waitlist
            </Link>
            , explore{" "}
            <Link
              href="/pagestock"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              PageStock
            </Link>
            , or reach out at{" "}
            <Link
              href="/contact-us"
              className="text-foreground underline underline-offset-2 transition-smooth hover:opacity-90"
            >
              rarelm.com/contact
            </Link>{" "}
            — we&apos;d love to hear from you.
          </p>
          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Explore Rarelm">
            <Link
              href="/pagestock"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Explore PageStock
            </Link>
            <Link
              href="/join"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Join the waitlist
            </Link>
            <Link
              href="/vision"
              className="text-body text-(--fg-secondary) underline underline-offset-4 transition-smooth hover:text-foreground"
            >
              Our mission
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
