import { Link } from "react-router-dom";
import ProductMobile from "../../images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import ProductTablet from "../../images/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import ProductDesktop from "../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import ManImageMobile from "../../images/shared/man-headerphone.png";
import SecondImageMobile from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import LastImageMobile from "../../images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import ManImageTablet from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import SecondImageTablet from "../../images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import LastImageTablet from "../../images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import XX99Mark1Mobile from "../../images/shared/mobile/image-xx99-mark-one-headphones.jpg";
import XX59Mobile from "../../images/shared/mobile/image-xx59-headphones.jpg";
import ZX9SpeakerMobile from "../../images/shared/mobile/image-zx9-speaker.jpg";
import XX99Mark1Tablet from "../../images/shared/tablet/image-xx99-mark-one-headphones.jpg";
import XX59Tablet from "../../images/shared/tablet/image-xx59-headphones.jpg";
import ZX9SpeakerTablet from "../../images/shared/tablet/image-zx9-speaker.jpg";
import XX99Mark1Desktop from "../../images/shared/desktop/image-xx99-mark-one-headphones.jpg";
import XX59Desktop from "../../images/shared/desktop/image-xx59-headphones.jpg";
import ZX9SpeakerDesktop from "../../images/shared/desktop/image-zx9-speaker.jpg";

interface Props {
  setActiveMenuRoute: (e: number) => void;
  productAmount: number;
  setProductAmount: (e: number) => void;
  // addToCart: boolean;
  setAddToCart: (e: boolean) => void;
  XX99MarkIIAmout: number;
  setXX99MarkIIAmout: (e: number) => void;
}

const HeadphoneFirstProduct = ({
  setActiveMenuRoute,
  setAddToCart,
  XX99MarkIIAmout,
  setXX99MarkIIAmout,
}: Props) => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 lg:px-0 pt-4 lg:pt-[80px] md:pt-10 lg:max-w-[1110px] lg:mx-auto">
      <Link to={"/headphones"} onClick={handleLinkClick}>
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
              XX99 Mark II Headphones
            </h1>
            <p className="text-black text-[15px] md:w-[339px] lg:w-[445px] font-medium leading-[25px] opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
          </div>
          {/* Price and add to cart */}
          <div className="flex flex-col gap-8 mt-6">
            <h4 className="text-lg font-bold tracking-[1.3px] text-black">
              $ 2,999
            </h4>
            <div className="flex flex-row gap-4">
              <div className="flex flex-row justify-between p-[15px] w-[120px] bg-silver text-black text-[13px] font-bold tracking-[1px]">
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX99MarkIIAmout(
                      XX99MarkIIAmout === 0
                        ? (XX99MarkIIAmout = 0)
                        : XX99MarkIIAmout - 1
                    );
                  }}
                >
                  -
                </span>
                <h6>{XX99MarkIIAmout}</h6>
                <span
                  className="cursor-pointer opacity-50"
                  onClick={() => {
                    setXX99MarkIIAmout(XX99MarkIIAmout + 1);
                  }}
                >
                  +
                </span>
              </div>
              <div onClick={handleLinkClick}>
                <button
                  onClick={() => {
                    if (XX99MarkIIAmout > 0) {
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
      </div>
      {/* Features and in the box */}
      <div className="flex flex-col gap-y-[88px] lg:flex-row lg:w-full mt-[88px] lg:gap-[125px]">
        {/* Features */}
        <div className="">
          <h1 className="text-black text-2xl md:text-[32px] font-bold leading-9 tracking-[0.8px] md:tracking-[1.1px] mb-6">
            FEATURES
          </h1>
          <p className="text-black text-[15px] lg:w-[635px] font-medium leading-[25px] opacity-50">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
          </p>
        </div>
        {/* In the box */}
        <div className="flex flex-col md:flex-row lg:flex-col lg:space-y-2 lg:justify-normal md:justify-between">
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
                3.5mm 10m Audio Cable
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <span className="text-orange text-[15px] font-bold leading-[25px]">
                1x
              </span>
              <p className="text-black text-[15px] font-medium leading-[25px] opacity-50">
                Travel Bag
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
              <div onClick={handleLinkClick}>
                <button
                  onClick={handleLinkClick}
                  className="text-white text-[13px] font-bold tracking-[1px] uppercase bg-orange w-[160px] py-[15px]"
                >
                  See Product
                </button>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <img
              src={XX59Mobile}
              alt="XX99Mark1"
              className="flex md:hidden lg:hidden"
            />
            <img
              src={XX59Tablet}
              alt="XX99Mark1"
              className="hidden md:flex lg:hidden w-[223px] h-[318px]"
            />
            <img
              src={XX59Desktop}
              alt="XX99Mark1"
              className="hidden md:hidden lg:flex"
            />
            <h1 className="text-black text-2xl font-bold tracking-[1.7px] uppercase">
              XX59
            </h1>
            <Link to={"/headphones/product3"}>
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
              onClick={() => {
                setActiveMenuRoute(2);
              }}
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

export default HeadphoneFirstProduct;
