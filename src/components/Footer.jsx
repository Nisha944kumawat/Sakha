import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* ===== CTA STRIP ===== */}
      <div className="footer__cta-strip">
        <div className="footer__cta-inner">
          
          <div className="footer__cta-text">
            <span className="footer__cta-label">
              Pure. Aromatic. Trusted.
            </span>

            <h3 className="footer__cta-heading">
              Bring the Flavor of India Home
            </h3>
          </div>

          <a href="/contact-us" className="footer__cta-btn">
            Get in Touch →
          </a>
        </div>
      </div>

      {/* ===== FOOTER BODY ===== */}
      <div className="footer__body">

        {/* Background Circles */}
        <div className="footer__bg-circle footer__bg-circle-1"></div>
        <div className="footer__bg-circle footer__bg-circle-2"></div>

        <div className="footer__grid">

          {/* ===== BRAND ===== */}
          <div className="footer__brand">
            <a href="/" className="footer__logo-link">
              <img
                src={logo}
                alt="Sakha Spices"
                className="footer__logo"
              />
            </a>

            <p className="footer__tagline">
              From the heart of India's spice trails – pure, aromatic, and crafted with generations of tradition.
            </p>

            {/* Socials */}
            <div className="footer__socials">
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <span>Instagram</span>
              </a>

              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <span>Facebook</span>
              </a>

              <a href="#" className="footer__social-btn" aria-label="WhatsApp">
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ===== NAVIGATE ===== */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigate</h4>

            <ul className="footer__links">
              <li>
                <a href="/" className="footer__link active">
                  <span className="footer__link-arrow">→</span>
                  Home
                </a>
              </li>

              <li>
                <a href="/about-us" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  About Us
                </a>
              </li>

              <li>
                <a href="/blogs" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Blogs
                </a>
              </li>

              <li>
                <a href="/contact-us" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ===== PRODUCTS ===== */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Products</h4>

            <ul className="footer__links">
              <li>
                <a href="/products/sakha" className="footer__link footer__link--product">
                  <span className="footer__product-dot footer__product-dot--green"></span>
                  Sakha Range
                </a>
              </li>

              <li>
                <a href="/products/shrinath-ji" className="footer__link footer__link--product">
                  <span className="footer__product-dot footer__product-dot--gold"></span>
                  Shrinath Ji Range
                </a>
              </li>
            </ul>

            {/* ===== LEGAL ===== */}
            <h4 className="footer__col-title footer__col-title--mt">Legal</h4>

            <ul className="footer__links">
              <li>
                <a href="/privacy-policy" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* ===== CONTACT ===== */}
          <div className="footer__col">
            <h4 className="footer__col-title">Get In Touch</h4>

            <ul className="footer__contact-list">

              <li className="footer__contact-item">
                <span className="footer__contact-icon">📍</span>
                <span>Rajkot, Gujarat, India</span>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:hello@sakhaspices.com" className="footer__contact-link">
                  hello@sakhaspices.com
                </a>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919876543210" className="footer__contact-link">
                  +91 98765 43210
                </a>
              </li>

            </ul>

            {/* Badge */}
            <div className="footer__badge">
              <span className="footer__badge-icon">🌿</span>
              <div>
                <p className="footer__badge-title">100% Natural</p>
                <p className="footer__badge-sub">
                  No preservatives, no additives
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">

          <div className="footer__bottom-divider">
            <span className="footer__divider-line"></span>
            <span className="footer__bottom-brand">SAKHA SPICES</span>
            <span className="footer__divider-line"></span>
          </div>

          <p className="footer__copy">
            © 2026 Sakha Spices. All rights reserved. &nbsp;&nbsp; Made with ❤️ <a href="https://agilesolutions.co.in/" className="agile">Agile Edtech Solutions Pvt Ltd</a>
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;