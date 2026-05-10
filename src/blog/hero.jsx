import "./hero.css";

const hero = () => {
  return (
    <section className="blogs-hero">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80"
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