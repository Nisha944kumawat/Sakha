import "./newsletter.css";
const newsletter = () => {
  return (
    <section className="blogs-newsletter">

      <div className="blogs-newsletter__inner">

        {/* LABEL */}
        <div
          className="blogs-label"
          style={{
            color: "var(--gold-lt)",
            justifyContent: "center",
          }}
        >
          Stay Updated
        </div>

        {/* TITLE */}
        <h2 className="blogs-newsletter__title">
          Fresh Stories,
          <br />
          <em>Straight to You</em>
        </h2>

        {/* TEXT */}
        <p className="blogs-newsletter__text">
          Get new articles about spices, recipes and quality tips
          delivered to your inbox — no spam, just pure flavour.
        </p>

        {/* FORM */}
        <form className="blogs-newsletter__form">

          <input
            type="email"
            placeholder="Your email address"
            className="blogs-newsletter__input"
            required
          />

          <button
            type="submit"
            className="blogs-newsletter__btn"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
};

export default newsletter;
