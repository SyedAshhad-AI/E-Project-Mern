import React from 'react';
import { Calendar, Users, Trophy, ArrowRight, Star, Clock, Shield, Sparkles, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Create Unforgettable Events</h1>
              <p className="text-xl mb-8 text-gray-300">Transform your vision into reality with our comprehensive event management solutions.</p>
              <Link 
                to="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We bring expertise, creativity, and precision to every event we manage.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
              <Calendar className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Expert Planning</h3>
              <p className="text-gray-400">Comprehensive event planning and management services tailored to your needs.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
              <Users className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Dedicated Team</h3>
              <p className="text-gray-400">Professional team committed to making your event a remarkable success.</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300">
              <Trophy className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Proven Success</h3>
              <p className="text-gray-400">Track record of delivering exceptional events that exceed expectations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover our range of professional event management services.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Premium Events", desc: "Luxury event planning and execution" },
              { icon: Clock, title: "Timely Delivery", desc: "Punctual and efficient event management" },
              { icon: Shield, title: "Quality Assured", desc: "High standards in every detail" },
              { icon: Sparkles, title: "Creative Design", desc: "Unique and innovative event concepts" },
              { icon: Target, title: "Goal Oriented", desc: "Focused on achieving your objectives" },
              { icon: Heart, title: "Passionate Team", desc: "Dedicated to your event's success" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition duration-300">
                <item.icon className="h-10 w-10 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">What our clients say about their experience with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Corporate Client",
                text: "The team's attention to detail and professionalism made our company event a huge success."
              },
              {
                name: "Sarah Johnson",
                role: "Wedding Client",
                text: "They turned our dream wedding into reality. Every detail was perfect and stress-free."
              },
              {
                name: "Michael Brown",
                role: "Conference Organizer",
                text: "Exceptional service and execution. Our conference was flawless thanks to their expertise."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-purple-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Events Completed" },
              { number: "50+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-purple-500 mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Event?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to start planning your next event.
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;