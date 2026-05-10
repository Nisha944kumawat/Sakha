import "./Story.css";
import story from"./story.png";

const Story = () => {
  return (
    <section className="about-story">
      <div className="about-story__inner">

        {/* LEFT IMAGE PART */}
        <div className="about-story__img-wrap">

          <div className="about-story__rotating">
            <svg viewBox="0 0 100 100" width="100" height="100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>

              <text
                fontSize="10"
                fontFamily="Jost, sans-serif"
                fontWeight="600"
                letterSpacing="3.2"
                fill="#C8410B"
              >
                <textPath href="#circlePath">
                  PURE • AUTHENTIC • TRUSTED •
                </textPath>
              </text>
            </svg>
          </div>

          <img
            src={story}
            alt="Our spice facility"
            className="about-story__img-main"
          />

          <img
            src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80"
            alt="Spice detail"
            className="about-story__img-pill"
          />
        </div>

        {/* RIGHT CONTENT PART */}
        <div className="about-story__content">

          <div className="about-labele">Who We Are</div>

          <h2 className="about-story__title">
            Crafting Spices with <br />
            <span>Passion & Purpose</span>
          </h2>

          <p className="about-story__text">
            <strong>Shyam Sakha Industries Pvt. Ltd.</strong> is a fast-growing
            and trusted manufacturer of premium whole spices and garam masala
            products. Established in <strong>2021</strong>, we set out with a
            single-minded focus on purity, hygiene and consistency.
          </p>

          <p className="about-story__text">
            We work directly with farmers and use modern cleaning, drying,
            grading and packaging machinery that preserves the natural aroma and
            quality that Indian kitchens deserve. Every spice we produce is a
            promise – of authenticity, of care, of flavour that honours
            tradition.
          </p>

          <p className="about-story__text">
            Backed by strict quality checks and export-ready standards, our
            products are proudly marketed under two beloved brands –
            <strong> Sakha </strong> and <strong> Shrinath Ji</strong>.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Story;