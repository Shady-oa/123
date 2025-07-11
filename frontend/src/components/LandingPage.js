import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;