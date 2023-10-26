import XX99MK2 from "../images/cart/image-xx99-mark-two-headphones.jpg";
import XX99MK1 from "../images/cart/image-xx99-mark-one-headphones.jpg";
import XX59MK1 from "../images/cart/image-xx59-headphones.jpg";
import ZX9 from "../images/cart/image-zx9-speaker.jpg";
import ZX7 from "../images/cart/image-zx7-speaker.jpg";
import YX1 from "../images/cart/image-yx1-earphones.jpg";
import { Link } from "react-router-dom";
// import { useState } from "react";

interface Props {
  cartOverlay: boolean;
  setCartOverlay: (e: boolean) => void;
  productAmount: number;
  setProductAmount: (e: number) => void;
  XX99MarkIIAmout: number;
  addToCart: boolean;
  setXX99MarkIIAmout: (e: number) => void;
  totalCost: number;
  XX99MarkIAmout: number;
  setXX99MarkIAmout: (e: number) => void;
  XX59MarkIAmout: number;
  setXX59MarkIAmout: (e: number) => void;
  ZX9Amount: number;
  setZX9Amount: (e: number) => void;
  ZX7Amount: number;
  setZX7Amount: (e: number) => void;
  YX1Amount: number;
  setYX1Amount: (e: number) => void;
  checkoutRoute: boolean;
  setCheckoutRoute: (e: boolean) => void;
}

