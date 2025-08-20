import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({
  activeSection,
  handleNavLinkClick,
  isHeaderScrolled,
  isMenuOpen,
  toggleMenu,
}) => (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHeaderScrolled ? "bg-slate-800 shadow-md" : "bg-transparent"
    }`}
  >
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-7xl">
      <a href="#home" className="text-2xl font-bold text-emerald-400">
        RK
      </a>
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            onClick={() => handleNavLinkClick("home")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "home"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavLinkClick("about")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "about"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavLinkClick("career")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "career"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            Career
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavLinkClick("education")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "education"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            Education
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavLinkClick("certifications")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "certifications"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            Certifications
          </a>
        </li>
        <li>
          <a
            onClick={() => handleNavLinkClick("contact")}
            className={`relative group font-medium cursor-pointer transition-colors ${
              activeSection === "contact"
                ? "text-emerald-400"
                : "text-slate-400 hover:text-emerald-400"
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  </header>
);

export default Header;
