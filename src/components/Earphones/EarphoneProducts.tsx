import YX1 from "../../images/product-yx1-earphones/mobile/image-product.jpg";
import YX1Desktop from "../../images/product-yx1-earphones/desktop/image-product.jpg";
import { Link } from "react-router-dom";

const EarphoneProducts = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 pt-16 lg:pt-[160px] lg:max-w-[1110px] lg:mx-auto lg:px-0">
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-x-[125px] lg:text-start lg:justify-start justify-center text-center items-center">
        <img src={YX1} alt="YX1" className="mb-8 flex lg:hidden" />
        <img
          src={YX1Desktop}
          alt="YX1"
          className="mb-8 hidden lg:flex w-[540px] h-[560px]"
        />
        <div className="flex flex-col gap-y-6">
          <h3 className=" text-orange text-sm tracking-[10px]">NEW PRODUCT</h3>
          <h1
            className=" text-black text-[28px] lg:mx-0 mx-auto font-bold tracking-[1px] w-[327px] md:leading-[44px] md:tracking-[1.4px]
          md:text-[44px]"
          >
            YX1 WIRELESS EARPHONES
          </h1>
          <p className="w-[327px] md:w-[572px] lg:w-[445px] lg:text-start  text-center text-black text-[15px] leading-[25px] font-medium opacity-50">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link to={"/earphones/product1"}>
            <button
              onClick={handleLinkClick}
              className="text-white text-[13px] bg-orange py-[15px] w-[160px] mx-auto flex justify-center
            lg:mx-0 font-bold tracking-[1px] uppercase"
            >
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EarphoneProducts;
