
import React from 'react';
import { RESUME_DATA, PROJECTS, SKILLS } from './constants';
import AIChat from './components/AIChat';
import { Skill } from './types';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  const isAI = skill.category === 'AI/ML';
  
  return (
    <div className="relative group/skill skill-container">
      <div 
        className={`px-4 py-2 border border-black/10 rounded-xl text-sm transition-all duration-300 cursor-help flex items-center gap-2
          ${isAI 
            ? 'ai-ml-glow bg-gray-50 font-semibold' 
            : 'bg-white hover:bg-black hover:text-white'
          }`}
      >
        <span>{skill.name}</span>
        {isAI && (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        )}
      </div>
      
      {/* Tooltip */}
      <div className="skill-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-black text-white text-[11px] rounded-lg shadow-xl z-50">
        <p className="font-bold mb-1 border-b border-white/20 pb-1">{skill.name}</p>
        <p className="text-gray-300 leading-tight">{skill.description}</p>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-black selection:text-white overflow-x-hidden halftone">
      {/* Subtle Background textures */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-[0.02] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-black rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-black/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-heading tracking-tighter text-black">IZ.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#about" className="hover:text-black transition-colors duration-200">Perspective</a>
            <a href="#skills" className="hover:text-black transition-colors duration-200">Stack</a>
            <a href="#projects" className="hover:text-black transition-colors duration-200">Works</a>
            <a href="#education" className="hover:text-black transition-colors duration-200">Journey</a>
            <a href="#contact" className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 active:scale-95 border border-white/10 shadow-lg shadow-black/10">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 md:py-20 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center text-center space-y-10 py-16">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase mb-4 bg-white shadow-sm">
              Engineer • Thinker • Tactician
            </div>
            <h1 className="text-7xl md:text-9xl font-bold font-heading leading-[0.9] tracking-tighter text-black">
              Logic <br /> 
              <span className="text-gradient">& Soul.</span>
            </h1>
          </div>
          <p className="max-w-xl text-xl text-gray-600 font-light leading-relaxed">
            I'm <span className="text-black font-semibold">Irfan Zaki</span>. A developer architecting scalable systems and a mind exploring deep philosophical terrains. 
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <a 
              href="#projects" 
              className="bg-black text-white px-12 py-5 rounded-full font-bold shadow-2xl shadow-black/30 hover:shadow-black/40 hover:-translate-y-1 transition duration-300 active:scale-95"
            >
              Case Studies
            </a>
            <a 
              href="#contact" 
              className="border-2 border-black px-12 py-5 rounded-full font-bold hover:bg-black hover:text-white transition duration-300 -translate-y-0 hover:-translate-y-1 shadow-lg shadow-transparent hover:shadow-black/10"
            >
              Let's Talk
            </a>
          </div>
          
          {/* Subtle manga-style halftone illustration placeholder or decorative element */}
          <div className="mt-12 opacity-30 select-none">
            <div className="flex gap-4 items-center grayscale">
               <span className="text-xs font-bold tracking-[0.4em] uppercase">MERN</span>
               <div className="w-12 h-px bg-black/20"></div>
               <span className="text-xs font-bold tracking-[0.4em] uppercase">AI</span>
               <div className="w-12 h-px bg-black/20"></div>
               <span className="text-xs font-bold tracking-[0.4em] uppercase">ML</span>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Philosophy / Thinking at heart */}
        <section className="relative py-20 px-6 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-1 text-gray-200 text-6xl font-bold select-none">“</div>
            <div className="md:col-span-10 text-center">
              <p className="text-3xl md:text-5xl font-heading font-medium text-black leading-tight italic">
                Engineering is the vessel, but <span className="underline decoration-black/10 decoration-8 underline-offset-[-2px]">curiosity</span> is the wind.
              </p>
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="w-16 h-0.5 bg-black"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">The Thinker's Creed</span>
              </div>
            </div>
            <div className="md:col-span-1 text-gray-200 text-6xl font-bold text-right select-none">”</div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* About & Interests */}
        <section id="about" className="grid md:grid-cols-2 gap-20 items-center scroll-mt-32">
          <div className="space-y-10 text-left">
            <h2 className="text-5xl font-bold font-heading tracking-tight text-black">A Personal <br /><span className="text-gray-400">Configuration</span></h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                As a <span className="text-black font-medium italic">thinker at heart</span>, I don't just write code; I dissect the "why" behind every implementation. My background in the MERN stack is driven by a desire to build tools that are as thoughtful as they are functional.
              </p>
              <p>
                When the screens go dark, I find my balance in two worlds: the tactical precision of <span className="text-black font-medium underline decoration-black/20 decoration-2">football</span> and the complex, world-building narratives of <span className="text-black font-medium underline decoration-black/20 decoration-2">anime</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-8 border-2 border-black bg-white manga-border-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 bg-black rounded-full"></div>
                   <h3 className="text-black font-bold uppercase text-xs tracking-widest">Anime Soul</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium">Fascinated by high-stakes strategy and character-driven arcs. Currently exploring themes of existentialism in cyberpunk narratives.</p>
              </div>
              <div className="p-8 border-2 border-black bg-white manga-border-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 bg-black rounded-full"></div>
                   <h3 className="text-black font-bold uppercase text-xs tracking-widest">Football IQ</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium">A fan of tactical transitions and team synergy. I see a well-commented codebase as a perfect defensive line — robust and reliable.</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-black/5 rounded-[2.5rem] -z-10 group-hover:inset-0 transition-all duration-500"></div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-gray-100 border-2 border-black">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                    alt="Irfan Zaki" 
                    className="relative w-full h-full grayscale object-cover transition duration-700 filter contrast-125 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-heading font-bold text-2xl">Irfan Zaki</p>
                    <p className="text-xs uppercase tracking-[0.2em] font-medium">The Engineer-Thinker</p>
                </div>
            </div>
          </div>
        </section>

        {/* Interactive Skills Section */}
        <section id="skills" className="space-y-20 scroll-mt-32">
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-bold font-heading tracking-tight">Technical Stack</h2>
            <p className="text-gray-500 max-w-xl mx-auto font-light italic">The tools I use to turn philosophy into product.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {(['Programming', 'Frameworks', 'AI/ML', 'Tools'] as const).map(cat => (
              <div key={cat} className="space-y-8">
                <h3 className="text-[10px] font-bold text-black uppercase tracking-[0.4em] border-b-2 border-black pb-3">{cat}</h3>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.filter(s => s.category === cat).map(skill => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-20 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-black/10 pb-12">
            <div className="space-y-4">
              <h2 className="text-6xl font-bold font-heading text-black tracking-tight">Recent <br /> Works</h2>
              <p className="text-gray-500 font-light text-lg">Logic-heavy experiments and MERN prototypes.</p>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300">
              Open Github <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group space-y-8">
                <div className="aspect-[16/10] overflow-hidden border-2 border-black bg-gray-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-500">
                  <img src={project.imageUrl + "?auto=format&fit=crop&q=80"} alt={project.title} className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-bold font-heading tracking-tight">{project.title}</h3>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <a href={project.githubLink} className="text-gray-400 hover:text-black transition transform hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} className="text-gray-400 hover:text-black transition transform hover:scale-110">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 font-light leading-relaxed text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-[0.2em] text-black bg-gray-100 px-3 py-1 border border-black/5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 bg-black rounded-[4rem] px-8 md:px-24 border border-white/10 scroll-mt-32 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] -z-0"></div>
          <div className="grid md:grid-cols-2 gap-24 relative z-10">
            <div className="space-y-12">
              <h2 className="text-4xl font-bold font-heading tracking-tight text-white border-l-4 border-white pl-6">Academic Path</h2>
              <div className="space-y-16">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">2024 — 2027</span>
                  <h3 className="text-3xl font-bold">{RESUME_DATA.education.degree}</h3>
                  <p className="text-gray-400 font-light italic">{RESUME_DATA.education.institution}</p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <h2 className="text-4xl font-bold font-heading tracking-tight text-white border-l-4 border-white pl-6">Expertise Focus</h2>
              <div className="space-y-10">
                <div className="flex justify-between items-center group cursor-default">
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-gray-300 transition">ML & DS Mastery</h3>
                    <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">Foundational Engineering</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs group-hover:bg-white group-hover:text-black transition duration-300">✓</div>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-gray-300 transition">Deep Neural Networks</h3>
                    <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">Logical Architecture</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs group-hover:bg-white group-hover:text-black transition duration-300">✓</div>
                </div>
                <div className="flex justify-between items-center group cursor-default">
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-gray-300 transition">GenAI & LLM Flow</h3>
                    <p className="text-sm text-gray-500 tracking-widest uppercase mt-1">Human-AI Interface</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs group-hover:bg-white group-hover:text-black transition duration-300">✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 text-center space-y-16 scroll-mt-32">
          <div className="space-y-6">
            <h2 className="text-8xl md:text-[10rem] font-bold font-heading tracking-tighter text-black leading-none">Let's <br /> Build.</h2>
            <p className="text-gray-500 text-xl max-w-xl mx-auto font-light leading-relaxed italic">Currently looking for opportunities to apply logic to real-world problems. Whether it's MERN, AI, or discussing the best anime of the season.</p>
          </div>
          <div className="flex flex-col items-center gap-12">
            <a href={`mailto:${RESUME_DATA.email}`} className="text-2xl md:text-5xl font-bold tracking-tighter hover:text-gray-400 transition break-all border-b-2 border-black/5 pb-2">
              {RESUME_DATA.email}
            </a>
            <div className="flex gap-16 font-bold uppercase text-[10px] tracking-[0.4em] text-gray-400">
              <a href="#" className="hover:text-black hover:tracking-[0.6em] transition-all duration-300">LinkedIn</a>
              <a href="#" className="hover:text-black hover:tracking-[0.6em] transition-all duration-300">GitHub</a>
              <a href="#" className="hover:text-black hover:tracking-[0.6em] transition-all duration-300">Twitter</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 py-16 mt-32 bg-gray-50/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
             <span className="font-heading font-bold text-2xl tracking-tighter">IZ.</span>
             <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Crafted with philosophical intent.</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">© {new Date().getFullYear()} Irfan Zaki — New Delhi, India</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Available for hire</p>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
