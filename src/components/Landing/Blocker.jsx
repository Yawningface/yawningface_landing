import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Blocker = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
      <div className="max-w-md text-center md:text-left">
        {/* Smaller title, no "Blocker 🚫" */}
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-[#ebb305]">
          Stay Focused
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Take control of your productivity by blocking distracting websites and apps. Stay focused, stay efficient, and achieve your goals with ease.
        </p>

        {/* Call-to-Action Button -> block.yawningface.org */}
        <a
          href="https://block.yawningface.org"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:bg-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Get Started <ArrowRight size={16} />
        </a>

        {/* "Free & Open Source" line without dotted underline or green color */}
        <p className="mt-6 text-sm font-semibold text-gray-400">
          100% Free & Open Source
          <a
            href="https://github.com/EHxuban11/block"
            className="inline-flex items-center gap-1 text-yellow-400 ml-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star size={14} /> Star Repo
          </a>
        </p>
      </div>

      {/* Image on the right */}
      <div className="max-w-xl">
        <img
          src="/yblock.jpg"
          alt="Blocker"
          className="rounded-md border border-gray-700 shadow-lg transition-transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Blocker;
