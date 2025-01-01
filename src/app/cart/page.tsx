"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { RiBallPenFill } from "react-icons/ri";
import { useCart } from "../context/cartcontext";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setIsSidebarOpen(false);
  };

  const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const discount = 0;
  const totalAmount = itemTotal + shipping - discount;

  return (
    <div className="font-sans container mx-auto p-6">
      <div className="p-10 text-left">
        <div className="flex items-center">
          <div className="w-2 h-12 bg-pink-600 rounded-full mr-4"></div>
          <h1 className="text-4xl font-semibold text-gray-800">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 mt-4">Your cart is empty</p>
        ) : (
          <div className="mt-8">
            <div className="overflow-x-auto hidden sm:block">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      ITEM
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      PRICE
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      QUANTITY
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      SUBTOTAL
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b border-gray-300">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="mr-4"
                          />
                          <div>
                            <div className="text-sm">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${item.price}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                          >
                            <FiMinus />
                          </button>
                          <span className="mx-2 text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 focus:outline-none focus:text-gray-600"
                          >
                            <GoPlus />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 focus:outline-none focus:text-red-800"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg mb-4 p-4 flex flex-col items-start bg-gray-50"
                >
                  <div className="flex items-center w-full mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 focus:outline-none"
                      >
                        <FiMinus />
                      </button>
                      <span className="mx-2 text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 focus:outline-none"
                      >
                        <GoPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 focus:outline-none"
                    >
                      <FaTrash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={toggleSidebar}
                className="px-8 py-2 bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-600 hover:text-white hover:border-white transition-colors duration-300 w-40"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar with Checkout*/}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 bg-gradient-to-b from-pink-400 via-pink-600 to-white w-full sm:w-80 h-full p-6 overflow-y-auto">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl">
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-white">Checkout</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-white">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="text-white">Item Total:</span>
                <span>${itemTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-semibold">
                <span className="text-white">Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Payment Information</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm" htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm" htmlFor="address">Address</label>
                  <input type="text" id="address" placeholder="Your Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm" htmlFor="paymentMethod">Payment Method</label>
                  <select id="paymentMethod" className="w-full p-2 border border-gray-300 rounded mt-1">
                    <option value="">Select Payment Method</option>
                    <option value="easyPaisa">EasyPaisa</option>
                    <option value="jazzCash">JazzCash</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-white text-pink-700 border-2 border-pink-700 hover:text-white hover:border-white hover:bg-pink-700 duration-300 font-semibold w-full"
              >
                Confirm Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup*/}
      {isCheckoutSuccess && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 text-center">
            <div className="flex items-center justify-center mb-4">
              <RiBallPenFill className="text-4xl text-pink-500 mr-2" />
              <h2 className="text-2xl font-semibold">Congratulations!</h2>
            </div>
            <p className="text-gray-600">Your order has been placed successfully!</p>
            <button
              onClick={() => setIsCheckoutSuccess(false)}
              className="mt-6 text-white bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


