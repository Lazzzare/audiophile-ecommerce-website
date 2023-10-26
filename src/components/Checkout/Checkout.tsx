import { Link } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-full">
      <Link to={"/"}>
        <p className="cursor-pointer mt-4 ml-6 text-black text-[15px] font-medium leading-[25px] opacity-50">
          Go Back
        </p>
      </Link>
      <div className="flex flex-col p-6 mt-3 bg-white">
        <div className="flex flex-col gap-8">
          <h1 className="text-black text-[28px] font-bold tracking-[1px] uppercase">
            CHECKOUT
          </h1>
          <p className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
            Billing details
          </p>
        </div>
        {/* Form */}
        <form className="mt-4 flex flex-col space-y-6">
          {/* Name */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              Name
            </label>
            <input
              type="text"
              placeholder="Lazare Chkharitshvili"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* Eamil */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              Email Address
            </label>
            <input
              type="text"
              placeholder="chxartishvililazare@gmail.com"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* Phone Numbr */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+995 555-12-34-56"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* Shipping Info */}
          <h1 className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
            shipping info
          </h1>
          {/* Your Address */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              Your Address
            </label>
            <input
              type="text"
              placeholder="Platform 9¾"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* ZIP CODE */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              ZIP Code
            </label>
            <input
              type="text"
              placeholder="1121"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* City */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              City
            </label>
            <input
              type="text"
              placeholder="Kanudosi"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* Country */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              Country
            </label>
            <input
              type="text"
              placeholder="Makondo"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          {/* payment details */}
          <h1 className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
            payment details
          </h1>
          <h4 className="text-black text-[13px] font-bold tracking-[-0.2px]">
            Payment Method
          </h4>
          <div className="flex flex-col gap-4">
            {/* First Radio */}
            <div className="flex flex-row gap-4 rounded-lg border border-[#CFCFCF] py-[17px] pl-6 w-full">
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="rounded-full"
              />
              <h2>e-Money</h2>
            </div>
            {/* Second Radio */}
            <div className="flex flex-row gap-4 rounded-lg border border-[#CFCFCF] py-[17px] pl-6 w-full">
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="rounded-full"
              />
              <h2>Cash on Delivery</h2>
            </div>
          </div>
          {/* Last info */}
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              e-Money Number
            </label>
            <input
              type="text"
              placeholder="238521993"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
              e-Money PIN
            </label>
            <input
              type="text"
              placeholder="6891"
              className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
