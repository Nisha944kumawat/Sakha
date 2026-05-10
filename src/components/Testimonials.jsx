
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">

        {/* ===== HEADER ===== */}
        <div className="testimonials__header">
          <div
            className="section-label"
            style={{ color: "var(--gold-lt)", justifyContent: "center" }}
          >
            Happy Kitchens
          </div>

          <h2 className="testimonials__title">
            What Our Families <em>Say</em>
          </h2>
        </div>

        {/* ===== GRID ===== */}
        <div className="testimonials__grid">

          {/* ===== CARD 1 ===== */}
          <div className="testi-card">
            <div className="testi-card__quote">"</div>
            <div className="testi-card__stars">★★★★★</div>

            <p className="testi-card__text">
              Sakha's Haldi has completely changed my cooking. The colour and
              aroma are unlike anything I've bought before. Truly authentic.
            </p>

            <div className="testi-card__author">
              <div className="testi-card__avatar">PS</div>

              <div>
                <div className="testi-card__name">Priya Sharma</div>
                <div className="testi-card__city">Jaipur, Rajasthan</div>
              </div>
            </div>
          </div>

          {/* ===== CARD 2 ===== */}
          <div className="testi-card">
            <div className="testi-card__quote">"</div>
            <div className="testi-card__stars">★★★★★</div>

            <p className="testi-card__text">
              I've been using Shrinath Ji Garam Masala for three years now.
              There is no substitute – the fragrance alone is worth it.
            </p>

            <div className="testi-card__author">
              <div className="testi-card__avatar">RM</div>

              <div>
                <div className="testi-card__name">Rajesh Mehta</div>
                <div className="testi-card__city">Ahmedabad, Gujarat</div>
              </div>
            </div>
          </div>

          {/* ===== CARD 3 ===== */}
          <div className="testi-card">
            <div className="testi-card__quote">"</div>
            <div className="testi-card__stars">★★★★★</div>

            <p className="testi-card__text">
              Finally a spice brand that takes purity seriously. No fillers,
              no artificial colour. My family refuses to use anything else.
            </p>

            <div className="testi-card__author">
              <div className="testi-card__avatar">SA</div>

              <div>
                <div className="testi-card__name">Sunita Agarwal</div>
                <div className="testi-card__city">Udaipur, Rajasthan</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;