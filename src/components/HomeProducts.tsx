import FirstSpeaker from "../images/home/mobile/image-speaker-zx9.png";
import SecondSpeaker from "../images/home/mobile/image-speaker-zx7.jpg";
import Earphones from "../images/home/mobile/image-earphones-yx1.jpg";

const HomeProducts = () => {
  return (
    <div className="p-6 space-y-6 flex flex-col mx-auto justify-center items-center">
      {/* First Speaker Product */}
      <div className="w-[327px] h-[600px] rounded-lg bg-orange">
        <div className="relative flex mx-auto items-center justify-center mt-14">
          <img
            src={FirstSpeaker}
            alt="Speaker"
            className="w-[170px] h-[207px]"
          />
          {/* Circles */}
          <div className="absolute w-[558px] h-[558px] rounded-full border-2 border-white opacity-20"></div>
          <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-white opacity-20"></div>
          <div className="absolute w-[279px] h-[279px] rounded-full border-2 border-white opacity-20"></div>
        </div>
        <div className="mt-8 space-y-6 flex flex-col items-center text-center mx-auto">
          <h1 className="text-4xl text-white font-bold leading-10 tracking-[1.3px]">
            ZX9 SPEAKER
          </h1>
          <p className="text-white w-[280px] text-[15px] font-medium leading-6 opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="text-white px-[30px] py-[15px] bg-black w-[160px]">
            See Product
          </button>
        </div>
      </div>
      {/* Second Speaker Product */}
      <div className="relative w-[327px] h-[320px] rounded-lg">
        {/* <div className="rounded-lg"> */}
        <img src={SecondSpeaker} alt="SecondSpeaker" className="rounded-lg" />
        {/* </div> */}
        <div className="absolute top-[30%] left-6 flex flex-col gap-8">
          <h1 className="text-black text-[28px] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </h1>
          <button className="bg-repeat-space border-[1px] border-black w-[160px] text-black font-bold py-[15px] px-[30px] text-[13px] tracking-[1px]">
            See Product
          </button>
        </div>
      </div>
      {/* Earphones */}
      <div className="flex flex-col space-y-6">
        {/* Image */}
        <div>
          <img src={Earphones} alt="Earphones" className="rounded-lg" />
        </div>
        {/* Text */}
        <div className="w-[337px] h-[200px] rounded-lg bg-silver">
          <h1>YX1 EARPHONES</h1>
          <button>See Product</button>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
