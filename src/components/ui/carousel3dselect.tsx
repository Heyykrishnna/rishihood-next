"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface LearnerOption {
  img: string;
  name: string;
  course: string;
  quote: string;
}

interface Carousel3DSelectProps {
  learners: LearnerOption[];
  label?: string;
  placeholder?: string;
  radius?: number; // 3D radius
  itemWidth?: number;
  itemHeight?: number;
  onChange?: (learner: LearnerOption) => void;
  defaultIndex?: number;
  selectWidth?: string | number;
  autoScroll?: boolean; // Enable auto-scroll
  rotationSpeed?: number; // Rotation speed (degrees per frame, default: 0.1)
}

export const Carousel3DSelect: React.FC<Carousel3DSelectProps> = ({
  learners,
  label,
  placeholder = "Select...",
  radius = 250,
  itemWidth = 300,
  itemHeight = 400,
  onChange,
  defaultIndex = 0,
  selectWidth = "200px",
  autoScroll = false,
  rotationSpeed = 0.05,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(defaultIndex);
  const [rotation, setRotation] = React.useState(0);
  const animationFrameRef = React.useRef<number | undefined>(undefined);

  const angleStep = 360 / learners.length;

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
    onChange?.(learners[idx]);
    setRotation(-idx * angleStep);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + learners.length) % learners.length;
    handleSelect(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % learners.length;
    handleSelect(newIndex);
  };

  // Smooth continuous auto-scroll effect
  React.useEffect(() => {
    if (!autoScroll) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const animate = () => {
      setRotation((prev) => {
        const newRotation = prev - rotationSpeed;
        // Update current index based on rotation
        const normalizedRotation = (((-newRotation) % 360) + 360) % 360;
        const newIndex = Math.round(normalizedRotation / angleStep) % learners.length;
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
          onChange?.(learners[newIndex]);
        }
        return newRotation;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoScroll, rotationSpeed, angleStep, learners.length]);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Arrows */}
      <div className="flex items-center gap-6 w-full justify-center">
       

        {/* Carousel container */}
        <div 
          className="relative w-full md:max-w-[600px]  h-[500px] "
          style={{ perspective: "1500px" }}
        >
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              !autoScroll ? "transition-transform duration-700 ease-out" : ""
            )}
            style={{
              transform: `rotateY(${rotation}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {learners.map((learner, idx) => {
              const angle = idx * angleStep;
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={cn(
                    "absolute flex flex-col cursor-pointer rounded-xl shadow-lg   p-6 transition-all duration-300",
                    isCurrent ? "ring-1 opacity-100 scale-105" : "opacity-60 hover:opacity-80"
                  )}
                  style={{
                    width: itemWidth,
                    height: itemHeight,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={learner.img}
                    alt={learner.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-2 ring-gray-200"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-1">
                    {learner.name}
                  </h3>
                  <p className="text-sm text-[#C65830] text-center mb-3 font-medium font-secondary italic">
                    {learner.course}
                  </p>
                  <p className="text-[10px] text-[#5D5D5D] font-lighter text-center leading-relaxed line-clamp-6">
                    "{learner.quote}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

       
      </div>

    
    </div>
  );
};
