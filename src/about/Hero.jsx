
import "./Hero.css";

import heroimg from "./hero.png"

const Hero = () => {
  return (
    <>
    <section className="about-hero">
      
      {/* Background Image */}
      <img
        alt="Spices"
        className="about-hero__bg"
        src={heroimg}
      />

      {/* Overlay */}
      <div className="about-hero__overlay"></div>

      {/* Decorative Stripe */}
     

      {/* Content */}
      <div className="about-hero__content">




      </div>

    </section>
    <div className="about-stats">
      <div className="about-stats__inner">

        {/* Stat 1 */}
        <div>
          <div className="about-stat__num">2021</div>
          <div className="about-stat__label">Year Established</div>
        </div>

        {/* Stat 2 */}
        <div>
          <div className="about-stat__num">50+</div>
          <div className="about-stat__label">Team Members</div>
        </div>

        {/* Stat 3 */}
        <div>
          <div className="about-stat__num">2</div>
          <div className="about-stat__label">Premium Brands</div>
        </div>

        {/* Stat 4 */}
        <div>
          <div className="about-stat__num">100%</div>
          <div className="about-stat__label">Pure & Natural</div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Hero;