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
import HeadphonesSecondProduct from "./components/Headphones/HeadphonesSecondProduct";
import HeadphonesLastProduct from "./components/Headphones/HeadphonesLastProduct";
import SpeakersFirstProduct from "./components/Speakers/SpeakersFirstProduct";
import SpeakersSecondProduct from "./components/Speakers/SpeakersSecondProduct";
import EarphoneWireless from "./components/Earphones/EarphoneWireless";

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

        <Route path="/headphones" element={<Headphones />}></Route>
        {/* Headphone product pages */}
        <Route
          path="/headphones/product1"
          element={
            <HeadphoneFirstProduct setActiveMenuRoute={setActiveMenuRoute} />
          }
        ></Route>
        <Route
          path="/headphones/product2"
          element={
            <HeadphonesSecondProduct setActiveMenuRoute={setActiveMenuRoute} />
          }
        ></Route>
        <Route
          path="/headphones/product3"
          element={
            <HeadphonesLastProduct setActiveMenuRoute={setActiveMenuRoute} />
          }
        ></Route>

        <Route path="/speakers" element={<Speakers />}></Route>
        {/* Speakers Product Pages */}
        <Route
          path="/speakers/product1"
          element={
            <SpeakersFirstProduct setActiveMenuRoute={setActiveMenuRoute} />
          }
        ></Route>
        <Route
          path="/speakers/product2"
          element={
            <SpeakersSecondProduct setActiveMenuRoute={setActiveMenuRoute} />
          }
        ></Route>
        {/* Earphones Product pages */}
        <Route path="/earphones" element={<Earphones />}></Route>
        <Route
          path="/earphones/product1"
          element={<EarphoneWireless setActiveMenuRoute={setActiveMenuRoute} />}
        ></Route>
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
