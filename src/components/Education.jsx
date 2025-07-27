import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

import schoolLogo from '../assets/school-logo.png';
import interLogo from '../assets/inter.jpeg';
import bvritLogo from '../assets/bvrit.webp';

const educationData = [
  {
    side: 'left',
    image: bvritLogo,
    degree: 'B.Tech',
    major: 'Computer Science and Engineering',
    institute: 'B V Raju Institute of Technology',
    year: '2022 – Present',
    result: 'CGPA: 9.46',
    location: 'Narsapur, Medak',
  },
  {
    side: 'right',
    image: interLogo,
    degree: 'Intermediate (HSC)',
    major: 'MPC',
    institute: 'Sri Chaitanya Junior College',
    year: '2020 – 2022',
    result: 'Percentage: 96.7%',
    location: 'Madinaguda, Hyderabad',
  },
  {
    side: 'left',
    image: schoolLogo,
    degree: 'SSC (10th Grade)',
    major: 'General',
    institute: 'Triveni Talent School',
    year: '2020',
    result: 'GPA: 10',
    location: 'Lingampally, Hyderabad',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-12 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-blue-400 text-center">Education</h2>

        <div className="relative">
          {/* Responsive vertical line */}
          <div className="absolute top-5 h-[96%] z-0 w-1 bg-gradient-to-b from-blue-400 to-gray-600 
                          left-5 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-14 sm:gap-20">
            {educationData.map((edu, idx) => {
              const isLeft = edu.side === 'left';

              return (
                <div
                  key={idx}
                  className={`relative w-full flex flex-col md:flex-row ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Responsive timeline dot */}
                  <div
                    className="absolute z-10 top-3 
                               left-5 md:left-1/2 md:transform md:-translate-x-1/2"
                  >
                    <div className="w-3.5 h-3.5 bg-blue-400 rounded-full border-4 border-gray-800"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isLeft ? 'md:pr-6' : 'md:pl-6'
                    }`}
                  >
                    <div
                      className={`flex items-start gap-4 max-w-sm sm:max-w-md w-full p-4 rounded-xl border border-gray-700 bg-gray-800/60 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] 
                      ${isLeft ? 'ml-auto md:ml-auto' : 'mr-auto md:mr-auto'}`}
                    >
                      <img
                        src={edu.image}
                        alt={edu.degree}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-600 flex-shrink-0"
                      />

                      <div className="flex flex-col text-left w-full">
                        <h3 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h3>
                        <p className="text-blue-300 text-sm font-medium">{edu.major}</p>
                        <p className="text-gray-200 font-semibold text-xs sm:text-sm mt-1">{edu.institute}</p>
                        <div className="text-xs text-gray-300 flex items-center gap-1 mt-1">
                          <FaCalendarAlt className="text-blue-400 mt-0.5" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="text-xs text-gray-300 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-blue-400 mt-0.5" />
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1 font-semibold">{edu.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
