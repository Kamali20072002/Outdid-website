import React from 'react';

const Hero = ({ mousePos }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020812]">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#020812] via-transparent to-[#020812] z-1" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 reveal-up">
          <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.5em]">Future // Technology // Unified</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85] reveal-up">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-outdid-amber via-white to-white">Perfection.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed mb-12 reveal-up">
          Outdid Unified is a strategic engineering partner delivering high-performance embedded systems and power electronics for the global industrial landscape.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 reveal-up">
          <button className="group px-10 py-5 bg-white text-outdid-blue rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-outdid-amber transition-all shadow-2xl shadow-white/5">
            Initialize Project
          </button>
          <button className="px-10 py-5 border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/5 transition-all">
            Technical Portfolio
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
