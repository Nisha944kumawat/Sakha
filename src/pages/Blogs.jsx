import Hero from "../blog/hero"
import Featured from "../blog/featured"
import Grid from "../blog/grid"
import Newsletter from "../blog/newsletter"
const Blogs = () => {
  return (
    <>
     <main class="main-content">
  <div class="home">
       <Hero />
        <Featured />
        <Grid />
        <Newsletter />
  </div>
</main>
    </>
  );
};

export default Blogs;