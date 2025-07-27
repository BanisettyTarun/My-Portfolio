import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import nptelJavaImg from '../assets/nptel-java.png';
import nptelPythonImg from '../assets/nptel-python.png';
import oracleSqlImg from '../assets/oracle-sql.png';
import nptelSoftSkillsImg from '../assets/nptel-soft-skills.png';
import gfg160Img from '../assets/gfg-160.png';

const certifications = [
  {
    title: 'Programming in Java - NPTEL',
    image: nptelJavaImg,
    link: 'https://drive.google.com/file/d/16oc6wbLDG9NGqQHq5m7OCLH4FkMM6C27/view?usp=sharing',
  },
  {
    title: 'Programming, DSA using Python - NPTEL',
    image: nptelPythonImg,
    link: 'https://drive.google.com/file/d/1362d_q1b6Kt6MSpAJKTqv6q8SDH0Xe06/view?usp=sharing',
  },
  {
    title: 'Database Programming with SQL - Oracle',
    image: oracleSqlImg,
    link: 'https://drive.google.com/file/d/1uXB7ez-A50qbpIP4v7SYeuD8ds_XxQe3/view?usp=sharing',
  },
  {
    title: 'Soft Skills - NPTEL',
    image: nptelSoftSkillsImg,
    link: 'https://drive.google.com/file/d/1S81xRY0Nt0Z-wy4nbh-mv438o2H_2teq/view?usp=sharing',
  },
  {
    title: '160 Days of Problem Solving - GFG',
    image: gfg160Img,
    link: 'https://drive.google.com/file/d/1F53fWRlAMZL1uqjxV_zi6Zfjpkxe17pq/view?usp=sharing',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4 md:px-16 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400 text-center">Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl border-2 border-gray-700 bg-gray-800/60 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative w-full mb-4 overflow-hidden rounded-xl">
                <img
                  src={cert.image}
                  alt="Certificate"
                  className="w-full h-40 object-cover rounded-xl shadow-lg border border-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 text-center mb-6">{cert.title}</h3>
              <div className="absolute bottom-4 right-4 text-blue-400 hover:text-white transition-transform duration-300 group-hover:scale-110">
                <FaExternalLinkAlt size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
