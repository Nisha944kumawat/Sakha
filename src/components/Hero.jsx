import "../components/Hero.css";
import sakhabannerimage from "./hero.png";
import sakhabannerimage2 from "./hero2.jpeg";
import { useEffect, useState } from "react";

const Hero = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSlide((prev) => (prev === 0 ? 1 : 0));

    }, 6000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="heroSlider">

      {/* ===== FIRST SLIDE ===== */}
      <section className={`hero slide ${activeSlide === 0 ? "active" : ""}`}>

        {/* LEFT SIDE */}
        <div className="hero__left">

          <p className="hero__eyebrow">
            Sakha Spices & Shrinath Ji &nbsp;&nbsp; Est. 2021
          </p>

          <h1 className="hero__title">
            Where <em>Tradition</em>
            <br />
            Meets the
            <br />
            Finest Spice
          </h1>

          <p className="hero__desc">
            Two beloved brands. One promise – spices as pure as your grandmother used,
            grown in India’s finest farms and ground fresh for your kitchen.
          </p>

          {/* STATS */}
          <div className="hero__stats">

            <div>
              <div className="hero__stat-num">2021</div>
              <div className="hero__stat-label">Est. Year</div>
            </div>

            <div>
              <div className="hero__stat-num">50+</div>
              <div className="hero__stat-label">Spice Varieties</div>
            </div>

            <div>
              <div className="hero__stat-num">2</div>
              <div className="hero__stat-label">Premium Brands</div>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero__right">

          <img
            alt="Premium Indian spices"
            className="hero__img-main"
            src={sakhabannerimage}
          />

          <div className="hero__img-overlay"></div>

        </div>

      </section>

      {/* ===== SECOND SLIDE ===== */}
      <section className={`hero slide ${activeSlide === 1 ? "active" : ""}`}>

        <div className="hero__right">

          <img
            alt="Premium Indian spices"
            className="hero__img-main"
            src={sakhabannerimage2}
          />

          

        </div>

      </section>

    </div>
  );
};

export default Hero;