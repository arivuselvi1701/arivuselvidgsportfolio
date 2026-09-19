import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { PenTool, Layout, Code2, Sparkles, Wand2, Hexagon, Layers } from 'lucide-react';

export function Logos() {
  const icons = {
    claude: <svg className="w-7 h-7 opacity-50 fill-current" viewBox="0 0 24 24"><path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" /></svg>,
    antigravity: <svg className="w-7 h-7 opacity-50 fill-current" viewBox="0 0 24 24"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>,
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
