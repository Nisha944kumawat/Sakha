// ShrinathGrid.jsx

import { useState } from "react";

import s1 from "./sh1.png";
import s2 from "./sh2.png";
import s3 from "./sh3.png";
import s4 from "./sh4.png";
import s5 from "./sh5.png";
import s6 from "./sh6.png";
import s7 from "./sh7.png";
import s8 from "./sh8.png";
import s9 from "./sh9.png";
import s10 from "./sh10.png";
import s11 from "./sh11.png";
import s12 from "./sh12.png";

import "./SakhaGrid.css";

const ShrinathGrid = () => {

  // ✅ SIZE STATE
  const [selectedSizes, setSelectedSizes] = useState({});

  // ✅ HANDLE SIZE SELECT
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

  const message = `Hello Shrinath,

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

  // ✅ PRODUCTS DATA
  const products = [
    {
      img: s1,
      name: "Carom (अजवाइन)",
      desc: "Pure and aromatic Carom Seeds for rich flavor and everyday freshness.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s2,
      name: "Baking Soda (मीठा सोडा)",
      desc: "Pure and effective Baking Soda for perfect softness in every recipe.",
      sizes: ["50g", "100g", "250g"],
    },
    {
      img: s3,
      name: "Black Pepper (काली मिर्च)",
      desc: "Bold and aromatic Black Pepper for rich flavor in every bite.",
      sizes: ["50g", "100g", "500g"],
    },
    {
      img: s4,
      name: "Black Salt (काला नमक)",
      desc: "Pure and tangy Black Salt to enhance the flavor of every dish.",
      sizes: ["250g", "500g", "1kg"],
    },
    {
      img: s5,
      name: "Hot Spices (गरम मसाला)",
      desc: "Rich and aromatic Garam Masala for authentic taste in every dish.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s6,
      name: "Cardamom (इलायची)",
      desc: "Bold and smoky Cardamom for rich aroma and authentic flavor.",
      sizes: ["50g", "100g", "250g"],
    },
    {
      img: s7,
      name: "Coriander (धनिया साबुत)",
      desc: "Freshly milled coriander with a citrusy, nutty aroma.",
      sizes: ["250g", "500g", "1kg"],
    },
    {
      img: s8,
      name: "Cumin (जीरा)",
      desc: "Fresh and aromatic Cumin for rich flavor in every recipe.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s9,
      name: "Fenugreek Seeds (मेथी)",
      desc: "Pure and flavorful Fenugreek Seeds for authentic taste and freshness.",
      sizes: ["50g", "100g", "250g"],
    },
    {
      img: s10,
      name: "Mustard (राई)",
      desc: "Fresh and pure Mustard Seeds for rich taste in every meal.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s11,
      name: "Rock salt (सेंधा नमक)",
      desc: "Pure and natural Rock Salt for healthy and delicious flavor.",
      sizes: ["100g", "250g", "500g"],
    },
    {
      img: s12,
      name: "Sesame (तिल)",
      desc: "Fresh and nutritious Sesame for rich taste and natural goodness.",
      sizes: ["250g", "500g", "1kg"],
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
                  Shrinath
                </span>

              </div>

              <div className="product-card__body">

                <div className="product-card__brand">
                  Shrinath Range
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

export default ShrinathGrid;