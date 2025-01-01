import React from 'react';
import { FiGift } from 'react-icons/fi';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from 'react-icons/md';

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
            Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Beauty */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#FA58B6] rounded-full group-hover:animate-bounce transition-all duration-300">
                <FiGift className="text-[#FA58B6] text-4xl" />
              </div>
              <h2 className="text-[#F7418F] text-lg font-bold tracking-tight lg:text-xl mb-3">
                Authentic Beauty Assurance
              </h2>
              <p className="text-[#FB2576] text-lg font-light tracking-tight transition-colors">
                We deliver high-quality, genuine beauty products that are sourced from trusted and reputable brands. Our team ensures that each item is meet the highest standards, giving you peace of mind!
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#FA58B6] rounded-full group-hover:animate-bounce transition-all duration-300">
                <TbTruckDelivery className="text-[#FA58B6] text-4xl" />
              </div>
              <h2 className="text-[#F7418F] text-lg font-bold tracking-tight lg:text-xl mb-3">
                Delivery on Time
              </h2>
              <p className="text-[#FB2576] text-lg font-light tracking-tight transition-colors">
                Fast and reliable delivery, ensuring your orders arrive on time with real-time tracking. Whether you are getting ready for an event or just need your product  got you covered with prompt!
              </p>
            </div>
          </div>

          {/* Exchange */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#FA58B6] rounded-full group-hover:animate-bounce transition-all duration-300">
                <MdOutlineAssignmentReturn className="text-[#FA58B6] text-4xl" />
              </div>
              <h2 className="text-[#F7418F] text-lg font-bold tracking-tight lg:text-xl mb-3">
                Easy Exchange
              </h2>
              <p className="text-[#FB2576] text-lg font-light tracking-tight transition-colors">
                Simple and hassle-free exchange policy to ensure customer satisfaction. If you are not completely happy with your purchase, our easy return and exchange process makes it straightforward to get the perfect product for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
