import "./hero.css";
import Hero from "./hero.jpeg";

const hero = () => {
  return (
    <section className="blogs-hero">

      {/* Background Image */}
      <img
        src={Hero}
        alt="Spices"
        className="blogs-hero__bg"
      />

      {/* Overlay */}
      <div className="blogs-hero__overlay"></div>

      {/* Content */}
      <div className="blogs-hero__content">

        <p className="blogs-hero__eyebrow">
          Sakha Spices &nbsp;&nbsp; Stories, Tips & Insights
        </p>

        <h1 className="blogs-hero__title">
          The Spice <em>Journal</em>
        </h1>

      </div>

    </section>
  );
};

export default hero;