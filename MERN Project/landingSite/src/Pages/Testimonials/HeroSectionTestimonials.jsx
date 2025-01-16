import TestimonialCard from "./TestimonialCard";

const HeroSectionTestimonials = () => {
  return (
    <section className="relative text-white">

      <div className="flex flex-col items-center lg:items-center lg:mx-auto mx-3">
        <img
          className="rounded-lg w-full  lg:w-3/4 mb-1"
          src="/Images/testimonials.jpg"
        />
      </div>

      <div className="lg:w-4/5 lg:mx-auto py-16 mx-6">
      <TestimonialCard />
      </div>
    </section>
  );
};

export default HeroSectionTestimonials;
