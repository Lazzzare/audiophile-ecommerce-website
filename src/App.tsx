import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { useState } from "react";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div
      className={`w-full h-screen overflow-x-hidden ${
        mobileMenu ? "overflow-hidden" : "overflow-scroll"
      }`}
    >
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/headphones" element={<Headphones />}></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
      </Routes>
    </div>
  );
};

export default App;
