import ServicesSection from "./ServicesSection";

const Services = () => {
  return (
    <>
      <section className="text-white p-14 py-16 m-5 lg:m-0">
        {/* Section Title */}
        <div className="text-center lg:mb-12">
          <h2 className="text-4xl font-bold">Our Event Management Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            We provide a comprehensive range of event management services tailored to meet the unique needs of our clients. Whether it's a corporate conference, wedding, or social gathering, we ensure a seamless and unforgettable experience. Our services include:
          </p>
        </div>
      </section>

      <ServicesSection />
    </>
  );
};

export default Services;
