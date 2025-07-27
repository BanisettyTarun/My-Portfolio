import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Being Zero',
    role: 'Intern | Software Developer and Instructor',
    period: 'June 2025– July 2025',
    location: 'Hyderabad, India',
    details: [
      'Mentored students across colleges in DSA, strengthening problem-solving and algorithmic skills.',
      'Created original coding problems for MentorPick, boosting platform content and engagement.',
    ],
  },
  {
    company: 'Forage AI',
    role: 'Intern | Data Annotation',
    period: 'Sep 2024– Jan 2025',
    location: 'Remote',
    details: [
      'Annotated images using LabelImg, creating precise bounding boxes for machine learning datasets.',
      'Labeled structural elements like headers, rows, and multi-line fields to enhance annotation accuracy',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400 text-center">Experience</h2>
        <div className="relative pl-6 md:pl-10">
          {/* Vertical timeline line */}
          <div className="absolute left-3.5 md:left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-gray-600"></div>

          {/* Experience cards */}
          <div className="space-y-10 md:space-y-14">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 md:top-4 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full border-4 border-gray-800 z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Card */}
                <div className="ml-6 md:ml-10 p-4 md:p-6 rounded-2xl border-2 border-gray-700 bg-gray-800/60 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col gap-3 md:gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="text-sm md:text-lg text-blue-300 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-2 text-xs md:text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {exp.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
