'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skill from '@/components/Skill';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out-sine',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
