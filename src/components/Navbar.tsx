import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Linkedin, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navData = [
  { label: "Programs", hasDropdown: true, items: ["Undergraduate", "Postgraduate", "Ph.D.", "Executive"] },
  { label: "Schools", hasDropdown: true, items: ["Entrepreneurship", "Design", "Technology", "Brain & Behavior", "Public Leadership", "Human Sciences"] },
  { label: "Our Campus", hasDropdown: true, items: ["Infrastructure", "Student Life", "Hostel", "Sports"] },
  { label: "About", hasDropdown: true, items: ["Our Vision", "Leadership", "Faculty", "Careers"] },
  { label: "Outcomes", hasDropdown: false },
  { label: "Admissions", hasDropdown: false },
  { label: "Venture Studio", hasDropdown: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setOpenDropdown(null), 500);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDarkLogo = isScrolled || isOpen;

  const menuVariants = {
    closed: { 
      x: isMobile ? "0%" : "100%",
      y: isMobile ? "-100%" : "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
    },
    open: { 
      x: "0%", 
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
    }
  };

  const itemVariants = {
    closed: { y: 60, opacity: 0, scale: 0.95 },
    open: (i: number) => ({
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 + (i * 0.08), ease: [0.25, 1, 0.5, 1] as const }
    })
  };

  const rightPanelVariants = {
    closed: { opacity: 0, x: 40 },
    open: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.6, ease: "easeOut" as const } }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-300 px-4 md:px-12 py-4 md:py-6 flex justify-between items-center pointer-events-none transition-colors duration-500`}>
        <button 
          onClick={scrollToTop} 
          className={`pointer-events-auto flex items-center cursor-pointer group transition-opacity duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="relative h-8 md:h-10 lg:h-12 w-32 md:w-48 lg:w-56">
            <img
              src="https://framerusercontent.com/images/NKvCUEL0ORnQgJto11PdvOykNk.png?scale-down-to=512&width=704&height=280"
              alt="Rishihood University Logo"
              className={`absolute inset-0 h-full w-auto object-contain brightness-0 invert transition-opacity duration-700 ease-in-out ${
                showDarkLogo ? 'opacity-0' : 'opacity-100'
              }`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <img
              src="https://framerusercontent.com/images/5UoshHiRcmY4IutYIv00ZAKewU.png?scale-down-to=512&width=3585&height=1319"
              alt="Rishihood University Logo"
              className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-700 ease-in-out ${
                showDarkLogo ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </button>

        <div className="pointer-events-auto">
           <button
            onClick={() => setIsOpen(!isOpen)}
            className={`px-5 py-2.5 rounded-full flex items-center justify-center gap-3 font-medium text-[15px] tracking-wide transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 cursor-pointer border backdrop-blur-lg min-w-[110px] ${
              isOpen 
                ? 'bg-black text-white border-black/20 hover:bg-black/90' 
                : isScrolled 
                  ? 'bg-black/80 hover:bg-black text-white border-black/20' 
                  : 'bg-white/80 hover:bg-white/90 text-black border-white/20'
            }`}
          >
            {isOpen ? (
              <div className="flex items-center gap-2">
                Close
                <X className="w-5 h-5" strokeWidth={1.5} />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Menu
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </div>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-200 bg-[#fcfaf5] text-black w-full h-full overflow-y-auto"
            data-lenis-prevent
          >
            <div className="absolute top-0 left-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1600px] mx-auto min-h-full flex flex-col relative px-4 md:px-12 py-6">
              
              <div className="flex-1 flex flex-col lg:flex-row mt-16 md:mt-24 pb-20 lg:pb-0 relative z-10">
                
                <div className="w-full lg:w-[65%] flex flex-col gap-2 relative">
                  {navData.map((item, idx) => {
                    const number = String(idx + 1).padStart(2, '0');
                    const isActive = openDropdown === item.label;
                    
                    return (
                      <motion.div 
                        key={item.label}
                        custom={idx}
                        variants={itemVariants}
                        className="flex flex-col relative"
                      >
                       <button 
                          onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                          className="flex items-center text-left py-2 hover:translate-x-4 transition-transform duration-400 ease-out group cursor-pointer"
                        >
                          <span className="text-gray-400 font-mono text-[11px] md:text-[13px] mr-6 md:mr-10 font-medium tracking-widest mt-2">{number}</span>
                          <div className="flex items-center gap-4">
                            <span className={`text-[36px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-none ${isActive ? 'text-[#d00736]' : 'text-[#111] group-hover:text-[#d00736] transition-colors duration-300'}`}>
                              {item.label}
                            </span>
                            {item.hasDropdown && (
                              <ChevronDown 
                                className={`w-8 h-8 md:w-12 md:h-12 transition-transform duration-500 ease-[0.25,1,0.5,1] ${isActive ? 'rotate-180 text-[#d00736]' : 'text-gray-300 group-hover:text-[#d00736] group-hover:translate-y-1'}`}
                                strokeWidth={2}
                              />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isActive && item.items && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                              className="overflow-hidden ml-16 md:ml-24"
                            >
                              <div className="flex flex-col gap-3 py-4 md:py-6">
                                {item.items.map((subItem, sIdx) => (
                                  <a 
                                    key={sIdx} 
                                    href="#" 
                                    className="text-[16px] md:text-[20px] lg:text-[24px] text-gray-500 font-normal hover:text-black transition-colors w-max"
                                  >
                                    {subItem}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div 
                  initial={{ opacity: 0, scaleY: 0 }} 
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="hidden lg:block w-px bg-gray-200 absolute right-[35%] top-0 bottom-0 origin-top"
                />

                <motion.div 
                  variants={rightPanelVariants}
                  className="w-full lg:w-[35%] lg:pl-16 xl:pl-24 mt-20 lg:mt-0 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-10">
                    <div>
                      <h4 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-6 font-mono">Connect</h4>
                      <div className="flex flex-wrap gap-3">
                        <a href="https://www.linkedin.com/school/rishihood/" className="border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm text-gray-600 px-4 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5">
                          <Linkedin className="w-4 h-4" /> Rishihood
                        </a>
                        <a href="https://x.com/RishihoodUni" className="border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm text-gray-600 px-4 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5">
                          <FaXTwitter className="w-4 h-4" /> Rishihood Uni
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=918929314451" className="border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm text-gray-600 px-4 py-2.5 rounded-full flex items-center gap-2 text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5">
                          <FaWhatsapp className="w-4 h-4" /> WhatsApp
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-4 font-mono">Get in Touch</h4>
                      <a href="mailto:namaste@rishihood.edu.in" className="text-[18px] md:text-[22px] font-medium text-black hover:text-[#d00736] transition-colors break-all">
                        namaste@rishihood.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="mt-16 lg:mt-auto relative group self-start">
                    <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
                    <a href="https://apply.rishihood.edu.in/" target="_blank" rel="noopener noreferrer">
                      <button className="bg-black text-white px-8 py-4 rounded-full cursor-pointer flex items-center gap-3 font-medium text-[15px] hover:bg-[#111] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                        Apply Now
                        <ArrowUpRight className="w-4 h-4 opacity-80" strokeWidth={2} />
                      </button>
                    </a>
                  </div>

                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
