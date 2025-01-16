import HeroSectionServices from "./HeroSectionServices";
import WhatMakesUsBest from "./MakeUsBest";
import Services from "./Services";

const ServicesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center 2xl:mx-40">
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-40 ">
        <h1 className="lg:text-8xl text-6xl font-bold mb-4 text-center ">Our Services</h1>
        <p className=" mb-4 text-center my-9 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </div>

      <HeroSectionServices/>
      <Services />  
      <WhatMakesUsBest />
    </div>
  );
};

export default ServicesPage;
