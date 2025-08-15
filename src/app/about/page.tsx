import Image from "next/image";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-500 to-pink-300 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-pink-400/30 blur-3xl rounded-full"></div>
          <Image
            src="/about-makeup.jpg" // apna image path lagao
            alt="Luxury Makeup Collection"
            width={600}
            height={600}
            className="rounded-2xl shadow-2xl relative z-10"
          />
        </div>

        {/* Right Content */}
        <div className="text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Redefining <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-white">Beauty</span>
          </h2>
          <p className="text-lg text-pink-50 mb-6">
            At <span className="font-semibold">Glamora</span>, makeup isn’t just a product – it’s a statement.  
            We bring you the finest beauty essentials that blend luxury with everyday elegance,  
            helping you shine in your own unique way.
          </p>
          <p className="text-lg text-pink-50 mb-8">
            From timeless classics to the latest trends, each product is handpicked for its  
            quality, style, and the magic it brings to your beauty routine.
          </p>
          <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-lg hover:shadow-pink-200/50 hover:scale-105 transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
