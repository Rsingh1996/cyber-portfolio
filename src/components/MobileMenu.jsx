import React from "react";

const MobileMenu = ({ isMenuOpen, handleNavLinkClick }) => (
  <div
    className={`fixed inset-0 z-40 bg-slate-900/90 backdrop-blur-sm transition-transform duration-300 ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    } md:hidden`}
  >
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <a
        onClick={() => handleNavLinkClick("home")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        Home
      </a>
      <a
        onClick={() => handleNavLinkClick("about")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        About
      </a>
      <a
        onClick={() => handleNavLinkClick("career")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        Career
      </a>
      <a
        onClick={() => handleNavLinkClick("education")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        Education
      </a>
      <a
        onClick={() => handleNavLinkClick("certifications")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        Certifications
      </a>
      <a
        onClick={() => handleNavLinkClick("contact")}
        className="text-3xl font-semibold text-white hover:text-emerald-400 transition-colors"
      >
        Contact
      </a>
    </div>
  </div>
);

export default MobileMenu;
