import Footer from "../components/Footer";
import FooterHero from "../components/FooterHero";
import HomeHero from "../components/HomeHero";
import HomeProducts from "../components/HomeProducts";
import HomeShop from "../components/HomeShop";

interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const Home = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <div>
      <HomeHero />
      <HomeShop />
      <HomeProducts />
      <FooterHero />
      <Footer
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default Home;
