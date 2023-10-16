import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { useState } from "react";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenuRoute, setActiveMenuRoute] = useState(0);
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
        <Route
          path="/headphones"
          element={
            <Headphones
              activeMenuRoute={activeMenuRoute}
              setActiveMenuRoute={setActiveMenuRoute}
            />
          }
        ></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
      </Routes>
    </div>
  );
};

export default App;
