import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // if at top of page → home
      if (window.scrollY < window.innerHeight - 100) {
        setIsHome(true);
      } else {
        setIsHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-[9999] w-full h-[9vh] flex justify-between items-center px-6 sm:px-20 md:px-40 transition-all duration-300 ${
        isHome ? "bg-transparent text-black" : "bg-white text-black shadow-md"
      }`}
    >
      {/* Left Section */}
      <div className="flex gap-2 items-center">
        <img
          src="src/assets/vecteezy_easy-to-use-hand-finger-3d-pixel-icon-unique-style-emoji_47424818.png"
          alt="Logo"
          className="h-[5vh] w-auto"
        />
        <h1
          style={{ fontFamily: "Barlow Semi Condensed" }}
          className="text-2xl font-semibold"
        >
          Abhi
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul
        style={{ fontFamily: "Barlow Semi Condensed" }}
        className="hidden md:flex gap-10 text-[1.008em] items-center font-medium"
      >
        <li>
          <a
            href="#home"
            className="relative py-2 rounded overflow-hidden group text-blue-400"
          >
            Home
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative py-2 rounded overflow-hidden group"
          >
            About
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative py-2 rounded overflow-hidden group"
          >
            Skills
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="relative py-2 rounded overflow-hidden group"
          >
            Projects
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative py-2 rounded overflow-hidden group"
          >
            Contact
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-[9vh] left-0 w-full bg-gray-200 flex flex-col items-center gap-6 py-6 md:hidden font-semibold shadow-md">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
