import { Link } from "react-router-dom";
import ProductMobile from "../../images/product-xx59-headphones/mobile/image-product.jpg";
import ProductTablet from "../../images/product-xx59-headphones/tablet/image-product.jpg";
import ProductDesktop from "../../images/product-xx59-headphones/desktop/image-product.jpg";
import ManImageMobile from "../../images/product-xx59-headphones/mobile/image-gallery-1.jpg";
import SecondImageMobile from "../../images/product-xx59-headphones/mobile/image-gallery-2.jpg";
import LastImageMobile from "../../images/product-xx59-headphones/mobile/image-gallery-3.jpg";
import ManImageTablet from "../../images/product-xx59-headphones/tablet/image-gallery-1.jpg";
import SecondImageTablet from "../../images/product-xx59-headphones/tablet/image-gallery-2.jpg";
import LastImageTablet from "../../images/product-xx59-headphones/tablet/image-gallery-3.jpg";
import XX99Mark2Mobile from "../../images/shared/mobile/image-xx99-mark-two-headphones.jpg";
import XX99Mark1Mobile from "../../images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import ZX9SpeakerMobile from "../../images/shared/mobile/image-zx9-speaker.jpg";
import XX99Mark2Tablet from "../../images/shared/tablet/image-xx99-mark-two-headphones.jpg";
import XX99Mark1Tablet from "../../images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import ZX9SpeakerTablet from "../../images/shared/tablet/image-zx9-speaker.jpg";
import XX99Mark2Desktop from "../../images/shared/desktop/image-xx99-mark-two-headphones.jpg";
import XX99Mark1Desktop from "../../images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import ZX9SpeakerDesktop from "../../images/shared/desktop/image-zx9-speaker.jpg";

interface Props {
  setActiveMenuRoute: (e: number) => void;
  productAmount: number;
  XX59MarkIAmout: number;
  setXX59MarkIAmout: (e: number) => void;
  setAddToCart: (e: boolean) => void;
}

