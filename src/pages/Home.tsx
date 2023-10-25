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
      <HomeHero setActiveMenuRoute={setActiveMenuRoute} />
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
      <HomeProducts setActiveMenuRoute={setActiveMenuRoute} />
    </div>
  );
};

export default Home;
