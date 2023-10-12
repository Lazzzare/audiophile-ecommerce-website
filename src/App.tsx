import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar />
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
