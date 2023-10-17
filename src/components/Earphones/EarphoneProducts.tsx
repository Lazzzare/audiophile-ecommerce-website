import YX1 from "../../images/product-yx1-earphones/mobile/image-product.jpg";
import YX1Desktop from "../../images/product-yx1-earphones/desktop/image-product.jpg";

const EarphoneProducts = () => {
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
            ZX9 SPEAKER
          </h1>
          <p className="w-[327px] md:w-[572px] lg:w-[445px] lg:text-start  text-center text-black text-[15px] leading-[25px] font-medium opacity-50">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <button
            className="text-white text-[13px] bg-orange py-[15px] w-[160px] mx-auto flex justify-center
          lg:mx-0 font-bold tracking-[1px] uppercase"
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarphoneProducts;
