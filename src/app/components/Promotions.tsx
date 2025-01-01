import React from 'react';

const Promotions = () => {
  return (
    <div className='mb-[50px] mt-[50px] px-8 lg:px-20'>
      <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
            Flash Deals
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
          </div>
        </div>
      {/* Promotions */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center'>
        
        {/* Promotion 1 */}
        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center promo-1 opacity-80" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-pink-600">50% Off!</h1>
                <h3 className="mb-5 text-pink-900 font-bold">
                  Enjoy a massive 50% discount on all summer collections. Limited time offer!
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$99.99</p>
          </div>
        </div>

        {/* Promotion 2 */}
        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center promo-2 opacity-80" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-pink-600">30% off!</h1>
                <h3 className="mb-5 text-pink-900 font-bold">
                  Purchase any item and get another one absolutely free! Dont miss out.
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$49.99</p>
          </div>
        </div>

        {/* Promotion 3 */}
        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center promo-3 opacity-70" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-pink-600">Flash Sale: 70% Off!</h1>
                <h3 className="mb-5 text-pink-900 font-bold">
                  Hurry up! Get a whopping 70% off on selected items. Offer valid while stocks last.
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$29.99</p>
          </div>
        </div>

        {/* Promotion 4 */}
        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center promo-4 opacity-70" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-pink-600">40% off!</h1>
                <h3 className="mb-5 text-pink-900 font-bold">
                  Members enjoy an extra 20% off on all purchases. Sign up now to avail the offer.
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$79.99</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Promotions;




