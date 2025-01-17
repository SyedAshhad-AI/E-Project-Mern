const CTASection = () => {
  return (
    <section className="py-16 my-28">
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0">

        {/* Stats and Info Section */}
        <div className="text-white lg:mx-0 mx-5">
          <h2 className="text-7xl font-bold mb-4">
            Let’s discuss <br /> your next creative project.
          </h2>
          <p className="text-gray-400 mb-8 mt-4">
            We help creative agencies, designers, and other creative people
            showcase their perfect work.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-4xl font-bold">420</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold">8K+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold">12+</div>
              <div className="text-gray-400">Years in Work</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-4/5 flex justify-center">
          <img
            src="/Images/1.jpg" // Path to your image
            alt="Creative Project"
            className="rounded-lg shadow-lg object-cover w-full h-96" // Adjust size if necessary
          />
        </div>

      </div>
    </section>
  );
};

export default CTASection;
