import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* New Replaced Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          <span className="text-[#ebb305]">YawningFace 🥱</span> - Stay{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Focused</span>, 
          Use Better{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Tools</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          YawningFace creates <strong>user-centric tools</strong> designed to empower productivity 
          and combat the challenges of <strong>digital distraction</strong>.
        </p>

        

     
      </div>
    </section>
  );
};

export default Hero;
