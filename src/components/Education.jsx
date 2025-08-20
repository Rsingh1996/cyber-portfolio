import React from "react";
import { GraduationCap } from "lucide-react";

const Education = ({ education }) => (
  <section id="education" className="py-20 md:py-24 bg-slate-800">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-700 rounded-xl shadow-lg p-6 border border-slate-600"
          >
            <div className="flex items-center mb-2">
              <GraduationCap size={24} className="text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            </div>
            <p className="text-slate-300 mb-1">{edu.school}</p>
            <p className="text-sm text-slate-400">{edu.years}</p>
            {edu.gpa && (
              <p className="text-sm text-slate-400">GPA - {edu.gpa}</p>
            )}
            {edu.score && (
              <p className="text-sm text-slate-400">Score - {edu.score}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
