'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import SectionNav from '../components/SectionNav';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-primary bg-[#fcfaf5]">
      <Navbar />
      <SectionNav />
      <Hero />
      <Stats />
      <Programs />
      <Experience />
      <Gallery />
      <Footer />
    </div>
  );
}
