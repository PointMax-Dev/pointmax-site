"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ✅ Import icons for mobile menu

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Controls mobile menu visibility

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
      setIsOpen(false); // ✅ Close menu on mobile after clicking
    }
  };

  return (
    <nav className={`fixed top-0 w-full transition-all z-50 bg-white border-b border-gray-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="flex justify-between items-center px-8 h-16 max-w-6xl mx-auto">
        {/* ✅ Logo */}
        <Image src="/PointMax_Logo_Transparent.png" alt="PointMax Logo" width={180} height={60} />

        {/* ✅ Mobile Menu Button (Hidden on Desktop) */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ✅ Desktop Nav Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-black items-center">
          <li><button onClick={() => scrollToSection("about")} className="cursor-pointer">About</button></li>
          <li><button onClick={() => scrollToSection("faq")} className="cursor-pointer">FAQ</button></li>
          <li><button onClick={() => scrollToSection("download")} className="cursor-pointer">Download</button></li>
        </ul>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 space-y-4 text-lg font-medium text-black">
          <li><button onClick={() => scrollToSection("about")} className="cursor-pointer">About</button></li>
          <li><button onClick={() => scrollToSection("faq")} className="cursor-pointer">FAQ</button></li>
          <li><button onClick={() => scrollToSection("download")} className="cursor-pointer">Download</button></li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

