import React from "react";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import BubbleBackground from "./BubbleBackground";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { icon: <FaCss3Alt size={45} className="text-blue-500" /> },
    { icon: <SiJavascript size={45} className="text-yellow-400" /> },
    { icon: <FaReact size={45} className="text-sky-400" /> },
    { icon: <SiMongodb size={45} className="text-green-500" /> },
    { icon: <SiNodedotjs size={45} className="text-green-500" /> },
    { icon: <SiExpress size={45} className="text-black" /> },
  ];

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-black overflow-hidden px-6">
      {/* Background */}
      <BubbleBackground />

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-20 uppercase border-b-4 border-blue-400 pb-3 text-blue-400 z-10 text-center">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="z-10 w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-7 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
