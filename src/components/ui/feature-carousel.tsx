import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component from shadcn/ui
import { cn } from '@/lib/utils'; // Assuming you have a utility for class names

// --- TYPES ---
interface Person {
  img: string;
  name: string;
  occupation: string;
  edimg: string;
}

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  people: Person[];
  className?: string;
}

// --- HERO SECTION COMPONENT ---
export const HeroSection = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ title, subtitle, people, className }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(people.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, [people.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    };
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full flex flex-col items-center justify-center overflow-x-hidden bg-background text-foreground p-4',
          className
        )}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(128,90,213,0.3),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,123,255,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Header Section - Only show if title or subtitle provided */}
          {(title || subtitle) && (
            <div className="space-y-4">
              {title && (
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-4xl">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Main Showcase Section */}
          <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
              {people.map((person, index) => {
                const offset = index - currentIndex;
                const total = people.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-72 h-[450px] md:w-96 md:h-[550px] transition-all duration-500 ease-in-out',
                      'flex flex-col overflow-hidden'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 50}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${(pos) * -8}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                      visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                    }}
                  >
                    <div className="relative w-full h-full rounded-3xl border-2 border-foreground/10 shadow-2xl overflow-hidden bg-background">
                      {/* Person Image */}
                      <img
                        src={person.img}
                        alt={person.name}
                        className="object-cover w-full h-full"
                      />
                      
                      {/* Person Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pb-6">
                        <div className="flex items-end justify-between gap-3">
                          <div className="flex-1 text-white">
                            <h3 className="font-bold text-lg leading-tight mb-1">{person.name}</h3>
                            <p className="text-sm text-white/90 leading-tight line-clamp-2">{person.occupation}</p>
                          </div>
                          <img
                            src={person.edimg}
                            alt={`${person.name}'s institution`}
                            className="w-12 h-12 object-contain shrink-0 bg-white/10 rounded-lg p-1 backdrop-blur-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20  backdrop-blur-sm cursor-pointer bg-[#D00636]"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-[#D00636] cursor-pointer backdrop-blur-sm"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
