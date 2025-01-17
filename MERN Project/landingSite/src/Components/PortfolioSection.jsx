const portfolioItems = [
  {
    title: "Corporate Conference 2024",
    category: "Event Planning",
    image: "/Images/1.jpg", // Replace with event-related images
  },
  {
    title: "Summer Wedding Extravaganza",
    category: "Event Coordination",
    image: "/Images/2.png", // Replace with event-related images
  },
  {
    title: "Charity Gala 2023",
    category: "Venue Management",
    image: "/Images/3.jpg", // Replace with event-related images
  },
  {
    title: "Product Launch Event",
    category: "Branding & Marketing",
    image: "/Images/4.jpg", // Replace with event-related images
  },
  {
    title: "Team Building Retreat",
    category: "Event Planning",
    image: "/Images/5.jpg", // Replace with event-related images
  },
  {
    title: "New Year’s Eve Celebration",
    category: "Catering & Hospitality",
    image: "/Images/6.jpg", // Replace with event-related images
  },
];

const PortfolioSection = () => {
  return (
    <section className="text-white py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Event Portfolio</h2>
        <p className="text-lg text-gray-400 max-w-2xl mt-4 lg:mx-auto mx-3">
          We are passionate about creating memorable experiences. Take a look at some of our recent events that we have meticulously planned and executed:
        </p>
      </div>
      
      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group bg-slate-900 hover:bg-slate-950 transition duration-300 ease-in-out rounded-xl"
          >
            <div className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
              {/* Removed Arrow Icon */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
