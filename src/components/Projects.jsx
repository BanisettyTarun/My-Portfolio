import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import cinescapeImg from '../assets/cinescape.png';
import imagifyImg from '../assets/Imagify.png';
import lmsImg from '../assets/lms.png';

const projects = [
  {
    title: 'CineScape',
    desc: 'A seamless platform for movie discovery and exploration.',
    stack: ['React', 'Redux', 'API Integration'],
    code: 'https://github.com/BanisettyTarun/CineScape',
    demo: 'https://cine-scape.vercel.app/',
    image: cinescapeImg,
  },
  {
    title: 'AI Image Generator SaaS',
    desc: 'A credit-based platform for AI-powered image generation.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Clipdrop AI'],
    code: 'https://github.com/BanisettyTarun/Imagify',
    demo: 'https://imagify-frontend-gku0.onrender.com/',
    image: imagifyImg,
  },
  {
    title: 'Learning Management System',
    desc: 'A platform for seamless course access and management.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    code: 'https://github.com/BanisettyTarun/LMS',
    demo: '', // Removed live link
    image: lmsImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }} 
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj, idx) => (
            <motion.div 
              key={proj.title} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: idx * 0.1 }} 
              className="rounded-2xl shadow p-4 md:p-6 flex flex-col justify-between border-2 border-gray-700 bg-gray-800/60 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-2xl group"
            >
              <div className="relative w-full mb-4 overflow-hidden rounded-xl">
                <img 
                  src={proj.image} 
                  alt={`${proj.title} project`} 
                  className="w-full h-32 md:h-40 object-cover rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2" 
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-100">{proj.title}</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-900 text-blue-300 rounded text-xs font-medium transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a 
                  href={proj.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200" 
                  title="GitHub"
                >
                  <FaGithub className="text-xl text-gray-200" />
                </a>
                {proj.demo && (
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-blue-900 hover:bg-blue-800 transition-colors duration-200" 
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-xl text-blue-300" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
