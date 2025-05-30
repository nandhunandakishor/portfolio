import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  const projectData = [
    {
      title: 'Go Trip - Travel Blog',
      description: 'A fully functional travel blog built with Django, featuring user authentication, blog management, and a Razorpay payment gateway.',
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap'],
      link: 'https://your-live-project.com',
      github: 'https://github.com/your-github/go-trip'
    },
    {
      title: 'CRM Dashboard',
      description: 'A React-based CRM dashboard for managing customer interactions and tracking business analytics with API integration.',
      tech: ['React.js', 'Tailwind CSS', 'Django', 'API'],
      link: 'https://your-live-project.com',
      github: 'https://github.com/your-github/crm-dashboard'
    },
    {
      title: 'CMS Back-End API',
      description: 'A powerful back-end API built using Django Rest Framework to support content management for web applications.',
      tech: ['Django REST', 'PostgreSQL', 'JWT Authentication'],
      link: 'https://your-live-project.com',
      github: 'https://github.com/your-github/cms-backend'
    }
  ];

  return (
    <div 
    id='projects'
    className="bg-gradient-to-br via-black from-gray-900 to-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          My Projects
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Here are some of my best projects showcasing my skills in **full-stack development** and **modern web technologies**.
        </p>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/50">
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-gray-700 rounded-full">{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all">
                  <FaGithub /> GitHub
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
