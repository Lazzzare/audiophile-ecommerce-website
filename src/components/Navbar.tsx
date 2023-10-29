import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Close from "../images/shared/tablet/icon-close-menu.svg";
import Arrow from "../images/shared/arrow.svg";
import Shadow from "../images/shared/shadow.png";
import { Link } from "react-router-dom";
import { menuListArray } from "../components/menuListArray";
import Products from "./Products";
import { motion } from "framer-motion";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
  productAmount: number;
  addToCart: boolean;
  setAddToCart: (e: boolean) => void;
  XX99MarkIIAmout: number;
  XX99MarkIAmout: number;
  cartOverlay: boolean;
  setCartOverlay: (e: boolean) => void;
  checkoutRoute: boolean;
  setCheckoutRoute: (e: boolean) => void;
}

const Navbar = ({
  mobileMenu,
  setMobileMenu,
  activeMenuRoute,
  setActiveMenuRoute,
  productAmount,
  addToCart,
  cartOverlay,
  setCartOverlay,
  // checkoutRoute,
  setCheckoutRoute,
}: Props) => {
  return (
    <div className="bg-black">
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 3, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:max-w-[1440px] lg:sticky lg:top-0 lg:right-0 lg:left-0 max-w-full z-[100] flex lg:mx-auto justify-between items-center bg-black px-6 md:px-[39px] lg:px-[165px] py-8 lg:py-9">
          {mobileMenu ? (
            <img
              onClick={() => setMobileMenu(false)}
              src={Close}
              alt="Close"
              className="lg:hidden cursor-pointer z-[100]"
            />
          ) : (
            <img
              onClick={() => setMobileMenu(true)}
              src={Hamburger}
              alt="Hamburger"
              className="lg:hidden cursor-pointer z-[100]"
            />
          )}
          {/* MobileMenu */}
          {mobileMenu ? (
            <div className="absolute z-[100] top-0 left-0 right-0 bg-black w-full h-screen lg:hidden">
              <img
                onClick={() => setMobileMenu(false)}
                src={Close}
                alt="Close"
                className="lg:hidden absolute top-9 left-6 cursor-pointer z-[100]"
              />
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
                        <Link
                          to={product.link}
                          onClick={() => {
                            setMobileMenu(false);
                            setActiveMenuRoute(product.id);
                            setCheckoutRoute(false);
                            setCartOverlay(false);
                          }}
                          className="flex flex-col gap-y-4"
                        >
                          <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
                            <h2 className="text-black text-[13px] font-bold tracking-[1px] uppercase opacity-50 z-10">
                              SHOP
                            </h2>
                            <img src={Arrow} alt="Arrow" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          <Link
            to={"/"}
            onClick={() => {
              setActiveMenuRoute(0);
              setCheckoutRoute(false);
              setCartOverlay(false);
              setMobileMenu(false);
            }}
            className="z-[100]"
          >
            <img src={Logo} alt="Logo" className="cursor-pointer z-50" />
          </Link>
          <ul className="text-white z-[100] hidden lg:flex items-center gap-8">
            {menuListArray.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setActiveMenuRoute(index);
                    setCheckoutRoute(false);
                    setCartOverlay(false);
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
          <div>
            <div
              className="relative z-[100] cursor-pointer"
              onClick={() => {
                setCartOverlay(!cartOverlay);
                setMobileMenu(false);
              }}
            >
              <img
                src={Cart}
                alt="Cart"
                className="cursor-pointer z-30 relative"
              />
              {productAmount > 0 && addToCart === true ? (
                <div className="absolute -top-4 left-1 bg-orange text-whiteSmoke w-6 h-4 rounded-full flex justify-center font-bold items-center text-sm text-center">
                  <p>{productAmount}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="md:px-[39px] lg:px-[165px] lg:max-w-[1440px] lg:mx-auto">
          <div className="w-full bg-white h-[1px] opacity-20"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
