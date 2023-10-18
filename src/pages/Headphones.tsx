import { Route, Routes } from "react-router-dom";
import HeadphonesTitle from "../components/Headphones/HeadphonesTitle";
import HeadphonesProduct from "../components/Headphones/HeadphonesProduct";
import HeadphoneFirstProduct from "../components/Headphones/HeadphoneFirstProduct";
import HeadphonesSecondProduct from "../components/Headphones/HeadphonesSecondProduct";
import HeadphonesLastProduct from "../components/Headphones/HeadphonesLastProduct";

const Headphones = () => {
  return (
    <>
      <HeadphonesTitle />
      <HeadphonesProduct />
      {/* <HomeShop /> */}
      <Routes>
        <Route path="product1" element={<HeadphoneFirstProduct />} />
        <Route path="product2" element={<HeadphonesSecondProduct />} />
        <Route path="product3" element={<HeadphonesLastProduct />} />
      </Routes>
    </>
  );
};

export default Headphones;
