import { Link } from "react-router-dom";
import { useState } from "react";
import Summary from "./Summary";
import { Formik, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface Props {
  productAmount: number;
  XX99MarkIIAmout: number;
  totalCost: number;
  XX99MarkIAmout: number;
  XX59MarkIAmout: number;
  ZX9Amount: number;
  ZX7Amount: number;
  YX1Amount: number;
  activeMenuRoute: number;
  setActiveMenuRoute: (e: number) => void;
}

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  // Add more fields as needed
}

const Checkout = ({
  productAmount,
  XX99MarkIIAmout,
  totalCost,
  XX99MarkIAmout,
  XX59MarkIAmout,
  ZX9Amount,
  ZX7Amount,
  YX1Amount,

  setActiveMenuRoute,
}: Props) => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    // Add more fields as needed
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    zip: Yup.string().required("ZIP Code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
  });

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col lg:flex-row lg:gap-8 md:px-10 lg:w-[930px] lg:mb-12 lg:mx-auto">
            <div className="flex flex-col">
              <Link to={"/"} onClick={() => setActiveMenuRoute(0)}>
                <p
                  className="cursor-pointer mt-4 md:mt-12 md:ml-[39px] ml-6 text-black hover:text-orange text-[15px] font-medium 
          leading-[25px] opacity-50"
                >
                  Go Back
                </p>
              </Link>
              <div className="flex flex-col p-6 md:p-7 mt-3 bg-white md:rounded-lg">
                <div className="flex flex-col gap-8">
                  <h1 className="text-black text-[28px] md:text-[32px] md:leading-[36px] lg:mt-6 font-bold tracking-[1px] md:tracking-[1.1px] uppercase">
                    CHECKOUT
                  </h1>
                  <p className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
                    Billing details
                  </p>
                </div>
                {/* Form */}
                <div className="mt-4 flex flex-col space-y-6">
                  {/* Name */}
                  <div className="flex flex-col gap-4 md:flex-row w-full justify-between">
                    <div className="flex flex-col gap-[9px] relative">
                      <label
                        className={`${
                          errors.name && touched.name
                            ? "text-[#CD2C2C]"
                            : "text-black"
                        } text-[13px] font-bold tracking-[-0.2px]`}
                      >
                        {errors.name && touched.name ? (
                          <p>Name is required</p>
                        ) : (
                          <p>Name</p>
                        )}
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Lazare Chkharitshvili"
                        className={`${
                          errors.name && touched.name
                            ? "focus:border-[#ff0000]"
                            : "focus:border-orange"
                        } rounded-lg border-[#CFCFCF] border-2 bg-white py-[17px] pl-6 md:w-[309px] outline-none`}
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-[9px] relative">
                      <label
                        className={`${
                          errors.email && touched.email
                            ? "text-[#CD2C2C]"
                            : "text-black"
                        } text-[13px] font-bold tracking-[-0.2px]`}
                      >
                        {errors.email && touched.email ? (
                          <p>Email is required</p>
                        ) : (
                          <p>Email</p>
                        )}
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="chxartishvililazare@gmail.com"
                        className={`${
                          errors.email && touched.email
                            ? "focus:border-[#ff0000]"
                            : "focus:border-orange"
                        } rounded-lg border-[#CFCFCF] border-2 bg-white py-[17px] pl-6 md:w-[309px] outline-none`}
                      />
                    </div>
                  </div>
                  {/* Phone Numbr */}
                  <div className="flex flex-col gap-[9px] relative">
                    <label
                      className={`${
                        errors.phoneNumber && touched.phoneNumber
                          ? "text-[#CD2C2C]"
                          : "text-black"
                      }  text-[13px] font-bold tracking-[-0.2px]`}
                    >
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <p>Phone Number is required</p>
                      ) : (
                        <p>Phone Number</p>
                      )}
                    </label>
                    <Field
                      type="number"
                      name="phoneNumber"
                      placeholder="+995 123 45 67 89 10"
                      className={`${
                        errors.phoneNumber && touched.phoneNumber
                          ? "focus:border-[#ff0000]"
                          : "focus:border-orange"
                      } rounded-lg border-[#CFCFCF] border-2
                         bg-white py-[17px] pl-6 md:w-[309px] outline-none `}
                    />
                  </div>
                  {/* Shipping Info */}
                  <h1 className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
                    shipping info
                  </h1>
                  {/* Your Address */}
                  <div className="flex flex-col gap-[9px]">
                    <label
                      className={`${
                        errors.address && touched.address
                          ? "text-[#CD2C2C]"
                          : "text-black"
                      }  text-[13px] font-bold tracking-[-0.2px]`}
                    >
                      {errors.address && touched.address ? (
                        <p>Address is required</p>
                      ) : (
                        <p>Address</p>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Platform 9¾"
                      className={`${
                        errors.address && touched.address
                          ? "focus:border-[#ff0000]"
                          : "focus:border-orange"
                      } rounded-lg border-[#CFCFCF] border-2
                         bg-white py-[17px] pl-6 md:w-[309px] outline-none `}
                    />
                  </div>
                  {/* ZIP CODE */}
                  <div className="flex flex-col gap-4 md:flex-row w-full justify-between">
                    <div className="flex flex-col gap-[9px]">
                      <label
                        className={`${
                          errors.zip && touched.zip
                            ? "text-[#CD2C2C]"
                            : "text-black"
                        }  text-[13px] font-bold tracking-[-0.2px]`}
                      >
                        {errors.zip && touched.zip ? (
                          <p>ZIP Code is required</p>
                        ) : (
                          <p>ZIP Code </p>
                        )}
                      </label>
                      <Field
                        type="text"
                        name="zip"
                        placeholder="1120"
                        className={`${
                          errors.zip && touched.zip
                            ? "focus:border-[#ff0000]"
                            : "focus:border-orange"
                        } rounded-lg border-[#CFCFCF] border-2
                         bg-white py-[17px] pl-6 md:w-[309px] outline-none `}
                      />
                    </div>
                    {/* City */}
                    <div className="flex flex-col gap-[9px]">
                      <label
                        className={`${
                          errors.city && touched.city
                            ? "text-[#CD2C2C]"
                            : "text-black"
                        }  text-[13px] font-bold tracking-[-0.2px]`}
                      >
                        {errors.city && touched.city ? (
                          <p>City is required</p>
                        ) : (
                          <p>City</p>
                        )}
                      </label>
                      <Field
                        type="text"
                        name="city"
                        placeholder="Kanudosi"
                        className={`${
                          errors.city && touched.city
                            ? "focus:border-[#ff0000]"
                            : "focus:border-orange"
                        } rounded-lg border-[#CFCFCF] border-2
                         bg-white py-[17px] pl-6 md:w-[309px] outline-none `}
                      />
                    </div>
                  </div>
                  {/* Country */}
                  <div className="flex flex-col gap-[9px]">
                    <label
                      className={`${
                        errors.country && touched.country
                          ? "text-[#CD2C2C]"
                          : "text-black"
                      }  text-[13px] font-bold tracking-[-0.2px]`}
                    >
                      {errors.country && touched.country ? (
                        <p>Country is required</p>
                      ) : (
                        <p>Country</p>
                      )}
                    </label>
                    <Field
                      type="text"
                      name="country"
                      placeholder="Makondo"
                      className={`${
                        errors.country && touched.country
                          ? "focus:border-[#ff0000]"
                          : "focus:border-orange"
                      } rounded-lg border-[#CFCFCF] border-2
                         bg-white py-[17px] pl-6 md:w-[309px] outline-none `}
                    />
                  </div>
                  {/* payment details */}
                  <h1 className="text-orange text-[13px] font-bold leading-[25px] tracking-[0.9px] uppercase">
                    payment details
                  </h1>
                  <h4 className="text-black text-[13px] font-bold tracking-[-0.2px]">
                    Payment Method
                  </h4>
                  <div className="flex flex-col gap-4 md:items-end">
                    {/* First Radio */}
                    <div className="flex flex-row gap-4 rounded-lg border border-[#CFCFCF] py-[17px] pl-6 w-full md:w-[309px]">
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
                    <div className="flex flex-row gap-4 rounded-lg border border-[#CFCFCF] py-[17px] pl-6 w-full md:w-[309px]">
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
                  <div className="flex flex-col gap-4 md:flex-row w-full md:justify-between">
                    <div className="flex flex-col gap-[9px] md:w-[309px]">
                      <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        placeholder="238521993"
                        className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
                      />
                    </div>
                    <div className="flex flex-col gap-[9px] md:w-[309px]">
                      <label className="text-black text-[13px] font-bold tracking-[-0.2px]">
                        e-Money PIN
                      </label>
                      <input
                        type="text"
                        placeholder="6891"
                        className="rounded-lg border border-[#CFCFCF] bg-white py-[17px] pl-6"
                      />
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
            <div className="flex flex-col mb-[97px]">
              <Summary
                productAmount={productAmount}
                XX99MarkIIAmout={XX99MarkIIAmout}
                totalCost={totalCost}
                XX99MarkIAmout={XX99MarkIAmout}
                XX59MarkIAmout={XX59MarkIAmout}
                ZX9Amount={ZX9Amount}
                ZX7Amount={ZX7Amount}
                YX1Amount={YX1Amount}
              />
              <button
                type="submit"
                className="mt-8 lg:mt-0 text-white text-[13px] mx-auto lg:mx-0 w-[284px] font-bold tracking-[1px] uppercase 
          lg:w-full bg-orange hover:bg-lightOrange duration-500 py-[15px]"
              >
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Checkout;
