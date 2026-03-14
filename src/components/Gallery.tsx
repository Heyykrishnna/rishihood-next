'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import BlurText from './BlurText';

const row1Images = [
  './images/Gallery/g1.avif',
  './images/Gallery/g2.avif',
  './images/Gallery/g3.jpg',
  './images/Gallery/g4.jpg',
  './images/Gallery/g5.avif',
  './images/Gallery/g6.avif',
  './images/Gallery/g7.avif',
  './images/Gallery/g8.avif',
];

const row2Images = [
  './images/Gallery/g9.jpg',
  './images/Gallery/g10.avif',
  './images/Gallery/g11.avif',
  './images/Gallery/g12.jpg',
  './images/Gallery/g5.avif',
  './images/Gallery/g6.avif',
  './images/Gallery/g7.avif',
  './images/Gallery/g8.avif',
];

const row1 = [...row1Images, ...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images, ...row2Images];

const labels = ['Campus Life', 'Fest Vibes', 'Learning', 'Community', 'Innovation', 'Culture', 'Events', 'Growth'];

function GalleryCard({ src, index }: { src: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '600px' }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="shrink-0 w-[clamp(200px,21vw,360px)] h-[clamp(130px,13vw,230px)] rounded-[14px] overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-[#eae0d5] group cursor-pointer border border-white/40"
    >
      {isVisible && (
        <>
          <div className={`absolute inset-0 bg-[#f5ebe0] animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} />
          
          <img
            src={src}
            alt={labels[index] ?? ''}
            loading="lazy"
            draggable={false}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover block select-none pointer-events-none transition-all duration-1000 ease-[0.19,1,0.22,1]
              ${isLoaded ? 'opacity-100 scale-100 grayscale-0' : 'opacity-0 scale-110 grayscale'}
              group-hover:scale-105 group-hover:brightness-[1.05] group-hover:shadow-inner`}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute bottom-3 left-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 pointer-events-none">
            <div className="bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-[#d00736] font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-semibold text-[#111] tracking-wide font-primary">
                {labels[index] ?? 'Campus'}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

interface MarqueeRowProps {
  images: string[];
  direction?: 'left' | 'right';
  duration?: number;
}

function MarqueeRow({ images, direction = 'left', duration = 40 }: MarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'paused';
      const matrix = new WebKitCSSMatrix(getComputedStyle(trackRef.current).transform);
      dragOffset.current = matrix.m41;
    }
    e.preventDefault();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !trackRef.current) return;
      const delta = (e.clientX - dragStartX.current) * (direction === 'right' ? -1 : 1);
      trackRef.current.style.transform = `translate3d(${dragOffset.current + delta}px, 0, 0)`;
    };
    const onUp = () => {
      if (!isDragging.current || !trackRef.current) return;
      isDragging.current = false;
      trackRef.current.style.transform = '';
      trackRef.current.style.animationPlayState = 'running';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [direction]);

  const animName = direction === 'left' ? 'g-marquee-left' : 'g-marquee-right';

  return (
    <div
      className="w-full overflow-hidden cursor-grab"
      onMouseEnter={() => { if (!isDragging.current && trackRef.current) trackRef.current.style.animationPlayState = 'paused'; }}
      onMouseLeave={() => { if (!isDragging.current && trackRef.current) trackRef.current.style.animationPlayState = 'running'; }}
      onMouseDown={onMouseDown}
    >
      <div
        ref={trackRef}
        className="flex gap-3.5 w-max py-2 will-change-transform"
        style={{ animation: `${animName} ${duration}s linear infinite`, transform: 'translate3d(0, 0, 0)' }}
      >
        {images.map((src, i) => (
          <GalleryCard key={i} src={src} index={i % row1Images.length} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  useEffect(() => {
    const styleId = 'g-marquee-styles';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes g-marquee-left {
        0%   { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-33.333%, 0, 0); }
      }
      @keyframes g-marquee-right {
        0%   { transform: translate3d(-33.333%, 0, 0); }
        100% { transform: translate3d(0, 0, 0); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="gallery" className="w-full bg-white py-14 md:py-20 font-primary overflow-hidden relative">

      <div aria-hidden="true" className="absolute w-[800px] h-[800px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(208,7,54,0.08) 0%, transparent 70%)' }} />

      <div aria-hidden="true" className="absolute inset-0 opacity-50 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(208,7,54,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-1">
        <MarqueeRow images={row1} direction="left" duration={40} />
      </div>

      <div className="relative z-2 text-center max-w-4xl mx-auto px-6 py-10">
        <span className="inline-block text-[0.65rem] font-bold tracking-[0.18em] text-[#d00736] uppercase mb-4 font-primary">
          Campus Gallery
        </span>

        <BlurText
          text="Where Stories Come Alive"
          delay={50}
          animateBy="letters"
          direction="bottom"
          className="text-xl md:text-5xl font-semibold justify-center text-[#d00736] mb-4"
        />

        <div className="flex items-center gap-2.5 justify-center mb-4">
          <div className="flex-1 max-w-[60px] h-px bg-[#d00736]/25" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d00736]" />
          <div className="flex-1 max-w-[60px] h-px bg-[#d00736]/25" />
        </div>

        <p className="text-[#666] text-[clamp(0.8rem,1.4vw,0.9rem)] font-normal leading-[1.75] tracking-[0.01em] max-w-[460px] mx-auto">
          Our campus fests celebrate culture, creativity, and community, bringing learners together in moments that become memories.
        </p>
      </div>

      <div className="relative z-1">
        <MarqueeRow images={row2} direction="right" duration={48} />
      </div>

    </section>
  );
}
