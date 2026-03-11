import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import BlurText from './BlurText';

function ScrubCard({ children, direction, className }: { children: ReactNode; direction: 'left' | 'right'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const x = useTransform(
    smoothProgress, 
    [0, 0.2, 0.8, 1], 
    [direction === 'left' ? -60 : 60, 0, 0, direction === 'left' ? -60 : 60]
  );
  
  const opacity = useTransform(
    smoothProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.97, 1, 1, 0.97]
  );
  
  return (
    <motion.div ref={ref} style={{ x, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Stats() {
  const LeafSVG = ({ className }: {className?: string}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 156">
      <g transform="translate(-0.285 0)">
        <path d="M 0 156 L 0 0 L 96.571 0 L 96.571 156 Z" fill="transparent"></path>
        <path d="M 49.276 1.427 L 96.053 70.075 L 96.236 70.343 L 96.236 102.371 L 96.01 102.659 L 74.885 129.521 L 74.563 129.931 L 60.18 129.931 L 59.937 129.797 L 48.082 123.283 L 47.951 155.735 L 45.805 155.726 L 45.936 123.375 L 36.939 129.733 L 36.659 129.931 L 29.508 129.931 L 22.229 129.931 L 21.907 129.543 L 0.782 104.174 L 0.537 103.88 L 0.537 71.842 L 0.714 71.575 L 20.153 42.427 L 20.153 42.313 L 20.229 42.313 L 47.491 1.435 L 48.377 0.106 Z M 23.241 127.809 L 29.508 127.879 L 35.971 127.809 L 45.774 120.881 L 15.183 118.13 Z M 48.122 120.876 L 60.736 127.809 L 73.513 127.809 L 81.1 118.158 Z M 2.683 103.119 L 13.73 116.387 L 12.877 115.675 L 45.954 118.766 L 45.965 115.781 L 2.683 101.972 Z M 48.823 115.675 L 48.109 115.781 L 48.109 116.464 L 48.1 118.749 L 82.891 115.881 L 93.743 102.082 Z M 85.674 93.745 L 85.033 94.024 L 48.135 110.08 L 48.135 113.698 L 48.135 113.743 L 94.09 99.741 L 94.09 70.991 L 85.674 58.639 Z M 2.683 72.478 L 2.683 99.741 L 45.974 113.552 L 45.988 110.224 L 11.709 94.01 L 11.099 93.721 L 11.099 59.856 Z M 13.245 56.638 L 13.245 92.383 L 45.997 107.874 L 46.029 100.075 L 20.635 83.491 L 20.153 83.177 L 20.153 46.281 Z M 76.62 83.217 L 76.087 83.523 L 48.178 99.589 L 48.145 107.756 L 83.528 92.36 L 83.528 55.744 L 83.701 55.744 L 76.62 45.353 Z M 22.299 43.063 L 22.299 82.034 L 46.039 97.538 L 46.085 86.302 L 46.084 86.305 L 32.191 71.627 L 30.715 69.586 L 30.715 30.443 Z M 64.381 71.104 L 63.845 71.627 L 48.234 85.927 L 48.188 97.128 L 74.474 81.996 L 74.474 42.313 L 74.549 42.313 L 64.549 27.637 Z M 56.286 61.437 L 56.281 61.739 L 56.116 61.994 L 48.282 74.073 L 48.244 83.295 L 62.403 69.777 L 62.403 24.488 L 56.953 16.49 Z M 32.751 27.389 L 32.838 27.259 L 33.264 69.512 L 46.098 83.165 L 46.136 74.006 L 39.886 61.904 L 39.769 61.677 L 39.769 16.867 Z M 41.915 13.65 L 41.915 61.165 L 47.318 71.627 L 54.144 61.102 L 54.853 13.407 L 48.396 3.932 Z" fill="rgba(204,0,51,0.16)"></path>
      </g>
    </svg>
  );

  return (
    <section id="stats" className="w-full bg-[#fcfaf5] py-14 px-4 md:px-12 lg:px-24 font-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* ── Row 1: Text card + Image card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <ScrubCard 
            direction="left"
            className="lg:col-span-6 xl:col-span-5 group bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center items-start
              transition-all duration-500 ease-out
              hover:shadow-[0_8px_40px_rgba(208,7,54,0.10)] hover:border-[#f0c6cf] hover:-translate-y-1"
          >
            <BlurText
              text="Approaching Rishihood"
              delay={30}
              animateBy="letters"
              direction="bottom"
              className="text-xl md:text-3xl font-semibold text-[#d00736] mb-6"
            />
            <h3 className="text-md md:text-lg font-semibold text-[#333] mb-4 leading-snug">
              Reimagining higher education as a force for national transformation.
            </h3>
            <p className="text-[#555] text-base md:text-lg mb-8 leading-relaxed font-light">
              We shape learners for personal growth, professional excellence, and public impact in an industry-integrated, values-first learning environment.
            </p>
            <button className="relative overflow-hidden bg-[#d00736] text-white px-8 py-3.5 rounded-md font-medium shadow-md
              transition-all duration-300 ease-out
              hover:shadow-[0_6px_24px_rgba(208,7,54,0.40)] hover:-translate-y-0.5 hover:bg-[#b8052e]
              active:translate-y-0 active:shadow-md group/btn">
              <span className="relative z-10">Download Brochure</span>
              {/* shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </ScrubCard>

          <ScrubCard 
            direction="right"
            className="lg:col-span-6 xl:col-span-7 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[300px] sm:h-[400px] lg:h-auto
              group transition-all duration-500 ease-out
              hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-gray-200"
          >
            <img 
              src="https://framerusercontent.com/images/7MyhsrkNz01pfukKf1ZVSf04z1M.jpg?scale-down-to=4096&width=6000&height=4000" 
              alt="Speaker" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </ScrubCard>
        </div>

        {/* ── Row 2: Quote card ── */}
        <ScrubCard 
          direction="left"
          className="group bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden flex flex-col md:flex-row items-center pt-10 md:pt-0
            transition-all duration-500 ease-out
            hover:shadow-[0_8px_40px_rgba(208,7,54,0.08)] hover:border-[#f5dde2] hover:-translate-y-0.5"
        >
          {/* Animated warm glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(208,7,54,0.04) 0%, transparent 70%)' }}
          />

          <LeafSVG className="absolute right-0 bottom-0 w-[75px] md:w-[150px] h-auto opacity-30 translate-x-[20%] translate-y-[20%] pointer-events-none
            transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 group-hover:translate-x-[15%]" />
          
          <div className="w-full md:w-1/3 flex justify-center items-end self-end z-10">
            <img 
              src="https://framerusercontent.com/images/wto8A0XGiC0azyEaFGUnuXm9I.png?width=838&height=1021" 
              alt="Swami Vivekananda" 
              className="w-32 md:w-48 lg:w-[160px] h-auto object-contain drop-shadow-xl translate-y-2 md:translate-y-8
                transition-transform duration-500 ease-out group-hover:drop-shadow-2xl"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          
          <div className="w-full md:w-2/3 py-10 px-8 md:pr-24 md:pl-8 relative z-10 text-center md:text-left mt-4 md:mt-0">
            {/* Decorative quote mark */}
            <span className="text-[80px] leading-none text-[#d00736]/10 font-serif absolute top-6 left-8 md:left-auto md:right-28 pointer-events-none select-none group-hover:text-[#d00736]/20 transition-colors duration-500">"</span>
            <p className="text-[#666] text-md lg:text-[18px] leading-relaxed mb-4 font-medium max-w-5xl italic">
              "We must also remember that the leaders of our societies have never been either generals or kings, but Rishis... If there have been sages and Rishis in the past, be sure that there will be many now."
            </p>
            <p className="text-[#d47e60] font-semibold font-secondary italic text-md">
              — Swami Vivekananda
            </p>
          </div>
        </ScrubCard>

        {/* ── Row 3: Stat cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ScrubCard 
            direction="left"
            className="group bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-center min-h-[200px]
              transition-all duration-500 ease-out
              hover:shadow-[0_8px_40px_rgba(208,7,54,0.10)] hover:border-[#f0c6cf] hover:-translate-y-1"
          >
            <LeafSVG className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-auto opacity-30 translate-x-[20%] pointer-events-none
              transition-all duration-700 group-hover:opacity-50 group-hover:scale-105" />

            {/* Background glow pulse on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(208,7,54,0.05) 0%, transparent 65%)' }}
            />
            
            <div className="relative z-10 flex items-end mb-2">
              <BlurText
                text="2,800"
                delay={50}
                animateBy="letters"
                direction="bottom"
                className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#111] leading-none tracking-tight
                  transition-colors duration-300 group-hover:text-[#d00736]"
              />
              <span className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#d00736] leading-none tracking-tight ml-1
                transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1 inline-block origin-bottom">+</span>
            </div>
            <p className="text-[#555] text-base md:text-lg font-light max-w-xs relative z-10 mt-2 transition-colors duration-300 group-hover:text-[#333]">
              Learners & Alumni thriving impact-first network
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-linear-to-r from-[#d00736] to-[#ff6b35] transition-all duration-500 ease-out rounded-b-3xl" />
          </ScrubCard>

          <ScrubCard 
            direction="right"
            className="group bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-center min-h-[200px]
              transition-all duration-500 ease-out
              hover:shadow-[0_8px_40px_rgba(208,7,54,0.10)] hover:border-[#f0c6cf] hover:-translate-y-1"
          >
            <LeafSVG className="absolute left-0 lg:right-20 bottom-0 lg:top-1/2 w-[160px] md:w-[250px] lg:w-[100px] h-auto opacity-80 lg:-translate-y-1/2 lg:translate-x-[20%] pointer-events-none translate-y-[20%] lg:!translate-y-[-50%]
              transition-all duration-700 group-hover:opacity-100 group-hover:scale-110" />

            {/* Background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(208,7,54,0.05) 0%, transparent 65%)' }}
            />
            
            <div className="relative z-10 flex flex-col lg:flex-row justify-between h-full gap-4 lg:gap-8">
              <div className="flex-1 flex flex-col justify-start lg:justify-center">
                <div className="flex items-end mb-1 lg:mb-2">
                  <BlurText
                    text="50"
                    delay={50}
                    animateBy="letters"
                    direction="bottom"
                    className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#111] leading-none tracking-tight
                      transition-colors duration-300 group-hover:text-[#d00736]"
                  />
                  <span className="text-5xl md:text-6xl lg:text-[80px] font-semibold text-[#d00736] leading-none tracking-tight ml-1
                    transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1 inline-block origin-bottom">+</span>
                </div>
                <p className="text-[#555] text-base md:text-lg font-light lg:mt-2 max-w-[200px] transition-colors duration-300 group-hover:text-[#333]">
                  Institutional Mentors from
                </p>
              </div>

              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6 relative z-10 lg:pr-8 lg:right-30 self-end lg:self-auto mt-auto lg:mt-0">
                <img 
                  src="https://framerusercontent.com/images/mQQEZND7w1Dh4xGlRjVWzfyLbE.png?width=260&height=84" 
                  alt="Newton School" 
                  className="h-6 md:h-8 object-contain transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                  onError={(e) => e.currentTarget.style.display='none'} 
                />
                <img 
                  src="https://framerusercontent.com/images/rNRJqRLJhC6Nrl6BIVnjQWzwDcg.png?width=220&height=92" 
                  alt="KPMG" 
                  className="h-4 md:h-6 object-contain transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 right-0 h-[3px] w-0 group-hover:w-full bg-linear-to-l from-[#d00736] to-[#ff6b35] transition-all duration-500 ease-out rounded-b-3xl" />
          </ScrubCard>
        </div>

      </div>
    </section>
  );
}
