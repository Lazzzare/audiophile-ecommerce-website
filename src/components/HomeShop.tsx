import products from "./Products";
import Arrow from "../images/shared/arrow.svg";
import Shadow from "../images/shared/shadow.png";
import { Link } from "react-router-dom";

interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const HomeShop = ({ setActiveMenuRoute }: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-20 md:mt-36 lg:mx-auto lg:w-[1110px] mb-[120px] space-y-[75px] md:space-y-0 flex-col flex md:flex-row items-center">
      {products.map((product, index) => {
        return (
          <Link
            key={index}
            onClick={() => {
              setActiveMenuRoute(product.id);
            }}
            to={product.link}
            className="w-[327px] h-[165px] md:w-[223px] lg:w-[350px] lg:h-[204px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center cursor-pointer"
          >
            <div
              onClick={handleLinkClick}
              className="w-[327px] h-[165px] md:w-[223px] lg:w-[350px] lg:h-[204px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="flex-col mt-[-4rem] lg:mt-[-7rem]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 lg:w-[120px]"
                />
                <img
                  src={Shadow}
                  alt="Shadow"
                  className="w-20 h-[14px] lg:w-[120px] lg:h-[18px]"
                />
              </div>
              <div className="mt-2 lg:mt-8 space-y-4">
                <h1 className="text-black text-[15px] lg:text-[18px] font-bold tracking-[1px] lg:tracking-[1.3px] uppercase">
                  {product.title}
                </h1>
                <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
                  <h2 className="text-black hover:text-orange hover:opacity-100 duration-400 text-[13px] font-bold tracking-[1px] uppercase opacity-50 z-10">
                    SHOP
                  </h2>
                  <img src={Arrow} alt="Arrow" />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeShop;
