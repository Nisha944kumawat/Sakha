import "../components/Marquee.css";
const Marquee = () => {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          100% Pure Spices
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          No Artificial Colours
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Farm to Kitchen
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Stone-Ground Daily
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          ISO Certified
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Trusted Since 2005
        </span>

        {/* Repeat for smooth infinite scroll */}
        <span className="marquee-item">
          <span className="marquee-dot"></span>
          100% Pure Spices
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          No Artificial Colours
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Farm to Kitchen
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Stone-Ground Daily
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          ISO Certified
        </span>

        <span className="marquee-item">
          <span className="marquee-dot"></span>
          Trusted Since 2005
        </span>

      </div>
    </div>
  );
};

export default Marquee;