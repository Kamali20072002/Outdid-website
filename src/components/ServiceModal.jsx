import React from 'react';

const ServiceModal = ({ activeService, setActiveService, serviceDetails, scrollTo, contactRef }) => {
  if (!activeService) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-[#020812]/95 backdrop-blur-xl"
        onClick={() => setActiveService(null)}
      ></div>
      
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-[#020812] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-500 border border-white/10">
        <button 
          onClick={() => setActiveService(null)}
          className="absolute top-8 right-8 z-50 w-12 h-12 bg-white/5 text-white hover:bg-white hover:text-outdid-blue rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
          <img 
            src={serviceDetails[activeService].image} 
            alt={serviceDetails[activeService].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-[#020812]/20 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.4em] mb-4 block">R&D // Service Sector</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight">{serviceDetails[activeService].title}</h2>
            <p className="mt-4 text-sm text-gray-400 font-bold uppercase tracking-widest">{serviceDetails[activeService].subtitle}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-16 bg-[#020812] custom-scrollbar">
          <div className="max-w-2xl">
            <h3 className="text-xs font-black text-outdid-amber uppercase tracking-[0.4em] mb-6">Strategic Overview</h3>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              {serviceDetails[activeService].overview}
            </p>

            <div className="space-y-16">
              {serviceDetails[activeService].sections.map((section, idx) => (
                <div key={idx}>
                  <div className="flex items-center space-x-4 mb-8">
                    <span className="text-4xl font-black text-white/5">{idx + 1}</span>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">{section.title}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-outdid-amber mt-1.5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ready to Initialize?</p>
                <p className="text-white font-black uppercase tracking-tight">Connect with our engineering team</p>
              </div>
              <button 
                onClick={() => { setActiveService(null); scrollTo(contactRef); }}
                className="px-10 py-5 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-lg shadow-outdid-amber/20"
              >
                Request Technical Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
