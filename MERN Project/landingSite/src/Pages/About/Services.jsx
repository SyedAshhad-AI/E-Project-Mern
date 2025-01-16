import ServicesSection from "../../Components/ServicesSection";

const Services = () => {
  return (
    <>
      <section className="relative text-white">
        {/* Content Section */}
        <div className="lg:w-4/5 lg:mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-6">
          {/* Left Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <h2 className="text-5xl font-bold">
              Igniting brands that <br></br> spark movements.
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-6 w-11/12">
            <p className="text-2xl text-white">
              We help creative agencies, designers, and other creative people to
              connect with potential clients.
            </p>
            <p className="text-gray-400">
              We're not just creatives; we're brand-whisperers, storytellers,
              and digital alchemists. We take your vision, infuse it with our
              spark, and craft unforgettable experiences that ignite
              imaginations and leave audiences begging for more. At Bringer, we
              don't just build brands, we build movements.
            </p>
          </div>
        </div>
        <ServicesSection />
      </section>
    </>
  );
};

export default Services;
