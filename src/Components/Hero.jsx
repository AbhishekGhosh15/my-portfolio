import React from "react";
import profile from "../assets/Developer boy.png"; // adjust path if needed

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between  h-[65vh] sm:h-[75vh] md:h-screen bg-gray-50 px-6 sm:px-12 md:px-40 overflow-hidden">
      {/* Left Content */}
      <div className="z-10 text-center lg:text-left mt-10 lg:mt-0 max-w-xl">
        <p
          style={{ fontFamily: "Barlow Semi Condensed" }}
          className="uppercase font-medium text-gray-500 tracking-wide mb-4 sm:mb-6 lg:mb-15"
        >
          Hello, my name is
        </p>
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
        >
          Abhishek
        </h1>
        <h2
          style={{ fontFamily: "Playfair Display" }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold opacity-70 text-gray-600 mt-3"
        >
          Web Developer
        </h2>

        {/* Contact */}
        <div className="mt-6 sm:mt-10 lg:mt-20 space-y-2 text-base sm:text-lg lg:text-xl">
          <p className="flex justify-center lg:justify-start items-center gap-2 text-gray-700">
            📧 Abhimessi.x@gmail.com
          </p>
          <p className="flex justify-center lg:justify-start items-center gap-2 text-gray-700">
            📞 +91 6307672763
          </p>
        </div>
      </div>

      {/* Right Image / Gradient */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2">
        {/* Gradient background */}
        <div className="absolute -left-10 lg:-left-15 -top-210 w-[1500px] h-[1500px] bg-gradient-to-tr from-[#44669251] to-white rounded-full"></div>
        
        {/* Profile Image */}
        <div className="relative h-[150px] md:top-3 md:right-8 w-[150px] sm:h-[300px] sm:w-[300px] lg:h-[530px] lg:w-[530px] rounded-full bg-[#202A2C] overflow-hidden shadow-2xl">
          <img
            src={profile}
            alt="Profile"
            className="h-full w-auto object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
