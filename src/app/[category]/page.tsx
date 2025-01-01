'use client';
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../context/cartcontext';

const products = {
  Eyeshade: [
    { id: 1, name: 'Beauty Naked Highlighter', price: 3000, image: '/E1.webp' },
    { id: 2, name: 'Emelie Kit', price: 2500, image: '/E2.webp' },
    { id: 3, name: 'Huda Nude Kit', price: 1500, image: '/E3.webp' },
  ],
  Lipstick: [
    { id: 1, name: 'ColurPop Lippie', price: 1100, image: '/L1.avif' },
    { id: 2, name: 'Huda Beauty Lipstick', price: 2000, image: '/L2.jpg' },
    { id: 3, name: 'Tilbury Lipstick', price: 1200, image: '/L3.avif' },
  ],
  Watch: [
    { id: 1, name: 'Fossil Jacqueline', price: 1350, image: '/W1.webp' },
    { id: 2, name: 'Seiko Presage', price: 1670, image: '/W2.webp' },
    { id: 3, name: 'Casio Baby-G', price: 2590, image: '/W3.webp' },
  ],
  Nailpolish: [
    { id: 1, name: 'Revlon ColorStay', price: 1500, image: '/N1.avif' },
    { id: 2, name: 'Peach Nailpolish', price: 1000, image: '/N2.webp' },
    { id: 3, name: 'Green Nailpolish', price: 1000, image: '/N3.jpg' },
  ],
  Accessories: [
    { id: 1, name: 'Fossil ', price: 1400, image: '/A1.webp' },
    { id: 2, name: 'Kory Burch', price: 2000, image: '/A2.jpg' },
    { id: 3, name: 'Kate Spade', price: 1000, image: '/A3.webp' },
  ],
  Jewellery: [
    { id: 1, name: 'Ring', price: 1500, image: '/J1.webp' },
    { id: 2, name: 'Ring', price: 1300, image: '/J2.webp' },
    { id: 3, name: 'Earrings', price: 2000, image: '/J3.jpg' },
  ],
  Facemakeup: [
    { id: 1, name: 'Maybelline', price: 1900, image: '/F1.webp' },
    { id: 2, name: 'Pro-Matte', price: 1100, image: '/F2.webp' },
    { id: 6, name: 'Milani Smooth', price: 2000, image: '/F3.webp' },
  ],
  Perfume: [
    { id: 1, name: 'Ford Black', price: 1400, image: '/B1.avif' },
    { id: 2, name: 'Gucci Bloom', price: 1300, image: '/B2.avif' },
    { id: 3, name: 'Armani Code', price: 2000, image: '/B3.avif' },
  ],
};

const CategoryPage = () => {
  const params = useParams();
  const { category } = params;
  const { addToCart } = useCart();

  const categoryProducts = products[category] || [];

  if (categoryProducts.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-x-hidden">
      <div className="container px-3 py-12 mx-auto max-w-full">
        <div className="text-center mb-5">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
            {category} Collection
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {categoryProducts.map((product) => (
            <div key={product.id} className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
              <div className="border-2 border-pink-300 rounded-lg p-4 hover:border-[#F35588] transition-all duration-300 ease-in-out">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1100}
                    height={400}
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <h2 className="text-2xl font-bold title-font text-[#F7418F] mt-5 text-center">
                  {product.name}
                </h2>
                <div className="text-center font-bold text-3xl mt-3 mb-3">
                  Rs.{product.price}
                </div>
                <div className="flex mt-3 justify-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group"
                  >
                    <MdOutlineShoppingCart className="group-hover:animate-bounce" />
                    Add to Cart
                  </button>
                </div>
                <div className="flex mt-3 justify-center">
                  <Link href={`/${category}/${product.id}`}>
                    <button className="text-white bg-[#EC9CD3] border-0 py-2 px-6 focus:outline-none hover:bg-[#F35588] rounded flex items-center space-x-2 group">
                      <FaRegCheckCircle className="group-hover:animate-bounce text-green-800" />
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
