import { useState } from "react";

const CTASection = () => {
  const [formResponse, setFormResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormResponse("Thank you! We will contact you soon.");
  };

  return (
    <section className="py-16 my-28">
      <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0">

        <div className="lg:w-4/5 flex justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md " >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-300 text-sm"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full mt-2 p-3 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get a FREE Quote
              </button>
              <div className="text-green-500 mt-4">{formResponse}</div>
            </form>
          </div>
        </div>

        <div className=" text-white lg:mx-0 mx-5">
          <h2 className="text-7xl font-bold mb-4">
            Let’s discuss <br/> your next creative project.
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
        
      </div>
    </section>
  );
};

export default CTASection;
