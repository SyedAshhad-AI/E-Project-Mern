import { useState, useEffect } from "react";

// Example team data
const teamMembers = [
  { name: "John Doe", position: "CEO", imgSrc: "src/assets/Images/image1.jpg" },
  { name: "Jane Smith", position: "CTO", imgSrc: "src/assets/Images/image1.jpg" },
  { name: "Bob Brown", position: "Developer", imgSrc: "src/assets/Images/image1.jpg" },
  { name: "Alice Johnson", position: "Designer", imgSrc: "src/assets/Images/image1.jpg" },
  // Add more team members as needed
];

const MeetTheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Default to 1 item per slide (mobile)

  // Update itemsPerSlide based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(2); // 2 items per slide for large screens
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(2); // 2 items per slide for medium screens (tablets)
      } else {
        setItemsPerSlide(1); // 1 item per slide for small screens (mobiles)
      }
    };

    // Initialize the correct items per slide based on window size
    updateItemsPerSlide();

    // Update the items per slide on window resize
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <section className="text-white py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Meet the Team</h2>
        <p className="text-lg mt-4 text-gray-400">
          We are a team of passionate and experienced designers, developers, and
          marketers who specialize in helping businesses achieve their goals.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full mx-auto overflow-hidden px-8">
        {/* Slider Item */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4"
              style={{ flexBasis: `${100 / itemsPerSlide}%` }} // Adjust flex-basis dynamically based on itemsPerSlide
            >
              <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg">
                {/* Image Section */}
                <div className="h-52 w-52 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={member.imgSrc}
                    alt={member.name}
                  />
                </div>

                {/* Team Member Info */}
                <h6 className="text-sm uppercase text-gray-400">
                  {member.position}
                </h6>
                <h3 className="text-xl font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full focus:outline-none hover:bg-gray-600"
          onClick={prevSlide}
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full focus:outline-none hover:bg-gray-600"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
