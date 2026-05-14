// SakhaCta.jsx

import "./SakhaCta.css";
import { Link } from "react-router-dom";

const SakhaCta = () => {
  return (
    <section className="bulkorder-cta">
      <div className="bulkorder-cta__inner">

        <h2 className="bulkorder-cta__title">
          Need a Bulk<em> Order?</em>
        </h2>

        <p className="bulkorder-cta__text">
          We supply retailers, distributors and food businesses across India.
          Get in touch and our team will respond within 24 hours.
        </p>

        <Link to="/contact" className="bulkorder-cta__btn">
          Contact Us →
        </Link>

      </div>
    </section>
  );
};

export default SakhaCta;