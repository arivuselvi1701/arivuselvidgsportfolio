import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import ParticleText from './ParticleText';


const featuredProjects = [
  {
    title: 'SmartOpz',
    desc: "Configurable platform designed for any company's workflow, bridging complex data with clean UX.",
    link: '/work/smartopz',
    isExternal: false
  },
  {
    title: 'Decluttr',
    desc: 'Unclutter Your Head — the UX behind Decluttr',
    link: '/work/decluttr',
    isExternal: false
  },
  {
    title: 'Easigifting',
    desc: 'Designing a gifting experience that feels personal, without making it complicated.',
    link: '/work/easigifting',
    isExternal: false
  },
  {
    title: 'VYBE Platform',
    desc: 'An interactive music platform for social listening moments.',
    link: 'https://www.behance.net/gallery/244616895/VYBE-An-Interactive-Music-Experience-Platform',
    isExternal: true
  }
];

export default function Hero() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-center md:justify-between py-12 md:pt-32 px-8 md:px-16 text-white selection:bg-white selection:text-black">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/coverimage.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
      </div>

      {/* Top Massive Title - Particle Hover Effect */}
      <div className="relative z-10 w-full h-[120px] md:h-[400px] flex justify-center mb-16 md:-mt-20 md:mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
        >
          <ParticleText text="Arivuselvi" />
        </motion.div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-4">
        
        {/* Bottom Left: Role & Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            Product Designer
          </h2>
          <div className="flex flex-col items-center md:items-start text-[11px] md:text-xs font-semibold tracking-[0.15em] leading-relaxed text-white/80 uppercase">
            <span>Designed to Endure.</span>
            <span>Built to Function.</span>
            <span>Considered in Every Detail.</span>
          </div>
          
          <a href="https://arivuselvi1701.github.io/Assets/Arivuselvi_Resume.pdf" target="_blank" rel="noreferrer" className="mt-8 px-8 py-3.5 bg-white text-black hover:bg-white/90 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 w-fit shadow-lg shadow-black/20">
            Download Resume
          </a>

          <div className="mt-12 flex items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-3xl md:text-4xl font-medium">6+</span>
              <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60 mt-1">Projects</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-3xl md:text-4xl font-medium">1+</span>
              <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60 mt-1">Years Design</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-3xl md:text-4xl font-medium">50+</span>
              <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60 mt-1">Websites</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right: Project Slider Box */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex w-full md:w-[380px] bg-[#1a1515]/80 backdrop-blur-md border border-white/5 p-8 flex-col"
        >
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <div className="flex gap-4">
              <button onClick={prevProject} className="text-white/60 hover:text-white transition-colors text-lg leading-none">←</button>
              <button onClick={nextProject} className="text-white/60 hover:text-white transition-colors text-lg leading-none">→</button>
            </div>
            <div className="text-xs font-mono tracking-widest text-white/70">
              {String(currentProject + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}
            </div>
          </div>
          
          <div className="relative min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <h3 className="font-serif text-2xl font-medium text-white mb-2">{featuredProjects[currentProject].title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  {featuredProjects[currentProject].desc}
                </p>
                
                <div className="flex items-center gap-4">
                  {featuredProjects[currentProject].isExternal ? (
                    <a href={featuredProjects[currentProject].link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                      <span className="w-8 h-[1px] bg-white"></span>
                      View Work
                    </a>
                  ) : (
                    <Link to={featuredProjects[currentProject].link} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                      <span className="w-8 h-[1px] bg-white"></span>
                      View Case Study
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
