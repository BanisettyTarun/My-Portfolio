import React from 'react';
import { motion } from 'framer-motion';
import { FaChess, FaMusic } from 'react-icons/fa';

const hobbies = [
  {
    name: 'Chess',
    icon: <FaChess className="text-6xl text-amber-400" />,
    description: 'Strategic thinking and problem-solving through the game of kings.',
  },
  {
    name: 'Listening to Music',
    icon: <FaMusic className="text-6xl text-purple-400" />,
    description: 'Finding inspiration and relaxation through various genres of music.',
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400 text-center">Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border-2 border-gray-700 bg-gray-800/60 p-8 text-center hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                aria-label={hobby.name}
              >
                {hobby.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{hobby.name}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
