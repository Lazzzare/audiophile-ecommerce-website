import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { useEffect, useState } from "react";
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
  const [XX99MarkIIAmout, setXX99MarkIIAmout] = useState<number>(0);
  const [XX99MarkIAmout, setXX99MarkIAmout] = useState<number>(0);
  const [XX59MarkIAmout, setXX59MarkIAmout] = useState<number>(0);
  const [productAmount, setProductAmount] = useState<number>(
    XX99MarkIIAmout + XX99MarkIAmout + XX59MarkIAmout
  );
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    setProductAmount(XX99MarkIIAmout + XX99MarkIAmout + XX59MarkIAmout);
  }, [XX99MarkIIAmout, XX99MarkIAmout, XX59MarkIAmout]);

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
        productAmount={productAmount}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        XX99MarkIIAmout={XX99MarkIIAmout}
        XX99MarkIAmout={XX99MarkIAmout}
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
            <HeadphoneFirstProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
              setAddToCart={setAddToCart}
              XX99MarkIIAmout={XX99MarkIIAmout}
              setXX99MarkIIAmout={setXX99MarkIIAmout}
            />
          }
        ></Route>
        <Route
          path="/headphones/product2"
          element={
            <HeadphonesSecondProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
              setProductAmount={setProductAmount}
              setAddToCart={setAddToCart}
              XX99MarkIAmout={XX99MarkIAmout}
              setXX99MarkIAmout={setXX99MarkIAmout}
            />
          }
        ></Route>
        <Route
          path="/headphones/product3"
          element={
            <HeadphonesLastProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
              XX59MarkIAmout={XX59MarkIAmout}
              setXX59MarkIAmout={setXX59MarkIAmout}
              setAddToCart={setAddToCart}
            />
          }
        ></Route>

        <Route path="/speakers" element={<Speakers />}></Route>
        {/* Speakers Product Pages */}
        <Route
          path="/speakers/product1"
          element={
            <SpeakersFirstProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
            />
          }
        ></Route>
        <Route
          path="/speakers/product2"
          element={
            <SpeakersSecondProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
            />
          }
        ></Route>
        {/* Earphones Product pages */}
        <Route path="/earphones" element={<Earphones />}></Route>
        <Route
          path="/earphones/product1"
          element={
            <EarphoneWireless
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
            />
          }
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
