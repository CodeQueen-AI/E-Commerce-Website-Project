import Image from 'next/image';
import { BsCartCheck } from "react-icons/bs";
import { TbShoppingBagCheck } from "react-icons/tb";

const Gift = () => {
  return (
    <section className="text-gray-600 body-font overflow-x-hidden">
      <div className="container px-3 py-12 mx-auto max-w-full">
        <div className="text-center mb-5">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
            Shine Bright Collection
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Product 1 */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
            <div className="border-2 border-pink-300 p-4 hover:border-[#F35588] transition-all duration-300 ease-in-out">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/Card1.webp" alt="img1" width={1203} height={503} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-2xl font-bold title-font text-[#F7418F] mt-5 text-center sm:text-left">
               Beautiful Kits
              </h2>
              <div className="text-center font-bold text-3xl mt-3 mb-3">
                $2999
              </div>
              <div className="flex mt-3 justify-center">
                <button className="hidden sm:flex text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <TbShoppingBagCheck className="group-hover:animate-bounce" />
                  <span>Shop Now</span>
                </button>
                <button className="hidden sm:flex ml-4 text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <BsCartCheck className="group-hover:animate-bounce" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
            <div className="border-2 border-pink-300 rounded-lg p-4 hover:border-[#F35588] transition-all duration-300 ease-in-out">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/Card2.jpg" alt="img2" width={1204} height={504} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-2xl font-bold title-font text-[#F7418F] mt-5 text-center sm:text-left">
                Glow Up Essentials
              </h2>
              <div className="text-center font-bold text-3xl mt-3 mb-3">
                $1355
              </div>
              <div className="flex mt-3 justify-center">
                <button className="hidden sm:flex text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <TbShoppingBagCheck className="group-hover:animate-bounce" />
                  <span>Shop Now</span>
                </button>
                <button className="hidden sm:flex ml-4 text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <BsCartCheck className="group-hover:animate-bounce" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
            <div className="border-2 border-pink-300 rounded-lg p-4 hover:border-[#F35588] transition-all duration-300 ease-in-out">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image src="/Card3.jpg" alt="img3" width={1205} height={505} className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-2xl font-bold title-font text-[#F7418F] mt-5 text-center sm:text-left">
                Radiant Beauty Kit
              </h2>
              <div className="text-center font-bold text-3xl mt-3 mb-3">
                $44.44
              </div>
              <div className="flex mt-3 justify-center">
                <button className="hidden sm:flex text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <TbShoppingBagCheck className="group-hover:animate-bounce" />
                  <span>Shop Now</span>
                </button>
                <button className="hidden sm:flex ml-4 text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                  <BsCartCheck className="group-hover:animate-bounce" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gift;
