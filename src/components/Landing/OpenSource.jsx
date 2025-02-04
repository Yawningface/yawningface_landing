import React from 'react';
import { Star } from 'lucide-react';

const OpenSourceGrid = () => {
  const projects = [
    {
      name: 'Notion Widgets',
      stars: '12,345',
      description: 'Customizable widgets to enhance your Notion dashboard experience.',
      color: '#FF8C42',
      link: 'https://example.com'
    },
    {
      name: 'YawningFace Blocker',
      stars: '8,910',
      description: 'A productivity tool to block distracting websites and apps effectively.',
      color: '#8B5CF6',
      link: 'https://example.com'
    },
    {
      name: 'YawningFace Study',
      stars: '6,789',
      description: 'Focus-oriented study platform with features tailored for students.',
      color: '#EF4444',
      link: 'https://example.com'
    },
    {
      name: 'YawningFace Pomodoro',
      stars: '4,321',
      description: 'A minimalistic Pomodoro timer to boost your productivity.',
      color: '#84CC16',
      link: 'https://example.com'
    },
    {
      name: 'YawningFace Lofi Study',
      stars: '9,876',
      description: 'Lofi music and ambient sounds for a perfect study atmosphere.',
      color: '#3B82F6',
      link: 'https://example.com'
    },
    {
      name: 'SAAS Template',
      stars: '15,432',
      description: 'A modern SAAS template for fast and scalable web application development.',
      color: '#F97316',
      link: 'https://example.com'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Our Open Source</h1>
        <p className="text-gray-400 text-center mb-12">
          We are building the foundation of productivity tools with the community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md transition-transform hover:scale-105 hover:border-gray-500"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                <h2 className="text-xl font-semibold text-white">{project.name}</h2>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Star size={14} fill="currentColor" className="text-yellow-400" />
                <span className="text-sm">{project.stars}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceGrid;
