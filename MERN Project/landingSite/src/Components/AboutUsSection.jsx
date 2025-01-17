const AboutUsSection = () => {
  return (
    <div className="text-white p-12 lg:mt-40">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center">
        {/* Image Section */}
        <img
          src="/Images/event.png"
          alt="Event planners collaborating"
          className="rounded-lg w-full lg:w-2/6 mb-8 lg:mb-0"
        />

        {/* Text Content */}
        <div className="lg:ml-12 text-center lg:text-left lg:w-5/12">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            We are a dedicated team of event planners and coordinators.
          </h1>
          <p className="text-2xl mb-4">
            Crafting unforgettable experiences for every event.
          </p>
          <p className="text-md mb-6 text-gray-400">
            We specialize in organizing a wide range of events, from corporate conferences to weddings. Our experienced team is passionate about creating seamless experiences and ensuring every detail exceeds expectations. Let us bring your vision to life.
          </p>
          {/* Button Section */}
          <a
            href="/services"  // The URL you want to navigate to
            className="mt-4 bg-white text-black px-6 py-3 inline-block rounded-lg transition-all duration-300 ease-in-out transform hover:bg-green-500 hover:text-white hover:scale-105"
          >
            <p className="text-lg font-semibold flex items-center gap-2">
              <span>Meet Our Event Experts</span>
              <span className="ml-2">↗</span>
            </p>
            <p className="text-sm mt-1">Learn more about our services</p>
          </a>


        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
