import React from "react";
import { Star } from "lucide-react";

const About = () => {

  const points = [
    "Full Stack MERN Developer",
    "2+ years of experience building web apps",
    "Strong understanding of REST APIs",
    "UI/UX enthusiast with a love for design",
    "Proficient in Git, GitHub, and deployment",
  ];


  return (
    <section className="bg-[#0f172a] text-white py-16 px-8 flex justify-center border-t-2 border-black h-[100vh] md:h-screen items-center overflow-hidden">
      <div className="bg-gray-50 text-[#0f172a] rounded-2xl shadow-lg max-w-6xl w-full p-2 md:p-10 flex flex-col md:flex-row items-center md:gap-10 h-[85vh] lg:h-[75vh]">

        {/* Left Side - Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/cartoon-illustration-boy-running-with-kite-sky-flying-kite-customizable-cartoon-illustration_538213-128795.jpg?semt=ais_hybrid"
            alt="ABOUT"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-90 md:h-90 object-contain rounded-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[60vh] md:text-sm space-y-6  text-black text-center md:text-left">
          <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
            <div className="max-w-3xl mx-auto">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent mb-4 text-center md:text-left">
                About Me
              </h2>

              {/* Paragraph */}
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-center md:text-left ">
                I’m a creative and passionate <strong>Full Stack Developer</strong> focused on
                building responsive, performant, and accessible web applications using the{" "}
                <strong>MERN stack</strong>.
              </p>

              {/* Points */}
              <ul className="space-y-4">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base md:text-lg"
                  >
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
