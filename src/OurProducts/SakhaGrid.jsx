// SakhaGrid.jsx

import { useState } from "react";

import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import s4 from "./s4.png";
import s5 from "./s5.png";
import s6 from "./s6.png";
import s7 from "./s7.png";
import s8 from "./s8.png";
import s9 from "./s9.png";
import s10 from "./s10.png";
import s11 from "./s11.png";
import s12 from "./s12.png";

import "./SakhaGrid.css";

const SakhaGrid = () => {

  // ✅ SIZE STATE
  const [selectedSizes, setSelectedSizes] = useState({});

  // ✅ SIZE SELECT
  const handleSizeSelect = (productName, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productName]: size,
    }));
  };

  // ✅ WHATSAPP FUNCTION
// ✅ HANDLE ENQUIRE FUNCTION replace karo

const handleEnquire = (productName, description) => {

  const selectedSize =
    selectedSizes[productName] || "No size selected";

  const message = `Hello Shakha,

I want to enquire about this product:

🛍 Product: ${productName}
📦 Selected Size: ${selectedSize}
📝 Description: ${description}`;

  window.open(
    `https://wa.me/919314508970?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  // ✅ ENQUIRE ke baad selected size remove ho jayega
  setSelectedSizes((prev) => ({
    ...prev,
    [productName]: "",
  }));
};

  // ✅ PRODUCT DATA
  const products = [
    {
      img: s1,
      name: "Peanuts (मूँगफली)",
      desc: "Premium-quality peanuts with a rich nutty taste and satisfying crunch.",
      sizes: ["250g", "500g", "1kg"],
    },
    {
      img: s2,
      name: "Clove (लौंग)",
      desc: "Premium-quality Clove with rich aroma and authentic flavor in every bite.",
      sizes: ["50g", "100g", "250g"],
    },
    {
      img: s3,
      name: "Red Chilli (लाल मिर्च)",
      desc: "Sun-dried red chillies, bold heat with vibrant colour & taste.",
      sizes: ["250g", "500g", "1kg"],
    },
    {
      img: s4,
      name: "Mustard (सरसों)",
      desc: "Pure and fresh Mustard packed with rich flavor for every kitchen.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s5,
      name: "Fenugreek (मेथी)",
      desc: "Fresh and aromatic Fenugreek for rich taste and natural goodness.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s6,
      name: "Black Cardamom (काली इलायची)",
      desc: "Bold and smoky Black Cardamom for rich aroma and authentic flavor.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s7,
      name: "Black Mustard (राई)",
      desc: "Fresh and flavorful Black Mustard to enhance every traditional recipe.",
      sizes: ["250g", "500g", "1kg"],
    },
    {
      img: s8,
      name: "Nutmeg (जायफल)",
      desc: "Rich and aromatic Nutmeg for warm flavor in every dish.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s9,
      name: "Cinnamon (दालचीनी)",
      desc: "Rich and aromatic Cinnamon for warm flavor in every dish.",
      sizes: ["50g", "100g", "250g"],
    },
    {
      img: s10,
      name: "Hot Spices (गर्म मसाले)",
      desc: "Premium Garam Masala blend for rich aroma and authentic taste.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s11,
      name: "Fenugreek Leaves (मेथी)",
      desc: "Fresh and flavorful Fenugreek Leaves to add natural taste to every meal.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s12,
      name: "Coriander (धनिया साबुत)",
      desc: "Freshly milled coriander with a citrusy, nutty aroma.",
      sizes: ["100g", "250g", "500g"],
    },
  ];

  return (
    <section className="products">

      <div className="products__inner">

        {/* HEADER */}
        <div className="products__header">

          <div>

            <div
              className="section-label"
              style={{ color: "var(--gold-lt)" }}
            >
              Our Range
            </div>

            <h2 className="products__title">
              Two Brands,
              <br />
              <em>One Standard</em> of Purity
            </h2>

          </div>

        </div>

        {/* PRODUCTS GRID */}
        <div className="products__grid">

          {products.map((product, index) => (

            <div className="product-card" key={index}>

              <div className="product-card__img-wrap">

                <img
                  className="product-card__img"
                  src={product.img}
                  alt={product.name}
                />

                <span className="product-card__tag">
                  Sakha
                </span>

              </div>

              <div className="product-card__body">

                <div className="product-card__brand">
                  Sakha Range
                </div>

                <div className="product-card__name">
                  {product.name}
                </div>

                <div className="product-card__desc">
                  {product.desc}
                </div>

                <div className="product-card__footer">

                  {/* ENQUIRE BUTTON */}
                  <button
                    className="product-card__cta"
                    onClick={() =>
                      handleEnquire(
                        product.name,
                        product.desc
                      )
                    }
                  >
                    Enquire
                  </button>

                  {/* SIZES */}
                  <div className="product-card__sizes">

                    {product.sizes.map((size, i) => (

                      <span
                        key={i}
                        className={`sakha-card__size ${
                          selectedSizes[product.name] === size
                            ? "active-size"
                            : ""
                        }`}
                        onClick={() =>
                          handleSizeSelect(product.name, size)
                        }
                      >
                        {size}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SakhaGrid;