import React from "react";
import { TbShoppingBagHeart } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[85vh] custom-img bg-cover bg-center bg-fixed">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center flex items-center justify-center min-h-full pt-28">
          <div className="max-w-md text-center">
            <h1 className="mb-5 underline scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-[#F7418F]">
              Makeup Magic 
              <br />
              <span className="text-white">Awaits</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-[#e364b0]">
              Discover amazing products at unbeatable prices. Enjoy high-quality
              items that fit your budget.
            </p>
            <button className="flex items-center justify-center w-[180px] h-[50px] mx-auto outline outline-offset-1 outline-1 text-white group hover:rounded-3xl duration-300 bg-[#EC9CD3] hover:bg-transparent hover:border-2 hover:border-[#EC9CD3]">
              <TbShoppingBagHeart className="mr-2 text-3xl group-hover:text-red-600 group-hover:animate-bounce" />
              <span className="text-lg">Shop Now!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
