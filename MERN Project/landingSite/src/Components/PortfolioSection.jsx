import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "Curology",
    category: "Branding",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
  {
    title: "Cookie Dough",
    category: "Advertising",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
  {
    title: "Gaming Power",
    category: "Marketing",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
  {
    title: "Riot Energy",
    category: "Advertising",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
  {
    title: "Smoothie",
    category: "Marketing",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
  {
    title: "Positive Beverage",
    category: "Branding",
    image: "/Images/image1.jpg",
    link: "/portfolio",
  },
];

const PortfolioSection = () => {
  return (
    <section className="text-white py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Portfolio</h2>
        <p className="text-lg text-gray-400 max-w-2xl mt-4 lg:mx-auto mx-3">
          We are proud of our work, and we are always looking for new
          challenges. Take a look at some of our recent portfolio:
        </p>
      </div>
      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group bg-slate-900 hover:bg-slate-950 transition duration-300 ease-in-out rounded-xl group"
          >
            <Link
              to={item.link}
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover lg:w-72 lg:m-3 lg:rounded-lg"
              />
              {/* Content */}
              <div className="p-4">
                <span className="text-sm text-gray-400">{item.category}</span>
                <h6 className="text-2xl font-semibold mt-2">{item.title}</h6>
              </div>
              {/* Arrow Icon */}
              <div className="absolute bottom-4 right-4 p-3 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                <BsArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/portfolio"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600  inline-flex items-center hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150"
        >
          Explore All Work
          <BsArrowUpRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
