import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">Event Sphere</span>
            </NavLink>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-500 ${isActive ? 'text-purple-500 font-semibold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-500 ${isActive ? 'text-purple-500 font-semibold' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-500 ${isActive ? 'text-purple-500 font-semibold' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 hover:text-purple-500 ${isActive ? 'text-purple-500 font-semibold' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;