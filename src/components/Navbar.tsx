import Hamburger from "../images/shared/tablet/icon-hamburger.svg";
import Logo from "../images/shared/audiophile-logo.svg";
import Cart from "../images/shared/icon-cart.svg";
import { Link } from "react-router-dom";

const menuListArray = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "Headphones",
    to: "/headphones",
  },
  {
    id: 3,
    title: "Speakers",
    to: "/speakers",
  },
  {
    id: 4,
    title: "Earphones",
    to: "/earphones",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-black px-6 md:px-[39px] lg:px-[165px] py-8 lg:py-9">
        <img
          src={Hamburger}
          alt="Hamburger"
          className="lg:hidden cursor-pointer"
        />
        <img src={Logo} alt="Logo" className="cursor-pointer" />
        <ul className="text-white hidden lg:flex items-center gap-8">
          {menuListArray.map((item) => {
            return (
              <li
                key={item.id}
                className="text-[13px] font-bold leading-6 tracking-[2px] uppercase cursor-pointer"
              >
                <Link to={item.to}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <img src={Cart} alt="Cart" className="cursor-pointer" />
      </div>
      <div className="md:px-[39px] lg:px-[165px]">
        <div className="w-full bg-orange h-[10px]"></div>
      </div>
    </>
  );
};

export default Navbar;
