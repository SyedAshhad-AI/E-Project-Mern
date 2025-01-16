import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaTiktok,
    FaPatreon,
  } from "react-icons/fa";
import { Link } from "react-router-dom";
const TeamMemberCard = () => {
  return (
    <div className="text-white min-h-screen flex justify-center items-center p-4 ">

      <div className="flex flex-col md:flex-row rounded-lg  overflow-hidden 2xl:w-3/5">
        <div className="md:w-1/2">
          <img
            src="/Images/team-member.jpg"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col">
          <h1 className="text-6xl font-bold mb-2">Elizabeth Riley</h1>
          <h2 className="text-gray-400 text-lg mb-6">CEO, Founder</h2>
          <p className="mb-6">
            Elizabeth Riley isn't your average CEO. Sure, she navigates
            boardrooms with the grace of a ballerina and wields spreadsheets
            like a seasoned swordsman.
          </p>
          <p className="mb-6 text-gray-400">
            But beneath the sharp suits and confident smile lies a heart that
            beats in rhythms of pixels and code. Elizabeth is the spark that
            ignited Bringer, the creative digital agency that sets imagination
            ablaze.
          </p>
          <p className="mb-6 text-gray-400">
            Her journey began not in corporate towers, but on dusty attic
            floors. As a child, Elizabeth devoured fantasy novels, each page a
            portal to fantastical worlds she yearned to bring to life. Code
            became her paintbrush, the internet her canvas. While others saw
            algorithms and equations, Elizabeth saw stories waiting to be told,
            experiences waiting to be crafted.
          </p>

          {/* Contact Info */}
          <div className="mb-6">
            <p>eriley.bringer@example.com</p>
            <p>+1 (234) 555-67-89</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl">
            <Link to="#" className="hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link to="#" className="hover:text-pink-500">
              <FaInstagram />
            </Link>
            <Link to="#" className="hover:text-gray-500">
              <FaTwitter />
            </Link>
            <Link to="#" className="hover:text-red-500">
              <FaPatreon />
            </Link>
          </div>
        </div>
      </div>

        

    </div>
  );
};

export default TeamMemberCard;
