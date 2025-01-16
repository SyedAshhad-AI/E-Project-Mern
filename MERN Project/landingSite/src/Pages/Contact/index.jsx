import CTASection from "../../Components/CTASection";
import LetsTask from "./LetsTask";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center 2xl:mx-40">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto p-8 rounded-lg items-center lg:mt-16 lg:mb-10">
        <h1 className="lg:text-6xl text-6xl font-bold mb-4 text-center">
          Get In Touch
        </h1>
        <p className="max-w-2xl mb-4 text-center my-9 text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          dolores voluptatum delectus sit, minus ab deserunt consequatur
          architecto culpa exercitationem!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center lg:items-center lg:mx-auto mx-3">
        <img
          className="rounded-3xl w-full lg:w-3/4 mb-6"
          src="/Images/contacts01.jpg"
          alt="About Bringer"
        />
      </div>

      {/* Content Section */}
      <div className="container lg:w-3/4 lg:mx-auto py-16">
        {/* First Row - Heading on the left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 flex flex-col justify-between mx-5">
            <h2 className="text-4xl font-bold">
              Ready to ignite your brand's fire? 🔥 Let's connect! 🤝
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-5">
          <div></div>
          <div className="space-y-6">
            <p className="text-2xl text-white">
              We help creative agencies, designers, and other creative people to
              connect with potential clients. We're not just creatives; we're
              brand-whisperers, storytellers, and digital alchemists.
            </p>
          </div>
        </div>

      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-3/4 mx-5">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Images/image1.jpg"
            alt="Group working together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Images/image1.jpg"
            alt="Team discussion"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/Images/image1.jpg"
            alt="Collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <LetsTask />
      <CTASection />
    </div>
  );
};

export default ContactUsPage;
