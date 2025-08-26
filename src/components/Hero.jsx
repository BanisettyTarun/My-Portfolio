import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { DownloadCloud } from 'lucide-react';
import profilePic from '../assets/Original.JPG';
import resumePDF from '../assets/Banisetty_Tarun_Resume.pdf';

export default function Hero() {
  return (
    <section
      id="home"
      className="font-grotesk flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 md:px-8 lg:px-16 transition-colors duration-300 -mt-16"
    >
      <div className="flex-1 flex flex-col gap-6 z-10 text-center lg:text-left order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          Banisetty Tarun
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium"
        >
          MERN Stack Developer | DSA Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base md:text-lg text-gray-400 leading-relaxed hidden md:block"
        >
          <p className="mb-3 text-justify">
            I'm a Full Stack Developer with expertise in the MERN stack and a strong foundation in Java and DSA.
            I love building clean, scalable web applications and solving algorithmic challenges.
            Actively seeking software development roles to grow and contribute to impactful projects.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a
              href={resumePDF}
              download
              className="relative px-6 py-3 rounded-lg font-semibold border-2 border-blue-400 text-white overflow-hidden group transition-all duration-500 bg-transparent hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <DownloadCloud
                  className="text-2xl"
                  style={{ animation: 'bounceSlow 2s infinite ease-in-out' }}
                />
                Download Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-600 transition-transform duration-500 transform scale-y-0 group-hover:scale-y-100 origin-bottom opacity-70 group-hover:opacity-100 z-0 rounded-lg"></span>
            </a>

            <div className="flex gap-8 mt-2 sm:mt-0">
              <a href="https://github.com/BanisettyTarun" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/banisetty-tarun/" target="_blank" rel="noopener noreferrer" className="text-4xl text-blue-400 hover:text-white transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
              <a href="https://x.com/TarunBanisetty" target="_blank" rel="noopener noreferrer" className="text-4xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"><FaXTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center mb-8 lg:mb-0 mt-20 lg:mt-0 order-1 lg:order-2"
      >
        <img
          src={profilePic}
          alt="Banisetty Tarun profile"
          className="w-60 h-60 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-200 shadow-lg"
        />
      </motion.div>

      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
