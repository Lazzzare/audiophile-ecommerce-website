import Logo from "../images/shared/audiophile-logo.svg";
import { menuListArray } from "../components/menuListArray";
import { Link } from "react-router-dom";
import Facebook from "../images/shared/desktop/icon-facebook.svg";
import Instagram from "../images/shared/desktop/icon-instagram.svg";
import Twitter from "../images/shared/desktop/icon-twitter.svg";

interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const Footer = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-black">
      <div className="relative bg-black px-6 md:px-10 lg:max-w-[1110px] pt-[52px] pb-[38px] flex flex-col mx-auto gap-y-10 md:gap-y-8">
        <div className="flex lg:items-center lg:flex-row lg:justify-between md:flex-col md:gap-y-8 md:items-stretch md:mx-0 flex-col gap-y-8">
          <div className="flex mx-auto md:mx-0">
            <img src={Logo} alt="Logo" className="w-[143px] border-t-2" />
          </div>
          {/* Rectangle */}
          <div className="absolute top-[0.5px] left-0 right-0 w-[101px] h-1 bg-orange mx-auto md:mx-0 md:left-[40px]"></div>
          {/* MenuItems */}
          <div className="" onClick={handleLinkClick}>
            <ul className="text-white flex flex-col md:flex-row items-center md:items-stretch gap-4">
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
          </div>
        </div>
        {/* TextParagraph */}
        <div className=" text-white text-[15px] font-normal leading-[26px] opacity-50 gap-y-8 mx-auto text-center lg:mx-0 lg:text-left md:text-left">
          <p className="lg:w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full">
          <h4 className="text-white text-[15px] font-normal leading-[26px] opacity-50 mb-8 md:mb-0 text-center md:text-left">
            Copyright 2021. All Rights Reserved
          </h4>
          {/* Icons */}
          <div className="flex flex-row gap-4 items-center mx-auto md:mx-0 ">
            <img src={Facebook} alt="Facebook" className="cursor-pointer" />
            <img src={Instagram} alt="Instagram" className="cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
