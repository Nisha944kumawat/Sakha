
import "./GetTouch.css"; // optional agar tum styling alag file me rakhna chaho

const GetTouch = () => {
  return (
    <section className="cta-banner">
      {/* Background Image */}
      <img
        alt="Spices background"
        className="cta-banner__bg"
        src="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=1400&q=80"
      />

      {/* Overlay */}
      <div className="cta-banner__overlay"></div>

      {/* Content */}
      <div className="cta-banner__content">
        <div
          className="section-label"
          style={{ color: "var(--gold-lt)", justifyContent: "center" }}
        >
          GET IN TOUCH
        </div>

        <h2 className="cta-banner__title">
          Ready to Taste
          <br />
          <em>True Purity?</em>
        </h2>

        <p className="cta-banner__text">
          Whether you're a home cook or a business buyer, we'd love to hear from
          you. Reach out and let's bring authentic flavour to your table.
        </p>

        {/* Buttons */}
        <div className="cta-banner__actions">
          <a className="btn-primary" href="/contact">
            Contact Us →
          </a>

          <a className="btn-ghost" href="/sakha">
            Browse Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;