import React, { useEffect, useState } from 'react';
import { Star, Sparkles } from 'lucide-react';

const initialProjects = [
  {
    name: 'Block',
    repoOwner: 'Yawningface',
    repoName: 'block',
    description: 'A productivity tool to block distracting websites and apps effectively.',
    color: '#8B5CF6',
    link: 'https://github.com/Yawningface/block',
    stars: 0,
  },
  {
    name: 'Browser Start Page',
    repoOwner: 'Yawningface',
    repoName: 'browser-start-page',
    description: 'A customizable new tab page to remove distractions and boost productivity.',
    color: '#F97316',
    link: 'https://github.com/Yawningface/browser-start-page',
    stars: 0,
  },
  {
    name: 'Labs',
    repoOwner: 'Yawningface',
    repoName: 'labs',
    description: 'Innovative productivity experiments.',
    color: '#EF4444',
    link: 'https://github.com/Yawningface/labs',
    stars: 0,
  },
  {
    name: 'Notion Widgets',
    repoOwner: 'Yawningface',
    repoName: 'notion-widgets',
    description: 'Customizable widgets to enhance your Notion dashboard experience.',
    color: '#FF8C42',
    link: 'https://github.com/Yawningface/notion-widgets',
    stars: 0,
  },
  {
    name: 'Pomodoro Timer',
    repoOwner: 'Yawningface',
    repoName: 'pomodoro',
    description: 'A minimalistic Pomodoro timer to boost your productivity.',
    color: '#84CC16',
    link: 'https://github.com/Yawningface/pomodoro',
    stars: 0,
  },
  {
    name: 'Lofi Hip Hop Beats',
    repoOwner: 'Yawningface',
    repoName: 'lofi',
    description: 'Lofi music and ambient sounds for a perfect study atmosphere.',
    color: '#3B82F6',
    link: 'https://github.com/Yawningface/lofi',
    stars: 0,
  },
];

const OpenSourceGrid = () => {
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    const fetchStars = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          try {
            const res = await fetch(
              `https://api.github.com/repos/${project.repoOwner}/${project.repoName}`
            );
            if (res.ok) {
              const data = await res.json();
              return { ...project, stars: data.stargazers_count };
            } else {
              return project;
            }
          } catch (error) {
            console.error(error);
            return project;
          }
        })
      );
      setProjects(updatedProjects);
    };

    fetchStars();
  }, []);

  return (
    <div className="bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="select-none text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-2">
          Our <span className="text-[#ebb305]">Open Source</span>
          <Sparkles size={28} className="text-yellow-400 animate-pulse" />
        </h1>
        <p className="select-none text-gray-400 text-lg mb-12 text-center">
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
                <h2 className="text-xl font-semibold text-white">
                  {project.name}
                </h2>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Star size={14} fill="currentColor" className="text-yellow-400" />
                <span className="text-sm">{project.stars.toLocaleString()}</span>
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
