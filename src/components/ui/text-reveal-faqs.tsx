'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";


export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Is Rishihood University in Sonipat approved by UGC?',
      answer: 'Yes, Rishihood University is an UGC approved university that offers multidisciplinary undergraduate programs including BBA, B Design, B Sc Hons Psychology and B. Tech in Computer Science',
    },
    {
      id: 'item-2',
      question: "What makes Rishihood University a preferred choice for Bachelor's degree?",
      answer: 'The programs offered by RU are more than just an undergraduate degree. The objective of the curriculum is to make students self-aware of their potential and capability. The programs aimed to teach students academic and cultural values to make them true leaders for tomorrow. RU also has a great record of placements and internships.',
    },
    {
      id: 'item-3',
      question: 'Where is Rishihoood University located?',
      answer: `Rishihood University is considered as one of the top university in Sonipat, Haryana which is a part of Delhi NCR region. It is just 50 minutes way from Delhi’s Jahangir Puri Metro Station.

      Here is the address:
      Rishihood University, NH-44 (GT Road), Near Bahalgarh Chowk,
      Delhi NCR, Sonipat,
      Haryana, India 131021`,
    },
    {
      id: 'item-4',
      question: 'What is the average package offered to students during placements at Rishihood University?',
      answer: `Rishihood’s Career Advancement Team aims to assist students to get a role in top companies in India and across the globe. We have:

Highest CTC: 10 LPA
Average CTC: 7 LPA
Median CTC: 6 LPA`,
    },
    {
      id: 'item-5',
      question: "What makes Rishihood University a preferred choice for Bachelor's degree?",
      answer: 'Firstly choose which component you need to copy by using our super fast search page, then copy the respective screen size you need by clicking on the copy button. Now you have the Figma Component in your clipboard you can paste ( “cmd + v” or “ctrl + v” ) it anywhere in your design files.',
    },
  ];


  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#D00636]">FAQs</h2>
          </div>

          <div className="md:col-span-5">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600">
                  <AccordionTrigger className="cursor-pointer text-sm sm:text-base font-medium hover:no-underline text-[#D00636] text-left py-4 sm:py-5">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

         
        </div>
      </div>
    </section>
  )
}

 
export const BlurredStagger = ({
  text = "built by ruixen.com",
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className="text-sm sm:text-base leading-relaxed sm:leading-loose break-words whitespace-normal"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};