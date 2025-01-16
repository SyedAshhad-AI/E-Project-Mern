
const portfolioItems = [
  {
    title: "Curology",
    category: "Branding",
    image: "/Images/image1.jpg",
    link: "#",
  },
  {
    title: "Cookie Dough",
    category: "Advertising",
    image: "/Images/image1.jpg",
    link: "#",
  },
  {
    title: "Gaming Power",
    category: "Marketing",
    image: "/Images/image1.jpg",
    link: "#",
  },
  {
    title: "Riot Energy",
    category: "Advertising",
    image: "/Images/image1.jpg",
    link: "#",
  },
  {
    title: "Smoothie",
    category: "Marketing",
    image: "/Images/image1.jpg",
    link: "#",
  },
  {
    title: "Positive Beverage",
    category: "Branding",
    image: "/Images/about02.jpg",
    link: "#",
  },
];

export const PortfolioPage = () => {
  return (
    <section className="text-white py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-7xl font-bold">Portfolio</h2>
        <p className="text-lg text-gray-400 max-w-2xl mt-4 lg:mx-auto mx-3">
          Where Creative Sparks Ignite Branding Revolutions.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group bg-slate-800 rounded-lg overflow-hidden transition-shadow duration-300 2xl:p-5 "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="2xl:w-full w-full h-80 object-cover 2xl:rounded-2xl"
            />
            {/* Content */}
            <div className="p-4">
              <span className="text-base font-bold text-gray-400">{item.category}</span>
              <h6 className="text-2xl font-semibold mt-2">{item.title}</h6>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
