import React from "react";

const Hero = ({ name, title }) => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-screen py-16 text-center"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
      Hello, I'm <span className="text-emerald-400">{name}</span>
    </h1>
    <p className="text-lg sm:text-xl text-slate-400 mb-6">{title}</p>
    <div className="flex space-x-4">
      <a
        href="mailto:revakathuria6@gmail.com"
        className="bg-emerald-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-emerald-600"
      >
        Contact Me
      </a>
      <a
        href="https://linkedin.com/in/Reva Kathuria"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-700 text-slate-300 font-semibold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-slate-600"
      >
        LinkedIn
      </a>
    </div>
  </section>
);

export default Hero;
