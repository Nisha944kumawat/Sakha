
import "./Legacy.css";
import LegacyImg from "../components/legacy.jpeg";
const Legacy = () => {
  return (
    <section className="legacy">
      <div className="legacy__inner">

        {/* LEFT SIDE IMAGES */}
        <div className="legacy__img-wrap">

          {/* Circle Text SVG */}
          <div className="legacy__circle-text">
            <svg viewBox="0 0 100 100" width="100" height="100">
              <defs>
                <path
                  id="circle"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>

              <text
                fontSize="10.5"
                fontFamily="Jost, sans-serif"
                fontWeight="600"
                letterSpacing="3.5"
              >
                <textPath href="#circle">
                  PURE • AUTHENTIC • TRADITIONAL •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Main Image */}
          <img
            className="legacy__img-main"
            src={LegacyImg}
            alt="Spices at origin"
          />

          {/* Accent Image */}
          <img
            className="legacy__img-accent"
            src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80"
            alt="Spice detail"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="legacy__content">

          <div className="section-label">Our Heritage</div>

          <h2 className="legacy__title">
            Rooted in the <br />
            <span>Flavours of India</span>
          </h2>

          <p className="legacy__text">
            Shyam Sakha Industries Pvt. Ltd. was established in 2021 with a
            clear vision – to bring purity and consistency to India's spice
            industry. We work directly with farmers and use modern machinery
            that preserves the natural aroma and quality.
          </p>

          <p className="legacy__text">
            <strong>Sakha</strong> delivers everyday staples with premium quality.
            <br />
            <strong>Shrinath Ji</strong> honours sacred tradition through blends
            crafted from age-old Rajasthani recipes.
          </p>

          {/* FEATURES */}
          <div className="legacy__features">

            <div className="legacy__feature">
              <span className="legacy__feature-dot"></span>
              Sourced directly from origin farms
            </div>

            <div className="legacy__feature">
              <span className="legacy__feature-dot"></span>
              Zero artificial colour or preservatives
            </div>

            <div className="legacy__feature">
              <span className="legacy__feature-dot"></span>
              Stone-ground to retain natural oils
            </div>

            <div className="legacy__feature">
              <span className="legacy__feature-dot"></span>
              Nitrogen-sealed for lasting freshness
            </div>

          </div>

          {/* BUTTON */}
          <a href="/about-us" className="btn-primary">
            Read Our Story →
          </a>

        </div>
      </div>
    </section>
  );
};

export default Legacy;