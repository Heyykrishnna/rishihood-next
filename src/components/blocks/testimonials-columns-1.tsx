"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  img: string;
  name: string;
  course: string;
  quote: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, img, name, course }: Testimonial, i: number) => (
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border shadow-lg shadow-primary/10 w-full h-auto sm:h-80 md:h-96 lg:h-100 flex flex-col sm:flex-row gap-4 sm:gap-6" key={i}>
                  <div className="w-full sm:w-2/5 md:w-1/3 shrink-0">
                    <img src={img} alt={name} className="w-full h-40 sm:h-full rounded-xl sm:rounded-2xl object-cover" />
                  </div>
                 
                  <div className="flex-1 flex flex-col w-full">
                    <div className="shrink-0 mb-2 sm:mb-3">
                      <div className="font-medium tracking-tight text-sm sm:text-base md:text-lg lg:text-xl text-[#3A3A3A]">{name}</div>
                      <div className="text-xs sm:text-sm md:text-base text-[#C65830] opacity-60 tracking-tight font-secondary italic">{course}</div>
                    </div>
                    <div className="flex-1 text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 line-clamp-3 sm:line-clamp-4">{quote}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};