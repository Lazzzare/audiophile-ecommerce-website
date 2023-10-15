import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Close from "../images/shared/tablet/icon-close-menu.svg";
import Arrow from "../images/shared/arrow.svg";
import Shadow from "../images/shared/shadow.png";
import { Link } from "react-router-dom";
import { menuListArray } from "../components/menuListArray";
import Products from "./Products";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const Navbar = ({
  mobileMenu,
  setMobileMenu,
  activeMenuRoute,
  setActiveMenuRoute,
}: Props) => {
  return (
    <div className="bg-black">
      <div className="lg:max-w-[1440px] flex lg:mx-auto justify-between items-center bg-black px-6 md:px-[39px] lg:px-[165px] py-8 lg:py-9">
        {mobileMenu ? (
          <img
            onClick={() => setMobileMenu(false)}
            src={Close}
            alt="Close"
            className="lg:hidden cursor-pointer z-30"
          />
        ) : (
          <img
            onClick={() => setMobileMenu(true)}
            src={Hamburger}
            alt="Hamburger"
            className="lg:hidden cursor-pointer"
          />
        )}
        {/* MobileMenu */}
        {mobileMenu ? (
          <div className="absolute z-20 top-0 left-0 right-0 bg-black w-full h-screen lg:hidden">
            <div className="w-full h-[730px] bg-white mt-[90px] pt-[80px] md:pt-[200px] md:gap-20 md:px-5 rounded-b-2xl flex flex-col md:flex-row">
              {Products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="w-[327px] h-[165px] mb-[68px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center"
                  >
                    <div className="flex-col mt-[-4rem]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 lg:w-[120px]"
                      />
                      <img
                        src={Shadow}
                        alt="Shadow"
                        className="w-20 h-[14px]"
                      />
                    </div>
                    <div className="mt-2 lg:mt-8 space-y-4">
                      <h1 className="text-black text-[15px]  font-bold tracking-[1px] uppercase">
                        {product.title}
                      </h1>
                      <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
                        <h2 className="text-black text-[13px] font-bold tracking-[1px] uppercase opacity-50 z-10">
                          SHOP
                        </h2>
                        <img src={Arrow} alt="Arrow" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        <img src={Logo} alt="Logo" className="cursor-pointer z-30" />
        <ul className="text-white hidden lg:flex items-center gap-8">
          {menuListArray.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setActiveMenuRoute(index);
                }}
                key={item.id}
                className={`${
                  index === activeMenuRoute ? "text-orange" : ""
                } text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer hover:text-orange transition-all duration-400`}
              >
                <Link to={item.to}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <img src={Cart} alt="Cart" className="cursor-pointer z-30" />
      </div>
      <div className="md:px-[39px] lg:px-[165px] lg:max-w-[1440px] lg:mx-auto">
        <div className="w-full bg-white h-[1px] opacity-20"></div>
      </div>
    </div>
  );
};

export default Navbar;
