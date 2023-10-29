import CompleteLogo from "../../images/shared/success.svg";
import XX99MK2 from "../../images/cart/image-xx99-mark-two-headphones.jpg";
import XX99MK1 from "../../images/cart/image-xx99-mark-one-headphones.jpg";
import XX59 from "../../images/cart/image-xx59-headphones.jpg";
import ZX9 from "../../images/cart/image-zx9-speaker.jpg";
import ZX7 from "../../images/cart/image-zx7-speaker.jpg";
import YX1 from "../../images/cart/image-yx1-earphones.jpg";
import { Link } from "react-router-dom";

interface Props {
  popup: boolean;
  productAmount: number;
  XX99MarkIIAmout: number;
  totalCost: number;
  XX99MarkIAmout: number;
  XX59MarkIAmout: number;
  ZX9Amount: number;
  ZX7Amount: number;
  YX1Amount: number;
  shipping: number;
  grandTotal: number;
}

const Popup = ({
  popup,
  XX99MarkIIAmout,
  XX99MarkIAmout,
  XX59MarkIAmout,
  ZX9Amount,
  ZX7Amount,
  YX1Amount,
  grandTotal,
}: Props) => {
  const handleBackToHomeClick = () => {
    // Refresh the page
    window.location.reload();
    // Navigate to the home route
  };
  return (
    <>
      {popup ? (
        <>
          <div className="overflow-y-hidden w-full h-[250vh] lg:h-[140vh] absolute top-0 left-0 right-0 bg-black opacity-40 z-[900]"></div>
          <div className="w-full h-screen overflow-hidden flex flex-col px-6 absolute top-0 left-0 right-0 items-center z-[1000] justify-center">
            <div className="p-8 lg:p-12 flex flex-col z-[800] opacity-100 bg-white rounded-lg">
              <img
                src={CompleteLogo}
                alt="CompleteLogo"
                className="w-16 h-16 mb-6"
              />
              <h1 className="text-black mb-4 w-[263px] text-2xl font-bold leading-[28px] tracking-[0.9px] uppercase">
                THANK YOU FOR YOUR ORDER
              </h1>
              <p className="text-black opacity-50 text-[15px] font-medium leading-[25px]">
                You will receive an email confirmation shortly.
              </p>
              <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-lg my-6 space-y-4">
                {XX99MarkIIAmout > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={XX99MK2}
                        alt="XX99MK2"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          XX99 MK II
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 2,999
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{XX99MarkIIAmout}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
                {/* Product2 */}
                {XX99MarkIAmout > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={XX99MK1}
                        alt="XX99MK1"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          XX99 MK I
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 1,750
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{XX99MarkIAmout}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
                {/* Product3 */}
                {XX59MarkIAmout > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={XX59}
                        alt="XX59"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          XX59 MK1
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 899
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{XX59MarkIAmout}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
                {/* Product4 */}
                {ZX9Amount > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={ZX9}
                        alt="ZX9"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          ZX9 Speaker
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 4,500
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{ZX9Amount}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
                {/* Product5 */}
                {ZX7Amount > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={ZX7}
                        alt="ZX7"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          ZX7 Speaker
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 3,500
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{ZX7Amount}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
                {/* Product 6 */}
                {YX1Amount > 0 ? (
                  <>
                    <div className="flex flex-row justify-between items-center">
                      <img
                        src={YX1}
                        alt="YX1"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h1 className="text-black text-[15px] font-bold leading-[25px]">
                          YX1 Wireless
                        </h1>
                        <h2 className="text-black opacity-50 font-bold text-[14px] leading-[25px]">
                          $ 599
                        </h2>
                      </div>
                      <span className="text-black font-bold leading-[25px] opacity-50 text-[15px]">
                        x{YX1Amount}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-black text-black opacity-[0.08] mt-3"></div>
                  </>
                ) : null}
              </div>
              <div className="w-full bg-black -mt-[26px] text-white py-6 px-4 rounded-b-lg">
                <h1 className="text-[15px] opacity-50 font-medium leading-[25px] uppercase">
                  Grand Total
                </h1>
                <h2 className="text-lg font-bold uppercase">$ {grandTotal}</h2>
              </div>
              <div onClick={handleBackToHomeClick}>
                <Link to={"/"}>
                  <button
                    className="w-full mt-6 text-white text-[13px] font-bold tracking-[1px] uppercase flex justify-center items-center py-[15px] bg-orange hover:bg-lightOrange
                  duration-500 "
                  >
                    BACK TO HOME
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Popup;
