import React from 'react';
import { Calendar, Users, Music, Camera, Utensils, Gift, ArrowRight, Star, Clock, Shield, Sparkles, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Comprehensive event planning services from concept to execution.",
      features: ["Venue Selection", "Timeline Management", "Vendor Coordination", "Budget Planning", "Risk Management"]
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Professional corporate event management solutions.",
      features: ["Conferences", "Team Building", "Product Launches", "Award Ceremonies", "Networking Events"]
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Top-tier entertainment booking and management.",
      features: ["Live Bands", "DJs", "Performers", "Celebrity Bookings", "Interactive Entertainment"]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional event photography and videography services.",
      features: ["Photo Sessions", "Video Coverage", "Drone Shots", "Live Streaming", "Photo Booths"]
    },
    {
      icon: Utensils,
      title: "Catering",
      description: "Exquisite catering services for all event types.",
      features: ["Custom Menus", "Dietary Options", "Bar Service", "Staff Management", "Equipment Rental"]
    },
    {
      icon: Gift,
      title: "Decor & Styling",
      description: "Creative event decoration and styling solutions.",
      features: ["Theme Design", "Floral Arrangements", "Lighting", "Furniture Rental", "Stage Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your needs
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition duration-300 border border-gray-700 hover:border-purple-500">
              <service.icon className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="h-1.5 w-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-800 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Consultation", desc: "Understanding your vision and requirements" },
              { icon: Clock, title: "Planning", desc: "Detailed event planning and coordination" },
              { icon: Shield, title: "Execution", desc: "Flawless event implementation" },
              { icon: Star, title: "Follow-up", desc: "Post-event evaluation and feedback" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <step.icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Essential",
              price: "$2,999",
              features: [
                "Event Planning",
                "Venue Selection",
                "Basic Decor",
                "Catering Coordination",
                "Day-of Coordination"
              ]
            },
            {
              title: "Premium",
              price: "$5,999",
              features: [
                "All Essential Features",
                "Custom Design & Styling",
                "Entertainment Booking",
                "Photography & Videography",
                "Full-Service Planning"
              ]
            },
            {
              title: "Luxury",
              price: "Custom",
              features: [
                "All Premium Features",
                "VIP Entertainment Options",
                "Luxury Vendor Network",
                "Dedicated Planning Team",
                "24/7 Concierge Service"
              ]
            }
          ].map((package_, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">{package_.title}</h3>
              <p className="text-3xl font-bold text-purple-500 mb-6">{package_.price}</p>
              <ul className="space-y-4 mb-8">
                {package_.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <Sparkles className="h-5 w-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-800 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The attention to detail was impressive. Our corporate event was a huge success!",
                name: "John Smith",
                role: "Marketing Director"
              },
              {
                text: "They transformed our vision into reality. The wedding was absolutely perfect!",
                name: "Emily Brown",
                role: "Happy Bride"
              },
              {
                text: "Professional team that delivers beyond expectations. Highly recommended!",
                name: "David Wilson",
                role: "Event Coordinator"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-purple-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Event?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to start planning your next event.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;