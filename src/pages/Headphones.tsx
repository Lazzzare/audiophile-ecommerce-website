import Footer from "../components/Footer";
import FooterHero from "../components/FooterHero";
import HomeShop from "../components/HomeShop";

import HeadphonesProduct from "../components/HeadphonesProduct";
import HeadphonesTitle from "../components/HeadphonesTitle";

interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const Headphones = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <div className="">
      <HeadphonesTitle />
      <HeadphonesProduct />
      <HomeShop />
      <FooterHero />
      <Footer
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default Headphones;
