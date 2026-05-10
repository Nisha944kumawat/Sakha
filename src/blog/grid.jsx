
import "./grid.css";
import b1 from "./b1.jpeg";
import b2 from "./b2.png";
import b3 from "./b3.png";
import b4 from "./b4.png";
import b5 from "./b5.png";
import b6 from "./b6.png";
const grid = () => {
  return (
    <section className="blogs-grid-section" id="all-posts">
      <div className="blogs-grid-section__inner">

        {/* BLOG GRID */}
        <div className="blogs-grid">

          {/* CARD 2 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="Decoding Lal Mirch: Which Variety Is Right for Your Dish?"
                className="blog-card__img"
                src={b2}
              />
              <span className="blog-card__tag">Red Chilli</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Jan 2025</span>
                <span className="blog-card__read-time">⏱ 5 min read</span>
              </div>

              <h3 className="blog-card__title">
                Decoding Lal Mirch: Which Variety Is Right for Your Dish?
              </h3>

              <p className="blog-card__excerpt">
                "Byadgi, Kashmiri, Teja — India grows dozens of chilli
                varieties. We explain the differences in heat, colour and
                flavour to help you pick the right one."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>

          {/* CARD 1 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="How We Source Directly from Rajasthan's Spice Farms"
                className="blog-card__img"
                src={b1}
              />
              <span className="blog-card__tag">Sourcing</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Feb 2025</span>
                <span className="blog-card__read-time">⏱ 4 min read</span>
              </div>

              <h3 className="blog-card__title">
                How We Source Directly from Rajasthan's Spice Farms
              </h3>

              <p className="blog-card__excerpt">
                "A behind-the-scenes look at how Shyam Sakha Industries builds
                direct relationships with farmers to guarantee freshness and
                traceability in every batch."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="The Sacred 12-Spice Blend Behind Shrinath Ji Garam Masala"
                className="blog-card__img"
                src={b3}
              />
              <span className="blog-card__tag">Garam Masala</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Dec 2024</span>
                <span className="blog-card__read-time">⏱ 7 min read</span>
              </div>

              <h3 className="blog-card__title">
                The Sacred 12-Spice Blend Behind Shrinath Ji Garam Masala
              </h3>

              <p className="blog-card__excerpt">
                "Every ingredient in our Shrinath Ji blend carries a story
                rooted in Rajasthani tradition. Here's what goes in, why it
                goes in, and how it's slow-roasted."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>

       

          {/* CARD 5 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="Spices as Medicine: The Ayurvedic Roots of Your Kitchen Staples"
                className="blog-card__img"
                src={b5}
              />
              <span className="blog-card__tag">Health</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Oct 2024</span>
                <span className="blog-card__read-time">⏱ 5 min read</span>
              </div>

              <h3 className="blog-card__title">
                Spices as Medicine: The Ayurvedic Roots of Your Kitchen Staples
              </h3>

              <p className="blog-card__excerpt">
                "Long before they flavoured food, spices like haldi, jeera and
                ajwain were prescribed as remedies. A look at the ancient
                science behind everyday ingredients."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="What Does 'Export Ready' Actually Mean for a Spice Brand?"
                className="blog-card__img"
                src={b4}
              />
              <span className="blog-card__tag">Quality</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Nov 2024</span>
                <span className="blog-card__read-time">⏱ 4 min read</span>
              </div>

              <h3 className="blog-card__title">
                What Does 'Export Ready' Actually Mean for a Spice Brand?
              </h3>

              <p className="blog-card__excerpt">
                "We walk through the lab tests, moisture controls and packaging
                standards that make a spice batch export-ready — and why those
                same standards benefit you."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="blog-card">
            <div className="blog-card__img-wrap">
              <img
                alt="5 Signs Your Spices Have Lost Their Potency (And What to Do)"
                className="blog-card__img"
                src={b6}
              />
              <span className="blog-card__tag">Tips</span>
            </div>

            <div className="blog-card__body">
              <div className="blog-card__meta">
                <span className="blog-card__date">Sep 2024</span>
                <span className="blog-card__read-time">⏱ 3 min read</span>
              </div>

              <h3 className="blog-card__title">
                5 Signs Your Spices Have Lost Their Potency (And What to Do)
              </h3>

              <p className="blog-card__excerpt">
                "Faded colour, flat aroma, dull flavour — your spices are trying
                to tell you something. Here's how to spot degraded spices and
                store them properly."
              </p>

              <div className="blog-card__footer">
                <div className="blog-card__author">
                  <div className="blog-card__avatar">ST</div>
                  <span className="blog-card__author-name">
                    Sakha Team
                  </span>
                </div>

                <div className="blog-card__arrow">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default grid;

