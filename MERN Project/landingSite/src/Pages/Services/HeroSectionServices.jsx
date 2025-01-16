const HeroSectionServices = () => {
  return (
    <section className="relative text-white">
      {/* Image Section */}
      <div className="flex flex-col items-center lg:items-center lg:mx-auto mx-3">
        <img
          className="rounded-lg w-full  lg:w-3/4 mb-6"
          src="/Images/image1.jpg"
          alt="About Bringer"
        />
      </div>

      {/* Content Section */}
      <div className="mx-4 lg:w-3/4 lg:mx-auto py-16">
        {/* First Row - Heading on the left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="space-y-6 flex flex-col justify-between"
            data-unload="fade-left"
          >
            <h2 className="text-6xl font-bold" data-split-appear="fade-up">
              Igniting brands that spark movements.
            </h2>
          </div>
        </div>

        {/* Second Row - Content on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div></div> {/* Empty column for alignment */}
          <div
            className="space-y-6"
            data-appear="fade-left"
            data-unload="fade-right"
            data-delay="100"
          >
            <p className="text-2xl text-white">
              We help creative agencies, designers, and other creative people to
              connect with potential clients. We're not just creatives we're
              brand-whisperers, storytellers, and digital alchemists.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionServices;
