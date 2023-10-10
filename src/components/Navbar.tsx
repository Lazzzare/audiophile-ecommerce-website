import Logo from "../../images/shared/audiophile-logo.svg";
import Cart from "../../images/shared/icon-cart.svg";
import Hamburger from "../../images/shared/tablet/icon-hamburger.svg";
// import Close from "../../images/shared/tablet/icon-close-menu.svg";

const Navbar = () => {
  return (
    <div className="px-6 py-9 bg-darkBlack">
      <img src={Hamburger} alt="Hamburger" />
      <img src={Logo} alt="Logo" />
      <img src={Cart} alt="Cart" />
    </div>
  );
};

export default Navbar;
