import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import BlurText from './BlurText';

const programsData = [
  {
    title: "BBA Entrepreneurship",
    description: "The program pairs hands-on learning with entrepreneurial insight, enabling students to build, manage, and scale ideas across industries.",
    image: "https://framerusercontent.com/images/BWir9Y8BCNLsp72tCcpSigGRuQ.jpg?scale-down-to=1024&width=5185&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Design",
    description: "The curriculum integrates hands-on learning, preparing students to tackle design challenges across industries.",
    image: "https://framerusercontent.com/images/ooDgdEo7SELeYldxeB3c4vOKb8E.jpg?scale-down-to=2048&width=6000&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Sc (Hons) Psychology",
    description: "Hands-on learning through two internships, industrial visits, and practical fieldwork further equip graduates with real-world expertise.",
    image: "https://framerusercontent.com/images/BOcHtZAYPb8Oc0m7Sa2qhS1pbxE.jpg?scale-down-to=2048&width=6720&height=4480",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Tech CS & Data Science",
    description: "With global study treks and internships at top firms, students gain real-world experience in applying analytics to solve business challenges",
    image: "https://framerusercontent.com/images/7BeqkCHlGjnmpg8Xji4fbIlGvQ.png?scale-down-to=2048&width=5392&height=3595",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "B.Tech CS & AI",
    description: "This industry-aligned program combines theoretical knowledge with hands-on experience, focusing on AI, machine learning, and data science.",
    image: "https://framerusercontent.com/images/viBGFjvJNX5Sqe3JCkv48awJng.jpg?scale-down-to=2048&width=5177&height=4000",
    format: "Full-Time",
    duration: "4 Years",
    eligibility: "Grade 12"
  },
  {
    title: "Rishihood Foundation",
    description: "An immersive one-year program for all first-year learners that builds self confidence, societal awareness and trans-disciplinary meta skills to succeed in the post-AI VUCA world. ",
    image: "https://framerusercontent.com/images/nb4RQpg8q7pZw2YueGXm0i0Eptk.jpg?scale-down-to=2048&width=6000&height=4000",
    format: "6 Courses",
    duration: "1st Year",
    eligibility: "1st Year Learners"
  }
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="programs" className="w-full bg-white py-24 px-4 md:px-12 lg:px-24 font-primary">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-3xl">
          <BlurText
            text="Undergraduate Programs"
            delay={40}
            animateBy="letters"
            direction="bottom"
            className="text-xl md:text-[32px] font-semibold justify-center text-[#d00736] mb-4"
          />
          <p className="text-[#555] text-sm md:text-sm font-medium">
            Practical learning and personal growth to build skills, mindset, and future-ready leadership.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-12">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {programsData.map((program, idx) => {
              const isActive = idx === activeIndex;
              const isFoundation = program.title === "Rishihood Foundation";
              
              return (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : idx)}
                    className={`text-left w-full transition-all duration-300 cursor-pointer ${
                      isActive && !isFoundation
                        ? "bg-[#fcf7ef] lg:border-l-4 lg:border-[#d00736] md:border-l-4 md:border-[#d00736] rounded-t-xl lg:rounded-xl py-5 px-6 flex justify-between items-center" 
                        : isFoundation
                          ? "bg-white border border-[#d00736] shadow-sm rounded-xl py-5 px-6 hover:shadow-md flex justify-between items-center"
                          : "bg-white border border-gray-100 shadow-sm rounded-xl py-5 px-6 hover:border-gray-300 hover:shadow-md flex justify-between items-center"
                    }`}
                  >
                    <span className={`text-lg md:text-lg ${
                      isActive && !isFoundation ? "text-[#111] font-semibold" 
                      : isFoundation ? "text-[#d00736] font-medium"
                      : "text-[#111] font-medium lg:text-[#777] lg:font-light"
                    }`}>
                      {program.title}
                    </span>
                    <div className="lg:hidden text-[#d00736]">
                      {isActive ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden w-full bg-[#fcf7ef] rounded-b-xl px-5 pb-6 pt-2 overflow-hidden"
                      >
                        <div className="w-full h-[200px] rounded-xl overflow-hidden shadow-sm mb-6">
                          <img 
                            src={program.image} 
                            alt={program.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <p className="text-[#555] text-[15px] leading-relaxed font-light mb-6">
                          {program.description}
                        </p>
                        
                        <div className="w-full h-px bg-[#e6dcc8] mb-6"></div>

                        <div className="grid grid-cols-3 gap-2 mb-6">
                          <div className="flex flex-col border-r border-[#e6dcc8] pr-2">
                            <span className="text-xs text-[#777] mb-1 font-light">
                              {program.title === "Rishihood Foundation" ? "Learning" : "Format"}
                            </span>
                            <span className="text-[15px] font-semibold text-[#111]">{program.format}</span>
                          </div>
                          <div className="flex flex-col border-r border-[#e6dcc8] px-2">
                            <span className="text-xs text-[#777] mb-1 font-light">Duration</span>
                            <span className="text-[15px] font-semibold text-[#111]">{program.duration}</span>
                          </div>
                          <div className="flex flex-col pl-2">
                            <span className="text-xs text-[#777] mb-1 font-light">Eligibility</span>
                            <span className="text-[15px] font-semibold text-[#111] whitespace-nowrap">{program.eligibility}</span>
                          </div>
                        </div>

                        {program.title !== "Rishihood Foundation" && (
                          <button className="w-full bg-[#d00736] hover:bg-[#c91738] text-white py-3.5 rounded-xl font-medium text-[15px] transition-colors shadow-md">
                            View Program
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex w-2/3 bg-[#fcf7ef] rounded-3xl p-10 flex-col md:flex-row gap-8 items-stretch overflow-hidden relative min-h-[450px]">
            
            <AnimatePresence mode="wait">
              {activeIndex !== -1 && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full flex flex-row gap-8 items-stretch"
                >
                  <div className="w-5/12 h-[350px] rounded-xl overflow-hidden shadow-sm shrink-0 self-center">
                    <img 
                      src={programsData[activeIndex].image} 
                      alt={programsData[activeIndex].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-7/12 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-[#d00736] mb-6 mt-10">
                      {programsData[activeIndex].title}
                    </h3>
                    
                    <div className="w-full h-px bg-[#e6dcc8] mb-6"></div>
                    
                    <p className="text-[#555] text-md mb-8 leading-relaxed font-light">
                      {programsData[activeIndex].description}
                    </p>
                    
                    <div className="w-full h-px bg-[#e6dcc8] mb-6"></div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="flex flex-col border-r border-[#e6dcc8] pr-4">
                        <span className="text-sm text-[#777] mb-1 font-light">
                          {programsData[activeIndex].title === "Rishihood Foundation" ? "Learning" : "Format"}
                        </span>
                        <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].format}</span>
                      </div>
                      <div className="flex flex-col border-r border-[#e6dcc8] px-4">
                        <span className="text-sm text-[#777] mb-1 font-light">Duration</span>
                        <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].duration}</span>
                      </div>
                      <div className="flex flex-col pl-4">
                        <span className="text-sm text-[#777] mb-1 font-light">Eligibility</span>
                        <span className="text-lg font-semibold text-[#111]">{programsData[activeIndex].eligibility}</span>
                      </div>
                    </div>

                    {programsData[activeIndex].title !== "Rishihood Foundation" && (
                      <button className="w-full bg-[#d00736] hover:bg-[#c91738] text-white py-4 rounded-xl font-medium text-lg transition-colors shadow-md mt-auto">
                        View Program
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
