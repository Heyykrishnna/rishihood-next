"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";


    const testimonials = [
        {
            img:"https://framerusercontent.com/images/0o2ypf2LrGeSP4JFxacRCOXh6w.png?width=800&height=407",
            quote:"It is encouraging to see that institutions such as Rishihood University are valuable contributors to this vision with dynamic curricula and unique programs to nurture the leaders of tomorrow. This aligns seamlessly with India's broader goal of empowering its youth to build a Viksit Bharat by 2047." ,
            name:"Shri Narendra Modi Ji",
            post:"(Prime Minister of India)"


        },
        {
            img:"https://framerusercontent.com/images/XmAMD2PC6SrwpS5ZyM4VXZw.png?width=400&height=420",
            quote:"I am very happy to inaugurate Rishihood University. I convey my best wishes to the founders, the faculty, and the students of this great institution.",
            name:"Shri M. Venkaiah Naidu Ji",
            post:"(Former VP)"
        },
        {
            img:"https://framerusercontent.com/images/IcQcKZlfwaZTG3LdAQH2v8ETBA.png?width=400&height=420",
            quote:"I am pleased to be part of Rishihood University, which carries forward Swami Vivekananda’s vision of a modern Takshashila. The curriculum is excellent and we are very excited to create “Rishi learners” whose thoughts and actions will contribute to nation building.",
            name:"Motilal Oswal Ji",
            post:"(Co founder and CEO Motilal Oswal Group)"
        },
        {
            img:"https://framerusercontent.com/images/nXwhFgWTtS9TxcCq9Y4WlCGZYU.png?width=400&height=420",
            quote:"India has a historic opportunity to become a developed nation, and educational institutions like Rishihood University play a fundamental role in this journey. I am delighted to join its Advisory Board and I am excited about its culture of problem-solving.",
            name:"Prof. S.P. Kothari",
            post:"(Chairperson, Board of Advisory, Rishihood University Former Deputy Dean, Sloan School of Management, MIT Padma shri Awardee)"

        },
        {
            img:"https://framerusercontent.com/images/nfyU5NYDU1afEFxnLNSyzIGEw.png?width=400&height=420",
            quote:"I have been associated with the founding of two universities. But I must congratulate Rishihood, because in just 10 years, it has achieved what usually takes several decades. This is a remarkable milestone in India’s higher education landscape.",
            name:"Sh Ajay Piramal",
            post:"(Chairman, Piramal Group)"
        },
        {
            img:"https://framerusercontent.com/images/Ln4rXtHYSYBWKVDHG3Umvh4REGc.png?width=391&height=399",
            quote:"As India moves towards the vision of a Viksit Bharat, we need more universities that pulsate with the energy and dynamism of young learners. Rishihood is contributing to that national mission of shaping future-ready leaders.",
            name:"Sh Dharmendra Pradhan",
            post:"(Ministry of Education, Government of India)"
        },
        {
            img:"https://framerusercontent.com/images/yYQ6dREG6YNDUeTtQ9tErjFALOM.png?width=391&height=399",
            quote:"Rishihood University is building a transformative model of higher education that is deeply rooted in India’s civilisational wisdom while maintaining global relevance. As Chancellor, I take pride in witnessing how our students are being nurtured to lead with purpose, innovation, and impact. Together, we are shaping future-ready leaders who are committed to serving Bharat and contributing meaningfully to the world.",
            name:"Sh Suresh Prabhu",
            post:"(Chancellor, Rishihood University Former Union Minister of Railways, Government of India)"
        },
        {
            img:"https://framerusercontent.com/images/IQz6q4HfAYKs4yUhcCv15a6KaL8.png?width=400&height=420",
            quote:"Rishihood University is not just an academic institution. It is a space to nurture courageous minds and compassionate hearts. In a world increasingly shaped by aggression, loneliness, and moral crisis, Rishihood can inspire a new model of education rooted in empathy, responsibility, and healing. I believe India must lead the way in globalising compassion and this school is a powerful beginning.",
            name:"Sh Kailash Satyarthi",
         
        },
        {
            img:"https://framerusercontent.com/images/wH9Fijqb5ZiqKOq1II993ISvVvw.png?width=400&height=420",
            quote:"If I had an option, I would go back in time and study at Rishihood. Its innovative curriculum gives me hope for a better and greater India. Rishihood means behaviour, character, respect for dignity, and growth in a peaceful environment and I hope that  Rishihood will soon become a global university as well.",
            name: "Dr Kiran Bedi",
            post: "(Former Lt. Governor of Puducherry, India's first Women IPS Officer)"
        },
        
    ]

    
export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];



  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200  flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.img}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
   
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-white dark:bg-card rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-2xl font-bold text-[#D00636] mb-2'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-semibold text-[#5D5D5D]'>
                  {currentTestimonial.quote}
                </p>
              </div>

              <p className='text-base text-[#C65830] leading-relaxed mb-8 font-secondary italic'>
                {currentTestimonial?.post}
              </p>

              
     
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Avatar */}
        <div className='w-full aspect-square bg-gray-200  rounded-3xl overflow-hidden mb-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.img }
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}

              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-xl font-bold text-[#D00636] mb-2'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-sm font-medium text-gray-600  mb-4'>
                {currentTestimonial.quote}
              </p>
              
              <p className='text-black  text-sm leading-relaxed mb-6'>
                {currentTestimonial?.post}
              </p>
              

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous testimonial'
          className='w-12 h-12 rounded-full bg-[#D00636]  shadow-md flex items-center justify-center  dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6 text-white ' />
        </button>

        {/* Dots */}
        <div className='flex gap-2'>
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                testimonialIndex === currentIndex
                  ? "bg-gray-900"
                  : "bg-gray-400 "
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next testimonial'
          className='w-12 h-12 rounded-full bg-[#D00636]  shadow-md flex items-center justify-center  dark:hover:bg-card/80 transition-colors cursor-pointer'
        >
          <ChevronRight className='w-6 h-6 text-white ' />
        </button>
      </div>
    </div>
  );
}
