import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Calendar, Users, MessageSquare, Building2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can make your next event extraordinary
          </p></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-gray-800 rounded-xl shadow-sm p-8 mb-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400">info@Event Sphere.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">123 Event Street, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-sm p-8 mb-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="/services" className="flex items-center text-gray-400 hover:text-purple-500">
                  <Calendar className="h-5 w-5 mr-2" />
                  Our Services
                </a>
                <a href="/about" className="flex items-center text-gray-400 hover:text-purple-500">
                  <Users className="h-5 w-5 mr-2" />
                  About Us
                </a>
                <a href="#faq" className="flex items-center text-gray-400 hover:text-purple-500">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  FAQ
                </a>
                <a href="#careers" className="flex items-center text-gray-400 hover:text-purple-500">
                  <Building2 className="h-5 w-5 mr-2" />
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-400 mb-1">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="conference">Conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-400 mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-400 mb-1">
                      Expected Guest Count
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-20000">$10,000 - $20,000</option>
                      <option value="20000+">$20,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How far in advance should I book your services?",
                a: "We recommend booking at least 3-6 months in advance for larger events, and 1-3 months for smaller events."
              },
              {
                q: "What is your pricing structure?",
                a: "Our pricing varies based on event type, size, and services required. We offer customized quotes after initial consultation."
              },
              {
                q: "Do you handle destination events?",
                a: "Yes, we have experience managing events worldwide and can accommodate destination event requests."
              },
              {
                q: "What is your cancellation policy?",
                a: "Our cancellation policy varies based on the event package and timing. Details are provided in the service agreement."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-gray-800 rounded-xl p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Our Location</h2>
      <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg">
        {/* Embed Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28932.273538754303!2d67.02715487431641!3d24.981958100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e584b891c3%3A0x29b2cbc198ba2dbd!2sAptech%20Computer%20Education%20North%20Karachi%20Center!5e0!3m2!1sen!2s!4v1737558441901!5m2!1sen!2s"
          width="100%" // Make it responsive
          height="400"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Contact;