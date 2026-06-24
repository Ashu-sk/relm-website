export default function DataStripSection() {
  return (
    <section
      id="data-strip"
      className="cc-vision-stats-wrap"
      aria-labelledby="data-strip-heading"
    >
      <div className="cc-vision-inner">
        <p id="data-strip-heading" className="cc-vision-stats">
          <strong>0 bots</strong>
          <span className="cc-vision-stat-dot" aria-hidden>
            ·
          </span>
          <strong>0 fake reach</strong>
          <span className="cc-vision-stat-dot" aria-hidden>
            ·
          </span>
          <strong>0 scams</strong>
          <span className="cc-vision-stat-dot" aria-hidden>
            ·
          </span>
          <strong>100% real</strong>
        </p>
      </div>
    </section>
  );
}
