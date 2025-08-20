import React from "react";
import { ShieldCheck, Layers, Code } from "lucide-react";

const About = ({ summary, skills, tools, codingLanguages }) => (
  <section id="about" className="py-20 md:py-24 bg-slate-800">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
        About Me
      </h2>
      <div className="bg-slate-700 rounded-xl shadow-lg p-8 border border-slate-600">
        <p className="text-lg text-slate-300 mb-6">{summary}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Core Competencies
            </h3>
            <ul className="space-y-2 text-slate-400">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <ShieldCheck size={18} className="text-emerald-400 mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:border-l md:border-slate-600 md:pl-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Tools & Languages
            </h3>
            <ul className="space-y-2 text-slate-400">
              {tools.map((tool, index) => (
                <li key={index} className="flex items-center">
                  <Layers size={18} className="text-emerald-400 mr-2" />
                  <span>{tool}</span>
                </li>
              ))}
              {codingLanguages.map((lang, index) => (
                <li key={index} className="flex items-center">
                  <Code size={18} className="text-emerald-400 mr-2" />
                  <span>{lang}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
