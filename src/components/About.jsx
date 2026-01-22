import React from 'react';

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative reveal-up">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-outdid-amber/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
              alt="Engineering" 
              className="relative rounded-[3rem] shadow-2xl z-10"
            />
          </div>
          <div className="reveal-up">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Identity</span>
            <h2 className="text-5xl md:text-7xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">Engineered <br />for Excellence.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
              Outdid Unified is more than a design house; we are a strategic partner for companies navigating the complexities of modern hardware. From Bangalore's tech hub, we deliver solutions that define industries.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-3xl font-black text-outdid-blue mb-2 tracking-tighter">500+</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Successful Prototypes</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-outdid-blue mb-2 tracking-tighter">50+</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industrial Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
