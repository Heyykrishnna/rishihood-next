import { Instagram, Facebook, X, Linkedin, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#7a131f] bg-cover bg-center text-white font-primary relative overflow-hidden"
      style={{ backgroundImage: "url('https://framerusercontent.com/images/hH2gmaNjYV9HFgBScNHFf0dYc.png?width=4800&height=1224')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8 flex flex-col relative z-10">
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between items-start lg:items-center lg:gap-8 mb-8 lg:mb-12 pointer-events-none w-full">

          <div className="flex flex-row items-center justify-between lg:justify-start w-full lg:w-auto lg:gap-8 xl:gap-12 mb-8 lg:mb-0">
            <div className="flex flex-col items-start w-[45%] lg:w-auto">
              <img
                src="https://framerusercontent.com/images/NKvCUEL0ORnQgJto11PdvOykNk.png?scale-down-to=512&width=704&height=280"
                alt="Rishihood University Logo"
                className="h-10 md:h-14 lg:h-16 object-contain brightness-0 invert mb-2 md:mb-4 lg:mb-4"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <p className="text-[#e2e2e2] text-[10px] md:text-lg font-medium tracking-wider text-left">
                व्यक्ति | विचार | व्यवस्था
              </p>
            </div>

            <div className="w-px h-16 md:h-20 bg-white/30 mx-2 lg:hidden"></div>

            <div className="hidden lg:block w-px h-[120px] bg-white/40"></div>

            <div className="w-[50%] flex justify-end lg:hidden">
              <img
                src="https://framerusercontent.com/images/IfI0ogz13RBjHXhiYwsz98JETHM.png?width=1606&height=537"
                alt="Campus Outline"
                className="w-full max-w-[180px] sm:max-w-xs h-auto object-contain drop-shadow-md brightness-0 invert opacity-90"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className="hidden lg:flex lg:w-auto justify-start pr-4 xl:pr-8">
              <img
                src="https://framerusercontent.com/images/IfI0ogz13RBjHXhiYwsz98JETHM.png?width=1606&height=537"
                alt="Campus Outline"
                className="w-full max-w-sm lg:max-w-md xl:max-w-[420px] h-auto object-contain drop-shadow-md brightness-0 invert"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className="hidden lg:block w-px h-[120px] bg-white/40"></div>
          </div>

          <div className="w-full h-px bg-white/20 mb-6 lg:hidden"></div>

          <div className="flex flex-row justify-between lg:justify-end gap-8 md:gap-24 lg:gap-16 w-full lg:w-auto pointer-events-auto px-1 md:px-0">
            <div className="flex flex-col gap-3 lg:w-auto">
              <h4 className="font-semibold text-[16px] md:text-lg text-white">Resources</h4>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Blogs</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Events</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Media</a>
            </div>
            <div className="flex flex-col gap-3 lg:w-auto">
              <h4 className="font-semibold text-[16px] md:text-lg text-white">Quick Links</h4>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Our Story</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Schedule Campus Visit</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Mandatory Disclosures</a>
              <a href="#" className="text-white hover:text-white transition-colors text-[14px] md:text-sm font-light">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-6"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 mb-6 px-1 md:px-0 w-full">
          <div className="flex items-center justify-start gap-3 lg:gap-4 lg:w-1/3">
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f] hover:scale-105 transition-transform">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f] hover:scale-105 transition-transform">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f] hover:scale-105 transition-transform">
              <X className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z" />
              </X>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f] hover:scale-105 transition-transform">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a131f] hover:scale-105 transition-transform">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-start lg:items-center justify-start lg:justify-center gap-3 text-[#e2e2e2] lg:w-1/3 mt-2 lg:mt-0">
            <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5 lg:mt-0" />
            <span className="text-[10px] md:text-[13px] font-medium tracking-wide text-white leading-relaxed">
              NH-44 (GT Road), Delhi NCR, Sonipat, Haryana 131021
            </span>
          </div>

          <div className="w-full lg:w-1/3 flex justify-start lg:justify-end mt-2 lg:mt-0">
            <button className="w-full lg:w-auto border border-white/50 bg-[#3a090f]/40 hover:bg-[#3a090f]/60 cursor-pointer backdrop-blur-sm text-white px-10 py-3.5 md:py-3 lg:px-12 rounded-lg md:rounded-md transition-all duration-300 text-[15px] md:text-sm font-medium tracking-wide">
              Apply Now
            </button>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mb-4"></div>

        <div className="text-center text-xs text-white font-medium tracking-wide px-4 md:px-0 opacity-80 leading-relaxed md:leading-normal">
          <p className="inline md:block">
            Rishihood University is established by Rishihood Foundation,{' '}
          </p>
          <p className="inline md:block">
            a non-profit company under Section 8 of the Companies Act, 2013. All Rights Reserved, 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
