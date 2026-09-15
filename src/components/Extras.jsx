import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { PenTool, Layout, Code2, Sparkles, Wand2, Hexagon, Layers } from 'lucide-react';

export function Logos() {
  const icons = {
    claude: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M 8.5 4 L 2 20 M 15.5 4 L 22 20 M 5 14 L 19 14" /></svg>,
    antigravity: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22Z"/></svg>,
    codex: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    framer: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M5 2h14v7H12z"/><path d="M5 9h7l7 7H5z"/><path d="M5 16h7v7l-7-7z"/></svg>,
    figma: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/><path d="M8.5 16H12v4.5a3.5 3.5 0 1 1-3.5-3.5z"/></svg>,
    lovable: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    uxmagic: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>,
    ai: <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  };

  const items = [
    { text: 'Claude Code', icon: icons.claude },
    { text: 'Antigravity', icon: icons.antigravity },
    { text: 'Codex', icon: icons.codex },
    { text: 'Framer', icon: icons.framer },
    { text: 'UXmagic.ai', icon: icons.uxmagic },
    { text: 'Lovable', icon: icons.lovable },
    { text: 'Figma Make', icon: icons.figma }
  ];

  return (
    <div className="py-12 bg-cream overflow-hidden border-b border-line">
      <div className="flex w-[300%] animate-marquee opacity-60">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex-1 flex justify-center items-center gap-4 font-serif text-2xl md:text-3xl font-medium px-8 whitespace-nowrap text-ink">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      `}</style>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-cream">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-ink/50 mb-12">Client Words</h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-tight text-ink mb-12">
            "Arivuselvi completely transformed how we think about our user experience. The attention to detail, the strategic thinking, and the beautiful execution were beyond our expectations. A true partner in design."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-line">
              <img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" alt="Client" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="text-left">
              <div className="font-serif font-medium text-lg">Sarah Jenkins</div>
              <div className="text-xs uppercase tracking-wider text-muted">CEO, StartupInc</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is your typical project timeline?", a: "Most projects take between 4-8 weeks depending on the scope. We emphasize quality and strategic depth over rushing." },
  { q: "Do you offer development services?", a: "Yes! While our core focus is UX/UI design, we partner with top-tier developers to ensure our designs are built pixel-perfect." },
  { q: "How do we get started?", a: "Send an email with a brief overview of your project. We'll schedule a 30-minute discovery call to see if we're a good fit." }
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-cream border-t border-line">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-serif text-5xl font-medium tracking-tight mb-6">FAQ</h2>
          <p className="text-muted">Everything you need to know about how we work.</p>
        </div>
        <div className="md:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-line pb-4">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left py-4 flex justify-between items-center font-serif text-2xl hover:text-accent-dark transition-colors"
              >
                {faq.q}
                <span className="text-xl font-sans font-light">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-muted leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const posts = [
    { 
      title: "The art of white space in designing user interfaces", 
      cat: "Design", 
      date: "Jun 2, 2026",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1974&auto=format&fit=crop"
    },
    { 
      title: "Building a brand voice that lasts for our clients", 
      cat: "Branding", 
      date: "Jun 9, 2026",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
    },
    { 
      title: "Designing for performance", 
      cat: "Development", 
      date: "Jun 16, 2026",
      image: "https://images.unsplash.com/photo-1470071131384-001b85755b36?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-cream text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-ink mb-6">From the studio.</h2>
        <p className="text-ink/60 max-w-lg mx-auto text-base leading-relaxed mb-20">
          Essays, notes, and perspectives on brand,<br />design, and the craft of telling better stories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {posts.map((post, i) => (
            <motion.a 
              key={i} href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block"
            >
              <div className="aspect-square bg-[#e8e8e8] mb-6 overflow-hidden relative">
                {/* Overlay Text */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] font-mono text-white/90 uppercase tracking-widest">
                  <span>{post.cat}</span>
                  <span className="w-1 h-1 rounded-full bg-white/50"></span>
                  <span>{post.date}</span>
                </div>
                {/* Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold leading-snug group-hover:text-accent-dark transition-colors">{post.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
