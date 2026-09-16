import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Agnikul Cosmos',
    description: 'A comprehensive website design for an aerospace startup. Focuses on showcasing advanced launch vehicles with bold imagery and clean typography.',
    image: '/agnikulcover.jpg',
    color: '#E5E5E5',
    // Replace this string with your actual Figma prototype link
    externalLink: 'https://www.figma.com/proto/Q1MtMwUaSWKBo13Br1y7jO/WebsiteAgniban?page-id=0%3A1&node-id=1-25&viewport=246%2C106%2C0.08&t=Qhb4pezMtHNP159T-1&scaling=min-zoom&content-scaling=fixed'
  },
  {
    title: 'Podcast App',
    description: 'A modern, immersive mobile platform for discovering and streaming podcasts, featuring a curated library and seamless playback experience.',
    image: '/ocofocusmobile.jpg',
    gallery: [
      '/ocofocusmobile.jpg',
      '/ocoplaymobile.jpg',
      '/ocosleepmobile.jpg',
      '/ocolibrary.jpg',
      '/ocooverlay.jpg'
    ],
    color: '#D4D4D4'
  },
  {
    title: 'My Harvest Farms',
    description: 'An interactive platform connecting people directly to the source of their food. Designed with earthy tones and transparent user flows to reflect the purity of fresh produce and honor the dedication of local farmers.',
    image: '/myharvestfarms.jpg',
    externalLink: 'https://www.figma.com/proto/Q1MtMwUaSWKBo13Br1y7jO/Website?node-id=70-282&viewport=247%2C212%2C0.06&t=6MaPu6PWzcN0N52B-1&scaling=scale-down-width&content-scaling=fixed&page-id=70%3A278',
    color: '#A3A3A3'
  }
];

const Card = ({ i, title, description, image, video, gallery, color, progress, range, targetScale, link, externalLink }) => {
  const container = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Apply a spring for buttery smooth parallax scrolling on the video/image
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const imageScale = useTransform(smoothProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <>
      <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-6">
        <motion.div 
          style={{ 
            scale, 
            top: `calc(-5vh + ${i * 30}px)`,
            backgroundColor: color
          }} 
          className="flex flex-col md:flex-row relative w-full max-w-5xl h-[600px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] origin-top border border-black/5"
        >
          {/* Content Side */}
          <div className="w-full md:w-5/12 h-1/2 md:h-full p-10 md:p-14 flex flex-col items-center md:items-start text-center md:text-left justify-center bg-white text-ink relative z-10">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-6">Figma Design</div>
            <h3 className="font-serif text-3xl md:text-4xl font-medium mb-6 leading-tight">{title}</h3>
            <p className="text-ink/80 text-base leading-relaxed">{description}</p>
            
            {externalLink ? (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-10 self-center md:self-start group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent-dark">
                <span className="w-8 h-[1px] bg-ink group-hover:bg-accent-dark transition-colors"></span>
                View Design
              </a>
            ) : link ? (
              <Link to={link} className="mt-6 md:mt-10 self-center md:self-start group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent-dark">
                <span className="w-8 h-[1px] bg-ink group-hover:bg-accent-dark transition-colors"></span>
                View Design
              </Link>
            ) : (
              <button onClick={() => setIsModalOpen(true)} className="mt-6 md:mt-10 self-center md:self-start group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent-dark">
                <span className="w-8 h-[1px] bg-ink group-hover:bg-accent-dark transition-colors"></span>
                View Design
              </button>
            )}
          </div>

          {/* Image/Video Side */}
          <div className="w-full md:w-7/12 h-1/2 md:h-full relative overflow-hidden bg-black flex items-center justify-center">
            {video ? (
              <motion.video 
                style={{ scale: imageScale }} 
                src={video}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
            ) : (
              <motion.img 
                style={{ scale: imageScale }} 
                src={image} 
                alt={title} 
                className="w-full h-full object-contain opacity-90 p-6 md:p-10"
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Scrollable Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Floating Close Button */}
          <div className="fixed top-6 right-6 md:right-12 z-[60]">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="text-white font-mono text-xs tracking-widest bg-black/50 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-full border border-white/20 transition-colors shadow-2xl"
            >
              CLOSE
            </button>
          </div>
          
          {/* Full Content */}
          <div className="relative w-full min-h-screen flex flex-col items-center">
            {video ? (
              <video 
                src={video}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block" 
                onClick={(e) => e.stopPropagation()}
              />
            ) : gallery && gallery.length > 0 ? (
              <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10 py-24 px-6 md:px-12" onClick={(e) => e.stopPropagation()}>
                {gallery.map((imgSrc, idx) => {
                  const needsMockup = idx >= 3;
                  return (
                    <div key={idx} className="w-full sm:w-[45%] md:w-[30%] relative">
                      {needsMockup ? (
                        <div className="relative w-full rounded-[46px] border-[2px] md:border-[3px] border-[#e5e5e5] bg-black p-[8px] md:p-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          {/* Silver Hardware buttons */}
                          <div className="absolute top-[20%] -left-[4px] md:-left-[5px] w-[2px] md:w-[3px] h-[25px] bg-[#e5e5e5] rounded-l-sm"></div>
                          <div className="absolute top-[27%] -left-[4px] md:-left-[5px] w-[2px] md:w-[3px] h-[50px] bg-[#e5e5e5] rounded-l-sm"></div>
                          <div className="absolute top-[35%] -left-[4px] md:-left-[5px] w-[2px] md:w-[3px] h-[50px] bg-[#e5e5e5] rounded-l-sm"></div>
                          <div className="absolute top-[28%] -right-[4px] md:-right-[5px] w-[2px] md:w-[3px] h-[75px] bg-[#e5e5e5] rounded-r-sm"></div>
                          
                          {/* Inner wrapper to safely zoom the image and hide export artifacts */}
                          <div className="w-full relative overflow-hidden rounded-[34px] md:rounded-[30px] translate-z-0">
                            <img 
                              src={imgSrc} 
                              alt={`${title} screen ${idx + 1}`} 
                              className="w-full h-auto block scale-[1.02]" 
                            />
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={imgSrc} 
                          alt={`${title} screen ${idx + 1}`} 
                          className="w-full h-auto block rounded-[2rem] shadow-2xl relative z-0" 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <img 
                src={image} 
                alt={title + " full design"} 
                className="w-full h-auto block" 
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default function Websites() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="websites" className="bg-cream text-ink relative">
      {/* Header section to introduce the stacking cards */}
      <div className="pt-24 md:pt-32 pb-0 md:pb-8 px-6 flex flex-col items-center text-center">
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium text-balance leading-tight tracking-tight mb-6 text-ink">
          Design before AI era<br />just with Figma
        </h2>
        <p className="text-ink/50 uppercase tracking-[0.2em] text-xs font-semibold">Websites & interfaces</p>
      </div>

      {/* The stacking cards container */}
      <div ref={container} className="relative pb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.04);
          return (
            <Card 
              key={i} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.33, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}
