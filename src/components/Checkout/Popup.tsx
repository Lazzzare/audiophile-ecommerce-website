import CompleteLogo from "../../images/shared/success.svg";
import XX99MK2 from "../../images/cart/image-xx99-mark-two-headphones.jpg";

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
}

const Popup = ({
  popup,
  productAmount,
  XX99MarkIIAmout,
  totalCost,
  XX99MarkIAmout,
  XX59MarkIAmout,
  ZX9Amount,
  ZX7Amount,
  YX1Amount,
}: Props) => {
  return (
    <>
      {popup ? (
        <>
          <div className=""></div>
          <div className="z-[400] opacity-100 bg-black overflow-hidden px-6 absolute top-0 left-0 right-0 flex items-center justify-center h-screen">
            <div className="p-8 flex flex-col bg-white rounded-lg z-[800]">
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
              <div className="flex flex-col">
                {XX99MarkIIAmout > 0 ? (
                  <div className="flex flex-row">
                    <img src={XX99MK2} alt="XX99MK2" />
                    <div>
                      <h1>XX99 MK II</h1>
                      <h2>$ 2,999</h2>
                    </div>
                    <span>{XX99MarkIIAmout}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Popup;
