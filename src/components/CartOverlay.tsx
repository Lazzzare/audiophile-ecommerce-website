import XX99MK2 from "../images/cart/image-xx99-mark-two-headphones.jpg";
import XX99MK1 from "../images/cart/image-xx99-mark-one-headphones.jpg";
import { useState } from "react";

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
}: Props) => {
  console.log("Mark2", XX99MarkIIAmout, "Mark1", XX99MarkIAmout);

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
                  $ 2,999
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
                  $ 1,999
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
        <div className="w-full flex flex-row justify-between items-center mt-8">
          <h1 className="text-black opacity-50 font-medium leading-[25px] text-[15px] uppercase">
            Total
          </h1>
          <h1 className="text-black text-lg font-bold uppercase">
            $ {totalCost + XX99MarkIIAmout}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CartOverlay;
