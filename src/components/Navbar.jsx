import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Remove nav bar from case study page
  if (!isHome) return null;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#works' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Websites', href: '#websites' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] py-6 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#151515]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between md:justify-center items-center">
        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white/70 transition-colors">{link.name}</a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-white/70 transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#151515]/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-6 pt-4 pb-8 flex flex-col space-y-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-white/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
