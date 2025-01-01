"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { FaChevronDown } from "react-icons/fa"; 
import { useCart } from '../context/cartcontext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems } = useCart();
  return (
    <nav className="bg-gradient-to-r from-[#FA58B6] via-[#F70776] to-[#F10086] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={70} 
            height={70} 
            className="cursor-pointer" 
          />
        </Link>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RiCloseFill className="text-white text-3xl cursor-pointer"/>
          ) : (
            <HiOutlineMenuAlt3 className="text-white text-3xl cursor-pointer" />
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex items-center space-x-8 justify-center flex-grow relative">
          <li className="px-4">
            <Link href="/" className="font-normal text-white text-lg py-2 hover:border-b-2 hover:border-white transition duration-300">
              Home
            </Link>
          </li>
          <li 
            className="px-4 relative flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="flex items-center space-x-2 font-normal text-white text-lg py-2 hover:border-b-2 hover:border-white transition duration-300 cursor-pointer">
              <span>ShopHub</span>
              <FaChevronDown 
                className={`text-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
              />
            </span>

            {isDropdownOpen && (
              <div 
                className="absolute top-12 left-0 bg-white/30 backdrop-blur-md text-black rounded-lg shadow-lg w-[450px] p-4 grid grid-cols-2 gap-4 z-50"
              >
                {/* Links */}
                <Link href="/Eyeshade" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Eye Shade</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Explore vibrant eye shadows, liners, and mascaras for bold looks.</p>
                </Link>
                <Link href="/Lipstick" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Lipstick</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Find the perfect lipstick shade for every occasion.</p>
                </Link>
                <Link href="/Nailpolish" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Nail Polish</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Add color to your nails with our stunning nail polishes.</p>
                </Link>
                <Link href="/Facemakeup" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Face Makeup</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Achieve flawless coverage with our face makeup products.</p>
                </Link>
                <Link href="/Perfume" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Perfume</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Indulge in our signature fragrance, designed to suit every moment.</p>
                </Link>
                <Link href="/Watch" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Watch</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Add sophistication to your wrist with our stylish watches.</p>
                </Link>
                <Link href="/Jewellery" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Jewelry</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Elevate your style with our stunning jewelry.</p>
                </Link>
                <Link href="/Accessories" className="cursor-pointer group">
                  <h3 className="font-semibold text-black group-hover:text-pink-600 transition duration-300">Accessories</h3>
                  <p className="text-sm group-hover:text-pink-600 transition duration-300">Complete your outfit with stylish accessories like boxes and bags.</p>
                </Link>
              </div>
            )}
          </li>
          <li className="px-4">
            <Link href="/about" className="font-normal text-white text-lg py-2 hover:border-b-2 hover:border-white transition duration-300">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link href="/contact" className="font-normal text-white text-lg py-2 hover:border-b-2 hover:border-white transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="px-4">
        <Link href="/cart" className="relative">
        <AiOutlineShoppingCart className="text-2xl text-white hover:text-gray-400" />
        {cartItems.length > 0 && (
          <span className="absolute top-[-1px] right-[-20px] bg-red-600 text-white font-bold rounded-full text-xs px-2 py-1">
            {cartItems.length}
          </span>
        )}
      </Link>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed inset-0 z-50 bg-gradient-to-r from-[#FA58B6] via-[#F70776] to-[#F10086] rounded-lg m-4">
            <div className="absolute top-4 right-4 cursor-pointer">
              <RiCloseFill 
                className="text-white text-3xl"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* Full-Screen Menu Content */}
            <div className="flex flex-col justify-center items-center h-full space-y-6 text-white text-2xl">
              <Link href="/" className="font-bold mb-4">Home</Link>
              {/* ShopHub Dropdown */}
              <div className="relative">
                <div
                  className="font-bold mb-4 flex items-center space-x-2 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>ShopHub</span>
                  <FaChevronDown 
                    className={`text-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white/30 backdrop-blur-md text-black rounded-lg shadow-lg w-[200px] p-4 flex flex-col space-y-2 z-50 text-sm">
                    <Link href="/Eyeshade" className="font-semibold hover:text-pink-600 transition duration-300">Eye Shade</Link>
                    <Link href="/Lipstick" className="font-semibold hover:text-pink-600 transition duration-300">Lipstick</Link>
                    <Link href="/Nailpolish" className="font-semibold hover:text-pink-600 transition duration-300">Nail Polish</Link>
                    <Link href="/Facemakeup" className="font-semibold hover:text-pink-600 transition duration-300">Face Makeup</Link>
                    <Link href="/Perfume" className="font-semibold hover:text-pink-600 transition duration-300">Perfume</Link>
                    <Link href="/Watch" className="font-semibold hover:text-pink-600 transition duration-300">Watch</Link>
                    <Link href="/Jewellery" className="font-semibold hover:text-pink-600 transition duration-300">Jewelry</Link>
                    <Link href="/Accessories" className="font-semibold hover:text-pink-600 transition duration-300">Accessories</Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="font-bold mb-4">About</Link>
              <Link href="/contact" className="font-bold mb-4">Contact</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}




















