import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove nav bar from case study page
  if (!isHome) return null;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#151515]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        {/* Centered Navigation */}
        <div className="flex items-center space-x-6 md:space-x-10 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white">
          <a href="#home" className="hover:text-white/70 transition-colors">Home</a>
          <a href="#works" className="hover:text-white/70 transition-colors">Work</a>
          <a href="#experience" className="hover:text-white/70 transition-colors">Experience</a>
          <a href="#about" className="hover:text-white/70 transition-colors">About</a>
          <a href="#websites" className="hover:text-white/70 transition-colors">Websites</a>
        </div>
      </div>
    </motion.nav>
  );
}
