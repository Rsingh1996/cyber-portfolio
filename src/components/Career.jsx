import React from "react";
import { MapPin, Calendar } from "lucide-react";

const Career = ({ experience }) => (
  <section id="career" className="py-20 md:py-24">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl font-bold text-slate-200 mb-8 text-center">
        Career
      </h2>
      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.id}
            className="bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-700"
          >
            <div className="flex flex-col md:flex-row md:items-start mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  {job.role}
                </h3>
                <p className="text-lg text-slate-400">{job.company}</p>
              </div>
              <div className="md:text-right mt-2 md:mt-0">
                <p className="text-sm text-slate-500 flex items-center mb-1 md:justify-end">
                  <Calendar size={14} className="mr-1" /> {job.duration}
                </p>
                <p className="text-sm text-slate-500 flex items-center md:justify-end">
                  <MapPin size={14} className="mr-1" /> {job.location}
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              {job.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Career;
