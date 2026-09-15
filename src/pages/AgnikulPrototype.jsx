import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AgnikulPrototype() {
  const containerRef = useRef(null);
  
  // Scroll animations for Meet Agnibaan section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rocket sliding up animation based on scroll
  const rocketY = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
  const rocketOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white/30">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="text-2xl font-bold tracking-wider">AGNIKUL</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/80">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Engineering</a>
          <a href="#" className="hover:text-white transition-colors">Agnibaan</a>
          <a href="#" className="hover:text-white transition-colors">SorTed</a>
          <a href="#" className="hover:text-white transition-colors">Team</a>
          <a href="#" className="hover:text-white transition-colors">News</a>
          <a href="#" className="hover:text-white transition-colors">Launch</a>
        </div>
        <button className="border border-white/40 rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
          Book a Launch
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* We use a generic space background here as a placeholder for the hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Earth from space" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-3xl mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[5rem] leading-[1.1] font-medium tracking-tight mb-6"
          >
            India's Path to Space Reinvented
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-white/90 mb-10"
          >
            Modular. 3D Printed. Made at IIT Madras
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-gray-200 transition-colors">
              Watch the launch
            </button>
            <button className="border border-white/40 rounded-full px-8 py-4 font-medium hover:bg-white/10 transition-colors">
              Explore our rocket
            </button>
          </motion.div>
        </div>
      </section>

      {/* Meet Agnibaan Section with Scroll Animation */}
      <section ref={containerRef} className="relative min-h-screen bg-[#050505] py-32 px-8 md:px-20 overflow-hidden flex flex-col items-center">
        <div className="text-center z-10 relative mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[4rem] font-medium tracking-tight mb-4"
          >
            Unlocking Space
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60"
          >
            Our Integrated Approach to Rocket Manufacturing
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl z-10 relative">
          {[
            { title: "Integrated Design", desc: "Revolutionary single-piece construction", img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop" },
            { title: "Modular Design", desc: "Customizable payload configurations", img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop" },
            { title: "Vertical Integration", desc: "End-to-end manufacturing control", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop" },
            { title: "Rapid Iteration", desc: "Fast prototyping and testing cycle", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Animated Rocket */}
        <motion.div 
          style={{ y: rocketY, opacity: rocketOpacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
        >
          {/* Using a placeholder rocket shape. To make this perfect, drop a transparent rocket PNG here! */}
          <div className="relative w-32 h-[600px] flex justify-center">
            <div className="w-12 h-full bg-gradient-to-t from-gray-800 via-gray-300 to-white rounded-t-[100px] shadow-[0_0_50px_rgba(255,255,255,0.3)] flex flex-col items-center pt-8">
               <div className="w-4 h-16 bg-red-500 rounded-full opacity-80"></div>
            </div>
            {/* Flames */}
            <div className="absolute -bottom-20 w-16 h-32 bg-gradient-to-t from-transparent via-orange-500 to-yellow-200 blur-md rounded-b-full"></div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer spacer */}
      <section className="h-[50vh] bg-[#020202] flex items-center justify-center">
        <p className="text-white/30 font-mono text-sm tracking-widest uppercase">Scroll back up to see the rocket animation</p>
      </section>
    </div>
  );
}
