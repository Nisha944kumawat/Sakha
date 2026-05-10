// Featured.jsx

import "./featured.css";

const featured = () => {
  return (
    <section className="blogs-featured" id="all-posts">
      <div className="blogs-featured__inner">

        {/* HEADER */}
        <div className="blogs-featured__header">
          <h2 className="blogs-featured__title">
            Featured Story
          </h2>

          <a href="#all-posts" className="blogs-all-link">
            All Articles →
          </a>
        </div>

        {/* FEATURED CARD */}
        <div className="featured-card">

          {/* IMAGE SECTION */}
          <div className="featured-card__img-wrap">

            <img
              src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=1200&q=80"
              alt="Why Stone-Ground Turmeric Is Worlds Apart from Factory Powder"
              className="featured-card__img"
            />

            <div className="featured-card__img-overlay"></div>

          </div>

          {/* CONTENT SECTION */}
          <div className="featured-card__body">

            {/* META */}
            <div className="featured-card__meta">

              <span className="featured-card__tag">
                Spice Knowledge
              </span>

              <span className="featured-card__badge">
                ✦ Featured
              </span>

              <span className="featured-card__date">
                March 2025
              </span>

            </div>

            {/* HEADING */}
            <h3 className="featured-card__heading">
              Why Stone-Ground Turmeric Is Worlds Apart from Factory Powder
            </h3>

            {/* DESCRIPTION */}
            <p className="featured-card__excerpt">
              Most turmeric sold today is high-heat milled, stripping away the
              volatile oils that give it colour, aroma and its celebrated
              health benefits. We break down exactly what stone-grinding
              preserves — and why it matters for your kitchen.
            </p>

            {/* BUTTON */}
            <a href="#" className="featured-card__cta">
              Read Full Article →
            </a>

            {/* READ TIME */}
            <div className="featured-card__read-time">
              ⏱ 6 min read
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default featured;