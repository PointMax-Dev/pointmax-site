"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -window.innerHeight / 14; // Adjust for centering
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition + offset, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full transition-all z-50 bg-white border-b border-gray-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="flex justify-between items-center px-8 h-16">
        <Image src="/PointMax_Logo_Transparent.png" alt="PointMax Logo" width={180} height={60} />
        <ul className="flex space-x-6 text-lg font-medium text-black items-center">
          <li><button onClick={() => scrollToSection("about")} className="cursor-pointer">About</button></li>
          <li><button onClick={() => scrollToSection("faq")} className="cursor-pointer">FAQ</button></li>
          <li><button onClick={() => scrollToSection("download")} className="cursor-pointer">Download</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

