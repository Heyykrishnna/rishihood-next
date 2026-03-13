'use client';

import { useEffect, useState } from 'react';
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
import Loader from '../components/Loader';
import Faq from '@/components/Faq';
import Blog from '@/components/Blog';
import Media from '@/components/Media';
import Learners from '@/components/Learners';
import Recog from '@/components/Recog';
import Leaders from '@/components/Leaders';
import Expe from '@/components/Expe';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen font-primary bg-[#fcfaf5]">
      <Loader show={isLoading} />
      <Navbar />
      {/* <SectionNav /> */}
      <Hero />
      <Stats />
      <Programs />
      <Experience />
      <Gallery />
      <Leaders />
      <Recog />
      <Learners />
      <Expe/>
      <Media/>
      <Blog/>
      <Faq/>
      <Footer />
    </div>
  );
}
