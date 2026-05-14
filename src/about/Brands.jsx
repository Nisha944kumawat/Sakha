import "./Brands.css";
import brands1 from "./brands1.png";
import brands2 from "./brands2.png";

const Brands = () => {
  return (
    <section className="about-brands">
      <div className="about-brands__inner">

        {/* Header */}
        <div className="about-brands__header">
          
          <div
            className="about-labels"
            style={{ justifyContent: "center" }}
          >
            Our Brands
          </div>

          <h2 className="about-brands__title">
            Two Names, <em>One Standard</em>
          </h2>

        </div>

        {/* Brands Grid */}
        <div className="about-brands__grid">

          {/* Brand Card 1 */}
          <div className="brand-card">
            <img
              alt="Sakha Brand"
              className="brand-card__bg"
              src={brands1}
            />

            <div className="brand-card__overlay"></div>

            <div className="brand-card__content">
              <a href="/sakha" className="brand-card__link">
                <span className="brand-card__tag">
                Everyday Essentials
              </span>
              </a>

              <div className="brand-card__name">Sakha</div>

              <p className="brand-card__desc">
                Premium whole spices and powders for the everyday Indian kitchen.
                Sourced pure, packed fresh, trusted daily.
              </p>
            </div>
          </div>

          {/* Brand Card 2 */}
          <div className="brand-card">
            <img
              alt="Shrinath Ji Brand"
              className="brand-card__bg"
              src={brands2}
            />

            <div className="brand-card__overlay"></div>

            <div className="brand-card__content">
              <a href="/shrinathji" className="brand-card__link">
                <span className="brand-card__tag">
                  Traditional Blends
                </span>
              </a>

              <div className="brand-card__name">
                Shrinath Ji
              </div>

              <p className="brand-card__desc">
                Sacred garam masala blends crafted from age-old Rajasthani recipes.
                A tribute to tradition in every pinch.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Brands;