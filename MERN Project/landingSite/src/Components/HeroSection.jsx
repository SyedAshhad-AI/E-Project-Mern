const HeroSection = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen py-12 px-4">

     
      {/* Main Heading Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:w-3/4 text-center lg:text-left mb-8">
        <div className="lg:max-w-lg">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            Transform Your Event Ideas into Unforgettable Experiences!
          </h1>
        </div>

        <div>
          {/* Event Details Section */}
          <p className="text-2xl text-gray-300 mb-4 lg:mb-14 lg:text-center ">
            We specialize in event planning, helping you organize and manage
            events with ease, from weddings to corporate gatherings.
          </p>

          <div className="flex items-end justify-center lg:justify-end space-x-4 mx-5 mt-4 lg:mt-0">
            <button className="bg-blue-500 2xl:w-28 2xl:h-28 w-16 h-16 rounded-lg text-white px-6 py-3 shadow-md transition-transform transform hover:scale-105 flex items-center justify-center text-xs 2xl:text-xl">
              <span>500+ Events Organized</span>
            </button>
            <button className="bg-orange-500 2xl:w-28 2xl:h-28 w-16 h-16 rounded-lg text-white px-6 py-3 shadow-md transition-transform transform hover:scale-105 flex items-center justify-center text-xs 2xl:text-xl">
              <span>200k+ Attendees</span>
            </button>
            <button className="bg-teal-500 2xl:w-28 2xl:h-28 w-16 h-16 rounded-lg text-white px-6 py-3 shadow-md transition-transform transform hover:scale-105 flex items-center justify-center text-xs 2xl:text-xl">
              <span>50+ Venues Available</span>
            </button>
            <button className="bg-purple-500 2xl:w-28 2xl:h-28 w-16 h-16 rounded-lg text-white px-6 py-3 shadow-md transition-transform transform hover:scale-105 flex items-center justify-center text-xs 2xl:text-xl">
              <span>1000+ Happy Clients</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
