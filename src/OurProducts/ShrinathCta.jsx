// ShrinathCta.jsx

import "./ShrinathCta.css";
import { Link } from "react-router-dom";

const ShrinathCta = () => {
  return (
    <section className="sakha-cta">
      <div className="sakha-cta__inner">

        <h2 className="sakha-cta__title">
          Need a Bulk<em> Order?</em>
        </h2>

        <p className="sakha-cta__text">
          We supply retailers, distributors and food businesses across India.
          Get in touch and our team will respond within 24 hours.
        </p>

        <Link to="/contact-us" className="sakha-cta__btn">
          Contact Us →
        </Link>

      </div>
    </section>
  );
};

export default ShrinathCta;