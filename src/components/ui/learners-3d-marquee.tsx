import React from 'react';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface LearnerOption {
  img: string;
  name: string;
  course: string;
  quote: string;
}

interface Learners3DMarqueeProps {
  learners: LearnerOption[];
  className?: string;
}

export const Learners3DMarquee = React.forwardRef<HTMLDivElement, Learners3DMarqueeProps>(
  ({ learners, className }, ref) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const marqueeRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!sectionRef.current || !marqueeRef.current || !containerRef.current) return;

      const cardWidth = 310; // w-64 + gap
      const totalDistance = cardWidth * learners.length;

      // Create horizontal scroll effect on vertical scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalDistance * 1.5}`,
          scrub: 1, // 1 = smooth scroll
          markers: false, // Set to true for debugging
          pin: true, // Pin the section while scrolling horizontally
        }
      });

      // Animate marquee horizontally
      tl.to(marqueeRef.current, {
        x: -totalDistance,
        duration: 1,
        ease: "none"
      });

      // Animate cards with staggered effects
      tl.to(
        containerRef.current?.querySelectorAll('.learner-card'),
        {
          y: -10,
          opacity: 0.8,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.inOut"
        },
        0
      );

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      };
    }, [learners.length]);

    return (
      <div
        ref={sectionRef}
        className={cn(
          'relative w-full flex items-center justify-center overflow-hidden bg-[#fcfaf5]',
          className
        )}
        style={{
          minHeight: "80vh"
        }}
      >
        {/* 3D Marquee Container */}
        <div
          ref={containerRef}
          className="relative w-full flex items-center py-8 px-4 h-full"
          style={{
            perspective: "1400px"
          }}
        >
          <div
            ref={marqueeRef}
            className="flex gap-4 h-full"
            style={{
              willChange: "transform"
            }}
          >
            {learners.map((learner, index) => (
              <div
                key={index}
                className="learner-card relative flex-shrink-0 w-64 transition-all duration-300 group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  height: "380px"
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    rotateY: 8,
                    rotateX: -5,
                    scale: 1.08,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                  gsap.to(e.currentTarget.querySelector('img'), {
                    scale: 1.08,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                  gsap.to(e.currentTarget.querySelector('img'), {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                  });
                }}
              >
                {/* Card Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 flex flex-col group">
                  {/* Image Container */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                    <img
                      src={learner.img}
                      alt={learner.name}
                      className="object-cover w-full h-full transition-transform duration-300"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-4 flex flex-col justify-between overflow-hidden">
                    {/* Name and Course */}
                    <div className="mb-2">
                      <h3 className="font-bold text-sm text-gray-900 leading-tight mb-1">
                        {learner.name}
                      </h3>
                      <p className="text-xs text-[#D00636] font-semibold">
                        {learner.course}
                      </p>
                    </div>

                    {/* Quote */}
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 italic text-justify">
                      "{learner.quote}"
                    </p>
                  </div>

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 h-full w-32 md:w-48 bg-gradient-to-r from-[#fcfaf5] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-32 md:w-48 bg-gradient-to-l from-[#fcfaf5] to-transparent z-10 pointer-events-none"></div>

          {/* Center text indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-gray-500 text-sm font-light pointer-events-none z-20 opacity-60">
            ↓ Scroll to see the magic ↓
          </div>
        </div>
      </div>
    );
  }
);

Learners3DMarquee.displayName = 'Learners3DMarquee';
