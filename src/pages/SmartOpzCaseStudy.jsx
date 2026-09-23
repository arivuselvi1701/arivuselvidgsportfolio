import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SmartOpzCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState('the-problem');

  const sections = [
    { id: 'the-problem', title: 'The Problem' },
    { id: 'my-role', title: 'My Role' },
    { id: 'working-alongside-ai', title: 'Working Alongside AI' },
    { id: 'research', title: 'Research & Discovery' },
    { id: 'core-insight', title: 'The Core Insight' },
    { id: 'challenges', title: 'Challenges' },
    { id: 'system', title: 'The System' },
    { id: 'content', title: 'Content Model' },
    { id: 'language', title: 'Design Language' },
    { id: 'alignment', title: 'Team Alignment' },
    { id: 'results', title: 'Results' },
    { id: 'learned', title: 'What I Learned' },
    { id: 'next', title: "What's Next" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen relative text-white/70">
      
      
      <Link to="/" className="fixed top-6 left-6 md:top-8 md:left-8 z-[100] inline-flex items-center gap-2 px-6 py-3 bg-ink/90 backdrop-blur-md border border-white/20 text-cream text-xs font-mono tracking-widest uppercase rounded-full hover:bg-ink/80 hover:scale-105 transition-all shadow-xl">
        <span className="text-lg leading-none">←</span> Back
      </Link>

      {/* Hero Banner */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-ink/10 bg-cream text-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-tight mb-6 text-ink"
          >
            SmartOpz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-ink/70 max-w-2xl font-light leading-relaxed mb-12"
          >
            Designing a unified operational system that companies can actually rely on.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-ink/10"
          >
            <div>
              <div className="text-xs font-mono tracking-widest text-ink/50 uppercase mb-2">Role</div>
              <div className="font-medium text-ink/90">Product Designer</div>
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-ink/50 uppercase mb-2">Scope</div>
              <div className="font-medium text-ink/90">End to End Product design From Research to after launch support and iterations</div>
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-ink/50 uppercase mb-2">Timeline</div>
              <div className="font-medium text-ink/90">4 Months</div>
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-ink/50 uppercase mb-2">Platform</div>
              <div className="font-medium text-ink/90">Web Application</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-white/5 border-b border-white/10 py-16 px-6 text-center">
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white max-w-3xl mx-auto leading-relaxed">
          "The challenge wasn't to make SmartOpz look better. It was to make it usable for real company operations."
        </h3>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Sticky Left Navigation */}
        <aside className="md:col-span-4 lg:col-span-3 hidden md:block">
          <div className="sticky top-32">
            <h3 className="font-serif text-lg uppercase tracking-widest text-white/40 mb-6">Contents</h3>
            <ul className="space-y-6 border-l border-white/10 pl-6 relative">
              {sections.map((section, idx) => (
                <li key={section.id} className="relative flex items-center">

                    <span className={`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${ activeSection === section.id ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110' : 'bg-white/20' }`}></span>

                  <button 
                    onClick={() => scrollToSection(section.id)}
                    className={`group flex items-center text-left w-full transition-all duration-300 ${activeSection === section.id ? 'text-white' : 'text-white/40 hover:text-white'}`}
                  >                    <span className={`mr-4 text-xs font-mono tracking-wider transition-all duration-300 ${activeSection === section.id ? 'text-white opacity-100' : 'text-white/40'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`text-sm tracking-wide ${activeSection === section.id ? 'text-white font-bold translate-x-2' : ''} transition-transform duration-300 group-hover:translate-x-2`}>
                      {section.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Flow */}
        <article className="md:col-span-8 lg:col-span-9 max-w-4xl pb-32 space-y-24">
          
          <section id="the-problem" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">01</span> The Problem
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>The client already had an app in place — this wasn't a build from zero. But nothing about it felt organized: there was essentially no coherent flow, and the struggle for people actually using it day to day was real, not theoretical.</p>
              <p>Beyond the disorganization, the underlying tool was rigid — it assumed every company runs HR, approvals, procurement, and payroll the same way, when in practice every organization does it a little differently.</p>
              <p>The fix wasn't just tidying up screens, it was adding real flexibility — a system organized enough to actually use, and configurable enough to fit any company's workflow.</p>
              
              <div className="mt-16 bg-cream text-[#151212] rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-dark/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="relative z-10">
                  <h4 className="text-xs font-mono tracking-[0.3em] text-[#151212]/60 uppercase mb-8">The Core Objective</h4>
                  <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-12 text-[#151212]">
                    Transform SmartOpz from a difficult-to-use application into a system companies could rely on for <span className="text-accent-dark italic">everyday operations.</span>
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 border-t border-[#151212]/10 pt-10">
                  {[
                    { from: 'Disconnected', to: 'Unified' },
                    { from: 'Rigid', to: 'Configurable' },
                    { from: 'Complex', to: 'Usable' }
                  ].map((item, idx) => (
                    <motion.div key={item.from} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="group">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[#151212]/50 text-sm font-medium line-through decoration-[#151212]/20">{item.from}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent-dark transform group-hover:translate-x-2 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <strong className="text-xl md:text-2xl font-serif text-[#151212]">{item.to}</strong>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="my-role" className="scroll-mt-32 mt-24">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">02</span> My Role
            </motion.h2>
            
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>I owned SmartOpz end to end, from understanding the product and researching user needs to designing, validating, launching, and iterating the experience.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  { title: "Beyond Design", desc: "Involved in client discussions, requirement gathering, and demos." },
                  { title: "Quality & Validation", desc: "Post-development testing and validating whether the final product matched the intended experience." },
                  { title: "Continuous Improvement", desc: "Gathered feedback from customers and used it to drive continuous improvements." },
                  { title: "Full Ownership", desc: "Acted as the sole product designer, taking responsibility for the end-to-end outcome." }
                ].map((role, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.02, y: -4 }} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group shadow-lg">
                    <h3 className="text-white/90 font-medium mb-3 group-hover:text-accent-light transition-colors font-serif text-xl">{role.title}</h3>
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="working-alongside-ai" className="scroll-mt-32 mt-24">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">03</span> Working Alongside AI
            </motion.h2>
            
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>AI became part of my workflow throughout the project. I used tools to explore ideas, create initial drafts, and accelerate different stages of the design and development process.</p>
              
              <div className="flex flex-wrap gap-3 py-4">
                {['Claude Code', 'Figma Make', 'Antigravity', 'Codex', 'ChatGPT'].map((tool, i) => (
                  <motion.span key={i} whileHover={{ scale: 1.05, y: -2 }} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-white/80 cursor-default hover:border-accent-light hover:text-accent-light transition-colors shadow-sm">
                    {tool}
                  </motion.span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group cursor-pointer relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent-dark/20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
                  <h3 className="font-serif text-2xl text-white/90 mb-4 relative z-10">Product Thinking First</h3>
                  <p className="text-white/60 leading-relaxed text-sm relative z-10">
                    I didn't treat AI as the decision-maker. I used its output as a starting point, then applied my own product thinking to decide what made sense for SmartOpz, the users, and the business.
                  </p>
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 group cursor-pointer relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-accent-dark/20 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100" />
                  <h3 className="font-serif text-2xl text-white/90 mb-4 relative z-10">Validation is Key</h3>
                  <p className="text-white/60 leading-relaxed text-sm relative z-10">
                    One of the biggest things I learned was that getting something that <em className="text-white italic">looks right</em> doesn't necessarily mean it <em className="text-white italic">works right</em>. AI-generated output could sometimes miss edge cases or interpret an instruction differently from what I intended. This pushed me to become more precise with my prompts and specifications, and more rigorous about validating the final implementation.
                  </p>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="mt-10 p-8 bg-[#151515] rounded-2xl border border-white/20 hover:border-accent-light/50 transition-colors cursor-pointer shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/10 to-transparent opacity-50" />
                <p className="font-serif text-xl md:text-2xl text-white/90 text-center relative z-10">
                  That became an important part of my workflow: <strong className="text-white">use AI to move faster, but rely on product thinking, validation, and judgment to move in the right direction.</strong>
                </p>
              </motion.div>
            </div>
          </section>


          <section id="research" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">04</span> Research & Discovery
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <ul className="space-y-4 pl-4 border-l-2 border-white/10">
                <li className="pl-4">Analyzed the client's existing application to understand what was already working and what was actively causing friction.</li>
                <li className="pl-4">Direct conversations with the client to surface the real, day-to-day pain points.</li>
                <li className="pl-4">Competitive research against established HRMS platforms to benchmark navigation patterns.</li>
                <li className="pl-4">Talked to people working directly in ticketing and CAPEX/OPEX workflows.</li>
              </ul>
              <p>This wasn't a redesign done in isolation — it was built from what the people who'd actually use it deal with every day.</p>
            </div>
          </section>

          <section id="core-insight" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">05</span> The Core Insight
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>One rule runs through all of SmartOpz: nothing happens directly — it's requested, then approved, then it becomes real.</p>
              <div className="p-8 bg-[#151515] rounded-2xl border border-white/10">
                <h4 className="font-serif text-2xl text-white mb-4">UX Principle: Jakob's Law</h4>
                <p className="text-white/70">People expect new tools to work like tools they already know. One repeating pattern across all nine modules means less to learn and less to remember.</p>
              </div>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">06</span> Challenges
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <h4 className="text-xl font-bold text-white mt-8 mb-4">Configurability vs. Simplicity</h4>
              <p>Flexibility can hurt usability. The more options a system has, the easier it is to overwhelm the user. Keeping workflows like leave, payroll, and ticketing simple — while staying flexible underneath — was the hardest part.</p>
              <div className="p-8 bg-[#151515] rounded-2xl border border-white/10">
                <h4 className="font-serif text-2xl text-white mb-4">Hick's Law & Progressive Disclosure</h4>
                <p className="text-white/70">More choices at once means slower decisions. Splitting a task into small steps, and showing options only when needed, keeps each screen light.</p>
              </div>
            </div>
          </section>

          

          
          
          <section id="system" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">07</span> The System
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>An employee doesn't take leave, they raise a Leave Request. No one buys a laptop, someone raises a Procurement Request. Once it's approved, the system turns it into the real outcome.</p>
            </div>
          </section>

          <section id="content" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">08</span> Content Model
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>At first, everything was fully configurable, with nothing set by default. Some flows didn't work at all until someone configured them. To fix this, key ticket types shipped with defaults, kept fully editable.</p>
              <p>We didn't get these right the first time. We noticed the problem in use, and fixed it from there.</p>
            </div>
          </section>

          <section id="language" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">09</span> Design Language
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>Screens were built using Figma Make, with Claude Code, Codex, and Antigravity supporting the build.</p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-sm italic text-white/50">
                Placeholder: typography, color palette, and component library will be documented here once screenshots and the Figma file are added to this case study.
              </div>
            </div>
          </section>

          <section id="alignment" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">10</span> Team Alignment
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>Ticketing, CAPEX, and OPEX were new to me and the team, and the client's requirements weren't fully clear at the start. I went and learned it directly — talking to people who work with ticketing systems every day, and running sessions with a CA to understand how CAPEX and OPEX really work.</p>
              <p>Not every client request is the right call, but not every one is wrong either. If a request had a real reason behind it, I built it. If it didn't, I explained the risk clearly and let the client decide.</p>
            </div>
          </section>

          <section id="results" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">11</span> Results
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose mb-8">
              <p>SmartOpz is live and used daily inside the client's own company (not yet by their customers). The core workflows and unified system have generally worked well for people; some users still find configuration confusing, which we're actively working on.</p>
            </div>

            
            <div className="space-y-4 text-base md:text-[17px] font-medium leading-loose">
              <p className="text-white/70 leading-relaxed">We keep iterating based on this feedback. It's an ongoing process, not a finished product.</p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-sm italic text-white/50">
                Note: SmartOpz doesn't yet have a usage-analytics dashboard, so results here are qualitative — drawn from direct client feedback rather than measured funnel or adoption numbers.
              </div>
            </div>
          </section>

          <section id="learned" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">12</span> What I Learned
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 items-start py-8 border-b border-white/10">
              <div className="font-bold text-white/40 font-mono text-xl mt-1">01</div>
              <div>
                <h4 className="font-bold mb-2 text-white/90 text-lg">Design for many companies, not one client</h4>
                <p className="text-white/70 text-base leading-relaxed">Every flow was checked against one question: would this work for a company that isn't ours?</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 items-start py-8">
              <div className="font-bold text-white/40 font-mono text-xl mt-1">02</div>
              <div>
                <h4 className="font-bold mb-2 text-white/90 text-lg">Sketch before you commit</h4>
                <p className="text-white/70 text-base leading-relaxed">For ticketing and CAPEX/OPEX, I sketched a few options and weighed trade-offs before picking one — rather than committing early and fixing it later. Even so, we missed some edge cases and had to work around technical limits.</p>
              </div>
            </div>
          </section>

          <section id="next" className="scroll-mt-32">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: '-50px' }} transition={{ duration: 0.5 }} className="font-serif text-3xl md:text-4xl font-medium text-white mb-8 pb-4 border-b border-white/10 flex items-center">
              <span className="text-white/40 mr-4 text-2xl font-mono tracking-widest">13</span> Next Step
            </motion.h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>We strive to give our best. I visit the app regularly and test flows at random, which often brings a new edge case to light. I'm also fortunate to have a client call every week, and together we keep finding ways to make the product better, every day. Whenever a new idea comes up, I reason through it carefully before we build it, so each change makes the product a little better than before. It's a continuous process, and one we genuinely enjoy being part of.</p>
            </div>
          </section>

        </article>
      </section>
    </div>
  );
}
