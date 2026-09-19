import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24"
        >
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-ink/50 mb-6">About the Designer</h2>
              <div className="aspect-[4/5] w-full max-w-sm overflow-hidden bg-line">
                <img 
                  src="/portfoliopicture.jpeg" 
                  alt="Arivuselvi GM" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            <div className="mt-8 border-t border-line pt-6">
              <h3 className="font-serif text-2xl font-medium">Arivuselvi GM</h3>
              <p className="text-sm text-muted mt-1">Lead Product Designer</p>
            </div>
          </div>

          <div className="md:col-span-7 flex items-center">
            <div className="max-w-2xl">
              <p className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-tight text-ink mb-10 text-balance">
                "I didn't start in design. I started in HR because I've always been drawn to solving people's problems."
              </p>
              
              <div className="space-y-6 text-lg text-muted font-light leading-relaxed max-w-xl">
                <p>
                  Understanding what frustrates people, what motivates them, and what makes their days easier — that was never just a job function for me. It was instinct. 
                </p>
                <p>
                  But there was always another side to me. Growing up, I'd lose myself in painting, decorating, arranging. I didn't just want things to look good. I wanted them to feel right. Today I get to solve people's problems through design every single day. It's the perfect collision of everything I care about.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
