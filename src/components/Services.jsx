import React from 'react';

const Services = ({ setActiveService }) => {
  return (
    <section className="bg-[#020812] py-32 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 reveal-up">
          <div className="max-w-2xl">
            <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Core Competencies</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-0 uppercase tracking-tighter">Strategic <br />Engineering.</h2>
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px] mb-4">
            01 — Hardware // 02 — Software // 03 — Mechanical
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 reveal-up">
          {[
            { id: 'hardware', title: 'Hardware Design', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
            { id: 'software', title: 'Software Design', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { id: 'mechanical', title: 'Mechanical Design', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
            { id: 'pcb', title: 'PCB Layout', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 21a10.003 10.003 0 008.139-4.187l.054.09c1.744 2.772 2.753 6.054 2.753 9.571M12 7c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' },
            { id: 'firmware', title: 'Embedded Firmware', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
            { id: 'software', title: 'Systems Integration', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
          ].map((service, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveService(service.id)}
              className="group p-12 bg-white/5 hover:bg-white transition-all duration-700 cursor-pointer border border-white/5"
            >
              <div className="mb-12">
                <svg className="w-8 h-8 text-outdid-amber group-hover:text-outdid-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white group-hover:text-outdid-blue transition-colors mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-600 transition-colors text-sm font-medium leading-relaxed">
                High-precision engineering for mission-critical systems and advanced industrial applications.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
