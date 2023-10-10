import HomeHeroImageMobile from "../images/home/desktop/headphone-hero-image.png";

const Home = () => {
  return (
    <div className="relative md:mx-auto items-center lg:text-left justify-center mx-auto text-center lg:max-w-[1110px]">
      <div className="lg:flex lg:flex-row-reverse lg:mx-auto">
        <div className="bg-black pt-11 w-full mx-auto flex justify-center items-center text-center">
          <img src={HomeHeroImageMobile} alt="" />
        </div>
        <div className="absolute lg:relative lg:text-left lg:mx-auto lg:flex lg:top-0 lg:left-0 top-[100px] lg:translate-x-0 lg:translate-y-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center lg:items-stretch justify-center mx-auto text-center">
          <h3 className="text-sm mb-4 text-white tracking-[10px] opacity-[0.5px] uppercase">
            NEW PRODUCT
          </h3>
          <h1
            className="text-4xl lg:text-[56px] mb-6 text-white font-bold leading-10 lg:leading-[56px] tracking-[1.3px] 
          lg:tracking-[2px] uppercase"
          >
            XX99 Mark II HeadphoneS
          </h1>
          <p className="w-[328px] md:w-[349px] text-[15px] mb-7 text-white font-medium leading-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button
            className="py-[15px] px-[30px] lg:w-[160px] bg-orange font-bold text-[13px] tracking-[1px]
          uppercase text-white"
          >
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
