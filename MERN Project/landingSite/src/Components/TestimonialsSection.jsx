import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: `"Before working with Bringer, our brand felt lost in the crowd. They not only gave us a stunning logo and website, but they also crafted a brand story that resonated with our customers. Now, we're seeing a surge in loyalty and engagement, and it all started with a spark!"`,
      name: "Sarah Janson",
      position: "CEO of Bloom Eco-Spa",
      rating: 5,
    },
    {
      text: `"We knew we needed a digital boost, but we had no idea where to start. Bringer came in like a team of data-driven superheroes! They built targeted campaigns that reached our ideal audience, and the results were incredible. Our leads skyrocketed, and our conversion rates doubled. They truly understand the power of digital!"`,
      name: "Michael Kaper",
      position: "VP of Marketing, Tech Inc.",
      rating: 5,
    },
    {
      text: `"Words cannot express how pleased we are with the visuals Bringer created for our brand. From the captivating infographics to the social media graphics that pop off the screen, they've injected an emotional punch into our communication that resonates deeply with our audience. Now, every visual tells our story with stunning clarity."`,
      name: "Anna Larson",
      position: "Founder of StoryCraft Books",
      rating: 4,
    },
  ];

  return (
    <section className="text-white py-16 container mx-auto px-4 items-center w-10/12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
          Read what our clients have to say about our work.
        </p>
      </div>

      {/* Testimonials and Image Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonials */}
        <div>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
            >
              <p className="text-lg italic mb-4">{testimonial.text}</p>
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="font-semibold">{testimonial.name}</h6>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Read all testimonials link */}
          <div className="text-right mt-4">
            <Link
              to="/testimonials"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              Read all testimonials <BsArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="/Images/image1.jpg"
            alt="What Our Clients Say"
            className="rounded-lg shadow-lg object-cover w-full h-full hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
