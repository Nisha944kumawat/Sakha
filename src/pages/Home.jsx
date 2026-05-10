import Hero from "../components/Hero";
import "../components/Hero.css";
import Marquee from "../components/Marquee";
import "../components/Marquee.css";
import Legacy from "../components/Legacy";
import "../components/Legacy.css";
import Products from "../components/Products";
import "../components/Products.css";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import GetTouch from "../components/GetTouch";
const Home = () => {
  return (
    <>
     <main class="main-content">
  <div class="home">
      <Hero />
      <Marquee />
      <Legacy />
      <Products />
      <Process />
      <Testimonials />
      <GetTouch />
  </div>
</main>
    </>
  );
};
export default Home;