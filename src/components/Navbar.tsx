import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
// import Close from "../images/shared/tablet/icon-close-menu.svg";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between px-6 py-9 bg-darkBlack">
      <img src={Hamburger} alt="Hamburger" className="cursor-pointer" />
      <img src={Logo} alt="Logo" className="cursor-pointer" />
      <img src={Cart} alt="Cart" className="cursor-pointer" />
    </div>
  );
};

export default Navbar;
