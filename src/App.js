import React, { useState, useEffect } from "react";
import { portfolioData } from "./data/portfolioData";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = [
      "home",
      "about",
      "career",
      "education",
      "certifications",
      "contact",
    ];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed">
      <Header
        activeSection={activeSection}
        handleNavLinkClick={handleNavLinkClick}
        isHeaderScrolled={isHeaderScrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleNavLinkClick={handleNavLinkClick}
      />
      <main>
        <Hero name={portfolioData.name} title={portfolioData.title} />
        <About
          summary={portfolioData.summary}
          skills={portfolioData.skills}
          tools={portfolioData.tools}
          codingLanguages={portfolioData.codingLanguages}
        />
        <Career experience={portfolioData.experience} />
        <Education education={portfolioData.education} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact />
      </main>
    </div>
  );
}
