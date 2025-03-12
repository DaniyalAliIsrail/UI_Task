import React, { useState } from "react";
import Buyer from "../components/Buyer";
import Seller from "../components/Seller";

const Home = () => {
  const [showUI, sethshowUI] = useState(false);
  const handleBuyerAndSeller = () => {
    sethshowUI((prev) => !prev);
  };
  return (
    <div className="max-w-[90%] lg:max-w-[90%] mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-black">
        <div>
          <h6 className="text-sm sm:text-base md:text-[1.123rem] font-semibold uppercase text-black">
            WORKING WITH
          </h6>
          <div>
            <span className="text-2xl sm:text-4xl md:text-[5.3rem] font-bold">
              {showUI ? "Sellers" : "Buyers"}
            </span>
            <span className="p-1">/</span>
            <span
              onClick={handleBuyerAndSeller}
              className="text-black-500 text-base sm:text-lg md:text-[1.375rem]"
            >
              {showUI ? "Buyers" : "Sellers"}
            </span>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 w-full sm:w-auto">
          <button className="relative inline-flex items-center px-6 py-2 bg-[#263A76] text-white font-medium rounded-r-md group hover:bg-blue-700 transition-colors">
            <span className="mr-1 ">Read more</span>
            <div className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-7 h-7  clip-octagon rotate-45  bg-white"></div>
            <div className="absolute left-[-0.9px] top-[29.5px] -translate-y-1/2 w-5 h-[22px] bg-teal-900   clip-octagon  bg-white "></div>
            <div className="absolute left-[111px] top-[3.2px] -translate-y-1/2 w-6 h-[7px] bg-teal-900  transition-all clip-octagon rotate-36 bg-white "></div>
            <div className="z-100 absolute left-0 bottom-0 w-3 h-3 bg-teal-100"></div>
          </button>
        </div>
      </div>

      <p className="w-full mt-6 md:mt-10 text-black text-sm sm:text-base md:text-[18px] font-normal leading-[150%] tracking-[0px]">
        Horizon Property Lawyers works with buyers to ensure their purchase is
        made efficiently and that their interests are reflected and protected in
        the agreement of purchase and sale. When you work with Horizon Property
        Lawyers, we include the following services for residential property
        buyers:
      </p>

      {showUI ? <Seller /> : <Buyer />}
    </div>
  );
};

export default Home;
