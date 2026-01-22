import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ 
  scrollY, 
  activeMenu, 
  setActiveMenu, 
  setActiveService,
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollTo, 
  aboutRef, 
  careerRef, 
  contactRef,
  evChargersRef, 
  policiesRef 
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm pt-16 transition-all duration-500"
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 || activeMenu || mobileMenuOpen 
        ? 'bg-[#020812]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
        : 'bg-transparent'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto px-4 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link 
            to="/"
            className="flex items-center group cursor-pointer" 
            onMouseEnter={() => setActiveMenu(null)}
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="bg-white p-1.5 rounded-xl shadow-sm transition-all duration-500">
              <img 
                src="/assets/logo/outdidlogo.png" 
                alt="Logo" 
                className="h-7 w-auto mix-blend-multiply"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div className="ml-3 text-lg font-black tracking-tighter hidden sm:block">
              <span className="transition-all duration-500 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-outdid-amber">
                Outdid Unified
              </span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex space-x-8 text-[12px] font-bold uppercase tracking-[0.2em]">
            <button 
              onMouseEnter={() => setActiveMenu('products')}
              onClick={() => navigate('/outdidprojectportfolios')}
              className={`transition-colors py-6 ${
                activeMenu === 'products' 
                ? 'text-outdid-amber' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              Products
            </button>
            <button 
              onMouseEnter={() => setActiveMenu('hub')}
              className={`transition-colors py-6 ${
                activeMenu === 'hub' 
                ? 'text-outdid-amber' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              Outdid Hub
            </button>
            <button 
              onClick={() => scrollTo(aboutRef)}
              onMouseEnter={() => setActiveMenu(null)}
              className="transition-colors py-6 text-gray-400 hover:text-white"
            >
              About
            </button>
            <button 
              onClick={() => scrollTo(careerRef)}
              onMouseEnter={() => setActiveMenu(null)}
              className="transition-colors py-6 text-gray-400 hover:text-white"
            >
              Career
            </button>
            <button 
              onClick={() => scrollTo(evChargersRef)}
              onMouseEnter={() => setActiveMenu(null)}
              className="transition-colors py-6 text-gray-400 hover:text-white"
            >
              EVSE
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-6 text-[11px] font-bold uppercase tracking-widest text-gray-400" onMouseEnter={() => setActiveMenu(null)}>
          <div className="hidden md:flex items-center space-x-8">
            <span className="cursor-pointer transition-colors hover:text-white" onClick={() => scrollTo(policiesRef)}>Support</span>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <a href="mailto:info@outdidunified.com" className="hidden sm:block p-2 hover:bg-white/5 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/outdid-unified" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-2 hover:bg-white/5 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.977.784-1.764 1.75-1.764s1.75.787 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          
          <button 
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#020812] pt-24 px-6 animate-in fade-in duration-500 overflow-y-auto">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-outdid-amber/5 blur-[100px] -z-10"></div>
          
          <div className="flex flex-col space-y-8 text-4xl font-black uppercase tracking-tighter text-white">
            <button 
              onClick={() => { 
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
                setMobileMenuOpen(false); 
              }} 
              className="text-left hover:text-outdid-amber transition-colors flex items-center justify-between group"
            >
              <span>Home</span>
              <span className="text-xs font-black text-outdid-amber opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">01</span>
            </button>
            
            <button 
              onClick={() => { navigate('/outdidprojectportfolios'); setMobileMenuOpen(false); }} 
              className="text-left hover:text-outdid-amber transition-colors flex items-center justify-between group"
            >
              <span>Products</span>
              <span className="text-xs font-black text-outdid-amber opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">02</span>
            </button>

            <button 
              onClick={() => { scrollTo(aboutRef); setMobileMenuOpen(false); }} 
              className="text-left hover:text-outdid-amber transition-colors flex items-center justify-between group"
            >
              <span>About</span>
              <span className="text-xs font-black text-outdid-amber opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">03</span>
            </button>

            <button 
              onClick={() => { scrollTo(careerRef); setMobileMenuOpen(false); }} 
              className="text-left hover:text-outdid-amber transition-colors flex items-center justify-between group"
            >
              <span>Career</span>
              <span className="text-xs font-black text-outdid-amber opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">04</span>
            </button>

            <button 
              onClick={() => { scrollTo(contactRef); setMobileMenuOpen(false); }} 
              className="text-left hover:text-outdid-amber transition-colors flex items-center justify-between group"
            >
              <span>Contact</span>
              <span className="text-xs font-black text-outdid-amber opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">05</span>
            </button>

            <button 
              onClick={() => { window.open('https://ionhive.in/', '_blank'); setMobileMenuOpen(false); }} 
              className="text-left text-outdid-amber hover:text-white transition-colors flex items-center justify-between group"
            >
              <span>Outdid Hub</span>
              <span className="text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity tracking-[0.3em]">LIVE</span>
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 mb-20">
             <div className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.5em] mb-6">Initialize Collaboration</div>
             <button 
              onClick={() => { scrollTo(contactRef); setMobileMenuOpen(false); }}
              className="w-full py-6 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-outdid-amber/20 hover:scale-[1.02] transition-transform"
             >
               Get In Touch
             </button>
             
             <div className="mt-12 flex items-center space-x-6">
               <a href="mailto:info@outdidunified.com" className="text-gray-500 hover:text-white transition-colors">
                 <span className="text-[10px] font-bold uppercase tracking-widest">Email</span>
               </a>
               <a href="https://linkedin.com/company/outdid-unified" className="text-gray-500 hover:text-white transition-colors">
                 <span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
               </a>
             </div>
          </div>
        </div>
      )}

      {/* Mega Menu Content */}
      {activeMenu && (
        <div 
          className="absolute top-16 left-0 right-0 bg-[#020812]/95 backdrop-blur-xl text-white border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-300"
          onMouseEnter={() => setActiveMenu(activeMenu)}
        >
          <div className="mx-auto px-4 md:px-24 py-16 flex gap-20">
            <div className="w-64">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-outdid-amber mb-8 text-left">
                {activeMenu === 'products' ? 'Product Portfolio' : 'Our Services'}
              </h4>
              <ul className="space-y-6 text-xl font-black text-left uppercase tracking-tighter text-white">
                {activeMenu === 'products' ? (
                  <>
                    <li onClick={() => { navigate('/outdidprojectportfolios'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">Embedded Systems</li>
                    <li onClick={() => { navigate('/outdidprojectportfolios'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">EV Infrastructure</li>
                    <li onClick={() => { navigate('/outdidprojectportfolios'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">IoT Solutions</li>
                  </>
                ) : (
                  <>
                    <li onClick={() => { setActiveService('hardware'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">Hardware Design</li>
                    <li onClick={() => { setActiveService('pcb'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">PCB Engineering</li>
                    <li onClick={() => { setActiveService('firmware'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">Firmware Dev</li>
                    <li onClick={() => { setActiveService('software'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">Application Development</li>
                    <li onClick={() => { setActiveService('mechanical'); setActiveMenu(null); }} className="hover:text-outdid-amber cursor-pointer transition-all hover:translate-x-2">Mechanical Design</li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="flex-1 grid grid-cols-3 gap-8">
              {(activeMenu === 'products' ? [
                { name: 'Vehicle Control', desc: 'VCU & Drive systems', img: '/assets/image/vehiclecontrol.png' },
                { name: 'Power Electronics', desc: 'BMS & Motor Control', img: '/assets/image/bms.png' },
                { name: 'Telematics', desc: 'Data Loggers & VTS', img: '/assets/image/telemetry.png' }
              ] : [
                { name: 'Hardware R&D', desc: 'Custom silicon & board design', img: '/assets/image/hero.png' },
                { name: 'PCB Precision', desc: 'Multi-layer prototyping', img: '/assets/image/pcb.png' },
                { name: 'Unified Software', desc: 'Cloud & system integration', img: '/assets/image/software.png' }
              ]).map(item => (
                <div key={item.name} className="flex flex-col group cursor-pointer">
                  <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative">
                    <div className="absolute inset-0 bg-outdid-amber/0 group-hover:bg-outdid-amber/10 transition-colors z-10"></div>
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.3em] mb-2">{item.name}</span>
                  <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
