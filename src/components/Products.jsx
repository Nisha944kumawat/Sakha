import "./Products.css";
import Whole_Red_Chilli from "../img/Whole_Red_Chilli.png";
import Peanuts from "../img/Peanuts.png";
import Cloves from "../img/Clove.png";
import Fenugreek from "../img/Fenugreek.png";
import Sesame from "../img/Sesame.png";
import RockSalt from "../img/RockSalt.png";
import FenugreekShri from "../img/FenugreekShri.png";
import Mustard from "../img/Mustard.png";

const Products = () => {
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
            href="/sakha"
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
                src={Peanuts}
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
                <a href="/sakha" className="product-card__link">
                  <span className="product-card__cta">
                  Explore →
                </span>
                </a>
                <span className="product-card__icon">🌿</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={Whole_Red_Chilli}
                alt="Lal Mirch"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Red Chilli (लाल मिर्च)</div>
              <div className="product-card__desc">
                Sun-dried red chillies, bold heat with vibrant colour.
              </div>

              <div className="product-card__footer">
                <a href="/sakha" className="product-card__link">
                  <span className="product-card__cta">
                  Explore →
                </span>
                </a>
                <span className="product-card__icon">🌿</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={Cloves}
                alt="Cloves"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Clove (लौंग)</div>
              <div className="product-card__desc">
                A sacred blend of 12 whole spices, slow-roasted to perfection.
              </div>

              <div className="product-card__footer">
                <a href="/sakha" className="product-card__link">
                  <span className="product-card__cta">
                  Explore →
                </span>
                </a>
                <span className="product-card__icon">🌿</span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={Fenugreek}
                alt="Fenugreek"
                alt="Dhaniya Powder"
              />
              <span className="product-card__tag">Sakha</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Sakha Range</div>
              <div className="product-card__name">Fenugreek leaves (मेथी पत्ते)</div>
              <div className="product-card__desc">
                Freshly milled coriander with a citrusy, nutty aroma.
              </div>

              <div className="product-card__footer">
                <a href="/sakha" className="product-card__link">
                  <span className="product-card__cta">
                  Explore →
                </span>
                </a>
                <span className="product-card__icon">🌿</span>
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
                src={Sesame}
                alt="Sesame Seeds"
              />
              <span className="product-card__tag">Shrinath Ji</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Ji Range</div>
              <div className="product-card__name">Sesame (तिल )</div>
              <div className="product-card__desc">
                Stone-ground turmeric with deep colour & earthy warmth.
              </div>

              <div className="product-card__footer">
                <a href="/shrinathji" className="product-card__link">
                  <span className="product-card__cta">
                    Explore →
                  </span>
                </a>
                <span className="product-card__icon">✨</span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={FenugreekShri}
                alt="FenugreekShri"
              />
              <span className="product-card__tag">Shrinath Ji</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Ji Range</div>
              <div className="product-card__name">FenugreekShri (मेथी)</div>
              <div className="product-card__desc">
                Sun-dried red chillies, bold heat with vibrant colour.
              </div>

              <div className="product-card__footer">
                <a href="/shrinathji" className="product-card__link">
                  <span className="product-card__cta">
                    Explore →
                  </span>
                </a>
                <span className="product-card__icon">✨</span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={RockSalt}
                alt="Rock Salt"
              />
              <span className="product-card__tag">Shrinath Ji</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Ji Range</div>
              <div className="product-card__name">Rock Salt (सेंधा नमक)</div>
              <div className="product-card__desc">
                A sacred blend of 12 whole spices, slow-roasted to perfection.
              </div>

              <div className="product-card__footer">
                <a href="/shrinathji" className="product-card__link">
                  <span className="product-card__cta">
                    Explore →
                  </span>
                </a>
                <span className="product-card__icon">✨</span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="product-card">
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src={Mustard}
                alt="Mustard Seeds"
              />
              <span className="product-card__tag">Shrinath Ji</span>
            </div>

            <div className="product-card__body">
              <div className="product-card__brand">Shrinath Ji Range</div>
              <div className="product-card__name">Mustard (सरसों)</div>
              <div className="product-card__desc">
                Freshly milled coriander with a citrusy, nutty aroma.
              </div>

              <div className="product-card__footer">
                <a href="/shrinathji" className="product-card__link">
                  <span className="product-card__cta">
                    Explore →
                  </span>
                </a>
                <span className="product-card__icon">✨</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;