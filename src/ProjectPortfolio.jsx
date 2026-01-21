import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPortfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Reveal on scroll logic
    const observerOptions = {
      threshold: 0,
      rootMargin: "200px 0px 200px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-outdid-blue selection:bg-outdid-amber/30 overflow-x-hidden">
      {/* Mini Header for Portfolio */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-[#020812]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="mx-auto px-4 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center group cursor-pointer">
            <img src="/assets/logo/outdidlogo.png" alt="Logo" className="h-9 w-auto" />
            <div className="ml-3 text-lg font-black tracking-tighter hidden sm:block text-white uppercase">
              Outdid Unified
            </div>
          </Link>
          <Link to="/" className="text-xs font-black text-white hover:text-outdid-amber transition-colors uppercase tracking-[0.2em]">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Project Portfolio Section */}
      <section className="bg-white py-32 pt-48 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 reveal-up">
          <div className="max-w-4xl mb-24">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Track Record</span>
            <h2 className="text-5xl md:text-7xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">Project <br />Portfolio.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              A comprehensive showcase of high-performance embedded systems, power electronics, and industrial IoT solutions engineered for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                title: "EV Chargers",
                spec: "3.7kW / 7.4kW / 11kW / 22kW",
                desc: "Complete line of smart AC chargers with integrated cloud management and load balancing.",
                img: "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?auto=format&fit=crop&q=80&w=1200",
                category: "EV Infrastructure"
              },
              {
                title: "OCPP Controller",
                spec: "NFC Enabled",
                desc: "Advanced controller card supporting OCPP 1.6J/2.0 protocols for global smart charging standards.",
                img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1200",
                category: "Power Electronics"
              },
              {
                title: "Vehicle Control Unit",
                spec: "VCU Systems",
                desc: "The central brain for electric vehicles managing drivetrain, safety, and diagnostics.",
                img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
                category: "Automotive"
              },
              {
                title: "Discharge Module",
                spec: "V2L / V2G",
                desc: "Bi-directional power modules enabling Vehicle-to-Load and Vehicle-to-Grid applications.",
                img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
                category: "Energy Systems"
              },
              {
                title: "Remote Diagnostics",
                spec: "Predictive AI",
                desc: "Cloud-based maintenance system predicting hardware failures with machine learning.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
                category: "Cloud IoT"
              },
              {
                title: "CAN Data Logger",
                spec: "High Speed",
                desc: "Industrial-grade CAN bus logger for real-time vehicle data acquisition and analysis.",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
                category: "Diagnostics"
              },
              {
                title: "BMS Analytics",
                spec: "Health Monitoring",
                desc: "Sophisticated battery management analytics for long-term state-of-health tracking.",
                img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1200",
                category: "Energy Management"
              },
              {
                title: "Vehicle Tracking",
                spec: "GPS Telematics",
                desc: "Advanced GPS-based tracking system with real-time speed, location, and geofencing.",
                img: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=1200",
                category: "Fleet Management"
              },
              {
                title: "Voltmeter Module",
                spec: "Ammeter Combo",
                desc: "Precision voltage and current monitoring module for critical industrial power systems.",
                img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1200",
                category: "Instrumentation"
              },
              {
                title: "BLDC Controller",
                spec: "Motor Control",
                desc: "High-efficiency BLDC motor controller for light electric vehicles and robotics.",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
                category: "Motion Control"
              },
              {
                title: "LoRa Controller",
                spec: "Long Range",
                desc: "Ultra-low power LoRa controller card for wide-area remote industrial sensing.",
                img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200",
                category: "Connectivity"
              },
              {
                title: "4G Data Logger",
                spec: "Cellular IOT",
                desc: "High-bandwidth 2G/4G data logger for global asset monitoring and telemetry.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
                category: "Connectivity"
              },
              {
                title: "Solar LoRa Node",
                spec: "Panel Monitoring",
                desc: "Master/Node controller system for real-time solar farm efficiency tracking.",
                img: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?auto=format&fit=crop&q=80&w=1200",
                category: "Renewables"
              },
              {
                title: "VFD Controller",
                spec: "Motor Logic",
                desc: "Variable Frequency Drive controller for advanced industrial automation.",
                img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=1200",
                category: "Industrial Automation"
              }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-10 shadow-2xl">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-[#020812]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-10 left-10">
                    <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-outdid-blue uppercase tracking-widest shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-4">
                  <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.4em] mb-4 block">{project.spec}</span>
                  <h3 className="text-4xl font-black text-outdid-blue mb-6 uppercase tracking-tighter group-hover:text-outdid-amber transition-colors">{project.title}</h3>
                  <p className="text-gray-500 font-medium text-lg leading-relaxed mb-8 max-w-lg">
                    {project.desc}
                  </p>
                  <div className="flex items-center space-x-4 group/btn cursor-pointer">
                    <div className="w-12 h-[2px] bg-outdid-blue/10 group-hover/btn:w-20 group-hover/btn:bg-outdid-amber transition-all duration-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outdid-blue/40 group-hover/btn:text-outdid-blue transition-colors">Project Details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#020812] py-24 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
           <img src="/assets/logo/outdidlogo.png" alt="Outdid" className="h-10 mx-auto mb-12 opacity-40" />
           <p className="text-gray-600 text-[10px] font-bold tracking-[0.6em] uppercase">© 2026 Outdid Unified Private Limited // Secure. Unified. Intelligent.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPortfolio;
