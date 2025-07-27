import React from 'react';
import { motion } from 'framer-motion';
import battleOfBytesImg from '../assets/battle-of-the-bytes.jpg';
import techTussleImg from '../assets/tech-tussle-1.jpeg';
import nextInTechImg from '../assets/next-in-tech.png';
import nptelPythonImg from '../assets/nptel-python.png';
import nptelJavaImg from '../assets/nptel-java.png';

const achievements = [
  { title: '1st place – Battle of the Bytes coding contest', image: battleOfBytesImg },
  { title: '3rd place – Tech Tussle coding contest', image: techTussleImg },
  { title: '3rd place - NextInTech coding contest', image: nextInTechImg },
  { title: 'Top 1% in NPTEL DSA using Python (91% - Gold)', image: nptelPythonImg },
  { title: 'Top 2% in NPTEL DSA using Java (79% - Silver)', image: nptelJavaImg },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400 text-center">Achievements</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border-2 border-gray-700 bg-gray-800/60 p-6 text-center hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative w-full mb-4 overflow-hidden rounded-xl">
                <img
                  src={a.image}
                  alt="Achievement"
                  className="w-full h-40 object-cover rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-100">{a.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
