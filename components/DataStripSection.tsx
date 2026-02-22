export default function DataStripSection() {
  return (
    <section
      id="data-strip"
      className="section-block section-padding-tight"
      aria-labelledby="data-strip-heading"
    >
      <div className="section-container">
      <p
        id="data-strip-heading"
        className="data-strip-line mx-auto max-w-4xl text-center"
      >
        0 bots
        {" "}
        <span className="data-strip-sep" aria-hidden>·</span>
        {" "}
        0 fake reach
        {" "}
        <span className="data-strip-sep" aria-hidden>·</span>
        {" "}
        0 Scams
        {" "}
        <span className="data-strip-sep data-strip-dot" aria-hidden>.</span>
        {" "}
        100% real users
        {" "}
        <span className="data-strip-sep" aria-hidden>·</span>
        {" "}
        Trust by design
      </p>
      </div>
    </section>
  );
}
