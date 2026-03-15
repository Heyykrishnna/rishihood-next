import { useRef } from 'react';

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


  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Black transparent overlay with fill animation */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-700 ease-out [clip-path:inset(100%)] group-hover:[clip-path:inset(0%)]"
      >
        {/* Text content */}
        <div
          className="text-center px-6 opacity-0 translate-y-4 transition-all duration-500 ease-out delay-150 group-hover:opacity-100 group-hover:translate-y-0"
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
