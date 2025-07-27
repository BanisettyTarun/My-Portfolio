import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 bg-transparent text-gray-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 text-center mb-10">
          About Me
        </h2>
        <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-6 text-justify">
          <p>
            I'm a dedicated Full Stack Developer with a strong foundation in Java and Data Structures & Algorithms, and intermediate proficiency in Python. I enjoy building efficient, user-focused web applications using the MERN stack and solving real-world problems through code.
          </p>
          <p>
            My areas of interest include Full Stack Development, Database Management System, and Object-Oriented Programming.
            I’ve interned at Being Zero as a Software Developer and DSA Instructor, where I mentored students and created original coding challenges.
            I also worked remotely at Forage AI as a Data Annotation Intern, contributing to machine learning dataset quality.
          </p>
          <p>
            I’ve developed and deployed projects like a Movie Discovery Platform, a Learning Management System, and a SaaS-based AI Image Generator—each emphasizing performance and user experience.
          </p>
          <p>
            I’ve consistently excelled in coding competitions, securing 1st place in Battle of the Bytes, 3rd place in Tech Tussle (2024), 2nd place in Tech Tussle (2025), and 3rd place in the NextInTech Live Coding Competition. I’m actively seeking software development roles where I can contribute, collaborate, and grow.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
