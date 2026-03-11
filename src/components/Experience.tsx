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
    link: 'https://shadcnstudio.com/',
    color: '#d00736',
  },
  {
    id: '02',
    title: '100Km Walk',
    tag: 'Endurance',
    description:
      'Every year at Rishihood University, our learners and faculty take on the 100 Km walk. Over two days, we walk 50 km forward and 50 km back to test our endurance and find our purpose.',
    image: 'https://framerusercontent.com/images/BXvjQ9KIzJjJaaxZ8PfKzj6I8.jpg?width=1920&height=1080',
    link: 'https://shadcnstudio.com/',
    color: '#d00736',
  },
  {
    id: '03',
    title: 'Venture Studio',
    tag: 'Entrepreneurship',
    description:
      "Turn your ideas into real startups through rapid prototyping, mentorship and seed-stage support. Learners get to ideate, test, launch and grow their ventures.",
    image: 'https://framerusercontent.com/images/3U49wtgtu8cMYzvIgGU9eU5E0.jpg?scale-down-to=4096&width=5862&height=3908',
    link: 'https://shadcnstudio.com/',
    color: '#d00736',
  },
  {
    id: '04',
    title: 'Where Culture Comes Alive',
    tag: 'Fests & Culture',
    description:
      'From soulful aartis to electrifying concerts, our campus fests celebrate culture, creativity, and community, bringing learners together in moments that become memories.',
    image: 'https://framerusercontent.com/images/s6ppUHfqV3g4AlYT9BDr0leBo.jpg?scale-down-to=4096&width=5052&height=3368',
    link: 'https://shadcnstudio.com/',
    color: '#d00736',
  },
  {
    id: '05',
    title: 'Global Study Treks',
    tag: 'World Exposure',
    description:
      'Beyond borders lies your greatest classroom. Learners travel to world-class institutions and return with a worldview no textbook can teach.',
    image: 'https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6834e68d20cdc8deca1c497c_img%202.avif',
    link: 'https://shadcnstudio.com/',
    color: '#d00736',
  },
  {
    id: '06',
    title: 'A Decade of Purpose',
    tag: 'Decade of Purpose',
    description:
      'Our 10-year milestone was marked by inspiring conversations and presence of eminent leaders, reflecting a decade of purpose-driven education and national impact.',
    image: 'https://framerusercontent.com/images/ChlKClBeKwRvYSaGOHeK5PBYMFs.png?width=2176&height=1500',
    link: 'https://shadcnstudio.com/',
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
      .fromTo(cardRef.current, { opacity: 0, scale: 0.86, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }, '-=0.15')
      .fromTo(
        contentRef.current ? contentRef.current.children : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(cardRef.current, { opacity: 0, scale: 0.9, y: 20, duration: 0.25, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.in' }, '-=0.1');
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-500 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(10,5,5,0.65)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-4xl bg-white rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
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


function ExpCard({
  exp,
  cardRef,
  onClick,
}: {
  exp: Experience;
  cardRef: (el: HTMLButtonElement | null) => void;
  onClick: () => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { y: '-8%' },
      {
        y: '8%',
        ease: 'none',
        scrollTrigger: {
          trigger: imgRef.current.closest('.exp-card-wrap') as Element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      className="exp-card-wrap group relative text-left bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <img
          ref={imgRef}
          src={exp.image}
          alt={exp.title}
          className="w-full h-[116%] object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ transformOrigin: 'center center' }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${exp.color}35 0%, transparent 65%)` }}
        />
        <span
          className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white rounded-full px-2.5 py-1 shadow-sm"
          style={{ background: exp.color }}
        >
          {exp.tag}
        </span>
        <span className="absolute bottom-2 right-3 font-primary text-5xl font-black leading-none opacity-[0.13] text-white select-none pointer-events-none">
          {exp.id}
        </span>
      </div>

      <div className="p-6 pb-7">
        <h3
          className="text-[17px] font-semibold mb-2 tracking-tight leading-snug"
          style={{ color: exp.color }}
        >
          {exp.title}
        </h3>
        <p className="text-[#777] text-[13px] leading-relaxed font-light line-clamp-3">
          {exp.description}
        </p>
        <div
          className="mt-5 flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase"
          style={{ color: exp.color }}
        >
          <span>Discover</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-pill',
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.exp-header', start: 'top 88%' } }
      );
      gsap.fromTo(
        '.exp-ticker',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.exp-ticker', start: 'top 90%' } }
      );
      const cards = cardsRef.current.filter(Boolean) as HTMLButtonElement[];
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -50 : 50;
        gsap.fromTo(
          card,
          { opacity: 0, x: fromX, y: 40, scale: 0.93 },
          { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } }
        );
      });
      if (tickerRef.current) {
        const inner = tickerRef.current.querySelector('.ticker-inner');
        if (inner) gsap.to(inner, { xPercent: -50, ease: 'none', duration: 22, repeat: -1 });
      }
      gsap.to('.blob-1', { y: 30, x: -20, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to('.blob-2', { y: -25, x: 15, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    }, containerRef);
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
      ref={containerRef}
      className="w-full bg-[#fcf7ef] py-24 md:py-32 font-primary relative overflow-hidden"
    >
      <div
        className="blob-1 absolute pointer-events-none"
        style={{ width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(208,7,54,0.07) 0%, transparent 70%)', top: -180, right: -160 }}
      />
      <div
        className="blob-2 absolute pointer-events-none"
        style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(179,92,0,0.06) 0%, transparent 70%)', bottom: -120, left: -120 }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mx-auto mb-16 max-w-3xl">
          <BlurText
            text="Experience Rishihood"
            delay={50}
            animateBy="letters"
            direction="bottom"
            className="text-xl md:text-[32px] font-semibold justify-center text-[#d00736] mb-4"
          />
          <p className="text-[#555] text-sm md:text-sm font-medium">
            A campus that feels like home. A journey that feels like an adventure.
          </p>
        </div>

        <div ref={tickerRef} className="exp-ticker w-full overflow-hidden mb-14 py-4 border-y border-[#e6dcc8]">
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

        <div
          ref={cardsWrapperRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {experiences.slice(0, 3).map((exp, index) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              cardRef={(el) => { cardsRef.current[index] = el; }}
              onClick={() => setSelectedExp(exp)}
            />
          ))}
        </div>

        <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {experiences.slice(3, 6).map((exp, index) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              cardRef={(el) => { cardsRef.current[3 + index] = el; }}
              onClick={() => setSelectedExp(exp)}
            />
          ))}
        </div>

        <div className="mt-5 md:mt-6 grid grid-cols-1 gap-5 md:gap-6 max-w-sm mx-auto">
          {experiences.slice(6).map((exp, index) => (
            <ExpCard
              key={exp.id}
              exp={exp}
              cardRef={(el) => { cardsRef.current[6 + index] = el; }}
              onClick={() => setSelectedExp(exp)}
            />
          ))}
        </div>
      </div>

      {selectedExp && (
        <Modal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </section>
  );
}
