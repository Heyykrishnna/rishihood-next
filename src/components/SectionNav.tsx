import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Home',        href: '#hero' },
  { label: 'About',       href: '#stats' },
  { label: 'Programs',    href: '#programs' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Gallery',     href: '#gallery' },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#stats',
      start: 'top 80%',
      onEnter: () => setVisible(true),
      onLeaveBack: () => setVisible(false),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    if (visible) {
      gsap.fromTo(navRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.4)' }
      );
    } else {
      gsap.to(navRef.current, { y: 20, opacity: 0, duration: 0.3, ease: 'power2.in' });
    }
  }, [visible]);

  useEffect(() => {
    const sections = navItems.map(n => document.querySelector(n.href) as HTMLElement | null);
    const observers = sections.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(navItems[i].href.slice(1)); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const movePill = (section: string) => {
    const idx = navItems.findIndex(n => n.href.slice(1) === section);
    const el = itemsRef.current[idx];
    const pill = pillRef.current;
    if (!el || !pill) return;
    gsap.to(pill, {
      left: el.offsetLeft,
      width: el.offsetWidth,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  useEffect(() => { movePill(activeSection); }, [activeSection]);

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => movePill(activeSection));
    }
  }, [visible]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-200 pointer-events-auto hidden md:block"
      style={{ opacity: 0 }}
    >
      <div
        className="relative flex items-center px-1.5 py-1.5 rounded-2xl"
        style={{
          background: 'rgba(252, 247, 239, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(208, 7, 54, 0.13)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.7) inset',
        }}
      >
        <div
          ref={pillRef}
          className="absolute top-1.5 bottom-1.5 rounded-xl pointer-events-none"
          style={{
            left: 6,
            width: 60,
            background: 'rgba(208,7,54,0.09)',
            border: '1px solid rgba(208,7,54,0.2)',
          }}
        />

        {navItems.map((item, i) => {
          const isActive = item.href.slice(1) === activeSection;
          return (
            <a
              key={item.href}
              href={item.href}
              ref={(el) => { itemsRef.current[i] = el; }}
              onClick={(e) => handleClick(e, item.href)}
              className="relative z-10 px-5 py-2 rounded-xl text-[12px] font-semibold tracking-wide select-none whitespace-nowrap transition-colors duration-200"
              style={{
                color: isActive ? '#d00736' : '#777',
                letterSpacing: '0.035em',
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
