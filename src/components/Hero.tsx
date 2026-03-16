'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scatterGrid = [
  { src: 'https://ik.imagekit.io/yatharthkhandelwal/Dev%20R-Uni/g9_compressed.jpg?updatedAt=1773569942269', top: '12%', left: '15%', width: '17vw', height: '20vh' },
  { src: 'https://ik.imagekit.io/yatharthkhandelwal/Dev%20R-Uni/g2_compressed.avif?updatedAt=1773569941822', top: '18%', left: '65%', width: '15vw', height: '18vh' },
  { src: 'https://ik.imagekit.io/yatharthkhandelwal/Dev%20R-Uni/g11_compressed.avif?updatedAt=1773569942107', top: '60%', left: '15%', width: '17vw', height: '22vh' },
  { src: 'https://ik.imagekit.io/yatharthkhandelwal/Dev%20R-Uni/g10_compressed.avif?updatedAt=1773569941486', top: '45%', left: '75%', width: '19vw', height: '19vh', objectFit: 'contain' },
  { src: 'https://res.cloudinary.com/dpod2sj9t/image/upload/v1773570412/g8_compressed_ktdesc.avif', top: '75%', left: '45%', width: '17vw', height: '20vh' },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.5,
          pin: true,
        }
      });

      tl.to(text2Ref.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
      }, 0);

      tl.to(videoWrapperRef.current, {
        scale: 0.35,
        borderRadius: '40px',
        duration: 3,
        ease: 'power3.inOut',
      }, 0);

      if (gridRef.current) {
        const items = gridRef.current.children;
        Array.from(items).forEach((item) => {
           const rect = item.getBoundingClientRect();
           const centerX = rect.left + rect.width / 2;
           const centerY = rect.top + rect.height / 2;
           
           const windowCenterX = window.innerWidth / 2;
           const windowCenterY = window.innerHeight / 2;
           
           const dx = centerX - windowCenterX;
           const dy = centerY - windowCenterY;
           
           const distanceToMove = window.innerWidth * 0.6;
           const angle = Math.atan2(dy, dx);
           
           const xOffset = Math.cos(angle) * distanceToMove;
           const yOffset = Math.sin(angle) * distanceToMove;
           const rotate = (Math.random() - 0.5) * 60;
           
           gsap.set(item, {
             x: xOffset,
             y: yOffset,
             rotation: rotate,
             opacity: 0,
             scale: 0.5,
             filter: 'blur(10px)',
           });

           tl.to(item, {
             x: 0,
             y: 0,
             rotation: 0,
             opacity: 1,
             scale: 1,
             filter: 'blur(0px)',
             duration: 3,
             ease: 'power3.inOut'
           }, 0);
        });
      }



    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-[#faf9f6]"
    >
      <div 
        ref={gridRef} 
        className="absolute w-full h-full z-0 pointer-events-none"
      >
        {scatterGrid.map((item, i) => (
           <div 
             key={i} 
             className="absolute rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] bg-black/5 flex items-center justify-center"
             style={{ 
               top: item.top, 
               left: item.left, 
               width: item.width, 
               height: item.height 
             }}
           >
             <img 
               src={item.src} 
               alt="" 
               className="w-full h-full"
               style={{ objectFit: (item.objectFit || 'cover') as any }}
             />
           </div>
        ))}
      </div>

      <div 
        ref={videoWrapperRef} 
        className="absolute z-10 w-full h-full flex items-center justify-center origin-center shadow-2xl"
        style={{ 
          transform: 'scale(1)', 
          borderRadius: '0px', 
          overflow: 'hidden',
          backgroundColor: '#000',
          willChange: 'transform, border-radius'
        }}
      >
        <video 
          ref={videoRef}
          src="https://res.cloudinary.com/dpod2sj9t/video/upload/v1773650392/This_is_MIT_2160P_k9qve8.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      <div 
        ref={text2Ref} 
        className="absolute bottom-12 left-8 md:left-16 z-30 opacity-100 max-w-lg pointer-events-none"
      >
        <p className="font-primary text-white text-3xl md:text-5xl font-semibold leading-tight drop-shadow-xl tracking-tight">
          A study of motion unfolding inside a single frame.
        </p>
      </div>

    </div>
  );
}
