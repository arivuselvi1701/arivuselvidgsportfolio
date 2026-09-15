import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    date: '03/2025 – PRESENT',
    title: 'Product Designer',
    company: 'Grey Feathers',
    badge: 'CURRENT',
    bullets: [
      'Skilled in both manual product design using components, variables, and design systems, as well as AI-powered design tools for faster workflows — while always keeping user experience, usability, and design consistency as the top priority.',
      'Owned complete end-to-end UI design lifecycle across multiple client products — from client discovery and user flow design through wireframing, high-fidelity UI, and developer handoff.',
      'Built and maintained scalable design systems in Figma, including components, typography, and color systems, helping improve UI production efficiency across projects.',
      'Improved design-to-development accuracy by establishing a structured Figma-to-developer handoff process with annotated specifications and component documentation.',
      'Conducted iterative design reviews directly with clients, ensuring quick feedback incorporation and smooth design iteration cycles.',
      'Collaborated closely with developers throughout the build phase — clarifying design intent, resolving implementation queries, and ensuring pixel-accurate delivery until project completion.',
      'Integrated AI-assisted design tools including Claude Code, Antigravity, codex, framer, UXmagic.ai, Lovable and Figma Make for ideation and rapid prototyping, reducing ideation-to-wireframe time from 2 days to under 4 hours.',
      'Ensured accessibility, responsive design, and visual consistency across web and mobile platforms.'
    ]
  },
  {
    date: '07/2024 – 02/2025',
    title: 'Google UX Design Certificate',
    company: 'Google / Coursera'
  },
  {
    date: '07/2023 – 07/2024',
    title: 'Author Onboarding Specialist',
    company: 'GUVI GEEK Network'
  },
  {
    date: '07/2022 – 04/2023',
    title: 'Human Resource Intern',
    company: 'ZOHO Corporation'
  }
];

export default function Process() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Title Area */}
        <div className="mb-24">
          <h2 className="font-sans text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight font-medium">
            Where I've<br />worked.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-2 md:ml-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16 pt-2 pb-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 bg-accent rounded-full group-hover:shadow-[0_0_0_6px_rgba(138,154,154,0.15)] transition-all duration-300"></div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12">
                
                {/* Left Col: Meta Info */}
                <div className="flex flex-col items-start mt-1.5">
                  <span className="text-accent text-[11px] font-semibold tracking-[0.15em] mb-3 uppercase">
                    {exp.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="text-white/50 text-sm md:text-base">
                    {exp.company}
                  </span>
                  
                  {exp.badge && (
                    <span className="mt-5 px-3 py-1 border border-accent/30 text-accent/90 text-[10px] uppercase tracking-widest font-semibold rounded bg-accent/10">
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Right Col: Bullets */}
                {exp.bullets && (
                  <div className="flex flex-col space-y-5 text-white/70 text-sm md:text-[15px] leading-relaxed">
                    {exp.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start group/bullet hover:text-white transition-colors duration-300">
                        <span className="text-accent mr-4 mt-0.5 shrink-0 transition-transform duration-300 group-hover/bullet:translate-x-1">—</span>
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Border Line (skip on last item) */}
              {index !== experiences.length - 1 && (
                <div className="absolute bottom-0 left-8 md:left-16 right-0 border-b border-white/10"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
