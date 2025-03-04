import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Updated Headline with larger tagline */}
        <h1 className="font-extrabold leading-tight mb-6">
          <span className="text-4xl md:text-5xl text-[#ebb305]">YawningFace 🥱</span>
          <span className="text-4xl md:text-5xl">
            {' '} - stay{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              focused
            </span>
            , be more{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              productive
            </span>
          </span>
        </h1>

        {/* Updated Subheadline with Bolded Key Phrases */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          YawningFace creates tools designed to <strong>reduce distractions</strong> and <strong>increase productivity</strong>
        </p>
      </div>
    </section>
  );
};

export default Hero;
