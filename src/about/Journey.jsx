
import "./Journey.css";

const Journey = () => {
  return (
    <section className="about-journey">
      <div className="about-journey__inner">

        {/* HEADER */}
        <div className="about-journey__header">
          <div className="about-labeli" style={{ justifyContent: "center" }}>
            Our Journey
          </div>

          <h2 className="about-journey__title">
            Growing, <em>Year by Year</em>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="timeline">

          {/* 2021 */}
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__year">2021</div>
            <div className="timeline__title">Founded with a Vision</div>
            <p className="timeline__text">
              Shyam Sakha Industries Pvt. Ltd. was established with a clear
              mission – to bring purity and consistency to India's spice industry.
            </p>
          </div>

          {/* 2022 */}
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__year">2022</div>
            <div className="timeline__title">Sakha Brand Launched</div>
            <p className="timeline__text">
              Our flagship consumer brand Sakha was introduced, offering premium
              whole spices and powders to households across Rajasthan.
            </p>
          </div>

          {/* 2023 */}
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__year">2023</div>
            <div className="timeline__title">
              Shrinath Ji Brand Introduced
            </div>
            <p className="timeline__text">
              Honouring sacred tradition, the Shrinath Ji brand was born – a range
              of garam masala blends crafted from age-old Rajasthani recipes.
            </p>
          </div>

          {/* 2024 */}
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__year">2024</div>
            <div className="timeline__title">
              Modern Plant Commissioned
            </div>
            <p className="timeline__text">
              Invested in advanced cleaning, grading and nitrogen-flush packaging
              lines to achieve export-ready quality standards at scale.
            </p>
          </div>

          {/* 2025 */}
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__year">2025</div>
            <div className="timeline__title">
              Growing Across India
            </div>
            <p className="timeline__text">
              With a team of 50+ professionals and a turnover trajectory of
              ₹25–100 Crore, we continue to expand our reach and range.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;