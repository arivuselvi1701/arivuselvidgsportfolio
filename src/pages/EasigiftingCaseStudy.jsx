import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'business-context', title: 'Business Context' },
  { id: 'my-approach', title: 'My Approach' },
  { id: 'understanding-the-experience', title: 'Understanding The Experience' },
  { id: 'key-decisions', title: 'Key Decisions' },
  { id: 'design-language', title: 'Design Language' },
  { id: 'outcome', title: 'Outcome' },
  { id: 'what-i-learned', title: 'What I Learned' }
];

export default function EasigiftingCaseStudy() {
  const [activeSection, setActiveSection] = useState('business-context');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Offset of 150px from top to trigger active state
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-tight mb-6"
          >
            Easigifting
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-serif text-ink/70 mb-12 max-w-2xl leading-loose"
          >
            Designing a gifting experience that feels personal, without making it complicated
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink/60 max-w-3xl leading-loose mb-16"
          >
            The challenge wasn't simply to design a gifting platform. It was to solve a tension between two different expectations: The sender wants speed. The recipient wants something that feels personal.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-ink/10"
          >
            <div>
              <div className="text-ink/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">Role</div>
              <div className="text-sm font-medium">Product Designer</div>
            </div>
            <div>
              <div className="text-ink/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">Scope</div>
              <div className="text-sm font-medium">End-to-end product design</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        
        {/* Sticky Left Navigation */}
        <aside className="md:col-span-4 lg:col-span-3 hidden md:block">
          <div className="sticky top-32">
            <h3 className="font-serif text-lg uppercase tracking-widest text-white/60 mb-6">Contents</h3>
            <ul className="space-y-6 border-l border-white/10 pl-6 relative">
              {sections.map((section, idx) => (
                <li key={section.id} className="relative flex items-center">

                    <span className={`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full transition-all duration-300 ${ activeSection === section.id ? 'bg-[#151515] shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-110' : 'bg-[#151515]/20' }`}></span>

                  <button 
                    onClick={() => scrollToSection(section.id)}
                    className={`text-lg text-left transition-all duration-300 w-full hover:text-white flex items-center ${activeSection === section.id ? 'text-white font-bold translate-x-2' : 'text-white/50 font-medium'}`}
                  >                    <span className={`mr-4 text-xs font-mono tracking-wider transition-all duration-300 ${activeSection === section.id ? 'text-white opacity-100' : 'text-white/40'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article Content */}
        <article className="md:col-span-8 lg:col-span-9 max-w-4xl pb-32 space-y-24">
          
          <section id="business-context" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">01</span> Business Context
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>The challenge wasn't simply to design a gifting platform. It was to solve a tension between two different expectations.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="bg-[#151515] p-6 rounded-2xl border border-white/10 shadow-sm transition-colors hover:border-white/30/40"
                >
                  <div className="text-white text-2xl mb-2">⚡️</div>
                  <strong className="block text-lg mb-1">The sender wants speed.</strong>
                  <p className="text-sm text-white/70 leading-relaxed">They need to get in, select a gift, and get out without friction.</p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="bg-[#151515] p-6 rounded-2xl border border-white/10 shadow-sm transition-colors hover:border-white/30/40"
                >
                  <div className="text-white text-2xl mb-2">💝</div>
                  <strong className="block text-lg mb-1">The recipient wants something personal.</strong>
                  <p className="text-sm text-white/70 leading-relaxed">They want to feel valued, not like they received an automated transaction.</p>
                </motion.div>
              </div>

              <p>For corporate gifting, this became even more complex. The experience needed to support approvals, accuracy, tracking, and different user roles without making the process feel administrative.</p>
              <p>At the same time, the recipient experience needed to feel simple, personal, and emotionally engaging.</p>
              
              <motion.div 
                whileInView={{ scale: [0.95, 1], opacity: [0, 1] }} 
                viewport={{ once: true }}
                className="p-6 bg-white/5 border border-white/30/20 rounded-xl my-8"
              >
                <p className="text-lg font-serif italic text-white text-center m-0">
                  My goal was to find the balance between <br className="hidden md:block"/>
                  <strong>operational efficiency</strong> and <strong>emotional value</strong>.
                </p>
              </motion.div>
            </div>
          </section>

          <section id="my-approach" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">02</span> My Approach
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>I started by understanding the requirements, users, and business constraints before moving into individual screens.</p>
              <p>Rather than treating each feature independently, I looked at how the different parts of the experience connected. The central journey I worked around was:</p>
              <p className="font-bold text-lg p-6 bg-[#151515] border border-white/10 rounded-xl text-center">
                Create → Review → Approve → Send → Deliver → Open → Claim / Swap
              </p>
              <p>This helped me identify where friction could occur and where the experience needed more control, flexibility, or emotion.</p>
            </div>
          </section>


          <section id="understanding-the-experience" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">03</span> Understanding the Experience
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>One of the first things I identified was that the sender and recipient should not experience the product in the same way.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The sender needs to complete an action quickly and accurately.</li>
                <li>The recipient needs to understand what they've received with almost no learning curve.</li>
              </ul>
              <p>That led to three different experience priorities:</p>
              
              <div className="grid gap-6 mt-8">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 shadow-sm transition-colors hover:border-white/30/40 flex items-start gap-4"
                >
                  <div className="text-3xl mt-1">👑</div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-white/70">Admin — Control and efficiency</h4>
                    <p className="text-white/70">Information should be structured, predictable, and easy to manage.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 shadow-sm transition-colors hover:border-white/30/40 flex items-start gap-4"
                >
                  <div className="text-3xl mt-1">🤝</div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-white/70">Team Member — Speed and personalization</h4>
                    <p className="text-white/70">Creating a gift should feel lightweight rather than like completing an administrative form.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 shadow-sm transition-colors hover:border-white/30/40 flex items-start gap-4"
                >
                  <div className="text-3xl mt-1">🎁</div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2 text-white/70">Recipient — Clarity and emotion</h4>
                    <p className="text-white/70">The experience should make the recipient feel like they're receiving a gift, not interacting with another business application.</p>
                  </div>
                </motion.div>
              </div>
              <p className="mt-4 italic text-white">This became the foundation for the decisions that followed.</p>
            </div>
          </section>

          <section id="key-decisions" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">04</span> Key Design Decisions
            </h2>
            
            <div className="space-y-12 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">01 — Personalization without adding another step</h4>
                <p>Instead of creating a separate personalization stage, I integrated personalization into actions the sender already needed to complete: <strong>Brand → Amount → Recipient → Message</strong></p>
                <blockquote className="border-l-4 border-white/30 pl-6 my-6 italic text-lg text-white/70">
                  "Don't ask the sender to do more. Make the existing actions more meaningful."
                </blockquote>
                <p>This allowed the experience to remain lightweight while still creating a more curated outcome.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">02 — Separating creation from approval</h4>
                <p>Corporate gifting introduced the possibility of wrong recipients, incorrect amounts, or mistakes in the gift details. Adding more checks directly into the creation flow would make sending slower.</p>
                <p className="mt-4">So I moved accuracy into a dedicated approval stage:</p>
                <p className="font-mono text-sm my-4 bg-[#151515] p-4 rounded-lg border border-white/10">Sender creates → Approver reviews → Approve / Request changes → Sender revises → Gift is sent</p>
                <p>If changes were requested, the sender could revise the existing gift instead of starting over. Comments remained attached to the gift so context wasn't lost.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">03 — Making the invisible journey visible</h4>
                <p>After a gift was sent, the sender shouldn't have to wonder what happened. Instead of treating everything after "Send" as one state, I separated the journey into:</p>
                <p className="font-mono text-sm my-4 bg-[#151515] p-4 rounded-lg border border-white/10">Sent → Delivered → Viewed → Claimed</p>
                <p>This gave the sender visibility into what was happening after they completed the action.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">04 — Giving the recipient control</h4>
                <p>A sender may not always know which brand the recipient actually prefers. Rather than making swapping feel like a secondary or corrective action, I gave both choices equal importance:</p>
                <p className="font-bold text-lg my-4 text-center">Claim &nbsp;|&nbsp; Swap</p>
                <p>This shifted the experience from simply receiving an assigned gift to having control over how the gift is used.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">05 — Designing for flexible gifting</h4>
                <p>For split-brand gifting, the sender can provide value across multiple brands without needing to know exactly how the recipient will want to use it. The recipient can then decide how to distribute that value.</p>
                <blockquote className="border-l-4 border-white/30 pl-6 my-6 italic text-lg text-white/70">
                  "When the sender can't know the perfect choice, give the recipient the choice."
                </blockquote>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">06 — Designing around existing infrastructure</h4>
                <p>Rather than recreating gift-card catalog and redemption infrastructure, I worked around the existing <strong>Prezee</strong> integration. This allowed the design effort to focus on the parts that were unique to the EasiGifting experience:</p>
                <p className="font-mono text-sm my-4 bg-[#151515] p-4 rounded-lg border border-white/10">Creation → Approval → Tracking → Reveal → Claim / Swap</p>
                <p>The focus was on creating a seamless experience around the existing infrastructure rather than rebuilding what already worked.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">07 — Creating an emotional moment</h4>
                <p>Most of the product deals with functional information: <em>Amounts · Wallets · Approvals · Status · Transactions</em>. The recipient reveal was different. This was the moment where the product needed to feel like a gift rather than software.</p>
                <p className="mt-4">So I deliberately kept the operational experience restrained and reserved stronger visual treatment for the reveal.</p>
                <blockquote className="border-l-4 border-white/30 pl-6 my-6 italic text-lg text-white/70">
                  "Functional when it needs to be. Emotional when it matters."
                </blockquote>
              </div>
            </div>
          </section>

          <section id="design-language" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">05</span> Design language
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p className="font-serif text-xl">Calm for the system. Warm for the moment.</p>
              <p>The visual language was designed around the different roles of the experience.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 border-t-4 border-t-[#4169E1] shadow-sm hover:shadow-lg transition-shadow cursor-default"
                >
                  <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#4169E1]"></span> Royal Blue</h4>
                  <p className="text-sm text-white/60">Used for primary actions and functional areas to create a sense of trust and stability.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 border-t-4 border-t-[#708090] shadow-sm hover:shadow-lg transition-shadow cursor-default"
                >
                  <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#708090]"></span> Slate + White</h4>
                  <p className="text-sm text-white/60">Used as the foundation to keep information clear and structured.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 border-t-4 border-t-[#50C878] shadow-sm hover:shadow-lg transition-shadow cursor-default"
                >
                  <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#50C878]"></span> Emerald</h4>
                  <p className="text-sm text-white/60">Used for successful states such as funded, delivered, and claimed.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#151515] p-6 rounded-xl border border-white/10 border-t-4 border-t-[#8A2BE2] shadow-sm hover:shadow-lg transition-shadow cursor-default"
                >
                  <h4 className="font-bold mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-[#8A2BE2]"></span> Violet</h4>
                  <p className="text-sm text-white/60">Reserved for the recipient reveal to create a distinct emotional moment.</p>
                </motion.div>
              </div>
              <p className="mt-6">The intention wasn't to make the entire product decorative. It was to create a clear visual distinction between <strong>using the system</strong> and <strong>receiving the gift</strong>.</p>
              
            </div>
          </section>

          <section id="outcome" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">06</span> Outcome
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>The final experience brought together two requirements that initially seemed to compete: <strong>Operational efficiency for the sender</strong> and <strong>Emotional ownership for the recipient</strong>.</p>
              <p>The design created:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>A lightweight sending experience where personalization is built into existing actions</li>
                <li>A controlled approval workflow without adding unnecessary friction to creation</li>
                <li>Clear visibility into the gift lifecycle</li>
                <li>More choice and control for recipients</li>
                <li>A distinct emotional moment within an otherwise functional product</li>
              </ul>
              <p className="mt-8">The biggest outcome was not simply a cleaner interface. It was creating an experience where <strong>the sender could complete the task efficiently while the recipient could still feel that the gift was chosen for them.</strong></p>
            </div>
          </section>

          <section id="what-i-learned" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">07</span> What I Learned
            </h2>
            <div className="space-y-8 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              
              <div>
                <h4 className="font-bold text-white/70 mb-2">Personalization doesn't always mean adding more.</h4>
                <p>One of my biggest learnings from EasiGifting was that personalization can come from <strong>choice and control</strong>, rather than adding more customization options. The sender doesn't need to manually design every part of a gift. The recipient can also participate in making it their own.</p>
              </div>

              <div>
                <h4 className="font-bold text-white/70 mb-2">The best flow isn't always the shortest flow.</h4>
                <p>Removing steps isn't automatically good UX. The better question is: <em className="text-white">Which steps create value, and which steps create friction?</em></p>
                <p className="mt-2">The approval flow added a step, but it solved an important trust problem. The swap option added a decision, but it gave the recipient meaningful control.</p>
              </div>

              <div>
                <h4 className="font-bold text-white/70 mb-2">Different users can need completely different experiences.</h4>
                <p>Admin, Team Member, and Recipient users interact with the same product, but their goals are fundamentally different. The experience became stronger when I stopped trying to make every surface behave in exactly the same way.</p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h4 className="font-serif text-xl font-bold text-white mb-4">Final takeaway</h4>
                <p className="text-xl italic font-medium text-white/70">Make it easy to send. Make it meaningful to receive.</p>
                <p className="mt-4">EasiGifting reinforced my belief that good product design isn't always about adding more features or more personalization. Sometimes it's about identifying <strong>where the right decision should happen, who should make it, and how much effort the experience should ask from them.</strong></p>
              </div>

            </div>
          </section>

        </article>
      </section>
      
    </div>
  );
}
