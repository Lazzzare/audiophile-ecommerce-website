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
import CartOverlay from "./components/CartOverlay";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeMenuRoute, setActiveMenuRoute] = useState<number>(0);
  const [XX99MarkIIAmout, setXX99MarkIIAmout] = useState<number>(0);
  const [XX99MarkIAmout, setXX99MarkIAmout] = useState<number>(0);
  const [XX59MarkIAmout, setXX59MarkIAmout] = useState<number>(0);
  const [ZX9Amount, setZX9Amount] = useState<number>(0);
  const [ZX7Amount, setZX7Amount] = useState<number>(0);
  const [YX1Amount, setYX1Amount] = useState<number>(0);
  const [productAmount, setProductAmount] = useState<number>(
    XX99MarkIIAmout +
      XX99MarkIAmout +
      XX59MarkIAmout +
      ZX9Amount +
      ZX7Amount +
      YX1Amount
  );
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const [cartOverlay, setCartOverlay] = useState<boolean>(false);
  const [totalCost] = useState<number>(0);
  const [checkoutRoute, setCheckoutRoute] = useState<boolean>(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setProductAmount(
      XX99MarkIIAmout +
        XX99MarkIAmout +
        XX59MarkIAmout +
        ZX9Amount +
        ZX7Amount +
        YX1Amount
    );
  }, [
    XX99MarkIIAmout,
    XX99MarkIAmout,
    XX59MarkIAmout,
    ZX9Amount,
    ZX7Amount,
    YX1Amount,
  ]);

  return (
    <div
      className={`relative w-full h-screen bg-[#FAFAFA] overflow-x-hidden ${
        mobileMenu ? "overflow-y-hidden" : "overflow-scroll"
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
        cartOverlay={cartOverlay}
        setCartOverlay={setCartOverlay}
        checkoutRoute={checkoutRoute}
        setCheckoutRoute={setCheckoutRoute}
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
              ZX9Amount={ZX9Amount}
              setZX9Amount={setZX9Amount}
              setaddToCart={setAddToCart}
            />
          }
        ></Route>
        <Route
          path="/speakers/product2"
          element={
            <SpeakersSecondProduct
              setActiveMenuRoute={setActiveMenuRoute}
              productAmount={productAmount}
              ZX7Amount={ZX7Amount}
              setZX7Amount={setZX7Amount}
              setaddToCart={setAddToCart}
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
              YX1Amount={YX1Amount}
              setYX1Amount={setYX1Amount}
              setaddToCart={setAddToCart}
            />
          }
        ></Route>

        <Route
          path="/checkout"
          element={
            <Checkout
              productAmount={productAmount}
              totalCost={totalCost}
              XX99MarkIIAmout={XX99MarkIIAmout}
              XX99MarkIAmout={XX99MarkIAmout}
              XX59MarkIAmout={XX59MarkIAmout}
              ZX9Amount={ZX9Amount}
              ZX7Amount={ZX7Amount}
              YX1Amount={YX1Amount}
              activeMenuRoute={activeMenuRoute}
              setActiveMenuRoute={setActiveMenuRoute}
              popup={popup}
              setPopup={setPopup}
            />
          }
        ></Route>
      </Routes>
      {cartOverlay ? (
        <CartOverlay
          cartOverlay={cartOverlay}
          setCartOverlay={setCartOverlay}
          productAmount={productAmount}
          setProductAmount={setProductAmount}
          XX99MarkIIAmout={XX99MarkIIAmout}
          addToCart={addToCart}
          setXX99MarkIIAmout={setXX99MarkIIAmout}
          totalCost={totalCost}
          XX99MarkIAmout={XX99MarkIAmout}
          setXX99MarkIAmout={setXX99MarkIAmout}
          XX59MarkIAmout={XX59MarkIAmout}
          setXX59MarkIAmout={setXX59MarkIAmout}
          ZX9Amount={ZX9Amount}
          setZX9Amount={setZX9Amount}
          ZX7Amount={ZX7Amount}
          setZX7Amount={setZX7Amount}
          YX1Amount={YX1Amount}
          setYX1Amount={setYX1Amount}
          checkoutRoute={checkoutRoute}
          setCheckoutRoute={setCheckoutRoute}
        />
      ) : null}

      {checkoutRoute ? null : (
        <FooterHero
          activeMenuRoute={activeMenuRoute}
          setActiveMenuRoute={setActiveMenuRoute}
        />
      )}

      {/* <FooterHero
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      /> */}
      <div className={`${popup ? "hidden" : "block"}`}>
        <Footer
          activeMenuRoute={activeMenuRoute}
          setActiveMenuRoute={setActiveMenuRoute}
        />
      </div>
    </div>
  );
};

export default App;
