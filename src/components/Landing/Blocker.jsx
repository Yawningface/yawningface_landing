import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Blocker = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
      <div className="max-w-md text-center md:text-left">
        {/* Modified title: "Stay" in white and "Focused" in yellow */}
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          <span className="text-white">Stay</span>{' '}
          <span className="text-[#ebb305]">Focused</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Take control of your productivity by blocking distracting websites and apps.
          Stay focused, stay efficient, and achieve your goals with ease.
        </p>

        {/* Call-to-Action Button -> fixed link to block.yawningface.org */}
        <a
          href="https://block.yawningface.org"
          className="inline-flex items-center px-6 py-3 bg-[#ebb305] text-gray-900 font-bold rounded hover:bg-yellow-500 transition"
        >
          Learn More <ArrowRight className="ml-2" />
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
