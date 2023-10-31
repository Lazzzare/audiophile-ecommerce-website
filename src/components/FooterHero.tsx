import ProfileImageMobile from "../images/shared/mobile/image-best-gear.jpg";
import ProfileImageTablet from "../images/shared/tablet/image-best-gear.jpg";
import ProfileImageDesktop from "../images/shared/desktop/image-best-gear.jpg";
import HomeShop from "./HomeShop";

interface Props {
  activeMenuRoute: number | null;
  setActiveMenuRoute: (e: number) => void;
}

const FooterHero = ({ activeMenuRoute, setActiveMenuRoute }: Props) => {
  return (
    <>
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
      <div className="my-[104px] px-6 md:px-10 flex flex-col lg:flex-row-reverse lg:max-w-[1110px] lg:mx-auto lg:gap-x-20 lg:items-center">
        <div>
          <img
            src={ProfileImageMobile}
            alt="ProfileImageMobile"
            className="rounded-lg md:hidden"
          />
          <img
            src={ProfileImageTablet}
            alt="ProfileImageTablet"
            className="rounded-lg hidden lg:hidden md:flex"
          />
          <img
            src={ProfileImageDesktop}
            alt="ProfileImageDesktop"
            className="rounded-lg hidden md:hidden lg:flex"
          />
        </div>
        <div className="mt-8 md:mt-10 md:w-[573px] md:mx-auto flex flex-col text-center lg:text-left gap-y-8">
          <h1 className="text-black text-[28px]  md:text-[40px] md:leading-[44px] font-bold tracking-[1px] md:tracking-[1.5px] uppercase">
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </h1>
          <p className="text-black text-[15px] mx-auto font-medium leading-[25px] opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterHero;
