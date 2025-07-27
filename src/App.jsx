import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
      <Navbar />

      {/* Background with Orbs and Grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Brighter Glowing Orbs */}
        <div className="orb orb-blue" />
        <div className="orb orb-purple" />

        {/* Brighter Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <main className="relative pt-20 min-h-screen transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Hobbies />
        <Contact />
        <Footer />
      </main>

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.6; /* Increased from 0.4 to 0.6 */
          animation: floatOrb 12s ease-in-out infinite;
        }

        .orb-blue {
          width: 240px;
          height: 240px;
          top: 20%;
          left: 8%;
          background: rgba(59, 130, 246, 0.7); /* Increased from 0.5 to 0.7 */
        }

        .orb-purple {
          width: 200px;
          height: 200px;
          top: 65%;
          left: 65%;
          background: rgba(168, 85, 247, 0.6); /* Increased from 0.4 to 0.6 */
          animation-delay: 3s;
        }
      `}</style>
    </>
  );
}

export default App;
