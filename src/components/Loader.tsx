'use client';

import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Loader = ({ show }: { show: boolean }) => {
  const textChars = "RISHIHOOD".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 2,
            filter: "blur(15px)" 
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.76, 0, 0.24, 1] 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-tr from-[#d00736]/10 via-transparent to-[#ffffff]/5 blur-[80px] rounded-full pointer-events-none z-[0]"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 flex items-center justify-center mb-8 md:mb-12"
          >
            <StyledWrapper>
              <svg className="pl" width={200} height={200} viewBox="0 0 240 240">
                <circle className="pl__ring pl__ring--a" cx={120} cy={120} r={105} fill="none" strokeWidth={10} strokeDasharray="0 660" strokeDashoffset={-330} strokeLinecap="round" />
                <circle className="pl__ring pl__ring--b" cx={120} cy={120} r={35} fill="none" strokeWidth={10} strokeDasharray="0 220" strokeDashoffset={-110} strokeLinecap="round" />
                <circle className="pl__ring pl__ring--c" cx={85} cy={120} r={70} fill="none" strokeWidth={10} strokeDasharray="0 440" strokeLinecap="round" />
                <circle className="pl__ring pl__ring--d" cx={155} cy={120} r={70} fill="none" strokeWidth={10} strokeDasharray="0 440" strokeLinecap="round" />
              </svg>
            </StyledWrapper>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0, filter: "blur(15px)", rotate: -45 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 }}
              transition={{ delay: 1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <img 
                src="https://framerusercontent.com/images/O5hT3Jtin2BIPCMxXf47RnB50.png?scale-down-to=1024&width=2862&height=3525" 
                alt="Rishihood Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] brightness-[1.5]"
              />
            </motion.div>
          </motion.div>

          <div className="flex overflow-hidden pb-4 relative z-10 px-4">
            {textChars.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "200%", opacity: 0, rotateX: -90, filter: "blur(10px)", scale: 0.8 }}
                animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.8 + index * 0.05,
                }}
                className="text-[14vw] md:text-[8vw] font-black leading-none tracking-tighter origin-bottom"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 20%, #888888 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "25vw", opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
              delay: 1.6,
            }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#d00736] to-transparent mt-2 md:mt-4 shadow-[0_0_20px_rgba(208,7,54,1)] rounded-full relative z-10"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StyledWrapper = styled.div`
  .pl {
    width: 6em;
    height: 6em;
    filter: drop-shadow(0 0 20px rgba(208, 7, 54, 0.3));
  }
  @media (min-width: 768px) {
    .pl {
      width: 8em;
      height: 8em;
    }
  }

  .pl__ring {
    animation: ringA 2s linear infinite;
  }

  .pl__ring--a {
    stroke: #d00736; /* Rishihood Main Red */
  }

  .pl__ring--b {
    animation-name: ringB;
    stroke: #ffffff; /* Center core white */
  }

  .pl__ring--c {
    animation-name: ringC;
    stroke: #ff4d4d; /* Bright red loops */
  }

  .pl__ring--d {
    animation-name: ringD;
    stroke: rgba(255, 255, 255, 0.2); /* Ghostly white/dark */
  }

  /* Animations */
  @keyframes ringA {
    from, 4% { stroke-dasharray: 0 660; stroke-width: 10; stroke-dashoffset: -330; }
    12% { stroke-dasharray: 60 600; stroke-width: 25; stroke-dashoffset: -335; }
    32% { stroke-dasharray: 60 600; stroke-width: 25; stroke-dashoffset: -595; }
    40%, 54% { stroke-dasharray: 0 660; stroke-width: 10; stroke-dashoffset: -660; }
    62% { stroke-dasharray: 60 600; stroke-width: 25; stroke-dashoffset: -665; }
    82% { stroke-dasharray: 60 600; stroke-width: 25; stroke-dashoffset: -925; }
    90%, to { stroke-dasharray: 0 660; stroke-width: 10; stroke-dashoffset: -990; }
  }

  @keyframes ringB {
    from, 12% { stroke-dasharray: 0 220; stroke-width: 10; stroke-dashoffset: -110; }
    20% { stroke-dasharray: 20 200; stroke-width: 25; stroke-dashoffset: -115; }
    40% { stroke-dasharray: 20 200; stroke-width: 25; stroke-dashoffset: -195; }
    48%, 62% { stroke-dasharray: 0 220; stroke-width: 10; stroke-dashoffset: -220; }
    70% { stroke-dasharray: 20 200; stroke-width: 25; stroke-dashoffset: -225; }
    90% { stroke-dasharray: 20 200; stroke-width: 25; stroke-dashoffset: -305; }
    98%, to { stroke-dasharray: 0 220; stroke-width: 10; stroke-dashoffset: -330; }
  }

  @keyframes ringC {
    from { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: 0; }
    8% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -5; }
    28% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -175; }
    36%, 58% { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: -220; }
    66% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -225; }
    86% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -395; }
    94%, to { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: -440; }
  }

  @keyframes ringD {
    from, 8% { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: 0; }
    16% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -5; }
    36% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -175; }
    44%, 50% { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: -220; }
    58% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -225; }
    78% { stroke-dasharray: 40 400; stroke-width: 25; stroke-dashoffset: -395; }
    86%, to { stroke-dasharray: 0 440; stroke-width: 10; stroke-dashoffset: -440; }
  }
`;

export default Loader;