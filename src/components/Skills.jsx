import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaGitAlt, FaVial, FaRegObjectGroup, FaCode, FaTools, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel } from 'react-icons/si';
import vsCodeLogo from '../assets/vs-code-logo.png';

const skills = [
  {
    category: 'Programming Language',
    items: [
      { name: 'Java', icon: <FaJava className="text-[#f89820]" size={48} /> },
      { name: 'Python', icon: <FaPython className="text-[#3776ab]" size={48} /> },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-[#e34c26]" size={48} /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572b6]" size={48} /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" size={48} /> },
    ],
  },
  {
    category: 'Frameworks / Libraries',
    items: [
      { name: 'React', icon: <FaReact className="text-[#61dafb]" size={48} /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38bdf8]" size={48} /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#3c873a]" size={48} /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-200" size={48} /> },
    ],
  },
  {
    category: 'Database Management',
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-[#00758f]" size={48} /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47a248]" size={48} /> },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'VS Code', icon: <img src={vsCodeLogo} alt="VS Code" className="w-12 h-12 object-contain" /> },
      { name: 'Git', icon: <FaGitAlt className="text-[#f05032]" size={48} /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-200" size={48} /> },
      { name: 'Postman', icon: <SiPostman className="text-[#ff6c37]" size={48} /> },
    ],
  },
  {
    category: 'Areas of Interest',
    items: [
      { name: 'Data Structures & Algorithms', icon: <FaCode className="text-blue-400" size={48} /> },
      { name: 'DBMS', icon: <FaDatabase className="text-green-400" size={48} /> },
      { name: 'OOP', icon: <FaRegObjectGroup className="text-purple-400" size={48} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((cat, catIndex) => (
            <motion.div 
              key={cat.category} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-2xl border-2 border-blue-400 shadow-lg p-8 bg-gray-800/60 transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-300 text-center border-b border-blue-400 pb-2">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {cat.items.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-200 text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 