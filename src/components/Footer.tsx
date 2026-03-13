'use client';

import { useEffect, useRef } from 'react';
import { Instagram, Youtube, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 150, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom bottom",
              scrub: 1,
            }
          }
        );
      }

      if (linksRef.current) {
        const elements = linksRef.current.querySelectorAll('.footer-col');
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="w-full bg-[#0a0a0a] text-white font-primary relative overflow-hidden pt-24 min-h-screen flex flex-col justify-between selection:bg-[#d00736]/30">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#d00736]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 xl:px-20 relative z-10 flex-1 flex flex-col">
        
        <div ref={linksRef} className="flex flex-col xl:flex-row justify-between w-full gap-16 xl:gap-8 mb-20">
          
          <div className="w-full xl:w-4/12 flex flex-col justify-between footer-col">
            <div>
              <img
                src="https://framerusercontent.com/images/NKvCUEL0ORnQgJto11PdvOykNk.png?scale-down-to=512&width=704&height=280"
                alt="Rishihood University Logo"
                className="h-12 md:h-16 object-contain brightness-0 invert mb-6"
              />
              <p className="text-[#888] text-sm md:text-base font-medium tracking-[0.2em] mb-12 uppercase">
                व्यक्ति | विचार | व्यवस्था
              </p>
            </div>

            <div className="flex flex-col gap-10 mt-auto">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555]">Campus</span>
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-[#d00736] shrink-0 mt-0.5" />
                  <p className="text-[#ddd] text-sm md:text-[15px] font-light leading-relaxed max-w-[280px] group-hover:text-white transition-colors duration-300">
                    NH-44 (GT Road), Delhi NCR,<br />
                    Sonipat, Haryana 131021
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555]">Contact Us</span>
                <div className="flex flex-col gap-1">
                  <a href="tel:18001206631" className="text-white text-xl font-medium hover:text-[#d00736] transition-colors duration-300">1800-120-6631</a>
                  <a href="mailto:namaste@rishihood.edu.in" className="text-[#888] hover:text-white text-sm font-light transition-colors duration-300">namaste@rishihood.edu.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-8/12 flex flex-col justify-between">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4 mb-20 footer-col">
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555] mb-2">Explore</h4>
                {['Our Story', 'Leadership', 'Academics', 'Campus Life'].map((item) => (
                  <Link key={item} href="#" className="group flex items-center gap-2 text-[#aaa] hover:text-white text-[15px] font-light transition-colors duration-300 w-fit">
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d00736] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555] mb-2">Admissions</h4>
                {['Undergraduate', 'Postgraduate', 'Ph.D', 'Fees & Aid'].map((item) => (
                  <Link key={item} href="#" className="group flex items-center gap-2 text-[#aaa] hover:text-white text-[15px] font-light transition-colors duration-300 w-fit">
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d00736] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555] mb-2">Resources</h4>
                {['Blogs', 'Events', 'Media', 'Careers'].map((item) => (
                  <Link key={item} href="#" className="group flex items-center gap-2 text-[#aaa] hover:text-white text-[15px] font-light transition-colors duration-300 w-fit">
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d00736] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555] mb-2">Legal</h4>
                {['Disclosures', 'Privacy Policy', 'Terms of Use', 'UGC Status'].map((item) => (
                  <Link key={item} href="#" className="group flex items-center gap-2 text-[#aaa] hover:text-white text-[15px] font-light transition-colors duration-300 w-fit">
                    <span className="relative overflow-hidden">
                      {item}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-[#d00736] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-auto border-t border-white/10 pt-10 footer-col">
              <div className="flex flex-col gap-5">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#555]">Connect With Us</span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Instagram, href: '#' },
                    { icon: FaWhatsapp, href: '#' },
                    { icon: FaXTwitter, href: '#' },
                    { icon: FaLinkedinIn, href: '#' },
                    { icon: Youtube, href: '#' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888] hover:bg-white hover:text-[#0a0a0a] hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 md:items-end max-w-sm">
                <span className="text-[#888] text-xs font-light tracking-wide text-left md:text-right leading-relaxed mb-1">
                  Established by Rishihood Foundation, a non-profit company under Section 8 of the Companies Act, 2013.
                </span>
                <a href='https://apply.rishihood.edu.in/' target='_blank'>
                  <button className="group relative overflow-hidden cursor-pointer bg-[#d00736] text-white py-4 pl-8 pr-16 rounded-full font-medium text-[15px] tracking-wide shadow-xl active:scale-95 transition-all duration-300 self-start md:self-auto">
                    <span className="relative z-10">Apply For 2026</span>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center z-10 transition-transform duration-300 group-hover:bg-white group-hover:text-[#d00736]">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end mt-auto px-4 md:px-8 xl:px-12 pb-4 overflow-hidden relative">
        <div ref={textRef} className="w-full flex justify-center relative items-center min-h-[150px] md:min-h-[300px]">
          <TextHoverEffect text="RISHIHOOD" />
          <span className="absolute top-[10%] md:top-[15%] right-[2%] md:right-[5%] text-[3vw] sm:text-[2.5vw] font-normal tracking-normal text-white/50 border-2 border-white/50 rounded-full w-[4vw] h-[4vw] sm:w-[3.5vw] sm:h-[3.5vw] flex items-center justify-center pt-px pointer-events-none">
            C
          </span>
        </div>
      </div>
    </footer>
  );
}
