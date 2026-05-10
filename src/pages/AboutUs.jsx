import Hero from "../about/Hero";
import Story from "../about/Story";
import Value from "../about/Value";
import Journey from "../about/Journey";
import Brands from "../about/Brands";
import GetTouch from "../about/GetTouch";
const AboutUs = () => {
  return (
    <>
<main className="main-content">
  <div className="about-page page-content">
      <Hero />
      <Story/>
      <Value />
      <Journey />
      <Brands />
      <GetTouch />

  </div>
</main>
    </>
  );
};

export default AboutUs;