const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-pink-950 via-pink-400 to-pink-600 flex items-center justify-center">
      <div className="text-center text-white px-6 py-12 max-w-4xl w-full">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-6">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-white to-pink-200">Glamora</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl italic mb-6">
          “Where beauty meets elegance, and confidence is your best accessory.”
        </p>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-pink-50 leading-relaxed mb-8">
          Welcome to <span className="font-semibold">Glamora</span>, your ultimate destination for luxury makeup and beauty essentials. 
          We believe makeup is not just about colors – it’s an art that tells your story. 
          From velvety foundations to iconic lip shades, every product we offer is 
          handpicked from trusted brands to bring you <span className="font-semibold">quality, elegance, and style</span>.
        </p>
        
        <p className="text-base sm:text-lg md:text-xl text-pink-50 leading-relaxed mb-8">
          Whether you’re preparing for a glamorous night out or a natural everyday glow, 
          our curated collection ensures you shine with confidence. At <span className="font-semibold">Glamora</span>, 
          beauty has no limits – it’s all about embracing your unique style.
        </p>

        {/* Highlight Box */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="text-left list-disc list-inside space-y-2 text-pink-50">
            <li>✨ 100% authentic products</li>
            <li>🌸 Latest seasonal trends</li>
            <li>🚚 Fast & secure delivery</li>
            <li>💬 Expert beauty tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
