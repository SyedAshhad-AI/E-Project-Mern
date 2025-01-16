
import { FiUserCheck, FiUsers, FiActivity, FiMonitor } from "react-icons/fi";

const FeaturesSection = () => {
  return (
    <section className=" text-white py-16">
      <div className="text-center mb-12">
        {/* Title and Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold">
          The fire that fuels our passion.
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-400">
          At Bringer, we believe in the power of:
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {/* Feature Box 1 */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">
              Creativity<span className="text-blue-500">.</span>
            </h4>
            <p className="text-gray-400 mt-2">
              We dare to dream big and push boundaries, never settling for the
              ordinary.
            </p>
          </div>
          <div className="text-3xl text-white">
            <FiUserCheck />
          </div>
        </div>

        {/* Feature Box 2 */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">
              Collaboration<span className="text-blue-500">.</span>
            </h4>
            <p className="text-gray-400 mt-2">
              We thrive on diverse perspectives and believe in the magic of
              working together.
            </p>
          </div>
          <div className="text-3xl text-white">
            <FiUsers />
          </div>
        </div>

        {/* Feature Box 3 */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">
              Impact<span className="text-blue-500">.</span>
            </h4>
            <p className="text-gray-400 mt-2">
              We're driven by a desire to make a difference, to create brands
              that move mountains.
            </p>
          </div>
          <div className="text-3xl text-white">
            <FiActivity />
          </div>
        </div>

        {/* Feature Box 4 */}
        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold">
              Innovation<span className="text-blue-500">.</span>
            </h4>
            <p className="text-gray-400 mt-2">
              We stay ahead of the curve, embracing new technologies & trends to
              keep your brand on top.
            </p>
          </div>
          <div className="text-3xl text-white">
            <FiMonitor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
