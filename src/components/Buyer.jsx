import React from "react";
import { motion } from "framer-motion";

const Buyer = () => {
  const data = [
    {
      id: 1,
      title: "Title Search and Encumbrances",
      image: "/Title Search and Encumbrances.svg",
      step: "01",
    },
    {
      id: 2,
      title: "Document Preparation",
      image: "/Document Preparation.svg",
      step: "02",
    },
    {
      id: 3,
      title: "Closing Coordination",
      image: "/Closing Coordination.svg",
      step: "03",
    },
    {
      id: 4,
      title: "Property Tax Adjustments",
      image: "/Property Tax Adjustments.svg",
      step: "04",
    },
    {
      id: 5,
      title: "Post-Closing Reporting",
      image: "/Post-Closing Reporting.svg",
      step: "05",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-8">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }} 
            exit={{ rotateY: -90, opacity: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            className="bg-blue-50 p-6 flex flex-col justify-around w-[228px] h-[335px]  rounded-lg"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-24 h-24 relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div className="rounded-full border border-gray-400 w-12 h-12 flex items-center justify-center text-gray-600">
                {item.step}
              </div>
            </div>
            <h3 className="font-[700] text-[26px] text-black mt-auto w-[213px] h-[62px] leading-[120%]">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Buyer;

