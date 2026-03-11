import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, GraduationCap, Users, Home, ArrowRight, Calendar, Building2 } from 'lucide-react';
import BlurText from './BlurText';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

type SlideData = {
  type: 'admissions' | 'foundational' | 'partnerships' | 'startup';
  image: string;
  italicHeading: string;
  boldHeading: string;
  subHeading?: string;
  hindiText?: string;
  buttonText?: string;
};

const slides: SlideData[] = [
  {
    type: 'admissions',
    image: "https://framerusercontent.com/images/pxMvi4f6x3gSEzNzc2TDX0aFGMQ.jpeg?scale-down-to=4096&width=5184&height=2772",
    italicHeading: "Begin your Rishihood Journey",
    boldHeading: "2026 Admissions Now Open",
  },
  {
    type: 'foundational',
    image: "https://framerusercontent.com/images/7MyhsrkNz01pfukKf1ZVSf04z1M.jpg?scale-down-to=4096&width=6000&height=4000",
    italicHeading: "Foundational Learning",
    boldHeading: "Future-Ready Thinking",
    subHeading: "Shaping Learners through",
    hindiText: "व्यक्ति | विचार | व्यवस्था",
    buttonText: "Learn more",
  },
  {
    type: 'partnerships',
    image: "https://framerusercontent.com/images/6wFKuxRFyZggeoS2RW96bByolM.jpg?scale-down-to=4096&width=6000&height=4000",
    italicHeading: "Industry-Driven Learning",
    boldHeading: "Real-World Impact",
    subHeading: "Delivered in Partnership with:",
    buttonText: "Learn more",
  },
  {
    type: 'startup',
    image: "https://framerusercontent.com/images/EhpbFPhmT6FGFDOknfMwtoP0Y.png?width=1200&height=736", 
    italicHeading: "Graduate with a",
    boldHeading: "Startup",
    buttonText: "Apply now"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div id="hero" className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black font-primary flex flex-col">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
          } else if (swipe > swipeConfidenceThreshold) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          }
        }}
      >
        <div className="max-w-5xl pt-10 pointer-events-none w-full">
          <BlurText
            key={`blur-${currentSlide}`}
            text={slides[currentSlide].italicHeading}
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="font-secondary italic text-white text-lg md:text-xl tracking-wide font-medium"
          />
          <BlurText 
            key={`bold-${currentSlide}`}
            text={slides[currentSlide].boldHeading}
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="font-primary font-semibold text-xl md:text-3xl lg:text-5xl leading-tight text-[#E8A559] mt-2 mb-2 lg:mb-4 whitespace-nowrap"
          />

          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full relative"
          >
            {slides[currentSlide].type === 'admissions' && (
              <div className="mt-4 lg:mt-6 w-full max-w-4xl">
                <div className="flex flex-col w-full border-t border-white/20 mt-4 md:mt-8 mb-6 md:mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 py-4 md:py-6 border-b border-white/20">
                    <div className="flex flex-col w-full"> 
                      <span className="text-white text-xl md:text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-1 md:mb-3">B.Tech</span>
                      <span className="text-white/70 text-sm md:text-base font-light">in CS & AI</span>
                    </div>
                    <div className="flex flex-col w-full"> 
                      <span className="text-white text-xl md:text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-1 md:mb-3">B.Tech</span>
                      <span className="text-white/70 text-sm md:text-base font-light leading-tight">in CS & Data Science</span>
                    </div>
                    <div className="hidden md:flex flex-col w-full"> 
                      <span className="text-white text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-3">BBA Entrepreneurship</span>
                      <span className="text-white/70 text-base font-light">Makers Undergrad</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-12 py-4 md:py-6 md:border-b md:border-white/20">
                    <div className="flex flex-col w-full"> 
                      <span className="text-white text-xl md:text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-1 md:mb-3">B.Sc (Hons)</span>
                      <span className="text-white/70 text-sm md:text-base font-light">in Psychology</span>
                    </div>
                    <div className="flex flex-col w-full"> 
                      <span className="text-white text-xl md:text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-1 md:mb-3">B.Des</span>
                      <span className="text-white/70 text-sm md:text-base font-light">in Design</span>
                    </div>
                    <div className="hidden md:flex flex-col w-full"> 
                      <span className="text-white text-2xl lg:text-[28px] leading-none font-semibold font-primary mb-3">Ph.D</span>
                      <span className="text-white/70 text-base font-light">Multiple programs</span>
                    </div>
                  </div>

                  <div className="flex md:hidden flex-col gap-y-4 py-4 pt-0">
                    <div className="flex flex-col w-full"> 
                      <span className="text-white text-xl leading-none font-semibold font-primary mb-1">BBA Entrepreneurship</span>
                      <span className="text-white/70 text-sm font-light">Makers Undergrad</span>
                    </div>
                    <div className="flex flex-col w-full mt-2"> 
                      <span className="text-white text-xl leading-none font-semibold font-primary mb-1">Ph.D</span>
                      <span className="text-white/70 text-sm font-light">Multiple programs</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 lg:mt-8 pointer-events-auto w-full max-w-md md:max-w-none">
                  <button className="w-full sm:w-auto bg-[#d00736] hover:bg-[#a8002a] transition-colors duration-300 text-white px-10 py-3 sm:py-3.5 rounded-lg md:rounded-md font-light text-[15px] sm:text-base shadow-lg cursor-pointer">
                    Apply now
                  </button>
                  <button className="w-full sm:w-auto bg-transparent border border-white hover:bg-white/10 transition-colors duration-300 text-white px-10 py-3 sm:py-3.5 rounded-lg md:rounded-md font-light text-[15px] sm:text-base shadow-lg cursor-pointer">
                    Download Brochure
                  </button>
                </div>
              </div>
            )}

            {slides[currentSlide].type === 'foundational' && (
              <div className="mt-6 lg:mt-8">
                <div className="flex flex-col mb-8">
                  <span className="text-white font-semibold text-md md:text-lg tracking-wide mb-3">
                    {slides[currentSlide].subHeading}
                  </span>
                  <div className="h-0.5 w-[280px] bg-white mb-8"></div>
                  <div className="inline-block border border-gray-400/50 bg-black/40 backdrop-blur-sm rounded-lg px-6 lg:px-8 py-3 lg:py-4 self-start">
                    <span className="text-white font-medium text-xl md:text-2xl tracking-widest">
                      {slides[currentSlide].hindiText}
                    </span>
                  </div>
                </div>
                <button className="bg-[#d00736] hover:bg-[#a8002a] transition-colors duration-300 text-white px-12 py-3 rounded-md font-light text-base shadow-lg pointer-events-auto cursor-pointer mt-4">
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            )}

            {slides[currentSlide].type === 'partnerships' && (
              <div className="mt-6 lg:mt-8">
                <div className="flex flex-col mb-10">
                  <span className="text-white font-semibold text-lg md:text-xl tracking-wide mb-3">
                    {slides[currentSlide].subHeading}
                  </span>
                  <div className="h-0.5 w-[300px] bg-white mb-8"></div>
                  <div className="flex items-center gap-12 h-12">
                    <img src="https://framerusercontent.com/images/mQQEZND7w1Dh4xGlRjVWzfyLbE.png?width=260&height=84" alt="Newton School" className="h-8 lg:h-10 object-contain brightness-0 invert" />
                    <img src="https://framerusercontent.com/images/rNRJqRLJhC6Nrl6BIVnjQWzwDcg.png?width=220&height=92" alt="KPMG" className="h-6 lg:h-8 object-contain brightness-0 invert" />
                  </div>
                </div>
                <button className="bg-[#d00736] hover:bg-[#a8002a] transition-colors duration-300 text-white px-12 py-3 rounded-md font-light text-base shadow-lg pointer-events-auto cursor-pointer mt-4 lg:mt-8">
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            )}

            {slides[currentSlide].type === 'startup' && (
              <div className="mt-6 lg:mt-8 w-full flex justify-between relative h-full">
                <div className="flex-1 w-full lg:w-1/2 relative z-10">
                  <div className="flex flex-col mb-6">
                    <span className="text-white font-semibold text-2xl md:text-[28px] lg:text-[32px] tracking-wide uppercase mb-3">
                        MAKERS UNDERGRAD
                    </span>
                    <div className="h-[2px] w-[350px] bg-white mb-8"></div>
                  </div>
                  
                  <div className="inline-block border border-white/20 bg-black/40 backdrop-blur-sm rounded-lg mb-8 lg:mb-10 w-full max-w-[420px]">
                    <div className="flex w-full">
                      <div className="flex-1 text-center py-5 border-r border-b border-white/20">
                        <div className="text-white font-semibold text-sm md:text-base leading-tight">Venture<br/>Funding</div>
                      </div>
                      <div className="flex-1 text-center py-5 border-b border-white/20">
                        <div className="text-white font-semibold text-sm md:text-base leading-tight">Placement<br/>Support</div>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="flex-1 flex items-center justify-center gap-3 py-5 border-r border-white/20">
                        <Calendar className="w-5 h-5 text-white/90" />
                        <span className="text-white font-semibold text-sm md:text-base">4 years</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center gap-3 py-5">
                        <Building2 className="w-5 h-5 text-white/90" />
                        <span className="text-white font-semibold text-sm md:text-base">Residential</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button className="bg-[#d00736] hover:bg-[#a8002a] transition-colors duration-300 text-white px-12 py-3 rounded-md font-light text-base shadow-lg pointer-events-auto cursor-pointer">
                    {slides[currentSlide].buttonText}
                  </button>
                </div>

                <div className="hidden lg:flex flex-col items-center absolute -top-[120px] right-2 xl:right-10 z-20 pointer-events-none">
                  <div className="bg-[#a8002a] border border-white p-6 md:p-8 rounded-xl w-[320px] xl:w-[420px] shadow-2xl relative z-10 translate-y-16 translate-x-12">
                    <p className="font-primary text-white text-[15px] xl:text-[17px] mb-6 leading-snug font-medium">
                      "Rishihood didn't just teach me business—it helped me build one. With guidance, funding, and belief, I turned an idea into impact."
                    </p>
                    <div className="flex flex-col">
                      <span className="font-primary text-white font-semibold text-sm md:text-base mb-1">— Parth Vardhan Saxena</span>
                      <span className="font-primary text-white/90 text-xs md:text-sm font-light mt-1 leading-tight">
                        BBA Entrepreneurship<br/>
                        - Founder, Tru Pahadi
                      </span>
                    </div>
                  </div>
                  <img 
                    src="https://framerusercontent.com/images/F1NCuOeDMHPq5AhdfPL87b4Wf74.png?scale-down-to=1024&width=1556&height=2168" 
                    alt="Student" 
                    className="w-[280px] xl:w-[350px] left-60 h-[340px] xl:h-[450px] object-cover object-top relative z-100"
                    style={{ WebkitMaskImage: "linear-gradient(to top, transparent 5%, black 40%)" }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70 w-2.5'
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 w-full bg-[#faf9f6] md:bg-white grid grid-cols-2 md:grid-cols-4 gap-3 p-4 pb-8 md:gap-0 md:p-0 md:border-t md:border-gray-200">
        {[
          { text: "UG Admission", icon: Book },
          { text: "Ph.D Admissions", icon: GraduationCap },
          { text: "Teaching Faculty", icon: Home },
          { text: "Founding Team", icon: Users }
        ].map((item, idx) => (
          <div 
            key={idx}
            className={`flex items-center justify-between cursor-pointer bg-white group relative 
              border border-gray-300 md:border-none rounded-lg md:rounded-none shadow-sm md:shadow-none
              px-3 py-4 sm:px-4 md:px-6 lg:px-10 md:py-6 lg:py-8
              ${idx !== 0 ? 'md:border-l md:border-gray-200' : ''}
              hover:bg-white transition-colors duration-300
            `}
          >
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#d00736] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform duration-500 ease-out rounded-b-lg md:rounded-b-none" />
            
            <div className="flex items-center gap-3 md:gap-4">
              <item.icon className="w-6 h-6 text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-light text-[#4b4b4b] text-[15px] lg:text-base leading-tight md:leading-normal group-hover:text-[#d00736] transition-colors duration-300">
                  {item.text.split(' ').map((word, i, arr) => (
                    <span key={i} className="md:inline">
                      {word}{i !== arr.length - 1 && <span className="hidden md:inline"> </span>}
                      {i !== arr.length - 1 && <br className="md:hidden" />}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#d00736] md:text-[#1a1a1a] group-hover:text-[#d00736] -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out shrink-0" strokeWidth={1.5} />
          </div>
        ))}
      </div>
    </div>
  );
}
