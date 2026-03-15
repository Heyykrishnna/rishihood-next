'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

  return (
    <div id="programs" className="w-screen font-primary">
      {programsData.map((program, index) => {
        const isFoundationCard = program.title === 'Rishihood Foundation';

        return (
          <div
            key={index}
            className="w-screen h-screen relative overflow-hidden flex items-center justify-center sticky top-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.5 }}
              className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-20"
            >
              <div className="max-w-3xl">
                {/* Tag and Index */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[#d00736] text-sm md:text-base font-semibold tracking-widest uppercase bg-[#d00736]/20 px-4 py-2 rounded-full backdrop-blur-sm">
                    {program.tag}
                  </span>
                  <span className="text-white/60 font-mono text-2xl md:text-4xl font-bold">
                    {program.index}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                  {program.title}
                </h2>

                {/* Divider */}
                <div className="w-20 h-1 bg-[#d00736] rounded-full mb-6" />

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl leading-relaxed">
                  {program.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                  {[
                    { label: isFoundationCard ? 'Learning' : 'Format', val: program.format },
                    { label: 'Duration', val: program.duration },
                    { label: 'Eligibility', val: program.eligibility }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs text-white/60 uppercase tracking-widest mb-2 font-semibold">
                        {item.label}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-white">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {!isFoundationCard && (
                  <motion.a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-[#d00736] hover:bg-[#b8062f] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-colors duration-300 w-fit shadow-2xl"
                  >
                    View Program
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>
                )}

                {isFoundationCard && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-3 border-2 border-[#d00736] text-[#d00736] py-3 px-6 rounded-xl text-lg font-semibold bg-white/10 backdrop-blur-sm w-fit"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#d00736] animate-pulse" />
                    All First Year Learners
                  </motion.div>
                )}
              </div>
            </motion.div>

           
          </div>
        );
      })}
    </div>
  );
}