const CartOverlay = ({
  productAmount,
  XX99MarkIIAmout,
  addToCart,
  setXX99MarkIIAmout,
  setProductAmount,
  totalCost,
  XX99MarkIAmout,
  setXX99MarkIAmout,
  XX59MarkIAmout,
  setXX59MarkIAmout,
  ZX9Amount,
  setZX9Amount,
  ZX7Amount,
  setZX7Amount,
  YX1Amount,
  setYX1Amount,
  // checkoutRoute,
  setCheckoutRoute,
  setCartOverlay,
}: Props) => {
  const XX99MarkIIPrice = 2999;
  const XX99MarkIPrice = 1750;
  const XX59MarkIPrice = 899;
  const ZX9Price = 4500;
  const ZX7Price = 3500;
  const YX1Price = 599;

  totalCost =
    XX99MarkIIAmout * XX99MarkIIPrice +
    XX99MarkIAmout * XX99MarkIPrice +
    XX59MarkIAmout * XX59MarkIPrice +
    ZX9Amount * ZX9Price +
    ZX7Amount * ZX7Price +
    YX1Amount * YX1Price;

  return (
    <>
      <div className="w-full h-full absolute top-0 left-0 z-10 bg-black opacity-40"></div>
      <div className="absolute w-[90%] mt-6 rounded-lg left-1/2 lg:w-[377px] lg:translate-x-[170px] md:right-0 md:w-[377px] md:translate-x-0  transform -translate-x-1/2 bg-white top-[89px] text-black z-50 opacity-100 p-6">
        <div className="flex flex-row justify-between">
          {addToCart ? (
            <h1 className="text-black text-lg font-bold tracking-[1.3px] uppercase">
              Cart ({productAmount})
            </h1>
          ) : (
            <h1 className="text-black text-lg font-bold tracking-[1.3px] uppercase">
              Cart (0)
            </h1>
          )}
          <h3
            onClick={() => {
              setXX99MarkIIAmout(0);
              setProductAmount(0);
              setXX59MarkIAmout(0);
              setXX99MarkIAmout(0);
              setYX1Amount(0);
              setZX7Amount(0);
              setZX9Amount(0);
            }}
            className="underline cursor-pointer text-black text-[15px] font-medium leading-[25px] opacity-50"
          >
            Remove all
          </h3>
        </div>
        {/* Products */}
        {XX99MarkIIAmout > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img
                src={XX99MK2}
                alt="XX99MK2"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  XX99 MK II
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {XX99MarkIIPrice}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
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
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {XX99MarkIIAmout}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setXX99MarkIIAmout(XX99MarkIIAmout + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        {/* Product2 */}
        {XX99MarkIAmout > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img
                src={XX99MK1}
                alt="XX99MK1"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  XX99 MK I
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {XX99MarkIPrice}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setXX99MarkIAmout(
                    XX99MarkIAmout === 0
                      ? (XX99MarkIAmout = 0)
                      : XX99MarkIAmout - 1
                  );
                }}
              >
                -
              </span>
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {XX99MarkIAmout}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setXX99MarkIAmout(XX99MarkIAmout + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        {/* Product3 */}
        {XX59MarkIAmout > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img
                src={XX59MK1}
                alt="XX59MK1"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  XX59 MK I
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {XX59MarkIPrice}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
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
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {XX59MarkIAmout}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setXX59MarkIAmout(XX59MarkIAmout + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        {/* Product4 */}
        {ZX9Amount > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img src={ZX9} alt="ZX9" className="w-16 h-16 rounded-lg" />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  ZX9 Speaker
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {ZX9Price}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setZX9Amount(
                    ZX9Amount === 0 ? (ZX9Amount = 0) : ZX9Amount - 1
                  );
                }}
              >
                -
              </span>
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {ZX9Amount}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setZX9Amount(ZX9Amount + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        {/* Product5 */}
        {ZX7Amount > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img src={ZX7} alt="ZX7" className="w-16 h-16 rounded-lg" />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  ZX7 Speaker
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {ZX7Price}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setZX7Amount(
                    ZX7Amount === 0 ? (ZX7Amount = 0) : ZX7Amount - 1
                  );
                }}
              >
                -
              </span>
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {ZX7Amount}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setZX7Amount(ZX7Amount + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        {/* Product7 */}
        {YX1Amount > 0 && addToCart === true ? (
          <div className="flex flex-row mt-8 w-full justify-between">
            <div className="flex flex-row gap-4">
              <img src={YX1} alt="YX1" className="w-16 h-16 rounded-lg" />
              <div>
                <h1 className="text-black text-[15px] font-bold leading-[25px]">
                  YX1 EARPHONES
                </h1>
                <p className="text-sm text-black font-bold leading-[25px] opacity-50">
                  $ {YX1Price}
                </p>
              </div>
            </div>
            <div className="w-[96px] h-[32px] items-center px-2 mt-[14px] flex flex-row justify-between bg-silver">
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setYX1Amount(
                    YX1Amount === 0 ? (YX1Amount = 0) : YX1Amount - 1
                  );
                }}
              >
                -
              </span>
              <h4 className="text-black text-[13px] tracking-[1px] font-bold">
                {YX1Amount}
              </h4>
              <span
                className="text-[13px] cursor-pointer tracking-[1px] font-bold text-black opacity-50"
                onClick={() => {
                  setYX1Amount(YX1Amount + 1);
                }}
              >
                +
              </span>
            </div>
          </div>
        ) : null}
        <div className="w-full flex flex-row justify-between items-center mt-8">
          <h1 className="text-black opacity-50 font-medium leading-[25px] text-[15px] uppercase">
            Total
          </h1>
          {addToCart ? (
            <h1 className="text-black text-lg font-bold uppercase">
              {totalCost} $
            </h1>
          ) : (
            "0 $"
          )}
        </div>
        <div className="mt-6">
          <Link to={productAmount > 0 ? "/checkout" : "#"}>
            <button
              onClick={() => {
                if (productAmount > 0) {
                  setCartOverlay(false);
                }
                setCheckoutRoute(true);
              }}
              className={`text-white bg-orange hover-bg-lightOrange duration-500 py-[15px] w-full text-[13px] font-bold tracking-[1px] uppercase ${
                productAmount > 0 ? "cursor-pointer" : ""
              }`}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartOverlay;
