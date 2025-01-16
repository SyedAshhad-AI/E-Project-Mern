import WhatMakesUsBest from "../Services/MakeUsBest";
import HeroSectionTestimonials from "./HeroSectionTestimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center 2xl:mx-40">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-52 ">
        <h1 className="lg:text-7xl text-6xl font-bold mb-4 text-center">
        Testimonial
        </h1>
        <p className="text-xl mb-4 text-center my-9">
          Here are some of the most inspiring reviews from our clients 🌟. Your
          opinion is very important to us.
        </p>
      </div>
      <div className="container">
        <HeroSectionTestimonials />
        <WhatMakesUsBest/>
      </div>
    </div>
  );
};

export default Testimonials;
