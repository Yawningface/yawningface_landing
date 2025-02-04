import React from 'react';
import { Link } from 'react-router-dom';
import OpenSourceGrid from '../components/Landing/OpenSource';
import Footer from '../components/Landing/Footer';
import Hero from '../components/Landing/Hero';
import Services from '../components/Landing/Services'; 
function Landing() {
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-900 text-white">
      <Hero />

      <Services />

      <OpenSourceGrid />

      <Footer />
    </div>
  );
}

export default Landing;
