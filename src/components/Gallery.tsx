'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import gsap from 'gsap';
import BlurText from './BlurText';

const row1Images = [
  'https://framerusercontent.com/images/or5LAExZVFnZxtzcr2l40P4PE.jpg',
  'https://framerusercontent.com/images/nq6s1WwiUbcUptZbDATAdwDlNA.jpg',
  'https://framerusercontent.com/images/sDyjUcOWyBqcOAH47zI8vbpTqw.jpg',
  'https://framerusercontent.com/images/T7KtIUVjyVSOypWisAdW7ZEdG0.jpg',
  'https://framerusercontent.com/images/L7d3klkaL6QFb05IUcM45oTxRrI.jpg',
  'https://framerusercontent.com/images/OL0ocYpVVJFbGKbzxVJYHlLrmM.jpg',
  'https://framerusercontent.com/images/yhEDHENrBEChIwsFmayZ8S9Oaw.jpg',
  'https://framerusercontent.com/images/b4oE5B46CZ13bzVwVyxMfIMLQ.jpg',
];

const row2Images = [
  'https://framerusercontent.com/images/JyoFPhlbGCeEoYluglkTCLa6qw.jpg',
  'https://framerusercontent.com/images/NaQwlRUNLo1UOP0OBnCXbMMNiXU.jpg',
  'https://framerusercontent.com/images/Em54650Np5Bs5JfEnujdGgj2YVY.jpg',
  'https://framerusercontent.com/images/jhYBzyfntvRtmLrX1bpe6eSnBU.jpg',
  'https://framerusercontent.com/images/L7d3klkaL6QFb05IUcM45oTxRrI.jpg',
  'https://framerusercontent.com/images/OL0ocYpVVJFbGKbzxVJYHlLrmM.jpg',
  'https://framerusercontent.com/images/yhEDHENrBEChIwsFmayZ8S9Oaw.jpg',
  'https://framerusercontent.com/images/b4oE5B46CZ13bzVwVyxMfIMLQ.jpg',
];

const row1 = [...row1Images, ...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images, ...row2Images];

const labels = ['Campus Life', 'Fest Vibes', 'Learning', 'Community', 'Innovation', 'Culture', 'Events', 'Growth'];

function GalleryCard({ src, index }: { src: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

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

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current || !overlayRef.current || !imgRef.current) return;
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.5, ease: 'power2.out' });
    gsap.to(cardRef.current, { boxShadow: '0 16px 48px rgba(208,7,54,0.22), 0 4px 16px rgba(0,0,0,0.12)', duration: 0.3 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !overlayRef.current || !imgRef.current) return;
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: 'power2.in' });
    gsap.to(imgRef.current, { scale: 1, duration: 0.45, ease: 'power2.inOut' });
    gsap.to(cardRef.current, {
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top - rect.height / 2) / rect.height) * -10;
    const rotY = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 10;
    gsap.to(cardRef.current, {
      transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`,
      duration: 0.15,
      ease: 'none',
      overwrite: 'auto',
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className="shrink-0 w-[clamp(200px,21vw,360px)] h-[clamp(130px,13vw,230px)] rounded-[14px] overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform-3d bg-[#f5ebe0]"
    >
      {isVisible ? (
        <img
          ref={imgRef}
          src={src}
          alt={labels[index] ?? ''}
          loading="lazy"
          draggable={false}
          className="w-full h-full object-cover block select-none pointer-events-none origin-center transition-opacity duration-500"
        />
      ) : null}

      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-0 flex flex-col items-start justify-end p-4 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, rgba(208,7,54,0.55) 0%, rgba(20,10,10,0.75) 100%)' }}
      >
        <span className="absolute top-3 right-3 text-[0.65rem] font-bold tracking-[0.12em] text-white/60 font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-7 h-[2.5px] bg-[#ff3d5e] rounded-sm mb-2" />
        <span className="text-[clamp(0.75rem,1.4vw,0.95rem)] font-semibold text-white tracking-[0.04em] leading-tight font-primary">
          {labels[index] ?? 'Campus'}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-linear-to-r from-[#d00736] to-transparent opacity-60 pointer-events-none" />
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
    <section id="gallery" className="w-full bg-[#fcf7ef] py-14 md:py-20 font-primary overflow-hidden relative">

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
