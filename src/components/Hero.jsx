import React from 'react';

const Hero = ({ mousePos, scrollTo, contactRef }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020812]">
      
      {/* Layer 1: Deep Circuit Base */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          transform: `translateY(calc(var(--scroll-y, 0px) * 0.1)) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23FFBF00' stroke-width='0.5'%3E%3Cpath d='M40 40V0M40 40H0M40 40h40M40 40v40'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          willChange: 'transform'
        }}
      ></div>

      {/* Layer 2: Animated Data Streams */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outdid-amber to-transparent animate-pulse" style={{ transform: 'translateY(calc(var(--scroll-y, 0px) * 0.5))', willChange: 'transform' }}></div>
         <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outdid-blue to-transparent animate-pulse" style={{ animationDelay: '1s', transform: 'translateY(calc(var(--scroll-y, 0px) * 0.4))', willChange: 'transform' }}></div>
      </div>

      {/* Layer 3: Floating High-Tech Components */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ transform: 'translateY(calc(var(--scroll-y, 0px) * 0.25))', willChange: 'transform' }}
      >
        {/* Capacitor Array */}
        <div 
          className="absolute top-[40%] right-[8%] flex flex-col space-y-4"
          style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
        >
           {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 glass rounded-full border-outdid-amber/20 flex items-center justify-center animate-bounce" style={{ animationDelay: `${i*0.5}s`, animationDuration: '4s' }}>
                 <div className="w-6 h-6 rounded-full bg-gradient-to-br from-outdid-amber/20 to-outdid-blue/40 border border-white/10"></div>
              </div>
           ))}
        </div>
      </div>

      {/* Main Hero Background (The Lab) */}
      <div 
        className="absolute inset-0 z-0 opacity-40 scale-110 pointer-events-none"
        style={{
          transform: 'translateY(calc(var(--scroll-y, 0px) * 0.15)) scale(calc(1 + (var(--scroll-y, 0) * 0.0002)))',
          backgroundImage: "url('/assets/image/hero.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          willChange: 'transform'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#020812] via-transparent to-[#020812]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-6 text-center lg:text-left pt-20">
        <div className="inline-flex items-center space-x-3 mb-8 glass px-6 py-2 rounded-full border-outdid-amber/20">
           <div className="w-2 h-2 rounded-full bg-outdid-amber animate-ping"></div>
           <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">R&D System V4.0 // ACTIVE</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] text-white uppercase selection:text-outdid-amber">
          Hardware <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-outdid-amber">Redefined.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-tight tracking-tight">
          Engineering unified private systems that transcend conventional silicon architecture. Precision, security, and intelligence combined.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <button 
            onClick={() => scrollTo(contactRef)}
            className="group relative px-12 py-5 bg-outdid-amber text-outdid-blue rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,191,0,0.3)]"
          >
            Initialize Prototype
            <div className="absolute -inset-1 border border-outdid-amber/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>

      {/* Dashboard HUD - Bottom */}
      <div className="absolute bottom-10 left-10 right-10 z-40 hidden lg:flex items-end justify-between border-t border-white/5 pt-10">
         <div className="flex space-x-16">
            <div>
               <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">Grid Optimization</div>
               <div className="flex items-center space-x-3">
                  <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-outdid-blue to-outdid-amber w-[68%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-white">ION_SYNC: ACTIVE</span>
               </div>
            </div>
            <div>
               <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">Active Telemetry Nodes</div>
               <div className="flex space-x-1">
                  {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`w-3 h-3 rounded-sm ${i < 7 ? 'bg-outdid-amber' : 'bg-white/10'}`}></div>)}
               </div>
            </div>
         </div>
         
         <div className="flex items-center space-x-8">
            <div className="text-right">
               <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 font-mono">ENCRYPTED_LINK: STABLE</div>
               <div className="text-white text-xs font-black">ION_HIVE_OS v2.4.0</div>
            </div>
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-outdid-amber/20 group cursor-pointer hover:rotate-90 transition-all duration-500">
               <svg className="w-6 h-6 text-outdid-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Hero;
