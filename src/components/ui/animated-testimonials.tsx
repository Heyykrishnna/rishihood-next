"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  src: string;
  title?: string;
  description?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
  showText = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
  showText?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-sm md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-5", className)}>
      <div className={cn(
        "relative gap-5",
        showText ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col items-center"
      )}>
        <div className={cn(showText ? "" : "w-full max-w-2xl")}>
          <div className="relative h-[280px] w-[220px] sm:h-[350px] sm:w-[280px] md:h-[420px] md:w-[340px] lg:h-[500px] lg:w-[400px] mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <iframe
                    src={testimonial.src}
                    width={800}
                    height={800}
                    draggable={false}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full rounded-2xl sm:rounded-3xl object-cover object-center overflow-hidden"
                    style={{ 
                      overflow: 'hidden',
                      border: 'none'
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {showText && (
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-foreground">
                {testimonials[active]?.title || "Title"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonials[active]?.description || "Description"}
              </p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        )}
        {!showText && (
          <div className="flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={handlePrev}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center group/button cursor-pointer bg-[#D00636] hover:bg-[#B00528] transition"
            >
              <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#D00636] hover:bg-[#B00528] flex items-center justify-center group/button cursor-pointer transition"
            >
              <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};