import { BsArrowUpRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "./services.css";

const ServicesSection = () => {
  const location = useLocation(); // Get the current URL path

  const services = [
    {
      title: "Event Planning",
      description: `We provide end-to-end event planning, ensuring every detail is meticulously organized to create a seamless and unforgettable experience.`,
      link: "/services",
    },
    {
      title: "Venue Coordination",
      description: `From selecting the perfect venue to managing on-site logistics, we ensure your event space is set up to meet your vision.`,
      link: "/services",
    },
    {
      title: "Catering & Hospitality",
      description: `We coordinate top-tier catering and hospitality services, offering customized menus that will leave your guests satisfied and impressed.`,
      link: "/services",
    },
  ];

  return (
    <>
      {/* Services List */}
      <div className="container mx-auto px-0 items-center w-10/12">
        <ul className="space-y-5">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <li className="flex justify-between items-center p-8 hover:shadow-lg group transition-shadow duration-300 fade-border">
                <div className="lg:w-2/5 w-3/4">
                  <h4 className="text-2xl font-semibold mb-4">
                    {service.title}
                    <span className="text-blue-500">.</span>
                  </h4>
                </div>
                <div className="lg:w-3/5 flex items-center justify-between">
                  <p className="text-gray-400 hidden md:block">
                    {service.description}
                  </p>
                  <span className="text-blue-500 p-4 bg-gray-700 rounded-full group-hover:bg-gray-500 transition-colors ml-4 lg:ml-0">
                    <BsArrowUpRight size={24} />
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Explore All Services Button */}
      {location.pathname !== "/services" && (
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            Explore All Services
            <BsArrowUpRight size={20} className="ml-2" />
          </Link>
        </div>
      )}
    </>
  );
};

export default ServicesSection;
