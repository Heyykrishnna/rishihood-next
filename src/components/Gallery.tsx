'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// Duplicate for seamless loop
const row1 = [...row1Images, ...row1Images];
const row2 = [...row2Images, ...row2Images];

interface MarqueeRowProps {
  images: string[];
  direction?: 'left' | 'right';
  speed?: number; // seconds for one full loop
  pauseOnHover?: boolean;
}

function MarqueeRow({ images, direction = 'left', speed = 30, pauseOnHover = true }: MarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentOffset = useRef(0);
  const animPaused = useRef(false);
  const [dragActive, setDragActive] = useState(false);

  // Pause animation on hover/drag
  const pause = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.animationPlayState = 'paused';
    animPaused.current = true;
  }, []);

  const resume = useCallback(() => {
    if (!trackRef.current || isDragging.current) return;
    trackRef.current.style.animationPlayState = 'running';
    animPaused.current = false;
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    setDragActive(true);
    startX.current = e.clientX;
    pause();
    e.preventDefault();
  }, [pause]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - startX.current;
    const sign = direction === 'right' ? -1 : 1;
    // Temporarily offset the animation origin via CSS custom property
    trackRef.current.style.marginLeft = `${delta * sign * 0.4}px`;
  }, [direction]);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    setDragActive(false);
    // Snap back margin and resume
    const el = trackRef.current;
    el.style.transition = 'margin-left 0.5s ease';
    el.style.marginLeft = '0px';
    setTimeout(() => {
      if (el) el.style.transition = '';
      resume();
    }, 500);
  }, [resume]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Touch support
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    pause();
  }, [pause]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.touches[0].clientX - startX.current;
    const sign = direction === 'right' ? -1 : 1;
    trackRef.current.style.marginLeft = `${delta * sign * 0.4}px`;
  }, [direction]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) {
      const el = trackRef.current;
      el.style.transition = 'margin-left 0.5s ease';
      el.style.marginLeft = '0px';
      setTimeout(() => {
        if (el) el.style.transition = '';
        resume();
      }, 500);
    }
  }, [resume]);

  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div
      className="gallery-row w-full overflow-hidden"
      style={{ cursor: dragActive ? 'grabbing' : 'grab', userSelect: 'none' }}
      onMouseEnter={pauseOnHover ? pause : undefined}
      onMouseLeave={pauseOnHover ? resume : undefined}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '12px',
          width: 'max-content',
          animation: `${animName} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {images.map((src, i) => (
          <GalleryCard key={i} src={src} index={i} />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({ src, index }: { src: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        flexShrink: 0,
        width: 'clamp(220px, 22vw, 380px)',
        height: 'clamp(140px, 14vw, 240px)',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.15s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Shimmer overlay on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
          zIndex: 2,
          opacity: 0,
          transition: 'opacity 0.2s',
          borderRadius: 'inherit',
          pointerEvents: 'none',
        }}
        className="card-shimmer"
      />
      {/* Red accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #d00736, transparent)',
          zIndex: 3,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.35s ease',
        }}
        className="card-accent"
      />
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.4s ease',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject keyframes into document if not already present
    const styleId = 'gallery-marquee-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .gallery-card-wrap:hover .card-shimmer { opacity: 1 !important; }
        .gallery-card-wrap:hover .card-accent  { transform: scaleX(1) !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header-block',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-header-block',
            start: 'top 85%',
          },
        }
      );
      gsap.fromTo(
        '.gallery-row',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="w-full bg-[#fcf7ef] py-10 md:py-14 font-primary overflow-hidden relative"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(208,7,54,0.07) 0%, transparent 68%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Subtle watermark */}
      <img
        src="https://framerusercontent.com/images/O5hT3Jtin2BIPCMxXf47RnB50.png?width=2862&height=3525"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '55%',
          maxWidth: 700,
          minWidth: 280,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Row 1 — scrolls left */}
      <MarqueeRow images={row1} direction="left" speed={35} />

      {/* Center text block */}
      <div className="gallery-header-block relative z-10 text-center mx-auto max-w-5xl px-6 py-8 md:py-10">
        {/* Decorative line */}
        <div
          style={{
            width: 48,
            height: 3,
            background: 'linear-gradient(90deg, #d00736, #ff6b6b)',
            margin: '0 auto 20px',
            borderRadius: 2,
          }}
        />
        <h2
          style={{
            fontFamily: '"Alike Angular", serif',
            fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '0.75rem',
          }}
        >
          Experience the{' '}
          <span style={{ color: '#d00736', fontStyle: 'italic' }}>
            Rishihood Campus
          </span>
        </h2>
        <p
          style={{
            color: '#666',
            fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
            fontWeight: 400,
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
          }}
        >
          Our campus fests celebrate culture, creativity, and community, bringing
          learners together in moments that become memories.
        </p>
        {/* Decorative line bottom */}
        <div
          style={{
            width: 48,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #d00736)',
            margin: '20px auto 0',
            borderRadius: 2,
          }}
        />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow images={row2} direction="right" speed={40} />
    </section>
  );
}
