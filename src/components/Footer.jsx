import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-ink text-cream overflow-hidden flex items-center justify-center text-center">
      {/* Subtle background texture/gradient */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #F3EFE6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-tighter mb-10"
        >
          Great Work <br/>
          <i className="text-accent italic">Starts Here.</i>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:arivuselvidgs@gmail.com" 
              className="px-10 py-5 bg-cream text-ink text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-line transition-colors duration-300 text-center"
            >
              Let's Connect
            </a>
            <a 
              href="https://arivuselvi1701.github.io/Assets/Arivuselvi_Resume.pdf" 
              target="_blank" rel="noreferrer"
              className="px-10 py-5 bg-transparent border border-cream/30 text-cream text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-cream/10 transition-colors duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
          <p className="text-cream/50 text-sm tracking-wide mt-2">arivuselvidgs@gmail.com</p>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full text-left md:text-center border-t border-cream/10 pt-12">
          <div>
            <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Location</div>
            <div className="font-serif text-xl">India</div>
          </div>
          <div>
            <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Focus</div>
            <div className="font-serif text-xl">Product Design</div>
          </div>
          <div>
            <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Experience</div>
            <div className="font-serif text-xl">1+ Years</div>
          </div>
          <div>
            <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Projects</div>
            <div className="font-serif text-xl">6+ Shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-cream pt-20 pb-10 px-6 md:px-12 border-t border-line">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight text-ink mb-6 block">ARIVU.</a>
            <p className="text-muted text-sm max-w-xs mx-auto md:mx-0 mb-8">
              A creative design studio focused on building digital experiences with purpose and precision.
            </p>
            
          </div>
          
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-ink/50 mb-6">Socials</h4>
            <ul className="space-y-3">
              <li><a href="https://linkedin.com/in/arivuselvi-g-m-aaa510221" target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="https://www.behance.net/arivuselvi1" target="_blank" rel="noreferrer" className="text-sm hover:text-accent transition-colors">Behance</a></li>
              <li><a href="mailto:arivuselvidgs@gmail.com" className="text-sm hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-ink/50 mb-6">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm hover:text-accent transition-colors">About</a></li>
              <li><a href="#works" className="text-sm hover:text-accent transition-colors">Works</a></li>
              <li><a href="#services" className="text-sm hover:text-accent transition-colors">Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-line text-xs text-muted">
          <p>© {new Date().getFullYear()} Arivuselvi GM. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with intent.</p>
        </div>
      </div>
    </footer>
  );
}
