import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20 gap-10">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-lg mt-2 text-gray-600">Feel free to reach out!</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 text-lg w-full md:w-auto items-center md:items-start">
          <a 
            href="mailto:myemail@gmail.com" 
            className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-blue-400" size={22} /> 
            <span className="break-all">Abhimessi.x@gmail.com</span>
          </a>

          <a 
            href="https://linkedin.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin className="text-blue-400" size={22} /> 
            linkedin.com/Abhishek
          </a>

          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub className="text-blue-400" size={22} /> 
            github.com/Abhishek
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
