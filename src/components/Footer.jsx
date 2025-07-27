import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import leetcodeIcon from '../assets/leetcode.png';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-500 mt-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <span className="text-gray-400 text-sm">
          © 2025 Banisetty Tarun | Built with <span className="text-red-500">❤️</span> using React & Tailwind
        </span>
        <div className="flex gap-4">
          <a href="https://github.com/BanisettyTarun" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 text-white text-xl transition-colors duration-300 shadow-md">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/banisetty-tarun/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xl transition-colors duration-300 shadow-md">
            <FaLinkedin />
          </a>
          <a href="https://x.com/TarunBanisetty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 text-white text-xl transition-colors duration-300 shadow-md">
            <FaXTwitter />
          </a>
          <a href="https://leetcode.com/u/banisettytarun_539_cse_bvrit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-500 text-white text-xl transition-colors duration-300 shadow-md">
            <img src={leetcodeIcon} alt="LeetCode" className="w-6 h-6 object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
}
