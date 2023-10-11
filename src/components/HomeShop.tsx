import Headphones from "../images/shared/headphones.png";
import Speakers from "../images/shared/speakers.png";
import Earphones from "../images/shared/earphones.png";
import Arrow from "../images/shared/arrow.svg";

const HomeShopItems = [
  {
    id: 1,
    title: "Headphones",
    src: Headphones,
  },
  {
    id: 2,
    title: "Speakers",
    src: Speakers,
  },
  {
    id: 3,
    title: "Earphones",
    src: Earphones,
  },
];

const HomeShop = () => {
  return (
    <div className="px-6 md:px-[39px] py-16 md:py-24 space-y-12 md:space-y-0 flex flex-col md:flex-row items-center md:mx-auto md:justify-between lg:justify-center lg:gap-8">
      {HomeShopItems.map((item) => {
        return (
          <div className="px-[109px] w-[327px] md:w-[233px] lg:w-[350px] md:px-14 pb-[22px] flex flex-col bg-silver rounded-lg items-center">
            <>
              <img src={item.src} alt={item.title} className="-mt-10 mb-8" />
              <div className="text-center items-center flex flex-col gap-4">
                <h2 className="text-black text-[15px] font-bold tracking-[1px]">
                  {item.title}
                </h2>
                <a
                  href=""
                  className="flex items-center gap-3 text-[13px] font-bold tracking-[1px] uppercase"
                >
                  Shop
                  <img src={Arrow} alt="Arrow" />
                </a>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default HomeShop;