const HeadphonesLastProduct = ({
  setActiveMenuRoute,
  // productAmount,
  XX59MarkIAmout,
  setXX59MarkIAmout,
  setAddToCart,
}: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 lg:px-0 pt-4 lg:pt-[80px] md:pt-10 lg:max-w-[1110px] lg:mx-auto">
      <Link to={"/headphones"}>
        <h5 className="text-black text-[15px] font-medium leading-[25px] opacity-50 cursor-pointer">
          Go Back
        </h5>
      </Link>
      <div className="flex flex-col mt-6 md:flex-row w-full md:gap-[70px] lg:gap-[125px] md:justify-center md:items-center">
        <div className="mb-8">
          <img
            src={ProductMobile}
            alt="ProductImage"
            className="flex md:hidden lg:hidden"
          />
          <img
            src={ProductTablet}
            alt="ProductImage"
            className="hidden md:flex lg:hidden"
          />
          <img
            src={ProductDesktop}
            alt="ProductImage"
            className="hidden md:hidden lg:flex"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-6">
            <h2 className="text-orange text-sm lg:text-[14px] tracking-[10px]">
              NEW PRODUCT
            </h2>
            <h1 className="text-black text-[28px] font-bold tracking-[1px] uppercase md:leading-8">
              XX59 Headphones
            </h1>
            <p className="text-black text-[15px] md:w-[339px] lg:w-[445px] font-medium leading-[25px] opacity-50">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
          </div>
          {/* Price and add to cart */}
          <div className="flex flex-col gap-8 mt-6">
            <h4 className="text-lg font-bold tracking-[1.3px] text-black">
              $ 899
            </h4>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row justify-between p-[15px] w-[120px] bg-silver text-black text-[13px] font-bold tracking-[1px]">
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX59MarkIAmout(
                      XX59MarkIAmout === 0
                        ? (XX59MarkIAmout = 0)
                        : XX59MarkIAmout - 1
                    );
                  }}
                >
                  -
                </span>
                <h6>{XX59MarkIAmout}</h6>
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX59MarkIAmout(XX59MarkIAmout + 1);
                  }}
                >
                  +
                </span>
              </div>
              <button
                onClick={() => {
                  if (XX59MarkIAmout > 0) {
                    setAddToCart(true);
                  }
                }}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px] hover:bg-lightOrange duration-500"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Features and in the box */}
      <div className="flex flex-col gap-y-[88px] lg:flex-row lg:w-full mt-[88px] lg:gap-[125px]">
        {/* Features */}
        <div className="">
          <h1 className="text-black text-2xl md:text-[32px] font-bold leading-9 tracking-[0.8px] md:tracking-[1.1px] mb-6">
            FEATURES
          </h1>
          <p className="text-black text-[15px] lg:w-[635px] font-medium leading-[25px] opacity-50">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos. More than a simple
            pair of headphones, this headset features a pair of built-in
            microphones for clear, hands-free calling when paired with a
            compatible smartphone. Controlling music and calls is also intuitive
            thanks to easy-access touch buttons on the earcups. Regardless of
            how you use the XX59 headphones, you can do so all day thanks to an
            impressive 30-hour battery life that can be rapidly recharged via
            USB-C.
          </p>
        </div>
        {/* In the box */}
        <div className="flex flex-col md:flex-row lg:flex-col lg:justify-normal md:justify-between">
          <h1 className="text-black text-2xl md:text-[36px] font-bold leading-9 tracking-[0.8px] md:tracking-[1.1px] mb-6 uppercase">
            in the box
          </h1>
          <div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                Headphone Unit
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                2x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                Replacement Earcups
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                User Manual
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                3.5mm 5m Audio Cable
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Three Image box */}
      <div className="mt-[88px] lg:mt-[120px] flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-6">
          <img
            src={ManImageMobile}
            alt="ManImage"
            className="h-[175px] w-full object-cover rounded-xl flex md:hidden lg:hidden"
          />
          <img
            src={ManImageTablet}
            alt="ManImage"
            className="rounded-xl w-full hidden md:flex lg:flex"
          />
          <img
            src={SecondImageMobile}
            alt="SecondImage"
            className="rounded-xl w-full flex md:hidden lg:hidden"
          />
          <img
            src={SecondImageTablet}
            alt="SecondImage"
            className="rounded-xl w-full hidden md:flex lg:flex"
          />
        </div>
        <img
          src={LastImageMobile}
          alt="SecondImage"
          className="rounded-xl w-full flex md:hidden lg:hidden"
        />
        <img
          src={LastImageTablet}
          alt="SecondImage"
          className="rounded-xl w-full max-w-[600px] object-cover hidden md:flex lg:flex"
        />
      </div>
      {/* you may also like */}
      <div className="my-[120px] mb-[100px] md:mb-[100px] lg:mb-[300px]">
        <h1 className="text-black text-2xl font-bold leading-9 uppercase text-center mb-10">
          you may also like
        </h1>
        {/* products */}
        <div className="flex flex-col md:flex-row md:mx-auto md:justify-center gap-[56px]">
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={XX99Mark2Mobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden"
            />
            <img
              src={XX99Mark2Tablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={XX99Mark2Desktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              XX99 MARK II
            </h1>
            <Link to={"/headphones/product1"}>
              <button
                onClick={handleLinkClick}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px]"
              >
                See Product
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={XX99Mark1Mobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden"
            />
            <img
              src={XX99Mark1Tablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={XX99Mark1Desktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              XX99 MARK I
            </h1>
            <Link to={"/headphones/product2"}>
              <button
                onClick={handleLinkClick}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px]"
              >
                See Product
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={ZX9SpeakerMobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden "
            />
            <img
              src={ZX9SpeakerTablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={ZX9SpeakerDesktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              ZX9 Speaker
            </h1>
            <Link
              to={"/speakers/product1"}
              onClick={() => setActiveMenuRoute(2)}
            >
              <button
                onClick={handleLinkClick}
                className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px]"
              >
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphonesLastProduct;
