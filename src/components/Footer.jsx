import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ policiesRef, setActivePolicy }) => {
  return (
    <footer ref={policiesRef} className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center space-x-4">
            <img src="/assets/logo/outdidlogo.png" alt="Logo" className="h-8 w-auto grayscale opacity-50" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">© 2024 Outdid Unified Private Limited</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {['privacy', 'terms', 'refund'].map((policy) => (
              <button 
                key={policy}
                onClick={() => setActivePolicy(policy)}
                className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-outdid-blue transition-colors"
              >
                {policy.charAt(0).toUpperCase() + policy.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
