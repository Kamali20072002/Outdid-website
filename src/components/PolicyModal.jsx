import React from 'react';

const PolicyModal = ({ activePolicy, setActivePolicy, policies }) => {
  if (!activePolicy) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-[#020812]/90 backdrop-blur-md"
        onClick={() => setActivePolicy(null)}
      ></div>
      
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setActivePolicy(null)}
          className="absolute top-8 right-8 z-50 w-10 h-10 bg-outdid-blue text-white rounded-full flex items-center justify-center hover:bg-outdid-amber hover:text-outdid-blue transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8 md:p-12 bg-outdid-blue text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter">{policies[activePolicy].title}</h2>
          <p className="mt-2 text-xs font-bold text-outdid-amber uppercase tracking-[0.4em]">Legal Documentation // Outdid Unified</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white custom-scrollbar-light">
          <div className="space-y-10">
            {policies[activePolicy].content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-black text-outdid-blue uppercase tracking-tight">{section.title}</h3>
                <div className="text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                  {section.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              For further inquiries, contact <span className="text-outdid-blue underline">info@outdidunified.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
