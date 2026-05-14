import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="logo" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="navbar__links">
          <Link to="/" className="navbar__link navbar__link--active">
            Home
          </Link>

          <Link to="/about" className="navbar__link" id="about">
            About Us
          </Link>

          <div
            className="navbar__dropdown"
            id="products"
            onMouseEnter={() => setDesktopDropdown(true)}
            onMouseLeave={() =>
              setTimeout(() => setDesktopDropdown(false), 1100)
            }
          >
            <button
              className="navbar__link navbar__link--btn"
              onClick={() => setDesktopDropdown(!desktopDropdown)}
            >
              Our Products ▾
            </button>

            <div
              className={`navbar__dropdown-menu ${
                desktopDropdown ? "show" : ""
              }`}
            >
              <Link to="/sakha" className="navbar__dropdown-item">
                🌿 Sakha
              </Link>

              <Link to="/shrinathji" className="navbar__dropdown-item">
                ✨ Shrinath Ji
              </Link>
            </div>
          </div>

          <Link to="/blogs" className="navbar__link">
            Blogs
          </Link>

          <Link to="/contact" className="navbar__link">
            Contact Us
          </Link>

          <a
            href="tel:9314508970"
            className="navbar__link navbar__link--cta"
          >
            <FaPhoneAlt
              style={{
                color: "white",
                fontSize: "15px",
                marginRight: "8px",
              }}
            />
            9314508970
          </a>
        </nav>

        {/* HAMBURGER */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile ${menuOpen ? "active" : ""}`}>

        <Link
          to="/"
          className="navbar__mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/about"
          className="navbar__mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>

        {/* MOBILE DROPDOWN */}
        <div
          className="navbar__mobile-link"
          onClick={() => setProductOpen(!productOpen)}
        >
          Our Products ▾
        </div>

        {productOpen && (
          <div className="navbar__mobile-sub">

            <Link
              to="/sakha"
              onClick={() => setMenuOpen(false)}
            >
              🌿 Sakha
            </Link>

            <Link
              to="/shrinathji"
              onClick={() => setMenuOpen(false)}
            >
              ✨ Shrinath Ji
            </Link>

          </div>
        )}

        <Link
          to="/blogs"
          className="navbar__mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          Blogs
        </Link>

        <Link
          to="/contact"
          className="navbar__mobile-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Link>

        <a
          href="tel:9314508970"
          className="navbar__link navbar__link--cta"
          onClick={() => setMenuOpen(false)}
        >
          <FaPhoneAlt
            style={{
              color: "white",
              fontSize: "15px",
              marginRight: "8px",
            }}
          />
          9314508970
        </a>
      </div>
    </header>
  );
};

export default Header;