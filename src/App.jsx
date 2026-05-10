import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sakha from "./pages/Sakha";
import Shrinathji from "./pages/Shrinathji";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sakha" element={<Sakha />} />
        <Route path="/shrinathji" element={<Shrinathji />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;