import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">Better Tools</span>, 
          Fight <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">Digital Addiction</span>, 
          Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Focused</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          YawningFace creates <strong>user-centric tools</strong> designed to empower productivity 
          and combat the challenges of <strong>digital distraction</strong>.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="https://yawningface.org"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Get Started <ArrowRight size={16} />
        </a>

        {/* Free Tag */}
        <p className="mt-6 text-sm text-green-400 font-semibold underline underline-offset-4">
          100% Free & Open Source
        </p>

        {/* Footer Note */}
        <p className="mt-4 text-xs text-gray-500">
          YawningFace is committed to privacy-first, distraction-free productivity. 
          Read our <a href="https://yawningface.org/privacy" className="underline hover:text-yellow-400">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};

export default Hero;
