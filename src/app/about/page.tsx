const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-100 px-6 py-16">
      <div className="text-center max-w-3xl">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          We{" "}
          <span className="bg-black text-white px-3 py-1 rounded">
            Love
          </span>{" "}
          To Do Makeup
        </h1>

        {/* Quote */}
        <p className="italic text-lg text-pink-700 mb-6">
          "Makeup is not a mask, it's an art — the art of expressing who you truly are."
        </p>

        {/* Paragraph */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At Glamora, we believe makeup is more than just beauty products — it’s a
          form of self-expression, confidence, and creativity. Whether it’s a bold
          red lip or a soft natural glow, our passion lies in helping you bring your
          inner beauty to the surface.
        </p>

      </div>
    </section>
  );
};

export default About;
