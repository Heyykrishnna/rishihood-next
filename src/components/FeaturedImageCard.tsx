import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface FeaturedImageCardProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export default function FeaturedImageCard({
  src,
  alt,
  title,
  subtitle = "View More",
}: FeaturedImageCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    const text = textRef.current;

    if (!container || !overlay || !text) return;

    // Create timeline for hover
    const tl = gsap.timeline({ paused: true });

    // Animate overlay fill (clip-path animation)
    tl.to(
      overlay,
      {
        clipPath: 'inset(0%)',
        duration: 0.6,
        ease: 'power2.out',
      },
      0
    );

    // Fade in text
    tl.to(
      text,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      0.15
    );

    // Add scale animation to image
    tl.to(
      container.querySelector('img'),
      {
        scale: 1.05,
        duration: 0.6,
        ease: 'power2.out',
      },
      0
    );

    container.addEventListener('mouseenter', () => tl.play());
    container.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      container.removeEventListener('mouseenter', () => tl.play());
      container.removeEventListener('mouseleave', () => tl.reverse());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-600"
      />

      {/* Black transparent overlay with fill animation */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center"
        style={{
          clipPath: 'inset(100%)',
        }}
      >
        {/* Text content */}
        <div
          ref={textRef}
          className="text-center px-6 opacity-0 translate-y-4"
        >
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm md:text-base font-light">
            {subtitle}
          </p>

          {/* Animated arrow */}
          <div className="mt-4 inline-block">
            <svg
              className="w-6 h-6 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
