import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = () => {
  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
          Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
        </div>
      </div>

      {/* category */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Category1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Face Makeup'}>
            <Image
              src='/C1.webp'
              alt='category1'
              width={250}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Face Makeup</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Face Makeup</h1>
            </div>
          </Link>
        </div>

        {/* Category2 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Eye Shade'}>
            <Image
              src='/C2.webp'
              alt='category2'
              width={300}
              height={200}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Eye Shade</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Eye Shade</h1>
            </div>
          </Link>
        </div>

        {/* Category3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Lipstick'}>
            <Image
              src='/C3.jpg'
              alt='category3'
              width={230}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Lipstick</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Lipstick</h1>
            </div>
          </Link>
        </div>

        {/* Category4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Watch'}>
            <Image
              src='/C4.webp'
              alt='category4'
              width={250}
              height={100}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Watch</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Watch</h1>
            </div>
          </Link>
        </div>

        {/* Category5 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Accessories'}>
            <Image
              src='/C5.webp'
              alt='category5'
              width={250}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Accessories</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Accessories</h1>
            </div>
          </Link>
        </div>

        {/* Category6 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Nail Polish'}>
            <Image
              src='/C6.jpg'
              alt='category6'
              width={250}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Nail Polish</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Nail Polish</h1>
            </div>
          </Link>
        </div>

        {/* Category7 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Jewelry'}>
            <Image
              src='/C7.webp'
              alt='category7'
              width={250}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Jewelry</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>/Jewelry</h1>
            </div>
          </Link>
        </div>

        {/* Category8 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-pink-500/50 h-72 w-72 transition-all duration-300'>
          <Link href={'/Perfume'}>
            <Image
              src='/C8.avif'
              alt='category8'
              width={250}
              height={150}
              className='rounded-xl object-cover w-full h-full'
            />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out'>
              <h1>Perfume</h1>
            </div>

            <div className='block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center text-white w-full p-4 shadow-lg'>
              <h1>Perfume</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default categories;
