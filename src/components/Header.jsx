import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ ADD THIS
import logo from "../assets/logo.png";
import "./Header.css";

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
          <Link to="/" className="navbar__link navbar__link--active">Home</Link>

          <Link to="/about" className="navbar__link" id="about">About Us</Link>

          <div
            className="navbar__dropdown"
            id="products"
            onMouseEnter={() => setDesktopDropdown(true)}
            onMouseLeave={() => setTimeout(() => setDesktopDropdown(false), 1100)}
          >
            <button
              className="navbar__link navbar__link--btn"
              onClick={() => setDesktopDropdown(!desktopDropdown)}
            >
              Our Products ▾
            </button>

            <div className={`navbar__dropdown-menu ${desktopDropdown ? "show" : ""}`}>
              <Link to="/sakha" className="navbar__dropdown-item">🌿 Sakha</Link>
              <Link to="/shrinathji" className="navbar__dropdown-item">✨ Shrinath Ji</Link>
            </div>
          </div>

          <Link to="/blogs" className="navbar__link">Blogs</Link>

          <Link to="/contact" className="navbar__link">Contact Us</Link>

          <Link to="/login" className="navbar__link navbar__link--cta">Login</Link>
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

        <Link to="/" className="navbar__mobile-link">Home</Link>

        <Link to="/about" className="navbar__mobile-link">About Us</Link>

        {/* MOBILE DROPDOWN */}
        <div
          className="navbar__mobile-link"
          onClick={() => setProductOpen(!productOpen)}
        >
          Our Products ▾
        </div>

        {productOpen && (
          <div className="navbar__mobile-sub">
            <Link to="/products">🌿 Sakha</Link>
            <Link to="/products">✨ Shrinath Ji</Link>
          </div>
        )}

        <Link to="/blogs" className="navbar__mobile-link">Blogs</Link>

        <Link to="/contact" className="navbar__mobile-link">Contact Us</Link>

        <Link to="/login" className="navbar__mobile-link navbar__mobile-link--cta">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;