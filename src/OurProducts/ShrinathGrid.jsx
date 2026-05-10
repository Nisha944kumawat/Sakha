// SakhaGrid.jsx
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
import  "./SakhaGrid.css";

const ShrinathGrid = () => {
  return (
 <section className="products">
      <div className="products__inner">

        {/* HEADER */}
        <div className="products__header">

          <div>
            <div className="section-label" style={{ color: "var(--gold-lt)" }}>
              Our Range
            </div>

            <h2 className="products__title">
              Two Brands,
              <br />
              <em>One Standard</em> of Purity
            </h2>
          </div>

          <a
            className="products__link"
            href="/products/sakha"
            data-discover="true"
          >
            View All Products →
          </a>

        </div>

        {/* PRODUCTS GRID */}
        <div className="products__grid">

          {/* CARD 1 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s1}
                alt="Haldi Powder"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Carom (अजवाइन)</div>
              <div className="product-card__desc">
               Pure and aromatic Carom Seeds for rich flavor and everyday freshness.
              </div>

            <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s2}
                alt="Lal Mirch"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Baking Soda (मीठा सोडा)</div>
              <div className="product-card__desc">
                Pure and effective Baking Soda for perfect softness in every recipe.
              </div>
                           <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">50g</span>
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
  </div>

</div>
            
            </div>
          </div>

          {/* CARD 3 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s3}
                alt="Cloves"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Black Pepper (काली मिर्च)</div>
              <div className="product-card__desc">
                Bold and aromatic Black Pepper for rich flavor in every bite.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">50g</span>
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s4}
                alt="Fenugreek"
                alt="Dhaniya Powder"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Black Salt (काला नमक)</div>
              <div className="product-card__desc">
                Pure and tangy Black Salt to enhance the flavor of every dish.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
    <span className="sakha-card__size">1kg</span>
  </div>

</div>
            </div>
          </div>

        </div>
                {/* PRODUCTS GRID */}
        <div className="products__grid">

          {/* CARD 1 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s5}
                alt="Sesame Seeds"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Hot Spices (गरम मसाला)</div>
              <div className="product-card__desc">
               Rich and aromatic Garam Masala for authentic taste in every dish.
              </div>

                         <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s6}
                alt="Black Cardamom"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Cardamom (इलायची)</div>
              <div className="product-card__desc">
                Bold and smoky Cardamom for rich aroma and authentic flavor.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">50g</span>
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s7}
                alt="Rock Salt"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
                <div className="product-card__name">Coriander (धनिया साबुत)</div>
              <div className="product-card__desc">
                Freshly milled coriander with a citrusy, nutty aroma.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
    <span className="sakha-card__size">1kg</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s8}
                alt="Mustard Seeds"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Cumin (जीरा)</div>
              <div className="product-card__desc">
                Fresh and aromatic Cumin for rich flavor in every recipe.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

        </div>

                        {/* PRODUCTS GRID */}
        <div className="products__grid">

          {/* CARD 1 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s9}
                alt="Sesame Seeds"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Fenugreek Seeds (मेथी)</div>
              <div className="product-card__desc">
                Pure and flavorful Fenugreek Seeds for authentic taste and freshness.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">50g</span>
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s10}
                alt="FenugreekShri"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Mustard (राई)</div>
              <div className="product-card__desc">
                Fresh and pure Mustard Seeds for rich taste in every meal.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s11}
                alt="Rock Salt"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Rock salt (सेंधा नमक)</div>
              <div className="product-card__desc">
                Pure and natural Rock Salt for healthy and delicious flavor.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">100g</span>
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
  </div>

</div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s12}
                alt="Mustard Seeds"
              />
              <span className="product-card__tag">Shrinath</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Range</div>
              <div className="product-card__name">Sesame (तिल)</div>
              <div className="product-card__desc">
                Fresh and nutritious Sesame for rich taste and natural goodness.
              </div>

                          <div className="product-card__footer">

  <button className="product-card__cta">
    Enquire
  </button>

  <div className="product-card__sizes">
    <span className="sakha-card__size">250g</span>
    <span className="sakha-card__size">500g</span>
    <span className="sakha-card__size">1kg</span>
    
  </div>

</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ShrinathGrid;