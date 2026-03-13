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
        img:"https://framerusercontent.com/images/qPuKtFOkq7X2Uijn99W8JlKOT4.png",
        name:"Shobhit Mathur",
        occupation:"Co-Founder & Vice Chancellor, Rishihood University",
        edimg:"https://framerusercontent.com/images/MzyyufpM2EqML8IjkODFh2g10s.png"
    },
     {
        img:"https://framerusercontent.com/images/nKWsNAXGeoexDi6yWSETwBa6XjQ.png",
        name:"Sahil Aggarwal",
        occupation:"Co-Founder & CEO, Rishihood University",
        edimg:"https://framerusercontent.com/images/WUli7Ysmb3KQUFIZO6yDhSBrQYY.webp"
    },
     {
        img:"https://framerusercontent.com/images/9sQQNm8JEF3dKUVKbNA0PDBcCJg.png?width=500&height=500",
        name:"Motilal Oswal",
        occupation:"MD and CEO,Motilal Oswal Group",
        edimg:"https://framerusercontent.com/images/qjjknbSSqZgWBsjpkebigGscLNs.webp?width=90&height=90"
    },
     {
        img:"https://framerusercontent.com/images/cXgtCkGsydpBdAf3c4hyPFrROc.png",
        name:"Aditya Pittie",
        occupation:"Entrepreneur | Angel Investor | Mentor for India's Innovation Ecosystem",
        edimg:"https://framerusercontent.com/images/i4vAwLSHGIYfi7aI6hN4VPAUSE.webp"
    },
     {
        img:"https://framerusercontent.com/images/BEAkQRWICGa8CVNjsIfnhSdyU.png",
        name:"Ajay Gupta",
        occupation:"Founder & CEO,Bachpan Play School",
        edimg:"https://framerusercontent.com/images/ZTEKXDB0dDx6PnSu4DD6wBFUofM.webp"
    },
]
export default function Leaders(){
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !cardsWrapperRef.current) return;

        const cardWidth = 150; // Card width + gap
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
            className="Leaders w-full relative bg-[#FBF7EF]"
            id="leaders"
            style={{ minHeight: "100vh" }}
        >
            {/* Header */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
                <h2 className="text-[#D00636] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold tracking-wider mb-2">
                    Guided by Excellence
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#3A3A3A] font-light max-w-2xl">
                    Leaders from business, tech, and education support Rishihood in shaping a self-reliant, future-ready India.
                </p>
            </div>

            <div className="cards w-full h-full flex items-center py-20 px-4 overflow-hidden relative " style={{ perspective: "1200px" }}> 
                <div
                    ref={cardsWrapperRef}
                    className="flex gap-10  h-[70%]"
                    style={{ willChange: "transform" }}
                >
                    {people.map((person, idx) => (
                        <div
                            key={idx}
                            className="leader-card flex-shrink-0 w-72 h-[450px] md:w-100 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer relative transition-all duration-300"

                          
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
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                {/* Name */}
                                <h3 className="text-white text-lg md:text-xl font-bold mb-1 leading-tight">
                                    {person.name}
                                </h3>

                                {/* Occupation */}
                                <p className="text-white/90 text-xs md:text-sm font-light mb-3 leading-tight line-clamp-2">
                                    {person.occupation}
                                </p>

                                {/* Institution Image */}
                                <div className="w-12 h-12 bg-white/10 rounded-lg p-2 backdrop-blur-sm border border-white/20">
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