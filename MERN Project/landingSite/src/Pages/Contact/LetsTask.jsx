import {
  FaFacebookF,
  FaInstagram,
  FaPatreon,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const LetsTask = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-40 mx-10">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-10">
        <h1 className="lg:text-5xl text-6xl font-bold mb-4 text-center">
          Let's 🗣 talk!
        </h1>
        <p className="text-2xl mb-4 text-center my-9">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg lg:p-9">
          <h2 className="text-2xl font-bold mb-2">
            Phone<span className="text-blue-400">.</span>
          </h2>
          <p className="text-xl mb-4 md:text-xs">+1 (234) 555-67-89</p>
          <p className="text-gray-400 mt-10 2xl:mt-40">
            Give us a call and chat directly with our friendly team. We’re
            always happy to answer any questions.
          </p>
        </div>

        {/* Email Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg lg:p-9">
          <h2 className="text-2xl font-bold mb-2">
            Email<span className="text-blue-400">.</span>
          </h2>
          <p className="text-xl mb-4 md:text-xs ">bringer@example.com</p>
          <p className="text-gray-400 mt-10 2xl:mt-40">
            Send us a detailed message. We’ll get back to you as soon as
            possible to discuss your creative project further.
          </p>
        </div>

        {/* Social Media Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg lg:p-9">
          <h2 className="text-2xl font-bold mb-2">
            Social Media<span className="text-blue-400">.</span>
          </h2>
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="text-xl hover:text-blue-500 cursor-pointer transition-transform transform hover:scale-110 duration-300" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer transition-transform transform hover:scale-110 duration-300" />
            <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer transition-transform transform hover:scale-110 duration-300" />
            <FaTiktok className="text-xl hover:text-black cursor-pointer transition-transform transform hover:scale-110 duration-300" />
            <FaPatreon className="text-xl hover:text-orange-500 cursor-pointer transition-transform transform hover:scale-110 duration-300" />
          </div>
          <p className="text-gray-400 mt-10 2xl:mt-40">
            Follow us on Social Media Platforms for a glimpse into our creative
            world, industry insights, and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsTask;
