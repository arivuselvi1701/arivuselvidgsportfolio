import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'SmartOpz',
    desc: 'Designing a Configurable HRMS for Any Company\'s Workflow.',
    year: '2026',
    image: '/socover.jpg',
    link: '/work/smartopz',
    isInternal: true
  },
  {
    title: 'Decluttr',
    desc: 'Unclutter Your Head — the UX behind Decluttr',
    year: '2026',
    image: '/decluttercardnormal.svg',
    hoverImage: '/decluttercover.svg',
    link: '/work/decluttr',
    isInternal: true
  },
  {
    title: 'Easigifting',
    desc: 'Designing a gifting experience that feels personal, without making it complicated.',
    year: '2026',
    image: '/easigifting.jpg',
    link: '/work/easigifting',
    isInternal: true
  },
  {
    title: 'VYBE Platform',
    desc: 'An interactive music platform for social listening moments.',
    year: '2024',
    image: '/vybecoverimage.jpg',
    link: 'https://www.behance.net/gallery/244616895/VYBE-An-Interactive-Music-Experience-Platform'
  }
];

export default function Work() {
  return (
    <div id="works" className="bg-[#151212] flex flex-col">
      {/* Intro section for works */}
      <div className="py-32 px-6 md:px-12 text-center text-white">
        <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight text-white mb-4">
          Selected Works.
        </h2>
        <p className="text-white/60 max-w-md mx-auto text-sm md:text-base">
          Selected projects where design decisions were shaped by real user friction — not just aesthetics.
        </p>
      </div>

      {projects.map((project, index) => (
        <section 
          key={project.title} 
          className="relative min-h-screen py-16 md:py-24 w-full flex items-center justify-center overflow-hidden border-b border-white/5"
        >
          {/* Massive Background Text Parallax/Scroll effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <motion.h2 
              initial={{ x: 100 }}
              whileInView={{ x: -100 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
              className="font-serif text-[28vw] leading-none text-white/[0.03] whitespace-nowrap select-none"
            >
              {project.title}
            </motion.h2>
          </div>

          {project.isInternal ? (
            <Link 
              to={project.link} 
              className="relative z-10 group flex flex-col w-[85vw] md:w-[450px] md:hover:w-[900px] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Image Wrapper */}
              <div className="relative w-full h-[50vh] md:h-[550px] overflow-hidden bg-[#222]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${project.hoverImage ? 'group-hover:opacity-0' : ''}`} 
                />
                {project.hoverImage && (
                  <img 
                    src={project.hoverImage} 
                    alt={project.title + ' hover'} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 group-hover:scale-105" 
                  />
                )}
                
                {/* Hover View More Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 border border-white/40 px-6 py-3 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm">
                    View More
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start mt-6 w-full text-white">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-medium mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 max-w-[280px] leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="text-white/40 text-xs font-mono tracking-widest uppercase flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  {project.year}
                </div>
              </div>
            </Link>
          ) : (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="relative z-10 group flex flex-col w-[85vw] md:w-[450px] md:hover:w-[900px] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Image Wrapper */}
              <div className="relative w-full h-[50vh] md:h-[550px] overflow-hidden bg-[#222]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${project.hoverImage ? 'group-hover:opacity-0' : ''}`} 
                />
                {project.hoverImage && (
                  <img 
                    src={project.hoverImage} 
                    alt={project.title + ' hover'} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 group-hover:opacity-100 group-hover:scale-105" 
                  />
                )}
                
                {/* Hover View More Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-500">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 border border-white/40 px-6 py-3 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm">
                    View More
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start mt-6 w-full text-white">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-medium mb-2 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 max-w-[280px] leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="text-white/40 text-xs font-mono tracking-widest uppercase flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/20"></span>
                  {project.year}
                </div>
              </div>
            </a>
          )}

        </section>
      ))}
    </div>
  );
}
