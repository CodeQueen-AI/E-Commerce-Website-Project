export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/Contact.webp')" }}
    >
      <form
        action="#"
        method="POST"
        className="w-full max-w-md p-8 space-y-6 bg-transparent"
      >
        <h1 className="text-4xl font-extrabold text-center text-black mb-8 tracking-wide">
          Get in Touch
        </h1>

        <div className="mb-6">
          <label htmlFor="name" className="block text-xl text-black mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-xl text-black mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200"
            placeholder="Your email address"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-xl text-black mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
           className="px-6 py-2 bg-white text-pink-700 border-2 border-pink-700 hover:text-white hover:border-white hover:bg-pink-700 duration-300 font-semibold w-full">
                Submit
            </button>
        </div>
      </form>
    </div>
  );
}
