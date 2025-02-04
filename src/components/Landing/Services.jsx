import React from 'react';
import AdComponent from '../AdComponent';

const services = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Yawning Studio',
    description: 'Upload content and document your product development seamlessly.',
    link: '/studio',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Notion Widgets',
    description: 'Enhance your Notion workspace with customizable, productivity-boosting widgets.',
    link: '/notion-widgets',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pomodoro Timer',
    description: 'A simple and effective Pomodoro timer to help you stay focused and productive.',
    link: '/pomodoro',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Yawning Block',
    description: 'Block distracting websites and apps to maintain deep focus during work sessions.',
    link: '/block',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Lofi Hip Hop Music',
    description: 'Stream relaxing lofi beats to create the perfect ambiance for studying or working.',
    link: '/lofi-music',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Yawning Studio Pro',
    description: 'Advanced features for content creators.',
    link: '/studio-pro',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Focus Booster',
    description: 'Maximize productivity with Yawning tools.',
    link: '/focus-booster',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-[#ebb305]">Services</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          YawningFace offers a range of tools designed to boost productivity, reduce digital distractions, and create a healthier tech environment.
        </p>

        {/* Services Displayed as Ads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <AdComponent
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
