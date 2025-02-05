import React from 'react';
import { Briefcase, Layout, Timer, Shield, Music, Rocket, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Briefcase size={40} className="text-purple-700" />, 
    title: 'Yawning Studio',
    description: 'Document your product development with ease.',
    link: 'https://yawningstudio.com',
    gradient: 'linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(168, 85, 247, 0.8), rgba(236, 72, 153, 0.8))',
  },
  {
    icon: <Layout size={40} className="text-blue-700" />, 
    title: 'Notion Widgets',
    description: 'Boost productivity with custom Notion widgets.',
    link: 'https://notion.yawningface.org',
    gradient: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(45, 212, 191, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(45, 212, 191, 0.8))',
  },
  {
    icon: <Timer size={40} className="text-orange-700" />, 
    title: 'Pomodoro Timer',
    description: 'Stay focused with our Pomodoro timer.',
    link: 'https://pomodoro.yawningface.org',
    gradient: 'linear-gradient(to right, rgba(249, 115, 22, 0.1), rgba(251, 191, 36, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(249, 115, 22, 0.8), rgba(251, 191, 36, 0.8))',
  },
  {
    icon: <Shield size={40} className="text-red-700" />, 
    title: 'Yawning Block [Beta]',
    description: 'Block distractions, stay productive.',
    link: 'https://yawningblock.com',
    gradient: 'linear-gradient(to right, rgba(239, 68, 68, 0.1), rgba(236, 72, 153, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(239, 68, 68, 0.8), rgba(236, 72, 153, 0.8))',
  },
  {
    icon: <Music size={40} className="text-indigo-700" />, 
    title: 'Lofi Hip Hop Beats',
    description: 'Relax with curated lofi beats.',
    link: 'https://lofi.yawningface.org',
    gradient: 'linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8))',
  },
  {
    icon: <Rocket size={40} className="text-green-700" />, 
    title: 'YawningFace Labs',
    description: 'Innovative productivity experiments.',
    link: 'https://yawningface.org/labs',
    gradient: 'linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(163, 230, 53, 0.1))',
    hoverGradient: 'linear-gradient(to right, rgba(34, 197, 94, 0.8), rgba(163, 230, 53, 0.8))',
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-2">
          Our <span className="text-[#ebb305]">Services</span> <Sparkles size={28} className="text-yellow-400 animate-pulse" />
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Discover tools crafted to boost productivity, reduce distractions, and foster focus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-6 shadow-md transition duration-300 transform hover:scale-105 hover:rotate-1"
              style={{ backgroundImage: service.gradient }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundImage = service.hoverGradient}
              onMouseLeave={(e) => e.currentTarget.style.backgroundImage = service.gradient}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full shadow-md bg-transparent">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-white transition-colors duration-300">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-300 text-sm opacity-90 hover:opacity-100 transition-opacity duration-300 text-center">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
