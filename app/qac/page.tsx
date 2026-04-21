import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "QAC — Quick Anonymous Confession | Rarelm",
  description:
    "QAC (Quick Anonymous Confession) is Rarelm's anonymous expression room. Say what you've never said. Verified underneath. Anonymous on the surface. Real human responses only.",
  alternates: {
    canonical: "https://www.rarelm.com/qac",
  },
  openGraph: {
    title: "QAC — Say What You've Never Been Able to Say.",
    description:
      "Quick Anonymous Confession by Rarelm. Express freely. Stay anonymous. Real human responses from verified counsellors, experts, and peers — not bots.",
    url: "https://www.rarelm.com/qac",
    type: "website",
    images: [{ url: "https://www.rarelm.com/og-qac.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QAC — Quick Anonymous Confession | Rarelm",
    description: "Anonymous expression. Real human responses. QAC by Rarelm.",
    images: ["https://www.rarelm.com/og-qac.png"],
  },
};

const qacFaq = [
  {
    question: "What is QAC on Rarelm?",
    answer:
      "QAC stands for Quick Anonymous Confession. It is Rarelm's anonymous expression room — a feature that lets any AI-verified Rarelm user share a confession, fear, thought, or truth completely anonymously and receive real human responses. Response options include verified counsellors, verified experts, experienced advisors, and verified peers in open rooms. QAC is different from other anonymous platforms because every user is verified as a real human underneath their anonymity.",
  },
  {
    question: "Is QAC truly anonymous?",
    answer:
      "Yes. In QAC, your identity is fully anonymous to other users and responders. You are verified as a real human underneath — which is what keeps the space safe — but no one can see who you are. Your anonymity in interactions is completely protected.",
  },
  {
    question: "Who responds to QAC confessions?",
    answer:
      "QAC confessions are responded to exclusively by verified real humans — never bots or algorithms. Depending on the response type chosen, replies come from certified counsellors (for emotional and mental health support), verified experts (for situation-specific guidance), experienced advisors (for life decisions), or verified peers in open rooms.",
  },
  {
    question: "How does QAC work?",
    answer:
      "To use QAC, open it from your Anonymous (Me) profile on Rarelm — no username is shown. Write your confession, thought, or truth. Then choose a response type: Open Room (your confession enters a shared anonymous space where verified humans respond), Professional Support (routed privately to a verified counsellor, expert, or advisor), or Private Expression (no response — just the act of saying it). You then receive a real human response, not an algorithmic suggestion.",
  },
  {
    question: "Is QAC a crisis helpline?",
    answer:
      "No. QAC is an anonymous expression space for thoughts, feelings, and truths that need to be said. It connects users to real professional support — but it is not a substitute for emergency care or clinical treatment. If you are in immediate danger or experiencing a mental health crisis, please contact your local emergency services or a certified crisis helpline immediately.",
  },
  {
    question: "Why is QAC safer than other anonymous platforms?",
    answer:
      "QAC is safer than other anonymous platforms because every participant — both those expressing and those responding — is AI-verified as a real human on Rarelm. Anonymous expression on unverified platforms becomes abuse because there is no accountability underneath. On Rarelm, users are anonymous on the surface but accountable underneath. This eliminates fake counsellors, impersonators, and anonymous abuse from respondents.",
  },
] as const;

const qacSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rarelm.com/qac",
      url: "https://www.rarelm.com/qac",
      name: "QAC — Quick Anonymous Confession by Rarelm",
      description:
        "QAC (Quick Anonymous Confession) is Rarelm's anonymous expression room where AI-verified users can share confessions, fears, and truths anonymously and receive real human responses from verified counsellors, experts, and peers.",
      isPartOf: { "@id": "https://www.rarelm.com" },
      about: {
        "@type": "Thing",
        name: "Quick Anonymous Confession",
        alternateName: "QAC",
        description:
          "An anonymous expression room on Rarelm where verified users can share confessions, fears, and truths anonymously and receive responses from verified real humans — never bots or algorithms.",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rarelm.com" },
          { "@type": "ListItem", position: 2, name: "QAC", item: "https://www.rarelm.com/qac" },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".hero-definition", ".key-claim"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: qacFaq.map((item) => ({
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

export default function QacPage() {
  return (
    <>
      <Script
        id="qac-schema-ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qacSchema),
        }}
      />
      <main className="section-block section-padding-standard px-4 sm:px-6 md:px-8">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-12">
            <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
              QAC — QUICK ANONYMOUS CONFESSION
            </p>
            <h1 className="mt-4 text-display font-semibold leading-[1.1] text-foreground">
              Say What You&apos;ve Never Been Able to Say.
            </h1>
            <p className="hero-definition mt-6 text-body leading-relaxed text-(--fg-secondary)">
              QAC (Quick Anonymous Confession) is Rarelm&apos;s anonymous expression room — a feature
              that lets any AI-verified Rarelm user share a confession, fear, or truth completely
              anonymously and receive real human responses from verified counsellors, experts, or
              peers. You are verified underneath as a real human. You are anonymous on the
              surface. What you say is real. Who you are stays private.
            </p>
            <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
              Most people have something they need to say but cannot. Fear of judgment. Fear of
              consequence. Fear of being seen. QAC removes the barrier — while keeping the
              humanity on the other side.
            </p>
            <div className="mt-8">
              <Link
                href="/join"
                className="hero-cta-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium"
              >
                <span>Join the Waitlist →</span>
                <span
                  aria-hidden
                  className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-70"
                >
                  →
                </span>
              </Link>
            </div>
          </header>

          <section className="mt-14 space-y-6" aria-labelledby="qac-problem">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE PROBLEM
              </p>
              <h2 id="qac-problem" className="text-headline font-semibold text-foreground">
                Social media punishes vulnerability. QAC does not.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              Social media algorithms reward performance, not vulnerability. Most platforms have
              no mechanism for anonymous expression with verified human response. Anonymous
              platforms without verification become abuse spaces. Verified platforms without
              anonymity become performance spaces. QAC is neither.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">
                Verified underneath. Anonymous on the surface. This is what makes it safe.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-what">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHAT IS QAC
              </p>
              <h2 id="qac-what" className="text-headline font-semibold text-foreground">
                An anonymous expression room where you are heard by real humans.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              QAC — Quick Anonymous Confession — is a feature inside Rarelm that lets any verified
              user express something completely anonymously. A confession. A fear. A truth they
              have been carrying. A question they are ashamed to ask.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              You are verified underneath as a real human. You are anonymous on the surface. What
              you say is real. Who you are stays private.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              The response comes from real humans — verified counsellors, experts, and peers. Never
              bots. Never algorithms.
            </p>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-how">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                HOW QAC WORKS
              </p>
              <h2 id="qac-how" className="text-headline font-semibold text-foreground">
                Express freely. Choose how you are heard.
              </h2>
            </header>
            <ol className="list-decimal space-y-3 pl-5 text-body leading-relaxed text-(--fg-secondary)">
              <li>Open QAC from your Anonymous (Me) profile — no username shown, no identity exposed</li>
              <li>Write your confession, thought, or truth — no character limit enforced</li>
              <li>
                Choose your response type:
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Open Room: Your confession enters a shared anonymous space. Verified humans respond.</li>
                  <li>Professional Support: Routed privately to a verified counsellor, expert, or advisor.</li>
                  <li>Private Expression: Just you. No response required. Just the act of saying it.</li>
                </ul>
              </li>
              <li>Receive a real human response — not an algorithmic suggestion, not a bot reply</li>
            </ol>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-use">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHAT YOU CAN USE QAC FOR
              </p>
              <h2 id="qac-use" className="text-headline font-semibold text-foreground">
                Whatever you have been carrying. This is where you can put it down.
              </h2>
            </header>
            <ul className="list-disc space-y-3 pl-5 text-body leading-relaxed text-(--fg-secondary)">
              <li>Something you have never told anyone</li>
              <li>A fear that has been following you</li>
              <li>A thought that feels too heavy to carry alone</li>
              <li>
                A truth about yourself you are not ready to say out loud — but need to say
                somewhere
              </li>
              <li>A question you are ashamed to ask</li>
              <li>A past experience that needs to be witnessed — even once</li>
              <li>An emotion that has no safe place to go</li>
            </ul>
          </section>

          <section className="mt-14 space-y-8" aria-labelledby="qac-who">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                WHO RESPONDS TO QAC
              </p>
              <h2 id="qac-who" className="text-headline font-semibold text-foreground">
                Real humans. Verified. Every time.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              QAC confessions are never read or responded to by bots or algorithms.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Certified Counsellors</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  For emotional and mental health support. Verified professionals who understand what you are going through.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Verified Experts</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  For situation-specific guidance when you need real expertise, not generic advice.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Experienced Advisors</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  For life decisions, crossroads, and questions that do not have easy answers.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Verified Peers</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  In open rooms — real, AI-verified people who have been there too.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-important">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">IMPORTANT</p>
              <h2 id="qac-important" className="text-headline font-semibold text-foreground">
                QAC is an expression space — not a crisis service.
              </h2>
            </header>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-body leading-relaxed text-(--fg-secondary)">
                QAC is designed for thoughts, feelings, and truths that need to be said. It connects users to real professional support — but it is not a substitute for emergency care or clinical treatment.
              </p>
              <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                If you are in immediate danger or experiencing a mental health crisis, please contact your local emergency services or a certified crisis helpline immediately.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-rarelm">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                THE RARELM DIFFERENCE
              </p>
              <h2 id="qac-rarelm" className="text-headline font-semibold text-foreground">
                Anonymous expression on other platforms has no accountability. That is why it becomes abuse.
              </h2>
            </header>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              On Rarelm, you are verified as a real human before you can access QAC. This means the space stays safe — not just for you, but for everyone in it.
            </p>
            <p className="text-body leading-relaxed text-(--fg-secondary)">
              The people responding to your confession are also verified. No fake counsellors. No impersonators. No anonymous abuse from the other side.
            </p>
            <div className="key-claim rounded-2xl border border-white/10 bg-white/5 p-6 text-foreground backdrop-blur-xl">
              <p className="text-body font-medium">
                Anonymous on the surface. Accountable underneath. That is what makes QAC different from every other confession or anonymous platform that exists today.
              </p>
            </div>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-profiles">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                QAC ACROSS YOUR 3 PROFILES
              </p>
              <h2 id="qac-profiles" className="text-headline font-semibold text-foreground">
                QAC across all three Rarelm profiles
              </h2>
            </header>
            <div className="grid gap-6 sm:grid-cols-3">
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Anonymous (Me)</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Full QAC access. Express without identity. Receive without exposure. The purest form of anonymous expression with verified human response.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Family &amp; Friends</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  Private expression within a trusted circle. Different from the open room — more intimate, more specific.
                </p>
              </section>
              <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-title font-semibold text-foreground">Professional</h3>
                <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
                  For professionals responding to confessions. Verified expert mode — helping real people with real situations.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-14 space-y-8" aria-labelledby="qac-faq">
            <header className="space-y-2">
              <p className="text-caption uppercase tracking-wide text-(--fg-secondary)">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 id="qac-faq" className="text-headline font-semibold text-foreground">
                QAC FAQ
              </h2>
            </header>
            <dl className="space-y-6">
              {qacFaq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <dt className="text-title font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 text-body leading-relaxed text-(--fg-secondary)">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14 space-y-6" aria-labelledby="qac-close">
            <h2 id="qac-close" className="text-headline font-semibold text-foreground">
              Whatever you have been carrying — this is where you can put it down.
            </h2>
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

