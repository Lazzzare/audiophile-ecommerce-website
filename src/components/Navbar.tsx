import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Close from "../images/shared/tablet/icon-close-menu.svg";
import { Link } from "react-router-dom";
import { menuListArray } from "../components/menuListArray";
// import { useState } from "react";
// import HomeShop from "./HomeShop";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: (e: boolean) => void;
}

const Navbar = ({ mobileMenu, setMobileMenu }: Props) => {
  return (
    <div className={`bg-black`}>
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
          <div className="absolute opacity-40  top-0 left-0 right-0 bg-black w-full h-screen">
            <div className="w-full h-[730px] "></div>
          </div>
        ) : null}
        <img src={Logo} alt="Logo" className="cursor-pointer z-30" />
        <ul className="text-white hidden lg:flex items-center gap-8">
          {menuListArray.map((item) => {
            return (
              <li
                key={item.id}
                className="text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer hover:text-orange transition-all duration-400"
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
