import React from 'react';
import { Award, Heart, Target, Users, Star, Clock, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Event Sphere</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're passionate about creating memorable experiences through flawless event execution.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
              alt="Team Planning"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2015, Event Sphere has grown from a small team of passionate event planners to a full-service event management company trusted by clients worldwide.
            </p>
            <p className="text-gray-400">
              We believe that every event tells a unique story, and we're here to help you tell yours in the most memorable way possible.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To deliver exceptional event experiences that exceed expectations and create lasting memories through innovation, dedication, and attention to detail.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To be the leading event management company globally, known for creating transformative experiences and setting new standards in the industry.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-800 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in every detail of your event.</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-400">We're passionate about creating unforgettable experiences.</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">We bring creative solutions to every challenge.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Syed Ashhad",
                role: "CEO & Founder",
                image: "Public/Images/Ashhad.jfif"
              },
              {
                name: "Muhammad Uzair Khan",
                role: "Creative Director",
                image: "Public/Images/Uzair.jfif"
              },
              {
                name: "Muhammad Afnan Ahmed",
                role: "Operations Director",
                image: "Public/Images/Afnan.jfif"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                <p className="text-purple-500 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Industry Awards", number: "15+" },
              { icon: Users, title: "Happy Clients", number: "1000+" },
              { icon: Clock, title: "Years of Experience", number: "10+" },
              { icon: Shield, title: "Successful Events", number: "500+" }
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{achievement.number}</h3>
                <p className="text-gray-400">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-purple-600 rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating extraordinary events that leave lasting impressions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;