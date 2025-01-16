const TestimonialCard = () => {
  const testimonials = [
    {
      quote:
        "Before working with Bringer, our brand felt lost in the crowd. They not only gave us a stunning logo and website, but they also crafted a brand story that resonated with our customers. Now, we're seeing a surge in loyalty and engagement, and it all started with a spark!",
      name: "Sarah Janson",
      title: "CEO of Bloom Eco-Spa",
    },
    {
      quote:
        "We knew we needed a digital boost, but we had no idea where to start. Bringer came in like a team of data-driven superheroes! They built targeted campaigns that reached our ideal audience, and the results were incredible. Our leads skyrocketed, and our conversion rates doubled.",
      name: "Michael Kaper",
      title: "VP of Marketing, Tech Inc.",
    },
    {
      quote:
        "Words cannot express how pleased we are with the visuals Bringer created for our brand. From the captivating infographics to the social media graphics, they've injected an emotional punch into our communication that resonates deeply with our audience.",
      name: "Anna Larson",
      title: "Founder of Storycraft Books",
    },
    {
      quote:
        "Our old website was a confusing maze. Bringer transformed it into a user-friendly paradise! They crafted a streamlined navigation that makes finding information a breeze, and the mobile experience is flawless.",
      name: "David Madison",
      title: "CTO of GreenTech Solutions",
    },
  ];

  return (
    <div className="p-10">
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md text-white flex flex-col justify-between h-full"
          >
            <p className="mb-4 text-md text-gray-300">{`"${testimonial.quote}"`}</p>
            <div className="mt-auto">
              <div className="font-semibold text-xl">
                {testimonial.name}
              </div>
              <div className="flex justify-between">
                <div className="text-gray-400">{testimonial.title}</div>
                <span className="text-gray-500 ">★★★★★</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
