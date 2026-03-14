'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

const programsData = [
  {
    title: "BBA Entrepreneurship",
    tag: "Business",
    description: "The program pairs hands-on learning with entrepreneurial insight, enabling students to build, manage, and scale ideas across industries.",
    image: "./images/Programs/p1.avif",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12",
    index: "01",
    href: "https://shadcnstudio.com/"
  },
  {
    title: "B.Design",
    tag: "Design",
    description: "The curriculum integrates hands-on learning, preparing students to tackle design challenges across industries.",
    image: "./images/Programs/p2.avif",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12",
    index: "02",
    href: "https://shadcnstudio.com/"
  },
  {
    title: "B.Sc (Hons) Psychology",
    tag: "Science",
    description: "Hands-on learning through two internships, industrial visits, and practical fieldwork further equip graduates with real-world expertise.",
    image: "./images/Programs/p3.avif",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12",
    index: "03",
    href: "https://shadcnstudio.com/"
  },
  {
    title: "B.Tech CS & Data Science",
    tag: "Technology",
    description: "With global study treks and internships at top firms, students gain real-world experience in applying analytics to solve business challenges.",
    image: "./images/Programs/p4.avif",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12",
    index: "04",
    href: "https://shadcnstudio.com/"
  },
  {
    title: "B.Tech CS & AI",
    tag: "Artificial Intelligence",
    description: "This industry-aligned program combines theoretical knowledge with hands-on experience, focusing on AI, machine learning, and data science.",
    image: "./images/Programs/p5.avif",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12",
    index: "05",
    href: "https://shadcnstudio.com/"
  },
  {
    title: "Rishihood Foundation",
    tag: "Foundation Year",
    description: "An immersive one-year program for all first-year learners that builds self confidence, societal awareness and trans-disciplinary meta skills.",
    image: "./images/Programs/p6.avif",
    format: "6 Courses",
    duration: "1st Year",
    eligibility: "All 1st Year",
    index: "06",
    href: ""
  }
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bigNumRef = useRef<HTMLSpanElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' }
        }
      );

      gsap.fromTo(
        stripRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1, duration: 1.3, ease: 'expo.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
        }
      );

      const items = listRef.current?.querySelectorAll('.prog-row');
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, x: -32 },
          {
            opacity: 1, x: 0,
            duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top 80%' }
          }
        );
      }

      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 36, scale: 0.975 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: panelRef.current, start: 'top 82%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!bigNumRef.current) return;
    gsap.fromTo(bigNumRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }
    );
  }, [activeIndex]);

  const prog = programsData[activeIndex];
  const isFoundation = prog.title === 'Rishihood Foundation';

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="w-full bg-white py-24 px-4 md:px-12 lg:px-20 overflow-hidden font-primary relative"
    >
      <div className="absolute top-0 right-0 w-[340px] h-[340px] rounded-full bg-[#d00736]/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[240px] h-[240px] rounded-full bg-[#fcf7ef] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="exp-header text-center mx-auto mb-10 max-w-3xl">
            <BlurText
              text="Undergraduate Programs"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="text-xl md:text-[32px] font-semibold justify-center text-[#d00736] mb-4"
            />
            <p className="text-[#666] text-sm font-medium">
              Practical learning and personal growth to build skills, mindset, and future-ready leadership.
            </p>
          </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          <div ref={listRef} className="w-full lg:w-[38%] flex flex-col border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {programsData.map((program, idx) => {
              const isActive = idx === activeIndex;
              const isFoundationRow = program.title === 'Rishihood Foundation';
              return (
                <div key={idx} className="prog-row w-full">
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-full text-left flex items-center gap-4 px-5 py-4 cursor-pointer transition-all duration-300 group border-b border-gray-100 last:border-b-0 ${
                      isActive ? 'bg-[#fcf7ef]' : 'bg-white hover:bg-[#faf9f6]'
                    } ${!isActive && isFoundationRow ? 'border-l-[3px] border-l-[#d00736]' : ''}`}
                  >
                    <motion.div
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute left-0 top-0 h-full w-[3px] bg-[#d00736] origin-top rounded-r-full"
                    />

                    <span className={`font-mono text-[10px] tracking-widest shrink-0 transition-colors duration-300 ${
                      isActive ? 'text-[#d00736]' : 'text-[#ccc] group-hover:text-[#bbb]'
                    }`}>
                      {program.index}
                    </span>

                    <span className={`flex-1 text-sm md:text-[15px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-[#111]' : 'text-[#888] group-hover:text-[#555]'
                    }`}>
                      {program.title}
                    </span>

                    <div className="flex items-center gap-2 shrink-0">
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="hidden md:inline text-[10px] tracking-widest uppercase text-[#d00736] bg-[#d00736]/8 border border-[#d00736]/20 px-2 py-0.5 rounded-sm font-medium"
                        >
                          {program.tag}
                        </motion.span>
                      )}
                      <div className="lg:hidden text-[#d00736]">
                        {isActive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#ccc]" />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden bg-[#fcf7ef] border-b border-[#eee]"
                      >
                        <div className="p-5 flex flex-col gap-4">
                          <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm">
                            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                          </div>
                          <p className="text-[#666] text-sm leading-relaxed font-light">{program.description}</p>
                          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#e6dcc8]">
                            {[
                              { label: isFoundation ? 'Learning' : 'Format', val: program.format },
                              { label: 'Duration', val: program.duration },
                              { label: 'Eligibility', val: program.eligibility }
                            ].map((item, i) => (
                              <div key={i} className="flex flex-col">
                                <span className="text-[10px] text-[#aaa] uppercase tracking-widest mb-1">{item.label}</span>
                                <span className="text-[#111] text-sm font-semibold">{item.val}</span>
                              </div>
                            ))}
                          </div>
                          {!isFoundation && (
                            <a
                              href={program.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-[#d00736] hover:bg-[#b8062f] text-white py-3 rounded-xl font-medium text-sm tracking-wide transition-colors duration-300 text-center block"
                            >
                              View Program
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div
            ref={panelRef}
            className="hidden lg:block w-full lg:w-[62%] relative rounded-2xl overflow-hidden bg-[#fcf7ef] border border-[#f0e6d8] min-h-[500px] shadow-[0_4px_40px_rgba(208,7,54,0.06)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-row"
              >
                <div className="w-[42%] h-full relative overflow-hidden">
                  <motion.img
                    src={prog.image}
                    alt={prog.title}
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#fcf7ef]" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#fcf7ef]/60 via-transparent to-transparent" />
                  <span
                    ref={bigNumRef}
                    className="absolute bottom-5 left-5 text-[72px] font-black text-[#d00736]/10 leading-none select-none pointer-events-none"
                  >
                    {prog.index}
                  </span>
                </div>

                <div className="w-[58%] h-full flex flex-col justify-center px-8 py-10 relative">
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.35 }}
                    className="absolute top-6 right-6 text-[10px] text-[#d00736] tracking-[0.25em] uppercase font-semibold border border-[#d00736]/25 px-3 py-1 rounded-full bg-[#d00736]/5"
                  >
                    {prog.tag}
                  </motion.div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-px bg-[#d00736]" />
                    <span className="text-[#d00736] text-[10px] font-semibold tracking-[0.25em] uppercase">{prog.duration}</span>
                  </div>

                  <h3 className="text-2xl xl:text-[32px] font-bold text-[#111] mb-5 leading-tight">
                    {prog.title}
                  </h3>

                  <div className="w-full h-px bg-linear-to-r from-[#d00736]/40 via-[#e6dcc8] to-transparent mb-5" />

                  <p className="text-[#666] text-[14px] leading-relaxed font-light mb-6">
                    {prog.description}
                  </p>

                  <div className="w-full h-px bg-[#e6dcc8] mb-6" />

                  <div className="grid grid-cols-3 gap-0 mb-8">
                    {[
                      { label: isFoundation ? 'Learning' : 'Format', val: prog.format },
                      { label: 'Duration', val: prog.duration },
                      { label: 'Eligibility', val: prog.eligibility }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
                        className={`flex flex-col pr-4 ${i < 2 ? 'border-r border-[#e6dcc8] mr-4' : ''}`}
                      >
                        <span className="text-[10px] text-[#aaa] uppercase tracking-widest mb-1.5">{item.label}</span>
                        <span className="text-[#111] font-semibold text-base">{item.val}</span>
                      </motion.div>
                    ))}
                  </div>

                  {!isFoundation ? (
                    <motion.a
                      href={prog.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.35 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative overflow-hidden group flex items-center gap-2 bg-[#d00736] hover:bg-[#b8062f] text-white py-3.5 px-6 rounded-xl font-medium text-sm tracking-wide self-start transition-colors duration-300 shadow-[0_4px_20px_rgba(208,7,54,0.25)]"
                    >
                      View Program
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    </motion.a>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.35 }}
                      className="inline-flex items-center gap-2 border border-[#d00736]/30 text-[#d00736] py-2.5 px-5 rounded-xl text-sm font-medium bg-[#d00736]/5 self-start"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d00736] animate-pulse" />
                      All First Year Learners
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 right-6 flex gap-1.5 z-10">
              {programsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'bg-[#d00736] w-5' : 'bg-[#d00736]/20 hover:bg-[#d00736]/40 w-1.5'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
