import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#FA58B6] via-[#F70776] to-[#F10086] text-pink-100 pt-16 pb-8 overflow-hidden">
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 z-10">
        
        {/* Company Logo + Info */}
        <div>
          <Image
            src="/logo.png" // <-- apna logo path yahan do
            alt="ShopEase Logo"
            width={100}
            height={40}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            Experience premium shopping with the latest fashion, electronics, and lifestyle products.
          </p>
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-pink-400/40 pb-2">Shop</h2>
          <ul className="space-y-3 text-sm">
            {["Makeup Kit", "Perfume", "Watch", "EyeShade", "Jewelery"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-pink-400/40 pb-2">Help</h2>
          <ul className="space-y-3 text-sm">
            {["Customer Service", "Returns", "Order Tracking", "FAQ"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-b border-pink-400/40 pb-2">Newsletter</h2>
          <p className="text-sm mb-4">
            Join our newsletter for updates and exclusive deals.
          </p>
          <form className="flex items-center bg-white rounded-full overflow-hidden shadow-md focus-within:ring-2 focus-within:ring-pink-400">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 flex items-center justify-center w-12 h-12 text-white transition"
            >
              <FaSearch size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-pink-400/30 mt-12 pt-4 text-center text-sm z-10">
        © {new Date().getFullYear()} ShopEase — All Rights Reserved
      </div>
    </footer>
  );
}




