'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ArrowUpRight } from 'lucide-react';
import BlurText from './BlurText';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: '01',
    title: 'Soul Trek',
    tag: 'Inner Journey',
    description:
      'Soul Trek is a transformative learning experience for first-year undergraduate learners, where our learners engage in community service and learn by giving back to society. Walk into the unknown and return knowing yourself.',
    image: 'https://framerusercontent.com/images/X6ScxKebktNS6RthJFdrjTVfsQ.jpg?width=1920&height=1080',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
  {
    id: '02',
    title: '100Km Walk',
    tag: 'Endurance',
    description:
      'Every year at Rishihood University, our learners and faculty take on the 100 Km walk. Over two days, we walk 50 km forward and 50 km back to test our endurance and find our purpose.',
    image: 'https://framerusercontent.com/images/BXvjQ9KIzJjJaaxZ8PfKzj6I8.jpg?width=1920&height=1080',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
  {
    id: '03',
    title: 'Venture Studio',
    tag: 'Entrepreneurship',
    description:
      "Turn your ideas into real startups through rapid prototyping, mentorship and seed-stage support. Learners get to ideate, test, launch and grow their ventures.",
    image: 'https://framerusercontent.com/images/3U49wtgtu8cMYzvIgGU9eU5E0.jpg?scale-down-to=4096&width=5862&height=3908',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
  {
    id: '04',
    title: 'Culture Comes Alive',
    tag: 'Fests & Culture',
    description:
      'From soulful aartis to electrifying concerts, our campus fests celebrate culture, creativity, and community, bringing learners together in moments that become memories.',
    image: 'https://framerusercontent.com/images/s6ppUHfqV3g4AlYT9BDr0leBo.jpg?scale-down-to=4096&width=5052&height=3368',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
  {
    id: '05',
    title: 'Global Study Treks',
    tag: 'World Exposure',
    description:
      'Beyond borders lies your greatest classroom. Learners travel to world-class institutions and return with a worldview no textbook can teach.',
    image: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6834e68d20cdc8deca1c497c_img%202.avif',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
  {
    id: '06',
    title: 'A Decade of Purpose',
    tag: 'Milestone',
    description:
      'Our 10-year milestone was marked by inspiring conversations and presence of eminent leaders, reflecting a decade of purpose-driven education and national impact.',
    image: 'https://framerusercontent.com/images/ChlKClBeKwRvYSaGOHeK5PBYMFs.png?width=2176&height=1500',
    link: 'https://rishihood.edu.in/',
    color: '#d00736',
  },
];

type Experience = typeof experiences[0];

function Modal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      .fromTo(cardRef.current, { opacity: 0, scale: 0.88, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.15')
      .fromTo(
        contentRef.current ? Array.from(contentRef.current.children) : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(cardRef.current, { opacity: 0, scale: 0.92, y: 20, duration: 0.25, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.in' }, '-=0.1');
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(10,5,5,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{ maxHeight: '88vh' }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 cursor-pointer"
        >
          <X className="w-5 h-5 text-[#333]" />
        </button>

        <div className="w-full md:w-[48%] h-64 md:h-auto overflow-hidden relative shrink-0">
          <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(160deg, transparent 40%, ${exp.color}66 100%)` }}
          />
          <span
            className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white rounded-full px-3 py-1.5"
            style={{ background: exp.color }}
          >
            {exp.tag}
          </span>
          <span className="absolute bottom-4 right-5 font-primary text-6xl font-black leading-none opacity-[0.15] text-white select-none pointer-events-none">
            {exp.id}
          </span>
        </div>

        <div className="w-full md:w-[52%] p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-[#fcf7ef] overflow-y-auto">
          <div ref={contentRef} className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3" style={{ color: exp.color }}>
              {exp.tag}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight text-[#111]">
              {exp.title}
            </h2>
            <div className="w-10 h-[3px] mb-6 rounded-full" style={{ background: exp.color, opacity: 0.5 }} />
            <p className="text-[#555] text-[15px] leading-relaxed font-light mb-10">
              {exp.description}
            </p>
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 self-start font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: exp.color, boxShadow: `0 6px 24px ${exp.color}45` }}
            >
              Discover More
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ exp, onClick }: { exp: Experience; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex-shrink-0 w-[80vw] md:w-[42vw] lg:w-[34vw] xl:w-[28vw] h-full rounded-3xl overflow-hidden cursor-pointer text-left focus:outline-none"
      style={{ aspectRatio: '3/4' }}
    >
      <img
        src={exp.image}
        alt={exp.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.78) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${exp.color}30 0%, transparent 60%)` }}
      />

      <span
        className="absolute top-5 left-5 text-[9px] font-black uppercase tracking-[0.22em] text-white rounded-full px-3 py-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
        style={{ background: exp.color }}
      >
        {exp.tag}
      </span>

      <span className="absolute top-5 right-5 font-primary text-[4rem] font-black leading-none opacity-[0.11] text-white select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.18]">
        {exp.id}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex flex-col">
        <div
          className="w-8 h-[2.5px] rounded-full mb-4 transition-all duration-500 group-hover:w-14"
          style={{ background: exp.color }}
        />
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight tracking-tight mb-2 transition-transform duration-500 group-hover:-translate-y-0.5">
          {exp.title}
        </h3>
        <p className="text-white/70 text-[13px] leading-relaxed font-light line-clamp-2 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {exp.description}
        </p>
        <div
          className="mt-4 flex items-center gap-1.5 text-[10px] font-black tracking-[0.2em] uppercase opacity-0 translate-y-3 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ color: exp.color }}
        >
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-3xl"
        style={{ background: exp.color }}
      />
    </button>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-pill',
        { opacity: 0, scale: 0.8, y: 10 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.6)',
          scrollTrigger: { trigger: '.exp-header', start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.exp-ticker',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.exp-ticker', start: 'top 90%' } }
      );

      if (tickerRef.current) {
        const inner = tickerRef.current.querySelector('.ticker-inner');
        if (inner) gsap.to(inner, { xPercent: -50, ease: 'none', duration: 22, repeat: -1 });
      }

      gsap.to('.blob-1', { y: 30, x: -20, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.blob-2', { y: -25, x: 15, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      if (!trackRef.current || !pinWrapRef.current) return;

      const track = trackRef.current;
      const pinWrap = pinWrapRef.current;

      const getScrollAmount = () => {
        const trackW = track.scrollWidth;
        const viewW = pinWrap.offsetWidth;
        return -(trackW - viewW);
      };

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${Math.abs(getScrollAmount()) + window.innerHeight * 0.5}`,
        pin: pinWrapRef.current,
        anticipatePin: 1,
        scrub: 1.2,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`;
          }
          gsap.to(track, {
            x: getScrollAmount() * self.progress,
            ease: 'none',
            overwrite: 'auto',
          });
        },
        invalidateOnRefresh: true,
      });

      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedExp(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const tickerItems = [...experiences, ...experiences];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full bg-[#fcf7ef] font-primary relative overflow-hidden"
    >
      <div
        className="blob-1 absolute pointer-events-none"
        style={{ width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(208,7,54,0.07) 0%, transparent 70%)', top: -180, right: -160 }}
      />
      <div
        className="blob-2 absolute pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(179,92,0,0.06) 0%, transparent 70%)', bottom: -120, left: -120 }}
      />

      <div ref={pinWrapRef} className="w-full min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full relative z-10">
          <div className="exp-header text-center mx-auto mb-10 max-w-3xl">
            <BlurText
              text="Experience Rishihood"
              delay={50}
              animateBy="letters"
              direction="bottom"
              className="text-xl md:text-[32px] font-semibold justify-center text-[#d00736] mb-4"
            />
            <p className="text-[#666] text-sm font-medium">
              A campus that feels like home. A journey that feels like an adventure.
            </p>
          </div>

          <div ref={tickerRef} className="exp-ticker w-full overflow-hidden mb-10 py-3 border-y border-[#e6dcc8]">
            <div className="ticker-inner flex whitespace-nowrap">
              {tickerItems.map((exp, i) => (
                <span key={i} className="inline-flex items-center gap-3 mr-10 text-[11px] font-bold uppercase tracking-[0.22em] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full inline-block shrink-0" style={{ background: exp.color }} />
                  <span style={{ color: exp.color }}>{exp.title}</span>
                  <span className="text-[#ddd] mx-1">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden relative">
          <div
            ref={trackRef}
            className="flex gap-5 px-4 md:px-8 lg:px-12 will-change-transform"
            style={{ height: 'clamp(420px, 62vh, 580px)' }}
          >
            {experiences.map((exp) => (
              <GalleryCard
                key={exp.id}
                exp={exp}
                onClick={() => setSelectedExp(exp)}
              />
            ))}
            <div className="flex-shrink-0 w-4 md:w-8" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full mt-8">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]">Scroll to explore</span>
            <div className="flex-1 h-[2px] bg-[#e8dfd0] rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full rounded-full transition-none"
                style={{ background: '#d00736', width: '0%' }}
              />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]">{experiences.length} Experiences</span>
          </div>
        </div>
      </div>

      {selectedExp && (
        <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </section>
  );
}
