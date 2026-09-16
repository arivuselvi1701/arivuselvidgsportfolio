import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'business-context', title: 'Business Context' },
  { id: 'my-approach', title: 'My Approach' },
  { id: 'content-model', title: 'Content Model' },
  { id: 'key-decisions', title: 'Key Decisions' },
  { id: 'design-language', title: 'Design Language' },
  { id: 'results', title: 'Results' },
  { id: 'what-i-learned', title: 'What I Learned' }
];

export default function DecluttrCaseStudy() {
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
            Decluttr
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-serif text-ink/70 mb-12 max-w-2xl leading-loose"
          >
            Turning a spoken brain dump into a clear, ranked to-do list
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink/60 max-w-3xl leading-loose mb-16"
          >
            A voice-first task manager, designed around one idea: the moment you have a thought, that should be enough. Everything after — writing it down, structuring it, deciding what matters — is Decluttr's job, not yours.
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
              <div className="text-ink/50 text-[10px] uppercase tracking-widest mb-2 font-semibold">Core Concept</div>
              <div className="text-sm font-medium">Voice-first, Impact-Effort Matrix</div>
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
              <p>Most to-do apps assume the hard part is <em className="text-white">storing</em> a task. It isn't. The hard part is getting the task out of your head in the first place — while you're walking, driving, or lying awake at 1am with six things circling your mind.</p>
              <p>Decluttr is built around that gap. It's a single-user productivity app with one core promise: talk, don't type. You speak everything that's on your mind in one go, and Decluttr turns that unstructured rambling into a clean set of tasks — each with a title, an effort estimate, and an impact rating — ready to review, adjust, and act on.</p>
            </div>
          </section>

          <section id="my-approach" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">02</span> My Approach
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>Not "design a to-do app" — design a conversation, in three steps: <strong>Capture → Confirm → Prioritise</strong></p>
              <p>I looked at how someone feels at each step:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Relief</strong> — finally getting it off your chest</li>
                <li><strong>Doubt</strong> — "did it hear me right?"</li>
                <li><strong>Satisfaction</strong> — a messy thought becomes a clear, ranked task</li>
              </ul>

            </div>
          </section>


          <section id="content-model" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">03</span> Content Model
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>Every task has the same simple shape — filled in bit by bit, not all at once:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>What</strong> — a title, plus more detail if you want</li>
                <li><strong>When</strong> — a date, and whether it's time-bound</li>
                <li><strong>How big</strong> — effort, in whatever unit makes sense to you</li>
                <li><strong>How much it matters</strong> — impact: low / medium / high</li>
                <li><strong>Can it move?</strong> — fixed to a time, or flexible</li>
                <li><strong>Extras</strong> — tags, place, people, repeat</li>
              </ul>
              <p>A task can start as a 5-second voice note, get filled in later, or be added by hand — the shape stays the same either way.</p>
              
              <div className="mt-8">
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">Nothing saves on its own</h4>
                <p>Every voice note makes drafts first — never real tasks — until you confirm them. After a brain dump, tasks land here as editable drafts — nothing is saved until you tap "Add To My Task."</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 mb-6 items-stretch">
                <img src="/mobilementaldump.jpg" alt="Mental Dump Screen" className="w-full h-full max-w-[240px] mx-auto object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-xl " />
                <img src="/mobilesortedtask.jpg" alt="Sorted Task Screen" className="w-full h-full max-w-[240px] mx-auto object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-xl " />
                <img src="/mobilecalendaredit.jpg" alt="Calendar Edit Screen" className="w-full h-full max-w-[240px] mx-auto object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-xl " />
                <img src="/mobileedittasks.jpg" alt="Edit Tasks Screen" className="w-full h-full max-w-[240px] mx-auto object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-xl " />
              </div>
              <p className="text-sm italic text-white text-center">Whether a task started as a voice dump or was typed straight in, it opens up with the same fields, ready to edit.</p>
            </div>
          </section>

          <section id="key-decisions" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">04</span> Key Decisions
            </h2>
            
            <div className="space-y-12 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">Grouped by design</h4>
                <p >Tasks in the same grid box read as one group, even before you read the words.<br/><br/>
                <em className="text-white">Gestalt Principle — Proximity & Common Region — things placed close together, inside one box, are seen as a group. The grid sorts for you, just by how it looks.</em></p>
                <div className="w-full mt-6 rounded-lg overflow-hidden border border-white/10 bg-[#151515]">
                  <img src="/desktopimporteffortmatrix.png" alt="Impact-Effort Grid Desktop" className="w-full h-auto object-contain" />
                </div>
                <p className="text-sm italic text-white mt-2">The same grid serves both decisions above: ranking by position, and grouping by shared boundary.</p>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">One shape, however it starts</h4>
                <p >A task spoken into Orange, typed by hand, or moved across the grid always looks and works the same way — same tags, same effort and impact markers, same layout — whether you're on the phone or at a desk.<br/><br/>
                <em className="text-white">Nielsen's Heuristic — Consistency & Standards — one task, one set of rules, no matter where it came from.</em></p>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-8 items-center">
                  <div className="md:col-span-3 flex justify-center">
                    <img src="/home.jpg" alt="Home View" className="w-full max-w-[240px] md:max-w-full h-auto rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 " />
                  </div>
                  <div className="md:col-span-9">
                    <img src="/desktopmytasks.jpg" alt="Desktop My Tasks View" className="w-full h-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 " />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-white/70 mb-2">The System</h4>
                <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
                  <p><strong>Orange does more than just listen.</strong> It also checks in on what's already planned:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Checks whether planned tasks actually got done</li>
                <li>If not, it works out <em className="text-white">when</em> to fit them in again, based on your free time</li>
                <li>The AI suggests a plan — it never changes anything by itself</li>
                <li>You check it, fix anything that's off, and only then is it locked in</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-8">
                <div>
                  <img src="/mobilehopethiswentwell.jpg" alt="Orange Assistant Check-in" className="w-full max-w-[240px] mx-auto aspect-[390/844] object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-3xl " />
                  <p className="text-sm italic text-white text-center mt-4 px-4">Orange checks in, one task at a time — a simple yes/no, never an assumption.</p>
                </div>
                <div>
                  <img src="/mobilechatbotconversation.jpg" alt="Orange Assistant Proposing Slots" className="w-full max-w-[240px] mx-auto aspect-[390/844] object-cover object-top shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 rounded-3xl " />
                  <p className="text-sm italic text-white text-center mt-4 px-4">If something's still pending, Orange proposes new slots — and waits for a "Yes, Schedule" before touching your day.</p>
                </div>
              </div>
              
              <p>Nothing happens without your say-so — Orange suggests, you decide.</p>
            </div>
          </div>
        </div>
      </section>

          <section id="design-language" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">05</span> Design language and components
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <p>Calm and clear over flashy. People open Decluttr mid-thought, often distracted — clarity wins over decoration, every time.</p>
              <p>Built a set of reusable components and style variables early on, to keep the design work fast and consistent as more screens got added.</p>

              
              <div className="mt-12 pt-8">
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#151515] p-8 md:p-12">
                  <div className="flex flex-col gap-12 md:gap-16">
                    {/* Row 1 */}
                    <div className="w-full flex justify-center py-4">
                      <img src="/buttons.jpg" alt="Button Components" className="w-full h-auto object-contain  transform scale-110" />
                    </div>
                    
                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
                      <img src="/bottomnavbar.jpg" alt="Bottom Navigation Bar Components" className="w-full h-auto object-contain " />
                      <img src="/topsection.jpg" alt="Top Section" className="w-full h-auto object-contain " />
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-items-center">
                      <img src="/taskcards.png" alt="Task Card Components" className="w-full h-auto object-contain " />
                      <img src="/taskcards1.jpg" alt="Task Cards Alternate" className="w-full h-auto object-contain " />
                    </div>

                    {/* Row 4 */}
                    <div className="w-full flex justify-center">
                      <img src="/calendarcards.jpg" alt="Calendar Cards" className="w-full h-auto object-contain " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="results" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">06</span> Results
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <ul className="list-disc pl-6 space-y-4">
                <li>People stop giving up before they even save a thought</li>
                <li>Priority is easy to see, not something you have to work out by hand</li>
                <li>One task shape works for a quick voice note and a fully planned one</li>
                <li>Orange checks in on your day and only changes it with your okay</li>
              </ul>
            </div>
          </section>

          <section id="what-i-learned" className="scroll-mt-32">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-5 pb-4 flex items-center">
              <span className="text-white opacity-80 mr-4 text-2xl font-mono tracking-widest">07</span> What I Learned
            </h2>
            <div className="space-y-6 text-white/70 text-base md:text-[17px] font-medium leading-loose">
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>A quick fix matters more than being perfect.</strong> People forgive Decluttr for mishearing them, but not a clunky way to correct it.</li>
                <li><strong>Asking first builds trust.</strong> Even the replanning step always waits for a yes.</li>
                <li><strong>One screen doesn't fit every moment.</strong> Walking and sitting, dumping thoughts and planning them, need different screens — not one that just stretches.</li>
              </ul>
            </div>
          </section>

        </article>
      </section>
      
    </div>
  );
}
