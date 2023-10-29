import XX99Mark2Mobile from "../../images/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import XX99Mark1Mobile from "../../images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import XX59Mobile from "../../images/product-xx59-headphones/mobile/image-product.jpg";
import XX99Mark2Tablet from "../../images/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import XX99MARK1Tablet from "../../images/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import XX59Tablet from "../../images/product-xx59-headphones/tablet/image-product.jpg";
import { Link } from "react-router-dom";

const products = [
  {
    Mobileimg: XX99Mark2Mobile,
    Tabletimg: XX99Mark2Tablet,
    title: "XX99 Mark II Headphones",
    content:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    link: "/headphones/product1",
  },
  {
    Mobileimg: XX99Mark1Mobile,
    Tabletimg: XX99MARK1Tablet,
    title: "XX99 Mark I Headphones",
    FlexRowReverse: true,
    content:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    link: "/headphones/product2",
  },
  {
    Mobileimg: XX59Mobile,
    Tabletimg: XX59Tablet,
    title: "XX59 Headphones",
    content:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    link: "/headphones/product3",
  },
];

const HeadphonesProduct = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="px-6 md:px-10 pt-16 lg:pt-[160px] lg:max-w-[1110px] lg:mx-auto lg:px-0">
      <div className="gap-[120px] lg:gap-[160px] mb-[120px] lg:mb-[200px] flex flex-col justify-center items-center text-center">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col lg:gap-x-[125px] lg:text-start ${
                product.FlexRowReverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <img
                src={product.Mobileimg}
                alt="XX99"
                className="rounded-lg flex mx-auto max-w-[385px]"
              />
              <div className="flex flex-col gap-6 mt-8">
                <h3 className="text-orange text-sm tracking-[10px]">
                  NEW PRODUCT
                </h3>
                <h1 className="text-black text-[28px] lg:text-[40px] lg:tracking-[1.4px] lg:w-[445px] font-bold tracking-[1px] uppercase">
                  {product.title}
                </h1>
                <p className="text-black md:max-w-[572px] lg:max-w-[445px] text-[15px] font-medium leading-[25px] opacity-50 ">
                  {product.content}
                </p>
                <Link to={product.link}>
                  <button
                    onClick={handleLinkClick}
                    className="py-[15px] w-[160px] bg-orange text-white text-[13px] tracking-[1px]
                  flex mx-auto text-center justify-center uppercase lg:mx-0 hover:bg-lightOrange duration-500"
                  >
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeadphonesProduct;
