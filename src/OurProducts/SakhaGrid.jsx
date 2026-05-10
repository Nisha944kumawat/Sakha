// SakhaGrid.jsx

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
import  "./SakhaGrid.css";

const SakhaGrid = () => {
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Peanuts (मूँगफली)</div>
              <div className="product-card__desc">
               Premium-quality peanuts with a rich nutty taste and satisfying crunch.
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

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={s2}
                alt="Lal Mirch"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Clove (लौंग)</div>
              <div className="product-card__desc">
                Premium-quality Clove with rich aroma and authentic flavor in every bite.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Red Chilli (लाल मिर्च)</div>
              <div className="product-card__desc">
                Sun-dried red chillies, bold heat with vibrant colour & taste.
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
                src={s4}
                alt="Fenugreek"
                alt="Dhaniya Powder"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Mustard (सरसों)</div>
              <div className="product-card__desc">
                Pure and fresh Mustard packed with rich flavor for every kitchen.
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
                src={s5}
                alt="Sesame Seeds"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Fenugreek (मेथी)</div>
              <div className="product-card__desc">
               Fresh and aromatic Fenugreek for rich taste and natural goodness.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Black Cardamom (काली इलायची)</div>
              <div className="product-card__desc">
                Bold and smoky Black Cardamom for rich aroma and authentic flavor.
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
                src={s7}
                alt="Rock Salt"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Black Mustard (राई)</div>
              <div className="product-card__desc">
              Fresh and flavorful Black Mustard to enhance every traditional recipe.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Nutmeg (जायफल)</div>
              <div className="product-card__desc">
                Rich and aromatic Nutmeg for warm flavor in every dish.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Cinnamon (दालचीनी)</div>
              <div className="product-card__desc">
                Rich and aromatic Cinnamon for warm flavor in every dish.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Hot Spices (गर्म मसाले)</div>
              <div className="product-card__desc">
                Premium Garam Masala blend for rich aroma and authentic taste.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Fenugreek Leaves (मेथी)</div>
              <div className="product-card__desc">
                Fresh and flavorful Fenugreek Leaves to add natural taste to every meal.
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
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Coriander (धनिया साबुत)</div>
              <div className="product-card__desc">
                Freshly milled coriander with a citrusy, nutty aroma.
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

      </div>
    </section>
  );
};

export default SakhaGrid;