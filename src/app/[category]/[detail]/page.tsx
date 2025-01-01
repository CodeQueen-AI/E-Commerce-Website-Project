'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/cartcontext';

// Define Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

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

const ProductDetailPage = () => {
  const params = useParams();
  const { category, detail } = params as { category: string; detail: string };

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  const categoryProducts = products[category as keyof typeof products] || [];
  const product = categoryProducts.find((p) => p.id === parseInt(detail, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    const productWithQuantity: Product = { ...product, quantity };
    addToCart(productWithQuantity);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-[500px] relative shadow-lg rounded-xl mb-6 lg:mb-0">
            <Image
              alt={product.name}
              src={product.image}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: '#D1007F' }}>
              {product.name}
            </h1>

            <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
              <legend className="text-sm text-gray-500 px-2 font-semibold">PRICE</legend>
              <span className="text-3xl md:text-4xl font-bold text-gray-800">Rs.{product.price}</span>
            </fieldset>

            <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6">
              <legend className="text-sm text-gray-500 px-2 font-semibold">COLORS</legend>
              <div className="flex space-x-2">
                <button className="border-2 w-10 h-10 focus:outline-none hover:bg-red-600" style={{ backgroundColor: '#F87171' }}></button>
                <button className="border-2 w-10 h-10 focus:outline-none hover:bg-orange-600" style={{ backgroundColor: '#F59E0B' }}></button>
                <button className="border-2 w-10 h-10 focus:outline-none hover:bg-green-600" style={{ backgroundColor: '#10B981' }}></button>
                <button className="border-2 w-10 h-10 focus:outline-none hover:bg-pink-600" style={{ backgroundColor: '#D1007F' }}></button>
                <button className="border-2 w-10 h-10 focus:outline-none hover:bg-blue-600" style={{ backgroundColor: '#3B82F6' }}></button>
              </div>
            </fieldset>

            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-4 py-2">
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-8 text-center border-none focus:outline-none"
                  min="1"
                />
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button
                className={`text-3xl focus:outline-none ${isFavorite ? 'text-pink-500 scale-110' : 'text-pink-500'}`}
                onClick={handleHeartClick}
              >
                {isFavorite ? <FaHeart className="w-8 h-8" /> : <FaRegHeart className="w-8 h-8" />}
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full text-white bg-gradient-to-r from-blue-500 to-blue-600 py-3 rounded-lg"
              >
                Add to Cart
              </button>
              <button className="w-full text-white bg-gradient-to-r from-pink-500 to-pink-600 py-3 rounded-lg">
                Buy Now
              </button>
            </div>

            {showPopup && (
              <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-pink-400 via-pink-400 to-pink-900 text-white rounded-xl w-3/4 max-w-md p-6">
                <p className="text-xl font-semibold text-center">Added to Cart!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
