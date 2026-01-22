import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ 
  scrollY, 
  activeMenu, 
  setActiveMenu, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollTo, 
  aboutRef, 
  careerRef, 
  evChargersRef, 
  policiesRef 
}) => {
  const navigate = useNavigate();

  return (
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
            <img 
              src="/assets/logo/outdidlogo.png" 
              alt="Logo" 
              className="h-9 w-auto"
              loading="eager"
              fetchpriority="high"
            />
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
    </header>
  );
};

export default Header;
