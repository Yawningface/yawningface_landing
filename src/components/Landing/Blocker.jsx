import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Blocker = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
      {/* Inline style block for gradient animation */}
      <style>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: moveGradient 3s ease infinite;
        }
      `}</style>

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

        {/* Buttons Container (Reordered) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Get Chrome Extension Button with Animated Moving Gradient and New Badge */}
          <a
            href="https://chromewebstore.google.com/detail/block/kfnhibndbkdjcplihjhbhdhclpbiocen"
            className="group relative inline-block rounded transform transition hover:scale-105"
          >
            <span className="gradient-animate p-[2px] rounded block bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              <span className="relative inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded">
                Get Chrome Extension
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  New
                </span>
              </span>
            </span>
          </a>

          {/* Existing Learn More Button with Hover Scale */}
          <a
            href="https://block.yawningface.org"
            className="inline-flex items-center px-6 py-3 bg-[#ebb305] text-gray-900 font-bold rounded transition transform hover:scale-105"
          >
            Learn More <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* "Free & Open Source" line */}
        <p className="mt-6 text-sm font-semibold text-gray-400">
          100% Free & Open Source
          <a
            href="https://github.com/Yawningface/block"
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
