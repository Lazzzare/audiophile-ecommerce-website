import Headphones from "../images/shared/headphones.png";
import Speakers from "../images/shared/speakers.png";
import Earphones from "../images/shared/earphones.png";
import Arrow from "../images/shared/arrow.svg";
import Shadow from "../images/shared/shadow.png";

const HomeShop = () => {
  return (
    <div className="mt-20 md:mt-36 lg:px-[165px] mb-[120px] space-y-[75px] md:space-y-0 flex-col flex md:flex-row items-center">
      {/* Headphones */}
      <div className="w-[327px] h-[165px] md:w-[223px] lg:w-[350px] lg:h-[204px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center">
        <div className="flex-col mt-[-4rem] lg:mt-[-7rem]">
          <img
            src={Headphones}
            alt="Headphones"
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
            Headphones
          </h1>
          <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
            <h2 className="text-black text-[13px] font-bold tracking-[1px] uppercase opacity-50">
              SHOP
            </h2>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      {/* Speakers */}
      <div className="w-[327px] h-[165px] md:w-[223px] lg:w-[350px] lg:h-[204px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center">
        <div className="flex-col mt-[-4rem] lg:mt-[-7rem]">
          <img src={Speakers} alt="Headphones" className="w-20 lg:w-[120px]" />
          <img
            src={Shadow}
            alt="Shadow"
            className="w-20 h-[14px] lg:w-[120px] lg:h-[18px]"
          />
        </div>
        <div className="mt-2 lg:mt-8 space-y-4">
          <h1 className="text-black text-[15px] lg:text-[18px] font-bold tracking-[1px] lg:tracking-[1.3px] uppercase">
            Speakers
          </h1>
          <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
            <h2 className="text-black text-[13px] font-bold tracking-[1px] uppercase opacity-50">
              SHOP
            </h2>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      {/* Earphones */}
      <div className="w-[327px] h-[165px] md:w-[223px] lg:w-[350px] lg:h-[204px] rounded-lg bg-silver mx-auto flex flex-col items-center justify-center">
        <div className="flex-col mt-[-4rem] lg:mt-[-7rem]">
          <img src={Earphones} alt="Headphones" className="w-20 lg:w-[120px]" />
          <img
            src={Shadow}
            alt="Shadow"
            className="w-20 h-[14px] lg:w-[120px] lg:h-[18px]"
          />
        </div>
        <div className="mt-2 lg:mt-8 space-y-4">
          <h1 className="text-black text-[15px] lg:text-[18px] font-bold tracking-[1px] lg:tracking-[1.3px] uppercase">
            Earphones
          </h1>
          <div className="flex gap-3 items-center mx-auto justify-center cursor-pointer">
            <h2 className="text-black text-[13px] font-bold tracking-[1px] uppercase opacity-50">
              SHOP
            </h2>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeShop;
