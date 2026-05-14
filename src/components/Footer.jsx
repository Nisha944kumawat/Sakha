import logo from "../assets/logo.png";
import "./Footer.css";
import { IoIosContact } from "react-icons/io";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram,FaCertificate, FaBuilding } from "react-icons/fa";

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

          <a href="/contact" className="footer__cta-btn">
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
            
            {/* ===== LEGAL INFO ===== */}
<div className="footer__legal-info">

  <div className="footer__legal-item">
    <span className="footer__legal-icon">
      <FaCertificate />
    </span>

    <span>
      FSSAI Lic. No. 12223026000048
    </span>
  </div>

  <div className="footer__legal-item">
    <span className="footer__legal-icon">
      <FaBuilding />
    </span>

    <span>
      CIN No. U15499RJ2010PTC033117
    </span>
  </div>

</div>

            {/* Socials */}
            <div className="footer__socials">

  {/* WhatsApp */}
  <a
    href="https://wa.me/919314508970"
    target="_blank"
    rel="noopener noreferrer"
    className="footer__social-btn"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  {/* Call */}
  <a
    href="tel:+919314508970"
    className="footer__social-btn"
    aria-label="Call"
  >
    <FaPhoneAlt />
  </a>

  {/* Facebook */}
<a
  href="https://facebook.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="footer__social-btn"
  aria-label="Facebook"
>
  <FaFacebookF />
</a>

{/* Instagram */}
<a
  href="https://www.instagram.com/sakhaspices?igsh=ZGxzc3JkN3B3MjBk"
  target="_blank"
  rel="noopener noreferrer"
  className="footer__social-btn"
  aria-label="Instagram"
>
  <FaInstagram />
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
                <a href="/about" className="footer__link">
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
                <a href="/contact" className="footer__link">
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
                <a href="/sakha" className="footer__link footer__link--product">
                  <span className="footer__product-dot footer__product-dot--gold"></span>
                  Sakha Range
                </a>
              </li>
              <li>
                <a href="/shrinathji" className="footer__link footer__link--product">
                  <span className="footer__product-dot footer__product-dot--gold"></span>
                  Shrinath Ji Range
                </a>
              </li>
            </ul>

            {/* ===== LEGAL ===== */}
            <h4 className="footer__col-title footer__col-title--mt">TIMINGS</h4>

            <ul className="footer__links">
              <li>
                <a className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Mon-Sat (09:00 AM - 06:00 PM) 
                </a>
              </li>

              <li>
                <a className="footer__link">
                  <span className="footer__link-arrow">→</span>
                  Sunday (09:00 AM - 04:00 PM)
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
                <span>SHYAM SAKHA INDUSTRIES PVT. LTD. <br/>

        Khasra No. 675,677,678, <br/>
          Village : Harota, Tehsil : Chomu,
         Dist.: Jaipur, Rajasthan-303702. (INDIA)</span>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon">
                  <IoIosContact />
                </span>
                <span>Mahesh Agarwal (Director Proprietor)</span>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919314508970" className="footer__contact-link">
                  +91 9314508970
                </a>
              </li>

              <li className="footer__contact-item">
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919024137851" className="footer__contact-link">
                  +91 9024137851
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