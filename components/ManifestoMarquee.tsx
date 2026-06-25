const MANIFESTO_TEXT =
  'NO BOTS · NO BURNER ACCOUNTS · NO "hey babe" from a crypto stranger · NO follower farms · NO main-character cosplay · NO 47-follower egg with strong opinions · REAL HUMANS ONLY · ';

function MarqueeSegment() {
  return <span className="cc-marquee-line">{MANIFESTO_TEXT}</span>;
}

export default function ManifestoMarquee() {
  return (
    <section
      id="motion-manifesto"
      className="cc-marquee"
      aria-label="Motion Manifesto"
    >
      <div className="cc-marquee-track">
        <div className="cc-marquee-row">
          <MarqueeSegment />
        </div>
        <div className="cc-marquee-row" aria-hidden>
          <MarqueeSegment />
        </div>
      </div>
    </section>
  );
}
