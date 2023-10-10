import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
// import Close from "../images/shared/tablet/icon-close-menu.svg";

const menuItemsArray = ["Home", "HEADPHONES", "SPEAKERS", "EARPHONES"];

const Navbar = () => {
  return (
    <>
      <div className="flex items-center  justify-between px-6 py-9 bg-black max-w-[1110px] mx-auto">
        <div className="flex items-center md:gap-10 gap-0 w-full lg:w-fit">
          <img
            src={Hamburger}
            alt="Hamburger"
            className="cursor-pointer lg:hidden"
          />
          <img
            src={Logo}
            alt="Logo"
            className="cursor-pointer items-center mx-auto md:mx-0"
          />
        </div>
        <ul className="hidden lg:flex justify-center mx-auto gap-8 items-center text-white">
          {menuItemsArray.map((item, index) => {
            return <li key={index}>={item}</li>;
          })}
        </ul>
        <img src={Cart} alt="Cart" className="cursor-pointer" />
      </div>
      <hr className="w-full h-[1px] text-white bg-white md:w-full mx-auto lg:w-[1110px]" />
    </>
  );
};

export default Navbar;
