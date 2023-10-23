import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { useState } from "react";
import FooterHero from "./components/FooterHero";
import Footer from "./components/Footer";
import HeadphoneFirstProduct from "./components/Headphones/HeadphoneFirstProduct";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenuRoute, setActiveMenuRoute] = useState<number>(0);
  return (
    <div
      className={`w-full h-screen overflow-x-hidden ${
        mobileMenu ? "overflow-hidden" : "overflow-scroll"
      }`}
    >
      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              activeMenuRoute={activeMenuRoute}
              setActiveMenuRoute={setActiveMenuRoute}
            />
          }
        ></Route>
        <Route path="/headphones" element={<Headphones />}>
          <Route
            path="/headphones/product1"
            element={<HeadphoneFirstProduct />}
          ></Route>
        </Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
      </Routes>

      <FooterHero
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
      <Footer
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default App;
