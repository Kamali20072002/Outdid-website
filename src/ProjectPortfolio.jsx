import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectPortfolio = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [inquiryType, setInquiryType] = useState('Inquiry');
  const [requirements, setRequirements] = useState('');
  
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hello! I am your Outdid Solutions Assistant. How can I help you with our project portfolio today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { role: 'user', content: userInput }];
    setChatMessages(newMessages);
    setUserInput('');

    // Simple simulated response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "That's interesting! Would you like me to include this in the final summary for our engineering team on WhatsApp?" 
      }]);
    }, 1000);
  };

  const sendChatToWhatsApp = () => {
    const phoneNumber = "916381779723";
    const summary = chatMessages
      .map(m => `*${m.role === 'assistant' ? 'Outdid' : 'User'}:* ${m.content}`)
      .join('\n\n');
    
    const message = `*Chat Summary & Inquiry*\n\n${summary}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsAppAction = (e) => {
    e.preventDefault();
    const phoneNumber = "916381779723";
    const message = `*${inquiryType} Request*\n\n*Product:* ${activeInquiry.title}\n*Category:* ${activeInquiry.category}\n*Spec:* ${activeInquiry.spec}\n\n*User Requirements:*\n${requirements}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset state
    setActiveInquiry(null);
    setRequirements('');
  };

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
    <div className="min-h-screen bg-white font-sans text-outdid-blue selection:bg-outdid-amber/30 overflow-x-hidden relative">
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FFBF00;
          border-radius: 10px;
        }
      `}</style>
      
      {/* Background Circuit Pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='%23020812' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%23020812'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%23020812'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%23020812'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%23020812'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px'
        }}
      ></div>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 
          ? 'bg-[#020812]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
      >
        <div className="mx-auto px-4 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center group cursor-pointer">
              <img src="/assets/logo/otdlogo.png" alt="Logo" className="h-9 w-auto" />
              
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${scrollY > 50 ? 'text-gray-400' : 'text-outdid-blue/60'}`}>
              <Link to="/" className="hover:text-outdid-amber transition-colors">Home</Link>
              <a href="https://ionhive.in/" target="_blank" rel="noopener noreferrer" className="hover:text-outdid-amber transition-colors">Outdid Hub</a>
              <Link to="/" className="hover:text-outdid-amber transition-colors">About</Link>
              <Link to="/" className="hover:text-outdid-amber transition-colors">Career</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hidden md:block text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full border transition-all ${
                scrollY > 50 
                ? 'text-white border-white/20 hover:bg-white hover:text-outdid-blue' 
                : 'text-outdid-blue border-outdid-blue/10 hover:bg-outdid-blue hover:text-white'
              }`}
            >
              Back to Home
            </Link>
           
          </div>
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
                img: "/assets/image/phone2.png",
                category: "EV Infrastructure"
              },
              {
                title: "OCPP Controller",
                spec: "NFC Enabled",
                desc: "Advanced controller card supporting OCPP 1.6J/2.0 protocols for global smart charging standards.",
                img: "/assets/image/ocpp.png",
                category: "Power Electronics"
              },
              {
                title: "Vehicle Control Unit",
                spec: "VCU Systems",
                desc: "The central brain for electric vehicles managing drivetrain, safety, and diagnostics.",
                img: "/assets/image/vehiclecontrol.png",
                category: "Automotive"
              },
              {
                title: "Discharge Module",
                spec: "V2L / V2G",
                desc: "Bi-directional power modules enabling Vehicle-to-Load and Vehicle-to-Grid applications.",
                img: "/assets/image/dischargemodule.png",
                category: "Energy Systems"
              },
              {
                title: "Remote Diagnostics",
                spec: "Predictive AI",
                desc: "Cloud-based maintenance system predicting hardware failures with machine learning.",
                img: "/assets/image/Remotediag.png",
                category: "Cloud IoT"
              },
              {
                title: "CAN Data Logger",
                spec: "High Speed",
                desc: "Industrial-grade CAN bus logger for real-time vehicle data acquisition and analysis.",
                img: "/assets/image/candatalogger.png",
                category: "Diagnostics"
              },
              {
                title: "BMS Analytics",
                spec: "Health Monitoring",
                desc: "Sophisticated battery management analytics for long-term state-of-health tracking.",
                img: "/assets/image/bms.png",
                category: "Energy Management"
              },
              {
                title: "Vehicle Tracking",
                spec: "GPS Telematics",
                desc: "Advanced GPS-based tracking system with real-time speed, location, and geofencing.",
                img: "/assets/image/vehiclecontrol.png",
                category: "Fleet Management"
              },
              {
                title: "Voltmeter Module",
                spec: "Ammeter Combo",
                desc: "Precision voltage and current monitoring module for critical industrial power systems.",
                img: "/assets/image/voltmeter.png",
                category: "Instrumentation"
              },
              {
                title: "BLDC Controller",
                spec: "Motor Control",
                desc: "High-efficiency BLDC motor controller for light electric vehicles and robotics.",
                img: "/assets/image/bldc.png",
                category: "Motion Control"
              },
              {
                title: "LoRa Controller",
                spec: "Long Range",
                desc: "Ultra-low power LoRa controller card for wide-area remote industrial sensing.",
                img: "/assets/image/lora.png",
                category: "Connectivity"
              },
              {
                title: "4G Data Logger",
                spec: "Cellular IOT",
                desc: "High-bandwidth 2G/4G data logger for global asset monitoring and telemetry.",
                img: "/assets/image/4gdatalogger.png",
                category: "Connectivity"
              },
              {
                title: "Solar LoRa Node",
                spec: "Panel Monitoring",
                desc: "Master/Node controller system for real-time solar farm efficiency tracking.",
                img: "/assets/image/solarlora.png",
                category: "Renewables"
              },
              {
                title: "VFD Controller",
                spec: "Motor Logic",
                desc: "Variable Frequency Drive controller for advanced industrial automation.",
                img: "/assets/image/vfd.png",
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
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <button 
                      onClick={() => { setActiveInquiry(project); setInquiryType('Order'); }}
                      className="px-8 py-3 bg-outdid-blue text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-outdid-amber hover:text-outdid-blue transition-all shadow-lg shadow-outdid-blue/10"
                    >
                      Order Now
                    </button>
                    <button 
                      onClick={() => { setActiveInquiry(project); setInquiryType('Inquiry'); }}
                      className="px-8 py-3 bg-gray-100 text-outdid-blue rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-outdid-blue hover:text-white transition-all"
                    >
                      Raise Ticket
                    </button>
                  </div>

                  <div 
                    onClick={() => { setActiveInquiry(project); setInquiryType('Inquiry'); }}
                    className="flex items-center space-x-4 group/btn cursor-pointer"
                  >
                    <div className="w-12 h-[2px] bg-outdid-blue/10 group-hover/btn:w-20 group-hover/btn:bg-outdid-amber transition-all duration-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-outdid-blue/40 group-hover/btn:text-outdid-blue transition-colors">View Specifications</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry / Order Modal */}
      {activeInquiry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-[#020812]/95 backdrop-blur-xl"
            onClick={() => setActiveInquiry(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
            {/* Left: Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img 
                src={activeInquiry.img} 
                alt={activeInquiry.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.4em] mb-2 block">{activeInquiry.category}</span>
                <h3 className="text-4xl font-black uppercase tracking-tighter">{activeInquiry.title}</h3>
              </div>
            </div>

            {/* Right: Form Side */}
            <div className="md:w-1/2 flex flex-col p-8 md:p-16 overflow-y-auto">
              <button 
                onClick={() => setActiveInquiry(null)}
                className="absolute top-8 right-8 w-10 h-10 bg-outdid-blue text-white rounded-full flex items-center justify-center hover:bg-outdid-amber hover:text-outdid-blue transition-all z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <div className="mb-10">
                <h4 className="text-[10px] font-black text-outdid-blue/30 uppercase tracking-[0.5em] mb-4">Product Overview</h4>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  {activeInquiry.desc}
                </p>
                <div className="mt-6 flex items-center space-x-3 text-outdid-blue font-black text-[10px] uppercase tracking-widest bg-gray-50 p-4 rounded-2xl border border-gray-100">
                   <span className="text-outdid-amber">Spec:</span>
                   <span>{activeInquiry.spec}</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex space-x-4 mb-8">
                  {['Inquiry', 'Order'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setInquiryType(type)}
                      className={`flex-1 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border-2 ${
                        inquiryType === type 
                        ? 'bg-outdid-blue text-white border-outdid-blue shadow-xl shadow-outdid-blue/20' 
                        : 'bg-white text-outdid-blue/40 border-gray-100 hover:border-outdid-blue/20'
                      }`}
                    >
                      {type === 'Inquiry' ? 'Raise Ticket' : 'Place Order'}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-outdid-blue/30 mb-3 block ml-1">
                      {inquiryType === 'Inquiry' ? 'Your Requirements / Questions' : 'Order Specifications & Quantity'}
                    </label>
                    <textarea 
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      placeholder={inquiryType === 'Inquiry' ? "How can we help you with this system?" : "Specify quantity and any customization requirements..."}
                      className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-8 py-6 text-outdid-blue focus:outline-none focus:border-outdid-amber transition-all min-h-[150px] resize-none font-medium"
                    ></textarea>
                  </div>

                  <button 
                    onClick={handleWhatsAppAction}
                    disabled={!requirements.trim()}
                    className="w-full py-6 bg-green-500 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-green-600 transition-all flex items-center justify-center space-x-4 shadow-xl shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>
                  
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                    Direct communication with Outdid Engineering Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Interface */}
      <div className="fixed bottom-8 right-8 z-[120] flex flex-col items-end">
        {isChatOpen && (
          <div className="w-80 md:w-96 bg-white rounded-[32px] shadow-2xl border border-gray-100 mb-6 flex flex-col animate-in slide-in-from-bottom-10 duration-500 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-outdid-blue p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-white font-black uppercase tracking-widest text-[10px]">Outdid Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-gray-50/50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-outdid-amber text-outdid-blue rounded-tr-none' 
                    : 'bg-white text-outdid-blue shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input 
                  type="text" 
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-outdid-amber"
                />
                <button type="submit" className="p-2 bg-outdid-blue text-white rounded-xl hover:bg-outdid-amber hover:text-outdid-blue transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
              </form>
              
              <button 
                onClick={sendChatToWhatsApp}
                className="w-full mt-4 py-3 bg-green-500 text-white rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center justify-center space-x-2 hover:bg-green-600 transition-all shadow-lg shadow-green-500/10"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>Finish & Send Summary</span>
              </button>
            </div>
          </div>
        )}

        {/* Floating Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${isChatOpen ? 'bg-outdid-amber rotate-90' : 'bg-outdid-blue'}`}
        >
          {isChatOpen ? (
            <svg className="w-8 h-8 text-outdid-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          )}
        </button>
      </div>

      <footer className="bg-[#020812] py-24 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
           <img src="/assets/logo/otdlogo.png" alt="Outdid" className="h-10 mx-auto mb-12 opacity-40" />
           <p className="text-gray-600 text-[10px] font-bold tracking-[0.6em] uppercase">© 2026 Outdid Unified Private Limited // Secure. Unified. Intelligent.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPortfolio;
