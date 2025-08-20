import React from "react";
import { Award } from "lucide-react";

const Certifications = ({ certifications }) => (
  <section id="certifications" className="py-20 md:py-24">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
        Certifications
      </h2>
      <div className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700">
        <ul className="space-y-4 text-slate-300">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center">
              <Award size={20} className="text-emerald-400 mr-3" />
              <span className="text-lg">{cert.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Certifications;
