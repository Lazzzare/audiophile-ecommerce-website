import Footer from "../components/Footer";
import FooterHero from "../components/FooterHero";
import HomeHero from "../components/HomeHero";
import HomeProducts from "../components/HomeProducts";
import HomeShop from "../components/HomeShop";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeShop />
      <HomeProducts />
      <FooterHero />
      <Footer />
    </div>
  );
};

export default Home;
