




'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/cartcontext';

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
  ]
};


const ProductDetailPage = () => {
  const params = useParams();
  const { category, detail } = params;

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  // Ensure TypeScript knows `category` is a key of `products`
  const categoryProducts = products[category as keyof typeof products] || [];
  const detailId = typeof detail === 'string' ? parseInt(detail, 10) : NaN;
  const product = categoryProducts.find((p) => p.id === detailId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleHeartClick = () => setIsFavorite(!isFavorite);

  const handleAddToCart = () => {
    addToCart(product);
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
            <h1 className="text-4xl font-bold text-[#D1007F]">{product.name}</h1>
            <p className="text-2xl font-bold mt-4">Rs.{product.price}</p>
            <div className="flex items-center mt-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
            <div className="mt-6">
              <button
                onClick={handleAddToCart}
                className="bg-pink-500 text-white px-6 py-2 rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={handleHeartClick}
                className={`ml-4 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
              >
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
          Added to cart!
        </div>
      )}
    </section>
  );
};

export default ProductDetailPage;
