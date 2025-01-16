const AboutUsSection = () => {
  return (
    <div className="text-white p-12 lg:mt-40">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center">
        {/* Image Section */}
        <img
          src=" /Images/about02.jpg"
          alt="Team working together"
          className="rounded-lg w-full lg:w-2/6 mb-8 lg:mb-0"
        />

        {/* Text Content */}
        <div className="lg:ml-12 text-center lg:text-left lg:w-5/12">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            We are a passionate team of designers and developers.
          </h1>
          <p className="text-2xl mb-4">
            We believe in the power of creativity.
          </p>
          <p className="text-md mb-6 text-gray-400">
            We are a team of passionate and experienced designers, developers,
            and marketers who specialize in helping businesses of all sizes
            achieve their goals. We are committed to helping our clients unleash
            their full potential.
          </p>
          {/* Button Section */}
          <div className="mt-4 bg-white text-black px-6 py-3 inline-block rounded-lg">
            <p className="text-lg font-semibold flex items-center gap-2">
              <span>We are Passionate Team</span>
              <span className="ml-2">↗</span>
            </p>
            <p className="text-sm mt-1">Learn more about us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
