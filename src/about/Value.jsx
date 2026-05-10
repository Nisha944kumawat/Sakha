import "./Value.css";

const Value = () => {
  return (
    <section className="about-values">
      <div className="about-values__inner">

        {/* HEADER */}
        <div className="about-values__header">
          <div
            className="about-labell"
            style={{ color: "var(--gold-lt)", justifyContent: "center" }}
          >
            What Drives Us
          </div>

          <h2 className="about-values__title">
            Built on <em>Principles</em>
            <br />
            Delivered with Pride
          </h2>

          <p className="about-values__sub">
            Six pillars that define every decision we make — from sourcing to packaging.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="about-values__grid">

          {/* CARD 1 */}
          <div className="value-card">
            <div className="value-card__icon">🌾</div>
            <div className="value-card__title">Farm Direct Sourcing</div>
            <p className="value-card__text">
              We work hand-in-hand with farmers across India's finest spice-growing regions – Rajasthan, Kerala, Andhra Pradesh – cutting out middlemen to ensure freshness and fair prices.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="value-card">
            <div className="value-card__icon">🧪</div>
            <div className="value-card__title">Strict Quality Control</div>
            <p className="value-card__text">
              Every batch undergoes rigorous lab testing and multi-point quality checks before it reaches you. Export-ready standards applied to every product, every time.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="value-card">
            <div className="value-card__icon">✨</div>
            <div className="value-card__title">Purity Promise</div>
            <p className="value-card__text">
              No artificial colours, no fillers, no adulterants. What you see on the label is exactly what's inside – whole spices cleaned, graded and ground with integrity.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="value-card">
            <div className="value-card__icon">⚙️</div>
            <div className="value-card__title">Modern Technology</div>
            <p className="value-card__text">
              Our facility uses state-of-the-art cleaning, drying, grading and packaging machinery that preserves the natural aroma, colour and essential oils of every spice.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="value-card">
            <div className="value-card__icon">🌿</div>
            <div className="value-card__title">Hygiene First</div>
            <p className="value-card__text">
              We maintain food-grade hygiene standards across the entire production floor. Our packaging line is nitrogen-flushed to seal freshness at its peak.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="value-card">
            <div className="value-card__icon">📦</div>
            <div className="value-card__title">Export Ready</div>
            <p className="value-card__text">
              With international-grade standards and documentation in place, Shyam Sakha Industries is fully equipped to cater to domestic and global spice markets.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Value;