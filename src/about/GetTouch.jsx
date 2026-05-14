
import "./GetTouch.css";

const GetTouch = () => {
  return (
    <section className="about-cta">

      {/* Label */}
      <div className="about-label">
        Let's Connect
      </div>

      {/* Title */}
      <h2 className="about-cta__title">
        Want to Know <em>More?</em>
      </h2>

      {/* Description */}
      <p className="about-cta__text">
        Whether you're a buyer, distributor or simply curious — we'd love to tell
        you more about what we do and how we do it.
      </p>

      {/* Buttons */}
      <div className="about-cta__actions">
        <a href="/contact" className="btn-primary">
          Get in Touch →
        </a>

        <a href="/sakha" className="btn-ghost">
          Explore Products
        </a>
      </div>

    </section>
  );
};

export default GetTouch;