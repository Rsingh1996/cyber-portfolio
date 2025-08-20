import React from "react";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 md:py-24 bg-slate-800">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
        Get In Touch
      </h2>
      <div className="bg-slate-700 rounded-xl shadow-lg p-8 border border-slate-600">
        <p className="text-lg text-slate-300 mb-8 text-center max-w-2xl mx-auto">
          I am currently open to new opportunities. Please feel free to reach
          out to me via email or connect on LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:revakathuria6@gmail.com"
            className="group text-slate-300 hover:text-emerald-400 transition-colors flex items-center"
          >
            <Mail size={24} className="mr-2" />
            <span className="group-hover:text-emerald-400 transition-colors">
              Email
            </span>
          </a>
          <a
            href="https://linkedin.com/in/Reva Kathuria"
            className="group text-slate-300 hover:text-emerald-400 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} className="mr-2" />
            <span className="group-hover:text-emerald-400 transition-colors">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
