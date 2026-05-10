import "./Sakhabanner.css"; // (agar CSS alag file me hai)

const Sakhabanner = () => {
  return (
    <section className="sakha-header">
      <div className="sakha-header__inner">

        {/* LEFT CONTENT */}
        <div className="sakha-header__left">

          {/* Eyebrow Text */}
          <div className="sakha-header__eyebrow">
            🌿 Sakha Brand &nbsp; &nbsp; Shyam Sakha Industries
          </div>

          {/* Title */}
          <h1 className="sakha-header__title">
            Sakha <em>Spices</em>
          </h1>

          {/* Subtitle */}
          <p className="sakha-header__sub">
            Everyday premium spices – sourced directly from farms, cleaned,
            graded and packed with care. Pure. Simple. Trusted.
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="sakha-header__stats">

          {/* Stat 1 */}
          <div>
            <div className="sakha-stat__num">30+</div>
            <div className="sakha-stat__label">Products</div>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="sakha-stat__num">100%</div>
            <div className="sakha-stat__label">Pure</div>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="sakha-stat__num">2021</div>
            <div className="sakha-stat__label">Est.</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sakhabanner;