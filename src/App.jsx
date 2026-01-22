import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import ProjectPortfolio from './ProjectPortfolio';

const policies = {
  privacy: {
    title: "Privacy Policy",
    content: [
      {
        title: "1. Information We Collect",
        text: "Personal Information: When you register an account, we collect your mobile number and email address.\n\nUser Credentials: We encrypt your password and store it securely in our database.\n\nPayment Information: We do not store or process sensitive payment information (e.g., credit card numbers, UPI IDs). All payment transactions are securely processed through Razorpay.\n\nLocation Information: We do not collect or store location data. The App uses Google Maps APIs solely to help you find nearby EV chargers."
      },
      {
        title: "2. How We Use Your Data",
        text: "We use your mobile number and email address for account creation, login, and password recovery purposes.\n\nNo promotional emails or marketing messages will be sent to you, except for essential notifications like password reset emails."
      },
      {
        title: "3. Data Security",
        text: "We take reasonable measures to protect your personal data from unauthorized access or disclosure. Passwords are stored using encryption, and access to personal information is restricted to authorized personnel only.\n\nWe recommend that you do not jailbreak or root your device, as it may compromise security and interfere with the App's functionality."
      },
      {
        title: "4. Third-Party Services",
        text: "The App integrates Razorpay for payment processing. Razorpay handles all sensitive payment data, and you are bound by their privacy policy when making payments through the App."
      },
      {
        title: "5. Data Retention",
        text: "We retain your personal data as long as your account is active. If you wish to delete your account, you can contact our support team, and your data will be permanently deleted."
      },
      {
        title: "6. User Rights",
        text: "You have the right to access, update, or delete your account information at any time. Contact us at info@outdidunified.com for assistance with any data-related requests."
      },
      {
        title: "7. Account Deletion",
        text: "To delete your account, you can either click the \"Delete Account\" option within the app or send an email to info@outdidunified.com. Your account will be permanently deleted upon email confirmation, and all your data will be permanently removed."
      },
      {
        title: "Privacy Policy for ionHive Mobile Application",
        text: "Welcome to ionHive. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our app.\n\nUsername: Used for user identification and authentication.\n\nEmail Address: Required for login, account management, and communication.\n\nPhone Number (Optional): Used for admin-related handling and verification.\n\nLocation Data: Collected only with user consent to display nearby charging stations and improve navigation. Location is not tracked continuously and can be disabled in device settings.\n\nData Storage: We store your data securely in MongoDB with strict security measures to prevent unauthorized access, alteration, or misuse."
      }
    ]
  },
  terms: {
    title: "Terms & Conditions",
    content: [
      {
        title: "1. Service Overview",
        text: "The App provides a platform for users to locate and charge their electric vehicles at designated stations. Payment for charging services is facilitated through Razorpay, an integrated payment gateway.\n\nBy using the App, you agree to comply with these terms and any local regulations governing EV charging."
      },
      {
        title: "2. User Account Responsibilities",
        text: "You are required to create an account to use the App. Your account must be linked to a valid mobile number and email address.\n\nYou are responsible for maintaining the security of your account by using a strong password. Any unauthorized use of your account should be reported to our support team immediately."
      },
      {
        title: "3. Payment Processing",
        text: "All payments are processed by Razorpay. We do not store or handle any sensitive payment data, such as credit card numbers or UPI IDs. Razorpay's terms and conditions govern all payment-related activities, and you are responsible for any issues arising from payment disputes."
      },
      {
        title: "4. App Permissions",
        text: "The App requires certain device permissions, such as access to location services to help you find nearby chargers and camera access to scan QR codes at the charging stations. By granting these permissions, you acknowledge that the App can function correctly."
      },
      {
        title: "5. App Updates and Modifications",
        text: "We reserve the right to modify or update the App at any time to improve its functionality, fix bugs, or introduce new features. It is your responsibility to keep the App updated to ensure it works as intended."
      },
      {
        title: "6. Liability Disclaimer",
        text: "While we strive to provide accurate information and reliable functionality, the App may sometimes rely on third-party services (e.g., Razorpay, Google Maps) for certain features. We are not responsible for any losses or damages caused by service interruptions, incorrect data, or reliance on third-party services."
      }
    ]
  },
  refund: {
    title: "Cancellation & Refund Policy",
    content: [
      {
        title: "1. Cancellations",
        text: "Cancellations will be considered only if the request is made within 15 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them."
      },
      {
        title: "2. Perishable Items",
        text: "OUTDID UNIFIED PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good."
      },
      {
        title: "3. Damaged or Defective Items",
        text: "In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at their own end. This should be reported within 15 days of receipt of the products."
      },
      {
        title: "4. Expectations",
        text: "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 15 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision."
      },
      {
        title: "5. Processing",
        text: "In case of any refunds approved by OUTDID UNIFIED PRIVATE LIMITED, it'll take 9-15 days for the refund to be processed to the end customer."
      }
    ]
  }
};

