import ZX9SpeakerMobile from "../../images/product-zx9-speaker/mobile/image-product.jpg";
import ZX7SpeakerMobile from "../../images/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import ZX9SpeakerTablet from "../../images/product-zx9-speaker/tablet/image-product.jpg";
import ZX7SpeakerTablet from "../../images/product-zx7-speaker/desktop/image-product.jpg";
import ZX9SpeakerDesktop from "../../images/product-zx9-speaker/desktop/image-product.jpg";
import { Link } from "react-router-dom";

const SpeakersProduct = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 flex flex-col gap-y-[120px] mb-[120px] lg:mb-[155px] pt-16 lg:pt-[160px] lg:max-w-[1110px] mx-auto lg:px-0">
      {/* First Second */}
      <div className="text-center lg:text-start items-center flex flex-col lg:flex-row mx-auto lg:gap-x-[120px]">
        <img
          src={ZX9SpeakerMobile}
          alt="ZX9Speaker"
          className="mb-[52px] flex lg:hidden md:hidden"
        />
        <img
          src={ZX9SpeakerTablet}
          alt="ZX9SpeakerTablet"
          className="hidden md:flex lg:hidden"
        />
        <img
          src={ZX9SpeakerDesktop}
          alt="ZX9SpeakerDesktop"
          className="hidden lg:flex w-[540px] h-[560px]"
        />
        <div className="flex flex-col gap-y-6">
          <h3 className=" text-orange text-sm tracking-[10px]">NEW PRODUCT</h3>
          <h1
            className=" text-black text-[28px] lg:mx-0 mx-auto font-bold tracking-[1px] w-[327px] md:leading-[44px] md:tracking-[1.4px]
          md:text-[44px]"
          >
            ZX9 SPEAKER
          </h1>
          <p className="w-[327px] md:w-[572px] lg:w-[445px] text-black text-[15px] leading-[25px] font-medium opacity-50">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link to={"/speakers/product1"}>
            <button
              className="text-white text-[13px] bg-orange py-[15px] w-[160px] mx-auto flex justify-center
            lg:mx-0 font-bold tracking-[1px] uppercase"
            >
              See Product
            </button>
          </Link>
        </div>
      </div>
      {/* Second Product */}
      <div className="text-center lg:text-start items-center flex flex-col lg:flex-row-reverse lg:gap-x-[120px]">
        <img
          src={ZX7SpeakerMobile}
          alt="ZX7Speaker"
          className="mb-[52px] flex lg:hidden"
        />
        <img
          src={ZX7SpeakerTablet}
          alt="ZX7SpeakerTablet"
          className="mb-[52px] hidden lg:flex w-[540px] h-[560px]"
        />
        <div className="flex flex-col gap-y-6">
          <h1
            className=" text-black text-[28px] mx-auto lg:mx-0 font-bold tracking-[1px] w-[327px] md:leading-[44px] md:tracking-[1.4px]
          md:text-[44px]"
          >
            ZX7 SPEAKER
          </h1>
          <p className="w-[327px] md:w-[572px] lg:w-[445px] text-black text-[15px] leading-[25px] font-medium opacity-50">
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Link to={"/speakers/product2"}>
            <button
              onClick={handleLinkClick}
              className="text-white text-[13px] bg-orange py-[15px] w-[160px] mx-auto flex  
            justify-center lg:mx-0 font-bold tracking-[1px] uppercase"
            >
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakersProduct;
