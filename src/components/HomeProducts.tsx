import FirstSpeaker from "../images/home/mobile/image-speaker-zx9.png";
import SecondSpeaker from "../images/home/mobile/image-speaker-zx7.jpg";
import Earphones from "../images/home/mobile/image-earphones-yx1.jpg";
import TabletSpeaker from "../images/home/tablet/image-speaker-zx7.jpg";
import TabletEarphones from "../images/home/tablet/image-earphones-yx1.jpg";
import DesktopFirstSpeaker from "../images/home/desktop/image-speaker-zx9.png";
import DesktopSecondSpeaker from "../images/home/desktop/image-speaker-zx7.jpg";
import DesktopEarphones from "../images/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

interface Props {
  setActiveMenuRoute: (e: number) => void;
}

const HomeProducts = ({ setActiveMenuRoute }: Props) => {
  const handleLinkClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-6 space-y-6 flex flex-col mx-auto justify-center items-center">
      {/* First Speaker Product */}
      <div className="relative w-[327px] h-[600px] md:w-[689px] md:h-[720px] lg:w-[1110px] lg:h-[560px] flex flex-col lg:flex-row lg:justify-center lg:items-center rounded-lg bg-orange">
        <div className="relative flex mx-auto items-center justify-center mt-14 lg:mt-[110px]">
          <img
            src={FirstSpeaker}
            alt="Speaker"
            className="w-[170px] h-[207px] lg:hidden"
          />
          <img
            src={DesktopFirstSpeaker}
            alt="DesktopFirstSpeaker"
            className="hidden lg:flex w-[383px] h-[450px] z-10"
          />
          <div className="absolute w-[558px] h-[558px] md:w-[944px] md:h-[944px] rounded-full border-2 border-white opacity-20"></div>
          <div className="absolute w-[320px] h-[320px] md:w-[542px] md:h-[542px] rounded-full border-2 border-white opacity-20"></div>
          <div className="absolute w-[279px] h-[279px] md:w-[472px] md:h-[472px] rounded-full border-2 border-white opacity-20"></div>
        </div>
        <div className="mt-8 md:mt-16 space-y-6 flex flex-col items-center text-center lg:items-stretch lg:text-left mx-auto z-10">
          <h1 className="text-4xl md:text-[56px] lg:text-[58px] md:w-[261px] text-white font-bold leading-10 md:leading-[58px] tracking-[1.3px] md:tracking-[2px]">
            ZX9 SPEAKER
          </h1>
          <p className="text-white w-[280px] md:w-[349px] text-[15px] font-medium leading-6 opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to="/speakers/product1"
            onClick={() => {
              handleLinkClick();
              setActiveMenuRoute(2);
            }}
          >
            <button className="text-white w-[160px] py-[15px] bg-black hover:bg-[#4C4C4C] duration-500 tracking-[1px] font-bold text-[13px] uppercase">
              See Product
            </button>
          </Link>
        </div>
      </div>
      {/* Second Speaker Product */}
      <div className="relative w-[327px] h-[320px] md:w-[689px] md:h-[320px] lg:w-[1110px]  rounded-lg">
        <img
          src={SecondSpeaker}
          alt="SecondSpeaker"
          className="rounded-lg md:hidden"
        />
        <img
          src={TabletSpeaker}
          alt="TabletSpeaker"
          className="hidden md:flex lg:hidden rounded-lg"
        />
        <img
          src={DesktopSecondSpeaker}
          alt="DesktopSecondSpeaker"
          className="hidden md:hidden lg:flex rounded-lg"
        />
        <div className="absolute top-[30%] left-6 md:left-[62px] lg:left-[100px] flex flex-col gap-8">
          <h1 className="text-black text-[28px] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </h1>

          <Link
            to="/speakers/product2"
            onClick={() => {
              handleLinkClick();
              setActiveMenuRoute(2);
            }}
          >
            <button className="bg-repeat-space  w-[160px] border-[1px] border-black text-black hover:bg-black hover:text-whiteSmoke duration-500 font-bold py-[15px] text-[13px] tracking-[1px] uppercase">
              See Product
            </button>
          </Link>
        </div>
      </div>
      {/* Earphones */}
      <div className="flex flex-col md:flex-row md:gap-x-4 md:items-center mx-auto space-y-6 md:space-y-0">
        <div className="">
          <img
            src={Earphones}
            alt="Earphones"
            className="flex md:hidden rounded-lg w-[337px] h-[200px]"
          />
          <img
            src={TabletEarphones}
            alt="TabletEarphones"
            className="hidden lg:hidden md:flex w-[339px] h-[320px] rounded-lg"
          />
          <img
            src={DesktopEarphones}
            alt="DesktopEarphones"
            className="hidden md:hidden lg:flex w-[540px] rounded-lg"
          />
        </div>
        <div className="w-[337px] h-[200px] md:w-[339px] md:h-[320px] lg:w-[540px] rounded-lg bg-silver py-[41px] md:py-[101px] pl-[25px] lg:pl-[95px] md:pl-[41px] space-y-8">
          <h1 className="text-black text-[28px] font-bold tracking-[2px] mb-4">
            YX1 EARPHONES
          </h1>
          <Link
            to="/earphones/product1"
            onClick={() => {
              handleLinkClick();
              setActiveMenuRoute(3);
            }}
          >
            <button className="bg-repeat-space border-[1px] border-black w-[160px] text-black hover:bg-black hover:text-whiteSmoke duration-500 font-bold py-[15px] text-[13px] tracking-[1px] uppercase">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
