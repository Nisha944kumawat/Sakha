// ShrinathCta.jsx

import "./ShrinathCta.css";
import { Link } from "react-router-dom";

const ShrinathCta = () => {
  return (
    <section className="shrinath-cta">
      <div className="shrinath-cta__inner">

        <h2 className="shrinath-cta__title">
          Need a Bulk<em> Order?</em>
        </h2>

        <p className="shrinath-cta__text">
          We supply retailers, distributors and food businesses across India.
          Get in touch and our team will respond within 24 hours.
        </p>

        <Link to="/contact" className="shrinath-cta__btn">
          Contact Us →
        </Link>

      </div>
    </section>
  );
};

export default ShrinathCta;