import XX99MK2 from "../../images/cart/image-xx99-mark-two-headphones.jpg";
import XX99MK1 from "../../images/cart/image-xx99-mark-one-headphones.jpg";
import XX59MK1 from "../../images/cart/image-xx59-headphones.jpg";
import ZX9 from "../../images/cart/image-zx9-speaker.jpg";
import ZX7 from "../../images/cart/image-zx7-speaker.jpg";
import YX1 from "../../images/cart/image-yx1-earphones.jpg";

interface Props {
  productAmount: number;
  XX99MarkIIAmout: number;
  totalCost: number;
  XX99MarkIAmout: number;
  XX59MarkIAmout: number;
  ZX9Amount: number;
  ZX7Amount: number;
  YX1Amount: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  shippingCost: number;
  vatCost: number;
}

const Summary = ({
  XX99MarkIIAmout,
  totalCost,
  XX99MarkIAmout,
  XX59MarkIAmout,
  ZX9Amount,
  ZX7Amount,
  YX1Amount,
  grandTotal,
  shippingCost,
  vatCost,
}: Props) => {
  return (
    <div className="mt-8 mb-[10px] lg:mt-[85px] bg-white p-6">
      <h1 className="text-black text-lg font-bold tracking-[1.3px] uppercase">
        summary
      </h1>
      <>
        {/* XX99MARKII */}
        {XX99MarkIIAmout > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={XX99MK2}
                alt="XX99MK2"
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">XX99 MK II</h2>
                <h3 className="text-[14px] opacity-50">$ 2,999</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{XX99MarkIIAmout}
            </span>
          </div>
        ) : null}
        {/* XX99MARKI */}
        {XX99MarkIAmout > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={XX99MK1}
                alt="XX99MK1"
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">XX99 MK I</h2>
                <h3 className="text-[14px] opacity-50">$ 1,750</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{XX99MarkIAmout}
            </span>
          </div>
        ) : null}
        {/* XX59MK1 */}
        {XX59MarkIAmout > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={XX59MK1}
                alt="XX59MK1"
                className="w-16 h-16 rounded-lg"
              />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">XX59 MK1</h2>
                <h3 className="text-[14px] opacity-50">$ 899</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{XX59MarkIAmout}
            </span>
          </div>
        ) : null}
        {/* ZX9 */}
        {ZX9Amount > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img src={ZX9} alt="ZX9" className="w-16 h-16 rounded-lg" />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">ZX9</h2>
                <h3 className="text-[14px] opacity-50">$ 4,500</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{ZX9Amount}
            </span>
          </div>
        ) : null}
        {/* ZX7 */}
        {ZX7Amount > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img src={ZX7} alt="ZX7" className="w-16 h-16 rounded-lg" />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">ZX7</h2>
                <h3 className="text-[14px] opacity-50">$ 3,500</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{ZX7Amount}
            </span>
          </div>
        ) : null}
        {/* YX1Amount */}
        {YX1Amount > 0 ? (
          <div className="flex flex-row justify-between items-center mt-8 lg:w-[350px]">
            <div className="flex flex-row gap-4 items-center">
              <img src={YX1} alt="YX1" className="w-16 h-16 rounded-lg" />
              <div className="flex flex-col text-black font-bold leading-[25px]">
                <h2 className="text-[15px]">YX1</h2>
                <h3 className="text-[14px] opacity-50">$ 599</h3>
              </div>
            </div>
            <span className="text-[15px] text-black font-bold leading-[25px] opacity-50">
              x{YX1Amount}
            </span>
          </div>
        ) : null}
        {/* Total costs */}
        <div className="w-full mt-8 gap-2 flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-[15px] font-medium opacity-50 leading-[25px]">
              TOTAL
            </h1>
            <span className="text-black text-lg font-bold uppercase">
              $ {totalCost}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-[15px] font-medium opacity-50 leading-[25px]">
              SHIPPING
            </h1>
            <span className="text-black text-lg font-bold uppercase">
              $ {shippingCost}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-[15px] font-medium opacity-50 leading-[25px]">
              VAT (INCLUDED)
            </h1>
            <span className="text-black text-lg font-bold uppercase">
              $ {vatCost}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-black text-[15px] font-medium opacity-50 leading-[25px]">
              GRAND TOTAL
            </h1>
            <span className="text-orange text-lg font-bold uppercase">
              $ {grandTotal}
            </span>
          </div>
        </div>
      </>
    </div>
  );
};

export default Summary;
