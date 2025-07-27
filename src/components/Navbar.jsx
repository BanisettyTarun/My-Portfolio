import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import resumePDF from '../assets/22211A0539_Tarun.pdf';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Hobbies', id: 'hobbies' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_ITEMS.map(item => {
        const el = document.getElementById(item.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const idx = offsets.findIndex(offset => offset > 0);
      setActive(NAV_ITEMS[Math.max(0, idx - 1)].id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/60 backdrop-blur-xl shadow-md border-b border-gray-800/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shadow-md select-none hover:scale-105 transition-transform duration-300"
            aria-label="BT Logo"
          >
            Tarun
          </button>
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-2 py-1 font-medium transition-colors duration-200 rounded hover:text-blue-400 group ${active === item.id ? 'text-blue-400' : 'text-gray-200'}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={resumePDF}
            download
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors duration-200 font-semibold"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-200 hover:text-blue-400 transition-colors duration-200"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/40"
        >
          <div className="px-4 py-6 space-y-3">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  active === item.id 
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-400/20' 
                    : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <a
                href={resumePDF}
                download
                className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
