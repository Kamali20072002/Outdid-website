import React from 'react';

const Contact = ({ contactRef, contactFormData, handleContactChange, handleContactSubmit, contactSuccess }) => {
  return (
    <section ref={contactRef} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-outdid-blue rounded-[4rem] p-12 md:p-24 relative overflow-hidden reveal-up">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Ready to start?</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter">Initialize <br />Consultation.</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                Connect with our strategic engineering team to discuss your next breakthrough project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-outdid-amber">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className="text-white font-bold tracking-widest text-sm uppercase">info@outdidunified.com</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <input 
                type="text" 
                name="name"
                value={contactFormData.name}
                onChange={handleContactChange}
                required
                placeholder="Name" 
                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-outdid-amber transition-all outline-none" 
              />
              <input 
                type="email" 
                name="email"
                value={contactFormData.email}
                onChange={handleContactChange}
                required
                placeholder="Email Address" 
                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-outdid-amber transition-all outline-none" 
              />
              <textarea 
                name="message"
                value={contactFormData.message}
                onChange={handleContactChange}
                required
                rows="4" 
                placeholder="Project Overview" 
                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-outdid-amber transition-all outline-none resize-none"
              ></textarea>
              <button type="submit" className="w-full py-5 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all">
                Send Transmission
              </button>
              {contactSuccess && (
                <p className="mt-4 text-center text-outdid-amber font-bold text-[10px] uppercase tracking-widest">Transmission successful!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
