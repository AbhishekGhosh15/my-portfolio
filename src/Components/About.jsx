import React from "react";

const About = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-8 flex justify-center border-t-2 border-black h-[120vh] md:h-screen items-center overflow-hidden">
      <div className="bg-gray-50 text-[#0f172a] rounded-2xl shadow-lg max-w-6xl w-full p-2 md:p-10 flex flex-col md:flex-row items-center gap-10 h-[100vh] lg:h-[75vh]">
        
        {/* Left Side - Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/cartoon-illustration-boy-running-with-kite-sky-flying-kite-customizable-cartoon-illustration_538213-128795.jpg?semt=ais_hybrid"
            alt="ABOUT"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-90 md:h-90 object-contain rounded-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[60vh] md:text-sm space-y-6 text-black text-center md:text-left">
          <h2 style={{ fontFamily: "Playfair Display" }} className="text-4xl font-bold">
            About
          </h2>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lg">➜</span> Frontend Developer
              </h3>
              <p className="text-[#0f172a] text-xs sm:text-sm">
                "Hi, I’m Abhishek, a passionate Frontend Developer who loves crafting beautiful and functional web experiences. I specialize in React.js, JavaScript, and modern CSS frameworks like Tailwind CSS. My goal is to transform creative ideas into interactive, user-friendly websites that not only look great but also perform seamlessly. When I’m not coding, I enjoy exploring new design trends and improving my problem-solving skills."
              </p>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lg">➜</span> Backend Developer
              </h3>
              <p className="text-[#0f172a] text-sm">
                "I’m also a Backend Developer passionate about building the engine that powers modern web applications. I specialize in Node.js, Express, and databases like MongoDB & MySQL, focusing on creating secure, efficient, and scalable APIs. Outside of coding, I love exploring new technologies and improving system architecture designs."
              </p>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lg">➜</span> Database Developer
              </h3>
              <p className="text-[#0f172a] text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero voluptas vel et!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
