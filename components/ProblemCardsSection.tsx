export default function ProblemCardsSection() {
  return (
    <section
      id="problem-cards"
      className="cc-section cc-section-calm"
      aria-labelledby="problem-cards-heading"
    >
      <div className="cc-section-inner">
        <div className="cc-section-eyebrow-center">
          <p className="cc-section-eyebrow">
            <span className="cc-hero-dot" aria-hidden />
            What&apos;s Broken
          </p>
        </div>
        <h2 id="problem-cards-heading" className="cc-section-h2 cc-section-h2-center">
          The internet is mostly fake now.
          <span className="cc-hero-line2 cc-hero-accent">YOU KNOW THAT.</span>
        </h2>
        <p className="cc-problem-editorial">
          Half of all traffic is bots. Your favorite influencer might be three scripts
          in a trench coat. You&apos;ve got 1,200 followers and couldn&apos;t name nine of
          them. And somewhere right now, a fake account is DMing your aunt about a
          &quot;once-in-a-lifetime opportunity.&quot; We got tired of it too.
        </p>
      </div>
    </section>
  );
}
