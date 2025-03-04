import React from 'react';
import { Briefcase, Layout, Timer, Shield, Music, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Shield size={40} className="text-yellow-400" />,
    title: 'Yawning Block',
    description: 'Block distractions, stay productive.',
    link: 'https://block.yawningface.org',
  },
  {
    icon: <Briefcase size={40} className="text-yellow-400" />,
    title: 'Browser Start Page',
    description: 'Personalize your "new tab" page',
    link: 'https://github.com/Yawningface/browser-start-page',
  },
  {
    icon: <Rocket size={40} className="text-yellow-400" />,
    title: 'Labs',
    description: 'Innovative productivity experiments.',
    link: 'https://labs.yawningface.org',
  },
  {
    icon: <Layout size={40} className="text-yellow-400" />,
    title: 'Notion Widgets',
    description: 'Boost productivity with custom Notion widgets.',
    link: 'https://notion.yawningface.org',
  },
  {
    icon: <Timer size={40} className="text-yellow-400" />,
    title: 'Pomodoro Timer',
    description: 'Stay focused with our Pomodoro timer.',
    link: 'https://pomodoro.yawningface.org',
  },
  {
    icon: <Music size={40} className="text-yellow-400" />,
    title: 'Lofi Hip Hop Beats',
    description: 'Relax with curated lofi beats.',
    link: 'https://lofi.yawningface.org',
  },
  
  {
    icon: <Briefcase size={40} className="text-yellow-400" />,
    title: 'Yawning Studio',
    description: 'Document your product development with ease.',
    link: 'https://yawningstudio.com',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="select-none text-4xl md:text-5xl font-extrabold mb-3 flex items-center justify-center gap-2">
          Our <span className="text-[#ebb305]">Products</span>
          <Sparkles size={28} className="text-yellow-400 animate-pulse" />
        </h1>
        <p className="select-none text-gray-400 text-lg mb-6">
          Discover tools crafted to boost productivity, reduce distractions, and foster focus.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none group relative block rounded-xl pt-4 px-4 pb-6 shadow-md transition transform duration-300 hover:scale-105 hover:rotate-1 overflow-hidden bg-gray-800"
            >
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full shadow-md bg-transparent">
                    {service.icon}
                  </div>
                  <h2 className="select-none text-xl font-bold text-gray-100 transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>
                <p className="select-none text-gray-300 text-sm opacity-90 hover:opacity-100 transition-opacity duration-300 text-center">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
