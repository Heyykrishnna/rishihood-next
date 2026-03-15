'use client';

import { motion } from 'framer-motion';

export default function FloatingBrochureButton() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 1.5 
      }}
      className="fixed right-0 top-1/2 z-9999 pointer-events-none"
    >
      <a 
        href="https://apply.rishihood.edu.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto block"
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative bg-linear-to-b from-[#d00736] to-[#8a0624] text-white 
                     flex flex-col items-center py-10 px-4 shadow-[0_20px_60px_rgba(138,6,36,0.4)]
                     border-l border-white/30 backdrop-blur-md overflow-hidden rounded-l-2xl"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-white" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-white" />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <span className="[writing-mode:vertical-rl] rotate-180 font-primary font-black text-[8px] md:text-[10px] tracking-[0.3em] uppercase whitespace-nowrap leading-none">
              Download Brochure
            </span>
          </div>

          <div className="absolute top-0 left-0 w-[2px] h-full bg-linear-to-b from-white/40 via-transparent to-white/40" />
        </motion.div>
      </a>
    </motion.div>
  );
}
