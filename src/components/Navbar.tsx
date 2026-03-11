import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const NavItem = ({ label, hasDropdown, dropdownItems }: { label: string; hasDropdown?: boolean; dropdownItems?: string[] }) => (
  <div className="relative group h-full flex items-center">
    <div className="flex items-center gap-1 cursor-pointer hover:text-[#d00736] transition-colors text-sm py-6">
      {label}
      {hasDropdown && <ChevronDown className="w-4 h-4 ml-0.5" />}
    </div>
    {hasDropdown && dropdownItems && (
      <div className="absolute top-[70px] left-0 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out w-[320px] bg-[#fdf6e6] shadow-xl rounded-xl p-2 z-100 border border-[#f0e4cf]">
        <ul className="flex flex-col gap-1">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-normal cursor-pointer text-[#4b4b4b] hover:text-[#d00736] hover:bg-[#f6e1da] rounded-lg transition-colors whitespace-normal"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const navData = [
  { label: "Programs", hasDropdown: true, items: ["Undergraduate Programs", "Postgraduate Programs", "Ph.D. Programs", "Executive Education"] },
  { label: "Schools", hasDropdown: true, items: ["School of Entrepreneurship", "School of Design", "Sajjan Agarwal School of Technology", "Mahesh Navani School of Brain, Body & Behavior", "Rashtram School of Public Leadership", "Centre for Human Sciences"] },
  { label: "Our Campus", hasDropdown: true, items: ["Infrastructure", "Student Life", "Hostel", "Sports", "Library"] },
  { label: "About", hasDropdown: true, items: ["Our Vision", "Leadership", "Faculty", "Careers", "Contact Us"] },
  { label: "Outcomes", hasDropdown: false },
  { label: "Admissions", hasDropdown: false },
  { label: "Venture Studio", hasDropdown: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setMounted(false);
      const t = setTimeout(() => setMounted(true), 50);
      return () => clearTimeout(t);
    } else {
      setMounted(false);
      setOpenDropdown(null);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const programsDropdown = ["Undergraduate Programs", "Postgraduate Programs", "Ph.D. Programs", "Executive Education"];
  const schoolsDropdown = ["School of Entrepreneurship", "School of Design", "Sajjan Agarwal School of Technology", "Mahesh Navani School of Brain, Body & Behavior", "Rashtram School of Public Leadership", "Centre for Human Sciences"];
  const campusDropdown = ["Infrastructure", "Student Life", "Hostel", "Sports", "Library"];
  const aboutDropdown = ["Our Vision", "Leadership", "Faculty", "Careers", "Contact Us"];

  return (
    <nav className="w-full bg-white h-[80px] px-4 lg:px-12 flex items-center justify-between sticky top-0 z-100 shadow-sm font-primary">
      <div className="flex items-center">
        <img src='https://framerusercontent.com/images/5UoshHiRcmY4IutYIv00ZAKewU.png?scale-down-to=512&width=3585&height=1319' className='h-10 w-auto' alt="Logo" />
      </div>

      <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-light text-[#4b4b4b] h-full">
        <NavItem label="Programs" hasDropdown dropdownItems={programsDropdown} />
        <NavItem label="Schools" hasDropdown dropdownItems={schoolsDropdown} />
        <NavItem label="Our Campus" hasDropdown dropdownItems={campusDropdown} />
        <NavItem label="About" hasDropdown dropdownItems={aboutDropdown} />
        <NavItem label="Placements" />
        <NavItem label="Admissions" />
        <NavItem label="Venture Studio" />
      </div>

      <div className="hidden lg:flex items-center">
        <button className="flex items-center gap-2 px-6 py-2 border-2 border-[#d00736] text-[#d00736] font-semibold text-sm rounded-md hover:bg-[#d00736] group duration-500 cursor-pointer hover:text-white transition-colors">
          <span className="w-1.5 h-1.5 bg-[#d00736] rounded-full animate-pulse group-hover:bg-white"></span>
          Apply Now
        </button>
      </div>

      {!isMobileMenuOpen && (
        <button
          className="lg:hidden p-2 text-gray-800 -mr-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" strokeWidth={1.5} />
        </button>
      )}

      <div
        ref={menuRef}
        className={`fixed inset-0 z-200 lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-400 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[88vw] max-w-[400px] flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'linear-gradient(160deg, #1a0a0a 0%, #2d0b0b 40%, #3b0d0d 100%)' }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, #d00736 0%, transparent 70%)' }}
            />
            <div
              className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-[0.08]"
              style={{ background: 'radial-gradient(circle, #ff6b35 0%, transparent 70%)' }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diag" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="#fff" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diag)" />
            </svg>
            <div className="absolute top-[80px] left-0 right-0 h-px bg-linear-to-r from-transparent via-[#d00736]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
              style={{ background: 'linear-gradient(to top, #d00736, transparent)' }}
            />
          </div>

          <div className="relative flex items-center justify-between px-6 h-[80px] shrink-0">
            <img
              src='https://framerusercontent.com/images/5UoshHiRcmY4IutYIv00ZAKewU.png?scale-down-to=512&width=3585&height=1319'
              className='h-8 w-auto brightness-0 invert opacity-90'
              alt="Logo"
            />
            <button
              className="p-2 text-white/70 hover:text-white cursor-pointer transition-colors rounded-full hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className={`relative px-6 pb-5 transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
          </div>

          <div className="relative flex-1 overflow-y-auto px-4 pb-6 overscroll-contain">
            {navData.map((item, idx) => {
              const isOpen = openDropdown === item.label;
              const delay = 120 + idx * 60;
              return (
                <div
                  key={item.label}
                  className={`transition-all duration-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <button
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-left transition-all duration-200 group ${
                      isOpen
                        ? 'bg-[#d00736]/20 text-white rounded-b-none'
                        : 'text-white/75 hover:text-white hover:bg-white/6'
                    }`}
                    onClick={() => item.hasDropdown ? toggleDropdown(item.label) : undefined}
                  >
                    <span className={`font-light tracking-wide transition-all duration-200 ${isOpen ? 'text-base font-medium text-white' : 'text-[15px]'}`}>
                      {item.label}
                    </span>
                    <span className="flex items-center gap-1">
                      {item.hasDropdown ? (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#d00736]' : 'text-white/40 group-hover:text-white/70'}`}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#d00736] transition-colors duration-200" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-350 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}
                  >
                    {item.hasDropdown && item.items && (
                      <div className="rounded-b-xl border border-t-0 border-white/[0.07] bg-white/4 overflow-hidden">
                        {item.items.map((subItem, subIdx) => (
                          <a
                            key={subIdx}
                            href="#"
                            className="flex items-center justify-between px-5 py-3.5 text-[13px] text-white/55 hover:text-white hover:bg-white/6 transition-all duration-150 border-b border-white/5 last:border-b-0 font-light"
                          >
                            <span>{subItem}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`relative shrink-0 p-5 border-t border-white/8 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '580ms' }}
          >
            <button className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer group relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #d00736 0%, #9b0527 100%)' }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              <span className="w-2 h-2 bg-white rounded-full animate-pulse relative z-10" />
              <span className="text-white relative z-10">Apply Now</span>
              <ArrowUpRight className="w-4 h-4 text-white/80 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" strokeWidth={2} />
            </button>
            <p className="text-center text-[10px] text-white/25 mt-3 tracking-wider">
              TRANSFORMATIVE LEARNING · SONIPAT, HARYANA
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
