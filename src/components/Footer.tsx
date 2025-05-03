import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 to-black text-white py-10"> {/* Footer background and padding */}
      <div className="container mx-auto px-8"> {/* Increased padding for the container */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left Column */}
          <div className="text-center md:text-left md:px-16"> {/* Increased padding on the left */}
            <h3 className="text-lg font-semibold">
              Developed by Abhishek Yadav
            </h3>
          </div>
          
          {/* Center Column (Copyright) */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Copyright © {year} 
            </h3>
          </div>
          
          {/* Right Column (Social Links) */}
          <div className="flex justify-center md:justify-end space-x-6 md:px-16"> {/* Increased padding on the right */}
            <a
              href="https://github.com/abhiee1898"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://x.com/rao_abhi1898"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-yadav-6472a4114/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://www.instagram.com/_rao.abhi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition duration-300"
            >
              <AiFillInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