function Home() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [activePolicy, setActivePolicy] = useState(null);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [careerSuccess, setCareerSuccess] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    const message = `
New Contact Inquiry:
Name: ${contactFormData.name}
Email: ${contactFormData.email}
Message: ${contactFormData.message}
    `.trim();

    const subject = `Contact Inquiry - ${contactFormData.name}`;
    const mailtoUrl = `mailto:kamalivs20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;

    setContactSuccess(true);
    setContactFormData({ name: '', email: '', message: '' });
    setTimeout(() => setContactSuccess(false), 5000);
  };

  const [careerFormData, setCareerFormData] = useState({
    position: 'Apply Now',
    name: '',
    startDate: '',
    email: '',
    relocate: 'Yes',
    phone: '',
    lastCompany: '',
    comments: ''
  });

  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    
    const message = `
New Career Inquiry:
Position: ${careerFormData.position}
Name: ${careerFormData.name}
Start Date: ${careerFormData.startDate}
Email: ${careerFormData.email}
Relocate: ${careerFormData.relocate}
Phone: ${careerFormData.phone}
Last Company: ${careerFormData.lastCompany}
Comments: ${careerFormData.comments}
    `.trim();

    const subject = `Career Inquiry - ${careerFormData.name} (${careerFormData.position})`;
    const mailtoUrl = `mailto:kamalivs20@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;

    setCareerSuccess(true);
    setCareerFormData({
      position: 'Apply Now',
      name: '',
      startDate: '',
      email: '',
      relocate: 'Yes',
      phone: '',
      lastCompany: '',
      comments: ''
    });
    setTimeout(() => setCareerSuccess(false), 5000);
  };

  const serviceDetails = {
    hardware: {
      title: "Hardware Design & Development",
      subtitle: "Electronic Design Services for Embedded Systems",
      image: "assets/image/hardware.png",
      overview: "Our team of designers, with their immense industry experience, brings to you the best designs and development services created out of state-of-the-art technologies and methodologies. At Outdid Unified, we design, develop and prototype diverse, customized electronic hardware devices while ensuring cost effective, compact, faster, reliable, and efficient systems.",
      sections: [
        {
          title: "Hardware Development",
          items: ["Multi-core and multi-processor embedded hardware design", "PCB Layout and Analysis", "Signal Integrity, Thermal and Structural Integrity analysis", "Product ruggedization", "Development Platforms and System-on-Modules (SoM)", "Small-footprint and Power-optimized Designs"]
        },
        {
          title: "Architectures",
          items: ["Qualcomm – SD820", "NXP – i.MX series, PowerPC, QorIQ", "Texas Instruments – OMAP, Sitara, DaVinci, DSP", "Analog Devices – ADSP, SHARC, Blackfin", "ARM – Cortex™-A8/A9/A15", "FPGA – Xilinx (Spartan, Virtex) and Intel (Stratix, Arria)"]
        },
        {
          title: "Power & Digital",
          items: ["Switch mode and linear power supplies", "High-voltage AC inverters", "High-speed synchronous memory arrays", "Digital radio and base-band processing", "Analog and audio circuit design"]
        }
      ]
    },
    pcb: {
      title: "PCB Layout & Analysis",
      subtitle: "Custom PCB Design Services for HDI and Mixed Signal",
      image: "assets/image/pcb2.png",
      overview: "Outdid Unified is among the leading custom PCB Design Services companies in Bangalore. We offer complex multi-processor, MIL-STD-compliant, multi-layer board designs with proven methodologies. Our team delivers world-class PCBs that are certifiable, high-performance, and thermally-efficient.",
      sections: [
        {
          title: "Design Capabilities",
          items: ["High Density Interconnects (HDIs) PCBs", "Multi-layer PCBs (up to 32 layers)", "Flex and Rigid-Flex architectures", "Antenna PCBs", "High-speed digital and mixed-signal layouts"]
        },
        {
          title: "Analysis & Verification",
          items: ["Power distribution analysis", "Signal Integrity (SI) analysis", "Thermal and Noise mismatching resolution", "PCB Reverse engineering and Re-engineering", "Cost & Obsolescence management"]
        },
        {
          title: "Library Management",
          items: ["IEEE based schematics symbol creation", "IPC7351 PCB Land pattern methodologies", "Footprint management (Least/Maximum/Nominal)", "Global Component Management"]
        }
      ]
    },
    firmware: {
      title: "Embedded Firmware Development",
      subtitle: "Low-Level Programming for Intelligent Hardware",
      image: "assets/image/firmware.png",
      overview: "Outdid Unified specializes in the low-level logic that powers modern hardware. Our firmware engineering bridges the gap between raw silicon and sophisticated software applications, ensuring absolute stability and security for critical systems.",
      sections: [
        {
          title: "Core Expertise",
          items: ["Bootloader development (U-Boot, RedBoot)", "Real-Time Operating Systems (FreeRTOS, Zephyr, QNX)", "Hardware Abstraction Layers (HAL)", "Bare-metal programming for Ultra-low power", "Secure Boot and Trusted Execution Environments"]
        },
        {
          title: "Communication Protocols",
          items: ["Wired: USB 3.0, PCIe, Gigabit Ethernet, EtherCAT", "Wireless: BLE 5.0, Wi-Fi 6, Zigbee, LoRaWAN", "Industrial: CAN Bus, RS-485, Modbus", "Audio/Video: I2S, HDMI, MIPI CSI/DSI"]
        },
        {
          title: "System Maintenance",
          items: ["Over-the-Air (OTA) update infrastructure", "Remote diagnostics and telemetry", "On-chip debugging and performance profiling", "Power management optimization"]
        }
      ]
    },
    software: {
      title: "Software & App Development",
      subtitle: "Custom IoT Solutions and ionHive Ecosystem",
      image: "assets/image/applicationdev.png",
      overview: "Our core software strength lies in the ionHive ecosystem, a sophisticated IoT platform designed for the EV revolution. We specialize in seamless hardware-software integration, enabling users to manage critical infrastructure directly from their smartphones.",
      sections: [
        {
          title: "ionHive EV Ecosystem",
          items: [
            "Smart EV Charging control via mobile app",
            "Real-time start/stop and monitoring through IoT",
            "Secure payment integration and user management",
            "Cloud-based charger telemetry and diagnostics"
          ]
        },
        {
          title: "IoT & Embedded Software",
          items: [
            "Advanced Battery Management Systems (BMS)",
            "Vehicle Tracking Systems (VTS) with GPS",
            "Smart Water Purifier control logic",
            "Custom firmware for industrial IoT nodes"
          ]
        },
        {
          title: "Web & App Expertise",
          items: [
            "Full-stack website building and deployment",
            "Custom mobile application development (iOS/Android)",
            "Scalable backend architectures",
            "High-performance UI/UX design"
          ]
        }
      ]
    },
    mechanical: {
      title: "Mechanical Design Services",
      subtitle: "Industrial Design and Enclosure Engineering",
      image: "assets/image/mechanical.png",
      overview: "Achieving a single design that fulfills all criteria is crucial. Our team helps realize the right enclosure, considering aesthetics, cost, cooling requirements, durability, and safety aspects. We handle risk through research and experimentation in early stages.",
      sections: [
        {
          title: "Enclosure Systems",
          items: ["Rackmount Chassis & DIN rail systems", "Desktop & Handheld Enclosures", "NEMA & Rugged Enclosures", "Sheet metal and Plastic enclosures"]
        },
        {
          title: "Design Services",
          items: ["Industrial Design & Conceptual drawing", "3D CAD modeling", "Integration of electronics and PCB layout", "Prototype development & Ruggedization"]
        },
        {
          title: "Specialized Solutions",
          items: ["Thermal design and cooling solutions", "Packaging, Carton, and Label design", "Drawing format conversion", "Manufacturing support"]
        }
      ]
    }
  };
  
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);
  const policiesRef = useRef(null);
  const evChargersRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // Reveal on scroll logic with aggressive preloading
    const observerOptions = {
      threshold: 0,
      rootMargin: "200px 0px 200px 0px" // Preloads content 200px before it enters/leaves viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (ref) => {
    setActiveMenu(null);
    if (window.location.pathname !== '/') {
      navigate('/');
      // Delay to allow Home to mount
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-outdid-blue selection:bg-outdid-amber/30 overflow-x-hidden">
      {/* Mega Menu Overlay */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm pt-16 transition-all duration-500"
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}

      {/* Header */}
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
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <button 
                onClick={() => scrollTo(contactRef)}
              className="p-2 bg-outdid-amber text-outdid-blue rounded-full shadow-lg shadow-outdid-amber/20 hover:scale-110 transition-transform"
              >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              </button>
              <button 
                className="lg:hidden p-2 hover:bg-white/5 rounded-full"
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
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white pt-24 px-6 animate-in fade-in duration-300 overflow-y-auto">
            <div className="flex flex-col space-y-8 text-3xl font-black uppercase tracking-tighter text-outdid-blue">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-left hover:text-outdid-amber transition-colors">Home</button>
              <button onClick={() => { scrollTo(aboutRef); setMobileMenuOpen(false); }} className="text-left hover:text-outdid-amber transition-colors">About</button>
              <button onClick={() => { scrollTo(careerRef); setMobileMenuOpen(false); }} className="text-left hover:text-outdid-amber transition-colors">Career</button>
              <button onClick={() => { scrollTo(contactRef); setMobileMenuOpen(false); }} className="text-left hover:text-outdid-amber transition-colors">Contact</button>
              <button 
                onClick={() => window.open('https://ionhive.in/', '_blank')}
                className="text-left hover:text-outdid-amber transition-colors"
              >
                Outdid Hub
              </button>
            </div>
            <div className="mt-20 pt-10 border-t border-gray-100 mb-20">
               <div className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.5em] mb-4">Initialize Collaboration</div>
               <button 
                onClick={() => { scrollTo(contactRef); setMobileMenuOpen(false); }}
                className="w-full py-5 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-outdid-amber/20"
               >
                 Get In Touch
               </button>
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

       {/* Advanced Hardware Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020812]">
        
        {/* Layer 1: Deep Circuit Base */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23FFBF00' stroke-width='0.5'%3E%3Cpath d='M40 40V0M40 40H0M40 40h40M40 40v40'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        ></div>

        {/* Layer 2: Animated Data Streams */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outdid-amber to-transparent animate-pulse" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
           <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outdid-blue to-transparent animate-pulse" style={{ animationDelay: '1s', transform: `translateY(${scrollY * 0.4}px)` }}></div>
        </div>

        {/* Layer 3: Floating High-Tech Components */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          {/* Capacitor Array */}
          <div 
            className="absolute top-[40%] right-[8%] flex flex-col space-y-4"
            style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
          >
             {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 glass rounded-full border-outdid-amber/20 flex items-center justify-center animate-bounce" style={{ animationDelay: `${i*0.5}s`, animationDuration: '4s' }}>
                   <div className="w-6 h-6 rounded-full bg-gradient-to-br from-outdid-amber/20 to-outdid-blue/40 border border-white/10"></div>
                </div>
             ))}
          </div>
        </div>

        {/* Main Hero Background (The Lab) */}
        <div 
          className="absolute inset-0 z-0 opacity-40 scale-110 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + scrollY * 0.0002})`,
            backgroundImage: "url('/assets/image/hero.png')",            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#020812] via-transparent to-[#020812]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-6 text-center lg:text-left pt-20">
          <div className="inline-flex items-center space-x-3 mb-8 glass px-6 py-2 rounded-full border-outdid-amber/20">
             <div className="w-2 h-2 rounded-full bg-outdid-amber animate-ping"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">R&D System V4.0 // ACTIVE</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] text-white uppercase selection:text-outdid-amber">
            Hardware <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-outdid-amber">Redefined.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-tight tracking-tight">
            Engineering unified private systems that transcend conventional silicon architecture. Precision, security, and intelligence combined.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={() => scrollTo(contactRef)}
              className="group relative px-12 py-5 bg-outdid-amber text-outdid-blue rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,191,0,0.3)]"
            >
              Initialize Prototype
              <div className="absolute -inset-1 border border-outdid-amber/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
            </button>
       
          </div>
        </div>

        {/* Dashboard HUD - Bottom */}
        <div className="absolute bottom-10 left-10 right-10 z-40 hidden lg:flex items-end justify-between border-t border-white/5 pt-10">
           <div className="flex space-x-16">
              <div>
                 <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">Thermal Diagnostic</div>
                 <div className="flex items-center space-x-3">
                    <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-outdid-blue to-outdid-amber w-[42%]"></div>
                    </div>
                    <span className="text-[10px] font-mono text-white">32°C</span>
                 </div>
              </div>
              <div>
                 <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-3">Bus Bandwidth</div>
                 <div className="flex space-x-1">
                    {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`w-3 h-3 rounded-sm ${i < 6 ? 'bg-outdid-amber' : 'bg-white/10'}`}></div>)}
                 </div>
              </div>
           </div>
           
           <div className="flex items-center space-x-8">
              <div className="text-right">
                 <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 font-mono">ENCRYPTED_LINK: STABLE</div>
                 <div className="text-white text-xs font-black">OUTDID_UNIFIED_v4</div>
              </div>
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-outdid-amber/20 group cursor-pointer hover:rotate-90 transition-all duration-500">
                 <svg className="w-6 h-6 text-outdid-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
           </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="bg-[#020812] py-40 overflow-hidden border-y border-white/5 scanline relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal-up">
              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-[1px] bg-outdid-amber"></div>
                    <span className="text-outdid-amber font-black tracking-[0.4em] uppercase text-[10px]">Ecosystem Hub</span>
                  </div>
                  <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
                    The New Era of <br /> <span className="text-outdid-amber">Unified Compute.</span>
                  </h2>
                  <p className="text-gray-400 text-xl font-light leading-relaxed max-w-xl">
                    Experience the synergy of high-performance hardware and intuitive software. Our EVSE Smart Chargers and ionHive App work in perfect unison to deliver India's most advanced charging experience.
                  </p>
                </div>

                

                <div className="flex flex-wrap gap-6 pt-6">
                  <button 
                    onClick={() => window.open('https://ionhive.in/', '_blank')}
                    className="px-10 py-5 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg shadow-outdid-amber/20"
                  >
                    Explore ionHive
                  </button>
                
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center reveal-up" style={{ transitionDelay: '300ms' }}>
              <div className="absolute inset-0 bg-outdid-amber/20 blur-[120px] rounded-full scale-75 animate-pulse"></div>
              <img 
                src="/assets/image/phone2.png" 
                alt="ionHive Mobile App" 
                className="relative z-10 w-full max-w-[500px] drop-shadow-[0_0_100px_rgba(255,191,0,0.15)] float-slow"
              />
              
              
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-40 bg-[#020812] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full">
           <img 
             src="assets/image/hero2.png" 
             alt="About parallax" 
             className="w-full h-full object-cover opacity-20 grayscale" 
             loading="eager"
           />
           <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#020812]/80 to-[#020812]"></div>
        </div>

        <div className="absolute -top-24 -left-24 w-96 h-96 bg-outdid-amber/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-outdid-blue/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 reveal-up">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[60px] p-12 md:p-24 shadow-2xl overflow-hidden relative group">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-outdid-amber/10 blur-3xl group-hover:bg-outdid-amber/20 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Project Brief // Identity</span>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className="lg:col-span-7">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                      Innovative <br /> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Engineering.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                      Outdid Technologies, a unit of OUTDID UNIFIED PVT LTD, is dedicated to providing premium product engineering services and developing innovative solutions.
                    </p>
                  </div>
                  
                  <div className="lg:col-span-5 pt-4">
                    <div className="space-y-8">
                       <p className="text-lg text-gray-500 font-light leading-relaxed italic border-l-2 border-outdid-amber/30 pl-8">
                        "Empowering consumers and industries to work more efficiently, while increasing productivity through state-of-the-art technological advancement."
                      </p>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-loose">
                        As a leading provider of cutting-edge embedded design and product development services, we specialize in high-performance solutions tailored to meet the evolving needs of modern industries.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="h-px w-12 bg-outdid-amber"></div>
                        <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.3em]">Established 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EV Chargers Section */}
      <section ref={evChargersRef} className="bg-white py-32 border-b border-gray-100">
        <div className="container mx-auto px-6 reveal-up">
          <div className="max-w-4xl mb-20">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Products</span>
            <h2 className="text-5xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">EV Chargers.</h2>
            <p className="text-gray-500 font-light text-xl leading-relaxed">
              3.5kW, 7.4kW, 11kW, and 22kW EV chargers are our own products, and these chargers are managed using Web Dashboard and Android, iOS applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <p className="text-gray-500 font-light mb-8">
                At OUTDID UNIFIED PVT LTD., we specialize in delivering innovative EV charging solutions tailored for modern needs. Our chargers—available in 3.5kW, 7.4kW, 11kW, and 22kW capacities—are designed to provide efficient and reliable power for all types of electric vehicles.
              </p>
              <p className="text-gray-500 font-light mb-8">
                Our chargers are seamlessly managed through our advanced CPO Management portal, Android and iOS applications. This integrated platform allows users to monitor charging status, schedule sessions, access usage reports, and manage devices remotely, ensuring convenience and complete control.
              </p>
              <p className="text-gray-500 font-light">
                Whether for residential or commercial use, our chargers offer unmatched performance, safety, and scalability. With Outdid Unified Pvt. Ltd., you get cutting-edge EV charging solutions that drive sustainability and efficiency, helping you power the future of mobility. Explore our products and take a step towards a cleaner, smarter tomorrow!
              </p>
            </div>
            <div className="relative">
              <img src="/assets/image/ev_home.jpg" alt="EV Charging" className="rounded-[40px] shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-outdid-amber rounded-[40px] -z-10 hidden lg:block"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'AC 3.5kW Charger',
                image: '/assets/image/ev_3.5.jpg',
                desc: 'Experience advanced EV charging with features like AC Leakage Detection (3-100mA), remote authentication, fault recovery (OVP, UVP, OCP), power plug removal alerts, MQTT/OCPP1.6 support, built-in Wi-Fi, and auto-resume after faults. Supports 16A 3-pin socket (3.5kW) with 110V-260V operation.'
              },
              {
                title: 'AC 7.4kW Charger',
                image: '/assets/image/ev_7.4.jpg',
                desc: 'Our 7.4kW EV chargers include AC Leakage Detection (3-100mA), remote authentication, fault recovery, up to 32A charging, and robust electrical protections (OVP, UVP, surge, short circuit). Features Type 2 plug, auto-resume after faults, OCPP1.6 protocol, and built-in 4G LTE/Wi-Fi connectivity.'
              },
              {
                title: 'AC 11kW Charger',
                image: '/assets/image/ev_11.jpg',
                desc: 'Our 11kW EV chargers feature AC Leakage Detection (3-100mA), remote authentication, fault recovery, and up to 16A software-controlled charging. With electrical protections, OCPP1.6 protocol, Type 2 plug, 4G LTE/Wi-Fi connectivity, and 410V-440V AC operation, they ensure safe and reliable charging.'
              },
              {
                title: 'AC 22kW Charger',
                image: '/assets/image/ev_22.jpg',
                desc: 'Our 22kW EV chargers offer AC Leakage Detection (3-100mA), remote authentication, and up to 32A software-controlled charging. Featuring electrical protections, OCPP1.6 protocol, Type 2 plug, 4G LTE/Wi-Fi connectivity, and 410V-440V AC operation, they ensure safe, efficient, and reliable charging.'
              }
            ].map((charger) => (
              <div key={charger.title} className="bg-gray-50 rounded-[40px] p-8 md:p-12 transition-all hover:shadow-xl group">
                <div className="h-64 mb-8 overflow-hidden rounded-2xl">
                  <img src={charger.image} alt={charger.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-black text-outdid-blue mb-4 uppercase tracking-tight">{charger.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {charger.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="bg-white py-32 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 reveal-up">
          <div className="max-w-4xl mb-24">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Track Record</span>
            <h2 className="text-5xl md:text-7xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">Project <br />Portfolio.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              A comprehensive showcase of high-performance embedded systems, power electronics, and industrial IoT solutions engineered for precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "EV Chargers",
                spec: "3.7kW / 7.4kW / 11kW / 22kW",
                desc: "Complete line of smart AC chargers with integrated cloud management.",
                img: "/assets/image/phone2.png",
                color: "bg-blue-50"
              },
              {
                title: "OCPP Controller",
                spec: "NFC Enabled",
                desc: "Advanced controller card supporting OCPP 1.6J/2.0 protocols for smart charging.",
                img: "/assets/image/ocpp.png",
                color: "bg-amber-50"
              },
              {
                title: "Vehicle Control Unit",
                spec: "VCU Systems",
                desc: "The central brain for electric vehicles managing drivetrain and diagnostics.",
                img: "/assets/image/vehiclecontrol.png",
                color: "bg-gray-50"
              }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative overflow-hidden rounded-[40px] p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${project.color}`}
              >
                <div className="relative h-48 mb-8 overflow-hidden rounded-3xl">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-outdid-amber uppercase tracking-[0.4em] mb-4 block">{project.spec}</span>
                  <h3 className="text-2xl font-black text-outdid-blue mb-4 uppercase tracking-tighter">{project.title}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex items-center space-x-2 text-outdid-blue/30 group-hover:text-outdid-amber transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest">System Overview</span>
                    <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/outdidprojectportfolios"
              className="group inline-flex items-center space-x-4 px-12 py-6 bg-outdid-blue text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-outdid-amber hover:text-outdid-blue transition-all shadow-2xl shadow-outdid-blue/20"
            >
              <span>Explore Full Portfolio</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* EV Event Section */}
      <section className="bg-white py-32 border-b border-gray-100 overflow-hidden">
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              display: flex;
              width: max-content;
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <div className="reveal-up">
           <div className="text-center mb-20 px-6">
              <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Journey</span>
              <h2 className="text-5xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">EV Event (Expo-2K24)</h2>
           </div>
           
           <div className="relative overflow-hidden group">
              <div className="animate-scroll">
                {[
                  'ev_1.jpg', 'ev_2.jpg', 'ev_3.jpg', 'ev_4.jpg', 
               
                  'ev_1.jpg', 'ev_2.jpg', 'ev_3.jpg', 'ev_4.jpg', 
                  
                ].map((img, i) => (
                  <div key={i} className="flex-shrink-0 px-3 w-[400px]">
                    <div className="aspect-[4/3] overflow-hidden rounded-[32px] shadow-lg">
                      <img 
                        src={`/assets/image/${img}`} 
                        alt={`Event ${i}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section className="bg-gray-50 py-32 overflow-hidden">
        <div className="container mx-auto px-6 reveal-up">
          <div className="max-w-2xl mb-20">
            <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our strength</span>
            <h2 className="text-5xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">The Collective <br /> Intelligence.</h2>
            <p className="text-gray-500 font-light">
              At Outdid, our strength lies in our diverse and skilled team, which works collaboratively across various domains to bring innovative ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: 'Hardware Design', desc: 'Experts in circuit design and high-performance hardware development.' },
              { name: 'Firmware Team', desc: 'Specializing in intelligent, flexible, and responsive embedded software.' },
              { name: 'Application Team', desc: 'Building intuitive web and mobile solutions for seamless user experiences.' },
              { name: 'Mechanical Team', desc: 'Focused on structural integrity and functional, aesthetic enclosures.' },
              { name: 'PCB Design Team', desc: 'Optimizing boards for high performance and durability in demanding environments.' }
            ].map((team) => (
              <div key={team.name} className="group">
                <div className="h-1 w-12 bg-outdid-amber mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-sm font-black text-outdid-blue uppercase tracking-widest mb-4">{team.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-bold uppercase tracking-wider">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section ref={careerRef} className="relative py-32 bg-outdid-blue overflow-hidden text-white">
        <div className="container mx-auto px-6 relative z-10 reveal-up text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Join Our Team</span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Ready To Hire !</h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              Do you wish to set your career on the right path by being a part of our accomplished team? Kindly fill out the enquiry form below.
            </p>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl text-left relative">
              {careerSuccess && (
                <div className="absolute inset-0 z-20 bg-outdid-blue/95 backdrop-blur-md rounded-[40px] flex items-center justify-center p-12 text-center animate-in zoom-in duration-300">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-outdid-amber rounded-full mx-auto flex items-center justify-center shadow-lg shadow-outdid-amber/20">
                      <svg className="w-10 h-10 text-outdid-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Application Received</h3>
                    <p className="text-gray-400 font-medium">Your profile has been successfully transmitted to our recruitment team. We'll be in touch soon.</p>
                    <button onClick={() => setCareerSuccess(false)} className="text-outdid-amber text-xs font-black uppercase tracking-widest hover:text-white transition-colors">Close</button>
                  </div>
                </div>
              )}
              <form className="space-y-6" onSubmit={handleCareerSubmit}>
                <div className="max-w-md mx-auto mb-10">
                  <label className="text-[10px] font-black uppercase tracking-widest text-outdid-amber mb-2 block ml-1">Position</label>
                  <select 
                    name="position"
                    value={careerFormData.position}
                    onChange={handleCareerChange}
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-outdid-blue" value="Apply Now">Apply Now</option>
                    <option className="bg-outdid-blue" value="Hardware Engineer">Hardware Engineer</option>
                    <option className="bg-outdid-blue" value="Firmware Developer">Firmware Developer</option>
                    <option className="bg-outdid-blue" value="Software Developer">Application Developer</option>
                    <option className="bg-outdid-blue" value="PCB Designer">PCB Designer</option>
                    <option className="bg-outdid-blue" value="Mechanical Designer">Mechanical Designer</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={careerFormData.name}
                      onChange={handleCareerChange}
                      placeholder="Full Name" 
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all placeholder:text-gray-600" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">When can you start?</label>
                    <input 
                      type="date" 
                      name="startDate"
                      value={careerFormData.startDate}
                      onChange={handleCareerChange}
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all cursor-pointer" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={careerFormData.email}
                      onChange={handleCareerChange}
                      placeholder="Email Address" 
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all placeholder:text-gray-600" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Are you willing to relocate?</label>
                    <select 
                      name="relocate"
                      value={careerFormData.relocate}
                      onChange={handleCareerChange}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all cursor-pointer"
                    >
                      <option className="bg-outdid-blue" value="Yes">Yes</option>
                      <option className="bg-outdid-blue" value="No">No</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={careerFormData.phone}
                      onChange={handleCareerChange}
                      placeholder="Phone Number" 
                      required
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all placeholder:text-gray-600" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last company you worked for?</label>
                    <input 
                      type="text" 
                      name="lastCompany"
                      value={careerFormData.lastCompany}
                      onChange={handleCareerChange}
                      placeholder="Company Name" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all placeholder:text-gray-600" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Upload Resume</label>
                    <div className="relative">
                      <input type="file" className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all cursor-pointer file:hidden" />
                      <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                        <span className="text-xs text-outdid-amber font-bold">CHOOSE FILE</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Comments</label>
                    <textarea 
                      name="comments"
                      value={careerFormData.comments}
                      onChange={handleCareerChange}
                      rows="1" 
                      placeholder="Briefly introduce yourself..." 
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber transition-all resize-none placeholder:text-gray-600"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-8 text-center">
                  <button type="submit" className="px-20 py-5 bg-outdid-amber text-outdid-blue rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-outdid-amber/20">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Why Choose Us */}
      <section className="bg-slate-50 py-40 border-y border-gray-100 relative overflow-hidden">
        {/* Technical Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001F3F 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 reveal-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            {/* Vision Column */}
            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-outdid-amber/20 to-outdid-blue/10 rounded-[50px] blur-2xl opacity-0 group-hover:opacity-100 transition-duration-700"></div>
                
                <div className="relative">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-outdid-blue flex items-center justify-center shadow-lg shadow-outdid-blue/20">
                      <svg className="w-6 h-6 text-outdid-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-outdid-amber font-black tracking-[0.4em] uppercase text-[10px]">Strategic Roadmap</span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-black text-outdid-blue mb-10 tracking-tighter uppercase leading-[0.85]">
                    Powering <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-outdid-blue to-outdid-amber">Mobility.</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-[32px] hover:border-outdid-amber/30 transition-all duration-500">
                      <h3 className="text-[10px] font-black text-outdid-blue uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-outdid-amber mr-2"></span>
                        Our Mission
                      </h3>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        To engineer the most reliable and efficient EV charging hardware, accelerating the global transition to clean energy through superior product engineering.
                      </p>
                    </div>

                    <div className="p-8 bg-outdid-blue border border-white/5 shadow-xl rounded-[32px] text-white hover:bg-[#002a54] transition-all duration-500">
                      <h3 className="text-[10px] font-black text-outdid-amber uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                        Our Vision
                      </h3>
                      <p className="text-sm text-gray-300 font-medium leading-relaxed">
                        Powering the future of mobility through unified hardware excellence and intelligent energy distribution systems across the globe.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center space-x-6 px-4">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 bg-gray-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="team" />
                          </div>
                        ))}
                     </div>
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Driven by expert hardware architects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Outdid Column */}
            <div className="lg:col-span-6">
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center justify-between mb-16">
                  <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] block">System Advantages</span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-outdid-amber"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {[
                    { id: '01', title: 'Innovation', desc: 'Cutting-edge embedded design and manufacturing solutions that redefine efficiency.' },
                    { id: '02', title: 'Expertise', desc: 'Deep industry knowledge in EVSE and specialized hardware engineering.' },
                    { id: '03', title: 'Reliability', desc: 'Rigorously tested products that meet the most stringent industrial standards.' },
                    { id: '04', title: 'Proven', desc: 'Successful large-scale projects delivered across multiple states and sectors.' }
                  ].map((item) => (
                    <div key={item.title} className="group relative">
                      <div className="absolute -left-6 top-0 text-[10px] font-black text-outdid-amber/30 group-hover:text-outdid-amber transition-colors">{item.id}</div>
                      <h4 className="text-sm font-black text-outdid-blue uppercase tracking-widest mb-4 border-b border-gray-100 pb-4 inline-block">{item.title}</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-relaxed group-hover:text-gray-600 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between opacity-30">
                  <span className="text-[8px] font-black tracking-widest uppercase">Coord: 12.9716° N, 77.5946° E</span>
                  <span className="text-[8px] font-black tracking-widest uppercase">Outdid Unified // V4.0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact / Inquiry Section */}
      <section ref={contactRef} className="bg-white py-40 overflow-hidden">
        <div className="container mx-auto px-6 reveal-up">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="max-w-2xl">
              <span className="text-outdid-amber font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Ready to Scale</span>
              <h2 className="text-5xl md:text-8xl font-black text-outdid-blue mb-10 tracking-tighter leading-none uppercase">
                Initialize <br /> <span className="text-gray-300">Collaboration.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                For registration questions please get in touch using the contact details below. For any questions use the form.
              </p>
              <div className="space-y-10">
                 <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Office Location</div>
                    <div className="text-lg font-bold text-outdid-blue leading-relaxed">
                      2nd floor, IWWA Community Hall, 6th Main Rd, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
                    </div>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-12">
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Direct Channel</div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-outdid-blue underline cursor-pointer hover:text-outdid-amber transition-colors">sam@outdidunified.com</div>
                        <div className="text-lg font-bold text-outdid-blue underline cursor-pointer hover:text-outdid-amber transition-colors">info@outdidunified.com</div>
                      </div>
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Phone Support</div>
                      <div className="text-xl font-bold text-outdid-blue">+91 80959 45298</div>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 glass-dark p-12 rounded-[40px] border-white/5 shadow-2xl relative">
              {contactSuccess && (
                <div className="absolute inset-0 z-20 bg-outdid-blue/95 backdrop-blur-md rounded-[40px] flex items-center justify-center p-12 text-center animate-in zoom-in duration-300">
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-outdid-amber rounded-full mx-auto flex items-center justify-center shadow-lg shadow-outdid-amber/20">
                      <svg className="w-10 h-10 text-outdid-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Transmission Successful</h3>
                    <p className="text-gray-400 font-medium">Your request has been sent successfully. Our team will contact you shortly.</p>
                    <button onClick={() => setContactSuccess(false)} className="text-outdid-amber text-xs font-black uppercase tracking-widest hover:text-white transition-colors">Close Message</button>
                  </div>
                </div>
              )}
              <form className="space-y-8" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Identity</label>
                    <input 
                      type="text" 
                      name="name"
                      value={contactFormData.name}
                      onChange={handleContactChange}
                      placeholder="Full Name" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber/50 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Secure Mail</label>
                    <input 
                      type="email" 
                      name="email"
                      value={contactFormData.email}
                      onChange={handleContactChange}
                      placeholder="Email Address" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber/50 transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Project Parameters</label>
                  <textarea 
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    rows="4" 
                    placeholder="Briefly describe your hardware requirements..." 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-outdid-amber/50 transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-6 bg-outdid-amber text-outdid-blue rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(255,191,0,0.15)]">
                  Transmit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section ref={policiesRef} className="bg-white py-32 border-b border-gray-100">
        <div className="container mx-auto px-6 reveal-up">
          <div className="text-center mb-20">
            <span className="text-outdid-blue/40 font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Legal</span>
            <h2 className="text-5xl font-black text-outdid-blue mb-8 uppercase tracking-tighter">Policies & Terms.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.keys(policies).map((key) => (
              <div key={key} className="p-8 bg-gray-50 rounded-[40px] hover:shadow-xl transition-all cursor-pointer group" onClick={() => setActivePolicy(key)}>
                <div className="w-12 h-12 bg-outdid-blue text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-outdid-amber group-hover:text-outdid-blue transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-outdid-blue uppercase tracking-tight mb-4">{policies[key].title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Click to view our detailed {policies[key].title.toLowerCase()}.
                </p>
                <div className="mt-6 flex items-center text-outdid-blue/40 group-hover:text-outdid-amber transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest mr-2">View Document</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#020812] py-24 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
           <img src="/assets/logo/otdlogo.png" alt="Outdid" className="h-10 mx-auto mb-12 opacity-40" />
           
           <p className="text-gray-600 text-[10px] font-bold tracking-[0.6em] uppercase">© 2026 Outdid Unified Private Limited // Secure. Unified. Intelligent.</p>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {activeService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-[#020812]/80 backdrop-blur-md"
            onClick={() => setActiveService(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#020812] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setActiveService(null)}
              className="absolute top-8 right-8 z-50 w-12 h-12 bg-outdid-amber text-outdid-blue rounded-full flex items-center justify-center hover:bg-white transition-all"
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
      )}
      {/* Policy Detail Modal */}
      {activePolicy && (
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
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProjectPortfolio" element={<ProjectPortfolio />} />
        <Route path="/outdidprojectportfolios" element={<ProjectPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
