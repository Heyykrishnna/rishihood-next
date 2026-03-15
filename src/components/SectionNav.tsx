import { useEffect, useRef, useState } from 'react';
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
  const pillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    
    const target = document.querySelector('#stats');
    if (target) observer.observe(target);
    
    return () => observer.disconnect();
  }, []);

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
    pill.style.left = `${el.offsetLeft}px`;
    pill.style.width = `${el.offsetWidth}px`;
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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-200 pointer-events-auto hidden md:block transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
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
          className="absolute top-1.5 bottom-1.5 rounded-xl pointer-events-none transition-all duration-400 ease-out"
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
