"use client";
import OrbitCarousel from "@/components/ui/orbiting-carousel-with-animated-icons";
import { div } from "framer-motion/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { title } from "process";

gsap.registerPlugin(ScrollTrigger);





const people = [
    {
        img:"./images/Leaders/l1.avif",
        name:"Shobhit Mathur",
        occupation:"Co-Founder & Vice Chancellor, Rishihood University",
        edimg:"./images/Leaders/isb.avif"
    },
     {
        img:"./images/Leaders/l2.avif",
        name:"Sahil Aggarwal",
        occupation:"Co-Founder & CEO, Rishihood University",
        edimg:"./images/Leaders/l2ed.webp"
    },
     {
        img:"./images/Leaders/l3.avif",
        name:"Motilal Oswal",
        occupation:"MD and CEO,Motilal Oswal Group",
        edimg:"./images/Leaders/mo.webp"
    },
     {
        img:"./images/Leaders/l4.avif",
        name:"Aditya Pittie",
        occupation:"Entrepreneur | Angel Investor | Mentor for India's Innovation Ecosystem",
        edimg:"./images/Leaders/mit.webp"
    },
     {
        img:"./images/Leaders/l5.avif",
        name:"Ajay Gupta",
        occupation:"Founder & CEO,Bachpan Play School",
        edimg:"./images/Leaders/bachpan.webp"
    },
]
export default function Leaders(){
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !cardsWrapperRef.current) return;

        // Calculate responsive card width based on screen size
        const getCardWidth = () => {
            if (window.innerWidth <= 640) return 180; // sm
            if (window.innerWidth <= 768) return 120; // md
            if (window.innerWidth <= 1024) return 190; // lg
            return 140; // xl and above
        };

        const cardWidth = getCardWidth();
        const totalDistance = cardWidth * people.length;

        // Create horizontal scroll effect on vertical scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${totalDistance * 1.5}`,
                scrub: 1,
                pin: true,
                markers: false,
            }
        });

        // Animate cards horizontally
        tl.to(cardsWrapperRef.current, {
            x: -totalDistance,
            duration: 1,
            ease: "none"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === containerRef.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return(
        <div
            ref={containerRef}
            className="Leaders w-full relative  bg-[#FBF7EF]"
            id="leaders"
            style={{ minHeight: "100vh" }}
        >
            {/* Header */}
            <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-1/2 -translate-x-1/2 z-20 text-center px-4 w-full ">
                <h2 className="text-[#D00636] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider mb-2 sm:mb-3">
                    Guided by Excellence
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#3A3A3A] font-light">
                    Leaders from business, tech, and education support Rishihood in shaping a self-reliant, future-ready India.
                </p>
            </div>

            <div className="cards w-full h-full flex items-center py-8 sm:py-12 md:py-16 lg:py-20 pt-32 sm:pt-40 md:pt-48 px-2 sm:px-4 overflow-hidden relative" style={{ perspective: "1200px" }}> 
                <div
                    ref={cardsWrapperRef}
                    className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]"
                    style={{ willChange: "transform" }}
                >
                    {people.map((person, idx) => (
                        <div
                            key={idx}
                            className="leader-card flex-shrink-0 w-56 sm:w-60 md:w-72 lg:w-80 xl:w-96 h-80 sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl group cursor-pointer relative transition-all duration-30 lg:top-30"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${person.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

                            {/* Content at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 z-10">
                                {/* Name */}
                                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 leading-tight">
                                    {person.name}
                                </h3>

                                {/* Occupation */}
                                <p className="text-white/90 text-xs md:text-sm font-light mb-2 sm:mb-3 leading-tight line-clamp-2">
                                    {person.occupation}
                                </p>

                                {/* Institution Image */}
                                <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/20">
                                    <img
                                        src={person.edimg}
                                        alt="Institution"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Hover Effect - Light Border */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-3xl transition-all duration-300" />
                        </div>
                    ))}
                </div>

              
            </div>
        </div>
    )
}